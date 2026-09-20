"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Reveal from "@/components/Reveal";
import type { SafariPackage } from "@/components/SafariPricing";
import { BOOKING_EXTRAS, ENTRANCE_TICKET_PRICE_USD } from "@/lib/booking/extras";
import { MAX_TIERED_GUESTS, calculateBreakdown, formatUsd } from "@/lib/booking/pricing";
import { DEFAULT_BOOKING_CONFIG } from "@/lib/booking/types";

const inputClass =
  "w-full rounded-xl border border-earth/25 bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink-muted/60 transition-colors focus:border-brand-orange focus:outline-none";

function Stepper({
  label,
  value,
  onChange,
  min = 0,
  hint,
}: {
  label: string;
  value: number;
  onChange: (next: number) => void;
  min?: number;
  hint?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-earth/25 px-4 py-3">
      <div>
        <p className="text-sm font-medium text-brand-ink">{label}</p>
        {hint ? <p className="text-xs text-brand-ink-muted">{hint}</p> : null}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={`Decrease ${label}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-earth/30 text-lg font-medium text-brand-ink transition-colors hover:bg-brand-cream"
        >
          −
        </button>
        <span className="w-6 text-center text-sm font-semibold text-brand-ink">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          aria-label={`Increase ${label}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-earth/30 text-lg font-medium text-brand-ink transition-colors hover:bg-brand-cream"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function BookingFlow({
  park,
  packages,
  initialPackage,
}: {
  park: string;
  packages: SafariPackage[];
  initialPackage?: string;
}) {
  const router = useRouter();
  const [packageName, setPackageName] = useState(
    (initialPackage && packages.some((pkg) => pkg.name === initialPackage) ? initialPackage : packages[0]?.name) ?? ""
  );
  const [date, setDate] = useState(DEFAULT_BOOKING_CONFIG.date);
  const [adults, setAdults] = useState(DEFAULT_BOOKING_CONFIG.adults);
  const [children, setChildren] = useState(DEFAULT_BOOKING_CONFIG.children);
  const [infants, setInfants] = useState(DEFAULT_BOOKING_CONFIG.infants);
  const [entranceTickets, setEntranceTickets] = useState(DEFAULT_BOOKING_CONFIG.entranceTickets);
  const [extras, setExtras] = useState<string[]>(DEFAULT_BOOKING_CONFIG.extras);
  const [pickupType, setPickupType] = useState(DEFAULT_BOOKING_CONFIG.pickupType);
  const [hotelName, setHotelName] = useState(DEFAULT_BOOKING_CONFIG.hotelName);
  const [pickupNotes, setPickupNotes] = useState(DEFAULT_BOOKING_CONFIG.pickupNotes);

  const selectedPackage = packages.find((pkg) => pkg.name === packageName);
  const payingGuests = adults + children;
  const atGuestLimit = payingGuests >= MAX_TIERED_GUESTS;

  const breakdown = useMemo(
    () => calculateBreakdown({ adults, children, entranceTickets, extras }, selectedPackage),
    [adults, children, entranceTickets, extras, selectedPackage]
  );

  const toggleExtra = (id: string) => {
    setExtras((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]));
  };

  const canContinue = Boolean(packageName && date && payingGuests > 0);

  const handleContinue = () => {
    const params = new URLSearchParams({
      package: packageName,
      date,
      adults: String(adults),
      children: String(children),
      infants: String(infants),
      entranceTickets: String(entranceTickets),
      extras: extras.join(","),
      pickupType,
      hotelName,
      pickupNotes,
    });
    router.push(`/book/${park}/checkout?${params.toString()}`);
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Configuration */}
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">1. Choose Safari Package</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {packages.map((pkg) => {
                  const isActive = pkg.name === packageName;
                  return (
                    <button
                      key={pkg.name}
                      type="button"
                      onClick={() => setPackageName(pkg.name)}
                      className={
                        "flex flex-col rounded-2xl border p-5 text-left transition-colors " +
                        (isActive ? "border-brand-orange bg-brand-orange/5" : "border-black/6 hover:border-brand-orange/40")
                      }
                    >
                      <span className="font-display text-lg font-medium text-brand-ink">{pkg.name}</span>
                      <span className="mt-1 text-xs text-brand-ink-muted">{pkg.duration} · {pkg.time}</span>
                      <span className="mt-2 text-xs text-brand-ink-muted">Includes: {pkg.includes}</span>
                      <span className="mt-3 font-display text-lg font-medium text-brand-orange">
                        {pkg.flatPrice ?? pkg.tiers?.[0]?.price}
                        {pkg.tiers ? <span className="text-xs font-normal text-brand-ink-muted"> from</span> : null}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">2. Select Date</h2>
              <div className="mt-4 max-w-xs">
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputClass}
                />
              </div>
              <p className="mt-2 text-xs text-brand-ink-muted">
                Live availability isn&apos;t connected yet — dates aren&apos;t checked against real capacity.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">3. Start Time</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-muted">
                {selectedPackage
                  ? `Your selected package runs ${selectedPackage.time}.`
                  : "Select a package above to see its start time."}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">4. Guest Selection</h2>
              <div className="mt-4 space-y-3">
                <Stepper label="Adults" value={adults} onChange={setAdults} min={1} />
                <Stepper label="Children" value={children} onChange={setChildren} />
                <Stepper label="Infants" value={infants} onChange={setInfants} hint="Infant pricing is still being finalized." />
              </div>
              {atGuestLimit ? (
                <p className="mt-3 text-xs text-brand-ink-muted">
                  Our jeeps seat up to 7 passengers. For groups larger than {MAX_TIERED_GUESTS}, please contact us directly for a quote.
                </p>
              ) : null}
            </Reveal>

            <Reveal delay={0.12}>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">5. Park Entrance Tickets</h2>
              <label className="mt-4 flex items-start gap-3 rounded-xl border border-earth/25 p-4">
                <input
                  type="checkbox"
                  checked={entranceTickets}
                  onChange={(e) => setEntranceTickets(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-earth/40 text-brand-orange focus:ring-brand-orange"
                />
                <span className="text-sm leading-relaxed text-brand-ink-muted">
                  <span className="font-medium text-brand-ink">Add Park Entrance Tickets</span> — {formatUsd(ENTRANCE_TICKET_PRICE_USD)} per eligible guest. Rate shown is a reference figure and may vary by park.
                </span>
              </label>
            </Reveal>

            <Reveal delay={0.14}>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">6. Meals and Extras</h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {BOOKING_EXTRAS.map((extra) => (
                  <label key={extra.id} className="flex items-start gap-3 rounded-xl border border-earth/25 p-4">
                    <input
                      type="checkbox"
                      checked={extras.includes(extra.id)}
                      onChange={() => toggleExtra(extra.id)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-earth/40 text-brand-orange focus:ring-brand-orange"
                    />
                    <span className="text-sm text-brand-ink-muted">
                      <span className="block font-medium text-brand-ink">
                        {extra.label} <span className="font-normal text-brand-ink-muted">+{formatUsd(extra.price)}</span>
                      </span>
                      {extra.description}
                    </span>
                  </label>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">7. Pickup</h2>
              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-3">
                  {(["hotel", "undecided"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPickupType(type)}
                      className={
                        "rounded-full px-5 py-2.5 text-sm font-medium transition-colors " +
                        (pickupType === type
                          ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                          : "bg-brand-cream text-brand-ink-muted hover:bg-brand-orange/10 hover:text-brand-ink")
                      }
                    >
                      {type === "hotel" ? "Hotel Pickup" : "Hotel Not Decided Yet"}
                    </button>
                  ))}
                </div>
                {pickupType === "hotel" ? (
                  <input
                    type="text"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    placeholder="Hotel / property name"
                    className={inputClass}
                  />
                ) : null}
                <textarea
                  value={pickupNotes}
                  onChange={(e) => setPickupNotes(e.target.value)}
                  rows={3}
                  placeholder="Special pickup instructions (optional)"
                  className={inputClass + " resize-none"}
                />
              </div>
            </Reveal>
          </div>

          {/* Live Price Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-black/6 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-xl font-medium text-brand-ink">Price Summary</h2>
                <dl className="mt-5 space-y-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-brand-ink-muted">Safari/package charge</dt>
                    <dd className="font-medium text-brand-ink">{formatUsd(breakdown.packageCharge)}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-brand-ink-muted">Entrance tickets</dt>
                    <dd className="font-medium text-brand-ink">{formatUsd(breakdown.entranceTickets)}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-brand-ink-muted">Meals/add-ons</dt>
                    <dd className="font-medium text-brand-ink">{formatUsd(breakdown.extrasCharge)}</dd>
                  </div>
                </dl>
                <div className="mt-5 flex items-baseline justify-between border-t border-black/[0.07] pt-4">
                  <span className="text-sm font-semibold text-brand-ink">Estimated Total</span>
                  <span className="font-display text-2xl font-medium text-brand-orange">{formatUsd(breakdown.total)}</span>
                </div>

                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!canContinue}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continue to Checkout
                  <span aria-hidden="true">→</span>
                </button>
                {!canContinue ? (
                  <p className="mt-3 text-center text-xs text-brand-ink-muted">Select a package, date and at least one adult to continue.</p>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
