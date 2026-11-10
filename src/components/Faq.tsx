import { PORTAL_URL } from "@/lib/site";
const questions = [
  [
    "Is financing automatically approved?",
    "No. Applications are reviewed, and financing is subject to approval. Review the terms provided to you before accepting an agreement.",
  ],
  [
    "Does contacting you create an application?",
    "No. The contact form sends an enquiry to our team. It does not submit a loan application or create a shop account.",
  ],
  [
    "How does a repair shop get started?",
    "Register your shop on the website. We’ll follow up about onboarding, the shop agreement, and approval. Registration alone does not activate access or start a trial.",
  ],
  [
    "Can I register through the mobile app?",
    "The mobile app is for existing, approved shop accounts. Register on the website, then use the same account to sign in to the app. Subscription management stays on the website.",
  ],
];
export default function Faq() {
  return (
    <section
      className="faq-section shell section"
      aria-labelledby="faq-heading"
    >
      <div>
        <p className="eyebrow">GOOD TO KNOW</p>
        <h2 id="faq-heading">
          A few questions,
          <br />
          answered.
        </h2>
        <a className="text-link" href={PORTAL_URL + "/signup"}>
          Register your shop ↗
        </a>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
