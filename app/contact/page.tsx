import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";

export const metadata: Metadata = {
  title: "Contact | Yala Leopard Safari Tours",
  description:
    "Contact our team for help choosing a safari, arranging pickup, coordinating a Hambantota cruise visit or planning private transport.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <ContactHero />
    </main>
  );
}
