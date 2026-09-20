import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Can I cancel my safari?",
    a: "Yes — you can cancel free of charge up to 24 hours before your safari for a full refund. This is subject to our full Refund, Cancellation & Return Policy.",
  },
  {
    q: "What happens if I cancel within 24 hours?",
    a: "Refund eligibility may be reduced or unavailable if you cancel within 24 hours. Please refer to our Refund, Cancellation & Return Policy for full details.",
  },
  {
    q: "What happens if Yala Wild Safari cancels?",
    a: "We'll offer you a reschedule or refund in line with our cancellation policy, except where third-party non-refundable costs or force-majeure circumstances apply, as disclosed at the time.",
  },
];

export default function FaqCancellationFaqs() {
  return <ParkFaq heading="Cancellation &amp; Refund FAQs" faqs={FAQS} />;
}
