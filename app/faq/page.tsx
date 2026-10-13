import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import FaqHero from "@/components/FaqHero";
import FaqBookingFaqs from "@/components/FaqBookingFaqs";
import FaqPricingFaqs from "@/components/FaqPricingFaqs";
import FaqWildlifeFaqs from "@/components/FaqWildlifeFaqs";
import FaqTransportFaqs from "@/components/FaqTransportFaqs";
import FaqGuestFaqs from "@/components/FaqGuestFaqs";
import FaqCancellationFaqs from "@/components/FaqCancellationFaqs";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata("/faq");

export default function FaqPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <FaqHero />
      <FaqBookingFaqs />
      <FaqPricingFaqs />
      <FaqWildlifeFaqs />
      <FaqTransportFaqs />
      <FaqGuestFaqs />
      <FaqCancellationFaqs />
      <FinalCta />
    </main>
  );
}
