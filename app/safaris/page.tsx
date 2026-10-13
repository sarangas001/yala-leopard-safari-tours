import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SafariHero from "@/components/SafariHero";
import SafariParkCards from "@/components/SafariParkCards";
import SafariMoreServices from "@/components/SafariMoreServices";
import SafariDurations from "@/components/SafariDurations";
import ParkChooserFaq from "@/components/ParkChooserFaq";
import SafariInclusions from "@/components/SafariInclusions";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata("/safaris");

export default function SafarisPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <SafariHero />
      <SafariParkCards />
      <SafariMoreServices />
      <SafariDurations />
      <ParkChooserFaq />
      <SafariInclusions />
      <FinalCta />
    </main>
  );
}
