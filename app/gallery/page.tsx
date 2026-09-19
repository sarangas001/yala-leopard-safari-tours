import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Gallery | Yala Leopard Safari Tours",
  description: "Photos from our Yala, Udawalawe and Bundala safaris.",
};

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <ComingSoon
        title="Gallery"
        image="/images/wildlife/wild-boar.jpg"
        alt="A wild boar in the Sri Lankan dry-zone forest"
      />
    </main>
  );
}
