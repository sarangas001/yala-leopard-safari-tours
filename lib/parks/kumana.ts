import type { ParkContent } from "@/lib/parks/types";

export const kumana: ParkContent = {
  slug: "kumana",
  metaTitle: "Kumana National Park Safari | Yala Leopard Safari Tours",
  metaDescription:
    "Discover Sri Lanka's most important bird nesting sanctuary with an experienced local safari driver in a private 4x4 jeep.",
  sections: [
    {
      type: "hero",
      title: "Kumana National Park Safari Tours",
      description:
        "Discover Sri Lanka's most important bird nesting sanctuary with an experienced local safari driver in a private 4x4 jeep.",
      video: "/videos/yala-leopard.mp4",
      ctas: [{ label: "Book Kumana Safari", href: "/#enquire" }],
    },
    {
      type: "pricing",
      heading: "Choose Your Kumana Safari",
      description: "Kumana packages are currently planned as private tours only.",
      packages: [
        {
          name: "Half-Day Private Safari",
          time: "To be confirmed",
          duration: "Approx. 4–5 hours",
          includes: "Breakfast",
          tiers: [
            { group: "1 Person", price: "$90" },
            { group: "2 Persons", price: "$55 pp" },
            { group: "3 Persons", price: "$45 pp" },
            { group: "4 Persons", price: "$40 pp" },
            { group: "5 Persons", price: "$37 pp" },
            { group: "6 Persons", price: "$35 pp" },
          ],
        },
        {
          name: "7-Hour Private Safari",
          time: "To be confirmed",
          duration: "7 hours",
          includes: "Breakfast",
          tiers: [
            { group: "1 Person", price: "$110" },
            { group: "2 Persons", price: "$68 pp" },
            { group: "3 Persons", price: "$55 pp" },
            { group: "4 Persons", price: "$48 pp" },
            { group: "5 Persons", price: "$44 pp" },
            { group: "6 Persons", price: "$40 pp" },
          ],
        },
        {
          name: "Full-Day Private Safari",
          time: "To be confirmed",
          duration: "Approx. 13 hours",
          includes: "Breakfast and lunch",
          tiers: [
            { group: "1 Person", price: "$148" },
            { group: "2 Persons", price: "$93 pp" },
            { group: "3 Persons", price: "$78 pp" },
            { group: "4 Persons", price: "$68 pp" },
            { group: "5 Persons", price: "$60 pp" },
            { group: "6 Persons", price: "$54 pp" },
          ],
        },
      ],
      note: "Maximum capacity: up to 7 passengers per jeep.",
    },
    {
      type: "whyVisit",
      heading: "Why Visit Kumana National Park?",
      paragraph:
        "Kumana is Sri Lanka's most important bird nesting sanctuary, known for its major waterbird nesting colonies around the Kumana wetland and more than 250 recorded bird species. Connected to Yala by the Kumbukkan Oya river, Kumana shares much of Yala's wildlife but offers a wilder, far less crowded safari experience. Beyond its birdlife, the park is also home to elephants, leopards, mugger crocodiles and wild boar, making it a rewarding destination for both birdwatchers and general wildlife enthusiasts.",
      disclaimer:
        "Please note: wildlife and bird sightings cannot be guaranteed. Kumana is home to a remarkable diversity of species, but sightings depend on the day, season and migration patterns.",
    },
    {
      type: "wildlifeSlider",
      heading: "Birdlife & Wildlife Highlights",
      animals: [
        { name: "Painted Stork", image: "/images/new-img/painted-storks.jpg" },
        { name: "Black-Necked Stork", image: "/images/new-img/black-necked-stork.jpeg" },
        { name: "Herons & Egrets", image: "/images/new-img/herons-egrets.jpeg" },
        { name: "Spoonbill", image: "/images/new-img/Spoonbill.jpeg" },
        { name: "Asian Elephant", image: "/images/new-img/IMG_2001.jpg" },
        { name: "Sri Lankan Leopard", image: "/images/parks/yala.jpg" },
        { name: "Mugger Crocodile", image: "/images/new-img/crocodile-1.jpg" },
        { name: "Wild Boar", image: "/images/new-img/wild-boar.jpeg" },
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
      ],
    },
    {
      type: "inclusionsExclusions",
      heading: "What's Included &amp; Excluded",
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
        "The Kumana National Park entrance ticket is charged separately from your safari's base price. Rates are set by Sri Lanka's Department of Wildlife Conservation, so this cost isn't bundled into our package pricing — it's shown as its own line item in your quote whenever it applies, so the final cost is always clear before you confirm your booking.",
    },
    {
      type: "infoSection",
      heading: "Best Time for Bird Watching",
      paragraph:
        "As a general guide, Kumana's nesting season — roughly April to June — tends to draw the biggest concentrations of waterbirds to the park's wetlands, making it a popular window for birdwatchers. Exact timing shifts a little from year to year, and access or closure dates can also change, so it's always best to confirm current conditions directly with us before your trip.",
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
            "Cash where required",
          ],
        },
      ],
    },
    { type: "reviews" },
    {
      type: "faq",
      heading: "Kumana FAQs",
      intro: "Quick answers to the questions we hear most before booking a Kumana safari.",
      faqs: [
        {
          q: "Is Kumana less crowded than Yala?",
          a: "Yes — Kumana sees far fewer visitors than Yala, giving you a quieter, wilder safari experience while offering much of the same wildlife diversity.",
        },
        {
          q: "What birds can I see at Kumana?",
          a: "Kumana is home to more than 250 recorded bird species, including major nesting colonies of painted storks, herons, egrets and spoonbills, plus the occasional rare black-necked stork.",
        },
        {
          q: "Is Kumana connected to Yala National Park?",
          a: "Yes, Kumana is connected to Yala by the Kumbukkan Oya river, and the two parks share much of the same wildlife — though Kumana remains noticeably less crowded.",
        },
        {
          q: "Are tours private?",
          a: "Yes, Kumana safaris are currently offered as private tours only, so the jeep is exclusively for your group.",
        },
        {
          q: "Is the park entrance ticket included?",
          a: "No — the park entrance ticket is charged separately and is not included in the safari price unless it's explicitly selected or added.",
        },
        {
          q: "Is hotel pickup available?",
          a: "Yes, hotel pickup and drop-off is available in applicable areas — just share your hotel details when booking.",
        },
        {
          q: "What safari duration is best for birdwatchers?",
          a: "The 7-Hour or Full-Day Private Safari gives birdwatchers the most time to explore Kumana's wetlands and nesting colonies, though the Half-Day safari is still a good introduction.",
        },
        {
          q: "Are bird sightings guaranteed?",
          a: "No sighting can ever be guaranteed, as birds and wildlife move freely and sightings depend on the day, season and migration patterns — but Kumana's nesting colonies make it one of the best parks in Sri Lanka for birdwatching.",
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
          title: "Lunugamvehera Safari",
          text: "A quieter elephant corridor connecting Yala and Udawalawe, built around the Lunugamvehera reservoir.",
          image: "/images/parks/lunugamvehera.jpg",
          href: "/safaris/lunugamvehera",
        },
      ],
    },
    { type: "finalCta" },
  ],
};
