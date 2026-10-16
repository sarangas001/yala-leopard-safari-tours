"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Reveal from "@/components/Reveal";

const SERVICES = [
  "Yala Safari",
  "Udawalawe Safari",
  "Bundala Safari",
  "Lunugamvehera Safari",
  "Hambantota Port to Yala Safari",
  "Taxi / Transport",
  "Other",
];

const RATINGS = ["5 - Excellent", "4 - Very Good", "3 - Good", "2 - Fair", "1 - Poor"];

const inputClass =
  "w-full rounded-xl border border-earth/25 bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink-muted/60 transition-colors focus:border-brand-orange focus:outline-none";

function Field({
  label,
  required,
  hint,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
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
      {hint ? <span className="mt-1 block text-xs text-brand-ink-muted">{hint}</span> : null}
    </label>
  );
}

export default function ReviewsSubmitForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    setErrorMessage(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/review", { method: "POST", body: new FormData(form) });
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
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Submit a Review
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            Been on safari with us? We&apos;d love to hear about it; every submission is moderated before it appears publicly.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-3xl border border-black/6 bg-white p-8 shadow-sm sm:p-10">
            <form onSubmit={handleSubmit} className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <Field label="Name" required>
                <input type="text" name="name" required className={inputClass} />
              </Field>
              <Field label="Email" required hint="Not publicly displayed">
                <input type="email" name="email" required className={inputClass} />
              </Field>

              <Field label="Safari / Service" required className="sm:col-span-2">
                <select name="service" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a safari or service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Rating" required className="sm:col-span-2">
                <select name="rating" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a rating
                  </option>
                  {RATINGS.map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Your Review" required className="sm:col-span-2">
                <textarea
                  name="review"
                  rows={5}
                  required
                  placeholder="Tell us about your safari: the wildlife you saw, your driver, or anything that stood out."
                  className={inputClass + " resize-none"}
                />
              </Field>

              <Field label="Photo (optional)" className="sm:col-span-2">
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="w-full rounded-xl border border-earth/25 bg-white px-4 py-3 text-sm text-brand-ink-muted file:mr-4 file:rounded-full file:border-0 file:bg-brand-cream file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand-ink"
                />
              </Field>

              <label className="flex items-start gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-earth/40 text-brand-orange focus:ring-brand-orange"
                />
                <span className="text-sm leading-relaxed text-brand-ink-muted">
                  I consent to this review, including my name, country and photo (if provided), being published on this website and our social channels.
                </span>
              </label>

              {status === "success" ? (
                <p className="rounded-xl bg-forest/10 p-3 text-sm text-forest sm:col-span-2">
                  Thank you! Your review has been submitted and will appear once it has been moderated.
                </p>
              ) : null}
              {errorMessage ? (
                <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700 sm:col-span-2">{errorMessage}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30 disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2 sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Submit Review"}
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
