import ParkWildlifeSlider, { type WildlifeAnimal } from "@/components/ParkWildlifeSlider";

const ANIMALS: WildlifeAnimal[] = [
  { name: "Sri Lankan Leopard", image: "/images/parks/yala.jpg" },
  { name: "Asian Elephant", image: "/images/parks/udawalawe.jpg" },
  { name: "Sloth Bear", image: "/images/wildlife/sloth-bear.jpg" },
  { name: "Crocodile", image: "/images/wildlife/crocodile.jpg" },
  { name: "Spotted Deer", image: "/images/wildlife/spotted-deer.jpg" },
  { name: "Wild Boar", image: "/images/wildlife/wild-boar.jpg" },
  { name: "Peacock", image: "/images/wildlife/peacock.jpg" },
  { name: "Resident & Migratory Birds", image: "/images/parks/bundala.jpg" },
];

export default function YalaWildlifeSlider() {
  return <ParkWildlifeSlider heading="Wildlife You May See" animals={ANIMALS} />;
}
