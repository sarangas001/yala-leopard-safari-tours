import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Safaris | Yala Leopard Safari Tours",
  description: "Explore our Yala, Udawalawe and Bundala safari experiences.",
};

export default function SafarisPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <ComingSoon
        title="Safaris"
        image="/images/parks/yala.jpg"
        alt="A leopard resting on a rock in Yala National Park"
      />
    </main>
  );
}
