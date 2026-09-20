import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPageView from "@/components/LegalPageView";
import { getLegalPage, getLegalPageSlugs } from "@/lib/legal";

export function generateStaticParams() {
  return getLegalPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return {};

  return {
    title: `${page.title} | Yala Leopard Safari Tours`,
    description: page.metaDescription,
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <main className="flex flex-1 flex-col bg-white">
      <LegalPageView page={page} />
    </main>
  );
}
