import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    title: "100% Spotting Focus",
    text: "Deep local knowledge of wildlife hotspots inside every park means you spend less time searching.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2v2.5M12 19.5V22M22 12h-2.5M4.5 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "36+ Years of Experience",
    text: "Local safari expertise since 1990, passed down through generations of our guides.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "English-Speaking Guides",
    text: "Friendly, knowledgeable and wildlife-conscious guides on every drive.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20c0-3.6 3.13-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Photography-Friendly Jeeps",
    text: "Open 4x4 seating with unobstructed sightlines — perfect for wildlife photography.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="4" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7l1.2-2.2A1 1 0 0 1 10.1 4.2h3.8a1 1 0 0 1 .9.6L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    text: "Clear inclusions, exclusions and add-on pricing before you commit — no surprise charges.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h9A2.5 2.5 0 0 1 18 8.5V17a1 1 0 0 1-1.55.83L14 16.5l-2.45 1.33a1 1 0 0 1-1 0L8.1 16.5l-2.45 1.33A1 1 0 0 1 4 17V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 10.5h6M8 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Free Cancellation",
    text: "Cancel up to 24 hours before your safari for a full refund — book with complete confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 4.5c4.14 0 7.5 1.4 7.5 3.13v6.06c0 3.15-3.51 5.36-7.5 6.31-3.99-.95-7.5-3.16-7.5-6.31V7.63c0-1.73 3.36-3.13 7.5-3.13Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12.2l2 2 4-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-brand-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Safari Experiences Done Right
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-14">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 3) * 0.08}>
              <div className="flex gap-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  {benefit.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-brand-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-muted">
                    {benefit.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
