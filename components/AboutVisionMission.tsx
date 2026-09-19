import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    label: "Our Vision",
    text: "Share Sri Lanka's natural wildlife with global travelers in an eco-friendly manner and to a high standard.",
  },
  {
    label: "Our Mission",
    text: "Provide safe, responsible and memorable safari experiences through experienced local drivers, comfortable vehicles, transparent service and respect for wildlife and park regulations.",
  },
];

export default function AboutVisionMission() {
  return (
    <section className="w-full bg-brand-cream">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1} className="text-center sm:text-left">
              <h3 className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink">
                {item.label}
                <span className="h-px w-10 bg-brand-orange" aria-hidden="true" />
              </h3>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-ink-muted sm:mx-0">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
