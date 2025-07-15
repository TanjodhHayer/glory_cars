const steps = [
    {
      title: "1. Get a Quote",
      description: "Ask your mechanic or shop for a repair quote. No commitment needed.",
      icon: "📋",
    },
    {
      title: "2. Apply Online",
      description: "Use our quick and simple form — no credit check required.",
      icon: "🖥️",
    },
    {
      title: "3. Get Approved Instantly",
      description: "We review your info and provide approval on the spot.",
      icon: "⚡",
    },
    {
      title: "4. Pay Monthly",
      description: "Your mechanic gets paid right away. You pay over time.",
      icon: "📆",
    },
  ];
  
  const HowItWorks = () => {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  