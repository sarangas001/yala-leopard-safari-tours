import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Why is Bundala good for birdwatching?",
    a: "Bundala is an internationally important wetland with lagoons, salt pans and coastal habitats that attract a wide range of migratory and resident bird species, making it one of Sri Lanka's premier birdwatching destinations.",
  },
  {
    q: "What birds can I see?",
    a: "Bundala is known for flamingos and other migratory waterbirds, pelicans, painted storks, herons and egrets, along with resident peacocks — the exact species you see will depend on the season and time of your visit.",
  },
  {
    q: "Is Bundala less crowded than Yala?",
    a: "Yes, Bundala is generally a quieter alternative to busier parks like Yala, offering a more relaxed pace for exploring its wetland ecosystems.",
  },
  {
    q: "Are tours private?",
    a: "Yes, Bundala safaris are currently offered as private tours only, so the jeep is exclusively for your group.",
  },
  {
    q: "Is the park entrance ticket included?",
    a: "No — the park entrance ticket is not included in the safari price unless it's explicitly selected or added.",
  },
  {
    q: "Is hotel pickup available?",
    a: "Yes, hotel pickup and drop-off is available in applicable areas — just share your hotel details when booking.",
  },
  {
    q: "What safari duration is best for birdwatchers?",
    a: "A Full-Day safari gives you the most time across different habitats and lighting conditions, but Half-Day and 7-Hour safaris are also great options if you're short on time.",
  },
  {
    q: "Are bird sightings guaranteed?",
    a: "No sighting can ever be guaranteed, as birds move freely in their natural habitat and sightings depend on the day, season and migration patterns — but Bundala's rich wetland habitats give you an excellent chance of memorable birdwatching.",
  },
];

export default function BundalaFaq() {
  return (
    <ParkFaq
      heading="Bundala FAQs"
      intro="Quick answers to the questions we hear most before booking a Bundala birdwatching safari."
      faqs={FAQS}
    />
  );
}
