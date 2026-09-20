import Reveal from "@/components/Reveal";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink-muted" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 11v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="0.75" fill="currentColor" />
    </svg>
  );
}

const INCLUDED = ["Vehicle", "Fuel", "English-speaking driver"];

const CHARGED_SEPARATELY = ["Waiting time", "Parking", "Toll charges", "Overnight driver charge"];

export default function TaxiPricingModel() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Pricing Model
          </h2>
          <p className="mt-6 font-display text-3xl font-medium text-brand-orange">
            $1 <span className="text-base font-normal text-brand-ink-muted">per kilometre</span>
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-16">
          <Reveal>
            <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">Included</h3>
            <span className="mt-2 block h-0.5 w-10 bg-brand-orange" aria-hidden="true" />
            <ul className="mt-6 space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">
              Charged Separately Where Applicable
            </h3>
            <span className="mt-2 block h-0.5 w-10 bg-brand-ink/20" aria-hidden="true" />
            <ul className="mt-6 space-y-4">
              {CHARGED_SEPARATELY.map((item) => (
                <li key={item} className="flex gap-3">
                  <InfoIcon />
                  <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-brand-ink-muted">
            Waiting-time and overnight-driver charges will be confirmed with you before booking.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
