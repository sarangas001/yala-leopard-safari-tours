import SafariPricing, { type SafariPackage } from "@/components/SafariPricing";

const BUNDALA_PACKAGES: SafariPackage[] = [
  {
    name: "Half-Day Private Safari",
    time: "To be confirmed",
    duration: "Approx. 4–5 hours",
    includes: "Breakfast",
    tiers: [
      { group: "1 Person", price: "$80" },
      { group: "2 Persons", price: "$50 pp" },
      { group: "3 Persons", price: "$40 pp" },
      { group: "4 Persons", price: "$35 pp" },
      { group: "5 Persons", price: "$30 pp" },
      { group: "6 Persons", price: "$28 pp" },
    ],
  },
  {
    name: "7-Hour Private Safari",
    time: "To be confirmed",
    duration: "7 hours",
    includes: "Breakfast",
    tiers: [
      { group: "1 Person", price: "$95" },
      { group: "2 Persons", price: "$60 pp" },
      { group: "3 Persons", price: "$50 pp" },
      { group: "4 Persons", price: "$42 pp" },
      { group: "5 Persons", price: "$38 pp" },
      { group: "6 Persons", price: "$35 pp" },
    ],
  },
  {
    name: "Full-Day Private Safari",
    time: "To be confirmed",
    duration: "Approx. 13 hours",
    includes: "Breakfast and lunch",
    tiers: [
      { group: "1 Person", price: "$130" },
      { group: "2 Persons", price: "$80 pp" },
      { group: "3 Persons", price: "$68 pp" },
      { group: "4 Persons", price: "$60 pp" },
      { group: "5 Persons", price: "$52 pp" },
      { group: "6 Persons", price: "$48 pp" },
    ],
  },
];

export default function BundalaPricing() {
  return (
    <SafariPricing
      heading="Choose Your Bundala Safari"
      description="Bundala packages are currently planned as private tours only."
      packages={BUNDALA_PACKAGES}
      note="Maximum capacity: up to 7 passengers per jeep."
    />
  );
}
