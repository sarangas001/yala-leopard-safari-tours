import type { Metadata } from "next";
import LunugamveheraHero from "@/components/LunugamveheraHero";
import LunugamveheraPricing from "@/components/LunugamveheraPricing";
import LunugamveheraWhyVisit from "@/components/LunugamveheraWhyVisit";
import LunugamveheraSafariFlow from "@/components/LunugamveheraSafariFlow";
import LunugamveheraInclusionsExclusions from "@/components/LunugamveheraInclusionsExclusions";
import LunugamveheraEntranceInfo from "@/components/LunugamveheraEntranceInfo";
import LunugamveheraWildlifeSlider from "@/components/LunugamveheraWildlifeSlider";
import LunugamveheraBestTime from "@/components/LunugamveheraBestTime";
import LunugamveheraWhatToBring from "@/components/LunugamveheraWhatToBring";
import Testimonials from "@/components/Testimonials";
import LunugamveheraFaq from "@/components/LunugamveheraFaq";
import LunugamveheraRelatedExperiences from "@/components/LunugamveheraRelatedExperiences";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Lunugamvehera National Park Safari | Yala Leopard Safari Tours",
  description:
    "Explore an important elephant corridor connecting Yala and Udawalawe National Parks, built around the Lunugamvehera reservoir, with an experienced local safari driver in a private 4x4 jeep.",
};

export default function LunugamveheraSafariPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <LunugamveheraHero />
      <LunugamveheraPricing />
      <LunugamveheraWhyVisit />
      <LunugamveheraSafariFlow />
      <LunugamveheraInclusionsExclusions />
      <LunugamveheraEntranceInfo />
      <LunugamveheraWildlifeSlider />
      <LunugamveheraBestTime />
      <LunugamveheraWhatToBring />
      <Testimonials />
      <LunugamveheraFaq />
      <LunugamveheraRelatedExperiences />
      <FinalCta />
    </main>
  );
}
