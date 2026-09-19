import IconFeatureGrid from "@/components/IconFeatureGrid";

const REASONS = [
  {
    title: "36+ Years Experience",
    text: "Three and a half decades of hands-on safari expertise guiding guests across Yala, Udawalawe and Bundala.",
    icon: "/images/icons/36-years-safari-experience.svg",
  },
  {
    title: "Local Wildlife Knowledge",
    text: "Deep, first-hand knowledge of animal behaviour, seasonal patterns and the best spots inside every park.",
    icon: "/images/icons/deep-local-wildlife-knowledge.svg",
  },
  {
    title: "English-Speaking Drivers",
    text: "Friendly, fluent drivers and guides who can answer your questions throughout the drive.",
    icon: "/images/icons/english-speaking-drivers.svg",
  },
  {
    title: "Photography-Friendly Jeeps",
    text: "Open 4x4 seating with unobstructed sightlines, built for getting the shot without disturbing wildlife.",
    icon: "/images/icons/photography-friendly-4x4-jeeps.svg",
  },
  {
    title: "Transparent Pricing",
    text: "Clear, itemised pricing with no hidden extras or last-minute surprises.",
    icon: "/images/icons/transparent-pricing.svg",
  },
  {
    title: "Hotel Pickup & Drop-off",
    text: "Convenient pickup and drop-off from your hotel or villa, where applicable.",
    icon: "/images/icons/hotel-pickup-dropoff.svg",
  },
  {
    title: "24/7 WhatsApp Support",
    text: "Real people, ready to help with questions or changes at any hour of your trip.",
    icon: "/images/icons/24-7-whatsapp-support.svg",
  },
  {
    title: "Flexible Services",
    text: "Flexible safari and transport arrangements that adapt to your itinerary and schedule.",
    icon: "/images/icons/pay-securely-online.svg",
  },
];

export default function AboutWhyChooseUs() {
  return <IconFeatureGrid heading="Why Guests Choose Us" items={REASONS} columns={4} />;
}
