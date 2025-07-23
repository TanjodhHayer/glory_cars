import "./globals.css";
import type { Metadata } from "next";
import {Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";

// Initialize fonts correctly
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Glory Cars",
  description: "Vehicle financing made simple",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} h-screen overflow-hidden`}>
        <Navbar />
        <div className="h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
