import type { NextConfig } from "next";

/** Old FLG lesson slugs → new curriculum (FLG Lead Magnet rewrite). */
const flgLessonRedirects: Array<[string, string]> = [
  ["sta-je-founder-led-growth", "why-referrals-are-not-a-sales-system"],
  ["what-founder-led-growth-is", "why-referrals-are-not-a-sales-system"],
  ["definisanje-icp-a", "icp-who-you-actually-sell-to"],
  ["how-to-define-your-icp", "icp-who-you-actually-sell-to"],
  ["linkedin-profil-founder-a", "positioning-in-five-seconds"],
  ["linkedin-profile-optimization-founder", "positioning-in-five-seconds"],
  ["linkedin-content-strategija", "founder-content-trust-before-message"],
  ["linkedin-content-strategy-founder", "founder-content-trust-before-message"],
  ["edukativni-linkedin-postovi", "founder-content-trust-before-message"],
  ["write-educational-linkedin-posts", "founder-content-trust-before-message"],
  ["linkedin-komentarisanje", "signal-based-outreach"],
  ["linkedin-commenting-strategy", "signal-based-outreach"],
  ["linkedin-engagement-u-outreach-listu", "signal-based-outreach"],
  ["linkedin-engagement-outreach-list", "signal-based-outreach"],
  ["webinar-kao-growth-engine", "webinars-for-unready-buyers"],
  ["webinars-founder-led-growth", "webinars-for-unready-buyers"],
  ["linkedin-ads-boost", "linkedin-ads-and-retargeting"],
  ["linkedin-ads-thought-leader-ads", "linkedin-ads-and-retargeting"],
  ["crm-za-founder-led-growth", "crm-and-buying-signals"],
  ["crm-pipeline-tracking", "crm-and-buying-signals"],
  ["buying-signals", "crm-and-buying-signals"],
  ["buying-signals-b2b-sales", "crm-and-buying-signals"],
  ["inbound-to-outbound", "flg-system-in-practice"],
  ["inbound-to-outbound-system", "flg-system-in-practice"],
];

function flgRedirects() {
  return flgLessonRedirects.flatMap(([from, to]) => [
    {
      source: `/growth-playbook/founder-led-growth/${from}`,
      destination: `/growth-playbook/founder-led-growth/${to}`,
      permanent: true,
    },
    {
      source: `/en/growth-playbook/founder-led-growth/${from}`,
      destination: `/en/growth-playbook/founder-led-growth/${to}`,
      permanent: true,
    },
  ]);
}

const nextConfig: NextConfig = {
  // Avoid stale Turbopack cache pointing at old root /app after moving to src/app.
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  async redirects() {
    return flgRedirects();
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
