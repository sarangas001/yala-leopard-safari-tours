import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = buildMetadata("/gallery");

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}
