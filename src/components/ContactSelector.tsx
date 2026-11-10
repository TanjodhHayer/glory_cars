import Link from "next/link";
export default function ContactSelector() {
  return (
    <section id="contact" className="section shell contact-strip">
      <div>
        <p className="eyebrow">LET’S TALK</p>
        <h2>
          A question before
          <br />
          your next step?
        </h2>
        <p>Our team can help you understand the process.</p>
      </div>
      <div className="contact-options">
        <Link href="/contactCustomer">
          <span>FOR DRIVERS</span>
          <strong>Ask about repair financing ↗</strong>
        </Link>
        <Link href="/contactMechanic">
          <span>FOR SHOPS</span>
          <strong>Talk to our team ↗</strong>
        </Link>
      </div>
    </section>
  );
}
