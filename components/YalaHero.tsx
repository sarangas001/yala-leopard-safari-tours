import ParkHero from "@/components/ParkHero";

export default function YalaHero() {
  return (
    <ParkHero
      title="Yala Leopard Safari Tours"
      description="Explore Yala National Park with an experienced local wildlife driver in a comfortable 4x4 safari jeep. Choose from flexible Half-Day, 7-Hour and Full-Day options."
      video="/videos/yala-leopard.mp4"
      ctas={[
        { label: "Book Yala Safari", href: "/#enquire" },
        { label: "WhatsApp Us", href: "https://wa.me/94760915578", variant: "whatsapp" },
      ]}
    />
  );
}
