import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
export const metadata: Metadata = {
  title: "Contact our repair shop team",
  description:
    "Speak with Glory Auto Hub about shop onboarding, repair financing, or support for an existing shop account.",
  alternates: { canonical: "/contactMechanic" },
};
export default function MechanicContactPage() {
  return <ContactPage role="mechanic" />;
}
