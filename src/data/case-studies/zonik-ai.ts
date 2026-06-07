import type { CaseStudyDetail } from "@/types/case-study";

const IMG = "/images/case-studies/zonik-ai";
const LIVE_SITE = "https://zonikai.com/";

export const zonikAiCaseStudy: CaseStudyDetail = {
  slug: "zonik-ai",
  title: { sr: "Zonik AI", en: "Zonik AI" },
  excerpt: {
    sr: "After-hours load tracking, objašnjen za 30 sekundi.",
    en: "After-hours load tracking, explained in 30 seconds.",
  },
  image: `${IMG}/zonik-case-study-cover.png`,
  imageAlt: {
    sr: "Zonik AI marketing sajt na laptopu i telefonu",
    en: "Zonik AI marketing website on laptop and phone",
  },
  meta: {
    title: {
      sr: "Zonik AI Case Study | Lead Agents",
      en: "Zonik AI Case Study | Lead Agents",
    },
    description: {
      sr: "Kako smo dizajnirali i izgradili conversion-focused marketing sajt za Zonik AI, B2B SaaS za after-hours load tracking u trucking industriji.",
      en: "How we designed and built a conversion-focused marketing website for Zonik AI, a B2B SaaS for after-hours load tracking in trucking.",
    },
  },
  hero: {
    title: {
      sr: "Zonik AI — After-Hours Load Tracking SaaS Website",
      en: "Zonik AI — After-Hours Load Tracking SaaS Website",
    },
    tags: [
      { sr: "B2B SaaS", en: "B2B SaaS" },
      { sr: "Web Design", en: "Web Design" },
      { sr: "Next.js", en: "Next.js" },
      { sr: "Framer Motion", en: "Framer Motion" },
      { sr: "Conversion-focused", en: "Conversion-focused" },
    ],
    image: {
      src: `${IMG}/zonik-case-study-cover.png`,
      alt: {
        sr: "Zonik AI hero sekcija sa dashboard preview-om na desktopu i mobilnom",
        en: "Zonik AI hero section with dashboard preview on desktop and mobile",
      },
      fit: "contain",
    },
    links: [
      {
        label: { sr: "Pogledaj live sajt", en: "View live site" },
        href: { sr: LIVE_SITE, en: LIVE_SITE },
        primary: true,
      },
    ],
  },
  sections: [
    {
      id: "about",
      title: { sr: "O projektu", en: "Project overview" },
      paragraphs: [
        {
          sr: "Zonik AI je B2B SaaS za trucking i freight kompanije. AI agent prati aktivne load-ove 24/7, prati GPS, zove vozače preko AI voice agenta i alarmira after-hours tim samo kada je potrebna akcija.",
          en: "Zonik AI is a B2B SaaS for trucking and freight companies. An AI agent monitors active loads 24/7, tracks GPS, calls drivers with AI voice agents, and alerts the after-hours team only when action is needed.",
        },
        {
          sr: "Marketing sajt (Home + Contact), statički export, deploy na Netlify. Stack: Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion.",
          en: "Marketing website (Home + Contact), static export, deployed on Netlify. Stack: Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion.",
        },
        {
          sr: "Zonik je trebao sajt koji odmah objašnjava kompleksan proizvod freight dispatcherima i ops liderima, ne generički SaaS template. Sajt je morao da deluje moderno, pouzdano i product-led, uz jasan fokus na demo bookings.",
          en: "Zonik needed a site that instantly communicates a complex product to freight dispatchers and ops leaders, not a generic SaaS template. The site had to feel modern, trustworthy, and product-led while driving demo bookings.",
        },
      ],
      stats: [
        { value: "12", label: { sr: "Sekcija na Home stranici", en: "Home page sections" } },
        { value: "2", label: { sr: "Stranice (Home + Contact)", en: "Pages (Home + Contact)" } },
        { value: "24/7", label: { sr: "Monitoring priča u centru dizajna", en: "Monitoring story at the design core" }, featured: true },
      ],
    },
    {
      id: "challenge",
      title: { sr: "Izazov", en: "The challenge" },
      paragraphs: [
        {
          sr: "Zonik AI prodaje nevidljiv proizvod: always-on monitoring koji zamenjuje ručne overnight check call-ove. Stari pristup (feature liste, stock fotografije) nije radio, trebalo nam je show, don't tell kroz UI preview koji deluje uživo.",
          en: "Zonik AI sells an invisible product: always-on monitoring that replaces manual overnight check calls. The old approach (feature lists, stock photos) would not work; we needed show, don't tell through live-feeling UI previews.",
        },
      ],
      list: {
        items: [
          {
            sr: "Šta se dešava automatski: GPS, risk detection, AI driver calls",
            en: "What happens automatically: GPS, risk detection, AI driver calls",
          },
          {
            sr: "Šta tim i dalje radi: samo izuzeci, ne svaki load",
            en: "What the team still does: exceptions only, not every load",
          },
          {
            sr: "Zašto jedan operator + AI može zameniti 10-osobni overnight tim",
            en: "Why one operator plus AI can replace a 10-person overnight team",
          },
        ],
      },
    },
    {
      id: "approach",
      title: { sr: "Naš pristup", en: "Our approach" },
      paragraphs: [
        {
          sr: "Izabrali smo čist, svetli, Attio-inspirisan B2B look umesto tamnih „cyber“ trucking klišeja. Soft periwinkle accent (#818CF8) je tech-forward ali pristupačan, bez agresivne crveno-plave logistics palete.",
          en: "We chose a clean, light, Attio-inspired B2B look instead of dark cyber trucking clichés. A soft periwinkle accent (#818CF8) feels tech-forward but approachable, not an aggressive red/blue logistics palette.",
        },
        {
          sr: "Naizmenične pozadine sekcija, tight tracking naslovi i gradient accent na ključnim frazama daju ritam pri skrolovanju. Reusable design system drži konzistentnost bez osećaja templata.",
          en: "Alternating section backgrounds, tight-tracking headlines, and gradient accent on key phrases create rhythm while scrolling. A reusable design system keeps things consistent without feeling templated.",
        },
        {
          sr: "B2B kupci u freight-u skeptični su prema hype-u. Smiren, precizan, product-demo feel gradi poverenje brže od glasnog marketinga.",
          en: "B2B buyers in freight are skeptical of hype. A calm, precise, product-demo feel builds trust faster than loud marketing.",
        },
      ],
      list: {
        title: { sr: "Design system building blocks:", en: "Design system building blocks:" },
        items: [
          { sr: "SectionShell + SectionHeader", en: "SectionShell + SectionHeader" },
          { sr: "HoverCard + icon-chip", en: "HoverCard + icon-chip" },
          { sr: "card-clean komponente", en: "card-clean components" },
          { sr: "Periwinkle accent (#818CF8)", en: "Periwinkle accent (#818CF8)" },
        ],
      },
      image: {
        src: `${IMG}/zonik-case-study-design-system.png`,
        alt: {
          sr: "Zonik AI design system: boje, tipografija, komponente",
          en: "Zonik AI design system: colors, typography, components",
        },
        fit: "contain",
      },
      imageLayout: "full",
    },
    {
      id: "product-hero",
      title: { sr: "Product-led hero", en: "Product-led hero" },
      paragraphs: [
        {
          sr: "Hero nije bio slogan wall. Naslov: „Every load monitored. Every risk detected. Your AI after-hours tracking agent.“",
          en: "The hero was not a slogan wall. Headline: \"Every load monitored. Every risk detected. Your AI after-hours tracking agent.\"",
        },
        {
          sr: "Hero uključuje live-feeling dashboard preview: animirani ETA countdown, risk badge toggle, voice agent pulse i alert toast. Posetilac odmah vidi proizvod, ne apstraktan copy.",
          en: "The hero includes a live-feeling dashboard preview: animated ETA countdown, risk badge toggle, voice agent pulse, and alert toast. Visitors immediately see the product, not abstract copy.",
        },
      ],
      link: {
        label: { sr: "Pogledaj hero na live sajtu", en: "See the hero on the live site" },
        href: { sr: LIVE_SITE, en: LIVE_SITE },
      },
    },
    {
      id: "animations",
      title: { sr: "Animacije sa svrhom", en: "Animations with purpose" },
      paragraphs: [
        {
          sr: "Svaka animacija objašnjava proizvod, ne dekoracija. Route map: kamion prati GPS putanju, ruta se crta u realnom vremenu. Automation pipeline vodi posetioca kroz Loads → GPS → AI Monitor → Voice → Dashboard → Alert.",
          en: "Every animation explains the product, not decoration. Route map: truck follows the GPS path, route draws in real time. The automation pipeline walks visitors through Loads → GPS → AI Monitor → Voice → Dashboard → Alert.",
        },
        {
          sr: "How It Works storyboard ima 4 interaktivna koraka sa auto-play i click-to-explore. Animacije pretvaraju apstraktni SaaS u „aha, ovako radi“ moment, bez teškog videa ili gubitka performansi na static export-u.",
          en: "The How It Works storyboard has 4 interactive steps with auto-play and click-to-explore. Animations turn abstract SaaS into an \"aha, this is how it works\" moment, without heavy video or performance loss on static export.",
        },
      ],
      image: {
        src: `${IMG}/zonik-case-study-features.png`,
        alt: {
          sr: "Zonik AI: How It Works, route map i demo form showcase",
          en: "Zonik AI: How It Works, route map, and demo form showcase",
        },
        fit: "contain",
      },
      imageLayout: "full",
    },
    {
      id: "conversion",
      title: { sr: "Form-first CTA", en: "Form-first CTA" },
      paragraphs: [
        {
          sr: "Primarna konverzija je Book a Demo. Contact stranica tretirana kao landing page: demo forma je prva stvar u hero sekciji, ne zakopana ispod fold-a.",
          en: "The primary conversion is Book a Demo. We treated the contact page as a landing page: the demo form is the first thing visible in the hero, not buried below the fold.",
        },
        {
          sr: "Jasan vizuelni jezik: tamna header traka „Demo request form“, „Start here“ badge, purple ring i shadow. Forma šalje na Make.com webhook. Copy ponavlja vrednost kroz ceo sajt: „Your team only steps in when it matters.“",
          en: "Clear visual language: dark header bar labeled \"Demo request form\", \"Start here\" badge, purple ring and shadow. The form submits to a Make.com webhook. Copy reinforces value across the site: \"Your team only steps in when it matters.\"",
        },
      ],
      link: {
        label: { sr: "Pogledaj demo formu", en: "See the demo form" },
        href: { sr: `${LIVE_SITE}contact`, en: `${LIVE_SITE}contact` },
      },
    },
    {
      id: "messaging",
      title: { sr: "Messaging arhitektura", en: "Messaging architecture" },
      paragraphs: [
        {
          sr: "Stranica je strukturirana kao narativni funnel koji vodi posetioca od problema do demo zahteva.",
          en: "We structured the page as a narrative funnel that moves visitors from problem to demo request.",
        },
      ],
      list: {
        items: [
          { sr: "Problem, bol ručnog overnight tracking-a", en: "Problem, manual overnight tracking pain" },
          { sr: "Solution, jedan operator + AI orkestracija", en: "Solution, one operator + AI orchestration" },
          { sr: "Proof, GPS, voice agent demo, dashboard, integracije", en: "Proof, GPS, voice agent demo, dashboard, integrations" },
          { sr: "How it works, 4 vizuelna koraka", en: "How it works, 4 visual steps" },
          { sr: "Benefits + FAQ, rukovanje prigovorima", en: "Benefits + FAQ, objection handling" },
          { sr: "Final CTA, dark sekcija, demo push", en: "Final CTA, dark section, demo push" },
        ],
      },
    },
    {
      id: "results",
      title: { sr: "Rezultati", en: "Results" },
      paragraphs: [
        {
          sr: "Kvalitativni ishod bez izmišljenih metrika. Ceo marketing sajt je isporučen, live na zonikai.com i spreman za produkciju.",
          en: "Qualitative outcome with no fabricated metrics. The full marketing site was shipped, live at zonikai.com, and production-ready.",
        },
      ],
      stats: [
        { value: "12", label: { sr: "Home sekcija isporučeno", en: "Home sections shipped" } },
        { value: "1", label: { sr: "Make.com webhook za demo leadove", en: "Make.com webhook for demo leads" } },
        { value: "100%", label: { sr: "Mobile-responsive + scroll-animated", en: "Mobile-responsive + scroll-animated" }, featured: true },
      ],
      link: {
        label: { sr: "Pogledaj live sajt", en: "View live site" },
        href: { sr: LIVE_SITE, en: LIVE_SITE },
      },
    },
  ],
  appFeatures: {
    title: {
      sr: "Tech stack i deliverables:",
      en: "Tech stack and deliverables:",
    },
    items: [
      { sr: "Next.js 16 + TypeScript", en: "Next.js 16 + TypeScript" },
      { sr: "Tailwind CSS v4", en: "Tailwind CSS v4" },
      { sr: "Framer Motion interakcije", en: "Framer Motion interactions" },
      { sr: "Static export → Netlify", en: "Static export → Netlify" },
      { sr: "Reusable section system", en: "Reusable section system" },
      { sr: "Route map SVG animacija", en: "Route map SVG animation" },
      { sr: "Interactive How It Works showcase", en: "Interactive How It Works showcase" },
      { sr: "Stranice: / (home), /contact (form-first demo)", en: "Pages: / (home), /contact (form-first demo)" },
    ],
  },
  outlook: {
    title: { sr: "Zaključak", en: "Takeaway" },
    paragraphs: [
      {
        sr: "Cilj nije bio lep trucking sajt, već sajt koji natera dispatchera da pomisli: „Ovo radi overnight za mene, a ja se budim samo za izuzetke.“ Svaki design izbor služio je tome.",
        en: "The goal was not a beautiful trucking website. It was a site that makes a dispatcher think: \"This runs overnight for me, and I only wake up for exceptions.\" Every design choice served that.",
      },
    ],
  },
  serviceCta: {
    label: {
      sr: "Saznajte više o konverznim landing stranicama i reklamama",
      en: "Learn more about conversion-focused landing pages and ads",
    },
    serviceSlug: "placene-reklame",
  },
};
