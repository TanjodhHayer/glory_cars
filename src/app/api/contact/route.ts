import { createHash } from "node:crypto";
import nodemailer from "nodemailer";
import { createContactHandler, createRateLimiter } from "@/lib/contact";

export const runtime = "nodejs";
const allowAttempt = createRateLimiter();

export const POST = createContactHandler({
  allow(request) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    return allowAttempt(createHash("sha256").update(ip).digest("hex"));
  },
  async send(details) {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to =
      (details.role === "mechanic"
        ? process.env.CONTACT_RECEIVER_MECHANIC_EMAIL
        : process.env.CONTACT_RECEIVER_CUSTOMER_EMAIL) ||
      process.env.CONTACT_RECEIVER_EMAIL;
    if (!user || !pass || !to)
      throw new Error("Contact delivery is not configured.");
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
    await transport.sendMail({
      from: { name: "Glory Auto Hub", address: user },
      to,
      replyTo: { name: details.name, address: details.email },
      subject:
        details.role === "mechanic"
          ? "Glory Auto Hub — shop enquiry"
          : "Glory Auto Hub — customer enquiry",
      text: [
        "New Glory Auto Hub website enquiry",
        "Enquiry type: " + details.role,
        "Name: " + details.name,
        ...(details.contactName ? ["Shop: " + details.contactName] : []),
        "Email: " + details.email,
        "Phone: " + (details.phone || "Not provided"),
        "",
        details.message,
        "",
        "Contact consent: provided",
      ].join("\n"),
    });
  },
});
