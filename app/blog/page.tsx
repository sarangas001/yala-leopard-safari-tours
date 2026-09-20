import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Blog | Yala Leopard Safari Tours",
  description: "Safari stories, wildlife guides and travel tips from Yala Leopard Safari Tours.",
};

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <ComingSoon
        title="Blog"
        image="/images/wildlife/spotted-deer.jpg"
        alt="A spotted deer grazing in open grassland"
      />
    </main>
  );
}
