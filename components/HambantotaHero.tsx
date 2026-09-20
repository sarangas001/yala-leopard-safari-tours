import ParkHero from "@/components/ParkHero";

export default function HambantotaHero() {
  return (
    <ParkHero
      title="Hambantota Port to Yala Safari"
      description="Get picked up from Hambantota International Cruise Port or your Hambantota hotel, enjoy a Yala safari in a 4x4 jeep, and return to Hambantota after your wildlife experience."
      video="/videos/yala-leopard.mp4"
      ctas={[
        { label: "Book This Experience", href: "/#enquire" },
        { label: "WhatsApp Us", href: "https://wa.me/94760915578", variant: "whatsapp" },
      ]}
    />
  );
}
