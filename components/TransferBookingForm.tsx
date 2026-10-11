"use client";

import { useState, type FormEvent, type ReactNode } from "react";

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

/**
 * Plain transfer request form (no safari, package or per-person pricing options).
 * `taxi` collects pickup/drop-off and a vehicle; `hambantota` is a fixed
 * Hambantota → Yala transfer, so the drop-off is not asked for.
 */
export default function TransferBookingForm({
  type,
  vehicle,
  submitLabel = "Send Booking Request",
}: {
  type: "taxi" | "hambantota";
  vehicle?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [reference, setReference] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setErrorMessage(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/transfer-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type, vehicle }),
      });
      const result = await response.json();
      if (!response.ok || !result.reference) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }
      setReference(result.reference);
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-forest/20 bg-forest/5 p-8 text-center">
        <h3 className="font-display text-2xl font-medium text-brand-ink">Booking request received</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-ink-muted">
          Thank you! Your {type === "taxi" ? "taxi booking" : "transfer booking"} request has been sent to our team
          {reference ? (
            <>
              {" "}(reference <span className="font-semibold text-brand-ink">{reference}</span>)
            </>
          ) : null}
          . We&apos;ll contact you shortly by email or WhatsApp to confirm your booking.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <Field label="First Name" required>
        <input type="text" name="firstName" required className={inputClass} />
      </Field>
      <Field label="Last Name" required>
        <input type="text" name="lastName" required className={inputClass} />
      </Field>
      <Field label="Email" required>
        <input type="email" name="email" required className={inputClass} />
      </Field>
      <Field label="Phone / WhatsApp" required>
        <input type="tel" name="phone" required className={inputClass} />
      </Field>
      <Field label="Country" className="sm:col-span-2">
        <input type="text" name="country" className={inputClass} />
      </Field>

      <Field label={type === "hambantota" ? "Pickup (Hambantota Port or hotel)" : "Pickup Location"} required>
        <input
          type="text"
          name="pickupLocation"
          required
          defaultValue={type === "hambantota" ? "Hambantota Port" : ""}
          className={inputClass}
        />
      </Field>
      {type === "taxi" ? (
        <Field label="Drop-off Location" required>
          <input type="text" name="dropoffLocation" required className={inputClass} />
        </Field>
      ) : (
        <Field label="Drop-off">
          <input type="text" value="Yala" readOnly className={inputClass + " bg-brand-cream"} />
        </Field>
      )}

      <Field label="Date" required>
        <input type="date" name="date" required min={new Date().toISOString().slice(0, 10)} className={inputClass} />
      </Field>
      <Field label="Pickup Time">
        <input type="time" name="time" className={inputClass} />
      </Field>

      <Field label="Number of Passengers" required>
        <input type="number" name="passengers" min={1} max={20} defaultValue={1} required className={inputClass} />
      </Field>
      {type === "taxi" ? (
        <Field label="Selected Vehicle">
          <input type="text" value={vehicle ?? ""} readOnly className={inputClass + " bg-brand-cream"} />
        </Field>
      ) : null}

      <label className="flex items-center gap-3 sm:col-span-2">
        <input
          type="checkbox"
          name="roundTrip"
          className="h-4 w-4 shrink-0 rounded border-earth/40 text-brand-orange focus:ring-brand-orange"
        />
        <span className="text-sm text-brand-ink">Return trip needed</span>
      </label>

      <Field label="Notes" className="sm:col-span-2">
        <textarea
          name="notes"
          rows={4}
          placeholder={
            type === "hambantota"
              ? "Ship arrival time, flight or any other details we should know."
              : "Flight number, luggage, child seat or anything else we should know."
          }
          className={inputClass + " resize-none"}
        />
      </Field>

      {errorMessage ? <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700 sm:col-span-2">{errorMessage}</p> : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30 disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2 sm:w-auto sm:justify-self-start"
      >
        {status === "sending" ? "Sending…" : submitLabel}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
