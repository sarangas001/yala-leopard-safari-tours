import IconFeatureGrid from "@/components/IconFeatureGrid";

const DURATIONS = [
  {
    title: "Half Day",
    text: "Ideal for travelers with limited time.",
    icon: "/images/icons/half-day.svg",
  },
  {
    title: "7 Hours",
    text: "A balanced option providing more exploration time than a half-day safari.",
    icon: "/images/icons/7-hours.svg",
  },
  {
    title: "Full Day",
    text: "Best for wildlife enthusiasts and photographers who want maximum time inside the park.",
    icon: "/images/icons/full-day.svg",
  },
];

export default function SafariDurations() {
  return <IconFeatureGrid heading="Safari Durations Explained" items={DURATIONS} columns={3} />;
}
