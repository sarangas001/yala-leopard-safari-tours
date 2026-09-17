import Reveal from "@/components/Reveal";

const STEPS = [
  {
    title: "Choose your park",
    text: "Pick from Yala, Udawalawe or Bundala — each offering its own unique wildlife experience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M24 4v4M24 36v4M4 20h4M40 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 32c2-5 6-8 12-8s10 3 12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Select your package",
    text: "Choose a Half Day, 7-Hour or Full Day safari to suit your schedule and pace.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <rect x="8" y="10" width="32" height="30" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 10V6M32 10V6M8 20h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 28h6M26 28h6M16 34h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Customise your booking",
    text: "Set your date, number of guests, tour type and any extras — fully tailored to you.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <path d="M24 6l4 9 10 1.5-7.5 7 2 10L24 29l-8.5 4.5 2-10L10 16.5 20 15 24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Review the live total",
    text: "See a clear itemised price breakdown — no hidden costs, no surprises.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <path d="M10 14a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v22a2 2 0 0 1-2.9 1.8L30 35l-5 3-5-3-3.1 2.8A2 2 0 0 1 14 36V14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 21h12M18 27h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pay securely online",
    text: "Pay in full or choose a deposit — safe, simple and protected.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <rect x="6" y="16" width="36" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M6 24h36" stroke="currentColor" strokeWidth="2" />
        <path d="M14 32h6M30 32h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 10h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Receive confirmation",
    text: "Your booking details and voucher arrive instantly after payment — you're all set.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M15 24l6 6 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// Soft background colours cycling for each icon circle
const BG_COLORS = [
  "bg-violet-100 text-violet-500",
  "bg-sky-100 text-sky-500",
  "bg-amber-100 text-amber-500",
  "bg-emerald-100 text-emerald-500",
  "bg-rose-100 text-rose-500",
  "bg-orange-100 text-orange-500",
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.08}>
              <div className="flex flex-col items-center text-center">
                {/* Icon with soft coloured circle */}
                <div
                  className={
                    "flex h-20 w-20 items-center justify-center rounded-full " +
                    BG_COLORS[i]
                  }
                >
                  {step.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-brand-ink-muted sm:max-w-none">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
