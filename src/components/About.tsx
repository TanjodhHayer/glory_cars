import { PORTAL_URL } from "@/lib/site";
export default function About() {
  return (
    <section id="for-shops" className="shop-section">
      <div className="shell shop-grid">
        <div>
          <p className="eyebrow">FOR REPAIR SHOPS</p>
          <h2>
            Support your customers.
            <br />
            Keep your shop moving.
          </h2>
          <p className="lead">
            Bring repair financing into your customer conversations. Use your
            Glory Auto Hub shop account to manage applications and documents in
            one place.
          </p>
          <div className="actions">
            <a className="button" href={PORTAL_URL + "/signup"}>
              Register your shop ↗
            </a>
            <a className="text-link" href={PORTAL_URL + "/login"}>
              Already registered? Sign in
            </a>
          </div>
        </div>
        <div className="shop-card">
          <p className="eyebrow">YOUR SHOP ACCOUNT</p>
          <h3>
            Start online.
            <br />
            Work from your phone.
          </h3>
          <ul>
            <li>
              <strong>Register on the website</strong>
              <span>Send your shop details and create your login.</span>
            </li>
            <li>
              <strong>Complete onboarding</strong>
              <span>
                We’ll contact you about the agreement and approval steps.
                Registration does not activate access or start a trial.
              </span>
            </li>
            <li>
              <strong>Sign in to the mobile app</strong>
              <span>
                Approved shops use the same account. Registration and
                subscription management stay on the website.
              </span>
            </li>
          </ul>
          <a href="/contactMechanic" className="text-link">
            Questions about joining? Contact us ↗
          </a>
        </div>
      </div>
    </section>
  );
}
