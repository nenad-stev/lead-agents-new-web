import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("What Is Inbound Marketing?", "What Is Inbound Marketing?"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za razumevanje inbound strane sistema: privlačenje, konverzija i nurture kupaca.",
    "Useful for understanding the inbound side of the system: attracting, converting, and nurturing buyers.",
  ),
  placementNote: L("Pogledaj posle core sekcije ili u video sekciji.", "Watch after the core idea section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/R0UWvdyABFo",
  watchUrl: "https://www.youtube.com/watch?v=R0UWvdyABFo",
};

const video2 = {
  title: L("HubSpot CRM Tutorial for Beginners", "HubSpot CRM Tutorial for Beginners"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za izgradnju CRM sloja inbound-to-outbound sistema.",
    "Useful for building the CRM layer of the inbound-to-outbound system.",
  ),
  placementNote: L("Pogledaj posle system-steps sekcije ili u video sekciji.", "Watch after the system steps section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/GBS7XK3H4k4",
  watchUrl: "https://www.youtube.com/watch?v=GBS7XK3H4k4",
};

const video3 = {
  title: L("How To Create a B2B Content Strategy that ACTUALLY Converts", "How To Create a B2B Content Strategy that ACTUALLY Converts"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Relevantno za povezivanje content-a sa konverzijom i sales ishodima.",
    "Relevant for connecting content to conversion and sales outcomes.",
  ),
  placementNote: L("Pogledaj posle framework sekcije ili u video sekciji.", "Watch after the framework section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/QLsrenrNDe0",
  watchUrl: "https://www.youtube.com/watch?v=QLsrenrNDe0",
};

const video4 = {
  title: L("10x LinkedIn Outreach | HeyReach x Clay Webinar", "10x LinkedIn Outreach | HeyReach x Clay Webinar"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za razumevanje kako enriched signali i LinkedIn outreach mogu da se povežu.",
    "Useful for understanding how enriched signals and LinkedIn outreach can connect.",
  ),
  placementNote: L("Pogledaj posle implement sekcije ili u video sekciji.", "Watch after the implement section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/-bYqiz9QDEw",
  watchUrl: "https://www.youtube.com/watch?v=-bYqiz9QDEw",
};

const video5 = {
  title: L("How to Automate CRM Workflows with Zapier", "How to Automate CRM Workflows with Zapier"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za automatizaciju signal routing-a između formi, CRM-a, outreach alata i notifikacija.",
    "Useful for automating signal routing between forms, CRM, outreach tools, and notifications.",
  ),
  placementNote: L("Pogledaj posle implement sekcije ili u video sekciji.", "Watch after the implement section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/JMNhks8i5t8",
  watchUrl: "https://www.youtube.com/watch?v=JMNhks8i5t8",
};

export const lesson12RichContent: RichLessonContent = {
  meta: {
    stage: L("Intent Signals", "Intent Signals"),
    readingTime: L("18-22 min", "18-22 min"),
    difficulty: L("Srednji do napredni nivo", "Intermediate to advanced"),
    outcome: L(
      "Izgradićeš kompletan Founder-Led Growth operativni sistem gde LinkedIn content, profile visits, komentari, webinari, lead magneti, CRM signali, ads i outreach rade zajedno kao jedan predvidljiv pipeline motor.",
      "Build a complete Founder-Led Growth operating system where LinkedIn content, profile visits, comments, webinars, lead magnets, CRM signals, ads, and outreach work together as one predictable pipeline engine.",
    ),
    recommendedTools: L(
      "LinkedIn, LinkedIn Sales Navigator, HubSpot, Pipedrive, Attio, Clay, Apollo, HeyReach, Lemlist, Smartlead, Make.com, Zapier, Google Sheets, Airtable, Livestorm, Zoom Webinars, Calendly",
      "LinkedIn, LinkedIn Sales Navigator, HubSpot, Pipedrive, Attio, Clay, Apollo, HeyReach, Lemlist, Smartlead, Make.com, Zapier, Google Sheets, Airtable, Livestorm, Zoom Webinars, Calendly",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 12", "Lesson 12"),
    title: L(
      "Kako napraviti inbound-to-outbound sistem",
      "How to Build an Inbound-to-Outbound System",
    ),
    paragraphs: P(
      [
        "Lead Agents Founder-Led Growth nije izbor između inbound-a i outbound-a. To je jedna petlja konekcije sa ICP-om.",
        "Outreach otvara razgovor (cold, direktno). Content iz intervjua gradi poverenje. Signali (komentar, view, webinar, download) govore kada je lead spreman za sledeći korak.",
        "Ako nema odgovora na outreach, follow-up sistem u HeyReach, Lemlist ili La Growth Machine šalje value-based dodire dok trenutak ne dođe, ne dosadne bump poruke.",
        "Kada se pojavi signal, re-engagement referencira stvarnu interakciju i nastavlja razgovor. CRM drži stanje: no_reply, signal_reengage, nurture, meeting.",
        "Webinari, lead magneti i ads hrane istu listu. Sales ne pita „odakle je lead“ posle mesec dana, već vidi celu istoriju dodira.",
        "Inbound-to-outbound znači: ponašanje kupca na LinkedIn-u i sajtu određuje sledeću akciju tima, u pravom trenutku, sa pravom porukom.",
      ],
      [
        "Lead Agents Founder-Led Growth is not a choice between inbound and outbound. It is one ICP connection loop.",
        "Outreach opens the conversation (cold, direct). Interview-based content builds trust. Signals (comment, view, webinar, download) tell you when the lead is ready for the next step.",
        "If outreach gets no reply, a follow-up system in HeyReach, Lemlist, or La Growth Machine sends value-based touches until timing is right, not annoying bump messages.",
        "When a signal appears, re-engagement references the real interaction and continues the conversation. CRM holds state: no_reply, signal_reengage, nurture, meeting.",
        "Webinars, lead magnets, and ads feed the same list. Sales does not ask \"where did this lead come from\" a month later; they see the full touch history.",
        "Inbound-to-outbound means buyer behavior on LinkedIn and the site determines the team's next action, at the right moment, with the right message.",
      ],
    ),
    callout: L(
      "Outreach povezuje. Content gradi poverenje. Signali pokreću re-engagement. CRM + value-based follow-up drže petlju živom.",
      "Outreach connects. Content builds trust. Signals trigger re-engagement. CRM + value-based follow-up keep the loop alive.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "inbound-vs-outbound", title: L("Inbound vs outbound vs inbound-to-outbound", "Inbound vs outbound vs inbound-to-outbound") },
    { id: "flg-system", title: L("Kompletan FLG sistem", "The full Founder-Led Growth operating system") },
    { id: "framework", title: L("Inbound-to-outbound okvir", "The Inbound-to-Outbound Framework") },
    { id: "system-steps", title: L("Korak po korak: sistem setup", "Step-by-step system setup") },
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
              "povezati content, webinare, lead magnete, CRM i outreach;",
              "pretvoriti inbound signale u outbound akcije;",
              "definisati koji signali treba da trigger-uju follow-up;",
              "graditi workflow-e za LinkedIn engagement, webinar attendance i website posete;",
              "kreirati outreach poruke na osnovu stvarnog konteksta;",
              "rutirati lead-ove po signal strength i ICP fit-u;",
              "graditi report-e koji pokazuju pipeline influence;",
              "izbeći random follow-up i over-automation;",
              "voditi nedeljni operating rhythm za ceo Founder-Led Growth sistem.",
            ],
            [
              "connect content, webinars, lead magnets, CRM, and outreach;",
              "turn inbound signals into outbound actions;",
              "define which signals should trigger follow-up;",
              "build workflows for LinkedIn engagement, webinar attendance, and website visits;",
              "create outreach messages based on real context;",
              "route leads by signal strength and ICP fit;",
              "build reports that show pipeline influence;",
              "avoid random follow-up and over-automation;",
              "run a weekly operating rhythm for the whole Founder-Led Growth system.",
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
              "B2B kupci ne kreću se u pravoj liniji.",
              "Gartner opisuje B2B buying journey kao nelinearan, gde kupci završavaju i ponovo posete buying jobs poput identifikacije problema, istraživanja rešenja, definisanja zahteva i izbora dobavljača.",
              "HubSpot inbound marketing model je izgrađen oko privlačenja prospect-a relevantnim content-om, konverzije u lead-ove i kupce, i nurture kroz buyer journey.",
              "LinkedIn 95-5 Rule podseća B2B timove da mnogi kupci nisu in-market sada. Posao je kreirati memory i relevance pre nego što budu spremni.",
              "Te ideje pripadaju zajedno.",
              "Content kreira memory.",
              "Signali otkrivaju kretanje.",
              "Outbound pretvara kretanje u razgovor.",
              "CRM pretvara razgovor u merljiv pipeline.",
              "Ovo je nedostajuća veza u većini founder-led sistema.",
              "Kreiraju inbound pažnju ali ne znaju kada da deluju.",
              "Ili šalju outbound poruke bez ikakvog konteksta.",
              "Inbound-to-outbound to rešava.",
            ],
            [
              "B2B buyers do not move in a straight line.",
              "Gartner describes the B2B buying journey as nonlinear, where buyers complete and revisit buying jobs such as problem identification, solution exploration, requirements building, and supplier selection.",
              "HubSpot's inbound marketing model is built around attracting prospects with relevant content, converting them into leads and customers, and nurturing them through the buyer journey.",
              "LinkedIn's 95-5 Rule reminds B2B teams that many buyers are not in-market right now. The job is to create memory and relevance before they are ready.",
              "Those ideas belong together.",
              "Content creates memory.",
              "Signals reveal movement.",
              "Outbound turns movement into conversation.",
              "CRM turns conversation into measurable pipeline.",
              "This is the missing link in most founder-led systems.",
              "They create inbound attention but do not know when to act.",
              "Or they send outbound messages without any context.",
              "Inbound-to-outbound fixes that.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Inbound kreira signal. Outbound deluje na signal. CRM pamti signal.",
            "Inbound creates the signal. Outbound acts on the signal. CRM remembers the signal.",
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
              "Inbound-to-outbound znači korišćenje buyer ponašanja da odlučiš ko se kontaktira, kada i sa kojom porukom.",
              "Ne svako ko se angažuje treba da dobije pitch.",
              "Ne svako ko downloaduje checklist je spreman za sales.",
              "Ne svako ko prisustvuje webinaru je kvalifikovana opportunity.",
              "Ali svaki značajan signal treba da ima next action.",
              "Ta akcija može biti:",
            ],
            [
              "Inbound-to-outbound means using buyer behavior to decide who gets contacted, when, and with what message.",
              "Not everyone who engages should get a pitch.",
              "Not everyone who downloads a checklist is ready for sales.",
              "Not everyone who attends a webinar is a qualified opportunity.",
              "But every meaningful signal should have a next action.",
              "That action might be:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "engage back;",
              "add to warm list;",
              "send a resource;",
              "invite to webinar;",
              "start a DM;",
              "send email follow-up;",
              "create CRM task;",
              "create deal;",
              "add to nurture;",
              "retarget with paid ads.",
            ],
            [
              "engage back;",
              "add to warm list;",
              "send a resource;",
              "invite to webinar;",
              "start a DM;",
              "send email follow-up;",
              "create CRM task;",
              "create deal;",
              "add to nurture;",
              "retarget with paid ads.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Sistem je jednostavan:", "Signal → Qualification → Context → Follow-up → CRM → Pipeline"],
            ["The system is simple:", "Signal → Qualification → Context → Follow-up → CRM → Pipeline"],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Cilj nije više lead-ova. Cilj je manje propuštenih trenutaka.",
            "The goal is not more leads. The goal is fewer missed moments.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "inbound-vs-outbound",
      title: L("Inbound vs outbound vs inbound-to-outbound", "Inbound vs outbound vs inbound-to-outbound"),
      blocks: [
        {
          type: "table",
          caption: L("Poređenje", "Comparison"),
          headers: H(["Motion", "What it does", "Strength", "Weakness"], ["Motion", "What it does", "Strength", "Weakness"]),
          rows: [
            {
              cells: [
                L("Inbound", "Inbound"),
                L("Privlači kupce kroz content, SEO, webinare, referral-e, lead magnete", "Attracts buyers through content, SEO, webinars, referrals, lead magnets"),
                L("Visok trust i buyer-initiated interest", "High trust and buyer-initiated interest"),
                L("Može biti pasivan i spor ako nema follow-up", "Can be passive and slow if not followed up"),
              ],
            },
            {
              cells: [
                L("Outbound", "Outbound"),
                L("Proaktivno kontaktira target account-e", "Proactively contacts target accounts"),
                L("Kreira kontrolu i brzinu", "Creates control and speed"),
                L("Deluje cold kada nema konteksta", "Feels cold when there is no context"),
              ],
            },
            {
              cells: [
                L("Inbound-to-outbound", "Inbound-to-outbound"),
                L("Koristi inbound ponašanje da trigger-uje kontekstualni outbound", "Uses inbound behavior to trigger contextual outbound"),
                L("Bolji timing, relevance i konverzija", "Better timing, relevance, and conversion"),
                L("Zahteva CRM disciplinu i signal routing", "Requires CRM discipline and signal routing"),
              ],
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Inbound-to-outbound nije kanal.",
              "To je operativni sistem.",
            ],
            [
              "Inbound-to-outbound is not a channel.",
              "It is an operating system.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "flg-system",
      title: L("Kompletan Founder-Led Growth operativni sistem", "The full Founder-Led Growth operating system"),
      blocks: [
        {
          type: "table",
          caption: L("12 lekcija, jedan sistem", "12 lessons, one system"),
          headers: H(["#", "Lekcija", "Faza"], ["#", "Lesson", "Phase"]),
          rows: [
            { cells: [L("1", "1"), L("Strategy & Positioning", "Strategy & Positioning"), L("Strategy & Positioning", "Strategy & Positioning")] },
            { cells: [L("2", "2"), L("ICP", "ICP"), L("Strategy & Positioning", "Strategy & Positioning")] },
            { cells: [L("3", "3"), L("Founder LinkedIn Profile", "Founder LinkedIn Profile"), L("LinkedIn Profile", "LinkedIn Profile")] },
            { cells: [L("4", "4"), L("Content Strategy", "Content Strategy"), L("Content Engine", "Content Engine")] },
            { cells: [L("5", "5"), L("Educational Posts", "Educational Posts"), L("Content Engine", "Content Engine")] },
            { cells: [L("6", "6"), L("Commenting", "Commenting"), L("Engagement Engine", "Engagement Engine")] },
            { cells: [L("7", "7"), L("Engagement-to-Outreach List", "Engagement-to-Outreach List"), L("Engagement Engine", "Engagement Engine")] },
            { cells: [L("8", "8"), L("Webinars", "Webinars"), L("Webinar Engine", "Webinar Engine")] },
            { cells: [L("9", "9"), L("LinkedIn Ads Boost", "LinkedIn Ads Boost"), L("LinkedIn Ads Boost", "LinkedIn Ads Boost")] },
            { cells: [L("10", "10"), L("CRM Tracking", "CRM Tracking"), L("CRM & Pipeline", "CRM & Pipeline")] },
            { cells: [L("11", "11"), L("Buying Signals", "Buying Signals"), L("Intent Signals", "Intent Signals")] },
            { cells: [L("12", "12"), L("Inbound-to-Outbound System", "Inbound-to-Outbound System"), L("Intent Signals", "Intent Signals")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Svaka lekcija rešava jedan deo sistema.",
              "Ali Lekcija 12 povezuje sve.",
              "Bez ovog finalnog sloja, kompanija ima aktivnost.",
              "Sa ovim slojem, kompanija ima pipeline motor.",
            ],
            [
              "Each lesson solves one part of the system.",
              "But Lesson 12 connects everything.",
              "Without this final layer, the company has activity.",
              "With this layer, the company has a pipeline engine.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "framework",
      title: L("Inbound-to-Outbound okvir", "The Inbound-to-Outbound Framework"),
      blocks: [
        {
          type: "framework-intro",
          title: L(
            "Attract → Capture → Score → Route → Personalize → Follow Up → Report",
            "Attract → Capture → Score → Route → Personalize → Follow Up → Report",
          ),
          description: L(
            "Ovo je kompletan sistem.",
            "This is the complete system.",
          ),
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Attract", "Attract"),
              whatToDo: L("Koristi founder content, profile, komentare, webinare, lead magnete i ads da kreiraš pažnju.", "Use founder content, profile, comments, webinars, lead magnets, and ads to create attention."),
              whyItMatters: L("Bez pažnje nema signala.", "Without attention, there are no signals."),
              example: L("Founder post, webinar invite, Thought Leader Ad, lead magnet.", "Founder post, webinar invite, Thought Leader Ad, lead magnet."),
              commonMistake: L("Kreiranje content-a bez capture mehanizma.", "Creating content without a capture mechanism."),
              tryThis: L("Svaki content asset treba da ima jasan next step.", "Every content asset should have a clear next step."),
              highlight: L("Attract kreira pažnju.", "Attract creates attention."),
            },
            {
              step: 2,
              title: L("Capture", "Capture"),
              whatToDo: L("Prikupi signale sa LinkedIn-a, formi, webinara, website poseta i CRM aktivnosti.", "Collect signals from LinkedIn, forms, webinars, website visits, and CRM activity."),
              whyItMatters: L("Signali bez capture-a se gube.", "Signals without capture are lost."),
              example: L("Komentar, registracija, download, pricing visit, DM.", "Comment, registration, download, pricing visit, DM."),
              commonMistake: L("Signali ostaju u alatima, ne u CRM-u.", "Signals stay in tools, not CRM."),
              tryThis: L("Centralizuj signale u CRM ili staging listu.", "Centralize signals in CRM or a staging list."),
              highlight: L("Capture hvata signal.", "Capture catches the signal."),
            },
            {
              step: 3,
              title: L("Score", "Score"),
              whatToDo: L("Evaluiraj ICP fit, signal strength, topic, recency i buyer role.", "Evaluate ICP fit, signal strength, topic, recency, and buyer role."),
              whyItMatters: L("Score određuje prioritet.", "Score determines priority."),
              example: L("High fit + strong signal + relevant topic = priority action.", "High fit + strong signal + relevant topic = priority action."),
              commonMistake: L("Delovanje na svaki signal jednako.", "Acting on every signal equally."),
              tryThis: L("Koristi fit + signal pre nego što pošalješ outreach.", "Use fit + signal before sending outreach."),
              highlight: L("Score kvantifikuje intent.", "Score quantifies intent."),
            },
            {
              step: 4,
              title: L("Route", "Route"),
              whatToDo: L("Odluči ko dobija nurture, ko DM, ko email follow-up, i ko postaje sales task.", "Decide who gets nurtured, who gets a DM, who gets email follow-up, and who becomes a sales task."),
              whyItMatters: L("Routing sprečava random follow-up.", "Routing prevents random follow-up."),
              example: L("High fit + medium signal = contextual DM. High fit + strong = sales task.", "High fit + medium signal = contextual DM. High fit + strong = sales task."),
              commonMistake: L("Routing samo po signalu, bez ICP fit-a.", "Routing based only on signal, without ICP fit."),
              tryThis: L("Kreiraj routing tabelu i drži se nje.", "Create a routing table and stick to it."),
              highlight: L("Route određuje akciju.", "Route determines action."),
            },
            {
              step: 5,
              title: L("Personalize", "Personalize"),
              whatToDo: L("Napiši outreach na osnovu signala i teme.", "Write outreach based on the signal and topic."),
              whyItMatters: L("Kontekst povećava reply rate.", "Context increases reply rate."),
              example: L("Webinar question → reference question + send checklist.", "Webinar question → reference question + send checklist."),
              commonMistake: L("Ista „book a call“ poruka za sve.", "Same \"book a call\" message for everyone."),
              tryThis: L("Počni sa usefulness, ne sa pitch-om.", "Start with usefulness, not a pitch."),
              highlight: L("Personalize daje relevance.", "Personalize gives relevance."),
            },
            {
              step: 6,
              title: L("Follow Up", "Follow Up"),
              whatToDo: L("Koristi kratke, poštovane sekvence koje nastavljaju razgovor.", "Use short, respectful sequences that continue the conversation."),
              whyItMatters: L("Jedan touch retko zatvara deal.", "One touch rarely closes a deal."),
              example: L("Replay → DM → email → soft invite.", "Replay → DM → email → soft invite."),
              commonMistake: L("Over-automation warm lead-ova.", "Over-automating warm leads."),
              tryThis: L("Automatizuj routing, ne kontekst poruka.", "Automate routing, not message context."),
              highlight: L("Follow up nastavlja momentum.", "Follow up continues momentum."),
            },
            {
              step: 7,
              title: L("Report", "Report"),
              whatToDo: L("Prati conversations, opportunities, revenue influence i šta poboljšati.", "Track conversations, opportunities, revenue influence, and what to improve."),
              whyItMatters: L("Bez report-a ne znaš šta radi.", "Without reporting, you do not know what works."),
              example: L("Signal-to-conversation, content-to-pipeline, webinar-to-revenue.", "Signal-to-conversation, content-to-pipeline, webinar-to-revenue."),
              commonMistake: L("Reporting samo impressions i registracija.", "Reporting only impressions and registrations."),
              tryThis: L("Prati signal → conversation → qualified → opportunity → revenue.", "Track signal → conversation → qualified → opportunity → revenue."),
              highlight: L("Report zatvara learning loop.", "Report closes the learning loop."),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Ovo je trenutak kada Founder-Led Growth prestaje da bude content i postaje revenue infrastruktura.",
            "This is the moment Founder-Led Growth stops being content and becomes revenue infrastructure.",
          ),
        },
        { type: "video", video: video3 },
      ],
    },
    {
      type: "section",
      id: "system-steps",
      title: L("Korak po korak: sistem setup", "Step-by-step system setup"),
      blocks: [
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Definiši signale koji trigger-uju akciju", "Define the signals that trigger action"),
              whatToDo: L(
                "Izaberi signale koji treba da pomeraju nekoga od inbound pažnje do outbound follow-up-a.\n\nSignal map:\n| Signal | Strength | Next action |\n| Like from ICP | Light | Monitor / engage back |\n| Comment from ICP | Medium | Reply + add to warm list |\n| Repeat engagement | Medium | Soft DM or invite to webinar |\n| Profile view after outreach | Medium | Follow-up with context |\n| Lead magnet download | Medium | Send related resource |\n| Webinar registration | Medium | Pre-event nurture |\n| Webinar attendance | Medium/strong | Send replay + checklist |\n| Webinar question | Strong | Founder DM |\n| CTA click | Strong | Sales task |\n| Pricing/demo page visit | Strong | Sales follow-up |\n| DM asking for help | Strong | Qualify and book call |",
                "Choose the signals that should move someone from inbound attention to outbound follow-up.\n\nSignal map:\n| Signal | Strength | Next action |\n| Like from ICP | Light | Monitor / engage back |\n| Comment from ICP | Medium | Reply + add to warm list |\n| Repeat engagement | Medium | Soft DM or invite to webinar |\n| Profile view after outreach | Medium | Follow-up with context |\n| Lead magnet download | Medium | Send related resource |\n| Webinar registration | Medium | Pre-event nurture |\n| Webinar attendance | Medium/strong | Send replay + checklist |\n| Webinar question | Strong | Founder DM |\n| CTA click | Strong | Sales task |\n| Pricing/demo page visit | Strong | Sales follow-up |\n| DM asking for help | Strong | Qualify and book call |",
              ),
              whyItMatters: L("Bez signal map-e, follow-up je haotičan.", "Without a signal map, follow-up is chaotic."),
              example: L("ICP comment → reply + warm list. Webinar question → founder DM.", "ICP comment → reply + warm list. Webinar question → founder DM."),
              commonMistake: L("Tretiranje svake inbound akcije kao sales-ready.", "Treating every inbound action as sales-ready."),
              tryThis: L("Kreiraj tri action level-a: nurture, soft outreach, sales follow-up.", "Create three action levels: nurture, soft outreach, sales follow-up."),
              highlight: L("Signali određuju akciju.", "Signals determine action."),
            },
            {
              step: 2,
              title: L("Kreiraj routing logiku", "Create the routing logic"),
              whatToDo: L(
                "Odluči šta se dešava posle svakog signala.\n\nRouting table:\n| Fit | Signal strength | Route |\n| Low fit | Any signal | Ignore or low-priority nurture |\n| Medium fit | Light signal | Monitor |\n| Medium fit | Medium signal | Nurture / invite to webinar |\n| Medium fit | Strong signal | Review manually |\n| High fit | Light signal | Engage back |\n| High fit | Medium signal | Contextual DM or resource |\n| High fit | Strong signal | Sales task or founder follow-up |",
                "Decide what happens after each signal.\n\nRouting table:\n| Fit | Signal strength | Route |\n| Low fit | Any signal | Ignore or low-priority nurture |\n| Medium fit | Light signal | Monitor |\n| Medium fit | Medium signal | Nurture / invite to webinar |\n| Medium fit | Strong signal | Review manually |\n| High fit | Light signal | Engage back |\n| High fit | Medium signal | Contextual DM or resource |\n| High fit | Strong signal | Sales task or founder follow-up |",
              ),
              whyItMatters: L("Routing sprečava pogrešan handoff.", "Routing prevents wrong handoffs."),
              example: L("High fit + medium signal = contextual DM.", "High fit + medium signal = contextual DM."),
              commonMistake: L("Routing samo po signalu, bez ICP fit-a.", "Routing based only on signal, without ICP fit."),
              tryThis: L("Nikad ne rutiraj lead u sales samo zbog ponašanja. Zahtevaj fit + signal.", "Never route a lead to sales only because of behavior. Require fit + signal."),
              highlight: L("Fit + signal = route.", "Fit + signal = route."),
            },
            {
              step: 3,
              title: L("Izgradi CRM polja", "Build the CRM fields"),
              whatToDo: L(
                "Dodaj polja koja omogućavaju signal-based follow-up.\n\nMinimum fields:\n| Field | Example |\n| Lead source | LinkedIn, webinar, ad, website, referral |\n| First touchpoint | Founder post, comment, webinar, lead magnet |\n| Signal type | Comment, download, attendance, CTA click |\n| Signal strength | Light, medium, strong |\n| Content topic | ICP, profile, content, outreach, webinar, CRM, signals |\n| ICP fit | High, medium, low |\n| Buyer role | Founder, VP Sales, RevOps, Head of Growth |\n| Next best action | Engage, DM, email, call, nurture |\n| Follow-up date | Date |\n| Campaign / asset | Webinar, checklist, playbook, ad |\n| Pipeline influence | LinkedIn, webinar, ad, outreach |",
                "Add fields that make signal-based follow-up possible.\n\nMinimum fields:\n| Field | Example |\n| Lead source | LinkedIn, webinar, ad, website, referral |\n| First touchpoint | Founder post, comment, webinar, lead magnet |\n| Signal type | Comment, download, attendance, CTA click |\n| Signal strength | Light, medium, strong |\n| Content topic | ICP, profile, content, outreach, webinar, CRM, signals |\n| ICP fit | High, medium, low |\n| Buyer role | Founder, VP Sales, RevOps, Head of Growth |\n| Next best action | Engage, DM, email, call, nurture |\n| Follow-up date | Date |\n| Campaign / asset | Webinar, checklist, playbook, ad |\n| Pipeline influence | LinkedIn, webinar, ad, outreach |",
              ),
              whyItMatters: L("CRM polja omogućavaju routing i reporting.", "CRM fields enable routing and reporting."),
              example: L("Signal type + topic + fit + next action.", "Signal type + topic + fit + next action."),
              commonMistake: L("Gradnja automatizacija pre nego što CRM polja postoje.", "Building automations before CRM fields exist."),
              tryThis: L("Prvo kreiraj polja. Zatim gradí workflow-e.", "Create the fields first. Then build workflows."),
              highlight: L("CRM = system memory.", "CRM = system memory."),
            },
            {
              step: 4,
              title: L("Kreiraj kontekstualne outreach play-e", "Create contextual outreach plays"),
              whatToDo: L(
                "Napiši follow-up poruke na osnovu signala.\n\nLinkedIn comment: „Hey [Name], saw your comment on the post about [topic]. The point you raised around [specific detail] is exactly where a lot of [ICP] get stuck. I have a short [resource] on this if useful.“\n\nWebinar: „Hey [Name], thanks for joining the session on [topic]. You mentioned [poll answer / question / topic]. I can send the checklist we used in the session if helpful.“\n\nLead magnet: „Hey [Name], saw you grabbed the [resource]. Most teams use it when they're trying to solve [problem]. If useful, I can send a quick example of how we apply it with [ICP].“\n\nWebsite: „Hey [Name], teams usually reach this stage when they're comparing how to solve [problem]. Happy to send a breakdown of the main options and trade-offs if useful.“",
                "Write follow-up messages based on the signal.\n\nLinkedIn comment: \"Hey [Name], saw your comment on the post about [topic]. The point you raised around [specific detail] is exactly where a lot of [ICP] get stuck. I have a short [resource] on this if useful.\"\n\nWebinar: \"Hey [Name], thanks for joining the session on [topic]. You mentioned [poll answer / question / topic]. I can send the checklist we used in the session if helpful.\"\n\nLead magnet: \"Hey [Name], saw you grabbed the [resource]. Most teams use it when they're trying to solve [problem]. If useful, I can send a quick example of how we apply it with [ICP].\"\n\nWebsite: \"Hey [Name], teams usually reach this stage when they're comparing how to solve [problem]. Happy to send a breakdown of the main options and trade-offs if useful.\"",
              ),
              whyItMatters: L("Kontekstualne poruke povećavaju reply rate.", "Contextual messages increase reply rate."),
              example: L("Webinar question → reference question + send framework.", "Webinar question → reference question + send framework."),
              commonMistake: L("Ista „book a call“ poruka za svaki inbound lead.", "Sending the same \"book a call\" message to every inbound lead."),
              tryThis: L("Počni sa usefulness. Pređi na call tek kad postoji intent.", "Start with usefulness. Move to the call only when there is intent."),
              highlight: L("Context beats cold pitch.", "Context beats cold pitch."),
            },
            {
              step: 5,
              title: L("Izgradi kratke follow-up sekvence", "Build short follow-up sequences"),
              whatToDo: L(
                "Kreiraj jednostavne, poštovane sekvence po tipu signala.\n\nWebinar attendee sequence:\n| Touch | Channel | Message |\n| 1 | Email | Replay + checklist |\n| 2 | LinkedIn DM | Reference poll/question |\n| 3 | Email | Practical example or template |\n| 4 | LinkedIn | Soft consultation invite |\n| 5 | Email | Final useful resource / nurture |\n\nContent engager sequence:\n| Touch | Channel | Message |\n| 1 | LinkedIn | Reference post engagement + resource |\n| 2 | LinkedIn comment | Continue public relationship |\n| 3 | Email | Send related checklist |\n| 4 | LinkedIn DM | Ask relevant diagnostic question |\n| 5 | Nurture | Add to topic-based content flow |",
                "Create simple, respectful sequences by signal type.\n\nWebinar attendee sequence:\n| Touch | Channel | Message |\n| 1 | Email | Replay + checklist |\n| 2 | LinkedIn DM | Reference poll/question |\n| 3 | Email | Practical example or template |\n| 4 | LinkedIn | Soft consultation invite |\n| 5 | Email | Final useful resource / nurture |\n\nContent engager sequence:\n| Touch | Channel | Message |\n| 1 | LinkedIn | Reference post engagement + resource |\n| 2 | LinkedIn comment | Continue public relationship |\n| 3 | Email | Send related checklist |\n| 4 | LinkedIn DM | Ask relevant diagnostic question |\n| 5 | Nurture | Add to topic-based content flow |",
              ),
              whyItMatters: L("Sekvence održavaju momentum bez spam-a.", "Sequences maintain momentum without spam."),
              example: L("5-touch webinar sequence sa replay, DM, email, invite.", "5-touch webinar sequence with replay, DM, email, invite."),
              commonMistake: L("Over-automation warm lead-ova.", "Over-automating warm leads."),
              tryThis: L("Koristi automation za routing i reminders. Koristi human context za poruke.", "Use automation for routing and reminders. Use human context for messages."),
              highlight: L("Short sequences win.", "Short sequences win."),
            },
            {
              step: 6,
              title: L("Kreiraj nedeljni operating rhythm", "Create the weekly operating rhythm"),
              whatToDo: L(
                "Vodi sistem svake nedelje.\n\nWeekly rhythm:\n| Day | Action |\n| Monday | Review last week's signals and pipeline movement |\n| Tuesday | Publish problem-led content |\n| Wednesday | Follow up with warm signals |\n| Thursday | Run engagement and outreach review |\n| Friday | CRM cleanup, report, and next week planning |\n\nWeekly review questions:\n- Which content created the best signals?\n- Which webinar topic created intent?\n- Which signals turned into replies?\n- Which outreach messages worked?\n- Which leads need nurture?\n- Which accounts should sales prioritize?\n- Which topic should we repeat next week?",
                "Run the system every week.\n\nWeekly rhythm:\n| Day | Action |\n| Monday | Review last week's signals and pipeline movement |\n| Tuesday | Publish problem-led content |\n| Wednesday | Follow up with warm signals |\n| Thursday | Run engagement and outreach review |\n| Friday | CRM cleanup, report, and next week planning |\n\nWeekly review questions:\n- Which content created the best signals?\n- Which webinar topic created intent?\n- Which signals turned into replies?\n- Which outreach messages worked?\n- Which leads need nurture?\n- Which accounts should sales prioritize?\n- Which topic should we repeat next week?",
              ),
              whyItMatters: L("Sistem bez ritma postaje neaktivan.", "A system without rhythm becomes inactive."),
              example: L("30-min Friday pipeline review.", "30-min Friday pipeline review."),
              commonMistake: L("Gradnja sistema ali ne operisanje.", "Building the system but not operating it."),
              tryThis: L("Zakaži 30-min nedeljni Founder-Led Growth pipeline review.", "Schedule a 30-minute weekly Founder-Led Growth pipeline review."),
              highlight: L("Weekly rhythm = operating system.", "Weekly rhythm = operating system."),
            },
            {
              step: 7,
              title: L("Report-uj pipeline movement", "Report on pipeline movement"),
              whatToDo: L(
                "Prati da li inbound-to-outbound kreira revenue.\n\nReports:\n| Report | What it shows |\n| Signal-to-conversation report | Which signals create replies |\n| Content-to-pipeline report | Which topics create opportunities |\n| Webinar-to-revenue report | Which webinars influence deals |\n| Ad-to-lead-quality report | Which paid boosts create qualified leads |\n| Outreach reply report | Which context creates replies |\n| Nurture reactivation report | Which \"not now\" leads return |\n| Revenue influence report | Which activities influenced closed deals |",
                "Track whether inbound-to-outbound is creating revenue.\n\nReports:\n| Report | What it shows |\n| Signal-to-conversation report | Which signals create replies |\n| Content-to-pipeline report | Which topics create opportunities |\n| Webinar-to-revenue report | Which webinars influence deals |\n| Ad-to-lead-quality report | Which paid boosts create qualified leads |\n| Outreach reply report | Which context creates replies |\n| Nurture reactivation report | Which \"not now\" leads return |\n| Revenue influence report | Which activities influenced closed deals |",
              ),
              whyItMatters: L("Reporting pokazuje šta poboljšati.", "Reporting shows what to improve."),
              example: L("Signal → conversation → qualified → opportunity → revenue.", "Signal → conversation → qualified → opportunity → revenue."),
              commonMistake: L("Reporting samo impressions, registracija i lead-ova.", "Reporting only impressions, registrations, and leads."),
              tryThis: L("Prati pun path: signal → conversation → qualified → opportunity → revenue.", "Track the full path: signal → conversation → qualified → opportunity → revenue."),
              highlight: L("Report movement, not activity.", "Report movement, not activity."),
            },
          ],
        },
        {
          type: "table",
          caption: L("Signal map", "Signal map"),
          headers: H(["Signal", "Strength", "Next action"], ["Signal", "Strength", "Next action"]),
          rows: [
            { cells: [L("Like from ICP", "Like from ICP"), L("Light", "Light"), L("Monitor / engage back", "Monitor / engage back")] },
            { cells: [L("Comment from ICP", "Comment from ICP"), L("Medium", "Medium"), L("Reply + add to warm list", "Reply + add to warm list")] },
            { cells: [L("Repeat engagement", "Repeat engagement"), L("Medium", "Medium"), L("Soft DM or invite to webinar", "Soft DM or invite to webinar")] },
            { cells: [L("Profile view after outreach", "Profile view after outreach"), L("Medium", "Medium"), L("Follow-up with context", "Follow-up with context")] },
            { cells: [L("Lead magnet download", "Lead magnet download"), L("Medium", "Medium"), L("Send related resource", "Send related resource")] },
            { cells: [L("Webinar registration", "Webinar registration"), L("Medium", "Medium"), L("Pre-event nurture", "Pre-event nurture")] },
            { cells: [L("Webinar attendance", "Webinar attendance"), L("Medium/strong", "Medium/strong"), L("Send replay + checklist", "Send replay + checklist")] },
            { cells: [L("Webinar question", "Webinar question"), L("Strong", "Strong"), L("Founder DM", "Founder DM")] },
            { cells: [L("CTA click", "CTA click"), L("Strong", "Strong"), L("Sales task", "Sales task")] },
            { cells: [L("Pricing/demo page visit", "Pricing/demo page visit"), L("Strong", "Strong"), L("Sales follow-up", "Sales follow-up")] },
            { cells: [L("DM asking for help", "DM asking for help"), L("Strong", "Strong"), L("Qualify and book call", "Qualify and book call")] },
          ],
        },
        {
          type: "table",
          caption: L("Routing logika", "Routing logic"),
          headers: H(["Fit", "Signal strength", "Route"], ["Fit", "Signal strength", "Route"]),
          rows: [
            { cells: [L("Low fit", "Low fit"), L("Any signal", "Any signal"), L("Ignore or low-priority nurture", "Ignore or low-priority nurture")] },
            { cells: [L("Medium fit", "Medium fit"), L("Light signal", "Light signal"), L("Monitor", "Monitor")] },
            { cells: [L("Medium fit", "Medium fit"), L("Medium signal", "Medium signal"), L("Nurture / invite to webinar", "Nurture / invite to webinar")] },
            { cells: [L("Medium fit", "Medium fit"), L("Strong signal", "Strong signal"), L("Review manually", "Review manually")] },
            { cells: [L("High fit", "High fit"), L("Light signal", "Light signal"), L("Engage back", "Engage back")] },
            { cells: [L("High fit", "High fit"), L("Medium signal", "Medium signal"), L("Contextual DM or resource", "Contextual DM or resource")] },
            { cells: [L("High fit", "High fit"), L("Strong signal", "Strong signal"), L("Sales task or founder follow-up", "Sales task or founder follow-up")] },
          ],
        },
        { type: "video", video: video1 },
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
              "Lekcija 12 zatvara ceo Lead Agents playbook: jedna petlja od ICP-a do pipeline-a.",
              "Redosled: ICP dokument → profil → cold outreach → buying signali → content (intervjui) → Thought Leader Ads → CRM sa lead scoring-om.",
              "Operativno: outreach povezuje, content gradi poverenje, signali pokreću re-engagement, value-based follow-up sistem drži one bez odgovora dok nisu spremni.",
              "CRM routing: no_reply → signal_reengage → nurture → meeting. Outreach direktan, ads indirektan. Cilj su prave LinkedIn konekcije, ne lista kontakata bez konteksta.",
            ],
            [
              "Lesson 12 closes the full Lead Agents playbook: one loop from ICP to pipeline.",
              "Order: ICP document → profile → cold outreach → buying signals → content (interviews) → Thought Leader Ads → CRM with lead scoring.",
              "Operationally: outreach connects, content builds trust, signals trigger re-engagement, a value-based follow-up system holds non-responders until they are ready.",
              "CRM routing: no_reply → signal_reengage → nurture → meeting. Outreach is direct, ads are indirect. The goal is real LinkedIn connections, not a contact list without context.",
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
              title: L("Inbound usklađuje content, kanale i automation sa buyer journey-em", "Inbound works by aligning content, channels, and automation to the buyer journey"),
              body: L(
                "HubSpot objašnjava inbound marketing kao privlačenje kvalifikovanih prospect-a relevantnim content-om, konverziju u lead-ove i kupce, i nurture kroz buyer journey.",
                "HubSpot explains inbound marketing as attracting qualified prospects with relevant content, converting them into leads and customers, and nurturing them through the buyer journey.",
              ),
              sourceLabel: L("HubSpot", "HubSpot"),
              sourceUrl: "https://www.hubspot.com/inbound-marketing",
            },
            {
              title: L("B2B kupovina je nelinearna i zahteva digital + human interakciju", "B2B buying is nonlinear and requires digital + human interaction"),
              body: L(
                "Gartner opisuje B2B buying kao nelinearan, gde kupci ponovo posete buying jobs poput identifikacije problema, istraživanja rešenja, definisanja zahteva i izbora dobavljača kroz digitalne i ljudske interakcije.",
                "Gartner describes B2B buying as nonlinear, where buyers revisit buying jobs like problem identification, solution exploration, requirements building, and supplier selection through digital and human interactions.",
              ),
              sourceLabel: L("Gartner", "Gartner"),
              sourceUrl: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
            },
            {
              title: L("Većina kupaca su future buyers, memory je važna", "Most buyers are future buyers, so memory matters"),
              body: L(
                "LinkedIn B2B Institute 95-5 Rule objašnjava da većina potencijalnih B2B kupaca nije in-market u datom trenutku, pa brendovi treba da kreiraju memory pre nego što se buying window otvori.",
                "LinkedIn B2B Institute's 95-5 Rule explains that most potential B2B buyers are not in-market at any given moment, so brands need to create memory before the buying window opens.",
              ),
              sourceLabel: L("LinkedIn B2B Institute", "LinkedIn B2B Institute"),
              sourceUrl: "https://business.linkedin.com/advertise/resources/b2b-institute/b2b-research/trends/95-5-rule",
            },
            {
              title: L("Attribution povezuje interakcije sa revenue", "Attribution connects interactions to revenue"),
              body: L(
                "HubSpot attribution reporting analizira interakcije poput klikova, formi, page views i source-a, dok Salesforce Campaign Influence povezuje kampanje sa opportunities i revenue influence.",
                "HubSpot attribution reporting analyzes interactions such as clicks, forms, page views, and sources, while Salesforce Campaign Influence connects campaigns to opportunities and revenue influence.",
              ),
              sourceLabel: L("HubSpot", "HubSpot"),
              sourceUrl: "https://knowledge.hubspot.com/reports/understand-attribution-reporting",
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
          paragraphs: P(["1. Mapiraj trenutni sistem"], ["1. Map your current system"]),
        },
        {
          type: "table",
          caption: L("Channel audit", "Channel audit"),
          headers: H(["Channel", "Current activity", "Signal captured?", "CRM field?", "Follow-up owner?", "Reported?"], ["Channel", "Current activity", "Signal captured?", "CRM field?", "Follow-up owner?", "Reported?"]),
          rows: [
            { cells: [L("LinkedIn content", "LinkedIn content"), L("[yes/no]", "[yes/no]"), L("[yes/no]", "[yes/no]"), L("[field]", "[field]"), L("[owner]", "[owner]"), L("[yes/no]", "[yes/no]")] },
            { cells: [L("LinkedIn comments", "LinkedIn comments"), L("[yes/no]", "[yes/no]"), L("[yes/no]", "[yes/no]"), L("[field]", "[field]"), L("[owner]", "[owner]"), L("[yes/no]", "[yes/no]")] },
            { cells: [L("Webinars", "Webinars"), L("[yes/no]", "[yes/no]"), L("[yes/no]", "[yes/no]"), L("[field]", "[field]"), L("[owner]", "[owner]"), L("[yes/no]", "[yes/no]")] },
            { cells: [L("Lead magnets", "Lead magnets"), L("[yes/no]", "[yes/no]"), L("[yes/no]", "[yes/no]"), L("[field]", "[field]"), L("[owner]", "[owner]"), L("[yes/no]", "[yes/no]")] },
            { cells: [L("LinkedIn Ads", "LinkedIn Ads"), L("[yes/no]", "[yes/no]"), L("[yes/no]", "[yes/no]"), L("[field]", "[field]"), L("[owner]", "[owner]"), L("[yes/no]", "[yes/no]")] },
            { cells: [L("Website visits", "Website visits"), L("[yes/no]", "[yes/no]"), L("[yes/no]", "[yes/no]"), L("[field]", "[field]"), L("[owner]", "[owner]"), L("[yes/no]", "[yes/no]")] },
            { cells: [L("Outreach", "Outreach"), L("[yes/no]", "[yes/no]"), L("[yes/no]", "[yes/no]"), L("[field]", "[field]"), L("[owner]", "[owner]"), L("[yes/no]", "[yes/no]")] },
            { cells: [L("CRM", "CRM"), L("[yes/no]", "[yes/no]"), L("[yes/no]", "[yes/no]"), L("[field]", "[field]"), L("[owner]", "[owner]"), L("[yes/no]", "[yes/no]")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["Praznine pokazuju gde sistem puca."], ["The gaps show where the system breaks."]),
        },
        {
          type: "paragraphs",
          paragraphs: P(["2. Definiši signal-to-action pravila"], ["2. Define your signal-to-action rules"]),
        },
        {
          type: "table",
          caption: L("Signal-to-action rules", "Signal-to-action rules"),
          headers: H(["Signal", "Fit required", "Action", "Owner", "SLA"], ["Signal", "Fit required", "Action", "Owner", "SLA"]),
          rows: [
            { cells: [L("ICP comment", "ICP comment"), L("Medium/high", "Medium/high"), L("Reply + add to warm list", "Reply + add to warm list"), L("Founder / Sales", "Founder / Sales"), L("24h", "24h")] },
            { cells: [L("Repeat engagement", "Repeat engagement"), L("High", "High"), L("Soft DM", "Soft DM"), L("Founder / Sales", "Founder / Sales"), L("48h", "48h")] },
            { cells: [L("Webinar registration", "Webinar registration"), L("Medium/high", "Medium/high"), L("Pre-event nurture", "Pre-event nurture"), L("Marketing", "Marketing"), L("Same day", "Same day")] },
            { cells: [L("Webinar question", "Webinar question"), L("High", "High"), L("Founder DM", "Founder DM"), L("Founder", "Founder"), L("24h", "24h")] },
            { cells: [L("Lead magnet download", "Lead magnet download"), L("Medium/high", "Medium/high"), L("Send related resource", "Send related resource"), L("Sales / Marketing", "Sales / Marketing"), L("24h", "24h")] },
            { cells: [L("Pricing/demo visit", "Pricing/demo visit"), L("High", "High"), L("Sales task", "Sales task"), L("Sales", "Sales"), L("Same day", "Same day")] },
            { cells: [L("CTA click", "CTA click"), L("High", "High"), L("Sales follow-up", "Sales follow-up"), L("Sales", "Sales"), L("Same day", "Same day")] },
            { cells: [L("„Not now“ reply", "\"Not now\" reply"), L("Medium/high", "Medium/high"), L("Nurture task", "Nurture task"), L("Sales", "Sales"), L("30-90 days", "30-90 days")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["3. Izgradi topic-based follow-up paths"], ["3. Build topic-based follow-up paths"]),
        },
        {
          type: "table",
          caption: L("Topic paths", "Topic paths"),
          headers: H(["Topic", "Asset", "Follow-up"], ["Topic", "Asset", "Follow-up"]),
          rows: [
            { cells: [L("ICP", "ICP"), L("ICP template", "ICP template"), L("Ask if they want help narrowing segment", "Ask if they want help narrowing segment")] },
            { cells: [L("Profile", "Profile"), L("Profile checklist", "Profile checklist"), L("Offer quick profile audit", "Offer quick profile audit")] },
            { cells: [L("Content", "Content"), L("Content pillar template", "Content pillar template"), L("Ask what they are posting about now", "Ask what they are posting about now")] },
            { cells: [L("Commenting", "Commenting"), L("Comment strategy template", "Comment strategy template"), L("Ask if they have target engagement list", "Ask if they have target engagement list")] },
            { cells: [L("Outreach", "Outreach"), L("Warm outreach framework", "Warm outreach framework"), L("Ask how they currently build lists", "Ask how they currently build lists")] },
            { cells: [L("Webinar", "Webinar"), L("Webinar structure template", "Webinar structure template"), L("Ask if they are running sessions now", "Ask if they are running sessions now")] },
            { cells: [L("CRM", "CRM"), L("CRM field map", "CRM field map"), L("Ask how they track LinkedIn signals", "Ask how they track LinkedIn signals")] },
            { cells: [L("Buying signals", "Buying signals"), L("Signal scorecard", "Signal scorecard"), L("Ask which signals they can currently see", "Ask which signals they can currently see")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["4. Izgradi CRM automation layer"], ["4. Build the CRM automation layer"]),
        },
        {
          type: "table",
          caption: L("Automations", "Automations"),
          headers: H(["Trigger", "Automation"], ["Trigger", "Automation"]),
          rows: [
            { cells: [L("Form submit", "Form submit"), L("Create/update contact + tag topic", "Create/update contact + tag topic")] },
            { cells: [L("Webinar registration", "Webinar registration"), L("Add webinar campaign + status", "Add webinar campaign + status")] },
            { cells: [L("Webinar attendance", "Webinar attendance"), L("Update signal strength", "Update signal strength")] },
            { cells: [L("CTA click", "CTA click"), L("Create sales task", "Create sales task")] },
            { cells: [L("Lead magnet download", "Lead magnet download"), L("Send resource + create follow-up", "Send resource + create follow-up")] },
            { cells: [L("High score", "High score"), L("Alert sales in Slack", "Alert sales in Slack")] },
            { cells: [L("No activity after outreach", "No activity after outreach"), L("Nurture task", "Nurture task")] },
            { cells: [L("„Not now“ reply", "\"Not now\" reply"), L("Follow-up date in 60 days", "Follow-up date in 60 days")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Koristi automation da smanjiš admin.", "Ne koristi automation da ukloniš kontekst."],
            ["Use automation to reduce admin.", "Do not use automation to remove context."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["5. Kreiraj outbound playbook"], ["5. Create the outbound playbook"]),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Outbound treba da referencira inbound ponašanje.",
              "LinkedIn engagement:",
              "„Hey [Name], noticed you engaged with the post about [topic]. We see this a lot with [ICP]: [problem]. I have a short [resource] if useful.“",
              "Webinar:",
              "„Hey [Name], thanks for joining the session on [topic]. You mentioned [poll/question/topic]. I can send the framework we used if helpful.“",
              "Lead magnet:",
              "„Hey [Name], saw you downloaded the [asset]. Most teams use it when they're trying to solve [problem]. Want me to send an example of how we apply it?“",
              "High intent:",
              "„Hey [Name], based on what you engaged with around [topic], it looks like [problem] might be relevant. Worth comparing notes for 15 minutes?“",
            ],
            [
              "Outbound should reference the inbound behavior.",
              "LinkedIn engagement:",
              "\"Hey [Name], noticed you engaged with the post about [topic]. We see this a lot with [ICP]: [problem]. I have a short [resource] if useful.\"",
              "Webinar:",
              "\"Hey [Name], thanks for joining the session on [topic]. You mentioned [poll/question/topic]. I can send the framework we used if helpful.\"",
              "Lead magnet:",
              "\"Hey [Name], saw you downloaded the [asset]. Most teams use it when they're trying to solve [problem]. Want me to send an example of how we apply it?\"",
              "High intent:",
              "\"Hey [Name], based on what you engaged with around [topic], it looks like [problem] might be relevant. Worth comparing notes for 15 minutes?\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["6. Kreiraj finalni dashboard"], ["6. Create the final dashboard"]),
        },
        {
          type: "table",
          caption: L("Dashboard", "Dashboard"),
          headers: H(["Section", "Metrics"], ["Section", "Metrics"]),
          rows: [
            { cells: [L("Attention", "Attention"), L("profile views, post engagement, followers, ad engagement", "profile views, post engagement, followers, ad engagement")] },
            { cells: [L("Capture", "Capture"), L("form fills, webinar registrations, lead magnet downloads", "form fills, webinar registrations, lead magnet downloads")] },
            { cells: [L("Intent", "Intent"), L("questions, CTA clicks, pricing visits, repeat engagement", "questions, CTA clicks, pricing visits, repeat engagement")] },
            { cells: [L("Action", "Action"), L("DMs sent, emails sent, tasks created", "DMs sent, emails sent, tasks created")] },
            { cells: [L("Conversation", "Conversation"), L("replies, resource requests, calls booked", "replies, resource requests, calls booked")] },
            { cells: [L("Pipeline", "Pipeline"), L("qualified leads, opportunities, proposals", "qualified leads, opportunities, proposals")] },
            { cells: [L("Revenue", "Revenue"), L("won deals, revenue influenced, source/topic influence", "won deals, revenue influenced, source/topic influence")] },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Dashboard treba da pokazuje kretanje, ne samo aktivnost.",
            "The dashboard should show movement, not just activity.",
          ),
        },
        { type: "video", video: video4 },
        { type: "video", video: video5 },
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
              usedFor: L(
                "Founder content, komentari, profile visits, DM-ovi i relationship-building.",
                "Founder content, comments, profile visits, DMs, and relationship-building.",
              ),
              whyItFits: L(
                "Glavni izvor Founder-Led Growth pažnje i signala.",
                "The main source of Founder-Led Growth attention and signals.",
              ),
              alternative: L("None", "None"),
            },
            {
              name: "LinkedIn Sales Navigator",
              usedFor: L(
                "ICP targeting, saved leads, account monitoring i sales research.",
                "ICP targeting, saved leads, account monitoring, and sales research.",
              ),
              whyItFits: L(
                "Pomaže da LinkedIn aktivnost postane account-based sales workflow.",
                "Helps turn LinkedIn activity into account-based sales workflows.",
              ),
              alternative: L("Apollo, manual LinkedIn search", "Apollo, manual LinkedIn search"),
            },
            {
              name: "HubSpot",
              slug: "hubspot",
              usedFor: L(
                "CRM, forme, landing pages, workflow-i, attribution, pipeline reporting i email nurture.",
                "CRM, forms, landing pages, workflows, attribution, pipeline reporting, and email nurture.",
              ),
              whyItFits: L(
                "Jak centralni hub za inbound-to-outbound workflow-e.",
                "Strong central hub for inbound-to-outbound workflows.",
              ),
              alternative: L("Pipedrive, Salesforce, Attio", "Pipedrive, Salesforce, Attio"),
            },
            {
              name: "Pipedrive",
              slug: "pipedrive",
              usedFor: L(
                "Sales pipeline, custom fields, task-ovi i reporting.",
                "Sales pipeline, custom fields, tasks, and reporting.",
              ),
              whyItFits: L(
                "Jednostavan CRM za founder-led timove koji trebaju sales clarity.",
                "Simple CRM for founder-led teams that need sales clarity.",
              ),
              alternative: L("HubSpot, Attio", "HubSpot, Attio"),
            },
            {
              name: "Attio",
              slug: "attio",
              usedFor: L(
                "Fleksibilni CRM objekti, relationships, liste i GTM workflow-i.",
                "Flexible CRM objects, relationships, lists, and GTM workflows.",
              ),
              whyItFits: L(
                "Dobar za custom founder-led sisteme i relationship tracking.",
                "Good for custom founder-led systems and relationship tracking.",
              ),
              alternative: L("HubSpot, Pipedrive", "HubSpot, Pipedrive"),
            },
            {
              name: "Clay",
              slug: "clay",
              usedFor: L(
                "Enrichment, trigger detection, list building i signal-based routing.",
                "Enrichment, trigger detection, list building, and signal-based routing.",
              ),
              whyItFits: L(
                "Povezuje inbound signale sa outbound-ready data.",
                "Connects inbound signals with outbound-ready data.",
              ),
              alternative: L("Apollo, Common Room", "Apollo, Common Room"),
            },
            {
              name: "Apollo",
              slug: "apollo",
              usedFor: L(
                "Contact data, prospecting, email enrichment i outbound liste.",
                "Contact data, prospecting, email enrichment, and outbound lists.",
              ),
              whyItFits: L(
                "Korisno za pretvaranje kvalifikovanih inbound signala u outbound-ready kontakte.",
                "Useful for turning qualified inbound signals into outbound-ready contacts.",
              ),
              alternative: L("Clay, Cognism, ZoomInfo", "Clay, Cognism, ZoomInfo"),
            },
            {
              name: "HeyReach",
              slug: "heyreach",
              usedFor: L(
                "LinkedIn outreach i multi-account LinkedIn sekvence.",
                "LinkedIn outreach and multi-account LinkedIn sequencing.",
              ),
              whyItFits: L(
                "Korisno za slanje kontekstualnih LinkedIn DM-ova kad su liste kvalifikovane.",
                "Useful for sending contextual LinkedIn DMs once lists are qualified.",
              ),
              alternative: L("LaGrowthMachine, manual LinkedIn outreach", "LaGrowthMachine, manual LinkedIn outreach"),
            },
            {
              name: "Lemlist",
              slug: "lemlist",
              usedFor: L(
                "Email i multichannel outreach.",
                "Email and multichannel outreach.",
              ),
              whyItFits: L(
                "Korisno za kratke follow-up sekvence posle kvalifikovanih inbound signala.",
                "Useful for short follow-up sequences after qualified inbound signals.",
              ),
              alternative: L("LaGrowthMachine, Instantly", "LaGrowthMachine, Instantly"),
            },
            {
              name: "Zoom Webinars / Livestorm",
              usedFor: L(
                "Webinar registracija, attendance, engagement i follow-up.",
                "Webinar registration, attendance, engagement, and follow-up.",
              ),
              whyItFits: L(
                "Webinari kreiraju high-intent signale.",
                "Webinars create high-intent signals.",
              ),
              alternative: L("Demio, Riverside", "Demio, Riverside"),
            },
            {
              name: "Make.com / Zapier",
              slug: "n8n",
              usedFor: L(
                "Povezivanje formi, webinara, CRM-a, outreach alata, Slack-a i reporting-a.",
                "Connect forms, webinars, CRM, outreach tools, Slack, and reporting.",
              ),
              whyItFits: L(
                "Automatizuje signal-to-action workflow.",
                "Automates the signal-to-action workflow.",
              ),
              alternative: L("n8n, native integrations", "n8n, native integrations"),
            },
            {
              name: "Google Sheets",
              usedFor: L(
                "Manual staging liste, rani eksperimenti i signal scoring.",
                "Manual staging lists, early experiments, and signal scoring.",
              ),
              whyItFits: L(
                "Dobar pre nego što potpuno automatizuješ.",
                "Good before fully automating.",
              ),
              alternative: L("Notion, CRM list views", "Notion, CRM list views"),
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
          title: L("Od content-a do pipeline-a u jednom sistemu", "From content to pipeline in one system"),
          steps: P(
            [
              "Founder objavi post o specifičnom ICP pain-u.",
              "ICP buyer komentariše.",
              "Founder odgovori i kontakt se dodaje kao Engaged.",
              "Buyer se kasnije registruje na webinar o istoj temi.",
              "Webinar poll otkriva njihov bottleneck.",
              "CRM ažurira signal strength i content topic.",
              "Buyer postavi pitanje tokom webinara.",
              "Founder pošalje kontekstualni DM sa template-om.",
              "Sales pošalje kratak email follow-up sa istim kontekstom.",
              "Buyer odgovori i pristane na call.",
              "Deal se kreira i taguje sa LinkedIn + webinar influence.",
              "Revenue report pokazuje koja content tema je pokrenula journey.",
            ],
            [
              "Founder publishes a post about a specific ICP pain.",
              "ICP buyer comments.",
              "Founder replies and the contact is added as Engaged.",
              "Buyer later registers for a webinar on the same topic.",
              "Webinar poll reveals their bottleneck.",
              "CRM updates signal strength and content topic.",
              "Buyer asks a question during the webinar.",
              "Founder sends contextual DM with a template.",
              "Sales sends a short email follow-up with the same context.",
              "Buyer replies and agrees to a call.",
              "Deal is created and tagged with LinkedIn + webinar influence.",
              "Revenue report shows which content topic started the journey.",
            ],
          ),
          highlight: L(
            "To je Founder-Led Growth sistem. Content kreira signal. CRM ga rutira. Outbound nastavlja. Sales konvertuje.",
            "That is the Founder-Led Growth system. Content creates the signal. CRM routes it. Outbound continues it. Sales converts it.",
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
              title: L("Inbound-to-Outbound Pipeline Engine", "Inbound-to-Outbound Pipeline Engine"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "LinkedIn content, komentari, webinari, ads, lead magneti, website posete, CRM i outreach povezani u jedan pipeline motor.",
                "LinkedIn content, comments, webinars, ads, lead magnets, website visits, CRM, and outreach connected into one pipeline engine.",
              ),
            },
            {
              title: L(
                "Attract → Capture → Score → Route → Personalize → Follow Up → Report",
                "Attract → Capture → Score → Route → Personalize → Follow Up → Report",
              ),
              placement: L("Framework sekcija", "Framework section"),
              description: L("Kompletan inbound-to-outbound operativni okvir.", "The full inbound-to-outbound operating framework."),
            },
            {
              title: L("Full Founder-Led Growth System Map", "Full Founder-Led Growth System Map"),
              placement: L("Posle core ideje", "After core idea"),
              description: L("Svih 12 lekcija prikazano kao jedan povezan sistem.", "All 12 lessons shown as one connected system."),
            },
            {
              title: L("Signal-to-Action Routing Matrix", "Signal-to-Action Routing Matrix"),
              placement: L("Korak 2", "Step 2"),
              description: L("Fit + signal strength određuju next action.", "Fit + signal strength determining next action."),
            },
            {
              title: L("Topic-Based Follow-Up Paths", "Topic-Based Follow-Up Paths"),
              placement: L("Korak 3", "Step 3"),
              description: L("Svaka content tema mapirana na resource i follow-up poruku.", "Each content topic mapped to a resource and follow-up message."),
            },
            {
              title: L("CRM Automation Layer", "CRM Automation Layer"),
              placement: L("Korak 4", "Step 4"),
              description: L("Forme, webinari, lead magneti, ads i signali teku u CRM task-ove i workflow-e.", "Forms, webinars, lead magnets, ads, and signals flowing into CRM tasks and workflows."),
            },
            {
              title: L("Content-to-Revenue Dashboard", "Content-to-Revenue Dashboard"),
              placement: L("Reporting sekcija", "Reporting section"),
              description: L("Attention, capture, intent, action, conversation, pipeline i revenue metrike.", "Attention, capture, intent, action, conversation, pipeline, and revenue metrics."),
            },
            {
              title: L("Final Playbook Flywheel", "Final Playbook Flywheel"),
              placement: L("Blizu CTA", "Near CTA"),
              description: L(
                "Founder POV → Content → Engagement → Webinar → Signals → Outreach → Pipeline → Learning → Better Content.",
                "Founder POV → Content → Engagement → Webinar → Signals → Outreach → Pipeline → Learning → Better Content.",
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "checklist",
      title: L("Pre nego što završiš playbook, uradi ovo", "Before finishing the playbook, do this"),
      blocks: [
        {
          type: "checklist",
          title: L("Čeklista Lekcije 12", "Lesson 12 checklist"),
          items: P(
            [
              "Mapiraj svaki trenutni inbound source: LinkedIn, webinari, forme, website, ads, referral-i.",
              "Definiši koji signali treba da trigger-uju akciju.",
              "Razdvoji light, medium i strong signale.",
              "Dodaj CRM polja za source, signal, topic, fit, next action i follow-up date.",
              "Kreiraj routing rules na osnovu fit-a i signal strength-a.",
              "Izgradi topic-based follow-up paths.",
              "Napiši kontekstualne DM i email template-e.",
              "Kreiraj kratke sekvence za webinar attendees, content engagers i lead magnet downloads.",
              "Izgradi nedeljni operating rhythm.",
              "Kreiraj report-e za signal-to-conversation, content-to-pipeline, webinar-to-revenue i revenue influence.",
              "Dodeli ownere za svaku next action.",
              "Vodi sistem 30 dana pre nego što dodaš kompleksnost.",
            ],
            [
              "Map every current inbound source: LinkedIn, webinars, forms, website, ads, referrals.",
              "Define which signals should trigger action.",
              "Separate light, medium, and strong signals.",
              "Add CRM fields for source, signal, topic, fit, next action, and follow-up date.",
              "Create routing rules based on fit and signal strength.",
              "Build topic-based follow-up paths.",
              "Write contextual DM and email templates.",
              "Create short sequences for webinar attendees, content engagers, and lead magnet downloads.",
              "Build a weekly operating rhythm.",
              "Create reports for signal-to-conversation, content-to-pipeline, webinar-to-revenue, and revenue influence.",
              "Assign owners for every next action.",
              "Run the system for 30 days before adding complexity.",
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
          title: L("Inbound-to-Outbound System Template", "Inbound-to-Outbound System Template"),
          content: L(
            `1. Inbound sources

LinkedIn content:
[yes/no]

LinkedIn comments:
[yes/no]

Founder profile:
[yes/no]

Webinars:
[yes/no]

Lead magnets:
[yes/no]

LinkedIn Ads:
[yes/no]

Website visits:
[yes/no]

Referrals:
[yes/no]

2. Signal levels

Light signals:
- [like]
- [profile view]
- [new follower]

Medium signals:
- [comment]
- [repeat engagement]
- [webinar registration]
- [lead magnet download]

Strong signals:
- [webinar question]
- [CTA click]
- [pricing/demo visit]
- [DM asking for help]

3. Routing rules

Low fit + any signal:
ignore or low-priority nurture

Medium fit + light signal:
monitor

Medium fit + medium signal:
nurture / invite to webinar

High fit + light signal:
engage back

High fit + medium signal:
contextual DM or resource

High fit + strong signal:
sales task or founder follow-up

4. CRM fields

Lead source:
[source]

First touchpoint:
[touchpoint]

Signal type:
[type]

Signal strength:
[light / medium / strong]

Content topic:
[topic]

ICP fit:
[high / medium / low]

Buyer role:
[role]

Next best action:
[action]

Follow-up date:
[date]

Campaign / asset:
[asset]

Pipeline influence:
[influence]

5. Topic-based follow-up

Topic:
[topic]

Resource:
[checklist/template/webinar/replay]

Message:
[contextual opener]

CTA:
[send resource / invite webinar / book call / nurture]

6. Outreach templates

LinkedIn engagement:

Hey [Name], noticed you engaged with the post about [topic].

We see this a lot with [ICP]:
[problem].

I have a short [resource] if useful.

Webinar:

Hey [Name], thanks for joining the session on [topic].

You mentioned [poll/question/topic].

I can send the framework we used if helpful.

Lead magnet:

Hey [Name], saw you downloaded the [asset].

Most teams use it when they're trying to solve [problem].

Want me to send an example of how we apply it?

High intent:

Hey [Name], based on what you engaged with around [topic], it looks like [problem] might be relevant.

Worth comparing notes for 15 minutes?

7. Weekly review

Questions:

- Which signals came in this week?
- Which high-fit accounts engaged?
- Which topics created replies?
- Which webinars created sales conversations?
- Which outreach messages worked?
- Which nurture leads are due?
- Which accounts should sales prioritize?
- Which content topic should we repeat next week?

8. Reports

Signal-to-conversation:
[metric]

Content-to-pipeline:
[metric]

Webinar-to-revenue:
[metric]

Ad-to-lead-quality:
[metric]

Outreach reply:
[metric]

Nurture reactivation:
[metric]

Revenue influence:
[metric]`,
            `1. Inbound sources

LinkedIn content:
[yes/no]

LinkedIn comments:
[yes/no]

Founder profile:
[yes/no]

Webinars:
[yes/no]

Lead magnets:
[yes/no]

LinkedIn Ads:
[yes/no]

Website visits:
[yes/no]

Referrals:
[yes/no]

2. Signal levels

Light signals:
- [like]
- [profile view]
- [new follower]

Medium signals:
- [comment]
- [repeat engagement]
- [webinar registration]
- [lead magnet download]

Strong signals:
- [webinar question]
- [CTA click]
- [pricing/demo visit]
- [DM asking for help]

3. Routing rules

Low fit + any signal:
ignore or low-priority nurture

Medium fit + light signal:
monitor

Medium fit + medium signal:
nurture / invite to webinar

High fit + light signal:
engage back

High fit + medium signal:
contextual DM or resource

High fit + strong signal:
sales task or founder follow-up

4. CRM fields

Lead source:
[source]

First touchpoint:
[touchpoint]

Signal type:
[type]

Signal strength:
[light / medium / strong]

Content topic:
[topic]

ICP fit:
[high / medium / low]

Buyer role:
[role]

Next best action:
[action]

Follow-up date:
[date]

Campaign / asset:
[asset]

Pipeline influence:
[influence]

5. Topic-based follow-up

Topic:
[topic]

Resource:
[checklist/template/webinar/replay]

Message:
[contextual opener]

CTA:
[send resource / invite webinar / book call / nurture]

6. Outreach templates

LinkedIn engagement:

Hey [Name], noticed you engaged with the post about [topic].

We see this a lot with [ICP]:
[problem].

I have a short [resource] if useful.

Webinar:

Hey [Name], thanks for joining the session on [topic].

You mentioned [poll/question/topic].

I can send the framework we used if helpful.

Lead magnet:

Hey [Name], saw you downloaded the [asset].

Most teams use it when they're trying to solve [problem].

Want me to send an example of how we apply it?

High intent:

Hey [Name], based on what you engaged with around [topic], it looks like [problem] might be relevant.

Worth comparing notes for 15 minutes?

7. Weekly review

Questions:

- Which signals came in this week?
- Which high-fit accounts engaged?
- Which topics created replies?
- Which webinars created sales conversations?
- Which outreach messages worked?
- Which nurture leads are due?
- Which accounts should sales prioritize?
- Which content topic should we repeat next week?

8. Reports

Signal-to-conversation:
[metric]

Content-to-pipeline:
[metric]

Webinar-to-revenue:
[metric]

Ad-to-lead-quality:
[metric]

Outreach reply:
[metric]

Nurture reactivation:
[metric]

Revenue influence:
[metric]`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Šta je inbound-to-outbound sistem?", "What is an inbound-to-outbound system?"),
      answer: L(
        "Inbound-to-outbound sistem koristi inbound ponašanje, poput content engagement-a, webinar attendance-a, lead magnet download-a, website poseta i CRM signala, da trigger-uje kontekstualni outbound follow-up. Umesto cold poruka svima, sales follow-up-uje kada postoji fit, signal i kontekst.",
        "An inbound-to-outbound system uses inbound behavior, like content engagement, webinar attendance, lead magnet downloads, website visits, and CRM signals, to trigger contextual outbound follow-up. Instead of sending cold messages to everyone, sales follows up when there is fit, signal, and context.",
      ),
    },
    {
      question: L("Kako se ovo razlikuje od normalnog outbound-a?", "How is this different from normal outbound?"),
      answer: L(
        "Normal outbound često počinje sa listom i porukom. Inbound-to-outbound počinje sa signalom. Kupac je već interagovao sa tvojim content-om, webinarom, profilom, ad-om ili website-om, pa poruka može referencirati stvarni kontekst.",
        "Normal outbound often starts with a list and a message. Inbound-to-outbound starts with a signal. The buyer has already interacted with your content, webinar, profile, ad, or website, so the message can reference real context.",
      ),
    },
    {
      question: L("Koji signali treba da trigger-uju outbound?", "What signals should trigger outbound?"),
      answer: L(
        "Jaki trigger-i uključuju: webinar pitanja; CTA klikove; pricing ili demo page posete; repeat engagement od target account-a; DM-ove; lead magnet download-e od high-fit buyer-a; komentare na founder postovima; relevantne company trigger-e.",
        "Strong triggers include: webinar questions; CTA clicks; pricing or demo page visits; repeated engagement from target accounts; DMs; lead magnet downloads from high-fit buyers; comments on founder posts; relevant company triggers.",
      ),
    },
    {
      question: L("Da li svaki inbound lead treba da dobije sales outreach?", "Should every inbound lead get sales outreach?"),
      answer: L(
        "Ne. Svaki inbound lead treba prvo da bude kvalifikovan. Koristi ICP fit, signal strength, topic relevance, recency i buyer role da odlučiš da li treba nurture, soft DM, sales follow-up ili no action.",
        "No. Every inbound lead should be qualified first. Use ICP fit, signal strength, topic relevance, recency, and buyer role to decide whether they should get nurture, a soft DM, sales follow-up, or no action.",
      ),
    },
    {
      question: L("Koji alati su potrebni?", "What tools do I need?"),
      answer: L(
        "Jednostavna verzija može raditi sa: LinkedIn; Google Sheets; HubSpot ili Pipedrive; Calendly; email; manual follow-up. Naprednija verzija može koristiti: Clay; Apollo; HeyReach; Lemlist; Make.com; Zapier; webinar alate; intent alate.",
        "A simple version can run with: LinkedIn; Google Sheets; HubSpot or Pipedrive; Calendly; email; manual follow-up. A more advanced version can use: Clay; Apollo; HeyReach; Lemlist; Make.com; Zapier; webinar tools; intent tools.",
      ),
    },
    {
      question: L("Koja je najveća greška u inbound-to-outbound-u?", "What is the biggest mistake in inbound-to-outbound?"),
      answer: L(
        "Najveća greška je ne posedovanje handoff-a. Marketing kreira signale. Sales ne deluje. Founder razgovori ostaju u DM-ovima. CRM se ažurira prekasno. Topli lead-ovi hladnu. Sistem treba routing rules i ownere.",
        "The biggest mistake is not owning the handoff. Marketing creates signals. Sales does not act. Founder conversations stay in DMs. CRM is updated too late. Warm leads go cold. The system needs routing rules and owners.",
      ),
    },
    {
      question: L("Kako znaš da sistem radi?", "How do you know if the system is working?"),
      answer: L(
        "Prati: signal-to-conversation rate; content-to-pipeline; webinar-to-revenue; outreach replies po tipu signala; kvalifikovane opportunities; nurture reactivations; revenue influenced by Founder-Led Growth.",
        "Track: signal-to-conversation rate; content-to-pipeline; webinar-to-revenue; outreach replies by signal type; qualified opportunities; nurture reactivations; revenue influenced by Founder-Led Growth.",
      ),
    },
  ],
  sources: [
    { title: L("HubSpot - What Is Inbound Marketing?", "HubSpot - What Is Inbound Marketing?"), url: "https://www.hubspot.com/inbound-marketing" },
    { title: L("HubSpot Academy - Growing Your Business With a Flywheel Model", "HubSpot Academy - Growing Your Business With a Flywheel Model"), url: "https://academy.hubspot.com/lessons/hubspot-business-data-management" },
    { title: L("Gartner - B2B Buying Journey", "Gartner - B2B Buying Journey"), url: "https://www.gartner.com/en/sales/insights/b2b-buying-journey" },
    { title: L("Gartner - 67% of B2B Buyers Prefer a Rep-Free Experience", "Gartner - 67% of B2B Buyers Prefer a Rep-Free Experience"), url: "https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience" },
    { title: L("LinkedIn B2B Institute - The 95-5 Rule", "LinkedIn B2B Institute - The 95-5 Rule"), url: "https://business.linkedin.com/advertise/resources/b2b-institute/b2b-research/trends/95-5-rule" },
    { title: L("LinkedIn B2B Institute - How B2B Brands Grow", "LinkedIn B2B Institute - How B2B Brands Grow"), url: "https://business.linkedin.com/advertise/resources/b2b-institute/how-b2b-brands-grow" },
    { title: L("LinkedIn Sales Solutions - Social Selling", "LinkedIn Sales Solutions - Social Selling"), url: "https://business.linkedin.com/sales-solutions/social-selling" },
    { title: L("LinkedIn Sales Solutions - Deep Sales Playbook", "LinkedIn Sales Solutions - Deep Sales Playbook"), url: "https://business.linkedin.com/sales-solutions/deep-sales-playbook" },
    { title: L("LinkedIn Sales Navigator", "LinkedIn Sales Navigator"), url: "https://business.linkedin.com/sell/sales-navigator" },
    { title: L("HubSpot - Attribution Reporting", "HubSpot - Attribution Reporting"), url: "https://knowledge.hubspot.com/reports/understand-attribution-reporting" },
    { title: L("Salesforce - Campaign Influence", "Salesforce - Campaign Influence"), url: "https://help.salesforce.com/s/articleView?id=sales.campaign_influence_parent.htm&language=en_US&type=5" },
    { title: L("Salesforce - Campaign Influence Implementation Guide", "Salesforce - Campaign Influence Implementation Guide"), url: "https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/campaign_influence_implementation_guide.pdf" },
    { title: L("6sense - What Is Intent Data?", "6sense - What Is Intent Data?"), url: "https://6sense.com/platform/intent-data/what-is-intent-data/" },
    { title: L("Clay - Data Enrichment Platform", "Clay - Data Enrichment Platform"), url: "https://www.clay.com/" },
    { title: L("lemlist - Learn Why Multichannel Outreach Matters", "lemlist - Learn Why Multichannel Outreach Matters"), url: "https://help.lemlist.com/en/articles/4664179-learn-why-multichannel-outreach-matters" },
    { title: L("Make.com", "Make.com"), url: "https://www.make.com/" },
    { title: L("Zapier", "Zapier"), url: "https://zapier.com/" },
  ],
  relatedLessons: {
    previous: {
      slug: "buying-signals-b2b-sales",
      title: L(
        "Lekcija 11 - Šta su buying signali i kako ih koristiti u B2B prodaji",
        "Lesson 11 - What Buying Signals Are and How to Use Them in B2B Sales",
      ),
    },
    related: [
      { slug: "what-founder-led-growth-is", title: L("Lekcija 1 - Šta je Founder-Led Growth", "Lesson 1 - What Founder-Led Growth Is and Why It Works for B2B Companies") },
      { slug: "linkedin-content-strategy-founder", title: L("Lekcija 4 - LinkedIn content strategija", "Lesson 4 - How to Build a LinkedIn Content Strategy for a Founder") },
      { slug: "linkedin-engagement-outreach-list", title: L("Lekcija 7 - LinkedIn engagement u outreach listu", "Lesson 7 - How to Turn LinkedIn Engagement Into an Outreach List") },
      { slug: "webinars-founder-led-growth", title: L("Lekcija 8 - Webinari u Founder-Led Growth-u", "Lesson 8 - How to Use Webinars as Part of Founder-Led Growth") },
      { slug: "crm-pipeline-tracking", title: L("Lekcija 10 - CRM tracking", "Lesson 10 - How to Track Founder-Led Growth Activities in Your CRM") },
      { slug: "buying-signals-b2b-sales", title: L("Lekcija 11 - Buying signali", "Lesson 11 - What Buying Signals Are and How to Use Them in B2B Sales") },
    ],
  },
  cta: {
    title: L(
      "Founder-Led Growth postaje predvidljiv kada svaki signal ima next step",
      "Founder-Led Growth becomes predictable when every signal has a next step",
    ),
    body: L(
      "Founder profil bez content-a je pasivan. Content bez engagement-a je izolovan. Engagement bez CRM-a se zaboravlja. CRM bez outreach-a je samo baza. Outreach bez konteksta je cold. Webinari bez follow-up-a su protraćeni. Signali bez akcije su šum. Sistem radi kada se sve poveže. To je poenta Founder-Led Growth: pretvori founder ekspertizu u market trust, trust u signale, signale u razgovore, i razgovore u pipeline. Ako želiš pomoć da izgradiš ovaj sistem za svoju kompaniju, zakaži konsultaciju sa Lead Agents.",
      "A founder profile without content is passive. Content without engagement is isolated. Engagement without CRM is forgotten. CRM without outreach is just a database. Outreach without context is cold. Webinars without follow-up are wasted. Signals without action are noise. The system works when everything connects. That is the point of Founder-Led Growth: turn the founder's expertise into market trust, trust into signals, signals into conversations, and conversations into pipeline. If you want help building this system for your company, book a consultation with Lead Agents.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book consultation"),
    secondaryLabel: L("Nazad na pregled playbook-a", "Back to Playbook Overview"),
  },
  seoKeywords: P(
    [
      "inbound-to-outbound system",
      "Founder-Led Growth system",
      "inbound outbound sales system",
      "B2B pipeline engine",
      "LinkedIn to outbound workflow",
      "inbound lead follow-up",
      "signal-based outbound",
      "content to pipeline",
      "webinar to pipeline",
      "CRM sales workflow",
      "B2B revenue engine",
      "inbound lead management",
    ],
    [
      "inbound-to-outbound system",
      "Founder-Led Growth system",
      "inbound outbound sales system",
      "B2B pipeline engine",
      "LinkedIn to outbound workflow",
      "inbound lead follow-up",
      "signal-based outbound",
      "content to pipeline",
      "webinar to pipeline",
      "CRM sales workflow",
      "B2B revenue engine",
      "inbound lead management",
    ],
  ),
};
