import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/ContactSelector";
import About from "@/components/About";
import Faq from "@/components/Faq";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
