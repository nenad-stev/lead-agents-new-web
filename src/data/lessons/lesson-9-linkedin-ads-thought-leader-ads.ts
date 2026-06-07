import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

/** LinkedIn Campaign Manager, profile language targeting (34) */
const LINKEDIN_AD_LANGUAGES: Array<[string, string]> = [
  ["Arapski", "Arabic"],
  ["Bengalski", "Bengali"],
  ["Češki", "Czech"],
  ["Danski", "Danish"],
  ["Holandski", "Dutch"],
  ["Engleski", "English"],
  ["Finski", "Finnish"],
  ["Francuski", "French"],
  ["Nemački", "German"],
  ["Grčki", "Greek"],
  ["Hebrejski", "Hebrew"],
  ["Hindi", "Hindi"],
  ["Mađarski", "Hungarian"],
  ["Indonežanski", "Indonesian"],
  ["Italijanski", "Italian"],
  ["Japanski", "Japanese"],
  ["Korejski", "Korean"],
  ["Malezijski", "Malaysian"],
  ["Marati", "Marathi"],
  ["Norveški", "Norwegian"],
  ["Persijski", "Persian"],
  ["Poljski", "Polish"],
  ["Portugalski", "Portuguese"],
  ["Pandžapski", "Punjabi"],
  ["Rumunski", "Romanian"],
  ["Ruski", "Russian"],
  ["Španski", "Spanish"],
  ["Švedski", "Swedish"],
  ["Tagalski", "Tagalog"],
  ["Teluški", "Telugu"],
  ["Tajlandski", "Thai"],
  ["Turski", "Turkish"],
  ["Ukrajinski", "Ukrainian"],
  ["Vijetnamski", "Vietnamese"],
];

const LANGUAGE_GRID_COLUMNS = 4;

function linkedInLanguageTableRows() {
  const rows: Array<{ cells: ReturnType<typeof L>[] }> = [];
  for (let i = 0; i < LINKEDIN_AD_LANGUAGES.length; i += LANGUAGE_GRID_COLUMNS) {
    const chunk = LINKEDIN_AD_LANGUAGES.slice(i, i + LANGUAGE_GRID_COLUMNS);
    const cells = chunk.map(([sr, en]) => L(sr, en));
    while (cells.length < LANGUAGE_GRID_COLUMNS) {
      cells.push(L("", ""));
    }
    rows.push({ cells });
  }
  return rows;
}

const video1 = {
  title: L(
    "LinkedIn Thought Leader Ads Tutorial / How To Set Up Thought Leader Ads",
    "LinkedIn Thought Leader Ads Tutorial / How To Set Up Thought Leader Ads",
  ),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Praktičan setup Thought Leader Ads kampanje u Campaign Manager-u.",
    "Practical setup walkthrough for Thought Leader Ads in Campaign Manager.",
  ),
  placementNote: L(
    "Pogledaj posle tla-vs-company sekcije ili u video sekciji.",
    "Watch after the TLA vs company ads section or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/_UVFFTAkAAo",
  watchUrl: "https://www.youtube.com/watch?v=_UVFFTAkAAo",
};

const video2 = {
  title: L("LinkedIn Ads Tutorial for Beginners", "LinkedIn Ads Tutorial for Beginners"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Osnovni pregled LinkedIn Ads ekosistema za B2B timove.",
    "Foundational overview of the LinkedIn Ads ecosystem for B2B teams.",
  ),
  placementNote: L("Pogledaj posle why sekcije ili u video sekciji.", "Watch after the why section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/dBWj3vaEy5o",
  watchUrl: "https://www.youtube.com/watch?v=dBWj3vaEy5o",
};

const video3 = {
  title: L("LinkedIn Ads Campaign Manager Tutorial", "LinkedIn Ads Campaign Manager Tutorial"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za strukturu kampanja, ad set-ova i targeting-a.",
    "Useful for campaign structure, ad sets, and targeting setup.",
  ),
  placementNote: L("Pogledaj posle paid-steps sekcije ili u video sekciji.", "Watch after the paid steps section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/87rItxRf1PI",
  watchUrl: "https://www.youtube.com/watch?v=87rItxRf1PI",
};

const video4 = {
  title: L("LinkedIn Lead Gen Forms Tutorial", "LinkedIn Lead Gen Forms Tutorial"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Kako povezati Lead Gen Forms sa CRM-om i founder CTA-ima.",
    "How to connect Lead Gen Forms with CRM and founder CTAs.",
  ),
  placementNote: L("Pogledaj posle implement sekcije ili u video sekciji.", "Watch after the implement section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/jf2yPL1hVs8",
  watchUrl: "https://www.youtube.com/watch?v=jf2yPL1hVs8",
};

export const lesson9RichContent: RichLessonContent = {
  meta: {
    stage: L("LinkedIn Ads pojačanje", "LinkedIn Ads Boost"),
    readingTime: L("14-18 min", "14-18 min"),
    difficulty: L("Srednji nivo", "Intermediate"),
    outcome: L(
      "Razumećeš gde LinkedIn Ads stoje u Founder-Led Growth sistemu Lead Agents-a, kada koristiti Thought Leader Ads, i kako paid sloj povezuje outreach, content, signale i CRM.",
      "You will understand where LinkedIn Ads sit in the Lead Agents Founder-Led Growth system, when to use Thought Leader Ads, and how the paid layer connects outreach, content, signals, and CRM.",
    ),
    recommendedTools: L(
      "ICP dokument, LinkedIn Sales Navigator, Apollo, La Growth Machine, HeyReach, Instantly, Lemlist, Riverside, Descript, Canva, Taplio, LinkedIn Campaign Manager, HubSpot, Make.com",
      "ICP document, LinkedIn Sales Navigator, Apollo, La Growth Machine, HeyReach, Instantly, Lemlist, Riverside, Descript, Canva, Taplio, LinkedIn Campaign Manager, HubSpot, Make.com",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 9", "Lesson 9"),
    title: L(
      "Kako koristiti LinkedIn Ads da pojačaš Founder-Led Growth",
      "How to Use LinkedIn Ads to Boost Founder-Led Growth",
    ),
    paragraphs: P(
      [
        "Većina tekstova o LinkedIn reklamama pretpostavlja da founder već piše content, da ICP odmah reaguje i da je paid prvi korak ka pipeline-u. U praksi to retko važi.",
        "Kod Lead Agents-a, Founder-Led Growth počinje od ICP dokumenta, optimizovanog profila i hladnog outreach-a. Tek onda dolaze buying signali, founder content i na kraju skaliranje preko LinkedIn Ads.",
        "Outreach je direktan napad na ICP. Thought Leader Ads su indirektan napad: pojačavaju post koji već organski radi, da više pravih ljudi vidi founder-a pre nego što ih kontaktiraš.",
        "Content ne služi da „svi pišu postove“. Služi da outreach ima kontekst i poverenje, da raste acceptance rate i da više ljudi pristane na sastanak.",
        "Founderi retko imaju vremena za autentičan content zato radimo intervjue u stilu podcasta, kratke klipove, transkripte i carousel postove iz jednog snimanja.",
        "Sve signale, outreach, content i ad leadove vodimo u CRM sa lead scoring-om. Paid bez CRM-a i bez outreach sistema je samo marketing trošak.",
      ],
      [
        "Most LinkedIn ads content assumes the founder already posts, the ICP reacts immediately, and paid is the first step to pipeline. In practice, that rarely holds.",
        "At Lead Agents, Founder-Led Growth starts with the ICP document, an optimized profile, and cold outreach. Then come buying signals, founder content, and finally scaling via LinkedIn Ads.",
        "Outreach is a direct attack on the ICP. Thought Leader Ads are indirect: they amplify a post that already works organically so more of the right people see the founder before you contact them.",
        "Content is not about everyone writing posts. It gives outreach context and trust, raises acceptance rate, and gets more people to agree to a meeting.",
        "Founders rarely have time for authentic content, so we run podcast-style interviews, short clips, transcripts, and carousel posts from one recording.",
        "We track all signals, outreach, content, and ad leads in CRM with lead scoring. Paid without CRM and without an outreach system is just marketing spend.",
      ],
    ),
    callout: L(
      "LinkedIn Ads dolaze posle ICP-a, profila, outreach-a i content sistema. Boost-uj samo post koji organski već privlači pravi ICP.",
      "LinkedIn Ads come after ICP, profile, outreach, and content. Boost only posts that already attract the right ICP organically.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    {
      id: "flg-model",
      title: L("Founder-Led Growth po Lead Agents-u", "Founder-Led Growth the Lead Agents way"),
    },
    { id: "why", title: L("Zašto Ads dolaze poslednji", "Why ads come last") },
    { id: "do-not-scale-blindly", title: L("Ne skaliraj naslepo", "Do not scale blindly") },
    { id: "core", title: L("Direktan vs indirektan napad", "Direct vs indirect attack") },
    {
      id: "tla-vs-company",
      title: L("Thought Leader Ads vs company ads", "Thought Leader Ads vs company page ads"),
    },
    {
      id: "languages",
      title: L("Podržani jezici LinkedIn Ads", "Supported languages for LinkedIn Ads"),
    },
    { id: "ads-framework", title: L("Founder-Led Ads okvir", "Founder-Led Ads framework") },
    { id: "paid-steps", title: L("Korak po korak: paid sistem", "Step-by-step paid system") },
    { id: "proof", title: L("Dokaz i istraživanja", "Proof / trust section") },
    { id: "implement", title: L("Kako implementirati", "How to implement") },
    { id: "tools", title: L("Idealni stack alata", "Ideal tool stack") },
    { id: "workflow", title: L("Primer workflow-a", "Workflow example") },
    { id: "videos", title: L("Video materijali", "YouTube videos") },
    { id: "visuals", title: L("Predlozi vizuala", "Visual elements") },
    { id: "checklist", title: L("Čeklista", "Checklist") },
    { id: "template", title: L("Šablon / swipe file", "Template / swipe file") },
  ],
  blocks: [
    {
      type: "section",
      id: "learn",
      title: L("Šta ćeš naučiti u ovoj lekciji", "What this lesson will teach you"),
      blocks: [
        {
          type: "bullets",
          items: P(
            [
              "gde LinkedIn Ads stoje u Lead Agents Founder-Led Growth redosledu;",
              "zašto outreach ide pre contenta i pre paid sloja;",
              "kako content (intervjui, klipovi, carousel) pojačava outreach;",
              "kada boost-ovati post preko Thought Leader Ads;",
              "kako targetirati tačan ICP u Campaign Manager-u;",
              "kako povezati ad signale, outreach i CRM lead scoring;",
              "kako testirati budžet pre skaliranja;",
              "koje alate koristimo od Sales Navigator-a do Campaign Manager-a.",
            ],
            [
              "where LinkedIn Ads sit in the Lead Agents Founder-Led Growth sequence;",
              "why outreach comes before content and before the paid layer;",
              "how content (interviews, clips, carousels) strengthens outreach;",
              "when to boost a post via Thought Leader Ads;",
              "how to target the right ICP in Campaign Manager;",
              "how to connect ad signals, outreach, and CRM lead scoring;",
              "how to test budget before scaling;",
              "which tools we use from Sales Navigator to Campaign Manager.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Analitika i dashboard, paid amplifikuje dokazani post",
            "Analytics and dashboard, paid amplifies a proven post",
          ),
          caption: L(
            "Outreach direktno, reklame indirektno, CRM povezuje signale.",
            "Outreach direct, ads indirect, CRM connects signals.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Redosled u Lead Agents FLG-u", "Sequence in Lead Agents FLG"),
          subtitle: L(
            "ICP i outreach grade osnovu, content gradi poverenje, Ads skaliraju dokaz.",
            "ICP and outreach build the base, content builds trust, Ads scale proof.",
          ),
          stages: [
            L("ICP", "ICP"),
            L("Profil", "Profile"),
            L("Outreach", "Outreach"),
            L("Signali", "Signals"),
            L("Content", "Content"),
            L("Ads", "Ads"),
            L("CRM", "CRM"),
          ],
        },
      ],
    },
    {
      type: "section",
      id: "flg-model",
      title: L("Founder-Led Growth po Lead Agents-u", "Founder-Led Growth the Lead Agents way"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ovo nije lekcija „samo o reklamama“. Ovo je lekcija gde paid sloj sedi u celom sistemu koji već gradi Lead Agents sa klijentima.",
              "Počinjemo od ICP dokumenta, našeg holy grail fajla. Na njemu gradimo content, ponudu, value-based follow-up i poruke ka tačnoj publici.",
              "Zatim optimizujemo LinkedIn profil da ICP za 5 sekundi razume kako founder može da im pomogne. To podiže acceptance rate, reply rate i broj sastanaka.",
              "Slede hladni outreach i testiranje ponude: Sales Navigator ili Apollo za listu, La Growth Machine, HeyReach, Instantly ili Lemlist za izvršenje.",
              "Paralelno pratimo buying signale i radimo outreach na osnovu toga, ne na osnovu nasumičnih lajkova.",
              "Content radimo zato što drastično podiže rezultate outreach-a. Cilj nije viralnost, već poverenje koje vodi ka sastanku.",
              "Founderi nemaju vremena za dnevno pisanje, pa radimo intervjue u stilu podcasta: snimimo razgovor, izvučemo znanje, napravimo kratke klipove i carousel postove iz transkripta (Riverside, Descript, Canva).",
              "LinkedIn Ads koristimo kao skaliranje: Thought Leader Ads boost-uju post koji je organski već dobro prošao, uz precizan ICP targeting u Campaign Manager-u.",
              "Sve ide u CRM: signali, outreach, ad leadovi, lead scoring i pravovremena sledeća akcija.",
            ],
            [
              "This is not a \"ads only\" lesson. It is about where the paid layer sits in the full system Lead Agents already builds with clients.",
              "We start with the ICP document, our holy grail file. From it we build content, offer, value-based follow-up, and messaging to the right audience.",
              "Then we optimize the LinkedIn profile so the ICP understands in 5 seconds how the founder can help. That raises acceptance rate, reply rate, and meetings booked.",
              "Next comes cold outreach and offer testing: Sales Navigator or Apollo for lists, La Growth Machine, HeyReach, Instantly, or Lemlist for execution.",
              "In parallel we track buying signals and run outreach based on those, not random likes.",
              "We do content because it drastically improves outreach results. The goal is not virality, but trust that leads to a meeting.",
              "Founders do not have time to write daily, so we run podcast-style interviews: record the conversation, extract knowledge, create short clips and carousel posts from the transcript (Riverside, Descript, Canva).",
              "We use LinkedIn Ads for scale: Thought Leader Ads boost a post that already performed well organically, with precise ICP targeting in Campaign Manager.",
              "Everything goes to CRM: signals, outreach, ad leads, lead scoring, and timely next actions.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Lead Agents FLG redosled", "Lead Agents FLG sequence"),
          subtitle: L(
            "Bez ICP-a i outreach-a, paid samo troši budžet.",
            "Without ICP and outreach, paid only burns budget.",
          ),
          stages: [
            L("ICP doc", "ICP doc"),
            L("Profil", "Profile"),
            L("Cold outreach", "Cold outreach"),
            L("Signali", "Signals"),
            L("Intervjui", "Interviews"),
            L("TLA", "TLA"),
            L("CRM", "CRM"),
          ],
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Outreach (direktno)", "Outreach (direct)"),
              subtitle: L("Prvi kontakt sa ICP-om", "First contact with ICP"),
              variant: "accent",
              items: P(
                [
                  "Sales Navigator / Apollo lista",
                  "Test ponude i poruka",
                  "La Growth Machine, HeyReach, Instantly, Lemlist",
                  "Value-based follow-up iz ICP dokumenta",
                ],
                [
                  "Sales Navigator / Apollo list",
                  "Offer and message testing",
                  "La Growth Machine, HeyReach, Instantly, Lemlist",
                  "Value-based follow-up from ICP document",
                ],
              ),
            },
            {
              title: L("LinkedIn Ads (indirektno)", "LinkedIn Ads (indirect)"),
              subtitle: L("Skaliranje dokazanog posta", "Scaling a proven post"),
              variant: "muted",
              items: P(
                [
                  "Thought Leader Ads na winning postu",
                  "ICP targeting u Campaign Manager-u",
                  "Više pravih ljudi vidi founder-a dok outreach radi paralelno",
                  "Signali iz ads-a idu u CRM kao i outreach",
                ],
                [
                  "Thought Leader Ads on winning post",
                  "ICP targeting in Campaign Manager",
                  "More of the right people see the founder while outreach runs in parallel",
                  "Ad signals go to CRM like outreach",
                ],
              ),
            },
          ],
        },
        {
          type: "zone-cards",
          title: L("Zašto radimo content ako outreach već postoji?", "Why do content if outreach already exists?"),
          subtitle: L(
            "Content nije zamena za outreach, već gorivo za poverenje.",
            "Content is not a replacement for outreach, it is fuel for trust.",
          ),
          cards: [
            {
              zone: L("Problem", "Problem"),
              eyebrow: L("Vreme", "Time"),
              job: L("Founder nema sati dnevno za autentičan LinkedIn content.", "Founder does not have hours daily for authentic LinkedIn content."),
              doThis: L("Intervju u stilu podcasta, jednom mesečno ili kvartalno.", "Podcast-style interview, once a month or quarterly."),
              avoid: L("Očekivati da founder sam piše 5 postova nedeljno.", "Expecting the founder to write 5 posts per week alone."),
            },
            {
              zone: L("Proces", "Process"),
              eyebrow: L("Snimanje", "Recording"),
              job: L("Izvlačimo znanje kroz pitanja, ne kroz prazan dokument.", "We extract knowledge through questions, not a blank doc."),
              doThis: L("Riverside snimak, Descript transkript, Canva carousel.", "Riverside recording, Descript transcript, Canva carousel."),
              avoid: L("Generički AI postovi bez founder glasa.", "Generic AI posts without the founder's voice."),
            },
            {
              zone: L("Rezultat", "Result"),
              eyebrow: L("Outreach", "Outreach"),
              job: L("Veći acceptance i reply rate, više sastanaka.", "Higher acceptance and reply rate, more meetings."),
              doThis: L("Klipovi + carousel + outreach poruka referencira istu temu.", "Clips + carousel + outreach message references the same topic."),
              avoid: L("Content bez veze sa ponudom iz ICP dokumenta.", "Content unrelated to the offer in the ICP document."),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "why",
      title: L("Zašto je ovo važno", "Why this matters"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "LinkedIn Ads imaju smisla tek kad znaš kome prodaješ (ICP), kako izgleda profil, šta radi outreach i koji content već gradi poverenje.",
              "Bez toga, company page kampanje i generički oglasi troše budžet, a sales tim dobija leadove bez konteksta.",
              "Thought Leader Ads boost-uju post sa founder profila. Izgledaju kao objava, ne kao baner firme, što u B2B-u često daje bolji odziv od klasičnih oglasa.",
              "Kod nas, content iz intervjua pomaže da prospect vidi founder-a kao relevantnog dok outreach radi paralelno. Ads onda šire taj isti post ka širem, ali i dalje tačnom ICP-u.",
              "CRM i lead scoring povezuju: ko je odgovorio na outreach, ko je engage-ovao post, ko je došao preko reklame. Jedna lista, jedan sledeći korak.",
            ],
            [
              "LinkedIn Ads only make sense once you know who you sell to (ICP), how the profile looks, what outreach does, and which content already builds trust.",
              "Without that, company page campaigns and generic ads burn budget while sales gets leads without context.",
              "Thought Leader Ads boost a post from the founder profile. They look like a post, not a company banner, which in B2B often gets better response than classic ads.",
              "For us, interview-based content helps prospects see the founder as relevant while outreach runs in parallel. Ads then spread that same post to a wider but still precise ICP.",
              "CRM and lead scoring connect: who replied to outreach, who engaged the post, who came from ads. One list, one next step.",
            ],
          ),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("5s", "5s"),
              label: L("Profil", "Profile"),
              description: L(
                "ICP mora odmah da razume kako founder pomaže.",
                "ICP must immediately understand how the founder helps.",
              ),
            },
            {
              value: L("€20-50", "€20-50"),
              label: L("/dan test", "/day test"),
              description: L(
                "7 dana testa pre skaliranja TLA kampanje.",
                "7-day test before scaling TLA campaign.",
              ),
            },
            {
              value: L("1", "1"),
              label: L("CRM", "CRM"),
              description: L(
                "Outreach, content, ads i signali na jednom mestu.",
                "Outreach, content, ads, and signals in one place.",
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "do-not-scale-blindly",
      title: L("Ne skaliraj naslepo", "Do not scale blindly"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Plaćeni reach ne popravlja nejasnu poruku. Prvo dokaži da content organski privlači pravi ICP, pa tek onda uključi TLA.",
              "U praksi: organik prvo, validacija poruke drugo, plaćeno skaliranje treće.",
              "Thought Leader Ads boost-uju objavu sa ličnog profila i prenose founder kontekst i social proof. Company page oglas je koristan u određenim slučajevima, ali često ima slabiji trust kada se koristi kao prvi paid korak.",
            ],
            [
              "Paid reach does not fix unclear messaging. First prove that content attracts the right ICP organically, then turn on TLA.",
              "In practice: organic first, message validation second, paid scaling third.",
              "Thought Leader Ads boost posts from a personal profile and carry founder context plus social proof. Company page ads are useful in some cases, but often have weaker trust when used as the first paid step.",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Primeri ICP targeting-a u Campaign Manager-u", "ICP targeting examples in Campaign Manager"),
          headers: H(
            ["Scenario", "Kompanije / industrija", "Job title", "Seniority / funkcija", "Geo + dodatni filteri"],
            ["Scenario", "Companies / industry", "Job title", "Seniority / function", "Geo + extra filters"],
          ),
          rows: [
            {
              cells: [
                L("B2B SaaS outbound", "B2B SaaS outbound"),
                L("B2B SaaS, 11-200 zaposlenih", "B2B SaaS, 11-200 employees"),
                L("Founder, VP Sales, Head of Growth", "Founder, VP Sales, Head of Growth"),
                L("Owner, VP, Director", "Owner, VP, Director"),
                L("DACH + UK, isključi postojeće klijente", "DACH + UK, exclude existing customers"),
              ],
            },
            {
              cells: [
                L("RevOps transformacija", "RevOps transformation"),
                L("SaaS i IT services, 50-500", "SaaS and IT services, 50-500"),
                L("RevOps Manager, Head of RevOps, CRO", "RevOps Manager, Head of RevOps, CRO"),
                L("Manager+, VP+", "Manager+, VP+"),
                L("US + EU, match jezik sa oglasom", "US + EU, match language to ad copy"),
              ],
            },
            {
              cells: [
                L("Founder-led GTM za agencije", "Founder-led GTM for agencies"),
                L("Marketing i growth agencije, 10-100", "Marketing and growth agencies, 10-100"),
                L("Founder, Managing Director, COO", "Founder, Managing Director, COO"),
                L("Owner, C-level", "Owner, C-level"),
                L("CEE + DACH, retarget engagers prvo", "CEE + DACH, retarget engagers first"),
              ],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "core",
      title: L("Direktan vs indirektan napad", "Direct vs indirect attack"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "U Lead Agents Founder-Led Growth-u imamo dva kanala ka ICP-u:",
              "Outreach je direktan: ciljamo listu, testiramo ponudu, šaljemo value-based poruke.",
              "LinkedIn Ads su indirektni: širimo post koji već dokazuje da tema rezonuje, da više ljudi upozna founder-a pre poruke u inbox-u.",
              "Oba kanala hrane isti CRM. Lead scoring odlučuje ko dobija sledeći outreach, ko nurture, ko sastanak.",
            ],
            [
              "In Lead Agents Founder-Led Growth we have two channels to the ICP:",
              "Outreach is direct: we target a list, test the offer, send value-based messages.",
              "LinkedIn Ads are indirect: we spread a post that already proves the topic resonates, so more people know the founder before the inbox message.",
              "Both channels feed the same CRM. Lead scoring decides who gets the next outreach, nurture, or meeting.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Prvo ICP i outreach, zatim content za poverenje, na kraju Ads za skaliranje dokazanog posta.",
            "First ICP and outreach, then content for trust, finally Ads to scale the proven post.",
          ),
        },
        {
          type: "zone-cards",
          title: L("Tri uslova pre TLA boost-a", "Three conditions before a TLA boost"),
          subtitle: L(
            "Bez ovoga, reklama samo ubrzava pogrešan signal.",
            "Without this, ads only accelerate the wrong signal.",
          ),
          cards: [
            {
              zone: L("ICP", "ICP"),
              eyebrow: L("Dokument", "Document"),
              job: L("Jasan opis kome prodajemo, bol, ponuda, jezik poruka.", "Clear who we sell to, pain, offer, message language."),
              doThis: L("Targeting u Campaign Manager kopira ICP polja.", "Campaign Manager targeting copies ICP fields."),
              avoid: L("Širok targeting „svi na LinkedIn-u“.", "Broad targeting \"everyone on LinkedIn\"."),
            },
            {
              zone: L("Outreach", "Outreach"),
              eyebrow: L("Aktivan", "Active"),
              job: L("Već testiramo ponudu i znamo šta ICP odgovara.", "We already test the offer and know what the ICP replies to."),
              doThis: L("Poruke i post govore o istom problemu.", "Messages and post address the same problem."),
              avoid: L("Ads pre prvog outreach ciklusa.", "Ads before the first outreach cycle."),
            },
            {
              zone: L("Post", "Post"),
              eyebrow: L("Dokaz", "Proof"),
              job: L("Post organski dobar (reach, ICP komentari, DM-ovi).", "Post is organically strong (reach, ICP comments, DMs)."),
              doThis: L("Taplio ili native analytics za izbor winner-a.", "Taplio or native analytics to pick the winner."),
              avoid: L("Boost vanity lajkova bez ICP fit-a.", "Boosting vanity likes without ICP fit."),
            },
          ],
        },
      ],
    },    {
      type: "section",
      id: "tla-vs-company",
      title: L("Thought Leader Ads vs company ads", "Thought Leader Ads vs company ads"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ne svi LinkedIn ad formati su jednaki za Founder-Led Growth. TLA je centralni format, ostali imaju specifične uloge.",
            ],
            [
              "Not all LinkedIn ad formats are equal for Founder-Led Growth. TLA is the core format, others have specific roles.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Company page ad", "Company page ad"),
              subtitle: L("Izgleda kao reklama", "Looks like an ad"),
              variant: "muted",
              items: P(
                [
                  "Stock vizual + logo firme",
                  "Širok targeting",
                  "Nizak trust u feed-u",
                  "Visok CPL, slab sales fit",
                ],
                [
                  "Stock visual + company logo",
                  "Broad targeting",
                  "Low trust in feed",
                  "High CPL, weak sales fit",
                ],
              ),
            },
            {
              title: L("Thought Leader Ad", "Thought Leader Ad"),
              subtitle: L("Izgleda kao founder content", "Looks like founder content"),
              variant: "accent",
              items: P(
                [
                  "Boost postojećeg posta sa profila",
                  "Social proof već na postu",
                  "Viši CTR u B2B kontekstu",
                  "Isti CTA, bolji webinar/lead signal",
                ],
                [
                  "Boosts existing post from profile",
                  "Social proof already on post",
                  "Higher CTR in B2B context",
                  "Same CTA, better webinar/lead signal",
                ],
              ),
            },
          ],
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Tim planira kampanju, TLA vs company page odluka",
            "Team planning campaign, TLA vs company page decision",
          ),
          caption: L(
            "TLA nije magija, radi samo kad organic post već privlači pravi ICP.",
            "TLA is not magic, it only works when the organic post already attracts the right ICP.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "table",
          caption: L("Poređenje ad tipova za FLG", "Ad type comparison for FLG"),
          headers: H(
            ["Ad tip", "Šta radi", "Slabost", "Najbolja upotreba u FLG"],
            ["Ad type", "What it does", "Weakness", "Best use in FLG"],
          ),
          rows: [
            { cells: [L("Thought Leader Ads", "Thought Leader Ads"), L("Boost-uje postojeći founder post sa profila", "Boosts existing founder post from profile"), L("Zahteva jak organic post", "Requires strong organic post"), L("Pojačavanje winning content-a", "Amplifying winning content")] },
            { cells: [L("Single Image", "Single Image"), L("Klasičan display ad sa slikom", "Classic display ad with image"), L("Izgleda kao reklama", "Looks like an ad"), L("Webinar promocija, lead magnet CTA", "Webinar promotion, lead magnet CTA")] },
            { cells: [L("Video", "Video"), L("Founder video clip ili testimonial", "Founder video clip or testimonial"), L("Skuplji production", "Higher production cost"), L("Retargeting toplih publike", "Retargeting warm audiences")] },
            { cells: [L("Carousel", "Carousel"), L("Više slide-ova sa framework-om", "Multiple slides with framework"), L("Kompleksniji setup", "More complex setup"), L("Edukativni framework-i i case study-ji", "Educational frameworks and case studies")] },
            { cells: [L("Lead Gen Form", "Lead Gen Form"), L("Capture-uje leadove direktno u LinkedIn-u", "Captures leads directly in LinkedIn"), L("Niži intent bez retarget-a", "Lower intent without retargeting"), L("Checklist, webinar, konsultacija CTA", "Checklist, webinar, consultation CTA")] },
            { cells: [L("Document Ads", "Document Ads"), L("PDF/presentacija direktno u feed-u", "PDF/presentation directly in feed"), L("Manje personalno od TLA", "Less personal than TLA"), L("Lead magneti, checklist-i, whitepaper-i", "Lead magnets, checklists, whitepapers")] },
          ],
        },
        { type: "video", video: video1 },
      ],
    },    {
      type: "section",
      id: "languages",
      title: L("Jezici i language targeting", "Languages and language targeting"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Campaign Manager koristi jezik tvog LinkedIn profila za UI. Ako želiš drugi interfejs, promeni jezik profila pre nego što uđeš u Campaign Manager.",
              "Za targeting, svaki ad set ima profile language filter. To određuje kojim članovima LinkedIn-a će se prikazivati oglasi, na osnovu jezika koji su izabrali na profilu.",
              "LinkedIn podržava 34 jezika za ad set targeting (plus napomena da English targeting u non-messaging kampanjama doseže sve članove u geografskoj lokaciji, bez obzira na profilni jezik).",
            ],
            [
              "Campaign Manager uses your LinkedIn profile language for the UI. If you want a different interface, change your profile language before entering Campaign Manager.",
              "For targeting, each ad set has a profile language filter. It determines which LinkedIn members see your ads, based on the language they selected on their profile.",
              "LinkedIn supports 34 languages for ad set targeting (plus note that English targeting in non-messaging campaigns reaches all members in the geographic location, regardless of profile language).",
            ],
          ),
        },
        {
          type: "table",
          id: "language-grid",
          caption: L(
            "34 jezika za profile language targeting u ad set-u",
            "34 languages for profile language targeting in the ad set",
          ),
          headers: H(["", "", "", ""], ["", "", "", ""]),
          rows: linkedInLanguageTableRows(),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Kineski jezik nije podržan za ad set targeting. Jezik se ne može promeniti posle launch-a, kreiraj novi ad set. English targeting u non-messaging kampanjama doseže sve u geo lokaciji.",
            "Chinese is not supported for ad set targeting. Language cannot be changed after launch, create a new ad set. English targeting in non-messaging campaigns reaches everyone in the geo location.",
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "TODO za tim: ne unositi tvrdnje o dostupnosti jezika ili država u LinkedIn Ads bez proverljivog izvora (Help centar, dokumentacija ili zvanična objava).",
            "TODO for the team: do not add claims about LinkedIn Ads language or country availability without a verifiable source (Help center, documentation, or official announcement).",
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Global tim i jezik, profile language mora da se poklapa sa ad copy-jem",
            "Global team and language, profile language must match ad copy",
          ),
          caption: L(
            "Jezik webinara = jezik ad set-a = jezik landing page-a. Ne mešaj u jednom ad set-u.",
            "Webinar language = ad set language = landing page language. Do not mix in one ad set.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "table",
          caption: L("Language best practices", "Language best practices"),
          headers: H(["Scenario", "Preporuka"], ["Scenario", "Recommendation"]),
          rows: [
            { cells: [L("Srpski founder, EN ICP", "Serbian founder, EN ICP"), L("Piši postove na engleskom; target English; landing na EN", "Write posts in English; target English; EN landing page")] },
            { cells: [L("Lokalni B2B market (DACH, CEE)", "Local B2B market (DACH, CEE)"), L("Match ad copy, landing i profile language (German, Polish, etc.)", "Match ad copy, landing, and profile language (German, Polish, etc.)")] },
            { cells: [L("Multilingual ICP", "Multilingual ICP"), L("Odvojeni ad set-ovi po jeziku, ne mešaj u jednom", "Separate ad sets per language, do not mix in one")] },
            { cells: [L("Uski language targeting", "Narrow language targeting"), L("Proširi geo ili ukloni filter; dodaj EN ad set za bilingual audience", "Expand geo or remove filter; add EN ad set for bilingual audience")] },
            { cells: [L("Webinar promocija", "Webinar promotion"), L("Jezik webinara = jezik ad set-a = jezik landing page-a", "Webinar language = ad set language = landing page language")] },
          ],
        },
      ],
    },    {
      type: "section",
      id: "ads-framework",
      title: L("Founder-Led Ads okvir", "The Founder-Led Ads Framework"),
      blocks: [
        {
          type: "framework-intro",
          title: L(
            "ICP → Outreach → Content → Winning Post → TLA → CRM + lead scoring",
            "ICP → Outreach → Content → Winning Post → TLA → CRM + lead scoring",
          ),
          description: L(
            "Paid deo FLG-a kod Lead Agents-a. Radi samo ako prethodni koraci već postoje i ako post organski dokazuje temu.",
            "The paid part of FLG at Lead Agents. It only works if prior steps exist and the post organically proves the topic.",
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Tim oko laptopa, od organic signala do paid testa",
            "Team around laptop, from organic signal to paid test",
          ),
          caption: L(
            "ICP i outreach pre budžeta, winning post pre TLA, CRM pre sledeće kampanje.",
            "ICP and outreach before budget, winning post before TLA, CRM before the next campaign.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Founder-Led Ads Framework", "Founder-Led Ads Framework"),
          subtitle: L(
            "Svaki korak pretvara momentum u merljiv pipeline input.",
            "Each step turns momentum into measurable pipeline input.",
          ),
          stages: [
            L("ICP", "ICP"),
            L("Outreach", "Outreach"),
            L("Content", "Content"),
            L("Post", "Post"),
            L("TLA", "TLA"),
            L("CRM", "CRM"),
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("ICP dokument", "ICP document"),
              whatToDo: L("Koristi holy grail ICP fajl za targeting, jezik, ponudu i poruke u Campaign Manager-u.", "Use the holy grail ICP file for targeting, language, offer, and messages in Campaign Manager."),
              whyItMatters: L("Ads bez ICP-a targetiraju pogrešnu publiku.", "Ads without ICP target the wrong audience."),
              example: L("Uloga, industrija, veličina firme i geo kopirani iz Lekcije 2.", "Role, industry, company size, and geo copied from Lesson 2."),
              commonMistake: L("Širok targeting jer „LinkedIn ima milione korisnika“.", "Broad targeting because \"LinkedIn has millions of users\"."),
              tryThis: L("Svako polje u ad set-u mora imati odgovor u ICP dokumentu.", "Every ad set field must have an answer in the ICP document."),
              highlight: L("ICP pre budžeta.", "ICP before budget."),
            },
            {
              step: 2,
              title: L("Outreach i signali", "Outreach and signals"),
              whatToDo: L("Cold outreach i buying signali već rade pre nego što uključiš paid.", "Cold outreach and buying signals already work before you turn on paid."),
              whyItMatters: L("Znaš šta ICP odgovara i koje teme rezonuju.", "You know what the ICP replies to and which topics resonate."),
              example: L("Lista iz Sales Navigator-a, poruke kroz HeyReach ili Lemlist.", "List from Sales Navigator, messages via HeyReach or Lemlist."),
              commonMistake: L("Ads kao zamena za outreach.", "Ads as a replacement for outreach."),
              tryThis: L("Uporedi reply rate pre i posle content serije iz intervjua.", "Compare reply rate before and after the interview content series."),
              highlight: L("Direktan kanal prvi.", "Direct channel first."),
            },
            {
              step: 3,
              title: L("Content iz intervjua", "Content from interviews"),
              whatToDo: L("Objavi klipove i carousel postove iz snimljenog intervjua, u tonu founder-a.", "Publish clips and carousel posts from the recorded interview, in the founder's voice."),
              whyItMatters: L("Content gradi poverenje koje outreach pretvara u sastanke.", "Content builds trust that outreach turns into meetings."),
              example: L("Riverside snimak, Descript transkript, Canva carousel, Taplio za objavu.", "Riverside recording, Descript transcript, Canva carousel, Taplio for publishing."),
              commonMistake: L("Generički postovi bez veze sa ponudom.", "Generic posts unrelated to the offer."),
              tryThis: L("Jedan intervju = 3 klipa + 1 carousel + 1 duga objava.", "One interview = 3 clips + 1 carousel + 1 long post."),
              highlight: L("Autentičnost bez dnevnog pisanja.", "Authenticity without daily writing."),
            },
            {
              step: 4,
              title: L("Winning post", "Winning post"),
              whatToDo: L("Izaberi 1 post koji organski već dobro radi kod pravog ICP-a.", "Pick 1 post that already performs well with the right ICP."),
              whyItMatters: L("TLA boost-uje dokaz, ne eksperiment na hladno.", "TLA amplifies proof, not a cold experiment."),
              example: L("Post iz intervjua sa ICP komentarima i DM-ovima za ponudu.", "Post from the interview with ICP comments and DMs about the offer."),
              commonMistake: L("Boost posta sa lajkovima ali bez kvalifikovanog engagement-a.", "Boosting a post with likes but no qualified engagement."),
              tryThis: L("Taplio: reach, engagement, profile views posle 48-72h.", "Taplio: reach, engagement, profile views after 48-72h."),
              highlight: L("Jedan winner, ne deset testova.", "One winner, not ten tests."),
            },
            {
              step: 5,
              title: L("Thought Leader Ad", "Thought Leader Ad"),
              whatToDo: L("Boost-uj winning post u Campaign Manager-u, ICP targeting, test €20-50/dan, 7 dana.", "Boost the winning post in Campaign Manager, ICP targeting, test €20-50/day, 7 days."),
              whyItMatters: L("Indirektan napad: više pravih ljudi vidi founder-a dok outreach radi paralelno.", "Indirect attack: more of the right people see the founder while outreach runs in parallel."),
              example: L("TLA na postu o istom problemu kao outreach sekvenca.", "TLA on a post about the same problem as the outreach sequence."),
              commonMistake: L("Company page ad sa stock slikom.", "Company page ad with stock image."),
              tryThis: L("Jedan ad set, jedan jezik, jedan CTA.", "One ad set, one language, one CTA."),
              highlight: L("Skaliranje, ne zamena outreach-a.", "Scaling, not replacing outreach."),
            },
            {
              step: 6,
              title: L("CRM i lead scoring", "CRM and lead scoring"),
              whatToDo: L("Upiši ad engagere i leadove u CRM sa izvorom, skorom i sledećom akcijom.", "Log ad engagers and leads in CRM with source, score, and next action."),
              whyItMatters: L("Outreach i ads bez CRM-a ne znaju ko je već topao.", "Outreach and ads without CRM do not know who is already warm."),
              example: L("Izvor: LinkedIn TLA, signal: srednji, akcija: founder DM u 24h.", "Source: LinkedIn TLA, signal: medium, action: founder DM within 24h."),
              commonMistake: L("Samo broj leadova bez zadatka za sales.", "Only lead count without a sales task."),
              tryThis: L("Make/Zapier sync pre pokretanja kampanje.", "Make/Zapier sync before launching the campaign."),
              highlight: L("Jedan sistem za sve signale.", "One system for all signals."),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Boost-uj samo postove sa dokazom, organic signal dolazi pre paid spend-a.",
            "Boost only posts with proof, organic signal comes before paid spend.",
          ),
        },
      ],
    },    {
      type: "section",
      id: "paid-steps",
      title: L("Korak po korak: paid sistem", "Step-by-step paid system"),
      blocks: [
        {
          type: "stat-row",
          items: [
            {
              value: L("7", "7"),
              label: L("Dana testa", "Test days"),
              description: L(
                "Minimum pre kill/scale, meri CTR, CPL i ICP-fit leadove.",
                "Minimum before kill/scale, measure CTR, CPL, and ICP-fit leads.",
              ),
            },
            {
              value: L("€140-350", "€140-350"),
              label: L("Test budžet", "Test budget"),
              description: L(
                "€20-50/dan, dovoljno signala bez spaljivanja meseca.",
                "€20-50/day, enough signal without burning the month.",
              ),
            },
            {
              value: L("8", "8"),
              label: L("Koraka", "Steps"),
              description: L(
                "Od organic proof-a do CRM source tag-ova.",
                "From organic proof to CRM source tags.",
              ),
            },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Proveri FLG preuslove", "Check FLG prerequisites"),
              whatToDo: L("ICP dokument, optimizovan profil, aktivan cold outreach, bar jedna content serija iz intervjua.", "ICP document, optimized profile, active cold outreach, at least one content series from an interview."),
              whyItMatters: L("Ads bez ovoga ne popravljaju sistem, samo troše novac.", "Ads without this do not fix the system, they only spend money."),
              example: L("Outreach reply rate meren pre TLA testa.", "Outreach reply rate measured before TLA test."),
              commonMistake: L("TLA kao prvi kanal ka tržištu.", "TLA as the first channel to market."),
              tryThis: L("Checklist: ICP ✓ profil ✓ outreach ✓ post winner ✓", "Checklist: ICP ✓ profile ✓ outreach ✓ winning post ✓"),
              highlight: L("Redosled iz flg-model sekcije.", "Sequence from the flg-model section."),
            },
            {
              step: 2,
              title: L("Insight Tag (opciono)", "Insight Tag (optional)"),
              whatToDo: L("Postavi Insight Tag na sajt, landing page i thank-you stranicu.", "Install the Insight Tag on site, landing page, and thank-you page."),
              whyItMatters: L("Retargeting i conversion tracking zahtevaju first-party podatke.", "Retargeting and conversion tracking require first-party data."),
              example: L("Tag na webinar registration page + thank-you page za conversion event.", "Tag on webinar registration page + thank-you page for conversion event."),
              commonMistake: L("Pokretanje retargeting-a bez tag-a.", "Launching retargeting without the tag."),
              tryThis: L("Proveri tag u Campaign Manager pre nego što pokreneš kampanju.", "Verify the tag in Campaign Manager before launching the campaign."),
              highlight: L("Insight Tag je osnova retargeting funnel-a.", "Insight Tag is the foundation of the retargeting funnel."),
            },
            {
              step: 3,
              title: L("Izaberi 1-2 winning founder posta", "Select 1-2 winning founder posts"),
              whatToDo: L("Boost-uj post sa jakim engagement-om, jasnim POV-om i relevantnim CTA-om.", "Boost the post with strong engagement, clear POV, and relevant CTA."),
              whyItMatters: L("TLA radi najbolje na postovima koji već imaju social proof.", "TLA works best on posts that already have social proof."),
              example: L("Edukativni post sa checklist CTA-om i visokim comment-to-like ratio.", "Educational post with checklist CTA and high comment-to-like ratio."),
              commonMistake: L("Boost-ovanje svih postova bez selekcije.", "Boosting all posts without selection."),
              tryThis: L("Koristi Taplio analytics za selekciju winning postova.", "Use Taplio analytics to select winning posts."),
              highlight: L("Manje kreativa, više dokaza.", "Fewer creatives, more proof."),
            },
            {
              step: 4,
              title: L("Izgradi ICP targeting u Campaign Manager-u", "Build ICP targeting in Campaign Manager"),
              whatToDo: L("Targetiraj po ulozi, industriji, veličini firme, seniority-ju i geografskoj lokaciji.", "Target by role, industry, company size, seniority, and geography."),
              whyItMatters: L("Širok targeting = visok CPL i nizak sales fit.", "Broad targeting = high CPL and low sales fit."),
              example: L("VP Sales / Founder / Head of Growth u B2B SaaS, 11-200 zaposlenih, DACH + UK.", "VP Sales / Founder / Head of Growth in B2B SaaS, 11-200 employees, DACH + UK."),
              commonMistake: L("Targeting „All LinkedIn members“ u regionu.", "Targeting \"All LinkedIn members\" in the region."),
              tryThis: L("Koristi ICP definiciju iz Lekcije 2 kao targeting checklist.", "Use the ICP definition from Lesson 2 as a targeting checklist."),
              highlight: L("Targeting određuje kvalitet leadova, ne samo volumen.", "Targeting determines lead quality, not just volume."),
            },
            {
              step: 5,
              title: L("Pokreni Thought Leader Ad test (€20-50/dan, 7 dana)", "Launch Thought Leader Ad test (€20-50/day, 7 days)"),
              whatToDo: L("Kreiraj TLA kampanju sa jednim postom, jednim ad set-om i jasnim CTA-om.", "Create a TLA campaign with one post, one ad set, and clear CTA."),
              whyItMatters: L("Mali test daje podatke pre skaliranja.", "Small test gives data before scaling."),
              example: L("€30/dan × 7 dana = ~€210 test sa jasnim winner/loser signalom.", "€30/day × 7 days = ~€210 test with clear winner/loser signal."),
              commonMistake: L("Skaliranje pre 7 dana testa.", "Scaling before a 7-day test."),
              tryThis: L("Meri CTR, CPC, engagement rate i lead quality, ne samo impressions.", "Measure CTR, CPC, engagement rate, and lead quality, not just impressions."),
              highlight: L("Test pre scale-a.", "Test before scale."),
            },
            {
              step: 6,
              title: L("Poveži Lead Gen Form ili landing CTA", "Connect Lead Gen Form or landing CTA"),
              whatToDo: L("Usmeri traffic ka Lead Gen Form-u, webinar registration page ili checklist landing-u.", "Drive traffic to Lead Gen Form, webinar registration page, or checklist landing."),
              whyItMatters: L("Paid mora da capture-uje intent u merljiv format.", "Paid must capture intent in a measurable format."),
              example: L("Lead Gen Form sa 3 polja: ime, email, uloga, sync u HubSpot.", "Lead Gen Form with 3 fields: name, email, role, sync to HubSpot."),
              commonMistake: L("CTA koji vodi na generički homepage.", "CTA that leads to a generic homepage."),
              tryThis: L("CTA mora da se poklapa sa postom i offer-om.", "CTA must match the post and offer."),
              highlight: L("Jedan jasan conversion point po kampanji.", "One clear conversion point per campaign."),
            },
            {
              step: 7,
              title: L("Retarget engagere + site posetioce + webinar listu", "Retarget engagers + site visitors + webinar list"),
              whatToDo: L("Kreiraj retargeting kampanje za tople publike sa drugačijim CTA-om.", "Create retargeting campaigns for warm audiences with a different CTA."),
              whyItMatters: L("Retargeting konvertuje bolje nego cold prospecting.", "Retargeting converts better than cold prospecting."),
              example: L("Post engagers → webinar CTA. Site visitors → checklist. Webinar no-shows → replay.", "Post engagers → webinar CTA. Site visitors → checklist. Webinar no-shows → replay."),
              commonMistake: L("Isti CTA za sve publike.", "Same CTA for all audiences."),
              tryThis: L("Minimum 3 retarget segmenta sa različitim porukama.", "Minimum 3 retarget segments with different messages."),
              highlight: L("Retargeting je gde CPL obično pada.", "Retargeting is where CPL usually drops."),
            },
            {
              step: 8,
              title: L("Gurni ad leadove u CRM sa source tag-ovima", "Push ad leads into CRM with source tags"),
              whatToDo: L("Sync Lead Gen Form submissions i landing conversions u CRM sa punim kontekstom.", "Sync Lead Gen Form submissions and landing conversions to CRM with full context."),
              whyItMatters: L("Bez CRM-a, paid leadovi nestaju.", "Without CRM, paid leads disappear."),
              example: L("Source: LinkedIn TLA | Campaign: [name] | Ad: [post] | Signal: medium | Next: founder DM.", "Source: LinkedIn TLA | Campaign: [name] | Ad: [post] | Signal: medium | Next: founder DM."),
              commonMistake: L("Praćenje samo broja leadova.", "Only tracking lead count."),
              tryThis: L("Automatizuj sync pre nego što kampanja krene.", "Automate sync before the campaign goes live."),
              highlight: L("CRM zatvara loop između ad spend-a i pipeline-a.", "CRM closes the loop between ad spend and pipeline."),
            },
          ],
        },
        {
          type: "table",
          caption: L("Budget test plan", "Budget test plan"),
          headers: H(["Parametar", "Preporuka"], ["Parameter", "Recommendation"]),
          rows: [
            { cells: [L("Dnevni budžet", "Daily budget"), L("€20-50/dan za prvi test", "€20-50/day for first test")] },
            { cells: [L("Trajanje testa", "Test duration"), L("7 dana minimum", "7 days minimum")] },
            { cells: [L("Ukupan test budžet", "Total test budget"), L("€140-350", "€140-350")] },
            { cells: [L("Kill criteria", "Kill criteria"), L("CPL > 3× target / CTR < 0.3% / zero ICP-fit leads", "CPL > 3× target / CTR < 0.3% / zero ICP-fit leads")] },
            { cells: [L("Scale criteria", "Scale criteria"), L("CPL < target / 3+ qualified leads / strong engagement", "CPL < target / 3+ qualified leads / strong engagement")] },
          ],
        },
        {
          type: "table",
          caption: L("Targeting checklist", "Targeting checklist"),
          headers: H(["Kriterijum", "Primer"], ["Criterion", "Example"]),
          rows: [
            { cells: [L("Job titles", "Job titles"), L("Founder, VP Sales, Head of Growth, CMO", "Founder, VP Sales, Head of Growth, CMO")] },
            { cells: [L("Industrija", "Industry"), L("B2B SaaS, Professional Services, IT Consulting", "B2B SaaS, Professional Services, IT Consulting")] },
            { cells: [L("Veličina firme", "Company size"), L("11-200 zaposlenih (SMB/mid-market)", "11-200 employees (SMB/mid-market)")] },
            { cells: [L("Geografija", "Geography"), L("DACH, UK, US, CEE, po ICP definiciji", "DACH, UK, US, CEE, per ICP definition")] },
            { cells: [L("Profile language", "Profile language"), L("English (ili match sa ad copy-jem)", "English (or match ad copy language)")] },
            { cells: [L("Exclusions", "Exclusions"), L("Postojeći klijenti, zaposleni, competitor-i", "Existing clients, employees, competitors")] },
          ],
        },
        {
          type: "table",
          caption: L("CRM polja za ad leadove", "CRM fields for ad leads"),
          headers: H(["Polje", "Primer"], ["Field", "Example"]),
          rows: [
            { cells: [L("Source", "Source"), L("LinkedIn Ads", "LinkedIn Ads")] },
            { cells: [L("Ad type", "Ad type"), L("Thought Leader Ad / Lead Gen Form / Retarget", "Thought Leader Ad / Lead Gen Form / Retarget")] },
            { cells: [L("Campaign name", "Campaign name"), L("TLA, engagement-to-pipeline", "TLA, engagement-to-pipeline")] },
            { cells: [L("Post / creative", "Post / creative"), L("[LinkedIn post URL]", "[LinkedIn post URL]")] },
            { cells: [L("Lead status", "Lead status"), L("New / contacted / qualified / nurture", "New / contacted / qualified / nurture")] },
            { cells: [L("Signal level", "Signal level"), L("Light / medium / strong", "Light / medium / strong")] },
            { cells: [L("CPL", "CPL"), L("€12.50", "€12.50")] },
            { cells: [L("Next action", "Next action"), L("Founder DM / send checklist / sales call", "Founder DM / send checklist / sales call")] },
            { cells: [L("Stage", "Stage"), L("Engaged / warm list / qualified / opportunity", "Engaged / warm list / qualified / opportunity")] },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "proof",
      title: L("Dokaz i istraživanja", "Proof / trust section"),
      blocks: [
        {
          type: "stat-row",
          items: [
            {
              value: L("34", "34"),
              label: L("Jezika", "Languages"),
              description: L(
                "Profile language targeting u Campaign Manager-u.",
                "Profile language targeting in Campaign Manager.",
              ),
            },
            {
              value: L("TLA", "TLA"),
              label: L("Format", "Format"),
              description: L(
                "Boost postojećeg profila, prirodniji feed od company ads.",
                "Boost existing profile post, more natural feed than company ads.",
              ),
            },
            {
              value: L("B2B", "B2B"),
              label: L("Thought leadership", "Thought leadership"),
              description: L(
                "Kupci traže founder uvid pre vendor kontakta.",
                "Buyers seek founder insight before vendor contact.",
              ),
            },
          ],
        },
        {
          type: "proof-grid",
          cards: [
            {
              title: L("Thought Leader Ads su dizajnirani za founder content", "Thought Leader Ads are designed for founder content"),
              body: L(
                "LinkedIn Thought Leader Ads omogućavaju firmama da boost-uju postojeće postove sa individualnih profila, izgledaju kao organic content, ne kao klasična reklama.",
                "LinkedIn Thought Leader Ads let companies boost existing posts from individual profiles, they look like organic content, not classic ads.",
              ),
              sourceLabel: L("LinkedIn Business", "LinkedIn Business"),
              sourceUrl: "https://business.linkedin.com/marketing-solutions/thought-leader-ads",
            },
            {
              title: L("TLA imaju viši engagement od standardnih ads", "TLA drive higher engagement than standard ads"),
              body: L(
                "LinkedIn Help dokumentacija potvrđuje da Thought Leader Ads koriste postojeći sadržaj sa profila, što rezultira prirodnijim izgledom i boljim engagement metrikama u B2B kontekstu.",
                "LinkedIn Help documentation confirms Thought Leader Ads use existing profile content, resulting in a more natural appearance and better engagement metrics in B2B context.",
              ),
              sourceLabel: L("LinkedIn Help", "LinkedIn Help"),
              sourceUrl: "https://www.linkedin.com/help/linkedin/answer/a426278",
            },
            {
              title: L("Thought leadership utiče na B2B odluke", "Thought leadership influences B2B decisions"),
              body: L(
                "LinkedIn Marketing Blog objašnjava kako Thought Leader Ads rade, zašto su efektivni za B2B, i kako se razlikuju od company page kampanja.",
                "The LinkedIn Marketing Blog explains how Thought Leader Ads work, why they are effective for B2B, and how they differ from company page campaigns.",
              ),
              sourceLabel: L("LinkedIn Marketing Blog", "LinkedIn Marketing Blog"),
              sourceUrl: "https://www.linkedin.com/business/marketing/blog/linkedin-ads/what-are-thought-leader-ads-and-how-do-they-work",
            },
            {
              title: L("34 jezika za ad set targeting", "34 languages for ad set targeting"),
              body: L(
                "LinkedIn podržava 34 profile language opcije za ad set targeting, sa specifičnim pravilima za English targeting i Sponsored Messaging.",
                "LinkedIn supports 34 profile language options for ad set targeting, with specific rules for English targeting and Sponsored Messaging.",
              ),
              sourceLabel: L("LinkedIn Help", "LinkedIn Help"),
              sourceUrl: "https://www.linkedin.com/help/linkedin/answer/a427089",
            },
          ],
        },
        { type: "video", video: video3 },
      ],
    },    {
      type: "section",
      id: "implement",
      title: L("Kako implementirati", "How to implement"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(["1. Boost criteria, kada boost-ovati post"], ["1. Boost criteria, when to boost a post"]),
        },
        {
          type: "bullets",
          items: P(
            [
              "Post ima 20+ ICP komentara ili 5+ DM zahteva.",
              "Comment-to-like ratio je visok (kvalitetan engagement).",
              "CTA u postu je jasan (checklist, webinar, framework).",
              "Tema se poklapa sa ICP bolom iz Lekcije 2.",
              "Post je objavljen u poslednjih 30 dana (fresh signal).",
            ],
            [
              "Post has 20+ ICP comments or 5+ DM requests.",
              "Comment-to-like ratio is high (quality engagement).",
              "CTA in the post is clear (checklist, webinar, framework).",
              "Topic matches ICP pain from Lesson 2.",
              "Post was published in the last 30 days (fresh signal).",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["2. Campaign structure u Campaign Manager-u"], ["2. Campaign structure in Campaign Manager"]),
        },
        {
          type: "table",
          caption: L("Campaign Manager struktura", "Campaign Manager structure"),
          headers: H(["Nivo", "Primer"], ["Level", "Example"]),
          rows: [
            { cells: [L("Campaign", "Campaign"), L("FLG, TLA, Engagement to Pipeline", "FLG, TLA, Engagement to Pipeline")] },
            { cells: [L("Ad set", "Ad set"), L("ICP, B2B SaaS Founders, EN, DACH", "ICP, B2B SaaS Founders, EN, DACH")] },
            { cells: [L("Ad", "Ad"), L("Boost: [founder post URL]", "Boost: [founder post URL]")] },
            { cells: [L("Objective", "Objective"), L("Website visits / Lead generation / Engagement", "Website visits / Lead generation / Engagement")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["3. Retarget audiences"], ["3. Retarget audiences"]),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Cold prospecting", "Cold prospecting"),
              subtitle: L("Širok ICP", "Broad ICP"),
              variant: "muted",
              items: P(
                [
                  "Visok CPL",
                  "Nizak trust",
                  "Dobar za awareness test",
                  "Loš za founder-led close",
                ],
                [
                  "High CPL",
                  "Low trust",
                  "Good for awareness test",
                  "Weak for founder-led close",
                ],
              ),
            },
            {
              title: L("Warm retarget", "Warm retarget"),
              subtitle: L("Engagers + site + webinar", "Engagers + site + webinar"),
              variant: "accent",
              items: P(
                [
                  "Niži CPL",
                  "Kontekst iz posta/webinara",
                  "Različit CTA po segmentu",
                  "CRM source tag obavezan",
                ],
                [
                  "Lower CPL",
                  "Context from post/webinar",
                  "Different CTA per segment",
                  "CRM source tag required",
                ],
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Retarget segmenti", "Retarget segments"),
          headers: H(["Publika", "Lookback", "CTA"], ["Audience", "Lookback", "CTA"]),
          rows: [
            { cells: [L("Post engagers", "Post engagers"), L("90 dana", "90 days"), L("Webinar registracija", "Webinar registration")] },
            { cells: [L("Site visitors (Insight Tag)", "Site visitors (Insight Tag)"), L("180 dana", "180 days"), L("Checklist download", "Checklist download")] },
            { cells: [L("Video viewers 50%+", "Video viewers 50%+"), L("90 dana", "90 days"), L("Lead Gen Form", "Lead Gen Form")] },
            { cells: [L("Lead Gen Form openers (no submit)", "Lead Gen Form openers (no submit)"), L("30 dana", "30 days"), L("Soft CTA / resource", "Soft CTA / resource")] },
            { cells: [L("Webinar registrants", "Webinar registrants"), L("Custom list / matched audience", "Custom list / matched audience"), L("Replay + next step", "Replay + next step")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["4. Lead Gen Form setup"], ["4. Lead Gen Form setup"]),
        },
        {
          type: "bullets",
          items: P(
            [
              "Maksimum 3-4 polja (ime, email, uloga, firma).",
              "Thank-you message sa jasnim next step-om.",
              "Sync u HubSpot/Pipedrive pre launch-a.",
              "Test submit pre nego što kampanja krene.",
            ],
            [
              "Maximum 3-4 fields (name, email, role, company).",
              "Thank-you message with clear next step.",
              "Sync to HubSpot/Pipedrive before launch.",
              "Test submit before the campaign goes live.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["5. CRM rules za ad leadove"], ["5. CRM rules for ad leads"]),
        },
        {
          type: "table",
          caption: L("CRM pravila", "CRM rules"),
          headers: H(["Ponašanje", "Akcija"], ["Behavior", "Action"]),
          rows: [
            { cells: [L("Lead Gen Form submit", "Lead Gen Form submit"), L("Create contact + send resource + assign follow-up task", "Create contact + send resource + assign follow-up task")] },
            { cells: [L("Webinar registration via ad", "Webinar registration via ad"), L("Add to webinar list + segment follow-up", "Add to webinar list + segment follow-up")] },
            { cells: [L("High-fit lead (ICP match)", "High-fit lead (ICP match)"), L("Founder DM within 24h", "Founder DM within 24h")] },
            { cells: [L("Retarget conversion", "Retarget conversion"), L("Update signal level + next action", "Update signal level + next action")] },
            { cells: [L("No response after 7 days", "No response after 7 days"), L("Move to nurture sequence", "Move to nurture sequence")] },
          ],
        },
      ],
    },    {
      type: "section",
      id: "tools",
      title: L("Idealni stack alata", "Ideal tool stack"),
      blocks: [
        {
          type: "tool-grid",
          tools: [
            {
              name: "LinkedIn Sales Navigator",
              logo: "/images/sales-tools/linkedin-sales-navigator.png",
              usedFor: L(
                "ICP liste, account research, export prospect-a pre outreach-a",
                "ICP lists, account research, prospect export before outreach",
              ),
              whyItFits: L(
                "Direktan napad počinje od tačne liste, ne od širokih reklama.",
                "Direct attack starts from an accurate list, not broad ads.",
              ),
              alternative: L("Apollo, ručna pretraga", "Apollo, manual search"),
            },
            {
              name: "Apollo",
              slug: "apollo",
              logo: "/images/sales-tools/apollo.png",
              usedFor: L(
                "Alternativa ili dopuna Navigator-u za list building i filtere",
                "Alternative or complement to Navigator for list building and filters",
              ),
              whyItFits: L(
                "Brzo testiranje segmenta ICP-a pre skaliranja outreach-a i ads-a.",
                "Fast ICP segment testing before scaling outreach and ads.",
              ),
              alternative: L("Sales Navigator, Clay", "Sales Navigator, Clay"),
            },
            {
              name: "La Growth Machine",
              slug: "lagrowthmachine",
              logo: "/images/sales-tools/lagrowthmachine.png",
              usedFor: L(
                "LinkedIn outreach sekvence, test ponude, multistep kampanje",
                "LinkedIn outreach sequences, offer testing, multistep campaigns",
              ),
              whyItFits: L(
                "Direktan kanal FLG-a, radi pre nego što uključiš TLA.",
                "Direct FLG channel, runs before you turn on TLA.",
              ),
              alternative: L("HeyReach, Lemlist", "HeyReach, Lemlist"),
            },
            {
              name: "HeyReach",
              slug: "heyreach",
              logo: "/images/sales-tools/heyreach.png",
              usedFor: L(
                "LinkedIn outreach automatizacija i A/B test poruka",
                "LinkedIn outreach automation and message A/B tests",
              ),
              whyItFits: L(
                "Povezuje se sa listom iz Navigator-a, meri reply pre content boost-a.",
                "Connects to Navigator lists, measures replies before content boost.",
              ),
              alternative: L("La Growth Machine, Instantly", "La Growth Machine, Instantly"),
            },
            {
              name: "Instantly",
              slug: "instantly",
              logo: "/images/sales-tools/instantly.png",
              usedFor: L(
                "Email outreach uz LinkedIn, follow-up nakon content serije",
                "Email outreach alongside LinkedIn, follow-up after content series",
              ),
              whyItFits: L(
                "Multikanal kada ICP odgovara i na inbox i na LinkedIn.",
                "Multichannel when ICP responds on both inbox and LinkedIn.",
              ),
              alternative: L("Lemlist, Smartlead", "Lemlist, Smartlead"),
            },
            {
              name: "Lemlist",
              slug: "lemlist",
              logo: "/images/sales-tools/lemlist.png",
              usedFor: L(
                "Multichannel outreach (LinkedIn + email) iz jedne sekvence",
                "Multichannel outreach (LinkedIn + email) from one sequence",
              ),
              whyItFits: L(
                "Value-based follow-up iz ICP dokumenta kroz više touchpoint-a.",
                "Value-based follow-up from ICP document across multiple touchpoints.",
              ),
              alternative: L("HeyReach, Instantly", "HeyReach, Instantly"),
            },
            {
              name: "Riverside",
              logo: "/images/sales-tools/riverside.png",
              usedFor: L(
                "Snimanje podcast intervjua sa founder-om, visok kvalitet audio/video",
                "Recording podcast-style founder interviews, high-quality audio/video",
              ),
              whyItFits: L(
                "Autentičan content bez da founder piše svaki dan.",
                "Authentic content without the founder writing every day.",
              ),
              alternative: L("Zoom, Google Meet", "Zoom, Google Meet"),
            },
            {
              name: "Descript",
              logo: "/images/sales-tools/descript.png",
              usedFor: L(
                "Transkript, kratki klipovi, editovanje iz jednog snimka",
                "Transcript, short clips, editing from one recording",
              ),
              whyItFits: L(
                "Jedan intervju postaje više objava za LinkedIn.",
                "One interview becomes multiple LinkedIn posts.",
              ),
              alternative: L("CapCut, OpusClip", "CapCut, OpusClip"),
            },
            {
              name: "Canva",
              logo: "/images/sales-tools/canva.png",
              usedFor: L(
                "Carousel postovi iz transkripta, vizuali za retarget kad treba",
                "Carousel posts from transcript, retarget visuals when needed",
              ),
              whyItFits: L(
                "Brza produkcija u founder tonu, bez agencije.",
                "Fast production in founder tone, without an agency.",
              ),
              alternative: L("Figma, Adobe Express", "Figma, Adobe Express"),
            },
            {
              name: "Taplio",
              slug: "taplio",
              logo: "/images/sales-tools/taplio.png",
              usedFor: L(
                "Objava, analitika, izbor winning posta pre TLA boost-a",
                "Publishing, analytics, picking winning post before TLA boost",
              ),
              whyItFits: L(
                "Vidiš koji post već privlači ICP pre nego što potrošiš ad budžet.",
                "See which post already attracts ICP before you spend ad budget.",
              ),
              alternative: L("Native LinkedIn analytics", "Native LinkedIn analytics"),
            },
            {
              name: "LinkedIn Campaign Manager",
              logo: "/images/sales-tools/linkedin-campaign-manager.png",
              usedFor: L(
                "Thought Leader Ads, ICP targeting, budžet, reporting",
                "Thought Leader Ads, ICP targeting, budget, reporting",
              ),
              whyItFits: L(
                "Indirektan napad: skalira post koji outreach i content već podržavaju.",
                "Indirect attack: scales the post outreach and content already support.",
              ),
              alternative: L("Nema zamene za LinkedIn ads", "No replacement for LinkedIn ads"),
            },
            {
              name: "HubSpot / Pipedrive",
              slug: "hubspot",
              logo: "/images/sales-tools/hubspot.png",
              usedFor: L(
                "CRM, lead scoring, signali iz outreach-a, content-a i ads-a",
                "CRM, lead scoring, signals from outreach, content, and ads",
              ),
              whyItFits: L(
                "Jedno mesto za pravovremeni sledeći korak prema ICP-u.",
                "One place for timely next steps toward the ICP.",
              ),
              alternative: L("Attio, Folk", "Attio, Folk"),
            },
            {
              name: "Make.com / Zapier",
              slug: "n8n",
              usedFor: L(
                "Sync leadova, formi, Slack obaveštenja, CRM ažuriranja",
                "Sync leads, forms, Slack alerts, CRM updates",
              ),
              whyItFits: L(
                "Outreach + ads + CRM bez ručnog prepisivanja.",
                "Outreach + ads + CRM without manual copy-paste.",
              ),
              alternative: L("Native HubSpot integracije", "Native HubSpot integrations"),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "workflow",
      title: L("Primer workflow-a", "Workflow example"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Tim u sync-u, organic signal → Campaign Manager → CRM",
            "Team in sync, organic signal → Campaign Manager → CRM",
          ),
          caption: L(
            "Taplio bira winner · Campaign Manager pokreće TLA · HubSpot hvata leadove · Make automatski follow-up.",
            "Taplio picks winner · Campaign Manager launches TLA · HubSpot captures leads · Make automates follow-up.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("30+", "30+"),
              label: L("ICP komentara", "ICP comments"),
              description: L(
                "Minimum organic signal pre paid testa.",
                "Minimum organic signal before paid test.",
              ),
            },
            {
              value: L("7", "7"),
              label: L("Dana TLA testa", "TLA test days"),
              description: L(
                "€30/dan → review CPL i lead quality.",
                "€30/day → review CPL and lead quality.",
              ),
            },
            {
              value: L("3", "3"),
              label: L("Retarget publike", "Retarget audiences"),
              description: L(
                "Engagers · site · webinar, različit CTA po sloju.",
                "Engagers · site · webinar, different CTA per layer.",
              ),
            },
          ],
        },
        {
          type: "workflow",
          title: L("Lead Agents FLG: od ICP-a do TLA", "Lead Agents FLG: from ICP to TLA"),
          steps: P(
            [
              "Definišemo ICP dokument (holy grail).",
              "Optimizujemo LinkedIn profil (5 sekundi jasnoće).",
              "Gradimo listu u Sales Navigator ili Apollo.",
              "Pokrećemo cold outreach (La Growth Machine, HeyReach, Instantly, Lemlist).",
              "Pratimo buying signale i prilagođavamo poruke.",
              "Snimamo podcast intervju sa founder-om (Riverside).",
              "Pravimo klipove, carousel i postove (Descript, Canva, Taplio).",
              "Merimo koji post organski najbolje radi kod ICP-a.",
              "Boost-ujemo winner preko Thought Leader Ads (Campaign Manager).",
              "Svi signali i leadovi idu u CRM sa lead scoring-om.",
              "Outreach na engagere i high-score leadove u roku 24-48h.",
              "Posle 7 dana: scale ili kill kampanju.",
            ],
            [
              "We define the ICP document (holy grail).",
              "We optimize the LinkedIn profile (5-second clarity).",
              "We build the list in Sales Navigator or Apollo.",
              "We launch cold outreach (La Growth Machine, HeyReach, Instantly, Lemlist).",
              "We track buying signals and adapt messages.",
              "We record a podcast-style interview with the founder (Riverside).",
              "We create clips, carousels, and posts (Descript, Canva, Taplio).",
              "We measure which post performs best organically with the ICP.",
              "We boost the winner via Thought Leader Ads (Campaign Manager).",
              "All signals and leads go to CRM with lead scoring.",
              "Outreach to engagers and high-score leads within 24-48h.",
              "After 7 days: scale or kill the campaign.",
            ],
          ),
          highlight: L(
            "Outreach direktno, Ads indirektno, CRM povezuje oba.",
            "Outreach direct, Ads indirect, CRM connects both.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "videos",
      title: L("Video materijali", "YouTube videos to embed"),
      blocks: [
        { type: "video", video: video1 },
        { type: "video", video: video2 },
        { type: "video", video: video3 },
        { type: "video", video: video4 },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Pre objavljivanja proveri da li su svi embed-ovi dostupni.",
            "Verify each embed is available before publishing.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "visuals",
      title: L("Predlozi vizuala", "Visual elements"),
      blocks: [
        {
          type: "visual-suggestions",
          items: [
            {
              title: L("LinkedIn Ads Boost Map", "LinkedIn Ads Boost Map"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "Organic content → TLA boost → warm audiences → lead capture → CRM pipeline.",
                "Organic content → TLA boost → warm audiences → lead capture → CRM pipeline.",
              ),
            },
            {
              title: L(
                "Organic Signal → Best Post → TLA → Warm Audience → Lead Magnet → CRM",
                "Organic Signal → Best Post → TLA → Warm Audience → Lead Magnet → CRM",
              ),
              placement: L("Framework sekcija", "Framework section"),
              description: L("Kompletan Founder-Led Ads workflow.", "The complete Founder-Led Ads workflow."),
            },
            {
              title: L("Ad Types Matrix", "Ad Types Matrix"),
              placement: L("TLA vs company sekcija", "TLA vs company section"),
              description: L("6 ad tipova sa FLG use case-ovima.", "6 ad types with FLG use cases."),
            },
            {
              title: L("Language Targeting Diagram", "Language Targeting Diagram"),
              placement: L("Languages sekcija", "Languages section"),
              description: L("Profile language → ad set → audience match flow.", "Profile language → ad set → audience match flow."),
            },
            {
              title: L("Paid Steps Timeline", "Paid Steps Timeline"),
              placement: L("Paid steps sekcija", "Paid steps section"),
              description: L("8 koraka od organic proof do CRM sa budget milestones.", "8 steps from organic proof to CRM with budget milestones."),
            },
            {
              title: L("Retargeting Funnel", "Retargeting Funnel"),
              placement: L("Implement sekcija", "Implement section"),
              description: L("Cold → warm → hot audience layers sa različitim CTA-ovima.", "Cold → warm → hot audience layers with different CTAs."),
            },
            {
              title: L("Ad-to-CRM Map", "Ad-to-CRM Map"),
              placement: L("CRM sekcija", "CRM section"),
              description: L("Polja i stage-ovi potrebni za praćenje ad uticaja na pipeline.", "Fields and stages needed to track ad impact on pipeline."),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "checklist",
      title: L("Pre sledeće lekcije uradi ovo", "Before moving to the next lesson, do this"),
      blocks: [
        {
          type: "checklist",
          title: L("Čeklista Lekcije 9", "Lesson 9 checklist"),
          items: P(
            [
              "ICP dokument ažuran i korišćen za targeting.",
              "Profil i cold outreach već rade.",
              "Bar jedna serija contenta iz intervjua objavljena.",
              "Winning post izabran (Taplio ili native analytics).",
              "TLA kampanja u Campaign Manager-u, ICP targeting.",
              "Test budžet €20-50/dan, 7 dana.",
              "CRM polja: izvor, kampanja, signal, lead score, sledeća akcija.",
              "Sync leadova u HubSpot pre launch-a.",
              "Outreach plan za engagere posle boost-a.",
              "Kill/scale kriterijumi zapisani pre starta.",
              "Review posle 7 dana.",
            ],
            [
              "ICP document updated and used for targeting.",
              "Profile and cold outreach already working.",
              "At least one interview content series published.",
              "Winning post selected (Taplio or native analytics).",
              "TLA campaign in Campaign Manager, ICP targeting.",
              "Test budget €20-50/day, 7 days.",
              "CRM fields: source, campaign, signal, lead score, next action.",
              "Sync leads to HubSpot before launch.",
              "Outreach plan for engagers after boost.",
              "Kill/scale criteria written before start.",
              "Review after 7 days.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "template",
      title: L("Šablon / swipe file", "Template / swipe file"),
      blocks: [
        {
          type: "template",
          title: L("Founder-Led LinkedIn Ads Template", "Founder-Led LinkedIn Ads Template"),
          content: L(
            `1. Campaign goal

ICP:
[ICP definition]

Primary goal:
[webinar registrations / checklist downloads / consultation requests]

Secondary goal:
[retarget warm engagers / build remarketing list]

Success metric:
[CPL target / registration count / qualified leads]

2. Post selection

Winning post URL:
[LinkedIn post URL]

Why this post:
[ICP comments / DM requests / strong engagement rate]

CTA in post:
[checklist / webinar / consultation]

3. Targeting

Job titles:
[VP Sales / Founder / Head of Growth]

Industries:
[B2B SaaS / Professional Services]

Company size:
[11-200 employees]

Geography:
[DACH / UK / US]

Profile language:
[English / Serbian / match ad language]

4. Budget test

Daily budget:
€20-50/day

Test duration:
7 days

Total test budget:
€140-350

Kill criteria:
[CPL > €X / CTR < Y% / no ICP-fit leads]

Scale criteria:
[CPL < €X / 3+ qualified leads / strong engagement]

5. Lead Gen Form / landing

Conversion type:
[Lead Gen Form / landing page / webinar registration]

Fields:
[name, email, role, company]

Thank-you action:
[send checklist / redirect to webinar / book call]

CRM sync:
[HubSpot / Pipedrive via Make/Zapier]

6. Retarget audiences

Audience 1: Post engagers → [webinar CTA]
Audience 2: Site visitors (180 days) → [checklist CTA]
Audience 3: Webinar registrants → [replay / next step]
Audience 4: Lead Gen Form openers (no submit) → [soft CTA]

7. CRM fields

Source: LinkedIn Ads
Ad type: Thought Leader Ad / Lead Gen Form / Retarget
Campaign name: [campaign name]
Post / creative: [post URL or ad name]
Lead status: new / contacted / qualified / nurture
Signal level: light / medium / strong
CPL: [cost per lead]
Next action: [founder DM / send resource / sales call]
Stage: engaged / warm list / qualified / opportunity`,
            `1. Campaign goal

ICP:
[ICP definition]

Primary goal:
[webinar registrations / checklist downloads / consultation requests]

Secondary goal:
[retarget warm engagers / build remarketing list]

Success metric:
[CPL target / registration count / qualified leads]

2. Post selection

Winning post URL:
[LinkedIn post URL]

Why this post:
[ICP comments / DM requests / strong engagement rate]

CTA in post:
[checklist / webinar / consultation]

3. Targeting

Job titles:
[VP Sales / Founder / Head of Growth]

Industries:
[B2B SaaS / Professional Services]

Company size:
[11-200 employees]

Geography:
[DACH / UK / US]

Profile language:
[English / Serbian / match ad language]

4. Budget test

Daily budget:
€20-50/day

Test duration:
7 days

Total test budget:
€140-350

Kill criteria:
[CPL > €X / CTR < Y% / no ICP-fit leads]

Scale criteria:
[CPL < €X / 3+ qualified leads / strong engagement]

5. Lead Gen Form / landing

Conversion type:
[Lead Gen Form / landing page / webinar registration]

Fields:
[name, email, role, company]

Thank-you action:
[send checklist / redirect to webinar / book call]

CRM sync:
[HubSpot / Pipedrive via Make/Zapier]

6. Retarget audiences

Audience 1: Post engagers → [webinar CTA]
Audience 2: Site visitors (180 days) → [checklist CTA]
Audience 3: Webinar registrants → [replay / next step]
Audience 4: Lead Gen Form openers (no submit) → [soft CTA]

7. CRM fields

Source: LinkedIn Ads
Ad type: Thought Leader Ad / Lead Gen Form / Retarget
Campaign name: [campaign name]
Post / creative: [post URL or ad name]
Lead status: new / contacted / qualified / nurture
Signal level: light / medium / strong
CPL: [cost per lead]
Next action: [founder DM / send resource / sales call]
Stage: engaged / warm list / qualified / opportunity`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Kada koristiti LinkedIn Ads u Founder-Led Growth-u?", "When should I use LinkedIn Ads in Founder-Led Growth?"),
      answer: L(
        "Kad imaš ICP dokument, optimizovan profil, aktivan outreach, content iz intervjua i bar jedan post koji organski dobro radi. TLA skalira taj post, ne zamenjuje outreach.",
        "When you have the ICP document, optimized profile, active outreach, interview-based content, and at least one post that performs well organically. TLA scales that post, it does not replace outreach.",
      ),
    },
    {
      question: L("Šta su Thought Leader Ads?", "What are Thought Leader Ads?"),
      answer: L(
        "LinkedIn format koji boost-uje postojeće postove sa individualnih profila (founder, executive). Izgledaju kao organic content, ne kao company reklama, viši trust u B2B.",
        "A LinkedIn format that boosts existing posts from individual profiles (founder, executive). They look like organic content, not company ads, higher B2B trust.",
      ),
    },
    {
      question: L("Koliki budžet treba za prvi test?", "What budget do I need for the first test?"),
      answer: L(
        "€20-50/dan × 7 dana = €140-350. Dovoljno za jasan winner/loser signal pre skaliranja. Ne skaliraj pre 7 dana.",
        "€20-50/day × 7 days = €140-350. Enough for a clear winner/loser signal before scaling. Do not scale before 7 days.",
      ),
    },
    {
      question: L("Da li TLA zamenjuju organski content?", "Do TLA replace organic content?"),
      answer: L(
        "Ne. TLA boost-uju postojeće postove. Bez jakog organic content-a, nema šta boost-ovati. Organic gradi poverenje; paid ga distribuira.",
        "No. TLA boost existing posts. Without strong organic content, there is nothing to boost. Organic builds trust; paid distributes it.",
      ),
    },
    {
      question: L("Kako povezati Lead Gen Forms sa CRM-om?", "How do I connect Lead Gen Forms to CRM?"),
      answer: L(
        "Koristi native HubSpot integraciju ili Make/Zapier za sync. Setup pre launch-a, test submit pre nego što kampanja krene.",
        "Use native HubSpot integration or Make/Zapier for sync. Set up before launch, test submit before the campaign goes live.",
      ),
    },
    {
      question: L("Koji jezik koristiti za targeting?", "Which language should I use for targeting?"),
      answer: L(
        "Match ad copy, landing page i profile language. Za EN ICP: target English. Za lokalne markete: odvojeni ad set-ovi po jeziku. English u non-messaging kampanjama doseže sve u geo lokaciji.",
        "Match ad copy, landing page, and profile language. For EN ICP: target English. For local markets: separate ad sets per language. English in non-messaging campaigns reaches everyone in the geo location.",
      ),
    },
    {
      question: L("Kada ugasiti kampanju?", "When should I kill a campaign?"),
      answer: L(
        "Posle 7 dana: CPL > 3× target, CTR < 0.3%, ili zero ICP-fit leadova. Kill brzo, dokumentuj learnings, testiraj novi post ili targeting.",
        "After 7 days: CPL > 3× target, CTR < 0.3%, or zero ICP-fit leads. Kill fast, document learnings, test new post or targeting.",
      ),
    },
    {
      question: L("Koja je najveća greška sa LinkedIn Ads u FLG-u?", "What is the biggest mistake with LinkedIn Ads in FLG?"),
      answer: L(
        "Pokretanje reklama pre ICP-a, profila i outreach-a, ili boost posta koji nije dokazao temu. Tako trošiš budžet bez boljeg reply rate-a i sastanaka.",
        "Launching ads before ICP, profile, and outreach, or boosting a post that has not proven the topic. That burns budget without better reply rate and meetings.",
      ),
    },
  ],
  sources: [
    { title: L("LinkedIn, Thought Leader Ads", "LinkedIn, Thought Leader Ads"), url: "https://business.linkedin.com/marketing-solutions/thought-leader-ads" },
    { title: L("LinkedIn Help, Thought Leader Ads overview", "LinkedIn Help, Thought Leader Ads overview"), url: "https://www.linkedin.com/help/linkedin/answer/a426278" },
    { title: L("LinkedIn Help, Supported languages for ad sets", "LinkedIn Help, Supported languages for ad sets"), url: "https://www.linkedin.com/help/linkedin/answer/a427089" },
    { title: L("LinkedIn Help, Insight Tag setup", "LinkedIn Help, Insight Tag setup"), url: "https://www.linkedin.com/help/linkedin/answer/a421292" },
    { title: L("LinkedIn Help, Lead Gen Forms", "LinkedIn Help, Lead Gen Forms"), url: "https://www.linkedin.com/help/linkedin/answer/a420668" },
    { title: L("LinkedIn Help, Ad set targeting", "LinkedIn Help, Ad set targeting"), url: "https://www.linkedin.com/help/linkedin/answer/a420751" },
    { title: L("LinkedIn, Advertising Policies", "LinkedIn, Advertising Policies"), url: "https://www.linkedin.com/legal/ads-policy" },
    { title: L("LinkedIn, B2B Thought Leadership Influence", "LinkedIn, B2B Thought Leadership Influence"), url: "https://www.linkedin.com/business/marketing/blog/research-and-insights/b2b-thought-leadership-influence-hidden-buyers" },
    { title: L("Edelman, 2025 B2B Thought Leadership Report", "Edelman, 2025 B2B Thought Leadership Report"), url: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report" },
    { title: L("LinkedIn, Marketing Solutions Ads", "LinkedIn, Marketing Solutions Ads"), url: "https://business.linkedin.com/marketing-solutions/ads" },
    { title: L("LinkedIn Marketing Blog, Ads tips for B2B", "LinkedIn Marketing Blog, Ads tips for B2B"), url: "https://www.linkedin.com/business/marketing/blog/linkedin-ads/linkedin-ads-tips-for-b2b-marketers" },
    { title: L("LinkedIn Help, Campaign Manager overview", "LinkedIn Help, Campaign Manager overview"), url: "https://www.linkedin.com/help/linkedin/answer/a421784" },
    { title: L("LinkedIn Marketing Blog, Measure ad performance", "LinkedIn Marketing Blog, Measure ad performance"), url: "https://www.linkedin.com/business/marketing/blog/linkedin-ads/how-to-measure-linkedin-ad-performance" },
    { title: L("LinkedIn, Ads Guide", "LinkedIn, Ads Guide"), url: "https://business.linkedin.com/marketing-solutions/success/ads-guide" },
  ],
  relatedLessons: {
    previous: {
      slug: "webinars-founder-led-growth",
      title: L(
        "Lekcija 8, Kako koristiti webinare kao deo Founder-Led Growth sistema",
        "Lesson 8, How to Use Webinars as Part of Founder-Led Growth",
      ),
    },
    next: {
      slug: "crm-pipeline-tracking",
      title: L(
        "Lekcija 10, Kako pratiti Founder-Led Growth aktivnosti u CRM-u",
        "Lesson 10, How to Track Founder-Led Growth Activities in Your CRM",
      ),
      note: L(
        "Sledeća lekcija pokazuje kako CRM hvata ad leadove, webinar signale i founder aktivnosti u jedinstven pipeline sistem.",
        "The next lesson shows how CRM captures ad leads, webinar signals, and founder activities in one unified pipeline system.",
      ),
    },
    related: [
      { slug: "what-founder-led-growth-is", title: L("Lekcija 1, Šta je Founder-Led Growth", "Lesson 1, What Founder-Led Growth Is and Why It Works for B2B Companies") },
      { slug: "how-to-define-your-icp", title: L("Lekcija 2, Kako definisati ICP", "Lesson 2, How to Define Your ICP for B2B Lead Generation") },
      { slug: "linkedin-profile-optimization-founder", title: L("Lekcija 3, LinkedIn profil za founder-a", "Lesson 3, How to Optimize a Founder's LinkedIn Profile for B2B Lead Generation") },
      { slug: "linkedin-content-strategy-founder", title: L("Lekcija 4, LinkedIn content strategija", "Lesson 4, How to Build a LinkedIn Content Strategy for a Founder") },
      { slug: "write-educational-linkedin-posts", title: L("Lekcija 5, Edukativni LinkedIn postovi", "Lesson 5, How to Write Educational LinkedIn Posts That Build Authority") },
      { slug: "linkedin-engagement-outreach-list", title: L("Lekcija 7, LinkedIn engagement u outreach listu", "Lesson 7, How to Turn LinkedIn Engagement Into an Outreach List") },
      { slug: "buying-signals-b2b-sales", title: L("Lekcija 11, Buying signali", "Lesson 11, What Buying Signals Are and How to Use Them in B2B Sales") },
    ],
  },
  cta: {
    title: L("Outreach direktno, Ads indirektno", "Outreach direct, Ads indirect"),
    body: L(
      "Kod Lead Agents-a, Founder-Led Growth počinje od ICP-a i outreach-a, gradi poverenje kroz content iz intervjua, pa skalira dokazani post preko Thought Leader Ads. CRM i lead scoring povezuju sve signale. Sledeća lekcija: kako to sve pratiti u CRM-u.",
      "At Lead Agents, Founder-Led Growth starts with ICP and outreach, builds trust through interview-based content, then scales the proven post via Thought Leader Ads. CRM and lead scoring connect all signals. Next lesson: how to track it all in CRM.",
    ),
    primaryLabel: L("Nastavi na Lekciju 10", "Continue Lesson 10"),
    secondaryLabel: L("Zakaži konsultaciju", "Book consultation"),
  },
  seoKeywords: P(
    [
      "linkedin ads founder-led growth",
      "thought leader ads",
      "linkedin ads b2b",
      "linkedin campaign manager",
      "linkedin lead gen forms",
      "linkedin insight tag",
      "linkedin ads retargeting",
      "founder linkedin ads",
      "B2B linkedin advertising",
      "linkedin ads strategija",
      "thought leader ads tutorial",
      "linkedin paid boost",
      "linkedin ads CRM",
      "linkedin ads jezik targeting",
      "linkedin TLA kampanja",
    ],
    [
      "linkedin ads founder-led growth",
      "thought leader ads",
      "linkedin ads b2b",
      "linkedin campaign manager",
      "linkedin lead gen forms",
      "linkedin insight tag",
      "linkedin ads retargeting",
      "founder linkedin ads",
      "B2B linkedin advertising",
      "linkedin ads strategy",
      "thought leader ads tutorial",
      "linkedin paid boost",
      "linkedin ads CRM",
      "linkedin ads language targeting",
      "linkedin TLA campaign",
    ],
  ),
};
