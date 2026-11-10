import { test } from "node:test";
import assert from "node:assert/strict";
import {
  validateContact,
  createContactHandler,
  createRateLimiter,
} from "../src/lib/contact.ts";
const valid = {
  role: "customer",
  name: "Test Driver",
  email: "driver@example.com",
  phone: "",
  message: "Please explain how repair financing works.",
  consent: true,
};
function request(body = valid, headers = {}, raw = false) {
  return new Request("https://www.gloryautohub.ca/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://www.gloryautohub.ca",
      ...headers,
    },
    body: raw ? body : JSON.stringify(body),
  });
}
test("normalizes customer details and ignores injected recipient fields", () => {
  const result = validateContact({
    ...valid,
    name: " Test Driver ",
    to: "attacker@example.com",
    contactName: "not a shop",
  });
  assert.equal(result.data.name, "Test Driver");
  assert.equal(result.data.contactName, "");
  assert.equal("to" in result.data, false);
});
test("rejects malformed types, unknown roles, header injection, missing consent and oversized messages", () => {
  for (const input of [
    null,
    [],
    { ...valid, role: "admin" },
    { ...valid, email: {} },
    { ...valid, name: "Test\r\nBcc: attacker" },
    { ...valid, email: "x@example.com\nBcc:x@y.com" },
    { ...valid, consent: "true" },
    { ...valid, message: "x".repeat(4001) },
  ])
    assert.ok("error" in validateContact(input));
});
test("shops require a business name but not a postal address for an enquiry", () => {
  assert.ok("error" in validateContact({ ...valid, role: "mechanic" }));
  assert.ok(
    "data" in
      validateContact({
        ...valid,
        role: "mechanic",
        contactName: "Test Garage",
      }),
  );
});
test("rate limit blocks repeat attempts and resets after expiry", () => {
  const allow = createRateLimiter(2, 100);
  assert.equal(allow("a", 1000), true);
  assert.equal(allow("a", 1001), true);
  assert.equal(allow("a", 1002), false);
  assert.equal(allow("b", 1002), true);
  assert.equal(allow("a", 1100), true);
});
test("valid form sends exactly once and reports success after delivery", async () => {
  const sent = [];
  const handler = createContactHandler({
    allow: () => true,
    send: async (details) => {
      sent.push(details);
    },
  });
  const response = await handler(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].email, valid.email);
});
test("invalid requests and honeypots never reach email delivery", async () => {
  let deliveries = 0;
  const handler = createContactHandler({
    allow: () => true,
    send: async () => {
      deliveries++;
    },
  });
  assert.equal(
    (await handler(request({}, { Origin: "https://other.example" }))).status,
    403,
  );
  assert.equal(
    (await handler(request(valid, { "Sec-Fetch-Site": "cross-site" }))).status,
    403,
  );
  assert.equal(
    (await handler(request(valid, { "Content-Type": "text/plain" }))).status,
    415,
  );
  assert.equal((await handler(request("{", {}, true))).status, 400);
  assert.equal(
    (await handler(request({ ...valid, message: "x" }))).status,
    400,
  );
  assert.equal(
    (await handler(request({ ...valid, message: "x".repeat(20000) }))).status,
    413,
  );
  assert.equal(
    (await handler(request({ ...valid, website: "spam.example" }))).status,
    200,
  );
  assert.equal(deliveries, 0);
});
test("rate-limited requests include a retry delay and do not send mail", async () => {
  const handler = createContactHandler({
    allow: () => false,
    send: async () => {
      assert.fail("Must not send");
    },
  });
  const response = await handler(request());
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("Retry-After"), "600");
});
test("delivery failure returns a useful message without exposing provider details", async () => {
  const handler = createContactHandler({
    allow: () => true,
    send: async () => {
      throw new Error("private-password");
    },
  });
  const response = await handler(request());
  assert.equal(response.status, 503);
  assert.equal((await response.text()).includes("private-password"), false);
});
