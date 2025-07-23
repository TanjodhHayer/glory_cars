const About = () => {
    return (
      <section
        id="about"
        className="snap-start md:snap-center min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-center px-6"
        style={{ scrollMarginTop: '6rem' }} // equivalent to scroll-mt-24
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-10">
            About Glory Cars
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            At Glory Cars, we believe car repairs shouldn't come with stress.
            Our mission is to make auto repair financing simple, fast, and available to everyone — no hoops, no hassles.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            With zero down, instant approval, and flexible payment plans, we help drivers get back on the road without the financial burden. 
            Whether it's everyday maintenance or unexpected repairs, we work directly with your mechanic so you can focus on what matters — driving with confidence
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Join thousands of happy drivers who've found a smarter, easier way to finance their repairs. Glory Cars — Drive your dreams, stress-free.

          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  