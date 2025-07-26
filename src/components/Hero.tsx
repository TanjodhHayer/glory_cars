const steps = [
  {
    title: "Get a Quote",
    description: "Ask your mechanic or shop for a repair quote. No commitment needed.",
    icon: "📋",
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
  className="scroll-mt-20 md:scroll-mt-40 pt-36 md:pt-40 pb-20 snap-start min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center"
>
  <div className="w-full max-w-7xl px-4 md:px-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
    
    {/* Left Side: Hero Text */}
    <div className="md:w-1/2 max-w-xl text-center md:text-left md:pr-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-6 leading-snug tracking-tight">
        <div className="flex justify-center md:justify-start gap-4">
          <span>Easy</span>
          <span className="text-primary">Loan.</span>
        </div>
        <div className="flex justify-center md:justify-start gap-4">
          <span>Easy</span>
          <span className="text-primary">Payments.</span>
        </div>
        <div className="flex justify-center md:justify-start gap-4">
          <span>Easy</span>
          <span className="text-primary">Life.</span>
        </div>
      </h1>

      <p className="text-lg md:text-xl text-secondary max-w-md mx-auto md:mx-0 mb-8">
        No Money Down | Instant Approval | No Credit Check Required
      </p>

      <div className="w-full flex justify-center md:justify-start">
        <a href="#contact">
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300">
            Get Started Now
          </button>
        </a>
      </div>

    </div>

    {/* Right Side: Steps close to screen edge */}
    <div className="md:w-1/2 w-full flex justify-center md:justify-end">
      <div className="max-w-sm flex flex-col space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
          >
            <div className="text-5xl">{step.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {step.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


  );
};

export default Hero;
