import ParkInclusionsExclusions from "@/components/ParkInclusionsExclusions";

const INCLUSIONS = [
  "Private 4x4 safari jeep",
  "Experienced English-speaking wildlife driver",
  "Hotel pickup/drop-off in applicable areas",
  "Drinking water",
  "Meals where applicable",
  "Binoculars where provided",
];

const EXCLUSIONS = [
  "Park entrance ticket unless selected or explicitly included",
  "Personal expenses",
  "Optional add-ons not selected",
  "Extra pickup fees outside included areas where applicable",
];

export default function KumanaInclusionsExclusions() {
  return (
    <ParkInclusionsExclusions
      heading="What's Included &amp; Excluded"
      intro="Exact inclusions depend on the package you select — here's a general guide to what's covered."
      inclusions={INCLUSIONS}
      exclusions={EXCLUSIONS}
    />
  );
}
