"use client";

import React, { useState } from "react";

const ContactCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showBookingToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.consent) {
      showBookingToast("Please consent to be contacted.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role: "customer" }),
      });

      if (response.ok) {
        showBookingToast("Message sent! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
        });
      } else {
        const result = await response.json();
        showBookingToast(result.error || "Failed to send the message.");
      }
    } catch (error) {
      console.error(error);
      showBookingToast("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen overflow-y-auto flex flex-col justify-center bg-white dark:bg-gray-950 px-6 pt-36 scroll-mt-36">
      {showToast && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-customRed text-white px-6 py-3 rounded-lg shadow-lg z-50 select-none pointer-events-none animate-fade-in-out"
        >
          {toastMessage}
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Have questions? Contact us and we&apos;ll be happy to help.
        </p>
        <div className="text-lg space-y-2 mb-6">
          <p className="text-gray-700 dark:text-gray-300">
            📞 <strong>Phone:</strong> 1-866-603-6073
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            📧 <strong>Email:</strong> Sales@GloryCars.ca
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-1 text-black"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 text-black placeholder-gray-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-1 text-black"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 text-black placeholder-gray-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-lg font-semibold mb-1 text-black"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              pattern="^[+()0-9\s-]{10,}$"
              title="Please enter a valid phone number with at least 10 digits"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 text-black placeholder-gray-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-1 text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 text-black placeholder-gray-500"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Consent Checkbox */}
          <div className="mb-6 flex items-center gap-2">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="consent"
              className="text-black select-none"
            >
              I consent to be contacted by Glory Cars.
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition flex justify-center items-center gap-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      <footer className="mt-auto text-center text-sm text-black dark:text-gray-300">
        © {new Date().getFullYear()} Glory Cars. All rights reserved.
      </footer>
    </section>
  );
};

export default ContactCustomer;
