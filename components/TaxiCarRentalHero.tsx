import ParkHero from "@/components/ParkHero";

export default function TaxiCarRentalHero() {
  return (
    <ParkHero
      title="Private Car & Van Rental with Driver in Sri Lanka"
      description="Travel comfortably between Yala, Tissamaharama, Hambantota, airports, hotels and destinations across Sri Lanka with an English-speaking driver."
      video="/videos/yala-leopard.mp4"
      ctas={[
        { label: "Get a Quote", href: "/#enquire" },
        { label: "WhatsApp Us", href: "https://wa.me/94760915578", variant: "whatsapp" },
      ]}
    />
  );
}
