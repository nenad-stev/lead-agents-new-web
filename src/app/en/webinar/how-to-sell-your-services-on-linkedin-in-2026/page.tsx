import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Disclosure, DisclosureList } from "@/components/ui/Disclosure";
import { Section } from "@/components/ui/Section";
import { getDictionary } from "@/lib/i18n";
import { absoluteUrl, pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("en");
const pageUrl = "/en/webinar/how-to-sell-your-services-on-linkedin-in-2026";
const youtubeUrl = "https://www.youtube.com/watch?v=FR1Zh0zguXc";
const youtubeEmbedUrl = "https://www.youtube.com/embed/FR1Zh0zguXc";
const heroImage = "/images/webinars/kako-prodati-usluge-na-linkedin-u-2026.png";
const pageAbsoluteUrl = absoluteUrl(pageUrl);
const heroImageAbsoluteUrl = absoluteUrl(heroImage);
const ctaHref = "/en/contact";

const faqItems = [
  {
    question: "Who is this webinar for?",
    answer:
      "This webinar is for B2B founders, agencies, consultants, service companies, SaaS teams, and sales or marketing leaders who want more qualified LinkedIn meetings.",
  },
  {
    question: "What is Founder-Led Growth?",
    answer:
      "Founder-Led Growth is a process where the founder becomes the face of the company, builds trust with ideal buyers, and turns that trust into qualified pipeline.",
  },
  {
    question: "Do I need a big LinkedIn audience?",
    answer:
      "No. A large audience can help, but it is not required. Clear ICP, strong profile positioning, relevant content, and signal-based outreach matter much more.",
  },
  {
    question: "Does cold outreach still work?",
    answer:
      "Yes, but only when it is targeted, personalized with context, supported by value-based follow-up, and tracked in CRM.",
  },
  {
    question: "Why does content matter if we already do outreach?",
    answer:
      "Content builds trust before the first message. That context improves acceptance, reply rate, and meeting quality.",
  },
  {
    question: "What are buying signals?",
    answer:
      "Buying signals are actions that show intent: profile views, comments, website visits, webinar registrations, DM replies, pricing or contact page visits, and ad engagement.",
  },
  {
    question: "Do LinkedIn Ads work for Balkan markets?",
    answer:
      "LinkedIn Ads are currently less practical for local Balkan languages due to language targeting limitations, but they work well for international B2B campaigns in English, especially Thought Leader Ads.",
  },
  {
    question: "What do I get in a Growth Strategy Session?",
    answer:
      "You get a practical audit of your current GTM motion: ICP, offer, profile, outreach, content, CRM, and next-step recommendations you can execute immediately.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Sell Your Services on LinkedIn in 2026",
  description:
    "Webinar replay and recap of the Founder-Led Growth system for LinkedIn sales, content, outreach, ads, CRM, and buying signals.",
  inLanguage: "en",
  image: [heroImageAbsoluteUrl],
  mainEntityOfPage: pageAbsoluteUrl,
  author: {
    "@type": "Organization",
    name: "Lead Agents",
  },
  publisher: {
    "@type": "Organization",
    name: "Lead Agents",
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/lead-agents-logo.png"),
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Webinars",
      item: absoluteUrl("/en/webinar"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "How to Sell Your Services on LinkedIn in 2026",
      item: pageAbsoluteUrl,
    },
  ],
};

export const metadata: Metadata = {
  ...pageMetadata({
    locale: "en",
    paths: staticPaths.webinarLinkedIn2026,
    title: "How to Sell Your Services on LinkedIn in 2026 | Founder-Led Growth Webinar",
    description:
      "Watch the Lead Agents webinar and learn how Founder-Led Growth connects LinkedIn profile optimization, content, cold outreach, LinkedIn Ads, CRM, and buying signals into one predictable B2B pipeline system.",
    keywords: [
      "how to sell services on LinkedIn",
      "LinkedIn sales",
      "B2B sales on LinkedIn",
      "LinkedIn outreach",
      "cold sales outreach",
      "Founder-Led Growth",
      "LinkedIn lead generation",
      "B2B lead generation",
      "LinkedIn Ads",
      "Thought Leader Ads",
      "LinkedIn profile optimization",
      "CRM lead scoring",
      "buying signals",
    ],
  }),
  openGraph: {
    title: "How to Sell Your Services on LinkedIn in 2026 | Founder-Led Growth Webinar",
    description:
      "Founder-Led Growth webinar recap for modern B2B sales on LinkedIn: profile, content, outreach, ads, CRM, and buying signals.",
    url: absoluteUrl(pageUrl),
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1024,
        height: 576,
        alt: "How to Sell Your Services on LinkedIn in 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Your Services on LinkedIn in 2026",
    description:
      "Founder-Led Growth webinar replay for B2B LinkedIn sales, outreach, content, ads, and CRM.",
    images: [heroImage],
  },
};

export default function WebinarLinkedIn2026EnPage() {
  return (
    <>
      <Header locale="en" dictionary={dictionary} />
      <main className="pb-24">
        <section className="border-b border-border/50 bg-[radial-gradient(circle_at_top_right,rgba(255,204,0,0.22),transparent_45%),var(--background)] py-14 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Webinar Replay
              </p>
              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                How to Sell Your Services on LinkedIn in 2026
              </h1>
              <p className="max-w-5xl text-lg leading-relaxed text-muted md:text-xl">
                Founder-Led Growth methodology for modern B2B sales, a system that connects LinkedIn
                profile optimization, content, cold outreach, LinkedIn Ads, CRM, and buying signals
                into one predictable pipeline engine.
              </p>
              <p className="max-w-4xl text-base leading-relaxed text-muted">
                This webinar explains what modern LinkedIn sales looks like for B2B companies that
                want more qualified meetings, stronger outreach, a credible founder brand, and a more
                controllable pipeline.
              </p>
              <p className="max-w-4xl rounded-xl border border-accent/35 bg-accent/10 px-4 py-3 text-sm text-foreground/90">
                Methodology used with 40+ B2B clients and applied across more than $120M in sales
                pipeline.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#video"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Watch webinar
                </a>
                <Link
                  href={ctaHref}
                  className="rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Book a meeting
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-8 w-full overflow-hidden rounded-2xl border border-border bg-black/25 shadow-2xl md:w-[70%]">
              <div className="relative aspect-video w-full">
                <Image
                  src={heroImage}
                  alt="Lead Agents webinar hero visual"
                  width={1024}
                  height={576}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-8">
          <Section id="video" title="Watch the full webinar">
            <p className="max-w-4xl text-lg leading-relaxed text-muted">
              In this replay we walk through the full Founder-Led Growth system: ICP and positioning,
              profile optimization, outbound workflow, content engine, LinkedIn Ads, CRM tracking,
              and signal-based follow-up.
            </p>
            <div className="mt-8 max-w-full overflow-hidden rounded-2xl border border-border bg-card/50 p-2 sm:p-3 md:p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  src={youtubeEmbedUrl}
                  title="How to Sell Your Services on LinkedIn in 2026"
                  className="absolute left-0 top-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card/40 p-6 text-sm text-muted">
              <p><strong className="text-foreground">Topic:</strong> LinkedIn sales and Founder-Led Growth</p>
              <p className="mt-1">
                <strong className="text-foreground">Best for:</strong> B2B founders, agencies,
                consultants, service firms, SaaS teams, and sales/marketing leaders.
              </p>
            </div>
            <Link
              href={ctaHref}
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-black"
            >
              Book a meeting
            </Link>
          </Section>

          <Section title="What changed in B2B sales?">
            <p className="text-muted">
              Generic outreach no longer works. Buyers now evaluate vendors across multiple touchpoints
              before booking a meeting: content, profile, webinar, ads, website, then outreach.
            </p>
            <p className="mt-4 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
              Cold outreach cannot carry the whole sales process alone. You need a system that builds
              trust before, during, and after outreach.
            </p>
          </Section>

          <Section title="Modern B2B buyer journey">
            <div className="grid gap-3 md:grid-cols-4">
              {[
                "Sees your LinkedIn post",
                "Checks your profile",
                "Watches webinar replay",
                "Sees founder multiple times",
                "Gets outreach",
                "Sees retargeting ad",
                "Visits website",
                "Books meeting",
              ].map((step, idx) => (
                <div key={step} className="rounded-xl border border-border bg-card/40 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-accent">Step {idx + 1}</p>
                  <p className="mt-2 text-sm text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Founder-Led Growth methodology">
            <p className="text-muted">
              Founder-Led Growth turns founder expertise into trust, trust into buying signals, and
              buying signals into qualified pipeline.
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                "ICP strategy",
                "LinkedIn profile optimization",
                "cold outreach and follow-up",
                "educational content",
                "podcast-style interviews",
                "LinkedIn Ads and Thought Leader Ads",
                "CRM tracking and lead scoring",
                "signal-based re-engagement",
              ].map((item) => (
                <li key={item} className="rounded-xl border border-border bg-card/40 p-4 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Manual vs automated outreach">
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="min-w-[680px] w-full text-left text-sm">
                <thead className="bg-card/70">
                  <tr>
                    <th className="px-4 py-3 text-accent">Manual outreach</th>
                    <th className="px-4 py-3 text-accent">Automated outreach</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Low daily volume", "Higher relevant volume"],
                    ["Follow-up gets forgotten", "Follow-up runs on time"],
                    ["Hard to test messaging", "Easy offer and message tests"],
                    ["Weak reporting", "Clear performance tracking"],
                    ["Ops-heavy for sales team", "More time for real conversations"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-border/70">
                      <td className="px-4 py-3 text-muted">{row[0]}</td>
                      <td className="px-4 py-3 text-muted">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Content engine and scaling layer">
            <p className="text-muted">
              We run monthly founder interviews, repurpose content across formats, and use LinkedIn
              Ads to scale posts that already show ICP traction. CRM then connects every interaction
              to pipeline outcomes.
            </p>
          </Section>

          <Section title="FAQ">
            <DisclosureList>
              {faqItems.map((item, index) => (
                <Disclosure key={item.question} variant="joined" index={index} title={item.question}>
                  <p>{item.answer}</p>
                </Disclosure>
              ))}
            </DisclosureList>
          </Section>

          <Section title="Ready to build a predictable LinkedIn pipeline?">
            <div className="rounded-2xl border border-accent/35 bg-accent/10 p-8 text-center">
              <p className="mx-auto mt-2 max-w-3xl text-muted">
                If you want a clear 90-day action plan tailored to your market, offer, and team,
                book a Growth Strategy Session.
              </p>
              <Link
                href={ctaHref}
                className="mt-6 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-hover)]"
              >
                Book a meeting
              </Link>
            </div>
          </Section>
        </div>
      </main>

      <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-full border border-accent/30 bg-card/95 p-2 shadow-xl md:hidden">
        <Link
          href={ctaHref}
          className="block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-bold text-black"
        >
          Book a meeting
        </Link>
      </div>

      <Footer locale="en" dictionary={dictionary} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "How to Sell Your Services on LinkedIn in 2026",
            description:
              "Lead Agents webinar recap on Founder-Led Growth for LinkedIn sales, outreach, content, ads, CRM, and buying signals.",
            thumbnailUrl: [heroImageAbsoluteUrl],
            embedUrl: youtubeEmbedUrl,
            contentUrl: youtubeUrl,
            inLanguage: "en",
          }),
        }}
      />
    </>
  );
}
