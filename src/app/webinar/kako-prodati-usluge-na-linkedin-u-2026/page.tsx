import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Disclosure, DisclosureList } from "@/components/ui/Disclosure";
import { Section } from "@/components/ui/Section";
import { getDictionary } from "@/lib/i18n";
import { absoluteUrl, pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("sr");
const pageUrl = "/webinar/kako-prodati-usluge-na-linkedin-u-2026";
const youtubeUrl = "https://www.youtube.com/watch?v=FR1Zh0zguXc";
const youtubeEmbedUrl = "https://www.youtube.com/embed/FR1Zh0zguXc";
const heroImage = "/images/webinars/kako-prodati-usluge-na-linkedin-u-2026.png";
const pageAbsoluteUrl = absoluteUrl(pageUrl);
const heroImageAbsoluteUrl = absoluteUrl(heroImage);
const ctaHref = "/kontakt";

const faqItems = [
  {
    question: "Za koga je ovaj webinar?",
    answer:
      "Ovaj webinar je za B2B founder-e, agencije, konsultante, service-based firme, SaaS timove i sales/marketing lidere koji žele da preko LinkedIn-a dođu do više kvalifikovanih sastanaka.",
  },
  {
    question: "Šta je Founder-Led Growth?",
    answer:
      "Founder-Led Growth je proces u kom founder postaje lice kompanije, deli svoju ekspertizu, gradi poverenje kod idealnih kupaca i pretvara to poverenje u kvalifikovane sastanke i stabilan pipeline.",
  },
  {
    question: "Da li moram da imam veliki LinkedIn audience da bi ovo radilo?",
    answer:
      "Ne. Veliki audience može pomoći, ali nije uslov. Mnogo važnije je da imate jasan ICP, dobar profil, relevantan content, dobar outreach i sistem za praćenje signala.",
  },
  {
    question: "Da li cold outreach i dalje radi?",
    answer:
      "Da, ali ne kao ranije. Cold outreach danas radi najbolje kada je precizno targetiran, kada ima jasnu ponudu, relevantnu personalizaciju, value-based follow-up i CRM tracking.",
  },
  {
    question: "Zašto je content važan ako radimo outreach?",
    answer:
      "Content gradi poverenje pre prve poruke. Kada kupac vidi da founder razume problem i deli korisne uvide, outreach više ne deluje potpuno hladno.",
  },
  {
    question: "Šta su buying signals?",
    answer:
      "Buying signals su ponašanja koja pokazuju da je neko potencijalno zainteresovan: profile view, komentar, klik na website, webinar registracija, odgovor na DM, poseta contact/pricing stranici ili engagement sa reklamom.",
  },
  {
    question: "Da li LinkedIn Ads rade za Balkan?",
    answer:
      "LinkedIn Ads trenutno nisu idealni za lokalne Balkan jezike jer LinkedIn ne podržava većinu lokalnih jezika kao ad set languages. Za internacionalne B2B kampanje na engleskom mogu biti veoma korisne, posebno kroz Thought Leader Ads.",
  },
  {
    question: "Šta dobijam kada zakažem sastanak?",
    answer:
      "Dobijate analizu trenutnog sales procesa, ICP-a, LinkedIn profila, outreach-a, content potencijala, CRM tracking-a i konkretne preporuke za sledeće korake.",
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
  headline: "Kako prodati svoje usluge na LinkedInu u 2026.",
  description:
    "Webinar replay i recap stranica o Founder-Led Growth metodologiji za LinkedIn prodaju, outreach, content, ads, CRM i buying signals.",
  inLanguage: "sr",
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
      name: "Webinari",
      item: absoluteUrl("/webinar"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kako prodati svoje usluge na LinkedInu u 2026.",
      item: pageAbsoluteUrl,
    },
  ],
};

export const metadata: Metadata = {
  ...pageMetadata({
    locale: "sr",
    paths: staticPaths.webinarLinkedIn2026,
    title: "Kako prodati svoje usluge na LinkedInu u 2026. | Founder-Led Growth Webinar",
    description:
      "Pogledajte Lead Agents webinar i saznajte kako Founder-Led Growth metodologija povezuje LinkedIn profil, content, cold outreach, LinkedIn Ads, CRM i buying signals u jedan sistem za generisanje kvalifikovanih B2B sastanaka.",
    keywords: [
      "kako prodati svoje usluge na LinkedInu",
      "LinkedIn prodaja",
      "B2B prodaja preko LinkedIn-a",
      "LinkedIn outreach",
      "cold sales outreach",
      "Founder-Led Growth",
      "LinkedIn lead generation",
      "LinkedIn Ads",
      "Thought Leader Ads",
      "LinkedIn profil optimizacija",
      "B2B pipeline",
      "buying signals",
      "CRM lead scoring",
    ],
  }),
  openGraph: {
    title: "Kako prodati svoje usluge na LinkedInu u 2026. | Founder-Led Growth Webinar",
    description:
      "Founder-Led Growth metodologija za moderan B2B sales: LinkedIn profil, content, cold outreach, LinkedIn Ads, CRM i buying signals u jednom sistemu.",
    url: absoluteUrl(pageUrl),
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1024,
        height: 576,
        alt: "Kako prodati svoje usluge na LinkedInu u 2026.",
      },
    ],
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kako prodati svoje usluge na LinkedInu u 2026.",
    description:
      "Webinar recap: Founder-Led Growth sistem za LinkedIn prodaju, outreach, ads, CRM i buying signals.",
    images: [heroImage],
  },
};

export default function WebinarLinkedIn2026Page() {
  const toc = [
    { id: "video", label: "Pogledajte webinar" },
    { id: "promene", label: "Šta se promenilo" },
    { id: "buyer-journey", label: "Buyer journey" },
    { id: "flg", label: "Founder-Led Growth" },
    { id: "icp", label: "ICP osnova" },
    { id: "outbound", label: "Cold outreach" },
    { id: "manual-vs-auto", label: "Manualni vs automatski" },
    { id: "auto-uslovi", label: "Šta mora da postoji" },
    { id: "profil", label: "LinkedIn profil" },
    { id: "autoritet", label: "Personalni brand" },
    { id: "content-engine", label: "Autentičan content" },
    { id: "ads", label: "LinkedIn Ads i TLA" },
    { id: "crm", label: "CRM i signals" },
    { id: "skaliranje", label: "Kako skaliramo sistem" },
    { id: "kako-krenuti", label: "Kako krenuti" },
    { id: "strategy-session", label: "Zakaži sastanak" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <Header locale="sr" dictionary={dictionary} />
      <main className="pb-24">
        <section className="border-b border-border/50 bg-[radial-gradient(circle_at_top_right,rgba(255,204,0,0.22),transparent_45%),var(--background)] py-14 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Webinar Replay
              </p>
              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                Kako prodati svoje usluge na LinkedInu u 2026.
              </h1>
              <p className="max-w-5xl text-lg leading-relaxed text-muted md:text-xl">
                Founder-Led Growth metodologija za moderan B2B sales - sistem koji povezuje
                LinkedIn profil, content, cold outreach, LinkedIn Ads, CRM i buying signals u jedan
                predvidljiv pipeline motor.
              </p>
              <p className="max-w-4xl text-base leading-relaxed text-muted">
                Na ovom webinaru pokazujemo kako danas izgleda moderan LinkedIn sales sistem za B2B
                kompanije koje žele više kvalifikovanih sastanaka, bolji outreach, jači personalni
                brand founder-a i jasniji pipeline.
              </p>
              <p className="max-w-4xl rounded-xl border border-accent/35 bg-accent/10 px-4 py-3 text-sm text-foreground/90">
                Metodologija koju koristimo u radu sa 30+ B2B klijenata i kroz koju smo pomogli u
                izgradnji preko $120M sales pipeline-a.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#video"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Pogledaj webinar
                </a>
                <Link
                  href={ctaHref}
                  className="rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Zakaži sastanak
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-8 w-full overflow-hidden rounded-2xl border border-border bg-black/25 shadow-2xl md:w-[70%]">
              <div className="relative aspect-video w-full">
                <Image
                  src={heroImage}
                  alt="Lead Agents webinar hero vizual"
                  width={1024}
                  height={576}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-[220px_minmax(0,1fr)] md:px-8">
          <aside className="hidden md:block">
            <nav className="sticky top-24 rounded-2xl border border-border bg-card/40 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Sadržaj
              </p>
              <ul className="space-y-2 text-sm text-muted">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a className="transition-colors hover:text-accent" href={`#${item.id}`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0">
            <Section id="video" title="Pogledajte ceo webinar">
              <p className="max-w-4xl text-lg leading-relaxed text-muted">
                U ovom snimku prolazimo kroz kompletan Founder-Led Growth sistem: od ICP-a i
                LinkedIn profila, preko cold outreach-a i contenta, do LinkedIn Ads-a, CRM
                tracking-a i pravovremenog follow-up-a na osnovu buying signals-a.
              </p>
              <div className="mt-8 max-w-full overflow-hidden rounded-2xl border border-border bg-card/50 p-2 sm:p-3 md:p-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <iframe
                    src={youtubeEmbedUrl}
                    title="Kako prodati svoje usluge na LinkedInu u 2026"
                    className="absolute left-0 top-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-6 grid gap-4 rounded-2xl border border-border bg-card/40 p-6 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">Trajanje</p>
                  <p className="mt-1 text-sm text-foreground">Dodati kada finalni cut bude potvrđen</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">Tema</p>
                  <p className="mt-1 text-sm text-foreground">LinkedIn prodaja i Founder-Led Growth</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">Za koga je</p>
                  <p className="mt-1 text-sm text-foreground">
                    B2B founder-i, agencije, konsultanti, service-based firme, SaaS timovi i sales/
                    marketing lideri
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-accent/35 bg-accent/10 p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Želite isti sistem za vašu firmu?
                </h3>
                <p className="mt-2 text-muted">
                  Na sastanku mapiramo gde vam pipeline trenutno curi i gde najbrže
                  možete dobiti više kvalifikovanih sastanaka.
                </p>
                <Link
                  href={ctaHref}
                  className="mt-4 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-black"
                >
                  Zakaži sastanak
                </Link>
              </div>
            </Section>

            <Section id="promene" title="Šta se promenilo u B2B prodaji?">
              <p className="text-lg leading-relaxed text-muted">
                Pre 5-10 godina bilo je mnogo lakše doći do pažnje kupca. Danas svi koriste AI,
                svi šalju outreach, inbox-i su puni, a generičke poruke ne prolaze. Kupovina kreće
                mnogo pre prvog sastanka.
              </p>
              <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                {[
                  "Kupac vas vidi na LinkedIn-u",
                  "Proverava profil i content",
                  "Gleda webinar ili proof materijal",
                  "Vidi reklamu ili retargeting",
                  "Poseti website",
                  "Tek onda odgovori na outreach",
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-border bg-card/40 p-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Cold outreach više ne može da nosi ceo sales proces sam. Danas mora da postoji
                sistem koji gradi poverenje pre, tokom i posle outreach-a.
              </p>
            </Section>

            <Section id="buyer-journey" title="Kako danas izgleda moderan B2B buyer journey">
              <div className="overflow-x-auto pb-2">
                <ol className="flex min-w-[900px] items-center gap-3">
                  {[
                    "Vidi vaš LinkedIn post",
                    "Klikne na profil",
                    "Pogleda webinar",
                    "Vidi founder-a više puta",
                    "Primi outreach",
                    "Vidi retargeting reklamu",
                    "Ode na website",
                    "Rezerviše sastanak",
                  ].map((step, index) => (
                    <li
                      key={step}
                      className="flex w-[190px] flex-col rounded-xl border border-border bg-card/40 p-4"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        Korak {index + 1}
                      </span>
                      <p className="mt-2 text-sm text-foreground">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-6 text-muted">
                Moderan B2B kupac ne donosi odluku linearno. Cilj Founder-Led Growth metodologije
                je da ove dodirne tačke poveže u jedan sistem. Poenta nije da pošaljemo više poruka,
                poenta je da kupac pre poruke već ima kontekst.
              </p>
            </Section>

            <Section id="flg" title="Šta je Founder-Led Growth?">
              <h3 className="text-2xl font-semibold text-foreground">
                Founder-Led Growth je proces u kom founder postaje lice kompanije.
              </h3>
              <div className="mt-5 rounded-2xl border border-border bg-card/50 p-6">
                <p className="text-lg text-foreground">
                  Founder-Led Growth je proces u kom founder postaje lice kompanije, koristi svoju
                  ekspertizu da izgradi poverenje kod idealnih kupaca, i zatim to poverenje pretvara
                  u kvalifikovane sastanke i stabilan sales pipeline.
                </p>
              </div>
              <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                {[
                  "ICP strategija",
                  "optimizovan LinkedIn profil",
                  "cold sales outreach",
                  "edukativan content",
                  "podcast-like intervjui",
                  "LinkedIn Ads",
                  "CRM tracking",
                  "lead scoring",
                  "buying signals",
                  "pravovremeni follow-up",
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-border bg-card/40 p-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Founder-Led Growth pretvara founder-ovu ekspertizu u poverenje, poverenje u buying
                signals, a buying signals u kvalifikovan pipeline.
              </p>
            </Section>

            <Section id="icp" title="ICP je osnova celog sistema">
              <h3 className="text-2xl font-semibold text-foreground">Sve počinje od ICP-a.</h3>
              <p className="mt-4 text-muted">
                ICP dokument je “holy grail” na osnovu kog se pravi kompletna strategija: target,
                poruke, content, offer, follow-up i lead scoring.
              </p>
              <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                {[
                  "kome se obraćamo",
                  "koje firme targetiramo",
                  "koje role imaju najveći uticaj",
                  "koji problem rešavamo",
                  "koji trigger pokazuje pravi timing",
                  "koju ponudu testiramo",
                  "koje poruke šaljemo",
                  "koje content teme objavljujemo",
                  "koje follow-up assete koristimo",
                  "kako radimo lead scoring u CRM-u",
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-border bg-card/40 p-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Outreach ne počinje pisanjem poruke. Outreach počinje jasnom definicijom koga uopšte
                vredi kontaktirati.
              </p>
            </Section>

            <Section id="outbound" title="Outbound mašina i cold sales outreach">
              <h3 className="text-2xl font-semibold text-foreground">
                Cold outreach koristimo da validiramo ICP, offer i messaging.
              </h3>
              <p className="mt-4 text-muted">
                Cilj modernog cold outreach-a nije da svi odmah kupe, već da saznamo ko ima problem
                sada, koja poruka otvara razgovor, koji offer radi i ko ide u nurture.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "ko ima problem sada",
                  "koji ICP najbolje reaguje",
                  "koja poruka otvara razgovor",
                  "koji offer ima najviše potencijala",
                  "koji follow-up ima smisla",
                  "ko je spreman za sastanak",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-card/40 p-4 text-muted">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-card/50 p-6">
                <h4 className="text-lg font-semibold text-foreground">Statistika iz prakse</h4>
                <ul className="mt-3 space-y-2 text-muted">
                  <li>
                    Samo mali deo tržišta ima aktivnu potrebu sada,{" "}
                    <a
                      href="https://www.hubspot.com/sales"
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      HubSpot
                    </a>
                    .
                  </li>
                  <li>
                    Veliki broj prodaja dešava se tek nakon više follow-up dodira,{" "}
                    <a
                      href="https://www.invespcro.com/blog/the-importance-of-follow-up/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      Invesp
                    </a>
                    .
                  </li>
                  <li>Mnogi sales timovi odustaju prerano, zato outreach mora da bude sistem.</li>
                </ul>
              </div>
            </Section>

            <Section id="manual-vs-auto" title="Manualni vs automatski cold outreach">
              <h3 className="text-2xl font-semibold text-foreground">
                Manualni outreach zavisi od discipline. Automatski outreach zavisi od sistema.
              </h3>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="min-w-[680px] w-full text-left text-sm">
                  <thead className="bg-card/70">
                    <tr>
                      <th className="px-4 py-3 text-accent">Manualni cold outreach</th>
                      <th className="px-4 py-3 text-accent">Automatski cold outreach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "šalje se premalo poruka dnevno",
                        "šalje se veći broj relevantnih poruka",
                      ],
                      ["follow-up se lako zaboravi", "follow-up ide automatski i na vreme"],
                      [
                        "teško je testirati više poruka i ponuda",
                        "lako se testiraju različite ponude i poruke",
                      ],
                      ["nema jasne statistike", "svaki odgovor i signal može da se prati"],
                      [
                        "tim troši previše vremena na operativu",
                        "sales tim troši vreme na razgovore, ne admin",
                      ],
                      ["rezultati zavise od discipline", "sve može da ide u CRM"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-t border-border/70">
                        <td className="px-4 py-3 text-muted">{row[0]}</td>
                        <td className="px-4 py-3 text-muted">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Automatizacija nije zamena za strategiju. Ona samo omogućava da dobra strategija radi
                dosledno i u većem obimu.
              </p>
            </Section>

            <Section id="auto-uslovi" title="Šta je potrebno da bi automatski outreach radio">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["1. Pravi tool", "HeyReach, La Growth Machine, Sales Navigator, Lemlist, Instantly, Apollo, Clay."],
                  ["2. Pravi ICP", "Ako targetiramo pogrešne ljude, ni najbolja poruka neće pomoći."],
                  ["3. Jasna ponuda", "Poruka mora brzo da objasni kome pomažemo i koji rezultat donosimo."],
                  ["4. Relevantna personalizacija", "Ne samo ime i firma, već razlog zašto se javljamo baš sada."],
                  ["5. Value-based follow-up", "Svaki follow-up treba da donese novu vrednost, ne samo bump poruku."],
                  ["6. CRM tracking", "Source, segment, poruka, follow-up, signal, status, sledeći korak."],
                  ["7. Buying signals", "Pravi ljudi u pravom trenutku, na osnovu realnih signala."],
                ].map(([title, text]) => (
                  <article key={title} className="rounded-2xl border border-border bg-card/40 p-5">
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted">{text}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="profil" title="Optimizovan LinkedIn profil">
              <h3 className="text-2xl font-semibold text-foreground">
                LinkedIn profil je landing page za cold outreach.
              </h3>
              <p className="mt-4 text-muted">
                U Founder-Led Growth sistemu LinkedIn profil nije CV. Njegov posao je da idealan
                kupac u prvih nekoliko sekundi dobije signal: “Ova osoba razume moj problem i može
                da pomogne.”
              </p>
              <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                {[
                  "profilna slika",
                  "headline",
                  "cover/banner",
                  "about sekcija",
                  "featured sekcija",
                  "proof i case studies",
                  "jasna ponuda",
                  "CTA",
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-border bg-card/40 p-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Ako profil ne gradi poverenje, poruka mora da radi sav posao sama. Ako je profil
                optimizovan, outreach dolazi sa kredibilitetom.
              </p>
            </Section>

            <Section id="autoritet" title="Personalni brand i LinkedIn autoritet">
              <h3 className="text-2xl font-semibold text-foreground">
                Content ne zamenjuje outreach. Content pomaže outreach-u da radi bolje.
              </h3>
              <p className="mt-4 text-muted">
                Content radi tri stvari: gradi poverenje pre poruke, daje kontekst za follow-up i
                pomaže buyer-u da vas zapamti pre nego što je spreman za razgovor.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <article className="rounded-xl border border-border bg-card/40 p-4">
                  <p className="text-3xl font-bold text-accent">95%</p>
                  <p className="mt-2 text-sm text-muted">
                    skrivenih kupaca otvorenije je za outreach nakon kvalitetnog thought leadership
                    sadržaja,{" "}
                    <a
                      href="https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report"
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      Edelman/LinkedIn
                    </a>
                    .
                  </p>
                </article>
                <article className="rounded-xl border border-border bg-card/40 p-4">
                  <p className="text-3xl font-bold text-accent">75%</p>
                  <p className="mt-2 text-sm text-muted">
                    decision maker-a istražuje proizvod nakon kvalitetnog thought leadership članka,
                    {" "}
                    <a
                      href="https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report"
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      Edelman/LinkedIn
                    </a>
                    .
                  </p>
                </article>
                <article className="rounded-xl border border-border bg-card/40 p-4">
                  <p className="text-3xl font-bold text-accent">92%</p>
                  <p className="mt-2 text-sm text-muted">
                    B2B kupaca želi saradnju sa stručnim liderima u industriji,{" "}
                    <a
                      href="https://business.linkedin.com/sales-solutions/deep-sales-playbook"
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      LinkedIn Deep Sales
                    </a>
                    .
                  </p>
                </article>
              </div>
            </Section>

            <Section id="content-engine" title="Kako pravimo autentičan founder content">
              <h3 className="text-2xl font-semibold text-foreground">
                Podcast-like interview - AI transcript - monthly content engine
              </h3>
              <p className="mt-4 text-muted">
                Founder nema problem sa znanjem, već sa vremenom. Zato radimo jedan strukturisan
                intervju mesečno (60-120 min), a zatim iz tog materijala pravimo kompletan content
                paket.
              </p>
              <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                {[
                  "short video klipove",
                  "LinkedIn text postove",
                  "carousel postove",
                  "edukativne breakdown-e",
                  "webinar teasere",
                  "outreach follow-up materijal",
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-border bg-card/40 p-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Founder potroši 1-2h mesečno, a tim dobija content za ceo mesec.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-card/50 p-6">
                <h4 className="text-lg font-semibold text-foreground">Tool stack</h4>
                <ul className="mt-3 grid gap-2 text-sm text-muted md:grid-cols-2">
                  <li>Riverside / Zoom / StreamYard za snimanje</li>
                  <li>Descript / CapCut / OpusClip za repurposing</li>
                  <li>ChatGPT / Claude za transcript analizu</li>
                  <li>Canva / Figma za carousel i vizuale</li>
                  <li>Taplio / AuthoredUp / LinkedIn za distribuciju</li>
                </ul>
              </div>
            </Section>

            <Section id="ads" title="LinkedIn Ads i Thought Leader Ads za skaliranje">
              <p className="text-muted">
                LinkedIn Ads koristimo kao scaling layer, tek kada organski već vidimo da content i
                poruke rade. Thought Leader Ads su važni jer promovišu post sa founder profila, a ne
                samo sa company page-a.
              </p>
              <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                {[
                  "određene kompanije",
                  "job title-ovi i seniority",
                  "founder-i i decision maker-i",
                  "industrije i revenue range",
                  "account liste",
                  "ljudi koji su već pokazali interesovanje",
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-border bg-card/40 p-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Praktično, možete napraviti situaciju gde CEO iz target account-a više puta vidi vaš
                najbolji founder content.
              </p>
              <p className="mt-4 text-sm text-muted">
                Napomena: LinkedIn Ads trenutno nisu idealni za lokalne Balkan jezike zbog language
                targetinga. Najčešće ih koristimo za internacionalne kampanje na engleskom.
              </p>
            </Section>

            <Section id="crm" title="CRM, lead scoring i buying signals">
              <h3 className="text-2xl font-semibold text-foreground">
                Sve aktivnosti i signali moraju da završe u CRM-u.
              </h3>
              <p className="mt-4 text-muted">
                Ako neko pogleda profil, komentariše, klikne website, prijavi se na webinar, otvori
                email, odgovori na DM ili poseti pricing stranicu, to je signal. CRM treba da ga
                zabeleži i pretvori u sledeću akciju.
              </p>
              <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                {[
                  "odakle je lead došao",
                  "koji ICP segment je u pitanju",
                  "koja poruka je poslata",
                  "na koji follow-up je odgovorio",
                  "koji signal je pokazao",
                  "koji je sledeći korak",
                  "da li je postao sastanak, opportunity ili nurture lead",
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-border bg-card/40 p-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                CRM pretvara outreach iz “slanja poruka” u merljiv sales sistem.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-muted">
                {[
                  "HubSpot",
                  "Pipedrive",
                  "Airtable",
                  "Clay",
                  "Make.com",
                  "Zapier",
                  "LinkedIn Ads Insight Tag",
                  "Google Analytics",
                  "webinar tools",
                ].map((tool) => (
                  <span key={tool} className="rounded-full border border-border bg-card/60 px-3 py-1.5">
                    {tool}
                  </span>
                ))}
              </div>
            </Section>

            <Section id="skaliranje" title="Kako skaliramo Founder-Led Growth metodologiju">
              <h3 className="text-2xl font-semibold text-foreground">Najbolje radi kada se sve poveže.</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-5">
                {[
                  ["1", "Cold outreach = validacija ponude", "Testiramo ICP, offer i messaging."],
                  ["2", "Content = izgradnja poverenja", "Kupac više puta vidi ekspertizu i proof."],
                  ["3", "Ads = skaliranje onoga što radi", "Pojačavamo winner content kroz TLA."],
                  ["4", "CRM = centralni sistem", "Pratimo signale i lead scoring."],
                  ["5", "Pravovremeni outreach = sastanci", "Kontakt u pravom trenutku, sa kontekstom."],
                ].map(([step, title, text]) => (
                  <article key={title} className="rounded-2xl border border-border bg-card/40 p-4">
                    <p className="text-sm font-semibold text-accent">Korak {step}</p>
                    <h4 className="mt-2 text-sm font-semibold text-foreground">{title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{text}</p>
                  </article>
                ))}
              </div>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Outreach validira. Content gradi poverenje. Ads skaliraju. CRM prati signale. Sales
                reaguje u pravom trenutku.
              </p>
            </Section>

            <Section id="kako-krenuti" title="Da li morate odmah da radite ceo sistem?">
              <h3 className="text-2xl font-semibold text-foreground">
                Ne morate krenuti od svega. Ali morate krenuti od nečega.
              </h3>
              <p className="mt-4 text-muted">
                Ako tek počinjete, sasvim je validno da krenete od cold outreach-a. On najbrže
                pokazuje da li je ICP dobar, da li je ponuda jasna i koji segment tržišta reaguje.
              </p>
              <ul className="mt-6 grid gap-3 text-muted md:grid-cols-2">
                {[
                  "da li je ICP dobar",
                  "da li je ponuda jasna",
                  "da li messaging otvara razgovor",
                  "ko ima problem sada",
                  "koji segment tržišta najbrže reaguje",
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-border bg-card/40 p-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-accent/35 bg-accent/10 p-4 text-foreground">
                Ne morate odmah graditi ceo pipeline motor. Ali morate prestati da radite nasumične
                aktivnosti koje se ne povezuju.
              </p>
            </Section>

            <Section id="strategy-session" title="Zakaži sastanak">
              <h3 className="text-3xl font-bold text-foreground">
                Želite da vidimo kako bi ovaj sistem izgledao za vašu firmu?
              </h3>
              <p className="mt-3 text-xl text-muted">
                Za prve 3 prijavljene osobe nakon webinara otvaramo besplatnu 60-minutnu Growth
                Strategy sesiju.
              </p>
              <p className="mt-4 text-muted">
                Na sesiji prolazimo trenutni sales proces, ICP i ponudu, profil i content, outreach
                sekvence, CRM i buying signals. Na kraju dobijate jasnu dijagnozu + 3-5 konkretnih
                koraka za više kvalifikovanih sastanaka.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  "Trenutni sales proces",
                  "ICP i ponuda",
                  "LinkedIn profil i content",
                  "Outreach i follow-up",
                  "CRM i buying signals",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-card/40 p-4 text-muted">
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href={ctaHref}
                className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-hover)]"
              >
                Zakaži sastanak
              </Link>
              <p className="mt-4 text-sm text-muted">
                Bez obaveze. Ako vidimo da možemo da pomognemo, reći ćemo vam kako. Ako ne, dobićete
                konkretne preporuke koje možete sami da primenite.
              </p>
            </Section>

            <Section id="faq" title="Česta pitanja">
              <DisclosureList>
                {faqItems.map((item, index) => (
                  <Disclosure key={item.question} variant="joined" index={index} title={item.question}>
                    <p>{item.answer}</p>
                  </Disclosure>
                ))}
              </DisclosureList>
            </Section>

            <Section title="Spremni za sledeći nivo LinkedIn prodaje?" className="pb-6">
              <div className="rounded-2xl border border-accent/35 bg-accent/10 p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Finalni CTA
                </p>
                <h2 className="mt-3 text-3xl font-bold text-foreground">
                  Povežite outreach, content, ads i CRM u jedan sistem koji pravi pipeline.
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted">
                  Ako želite plan koji je prilagođen vašem tržištu, timu i ponudi, rezervišite
                  sastanak i dobićete konkretan roadmap za narednih 90 dana.
                </p>
                <Link
                  href={ctaHref}
                  className="mt-7 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Zakaži sastanak
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>

      <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-full border border-accent/30 bg-card/95 p-2 shadow-xl md:hidden">
        <Link
          href={ctaHref}
          className="block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-bold text-black"
        >
          Zakaži sastanak
        </Link>
      </div>

      <Footer locale="sr" dictionary={dictionary} />
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
            name: "Kako prodati svoje usluge na LinkedInu u 2026.",
            description:
              "Lead Agents webinar o Founder-Led Growth metodologiji za LinkedIn prodaju, outreach, content, Ads, CRM i buying signals.",
            thumbnailUrl: [heroImageAbsoluteUrl],
            embedUrl: youtubeEmbedUrl,
            contentUrl: youtubeUrl,
            inLanguage: "sr",
          }),
        }}
      />
    </>
  );
}
