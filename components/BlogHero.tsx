import PageHero from "@/components/PageHero";

export default function BlogHero() {
  return (
    <PageHero
      title="Discover Yala Through Stories That Inspire Your Trip"
      description="Every safari begins with a story. Our travel journal brings together practical guides, wildlife insights and first-hand tips from across Yala, Udawalawe, Bundala and beyond."
      image="/images/gallery-hero.png"
      imageClassName="object-center"
      alt="Sunrise over the Yala plains with acacia trees and a safari jeep in silhouette"
      cta={{ label: "Explore Our Safaris", href: "/safaris" }}
    />
  );
}
