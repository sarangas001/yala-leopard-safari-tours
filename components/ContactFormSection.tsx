import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

const CONTACT = {
  phoneDisplay: "076 043 5578",
  phoneHref: "tel:+94760435578",
  whatsappDisplay: "076 091 5578",
  whatsappHref: "https://wa.me/94760915578",
  email: "yalaleopardsafariride@gmail.com",
  address: "538/B Gagasiripura, Debarawawa, Tissamaharama, Sri Lanka",
  mapHref:
    "https://maps.google.com/?q=538/B+Gagasiripura,+Debarawawa,+Tissamaharama,+Sri+Lanka",
};

const CONTACT_ITEMS = [
  {
    label: "Call",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    icon: "/images/icons/telephone.svg",
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappHref,
    icon: "/images/icons/whatsapp.svg",
    external: true,
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: "/images/icons/mail.svg",
  },
  {
    label: "Address",
    value: CONTACT.address,
    href: CONTACT.mapHref,
    icon: "/images/icons/location.svg",
    external: true,
  },
];

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

type IconProps = { className?: string };

function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.8 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.3.1.2.1.9-.2 1.5-.3.6-1.5 1.2-2.1 1.2-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.1.9-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.3 4.5 9.7 9l-1.9 1.9a12.5 12.5 0 0 0 5.3 5.3l1.9-1.9 4.5 2.4-.5 3.1c-.1.8-.8 1.4-1.6 1.3-3.7-.5-7.2-2.3-9.8-4.9C4.9 15.6 3.1 12.1 2.6 8.4c-.1-.8.5-1.5 1.3-1.6l3.4-.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

export default function ContactFormSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Enquiry form */}
          <Reveal>
            <div className="rounded-3xl border border-black/6 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">
                Plan Your Safari
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-muted">
                Tell us a little about your trip and we&apos;ll get back to
                you with a tailored itinerary.
              </p>

              <form className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
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

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30 sm:col-span-2 sm:w-auto"
                >
                  Send Enquiry
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact details & quick actions */}
          <Reveal delay={0.12}>
            <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">
              Contact Details
            </h2>

            <div className="mt-6 space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded text-brand-ink transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                >
                  <Image src={item.icon} alt="" aria-hidden="true" width={34} height={34} className="h-10 w-10 shrink-0" />
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-brand-ink-muted">
                      {item.label}
                    </span>
                    <span className="block text-base font-medium">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink">
              Quick Contact
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Chat on WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
              >
                <PhoneIcon className="h-4.5 w-4.5" />
                Call Us
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-earth/25 px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-sand"
              >
                <MailIcon className="h-4.5 w-4.5" />
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
