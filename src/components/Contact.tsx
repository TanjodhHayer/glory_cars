const Contact = () => {
    return (
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Have questions? Contact us and we’ll be happy to help.
          </p>
          <div className="text-lg space-y-2">
            <p>📞 <strong>Phone:</strong> (555) 123-4567</p>
            <p>📧 <strong>Email:</strong> support@glorycars.ca</p>
            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-full hover:bg-red-700 transition">
                Business Login
            </button>

          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  