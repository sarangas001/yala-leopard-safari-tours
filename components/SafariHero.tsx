import PageHero from "@/components/PageHero";

export default function SafariHero() {
  return (
    <PageHero
      title="Explore Sri Lanka's Best Wildlife Safaris"
      description="Yala Wild Safari runs guided game drives across Yala, Udawalawe, Bundala, Kumana and Lunugamvehera National Parks — from leopard-dense dry-zone forest to elephant-filled wetlands and remote birding trails."
      image="/images/new-img/9.webp"
      alt="A herd of wild elephants grazing on open grassland in Udawalawe National Park"
      cta={{ label: "Compare Safari Parks", href: "#compare-parks" }}
    />
  );
}
