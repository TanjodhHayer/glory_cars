export type ContactRole = "customer" | "mechanic";
export type ContactDetails = {
  role: ContactRole;
  name: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
  consent: true;
};
export type ContactValidation =
  { data: ContactDetails } | { error: string } | { spam: true };
const MAX_BODY_BYTES = 16_384;
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

export function validateContact(input: unknown): ContactValidation {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { error: "Please check the form and try again." };
  const value = input as Record<string, unknown>;
  if (typeof value.website === "string" && value.website.trim())
    return { spam: true };
  if (value.role !== "customer" && value.role !== "mechanic")
    return { error: "Choose a valid enquiry type." };
  const text = (key: string) =>
    typeof value[key] === "string" ? value[key].trim() : "";
  const name = text("name"),
    contactName = text("contactName"),
    email = text("email"),
    phone = text("phone"),
    message = text("message");
  if (name.length < 2 || name.length > 100 || /[\r\n\x00-\x1f]/.test(name))
    return { error: "Enter your name (2–100 characters)." };
  if (!EMAIL.test(email) || email.length > 254)
    return { error: "Enter a valid email address." };
  if (
    value.role === "mechanic" &&
    (contactName.length < 2 ||
      contactName.length > 150 ||
      /[\r\n\x00-\x1f]/.test(contactName))
  )
    return { error: "Enter your shop name (2–150 characters)." };
  if (
    phone &&
    (!/^[+()0-9 .-]{7,30}$/.test(phone) || phone.replace(/\D/g, "").length < 7)
  )
    return { error: "Enter a valid phone number or leave it blank." };
  if (message.length < 10 || message.length > 4000 || message.includes("\0"))
    return { error: "Enter a message between 10 and 4,000 characters." };
  if (value.consent !== true)
    return { error: "Please agree to be contacted about your enquiry." };
  return {
    data: {
      role: value.role,
      name,
      contactName: value.role === "mechanic" ? contactName : "",
      email,
      phone,
      message,
      consent: true,
    },
  };
}

// An instance-local fallback, not a distributed anti-abuse system.
// Configure Vercel WAF rate limits for production enforcement across instances.
export function createRateLimiter(limit = 5, windowMs = 600_000) {
  const attempts = new Map<string, { count: number; expires: number }>();
  return (key: string, now = Date.now()) => {
    for (const [storedKey, value] of attempts)
      if (value.expires <= now) attempts.delete(storedKey);
    const current = attempts.get(key);
    if (current) {
      if (current.count >= limit) return false;
      current.count++;
      return true;
    }
    if (attempts.size >= 5000) return false;
    attempts.set(key, { count: 1, expires: now + windowMs });
    return true;
  };
}

export function createContactHandler(dependencies: {
  send: (details: ContactDetails) => Promise<void>;
  allow: (request: Request) => boolean;
}) {
  return async function handle(request: Request): Promise<Response> {
    const json = (body: object, status: number) =>
      Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
    const origin = request.headers.get("origin");
    if (
      (origin && origin !== new URL(request.url).origin) ||
      request.headers.get("sec-fetch-site") === "cross-site"
    )
      return json({ error: "Please send the form from this website." }, 403);
    if (
      request.headers
        .get("content-type")
        ?.split(";")[0]
        .trim()
        .toLowerCase() !== "application/json"
    )
      return json({ error: "Unsupported request format." }, 415);
    if (!dependencies.allow(request))
      return Response.json(
        {
          error:
            "Too many attempts. Please wait 10 minutes or contact us by phone.",
        },
        {
          status: 429,
          headers: { "Retry-After": "600", "Cache-Control": "no-store" },
        },
      );
    let input: unknown;
    try {
      const reader = request.body?.getReader();
      if (!reader) return json({ error: "Please complete the form." }, 400);
      const chunks: Uint8Array[] = [];
      let size = 0;
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          size += value.byteLength;
          if (size > MAX_BODY_BYTES) {
            await reader.cancel();
            return json({ error: "Your message is too long." }, 413);
          }
          chunks.push(value);
        }
      } finally {
        reader.releaseLock();
      }
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.length;
      }
      input = JSON.parse(new TextDecoder().decode(bytes));
    } catch {
      return json({ error: "Please check the form and try again." }, 400);
    }
    const validated = validateContact(input);
    if ("spam" in validated) return json({ success: true }, 200);
    if ("error" in validated) return json({ error: validated.error }, 400);
    try {
      await dependencies.send(validated.data);
      return json({ success: true }, 200);
    } catch {
      // Do not log message contents, email addresses, or provider errors containing credentials.
      console.error("Contact delivery failed.");
      return json(
        {
          error:
            "We couldn’t send your message. Your details are still in the form. Please try again later or email support@gloryautohub.ca.",
        },
        503,
      );
    }
  };
}
