import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ReviewsHero from "@/components/ReviewsHero";
import ReviewsTrustSummary from "@/components/ReviewsTrustSummary";
import ReviewsFaq from "@/components/ReviewsFaq";
import ReviewsSources from "@/components/ReviewsSources";
import Testimonials from "@/components/Testimonials";
import ReviewsTravelerPhotos from "@/components/ReviewsTravelerPhotos";
import ReviewsSubmitForm from "@/components/ReviewsSubmitForm";
import ReviewsTrustNotes from "@/components/ReviewsTrustNotes";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = buildMetadata("/reviews");

export default function ReviewsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <ReviewsHero />
      <div id="guest-reviews" className="scroll-mt-20">
        <Testimonials showAllLink={false} />
      </div>
      <ReviewsTravelerPhotos />
      <ReviewsTrustSummary />
      <ReviewsSources />
      <ReviewsFaq />
      <ReviewsSubmitForm />
      <ReviewsTrustNotes />
      <FinalCta />
    </main>
  );
}
