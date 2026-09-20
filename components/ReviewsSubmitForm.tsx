import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

const SERVICES = [
  "Yala Safari",
  "Udawalawe Safari",
  "Bundala Safari",
  "Kumana Safari",
  "Lunugamvehera Safari",
  "Hambantota Port to Yala Safari",
  "Taxi / Transport",
  "Other",
];

const RATINGS = ["5 — Excellent", "4 — Very Good", "3 — Good", "2 — Fair", "1 — Poor"];

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
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Submit a Review
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            Been on safari with us? We&apos;d love to hear about it — every submission is moderated before it appears publicly.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-3xl border border-black/6 bg-white p-8 shadow-sm sm:p-10">
            <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                  placeholder="Tell us about your safari — the wildlife you saw, your guide, or anything that stood out."
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

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30 sm:col-span-2 sm:w-auto"
              >
                Submit Review
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
