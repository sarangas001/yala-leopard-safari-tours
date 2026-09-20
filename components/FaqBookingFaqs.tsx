import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "How do I book a safari?",
    a: "Choose your park, select a package, enter your date and guest details, add any available extras, review the live total, and continue to secure online checkout.",
  },
  {
    q: "Can I book through WhatsApp?",
    a: "Yes. WhatsApp is available for booking assistance and questions. Online booking remains the recommended direct booking flow.",
  },
  {
    q: "Can I pay only a deposit?",
    a: "You can pay in full, or pay a 30% deposit with the remaining balance due later, according to our confirmed payment process.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Online card payments are supported through our payment gateway. We'll share the exact supported card and payment methods here once that's finalized.",
  },
];

export default function FaqBookingFaqs() {
  return <ParkFaq heading="Safari Booking FAQs" faqs={FAQS} />;
}
