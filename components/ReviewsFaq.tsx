import ParkFaq, { type FaqItem } from "@/components/ParkFaq";

const FAQS: FaqItem[] = [
  {
    q: "Are these reviews genuine?",
    a: "Yes. We never write or edit guest reviews. Every review shown here reflects a real guest's own words, whether shared directly with us or on an external platform.",
  },
  {
    q: "Where do your reviews come from?",
    a: "We feature approved reviews from Google and TripAdvisor, and also link to guest feedback from GetYourGuide, Airbnb Experiences and Facebook where useful.",
  },
  {
    q: "Can I leave a review?",
    a: "Yes — use the submission form on this page to share your experience. All submissions are moderated before appearing publicly.",
  },
  {
    q: "How are reviews moderated?",
    a: "Every submitted review is checked before publishing to confirm it reflects a genuine guest experience. We don't edit the content or meaning of what guests share.",
  },
  {
    q: "How can I tell if a review came from your website or another platform?",
    a: "Each review card shows its source — whether it was submitted directly through this site or collected from an external platform like Google or TripAdvisor.",
  },
  {
    q: "Will my personal details be shown publicly?",
    a: "Only your first name (or preferred display name) and country, if provided, are shown. Your email address is never published.",
  },
];

export default function ReviewsFaq() {
  return (
    <ParkFaq
      heading="Reviews FAQs"
      intro="Quick answers to how we collect, verify and share guest feedback."
      faqs={FAQS}
    />
  );
}
