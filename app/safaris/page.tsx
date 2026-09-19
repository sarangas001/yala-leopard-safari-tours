import type { Metadata } from "next";
import SafariHero from "@/components/SafariHero";
import SafariParkCards from "@/components/SafariParkCards";
import SafariDurations from "@/components/SafariDurations";
import ParkChooserFaq from "@/components/ParkChooserFaq";

export const metadata: Metadata = {
  title: "Safaris | Yala Leopard Safari Tours",
  description:
    "Explore our Yala, Udawalawe, Bundala, Kumana and Lunugamvehera safari experiences.",
};

export default function SafarisPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <SafariHero />
      <SafariParkCards />
      <SafariDurations />
      <ParkChooserFaq />
    </main>
  );
}
