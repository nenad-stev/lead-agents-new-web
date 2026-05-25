import { coldSalesOutreach } from "./cold-sales-outreach";
import { founderLedGrowth } from "./founder-led-growth";
import { kreiranjeDigitalnihKurseva } from "./kreiranje-digitalnih-kurseva";
import { licniBranding } from "./licni-branding";
import { placeneReklame } from "./placene-reklame";

import type { ServicePage } from "@/types/service";

const servicePages: Record<string, ServicePage> = {
  [founderLedGrowth.slug]: founderLedGrowth,
  [coldSalesOutreach.slug]: coldSalesOutreach,
  [kreiranjeDigitalnihKurseva.slug]: kreiranjeDigitalnihKurseva,
  [placeneReklame.slug]: placeneReklame,
  [licniBranding.slug]: licniBranding,
};

export function getServiceBySlug(slug: string): ServicePage | null {
  return servicePages[slug] ?? null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicePages);
}

export function hasServicePage(slug: string): boolean {
  return slug in servicePages;
}
