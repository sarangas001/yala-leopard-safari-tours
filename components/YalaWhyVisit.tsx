import Reveal from "@/components/Reveal";

const REASONS = [
  {
    title: "A Sri Lankan Icon",
    text: "Yala is one of Sri Lanka's best-known wildlife destinations, drawing visitors from around the world.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Leopard-Focused Safaris",
    text: "Yala has one of the highest densities of leopards in the world, making it Sri Lanka's premier leopard-spotting destination.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="7" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="6.8" r="1.6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 12c-3 0-5.5 2-5.5 4.3 0 1.5 1.2 2.7 2.7 2.7.9 0 1.5-.4 2.3-.4.8 0 1.4.4 2.3.4a2.7 2.7 0 0 0 2.7-2.7c0-2.3-2.5-4.3-5.5-4.3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Rich & Varied Wildlife",
    text: "Beyond leopards, keep an eye out for elephants, sloth bears, crocodiles, spotted deer, wild boar and abundant birdlife.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="8" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 19c.5-2.8 2.6-4.5 6-4.5s5.5 1.7 6 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Diverse Landscapes",
    text: "Yala's terrain shifts from dense forest and open grassland to still lagoons and a dramatic coastline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M3 17l5-6 4 4.5 3-3.5 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 19.5h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "A Photographer's Paradise",
    text: "Golden light, dramatic wildlife and striking scenery make Yala an excellent choice for wildlife photography.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function YalaWhyVisit() {
  return (
    <section className="w-full bg-brand-cream">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Why Visit Yala National Park?
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 2) * 0.08}>
              <div className="flex gap-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  {reason.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-brand-ink">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-muted">{reason.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-brand-ink-muted">
            Please note: wildlife sightings are not guaranteed. Yala is home to an incredible diversity of animals, but sightings depend on the day and cannot be promised on every safari drive.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
