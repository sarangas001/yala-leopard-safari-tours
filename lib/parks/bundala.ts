import type { ParkContent } from "@/lib/parks/types";

export const bundala: ParkContent = {
  slug: "bundala",
  metaTitle: "Bundala National Park Safari | Yala Leopard Safari Tours",
  metaDescription:
    "Discover the wetlands, lagoons, coastal habitats and remarkable birdlife of Bundala National Park with an experienced local safari driver in a private 4x4 jeep.",
  sections: [
    {
      type: "hero",
      title: "Bundala Bird Watching Safari Tours",
      description:
        "Discover the wetlands, lagoons, coastal habitats and remarkable birdlife of Bundala National Park with an experienced local safari driver in a private 4x4 jeep.",
      video: "/videos/yala-leopard.mp4",
      ctas: [{ label: "Book Bundala Safari", href: "/#enquire" }],
    },
    {
      type: "pricing",
      heading: "Choose Your Bundala Safari",
      description: "Bundala packages are currently planned as private tours only.",
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
            { group: "1 Person", price: "$130" },
            { group: "2 Persons", price: "$80 pp" },
            { group: "3 Persons", price: "$68 pp" },
            { group: "4 Persons", price: "$60 pp" },
            { group: "5 Persons", price: "$52 pp" },
            { group: "6 Persons", price: "$48 pp" },
          ],
        },
      ],
      note: "Maximum capacity: up to 7 passengers per jeep.",
    },
    {
      type: "whyVisit",
      heading: "Why Visit Bundala National Park?",
      paragraph:
        "Bundala National Park is an internationally important wetland, recognised as one of Sri Lanka's finest destinations for birdwatching. Its lagoons, salt pans, scrubland and coastal landscapes support both migratory and resident bird species, drawing photographers and nature lovers keen to capture its wide open vistas and rich birdlife. As a quieter alternative to busier parks like Yala, Bundala offers a more relaxed pace for exploring Sri Lanka's wetland ecosystems.",
      disclaimer:
        "Please note: wildlife and bird sightings cannot be guaranteed. Bundala is home to a rich variety of species, but sightings depend on the day, season and migration patterns.",
    },
    {
      type: "wildlifeSlider",
      heading: "Birdlife & Wildlife Highlights",
      animals: [
        { name: "Flamingos & Migratory Waterbirds", image: "/images/parks/bundala.jpg" },
        { name: "Pelicans", image: "/images/parks/bundala.jpg" },
        { name: "Painted Storks", image: "/images/parks/bundala.jpg" },
        { name: "Herons & Egrets", image: "/images/parks/bundala.jpg" },
        { name: "Peacocks", image: "/images/wildlife/peacock.jpg" },
        { name: "Crocodiles", image: "/images/wildlife/crocodile.jpg" },
        { name: "Asian Elephant", image: "/images/parks/bundala.jpg" },
      ],
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
          text: "A comfortable drive to the Bundala National Park entrance to start your adventure.",
          icon: "/images/icons/02-travel-to-park-entrance.svg",
        },
        {
          title: "Enter in a Private 4x4 Jeep",
          text: "You'll enter Bundala in a private, open-sided 4x4 safari jeep built for the terrain.",
          icon: "/images/icons/03-enter-yala-4x4-jeep.svg",
        },
        {
          title: "Explore Wetlands & Birding Areas",
          text: "Your experienced local driver guides you through Bundala's lagoons and best birding routes.",
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
        "Park entrance ticket unless selected or explicitly included",
        "Personal expenses",
        "Optional add-ons not selected",
        "Extra pickup fees outside included areas where applicable",
      ],
    },
    {
      type: "infoSection",
      heading: "Park Entrance Information",
      paragraph:
        "The Bundala National Park entrance ticket is charged separately from your safari's base price and isn't bundled into our package pricing. Rates are set by Sri Lanka's Department of Wildlife Conservation, so this cost is shown as its own line item whenever it applies, keeping the final cost clear before you confirm your booking.",
    },
    {
      type: "infoSection",
      heading: "Best Time for Bird Watching",
      paragraph:
        "Early morning and late afternoon tend to be the most active times for birdwatching in Bundala, when temperatures are cooler and birds are most visible around the lagoons and wetlands. Overall activity varies with the season, water levels and migration cycles, so no two visits look exactly the same — your driver will help plan your route around the conditions on the day.",
    },
    {
      type: "checklist",
      heading: "Photography Tips",
      columns: [
        {
          icon: "check",
          items: [
            "Bring binoculars or a telephoto lens",
            "Keep noise low",
            "Wear neutral, comfortable clothing",
            "Follow driver/park instructions",
            "Never disturb or feed wildlife",
          ],
        },
      ],
    },
    {
      type: "checklist",
      heading: "What to Bring",
      columns: [
        {
          icon: "check",
          items: [
            "Passport/ID",
            "Comfortable clothes and shoes",
            "Camera",
            "Binoculars",
            "Sunscreen",
            "Hat and sunglasses",
            "Drinking water if additional water is desired",
            "Cash where required",
          ],
        },
      ],
    },
    { type: "reviews" },
    {
      type: "faq",
      heading: "Bundala FAQs",
      intro: "Quick answers to the questions we hear most before booking a Bundala birdwatching safari.",
      faqs: [
        {
          q: "Why is Bundala good for birdwatching?",
          a: "Bundala is an internationally important wetland with lagoons, salt pans and coastal habitats that attract a wide range of migratory and resident bird species, making it one of Sri Lanka's premier birdwatching destinations.",
        },
        {
          q: "What birds can I see?",
          a: "Bundala is known for flamingos and other migratory waterbirds, pelicans, painted storks, herons and egrets, along with resident peacocks — the exact species you see will depend on the season and time of your visit.",
        },
        {
          q: "Is Bundala less crowded than Yala?",
          a: "Yes, Bundala is generally a quieter alternative to busier parks like Yala, offering a more relaxed pace for exploring its wetland ecosystems.",
        },
        {
          q: "Are tours private?",
          a: "Yes, Bundala safaris are currently offered as private tours only, so the jeep is exclusively for your group.",
        },
        {
          q: "Is the park entrance ticket included?",
          a: "No — the park entrance ticket is not included in the safari price unless it's explicitly selected or added.",
        },
        {
          q: "Is hotel pickup available?",
          a: "Yes, hotel pickup and drop-off is available in applicable areas — just share your hotel details when booking.",
        },
        {
          q: "What safari duration is best for birdwatchers?",
          a: "A Full-Day safari gives you the most time across different habitats and lighting conditions, but Half-Day and 7-Hour safaris are also great options if you're short on time.",
        },
        {
          q: "Are bird sightings guaranteed?",
          a: "No sighting can ever be guaranteed, as birds move freely in their natural habitat and sightings depend on the day, season and migration patterns — but Bundala's rich wetland habitats give you an excellent chance of memorable birdwatching.",
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
          title: "Udawalawe Elephant Safari",
          text: "Watch wild elephant herds gather in full view around the Udawalawe reservoir.",
          image: "/images/parks/udawalawe.jpg",
          href: "/safaris/udawalawe",
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
