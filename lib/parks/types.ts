import type { ParkHeroCta } from "@/components/ParkHero";
import type { SafariPackage } from "@/components/SafariPricing";
import type { IconFeatureItem } from "@/components/IconFeatureGrid";
import type { WildlifeAnimal } from "@/components/ParkWildlifeSlider";
import type { ChecklistColumn } from "@/components/ParkChecklist";
import type { FaqItem } from "@/components/ParkFaq";
import type { RelatedExperience } from "@/components/ParkRelatedExperiences";

export type Section =
  | {
      type: "hero";
      title: string;
      description?: string;
      video?: string;
      image?: string;
      ctas?: ParkHeroCta[];
    }
  | {
      type: "pricing";
      heading: string;
      description?: string;
      packages: SafariPackage[];
      note?: string;
    }
  | {
      type: "whyVisit";
      heading: string;
      paragraph: string;
      disclaimer?: string;
    }
  | {
      type: "safariFlow";
      heading: string;
      items: IconFeatureItem[];
      columns?: 3 | 4;
    }
  | {
      type: "inclusionsExclusions";
      heading?: string;
      intro?: string;
      inclusions: string[];
      exclusions: string[];
    }
  | {
      type: "wildlifeSlider";
      heading?: string;
      animals: WildlifeAnimal[];
    }
  | {
      type: "infoSection";
      heading: string;
      paragraph: string;
    }
  | {
      type: "checklist";
      heading: string;
      intro?: string;
      columns: ChecklistColumn[];
    }
  | {
      type: "reviews";
    }
  | {
      type: "faq";
      heading?: string;
      intro?: string;
      faqs: FaqItem[];
    }
  | {
      type: "relatedExperiences";
      heading?: string;
      experiences: RelatedExperience[];
    }
  | {
      type: "finalCta";
    };

export type ParkContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  sections: Section[];
};
