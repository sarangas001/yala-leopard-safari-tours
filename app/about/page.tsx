import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";

export const metadata: Metadata = {
  title: "About Us | Yala Leopard Safari Tours",
  description:
    "Yala Wild Safari is operated by Yala Leopard Safari Tours, a local safari provider specializing in Yala, Udawalawe and Bundala National Parks.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <AboutHero />
    </main>
  );
}
