import Reveal from "@/components/Reveal";

export type FaqItem = { q: string; a: string };

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ParkFaq({
  heading = "FAQs",
  intro,
  faqs,
}: {
  heading?: string;
  intro?: string;
  faqs: FaqItem[];
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {intro ? <p className="mt-3 text-base leading-relaxed text-brand-ink-muted">{intro}</p> : null}
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-black/[0.07] border-t border-black/[0.07] lg:mt-14">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 rounded">
                  {faq.q}
                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-brand-ink-muted transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-ink-muted">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
