import type { Metadata } from "next";
import UdawalaweHero from "@/components/UdawalaweHero";
import UdawalawePricing from "@/components/UdawalawePricing";
import UdawalaweWhyVisit from "@/components/UdawalaweWhyVisit";
import UdawalaweSafariFlow from "@/components/UdawalaweSafariFlow";
import UdawalaweInclusionsExclusions from "@/components/UdawalaweInclusionsExclusions";
import UdawalaweWildlifeSlider from "@/components/UdawalaweWildlifeSlider";
import UdawalaweWhatToBring from "@/components/UdawalaweWhatToBring";
import Testimonials from "@/components/Testimonials";
import UdawalaweFaq from "@/components/UdawalaweFaq";
import UdawalaweRelatedExperiences from "@/components/UdawalaweRelatedExperiences";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Udawalawe National Park Safari | Yala Leopard Safari Tours",
  description:
    "Explore the open grasslands, reservoir landscapes and elephant-rich habitats of Udawalawe National Park with an experienced local safari driver in a private 4x4 jeep.",
};

export default function UdawalaweSafariPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <UdawalaweHero />
      <UdawalawePricing />
      <UdawalaweWhyVisit />
      <UdawalaweSafariFlow />
      <UdawalaweInclusionsExclusions />
      <UdawalaweWildlifeSlider />
      <UdawalaweWhatToBring />
      <Testimonials />
      <UdawalaweFaq />
      <UdawalaweRelatedExperiences />
      <FinalCta />
    </main>
  );
}
