import Reveal from "@/components/Reveal";

const STEPS = [
  { title: "Choose your park", text: "Yala, Udawalawe or Bundala." },
  { title: "Select your package", text: "Half Day, 7 Hours or Full Day." },
  { title: "Customize your booking", text: "Date, guests, tour type and extras." },
  { title: "Review the live total", text: "See an itemized total before checkout." },
  { title: "Pay securely online", text: "Pay in full or choose a deposit." },
  { title: "Receive confirmation", text: "Booking details sent after payment." },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange">
            Booking Made Simple
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            How Booking Works
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.08} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange font-display text-base font-medium text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-medium text-brand-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-ink-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center lg:mt-16">
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            Start Booking
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
