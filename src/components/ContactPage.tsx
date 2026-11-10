import Link from "next/link";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PORTAL_URL } from "@/lib/site";
import type { ContactRole } from "@/lib/contact";
export default function ContactPage({ role }: { role: ContactRole }) {
  const shop = role === "mechanic";
  return (
    <section className="contact-page shell">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} aria-hidden="true" /> Back to home
      </Link>
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">{shop ? "FOR REPAIR SHOPS" : "FOR DRIVERS"}</p>
          <h1>
            {shop ? (
              <>
                Let’s support
                <br />
                your customers.
              </>
            ) : (
              <>
                Your next step
                <br />
                starts here.
              </>
            )}
          </h1>
          <p className="lead">
            {shop
              ? "Ask about bringing Glory Auto Hub repair financing to your shop, or get help with your existing account."
              : "Have a question about vehicle repair financing? Tell us what you need and our team will help you understand the process."}
          </p>
          <div className="contact-details">
            <a href="tel:+16049539854">
              <Phone size={19} aria-hidden="true" />
              <span>
                <small>CALL US</small>604-953-9854
              </span>
            </a>
            <a href="mailto:support@gloryautohub.ca">
              <Mail size={19} aria-hidden="true" />
              <span>
                <small>EMAIL US</small>support@gloryautohub.ca
              </span>
            </a>
            <div>
              <MapPin size={19} aria-hidden="true" />
              <span>
                <small>OUR OFFICE</small>Unit 111C, 8056 King George Blvd
                <br />
                Surrey, BC V3W 5B5
              </span>
            </div>
          </div>
          {shop ? (
            <aside className="contact-aside">
              <h2>Ready to join?</h2>
              <p>
                Register on the website to begin onboarding. Our team will
                follow up about the agreement and approval steps.
              </p>
              <a className="button" href={PORTAL_URL + "/signup"}>
                Register your shop ↗
              </a>
              <a className="text-link" href={PORTAL_URL + "/login"}>
                Existing shop? Sign in ↗
              </a>
            </aside>
          ) : (
            <aside className="contact-aside">
              <h2>Own a repair shop?</h2>
              <p>Find out how to offer financing through Glory Auto Hub.</p>
              <Link className="text-link" href="/contactMechanic">
                Speak to our shop team ↗
              </Link>
            </aside>
          )}
        </div>
        <ContactForm role={role} />
      </div>
    </section>
  );
}
