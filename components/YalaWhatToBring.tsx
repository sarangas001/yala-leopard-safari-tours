import Reveal from "@/components/Reveal";

const WHAT_TO_BRING = [
  "Passport or ID",
  "Comfortable clothing",
  "Comfortable shoes",
  "Camera",
  "Binoculars",
  "Sunscreen",
  "Hat",
  "Sunglasses",
  "Cash where needed",
];

const IMPORTANT_INFO = [
  "Morning safari starts early; guests should be ready at the confirmed pickup time.",
  "Pickup time may vary depending on hotel location.",
  "Wildlife sightings cannot be guaranteed.",
  "Routes can change due to weather, park conditions or safety.",
  "Safari roads can be rough.",
  "Guests should follow park rules and the driver's instructions.",
  "Drones, alcohol and drugs are not allowed.",
];

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

export default function YalaWhatToBring() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            What to Bring &amp; Important Information
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-16">
          <Reveal>
            <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">What to Bring</h3>
            <span className="mt-2 block h-0.5 w-10 bg-brand-orange" aria-hidden="true" />
            <ul className="mt-6 space-y-4">
              {WHAT_TO_BRING.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">Important Information</h3>
            <span className="mt-2 block h-0.5 w-10 bg-brand-ink/20" aria-hidden="true" />
            <ul className="mt-6 space-y-4">
              {IMPORTANT_INFO.map((item) => (
                <li key={item} className="flex gap-3">
                  <InfoIcon />
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
