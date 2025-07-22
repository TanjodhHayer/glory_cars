const steps = [
  {
    title: "Get a Quote",
    description: "Ask your mechanic or shop for a repair quote. No commitment needed.",
    icon: "📋",
  },
  {
    title: "Apply Online",
    description: "Use our quick and simple form; no credit check required.",
    icon: "🖥️",
  },
  {
    title: "Get Approved Instantly",
    description: "Instant decision — no waiting around.",
    icon: "✔️",
  },
  {
    title: "Drive Now, Pay Later",
    description: "Your mechanic gets paid immediately. You pay monthly from just $42/month.",
    icon: "🚗",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="snap-center scroll-mt-40 pt-40 pb-20 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 flex flex-col justify-center"

    >

    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="inline-block text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-1 leading-snug tracking-tight">
          <div className="flex gap-2">
            <span>Easy</span>
            <span className="text-primary">Loan.</span>
          </div>
          <div className="flex gap-2">
            <span>Easy</span>
            <span className="text-primary">Payments.</span>
          </div>
          <div className="flex gap-2">
            <span>Easy</span>
            <span className="text-primary">Life.</span>
          </div>
        </h1>
      </div>

      <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto mb-8 mt-6">
        No Money Down | Instant Approval | No Credit Check Required | First Payment Withdrawn in 2 Weeks
      </p>



        <a href="#contact">
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300">
            Get Started Now
          </button>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-5">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;