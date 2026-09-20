import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "What is the best time for a Yala safari?",
    a: "Early morning safaris, starting around 5:00 AM, tend to offer the best wildlife activity and cooler temperatures. Our Full-Day safari also lets you experience both morning and late-afternoon light.",
  },
  {
    q: "Is the park entrance ticket included?",
    a: "No — the park entrance ticket is charged separately from the safari price. It can be added as an optional extra when you book, so the cost is always clear upfront.",
  },
  {
    q: "What is the difference between shared and private safari?",
    a: "A private safari means the jeep is exclusively for your group, so you set the pace. A shared safari means you join other travellers in the same jeep at a lower fixed per-person rate.",
  },
  {
    q: "How many passengers fit in one jeep?",
    a: "Our jeeps comfortably seat up to 7 passengers.",
  },
  {
    q: "Are meals included?",
    a: "Most packages include breakfast, and full-day safaris also include lunch. Drinking water is provided throughout every safari.",
  },
  {
    q: "Is hotel pickup available?",
    a: "Yes, hotel pickup and drop-off is available in select areas. Just share your hotel details when you book and we'll confirm your pickup time.",
  },
  {
    q: "Are leopard sightings guaranteed?",
    a: "No sighting can ever be guaranteed, as animals move freely in their natural habitat. That said, Yala has one of the highest leopard densities in the world, giving you an excellent chance.",
  },
  {
    q: "Can children join?",
    a: "Yes, children are welcome on our safaris. Given the early start and rough roads, we recommend parents use their own discretion for very young children.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable, neutral-toned clothing and closed shoes work best, along with a hat, sunglasses and sunscreen for the sun.",
  },
  {
    q: "What happens if the weather is bad?",
    a: "Safaris generally run in most weather conditions, though your driver may adjust the route for safety. In cases of severe weather, we'll work with you on rescheduling where possible.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function YalaFaq() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Yala FAQs
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-ink-muted">
            Quick answers to the questions we hear most before booking a Yala safari.
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
