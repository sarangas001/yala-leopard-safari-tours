import type { Metadata } from "next";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, buildMetadata } from "@/lib/seo";
import TrustStrip from "@/components/TrustStrip";
import SafariParks from "@/components/SafariParks";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FeaturedSafari from "@/components/FeaturedSafari";
import WildlifeGrid from "@/components/WildlifeGrid";
import Testimonials from "@/components/Testimonials";
import AboutPreview from "@/components/AboutPreview";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata("/");

// Organization data uses only details already published on the site (footer / contact page).
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-black.png`,
  image: `${SITE_URL}/images/parks/yala.jpg`,
  telephone: "+94760435578",
  email: "yalaleopardsafariride@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "538/B Gagasiripura, Debarawawa",
    addressLocality: "Tissamaharama",
    addressCountry: "LK",
  },
  sameAs: [
    "https://www.facebook.com/share/18UbnPnyya/",
    "https://www.instagram.com/yalaleopardsafariride",
    "https://youtube.com/@yalaleopardsafariride",
  ],
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <JsonLd data={ORGANIZATION_SCHEMA} />
      <Hero />
      <TrustStrip />
      <SafariParks />
      <HowItWorks />
      <FeaturedSafari />
      {/* <WildlifeGrid /> */}
      <Testimonials />
      <AboutPreview />
      <FinalCta />
    </main>
  );
}
