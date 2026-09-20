import type { Metadata } from "next";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Yala Leopard Safari Tours",
  description: "Photos from our Yala, Udawalawe, Bundala, Kumana and Lunugamvehera safaris.",
};

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}
