import Reveal from "@/components/Reveal";

const PARK_CHOICES = [
  {
    q: "Choose Yala if...",
    a: "You want the strongest leopard-focused experience and a broad mix of wildlife.",
  },
  {
    q: "Choose Udawalawe if...",
    a: "Elephants are your main priority.",
  },
  {
    q: "Choose Bundala if...",
    a: "You love birds, wetlands, photography and a less crowded experience.",
  },
  {
    q: "Choose Kumana if...",
    a: "You want to witness massive nesting bird colonies in a remote, untouched wetland wilderness without the safari crowds.",
  },
  {
    q: "Choose Lunugamvehera if...",
    a: "You want a quiet, crowd-free alternative to spot migrating elephant herds and wildlife passing through an essential ecological corridor.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ParkChooserFaq() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Which Park Should You Choose?
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-black/[0.07] border-t border-black/[0.07] lg:mt-14">
          {PARK_CHOICES.map((choice, i) => (
            <Reveal key={choice.q} delay={i * 0.05}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 rounded">
                  {choice.q}
                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-brand-ink-muted transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-ink-muted">
                  {choice.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
