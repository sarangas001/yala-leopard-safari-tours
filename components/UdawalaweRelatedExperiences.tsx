import ParkRelatedExperiences, { type RelatedExperience } from "@/components/ParkRelatedExperiences";

const EXPERIENCES: RelatedExperience[] = [
  {
    title: "Yala Leopard Safari",
    text: "Track the world's highest density of leopards across Yala's dry-zone scrub and open plains.",
    image: "/images/parks/yala.jpg",
    href: "/safaris/yala",
  },
  {
    title: "Bundala Bird Watching Safari",
    text: "Explore a Ramsar-listed wetland alive with flamingos and migratory birds.",
    image: "/images/parks/bundala.jpg",
    href: "/safaris/bundala",
  },
  {
    title: "Taxi & Car Rental",
    text: "Private, air-conditioned vehicles with an experienced driver for the whole island.",
    image: "/images/scenic/safari-jeeps.jpg",
    href: "/#enquire",
  },
];

export default function UdawalaweRelatedExperiences() {
  return <ParkRelatedExperiences experiences={EXPERIENCES} />;
}
