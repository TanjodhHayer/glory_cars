const features = [
  {
    title: "Extend the Life of Your Vehicle",
    description:
      "Finance repairs, upgrades, or bodywork without breaking the bank. No upfront cost means you get back on the road fast.",
    icon: "🛠️",
  },
  {
    title: "Stress-Free Financing",
    description:
      "No credit checks, no stress. Flexible plans up to 36 months with payments starting at just $42/month.",
    icon: "😌",
  },
  {
    title: "No Hidden Fees",
    description:
      "Competitive interest. Transparent terms. Pay off early anytime with ZERO penalty.",
    icon: "🔍",
  },
  {
    title: "Fast & Secure Approval",
    description:
      "Instant approval process with minimal documentation. All you need is your license, registration, and signed agreement.",
    icon: "⚡",
  },
  {
    title: "Trusted Partner Network",
    description:
      "We partner with certified mechanics and shops you can trust. Your repairs are handled with care, and we pay your trusted mechanic directly so you can focus on what matters—getting back on the road.",
    icon: "🔧🤝",
  },
  

];

const Features = () => {
  return (
    <section
      id="features"
      className="snap-center scroll-mt-40 pt-40 pb-20 min-h-screen lg:pt-36 text-center py-20 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-1">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary dark:text-white mb-20">
          Why Choose Glory Cars?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-gray-800 rounded-2xl p-10 shadow-md hover:shadow-lg transition ${index === features.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;