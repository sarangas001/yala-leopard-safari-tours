import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "Can I book through WhatsApp?",
    a: "Yes — message us on WhatsApp with your dates and group size, and our team will confirm availability and pricing directly in the chat.",
  },
  {
    q: "Can you pick me up from my hotel?",
    a: "In most cases, yes. Hotel pickup and drop-off is available where applicable — just share your hotel details when you enquire.",
  },
  {
    q: "Can you arrange a safari for tomorrow?",
    a: "Often, yes. Short-notice bookings depend on vehicle and guide availability, so message us as early as you can and we'll confirm right away.",
  },
  {
    q: "Do you offer airport transfers?",
    a: "Yes, we offer airport and hotel transfers alongside our safaris — let us know your flight details and we'll arrange the pickup.",
  },
  {
    q: "Can cruise passengers book from Hambantota?",
    a: "Yes — we run a dedicated Hambantota Port to Yala safari for cruise passengers with limited time ashore.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactFaqPreview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-ink-muted">
            Quick answers to the questions we hear most before booking.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-black/[0.07] border-t border-black/[0.07] lg:mt-14">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 rounded">
                  {faq.q}
                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-brand-ink-muted transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-ink-muted">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
