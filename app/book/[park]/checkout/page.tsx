import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
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
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 pt-16 text-center sm:px-20 sm:pt-20 lg:px-40 lg:pt-24">
          <Reveal className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
              Step 2 of 2
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            </span>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
              Checkout
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
              Review your details and complete your booking.
            </p>
          </Reveal>
        </div>
      </section>

      <Suspense fallback={<div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24" />}>
        <CheckoutFlow park={park} packages={packages} />
      </Suspense>
    </main>
  );
}
