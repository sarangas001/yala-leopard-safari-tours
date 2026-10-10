"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const SERVICES = [
  "Yala Safari",
  "Udawalawe Safari",
  "Bundala Safari",
  "Hambantota Port to Yala Safari",
  "Taxi / Car Rental",
  "Airport Transfer",
  "Custom Tour",
  "Other",
];

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

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    setErrorMessage(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  return (
      <form onSubmit={handleSubmit} className="relative mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
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

        <Field label="Country">
          <input type="text" name="country" className={inputClass} />
        </Field>
        <Field label="Service Interested In" required>
          <select name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Travel Date">
          <input type="date" name="travelDate" className={inputClass} />
        </Field>
        <Field label="Pickup Location">
          <input type="text" name="pickupLocation" className={inputClass} />
        </Field>

        <div className="grid grid-cols-3 gap-3 sm:col-span-2">
          <Field label="Adults">
            <input type="number" name="adults" min={0} defaultValue={1} className={inputClass} />
          </Field>
          <Field label="Children">
            <input type="number" name="children" min={0} defaultValue={0} className={inputClass} />
          </Field>
          <Field label="Infants">
            <input type="number" name="infants" min={0} defaultValue={0} className={inputClass} />
          </Field>
        </div>

        <Field label="Message" className="sm:col-span-2">
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your trip, dates or anything else we should know."
            className={inputClass + " resize-none"}
          />
        </Field>

        {status === "success" ? (
          <p className="rounded-xl bg-forest/10 p-3 text-sm text-forest sm:col-span-2">
            Thank you! Your enquiry has been sent. We&apos;ll get back to you shortly.
          </p>
        ) : null}
        {errorMessage ? <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700 sm:col-span-2">{errorMessage}</p> : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30 disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send Enquiry"}
          <span aria-hidden="true">→</span>
        </button>
      </form>
  );
}
