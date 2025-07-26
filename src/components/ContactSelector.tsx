"use client";

import { useRouter } from "next/navigation";

export default function ContactSelector() {
  const router = useRouter();

  const CardButton = ({
    onClick,
    imgSrc,
    altText,
    title,
    buttonText,
  }: {
    onClick: () => void;
    imgSrc: string;
    altText: string;
    title: string;
    buttonText: string;
  }) => (
    <button
      onClick={onClick}
      type="button"
      className="relative rounded-3xl w-full md:w-1/2 max-w-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform select-none focus:outline-none focus:ring-4 focus:ring-primary"
      style={{ minHeight: "400px" }}
      aria-label={title}
    >
      <img
        src={imgSrc}
        alt={altText}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none" />
      <div className="relative flex flex-col items-center justify-center h-full text-white px-8 pointer-events-none">
        <h3 className="text-4xl font-semibold mb-6 text-center">{title}</h3>
        <span className="bg-secondary text-white px-16 py-5 rounded-full cursor-default text-xl font-semibold">
          {buttonText}
        </span>
      </div>
    </button>
  );

  return (
    <section
      id="contact"
      className="snap-start md:snap-center min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-6 pt-30 scroll-mt-30"
    >
      <h2 className="text-4xl font-bold mb-16 text-secondary text-center">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-16 justify-center w-full max-w-7xl">
        <CardButton
          onClick={() => router.push("/contactCustomer")}
          imgSrc="/customer.png"
          altText="Customer contacting Glory Cars"
          title="I'm a Customer"
          buttonText="Contact Us"
        />

        <CardButton
          onClick={() => router.push("/contactMechanic")}
          imgSrc="/mechanic.png"
          altText="Service provider contacting Glory Cars"
          title="I'm a Service Provider"
          buttonText="Contact Us"
        />
      </div>
    </section>
  );
}
