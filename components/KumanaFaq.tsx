import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Is Kumana less crowded than Yala?",
    a: "Yes — Kumana sees far fewer visitors than Yala, giving you a quieter, wilder safari experience while offering much of the same wildlife diversity.",
  },
  {
    q: "What birds can I see at Kumana?",
    a: "Kumana is home to more than 250 recorded bird species, including major nesting colonies of painted storks, herons, egrets and spoonbills, plus the occasional rare black-necked stork.",
  },
  {
    q: "Is Kumana connected to Yala National Park?",
    a: "Yes, Kumana is connected to Yala by the Kumbukkan Oya river, and the two parks share much of the same wildlife — though Kumana remains noticeably less crowded.",
  },
  {
    q: "Are tours private?",
    a: "Yes, Kumana safaris are currently offered as private tours only, so the jeep is exclusively for your group.",
  },
  {
    q: "Is the park entrance ticket included?",
    a: "No — the park entrance ticket is charged separately and is not included in the safari price unless it's explicitly selected or added.",
  },
  {
    q: "Is hotel pickup available?",
    a: "Yes, hotel pickup and drop-off is available in applicable areas — just share your hotel details when booking.",
  },
  {
    q: "What safari duration is best for birdwatchers?",
    a: "The 7-Hour or Full-Day Private Safari gives birdwatchers the most time to explore Kumana's wetlands and nesting colonies, though the Half-Day safari is still a good introduction.",
  },
  {
    q: "Are bird sightings guaranteed?",
    a: "No sighting can ever be guaranteed, as birds and wildlife move freely and sightings depend on the day, season and migration patterns — but Kumana's nesting colonies make it one of the best parks in Sri Lanka for birdwatching.",
  },
];

export default function KumanaFaq() {
  return (
    <ParkFaq
      heading="Kumana FAQs"
      intro="Quick answers to the questions we hear most before booking a Kumana safari."
      faqs={FAQS}
    />
  );
}
