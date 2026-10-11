import type { SafariPackage } from "@/components/SafariPricing";

// Times and inclusions shared by every park's packages (Yala, Udawalawe,
// Bundala and Lunugamvehera all run on the same schedule), so each package
// spreads one of these instead of repeating the copy.
type PackageDetails = Pick<SafariPackage, "time" | "timeOptions" | "includes" | "excludes">;

const TICKETS_EXCLUDED = "Tickets not included (Can add as add-on option)";
const TRANSFER = "Free Hotel pick and drop around Yala and Tissamaharama";

export const MAX_CAPACITY_NOTE = "Maximum capacity: up to 7 passengers per jeep.";

export const HALF_DAY_DETAILS: PackageDetails = {
  time: "Morning: 5:00 AM – 10:00 AM | Evening: 1:30 PM – 6:00 PM",
  timeOptions: [
    { label: "Morning", time: "5:00 AM – 10:00 AM" },
    { label: "Evening", time: "1:30 PM – 6:00 PM" },
  ],
  includes: ["Breakfast Included", "Free Water Bottle", "Safari Jeep Included", TRANSFER, "Driver guide included"],
  excludes: [TICKETS_EXCLUDED],
};

export const SEVEN_HOUR_DETAILS: PackageDetails = {
  time: "5:00 AM – 12:00 PM",
  includes: ["Breakfast Included", "Free Water Bottle", "Safari Jeep Included", TRANSFER, "Driver guide included"],
  excludes: [TICKETS_EXCLUDED],
};

export const FULL_DAY_DETAILS: PackageDetails = {
  time: "5:00 AM – 6:00 PM",
  includes: [
    "Breakfast and Lunch Included",
    "Free Fruit Pack",
    "Free Water Bottle",
    "Safari Jeep Included",
    TRANSFER,
    "Driver guide included",
  ],
  excludes: [TICKETS_EXCLUDED],
};
