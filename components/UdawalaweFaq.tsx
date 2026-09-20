import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Is Udawalawe good for elephants?",
    a: "Yes — Udawalawe is one of Sri Lanka's best-known parks for elephant viewing, with open grassland habitats that make sightings especially likely.",
  },
  {
    q: "Are the tours private?",
    a: "Yes, Udawalawe safaris are currently offered as private tours only, so the jeep is exclusively for your group.",
  },
  {
    q: "How long should I spend in Udawalawe?",
    a: "Half-Day and 7-Hour safaris both work well, though a Full-Day safari gives you the best chance to explore more of the park and its wildlife.",
  },
  {
    q: "Is the entrance ticket included?",
    a: "No — the park entrance ticket is not included in the safari price unless it's explicitly selected or added.",
  },
  {
    q: "Is hotel pickup available?",
    a: "Yes, hotel pickup and drop-off is available in applicable areas — just share your hotel details when booking.",
  },
  {
    q: "Can children join?",
    a: "Yes, children are welcome. Given the early start and rough roads, we recommend parents use their own discretion for very young children.",
  },
  {
    q: "Are elephant sightings guaranteed?",
    a: "No sighting can ever be guaranteed, as animals move freely in their natural habitat — but Udawalawe's open terrain gives you an excellent chance of seeing elephants.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothing and shoes, a camera, binoculars, sunscreen, a hat and sunglasses — see our full what to bring list below.",
  },
];

export default function UdawalaweFaq() {
  return (
    <ParkFaq
      heading="Udawalawe FAQs"
      intro="Quick answers to the questions we hear most before booking an Udawalawe safari."
      faqs={FAQS}
    />
  );
}
