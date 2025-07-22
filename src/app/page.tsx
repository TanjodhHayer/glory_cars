import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import About from "@/components/About";

const Home: React.FC = () => {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <Features />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
