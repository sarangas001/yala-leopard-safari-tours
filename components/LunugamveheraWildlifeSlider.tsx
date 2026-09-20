import ParkWildlifeSlider, { type WildlifeAnimal } from "@/components/ParkWildlifeSlider";

const ANIMALS: WildlifeAnimal[] = [
  { name: "Asian Elephant", image: "/images/parks/udawalawe.jpg" },
  { name: "Water Buffalo", image: "/images/parks/lunugamvehera.jpg" },
  { name: "Sambar Deer", image: "/images/parks/lunugamvehera.jpg" },
  { name: "Wild Boar", image: "/images/wildlife/wild-boar.jpg" },
  { name: "Grey Heron", image: "/images/parks/lunugamvehera.jpg" },
  { name: "Painted Stork", image: "/images/parks/lunugamvehera.jpg" },
  { name: "Spot-Billed Pelican", image: "/images/parks/lunugamvehera.jpg" },
  { name: "Tufted Gray Langur", image: "/images/parks/lunugamvehera.jpg" },
];

export default function LunugamveheraWildlifeSlider() {
  return <ParkWildlifeSlider heading="Wildlife Highlights" animals={ANIMALS} />;
}
