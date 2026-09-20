import ParkWildlifeSlider, { type WildlifeAnimal } from "@/components/ParkWildlifeSlider";

const ANIMALS: WildlifeAnimal[] = [
  { name: "Painted Stork", image: "/images/parks/kumana.jpg" },
  { name: "Black-Necked Stork", image: "/images/parks/kumana.jpg" },
  { name: "Herons & Egrets", image: "/images/parks/kumana.jpg" },
  { name: "Spoonbill", image: "/images/parks/kumana.jpg" },
  { name: "Asian Elephant", image: "/images/parks/udawalawe.jpg" },
  { name: "Sri Lankan Leopard", image: "/images/parks/yala.jpg" },
  { name: "Mugger Crocodile", image: "/images/wildlife/crocodile.jpg" },
  { name: "Wild Boar", image: "/images/wildlife/wild-boar.jpg" },
];

export default function KumanaWildlifeSlider() {
  return <ParkWildlifeSlider heading="Birdlife & Wildlife Highlights" animals={ANIMALS} />;
}
