"use client";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { PORTAL_URL } from "@/lib/site";
import type { ContactRole } from "@/lib/contact";

export default function ContactForm({ role }: { role: ContactRole }) {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null,
  );
  const submitting = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    submitting.current = true;
    setBusy(true);
    setResult(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(30_000),
        body: JSON.stringify({
          role,
          name: fields.get("name"),
          contactName: fields.get("contactName"),
          email: fields.get("email"),
          phone: fields.get("phone"),
          message: fields.get("message"),
          website: fields.get("website"),
          consent: fields.get("consent") === "on",
        }),
      });
      const data = await response.json();
      if (!response.ok || data.success !== true)
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "We couldn’t send your message. Please try again.",
        );
      form.reset();
      setResult({
        ok: true,
        message:
          "Message sent. Our team will follow up using the contact details you provided.",
      });
    } catch (error) {
      setResult({
        ok: false,
        message:
          error instanceof Error &&
          error.name !== "TimeoutError" &&
          error.name !== "TypeError"
            ? error.message
            : "We couldn’t confirm delivery. Please try again later or contact us by phone. Your message is still in the form.",
      });
    } finally {
      submitting.current = false;
      setBusy(false);
      requestAnimationFrame(() => feedback.current?.focus());
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-busy={busy}>
      <div className="form-heading">
        <h2>Send us a message</h2>
        <p>Fields marked * are required.</p>
      </div>
      {result && (
        <div
          ref={feedback}
          tabIndex={-1}
          role={result.ok ? "status" : "alert"}
          className={"form-feedback " + (result.ok ? "success" : "error")}
        >
          {result.message}
        </div>
      )}
      <fieldset disabled={busy}>
        <legend className="sr-only">Your contact details</legend>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Your name *</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              placeholder="Full name"
            />
          </div>
          {role === "mechanic" && (
            <div className="field">
              <label htmlFor="contactName">Shop name *</label>
              <input
                id="contactName"
                name="contactName"
                autoComplete="organization"
                required
                minLength={2}
                maxLength={150}
                placeholder="Business name"
              />
            </div>
          )}
          <div className="field">
            <label htmlFor="email">Email address *</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
            />
          </div>
          <div className="field">
            <label htmlFor="phone">
              Phone number <span>(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              placeholder="604-555-0123"
            />
          </div>
          <div className="field full-width">
            <label htmlFor="message">How can we help? *</label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={4000}
              rows={6}
              aria-describedby="message-help"
              placeholder={
                role === "mechanic"
                  ? "Tell us about your shop and what you’d like to know."
                  : "Tell us what you’d like to know about repair financing."
              }
            />
            <p className="field-help" id="message-help">
              Please leave out banking details, identity documents, and other
              sensitive information. This is an enquiry, not a financing
              application.
            </p>
          </div>
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="consent-row">
          <input id="consent" name="consent" type="checkbox" required />
          <label htmlFor="consent">
            I agree that Glory Auto Hub may contact me about this enquiry.{" "}
            <a
              href={PORTAL_URL + "/privacy"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the privacy policy (new tab).
            </a>
          </label>
        </div>
        <button className="button" type="submit" disabled={busy}>
          {busy ? "Sending your message…" : "Send message"}
        </button>
      </fieldset>
    </form>
  );
}
