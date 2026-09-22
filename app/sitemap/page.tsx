import type { Metadata } from "next";
import SitemapHero from "@/components/SitemapHero";
import SitemapLinks from "@/components/SitemapLinks";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Sitemap | Yala Leopard Safari Tours",
  description: "A complete overview of every page on the Yala Leopard Safari Tours website.",
};

export default function SitemapPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <SitemapHero />
      <SitemapLinks />
      <FinalCta />
    </main>
  );
}
