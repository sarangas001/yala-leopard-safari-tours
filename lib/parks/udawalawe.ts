import type { ParkContent } from "@/lib/parks/types";

export const udawalawe: ParkContent = {
  slug: "udawalawe",
  metaTitle: "Udawalawe National Park Safari | Yala Leopard Safari Tours",
  metaDescription:
    "Explore the open grasslands, reservoir landscapes and elephant-rich habitats of Udawalawe National Park with an experienced local safari driver in a private 4x4 jeep.",
  sections: [
    {
      type: "hero",
      title: "Udawalawe Elephant Safari Tours",
      description:
        "Explore the open grasslands, reservoir landscapes and elephant-rich habitats of Udawalawe National Park with an experienced local safari driver in a private 4x4 jeep.",
      video: "/videos/yala-leopard.mp4",
      ctas: [{ label: "Book Udawalawe Safari", href: "/#enquire" }],
    },
    {
      type: "pricing",
      heading: "Choose Your Udawalawe Safari",
      description:
        "Udawalawe tours are currently planned as private tours only. Whichever package you choose, you'll travel in a comfortable 4x4 jeep with an experienced local driver, on a schedule built around your group.",
      packages: [
        {
          name: "Half-Day Private Safari",
          time: "To be confirmed",
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
          time: "To be confirmed",
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
          name: "Full-Day Private Safari",
          time: "To be confirmed",
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
      ],
      note: "Maximum capacity: up to 7 passengers per jeep.",
    },
    {
      type: "whyVisit",
      heading: "Why Visit Udawalawe?",
      paragraph:
        "Udawalawe is one of Sri Lanka's best-known parks for wild elephant viewing, with open habitats that often provide excellent visibility. Set across reservoir, grassland and scrub landscapes, the park is also home to water buffalo, deer, crocodiles, monkeys and a wealth of birdlife. With its wide open spaces and reliable elephant activity, Udawalawe is a strong option for families and first-time safari visitors.",
      disclaimer:
        "Please note: wildlife sightings are not guaranteed. Udawalawe is home to a wide variety of wildlife, but sightings depend on the day and cannot be promised on every safari drive.",
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
          text: "A comfortable drive to the Udawalawe National Park entrance to start your adventure.",
          icon: "/images/icons/02-travel-to-park-entrance.svg",
        },
        {
          title: "Enter in a Private 4x4 Jeep",
          text: "You'll enter Udawalawe in a private, open-sided 4x4 safari jeep built for the terrain.",
          icon: "/images/icons/03-enter-yala-4x4-jeep.svg",
        },
        {
          title: "Explore Elephant Habitats",
          text: "Your experienced local driver guides you through the park's best elephant and wildlife routes.",
          icon: "/images/icons/04-experienced-local-driver.svg",
        },
        {
          title: "Rest & Photo Stops",
          text: "Stop at suitable rest and photo points where permitted by the park.",
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
      ],
    },
    {
      type: "inclusionsExclusions",
      heading: "What's Included & Excluded",
      intro:
        "Exact inclusions depend on the package you select — here's a general guide to what's covered.",
      inclusions: [
        "Private 4x4 safari jeep",
        "Experienced English-speaking wildlife driver",
        "Hotel pickup/drop-off in applicable areas",
        "Drinking water",
        "Meals where applicable",
        "Binoculars where provided",
      ],
      exclusions: [
        "Park entrance fee unless selected or explicitly included",
        "Personal expenses",
        "Optional services not selected",
        "Pickup outside included zones where extra charges apply",
      ],
    },
    {
      type: "wildlifeSlider",
      heading: "Wildlife Highlights",
      animals: [
        { name: "Asian Elephant", image: "/images/parks/udawalawe.jpg" },
        { name: "Water Buffalo", image: "/images/parks/udawalawe.jpg" },
        { name: "Spotted Deer", image: "/images/wildlife/spotted-deer.jpg" },
        { name: "Crocodile", image: "/images/wildlife/crocodile.jpg" },
        { name: "Monkey Species", image: "/images/parks/udawalawe.jpg" },
        { name: "Peacock & Other Birds", image: "/images/wildlife/peacock.jpg" },
      ],
    },
    {
      type: "checklist",
      heading: "What to Bring",
      columns: [
        {
          icon: "check",
          items: [
            "Passport or ID",
            "Comfortable clothes and shoes",
            "Camera",
            "Binoculars",
            "Sunscreen",
            "Hat and sunglasses",
            "Cash where required",
          ],
        },
      ],
    },
    { type: "reviews" },
    {
      type: "faq",
      heading: "Udawalawe FAQs",
      intro: "Quick answers to the questions we hear most before booking an Udawalawe safari.",
      faqs: [
        {
          q: "Is Udawalawe good for elephants?",
          a: "Yes — Udawalawe is one of Sri Lanka's best-known parks for elephant viewing, with open grassland habitats that make sightings especially likely.",
        },
        {
          q: "Are the tours private?",
          a: "Yes, Udawalawe safaris are currently offered as private tours only, so the jeep is exclusively for your group.",
        },
        {
          q: "How long should I spend in Udawalawe?",
          a: "Half-Day and 7-Hour safaris both work well, though a Full-Day safari gives you the best chance to explore more of the park and its wildlife.",
        },
        {
          q: "Is the entrance ticket included?",
          a: "No — the park entrance ticket is not included in the safari price unless it's explicitly selected or added.",
        },
        {
          q: "Is hotel pickup available?",
          a: "Yes, hotel pickup and drop-off is available in applicable areas — just share your hotel details when booking.",
        },
        {
          q: "Can children join?",
          a: "Yes, children are welcome. Given the early start and rough roads, we recommend parents use their own discretion for very young children.",
        },
        {
          q: "Are elephant sightings guaranteed?",
          a: "No sighting can ever be guaranteed, as animals move freely in their natural habitat — but Udawalawe's open terrain gives you an excellent chance of seeing elephants.",
        },
        {
          q: "What should I bring?",
          a: "Comfortable clothing and shoes, a camera, binoculars, sunscreen, a hat and sunglasses — see our full what to bring list below.",
        },
      ],
    },
    {
      type: "relatedExperiences",
      experiences: [
        {
          title: "Yala Leopard Safari",
          text: "Track the world's highest density of leopards across Yala's dry-zone scrub and open plains.",
          image: "/images/parks/yala.jpg",
          href: "/safaris/yala",
        },
        {
          title: "Bundala Bird Watching Safari",
          text: "Explore a Ramsar-listed wetland alive with flamingos and migratory birds.",
          image: "/images/parks/bundala.jpg",
          href: "/safaris/bundala",
        },
        {
          title: "Taxi & Car Rental",
          text: "Private, air-conditioned vehicles with an experienced driver for the whole island.",
          image: "/images/scenic/safari-jeeps.jpg",
          href: "/#enquire",
        },
      ],
    },
    { type: "finalCta" },
  ],
};
