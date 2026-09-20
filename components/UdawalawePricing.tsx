import SafariPricing, { type SafariPackage } from "@/components/SafariPricing";

const UDAWALAWE_PACKAGES: SafariPackage[] = [
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
      { group: "1 Person", price: "$140" },
      { group: "2 Persons", price: "$90 pp" },
      { group: "3 Persons", price: "$75 pp" },
      { group: "4 Persons", price: "$65 pp" },
      { group: "5 Persons", price: "$58 pp" },
      { group: "6 Persons", price: "$52 pp" },
    ],
  },
];

export default function UdawalawePricing() {
  return (
    <SafariPricing
      heading="Choose Your Udawalawe Safari"
      description="Udawalawe tours are currently planned as private tours only. Whichever package you choose, you'll travel in a comfortable 4x4 jeep with an experienced local driver, on a schedule built around your group."
      packages={UDAWALAWE_PACKAGES}
      note="Maximum capacity: up to 7 passengers per jeep."
    />
  );
}
