import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import ContactMapSection from "@/components/ContactMapSection";
import ContactFaqPreview from "@/components/ContactFaqPreview";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata("/contact");

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
