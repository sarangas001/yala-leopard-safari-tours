import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    title: "100% Spotting Focus",
    text: "Deep local knowledge of wildlife hotspots inside every park.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2v2.5M12 19.5V22M22 12h-2.5M4.5 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "36+ Years of Experience",
    text: "Local safari experience since 1990, passed down through our guides.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "English-Speaking Drivers",
    text: "Friendly, knowledgeable and wildlife-conscious guides on every drive.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20c0-3.6 3.13-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Photography-Friendly Jeeps",
    text: "Comfortable 4x4 seating with clear, unobstructed wildlife viewing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect x="4" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7l1.2-2.2A1 1 0 0 1 10.1 4.2h3.8a1 1 0 0 1 .9.6L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    text: "Clear inclusions, exclusions and add-on pricing before you pay.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h9A2.5 2.5 0 0 1 18 8.5V17a1 1 0 0 1-1.55.83L14 16.5l-2.45 1.33a1 1 0 0 1-1 0L8.1 16.5l-2.45 1.33A1 1 0 0 1 4 17V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 10.5h6M8 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    text: "Fast assistance through WhatsApp, before, during and after your safari.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M6 19.5l1.1-3.2a7 7 0 1 1 2.6 2.5L6 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#faf9f7]">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Why Choose Yala Leopard Safari Tours?
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  {benefit.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-brand-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-muted">{benefit.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
