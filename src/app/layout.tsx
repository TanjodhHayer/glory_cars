import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Glory Auto Hub | Vehicle Repair Financing",
    template: "%s | Glory Auto Hub",
  },
  description:
    "Explore vehicle repair financing with Glory Auto Hub. Contact our team or register your repair shop to begin onboarding.",
  openGraph: {
    siteName: "Glory Auto Hub",
    type: "website",
    locale: "en_CA",
    title: "Glory Auto Hub | Vehicle Repair Financing",
    description: "A way forward for drivers and repair shops.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
