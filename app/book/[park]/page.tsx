import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BookingFlow from "@/components/BookingFlow";
import { getPark, getParkSlugs } from "@/lib/parks";
import { getParkPackages } from "@/lib/booking/pricing";

const PARK_NAMES: Record<string, string> = {
  yala: "Yala National Park",
  udawalawe: "Udawalawe National Park",
  bundala: "Bundala National Park",
  kumana: "Kumana National Park",
  lunugamvehera: "Lunugamvehera National Park",
};

export function generateStaticParams() {
  return getParkSlugs().map((park) => ({ park }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ park: string }>;
}): Promise<Metadata> {
  const { park } = await params;
  const parkData = getPark(park);
  if (!parkData) return {};

  return {
    title: `Book Your ${PARK_NAMES[park] ?? "Safari"} | Yala Leopard Safari Tours`,
    description: `Configure your ${PARK_NAMES[park] ?? "safari"} package, guests and extras, and see a live price before checkout.`,
  };
}

export default async function BookPark({
  params,
  searchParams,
}: {
  params: Promise<{ park: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { park } = await params;
  const parkData = getPark(park);
  if (!parkData) notFound();

  const packages = getParkPackages(park);
  const sp = await searchParams;
  const initialPackageParam = sp.package;
  const initialPackage = Array.isArray(initialPackageParam) ? initialPackageParam[0] : initialPackageParam;

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 pt-16 text-center sm:px-20 sm:pt-20 lg:px-40 lg:pt-24">
          <Reveal className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
              Step 1 of 2
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            </span>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
              Your {PARK_NAMES[park] ?? "Safari"}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
              Choose your package, date and guests below — your total updates live as you go.
            </p>
          </Reveal>
        </div>
      </section>

      <BookingFlow park={park} packages={packages} initialPackage={initialPackage} />
    </main>
  );
}
