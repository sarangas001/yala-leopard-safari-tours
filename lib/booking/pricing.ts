import { parks } from "@/lib/parks";
import type { SafariPackage } from "@/components/SafariPricing";
import { BOOKING_EXTRAS, ENTRANCE_TICKET_PRICE_USD } from "@/lib/booking/extras";
import type { BookingConfig } from "@/lib/booking/types";

// Reuses the same package data already shown on each park's pricing section
// (lib/parks/*.ts) as the single source of truth, rather than duplicating
// numbers here — parses the existing "$80" / "$50 pp" display strings into
// numeric values for calculation.
export function getParkPackages(parkSlug: string): SafariPackage[] {
  const pricingSection = parks[parkSlug]?.sections.find((section) => section.type === "pricing");
  return pricingSection && pricingSection.type === "pricing" ? pricingSection.packages : [];
}

export function getPackage(parkSlug: string, packageName: string): SafariPackage | undefined {
  return getParkPackages(parkSlug).find((pkg) => pkg.name === packageName);
}

function parsePrice(price: string): { amount: number; isPerPerson: boolean } {
  const isPerPerson = /pp\b/i.test(price);
  const amount = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  return { amount, isPerPerson };
}

// Tiered pricing only covers up to 6 paying guests (matching the real
// pricing tables) even though jeep capacity can reach 7 — the counter UI
// caps adults + children at 6 for that reason. Infants aren't counted here;
// infant pricing rules are still being finalized.
export const MAX_TIERED_GUESTS = 6;

export function calculatePackagePrice(pkg: SafariPackage | undefined, payingGuests: number): number {
  if (!pkg || payingGuests <= 0) return 0;

  if (pkg.flatPrice) {
    const { amount } = parsePrice(pkg.flatPrice);
    return amount * payingGuests;
  }

  if (!pkg.tiers || pkg.tiers.length === 0) return 0;
  const tierIndex = Math.min(payingGuests, pkg.tiers.length) - 1;
  const tier = pkg.tiers[Math.max(tierIndex, 0)];
  const { amount, isPerPerson } = parsePrice(tier.price);
  return isPerPerson ? amount * payingGuests : amount;
}

export type PriceBreakdown = {
  packageCharge: number;
  entranceTickets: number;
  extrasCharge: number;
  total: number;
};

export function calculateBreakdown(
  config: Pick<BookingConfig, "adults" | "children" | "entranceTickets" | "extras">,
  pkg: SafariPackage | undefined
): PriceBreakdown {
  const payingGuests = config.adults + config.children;
  const packageCharge = calculatePackagePrice(pkg, payingGuests);
  const entranceTickets = config.entranceTickets ? ENTRANCE_TICKET_PRICE_USD * payingGuests : 0;
  const extrasCharge = config.extras.reduce((sum, extraId) => {
    const extra = BOOKING_EXTRAS.find((e) => e.id === extraId);
    return sum + (extra?.price ?? 0);
  }, 0);

  return {
    packageCharge,
    entranceTickets,
    extrasCharge,
    total: packageCharge + entranceTickets + extrasCharge,
  };
}

export function formatUsd(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
