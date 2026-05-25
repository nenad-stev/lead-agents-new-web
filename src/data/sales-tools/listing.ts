import { getRoutes } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import type { SalesToolCategoryId } from "@/types/sales-tool";

import { salesTools } from "./index";

export type SalesToolListingItem = {
  slug: string;
  href: string;
  name: string;
  logo: string;
  tagline: string;
  category: string;
  categoryId: SalesToolCategoryId;
  startingPrice: string;
  trial: string;
  recommended?: boolean;
  rating?: { g2: number; g2Reviews: number };
};

export function getSalesToolsListing(locale: Locale): SalesToolListingItem[] {
  const routes = getRoutes(locale);

  return salesTools.map((tool) => ({
    slug: tool.slug,
    href: routes.salesTool(tool.slug),
    name: tool.name,
    logo: tool.logo,
    tagline: tool.tagline[locale],
    category: tool.category[locale],
    categoryId: tool.categoryId,
    startingPrice: tool.pricing.startingPrice[locale],
    trial: tool.pricing.trial[locale],
    recommended: tool.recommended,
    rating: tool.rating,
  }));
}
