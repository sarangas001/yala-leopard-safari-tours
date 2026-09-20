import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getPark, getParkSlugs } from "@/lib/parks";
import { getPackage, calculateBreakdown, formatUsd } from "@/lib/booking/pricing";
import { BOOKING_EXTRAS } from "@/lib/booking/extras";

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

export const metadata: Metadata = {
  title: "Booking Confirmed | Yala Leopard Safari Tours",
  description: "Your safari booking confirmation.",
};

export default async function BookingConfirmation({
  params,
  searchParams,
}: {
  params: Promise<{ park: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { park } = await params;
  const parkData = getPark(park);
  if (!parkData) notFound();

  const sp = await searchParams;
  const get = (key: string) => (Array.isArray(sp[key]) ? sp[key]?.[0] : sp[key]) ?? "";

  const packageName = get("package") || parkData.sections.find((s) => s.type === "pricing")?.packages?.[0]?.name || "";
  const selectedPackage = getPackage(park, packageName);
  const date = get("date") || "To be confirmed";
  const adults = Number(get("adults") || 2);
  const children = Number(get("children") || 0);
  const infants = Number(get("infants") || 0);
  const entranceTickets = get("entranceTickets") === "true";
  const extraIds = (get("extras") || "").split(",").filter(Boolean);
  const pickupType = get("pickupType") || "hotel";
  const hotelName = get("hotelName") || "";
  const selectedExtras = BOOKING_EXTRAS.filter((extra) => extraIds.includes(extra.id));

  const breakdown = calculateBreakdown({ adults, children, entranceTickets, extras: extraIds }, selectedPackage);
  const bookingReference = `YWS-${park.slice(0, 3).toUpperCase()}-${Math.abs(
    Array.from(`${park}${date}${packageName}`).reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 999999, 7)
  )}`;

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
              Booking Confirmed
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            </span>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
              Thank You — You&apos;re All Set
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
              A confirmation has been sent to your email. Reference:{" "}
              <span className="font-semibold text-brand-ink">{bookingReference}</span>
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
            <dl className="space-y-3 rounded-2xl border border-black/6 p-6 text-sm sm:p-8">
              <div className="flex justify-between gap-3">
                <dt className="text-brand-ink-muted">Safari</dt>
                <dd className="font-medium text-brand-ink">{PARK_NAMES[park] ?? park}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-brand-ink-muted">Package</dt>
                <dd className="font-medium text-brand-ink">{selectedPackage?.name ?? packageName}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-brand-ink-muted">Date / Time</dt>
                <dd className="font-medium text-brand-ink">
                  {date} {selectedPackage ? `· ${selectedPackage.time}` : ""}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-brand-ink-muted">Guests</dt>
                <dd className="font-medium text-brand-ink">
                  {adults} Adults{children ? `, ${children} Children` : ""}{infants ? `, ${infants} Infants` : ""}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-brand-ink-muted">Pickup</dt>
                <dd className="font-medium text-brand-ink">
                  {pickupType === "hotel" ? hotelName || "Hotel pickup" : "Not decided yet"}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-brand-ink-muted">Add-ons</dt>
                <dd className="text-right font-medium text-brand-ink">
                  {selectedExtras.length ? selectedExtras.map((e) => e.label).join(", ") : "None"}
                </dd>
              </div>
              <div className="flex justify-between gap-3 border-t border-black/[0.07] pt-3">
                <dt className="font-semibold text-brand-ink">Amount Paid</dt>
                <dd className="font-display text-lg font-medium text-brand-orange">{formatUsd(breakdown.total)}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl">
            <p className="text-sm leading-relaxed text-brand-ink-muted">
              <span className="font-semibold text-brand-ink">Important:</span> please be ready at your confirmed pickup time. Pickup timing can vary slightly depending on hotel location, traffic and park conditions — we&apos;ll be in touch by WhatsApp if anything changes.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/94760915578"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
            >
              WhatsApp Us
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-earth/25 px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-sand"
            >
              Add to Calendar
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-earth/25 px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-sand"
            >
              View Booking Details
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
