import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/growth-playbook/founder-led-growth/pregled",
        "/en/growth-playbook/founder-led-growth/preview",
        "/pregled-klijenata",
        "/en/client-section-preview",
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
