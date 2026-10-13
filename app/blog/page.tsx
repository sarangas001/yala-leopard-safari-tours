import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import BlogHero from "@/components/BlogHero";
import BlogFeatured from "@/components/BlogFeatured";
import BlogCategoriesAndPosts from "@/components/BlogCategoriesAndPosts";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata("/blog");

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <BlogHero />
      <BlogFeatured />
      <BlogCategoriesAndPosts />
      <FinalCta />
    </main>
  );
}
