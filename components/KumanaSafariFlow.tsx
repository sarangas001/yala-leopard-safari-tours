import IconFeatureGrid from "@/components/IconFeatureGrid";

const STEPS = [
  {
    title: "Hotel Pickup",
    text: "Where applicable, we collect you directly from your hotel to begin the safari.",
    icon: "/images/icons/01-hotel-pickup.svg",
  },
  {
    title: "Travel to the Park",
    text: "A comfortable drive to the Kumana National Park entrance to start your adventure.",
    icon: "/images/icons/02-travel-to-park-entrance.svg",
  },
  {
    title: "Enter in a Private 4x4 Jeep",
    text: "You'll enter Kumana in a private, open-sided 4x4 safari jeep built for the terrain.",
    icon: "/images/icons/03-enter-yala-4x4-jeep.svg",
  },
  {
    title: "Explore Wetlands & Nesting Colonies",
    text: "Your experienced local driver guides you through the park's wetlands, nesting colonies and best wildlife routes.",
    icon: "/images/icons/04-experienced-local-driver.svg",
  },
  {
    title: "Photo & Viewing Stops",
    text: "Stop at suitable photo and viewing points where permitted by the park.",
    icon: "/images/icons/05-scenic-rest-stop.svg",
  },
  {
    title: "Meals & Refreshments",
    text: "Enjoy meals or refreshments out in the park, according to your selected package.",
    icon: "/images/icons/06-breakfast-lunch-package.svg",
  },
  {
    title: "Return & Drop-off",
    text: "We return you safely, with hotel drop-off provided where included.",
    icon: "/images/icons/08-return-dropoff.svg",
  },
];

export default function KumanaSafariFlow() {
  return <IconFeatureGrid heading="What Your Safari Experience Looks Like" items={STEPS} columns={4} />;
}
