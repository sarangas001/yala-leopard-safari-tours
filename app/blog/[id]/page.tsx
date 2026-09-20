import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/BlogPostView";
import { getArticle, getArticleSlugs } from "@/lib/blog/articles";

export function generateStaticParams() {
  return getArticleSlugs().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) return {};

  return {
    title: `${article.title} | Yala Leopard Safari Tours`,
    description: article.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) notFound();

  return (
    <main className="flex flex-1 flex-col bg-white">
      <BlogPostView article={article} />
    </main>
  );
}
