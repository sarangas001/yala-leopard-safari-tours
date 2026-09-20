import Reveal from "@/components/Reveal";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink-muted/60" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ParkInclusionsExclusions({
  heading = "What's Included & Excluded",
  intro,
  inclusions,
  exclusions,
}: {
  heading?: string;
  intro?: string;
  inclusions: string[];
  exclusions: string[];
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {intro ? <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">{intro}</p> : null}
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-16">
          <Reveal>
            <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">Inclusions</h3>
            <span className="mt-2 block h-0.5 w-10 bg-brand-orange" aria-hidden="true" />
            <ul className="mt-6 space-y-4">
              {inclusions.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">Exclusions</h3>
            <span className="mt-2 block h-0.5 w-10 bg-brand-ink/20" aria-hidden="true" />
            <ul className="mt-6 space-y-4">
              {exclusions.map((item) => (
                <li key={item} className="flex gap-3">
                  <CrossIcon />
                  <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
