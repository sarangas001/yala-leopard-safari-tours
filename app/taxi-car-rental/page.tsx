import type { Metadata } from "next";
import TaxiCarRentalHero from "@/components/TaxiCarRentalHero";
import TaxiVehicleOptions from "@/components/TaxiVehicleOptions";
import TaxiPricingModel from "@/components/TaxiPricingModel";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import ParkInclusionsExclusions from "@/components/ParkInclusionsExclusions";
import ParkFaq from "@/components/ParkFaq";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Taxi & Car Rental with Driver | Yala Leopard Safari Tours",
  description:
    "Travel comfortably between Yala, Tissamaharama, Hambantota, airports, hotels and destinations across Sri Lanka with an English-speaking driver.",
};

const TRANSFER_TYPES = [
  { title: "Tissamaharama / Yala Hotel Transfers", icon: "/images/icons/hotel-pickup-dropoff.svg" },
  { title: "Hambantota Transfers", icon: "/images/icons/location.svg" },
  { title: "Mattala Rajapaksa International Airport Transfers", icon: "/images/icons/location.svg" },
  { title: "Bandaranaike International Airport Transfers", icon: "/images/icons/location.svg" },
  { title: "Ella Transfers", icon: "/images/icons/location.svg" },
  { title: "Mirissa / Southern Coast Transfers", icon: "/images/icons/location.svg" },
  { title: "Custom Long-Distance Travel", icon: "/images/icons/customise-your-booking.svg" },
];

const HOW_IT_WORKS = [
  { title: "Enter Details", text: "Enter your pickup and destination.", icon: "/images/icons/location.svg" },
  { title: "Choose Date & Passengers", text: "Select date/time and number of passengers.", icon: "/images/icons/select-your-package.svg" },
  { title: "Choose Vehicle", text: "Choose your vehicle type.", icon: "/images/icons/choose-your-park.svg" },
  { title: "View Estimated Fare", text: "View an estimated fare where distance can be calculated.", icon: "/images/icons/transparent-pricing.svg" },
  { title: "Submit Request", text: "Submit your request or continue to booking.", icon: "/images/icons/customise-your-booking.svg" },
  { title: "Receive Confirmation", text: "Receive confirmation from our team.", icon: "/images/icons/receive-confirmation.svg" },
];

const WHY_TRAVEL_WITH_US = [
  { title: "English-Speaking Drivers", icon: "/images/icons/english-speaking-drivers.svg" },
  { title: "Fuel Included", icon: "/images/icons/fuel-included.svg" },
  { title: "Comfortable Vehicle Choices", icon: "/images/icons/customise-your-booking.svg" },
  { title: "Airport, Hotel & Long-Distance Travel", icon: "/images/icons/hotel-pickup-dropoff.svg" },
  { title: "24/7 WhatsApp Support", icon: "/images/icons/24-7-whatsapp-support.svg" },
  { title: "Transparent Pricing", icon: "/images/icons/transparent-pricing.svg" },
  { title: "Safari & Transport, One Operator", icon: "/images/icons/safari-transport-one-operator.svg" },
];

const FAQS = [
  {
    q: "Is a driver included?",
    a: "Yes, every rental includes an English-speaking driver — this is a driver rental service, not a self-drive rental.",
  },
  {
    q: "Is fuel included?",
    a: "Yes, fuel is included in the per-kilometre rate.",
  },
  {
    q: "How is the fare calculated?",
    a: "Our base rate is $1 per kilometre, covering the vehicle, fuel and driver. Waiting time, parking, tolls and any overnight driver charge are billed separately where applicable.",
  },
  {
    q: "Are tolls and parking included?",
    a: "No, toll charges and parking are charged separately where applicable.",
  },
  {
    q: "Can I book an airport transfer?",
    a: "Yes, we offer transfers to and from both Mattala Rajapaksa International Airport and Bandaranaike International Airport.",
  },
  {
    q: "Can I book a multi-day driver?",
    a: "Yes, for multi-day trips an overnight driver charge applies. Get in touch for a quote based on your itinerary.",
  },
  {
    q: "What vehicles are available?",
    a: "We offer sedans (approx. 3–4 passengers), mini vans (approx. 6–10 passengers) and SUVs, with SUV capacity and model details confirmed at the time of booking.",
  },
  {
    q: "Can I request a child seat?",
    a: "Let us know your requirements when you enquire and we'll confirm availability for your booking.",
  },
  {
    q: "How are waiting charges calculated?",
    a: "Waiting-time charges will be confirmed with you before booking.",
  },
];

export default function TaxiCarRentalPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <TaxiCarRentalHero />
      <TaxiVehicleOptions />
      <TaxiPricingModel />
      <IconFeatureGrid heading="Popular Transfer Types" items={TRANSFER_TYPES} columns={4} />
      <IconFeatureGrid heading="How It Works" items={HOW_IT_WORKS} columns={3} />
      <IconFeatureGrid heading="Why Travel with Us?" items={WHY_TRAVEL_WITH_US} columns={4} />
      <ParkInclusionsExclusions
        heading="What's Included / Excluded"
        inclusions={["Driver", "Fuel"]}
        exclusions={[
          "Waiting charges",
          "Parking/tolls",
          "Overnight driver costs",
          "Entry tickets or attraction fees",
        ]}
      />
      <ParkFaq heading="Taxi & Car Rental FAQs" faqs={FAQS} />
      <FinalCta />
    </main>
  );
}
