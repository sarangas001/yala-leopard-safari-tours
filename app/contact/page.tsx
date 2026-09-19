import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import ContactMapSection from "@/components/ContactMapSection";
import ContactFaqPreview from "@/components/ContactFaqPreview";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Contact | Yala Leopard Safari Tours",
  description:
    "Contact our team for help choosing a safari, arranging pickup, coordinating a Hambantota cruise visit or planning private transport.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <ContactHero />
      <ContactFormSection />
      <ContactMapSection />
      <ContactFaqPreview />
      <FinalCta />
    </main>
  );
}
