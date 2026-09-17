import Image from "next/image";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    title: "Choose your park",
    text: "Pick from Yala, Udawalawe or Bundala — each offering its own unique wildlife experience.",
    icon: "/images/icons/choose-your-park.svg",
  },
  {
    title: "Select your package",
    text: "Choose a Half Day, 7-Hour or Full Day safari to suit your schedule and pace.",
    icon: "/images/icons/select-your-package.svg",
  },
  {
    title: "Customise your booking",
    text: "Set your date, number of guests, tour type and any extras — fully tailored to you.",
    icon: "/images/icons/customise-your-booking.svg",
  },
  {
    title: "Review the live total",
    text: "See a clear itemised price breakdown — no hidden costs, no surprises.",
    icon: "/images/icons/review-live-total.svg",
  },
  {
    title: "Pay securely online",
    text: "Pay in full or choose a deposit — safe, simple and protected.",
    icon: "/images/icons/pay-securely-online.svg",
  },
  {
    title: "Receive confirmation",
    text: "Your booking details and voucher arrive instantly after payment — you're all set.",
    icon: "/images/icons/receive-confirmation.svg",
  },
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
                {/* Custom uploaded icon */}
                <div className="flex h-20 w-20 items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={72}
                    height={72}
                    style={{ width: "72px", height: "auto" }}
                  />
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
