import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
export const metadata: Metadata = {
  title: "Contact us about repair financing",
  description:
    "Ask Glory Auto Hub about vehicle repair financing. Contact our team by phone, email, or enquiry form.",
  alternates: { canonical: "/contactCustomer" },
};
export default function CustomerContactPage() {
  return <ContactPage role="customer" />;
}
