const Hero = () => {
    return (
      <section className="text-center py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Easy <span className="text-primary">Loan</span>. Easy <span className="text-primary">Payments</span>. Easy <span className="text-primary">Life</span>.
        </h1>

        <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto">
            No Money Down | Instant Approval | No Credit Check Required
        </p>

        <button className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-red-700 transition">
            Get Started Now
        </button>

      </section>
    );
  };
  
  export default Hero;
  