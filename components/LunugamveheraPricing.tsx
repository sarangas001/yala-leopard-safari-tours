import SafariPricing, { type SafariPackage } from "@/components/SafariPricing";

const LUNUGAMVEHERA_PACKAGES: SafariPackage[] = [
  {
    name: "Half-Day Private Safari",
    time: "To be confirmed",
    duration: "Approx. 4–5 hours",
    includes: "Breakfast and water",
    tiers: [
      { group: "1 Person", price: "$100" },
      { group: "2 Persons", price: "$65 pp" },
      { group: "3 Persons", price: "$50 pp" },
      { group: "4 Persons", price: "$43 pp" },
      { group: "5 Persons", price: "$39 pp" },
      { group: "6 Persons", price: "$37 pp" },
    ],
  },
  {
    name: "7-Hour Private Safari",
    time: "To be confirmed",
    duration: "7 hours",
    includes: "Breakfast and water",
    tiers: [
      { group: "1 Person", price: "$120" },
      { group: "2 Persons", price: "$75 pp" },
      { group: "3 Persons", price: "$60 pp" },
      { group: "4 Persons", price: "$53 pp" },
      { group: "5 Persons", price: "$48 pp" },
      { group: "6 Persons", price: "$45 pp" },
    ],
  },
  {
    name: "Full-Day Private Safari",
    time: "To be confirmed",
    duration: "Approx. 13 hours",
    includes: "Breakfast, lunch and water",
    tiers: [
      { group: "1 Person", price: "$157" },
      { group: "2 Persons", price: "$97 pp" },
      { group: "3 Persons", price: "$77 pp" },
      { group: "4 Persons", price: "$67 pp" },
      { group: "5 Persons", price: "$61 pp" },
      { group: "6 Persons", price: "$57 pp" },
    ],
  },
];

export default function LunugamveheraPricing() {
  return (
    <SafariPricing
      heading="Choose Your Lunugamvehera Safari"
      description="Lunugamvehera tours are currently planned as private tours only."
      packages={LUNUGAMVEHERA_PACKAGES}
      note="Maximum capacity: up to 7 passengers per jeep."
    />
  );
}
