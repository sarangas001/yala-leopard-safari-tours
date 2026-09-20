import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Are leopard or elephant sightings guaranteed?",
    a: "No. Wildlife moves freely in its natural habitat, so no animal sighting can be guaranteed.",
  },
  {
    q: "Which park is best for leopards?",
    a: "Yala is the primary leopard-focused safari destination on this website.",
  },
  {
    q: "Which park is best for elephants?",
    a: "Udawalawe is the primary elephant-focused option.",
  },
  {
    q: "Which park is best for birdwatching?",
    a: "Bundala and Kumana are the primary birdwatching parks. Kumana is specifically legendary for its massive, seasonal swamp-nesting colonies, while Bundala is the birdwatching and wetland safari option.",
  },
  {
    q: "Which park is best for a quiet, crowd-free wildlife experience?",
    a: "Lunugamvehera and Bundala offer the quietest safaris on this website, allowing you to watch wildlife without the heavy jeep traffic found in busier parks.",
  },
];

export default function FaqWildlifeFaqs() {
  return <ParkFaq heading="Wildlife FAQs" faqs={FAQS} />;
}
