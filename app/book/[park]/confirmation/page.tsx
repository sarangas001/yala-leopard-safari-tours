import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getPark, getParkSlugs } from "@/lib/parks";
import { getPackage, formatUsd } from "@/lib/booking/pricing";
import { BOOKING_EXTRAS } from "@/lib/booking/extras";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

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
  title: "Booking Confirmation | Yala Leopard Safari Tours",
  description: "Your safari booking confirmation.",
};

function StatusShell({ title, message, park }: { title: string; message: string; park: string }) {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-brand-ink sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">{message}</p>
            <a
              href={`/book/${park}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              Start a New Booking
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

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
  const sessionId = Array.isArray(sp.session_id) ? sp.session_id[0] : sp.session_id;

  if (!sessionId) {
    return (
      <StatusShell
        park={park}
        title="No Booking Found"
        message="We couldn't find a booking to confirm. If you just completed a payment, please check your email for confirmation, or contact us on WhatsApp."
      />
    );
  }

  let session: Stripe.Checkout.Session;
  try {
    session = await getStripe().checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent"],
    });
  } catch {
    return (
      <StatusShell
        park={park}
        title="Booking Not Found"
        message="This confirmation link is invalid or has expired. Please contact us on WhatsApp if you believe a payment was made."
      />
    );
  }

  const meta = session.metadata ?? {};
  const packageName = meta.packageName ?? "";
  const selectedPackage = getPackage(park, packageName);
  const date = meta.date || "To be confirmed";
  const adults = Number(meta.adults ?? 0);
  const childrenCount = Number(meta.children ?? 0);
  const infants = Number(meta.infants ?? 0);
  const pickupType = meta.pickupType ?? "hotel";
  const hotelName = meta.hotelName ?? "";
  const extraIds = (meta.extras ?? "").split(",").filter(Boolean);
  const selectedExtras = BOOKING_EXTRAS.filter((extra) => extraIds.includes(extra.id));
  const paymentOption = meta.paymentOption === "deposit" ? "deposit" : "full";
  const remainingBalance = Number(meta.remainingBalance ?? 0);

  const amountChargedNow = (session.amount_total ?? 0) / 100;
  const isPaid = session.payment_status === "paid";
  const isExpired = session.status === "expired";

  if (isExpired) {
    return (
      <StatusShell
        park={park}
        title="Checkout Expired"
        message="This checkout session expired before payment was completed. Please start your booking again — no payment was taken."
      />
    );
  }

  if (!isPaid) {
    return (
      <StatusShell
        park={park}
        title="Confirming Your Payment…"
        message="We're still waiting for your payment to be confirmed. This can take a moment for some payment methods. Please refresh this page shortly, or contact us on WhatsApp with your booking details if this persists."
      />
    );
  }

  const bookingReference = `YWS-${park.slice(0, 3).toUpperCase()}-${session.id.slice(-8).toUpperCase()}`;

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
                  {adults} Adults{childrenCount ? `, ${childrenCount} Children` : ""}
                  {infants ? `, ${infants} Infants` : ""}
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
                <dt className="font-semibold text-brand-ink">
                  {paymentOption === "deposit" ? "Deposit Paid" : "Amount Paid"}
                </dt>
                <dd className="font-display text-lg font-medium text-brand-orange">{formatUsd(amountChargedNow)}</dd>
              </div>
              {paymentOption === "deposit" && remainingBalance > 0 ? (
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-ink-muted">Remaining Balance</dt>
                  <dd className="font-medium text-brand-ink">{formatUsd(remainingBalance)}</dd>
                </div>
              ) : null}
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
          </Reveal>
        </div>
      </section>
    </main>
  );
}
