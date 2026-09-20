import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Is hotel pickup available?",
    a: "Yes, pickup/drop-off is available in applicable areas. The booking form clearly shows included areas and any extra charges.",
  },
  {
    q: "Do you pick up from Hambantota Cruise Port?",
    a: "Yes. A dedicated Hambantota Port to Yala round-trip safari service is offered.",
  },
  {
    q: "Do you offer airport transfers?",
    a: "Yes. Private transport with an English-speaking driver is available, including airport and hotel transfers.",
  },
  {
    q: "Is fuel included in the car rental rate?",
    a: "Yes — fuel and driver are included in the rate. Waiting time, tolls, parking and overnight driver charges may be additional.",
  },
];

export default function FaqTransportFaqs() {
  return <ParkFaq heading="Pickup &amp; Transport FAQs" faqs={FAQS} />;
}
