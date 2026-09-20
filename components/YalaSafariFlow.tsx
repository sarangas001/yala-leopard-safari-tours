import IconFeatureGrid from "@/components/IconFeatureGrid";

const STEPS = [
  {
    title: "Hotel Pickup",
    text: "Where applicable, we collect you directly from your hotel to begin the safari.",
    icon: "/images/icons/01-hotel-pickup.svg",
  },
  {
    title: "Travel to the Park",
    text: "A comfortable drive to the Yala National Park entrance to start your adventure.",
    icon: "/images/icons/02-travel-to-park-entrance.svg",
  },
  {
    title: "Enter in a 4x4 Jeep",
    text: "You'll enter Yala in a rugged, open-sided 4x4 safari jeep built for the terrain.",
    icon: "/images/icons/03-enter-yala-4x4-jeep.svg",
  },
  {
    title: "Explore With a Local Driver",
    text: "Your experienced local driver guides you along the park's best wildlife routes.",
    icon: "/images/icons/04-experienced-local-driver.svg",
  },
  {
    title: "Scenic & Rest Stops",
    text: "Stop at suitable scenic and rest points, in line with park rules and your tour length.",
    icon: "/images/icons/05-scenic-rest-stop.svg",
  },
  {
    title: "Breakfast or Lunch",
    text: "Enjoy breakfast or lunch out in the park, according to your selected package.",
    icon: "/images/icons/06-breakfast-lunch-package.svg",
  },
  {
    title: "Continue Wildlife Spotting",
    text: "Carry on exploring and spotting wildlife as the safari continues.",
    icon: "/images/icons/07-continue-wildlife-spotting.svg",
  },
  {
    title: "Return & Drop-off",
    text: "We return you safely, with drop-off provided after the safari ends.",
    icon: "/images/icons/08-return-dropoff.svg",
  },
];

export default function YalaSafariFlow() {
  return <IconFeatureGrid heading="What Your Safari Experience Looks Like" items={STEPS} columns={4} />;
}
