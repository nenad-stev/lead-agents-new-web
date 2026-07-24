import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/growth-playbook/",
        "/en/growth-playbook/",
        "/lead-generation-male-firme",
        "/lead-generation-srednje-firme",
        "/lead-generation-enterprise",
        "/en/lead-generation-small-companies",
        "/en/lead-generation-mid-market",
        "/en/lead-generation-enterprise",
        "/lessons",
        "/pregled-klijenata",
        "/en/client-section-preview",
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
