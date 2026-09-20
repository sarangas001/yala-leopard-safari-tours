import SafariPricing, { type SafariPackage } from "@/components/SafariPricing";

const KUMANA_PACKAGES: SafariPackage[] = [
  {
    name: "Half-Day Private Safari",
    time: "To be confirmed",
    duration: "Approx. 4–5 hours",
    includes: "Breakfast",
    tiers: [
      { group: "1 Person", price: "$90" },
      { group: "2 Persons", price: "$55 pp" },
      { group: "3 Persons", price: "$45 pp" },
      { group: "4 Persons", price: "$40 pp" },
      { group: "5 Persons", price: "$37 pp" },
      { group: "6 Persons", price: "$35 pp" },
    ],
  },
  {
    name: "7-Hour Private Safari",
    time: "To be confirmed",
    duration: "7 hours",
    includes: "Breakfast",
    tiers: [
      { group: "1 Person", price: "$110" },
      { group: "2 Persons", price: "$68 pp" },
      { group: "3 Persons", price: "$55 pp" },
      { group: "4 Persons", price: "$48 pp" },
      { group: "5 Persons", price: "$44 pp" },
      { group: "6 Persons", price: "$40 pp" },
    ],
  },
  {
    name: "Full-Day Private Safari",
    time: "To be confirmed",
    duration: "Approx. 13 hours",
    includes: "Breakfast and lunch",
    tiers: [
      { group: "1 Person", price: "$148" },
      { group: "2 Persons", price: "$93 pp" },
      { group: "3 Persons", price: "$78 pp" },
      { group: "4 Persons", price: "$68 pp" },
      { group: "5 Persons", price: "$60 pp" },
      { group: "6 Persons", price: "$54 pp" },
    ],
  },
];

export default function KumanaPricing() {
  return (
    <SafariPricing
      heading="Choose Your Kumana Safari"
      description="Kumana packages are currently planned as private tours only."
      packages={KUMANA_PACKAGES}
      note="Maximum capacity: up to 7 passengers per jeep."
    />
  );
}
