import type { Metadata } from "next";

export const SITE_URL = "https://yalaleopardsafaritours.com";
export const SITE_NAME = "Yala Leopard Safari Tours";
export const DEFAULT_OG_IMAGE = "/images/parks/yala.jpg";

type RouteSeo = { title: string; description: string };

/** Approved titles and meta descriptions from the GDP SEO plan (section 3), keyed by route path. */
export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    title: "Safari in Sri Lanka | Yala, Udawalawe & Bundala Tours",
    description:
      "Plan a safari in Sri Lanka with private jeep tours in Yala, Udawalawe, Bundala and Lunugamvehera. Compare wildlife parks, packages and booking options.",
  },
  "/about": {
    title: "About Yala Leopard Safari Tours | Meet Our Safari Team",
    description:
      "Meet the team behind Yala Leopard Safari Tours. Learn about our family-run history, experienced local safari drivers and responsible wildlife experiences.",
  },
  "/safaris": {
    title: "Safari Tours Sri Lanka | Compare 4 National Parks",
    description:
      "Looking for safari tours Sri Lanka is known for? Compare Yala, Udawalawe, Bundala and Lunugamvehera, with private jeep packages and tour durations.",
  },
  "/gallery": {
    title: "Yala National Park Photos | Wildlife Safari Gallery",
    description:
      "View Yala National Park photos featuring leopards, elephants and safari landscapes, plus wildlife images from Udawalawe and Bundala National Parks.",
  },
  "/reviews": {
    title: "Yala Leopard Safari Tours Reviews | Guest Experiences",
    description:
      "Read guest experiences and feedback about Yala Leopard Safari Tours, including private jeep safaris, local drivers and wildlife trips in southern Sri Lanka.",
  },
  "/blog": {
    title: "Yala Safari Blog | Sri Lanka Wildlife & Travel Guides",
    description:
      "Explore travel guides for Yala, Udawalawe and Bundala, including safari planning, entrance fees, wildlife, park comparisons and Sri Lanka travel tips.",
  },
  "/faq": {
    title: "Yala Safari FAQs | Booking, Prices & Park Tickets",
    description:
      "Get answers about booking Yala safaris, jeep packages, park entry tickets, pickup locations, safari timings, payments, cancellations and wildlife.",
  },
  "/contact": {
    title: "Yala Safari Contact Number & Booking Enquiries",
    description:
      "Need a Yala safari contact number? Reach our local team in Tissamaharama for safari availability, jeep tour enquiries and transport assistance.",
  },
  "/taxi-car-rental": {
    title: "Yala Taxi Service & Car Rental with Driver | Sri Lanka",
    description:
      "Request a Yala taxi service or private car and van with driver for hotel pickups, Hambantota, Tissamaharama, airport transfers and travel across Sri Lanka.",
  },
  "/hambantota-port-to-yala": {
    title: "Hambantota Port to Yala Safari | Cruise Excursions",
    description:
      "Plan a Hambantota port to Yala safari with cruise port pickup, a 4x4 jeep wildlife experience and return transfer to Hambantota. Request your booking.",
  },
  "/safaris/yala": {
    title: "Safari in Yala | Jeep Tour Packages & Prices",
    description:
      "Book a safari in Yala with experienced local 4x4 jeep drivers. Compare half-day, 7-hour and full-day Yala safari packages, prices and pickup options.",
  },
  "/safaris/udawalawe": {
    title: "Udawalawe Safari | Jeep Packages & Prices",
    description:
      "Book an Udawalawe safari to see wild elephants in Sri Lanka. Compare private jeep tours, safari prices, tour durations and local pickup arrangements.",
  },
  "/safaris/bundala": {
    title: "Bundala Safari | Bundala National Park Jeep Tours",
    description:
      "Plan a Bundala safari in Bundala National Park. Explore birdwatching, wetlands, private jeep tour packages and booking options with local drivers.",
  },
  "/safaris/lunugamvehera": {
    title: "Lunugamvehera Safari | National Park Jeep Tours",
    description:
      "Explore a Lunugamvehera safari with a private jeep and local driver. Compare wildlife tour packages and opportunities to see elephants and birdlife.",
  },
  "/legal/privacy-policy": {
    title: "Privacy Policy | Yala Leopard Safari Tours",
    description:
      "Read how Yala Leopard Safari Tours collects, processes and protects personal information when you browse the website or enquire about a safari.",
  },
  "/legal/cookie-policy": {
    title: "Cookie Policy | Yala Leopard Safari Tours",
    description:
      "Understand how cookies and similar technologies are used on the Yala Leopard Safari Tours website and how you can manage your preferences.",
  },
  "/legal/terms-and-conditions": {
    title: "Terms & Conditions | Yala Leopard Safari Tours",
    description:
      "Read the terms for Yala Leopard Safari Tours safari packages, transport enquiries, bookings, guest responsibilities and other services.",
  },
  "/legal/refund-cancellation-policy": {
    title: "Refund & Cancellation Policy | Yala Leopard Safari Tours",
    description:
      "Review the refund, cancellation and booking change rules for safari tours and transport services booked with Yala Leopard Safari Tours.",
  },
};

type BuildOptions = {
  /** Overrides the entry in ROUTE_SEO (for dynamic routes such as blog posts). */
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  /** Transactional / private routes that must stay out of the index. */
  noindex?: boolean;
};

/** Per-route metadata: unique title + description, self-referencing canonical, Open Graph and Twitter tags. */
export function buildMetadata(path: string, options: BuildOptions = {}): Metadata {
  const entry = ROUTE_SEO[path];
  const title = options.title ?? entry?.title ?? SITE_NAME;
  const description = options.description ?? entry?.description ?? "";
  const image = options.image ?? DEFAULT_OG_IMAGE;
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: options.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: options.type ?? "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: image }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

/** Parses article dates such as "10th September 2026" to an ISO date string. */
export function parseArticleDate(date: string): string | undefined {
  const parsed = new Date(`${date.replace(/(\d+)(st|nd|rd|th)/, "$1")} UTC`);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10);
}
