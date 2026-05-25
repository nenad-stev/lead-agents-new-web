import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("Meet Buyer Intent in Sales Navigator", "Meet Buyer Intent in Sales Navigator"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Objašnjava kako LinkedIn Sales Navigator prikazuje buyer intent.",
    "Explains how LinkedIn Sales Navigator surfaces buyer intent.",
  ),
  placementNote: L("Pogledaj posle signal-types sekcije ili u video sekciji.", "Watch after the signal types section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/YZFEWnVVRio",
  watchUrl: "https://www.youtube.com/watch?v=YZFEWnVVRio",
};

const video2 = {
  title: L("What Is Buyer Intent Data?", "What Is Buyer Intent Data?"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisna osnova o buyer intent data i kako funkcioniše u B2B-u.",
    "Useful overview of buyer intent data and how it works in B2B.",
  ),
  placementNote: L("Pogledaj posle core sekcije ili u video sekciji.", "Watch after the core idea section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/cD-Ydw6Wj1E",
  watchUrl: "https://www.youtube.com/watch?v=cD-Ydw6Wj1E",
};

const video3 = {
  title: L("How to Use Intent Data for B2B Sales and Marketing", "How to Use Intent Data for B2B Sales and Marketing"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Objašnjava kako sales i marketing timovi koriste intent signale za prioritizaciju account-a.",
    "Explains how sales and marketing teams can use intent signals to prioritize accounts.",
  ),
  placementNote: L("Pogledaj posle signal-framework sekcije ili u video sekciji.", "Watch after the signal framework section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/oKqOUBXKSWc",
  watchUrl: "https://www.youtube.com/watch?v=oKqOUBXKSWc",
};

const video4 = {
  title: L("Clay Intent Signals / Sales Triggers Tutorial", "Clay Intent Signals / Sales Triggers Tutorial"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Pokazuje kako enrichment i trigger workflow-i podržavaju signal-based selling.",
    "Shows how enrichment and trigger workflows can support signal-based selling.",
  ),
  placementNote: L("Pogledaj posle implement sekcije ili u video sekciji.", "Watch after the implement section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/ii5apLDdRyo",
  watchUrl: "https://www.youtube.com/watch?v=ii5apLDdRyo",
};

const video5 = {
  title: L("HubSpot Lead Scoring Tutorial", "HubSpot Lead Scoring Tutorial"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za podešavanje scoring-a na osnovu fit-a i engagement signala.",
    "Useful for setting up scoring based on fit and engagement signals.",
  ),
  placementNote: L("Pogledaj posle signal-steps sekcije ili u video sekciji.", "Watch after the signal steps section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/CQAL8eEBrm0",
  watchUrl: "https://www.youtube.com/watch?v=CQAL8eEBrm0",
};

export const lesson11RichContent: RichLessonContent = {
  meta: {
    stage: L("Intent Signals", "Intent Signals"),
    readingTime: L("16–20 min", "16–20 min"),
    difficulty: L("Srednji nivo", "Intermediate"),
    outcome: L(
      "Naučićeš kako identifikovati, score-ovati i delovati na buying signale sa LinkedIn-a, website poseta, webinara, CRM-a, ads-a, hiring aktivnosti, intent data platformi i sales razgovora — pre nego što konkurenti stignu do kupca.",
      "Learn how to identify, score, and act on buying signals from LinkedIn, website visits, webinars, CRM, ads, hiring activity, intent data platforms, and sales conversations before competitors reach the buyer.",
    ),
    recommendedTools: L(
      "LinkedIn Sales Navigator, HubSpot, Pipedrive, Clay, Bombora, 6sense, Demandbase, Leadfeeder / Dealfront, RB2B, Common Room, Apollo, Google Sheets, Make.com, Zapier",
      "LinkedIn Sales Navigator, HubSpot, Pipedrive, Clay, Bombora, 6sense, Demandbase, Leadfeeder / Dealfront, RB2B, Common Room, Apollo, Google Sheets, Make.com, Zapier",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 11", "Lesson 11"),
    title: L(
      "Šta su buying signali i kako ih koristiti u B2B prodaji",
      "What Buying Signals Are and How to Use Them in B2B Sales",
    ),
    paragraphs: P(
      [
        "Većina sales timova čeka predugo.",
        "Čekaju demo request.",
        "Čekaju referral intro.",
        "Čekaju inbound formu.",
        "Čekaju dok kupac ne kaže: „Evaluiramo vendore.“",
        "Do tada, kupac je već uradio research.",
        "Pročitao je content. Pitao kolege. Proverio LinkedIn. Uporedio alternative. Izgradio interna mišljenja. Možda već ima shortlist.",
        "Ako čekaš očigledan signal, kasniš.",
        "Buying signali pomažu da vidiš kretanje ranije.",
        "Founder komentariše tvoj post. VP Sales prisustvuje webinaru. Target account poseti pricing page. Firma počinje da zapošljava SDR-ove. Kupac downloaduje CRM checklist. RevOps lider gleda replay. Prospect postavlja pitanje o implementaciji. Firma pokazuje category-level intent.",
        "Ništa od ovoga automatski ne znači „spreman za kupovinu.“",
        "Ali znači da se nešto promenilo.",
        "Posao nije da tretiraš svaki signal kao lead.",
        "Posao je da prepoznaš koji signali zaslužuju pažnju pre nego što konkurent pošalje ponudu.",
      ],
      [
        "Most sales teams wait too long.",
        "They wait for the demo request.",
        "They wait for the referral intro.",
        "They wait for the inbound form.",
        "They wait until the buyer says: \"We are evaluating vendors.\"",
        "By then, the buyer has already done the research.",
        "They have read content. They have asked peers. They have checked LinkedIn. They have compared alternatives. They have built internal opinions. They may already have a shortlist.",
        "If you wait for the obvious signal, you are late.",
        "Buying signals help you see movement earlier.",
        "A founder comments on your post. A VP Sales attends your webinar. A target account visits your pricing page. A company starts hiring SDRs. A buyer downloads your CRM checklist. A RevOps leader watches your replay. A prospect asks a question about implementation. A company shows category-level intent.",
        "None of these automatically mean \"ready to buy.\"",
        "But they mean something changed.",
        "The job is not to treat every signal like a lead.",
        "The job is to recognize which signals deserve attention before your competitor sends the proposal.",
      ],
    ),
    callout: L(
      "Signal pokreće re-engagement, ne novi cold spam. Pravi trenutak, prava poruka.",
      "A signal triggers re-engagement, not new cold spam. Right moment, right message.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vanity-vs-buying", title: L("Vanity vs buying signali", "Vanity signals vs buying signals") },
    { id: "signal-types", title: L("Tipovi buying signala", "Types of B2B buying signals") },
    { id: "signal-framework", title: L("Buying signal okvir", "The Buying Signal Framework") },
    { id: "signal-steps", title: L("Korak po korak: signal workflow", "Step-by-step signal workflow") },
    { id: "story", title: L("Mesto u Lead Agents sistemu", "Place in the Lead Agents system") },
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
              "razumeti šta su buying signali;",
              "razdvojiti pravi intent od vanity engagement-a;",
              "identifikovati first-party, second-party i third-party signale;",
              "pratiti LinkedIn, webinar, website, CRM, hiring i content signale;",
              "score-ovati signale po fit-u, jačini, recency i kontekstu;",
              "odlučiti koji signali zaslužuju outreach ili re-engagement;",
              "povezati signale sa value-based follow-up-om (ne „samo da proverim“);",
              "koristiti buying signale bez zvučanja creepy;",
              "rutirati signale u CRM;",
              "graditi sales play-e na osnovu tipa signala;",
              "delovati pre nego što kupac stigne do očiglednog demo stage-a.",
            ],
            [
              "understand what buying signals are;",
              "separate real intent from vanity engagement;",
              "identify first-party, second-party, and third-party signals;",
              "track LinkedIn, webinar, website, CRM, hiring, and content signals;",
              "score signals by fit, strength, recency, and context;",
              "decide which signals deserve outreach or re-engagement;",
              "connect signals to value-based follow-up (not \"just checking in\");",
              "use buying signals without sounding creepy;",
              "route signals into CRM;",
              "build sales plays based on signal type;",
              "act before the buyer reaches the obvious demo stage.",
            ],
          ),
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
              "B2B kupovina nije linearna.",
              "Gartner opisuje B2B buying journey kao set buying jobs — identifikacija problema, istraživanje rešenja, definisanje zahteva i izbor dobavljača — koje kupci ponovo posete tokom procesa.",
              "To znači da kupci mogu pokazati signale daleko pre nego što progovore sa sales-om.",
              "LinkedIn objašnjava buyer intent kao behavioral data koja pomaže sales timovima da identifikuju purchase behaviors i grade odnose sa prospect-ima i account-ima koji pokazuju viši intent.",
              "6sense opisuje intent data kao signale koji pomažu da identifikuješ account-e koji ulaze u buying cycle, score-uješ ih po fit-u i intent-u, i otkriješ buying committee.",
              "Bombora Company Surge intent data je izgrađen oko topic-based research ponašanja kroz veliki B2B data co-op.",
              "Zajednička ideja je jednostavna: kupci ostavljaju tragove pre nego što podignu ruku.",
              "Founder-Led Growth ti daje više tih tragova jer founder-i kreiraju više market-facing touchpoint-a: postovi, komentari, profile visits, webinari, DM-ovi, lead magneti, thought leader ads, content engagement.",
              "Tim koji najbrže čita te signale dobija bolji timing.",
            ],
            [
              "B2B buying is not linear.",
              "Gartner describes the B2B buying journey as a set of buying jobs — problem identification, solution exploration, requirements building, and supplier selection — that buyers revisit throughout the process.",
              "That means buyers may show signals long before they speak to sales.",
              "LinkedIn explains buyer intent as behavioral data that can help sales teams identify purchase behaviors and build relationships with prospects and accounts showing higher intent.",
              "6sense describes intent data as signals that help identify accounts entering buying cycles, score them by fit and intent, and reveal buying committees.",
              "Bombora's Company Surge intent data is built around topic-based research behavior across a large B2B data co-op.",
              "The common idea is simple: buyers leave clues before they raise their hand.",
              "Founder-Led Growth gives you more of those clues because founders create more market-facing touchpoints: posts, comments, profile visits, webinars, DMs, lead magnets, thought leader ads, content engagement.",
              "The team that reads those signals fastest gets the better timing.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Buying signali ne zatvaraju deal-ove. Poboljšavaju timing.",
            "Buying signals do not close deals. They improve timing.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "core",
      title: L("Osnovna ideja", "Core idea"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Buying signal je ponašanje, događaj ili data point koji sugerise da osoba ili account možda ide ka buying conversation-u.",
              "Ali signal nije isto što i lead.",
              "Signal postaje koristan tek kad se kombinuje sa:",
            ],
            [
              "A buying signal is a behavior, event, or data point that suggests a person or account may be moving closer to a buying conversation.",
              "But a signal is not the same as a lead.",
              "A signal becomes useful only when combined with:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            ["ICP fit", "Signal strength", "Recency", "Topic relevance", "Next action"],
            ["ICP fit", "Signal strength", "Recency", "Topic relevance", "Next action"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Primer:",
              "Random student lajkuje tvoj post. To nije buying signal.",
              "VP Sales u 60-osobnoj B2B SaaS firmi komentariše tvoj post o SDR hiring-u, prisustvuje webinaru i poseti outbound readiness checklist.",
              "To je buying signal.",
              "Ista platforma. Različito značenje.",
            ],
            [
              "Example:",
              "A random student likes your post. That is not a buying signal.",
              "A VP Sales at a 60-person B2B SaaS company comments on your post about SDR hiring, attends your webinar, and visits your outbound readiness checklist.",
              "That is a buying signal.",
              "Same platform. Different meaning.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Intent bez fit-a je šum. Fit bez intent-a je cold. Fit + intent + timing je sales opportunity.",
            "Intent without fit is noise. Fit without intent is cold. Fit + intent + timing is sales opportunity.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "vanity-vs-buying",
      title: L("Vanity signali vs buying signali", "Buying signals vs vanity signals"),
      blocks: [
        {
          type: "table",
          caption: L("Poređenje", "Comparison"),
          headers: H(["Vanity signal", "Buying signal"], ["Vanity signal", "Buying signal"]),
          rows: [
            { cells: [L("Lajkovi od irelevantnih ljudi", "Likes from irrelevant people"), L("Repeat engagement od ICP buyer-a", "Repeat engagement from ICP buyers")] },
            { cells: [L("Impressions", "Impressions"), L("Profile views od target account-a", "Profile views from target accounts")] },
            { cells: [L("Novi followeri bez fit-a", "New followers with no fit"), L("Novi followeri iz target kompanija", "New followers from target companies")] },
            { cells: [L("Webinar registracije od široke publike", "Webinar registrations from broad audience"), L("Webinar attendance + relevant poll answer", "Webinar attendance + relevant poll answer")] },
            { cells: [L("Ebook download od studenata/peers", "Ebook downloads from students/peers"), L("Checklist download od decision-maker-a", "Checklist downloads from decision-makers")] },
            { cells: [L("Website traffic volume", "Website traffic volume"), L("Target account poseti pricing/demo page", "Target account visiting pricing/demo pages")] },
            { cells: [L("Generički komentari", "Generic comments"), L("Specifična pitanja o problemu, timing-u ili implementaciji", "Specific questions about problem, timing, or implementation")] },
            { cells: [L("Broad intent topic", "Broad intent topic"), L("Account-level intent na problem koji rešavaš", "Account-level intent on a problem you solve")] },
            { cells: [L("Sales razgovor bez urgency-ja", "Sales conversation with no urgency"), L("Kupac pita o procesu, ceni, timing-u ili next step-u", "Buyer asks about process, cost, timing, or next step")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Greška je tretirati sav engagement kao jednak.",
              "Signal nije samo ponašanje.",
              "Signal je ponašanje plus ko ga je uradio, zašto je važno i šta su uradili pre ili posle.",
            ],
            [
              "The mistake is treating all engagement as equal.",
              "The signal is not the behavior alone.",
              "The signal is the behavior plus who did it, why it matters, and what they did before or after.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "signal-types",
      title: L("Tipovi B2B buying signala", "Types of B2B buying signals"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            ["1. LinkedIn signali"],
            ["1. LinkedIn signals"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "profile view od ICP-a;",
              "komentar na founder post;",
              "repeat lajkovi od target buyer-a;",
              "follower iz target kompanije;",
              "DM posle content-a;",
              "engagement sa Thought Leader Ad;",
              "komentar na competitor ili category post;",
              "connection request iz target account-a.",
            ],
            [
              "profile view from ICP;",
              "comment on founder post;",
              "repeat likes from target buyer;",
              "follower from target company;",
              "DM after content;",
              "engagement with Thought Leader Ad;",
              "comment on competitor or category post;",
              "connection request from target account.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Najbolja upotreba: warm outreach, relationship building, content topic validation."],
            ["Best use: warm outreach, relationship building, content topic validation."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["2. Website signali"],
            ["2. Website signals"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "poseta pricing page;",
              "poseta demo page;",
              "ponovljene posete iz iste kompanije;",
              "high-intent page views;",
              "returning visitor iz target account-a;",
              "content-to-pricing path;",
              "landing page poseta posle LinkedIn ad-a.",
            ],
            [
              "pricing page visit;",
              "demo page visit;",
              "repeated visits from same company;",
              "high-intent page views;",
              "returning visitor from target account;",
              "content-to-pricing path;",
              "landing page visit after LinkedIn ad.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Najbolja upotreba: prioritizacija sales task-ova, retargeting, account research."],
            ["Best use: prioritize sales tasks, retargeting, account research."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["3. Webinar signali"],
            ["3. Webinar signals"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "registracija;",
              "live attendance;",
              "ostao 75%+;",
              "postavio pitanje;",
              "poll answer pokazuje pain;",
              "kliknuo CTA;",
              "gledao replay;",
              "zatražio resource.",
            ],
            [
              "registration;",
              "live attendance;",
              "stayed 75%+;",
              "asked question;",
              "poll answer shows pain;",
              "clicked CTA;",
              "watched replay;",
              "requested resource.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Najbolja upotreba: segment follow-up, founder DM-ovi, sales task-ovi."],
            ["Best use: segment follow-up, founder DMs, sales tasks."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["4. Content i lead magnet signali"],
            ["4. Content and lead magnet signals"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "download checklist-a;",
              "zahtev za template;",
              "komentar „pošalji mi“;",
              "klik na Featured asset;",
              "newsletter subscribe;",
              "save više postova;",
              "share post-a interno.",
            ],
            [
              "downloads checklist;",
              "requests template;",
              "comments \"send me\";",
              "clicks Featured asset;",
              "subscribes to newsletter;",
              "saves multiple posts;",
              "shares post internally.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Najbolja upotreba: topic-based outreach i nurture."],
            ["Best use: topic-based outreach and nurture."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["5. Company trigger signali"],
            ["5. Company trigger signals"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "hiring SDR-ova;",
              "hiring VP Sales / Head of Growth;",
              "novo finansiranje;",
              "ekspanzija na novo tržište;",
              "website relaunch;",
              "novi product launch;",
              "CRM migracija;",
              "layoffs / restrukturiranje;",
              "novi executive hire.",
            ],
            [
              "hiring SDRs;",
              "hiring VP Sales / Head of Growth;",
              "new funding;",
              "new market expansion;",
              "website relaunch;",
              "new product launch;",
              "CRM migration;",
              "layoffs / restructuring;",
              "new executive hire.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Najbolja upotreba: timing-based outreach."],
            ["Best use: timing-based outreach."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["6. Third-party intent signali"],
            ["6. Third-party intent signals"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "account istražuje relevantne teme;",
              "competitor comparison research;",
              "category research;",
              "product review aktivnost;",
              "offsite content consumption;",
              "account surge na relevantnim keyword-ima.",
            ],
            [
              "account researching relevant topics;",
              "competitor comparison research;",
              "category research;",
              "product review activity;",
              "offsite content consumption;",
              "account surge on relevant keywords.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Najbolja upotreba: account prioritization, ABM, ad targeting, sales research."],
            ["Best use: account prioritization, ABM, ad targeting, sales research."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["7. Sales conversation signali"],
            ["7. Sales conversation signals"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "pita o ceni;",
              "pita o timeline-u;",
              "pita o implementaciji;",
              "pominje internal stakeholder-a;",
              "traži case study;",
              "pita kako se upoređuješ sa konkurentom;",
              "traži proposal;",
              "pita šta je sledeće.",
            ],
            [
              "asks about price;",
              "asks about timeline;",
              "asks about implementation;",
              "mentions internal stakeholder;",
              "asks for case study;",
              "asks how you compare to competitor;",
              "asks for proposal;",
              "asks what happens next.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Najbolja upotreba: deal acceleration i opportunity creation."],
            ["Best use: deal acceleration and opportunity creation."],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Najjači buying signal retko je jedna akcija. To je pattern.",
            "The strongest buying signal is rarely one action. It is a pattern.",
          ),
        },
        { type: "video", video: video1 },
      ],
    },
    {
      type: "section",
      id: "signal-framework",
      title: L("Buying Signal okvir", "The Buying Signal Framework"),
      blocks: [
        {
          type: "framework-intro",
          title: L(
            "Fit → Signal → Context → Score → Action → CRM",
            "Fit → Signal → Context → Score → Action → CRM",
          ),
          description: L(
            "Ovo je intent sistem. Svaki korak pretvara raw signal u kvalifikovanu sales akciju.",
            "This is the intent system. Each step turns a raw signal into a qualified sales action.",
          ),
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Fit", "Fit"),
              whatToDo: L("Da li je ova osoba/account u ICP-u?", "Is this person/account in the ICP?"),
              whyItMatters: L("Bez fit-a, intent je šum.", "Without fit, intent is noise."),
              example: L("VP Sales u 50–200 osoba B2B SaaS firmi = high fit. Student koji lajkuje post = low fit.", "VP Sales at a 50–200 person B2B SaaS company = high fit. Student who likes a post = low fit."),
              commonMistake: L("Delovanje na svaki signal bez ICP provere.", "Acting on every signal without ICP check."),
              tryThis: L("Score ICP fit pre nego što reaguješ na bilo koji signal.", "Score ICP fit before reacting to any signal."),
              highlight: L("Fit filtrira šum.", "Fit filters noise."),
            },
            {
              step: 2,
              title: L("Signal", "Signal"),
              whatToDo: L("Koje ponašanje ili trigger se desio?", "What behavior or trigger happened?"),
              whyItMatters: L("Tip signala određuje jačinu intent-a.", "Signal type determines intent strength."),
              example: L("Komentar, webinar pitanje, pricing page visit, hiring SDR-ova.", "Comment, webinar question, pricing page visit, hiring SDRs."),
              commonMistake: L("Tretiranje svih signala kao jednakih.", "Treating all signals as equal."),
              tryThis: L("Klasifikuj signale kao light, medium ili strong.", "Classify signals as light, medium, or strong."),
              highlight: L("Signal pokazuje ponašanje.", "Signal shows behavior."),
            },
            {
              step: 3,
              title: L("Context", "Context"),
              whatToDo: L("Sa kojom temom su se angažovali i šta to sugerise?", "What topic did they engage with, and what does it suggest?"),
              whyItMatters: L("Kontekst određuje relevantnost outreach-a.", "Context determines outreach relevance."),
              example: L("Komentar o SDR hiring-u sugerise outbound readiness problem.", "Comment about SDR hiring suggests an outbound readiness problem."),
              commonMistake: L("Ignorisanje teme — generički follow-up.", "Ignoring topic — generic follow-up."),
              tryThis: L("Taguj signal topic u CRM-u.", "Tag signal topic in CRM."),
              highlight: L("Context daje smisao signalu.", "Context gives the signal meaning."),
            },
            {
              step: 4,
              title: L("Score", "Score"),
              whatToDo: L("Koliko je signal jak, svež i relevantan?", "How strong, recent, and relevant is the signal?"),
              whyItMatters: L("Score određuje prioritet i akciju.", "Score determines priority and action."),
              example: L("ICP fit 30 + strong signal 25 + topic relevance 15 + recency 10 + role 10 + repeat 10 = 100.", "ICP fit 30 + strong signal 25 + topic relevance 15 + recency 10 + role 10 + repeat 10 = 100."),
              commonMistake: L("Korišćenje intent data bez ICP scoring-a.", "Using intent data without ICP scoring."),
              tryThis: L("Ne preduzimaj sales akciju ako je score ispod 60.", "No sales action unless the score is 60+."),
              highlight: L("Score kvantifikuje intent.", "Score quantifies intent."),
            },
            {
              step: 5,
              title: L("Action", "Action"),
              whatToDo: L("Šta sales ili founder treba da uradi sledeće?", "What should sales or the founder do next?"),
              whyItMatters: L("Bez akcije, signal je samo data.", "Without action, a signal is just data."),
              example: L("Monitor, nurture, contextual DM, sales task, founder follow-up, create opportunity.", "Monitor, nurture, contextual DM, sales task, founder follow-up, create opportunity."),
              commonMistake: L("Jedan generički follow-up za sve signale.", "One generic follow-up for every signal."),
              tryThis: L("Kreiraj jedan playbook po tipu signala.", "Create one playbook per signal type."),
              highlight: L("Action pretvara signal u momentum.", "Action turns signal into momentum."),
            },
            {
              step: 6,
              title: L("CRM", "CRM"),
              whatToDo: L("Kako će signal biti praćen i reportovan?", "How will the signal be tracked and reported?"),
              whyItMatters: L("CRM postaje company memory za intent.", "CRM becomes company memory for intent."),
              example: L("Signal type, level, topic, source, score, next action, follow-up date.", "Signal type, level, topic, source, score, next action, follow-up date."),
              commonMistake: L("Praćenje signala u alatima ali ne u CRM-u.", "Tracking signals in tools but not CRM."),
              tryThis: L("Ako signal menja šta sales treba da uradi, pripada CRM-u.", "If a signal changes what sales should do, it belongs in CRM."),
              highlight: L("CRM zatvara intent loop.", "CRM closes the intent loop."),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Ne deluj na signale slepo. Deluj na kvalifikovane signale.",
            "Do not act on signals blindly. Act on qualified signals.",
          ),
        },
        { type: "video", video: video3 },
      ],
    },
    {
      type: "section",
      id: "signal-steps",
      title: L("Korak po korak: signal workflow", "Step-by-step signal workflow"),
      blocks: [
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Definiši signal kategorije", "Define your signal categories"),
              whatToDo: L(
                "Navedi signale koje tvoj Founder-Led Growth sistem realno može da hvata.",
                "List the signals your Founder-Led Growth system can realistically capture.",
              ),
              whyItMatters: L("Bez kategorija, signali su haotični.", "Without categories, signals are chaotic."),
              example: L("LinkedIn, website, webinar, content, company triggers, third-party intent, sales.", "LinkedIn, website, webinar, content, company triggers, third-party intent, sales."),
              commonMistake: L("Pokušaj da pratiš svaki mogući signal od prvog dana.", "Trying to track every possible signal from day one."),
              tryThis: L("Počni sa 10 signala na koje možeš da deluješ.", "Start with 10 signals you can actually act on."),
              highlight: L("Kategorije daju strukturu.", "Categories give structure."),
            },
            {
              step: 2,
              title: L("Razdvoji signal strength", "Separate signal strength"),
              whatToDo: L("Klasifikuj svaki signal kao light, medium ili strong.", "Classify each signal as light, medium, or strong."),
              whyItMatters: L("Jačina određuje tip akcije.", "Strength determines action type."),
              example: L("Light: single like. Medium: comment. Strong: DM ili pricing page visit.", "Light: single like. Medium: comment. Strong: DM or pricing page visit."),
              commonMistake: L("Tretiranje light signala kao strong intent-a.", "Treating light signals like strong intent."),
              tryThis: L("Ne pitch-uj sa jednog light signala. Koristi light signale za familiarity.", "Do not pitch from one light signal. Use light signals to build familiarity."),
              highlight: L("Strength određuje urgency.", "Strength determines urgency."),
            },
            {
              step: 3,
              title: L("Score-uj signal quality", "Score signal quality"),
              whatToDo: L("Kreiraj jednostavan 100-point signal score.", "Create a simple 100-point signal score."),
              whyItMatters: L("Score omogućava prioritizaciju.", "Score enables prioritization."),
              example: L("ICP fit 30 + strength 25 + topic 15 + recency 10 + role 10 + repeat 10.", "ICP fit 30 + strength 25 + topic 15 + recency 10 + role 10 + repeat 10."),
              commonMistake: L("Korišćenje intent data bez ICP scoring-a.", "Using intent data without ICP scoring."),
              tryThis: L("Nema sales akcije ako score nije 60+.", "No sales action unless the score is 60+."),
              highlight: L("Score = fit + intent + timing.", "Score = fit + intent + timing."),
            },
            {
              step: 4,
              title: L("Match-uj signal sa sales play-em", "Match signal to sales play"),
              whatToDo: L("Napravi specifičan odgovor za svaki signal.", "Build a specific response for each signal."),
              whyItMatters: L("Relevantan odgovor povećava reply rate.", "Relevant response increases reply rate."),
              example: L("ICP comment → reply + warm list. Pricing visit → sales task u 24h.", "ICP comment → reply + warm list. Pricing visit → sales task within 24 hours."),
              commonMistake: L("Jedan generički follow-up za sve.", "One generic follow-up for everything."),
              tryThis: L("Kreiraj jedan playbook po tipu signala.", "Create one playbook per signal type."),
              highlight: L("Playbook = signal → action.", "Playbook = signal → action."),
            },
            {
              step: 5,
              title: L("Napiši outreach koji referiše signal bez creepy efekta", "Write outreach that references signal without being creepy"),
              whatToDo: L("Koristi signal kao kontekst, ne kao surveillance.", "Use the signal as context, not surveillance."),
              whyItMatters: L("Relevantnost bez invazivnosti gradi trust.", "Relevance without invasiveness builds trust."),
              example: L("Dobro: „Primetio sam tvoj komentar o LinkedIn engagement listama.“ Loše: „Video sam da si posetio pricing page 3 puta.“", "Good: \"Noticed you engaged with the post about turning LinkedIn engagement into outreach lists.\" Creepy: \"I saw you visited our pricing page 3 times this week.\""),
              commonMistake: L("Previše otkrivanje tracking data.", "Over-revealing tracking data."),
              tryThis: L("Referenciraj public ili volunteered ponašanje direktno. Private ponašanje indirektno.", "Reference public or volunteered behavior directly. Reference private behavior indirectly."),
              highlight: L("Budi relevantan, ne creepy.", "Be relevant, not creepy."),
            },
            {
              step: 6,
              title: L("Push-uj signale u CRM", "Push signals into CRM"),
              whatToDo: L("Kreiraj signal polja i task-ove.", "Create signal fields and tasks."),
              whyItMatters: L("CRM omogućava timu da deluje na signale.", "CRM enables the team to act on signals."),
              example: L("Signal type, level, topic, date, source, ICP fit, role, next action, follow-up date, score.", "Signal type, level, topic, date, source, ICP fit, role, next action, follow-up date, score."),
              commonMistake: L("Signali ostaju u alatima, ne u CRM-u.", "Signals stay in tools, not CRM."),
              tryThis: L("Ako signal menja šta sales treba da uradi, pripada CRM-u.", "If a signal changes what sales should do, it belongs in CRM."),
              highlight: L("CRM = intent memory.", "CRM = intent memory."),
            },
            {
              step: 7,
              title: L("Review-uj signale nedeljno", "Review signals weekly"),
              whatToDo: L("Kreiraj nedeljni signal review.", "Create a weekly signal review."),
              whyItMatters: L("Review pretvara data u poboljšanje.", "Review turns data into improvement."),
              example: L("Svakog petka: top 20 scored signala → odluči next actions.", "Every Friday: top 20 scored signals → decide next actions."),
              commonMistake: L("Intent alati bez promene sales ponašanja.", "Intent tools but never changing sales behavior."),
              tryThis: L("Svakog petka review-uj top 20 scored signala.", "Every Friday, review the top 20 scored signals and decide next actions."),
              highlight: L("Weekly review zatvara loop.", "Weekly review closes the loop."),
            },
          ],
        },
        {
          type: "table",
          caption: L("Signal kategorije", "Signal categories"),
          headers: H(["Kategorija", "Primeri"], ["Category", "Examples"]),
          rows: [
            { cells: [L("LinkedIn", "LinkedIn"), L("komentari, lajkovi, profile views, DM-ovi, followeri", "comments, likes, profile views, DMs, follows")] },
            { cells: [L("Website", "Website"), L("pricing, demo, service pages, repeat visits", "pricing, demo, service pages, repeat visits")] },
            { cells: [L("Webinar", "Webinar"), L("registered, attended, asked question, CTA clicked", "registered, attended, asked question, CTA clicked")] },
            { cells: [L("Content", "Content"), L("checklist, template, playbook, newsletter", "checklist, template, playbook, newsletter")] },
            { cells: [L("Company triggers", "Company triggers"), L("hiring, funding, new executive, new market", "hiring, funding, new executive, new market")] },
            { cells: [L("Third-party intent", "Third-party intent"), L("topic surge, competitor research, category research", "topic surge, competitor research, category research")] },
            { cells: [L("Sales", "Sales"), L("pricing, timeline, budget, stakeholder, proposal", "pricing, timeline, budget, stakeholder, proposal")] },
          ],
        },
        {
          type: "table",
          caption: L("Signal strength", "Signal strength"),
          headers: H(["Signal level", "Primeri", "Akcija"], ["Signal level", "Examples", "Action"]),
          rows: [
            { cells: [L("Light", "Light"), L("single like, profile view, new follower, broad content view", "single like, profile view, new follower, broad content view"), L("monitor / engage back", "monitor / engage back")] },
            { cells: [L("Medium", "Medium"), L("comment, repeat engagement, webinar registration, checklist download", "comment, repeat engagement, webinar registration, checklist download"), L("add to warm list / soft outreach", "add to warm list / soft outreach")] },
            { cells: [L("Strong", "Strong"), L("DM, webinar question, pricing/demo page visit, CTA click, sales question", "DM, webinar question, pricing/demo page visit, CTA click, sales question"), L("sales task / founder follow-up / create opportunity if qualified", "sales task / founder follow-up / create opportunity if qualified")] },
          ],
        },
        {
          type: "table",
          caption: L("Signal scoring model", "Signal scoring model"),
          headers: H(["Faktor", "Poeni"], ["Factor", "Points"]),
          rows: [
            { cells: [L("ICP fit", "ICP fit"), L("30", "30")] },
            { cells: [L("Signal strength", "Signal strength"), L("25", "25")] },
            { cells: [L("Topic relevance", "Topic relevance"), L("15", "15")] },
            { cells: [L("Recency", "Recency"), L("10", "10")] },
            { cells: [L("Buying committee role", "Buying committee role"), L("10", "10")] },
            { cells: [L("Repeated behavior", "Repeated behavior"), L("10", "10")] },
          ],
        },
        {
          type: "table",
          caption: L("Score interpretacija", "Score interpretation"),
          headers: H(["Score", "Značenje", "Akcija"], ["Score", "Meaning", "Action"]),
          rows: [
            { cells: [L("0–39", "0–39"), L("Low priority", "Low priority"), L("Monitor only", "Monitor only")] },
            { cells: [L("40–59", "40–59"), L("Nurture", "Nurture"), L("Engage or add to content nurture", "Engage or add to content nurture")] },
            { cells: [L("60–79", "60–79"), L("Warm", "Warm"), L("Send contextual resource or DM", "Send contextual resource or DM")] },
            { cells: [L("80–100", "80–100"), L("High intent", "High intent"), L("Sales task / founder follow-up / call CTA", "Sales task / founder follow-up / call CTA")] },
          ],
        },
        {
          type: "table",
          caption: L("Signal → sales play", "Signal to sales play"),
          headers: H(["Signal", "Best next action"], ["Signal", "Best next action"]),
          rows: [
            { cells: [L("ICP lajkuje jedan post", "ICP likes one post"), L("Engage back later, no pitch", "Engage back later, no pitch")] },
            { cells: [L("ICP komentariše post", "ICP comments on post"), L("Reply publicly, view profile, add to warm list", "Reply publicly, view profile, add to warm list")] },
            { cells: [L("ICP ponavlja engagement", "ICP repeats engagement"), L("Send soft DM with useful resource", "Send soft DM with useful resource")] },
            { cells: [L("ICP prisustvuje webinaru", "ICP attends webinar"), L("Send replay + checklist", "Send replay + checklist")] },
            { cells: [L("ICP postavlja webinar pitanje", "ICP asks webinar question"), L("Founder sends personal DM", "Founder sends personal DM")] },
            { cells: [L("ICP poseti pricing/demo page", "ICP visits pricing/demo page"), L("Sales task within 24 hours", "Sales task within 24 hours")] },
            { cells: [L("ICP downloaduje checklist", "ICP downloads checklist"), L("Send related template or ask if they want implementation notes", "Send related template or ask if they want implementation notes")] },
            { cells: [L("Firma zapošljava SDR-ove", "Company hiring SDRs"), L("Send outbound readiness checklist", "Send outbound readiness checklist")] },
            { cells: [L("Firma istražuje kategoriju", "Company researching category"), L("Add to ABM/nurture + targeted content", "Add to ABM/nurture + targeted content")] },
            { cells: [L("Kupac pita o ceni", "Buyer asks about pricing"), L("Move to qualified conversation", "Move to qualified conversation")] },
          ],
        },
        {
          type: "table",
          caption: L("CRM signal polja", "CRM signal fields"),
          headers: H(["Polje", "Primer"], ["Field", "Example"]),
          rows: [
            { cells: [L("Signal type", "Signal type"), L("LinkedIn comment, webinar question, pricing visit", "LinkedIn comment, webinar question, pricing visit")] },
            { cells: [L("Signal level", "Signal level"), L("Light, medium, strong", "Light, medium, strong")] },
            { cells: [L("Signal topic", "Signal topic"), L("Outreach, CRM, content, webinars, buying signals", "Outreach, CRM, content, webinars, buying signals")] },
            { cells: [L("Signal date", "Signal date"), L("Date", "Date")] },
            { cells: [L("Signal source", "Signal source"), L("LinkedIn, website, webinar, ad, intent platform", "LinkedIn, website, webinar, ad, intent platform")] },
            { cells: [L("ICP fit", "ICP fit"), L("High, medium, low", "High, medium, low")] },
            { cells: [L("Buying role", "Buying role"), L("Founder, VP Sales, RevOps", "Founder, VP Sales, RevOps")] },
            { cells: [L("Next action", "Next action"), L("Engage, DM, send asset, sales task, nurture", "Engage, DM, send asset, sales task, nurture")] },
            { cells: [L("Follow-up date", "Follow-up date"), L("Date", "Date")] },
            { cells: [L("Signal score", "Signal score"), L("0–100", "0–100")] },
          ],
        },
        {
          type: "bullets",
          items: P(
            [
              "Koji signali su stvorili reply-e?",
              "Koje teme su stvorile najjači intent?",
              "Koje website stranice pokazuju pravi buying interest?",
              "Koji webinar poll odgovori su doveli do sales call-ova?",
              "Koji LinkedIn signali su bili noisy?",
              "Koji third-party intent account-i su postali razgovori?",
              "Koji signali treba da trigger-uju brži follow-up?",
              "Koji signali treba da ostanu u nurture?",
            ],
            [
              "Which signals created replies?",
              "Which topics created the strongest intent?",
              "Which website pages indicate real buying interest?",
              "Which webinar poll answers led to sales calls?",
              "Which LinkedIn signals were noisy?",
              "Which third-party intent accounts became conversations?",
              "Which signals should trigger faster follow-up?",
              "Which signals should stay in nurture?",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Koristi signale da budeš relevantan, ne creepy.",
            "Use signals to be relevant, not creepy.",
          ),
        },
        { type: "video", video: video5 },
      ],
    },
    {
      type: "section",
      id: "story",
      title: L("Mesto u Lead Agents sistemu", "Place in the Lead Agents system"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "U Lead Agents sistemu buying signali dolaze posle ICP-a, profila i cold Outreach-a. Ako je lead već u follow-up sekvenci bez odgovora, novi signal (komentar, view, webinar) je trigger za re-engagement sa kontekstom, ne za istu generičku poruku.",
              "Pratimo signale sa LinkedIn-a, webinara, website poseta, content download-a i sales razgovora. Score po ICP fit-u, jačini, temi i recency-ju odlučuje: nurture, value-based dodir, ili sales task.",
              "Signali ne zamenjuju outreach, već ga usklađuju sa trenutkom. Founder ili sales šalje poruku koja referencira stvarnu interakciju i donosi vrednost iz ICP dokumenta.",
              "CRM iz Lekcije 10 drži status: cold_sent, no_reply, signal_reengage, meeting. Buying signali + follow-up sistem = konekcija u pravom trenutku, ne spam.",
            ],
            [
              "In the Lead Agents system, buying signals come after ICP, profile, and cold outreach. If a lead is already in a no-reply follow-up sequence, a new signal (comment, view, webinar) triggers re-engagement with context, not the same generic message.",
              "We track LinkedIn, webinar, website, download, and sales conversation signals. Scoring by ICP fit, strength, topic, and recency decides: nurture, value-based touch, or sales task.",
              "Signals do not replace outreach; they align timing. The founder or sales sends a message that references the real interaction and adds value from the ICP document.",
              "CRM from Lesson 10 holds status: cold_sent, no_reply, signal_reengage, meeting. Buying signals plus follow-up system = connection at the right moment, not spam.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "proof",
      title: L("Dokaz i istraživanja", "Proof / trust section"),
      blocks: [
        {
          type: "proof-grid",
          cards: [
            {
              title: L("Buyer intent pomaže identifikaciju purchase behavior-a", "Buyer intent helps identify purchase behavior"),
              body: L(
                "LinkedIn objašnjava buyer intent kao behavioral data koja pomaže sales timovima da identifikuju purchase behaviors i grade odnose sa prospect-ima i account-ima koji pokazuju viši intent.",
                "LinkedIn explains buyer intent as behavioral data that helps sales teams identify purchase behaviors and build relationships with prospective customers and accounts showing higher intent.",
              ),
              sourceLabel: L("LinkedIn Sales Solutions", "LinkedIn Sales Solutions"),
              sourceUrl: "https://business.linkedin.com/sales-solutions/resources/sales-terms/buyer-intent",
            },
            {
              title: L("B2B kupovina je nelinearna", "B2B buying is nonlinear"),
              body: L(
                "Gartner opisuje B2B buying kao nelinearan journey gde kupci završavaju buying jobs poput identifikacije problema, istraživanja rešenja, definisanja zahteva i izbora dobavljača.",
                "Gartner describes B2B buying as a nonlinear journey where buyers complete buying jobs such as problem identification, solution exploration, requirements building, and supplier selection.",
              ),
              sourceLabel: L("Gartner", "Gartner"),
              sourceUrl: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
            },
            {
              title: L("Intent data može otkriti account-e koji ulaze u buying cycle", "Intent data can reveal accounts entering buying cycles"),
              body: L(
                "6sense opisuje intent data kao signale koji pomažu da identifikuješ account-e koji ulaze u buying cycle, score-uješ ih po fit-u i intent-u, i otkriješ buying committee.",
                "6sense describes intent data as signals that help identify accounts entering buying cycles, score them by fit and intent, and reveal buying committees.",
              ),
              sourceLabel: L("6sense", "6sense"),
              sourceUrl: "https://6sense.com/platform/intent-data/what-is-intent-data/",
            },
            {
              title: L("Topic-based research može ukazati na account-level interest", "Topic-based research can indicate account-level interest"),
              body: L(
                "Bombora Company Surge intent data je baziran na topic research ponašanju kroz B2B data cooperative i koristi se za identifikaciju account-a sa povećanim interesovanjem za relevantne teme.",
                "Bombora's Company Surge intent data is based on topic research behavior across a B2B data cooperative and is used to identify accounts showing increased interest in relevant topics.",
              ),
              sourceLabel: L("Bombora", "Bombora"),
              sourceUrl: "https://bombora.com/intent/",
            },
          ],
        },
        { type: "video", video: video2 },
      ],
    },
    {
      type: "section",
      id: "implement",
      title: L("Kako implementirati", "How to implement"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(["1. Izgradi buying signal map"], ["1. Build your buying signal map"]),
        },
        {
          type: "table",
          caption: L("Buying signal map", "Buying signal map"),
          headers: H(["Signal category", "Signal", "Level", "Source", "Action"], ["Signal category", "Signal", "Level", "Source", "Action"]),
          rows: [
            { cells: [L("LinkedIn", "LinkedIn"), L("Comment from ICP", "Comment from ICP"), L("Medium", "Medium"), L("Founder post", "Founder post"), L("Reply + add to warm list", "Reply + add to warm list")] },
            { cells: [L("LinkedIn", "LinkedIn"), L("DM after post", "DM after post"), L("Strong", "Strong"), L("LinkedIn", "LinkedIn"), L("Sales task", "Sales task")] },
            { cells: [L("Website", "Website"), L("Pricing page visit", "Pricing page visit"), L("Strong", "Strong"), L("Website intent tool", "Website intent tool"), L("Sales follow-up", "Sales follow-up")] },
            { cells: [L("Webinar", "Webinar"), L("Asked question", "Asked question"), L("Strong", "Strong"), L("Webinar platform", "Webinar platform"), L("Founder DM", "Founder DM")] },
            { cells: [L("Content", "Content"), L("Checklist download", "Checklist download"), L("Medium", "Medium"), L("Form / CRM", "Form / CRM"), L("Send related asset", "Send related asset")] },
            { cells: [L("Company", "Company"), L("Hiring SDRs", "Hiring SDRs"), L("Medium", "Medium"), L("LinkedIn / job posts", "LinkedIn / job posts"), L("Send outbound readiness checklist", "Send outbound readiness checklist")] },
            { cells: [L("Third-party", "Third-party"), L("Topic surge", "Topic surge"), L("Medium", "Medium"), L("Bombora / 6sense", "Bombora / 6sense"), L("Add to account research", "Add to account research")] },
            { cells: [L("Sales", "Sales"), L("Asked about timeline", "Asked about timeline"), L("Strong", "Strong"), L("Sales call", "Sales call"), L("Move to qualified", "Move to qualified")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["2. Kreiraj signal score"], ["2. Create a signal score"]),
        },
        {
          type: "table",
          caption: L("Signal scoring", "Signal scoring"),
          headers: H(["Faktor", "Poeni"], ["Factor", "Points"]),
          rows: [
            { cells: [L("ICP fit", "ICP fit"), L("30", "30")] },
            { cells: [L("Signal strength", "Signal strength"), L("25", "25")] },
            { cells: [L("Topic relevance", "Topic relevance"), L("15", "15")] },
            { cells: [L("Recency", "Recency"), L("10", "10")] },
            { cells: [L("Buying committee role", "Buying committee role"), L("10", "10")] },
            { cells: [L("Repeated behavior", "Repeated behavior"), L("10", "10")] },
          ],
        },
        {
          type: "table",
          caption: L("Action thresholds", "Action thresholds"),
          headers: H(["Score", "Akcija"], ["Score", "Action"]),
          rows: [
            { cells: [L("0–39", "0–39"), L("Monitor", "Monitor")] },
            { cells: [L("40–59", "40–59"), L("Nurture", "Nurture")] },
            { cells: [L("60–79", "60–79"), L("Contextual outreach", "Contextual outreach")] },
            { cells: [L("80–100", "80–100"), L("Priority sales action", "Priority sales action")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["3. Kreiraj response play-e"], ["3. Create response plays"]),
        },
        {
          type: "paragraphs",
          paragraphs: P(["Light signal play:"], ["Light signal play:"]),
        },
        {
          type: "bullets",
          items: P(
            ["engage back;", "no pitch;", "monitor for repeat behavior;", "add to retargeting if possible."],
            ["engage back;", "no pitch;", "monitor for repeat behavior;", "add to retargeting if possible."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["Medium signal play:"], ["Medium signal play:"]),
        },
        {
          type: "bullets",
          items: P(
            ["add to warm list;", "send relevant resource if context is strong;", "invite to webinar;", "track in CRM."],
            ["add to warm list;", "send relevant resource if context is strong;", "invite to webinar;", "track in CRM."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["Strong signal play:"], ["Strong signal play:"]),
        },
        {
          type: "bullets",
          items: P(
            [
              "create CRM task;",
              "founder or sales sends contextual DM/email;",
              "ask a useful diagnostic question;",
              "move to conversation or opportunity if fit/pain/timing are confirmed.",
            ],
            [
              "create CRM task;",
              "founder or sales sends contextual DM/email;",
              "ask a useful diagnostic question;",
              "move to conversation or opportunity if fit/pain/timing are confirmed.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["4. Kreiraj signal-based message template-e"], ["4. Create signal-based message templates"]),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "LinkedIn comment signal:",
              "„Hey [Name] — saw your comment on the post about [topic]. The point you raised around [specific detail] is exactly where a lot of [ICP] get stuck. I have a short [template/checklist] on this if useful.“",
            ],
            [
              "LinkedIn comment signal:",
              "\"Hey [Name] — saw your comment on the post about [topic]. The point you raised around [specific detail] is exactly where a lot of [ICP] get stuck. I have a short [template/checklist] on this if useful.\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Webinar question signal:",
              "„Hey [Name] — your question in the webinar about [topic] was a good one. We see this a lot when [problem]. Happy to send the framework we use if helpful.“",
            ],
            [
              "Webinar question signal:",
              "\"Hey [Name] — your question in the webinar about [topic] was a good one. We see this a lot when [problem]. Happy to send the framework we use if helpful.\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Company trigger signal:",
              "„Hey [Name] — noticed your team is hiring for [role]. Usually that stage raises a question: is the founder-led message ready to be handed off, or will reps end up testing it from scratch? I have a short readiness checklist if useful.“",
            ],
            [
              "Company trigger signal:",
              "\"Hey [Name] — noticed your team is hiring for [role]. Usually that stage raises a question: is the founder-led message ready to be handed off, or will reps end up testing it from scratch? I have a short readiness checklist if useful.\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Website intent signal:",
              "„Hey [Name] — teams usually reach this stage when they're comparing how to solve [problem]. I can send a quick breakdown of the main options and trade-offs if helpful.“",
            ],
            [
              "Website intent signal:",
              "\"Hey [Name] — teams usually reach this stage when they're comparing how to solve [problem]. I can send a quick breakdown of the main options and trade-offs if helpful.\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["5. Izgradi nedeljni signal review"], ["5. Build a weekly signal review"]),
        },
        {
          type: "bullets",
          items: P(
            [
              "Svakog petka: pull top LinkedIn signale.",
              "Pull webinar signale.",
              "Pull website intent signale.",
              "Pull third-party account intent ako je dostupan.",
              "Score-uj top account-e.",
              "Assign next actions.",
              "Update CRM.",
              "Review koji signali su stvorili reply-e.",
              "Poboljšaj response play-e za sledeću nedelju.",
            ],
            [
              "Every Friday: pull top LinkedIn signals.",
              "Pull webinar signals.",
              "Pull website intent signals.",
              "Pull third-party account intent if available.",
              "Score top accounts.",
              "Assign next actions.",
              "Update CRM.",
              "Review which signals created replies.",
              "Improve next week's response plays.",
            ],
          ),
        },
        { type: "video", video: video4 },
      ],
    },
    {
      type: "section",
      id: "tools",
      title: L("Idealni stack alata", "Ideal tool stack"),
      blocks: [
        {
          type: "tool-grid",
          tools: [
            {
              name: "LinkedIn Sales Navigator",
              slug: "apollo",
              usedFor: L(
                "Identifikacija buyer intent-a, save leads, monitor account-a, prioritizacija sales aktivnosti",
                "Identify buyer intent, save leads, monitor accounts, and prioritize sales activity",
              ),
              whyItFits: L(
                "Core alat za LinkedIn-based B2B signal tracking.",
                "Core tool for LinkedIn-based B2B signal tracking.",
              ),
              alternative: L("Apollo, manual LinkedIn tracking", "Apollo, manual LinkedIn tracking"),
            },
            {
              name: "HubSpot",
              slug: "hubspot",
              usedFor: L(
                "CRM, lead scoring, custom properties, forms, website tracking, workflows, reports",
                "CRM, lead scoring, custom properties, forms, website tracking, workflows, and reports",
              ),
              whyItFits: L(
                "Dobar za praćenje signala kroz content, forme, webinare i sales.",
                "Good for tracking signals across content, forms, webinars, and sales.",
              ),
              alternative: L("Pipedrive, Salesforce, Attio", "Pipedrive, Salesforce, Attio"),
            },
            {
              name: "Pipedrive",
              usedFor: L(
                "Pipeline tracking, lead scoring, custom fields, sales tasks",
                "Pipeline tracking, lead scoring, custom fields, and sales tasks",
              ),
              whyItFits: L(
                "Jednostavan CRM za signal-based follow-up.",
                "Simple CRM for signal-based follow-up.",
              ),
              alternative: L("HubSpot, Attio", "HubSpot, Attio"),
            },
            {
              name: "Clay",
              slug: "clay",
              usedFor: L(
                "Enrichment account-a, detekcija trigger-a, kombinovanje data source-a, routing kvalifikovanih signala",
                "Enrich accounts, detect triggers, combine data sources, and route qualified signals",
              ),
              whyItFits: L(
                "Korisno za pretvaranje raw signala u kvalifikovane account liste.",
                "Useful for turning raw signals into qualified account lists.",
              ),
              alternative: L("Apollo, Common Room, manual research", "Apollo, Common Room, manual research"),
            },
            {
              name: "6sense",
              usedFor: L(
                "Account identification, fit and intent scoring, buying stage intelligence, buying committee visibility",
                "Account identification, fit and intent scoring, buying stage intelligence, and buying committee visibility",
              ),
              whyItFits: L(
                "Korisno za zrele timove koji rade ABM i intent-based selling.",
                "Useful for mature teams doing ABM and intent-based selling.",
              ),
              alternative: L("Demandbase, Bombora", "Demandbase, Bombora"),
            },
            {
              name: "Bombora",
              usedFor: L(
                "Topic-based third-party intent data",
                "Topic-based third-party intent data",
              ),
              whyItFits: L(
                "Pomaže identifikaciji account-a koji istražuju relevantne teme.",
                "Helps identify accounts researching relevant topics.",
              ),
              alternative: L("6sense, Demandbase", "6sense, Demandbase"),
            },
            {
              name: "Demandbase",
              usedFor: L(
                "ABM, intent data, account prioritization, sales intelligence",
                "ABM, intent data, account prioritization, and sales intelligence",
              ),
              whyItFits: L(
                "Korisno za revenue timove koji žele intent-driven account targeting.",
                "Useful for revenue teams that want intent-driven account targeting.",
              ),
              alternative: L("6sense, Bombora", "6sense, Bombora"),
            },
            {
              name: "Leadfeeder / Dealfront",
              usedFor: L(
                "Website visitor identification i account-level website intent",
                "Website visitor identification and account-level website intent",
              ),
              whyItFits: L(
                "Korisno za videti koje kompanije posete ključne stranice.",
                "Useful for seeing which companies visit key pages.",
              ),
              alternative: L("RB2B, Clearbit, Warmly", "RB2B, Clearbit, Warmly"),
            },
            {
              name: "RB2B",
              slug: "rb2b",
              usedFor: L(
                "Website visitor identification i person/account-level visitor signali",
                "Website visitor identification and person/account-level visitor signals",
              ),
              whyItFits: L(
                "Korisno za pretvaranje anonimnih website poseta u actionable signale.",
                "Useful for turning anonymous website visits into actionable signals.",
              ),
              alternative: L("Leadfeeder / Dealfront, Warmly", "Leadfeeder / Dealfront, Warmly"),
            },
            {
              name: "Make.com / Zapier",
              slug: "n8n",
              usedFor: L(
                "Sync signala u CRM, Slack, outreach alate i task sisteme",
                "Sync signals into CRM, Slack, outreach tools, and task systems",
              ),
              whyItFits: L(
                "Automatizuje signal routing kad je manual proces dokazan.",
                "Automates signal routing once the manual process is proven.",
              ),
              alternative: L("n8n, native integrations", "n8n, native integrations"),
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
          type: "workflow",
          title: L("Od buying signala do sales akcije", "From buying signal to sales action"),
          steps: P(
            [
              "ICP buyer komentariše founder LinkedIn post.",
              "Isti buyer gleda founder profil.",
              "Buyer se registruje na webinar.",
              "Buyer odgovara na poll koji pokazuje relevantan pain.",
              "Buyer postavlja pitanje.",
              "CRM beleži signal type, topic, source i score.",
              "Score prelazi 80.",
              "Founder šalje kontekstualni DM.",
              "Buyer traži checklist.",
              "Sales kreira task i postavlja dijagnostičko pitanje.",
              "Buyer potvrđuje timing.",
              "Deal se kreira.",
              "Opportunity se taguje kao influenced by LinkedIn + webinar + buying signal.",
            ],
            [
              "ICP buyer comments on founder LinkedIn post.",
              "Same buyer views founder profile.",
              "Buyer registers for webinar.",
              "Buyer answers poll showing a relevant pain.",
              "Buyer asks a question.",
              "CRM records signal type, topic, source, and score.",
              "Score passes 80.",
              "Founder sends contextual DM.",
              "Buyer requests checklist.",
              "Sales creates task and asks diagnostic question.",
              "Buyer confirms timing.",
              "Deal is created.",
              "Opportunity is tagged as influenced by LinkedIn + webinar + buying signal.",
            ],
          ),
          highlight: L(
            "Najbolji sales timing obično dolazi iz pattern-a, ne iz izolovanih akcija.",
            "The best sales timing usually comes from patterns, not isolated actions.",
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
        { type: "video", video: video5 },
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
              title: L("Buying Signals Radar", "Buying Signals Radar"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "LinkedIn, website, webinar, content, company triggers, third-party intent i sales signali teku u jedan signal dashboard.",
                "LinkedIn, website, webinar, content, company triggers, third-party intent, and sales signals flowing into one signal dashboard.",
              ),
            },
            {
              title: L(
                "Fit → Signal → Context → Score → Action → CRM",
                "Fit → Signal → Context → Score → Action → CRM",
              ),
              placement: L("Framework sekcija", "Framework section"),
              description: L("Kompletan buying signal workflow.", "The full buying signal workflow."),
            },
            {
              title: L("Vanity Signals vs Buying Signals", "Vanity Signals vs Buying Signals"),
              placement: L("Core idea sekcija", "Core idea section"),
              description: L("Poređenje praznog engagement-a i kvalifikovanog intent-a.", "Comparison between empty engagement and qualified intent."),
            },
            {
              title: L("B2B Buying Signal Types", "B2B Buying Signal Types"),
              placement: L("Signal types sekcija", "Signal types section"),
              description: L("Sedam kategorija signala sa ikonama i primerima.", "Seven signal categories with icons and examples."),
            },
            {
              title: L("Signal Scorecard", "Signal Scorecard"),
              placement: L("Scoring sekcija", "Scoring section"),
              description: L("100-point scoring model za buying signale.", "100-point scoring model for buying signals."),
            },
            {
              title: L("Signal-to-Action Matrix", "Signal-to-Action Matrix"),
              placement: L("Implement sekcija", "How to implement section"),
              description: L("Koju akciju preduzeti za light, medium i strong signale.", "Which action to take for light, medium, and strong signals."),
            },
            {
              title: L("Intent Pattern Timeline", "Intent Pattern Timeline"),
              placement: L("Mesto u sistemu", "Place in system section"),
              description: L(
                "Comment → profile view → webinar registration → poll answer → question → DM → sales call.",
                "Comment → profile view → webinar registration → poll answer → question → DM → sales call.",
              ),
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
          title: L("Čeklista Lekcije 11", "Lesson 11 checklist"),
          items: P(
            [
              "Navedi buying signale koje tvoj tim trenutno može da prati.",
              "Razdvoji signale u LinkedIn, website, webinar, content, company triggers, third-party intent i sales signale.",
              "Klasifikuj svaki signal kao light, medium ili strong.",
              "Kreiraj 100-point signal score.",
              "Definiši action thresholds za monitor, nurture, outreach i sales action.",
              "Kreiraj CRM polja za signal type, topic, source, score i next action.",
              "Napravi jedan response play za svaku signal kategoriju.",
              "Napiši kontekstualne message template-e za LinkedIn, webinar, company trigger i website intent.",
              "Review-uj top 20 signala svakog petka i prati koji stvaraju reply-e, meeting-e i opportunities.",
            ],
            [
              "List the buying signals your team can currently track.",
              "Separate signals into LinkedIn, website, webinar, content, company triggers, third-party intent, and sales signals.",
              "Classify each signal as light, medium, or strong.",
              "Create a 100-point signal score.",
              "Define action thresholds for monitor, nurture, outreach, and sales action.",
              "Create CRM fields for signal type, topic, source, score, and next action.",
              "Build one response play for each signal category.",
              "Write contextual message templates for LinkedIn, webinar, company trigger, and website intent.",
              "Review the top 20 signals every Friday and track which create replies, meetings, and opportunities.",
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
          title: L("B2B Buying Signal Tracking Template", "B2B Buying Signal Tracking Template"),
          content: L(
            `1. Signal categories

LinkedIn signals:
- [comments]
- [profile views]
- [repeat engagement]
- [DMs]

Website signals:
- [pricing page visit]
- [demo page visit]
- [repeat visits]

Webinar signals:
- [registration]
- [attendance]
- [question asked]
- [CTA click]

Content signals:
- [checklist download]
- [template request]
- [newsletter signup]

Company triggers:
- [hiring]
- [funding]
- [new executive]
- [new market]

Third-party intent:
- [topic surge]
- [competitor research]
- [category research]

Sales signals:
- [pricing question]
- [timeline question]
- [stakeholder mentioned]

2. Signal scoring

ICP fit:
__/30

Signal strength:
__/25

Topic relevance:
__/15

Recency:
__/10

Buying committee role:
__/10

Repeated behavior:
__/10

Total:
__/100

3. Action thresholds

0–39:
Monitor only.

40–59:
Nurture.

60–79:
Send contextual outreach.

80–100:
Create sales task or founder follow-up.

4. CRM fields

Signal type:
[type]

Signal level:
[light / medium / strong]

Signal topic:
[topic]

Signal source:
[source]

Signal date:
[date]

ICP fit:
[high / medium / low]

Buying role:
[role]

Signal score:
[score]

Next action:
[action]

Follow-up date:
[date]

5. Message templates

LinkedIn comment:

Hey [Name] — saw your comment on the post about [topic].

The point you raised around [detail] is exactly where a lot of [ICP] get stuck.

I have a short [resource] on this if useful.

Webinar question:

Hey [Name] — your question in the webinar about [topic] was a good one.

We see this a lot when [problem].

Happy to send the framework we use if helpful.

Company trigger:

Hey [Name] — noticed your team is [trigger].

Usually that stage raises a question:
[relevant problem].

I have a short [resource] if useful.

Website intent:

Hey [Name] — teams usually reach this stage when they're comparing how to solve [problem].

I can send a quick breakdown of the main options and trade-offs if helpful.

6. Weekly review questions

- Which signals created replies?
- Which signals were noisy?
- Which topics created the strongest intent?
- Which accounts showed repeated behavior?
- Which signals should trigger faster sales action?
- Which signals should stay in nurture?
- Which response play worked best?`,
            `1. Signal categories

LinkedIn signals:
- [comments]
- [profile views]
- [repeat engagement]
- [DMs]

Website signals:
- [pricing page visit]
- [demo page visit]
- [repeat visits]

Webinar signals:
- [registration]
- [attendance]
- [question asked]
- [CTA click]

Content signals:
- [checklist download]
- [template request]
- [newsletter signup]

Company triggers:
- [hiring]
- [funding]
- [new executive]
- [new market]

Third-party intent:
- [topic surge]
- [competitor research]
- [category research]

Sales signals:
- [pricing question]
- [timeline question]
- [stakeholder mentioned]

2. Signal scoring

ICP fit:
__/30

Signal strength:
__/25

Topic relevance:
__/15

Recency:
__/10

Buying committee role:
__/10

Repeated behavior:
__/10

Total:
__/100

3. Action thresholds

0–39:
Monitor only.

40–59:
Nurture.

60–79:
Send contextual outreach.

80–100:
Create sales task or founder follow-up.

4. CRM fields

Signal type:
[type]

Signal level:
[light / medium / strong]

Signal topic:
[topic]

Signal source:
[source]

Signal date:
[date]

ICP fit:
[high / medium / low]

Buying role:
[role]

Signal score:
[score]

Next action:
[action]

Follow-up date:
[date]

5. Message templates

LinkedIn comment:

Hey [Name] — saw your comment on the post about [topic].

The point you raised around [detail] is exactly where a lot of [ICP] get stuck.

I have a short [resource] on this if useful.

Webinar question:

Hey [Name] — your question in the webinar about [topic] was a good one.

We see this a lot when [problem].

Happy to send the framework we use if helpful.

Company trigger:

Hey [Name] — noticed your team is [trigger].

Usually that stage raises a question:
[relevant problem].

I have a short [resource] if useful.

Website intent:

Hey [Name] — teams usually reach this stage when they're comparing how to solve [problem].

I can send a quick breakdown of the main options and trade-offs if helpful.

6. Weekly review questions

- Which signals created replies?
- Which signals were noisy?
- Which topics created the strongest intent?
- Which accounts showed repeated behavior?
- Which signals should trigger faster sales action?
- Which signals should stay in nurture?
- Which response play worked best?`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Šta su buying signali u B2B prodaji?", "What are buying signals in B2B sales?"),
      answer: L(
        "Buying signali su ponašanja, događaji ili data point-i koji sugerišu da osoba ili account možda ide ka buying conversation-u. Primeri uključuju webinar pitanja, posete pricing page-a, repeat LinkedIn engagement, checklist download-e, hiring trigger-e i category-level intent data.",
        "Buying signals are behaviors, events, or data points that suggest a person or account may be moving closer to a buying conversation. Examples include webinar questions, pricing page visits, repeat LinkedIn engagement, checklist downloads, hiring triggers, and category-level intent data.",
      ),
    },
    {
      question: L("Da li je svaki buying signal lead?", "Is every buying signal a lead?"),
      answer: L(
        "Ne. Signal nije automatski lead. Postaje koristan kad se kombinuje sa ICP fit-om, signal strength-om, recency-jem, topic relevance-om i jasnom next action-om.",
        "No. A signal is not automatically a lead. It becomes useful when combined with ICP fit, signal strength, recency, topic relevance, and a clear next action.",
      ),
    },
    {
      question: L("Koji su najjači buying signali?", "What are the strongest buying signals?"),
      answer: L(
        "Strong signali često uključuju: demo ili pricing page visits, webinar pitanja, direktne DM-ove, repeat engagement od target account-a, zahteve za template-e ili checklist-e, pitanja o ceni, timing-u, implementaciji ili poređenju, i relevantne company trigger-e poput hiring SDR-ova ili novog VP Sales-a.",
        "Strong signals often include: demo or pricing page visits, webinar questions, direct DMs, repeated engagement from target accounts, requests for templates or checklists, questions about pricing, timing, implementation, or comparison, and relevant company triggers like hiring SDRs or a new VP Sales.",
      ),
    },
    {
      question: L("Kako sales treba da deluje na buying signale?", "How should sales act on buying signals?"),
      answer: L(
        "Sales treba da match-uje akciju sa signal strength-om. Light signali treba da se monitor-uju. Medium signali mogu trigger-ovati nurture ili soft outreach. Strong signali treba da kreiraju CRM task, founder follow-up ili sales conversation.",
        "Sales should match the action to the signal strength. Light signals should be monitored. Medium signals can trigger nurture or soft outreach. Strong signals should create a CRM task, founder follow-up, or sales conversation.",
      ),
    },
    {
      question: L("Kako izbeći creepy efekat pri korišćenju intent data?", "How do you avoid sounding creepy when using intent data?"),
      answer: L(
        "Referenciraj public ili volunteered ponašanje direktno. Referenciraj private ponašanje indirektno. Na primer, ne reci: „Video sam da si posetio pricing page tri puta.“ Umesto toga reci: „Timovi obično stignu do ove faze kad upoređuju opcije. Mogu poslati kratak breakdown ako je korisno.“",
        "Reference public or volunteered behavior directly. Reference private behavior indirectly. For example, do not say: \"I saw you visited our pricing page three times.\" Instead say: \"Teams usually reach this stage when they're comparing options. Happy to send a quick breakdown if useful.\"",
      ),
    },
    {
      question: L("Koji alati prate buying signale?", "What tools track buying signals?"),
      answer: L(
        "Korisni alati uključuju: LinkedIn Sales Navigator, HubSpot, Pipedrive, Clay, 6sense, Bombora, Demandbase, Leadfeeder / Dealfront, RB2B, Common Room, Make.com i Zapier.",
        "Useful tools include: LinkedIn Sales Navigator, HubSpot, Pipedrive, Clay, 6sense, Bombora, Demandbase, Leadfeeder / Dealfront, RB2B, Common Room, Make.com, and Zapier.",
      ),
    },
    {
      question: L("Koja je najveća greška sa buying signalima?", "What is the biggest mistake with buying signals?"),
      answer: L(
        "Najveća greška je tretiranje signala kao sigurnosti. Intent data ne znači da je neko spreman za kupovinu. Znači da account ili osoba zaslužuje bolji timing, bolji kontekst i pametniju next action.",
        "The biggest mistake is treating signals as certainty. Intent data does not mean someone is ready to buy. It means the account or person deserves better timing, better context, and a smarter next action.",
      ),
    },
  ],
  sources: [
    { title: L("LinkedIn Sales Solutions — Guide to Buyer Intent", "LinkedIn Sales Solutions — Guide to Buyer Intent"), url: "https://business.linkedin.com/sales-solutions/resources/sales-terms/buyer-intent" },
    { title: L("LinkedIn — How to Use Intent Signals for Sales", "LinkedIn — How to Use Intent Signals for Sales"), url: "https://www.linkedin.com/top-content/sales/sales-discovery-tips/how-to-use-intent-signals-for-sales/" },
    { title: L("LinkedIn Sales Navigator — Buyer Intent Video", "LinkedIn Sales Navigator — Buyer Intent Video"), url: "https://www.youtube.com/watch?v=YZFEWnVVRio" },
    { title: L("Gartner — B2B Buying Journey", "Gartner — B2B Buying Journey"), url: "https://www.gartner.com/en/sales/insights/b2b-buying-journey" },
    { title: L("Gartner — 67% of B2B Buyers Prefer a Rep-Free Experience", "Gartner — 67% of B2B Buyers Prefer a Rep-Free Experience"), url: "https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience" },
    { title: L("6sense — What Is Intent Data?", "6sense — What Is Intent Data?"), url: "https://6sense.com/platform/intent-data/what-is-intent-data/" },
    { title: L("Bombora — B2B Intent Data", "Bombora — B2B Intent Data"), url: "https://bombora.com/intent/" },
    { title: L("Demandbase — Buyer Intent Explained", "Demandbase — Buyer Intent Explained"), url: "https://www.demandbase.com/blog/buyer-intent/" },
    { title: L("Cognism — Best B2B Intent Data Providers", "Cognism — Best B2B Intent Data Providers"), url: "https://www.cognism.com/blog/intent-data-providers" },
    { title: L("Common Room — Action on the People Behind B2B Intent with Bombora", "Common Room — Action on the People Behind B2B Intent with Bombora"), url: "https://www.commonroom.io/playbooks/action-on-b2b-intent-with-bombora-intent-signals/" },
    { title: L("Leadfeeder / Dealfront — Website Visitor Identification", "Leadfeeder / Dealfront — Website Visitor Identification"), url: "https://www.leadfeeder.com/" },
    { title: L("RB2B — Website Visitor Identification", "RB2B — Website Visitor Identification"), url: "https://www.rb2b.com/" },
    { title: L("Clay — Data Enrichment Platform", "Clay — Data Enrichment Platform"), url: "https://www.clay.com/" },
    { title: L("HubSpot — Lead Scoring", "HubSpot — Lead Scoring"), url: "https://knowledge.hubspot.com/scoring/set-up-score-properties-to-qualify-contacts-companies-and-deals" },
    { title: L("Pipedrive — Lead Scoring", "Pipedrive — Lead Scoring"), url: "https://support.pipedrive.com/en/article/lead-scoring" },
  ],
  relatedLessons: {
    previous: {
      slug: "crm-pipeline-tracking",
      title: L(
        "Lekcija 10 — Kako pratiti Founder-Led Growth aktivnosti u CRM-u",
        "Lesson 10 — How to Track Founder-Led Growth Activities in Your CRM",
      ),
    },
    next: {
      slug: "inbound-to-outbound-system",
      title: L(
        "Lekcija 12 — Kako napraviti inbound-to-outbound sistem",
        "Lesson 12 — How to Build an Inbound-to-Outbound System",
      ),
      note: L(
        "Sledeća lekcija pokazuje kako povezati inbound signale sa outbound motion-om.",
        "The next lesson shows how to connect inbound signals with outbound motion.",
      ),
    },
    related: [
      { slug: "what-founder-led-growth-is", title: L("Lekcija 1 — Šta je Founder-Led Growth", "Lesson 1 — What Founder-Led Growth Is and Why It Works for B2B Companies") },
      { slug: "how-to-define-your-icp", title: L("Lekcija 2 — Kako definisati ICP", "Lesson 2 — How to Define Your ICP for B2B Lead Generation") },
      { slug: "linkedin-commenting-strategy", title: L("Lekcija 6 — LinkedIn commenting strategija", "Lesson 6 — How to Use LinkedIn Commenting for Visibility With Your ICP") },
      { slug: "linkedin-engagement-outreach-list", title: L("Lekcija 7 — LinkedIn engagement u outreach listu", "Lesson 7 — How to Turn LinkedIn Engagement Into an Outreach List") },
      { slug: "webinars-founder-led-growth", title: L("Lekcija 8 — Webinari u Founder-Led Growth-u", "Lesson 8 — How to Use Webinars as Part of Founder-Led Growth") },
      { slug: "linkedin-ads-thought-leader-ads", title: L("Lekcija 9 — LinkedIn Ads za Founder-Led Growth", "Lesson 9 — How to Use LinkedIn Ads to Boost Founder-Led Growth") },
    ],
  },
  cta: {
    title: L("Buying signali su način da prestaneš da nagađaš", "Buying signals are how you stop guessing"),
    body: L(
      "Founder-Led Growth stvara signale pre nego što kupci podignu ruku. Posao je da ih primetiš, score-uješ, rutiraš i deluješ sa kontekstom. Ne čekaj očigledan demo request. Do tada, kupac možda već ima shortlist. Sledeća lekcija pokazuje kako povezati inbound signale sa outbound motion-om i izgraditi inbound-to-outbound sistem.",
      "Founder-Led Growth creates signals before buyers raise their hand. The job is to notice them, score them, route them, and act with context. Do not wait for the obvious demo request. By then, the buyer may already have a shortlist. The next lesson shows how to connect inbound signals with outbound motion and build an inbound-to-outbound system.",
    ),
    primaryLabel: L("Nastavi na Lekciju 12", "Continue Lesson 12"),
    secondaryLabel: L("Zakaži konsultaciju", "Book consultation"),
  },
  seoKeywords: P(
    [
      "B2B buying signals",
      "buyer intent signals",
      "B2B intent data",
      "LinkedIn intent signals",
      "buying intent data",
      "sales intent signals",
      "website intent signals",
      "webinar intent signals",
      "B2B sales triggers",
      "account intent scoring",
      "signal-based selling",
      "Founder-Led Growth buying signals",
    ],
    [
      "B2B buying signals",
      "buyer intent signals",
      "B2B intent data",
      "LinkedIn intent signals",
      "buying intent data",
      "sales intent signals",
      "website intent signals",
      "webinar intent signals",
      "B2B sales triggers",
      "account intent scoring",
      "signal-based selling",
      "Founder-Led Growth buying signals",
    ],
  ),
};
