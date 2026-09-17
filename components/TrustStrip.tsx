import Reveal from "@/components/Reveal";

const STATS = [
  { value: "36+", label: "Years of Experience" },
  { value: "3", label: "National Parks" },
  { value: "1000+", label: "Happy Guests" },
  { value: "24/7", label: "WhatsApp Support" },
];

export default function TrustStrip() {
  return (
    <section className="w-full border-y border-black/[0.06] bg-white">
      <Reveal className="mx-auto max-w-[1600px] px-6 py-10 sm:px-10 lg:px-20">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                "flex flex-col items-center justify-center text-center " +
                (i < STATS.length - 1
                  ? "lg:border-r lg:border-black/[0.07]"
                  : "")
              }
            >
              <span className="font-display text-4xl font-medium tracking-tight text-brand-ink sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-ink-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
