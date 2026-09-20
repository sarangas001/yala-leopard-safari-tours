import ParkHero from "@/components/ParkHero";

export default function UdawalaweHero() {
  return (
    <ParkHero
      title="Udawalawe Elephant Safari Tours"
      description="Explore the open grasslands, reservoir landscapes and elephant-rich habitats of Udawalawe National Park with an experienced local safari driver in a private 4x4 jeep."
      image="/images/parks/udawalawe.jpg"
      ctas={[{ label: "Book Udawalawe Safari", href: "/#enquire" }]}
    />
  );
}
