import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, buildMetadata, parseArticleDate } from "@/lib/seo";
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

  return buildMetadata(`/blog/${id}`, {
    title: `${article.title} | Yala Leopard Safari Tours`,
    description: article.excerpt,
    image: article.heroImage,
    type: "article",
  });
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.excerpt,
          image: `${SITE_URL}${article.heroImage}`,
          datePublished: parseArticleDate(article.date),
          mainEntityOfPage: `${SITE_URL}/blog/${id}`,
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-black.png` } },
        }}
      />
      <BlogPostView article={article} />
    </main>
  );
}
