import type { Metadata } from "next";
import ReviewsHero from "@/components/ReviewsHero";
import ReviewsTrustSummary from "@/components/ReviewsTrustSummary";
import ReviewsFaq from "@/components/ReviewsFaq";
import ReviewsSources from "@/components/ReviewsSources";
import ReviewsGuestStories from "@/components/ReviewsGuestStories";
import ReviewsTravelerPhotos from "@/components/ReviewsTravelerPhotos";
import ReviewsSubmitForm from "@/components/ReviewsSubmitForm";
import ReviewsTrustNotes from "@/components/ReviewsTrustNotes";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Reviews | Yala Leopard Safari Tours",
  description:
    "Read experiences shared by guests who explored Sri Lanka's wildlife with our safari team, and submit your own review.",
};

export default function ReviewsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <ReviewsHero />
      <ReviewsTrustSummary />
      <ReviewsFaq />
      <ReviewsSources />
      <ReviewsGuestStories />
      <ReviewsTravelerPhotos />
      <ReviewsSubmitForm />
      <ReviewsTrustNotes />
      <FinalCta />
    </main>
  );
}
