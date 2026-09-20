import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ParkSections from "@/components/ParkSections";
import { getPark, getParkSlugs } from "@/lib/parks";

export function generateStaticParams() {
  return getParkSlugs().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const park = getPark(id);
  if (!park) return {};

  return {
    title: park.metaTitle,
    description: park.metaDescription,
  };
}

export default async function ParkSafariPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const park = getPark(id);
  if (!park) notFound();

  return (
    <main className="flex flex-1 flex-col bg-white">
      <ParkSections sections={park.sections} />
    </main>
  );
}
