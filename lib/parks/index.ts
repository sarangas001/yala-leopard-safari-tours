import type { ParkContent } from "@/lib/parks/types";
import { yala } from "@/lib/parks/yala";
import { udawalawe } from "@/lib/parks/udawalawe";
import { bundala } from "@/lib/parks/bundala";

export const parks: Record<string, ParkContent> = {
  yala,
  udawalawe,
  bundala,
};

export function getPark(slug: string): ParkContent | undefined {
  return parks[slug];
}

export function getParkSlugs(): string[] {
  return Object.keys(parks);
}
