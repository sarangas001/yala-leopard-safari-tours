export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalPage = {
  slug: string;
  title: string;
  metaDescription: string;
  website: string;
  brand: string;
  operator: string;
  lastUpdated: string;
  draftNotice: string;
  sections: LegalSection[];
};
