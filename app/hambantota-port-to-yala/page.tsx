import type { Metadata } from "next";
import HambantotaHero from "@/components/HambantotaHero";
import HambantotaPackageSummary from "@/components/HambantotaPackageSummary";
import ParkInclusionsExclusions from "@/components/ParkInclusionsExclusions";
import ParkChecklist from "@/components/ParkChecklist";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import ParkWildlifeSlider from "@/components/ParkWildlifeSlider";
import Testimonials from "@/components/Testimonials";
import ParkFaq from "@/components/ParkFaq";
import FinalCta from "@/components/FinalCta";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hambantota Port to Yala Safari | Yala Leopard Safari Tours",
  description:
    "Get picked up from Hambantota International Cruise Port or your Hambantota hotel, enjoy a Yala safari in a 4x4 jeep, and return to Hambantota after your wildlife experience.",
};

const HOW_IT_WORKS = [
  {
    title: "Confirm Pickup",
    text: "Confirm your pickup point and arrival details with us in advance.",
    icon: "/images/icons/location.svg",
  },
  {
    title: "Meet Your Driver",
    text: "Meet your driver at Hambantota Port or your hotel at the agreed time.",
    icon: "/images/icons/01-hotel-pickup.svg",
  },
  {
    title: "Travel to Yala",
    text: "Travel comfortably toward Yala National Park.",
    icon: "/images/icons/02-travel-to-park-entrance.svg",
  },
  {
    title: "Begin the Safari",
    text: "Begin your safari in a rugged, open-sided 4x4 jeep.",
    icon: "/images/icons/03-enter-yala-4x4-jeep.svg",
  },
  {
    title: "Explore With a Local Driver",
    text: "Explore Yala's wildlife areas with an experienced local driver.",
    icon: "/images/icons/04-experienced-local-driver.svg",
  },
  {
    title: "Return to Hambantota",
    text: "Return to Hambantota after the safari, back to your port or hotel.",
    icon: "/images/icons/08-return-dropoff.svg",
  },
];

const WILDLIFE = [
  { name: "Sri Lankan Leopard", image: "/images/new-img/IMG_9129.jpg" },
  { name: "Asian Elephant", image: "/images/new-img/IMG_1606.jpg" },
  { name: "Sloth Bear", image: "/images/new-img/IMG_2392.jpg" },
  { name: "Crocodile", image: "/images/new-img/crocodile-1.jpg" },
  { name: "Spotted Deer", image: "/images/new-img/12.jpg" },
  { name: "Wild Boar", image: "/images/new-img/wild-boar.jpeg" },
  { name: "Peacock & Birdlife", image: "/images/wildlife/peacock.jpg" },
];

const FAQS = [
  {
    q: "Can you pick us up from Hambantota Cruise Port?",
    a: "Yes. Pickup from Hambantota International Cruise Port is coordinated based on your confirmed arrival details, or we can pick you up from your Hambantota hotel instead.",
  },
  {
    q: "Is the trip round trip?",
    a: "Yes. This is a round trip — pickup from Hambantota, a full Yala safari, and return to your agreed Hambantota location afterwards.",
  },
  {
    q: "Is the Yala safari included?",
    a: "Yes, the safari itself is included in the $75 per person price, along with pickup/drop-off transport, the 4x4 jeep, an experienced driver, drinking water and fresh fruit.",
  },
  {
    q: "Is the park entrance ticket included?",
    a: "No, the Yala National Park entrance ticket is not included in the base price unless you select and pay for it separately.",
  },
  {
    q: "How many passengers can travel?",
    a: "Our 4x4 safari jeeps comfortably seat up to 7 passengers.",
  },
  {
    q: "What details do cruise passengers need to provide?",
    a: "Please share your confirmed arrival time, cruise documentation where relevant, and your preferred pickup point so we can coordinate your pickup accurately.",
  },
  {
    q: "What happens if our ship arrival time changes?",
    a: "Let us know as soon as your arrival details change and we'll do our best to adjust pickup timing accordingly. Pickup timing can vary depending on port procedures and traffic.",
  },
  {
    q: "Can we book from a Hambantota hotel instead of the port?",
    a: "Yes, this experience is also available with pickup from a Hambantota hotel rather than the cruise port.",
  },
];

export default function HambantotaPortToYalaPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <HambantotaHero />
      <HambantotaPackageSummary />
      <ParkInclusionsExclusions
        heading="What's Included & Excluded"
        inclusions={[
          "Pickup/drop-off transport",
          "4x4 safari jeep",
          "Experienced driver",
          "Drinking water",
          "Fresh fruit",
        ]}
        exclusions={[
          "Yala National Park entrance ticket unless separately selected/paid",
          "Personal expenses and unselected optional services",
        ]}
      />
      <ParkChecklist
        heading="Designed for Cruise Passengers"
        intro="Arriving by cruise ship brings its own timing challenges, so this experience is built around your port schedule rather than a fixed departure time. We can't guarantee a return in time for every possible ship departure, but we work closely with you to keep the day running smoothly."
        columns={[
          {
            icon: "check",
            items: [
              "Pickup coordination based on confirmed arrival details",
              "Direct transfer to Yala",
              "Flexible communication through WhatsApp",
              "Return to the agreed Hambantota location after the safari",
            ],
          },
        ]}
      />
      <IconFeatureGrid heading="How the Experience Works" items={HOW_IT_WORKS} columns={3} />

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 pt-12 text-center sm:px-20 sm:pt-16 lg:px-40 lg:pt-20">
          <Reveal className="mx-auto max-w-2xl">
            <p className="text-sm leading-relaxed text-brand-ink-muted">
              Wildlife sightings are never guaranteed, but Yala is one of the best places in the
              world to look for these species.
            </p>
          </Reveal>
        </div>
      </section>
      <ParkWildlifeSlider heading="What You May See in Yala" animals={WILDLIFE} />

      <ParkChecklist
        heading="What to Bring"
        columns={[
          {
            icon: "check",
            items: [
              "Passport/ID",
              "Cruise documentation where relevant",
              "Camera/binoculars",
              "Sunscreen",
              "Hat and sunglasses",
              "Comfortable clothing",
              "Cash where required",
            ],
          },
        ]}
      />
      <ParkChecklist
        heading="Important Information"
        columns={[
          {
            icon: "info",
            items: [
              "Please provide accurate arrival and required-return information.",
              "Pickup timing may change depending on port procedures and traffic.",
              "Wildlife sightings cannot be guaranteed.",
              "The Yala National Park entrance ticket is currently excluded from the base package.",
            ],
          },
        ]}
        note={
          <>
            Cancellations and refunds are handled under our{" "}
            <Link href="/legal/refund-cancellation-policy" className="font-semibold text-brand-ink underline underline-offset-2 hover:text-brand-orange">
              Refund, Cancellation &amp; Return Policy
            </Link>
            .
          </>
        }
      />

      <Testimonials />
      <ParkFaq
        heading="Hambantota to Yala FAQs"
        intro="Quick answers to the questions we hear most from cruise and port arrivals."
        faqs={FAQS}
      />
      <FinalCta />
    </main>
  );
}
