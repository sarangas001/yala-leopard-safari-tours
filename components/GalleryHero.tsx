import PageHero from "@/components/PageHero";

export default function GalleryHero() {
  return (
    <PageHero
      title="Be Part of a Visual Journey"
      description="Before you plan your trip, take a look at the leopards, elephants and wild landscapes waiting for you in Yala, Udawalawe and beyond."
      image="/images/new-img/gallery-hero.jpg"
      imageClassName="object-[50%_40%]"
      alt="Two Sri Lankan leopards walking out of the bush in Yala National Park"
      cta={{ label: "Book Your Safari", href: "/safaris" }}
    />
  );
}
