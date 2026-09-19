import IconFeatureGrid from "@/components/IconFeatureGrid";

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
  return <IconFeatureGrid heading="How It Works" items={STEPS} columns={3} />;
}
