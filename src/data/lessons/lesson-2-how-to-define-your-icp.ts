import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("How to Define Your Ideal Customer Profile", "How to Define Your Ideal Customer Profile"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Praktičan vodič za definisanje ICP-a pomoću spreadsheet-a ili strukturisanih podataka o klijentima.",
    "Practical walkthrough on defining an ICP using a spreadsheet or structured customer data.",
  ),
  placementNote: L(
    "Pogledaj posle Koraka 1 u okviru (najbolji klijenti).",
    "Watch after Step 1 in the framework (best-fit accounts).",
  ),
  embedUrl: "https://www.youtube.com/embed/WOVhHWR5B3E",
  watchUrl: "https://www.youtube.com/watch?v=WOVhHWR5B3E",
};

const video2 = {
  title: L(
    "Ideal Customer Profiles: 3 Common Mistakes Founders Make",
    "Ideal Customer Profiles: 3 Common Mistakes Founders Make",
  ),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Gde ICP rad obično puca: preširoko, nagađanje, fokus na titule umesto konteksta kupovine.",
    "Useful for showing where ICP work usually breaks: going too broad, guessing, or focusing on titles instead of buying context.",
  ),
  placementNote: L(
    "Pogledaj posle okvira ili u sekciji video materijala.",
    "Watch after the framework section or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/vhRkCTdFmZE",
  watchUrl: "https://www.youtube.com/watch?v=vhRkCTdFmZE",
};

const video3 = {
  title: L("How to Build Targeted Lead Lists with Apollo.io", "How to Build Targeted Lead Lists with Apollo.io"),
  channel: L("Apollo", "Apollo"),
  description: L(
    "Podržava implementaciju gde ICP postaje pretraživi filteri i liste za prospecting.",
    "Supports the implementation section where ICP becomes searchable filters and prospecting lists.",
  ),
  placementNote: L(
    "Pogledaj posle Koraka 6 (ICP u outreach filtere).",
    "Watch after Step 6 (ICP into outreach filters).",
  ),
  embedUrl: "https://www.youtube.com/embed/pSjEXqru9Qk",
  watchUrl: "https://www.youtube.com/watch?v=pSjEXqru9Qk",
};

const video4 = {
  title: L("How to do ICP Research Using AI - Clay Tutorial", "How to do ICP Research Using AI - Clay Tutorial"),
  channel: L("Clay", "Clay"),
  description: L(
    "AI i enrichment workflow-i za specifičnije B2B liste na osnovu ICP kriterijuma.",
    "Shows how AI and enrichment workflows can help create more specific B2B lists based on ICP criteria.",
  ),
  placementNote: L(
    "Pogledaj posle tool stack-a ili u Clay sekciji.",
    "Watch after the tool stack or in the Clay section.",
  ),
  embedUrl: "https://www.youtube.com/embed/ii5apLDdRyo",
  watchUrl: "https://www.youtube.com/watch?v=ii5apLDdRyo",
};

export const lesson2RichContent: RichLessonContent = {
  meta: {
    stage: L("Strategija i pozicioniranje", "Strategy & Positioning"),
    readingTime: L("16-20 min", "16-20 min"),
    difficulty: L("Početnik do srednjeg nivoa", "Beginner to intermediate"),
    outcome: L(
      "Izgradićeš jasan Ideal Customer Profile koji usmerava founder content, LinkedIn engagement, outreach, teme webinara, CRM segmentaciju i prioritet pipeline-a.",
      "Build a clear Ideal Customer Profile that guides your founder content, LinkedIn engagement, outreach, webinar topics, CRM segmentation, and pipeline prioritization.",
    ),
    recommendedTools: L(
      "HubSpot ICP Template, LinkedIn Sales Navigator, Apollo, Clay, Google Sheets, Notion, Airtable, HubSpot CRM, Pipedrive",
      "HubSpot ICP Template, LinkedIn Sales Navigator, Apollo, Clay, Google Sheets, Notion, Airtable, HubSpot CRM, Pipedrive",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 2", "Lesson 2"),
    title: L(
      "Kako definisati ICP za Founder-Led Growth",
      "How to Define Your ICP for Founder-Led Growth",
    ),
    paragraphs: P(
      [
        "Većina founder-a nema problem sa targetiranjem.",
        "Ima problem sa „skoro pravim“ kupcem.",
        "Većina founder-a može da opiše kome prodaje. Otprilike.",
        "Kažu: „Radimo sa B2B firmama.“ Ili: „Naši najbolji klijenti su SaaS kompanije.“ Ili: „Targetiramo founder-e, CEO-je i sales lidere.“",
        "To zvuči jasno. Ali nije dovoljno jasno da bi se od toga gradio pipeline.",
        "„B2B firme“ nisu ICP. „SaaS kompanije“ nisu ICP. „Founderi“ nisu ICP. To su tržišta.",
        "ICP je mnogo oštriji. Kaže ti koja preduzeća vredi juriti; koji problemi su hitni; koji triggeri poboljšavaju timing; šta outreach i value-based follow-up treba da kažu; koje signale pokreću re-engagement; šta content treba da edukuje; koje account-e CRM ignoriše.",
        "Većina Founder-Led Growth sistema pada pre prvog LinkedIn posta, ne zato što founder loše piše content, već zato što firma govori previše ljudima odjednom.",
        "Ako je ICP nejasan, content postaje generičan. Generičan content privlači nasumične ljude. Nasumičan engagement pravi slabu outreach listu. Slaba lista znači nepredvidiv pipeline.",
        "Founder-Led Growth počinje jednim pitanjem: Ko je najverovatnije da će da mari, veruje, engage-uje i kupi?",
        "Ova lekcija ti pomaže da na to odgovoriš kako treba.",
      ],
      [
        "Most founders don't have a targeting problem.",
        "They have an \"almost right customer\" problem.",
        "Most founders can describe who they sell to. Kind of.",
        "They'll say: \"We work with B2B companies.\" Or: \"Our best customers are SaaS companies.\" Or: \"We target founders, CEOs, and sales leaders.\"",
        "That sounds clear. But it is not clear enough to build pipeline.",
        "Because \"B2B companies\" is not an ICP. \"SaaS companies\" is not an ICP. \"Founders\" is not an ICP. Those are markets.",
        "An ICP is much sharper. It tells you which companies are worth pursuing; which problems are urgent enough to create pipeline; which buyers feel the pain; which triggers make timing better; which accounts should be ignored; what content the founder should post; what outreach should say; what signals the CRM should track.",
        "Most Founder-Led Growth systems fail before the first LinkedIn post. Not because the founder is bad at content. Because the company is speaking to too many people at once.",
        "If your ICP is vague, your content becomes generic. If your content is generic, your engagement attracts random people. If your engagement is random, your outreach list becomes weak. If your outreach list is weak, the pipeline feels unpredictable.",
        "Founder-Led Growth starts with one question: Who is most likely to care, trust, engage, and buy?",
        "This lesson helps you answer that properly.",
      ],
    ),
    callout: L(
      "ICP nije marketinška vežba. To je filter za ceo Founder-Led Growth sistem.",
      "Your ICP is not a marketing exercise. It is the filter for the entire Founder-Led Growth system.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "icp-drives-all", title: L("ICP određuje sve ostalo", "Your ICP drives everything else") },
    { id: "vs-persona", title: L("ICP vs buyer persona", "ICP vs buyer persona") },
    { id: "framework", title: L("FLG ICP okvir", "Founder-Led Growth ICP framework") },
    { id: "story", title: L("Mesto u Lead Agents sistemu", "Place in the Lead Agents system") },
    { id: "proof", title: L("Dokaz i istraživanja", "Proof / trust section") },
    { id: "implement", title: L("Kako implementirati", "How to implement") },
    { id: "tools", title: L("Idealni stack alata", "Ideal tool stack") },
    { id: "workflow", title: L("Primer workflow-a", "Workflow example") },
    { id: "videos", title: L("Video materijali", "YouTube videos") },
    { id: "visuals", title: L("Predlozi vizuala", "Visual elements") },
    { id: "checklist", title: L("Čeklista", "Checklist") },
    { id: "template", title: L("Šablon: ICP Definition", "Template / swipe file") },
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
              "definisati ICP dovoljno specifičan za content i outreach;",
              "razdvojiti ICP od buyer persone;",
              "identifikovati best-fit account-e kroz firmographic, behavioral i pain signale;",
              "mapirati buying committee, ne samo jednog decision-maker-a;",
              "pretvoriti ICP uvide u LinkedIn content pilare;",
              "pretvoriti ICP podatke u Sales Navigator i Apollo filtere;",
              "koristiti ICP u CRM-u i buying signal workflow-ima;",
              "izbeći trošenje founder vremena na pogrešnu publiku.",
            ],
            [
              "define an ICP that is specific enough for content and outreach;",
              "separate ICP from buyer persona;",
              "identify best-fit accounts using firmographic, behavioral, and pain-based signals;",
              "map the buying committee, not just one decision-maker;",
              "turn ICP insights into LinkedIn content pillars;",
              "turn ICP data into Sales Navigator and Apollo filters;",
              "use your ICP inside CRM and buying signal workflows;",
              "avoid wasting founder time on the wrong audience.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Analiza podataka i segmentacija, definisanje ICP-a",
            "Data analysis and segmentation, defining the ICP",
          ),
          caption: L(
            "ICP dolazi iz dokaza o najboljim klijentima, ne iz nagađanja u brainstormingu.",
            "Your ICP comes from evidence about best customers, not from guessing in a brainstorm.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("ICP kao filter celog sistema", "ICP as the filter for the whole system"),
          subtitle: L(
            "Jedan jasan profil usmerava svaki kanal.",
            "One clear profile guides every channel.",
          ),
          stages: [
            L("ICP", "ICP"),
            L("Content", "Content"),
            L("Engagement", "Engagement"),
            L("Outreach", "Outreach"),
            L("Webinar", "Webinar"),
            L("CRM", "CRM"),
            L("Pipeline", "Pipeline"),
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
              "Founder-Led Growth zavisi od relevantnosti. Founder content mora da deluje kao da je napisan za konkretnog kupca. Profil mora da obećava jasnu vrednost konkretnom tržištu. Engagement lista mora da uključuje ljude koji stvarno mogu da utiču na pipeline. Webinar tema mora da privuče prava preduzeća. Outreach mora da referiše stvarne probleme, ne generičku personalizaciju.",
              "To ne može bez jasnog ICP-a.",
              "HubSpot opisuje ICP rad kao način da definišeš tip firme kojoj si najbolje pozicioniran da služiš, pa da aktiviraš taj profil kroz sales i marketing.",
              "Apollo definiše ICP kao fiktivnu firmu koja kombinuje ključne karakteristike idealnog kupca, firmografiju, veličinu, industriju, lokaciju, prihod i budžet.",
              "To je važno jer Founder-Led Growth nije samo „više postovanja“. To je sistem oko pravih kupaca. Ako je ICP pogrešan, sistem postaje glasniji, ali ne bolji.",
            ],
            [
              "Founder-Led Growth depends on relevance. The founder's content needs to feel like it was written for a specific buyer. The profile needs to show a clear promise to a specific market. The engagement list needs to include people who can actually influence pipeline. The webinar topic needs to attract the right companies. The outreach needs to reference real problems, not generic personalization.",
              "That cannot happen without a clear ICP.",
              "HubSpot describes ICP work as a way to define the type of company you are best positioned to serve, then activate that profile across sales and marketing.",
              "Apollo defines an ICP as a fictional company that combines the key characteristics of your ideal customer, including firmographics like company size, industry, location, annual revenue, and budget.",
              "That matters because Founder-Led Growth is not just \"posting more.\" It is building a system around the right buyers. If the ICP is wrong, the system gets louder but not better.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Bez ICP-a, Founder-Led Growth postaje buka. Sa ICP-om, postaje sistem.",
            "Without an ICP, Founder-Led Growth becomes noise. With an ICP, it becomes a system.",
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
              "ICP nije „ko bi mogao da kupi“. ICP je „oko koga gradimo sistem“.",
              "Mnoge firme definišu ICP preširoko jer se plaše da propuste prilike, targetiraju sve koji bi mogli da kupe. Founder-Led Growth radi bolje kada se fokusiraš na account-e koji najverovatnije: snažno osećaju bol; brzo razumeju vrednost; imaju budžet ili hitnost; veruju founder ekspertizi; engage-uju se sa edukativnim content-om; prolaze kroz kompleksan sales ciklus; šire se ili referišu vremenom.",
              "Dobar ICP ne ograničava rast, stvara fokus. Pomaže founder-u da prestane da piše vague postove za sve i da kreira content specifičan za tržište, tako da pravi kupac pomisli: „Ova osoba razume moj svet.“ To je poenta.",
            ],
            [
              "ICP is not \"who could buy.\" ICP is \"who should we build the system around.\" Many companies define their ICP too broadly because they are afraid of missing opportunities. So they target everyone who could buy.",
              "But Founder-Led Growth works better when you focus on the accounts most likely to: feel the pain strongly; understand the value quickly; have budget or urgency; trust founder expertise; engage with educational content; move through a complex sales cycle; expand or refer over time.",
              "A good ICP does not limit growth. It creates focus. It helps the founder stop writing vague posts for everyone and start creating market-specific content that makes the right buyer think: \"This person understands my world.\" That is the point.",
            ],
          ),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("Account", "Account"),
              label: L("ICP = firma", "ICP = company"),
              description: L(
                "Tip preduzeća, veličina, industrija, motion, triggeri.",
                "Company type, size, industry, motion, triggers.",
              ),
            },
            {
              value: L("Persona", "Persona"),
              label: L("Persona = ljudi", "Persona = people"),
              description: L(
                "Uloge u buying committee-u unutar ICP account-a.",
                "Roles in the buying committee inside ICP accounts.",
              ),
            },
            {
              value: L("Fit", "Fit"),
              label: L("CRM polje", "CRM field"),
              description: L(
                "High / medium / low, filter za signale i outreach.",
                "High / medium / low, filter for signals and outreach.",
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "icp-drives-all",
      title: L("ICP određuje sve ostalo", "Your ICP drives everything else"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "ICP ne određuje samo kome pišeš i kome šalješ poruke. ICP određuje ceo sistem: messaging, ponudu, content teme, follow-up logiku, personalizaciju i lead scoring.",
              "Kad je ICP nejasan, sve postaje generičko. Kad je ICP precizan, svaka aktivnost ima jasan kriterijum i fokus.",
            ],
            [
              "Your ICP does not only define who you write to and who you message. It defines the whole system: messaging, offer design, content topics, follow-up logic, personalization, and lead scoring.",
              "When your ICP is vague, everything becomes generic. When your ICP is precise, every action has clear criteria and focus.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Mini-framework: ICP segment = tip firme + uloga + problem + trigger + relevantna ponuda.",
            "Mini-framework: ICP segment = company type + role + problem + trigger + relevant offer.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Primeri triggera koji pomažu segmentaciji i tajmingu:"],
            ["Examples of triggers that improve segmentation and timing:"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "zapošljavanje sales tima;",
              "nova investicija ili funding;",
              "otvorene pozicije koje ukazuju na GTM promenu;",
              "ulazak na novo tržište;",
              "ulazak u novu industriju ili vertikalu;",
              "aktivniji content i market edukacija;",
              "promena rukovodstva (npr. novi VP Sales, CMO, CRO).",
            ],
            [
              "hiring a sales team;",
              "new funding or investment;",
              "open roles indicating a GTM shift;",
              "expansion into a new market;",
              "expansion into a new industry or vertical;",
              "more active content and market education;",
              "leadership change (for example a new VP Sales, CMO, or CRO).",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Važno: segmentacioni trigger nije isto što i intent signal i nije isto što i direktna sales akcija. Trigger često znači „vredi obratiti pažnju sada“, ali ne znači automatski da je account spreman za call. Neki triggeri su rani kontekst za nurture, dok intent signali obično traže aktivniji follow-up.",
            ],
            [
              "Important: a segmentation trigger is not the same as an intent signal, and neither equals direct sales action. A trigger often means \"timing is worth attention now,\" but it does not automatically mean the account is ready for a call. Some triggers are early nurture context, while intent signals usually call for more active follow-up.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "vs-persona",
      title: L("ICP vs buyer persona", "ICP vs buyer persona"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "ICP ti kaže koja preduzeća su bitna. Buyer persona ti kaže koji ljudi unutar tih preduzeća su bitni. Treba ti oba, ali nisu ista stvar.",
              "Većina founder-a ih meša. Kažu: „Naš ICP su CEO-i.“ Ne - CEO je persona. ICP je tip firme gde CEO ima bolan, skup, hitan problem koji tvoja firma rešava bolje od alternativa.",
            ],
            [
              "Your ICP tells you which companies matter. Your buyer persona tells you which people inside those companies matter. You need both. But they are not the same thing.",
              "Most founders mix these up. They say: \"Our ICP is CEOs.\" No. CEO is a persona. The ICP is the type of company where the CEO has a painful, expensive, urgent problem that your company solves better than alternatives.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("ICP (account)", "ICP (account)"),
              subtitle: L("Koja firma", "Which company"),
              variant: "accent",
              items: P(
                [
                  "Veličina, industrija, geografija",
                  "Sales motion i zrelost",
                  "Skup problem i hitnost",
                  "Timing triggeri (hiring, funding…)",
                ],
                [
                  "Size, industry, geography",
                  "Sales motion and maturity",
                  "Expensive problem and urgency",
                  "Timing triggers (hiring, funding…)",
                ],
              ),
            },
            {
              title: L("Buyer persona", "Buyer persona"),
              subtitle: L("Ko unutar firme", "Who inside the company"),
              variant: "muted",
              items: P(
                [
                  "Founder, VP Sales, RevOps…",
                  "Champion vs economic buyer",
                  "Ko čita content, ko zatvara deal",
                  "Ne zamenjuje definiciju account-a",
                ],
                [
                  "Founder, VP Sales, RevOps…",
                  "Champion vs economic buyer",
                  "Who reads content, who closes",
                  "Does not replace the account definition",
                ],
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("ICP, persona, committee, trigger, pain", "ICP, persona, committee, trigger, pain"),
          headers: H(["Koncept", "Šta definiše", "Primer"], ["Concept", "What it defines", "Example"]),
          rows: [
            {
              cells: [
                L("ICP", "ICP"),
                L("Best-fit kompanija / account", "The best-fit company/account"),
                L(
                  "B2B SaaS 20-100 zaposlenih, prodaja sales timovima, founder-led sales bez ponovljivog outbound sistema",
                  "B2B SaaS companies with 20-100 employees, selling to sales teams, with founder-led sales but no repeatable outbound system",
                ),
              ],
            },
            {
              cells: [
                L("Buyer persona", "Buyer persona"),
                L("Ljudi uključeni u kupovinu", "The people involved in the purchase"),
                L("Founder, VP Sales, Head of Growth, RevOps Lead", "Founder, VP Sales, Head of Growth, RevOps Lead"),
              ],
            },
            {
              cells: [
                L("Buying committee", "Buying committee"),
                L("Svi koji utiču na deal", "Everyone who influences the deal"),
                L("Founder, sales lead, marketing lead, finance, operations, users, external consultant", "Founder, sales leader, marketing lead, finance, operations, users, external consultant"),
              ],
            },
            {
              cells: [
                L("Trigger", "Trigger"),
                L("Zašto timing ima smisla sada", "Why timing matters now"),
                L("Zapošljavanje SDR-a, novi market, slab outbound, funding, CRM migracija", "Hiring SDRs, launching a new market, low outbound performance, new funding, CRM migration"),
              ],
            },
            {
              cells: [
                L("Pain", "Pain"),
                L("Komercijalni problem", "The commercial problem"),
                L("Pipeline previše zavisi od referral-a i founder mreže", "Pipeline depends too much on referrals and founder network"),
              ],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "framework",
      title: L("Founder-Led Growth ICP okvir", "The Founder-Led Growth ICP framework"),
      blocks: [
        {
          type: "pipeline-flow",
          title: L("FLG ICP okvir", "Founder-Led Growth ICP framework"),
          subtitle: L(
            "Od best-fit account-a do sales motion-a.",
            "From best-fit account to sales motion.",
          ),
          stages: [
            L("Account", "Account"),
            L("Pain", "Pain"),
            L("POV", "POV"),
            L("Signal", "Signal"),
            L("Channel", "Channel"),
            L("Motion", "Motion"),
          ],
        },
        {
          type: "framework-intro",
          title: L("Best-fit Account → Buyer Pain → Founder POV → Signal → Channel → Sales Motion", "Best-fit Account → Buyer Pain → Founder POV → Signal → Channel → Sales Motion"),
          description: L(
            "Okvir za ICP koji stvarno vodi rast, ne statičan avatar, već radni sistem od account-a do revenue motion-a.",
            "A framework for defining an ICP that actually guides growth, not a static customer avatar, but a working system.",
          ),
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Identifikuj best-fit account-e", "Identify your best-fit accounts"),
              whatToDo: L(
                "Kreni od firmi gde možeš da ostvariš najjači business outcome. Pogledaj najbolje klijente, najbrže zatvorene deal-ove, najbolju retenciju, najveću maržu, najlakši onboarding, klijente koji referišu, klijente koji brzo razumeju vrednost.",
                "Start with companies where you can create the strongest business outcome. Look at your best customers, fastest closed deals, highest-retention customers, highest-margin customers, easiest onboarding experiences, customers who refer others, customers who understand your value quickly.",
              ),
              whyItMatters: L(
                "ICP ne treba da dolazi samo iz brainstorming-a. Treba da dolazi iz dokaza.",
                "Your ICP should not come from brainstorming alone. It should come from evidence.",
              ),
              example: L(
                "Agencija kaže da radi sa „B2B firmama“. Posle 12 meseci vidi da su najbolji klijenti: B2B service firme 10-50 ljudi, founder-led sales, $1M-$5M prihod, jak delivery tim, bez ponovljivog pipeline sistema, founder aktivan na LinkedIn-u.",
                "An agency says it works with \"B2B companies.\" After looking at the last 12 months, they realize the best customers are: 10-50 person B2B service firms, founder-led sales motion, $1M-$5M annual revenue, strong delivery team, no repeatable pipeline system, founder active on LinkedIn or willing to be.",
              ),
              commonMistake: L(
                "Definisanje ICP-a na osnovu koga želiš da prodaješ, a ne kome stvarno najbolje pomažeš.",
                "Defining ICP based on who you want to sell to, not who you can actually help best.",
              ),
              tryThis: L(
                "Lista top 10 klijenata, oceni 1-5: revenue potential, retention, ease of sale, speed to value, strategic fit, referral potential, founder interest u problem.",
                "Create a list of your top 10 customers and score them from 1-5 on: revenue potential, retention potential, ease of sale, speed to value, strategic fit, referral potential, founder interest in the problem.",
              ),
              highlight: L(
                "ICP se obično krije unutar najboljih klijenata.",
                "Your ICP usually hides inside your best customers.",
              ),
            },
          ],
        },
        { type: "video", video: video1 },
        {
          type: "framework-steps",
          steps: [
            {
              step: 2,
              title: L("Definiši skup problem", "Define the expensive problem"),
              whatToDo: L(
                "Napiši problem na jeziku kupca, ne jeziku proizvoda. Loše: „Treba im bolji LinkedIn growth sistem.“ Bolje: „Pipeline previše zavisi od referral-a i founder mreže, pa je rast nepredvidiv.“",
                "Write the problem in the buyer's language. Not your product language. Bad: \"They need a better LinkedIn growth system.\" Better: \"Their pipeline depends too much on referrals and founder network, so growth is inconsistent.\"",
              ),
              whyItMatters: L(
                "Founder-Led Growth content radi kada imenuje bol koji kupac već oseća. Ako pišeš iz rešenja, kupac mora da prevodi. Ako pišeš iz problema, naginje se.",
                "Founder-Led Growth content works when it names the pain the buyer already feels. If you write from your solution, the buyer has to translate. If you write from their problem, they lean in.",
              ),
              example: L(
                "Sales automation firma ne bi trebalo da definiše bol kao „treba im automated outreach“. Bolje: „Founder i dalje vodi previše prodajnih razgovora ručno, a zapošljavanje SDR-a pre nego što je poruka dokazana bi bacilo novac.“",
                "A sales automation company should not define the pain as \"They need automated outreach.\" The better pain is: \"The founder still handles too many sales conversations manually, but hiring SDRs before the message is proven would waste money.\"",
              ),
              commonMistake: L(
                "Korišćenje kategorijskog jezika umesto pain jezika.",
                "Using category language instead of pain language.",
              ),
              tryThis: L(
                "Rečenica: „Naš ICP gubi novac/vreme/prilike zbog [problem].“ Prepiši bez pominjanja proizvoda.",
                "Write the sentence: \"Our ICP is losing money/time/opportunities because [problem].\" Then rewrite it without mentioning your product.",
              ),
              highlight: L(
                "Pain jezik je gorivo za founder content.",
                "Pain language is the fuel for founder content.",
              ),
            },
            {
              step: 3,
              title: L("Mapiraj buying committee", "Map the buying committee"),
              whatToDo: L(
                "Definiši ko je uključen u kupovinu. Ne stani na jednom decision-maker-u. Za B2B deal-ove kupac je često grupa. Gartner opisuje B2B kupovinu kao nelinearno putovanje sa više buying jobs: identifikacija problema, istraživanje rešenja, gradnja zahteva, selekcija dobavljača.",
                "Define who is involved in the buying process. Do not stop at one decision-maker. For B2B deals, the buyer is often a group. Gartner describes B2B buying as a nonlinear journey involving multiple buying jobs: problem identification, solution exploration, requirements building, and supplier selection.",
              ),
              whyItMatters: L(
                "ICP treba više od titule, treba mapu buying committee-a i šta svaka uloga mora da veruje pre nego što deal krene.",
                "Your ICP needs more than a title. It needs a buying committee map and what each role must believe before the deal can move.",
              ),
              example: L(
                "Za B2B SaaS ICP: CEO brine o revenue i fokusu; VP Sales o pipeline kvalitetu; Head of Marketing o lead quality; RevOps o tracking-u; Finance o ROI.",
                "For a B2B SaaS ICP: the CEO cares about revenue growth and focus; VP Sales about pipeline quality; Head of Marketing about lead quality; RevOps about tracking; Finance about ROI and payback.",
              ),
              commonMistake: L(
                "Sav content za CEO-a, ignorisanje ljudi koji utiču na deal.",
                "Writing all content for the CEO and ignoring the people who influence the deal.",
              ),
              tryThis: L(
                "Za ICP navedi: economic buyer, day-to-day user, technical evaluator, blocker, internal champion, budget approver, i šta svaki mora da veruje.",
                "For your ICP, list: economic buyer, day-to-day user, technical evaluator, blocker, internal champion, budget approver. Then define what each person needs to believe before the deal can move forward.",
              ),
              highlight: L(
                "Deal se kreće kroz committee, ne kroz jednu osobu.",
                "Deals move through a committee, not through one person.",
              ),
            },
            {
              step: 4,
              title: L("Identifikuj buying triggere", "Identify the buying triggers"),
              whatToDo: L(
                "Definiši šta čini timing boljim. ICP kaže ko odgovara. Triggeri kažu kada je verovatnije da će da mare. Korisni triggeri: zapošljavanje sales tima, novi proizvod, novi market, funding, novi exec, slab outbound, CRM migracija, webinar aktivnost, competitor change, churn, usporavanje sales ciklusa.",
                "Define what makes the timing better. ICP tells you who fits. Triggers tell you when they are more likely to care. Useful triggers include: hiring salespeople, launching a new product, entering a new market, raising funding, new executive hire, low outbound performance, CRM migration, content push, webinar activity, competitor change, regulation pressure, sudden growth, churn problem, sales cycle slowdown.",
              ),
              whyItMatters: L(
                "Founder-Led Growth ne oslanja se samo na cold timing, koristi kontekst. Kupac sa pravim profilom ali bez triggera može biti nurture. Kupac sa profilom i jakim triggerom može biti outreach-ready.",
                "Founder-Led Growth does not rely only on cold timing. It uses context. A buyer with the right company profile but no trigger may be a nurture account. A buyer with the right profile and a strong trigger may be outreach-ready.",
              ),
              example: L(
                "B2B SaaS koji zapošljava VP Sales i 3 SDR-a verovatno razmišlja o pipeline-u, content o founder-led pipeline, ICP jasnoći i CRM tracking-u je relevantniji.",
                "A B2B SaaS company hiring a VP Sales and 3 SDRs is probably thinking about pipeline. That makes content about founder-led pipeline, ICP clarity, outbound systems, and CRM tracking more relevant.",
              ),
              commonMistake: L(
                "Tretiranje svakog ICP account-a isto.",
                "Treating every ICP account the same.",
              ),
              tryThis: L(
                "Trigger lista sa tri nivoa: light, medium, strong, i definisana akcija za svaki.",
                "Create a trigger list with three levels: light, medium, strong, then define what action happens at each level.",
              ),
              highlight: L(
                "Timing je polovina relevantnosti u outreach-u.",
                "Timing is half of relevance in outreach.",
              ),
            },
            {
              step: 5,
              title: L("ICP u content pilare", "Translate ICP into content pillars"),
              whatToDo: L(
                "Pretvori ICP bol u content teme. Content ne dolazi iz nasumične inspiracije, dolazi iz ponovljenih problema kupca. Za svaki pain: LinkedIn post, comment ugao, webinar tema, outreach opener, CRM content tag.",
                "Turn ICP pain into content topics. Your content should not come from random inspiration. It should come from the buyer's repeated problems. For each pain: one LinkedIn post, one comment angle, one webinar topic, one outreach opener, one CRM content topic tag.",
              ),
              whyItMatters: L(
                "Founder-u ne treba više content ideja, treba mu oštriji input. Loši pilari: company news, product updates, tips, culture. Bolji: problem education, cost of inaction, founder POV, workflow breakdowns, case examples, buying criteria, mistakes to avoid.",
                "The founder does not need more content ideas. They need sharper content inputs. Bad pillars: company news, product updates, tips, culture. Better pillars: problem education, cost of inaction, founder POV, workflow breakdowns, case examples, buying criteria, mistakes to avoid.",
              ),
              example: L(
                "Pain: founder i dalje vodi prodaju → pilar „founder-led pipeline“ → post: „Vaša founder mreža nije sales sistem.“",
                "Pain: founder still drives sales → pillar \"founder-led pipeline\" → post: \"Your founder network is not a sales system.\"",
              ),
              commonMistake: L(
                "Content pilari oko kategorija firme umesto buyer problema.",
                "Creating content pillars around company categories instead of buyer problems.",
              ),
              tryThis: L(
                "Napiši 10 buyer pain-ova. Svaki pretvori u post, comment, webinar, outreach opener i CRM tag.",
                "Write 10 buyer pains. Turn each into: 1 LinkedIn post, 1 comment angle, 1 webinar topic, 1 outreach opener, 1 CRM content topic tag.",
              ),
              highlight: L(
                "Tako ICP postaje sistem, ne dokument.",
                "That is how ICP becomes a system.",
              ),
            },
            {
              step: 6,
              title: L("ICP u outreach filtere", "Translate ICP into outreach filters"),
              whatToDo: L(
                "Pretvori ICP u podatke koje možeš da pretražiš, Sales Navigator, Apollo ili Clay filteri. Za svaku ICP rečenicu pitaj: „Možemo li ovo da pretražimo?“ Ako ne, definiši proxy.",
                "Turn the ICP into data you can search. Your ICP should become Sales Navigator, Apollo, or Clay filters. For every ICP sentence, ask: \"Can we search for this?\" If not, define a proxy.",
              ),
              whyItMatters: L(
                "Lep ICP dokument bez liste je beskoristan. Proxies za „pipeline unpredictability“: hiring SDRs, Head of Sales, funding, founder growth postovi, sales engagement tools, webinar aktivnost.",
                "A beautiful ICP document that never turns into a list is useless. Proxies for \"pipeline unpredictability\": hiring SDRs, hiring Head of Sales, new funding, founder posting about growth, using sales engagement tools, running webinars, outbound hiring roles.",
              ),
              example: L(
                "ICP dimenzije → filteri: veličina 10-50, industrija B2B SaaS, seniority Founder/VP Sales, hiring SDR signal, tech HubSpot/Apollo.",
                "ICP dimensions become filters: company size 10-50, industry B2B SaaS, seniority Founder/VP Sales, hiring SDR signal, tech stack HubSpot/Apollo.",
              ),
              commonMistake: L(
                "ICP koji se nikad ne pretvori u listu.",
                "Writing a beautiful ICP document that never turns into a list.",
              ),
              tryThis: L(
                "Jedan saved search u Sales Navigator ili Apollo sa svim ICP dimenzijama + 10 account-a za test.",
                "Build one saved search in Sales Navigator or Apollo with all ICP dimensions, then validate with 10 sample accounts.",
              ),
              highlight: L(
                "Ako ne možeš da pretražiš ICP, još uvek nije dovoljno oštar.",
                "If you cannot search your ICP, it is still not sharp enough.",
              ),
            },
          ],
        },
        { type: "video", video: video3 },
        {
          type: "framework-steps",
          steps: [
            {
              step: 7,
              title: L("ICP polja u CRM", "Add ICP fields to CRM"),
              whatToDo: L(
                "CRM treba da pokaže da li je lead dobar fit, ne samo da li je odgovorio. Dodaj: ICP fit, segment, primary pain, buying committee role, trigger, source, signal level, next best action.",
                "Your CRM should show whether a lead is a good fit, not just whether they replied. Add fields like: ICP fit, ICP segment, primary pain, buying committee role, trigger, source, signal level, next best action.",
              ),
              whyItMatters: L(
                "Founder-Led Growth stvara mnogo malih signala. Bez ICP fit-a, sales juri šum. Webinar učesnik, LinkedIn komentar ili profile view nisu uvek lead, ali high-fit account sa ponovljenim engagement-om zaslužuje akciju.",
                "Founder-Led Growth creates many small signals. If those signals are not connected to ICP fit, sales starts chasing noise. A webinar attendee is not always a lead. A LinkedIn comment is not always a lead. But a high-fit account with repeated engagement deserves action.",
              ),
              example: L(
                "Pravilo: „Ne kreiraj opportunity dok account nema i ICP fit i buying intent.“",
                "One simple CRM rule: \"Do not create an opportunity until the account has both ICP fit and buying intent.\"",
              ),
              commonMistake: L(
                "Praćenje source-a bez fit-a.",
                "Tracking source but not fit.",
              ),
              tryThis: L(
                "Dodaj ICP fit (high/medium/low) i signal level na svaki founder-led kontakt ovog meseca.",
                "Add ICP fit (high/medium/low) and signal level to every founder-led contact you touched this month.",
              ),
              highlight: L(
                "Jedno pravilo u CRM-u poboljšava kvalitet pipeline-a.",
                "That single rule improves pipeline quality.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Buying committee mapa", "Buying committee map"),
          headers: H(["Uloga", "Šta im je bitno", "Content koji treba"], ["Role", "What they care about", "Content they need"]),
          rows: [
            { cells: [L("Founder / CEO", "Founder / CEO"), L("Rast, fokus, poverenje, predvidljiv pipeline", "Revenue growth, focus, trust, pipeline predictability"), L("Strateški POV, market narrative, case studies", "Strategic POV, market narrative, case studies")] },
            { cells: [L("VP Sales", "VP Sales"), L("Sastanci, kvalitet pipeline-a, konverzija, SDR produktivnost", "Meetings, pipeline quality, conversion, SDR productivity"), L("Outreach okviri, dokaz kvaliteta leadova, sequence primeri", "Outreach frameworks, lead quality proof, sequence examples")] },
            { cells: [L("Head of Marketing", "Head of Marketing"), L("Content performanse, demand creation, lead quality", "Content performance, demand creation, lead quality"), L("Content strategija, webinar teme, attribution logika", "Content strategy, webinar topics, attribution logic")] },
            { cells: [L("RevOps / CRM owner", "RevOps / CRM owner"), L("Tracking, sistemi, handoff, reporting", "Tracking, systems, handoff, reporting"), L("CRM polja, workflow-i, source tracking", "CRM fields, workflows, source tracking")] },
            { cells: [L("Finance", "Finance"), L("Trošak, ROI, rizik, budžet", "Cost, ROI, risk, budget"), L("Business case, payback, cost of inaction", "Business case, payback logic, cost of inaction")] },
          ],
        },
        {
          type: "table",
          caption: L("Nivoi triggera", "Trigger levels"),
          headers: H(["Nivo", "Značenje", "Primer", "Akcija"], ["Trigger level", "Meaning", "Example", "Action"]),
          rows: [
            { cells: [L("Light", "Light"), L("Moguća relevantnost", "Possible relevance"), L("Novi LinkedIn follower iz target firme", "New LinkedIn follower from target company"), L("Engage nazad", "Engage back")] },
            { cells: [L("Medium", "Medium"), L("Jasan interes", "Clear interest"), L("Komentar na post o pipeline problemu", "Comments on post about pipeline problem"), L("Dodaj na warm listu", "Add to warm list")] },
            { cells: [L("Strong", "Strong"), L("Visoka timing relevantnost", "High timing relevance"), L("Webinar registracija + zapošljavanje SDR-a", "Registers for webinar + hiring SDRs"), L("CRM + kontekstualan outreach", "Add to CRM and send contextual outreach")] },
          ],
        },
        {
          type: "table",
          caption: L("ICP bol → content pilar", "ICP pain to content pillar"),
          headers: H(["ICP bol", "Founder POV", "Content pilar", "Primer posta"], ["ICP pain", "Founder POV", "Content pillar", "Example post"]),
          rows: [
            { cells: [L("Founder i dalje vodi prodaju", "Founder still drives sales"), L("Pipeline ne može zavisiti samo od odnosa", "Pipeline cannot depend only on founder relationships"), L("Founder-led pipeline", "Founder-led pipeline"), L("„Vaša founder mreža nije sales sistem.“", "\"Your founder network is not a sales system.\"")] },
            { cells: [L("Slab outbound reply", "Outreach gets low replies"), L("ICP nije jasan ili profil ne objašnjava ponudu", "ICP is unclear or profile does not explain the offer"), L("ICP + profil pre outreach-a", "ICP + profile before outreach"), L("„Cold poruka nije prvi utisak — LinkedIn profil jeste.“", "\"Your cold message is not the first impression. Your LinkedIn profile is.\"")] },
            { cells: [L("CRM haos", "CRM is messy"), L("Revenue signali se gube", "Revenue signals are getting lost"), L("CRM kao pipeline memorija", "CRM as pipeline memory"), L("„Ako LinkedIn razgovori ostanu u DM-ovima, to nije pipeline.“", "\"If LinkedIn conversations stay in DMs, they are not pipeline.\"")] },
            { cells: [L("Slabi webinar leadovi", "Webinars get low-quality leads"), L("Tema preširoka", "Topic is too broad"), L("Problem-led webinari", "Problem-led webinars"), L("„Webinar tema dolazi iz ponovljenog buyer pain-a, ne brainstorm-a.“", "\"A webinar topic should come from repeated buyer pain, not a marketing brainstorm.\"")] },
          ],
        },
        {
          type: "table",
          caption: L("ICP dimenzije → filteri", "ICP dimension to filters"),
          headers: H(["ICP dimenzija", "Primeri filtera"], ["ICP dimension", "Filter examples"]),
          rows: [
            { cells: [L("Veličina firme", "Company size"), L("10-50, 51-200, 201-500 zaposlenih", "10-50, 51-200, 201-500 employees")] },
            { cells: [L("Industrija", "Industry"), L("B2B SaaS, IT usluge, consulting, agencije", "B2B SaaS, IT services, consulting, agencies")] },
            { cells: [L("Geografija", "Geography"), L("US, UK, EU, DACH, Nordics", "US, UK, EU, DACH, Nordics")] },
            { cells: [L("Seniority", "Seniority"), L("Founder, CEO, VP Sales, Head of Growth, RevOps", "Founder, CEO, VP Sales, Head of Growth, RevOps")] },
            { cells: [L("Odeljenje", "Department"), L("Sales, marketing, operations, revenue", "Sales, marketing, operations, revenue")] },
            { cells: [L("Growth signal", "Growth signal"), L("Hiring sales uloga, funding, novi market", "Hiring sales roles, new funding, new market launch")] },
            { cells: [L("Tech signal", "Tech signal"), L("HubSpot, Salesforce, Pipedrive, Clay, Apollo", "Uses HubSpot, Salesforce, Pipedrive, Clay, Apollo")] },
            { cells: [L("Pain proxy", "Pain proxy"), L("Job postovi: outbound, demand gen, RevOps, GTM", "Job posts mentioning outbound, demand gen, RevOps, GTM")] },
          ],
        },
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
              "U Lead Agents sistemu sve počinje ICP dokumentom, holy grail koji definiše ponudu, poruke, follow-up i šta ignorišete. Bez toga profil, Outreach, content i CRM rade u različitim pravcima.",
              "Redosled: ICP dokument, zatim LinkedIn profil (5 sekundi jasnoće), cold Outreach preko Sales Navigator-a ili Apollo-a (La Growth Machine, HeyReach, Instantly, Lemlist), buying signali, content iz podcast intervjua (Riverside, Descript, Canva), Thought Leader Ads, CRM sa lead scoring-om.",
              "Ova lekcija je prvi korak u tom nizu. ICP nije marketinška vežba, već filter za ceo Founder-Led Growth sistem: šta founder postuje, kome šalje Outreach, koje signale CRM prati.",
              "Outreach direktno napada ICP. Reklame indirektno šire dokaz. Bez ICP-a, paid i content samo troše vreme.",
            ],
            [
              "In the Lead Agents system, everything starts with the ICP document, the holy grail that defines offer, messages, follow-up, and what you ignore. Without it, profile, Outreach, content, and CRM pull in different directions.",
              "The order: ICP document, then LinkedIn profile (5-second clarity), cold Outreach via Sales Navigator or Apollo (La Growth Machine, HeyReach, Instantly, Lemlist), buying signals, content from podcast interviews (Riverside, Descript, Canva), Thought Leader Ads, CRM with lead scoring.",
              "This lesson is the first step in that sequence. ICP is not a marketing exercise. It is the filter for the entire Founder-Led Growth system: what the founder posts, who gets Outreach, which signals the CRM tracks.",
              "Outreach attacks the ICP directly. Ads spread proof indirectly. Without ICP, paid and content only waste time.",
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
              title: L("B2B kupovina nije linearna", "B2B buying is not linear"),
              body: L(
                "Gartner objašnjava da B2B kupci prolaze kroz nekoliko buying jobs, identifikacija problema, istraživanje rešenja, gradnja zahteva, selekcija dobavljača, i često se vraćaju na te zadatke umesto linearnog koraka-po-korak puta.",
                "Gartner explains that B2B buyers move through several buying jobs, including problem identification, solution exploration, requirements building, and supplier selection. Buyers often revisit these tasks rather than moving step-by-step in a straight line.",
              ),
              sourceLabel: L("Gartner - B2B Buying Journey", "Gartner - B2B Buying Journey"),
              sourceUrl: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
            },
            {
              title: L("ICP je osnova za prospecting i pipeline odluke", "ICP is the foundation for prospecting and pipeline decisions"),
              body: L(
                "Apollo definiše ICP kao tip firme koja najverovatnije kupuje, ostaje i širi se, i treba da vodi prospecting, messaging i pipeline prioritet.",
                "Apollo defines ICP as the type of company most likely to buy, stay, and expand. This should guide prospecting, messaging, and pipeline decisions.",
              ),
              sourceLabel: L("Apollo - ICP Meaning in Sales", "Apollo - ICP Meaning in Sales"),
              sourceUrl: "https://www.apollo.io/insights/icp-meaning-sales",
            },
            {
              title: L("ICP treba aktivirati kroz sales i marketing", "ICP should be activated across sales and marketing"),
              body: L(
                "HubSpot / Clearbit ICP resurs objašnjava da ICP rad pomaže timovima da pronađu i služe idealnim klijentima i da se ažurira kako firma raste.",
                "HubSpot / Clearbit ICP resource explains that ICP work should help sales and marketing teams find and serve ideal customers and should be updated as the business grows.",
              ),
              sourceLabel: L("HubSpot / Clearbit - Ideal Customer Profile Guide", "HubSpot / Clearbit - Ideal Customer Profile Guide"),
              sourceUrl: "https://offers.hubspot.com/ideal-customer-profile-icp",
            },
            {
              title: L("ICP i buyer persona nisu isto", "ICP and buyer persona are different"),
              body: L(
                "HubSpot razlikuje ICP (koja preduzeća vredi kontaktirati) od persona (koji ljudi unutar tih preduzeća).",
                "HubSpot distinguishes ICPs (which companies are worth speaking to) from personas (the people inside those companies).",
              ),
              sourceLabel: L("HubSpot - ICP vs Buyer Persona", "HubSpot - ICP vs Buyer Persona"),
              sourceUrl: "https://blog.hubspot.com/customers/ideal-customer-profiles-and-buyer-personas-are-they-different",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "implement",
      title: L("Kako implementirati", "How to implement"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            ["1. Napravi listu najboljih klijenata"],
            ["1. Build your best-customer list"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kreni od dokaza. Spreadsheet sa 10-20 najboljih klijenata. Popuni kolone i oceni svakog 1-5 po: revenue potential, retention, expansion, speed to close, ease of onboarding, strategic fit, founder-market fit, referral potential.",
            ],
            [
              "Start with evidence. Create a spreadsheet with your best 10-20 customers. Fill in the columns below and score each customer from 1-5 on: revenue potential, retention, expansion, speed to close, ease of onboarding, strategic fit, founder-market fit, referral potential.",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Best-customer analiza", "Best-customer analysis"),
          headers: H(
            ["Klijent", "Industrija", "Veličina", "Prihod", "ACV", "Ciklus", "Retencija", "Glavni bol", "Trigger", "Zašto su kupili"],
            ["Customer", "Industry", "Size", "Revenue range", "ACV", "Sales cycle", "Retention", "Main pain", "Trigger", "Why they bought"],
          ),
          rows: [
            { cells: [L("[ime]", "[name]"), L("[industrija]", "[industry]"), L("[veličina]", "[size]"), L("[opseg]", "[range]"), L("[ACV]", "[ACV]"), L("[ciklus]", "[cycle]"), L("[retencija]", "[retention]"), L("[bol]", "[pain]"), L("[trigger]", "[trigger]"), L("[razlog]", "[reason]")] },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Obrazac koji nađeš je polazna tačka ICP-a, ne konačan odgovor, ali polazna tačka.",
            "The pattern you find is your ICP starting point. Not the final answer. But the starting point.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["2. Napiši ICP u jednoj rečenici"],
            ["2. Write your ICP in one sentence"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Struktura: „Naš ICP je [tip firme] sa [veličina/faza] koja se bori sa [skup problem] i obično je pokrenuta [timing signal].“",
              "Primer: „Naš ICP su B2B SaaS firme 10-50 ljudi gde founder i dalje vodi poverenje i prodaju, ali pipeline postaje previše nepredvidiv da bi se oslanjali na referral-e.“",
              "Primer: „Naš ICP su IT service firme 20-100 ljudi koje prodaju kompleksne projekte i moraju da grade poverenje pre nego što enterprise kupci prihvate poziv.“",
            ],
            [
              "Structure: \"Our ICP is [company type] with [size/stage] that struggles with [expensive problem] and is usually triggered by [timing signal].\"",
              "Example: \"Our ICP is 10-50 person B2B SaaS companies where the founder still drives trust and sales, but pipeline is becoming too unpredictable to rely on referrals.\"",
              "Example: \"Our ICP is IT service companies with 20-100 employees that sell complex projects and need to build trust before enterprise buyers agree to a call.\"",
            ],
          ),
        },
        {
          type: "callout",
          text: L(
            "Ako rečenica deluje preširoko, ICP još nije gotov.",
            "If the sentence feels too broad, it is not done.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["3. Definiši disqualification kriterijume"],
            ["3. Define disqualification criteria"],
          ),
        },
        {
          type: "table",
          caption: L("Loš fit", "Bad fit"),
          headers: H(["Loš fit", "Zašto"], ["Bad fit", "Why"]),
          rows: [
            { cells: [L("Prerano", "Too early"), L("Nema budžeta, sales motion-a, jasne ponude", "No budget, no sales motion, unclear offer")] },
            { cells: [L("Previše enterprise", "Too enterprise"), L("Previše stakeholder-a, spora nabavka, nije founder-led", "Too many stakeholders, slow procurement, not founder-led")] },
            { cells: [L("Pogrešan biznis model", "Wrong business model"), L("Transakcioni ciklus, mali trust requirement", "Transactional sales cycle, low trust requirement")] },
            { cells: [L("Mala hitnost", "Low urgency"), L("Problem iritira ali nije skup", "Problem is annoying but not expensive")] },
            { cells: [L("Nema founder uloge", "No founder involvement"), L("Founder-Led Growth ne radi bez founder POV-a", "Founder-Led Growth cannot work without founder POV")] },
            { cells: [L("Nema operational owner-a", "No operational owner"), L("Niko neće implementirati CRM, content ili outreach workflow", "Nobody will implement CRM, content, or outreach workflow")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["4. Mapiraj bol u content"],
            ["4. Map pain to content"],
          ),
        },
        {
          type: "table",
          caption: L("ICP segment → content", "ICP segment to content"),
          headers: H(["ICP segment", "Bol", "Content ugao", "Founder POV"], ["ICP segment", "Pain", "Content angle", "Founder POV"]),
          rows: [
            { cells: [L("B2B SaaS", "B2B SaaS"), L("Founder i dalje zatvara deal-ove", "Founder still closes most deals"), L("Founder-led pipeline pre SDR hiring-a", "Founder-led pipeline before SDR hiring"), L("Ne skaliraj sales pre nego što razumeš zašto kupci veruju tebi.", "Do not scale sales before you understand why buyers trust you.")] },
            { cells: [L("Agencije", "Agencies"), L("Referral-i su nepredvidivi", "Referrals are inconsistent"), L("Founder ekspertiza u content", "Turning founder expertise into content"), L("Najbolji sales asset je zaglavljen u founder-ovoj glavi.", "Your best sales asset is trapped in your founder's head.")] },
            { cells: [L("IT usluge", "IT services"), L("Dug sales ciklus, mali trust", "Long sales cycle, low trust"), L("Edukacija pre enterprise prodaje", "Education before enterprise sales"), L("Kompleksne usluge traže trust pre procurement-a.", "Complex services need trust before procurement starts.")] },
            { cells: [L("Konsalting", "Consulting firms"), L("Partner-led sales ne skalira", "Partner-led sales does not scale"), L("Thought leadership kao pipeline infrastruktura", "Thought leadership as pipeline infrastructure"), L("Ekspertiza ne sme da nestane posle sales poziva.", "Expertise should not disappear after the sales call.")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["5. Mapiraj bol u outreach"],
            ["5. Map pain to outreach"],
          ),
        },
        {
          type: "table",
          caption: L("Pain → outreach opener", "Pain to outreach opener"),
          headers: H(["Bol", "Trigger", "Outreach opener"], ["Pain", "Trigger", "Outreach opener"]),
          rows: [
            { cells: [L("Founder vodi prodaju", "Founder still drives sales"), L("Founder često postuje, nema jasan sales sistem", "Founder posts often but company has no clear sales system"), L("„Primetio sam da si aktivan na LinkedIn-u i blizu sales motion-a…“", "\"Noticed you're active on LinkedIn and still seem close to the sales motion…\"")] },
            { cells: [L("Prerano SDR hiring", "Hiring SDRs too early"), L("Job post za SDR/BDR", "Job post for SDR / BDR"), L("„Vidim da zapošljavaš SDR-e, obično bolje kad je founder poruka već dokazana…“", "\"Saw you're hiring SDRs, usually that works better once the founder-led message is already proven…\"")] },
            { cells: [L("Slab outbound reply", "Weak outbound replies"), L("Komentar na outbound post", "Comments on outbound-related post"), L("„Video sam komentar o reply rate-ovima, isti obrazac kod nas…“", "\"Saw your comment about outbound reply rates. We're seeing the same pattern…\"")] },
            { cells: [L("CRM haos", "CRM chaos"), L("RevOps ili HubSpot engagement", "RevOps or HubSpot content engagement"), L("„Pomenuo si CRM handoff, tu se gubi topli founder-led interest…“", "\"You mentioned CRM handoff in the thread. That's usually where warm founder-led interest gets lost…\"")] },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Outreach treba da deluje kao sledeći logičan korak, ne pitch iz niotkuda.",
            "Outreach should feel like the next logical step. Not a pitch from nowhere.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["6. Napravi ICP search filtere"],
            ["6. Build the ICP search filters"],
          ),
        },
        {
          type: "table",
          caption: L("Sales Navigator filteri (primer)", "Example Sales Navigator filter set"),
          headers: H(["Filter", "Primer"], ["Filter", "Example"]),
          rows: [
            { cells: [L("Geografija", "Geography"), L("US, UK, Europa", "United States, United Kingdom, Europe")] },
            { cells: [L("Industrija", "Industry"), L("Software Development, IT Services, Marketing Services, Business Consulting", "Software Development, IT Services, Marketing Services, Business Consulting")] },
            { cells: [L("Headcount", "Company headcount"), L("11-50, 51-200", "11-50, 51-200")] },
            { cells: [L("Seniority", "Seniority"), L("Owner, Founder, CXO, VP", "Owner, Founder, CXO, VP")] },
            { cells: [L("Funkcija", "Function"), L("Sales, Marketing, Operations, Business Development", "Sales, Marketing, Operations, Business Development")] },
            { cells: [L("Keywords", "Keywords"), L("outbound, pipeline, GTM, demand generation, LinkedIn, sales system", "outbound, pipeline, GTM, demand generation, LinkedIn, sales system")] },
            { cells: [L("Aktivnost", "Recent activity"), L("Post na LinkedIn-u u poslednjih 30 dana", "Posted on LinkedIn in last 30 days")] },
          ],
        },
        {
          type: "table",
          caption: L("Apollo filteri (primer)", "Example Apollo filter set"),
          headers: H(["Filter", "Primer"], ["Filter", "Example"]),
          rows: [
            { cells: [L("Veličina", "Company size"), L("11-50 / 51-200", "11-50 / 51-200")] },
            { cells: [L("Industrija", "Industry"), L("B2B SaaS, consulting, agencije, IT usluge", "B2B SaaS, consulting, agencies, IT services")] },
            { cells: [L("Titula", "Job title"), L("Founder, CEO, VP Sales, Head of Growth, RevOps", "Founder, CEO, VP Sales, Head of Growth, RevOps")] },
            { cells: [L("Tehnologije", "Technologies"), L("HubSpot, Salesforce, Apollo, Outreach, Salesloft", "HubSpot, Salesforce, Apollo, Outreach, Salesloft")] },
            { cells: [L("Hiring signali", "Hiring signals"), L("SDR, BDR, Demand Gen, RevOps", "SDR, BDR, Demand Gen, RevOps")] },
            { cells: [L("Keywords", "Keywords"), L("pipeline, outbound, founder-led, GTM", "pipeline, outbound, founder-led, GTM")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["7. Dodaj ICP scoring"],
            ["7. Add ICP scoring"],
          ),
        },
        {
          type: "table",
          caption: L("100-poena ICP model", "100-point ICP scoring model"),
          headers: H(["Faktor", "Poeni"], ["Factor", "Points"]),
          rows: [
            { cells: [L("Odgovara target industriji", "Fits target industry"), L("15", "15")] },
            { cells: [L("Odgovara veličini firme", "Fits company size"), L("15", "15")] },
            { cells: [L("Ima skup problem", "Has expensive pain"), L("20", "20")] },
            { cells: [L("Ima timing trigger", "Has timing trigger"), L("20", "20")] },
            { cells: [L("Founder/exec aktivan na LinkedIn-u", "Founder / exec is active on LinkedIn"), L("10", "10")] },
            { cells: [L("Koristi relevantne alate", "Uses relevant tools"), L("5", "5")] },
            { cells: [L("Jasan buying committee", "Has clear buying committee"), L("5", "5")] },
            { cells: [L("Indikator budžeta", "Has budget indicator"), L("5", "5")] },
            { cells: [L("Engage-ovao sa content-om", "Has engaged with content"), L("5", "5")] },
          ],
        },
        {
          type: "table",
          caption: L("Interpretacija skora", "Score interpretation"),
          headers: H(["Skor", "Značenje", "Akcija"], ["Score", "Meaning", "Action"]),
          rows: [
            { cells: [L("80-100", "80-100"), L("High-fit account", "High-fit account"), L("Prioritet engagement i kontekstualan outreach", "Prioritize engagement and contextual outreach")] },
            { cells: [L("60-79", "60-79"), L("Good-fit account", "Good-fit account"), L("Nurture i prati signale", "Add to nurture and monitor signals")] },
            { cells: [L("40-59", "40-59"), L("Mogući fit", "Possible fit"), L("Lagani engagement, ne preinvestiraj", "Engage lightly, do not over-invest")] },
            { cells: [L("Ispod 40", "Under 40"), L("Nizak fit", "Low fit"), L("Ignoriši ili drži van kampanja", "Ignore or keep out of campaigns")] },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Scoring drži founder fokusiranog na prave account-e.",
            "This keeps the founder focused on the right accounts.",
          ),
        },
        {
          type: "table",
          caption: L("CRM polja za ICP", "CRM fields for ICP"),
          headers: H(["CRM polje", "Svrha"], ["CRM field", "Purpose"]),
          rows: [
            { cells: [L("ICP fit", "ICP fit"), L("High, medium, low", "High, medium, low")] },
            { cells: [L("ICP segment", "ICP segment"), L("SaaS, agencija, consulting, IT usluge…", "SaaS, agency, consulting, IT services, etc.")] },
            { cells: [L("Primary pain", "Primary pain"), L("Pipeline, outbound, content, CRM, webinar, intent", "Pipeline, outbound, content, CRM, webinar, intent signals")] },
            { cells: [L("Buying committee role", "Buying committee role"), L("Economic buyer, champion, evaluator, blocker", "Economic buyer, champion, evaluator, blocker")] },
            { cells: [L("Trigger", "Trigger"), L("Hiring, funding, webinar, engagement, website visit", "Hiring, funding, webinar, engagement, website visit")] },
            { cells: [L("Signal level", "Signal level"), L("Light, medium, strong", "Light, medium, strong")] },
            { cells: [L("Next best action", "Next best action"), L("Engage, nurture, outreach, book call, send asset", "Engage, nurture, outreach, book call, send asset")] },
          ],
        },
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
              name: "HubSpot ICP Template",
              usedFor: L("Strukturisana ICP dokumentacija", "Create structured ICP documentation"),
              whyItFits: L(
                "Pomaže da haotičan customer insight postane upotrebljiv profil.",
                "Good for turning messy customer insight into a usable profile.",
              ),
              alternative: L("Notion, Google Docs", "Notion, Google Docs"),
            },
            {
              name: "LinkedIn Sales Navigator",
              logo: "/images/sales-tools/linkedin-sales-navigator.png",
              usedFor: L("Saved search i target account liste", "Build saved searches and target account lists"),
              whyItFits: L(
                "Najbolje za founder-led LinkedIn targetiranje i engagement liste.",
                "Best for founder-led LinkedIn targeting and engagement lists.",
              ),
              alternative: L("Apollo, ručna LinkedIn pretraga", "Apollo, manual LinkedIn search"),
            },
            {
              name: "Apollo",
              slug: "apollo",
              usedFor: L("ICP filteri i prospecting liste", "Turn ICP into prospecting filters and lead lists"),
              whyItFits: L(
                "Korisno za outreach-ready account i contact podatke.",
                "Useful for outreach-ready account and contact data.",
              ),
              alternative: L("ZoomInfo, Cognism, Clay", "ZoomInfo, Cognism, Clay"),
            },
            {
              name: "Clay",
              slug: "clay",
              usedFor: L("Enrichment accounta i ICP triggeri", "Enrich accounts and identify ICP triggers"),
              whyItFits: L(
                "Dobar za signal-based targetiranje i account research.",
                "Good for signal-based targeting and account research.",
              ),
              alternative: L("Airtable + ručni research", "Airtable + manual research"),
            },
            {
              name: "Google Sheets",
              logo: "/images/sales-tools/google-sheets.png",
              usedFor: L("Scoring accounta i customer pattern analiza", "Score accounts and compare customer patterns"),
              whyItFits: L(
                "Jednostavan i fleksibilan za rani ICP rad.",
                "Simple and flexible for early ICP work.",
              ),
              alternative: L("Airtable, Notion", "Airtable, Notion"),
            },
            {
              name: "HubSpot / Pipedrive",
              slug: "hubspot",
              usedFor: L("ICP fit, pain, source, trigger, stage", "Track ICP fit, pain, source, trigger, and stage"),
              whyItFits: L(
                "Pretvara ICP u CRM disciplinu.",
                "Turns ICP into CRM discipline.",
              ),
              alternative: L("Attio, Folk, Salesforce", "Attio, Folk, Salesforce"),
            },
          ],
        },
        { type: "video", video: video4 },
      ],
    },
    {
      type: "section",
      id: "workflow",
      title: L("Primer workflow-a", "Workflow example"),
      blocks: [
        {
          type: "workflow",
          title: L("Od ICP-a do Founder-Led Growth sistema", "From ICP to Founder-Led Growth system"),
          steps: P(
            [
              "Pregledaj najbolje klijente.",
              "Identifikuj zajedničke crte firmi.",
              "Definiši skup problem.",
              "Mapiraj buying committee.",
              "Definiši timing triggere.",
              "Pretvori bolove u content pilare.",
              "Pretvori triggere u outreach openere.",
              "Napravi Sales Navigator i Apollo filtere.",
              "Oceni account-e po ICP fit-u.",
              "Dodaj ICP polja u CRM.",
              "Svake nedelje pregledaj kvalitet pipeline-a.",
            ],
            [
              "Review your best customers.",
              "Identify the shared company traits.",
              "Define the expensive problem.",
              "Map the buying committee.",
              "Define timing triggers.",
              "Turn pains into content pillars.",
              "Turn triggers into outreach openers.",
              "Build Sales Navigator and Apollo filters.",
              "Score accounts by ICP fit.",
              "Add ICP fields to CRM.",
              "Review pipeline quality every week.",
            ],
          ),
          highlight: L(
            "Tako ICP postaje operativan, ne slajd, ne persona dokument, već sistem za odlučivanje ko dobija pažnju.",
            "This is how ICP becomes operational. Not a slide. Not a persona document. A system for deciding who gets attention.",
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
              title: L("ICP Targeting Map", "ICP Targeting Map"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "Founder sužava široko tržište u precizan best-fit segment, pa povezuje content, outreach, CRM i pipeline.",
                "A founder narrowing a broad market into a precise best-fit segment, then connecting it to content, outreach, CRM, and pipeline.",
              ),
            },
            {
              title: L("Best-fit Account → Buyer Pain → Founder POV → Signal → Channel → Sales Motion", "Best-fit Account → Buyer Pain → Founder POV → Signal → Channel → Sales Motion"),
              placement: L("Pre okvira", "Before framework section"),
              description: L(
                "ICP workflow od definicije account-a do revenue motion-a.",
                "The ICP workflow from account definition to revenue motion.",
              ),
            },
            {
              title: L("ICP vs Persona vs Buying Committee", "ICP vs Persona vs Buying Committee"),
              placement: L("Core / vs-persona sekcija", "Core idea section"),
              description: L(
                "Razlika između account-level targetiranja, people-level messaging-a i committee influence.",
                "Difference between account-level targeting, people-level messaging, and committee-level influence.",
              ),
            },
            {
              title: L("ICP Readiness Checklist", "ICP Readiness Checklist"),
              placement: L("Pre finalne čekliste", "Before final checklist"),
              description: L(
                "Minimum podataka pre launch-a Founder-Led Growth aktivnosti.",
                "The minimum data needed before launching Founder-Led Growth.",
              ),
            },
            {
              title: L("ICP Fit Score", "ICP Fit Score"),
              placement: L("ICP scoring sekcija", "ICP scoring section"),
              description: L(
                "Jednostavan 100-poena model ocene account-a.",
                "A simple 100-point account scoring model.",
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
          title: L("Čeklista Lekcije 2", "Lesson 2 checklist"),
          items: P(
            [
              "Lista 10-20 najboljih klijenata.",
              "Ocena svakog po revenue, retention, ease of sale, delivery fit, referral.",
              "ICP u jednoj rečenici.",
              "Bar 5 disqualification kriterijuma.",
              "Mapa buying committee za ICP.",
              "5-10 timing triggera.",
              "3-5 content pilara iz ICP bolova.",
              "Outreach openeri iz triggera.",
              "Jedan saved search u Sales Navigator ili Apollo.",
              "ICP fit i signal level polja u CRM-u.",
              "Jednostavan 100-poena ICP scoring model.",
              "Provera da li trenutni pipeline odgovara ICP-u.",
            ],
            [
              "List your 10-20 best customers.",
              "Score each customer by revenue, retention, ease of sale, delivery fit, and referral potential.",
              "Write your ICP in one sentence.",
              "Define at least 5 disqualification criteria.",
              "Map the buying committee for your ICP.",
              "Identify 5-10 timing triggers.",
              "Turn ICP pains into 3-5 content pillars.",
              "Turn ICP triggers into outreach openers.",
              "Build one Sales Navigator or Apollo saved search.",
              "Add ICP fit and signal level fields to your CRM.",
              "Create a simple 100-point ICP scoring model.",
              "Review whether your current pipeline matches your ICP.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "template",
      title: L("Šablon: ICP Definition Template", "Template / swipe file"),
      blocks: [
        {
          type: "template",
          title: L("Kopiraj i popuni", "Copy and fill in"),
          content: L(
            `1. ICP one-liner

Naš ICP je:
[tip firme] sa [veličina/faza] koja se bori sa [skup problem] i obično je pokrenuta [timing signal].

Primer:
Naš ICP su B2B SaaS firme 10-50 ljudi gde founder i dalje vodi poverenje i prodaju, ali pipeline postaje previše nepredvidiv da bi se oslanjali na referral-e.

2. Best-fit company traits

Industrija: [B2B SaaS, IT usluge, consulting, agencije]
Veličina: [10-50 zaposlenih]
Opseg prihoda: [$1M-$10M]
Biznis model: [visokotiketna B2B usluga, SaaS godišnji ugovori…]
Sales ciklus: [30-120 dana]
ACV / deal: [$5k-$50k]

3. Skup problem

Kupac se bori sa:
[problem na jeziku kupca]

Skupo je jer:
[cena neaktivnosti]

4. Buying committee

Economic buyer: [uloga]
Champion: [uloga]
User: [uloga]
Technical evaluator: [uloga]
Blocker: [uloga]
Budget approver: [uloga]

5. Timing triggeri

Jaki: [trigger 1], [trigger 2], [trigger 3]
Srednji: [trigger 1], [trigger 2]
Light: [trigger 1], [trigger 2]

6. Disqualification

Ne targetiramo firme koje:
- [razlog 1]
- [razlog 2]
- [razlog 3]

7. Content pilari

Pilar 1: [edukacija problema]
Pilar 2: [founder POV]
Pilar 3: [dokaz / praktičan breakdown]
Pilar 4: [buying criteria]

8. Outreach ugao

Kada neko pokaže signal: [signal]
Poruka: [kontekstualan opener]

9. CRM polja

Dodaj: ICP fit, ICP segment, Primary pain, Buying committee role, Trigger, Signal level, Source, Next best action

10. ICP score

Industry fit: __/15
Company size fit: __/15
Pain fit: __/20
Trigger fit: __/20
Founder activity: __/10
Tool / tech fit: __/5
Buying committee clarity: __/5
Budget indicator: __/5
Engagement: __/5
Ukupno: __/100`,
            `1. ICP one-liner

Our ICP is:
[company type] with [size/stage] that struggles with [expensive problem] and is usually triggered by [timing signal].

Example:
Our ICP is 10-50 person B2B SaaS companies where the founder still drives trust and sales, but pipeline is becoming too unpredictable to rely on referrals.

2. Best-fit company traits

Industry: [example: B2B SaaS, IT services, consulting, agencies]
Company size: [example: 10-50 employees]
Revenue range: [example: $1M-$10M ARR/revenue]
Business model: [example: high-ticket B2B service, SaaS with annual contracts]
Sales cycle: [example: 30-120 days]
ACV / deal size: [example: $5k-$50k]

3. Expensive problem

The buyer is struggling with:
[problem in their language]

This is expensive because:
[cost of inaction]

4. Buying committee

Economic buyer: [role]
Champion: [role]
User: [role]
Technical evaluator: [role]
Blocker: [role]
Budget approver: [role]

5. Timing triggers

Strong triggers: [trigger 1], [trigger 2], [trigger 3]
Medium triggers: [trigger 1], [trigger 2]
Light triggers: [trigger 1], [trigger 2]

6. Disqualification criteria

We should not target companies that:
- [bad fit reason 1]
- [bad fit reason 2]
- [bad fit reason 3]

7. Content pillars

Pillar 1: [buyer pain / education]
Pillar 2: [founder point of view]
Pillar 3: [proof / practical breakdown]
Pillar 4: [buying criteria / decision help]

8. Outreach angle

When someone shows this signal: [signal]
Send this type of message: [contextual opener]

9. CRM fields

Add: ICP fit, ICP segment, Primary pain, Buying committee role, Trigger, Signal level, Source, Next best action

10. ICP score

Industry fit: __/15
Company size fit: __/15
Pain fit: __/20
Trigger fit: __/20
Founder activity: __/10
Tool / tech fit: __/5
Buying committee clarity: __/5
Budget indicator: __/5
Engagement: __/5
Total: __/100`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Šta je ICP u Founder-Led Growth-u?", "What is an ICP in Founder-Led Growth?"),
      answer: L(
        "ICP je tip firme koja najverovatnije oseća bol koji rešavaš, veruje founder POV-u, engage-uje se sa content-om, odgovara na outreach i postaje profitabilan pipeline. Nije samo demografski profil, to je filter za ceo sistem.",
        "An ICP is the type of company most likely to feel the pain you solve, trust your founder's point of view, engage with your content, respond to your outreach, and become profitable pipeline. It is not just a demographic profile. It is the targeting filter for the entire system.",
      ),
    },
    {
      question: L("Razlika između ICP-a i buyer persone?", "What is the difference between ICP and buyer persona?"),
      answer: L(
        "ICP definiše firmu. Persona definiše ljude unutar firme. Primer ICP: B2B SaaS 10-50 ljudi gde founder i dalje vodi prodaju. Persone: Founder, VP Sales, Head of Growth, RevOps. Treba oba, ali ICP dolazi prvi.",
        "Your ICP defines the company. Your buyer persona defines the people inside that company. Example ICP: B2B SaaS companies with 10-50 employees where the founder still drives sales. Buyer personas: Founder, VP Sales, Head of Growth, RevOps Lead. You need both. But the ICP comes first.",
      ),
    },
    {
      question: L("Koliko specifičan treba da bude ICP?", "How specific should my ICP be?"),
      answer: L(
        "Dovoljno specifičan da možeš da napraviš: content teme, engagement liste, Sales Navigator pretrage, Apollo filtere, webinar teme, outreach openere i CRM polja. Ako ICP ne može da postane lista, previše je vague.",
        "Specific enough that you can build: content topics, engagement lists, Sales Navigator searches, Apollo filters, webinar topics, outreach openers, and CRM fields. If your ICP cannot become a list, it is too vague.",
      ),
    },
    {
      question: L("Može li više od jednog ICP-a?", "Can I have more than one ICP?"),
      answer: L(
        "Da, ali ne počinji sa previše. Za većinu ranih Founder-Led Growth sistema: jedan primarni i jedan sekundarni ICP. Pet segmenata odjednom čini content i outreach generičnim. Prvo fokus, pa širenje.",
        "Yes, but do not start with too many. For most early Founder-Led Growth systems, start with one primary ICP and one secondary ICP. If you target five segments at once, your content and outreach will become generic. Focus first. Expand later.",
      ),
    },
    {
      question: L("Kako znam da je ICP pogrešan?", "How do I know if my ICP is wrong?"),
      answer: L(
        "Verovatno je pogrešan ako: content privlači nasumičan engagement; outreach dobija odgovore od lošeg fit-a; sales pozivi su niskog kvaliteta; kupci ne razumeju bol; deal-ovi stoje zbog slabe hitnosti; brz churn; CRM pun kontakata bez pipeline-a. Najbrži signal je kvalitet pipeline-a, ne impresije.",
        "Your ICP is probably wrong if: content attracts random engagement; outreach gets replies from bad-fit accounts; sales calls are low-quality; prospects do not understand the pain; deals stall because urgency is weak; customers churn quickly; CRM is full of contacts that never become pipeline. The fastest signal is pipeline quality. Not impressions.",
      ),
    },
    {
      question: L("ICP na osnovu postojećih ili budućih klijenata?", "Should ICP be based on existing customers or future strategy?"),
      answer: L(
        "Oba, kreni od postojećih klijenata jer daju dokaz, pa prilagodi strategijskom smeru. Ali ne pravi ICP samo iz mašte; tržište mora da validira.",
        "Both. Start with existing customers because they give you evidence. Then adjust based on strategic direction. But do not create an ICP only from imagination. The market has to validate it.",
      ),
    },
  ],
  sources: [
    { title: L("Gartner - B2B Buying Journey", "Gartner - B2B Buying Journey"), url: "https://www.gartner.com/en/sales/insights/b2b-buying-journey" },
    { title: L("HubSpot / Clearbit - Ideal Customer Profile Guide", "HubSpot / Clearbit - Ideal Customer Profile Guide"), url: "https://offers.hubspot.com/ideal-customer-profile-icp" },
    { title: L("HubSpot - ICP vs Buyer Persona", "HubSpot - ICP vs Buyer Persona"), url: "https://blog.hubspot.com/customers/ideal-customer-profiles-and-buyer-personas-are-they-different" },
    { title: L("Apollo - ICP Meaning in Sales", "Apollo - ICP Meaning in Sales"), url: "https://www.apollo.io/insights/icp-meaning-sales" },
    { title: L("Apollo Knowledge Base - Identify Your Ideal Customer Profile", "Apollo Knowledge Base - Identify Your Ideal Customer Profile"), url: "https://knowledge.apollo.io/hc/en-us/articles/4416471135245-Identify-Your-Ideal-Customer-Profile-ICP" },
    { title: L("Cognism - How to Create an Ideal Customer Profile", "Cognism - How to Create an Ideal Customer Profile"), url: "https://www.cognism.com/blog/ideal-customer-profile" },
    { title: L("Forrester - B2B Buyer Personas", "Forrester - B2B Buyer Personas"), url: "https://www.forrester.com/blogs/your-buyers-are-evolving-and-you-should-follow-eu/" },
    { title: L("FullFunnel - Ideal Customer Profile Guide", "FullFunnel - Ideal Customer Profile Guide"), url: "https://fullfunnel.io/ideal-customer-profile/" },
  ],
  relatedLessons: {
    previous: {
      slug: "what-founder-led-growth-is",
      title: L(
        "Lekcija 1 - Šta je Founder-Led Growth",
        "Lesson 1 - What Founder-Led Growth Is and Why It Works for B2B Companies",
      ),
    },
    next: {
      slug: "linkedin-profile-optimization-founder",
      title: L(
        "Lekcija 3 - LinkedIn profil founder-a",
        "Lesson 3 - How to Optimize a Founder's LinkedIn Profile for B2B Lead Generation",
      ),
      note: L(
        "Pretvori profil u landing stranicu za ICP.",
        "Turn the profile into a buyer-facing landing page for your ICP.",
      ),
    },
    related: [
      {
        slug: "linkedin-content-strategy-founder",
        title: L("Lekcija 4 - LinkedIn content strategija", "Lesson 4 - How to Build a LinkedIn Content Strategy for a Founder"),
      },
      {
        slug: "linkedin-commenting-strategy",
        title: L("Lekcija 6 - LinkedIn komentarisanje", "Lesson 6 - How to Use LinkedIn Commenting to Get Visibility With Your ICP"),
      },
      {
        slug: "linkedin-engagement-outreach-list",
        title: L("Lekcija 7 - Engagement u outreach listu", "Lesson 7 - How to Turn LinkedIn Engagement Into an Outreach List"),
      },
      {
        slug: "crm-za-founder-led-growth",
        title: L("Lekcija 10 - CRM za Founder-Led Growth", "Lesson 10 - How to Track Founder-Led Growth Activities in Your CRM"),
      },
      {
        slug: "buying-signals-b2b-sales",
        title: L("Lekcija 11 - Buying signals", "Lesson 11 - What Buying Signals Are and How to Use Them in B2B Sales"),
      },
    ],
  },
  cta: {
    title: L(
      "ICP nije marketinška vežba",
      "Your ICP is not a marketing exercise",
    ),
    body: L(
      "To je filter za ceo Founder-Led Growth sistem. Ako ga definišeš kako treba, content postaje oštriji, LinkedIn engagement fokusiraniji, outreach relevantniji, webinari privlače bolje leadove, CRM je lakši, pipeline čistiji. Ako preskočiš ICP, svaki sledeći korak postaje bučniji. Sledeća lekcija pokazuje kako LinkedIn profil founder-a postaje landing stranica koja govori direktno ovom ICP-u.",
      "It is the filter for the entire Founder-Led Growth system. If you define it properly, your content gets sharper, your LinkedIn engagement gets more focused, your outreach gets more relevant, your webinars attract better leads, your CRM becomes easier to manage, and your pipeline becomes cleaner. If you skip it, every next step gets noisier. The next lesson shows how to turn the founder's LinkedIn profile into a buyer-facing landing page that speaks directly to this ICP.",
    ),
    primaryLabel: L("Nastavi na Lekciju 3", "Continue to Lesson 3"),
    secondaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
  },
  seoKeywords: P(
    [
      "ICP za founder-led growth",
      "ideal customer profile",
      "B2B ICP",
      "ICP za LinkedIn outreach",
      "founder-led sales ICP",
      "B2B customer profile",
      "ICP framework",
      "B2B lead generation targeting",
      "sales targeting strategy",
      "LinkedIn Sales Navigator ICP",
      "definisanje ICP-a",
      "idealni klijent B2B",
    ],
    [
      "ICP for founder-led growth",
      "ideal customer profile",
      "B2B ICP",
      "ICP for LinkedIn outreach",
      "founder-led sales ICP",
      "B2B customer profile",
      "ICP framework",
      "B2B lead generation targeting",
      "sales targeting strategy",
      "LinkedIn Sales Navigator ICP",
    ],
  ),
};
