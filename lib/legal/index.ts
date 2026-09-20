import type { LegalPage } from "@/lib/legal/types";
import { termsAndConditions } from "@/lib/legal/terms-and-conditions";
import { privacyPolicy } from "@/lib/legal/privacy-policy";
import { cookiePolicy } from "@/lib/legal/cookie-policy";
import { refundCancellationPolicy } from "@/lib/legal/refund-cancellation-policy";

export const legalPages: Record<string, LegalPage> = {
  "terms-and-conditions": termsAndConditions,
  "privacy-policy": privacyPolicy,
  "cookie-policy": cookiePolicy,
  "refund-cancellation-policy": refundCancellationPolicy,
};

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages[slug];
}

export function getLegalPageSlugs(): string[] {
  return Object.keys(legalPages);
}
