import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Contact | Yala Leopard Safari Tours",
  description: "Get in touch with Yala Leopard Safari Tours.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <ComingSoon
        title="Contact"
        image="/images/wildlife/crocodile.jpg"
        alt="A crocodile resting by the water in a Sri Lankan national park"
      />
    </main>
  );
}
