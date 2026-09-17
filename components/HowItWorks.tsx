import Reveal from "@/components/Reveal";

const STEPS = [
  { title: "Choose your park", text: "Pick from Yala, Udawalawe or Bundala." },
  { title: "Select your package", text: "Half Day, 7 Hours or Full Day safari." },
  { title: "Customise your booking", text: "Set date, guests, tour type and extras." },
  { title: "Review the live total", text: "See a clear itemised breakdown before checkout." },
  { title: "Pay securely online", text: "Pay in full or choose a deposit option." },
  { title: "Receive confirmation", text: "Booking details sent directly after payment." },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            Booking Made Simple
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.08}>
              <div className="relative">
                {/* Large faint step number in background */}
                <span
                  className="pointer-events-none absolute -top-3 -left-1 select-none font-display text-8xl font-medium leading-none text-brand-ink/[0.05]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange/10 text-xs font-semibold text-brand-orange">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-medium text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-ink-muted">
                    {step.text}
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
