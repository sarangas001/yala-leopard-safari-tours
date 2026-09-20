import ParkHero from "@/components/ParkHero";

export default function BundalaHero() {
  return (
    <ParkHero
      title="Bundala Bird Watching Safari Tours"
      description="Discover the wetlands, lagoons, coastal habitats and remarkable birdlife of Bundala National Park with an experienced local safari driver in a private 4x4 jeep."
      image="/images/parks/bundala.jpg"
      ctas={[{ label: "Book Bundala Safari", href: "/#enquire" }]}
    />
  );
}
