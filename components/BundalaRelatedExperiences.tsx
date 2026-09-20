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
    title: "Taxi & Car Rental",
    text: "Private, air-conditioned vehicles with an experienced driver for the whole island.",
    image: "/images/scenic/safari-jeeps.jpg",
    href: "/#enquire",
  },
];

export default function BundalaRelatedExperiences() {
  return <ParkRelatedExperiences experiences={EXPERIENCES} />;
}
