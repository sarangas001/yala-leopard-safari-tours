import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SafariParks from "@/components/SafariParks";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FeaturedSafari from "@/components/FeaturedSafari";
import WildlifeGrid from "@/components/WildlifeGrid";
import Testimonials from "@/components/Testimonials";
import AboutPreview from "@/components/AboutPreview";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Hero />
      <TrustStrip />
      <SafariParks />
      <HowItWorks />
      <FeaturedSafari />
      <WildlifeGrid />
      <Testimonials />
      <AboutPreview />
      <FinalCta />
    </main>
  );
}
