const features = [
    {
      title: "Extend the Life of Your Vehicle",
      description: "Finance major repairs, bodywork, tires, or upgrades with zero upfront cost.",
      icon: "🛠️",
    },
    {
      title: "No Stress. No Hassle.",
      description: "We work directly with your mechanic. No credit check. Instant decisions.",
      icon: "😌",
    },
    {
      title: "Simple Payments",
      description: "Spread your cost over 12 to 36 months. No hidden fees or penalties.",
      icon: "💳",
    },
  ];
  
  const Features = () => {
    return (
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-white mb-12">
            Why Choose Us?
        </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  