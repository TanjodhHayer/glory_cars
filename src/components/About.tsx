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
            At Glory Cars, we believe car repairs should not break your budget or your peace of mind.
            Our mission is to make auto financing fast, easy, and accessible for everyone—regardless of credit history.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            With no money down, no credit checks, and instant approval, we help drivers get the repairs they need with
            monthly payments they can actually afford. Whether it is essential maintenance or major bodywork, we work directly
            with your mechanic so you can just drive—stress-free.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Join thousands of satisfied customers who have chosen smarter car financing with Glory Cars.
            Drive your dreams today.
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  