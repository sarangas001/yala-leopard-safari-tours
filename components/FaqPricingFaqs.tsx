import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Which safari durations are available?",
    a: "Half-Day, 7-Hour and Full-Day options are available across Yala, Udawalawe, Bundala, Kumana and Lunugamvehera.",
  },
  {
    q: "Are Yala safaris shared or private?",
    a: "Yala supports private tours and selected shared options. Shared availability depends on package and seat availability.",
  },
  {
    q: "Are Udawalawe, Bundala, Kumana and Lunugamvehera tours private?",
    a: "The current plan is private tours only.",
  },
  {
    q: "Are park entrance tickets included?",
    a: "It depends on the park — please check the individual park page or your booking summary, where we clearly show whether the entrance ticket is included, offered as an add-on, or charged separately.",
  },
  {
    q: "Will I see the total before paying?",
    a: "Yes. The booking system displays an itemized live total before checkout.",
  },
];

export default function FaqPricingFaqs() {
  return <ParkFaq heading="Package &amp; Pricing FAQs" faqs={FAQS} />;
}
