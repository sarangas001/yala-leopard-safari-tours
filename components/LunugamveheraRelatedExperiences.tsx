import ParkRelatedExperiences, { type RelatedExperience } from "@/components/ParkRelatedExperiences";

const EXPERIENCES: RelatedExperience[] = [
  {
    title: "Yala Leopard Safari",
    text: "Track the world's highest density of leopards across Yala's dry-zone scrub and open plains.",
    image: "/images/parks/yala.jpg",
    href: "/safaris/yala",
  },
  {
    title: "Udawalawe Elephant Safari",
    text: "Watch wild elephant herds gather in full view around the Udawalawe reservoir.",
    image: "/images/parks/udawalawe.jpg",
    href: "/safaris/udawalawe",
  },
  {
    title: "Kumana Safari",
    text: "Sri Lanka's most important bird nesting sanctuary, with a wilder, far less crowded feel.",
    image: "/images/parks/kumana.jpg",
    href: "/safaris/kumana",
  },
];

export default function LunugamveheraRelatedExperiences() {
  return <ParkRelatedExperiences experiences={EXPERIENCES} />;
}
