import type { Metadata } from "next";
import BlogHero from "@/components/BlogHero";
import BlogFeatured from "@/components/BlogFeatured";
import BlogCategoriesAndPosts from "@/components/BlogCategoriesAndPosts";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Blog | Yala Leopard Safari Tours",
  description: "Safari stories, wildlife guides and travel tips from Yala Leopard Safari Tours.",
};

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
