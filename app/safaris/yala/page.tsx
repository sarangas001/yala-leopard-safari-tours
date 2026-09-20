import type { Metadata } from "next";
import YalaHero from "@/components/YalaHero";
import YalaPricing from "@/components/YalaPricing";
import YalaWhyVisit from "@/components/YalaWhyVisit";
import YalaSafariFlow from "@/components/YalaSafariFlow";
import YalaInclusionsExclusions from "@/components/YalaInclusionsExclusions";
import YalaPickupInfo from "@/components/YalaPickupInfo";
import YalaWildlifeSlider from "@/components/YalaWildlifeSlider";
import YalaWhatToBring from "@/components/YalaWhatToBring";

export const metadata: Metadata = {
  title: "Yala National Park Safari | Yala Leopard Safari Tours",
  description:
    "Explore Yala National Park with an experienced local wildlife driver in a comfortable 4x4 safari jeep. Half-Day, 7-Hour and Full-Day options available.",
};

export default function YalaSafariPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <YalaHero />
      <YalaPricing />
      <YalaWhyVisit />
      <YalaSafariFlow />
      <YalaInclusionsExclusions />
      <YalaPickupInfo />
      <YalaWildlifeSlider />
      <YalaWhatToBring />
    </main>
  );
}
