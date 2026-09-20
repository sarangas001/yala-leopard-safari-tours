import Reveal from "@/components/Reveal";

const BOOKING_OPTIONS = [
  "Whether you'd like hotel pickup",
  "If you haven't decided on your hotel yet",
  "Your hotel or property name",
  "Any special pickup instructions",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function YalaPickupInfo() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Pickup Information
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            Included pickup areas will be confirmed with you directly based on
            where you&apos;re staying. When you make your booking, just let us
            know:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-md">
          <ul className="space-y-3">
            {BOOKING_OPTIONS.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckIcon />
                <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
