import IconFeatureGrid from "@/components/IconFeatureGrid";

// Placeholder icons reused from the "How It Works" set — swap for icons that
// match each reason before launch.
const REASONS = [
  {
    title: "36+ years of safari experience",
    icon: "/images/icons/receive-confirmation.svg",
  },
  {
    title: "Deep local wildlife knowledge",
    icon: "/images/icons/choose-your-park.svg",
  },
  {
    title: "English-speaking drivers",
    icon: "/images/icons/select-your-package.svg",
  },
  {
    title: "Comfortable photography-friendly 4x4 jeeps",
    icon: "/images/icons/customise-your-booking.svg",
  },
  {
    title: "Transparent pricing",
    icon: "/images/icons/review-live-total.svg",
  },
  {
    title: "Hotel pickup/drop-off where applicable",
    icon: "/images/icons/location.svg",
  },
  {
    title: "24/7 WhatsApp support",
    icon: "/images/icons/whatsapp.svg",
  },
  {
    title: "Flexible safari and transport services",
    icon: "/images/icons/pay-securely-online.svg",
  },
];

export default function AboutWhyChooseUs() {
  return <IconFeatureGrid heading="Why Guests Choose Us" items={REASONS} columns={4} />;
}
