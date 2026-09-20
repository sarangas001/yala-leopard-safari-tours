export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string };

export type CategoryKey =
  | "yala"
  | "udawalawe"
  | "bundala"
  | "wildlife"
  | "planning"
  | "photography"
  | "hambantota"
  | "transport"
  | "family";

export type Category = { key: CategoryKey; label: string };

export type BlogArticle = {
  slug: string;
  title: string;
  category: CategoryKey;
  date: string;
  heroImage: string;
  heroAlt: string;
  excerpt: string;
  internalLinkLabel: string;
  internalLinkHref: string;
  blocks: ArticleBlock[];
};

export const CATEGORIES: Category[] = [
  { key: "yala", label: "Yala National Park" },
  { key: "udawalawe", label: "Udawalawe National Park" },
  { key: "bundala", label: "Bundala National Park" },
  { key: "wildlife", label: "Wildlife & Animals" },
  { key: "planning", label: "Safari Planning" },
  { key: "photography", label: "Safari Photography" },
  { key: "hambantota", label: "Hambantota & Cruise Travel" },
  { key: "transport", label: "Sri Lanka Transport" },
  { key: "family", label: "Family Safari" },
];

export function categoryLabel(key: CategoryKey): string {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}
