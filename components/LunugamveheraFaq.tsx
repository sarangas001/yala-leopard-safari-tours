import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Is Lunugamvehera good for elephants?",
    a: "Yes — the park sits on an important corridor that elephants use to migrate between Yala and Udawalawe, so elephant activity is a real highlight of a visit here.",
  },
  {
    q: "How is it different from Yala or Udawalawe?",
    a: "Lunugamvehera is quieter and far less crowded than Yala or Udawalawe, with a landscape built around its reservoir. It's a great next step for visitors who've already done one of the bigger parks.",
  },
  {
    q: "Are the tours private?",
    a: "Yes, Lunugamvehera safaris are currently offered as private tours only, so the jeep is exclusively for your group.",
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
    a: "No sighting can ever be guaranteed, as animals move freely in their natural habitat — but Lunugamvehera's role as an elephant corridor gives you a good chance of seeing them.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothing and shoes, a camera, binoculars, sunscreen, a hat and sunglasses — see our full what to bring list below.",
  },
];

export default function LunugamveheraFaq() {
  return (
    <ParkFaq
      heading="Lunugamvehera FAQs"
      intro="Quick answers to the questions we hear most before booking a Lunugamvehera safari."
      faqs={FAQS}
    />
  );
}
