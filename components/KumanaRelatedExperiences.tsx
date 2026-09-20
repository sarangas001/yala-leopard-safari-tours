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
    title: "Lunugamvehera Safari",
    text: "A quieter elephant corridor connecting Yala and Udawalawe, built around the Lunugamvehera reservoir.",
    image: "/images/parks/lunugamvehera.jpg",
    href: "/safaris/lunugamvehera",
  },
];

export default function KumanaRelatedExperiences() {
  return <ParkRelatedExperiences experiences={EXPERIENCES} />;
}
