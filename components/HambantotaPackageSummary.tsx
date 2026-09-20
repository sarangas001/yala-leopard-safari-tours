import Reveal from "@/components/Reveal";

const FACTS: { label: string; value: string }[] = [
  { label: "Trip type", value: "Round trip" },
  { label: "Route", value: "Hambantota pickup → Yala safari → Hambantota return" },
  { label: "Vehicle", value: "4x4 safari jeep" },
  { label: "Maximum capacity", value: "7 passengers" },
];

export default function HambantotaPackageSummary() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Package Summary
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-md">
          <div className="flex flex-col items-center rounded-3xl border border-black/6 bg-white p-8 text-center shadow-sm">
            <p className="font-display text-4xl font-medium text-brand-orange">
              $75 <span className="text-lg font-normal text-brand-ink-muted">per person</span>
            </p>

            <dl className="mt-6 w-full space-y-3 text-left">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-0.5 border-b border-black/5 pb-3 text-sm">
                  <dt className="font-semibold text-brand-ink">{fact.label}</dt>
                  <dd className="text-brand-ink-muted">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="/#enquire"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
            >
              Book This Experience
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
