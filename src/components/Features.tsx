const steps = [
  [
    "Start with your repair",
    "Ask your repair shop for a quote and talk to us about financing options.",
  ],
  [
    "Review your options",
    "Complete the application with your shop. We review the details and explain the available terms.",
  ],
  [
    "Plan the next step",
    "If approved, review and accept your agreement before moving ahead with your repair financing.",
  ],
];
export default function Features() {
  return (
    <section id="how-it-works" className="section shell">
      <div className="section-heading">
        <p className="eyebrow">A CLEARER PROCESS</p>
        <h2>
          Three steps toward
          <br />
          getting back on the road.
        </h2>
      </div>
      <div className="steps">
        {steps.map(([title, description], index) => (
          <article className="step" key={title}>
            <span className="step-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
