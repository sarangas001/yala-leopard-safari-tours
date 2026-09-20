import ParkWildlifeSlider, { type WildlifeAnimal } from "@/components/ParkWildlifeSlider";

const ANIMALS: WildlifeAnimal[] = [
  { name: "Flamingos & Migratory Waterbirds", image: "/images/parks/bundala.jpg" },
  { name: "Pelicans", image: "/images/parks/bundala.jpg" },
  { name: "Painted Storks", image: "/images/parks/bundala.jpg" },
  { name: "Herons & Egrets", image: "/images/parks/bundala.jpg" },
  { name: "Peacocks", image: "/images/wildlife/peacock.jpg" },
  { name: "Crocodiles", image: "/images/wildlife/crocodile.jpg" },
  { name: "Asian Elephant", image: "/images/parks/bundala.jpg" },
];

export default function BundalaWildlifeSlider() {
  return <ParkWildlifeSlider heading="Birdlife & Wildlife Highlights" animals={ANIMALS} />;
}
