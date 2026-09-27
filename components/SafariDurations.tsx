import IconFeatureGrid from "@/components/IconFeatureGrid";

const DURATIONS = [
  {
    title: "Half Day",
    text: "Around 5 hours in the park, ideal for travelers with limited time.",
    icon: "/images/icons/half-day.svg",
  },
  {
    title: "7 Hours",
    text: "A balanced 7-hour option providing more exploration time than a half-day safari.",
    icon: "/images/icons/7-hours.svg",
  },
  {
    title: "Full Day",
    text: "A full 10 hours inside the park, best for wildlife enthusiasts and photographers who want maximum time to explore.",
    icon: "/images/icons/full-day.svg",
  },
];

export default function SafariDurations() {
  return <IconFeatureGrid heading="Safari Durations Explained" items={DURATIONS} columns={3} />;
}
