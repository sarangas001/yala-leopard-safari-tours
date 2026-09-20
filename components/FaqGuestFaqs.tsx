import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Can children join a safari?",
    a: "Yes, subject to our guest-age rules, package limits and safety guidance.",
  },
  {
    q: "How many passengers fit in a safari jeep?",
    a: "Our jeeps comfortably seat up to 7 passengers.",
  },
  {
    q: "Are infants free?",
    a: "Infant age and pricing rules are still being finalized — please check with us directly when booking for the most current guidance.",
  },
];

export default function FaqGuestFaqs() {
  return <ParkFaq heading="Children &amp; Guest FAQs" faqs={FAQS} />;
}
