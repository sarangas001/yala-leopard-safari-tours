import ParkHero from "@/components/ParkHero";
import SafariPricing from "@/components/SafariPricing";
import ParkWhyVisit from "@/components/ParkWhyVisit";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import ParkInclusionsExclusions from "@/components/ParkInclusionsExclusions";
import ParkWildlifeSlider from "@/components/ParkWildlifeSlider";
import ParkInfoSection from "@/components/ParkInfoSection";
import ParkChecklist from "@/components/ParkChecklist";
import ParkFaq from "@/components/ParkFaq";
import ParkRelatedExperiences from "@/components/ParkRelatedExperiences";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import type { Section } from "@/lib/parks/types";

export default function ParkSections({ sections, parkSlug }: { sections: Section[]; parkSlug?: string }) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.type) {
          case "hero":
            return <ParkHero key={i} {...section} />;
          case "pricing":
            return <SafariPricing key={i} {...section} parkSlug={parkSlug} />;
          case "whyVisit":
            return <ParkWhyVisit key={i} {...section} />;
          case "safariFlow":
            return <IconFeatureGrid key={i} {...section} />;
          case "inclusionsExclusions":
            return <ParkInclusionsExclusions key={i} {...section} />;
          case "wildlifeSlider":
            return <ParkWildlifeSlider key={i} {...section} />;
          case "infoSection":
            return <ParkInfoSection key={i} {...section} />;
          case "checklist":
            return <ParkChecklist key={i} {...section} />;
          case "reviews":
            return <Testimonials key={i} />;
          case "faq":
            return <ParkFaq key={i} {...section} />;
          case "relatedExperiences":
            return <ParkRelatedExperiences key={i} {...section} />;
          case "finalCta":
            return <FinalCta key={i} />;
          default:
            return null;
        }
      })}
    </>
  );
}
