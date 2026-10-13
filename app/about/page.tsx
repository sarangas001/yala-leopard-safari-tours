import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutTeam from "@/components/AboutTeam";
import AboutVisionMission from "@/components/AboutVisionMission";
import AboutWhyChooseUs from "@/components/AboutWhyChooseUs";
import AboutPhilosophy from "@/components/AboutPhilosophy";
import AboutServices from "@/components/AboutServices";
import AboutVehicles from "@/components/AboutVehicles";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata("/about");

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutVisionMission />
      <AboutWhyChooseUs />
      <AboutPhilosophy />
      <AboutServices />
      <AboutVehicles />
      <FinalCta />
    </main>
  );
}
