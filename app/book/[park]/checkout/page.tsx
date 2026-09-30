import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CheckoutFlow from "@/components/CheckoutFlow";
import { getPark, getParkSlugs } from "@/lib/parks";
import { getParkPackages } from "@/lib/booking/pricing";

export function generateStaticParams() {
  return getParkSlugs().map((park) => ({ park }));
}

export const metadata: Metadata = {
  title: "Checkout | Yala Leopard Safari Tours",
  description: "Review your safari booking, choose a payment option and complete checkout.",
};

export default async function BookingCheckout({
  params,
}: {
  params: Promise<{ park: string }>;
}) {
  const { park } = await params;
  const parkData = getPark(park);
  if (!parkData) notFound();

  const packages = getParkPackages(park);

  return (
    <main className="flex flex-1 flex-col bg-white">
      <PageHero
        compact
        eyebrow="Step 2 of 2"
        title="Checkout"
        description="Review your details and complete your booking."
        image="/images/scenic/safari-jeeps.jpg"
        alt="A line of safari jeeps waiting on a dirt track in the national park"
      />

      <Suspense fallback={<div className="mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]" />}>
        <CheckoutFlow park={park} packages={packages} />
      </Suspense>
    </main>
  );
}
