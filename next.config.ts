import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid stale Turbopack cache pointing at old root /app after moving to src/app.
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  async redirects() {
    return [
      {
        source: "/growth-playbook/founder-led-growth/sta-je-founder-led-growth",
        destination: "/growth-playbook/founder-led-growth/what-founder-led-growth-is",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/sta-je-founder-led-growth",
        destination: "/en/growth-playbook/founder-led-growth/what-founder-led-growth-is",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/definisanje-icp-a",
        destination: "/growth-playbook/founder-led-growth/how-to-define-your-icp",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/definisanje-icp-a",
        destination: "/en/growth-playbook/founder-led-growth/how-to-define-your-icp",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/linkedin-profil-founder-a",
        destination: "/growth-playbook/founder-led-growth/linkedin-profile-optimization-founder",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/linkedin-profil-founder-a",
        destination: "/en/growth-playbook/founder-led-growth/linkedin-profile-optimization-founder",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/linkedin-content-strategija",
        destination: "/growth-playbook/founder-led-growth/linkedin-content-strategy-founder",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/linkedin-content-strategija",
        destination: "/en/growth-playbook/founder-led-growth/linkedin-content-strategy-founder",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/edukativni-linkedin-postovi",
        destination: "/growth-playbook/founder-led-growth/write-educational-linkedin-posts",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/edukativni-linkedin-postovi",
        destination: "/en/growth-playbook/founder-led-growth/write-educational-linkedin-posts",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/linkedin-komentarisanje",
        destination: "/growth-playbook/founder-led-growth/linkedin-commenting-strategy",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/linkedin-komentarisanje",
        destination: "/en/growth-playbook/founder-led-growth/linkedin-commenting-strategy",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/linkedin-engagement-u-outreach-listu",
        destination: "/growth-playbook/founder-led-growth/linkedin-engagement-outreach-list",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/linkedin-engagement-u-outreach-listu",
        destination: "/en/growth-playbook/founder-led-growth/linkedin-engagement-outreach-list",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/webinar-kao-growth-engine",
        destination: "/growth-playbook/founder-led-growth/webinars-founder-led-growth",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/webinar-kao-growth-engine",
        destination: "/en/growth-playbook/founder-led-growth/webinars-founder-led-growth",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/linkedin-ads-boost",
        destination: "/growth-playbook/founder-led-growth/linkedin-ads-thought-leader-ads",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/linkedin-ads-boost",
        destination: "/en/growth-playbook/founder-led-growth/linkedin-ads-thought-leader-ads",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/crm-za-founder-led-growth",
        destination: "/growth-playbook/founder-led-growth/crm-pipeline-tracking",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/crm-za-founder-led-growth",
        destination: "/en/growth-playbook/founder-led-growth/crm-pipeline-tracking",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/buying-signals",
        destination: "/growth-playbook/founder-led-growth/buying-signals-b2b-sales",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/buying-signals",
        destination: "/en/growth-playbook/founder-led-growth/buying-signals-b2b-sales",
        permanent: true,
      },
      {
        source: "/growth-playbook/founder-led-growth/inbound-to-outbound",
        destination: "/growth-playbook/founder-led-growth/inbound-to-outbound-system",
        permanent: true,
      },
      {
        source: "/en/growth-playbook/founder-led-growth/inbound-to-outbound",
        destination: "/en/growth-playbook/founder-led-growth/inbound-to-outbound-system",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
