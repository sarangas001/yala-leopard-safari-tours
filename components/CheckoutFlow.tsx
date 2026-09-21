"use client";

import { useRef, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { SafariPackage } from "@/components/SafariPricing";
import { BOOKING_EXTRAS } from "@/lib/booking/extras";
import { calculateBreakdown, formatUsd } from "@/lib/booking/pricing";

const inputClass =
  "w-full rounded-xl border border-earth/25 bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink-muted/60 transition-colors focus:border-brand-orange focus:outline-none";

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={className}>
      <span className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
        {required ? <span className="text-brand-orange"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

export default function CheckoutFlow({ park, packages }: { park: string; packages: SafariPackage[] }) {
  const searchParams = useSearchParams();

  const packageName = searchParams.get("package") ?? "";
  const date = searchParams.get("date") ?? "";
  const adults = Number(searchParams.get("adults") ?? 0);
  const children = Number(searchParams.get("children") ?? 0);
  const infants = Number(searchParams.get("infants") ?? 0);
  const entranceTickets = searchParams.get("entranceTickets") === "true";
  const extraIds = (searchParams.get("extras") ?? "").split(",").filter(Boolean);
  const pickupType = searchParams.get("pickupType") ?? "hotel";
  const hotelName = searchParams.get("hotelName") ?? "";
  const pickupNotes = searchParams.get("pickupNotes") ?? "";

  const selectedPackage = packages.find((pkg) => pkg.name === packageName);
  const selectedExtras = BOOKING_EXTRAS.filter((extra) => extraIds.includes(extra.id));
  const breakdown = calculateBreakdown({ adults, children, entranceTickets, extras: extraIds }, selectedPackage);

  const [paymentOption, setPaymentOption] = useState<"full" | "deposit">("full");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [canceledDismissed, setCanceledDismissed] = useState(false);
  const detailsFormRef = useRef<HTMLFormElement>(null);
  const specialRequestRef = useRef<HTMLTextAreaElement>(null);

  const depositDue = breakdown.total * 0.5;
  const dueNow = paymentOption === "full" ? breakdown.total : depositDue;
  const remainingBalance = paymentOption === "full" ? 0 : breakdown.total - depositDue;

  const editHref = `/book/${park}?${searchParams.toString()}`;
  const showCanceledBanner = searchParams.get("canceled") === "true" && !canceledDismissed;

  async function handlePayment() {
    if (!agreed || isSubmitting || !detailsFormRef.current) return;

    const form = detailsFormRef.current;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          park,
          packageName,
          date,
          adults,
          children,
          infants,
          entranceTickets,
          extras: extraIds,
          pickupType,
          hotelName,
          pickupNotes,
          specialRequest: specialRequestRef.current?.value ?? "",
          paymentOption,
          customer: {
            firstName: formData.get("firstName") ?? "",
            lastName: formData.get("lastName") ?? "",
            email: formData.get("email") ?? "",
            country: formData.get("country") ?? "",
            countryCode: formData.get("countryCode") ?? "",
            phone: formData.get("phone") ?? "",
          },
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Something went wrong starting checkout. Please try again.");
      }

      window.location.assign(data.url);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong starting checkout. Please try again.");
      setIsSubmitting(false);
    }
  }

  if (!selectedPackage) {
    return (
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 py-16 text-center sm:px-20 sm:py-20 lg:px-40 lg:py-24">
          <p className="text-base text-brand-ink-muted">
            We couldn&apos;t find your safari selection. Please{" "}
            <a href={`/book/${park}`} className="font-semibold text-brand-orange hover:text-brand-orange-dark">
              start again from your safari configuration
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        {showCanceledBanner ? (
          <div className="mb-8 flex items-start justify-between gap-4 rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-4 text-sm text-brand-ink">
            <p>Your checkout was canceled and no payment was taken. You can review your booking below and pay whenever you&apos;re ready.</p>
            <button
              type="button"
              onClick={() => setCanceledDismissed(true)}
              className="shrink-0 text-brand-ink-muted hover:text-brand-ink"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        ) : null}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">Customer Details</h2>
              <form ref={detailsFormRef} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="First Name" required>
                  <input type="text" name="firstName" required className={inputClass} />
                </Field>
                <Field label="Last Name" required>
                  <input type="text" name="lastName" required className={inputClass} />
                </Field>
                <Field label="Email" required>
                  <input type="email" name="email" required className={inputClass} />
                </Field>
                <Field label="Country">
                  <input type="text" name="country" className={inputClass} />
                </Field>
                <Field label="Country Code">
                  <input type="text" name="countryCode" placeholder="+94" className={inputClass} />
                </Field>
                <Field label="Phone / WhatsApp" required>
                  <input type="tel" name="phone" required className={inputClass} />
                </Field>
              </form>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">Special Request</h2>
              <p className="mt-2 text-sm text-brand-ink-muted">
                Dietary requests, child seat, accessibility considerations, photography needs, cruise timing or anything else we should know.
              </p>
              <textarea
                ref={specialRequestRef}
                name="specialRequest"
                rows={4}
                placeholder="Optional"
                className={inputClass + " mt-4 resize-none"}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">Booking Summary</h2>
                <a href={editHref} className="text-sm font-semibold text-brand-orange hover:text-brand-orange-dark">
                  Edit
                </a>
              </div>
              <dl className="mt-6 space-y-3 rounded-2xl border border-black/6 p-6 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-ink-muted">Safari / Park</dt>
                  <dd className="font-medium text-brand-ink capitalize">{park}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-ink-muted">Package</dt>
                  <dd className="font-medium text-brand-ink">{selectedPackage.name}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-ink-muted">Start Time</dt>
                  <dd className="font-medium text-brand-ink">{selectedPackage.time}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-ink-muted">Date</dt>
                  <dd className="font-medium text-brand-ink">{date || "Not set"}</dd>
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
                {pickupNotes ? (
                  <div className="flex justify-between gap-3">
                    <dt className="text-brand-ink-muted">Pickup Notes</dt>
                    <dd className="text-right font-medium text-brand-ink">{pickupNotes}</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-ink-muted">Add-ons</dt>
                  <dd className="text-right font-medium text-brand-ink">
                    {selectedExtras.length ? selectedExtras.map((e) => e.label).join(", ") : "None"}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.14}>
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">Payment Choice</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {(
                  [
                    { key: "full" as const, label: "Pay in Full", text: `Pay the full confirmed total of ${formatUsd(breakdown.total)} now.` },
                    { key: "deposit" as const, label: "Pay 50% Deposit", text: `Pay ${formatUsd(depositDue)} now, with the remaining ${formatUsd(remainingBalance)} due later.` },
                  ]
                ).map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setPaymentOption(option.key)}
                    className={
                      "rounded-2xl border p-5 text-left transition-colors " +
                      (paymentOption === option.key ? "border-brand-orange bg-brand-orange/5" : "border-black/6 hover:border-brand-orange/40")
                    }
                  >
                    <span className="font-display text-lg font-medium text-brand-ink">{option.label}</span>
                    <span className="mt-1 block text-sm text-brand-ink-muted">{option.text}</span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Itemized breakdown + payment CTA */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-black/6 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-xl font-medium text-brand-ink">Itemized Price Breakdown</h2>
                <dl className="mt-5 space-y-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-brand-ink-muted">Safari / package</dt>
                    <dd className="font-medium text-brand-ink">{formatUsd(breakdown.packageCharge)}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-brand-ink-muted">Entrance tickets</dt>
                    <dd className="font-medium text-brand-ink">{formatUsd(breakdown.entranceTickets)}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-brand-ink-muted">Meals / extras</dt>
                    <dd className="font-medium text-brand-ink">{formatUsd(breakdown.extrasCharge)}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-brand-ink-muted">Taxes / service charges</dt>
                    <dd className="font-medium text-brand-ink">{formatUsd(0)}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex items-baseline justify-between border-t border-black/[0.07] pt-4">
                  <span className="text-sm font-semibold text-brand-ink">Total Due</span>
                  <span className="font-display text-2xl font-medium text-brand-orange">{formatUsd(breakdown.total)}</span>
                </div>

                {paymentOption === "deposit" ? (
                  <div className="mt-4 space-y-1.5 rounded-xl bg-brand-cream p-4 text-xs text-brand-ink-muted">
                    <div className="flex justify-between"><span>Deposit due now</span><span className="font-semibold text-brand-ink">{formatUsd(depositDue)}</span></div>
                    <div className="flex justify-between"><span>Remaining balance</span><span className="font-semibold text-brand-ink">{formatUsd(remainingBalance)}</span></div>
                    <p className="pt-1">The remaining balance is due according to the confirmed payment process ahead of your safari date.</p>
                  </div>
                ) : null}

                <label className="mt-6 flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-earth/40 text-brand-orange focus:ring-brand-orange"
                  />
                  <span className="text-xs leading-relaxed text-brand-ink-muted">
                    I agree to the{" "}
                    <Link href="/legal/terms-and-conditions" className="font-semibold text-brand-orange hover:text-brand-orange-dark">Terms &amp; Conditions</Link>,{" "}
                    <Link href="/legal/privacy-policy" className="font-semibold text-brand-orange hover:text-brand-orange-dark">Privacy Policy</Link>, and{" "}
                    <Link href="/legal/refund-cancellation-policy" className="font-semibold text-brand-orange hover:text-brand-orange-dark">Refund, Cancellation &amp; Return Policy</Link>.
                  </span>
                </label>

                {errorMessage ? (
                  <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{errorMessage}</p>
                ) : null}

                <button
                  type="button"
                  disabled={!agreed || isSubmitting}
                  onClick={handlePayment}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Redirecting to Stripe…" : "Pay Securely Now"}
                  {!isSubmitting ? <span aria-hidden="true">→</span> : null}
                </button>
                <p className="mt-3 text-center text-xs text-brand-ink-muted">
                  Amount due now: <span className="font-semibold text-brand-ink">{formatUsd(dueNow)}</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
