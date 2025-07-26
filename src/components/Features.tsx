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
      "No credit checks. No hassle. Flexible payment plans for up to 36 months — making it easier than ever to get what you need, when you need it.",
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
      "Get approved in minutes — no lengthy forms or unnecessary info. Just the basics to get you movin g, with your privacy fully protected",
    icon: "⚡",
  },
  {
    title: "You're in Good Hands",
    description:
      "We partner with certified, trustworthy mechanics who care about your ride as much as you do. Quality repairs, done right — so you can hit the road with total peace of mind.",
    icon: "🔧🤝",
  },
  

];

const Features = () => {
  return (
    <section
      id="features"
      className="snap-start md:snap-center scroll-mt-40  min-h-screen lg:pt-36 text-center py-20 bg-white dark:bg-gray-950 px-6 pt-16 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-1">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary dark:text-white mb-10">
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