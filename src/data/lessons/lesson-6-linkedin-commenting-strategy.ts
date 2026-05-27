import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("How Comments on LinkedIn Now Drive Massive Reach", "How Comments on LinkedIn Now Drive Massive Reach"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Objašnjava zašto komentari mogu da stvore vidljivost i kako smisleni komentari podržavaju LinkedIn rast.",
    "Explains why comments can create visibility and how meaningful comments can support LinkedIn growth.",
  ),
  placementNote: L(
    "Pogledaj posle sekcije osnovne ideje ili u video materijalima.",
    "Watch after the core idea section or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/c9vkQ-wxle4",
  watchUrl: "https://www.youtube.com/watch?v=c9vkQ-wxle4",
};

const video2 = {
  title: L("Brutally Honest Advice About LinkedIn Growth in 19 Mins", "Brutally Honest Advice About LinkedIn Growth in 19 Mins"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za razumevanje LinkedIn rasta van postovanja, uključujući angažman i gradnju odnosa.",
    "Useful for understanding LinkedIn growth beyond posting, including engagement and relationship-building.",
  ),
  placementNote: L(
    "Pogledaj posle poređenja sa nasumičnim angažmanom ili u video materijalima.",
    "Watch after the vs-random comparison or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/2XeAckxuAKM",
  watchUrl: "https://www.youtube.com/watch?v=2XeAckxuAKM",
};

const video3 = {
  title: L("LinkedIn Growth Tips Every B2B CEO and Founder Needs to Know", "LinkedIn Growth Tips Every B2B CEO and Founder Needs to Know"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Relevantno za B2B founder-e koji žele da LinkedIn koriste dosledno za vidljivost i pipeline.",
    "Relevant for B2B founders who want to use LinkedIn consistently for visibility and pipeline.",
  ),
  placementNote: L(
    "Pogledaj posle okvira komentarisanja ili u video materijalima.",
    "Watch after the commenting framework or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/kW1B3IP-9p0",
  watchUrl: "https://www.youtube.com/watch?v=kW1B3IP-9p0",
};

const video4 = {
  title: L("LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips", "LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za izgradnju target lista i pronalaženje pravih ICP kupaca za angažman.",
    "Useful for building target lists and finding the right ICP buyers to engage with.",
  ),
  placementNote: L(
    "Pogledaj posle Sales Navigator-a u sekciji alata ili u video materijalima.",
    "Watch after Sales Navigator in the tools section or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/8vnfIsGc2_g",
  watchUrl: "https://www.youtube.com/watch?v=8vnfIsGc2_g",
};

export const lesson6RichContent: RichLessonContent = {
  meta: {
    stage: L("Motor angažmana", "Engagement Engine"),
    readingTime: L("14-18 min", "14-18 min"),
    difficulty: L("Početnik do srednjeg nivoa", "Beginner to intermediate"),
    outcome: L(
      "Izgradićeš ponovljivu LinkedIn strategiju komentarisanja koja čini founder-a vidljivim kod pravih kupaca, pokreće odnose pre outreach-a i stvara tople signale za pipeline sistem.",
      "Build a repeatable LinkedIn commenting strategy that gets the founder visible with the right buyers, starts relationships before outreach, and creates warm signals for the pipeline system.",
    ),
    recommendedTools: L(
      "LinkedIn, LinkedIn Sales Navigator, Notion, Google Sheets, Taplio, AuthoredUp, HubSpot CRM, Pipedrive",
      "LinkedIn, LinkedIn Sales Navigator, Notion, Google Sheets, Taplio, AuthoredUp, HubSpot CRM, Pipedrive",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 6", "Lesson 6"),
    title: L(
      "Kako koristiti LinkedIn komentarisanje za vidljivost kod ICP-a",
      "How to Use LinkedIn Commenting for Visibility With Your ICP",
    ),
    paragraphs: P(
      [
        "Većina founder-a komentarisanje tretira kao naknadnu misao.",
        "Objave post.",
        "Čekaju.",
        "Proveravaju lajkove.",
        "Idu dalje.",
        "A pritom ignorišu jedan od najpotcenjenijih delova Founder-Led Growth-a:",
        "Komentarisanje na pravim postovima, od pravih ljudi, pre slanja prve poruke.",
        "Dobar komentar može ono što hladan DM ne može.",
        "Može učiniti founder-a vidljivim bez prekidanja.",
        "Može pokazati ekspertizu bez pitch-a.",
        "Može pokrenuti odnos bez traženja vremena.",
        "Može stvoriti prepoznatljivost pre outreach-a.",
        "Može pretvoriti nepoznatog u topu konverzaciju.",
        "Većina founder-a ovo pogrešno radi.",
        "Komentarišu nasumično.",
        "„Odličan post.“",
        "„Potpuno se slažem.“",
        "„Sviđa mi se.“",
        "To nije angažman.",
        "To je šum.",
        "Strateško komentarisanje je drugačije.",
        "Ne radi se o tome da budeš svuda.",
        "Radi se o tome da se dosledno pojavljuješ tamo gde tvoj ICP već obraća pažnju.",
        "Cilj je jednostavan:",
        "Postani prepoznatljiv pre nego što zatražiš razgovor.",
        "Jer kad prva poruka stigne posle korisne vidljivosti, ne deluje hladno.",
        "Deluje kao nastavak.",
      ],
      [
        "Most founders treat commenting like an afterthought.",
        "They post.",
        "They wait.",
        "They check likes.",
        "They move on.",
        "But they ignore one of the most underrated parts of Founder-Led Growth:",
        "Commenting on the right posts, from the right people, before sending the first message.",
        "A good comment can do what a cold DM cannot.",
        "It can make the founder visible without interrupting.",
        "It can show expertise without pitching.",
        "It can start a relationship without asking for time.",
        "It can create familiarity before outreach.",
        "It can turn a stranger into a warm conversation.",
        "Most founders get this wrong.",
        "They comment randomly.",
        "\"Great post.\"",
        "\"Totally agree.\"",
        "\"Love this.\"",
        "That is not engagement.",
        "That is noise.",
        "Strategic commenting is different.",
        "It is not about being everywhere.",
        "It is about showing up consistently where your ICP already pays attention.",
        "The goal is simple:",
        "Become familiar before you ask for a conversation.",
        "Because when the first message arrives after useful visibility, it does not feel cold.",
        "It feels like a continuation.",
      ],
    ),
    callout: L(
      "Strategija komentarisanja koja gradi odnose pre nego što pošalješ prvu poruku.",
      "A commenting strategy that builds relationships before you send the first message.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vs-random", title: L("Strateško vs nasumično komentarisanje", "Strategic commenting vs random engagement") },
    { id: "commenting-framework", title: L("Okvir komentarisanja", "Commenting framework") },
    { id: "commenting-steps", title: L("Korak po korak strategija", "Step-by-step commenting strategy") },
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
              "koristiti LinkedIn komentarisanje kao deo Founder-Led Growth-a;",
              "napraviti listu ICP-relevantnih ljudi i naloga za angažman;",
              "odlučiti gde komentarisati, a gde ne trošiti vreme;",
              "pisati komentare koji stvaraju vidljivost i poverenje;",
              "izbeći niskovredne komentare tipa „odličan post“;",
              "koristiti komentare za validaciju buyer bola i content tema;",
              "pretvoriti komentare u tople outreach triggere;",
              "pratiti aktivnost komentarisanja u CRM-u;",
              "kreirati dnevni ritam komentarisanja koji founder može da održi.",
            ],
            [
              "use LinkedIn commenting as part of Founder-Led Growth;",
              "build a list of ICP-relevant people and accounts to engage with;",
              "decide where to comment and where not to waste time;",
              "write comments that create visibility and trust;",
              "avoid low-value \"nice post\" comments;",
              "use comments to validate buyer pain and content topics;",
              "turn comments into warm outreach triggers;",
              "track commenting activity in CRM;",
              "create a daily commenting rhythm that founders can actually maintain.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Tim u razgovoru - LinkedIn komentari su javni trust touchpoint-i",
            "Team in conversation - LinkedIn comments are public trust touchpoints",
          ),
          caption: L(
            "Komentar nije pozadinska aktivnost. To je ulazak u razgovore koje tvoj ICP već prati.",
            "Commenting is not a background task. It is entering conversations your ICP already watches.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Komentar u Founder-Led Growth sistemu", "Comment in the Founder-Led Growth system"),
          subtitle: L(
            "Vidljivost pre poruke, outreach zatim deluje kao nastavak, ne prekid.",
            "Visibility before the message, outreach then feels like a continuation, not an interruption.",
          ),
          stages: [
            L("ICP post", "ICP post"),
            L("Komentar", "Comment"),
            L("Prepoznatljivost", "Familiarity"),
            L("Signal", "Signal"),
            L("DM", "DM"),
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
              "Founder-Led Growth nije samo objavljivanje content-a.",
              "To je ulazak u svet kupca.",
              "Tvoj ICP već čita postove.",
              "Prati industrijske eksperte.",
              "Reaguje na probleme.",
              "Postavlja pitanja u komentarima.",
              "Gleda ko daje korisne odgovore.",
              "Ako founder objavljuje samo na svom profilu, čeka da tržište dođe do njega.",
              "Komentarisanje to okreće.",
              "Pomaže founder-u da se pojavi u razgovorima koji ICP-u već znače.",
              "LinkedIn definiše social selling kao korišćenje društvenih mreža za povezivanje i gradnju odnosa sa prospect-ima. LinkedIn Social Selling Index (SSI) gradi se na četiri stuba: profesionalni brend, pronalaženje pravih ljudi, angažman kroz uvide i gradnja odnosa.",
              "Komentarisanje podržava sva četiri.",
              "Pomaže founder-u da pokaže ekspertizu.",
              "Pomaže founder-u da se angažuje sa pravim ljudima.",
              "Stvara relationship touchpoint-e.",
              "Čini budući outreach toplijim.",
              "Zato komentarisanje nije vanity aktivnost.",
              "To je relationship infrastruktura.",
            ],
            [
              "Founder-Led Growth is not just publishing content.",
              "It is entering the buyer's world.",
              "Your ICP is already reading posts.",
              "They are following industry experts.",
              "They are reacting to problems.",
              "They are asking questions in comments.",
              "They are watching who gives useful answers.",
              "If the founder only posts on their own profile, they are waiting for the market to come to them.",
              "Commenting flips that.",
              "It helps the founder show up inside conversations the ICP already cares about.",
              "LinkedIn defines social selling as using social networks to connect and build relationships with prospects. LinkedIn's Social Selling Index is built around four pillars: establishing a professional brand, finding the right people, engaging with insights, and building relationships.",
              "Commenting supports all four.",
              "It helps the founder show expertise.",
              "It helps the founder engage with the right people.",
              "It creates relationship touchpoints.",
              "It makes future outreach warmer.",
              "This is why commenting is not a vanity activity.",
              "It is relationship infrastructure.",
            ],
          ),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("SSI", "SSI"),
              label: L("4 stuba", "4 pillars"),
              description: L(
                "Brend · ljudi · uvidi · odnosi, komentar podržava sve četiri.",
                "Brand · people · insights · relationships, commenting supports all four.",
              ),
            },
            {
              value: L("20-30", "20-30"),
              label: L("Min / dan", "Min / day"),
              description: L(
                "Dnevni scan umesto nasumičnog skrolovanja feed-a.",
                "Daily scan instead of random feed scrolling.",
              ),
            },
            {
              value: L("10", "10"),
              label: L("ICP komentara", "ICP comments"),
              description: L(
                "10-1-5 ritam na dane objave: komentari → post → komentari.",
                "10-1-5 rhythm on post days: comments → post → comments.",
              ),
            },
          ],
        },
        {
          type: "pipeline-flow",
          title: L("Od feed šuma do pipeline signala", "From feed noise to pipeline signal"),
          subtitle: L(
            "Komentarisanje ulazi u kupčev svet pre nego što zatražiš razgovor.",
            "Commenting enters the buyer's world before you ask for a conversation.",
          ),
          stages: [
            L("Feed", "Feed"),
            L("Scan", "Scan"),
            L("Vredan komentar", "Value comment"),
            L("Odgovor", "Reply"),
            L("Profil", "Profile"),
            L("Outreach", "Outreach"),
          ],
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
              "Strateški komentar treba da uradi jednu od četiri stvari:",
              "1. Doda uvid.",
              "2. Doda primer.",
              "3. Doda koristan reframe.",
              "4. Postavi promišljeno pitanje.",
              "To je to.",
              "Komentar ne treba da pitch-uje.",
              "Ne treba da otima post.",
              "Ne treba da zvuči kao AI.",
              "Ne treba da se piše samo radi impresija.",
              "Ne treba da ponavlja ono što svi već kažu.",
              "Najbolji komentari navode pravog kupca da pomisli:",
              "„Ova osoba razume problem.“",
              "To je dovoljno.",
              "Jer cilj komentarisanja nije zatvoriti deal.",
              "Cilj je postati poznat, koristan i relevantan pre nego što outreach krene.",
            ],
            [
              "A strategic comment should do one of four things:",
              "1. Add insight.",
              "2. Add an example.",
              "3. Add a useful reframe.",
              "4. Ask a thoughtful question.",
              "That is it.",
              "A comment should not pitch.",
              "It should not hijack the post.",
              "It should not sound like AI.",
              "It should not be written just to get impressions.",
              "It should not say what everyone else is already saying.",
              "The best comments make the right buyer think:",
              "\"This person understands the problem.\"",
              "That is enough.",
              "Because the goal of commenting is not to close the deal.",
              "The goal is to become familiar, useful, and relevant before outreach starts.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Komentar nije mini-oglas. To je javni trust touchpoint.",
            "A comment is not a mini-ad. It is a public trust touchpoint.",
          ),
        },
        {
          type: "zone-cards",
          title: L("4 tipa komentara koji grade autoritet", "4 comment types that build authority"),
          subtitle: L(
            "Svaki tip ima jedan posao. Rotiraj ih, ne piši uvek isti obrazac.",
            "Each type has one job. Rotate them, do not always use the same pattern.",
          ),
          cards: [
            {
              zone: L("Uvid", "Insight"),
              eyebrow: L("Dodaj poentu", "Add a point"),
              job: L("Pokaži da razumeš problem dublje od surface saveta.", "Show you understand the problem deeper than surface advice."),
              doThis: L("„Deo koji većina propušta je…“ + konkretan mehanizam.", "\"The part most teams miss is…\" + concrete mechanism."),
              avoid: L("„Odličan post“ ili ponavljanje autora.", "\"Great post\" or repeating the author."),
            },
            {
              zone: L("Primer", "Example"),
              eyebrow: L("Učini konkretnim", "Make it concrete"),
              job: L("Pretvori apstraktnu temu u stvarnost iz terena.", "Turn an abstract topic into field reality."),
              doThis: L("Mini case, broj, before/after iz klijentskog rada.", "Mini case, number, before/after from client work."),
              avoid: L("Vague „videli smo uspeh“ bez detalja.", "Vague \"we saw success\" with no detail."),
            },
            {
              zone: L("Reframe", "Reframe"),
              eyebrow: L("Izoštri", "Sharpen"),
              job: L("Promeni kako čitalac gleda na problem.", "Change how the reader sees the problem."),
              doThis: L("„Dodao bih jedan sloj: pravi problem nije X, već Y.“", "\"I'd add one layer: the real issue is not X, it is Y.\""),
              avoid: L("Spor sa autorom bez konstruktivne vrednosti.", "Arguing with the author without constructive value."),
            },
            {
              zone: L("Pitanje", "Question"),
              eyebrow: L("Otvori razgovor", "Open conversation"),
              job: L("Pozovi na odgovor bez pitch-a.", "Invite a reply without pitching."),
              doThis: L("Specifično pitanje o mehanizmu ili iskustvu ICP-a.", "Specific question about mechanism or ICP experience."),
              avoid: L("„Šta mislite?“ bez konteksta.", "\"What do you think?\" with no context."),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "vs-random",
      title: L("Strateško vs nasumično komentarisanje", "Strategic commenting vs random engagement"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Profesionalni razgovor, strateški komentar vs feed šum",
            "Professional conversation, strategic comment vs feed noise",
          ),
          caption: L(
            "Nasumičan angažman stvara aktivnost. Strateški komentar stvara prepoznatljivost kod ICP-a.",
            "Random engagement creates activity. Strategic comments create familiarity with your ICP.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Feed šum", "Feed noise"),
              subtitle: L("Šta većina founder-a radi", "What most founders do"),
              variant: "muted",
              items: P(
                [
                  "„Odličan post.“ / „Potpuno se slažem.“",
                  "Komentariše šta god iskoči u feed-u",
                  "Juri samo velike kreatore",
                  "Meri lajkove na komentarima",
                  "Nema CRM veze",
                ],
                [
                  "\"Great post.\" / \"Totally agree.\"",
                  "Comments on whatever pops up in the feed",
                  "Chases only big creators",
                  "Measures likes on comments",
                  "No CRM connection",
                ],
              ),
            },
            {
              title: L("ICP komentar", "ICP comment"),
              subtitle: L("Šta radi Founder-Led Growth", "What Founder-Led Growth does"),
              variant: "accent",
              items: P(
                [
                  "Uvid · primer · reframe · pitanje",
                  "100 ljudi na target listi (Notion/Sheets)",
                  "Tam gde kupci već gledaju",
                  "Meri profile view, DM, tople razgovore",
                  "Signal → CRM → outreach",
                ],
                [
                  "Insight · example · reframe · question",
                  "100 people on target list (Notion/Sheets)",
                  "Where buyers already look",
                  "Measures profile views, DMs, warm conversations",
                  "Signal → CRM → outreach",
                ],
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Nasumičan angažman vs strateško komentarisanje", "Random engagement vs strategic commenting"),
          headers: H(
            ["Nasumičan angažman", "Strateško komentarisanje"],
            ["Random engagement", "Strategic commenting"],
          ),
          rows: [
            {
              cells: [
                L("Komentariše šta god se pojavi u feed-u", "Comments on whatever appears in the feed"),
                L("Komentariše ICP-relevantne ljude, naloge i teme", "Comments on ICP-relevant people, accounts, and topics"),
              ],
            },
            {
              cells: [
                L("Piše „odličan post“", "Says \"great post\""),
                L("Dodaje uvid, primer, reframe ili pitanje", "Adds insight, example, reframe, or question"),
              ],
            },
            {
              cells: [
                L("Juri samo velike kreatore", "Chases large creators only"),
                L("Fokusira se gde kupci stvarno obraćaju pažnju", "Focuses on where buyers actually pay attention"),
              ],
            },
            {
              cells: [
                L("Meri lajkove na komentarima", "Measures likes on comments"),
                L("Meri profile view-ove, odgovore, DM-ove, ICP angažman i tople razgovore", "Measures profile views, replies, DMs, ICP engagement, and warm conversations"),
              ],
            },
            {
              cells: [
                L("Dešava se kad founder ima vremena", "Happens when the founder has time"),
                L("Radi na dnevnom ritmu", "Runs on a daily rhythm"),
              ],
            },
            {
              cells: [
                L("Stvara široku vidljivost", "Creates broad visibility"),
                L("Stvara ciljanu vidljivost", "Creates targeted visibility"),
              ],
            },
            {
              cells: [
                L("Nema veze sa CRM-om", "Has no CRM connection"),
                L("Stvara tople signale i follow-up task-ove", "Creates warm signals and follow-up tasks"),
              ],
            },
            {
              cells: [
                L("Deluje kao networking", "Feels like networking"),
                L("Radi kao deo pipeline sistema", "Works as part of the pipeline system"),
              ],
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Nasumičan angažman stvara aktivnost.",
              "Strateško komentarisanje stvara prepoznatljivost.",
              "A prepoznatljivost olakšava outreach.",
            ],
            [
              "Random engagement creates activity.",
              "Strategic commenting creates familiarity.",
              "And familiarity makes outreach easier.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "commenting-framework",
      title: L("LinkedIn okvir komentarisanja", "The LinkedIn Commenting Framework"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1611162617474-5b21e469e113?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "LinkedIn na telefonu, dnevni scan i komentarisanje kod ICP-a",
            "LinkedIn on phone, daily scan and commenting where your ICP is",
          ),
          caption: L(
            "Sales Navigator nalazi ljude. Notion/Sheets drže listu. LinkedIn je mesto gde se pojavljuješ.",
            "Sales Navigator finds people. Notion/Sheets hold the list. LinkedIn is where you show up.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "framework-intro",
          title: L(
            "Target lista → Dnevni scan → Vredan komentar → Relationship touchpoint → Top signal → Kontekstualni outreach",
            "Target List → Daily Scan → Value Comment → Relationship Touchpoint → Warm Signal → Contextual Outreach",
          ),
          description: L(
            "Ovo je sistem komentarisanja. Ne nasumično skrolovanje. Ponovljiv workflow.",
            "This is the commenting system. Not random scrolling. A repeatable workflow.",
          ),
        },
        {
          type: "pipeline-flow",
          title: L("LinkedIn Commenting Framework", "LinkedIn Commenting Framework"),
          subtitle: L(
            "Svaki korak gradi kontekst za sledeći, preskakanje liste vodi u feed šum.",
            "Each step builds context for the next, skipping the list leads to feed noise.",
          ),
          stages: [
            L("Target lista", "Target list"),
            L("Dnevni scan", "Daily scan"),
            L("Vredan komentar", "Value comment"),
            L("Touchpoint", "Touchpoint"),
            L("Top signal", "Warm signal"),
            L("Outreach", "Outreach"),
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Target lista", "Target List"),
              whatToDo: L("Definiši čije postove vredi angažovati.", "Define whose posts are worth engaging with."),
              whyItMatters: L("Ako komentarišeš nasumične postove, dobijaš nasumičnu vidljivost.", "If you comment on random posts, you get random visibility."),
              example: L("100 ICP-relevantnih ljudi: 40 kupaca, 20 influencera, 15 partnera, 15 eksperata, 10 zagovornika.", "100 ICP-relevant people: 40 buyers, 20 influencers, 15 partners, 15 experts, 10 advocates."),
              commonMistake: L("Angažman samo sa velikim kreatorima koji imaju reach, ali nema buyer relevantnosti.", "Engaging only with big creators who have reach but no buyer relevance."),
              tryThis: L("Napravi listu od 100 ICP-relevantnih ljudi u pet segmenata.", "Create a list of 100 ICP-relevant people across five segments."),
              highlight: L("Ne moraš da komentarišeš svuda. Moraš tamo gde kupci već gledaju.", "You do not need to comment everywhere. You need to comment where your buyers already look."),
            },
            {
              step: 2,
              title: L("Dnevni scan", "Daily Scan"),
              whatToDo: L("Svaki dan proveri te profile, naloge i teme.", "Check those profiles, accounts, and topics every day."),
              whyItMatters: L("Pravovremenost je bitna za vidljivost i relevantnost komentara.", "Timeliness matters for comment visibility and relevance."),
              example: L("Pre komentarisanja skeniraj A-prioritet kupce i ICP influencere.", "Scan A-priority buyers and ICP influencers before commenting."),
              commonMistake: L("Komentarisanje starih postova bez aktivne diskusije.", "Commenting on old posts with no active discussion."),
              tryThis: L("Rezerviši 20-30 minuta radnim danima za engagement scan.", "Block 20-30 minutes per weekday for your engagement scan."),
              highlight: L("Dnevni scan pobedi nasumično skrolovanje feed-a.", "A daily scan beats random feed scrolling."),
            },
            {
              step: 3,
              title: L("Vredan komentar", "Value Comment"),
              whatToDo: L("Ostavi komentar koji dodaje uvid, ne šum.", "Leave a comment that adds insight, not noise."),
              whyItMatters: L("Korisni komentari grade poverenje i vidljivost kod pravih kupaca.", "Useful comments create trust and visibility with the right buyers."),
              example: L("Uvid, primer, reframe ili promišljeno pitanje, nikad samo „odličan post“.", "Insight, example, reframe, or thoughtful question, never just \"great post.\""),
              commonMistake: L("Komentari koji samo validiraju autora.", "Writing comments that only validate the author."),
              tryThis: L("Koristi: saglasnost + dodatni uvid + primer/reframe + pitanje.", "Use: agreement + added insight + example/reframe + question."),
              highlight: L("Dobar komentar dodaje vrednost čak i ako niko ne klikne profil.", "A good comment adds value even if nobody clicks your profile."),
            },
            {
              step: 4,
              title: L("Relationship touchpoint", "Relationship Touchpoint"),
              whatToDo: L("Koristi komentar da pokreneš ponovljenu prepoznatljivost.", "Use the comment to start repeated familiarity."),
              whyItMatters: L("Jedan komentar je touchpoint. Ponovljeni korisni komentari grade prepoznatljivost.", "One comment is a touchpoint. Repeated useful comments build recognition."),
              example: L("Komentariši istog ICP kupca ili influencera više puta na relevantnim temama.", "Comment on the same ICP buyer or influencer multiple times across relevant topics."),
              commonMistake: L("Svaki komentar tretiraš kao jednokratnu akciju bez follow-up-a.", "Treating every comment as a one-off with no follow-up."),
              tryThis: L("Odgovori na svaki relevantan odgovor istog dana.", "Reply to every relevant response the same day."),
              highlight: L("Prepoznatljivost raste kad se dosledno pojavljuješ.", "Familiarity compounds when you show up consistently."),
            },
            {
              step: 5,
              title: L("Top signal", "Warm Signal"),
              whatToDo: L("Prati odgovore, profile view-ove, DM-ove i ponovljeni angažman.", "Track replies, profile views, DMs, and repeated engagement."),
              whyItMatters: L("Komentarisanje mora biti povezano sa pipeline-om, signali pokazuju ko se zagreva.", "Commenting must connect to pipeline, signals tell you who is warming up."),
              example: L("Kupac odgovori na komentar → profile view → prati founder-a → angažuje se na founder postu.", "Buyer replies to comment → profile view → follows founder → engages on founder post."),
              commonMistake: L("Svakodnevno komentarisanje bez praćenja ko se vraća angažmanom.", "Commenting daily but not tracking who engages back."),
              tryThis: L("Dodaj CRM polje: Prvi touchpoint: LinkedIn komentar.", "Add CRM field: First touchpoint: LinkedIn comment."),
              highlight: L("Ako odnos krene u komentarima, a nikad ne uđe u CRM, signal nestaje.", "If the relationship starts in comments but never enters CRM, the signal disappears."),
            },
            {
              step: 6,
              title: L("Kontekstualni outreach", "Contextual Outreach"),
              whatToDo: L("Pošalji poruku samo kad ima dovoljno konteksta.", "Send a message only when there is enough context."),
              whyItMatters: L("Komentarisanje zagreva outreach kad poruka referiše stvarnu interakciju.", "Commenting makes outreach warmer when the message references the real interaction."),
              example: L("„Hej [Ime], video sam tvoj komentar na postu o SDR zapošljavanju… Da pošaljem checklist?“", "\"Hey [Name], saw your comment on the post about SDR hiring… Want me to send the checklist?\""),
              commonMistake: L("Korišćenje komentara da opravdaš prerani pitch.", "Using comments to justify a pitch too early."),
              tryThis: L("Sačekaj odgovor, profile view, follow, angažman na postu ili ponovljen interes za temu.", "Wait for reply, profile view, follow, post engagement, or repeated topic interest."),
              highlight: L("Komentarisanje nije suprotno outreach-u. Ono outreach čini toplijim.", "Commenting is not the opposite of outreach. It is what makes outreach warmer."),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Komentarisanje nije suprotno outreach-u. Ono outreach čini toplijim.",
            "Commenting is not the opposite of outreach. It is what makes outreach warmer.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "commenting-steps",
      title: L("Korak po korak strategija komentarisanja", "Step-by-step commenting strategy"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Komentar koji ne radi", "Comment that does not work"),
              subtitle: L("Šum, čitalac skroluje", "Noise, reader scrolls"),
              variant: "muted",
              items: P(
                [
                  "„Odličan post!“",
                  "„Potpuno se slažem.“",
                  "„Love this 🔥“",
                  "Generički emoji bez poente",
                  "Pitch u prvom komentaru",
                ],
                [
                  "\"Great post!\"",
                  "\"Totally agree.\"",
                  "\"Love this 🔥\"",
                  "Generic emoji with no point",
                  "Pitch in the first comment",
                ],
              ),
            },
            {
              title: L("Komentar koji radi", "Comment that works"),
              subtitle: L("Signal - ICP pamti ime", "Signal - ICP remembers your name"),
              variant: "accent",
              items: P(
                [
                  "Saglasnost + specifičan uvid + primer",
                  "Pitanje koje otvara razgovor",
                  "Jezik iz sales call-ova",
                  "Komentar ispod posta koji ICP prati",
                  "Follow-up istog dana na odgovor",
                ],
                [
                  "Agreement + specific insight + example",
                  "Question that opens conversation",
                  "Language from sales calls",
                  "Comment under a post your ICP follows",
                  "Same-day follow-up on replies",
                ],
              ),
            },
          ],
        },
        {
          type: "pipeline-flow",
          title: L("10-1-5 ritam na dan objave", "10-1-5 rhythm on post day"),
          subtitle: L(
            "Zagrej mrežu pre posta, ne objavi i nestani.",
            "Warm the network before posting, do not publish and disappear.",
          ),
          stages: [
            L("10 komentara", "10 comments"),
            L("1 post", "1 post"),
            L("5 komentara", "5 comments"),
            L("Odgovori", "Replies"),
            L("Signali", "Signals"),
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Napravi ICP engagement listu", "Build your ICP engagement list"),
              whatToDo: L("Napravi listu ljudi, kompanija i tema koje znače tvom ICP-u.", "Create a list of people, companies, and topics that matter to your ICP."),
              whyItMatters: L("Ako komentarišeš nasumične postove, dobijaš nasumičnu vidljivost. Strategija komentarisanja počinje dizajnom publike.", "If you comment on random posts, you get random visibility. Your commenting strategy should start with audience design."),
              example: L("Ako je ICP B2B SaaS kompanije od 10-50 ljudi, uključi SaaS founder-e, VP Sales, RevOps lidere, GTM konsultante i nišne zajednice.", "If your ICP is 10-50 person B2B SaaS companies, include SaaS founders, VP Sales, RevOps leaders, GTM consultants, and niche communities."),
              commonMistake: L("Angažman samo sa velikim kreatorima koji imaju reach, ali nema buyer relevantnosti.", "Engaging only with big creators who have reach but no buyer relevance."),
              tryThis: L("Napravi listu od 100 ICP-relevantnih ljudi: 40 kupaca, 20 influencera, 15 partnera, 15 eksperata, 10 klijenata ili zagovornika.", "Create a list of 100 ICP-relevant people: 40 buyers, 20 influencers, 15 partners, 15 experts, 10 customers or advocates."),
              highlight: L("Ne moraš da komentarišeš svuda. Moraš tamo gde kupci već gledaju.", "You do not need to comment everywhere. You need to comment where your buyers already look."),
            },
            {
              step: 2,
              title: L("Prioritizuj postove vredne komentarisanja", "Prioritize posts worth commenting on"),
              whatToDo: L("Biraj postove gde komentar može da stvori smisleno vidljivost.", "Choose posts where your comment can create meaningful visibility."),
              whyItMatters: L("Ne svaki post zaslužuje tvoje vreme. SWAT.io ističe relevantnost target grupi i pravovremenost kao ključne faktore.", "Not every post deserves your time. SWAT.io highlights relevance to your target group and timeliness as key factors."),
              example: L("Prioritizuj skorašnje ICP pain postove od ljudi koje tvoj ICP prati. Izbegavaj čisto motivacione ili off-topic postove.", "Prioritize recent ICP pain posts from people your ICP follows. Avoid purely motivational or off-topic posts."),
              commonMistake: L("Komentarisanje postova sa velikim reach-om samo zbog reach-a.", "Commenting on high-reach posts just because they have high reach."),
              tryThis: L("Pre komentarisanja pitaj: „Da li želim da moj ICP vidi moje ime ispod ovog posta?“ Ako ne, preskoči.", "Before commenting, ask: \"Would I want my ICP to see my name under this post?\" If not, skip it."),
              highlight: L("Reach bez buyer relevantnosti je bačena vidljivost.", "Reach without buyer relevance is wasted visibility."),
            },
            {
              step: 3,
              title: L("Koristi 4 tipa strateških komentara", "Use the 4 types of strategic comments"),
              whatToDo: L("Koristi ponovljive tipove: uvid, primer, reframe i pitanje.", "Use repeatable comment types: insight, example, reframe, and question."),
              whyItMatters: L("Većina loših komentara je loša jer founder ne zna koju ulogu komentar treba da igra.", "Most bad comments are bad because the founder does not know what role the comment should play."),
              example: L("Uvid: „CRM handoff je mesto gde se top namera ili gubi ili umnožava.“ Primer: „Videli smo ovo kod founder-led tima, mali reach, ali 3 sales razgovora.“", "Insight: \"CRM handoff is where warm intent compounds or dies.\" Example: \"We saw this with a founder-led team, low impressions but 3 sales conversations.\""),
              commonMistake: L("Komentari koji samo validiraju autora, „Odlična poenta“ bez dodate vrednosti.", "Writing comments that only validate the author, \"Great point\" without adding value."),
              tryThis: L("Struktura: „Slažem se sa [specifična poenta]. Dodao bih [uvid]. Bitno je jer [zašto]. Zanima me kako gledaš na [pitanje].“", "Structure: \"Agree with [specific point]. I'd add [insight]. This matters because [why]. Curious how you think about [question].\""),
              highlight: L("Dobar komentar dodaje vrednost čak i ako niko ne klikne profil.", "A good comment adds value even if nobody clicks your profile."),
            },
            {
              step: 4,
              title: L("Komentariši pre nego što postuješ", "Comment before you post"),
              whatToDo: L("Potroši vreme na komentarisanje pre objave sopstvenog posta.", "Spend time commenting before publishing your own post."),
              whyItMatters: L("Komentarisanje zagreva founder mrežu i pokreće razgovore pre postovanja.", "Commenting warms up the founder's network and starts conversations before posting."),
              example: L("10 ICP komentara pre posta → objavi founder post → odgovori na rane komentare → još 5 ICP komentara posle.", "10 ICP comments before posting → publish founder post → reply to early comments → 5 more ICP comments after."),
              commonMistake: L("Objavi i pasivno čekaj.", "Publishing and waiting passively."),
              tryThis: L("Na dane objave koristi 10-1-5 ritam: 10 ICP komentara, 1 founder post, 5 ICP komentara.", "On posting days, use the 10-1-5 rhythm: 10 ICP comments, 1 founder post, 5 ICP comments."),
              highlight: L("Ne samo postuj i nestani. LinkedIn je platforma za razgovor.", "Do not just post and disappear. LinkedIn is a conversation platform."),
            },
            {
              step: 5,
              title: L("Koristi komentare za testiranje content uglova", "Use comments to test content angles"),
              whatToDo: L("Koristi komentare kao nisku frikciju za test ideja pre nego što postanu postovi.", "Use comments as a low-friction way to test ideas before turning them into posts."),
              whyItMatters: L("Komentar je mala opklada. Odgovori, profile view-ovi ili DM-ovi mogu signalizirati pun post, webinar ili outreach ugao.", "A comment is a small bet. Replies, profile views, or DMs may signal a full post, webinar, or outreach angle."),
              example: L("Komentar o kupcima koji dobijaju poruke pre konteksta, ako ICP kupci odgovore, pretvori u post i outreach opener.", "Comment about buyers getting messages before context, if ICP buyers respond, turn it into a post and outreach opener."),
              commonMistake: L("Tretiranje komentara kao aktivnosti bez vrednosti.", "Treating comments as throwaway activity."),
              tryThis: L("Čuvaj najbolje komentare svake nedelje. Najbolja 3 pretvori u postove.", "Save your best comments every week. Turn the best 3 into posts."),
              highlight: L("Komentari nisu samo angažman. To je validacija ideja.", "Comments are not just engagement. They are idea validation."),
            },
            {
              step: 6,
              title: L("Prati signale iz komentara", "Track comment-driven signals"),
              whatToDo: L("Prati smislene ishode komentarisanja.", "Track meaningful outcomes from commenting."),
              whyItMatters: L("Ako je komentarisanje deo Founder-Led Growth-a, mora biti povezano sa pipeline sistemom.", "If commenting is part of Founder-Led Growth, it needs to connect to the pipeline system."),
              example: L("Kupac odgovori → nastavi razgovor. Profile view → prati. Follow → topla lista. DM → dodaj u CRM.", "Buyer replies → continue conversation. Profile view → monitor. Follow → warm list. DM → add to CRM."),
              commonMistake: L("Svakodnevno komentarisanje bez praćenja ko se vraća angažmanom.", "Commenting daily but not tracking who engages back."),
              tryThis: L("Dodaj CRM polje ili kolonu u tabeli: Prvi touchpoint: LinkedIn komentar.", "Add a CRM field or spreadsheet column: First touchpoint: LinkedIn comment."),
              highlight: L("Ako odnos krene u komentarima, a nikad ne uđe u CRM, signal nestaje.", "If the relationship starts in comments but never enters CRM, the signal disappears."),
            },
            {
              step: 7,
              title: L("Pretvori ponovljeni angažman u kontekstualni outreach", "Turn repeated engagement into contextual outreach"),
              whatToDo: L("Šalji outreach samo kad ima dovoljno konteksta.", "Send outreach only when there is enough context."),
              whyItMatters: L("Komentarisanje zagreva outreach kad poruka referiše stvarnu interakciju.", "Commenting makes outreach warmer when the message references the real interaction."),
              example: L("„Hej [Ime], video sam tvoj komentar na postu o SDR zapošljavanju… Imam kratak checklist. Da pošaljem?“", "\"Hey [Name], saw your comment on the post about SDR hiring… I have a short checklist. Want me to send it?\""),
              commonMistake: L("Korišćenje komentara da opravdaš prerani pitch.", "Using comments to justify a pitch too early."),
              tryThis: L("Sačekaj odgovor, profile view, follow, angažman na postu, pitanje ili ponovljen interes za temu.", "Wait for reply, profile view, follow, post engagement, question, or repeated topic appearance."),
              highlight: L("Outreach treba da deluje kao sledeći korak u razgovoru, ne prvi korak u pitch-u.", "Outreach should feel like the next step in a conversation, not the first step in a pitch."),
            },
          ],
        },
        {
          type: "table",
          caption: L("Segmenti ICP engagement liste", "ICP engagement list segments"),
          headers: H(
            ["Segment", "Ko uključiti", "Zašto je bitno"],
            ["Segment", "Who to include", "Why it matters"],
          ),
          rows: [
            {
              cells: [
                L("ICP kupci", "ICP buyers"),
                L("Founder-i, CEO-i, VP Sales, Heads of Growth, RevOps, operatori", "Founders, CEOs, VP Sales, Heads of Growth, RevOps, operators"),
                L("Direktna buyer vidljivost", "Direct buyer visibility"),
              ],
            },
            {
              cells: [
                L("ICP influenceri", "ICP influencers"),
                L("Ljudi koje tvoji kupci već prate", "People your buyers already follow"),
                L("Posuđena pažnja", "Borrowed attention"),
              ],
            },
            {
              cells: [
                L("Klijenti / zagovornici", "Customers / advocates"),
                L("Postojeći klijenti i prijateljski odnosi", "Existing customers and friendly relationships"),
                L("Produbljivanje odnosa", "Relationship deepening"),
              ],
            },
            {
              cells: [
                L("Partneri", "Partners"),
                L("Agencije, konsultanti, tool partneri, zajednice", "Agencies, consultants, tool partners, communities"),
                L("Referral vidljivost", "Referral visibility"),
              ],
            },
            {
              cells: [
                L("Eksperti kategorije", "Category experts"),
                L("Ljudi koji oblikuju razgovor u tvojoj niši", "People shaping the conversation in your niche"),
                L("Učenje tržišta i autoritet", "Market learning and authority"),
              ],
            },
          ],
        },
        {
          type: "table",
          caption: L("4 tipa strateških komentara", "The 4 types of strategic comments"),
          headers: H(
            ["Tip komentara", "Svrha", "Primer"],
            ["Comment type", "Purpose", "Example"],
          ),
          rows: [
            {
              cells: [
                L("Komentar uvida", "Insight comment"),
                L("Dodaje koristan point", "Adds a useful point"),
                L(
                  "„Deo koji većina timova propušta: CRM handoff nije admin, tu se top namera ili gubi ili umnožava.“",
                  "\"The part most teams miss is that CRM handoff is not admin, it is where warm intent either compounds or dies.\"",
                ),
              ],
            },
            {
              cells: [
                L("Komentar primera", "Example comment"),
                L("Čini ideju konkretnom", "Makes the idea concrete"),
                L(
                  "„Videli smo ovo kod founder-led tima. Post je imao mali reach, ali je otvorio 3 sales razgovora jer je tema bila bolno specifična.“",
                  "\"We saw this with a founder-led team recently. The post had low impressions but created 3 sales conversations because the topic was painfully specific.\"",
                ),
              ],
            },
            {
              cells: [
                L("Reframe komentar", "Reframe comment"),
                L("Izaziva ili izoštrava ideju", "Challenges or sharpens the idea"),
                L(
                  "„Dodao bih jedan sloj: problem nije samo reply rate. Pitanje je da li je kupac imao kontekst pre poruke.“",
                  "\"I'd add one layer: the issue is not only reply rate. It is whether the buyer had context before the message arrived.\"",
                ),
              ],
            },
            {
              cells: [
                L("Komentar pitanja", "Question comment"),
                L("Otvara razgovor", "Opens conversation"),
                L(
                  "„Zanima me kako razdvajaš pravu buying nameru od opšteg angažmana kad neko više puta reaguje?“",
                  "\"Curious how you separate genuine buying intent from general engagement when someone interacts multiple times?\"",
                ),
              ],
            },
          ],
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("100", "100"),
              label: L("Ljudi na listi", "People on list"),
              description: L(
                "40 kupaca · 20 influencera · 15 partnera · 15 eksperata · 10 zagovornika.",
                "40 buyers · 20 influencers · 15 partners · 15 experts · 10 advocates.",
              ),
            },
            {
              value: L("4", "4"),
              label: L("Tipa komentara", "Comment types"),
              description: L(
                "Uvid · primer · reframe · pitanje, rotiraj svake nedelje.",
                "Insight · example · reframe · question, rotate weekly.",
              ),
            },
            {
              value: L("1", "1"),
              label: L("CRM polje", "CRM field"),
              description: L(
                "Prvi touchpoint: LinkedIn komentar, da signal ne nestane.",
                "First touchpoint: LinkedIn comment, so the signal does not disappear.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Signali iz komentara", "Comment-driven signals"),
          headers: H(
            ["Signal", "Značenje", "Akcija"],
            ["Signal", "Meaning", "Action"],
          ),
          rows: [
            {
              cells: [
                L("Kupac odgovori na komentar", "Buyer replies to comment"),
                L("Relationship touchpoint", "Relationship touchpoint"),
                L("Nastavi razgovor", "Continue conversation"),
              ],
            },
            {
              cells: [
                L("Kupac pogleda profil posle komentara", "Buyer views profile after comment"),
                L("Blagi interes", "Light interest"),
                L("Angažuj se nazad / prati", "Engage back / monitor"),
              ],
            },
            {
              cells: [
                L("Kupac prati founder-a", "Buyer follows founder"),
                L("Srednji interes", "Medium interest"),
                L("Dodaj na toplu listu", "Add to warm list"),
              ],
            },
            {
              cells: [
                L("Kupac pošalje DM", "Buyer sends DM"),
                L("Jak interes", "Strong interest"),
                L("Dodaj u CRM", "Add to CRM"),
              ],
            },
            {
              cells: [
                L("Kupac kasnije komentariše founder post", "Buyer comments on founder post later"),
                L("Ponovljen angažman", "Repeated engagement"),
                L("Dodaj na toplu outreach listu", "Add to warm outreach list"),
              ],
            },
            {
              cells: [
                L("Target account se pojavljuje više puta", "Target account appears repeatedly"),
                L("Signal na nivou account-a", "Account-level signal"),
                L("Kreiraj CRM account belešku", "Create CRM account note"),
              ],
            },
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
              "Lead Agents redosled: ICP, profil, Outreach, buying signali, content iz intervjua, Thought Leader Ads, CRM. Komentari su most između contenta i Outreach-a.",
              "Ova lekcija objašnjava zašto komentari nisu vanity metrika: korisni komentari na ICP postovima stvaraju signale koje CRM i Outreach lista kasnije koriste.",
              "Pre cold poruke, founder komentariše 10 relevantnih postova dnevno. Thread postaje kontekst za Outreach, ne hladan pitch.",
              "Outreach direktno napada ICP. Komentari indirektno greju odnos pre poruke. Reklame šire dokaz, ne zamenjuju komentare.",
            ],
            [
              "Lead Agents order: ICP, profile, Outreach, buying signals, interview content, Thought Leader Ads, CRM. Comments are the bridge between content and Outreach.",
              "This lesson explains why comments are not a vanity metric: useful comments on ICP posts create signals that the CRM and Outreach list use later.",
              "Before a cold message, the founder comments on 10 relevant posts per day. The thread becomes context for Outreach, not a cold pitch.",
              "Outreach attacks the ICP directly. Comments indirectly warm the relationship before the message. Ads spread proof. They do not replace comments.",
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
              title: L("Social selling je o odnosima pre prodaje", "Social selling is about relationships before sales"),
              body: L(
                "LinkedIn definiše social selling kao korišćenje društvenih mreža za povezivanje i gradnju odnosa sa prospect-ima. Strateško komentarisanje je jedan od najjednostavnijih načina da stvoriš te relationship touchpoint-e pre direktnog outreach-a.",
                "LinkedIn defines social selling as using social networks to connect and build relationships with prospects. Strategic commenting is one of the simplest ways to create those relationship touchpoints before direct outreach.",
              ),
              sourceLabel: L("LinkedIn Sales Solutions - Social Selling", "LinkedIn Sales Solutions - Social Selling"),
              sourceUrl: "https://business.linkedin.com/sales-solutions/social-selling",
            },
            {
              title: L("LinkedIn SSI uključuje angažman kroz uvide", "LinkedIn SSI includes engaging with insights"),
              body: L(
                "LinkedIn Social Selling Index gradi se na profesionalnom brendu, pronalaženju pravih ljudi, angažmanu kroz uvide i gradnji odnosa.",
                "LinkedIn's Social Selling Index is built around establishing a professional brand, finding the right people, engaging with insights, and building relationships.",
              ),
              sourceLabel: L("LinkedIn Sales Solutions - Social Selling Index / SSI", "LinkedIn Sales Solutions - Social Selling Index / SSI"),
              sourceUrl: "https://business.linkedin.com/sell/resources/SSI",
            },
            {
              title: L("Relevantnost i timing komentara su bitni", "Comment relevance and timing matter"),
              body: L(
                "SWAT.io vodič za LinkedIn komentare ističe relevantnost target grupi i pravovremenost kao ključne faktore za vidljivost kroz komentare.",
                "SWAT.io's LinkedIn comment strategy guide highlights relevance to the target group and timeliness as key factors when using comments for visibility.",
              ),
              sourceLabel: L("SWAT.io - LinkedIn Comments", "SWAT.io - LinkedIn Comments"),
              sourceUrl: "https://swat.io/en/engage/linkedin-comments/",
            },
            {
              title: L("B2B social selling je redovan workflow", "B2B social selling is a regular workflow"),
              body: L(
                "Highspot B2B social selling vodič referiše LinkedIn State of Sales istraživanje i napominje da mnogi sales rep-ovi sada uključuju social selling u dnevni ili nedeljni rad.",
                "Highspot's B2B social selling guide references LinkedIn's State of Sales research and notes that many sales reps now include social selling in their daily or weekly workload.",
              ),
              sourceLabel: L("Highspot - Social Selling Guide", "Highspot - Social Selling Guide"),
              sourceUrl: "https://www.highspot.com/blog/social-selling-guide-b2b-sales/",
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
            [
              "Formatiraj ovo kao praktičan playbook. Izgradi sistem u list tool-u i CRM-u, ne samo u glavi.",
            ],
            [
              "Format this as a practical playbook. Build the system in your list tool and CRM, not only in your head.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["### 1. Napravi ICP listu za komentarisanje", "Napravi listu u Notion-u, Airtable-u, Google Sheets-u ili CRM-u."],
            ["### 1. Create your ICP commenting list", "Build a list in Notion, Airtable, Google Sheets, or CRM."],
          ),
        },
        {
          type: "table",
          caption: L("Kolone ICP liste za komentarisanje", "ICP commenting list columns"),
          headers: H(
            ["Ime", "Uloga", "Kompanija", "Segment", "LinkedIn URL", "Relevantnost teme", "Prioritet", "Poslednji angažman", "Beleške"],
            ["Name", "Role", "Company", "Segment", "LinkedIn URL", "Topic relevance", "Priority", "Last engaged", "Notes"],
          ),
          rows: [
            {
              cells: [
                L("[Ime]", "[Name]"),
                L("[Uloga]", "[Role]"),
                L("[Kompanija]", "[Company]"),
                L("ICP kupac", "ICP buyer"),
                L("[URL]", "[URL]"),
                L("[Tema]", "[Topic]"),
                L("A", "A"),
                L("[Datum]", "[Date]"),
                L("[Beleške]", "[Notes]"),
              ],
            },
          ],
        },
        {
          type: "table",
          caption: L("Nivoi prioriteta", "Priority levels"),
          headers: H(
            ["Prioritet", "Značenje", "Akcija"],
            ["Priority", "Meaning", "Action"],
          ),
          rows: [
            {
              cells: [
                L("A", "A"),
                L("Direktan ICP kupac ili target account", "Direct ICP buyer or target account"),
                L("Proveravaj dnevno", "Check daily"),
              ],
            },
            {
              cells: [
                L("B", "B"),
                L("Influencer ili partner sa ICP publikom", "Influencer or partner with ICP audience"),
                L("Proveravaj 2-3 puta nedeljno", "Check 2-3x per week"),
              ],
            },
            {
              cells: [
                L("C", "C"),
                L("Koristan glas na tržištu", "Useful market voice"),
                L("Proveravaj nedeljno", "Check weekly"),
              ],
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["### 2. Izgradi dnevni ritam komentarisanja"],
            ["### 2. Build your daily commenting rhythm"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "10 komentara po radnom danu;",
              "20-30 minuta dnevno;",
              "5 komentara na ICP kupce;",
              "3 komentara na ICP influencere;",
              "2 komentara na partnere ili eksperte.",
            ],
            [
              "10 comments per weekday;",
              "20-30 minutes per day;",
              "5 comments on ICP buyers;",
              "3 comments on ICP influencers;",
              "2 comments on partners or experts.",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Nedeljni ciljevi komentarisanja", "Weekly commenting targets"),
          headers: H(
            ["Aktivnost", "Nedeljni cilj"],
            ["Activity", "Weekly target"],
          ),
          rows: [
            { cells: [L("ICP komentari", "ICP comments"), L("25", "25")] },
            { cells: [L("Komentari na influencere", "Influencer comments"), L("15", "15")] },
            { cells: [L("Komentari partnera / eksperata", "Partner / expert comments"), L("10", "10")] },
            { cells: [L("Odgovori u comment thread-ovima", "Replies to comment threads"), L("Dnevno", "Daily")] },
            { cells: [L("Novi topli kontakti u CRM-u", "New warm contacts added to CRM"), L("5-10", "5-10")] },
            { cells: [L("Komentari pretvoreni u ideje za post", "Comments turned into post ideas"), L("3", "3")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "### 3. Koristi formulu vrednog komentara",
              "Koristi strukturu: Specifična saglasnost ili zapažanje + dodatni uvid + primer ili reframe + promišljeno pitanje.",
              "Šablon: „Slažem se sa tvojom poentom o [specifična ideja]. Jedno bih dodao: [uvid / reframe]. Često vidimo ovo kad [primer]. Zanima me kako gledaš na [pitanje]?“",
              "Primer: „Slažem se sa tvojom poentom o SDR hiring-u. Jedno bih dodao: SDR-ovi pate kad founder sales motion još nije dokumentovan. Često vidimo u B2B timovima od 10-50 ljudi. Da li ti se ovo obično lomi na targeting-u ili messaging-u prvo?“",
            ],
            [
              "### 3. Use the value comment formula",
              "Use this structure: Specific agreement or observation + added insight + example or reframe + thoughtful question.",
              "Template: \"Agree with your point on [specific idea]. One thing I'd add: [insight / reframe]. We see this often when [example]. Curious how you think about [question]?\"",
              "Example: \"Agree with your point on SDR hiring. One thing I'd add: SDRs struggle when the founder sales motion is not documented yet. We see this often in 10-50 person B2B teams. Curious if you usually see this break at targeting or messaging first?\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "### 4. Čuvaj najbolje komentare",
              "Napravi comment-to-content bazu. Svake petke: pregledaj najbolje komentare, 3 pretvori u postove, 1 u webinar ugao, 1 u outreach opener.",
            ],
            [
              "### 4. Save your best comments",
              "Create a comment-to-content database. Every Friday: review best comments, turn 3 into posts, 1 into webinar angle, 1 into outreach opener.",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Kolone comment-to-content baze", "Comment-to-content database columns"),
          headers: H(
            ["Ideja komentara", "URL originalnog posta", "Tema", "ICP bol", "Odgovori", "Profile view-ovi", "Pretvori u post?", "Status"],
            ["Comment idea", "Original post URL", "Topic", "ICP pain", "Replies", "Profile views", "Turn into post?", "Status"],
          ),
          rows: [
            {
              cells: [
                L("[Komentar]", "[Comment]"),
                L("[URL]", "[URL]"),
                L("[Tema]", "[Topic]"),
                L("[Bol]", "[Pain]"),
                L("[#]", "[#]"),
                L("[#]", "[#]"),
                L("Da / Ne", "Yes / No"),
                L("[Status]", "[Status]"),
              ],
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["### 5. Prati komentarisanje u CRM-u"],
            ["### 5. Track commenting in CRM"],
          ),
        },
        {
          type: "table",
          caption: L("CRM polja za komentarisanje", "CRM fields for commenting"),
          headers: H(
            ["CRM polje", "Svrha"],
            ["CRM field", "Purpose"],
          ),
          rows: [
            {
              cells: [
                L("Prvi touchpoint", "First touchpoint"),
                L("LinkedIn komentar", "LinkedIn comment"),
              ],
            },
            {
              cells: [
                L("Tema komentara", "Comment topic"),
                L("Koji razgovor je pokrenuo odnos", "What conversation started relationship"),
              ],
            },
            {
              cells: [
                L("Nivo odnosa", "Relationship level"),
                L("Blag, srednji, jak", "Light, medium, strong"),
              ],
            },
            {
              cells: [
                L("Poslednja LinkedIn interakcija", "Last LinkedIn interaction"),
                L("Datum i tip", "Date and type"),
              ],
            },
            {
              cells: [
                L("Sledeća akcija", "Next action"),
                L("Angažuj, nurture, DM, pošalji asset, zakaži call", "Engage, nurture, DM, send asset, book call"),
              ],
            },
            {
              cells: [
                L("Nivo signala", "Signal level"),
                L("Blag, srednji, jak", "Light, medium, strong"),
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Primer CRM beleške: Prvi touchpoint: Komentarisao na buyer postu o outbound reply rate-ovima. Kupac je odgovorio i pogledao profil. Dodaj na toplu listu. Sledeća akcija: angažuj se na sledećem postu, pa pošalji checklist ako se ponovi signal.",
            "Example CRM note: First touchpoint: Commented on buyer's post about outbound reply rates. Buyer replied and viewed profile. Add to warm list. Next action: engage with next post, then send checklist if repeated signal appears.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["### 6. Napravi outreach pravila", "Ne šalji DM posle svakog komentara. Koristi pravila."],
            ["### 6. Create outreach rules", "Do not DM after every comment. Use rules."],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Outreach je dozvoljen kad: osoba odgovori na tvoj komentar; pogleda profil; prati te; komentariše tvoj post; više puta se angažuje; postavi relevantno pitanje; odgovara ICP-u i pokazuje timing trigger.",
              "Outreach nije dozvoljen kad: ostaviš jedan komentar i ništa se ne desi; nije ICP; tema nije povezana sa ponudom; poruka bi delovala nametnuto; samo pokušavaš da iskoristiš vidljivost.",
            ],
            [
              "Outreach is allowed when: person replied to your comment; viewed your profile; followed you; commented on your post; engaged multiple times; asked a relevant question; matches ICP and showed a timing trigger.",
              "Outreach is not allowed when: you left one comment and they did nothing; they are not ICP; the topic is not connected to your offer; your message would feel forced; you are only trying to capitalize on visibility.",
            ],
          ),
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
              name: "LinkedIn",
              logo: "/images/sales-tools/linkedin.png",
              usedFor: L(
                "Dnevno komentarisanje, gradnja odnosa, vidljivost i praćenje razgovora.",
                "Daily commenting, relationship building, visibility, and conversation tracking.",
              ),
              whyItFits: L(
                "Ovo je osnovni kanal za founder-led angažman.",
                "This is the core channel for founder-led engagement.",
              ),
              alternative: L("Nema.", "None."),
            },
            {
              name: "LinkedIn Sales Navigator",
              logo: "/images/sales-tools/linkedin-sales-navigator.png",
              usedFor: L(
                "Pronađi ICP kupce, sačuvaj lead-ove, prati account-e i gradi engagement liste.",
                "Find ICP buyers, save leads, monitor accounts, and build engagement lists.",
              ),
              whyItFits: L(
                "Pomaže founder-ima da komentarišu kod pravih ljudi umesto nasumične feed aktivnosti.",
                "Helps founders focus commenting on the right people instead of random feed activity.",
              ),
              alternative: L("Apollo, ručna LinkedIn pretraga.", "Apollo, manual LinkedIn search."),
            },
            {
              name: "Notion",
              logo: "/images/sales-tools/notion.png",
              usedFor: L(
                "Lista komentarisanja, target account-i, ideje za komentare, comment-to-content baza.",
                "Commenting list, target accounts, comment ideas, comment-to-content database.",
              ),
              whyItFits: L(
                "Jednostavan workspace za ponovljiv engagement ritam.",
                "Simple workspace for managing a repeatable engagement rhythm.",
              ),
              alternative: L("Airtable, Google Sheets.", "Airtable, Google Sheets."),
            },
            {
              name: "Google Sheets",
              logo: "/images/sales-tools/google-sheets.png",
              usedFor: L(
                "Jednostavno praćenje ljudi, komentara, tema i follow-up signala.",
                "Simple tracking of people, comments, topics, and follow-up signals.",
              ),
              whyItFits: L(
                "Brzo za implementaciju kod ranih timova.",
                "Fast to implement for early-stage teams.",
              ),
              alternative: L("Notion, Airtable.", "Notion, Airtable."),
            },
            {
              name: "Taplio",
              slug: "taplio",
              usedFor: L(
                "Prati postove, angažuj relevantne kreatore, upravljaj LinkedIn aktivnošću i analiziraj content.",
                "Monitor posts, engage with relevant creators, manage LinkedIn activity, and analyze content.",
              ),
              whyItFits: L(
                "Korisno founder-ima koji žele strukturisan LinkedIn workflow.",
                "Helpful for founders who want a structured LinkedIn workflow.",
              ),
              alternative: L("AuthoredUp, LinkedIn native analytics.", "AuthoredUp, LinkedIn native analytics."),
            },
            {
              name: "AuthoredUp",
              usedFor: L(
                "Pisanje i upravljanje LinkedIn content-om i idejama za komentare.",
                "Writing and managing LinkedIn content and comment ideas.",
              ),
              whyItFits: L(
                "Korisno za pretvaranje jakih komentara u postove.",
                "Useful for turning strong comments into posts.",
              ),
              alternative: L("Taplio, Notion.", "Taplio, Notion."),
            },
            {
              name: "HubSpot",
              slug: "hubspot",
              usedFor: L(
                "Prati tople odnose iz komentara i sledeće akcije.",
                "Track warm comment-driven relationships and next actions.",
              ),
              whyItFits: L(
                "Pretvara LinkedIn angažman u merljiv pipeline workflow.",
                "Turns LinkedIn engagement into a measurable pipeline workflow.",
              ),
              alternative: L("Pipedrive, Attio, Folk, Salesforce.", "Pipedrive, Attio, Folk, Salesforce."),
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
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Planiranje i praćenje, od komentara do CRM signala",
            "Planning and tracking, from comment to CRM signal",
          ),
          caption: L(
            "Notion ili Sheets drže listu. Sales Navigator pronalazi ljude. CRM hvata signale.",
            "Notion or Sheets hold the list. Sales Navigator finds people. CRM captures signals.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("10", "10"),
              label: L("Komentara / dan", "Comments / day"),
              description: L(
                "Korisnih komentara na ICP-relevantne postove, ne feed šum.",
                "Useful comments on ICP-relevant posts, not feed noise.",
              ),
            },
            {
              value: L("2×", "2×"),
              label: L("Touchpoint", "Touchpoint"),
              description: L(
                "Isti kupac, dva relevantna posta, prepoznatljivost raste.",
                "Same buyer, two relevant posts, familiarity compounds.",
              ),
            },
            {
              value: L("1", "1"),
              label: L("Kontekstualni DM", "Contextual DM"),
              description: L(
                "Tek kad ima odgovor, profile view ili follow, ne posle jednog lajka.",
                "Only after reply, profile view, or follow, not after one like.",
              ),
            },
          ],
        },
        {
          type: "workflow",
          title: L("Od komentara do toplog outreach-a", "From comment to warm outreach"),
          steps: P(
            [
              "Founder otvara ICP engagement listu.",
              "Founder skenira postove A-prioritet kupaca i influencera.",
              "Founder ostavlja 10 korisnih komentara.",
              "Jedan ICP kupac odgovori na komentar.",
              "Kupac pogleda founder profil.",
              "Founder se ponovo angažuje sa kupcem na drugom postu.",
              "Kupac kasnije komentariše founder post.",
              "Kontakt se dodaje u CRM sa izvorom: LinkedIn komentar.",
              "Nivo signala se označava kao srednji.",
              "Founder šalje kontekstualni DM koji referiše stvarni razgovor.",
              "Kupac traži checklist ili webinar snimak.",
              "Sales task se kreira ako namera raste.",
            ],
            [
              "Founder opens ICP engagement list.",
              "Founder scans posts from A-priority buyers and influencers.",
              "Founder leaves 10 useful comments.",
              "One ICP buyer replies to a comment.",
              "Buyer views founder profile.",
              "Founder engages with buyer again on a second post.",
              "Buyer later comments on founder's post.",
              "Contact is added to CRM with source: LinkedIn comment.",
              "Signal level is marked as medium.",
              "Founder sends contextual DM referencing the real conversation.",
              "Buyer asks for checklist or webinar recording.",
              "Sales task is created if intent increases.",
            ],
          ),
          highlight: L(
            "Tako komentarisanje postaje pipeline infrastruktura. Ne zato što svaki komentar prodaje, već zato što svaki koristan komentar stvara kontekst.",
            "This is how commenting becomes pipeline infrastructure. Not because every comment sells, but because every useful comment creates context.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "videos",
      title: L("Video materijali", "YouTube videos"),
      blocks: [
        { type: "video", video: video1 },
        { type: "video", video: video2 },
        { type: "video", video: video3 },
        { type: "video", video: video4 },
        {
          type: "callout",
          variant: "tip",
          text: L("Proveri video pre objave.", "Verify video before publishing."),
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
              title: L("LinkedIn Commenting Engine Map", "LinkedIn Commenting Engine Map"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "Founder koji se angažuje sa ICP kupcima, influencerima i partnerima, sa komentarima koji teku u profile view-ove, DM-ove, CRM signale i outreach.",
                "A founder engaging with ICP buyers, influencers, and partners, with comments flowing into profile views, DMs, CRM signals, and outreach.",
              ),
            },
            {
              title: L(
                "Target lista → Dnevni scan → Vredan komentar → Relationship touchpoint → Top signal → Kontekstualni outreach",
                "Target List → Daily Scan → Value Comment → Relationship Touchpoint → Warm Signal → Contextual Outreach",
              ),
              placement: L("Sekcija okvira", "Framework section"),
              description: L(
                "Pun workflow komentarisanja od izbora targeta do toplog outreach-a.",
                "The full commenting workflow from target selection to warm outreach.",
              ),
            },
            {
              title: L("Nasumičan angažman vs strateško komentarisanje", "Random Engagement vs Strategic Commenting"),
              placement: L("Sekcija osnovne ideje", "Core idea section"),
              description: L(
                "Tabela poređenja niskovrednog angažmana i komentara koji grade odnos.",
                "Comparison table showing low-value engagement vs relationship-building comments.",
              ),
            },
            {
              title: L("4 tipa komentara", "The 4 Comment Types"),
              placement: L("Korak 3", "Step 3"),
              description: L(
                "Komentar uvida, primera, reframe-a i pitanja.",
                "Insight comment, example comment, reframe comment, question comment.",
              ),
            },
            {
              title: L("10-1-5 ritam dana objave", "10-1-5 Posting Day Rhythm"),
              placement: L("Korak 4", "Step 4"),
              description: L(
                "10 komentara pre objave, 1 founder post, 5 komentara posle objave.",
                "10 comments before posting, 1 founder post, 5 comments after posting.",
              ),
            },
            {
              title: L("Comment-to-Pipeline workflow", "Comment-to-Pipeline Workflow"),
              placement: L("Sekcija primera workflow-a", "Workflow example section"),
              description: L(
                "Komentar → odgovor → profile view → ponovljen angažman → CRM → kontekstualni DM → sales razgovor.",
                "Comment → reply → profile view → repeated engagement → CRM → contextual DM → sales conversation.",
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "checklist",
      title: L("Čeklista", "Checklist"),
      blocks: [
        {
          type: "checklist",
          title: L("Pre prelaska na sledeću lekciju, uradi ovo:", "Before moving to the next lesson, do this:"),
          items: P(
            [
              "Napravi listu od 100 ICP-relevantnih ljudi za angažman.",
              "Segmentiši listu na kupce, influencere, partnere, eksperte i zagovornike.",
              "Prioritizuj listu u A, B i C nivoe.",
              "Ostavi 10 korisnih komentara po radnom danu.",
              "Koristi komentare uvida, primera, reframe-a i pitanja.",
              "Izbegavaj komentare tipa „odličan post“.",
              "Čuvaj najbolje komentare svake nedelje.",
              "Pretvori 3 jaka komentara u LinkedIn postove.",
              "Prati profile view-ove i odgovore iz komentara.",
              "Dodaj tople odnose iz komentara u CRM.",
              "Definiši kada komentar postaje outreach trigger.",
              "Šalji samo kontekstualne DM-ove zasnovane na stvarnim interakcijama.",
            ],
            [
              "Build a list of 100 ICP-relevant people to engage with.",
              "Segment the list into buyers, influencers, partners, experts, and advocates.",
              "Prioritize the list into A, B, and C levels.",
              "Leave 10 useful comments per weekday.",
              "Use insight, example, reframe, and question comments.",
              "Avoid \"great post\" comments.",
              "Save your best comments every week.",
              "Turn 3 strong comments into LinkedIn posts.",
              "Track profile views and replies from comments.",
              "Add warm comment-driven relationships to CRM.",
              "Define when a comment becomes an outreach trigger.",
              "Send only contextual DMs based on real interactions.",
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
          title: L("Šablon LinkedIn strategije komentarisanja", "LinkedIn Commenting Strategy Template"),
          content: L(
            `1. ICP engagement lista

Napravi 100 ljudi:

ICP kupci:
[40 imena]

ICP influenceri:
[20 imena]

Partneri:
[15 imena]

Eksperti kategorije:
[15 imena]

Klijenti / zagovornici:
[10 imena]

2. Prioritet komentara

A-prioritet:
Direktni ICP kupci i target account-i.
Proveravaj dnevno.

B-prioritet:
Influenceri, partneri i ljudi sa ICP publikom.
Proveravaj 2-3 puta nedeljno.

C-prioritet:
Korisni glasovi na tržištu.
Proveravaj nedeljno.

3. Dnevni ritam

Svakog radnog dana:

- 5 komentara na ICP kupce
- 3 komentara na ICP influencere
- 2 komentara na partnere / eksperte
- odgovori na svaki relevantan odgovor
- sačuvaj jake komentare za repurposing

4. Formula vrednog komentara

Slaži se sa / referiši:
[specifična poenta]

Dodaj:
[uvid, primer ili reframe]

Objasni:
[zašto je bitno]

Pitaj:
[promišljeno pitanje]

5. Šabloni komentara

Komentar uvida:
„Slažem se sa tvojom poentom o [X]. Deo koji bih dodao je [Y]. Često vidimo ovo kad [Z].“

Komentar primera:
„Ovo me podseća na [primer]. Ključna lekcija je bila [lekcija].“

Reframe komentar:
„Malo bih drugačije uokvirilo: problem nije [površinski problem], već [dublji problem].“

Komentar pitanja:
„Zanima me kako gledaš na [specifično pitanje] kad [scenario]?“

6. Comment-to-content sistem

Svake petke, pregledaj:

Najbolji komentar:
[komentar]

Tema:
[tema]

ICP bol:
[bol]

Pretvori u:
- LinkedIn post
- webinar ugao
- outreach opener
- CRM tag
- sekciju checklist-e

7. CRM praćenje

Dodaj ova polja:

Prvi touchpoint:
LinkedIn komentar

Tema komentara:
[tema]

Nivo odnosa:
blag / srednji / jak

Signal:
odgovor / profile view / follow / DM / ponovljen angažman

Sledeća akcija:
angažuj / nurture / DM / pošalji asset / zakaži call

8. Pravila outreach trigger-a

Šalji kontekstualni outreach samo kad:

- odgovore na tvoj komentar;
- pogledaju tvoj profil;
- te prate;
- angažuju se na tvom postu;
- se više puta pojave oko iste teme;
- postave relevantno pitanje;
- odgovaraju ICP-u i pokazuju timing trigger.

Primer DM-a:

„Hej [Ime], razmenili smo mišljenja o [tema].

Vidimo isti obrazac kod [ICP]: [problem].

Imam kratak [checklist/šablon/resurs] o ovome.

Da pošaljem?“`,
            `1. ICP engagement list

Create 100 people:

ICP buyers:
[40 names]

ICP influencers:
[20 names]

Partners:
[15 names]

Category experts:
[15 names]

Customers / advocates:
[10 names]

2. Comment priority

A-priority:
Direct ICP buyers and target accounts.
Check daily.

B-priority:
Influencers, partners, and people with ICP audience.
Check 2-3x per week.

C-priority:
Useful market voices.
Check weekly.

3. Daily rhythm

Every weekday:

- 5 comments on ICP buyers
- 3 comments on ICP influencers
- 2 comments on partners / experts
- reply to every relevant response
- save strong comments for repurposing

4. Value comment formula

Agree with / reference:
[specific point]

Add:
[insight, example, or reframe]

Explain:
[why it matters]

Ask:
[thoughtful question]

5. Comment templates

Insight comment:
"Agree with your point on [X]. The part I'd add is [Y]. We see this often when [Z]."

Example comment:
"This reminds me of [example]. The key lesson was [lesson]."

Reframe comment:
"I'd frame this slightly differently: the issue is not [surface problem], it is [deeper problem]."

Question comment:
"Curious how you think about [specific question] when [scenario]?"

6. Comment-to-content system

Every Friday, review:

Best comment:
[comment]

Topic:
[topic]

ICP pain:
[pain]

Turn into:
- LinkedIn post
- webinar angle
- outreach opener
- CRM tag
- checklist section

7. CRM tracking

Add these fields:

First touchpoint:
LinkedIn comment

Comment topic:
[topic]

Relationship level:
light / medium / strong

Signal:
reply / profile view / follow / DM / repeated engagement

Next action:
engage / nurture / DM / send asset / book call

8. Outreach trigger rules

Send contextual outreach only when:

- they replied to your comment;
- they viewed your profile;
- they followed you;
- they engaged with your post;
- they appeared multiple times around the same topic;
- they asked a relevant question;
- they match ICP and show a timing trigger.

Example DM:

"Hey [Name], we exchanged thoughts on [topic].

We're seeing the same pattern with [ICP]: [problem].

I have a short [checklist/template/resource] on this.

Want me to send it?"`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Zašto je komentarisanje važno u Founder-Led Growth-u?", "Why is commenting important in Founder-Led Growth?"),
      answer: L(
        "Komentarisanje pomaže founder-u da postane vidljiv pravim kupcima pre outreach-a. Stvara prepoznatljivost, pokazuje ekspertizu, pokreće odnose i čini buduće poruke manje hladnim.",
        "Commenting helps the founder become visible to the right buyers before sending outreach. It creates familiarity, shows expertise, starts relationships, and makes future messages feel less cold.",
      ),
    },
    {
      question: L("Koliko komentara founder treba da ostavi dnevno?", "How many comments should a founder leave per day?"),
      answer: L(
        "Dobar početak je 10 korisnih komentara po radnom danu. Kvalitet je važniji od obima. Bolje je 10 promišljenih komentara na ICP-relevantnim postovima nego 50 plitkih na nasumičnim postovima.",
        "A good starting point is 10 useful comments per weekday. Quality matters more than volume. It is better to leave 10 thoughtful comments on ICP-relevant posts than 50 shallow comments on random posts.",
      ),
    },
    {
      question: L("Šta čini dobar LinkedIn komentar?", "What makes a good LinkedIn comment?"),
      answer: L(
        "Dobar komentar dodaje jednu od četiri stvari: uvid, primer, reframe ili promišljeno pitanje. Treba da bude specifičan, koristan i relevantan razgovoru.",
        "A good comment adds one of four things: insight, example, reframe, or thoughtful question. It should be specific, useful, and relevant to the conversation.",
      ),
    },
    {
      question: L("Da li founder-i treba da komentarišu postove velikih kreatora?", "Should founders comment on big creators' posts?"),
      answer: L(
        "Da, ali samo kad se publika kreatora preklapa sa tvojim ICP-om. Ne juri reach radi reach-a. Komentariši tamo gde kupci već obraćaju pažnju.",
        "Yes, but only when the creator's audience overlaps with your ICP. Do not chase reach for the sake of reach. Comment where your buyers already pay attention.",
      ),
    },
    {
      question: L("Kada komentar treba da postane DM?", "When should a comment turn into a DM?"),
      answer: L(
        "Komentar treba da postane DM kad ima stvarnog konteksta. Dobri triggeri: osoba odgovori na komentar; pogleda profil; prati te; angažuje se na postu; ponovljen interes za istu temu; postavi relevantno pitanje.",
        "A comment should turn into a DM when there is real context. Good triggers include: the person replied to your comment; they viewed your profile; they followed you; they engaged with your post; they showed repeated interest around the same topic; they asked a relevant question.",
      ),
    },
    {
      question: L("Da li komentare treba pratiti u CRM-u?", "Should comments be tracked in CRM?"),
      answer: L(
        "Da, ako je osoba ili account visokog fit-a. Founder-Led Growth bolje radi kad odnosi iz komentara ne nestanu u LinkedIn-u. Prati prvi touchpoint, temu, nivo signala i sledeću akciju.",
        "Yes, if the person or account is high-fit. Founder-Led Growth works better when comment-driven relationships do not disappear inside LinkedIn. Track first touchpoint, topic, signal level, and next action.",
      ),
    },
    {
      question: L("Koja je najveća greška founder-a pri LinkedIn komentarisanju?", "What is the biggest mistake founders make with LinkedIn commenting?"),
      answer: L(
        "Najveća greška je nasumično komentarisanje. Nasumičan angažman stvara nasumičnu vidljivost. Strateško komentarisanje fokusira ICP kupce, relevantne razgovore i gradnju odnosa pre outreach-a.",
        "The biggest mistake is commenting randomly. Random engagement creates random visibility. Strategic commenting focuses on ICP buyers, relevant conversations, and relationship-building before outreach.",
      ),
    },
  ],
  sources: [
    { title: L("LinkedIn Sales Solutions - Social Selling", "LinkedIn Sales Solutions - Social Selling"), url: "https://business.linkedin.com/sales-solutions/social-selling" },
    { title: L("LinkedIn Sales Solutions - Social Selling Index / SSI", "LinkedIn Sales Solutions - Social Selling Index / SSI"), url: "https://business.linkedin.com/sell/resources/SSI" },
    { title: L("LinkedIn Sales Navigator", "LinkedIn Sales Navigator"), url: "https://business.linkedin.com/sell/sales-navigator" },
    { title: L("LinkedIn Sales Solutions - Deep Sales Playbook", "LinkedIn Sales Solutions - Deep Sales Playbook"), url: "https://business.linkedin.com/sales-solutions/deep-sales-playbook" },
    { title: L("LinkedIn Marketing Solutions - Ultimate Guide to Improve Your B2B Content Marketing Strategy", "LinkedIn Marketing Solutions - Ultimate Guide to Improve Your B2B Content Marketing Strategy"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/the-ultimate-guide-to-improve-your-b2b-content-marketing-strategy" },
    { title: L("LinkedIn Marketing Blog - Thought Leadership and Hidden Buyers", "LinkedIn Marketing Blog - Thought Leadership and Hidden Buyers"), url: "https://www.linkedin.com/business/marketing/blog/research-and-insights/b2b-thought-leadership-influence-hidden-buyers" },
    { title: L("Highspot - Complete Guide to Social Selling for B2B Sales", "Highspot - Complete Guide to Social Selling for B2B Sales"), url: "https://www.highspot.com/blog/social-selling-guide-b2b-sales/" },
    { title: L("SWAT.io - LinkedIn Comments: Top Strategies for More Visibility", "SWAT.io - LinkedIn Comments: Top Strategies for More Visibility"), url: "https://swat.io/en/engage/linkedin-comments/" },
    { title: L("PhantomBuster - LinkedIn Social Selling Guide", "PhantomBuster - LinkedIn Social Selling Guide"), url: "https://phantombuster.com/blog/social-selling/linkedin-social-selling/" },
    { title: L("HeyReach - LinkedIn Social Selling Guide", "HeyReach - LinkedIn Social Selling Guide"), url: "https://www.heyreach.io/blog/linkedin-social-selling" },
    { title: L("AuthoredUp - LinkedIn Content Strategy", "AuthoredUp - LinkedIn Content Strategy"), url: "https://authoredup.com/blog/linkedin-content-strategy" },
    { title: L("HubSpot - How to Use LinkedIn for Business Marketing", "HubSpot - How to Use LinkedIn for Business Marketing"), url: "https://offers.hubspot.com/how-to-use-linkedin-business-marketing" },
  ],
  relatedLessons: {
    previous: {
      slug: "write-educational-linkedin-posts",
      title: L(
        "Lekcija 5 - Kako pisati edukativne LinkedIn postove koji grade autoritet",
        "Lesson 5 - How to Write Educational LinkedIn Posts That Build Authority",
      ),
    },
    next: {
      slug: "linkedin-engagement-outreach-list",
      title: L(
        "Lekcija 7 - Kako pretvoriti LinkedIn engagement u outreach listu",
        "Lesson 7 - How to Turn LinkedIn Engagement Into an Outreach List",
      ),
      note: L(
        "Sledeća lekcija pokazuje kako pretvoriti engagement u outreach listu bez hladnog ili spam osećaja.",
        "The next lesson shows how to turn engagement into an outreach list without feeling cold or spammy.",
      ),
    },
    related: [
      {
        slug: "what-founder-led-growth-is",
        title: L(
          "Lekcija 1 - Šta je Founder-Led Growth",
          "Lesson 1 - What Founder-Led Growth Is and Why It Works for B2B Companies",
        ),
      },
      {
        slug: "how-to-define-your-icp",
        title: L(
          "Lekcija 2 - Kako definisati ICP za Founder-Led Growth",
          "Lesson 2 - How to Define Your ICP for Founder-Led Growth",
        ),
      },
      {
        slug: "linkedin-profile-optimization-founder",
        title: L(
          "Lekcija 3 - Kako optimizovati LinkedIn profil founder-a za B2B lead generation",
          "Lesson 3 - How to Optimize a Founder's LinkedIn Profile for B2B Lead Generation",
        ),
      },
      {
        slug: "linkedin-content-strategy-founder",
        title: L(
          "Lekcija 4 - Kako napraviti LinkedIn content strategiju za founder-a",
          "Lesson 4 - How to Build a LinkedIn Content Strategy for a Founder",
        ),
      },
      {
        slug: "crm-za-founder-led-growth",
        title: L(
          "Lekcija 10 - Kako pratiti Founder-Led Growth aktivnosti u CRM-u",
          "Lesson 10 - How to Track Founder-Led Growth Activities in Your CRM",
        ),
      },
      {
        slug: "buying-signals-b2b-sales",
        title: L(
          "Lekcija 11 - Šta su buying signali i kako ih koristiti u B2B prodaji",
          "Lesson 11 - What Buying Signals Are and How to Use Them in B2B Sales",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Komentarisanje je način na koji founder-led odnosi počinju pre outreach-a.",
      "Commenting is how founder-led relationships start before outreach.",
    ),
    body: L(
      "Kad komentarišeš strateški, kupci vide tvoje razmišljanje pre nego što stigne poruka. To menja ceo sales motion. Profile visit-i postaju topliji. DM-ovi deluju manje nasumično. Outreach ima kontekst. Content postaje bolji. CRM hvata prave relationship signale. Sledeća lekcija pokazuje kako pretvoriti LinkedIn engagement u outreach listu bez hladnog ili spam osećaja.",
      "When you comment strategically, buyers see your thinking before they ever receive your message. That changes the whole sales motion. Your profile visits get warmer. Your DMs feel less random. Your outreach has context. Your content gets better. Your CRM captures real relationship signals. The next lesson shows how to turn LinkedIn engagement into an outreach list without making the process feel cold or spammy.",
    ),
    primaryLabel: L("Nastavi na lekciju 7", "Continue Lesson 7"),
    secondaryLabel: L("Zakaži konsultaciju", "Book consultation"),
  },
  seoKeywords: P(
    [
      "LinkedIn strategija komentarisanja",
      "LinkedIn komentarisanje za B2B",
      "LinkedIn engagement strategija",
      "B2B social selling LinkedIn",
      "LinkedIn komentari za vidljivost",
      "founder LinkedIn angažman",
      "LinkedIn ICP angažman",
      "LinkedIn social selling strategija",
      "LinkedIn gradnja odnosa",
      "LinkedIn top outreach",
      "Founder-Led Growth komentarisanje",
      "LinkedIn commenting strategy",
      "LinkedIn commenting for B2B",
      "LinkedIn engagement strategy",
      "founder LinkedIn engagement",
      "LinkedIn warm outreach",
    ],
    [
      "LinkedIn commenting strategy",
      "LinkedIn commenting for B2B",
      "LinkedIn engagement strategy",
      "B2B social selling LinkedIn",
      "LinkedIn comments for visibility",
      "founder LinkedIn engagement",
      "LinkedIn ICP engagement",
      "LinkedIn social selling strategy",
      "LinkedIn relationship building",
      "LinkedIn warm outreach",
      "Founder-Led Growth commenting",
    ],
  ),
};

