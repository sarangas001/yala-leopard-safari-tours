import type { Metadata } from "next";
import BundalaHero from "@/components/BundalaHero";
import BundalaPricing from "@/components/BundalaPricing";
import BundalaWhyVisit from "@/components/BundalaWhyVisit";
import BundalaWildlifeSlider from "@/components/BundalaWildlifeSlider";
import BundalaSafariFlow from "@/components/BundalaSafariFlow";
import BundalaInclusionsExclusions from "@/components/BundalaInclusionsExclusions";
import BundalaEntranceInfo from "@/components/BundalaEntranceInfo";
import BundalaBestTime from "@/components/BundalaBestTime";
import BundalaPhotographyTips from "@/components/BundalaPhotographyTips";
import BundalaWhatToBring from "@/components/BundalaWhatToBring";
import Testimonials from "@/components/Testimonials";
import BundalaFaq from "@/components/BundalaFaq";
import BundalaRelatedExperiences from "@/components/BundalaRelatedExperiences";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Bundala National Park Safari | Yala Leopard Safari Tours",
  description:
    "Discover the wetlands, lagoons, coastal habitats and remarkable birdlife of Bundala National Park with an experienced local safari driver in a private 4x4 jeep.",
};

export default function BundalaSafariPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <BundalaHero />
      <BundalaPricing />
      <BundalaWhyVisit />
      <BundalaWildlifeSlider />
      <BundalaSafariFlow />
      <BundalaInclusionsExclusions />
      <BundalaEntranceInfo />
      <BundalaBestTime />
      <BundalaPhotographyTips />
      <BundalaWhatToBring />
      <Testimonials />
      <BundalaFaq />
      <BundalaRelatedExperiences />
      <FinalCta />
    </main>
  );
}
