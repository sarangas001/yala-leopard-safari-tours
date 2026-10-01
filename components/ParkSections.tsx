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
import IllustratedBlock from "@/components/IllustratedBlock";
import { PACKAGE_ILLUSTRATIONS } from "@/lib/illustrations";
import type { Section } from "@/lib/parks/types";

export default function ParkSections({ sections, parkSlug }: { sections: Section[]; parkSlug?: string }) {
  return (
    <>
      {sections.map((section, i) => {
        const node = renderSection(section, i, parkSlug);
        // Hero and final CTA never get an illustration; the blocks between them
        // get one on every other block (first, third, fifth…), each a different one.
        if (section.type === "hero" || section.type === "finalCta") return node;
        const block = sections.slice(0, i).filter((s) => s.type !== "hero" && s.type !== "finalCta").length;
        const illustration = block % 2 === 0 ? PACKAGE_ILLUSTRATIONS[block / 2] : undefined;
        return illustration ? (
          <IllustratedBlock key={i} {...illustration}>
            {node}
          </IllustratedBlock>
        ) : (
          node
        );
      })}
    </>
  );
}

function renderSection(section: Section, i: number, parkSlug?: string) {
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
      return <Testimonials key={i} illustration={false} />;
    case "faq":
      return <ParkFaq key={i} {...section} />;
    case "relatedExperiences":
      return <ParkRelatedExperiences key={i} {...section} />;
    case "finalCta":
      return <FinalCta key={i} />;
    default:
      return null;
  }
}
