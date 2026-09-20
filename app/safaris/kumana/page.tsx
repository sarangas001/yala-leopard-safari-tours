import type { Metadata } from "next";
import KumanaHero from "@/components/KumanaHero";
import KumanaPricing from "@/components/KumanaPricing";
import KumanaWhyVisit from "@/components/KumanaWhyVisit";
import KumanaWildlifeSlider from "@/components/KumanaWildlifeSlider";
import KumanaSafariFlow from "@/components/KumanaSafariFlow";
import KumanaInclusionsExclusions from "@/components/KumanaInclusionsExclusions";
import KumanaEntranceInfo from "@/components/KumanaEntranceInfo";
import KumanaBestTime from "@/components/KumanaBestTime";
import KumanaPhotographyTips from "@/components/KumanaPhotographyTips";
import KumanaWhatToBring from "@/components/KumanaWhatToBring";
import Testimonials from "@/components/Testimonials";
import KumanaFaq from "@/components/KumanaFaq";
import KumanaRelatedExperiences from "@/components/KumanaRelatedExperiences";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Kumana National Park Safari | Yala Leopard Safari Tours",
  description:
    "Discover Sri Lanka's most important bird nesting sanctuary with an experienced local safari driver in a private 4x4 jeep.",
};

export default function KumanaSafariPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <KumanaHero />
      <KumanaPricing />
      <KumanaWhyVisit />
      <KumanaWildlifeSlider />
      <KumanaSafariFlow />
      <KumanaInclusionsExclusions />
      <KumanaEntranceInfo />
      <KumanaBestTime />
      <KumanaPhotographyTips />
      <KumanaWhatToBring />
      <Testimonials />
      <KumanaFaq />
      <KumanaRelatedExperiences />
      <FinalCta />
    </main>
  );
}
