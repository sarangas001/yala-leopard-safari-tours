import ParkWildlifeSlider, { type WildlifeAnimal } from "@/components/ParkWildlifeSlider";

const ANIMALS: WildlifeAnimal[] = [
  { name: "Asian Elephant", image: "/images/parks/udawalawe.jpg" },
  { name: "Water Buffalo", image: "/images/parks/udawalawe.jpg" },
  { name: "Spotted Deer", image: "/images/wildlife/spotted-deer.jpg" },
  { name: "Crocodile", image: "/images/wildlife/crocodile.jpg" },
  { name: "Monkey Species", image: "/images/parks/udawalawe.jpg" },
  { name: "Peacock & Other Birds", image: "/images/wildlife/peacock.jpg" },
];

export default function UdawalaweWildlifeSlider() {
  return <ParkWildlifeSlider heading="Wildlife Highlights" animals={ANIMALS} />;
}
