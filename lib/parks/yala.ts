import type { ParkContent } from "@/lib/parks/types";

export const yala: ParkContent = {
  slug: "yala",
  metaTitle: "Yala National Park Safari | Yala Leopard Safari Tours",
  metaDescription:
    "Explore Yala National Park with an experienced local wildlife driver in a comfortable 4x4 safari jeep. Half-Day, 7-Hour and Full-Day options available.",
  sections: [
    {
      type: "hero",
      title: "Yala Leopard Safari Tours",
      description:
        "Explore Yala National Park with an experienced local wildlife driver in a comfortable 4x4 safari jeep. Choose from flexible Half-Day, 7-Hour and Full-Day options.",
      video: "/videos/yala-leopard.mp4",
      ctas: [{ label: "Book Yala Safari", href: "/#enquire" }],
    },
    {
      type: "pricing",
      heading: "Choose Your Yala Safari",
      description:
        "Whether you're after a quick morning game drive or a full day tracking wildlife, we have a package to suit your schedule and group size. Every safari runs in a comfortable 4x4 jeep with an experienced local driver, with private and shared options available.",
      packages: [
        {
          name: "Half-Day Private Safari",
          time: "5:00 AM – 10:00 AM",
          duration: "Approx. 4–5 hours",
          includes: "Breakfast",
          tiers: [
            { group: "1 Person", price: "$80" },
            { group: "2 Persons", price: "$50 pp" },
            { group: "3 Persons", price: "$40 pp" },
            { group: "4 Persons", price: "$35 pp" },
            { group: "5 Persons", price: "$30 pp" },
            { group: "6 Persons", price: "$28 pp" },
          ],
        },
        {
          name: "7-Hour Private Safari",
          time: "5:00 AM – 12:00 PM",
          duration: "7 hours",
          includes: "Breakfast",
          tiers: [
            { group: "1 Person", price: "$95" },
            { group: "2 Persons", price: "$60 pp" },
            { group: "3 Persons", price: "$50 pp" },
            { group: "4 Persons", price: "$42 pp" },
            { group: "5 Persons", price: "$38 pp" },
            { group: "6 Persons", price: "$35 pp" },
          ],
        },
        {
          name: "7-Hour Shared Safari",
          time: "5:00 AM – 12:00 PM",
          duration: "7 hours",
          includes: "Breakfast",
          flatPrice: "$25 per person",
        },
        {
          name: "Full-Day Private Safari",
          time: "5:00 AM – 6:00 PM",
          duration: "Approx. 13 hours",
          includes: "Breakfast and lunch",
          tiers: [
            { group: "1 Person", price: "$140" },
            { group: "2 Persons", price: "$90 pp" },
            { group: "3 Persons", price: "$75 pp" },
            { group: "4 Persons", price: "$65 pp" },
            { group: "5 Persons", price: "$58 pp" },
            { group: "6 Persons", price: "$52 pp" },
          ],
        },
        {
          name: "Full-Day Shared Safari",
          time: "5:00 AM – 6:00 PM",
          duration: "Approx. 13 hours",
          includes: "Breakfast and lunch",
          flatPrice: "$50 per person",
        },
      ],
      note: "Maximum capacity: up to 7 passengers per jeep.",
    },
    {
      type: "whyVisit",
      heading: "Why Visit Yala National Park?",
      paragraph:
        "Yala is one of Sri Lanka's best-known wildlife destinations, famous above all for its leopards — the park has one of the highest leopard densities in the world. Beyond leopards, keep an eye out for elephants, sloth bears, crocodiles, spotted deer, wild boar and abundant birdlife, all set across a striking mix of forest, grassland, lagoon and coastal landscapes. With golden light and dramatic scenery to match the wildlife, Yala is also an excellent choice for wildlife photography.",
      disclaimer:
        "Please note: wildlife sightings are not guaranteed. Yala is home to an incredible diversity of animals, but sightings depend on the day and cannot be promised on every safari drive.",
    },
    {
      type: "safariFlow",
      heading: "What Your Safari Experience Looks Like",
      columns: 4,
      items: [
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
      ],
    },
    {
      type: "inclusionsExclusions",
      heading: "What's Included & Excluded",
      intro:
        "Exact inclusions depend on the package you select — here's a general guide to what's covered.",
      inclusions: [
        "Hotel pickup/drop-off in selected areas",
        "4x4 safari jeep",
        "Experienced English-speaking wildlife driver",
        "Drinking water",
        "Breakfast",
        "Lunch on applicable full-day package",
        "Binocular availability where provided",
      ],
      exclusions: [
        "Yala National Park entrance ticket unless selected/paid as an add-on",
        "Personal expenses",
        "Optional services not selected during booking",
        "Extra pickup/transport charges outside included areas where applicable",
      ],
    },
    {
      type: "checklist",
      heading: "Pickup Information",
      intro:
        "Included pickup areas will be confirmed with you directly based on where you're staying. When you make your booking, just let us know:",
      columns: [
        {
          icon: "check",
          items: [
            "Whether you'd like hotel pickup",
            "If you haven't decided on your hotel yet",
            "Your hotel or property name",
            "Any special pickup instructions",
          ],
        },
      ],
    },
    {
      type: "wildlifeSlider",
      heading: "Wildlife You May See",
      animals: [
        { name: "Sri Lankan Leopard", image: "/images/parks/yala.jpg" },
        { name: "Asian Elephant", image: "/images/parks/udawalawe.jpg" },
        { name: "Sloth Bear", image: "/images/wildlife/sloth-bear.jpg" },
        { name: "Crocodile", image: "/images/wildlife/crocodile.jpg" },
        { name: "Spotted Deer", image: "/images/wildlife/spotted-deer.jpg" },
        { name: "Wild Boar", image: "/images/wildlife/wild-boar.jpg" },
        { name: "Peacock", image: "/images/wildlife/peacock.jpg" },
        { name: "Resident & Migratory Birds", image: "/images/parks/bundala.jpg" },
      ],
    },
    {
      type: "checklist",
      heading: "What to Bring & Important Information",
      columns: [
        {
          heading: "What to Bring",
          icon: "check",
          items: [
            "Passport or ID",
            "Comfortable clothing",
            "Comfortable shoes",
            "Camera",
            "Binoculars",
            "Sunscreen",
            "Hat",
            "Sunglasses",
            "Cash where needed",
          ],
        },
        {
          heading: "Important Information",
          icon: "info",
          items: [
            "Morning safari starts early; guests should be ready at the confirmed pickup time.",
            "Pickup time may vary depending on hotel location.",
            "Wildlife sightings cannot be guaranteed.",
            "Routes can change due to weather, park conditions or safety.",
            "Safari roads can be rough.",
            "Guests should follow park rules and the driver's instructions.",
            "Drones, alcohol and drugs are not allowed.",
          ],
        },
      ],
    },
    { type: "reviews" },
    {
      type: "faq",
      heading: "Yala FAQs",
      intro: "Quick answers to the questions we hear most before booking a Yala safari.",
      faqs: [
        {
          q: "What is the best time for a Yala safari?",
          a: "Early morning safaris, starting around 5:00 AM, tend to offer the best wildlife activity and cooler temperatures. Our Full-Day safari also lets you experience both morning and late-afternoon light.",
        },
        {
          q: "Is the park entrance ticket included?",
          a: "No — the park entrance ticket is charged separately from the safari price. It can be added as an optional extra when you book, so the cost is always clear upfront.",
        },
        {
          q: "What is the difference between shared and private safari?",
          a: "A private safari means the jeep is exclusively for your group, so you set the pace. A shared safari means you join other travellers in the same jeep at a lower fixed per-person rate.",
        },
        {
          q: "How many passengers fit in one jeep?",
          a: "Our jeeps comfortably seat up to 7 passengers.",
        },
        {
          q: "Are meals included?",
          a: "Most packages include breakfast, and full-day safaris also include lunch. Drinking water is provided throughout every safari.",
        },
        {
          q: "Is hotel pickup available?",
          a: "Yes, hotel pickup and drop-off is available in select areas. Just share your hotel details when you book and we'll confirm your pickup time.",
        },
        {
          q: "Are leopard sightings guaranteed?",
          a: "No sighting can ever be guaranteed, as animals move freely in their natural habitat. That said, Yala has one of the highest leopard densities in the world, giving you an excellent chance.",
        },
        {
          q: "Can children join?",
          a: "Yes, children are welcome on our safaris. Given the early start and rough roads, we recommend parents use their own discretion for very young children.",
        },
        {
          q: "What should I wear?",
          a: "Comfortable, neutral-toned clothing and closed shoes work best, along with a hat, sunglasses and sunscreen for the sun.",
        },
        {
          q: "What happens if the weather is bad?",
          a: "Safaris generally run in most weather conditions, though your driver may adjust the route for safety. In cases of severe weather, we'll work with you on rescheduling where possible.",
        },
      ],
    },
    {
      type: "relatedExperiences",
      experiences: [
        {
          title: "Udawalawe Elephant Safari",
          text: "Watch wild elephant herds gather in full view around the Udawalawe reservoir.",
          image: "/images/parks/udawalawe.jpg",
          href: "/safaris/udawalawe",
        },
        {
          title: "Bundala Bird Watching Safari",
          text: "Explore a Ramsar-listed wetland alive with flamingos and migratory birds.",
          image: "/images/parks/bundala.jpg",
          href: "/safaris/bundala",
        },
        {
          title: "Hambantota Port to Yala Safari",
          text: "A convenient safari transfer for cruise and port arrivals heading straight into Yala.",
          image: "/images/scenic/guide-jeep.jpg",
          href: "/hambantota-port-to-yala",
        },
      ],
    },
    { type: "finalCta" },
  ],
};
