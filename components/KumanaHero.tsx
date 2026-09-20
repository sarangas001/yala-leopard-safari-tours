import ParkHero from "@/components/ParkHero";

export default function KumanaHero() {
  return (
    <ParkHero
      title="Kumana National Park Safari Tours"
      description="Discover Sri Lanka's most important bird nesting sanctuary with an experienced local safari driver in a private 4x4 jeep."
      image="/images/parks/kumana.jpg"
      ctas={[{ label: "Book Kumana Safari", href: "/#enquire" }]}
    />
  );
}
