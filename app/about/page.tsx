import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutFounder from "@/components/AboutFounder";
import AboutVisionMission from "@/components/AboutVisionMission";
import AboutWhyChooseUs from "@/components/AboutWhyChooseUs";
import AboutPhilosophy from "@/components/AboutPhilosophy";

export const metadata: Metadata = {
  title: "About Us | Yala Leopard Safari Tours",
  description:
    "Yala Wild Safari is operated by Yala Leopard Safari Tours, a local safari provider specializing in Yala, Udawalawe and Bundala National Parks.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <AboutHero />
      <AboutStory />
      <AboutFounder />
      <AboutVisionMission />
      <AboutWhyChooseUs />
      <AboutPhilosophy />
    </main>
  );
}
