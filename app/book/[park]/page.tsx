import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BookingFlow from "@/components/BookingFlow";
import { getPark, getParkSlugs } from "@/lib/parks";
import { getParkPackages } from "@/lib/booking/pricing";

const PARK_HEROES: Record<string, { image: string; alt: string }> = {
  yala: {
    image: "/images/new-img/8.webp",
    alt: "A leopard resting on a rock in Yala National Park",
  },
  udawalawe: {
    image: "/images/new-img/IMG_2001.jpg",
    alt: "Wild elephants grazing on open grassland in Udawalawe National Park",
  },
  bundala: {
    image: "/images/parks/bundala.jpg",
    alt: "A blue-tailed bee-eater in Bundala National Park's wetlands",
  },
};

const PARK_NAMES: Record<string, string> = {
  yala: "Yala National Park",
  udawalawe: "Udawalawe National Park",
  bundala: "Bundala National Park",
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
      <PageHero
        compact
        eyebrow="Step 1 of 2"
        title={`Your ${PARK_NAMES[park] ?? "Safari"}`}
        description="Choose your package, date and guests below; your total updates live as you go."
        image={(PARK_HEROES[park] ?? PARK_HEROES.yala).image}
        alt={(PARK_HEROES[park] ?? PARK_HEROES.yala).alt}
      />

      <BookingFlow park={park} packages={packages} initialPackage={initialPackage} />
    </main>
  );
}
