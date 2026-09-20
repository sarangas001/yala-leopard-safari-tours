import SafariPricing, { type SafariPackage } from "@/components/SafariPricing";

const YALA_PACKAGES: SafariPackage[] = [
  {
    name: "Half-Day Private Safari",
    time: "5:00 AM – 10:00 AM",
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
    time: "5:00 AM – 12:00 PM",
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
    name: "7-Hour Shared Safari",
    time: "5:00 AM – 12:00 PM",
    duration: "7 hours",
    includes: "Breakfast",
    flatPrice: "$25 per person",
  },
  {
    name: "Full-Day Private Safari",
    time: "5:00 AM – 6:00 PM",
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
  {
    name: "Full-Day Shared Safari",
    time: "5:00 AM – 6:00 PM",
    duration: "Approx. 13 hours",
    includes: "Breakfast and lunch",
    flatPrice: "$50 per person",
  },
];

export default function YalaPricing() {
  return (
    <SafariPricing
      heading="Choose Your Yala Safari"
      packages={YALA_PACKAGES}
      note="Maximum capacity: up to 7 passengers per jeep."
    />
  );
}
