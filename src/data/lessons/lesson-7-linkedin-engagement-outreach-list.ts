import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("10x LinkedIn Outreach | HeyReach x Clay Webinar", "10x LinkedIn Outreach | HeyReach x Clay Webinar"),
  channel: L("YouTube", "YouTube"),
  description: L("Korisno za HeyReach + Clay LinkedIn outreach workflow.", "Useful for seeing how HeyReach and Clay work together for LinkedIn outreach workflows."),
  placementNote: L("Pogledaj posle outreach framework-a ili u video sekciji.", "Watch after the outreach framework or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/-bYqiz9QDEw",
  watchUrl: "https://www.youtube.com/watch?v=-bYqiz9QDEw",
};

const video2 = {
  title: L("Clay + HeyReach Integration Tutorial: Personalized LinkedIn Outreach at Scale", "Clay + HeyReach Integration Tutorial: Personalized LinkedIn Outreach at Scale"),
  channel: L("YouTube", "YouTube"),
  description: L("Pokazuje kako povezati enrichment i LinkedIn outreach za personalizaciju.", "Shows how to connect enriched data and LinkedIn outreach for personalized campaigns."),
  placementNote: L("Pogledaj posle Clay u tool stack-u ili u video sekciji.", "Watch after Clay in the tool stack or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/5Ru-r0-ca3c",
  watchUrl: "https://www.youtube.com/watch?v=5Ru-r0-ca3c",
};

const video3 = {
  title: L("LinkedIn Sales Navigator - Ultimate Guide 2026", "LinkedIn Sales Navigator - Ultimate Guide 2026"),
  channel: L("YouTube", "YouTube"),
  description: L("Korisno za kvalifikaciju i organizaciju leadova posle engagement-a.", "Useful for qualifying and organizing LinkedIn leads after engagement."),
  placementNote: L("Pogledaj posle kvalifikacije ili u video sekciji.", "Watch after qualification or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/lieJwZX_T8E",
  watchUrl: "https://www.youtube.com/watch?v=lieJwZX_T8E",
};

const video4 = {
  title: L("How to Steal Your Competitor's LinkedIn Engagement - Clay Tutorial", "How to Steal Your Competitor's LinkedIn Engagement - Clay Tutorial"),
  channel: L("YouTube", "YouTube"),
  description: L("Relevantno za hvatanje, enrichment i outreach iz LinkedIn engagement podataka.", "Relevant for capturing, enriching, and turning LinkedIn engagement data into outreach."),
  placementNote: L("Pogledaj posle capture/enrich koraka ili u video sekciji.", "Watch after capture/enrich steps or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/UoMOsLJy08I",
  watchUrl: "https://www.youtube.com/watch?v=UoMOsLJy08I",
};

const video5 = {
  title: L("Lemlist Beginner Tutorial 2026", "Lemlist Beginner Tutorial 2026"),
  channel: L("YouTube", "YouTube"),
  description: L("Korisno za multichannel outreach sa email i LinkedIn koracima.", "Useful for setting up multichannel outreach with email and LinkedIn steps."),
  placementNote: L("Pogledaj posle multichannel sekvence ili u video sekciji.", "Watch after the multichannel sequence section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/WG7W27jFuKI",
  watchUrl: "https://www.youtube.com/watch?v=WG7W27jFuKI",
};

export const lesson7RichContent: RichLessonContent = {
  meta: {
    stage: L("Outreach Engine", "Outreach Engine"),
    readingTime: L("18-22 min", "18-22 min"),
    difficulty: L("Srednji nivo", "Intermediate"),
    outcome: L(
      "Naučićeš kako povezati ICP preko outreach-a i content-a, pratiti signale, re-engagovati u pravom trenutku i voditi value-based follow-up sistem dok lead nije spreman za razgovor.",
      "Learn how to connect with the ICP via outreach and content, track signals, re-engage at the right moment, and run a value-based follow-up system until the lead is ready to talk.",
    ),
    recommendedTools: L(
      "LinkedIn, LinkedIn Sales Navigator, Google Sheets, Airtable, Notion, Clay, Apollo, Findymail, Dropcontact, HeyReach, Lemlist, LaGrowthMachine, HubSpot CRM, Pipedrive, Make.com, Zapier",
      "LinkedIn, LinkedIn Sales Navigator, Google Sheets, Airtable, Notion, Clay, Apollo, Findymail, Dropcontact, HeyReach, Lemlist, LaGrowthMachine, HubSpot CRM, Pipedrive, Make.com, Zapier",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 7", "Lesson 7"),
    title: L(
      "Kako graditi LinkedIn konekcije sa ICP-om (outreach, signali, follow-up)",
      "How to Build LinkedIn Connections With Your ICP (Outreach, Signals, Follow-Up)",
    ),
    paragraphs: P(
      [
        "Founder-Led Growth po Lead Agents-u nije „objavi post i čekaj“. To je sistem konekcija sa pravim ICP-om na LinkedIn-u.",
        "Prvo se povezuješ: cold outreach sa jasnom ponudom (Sales Navigator ili Apollo, izvršenje kroz HeyReach, Lemlist, La Growth Machine ili Instantly). Cilj nije spam, već prva relevantna poruka iz ICP dokumenta.",
        "Zatim content (često iz intervjua) daje tržištu razlog da ti veruje pre sledećeg dodira.",
        "Kada neko ne odgovori odmah, ne znači da je lead mrtav. Znači da trenutak nije došao. Tu ulazi follow-up sistem: value-based poruke (resurs, uvid, kratko pitanje), ne „samo da proverim“.",
        "Kada se pojavi signal (komentar, profile view, ponovljeni engagement), to je trenutak za re-engagement: ista osoba, nova poruka sa kontekstom, topla konekcija.",
        "Ova lekcija pokazuje kako capture-ovati signale, segmentirati ih, uvesti u CRM i pokrenuti outreach ili re-engagement koji deluje kao prirodan sledeći korak.",
      ],
      [
        "Lead Agents Founder-Led Growth is not \"post and wait.\" It is a system for connecting with the right ICP on LinkedIn.",
        "First you connect: cold outreach with a clear offer (Sales Navigator or Apollo, execution via HeyReach, Lemlist, La Growth Machine, or Instantly). The goal is relevance from the ICP document, not spam.",
        "Then content (often from interviews) gives the market a reason to trust you before the next touch.",
        "When someone does not reply right away, the lead is not dead. The moment has not arrived. That is where the follow-up system runs: value-based messages (resource, insight, short question), not \"just checking in.\"",
        "When a signal appears (comment, profile view, repeat engagement), that is the moment for re-engagement: same person, new message with context, a warm connection.",
        "This lesson shows how to capture signals, segment them, push to CRM, and trigger outreach or re-engagement that feels like a natural next step.",
      ],
    ),
    callout: L(
      "Poveži se preko outreach-a. Prati signale. Re-engaguj u pravom trenutku. Value-based follow-up dok lead nije spreman.",
      "Connect via outreach. Track signals. Re-engage at the right moment. Value-based follow-up until the lead is ready.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vs-intent", title: L("Engagement vs buying intent", "Engagement vs buying intent") },
    { id: "not-all-leads", title: L("Nisu svi leadovi isti", "Not all leads are the same") },
    {
      id: "connection-loop",
      title: L("Petlja konekcije sa ICP-om", "The ICP connection loop"),
    },
    { id: "outreach-framework", title: L("Engagement-to-outreach okvir", "Engagement-to-outreach framework") },
    { id: "list-steps", title: L("Korak po korak: gradnja liste", "Step-by-step list building workflow") },
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
              "prepoznati koji LinkedIn engagement vredi da se na njega reaguje;",
              "odvojiti vanity engagement od buying signala;",
              "kvalifikovati angažovane ljude prema ICP-u;",
              "graditi toplu outreach listu od lajkova, komentara, profile view-ova, followera i webinar engagement-a;",
              "obogatiti angažovane kontakte podacima o firmi i email-u;",
              "segmentirati listu po jačini signala i buyer intent-a;",
              "pisati kontekstualne LinkedIn DM-ove i value-based email follow-up-ove;",
              "pokrenuti follow-up sistem za lead-ove bez odgovora (HeyReach, Lemlist, La Growth Machine);",
              "re-engagovati na signal umesto slanja novog cold pitch-a;",
              "izbeći pretvaranje toplog engagement-a u spam;",
              "gurnuti kvalifikovani engagement u CRM;",
              "kreirati nedeljni engagement-to-outreach workflow.",
            ],
            [
              "identify which LinkedIn engagement is worth acting on;",
              "separate vanity engagement from buying signals;",
              "qualify engaged people against your ICP;",
              "build a warm outreach list from likes, comments, profile views, followers, and webinar engagement;",
              "enrich engaged contacts with company and email data;",
              "segment the list by signal strength and buyer intent;",
              "write contextual LinkedIn DMs and value-based email follow-ups;",
              "run a follow-up system for non-responders (HeyReach, Lemlist, La Growth Machine);",
              "re-engage on signal instead of sending a new cold pitch;",
              "avoid turning warm engagement into spam;",
              "push qualified engagement into CRM;",
              "create a weekly engagement-to-outreach workflow.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Analiza podataka i liste, engagement kao signal, ne cilj",
            "Data analysis and lists, engagement as signal, not the goal",
          ),
          caption: L(
            "Lajk nije lead. Ali lajk od pravog ICP kupca na pravoj temi? To vredi capture-ovati.",
            "A like is not a lead. But a like from the right ICP buyer on the right topic? That is worth capturing.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Engagement u Founder-Led Growth sistemu", "Engagement in the Founder-Led Growth system"),
          subtitle: L(
            "Founder stvara pažnju, sistem pretvara signal u kvalifikovanu listu i toplu poruku.",
            "The founder creates attention, the system turns signal into a qualified list and warm message.",
          ),
          stages: [
            L("Post", "Post"),
            L("Signal", "Signal"),
            L("Fit", "Fit"),
            L("Lista", "List"),
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
              "Founder-Led Growth radi jer outreach i content rade paralelno, a engagement dodaje vidljivost pre poruke. Signale moraš koristiti u CRM-u.",
              "Ako neko angažuje tvoj content o specifičnom problemu, to ti daje razlog da nastaviš razgovor.",
              "LinkedIn social selling smernice definišu social selling kao korišćenje društvenih mreža za povezivanje i gradnju odnosa sa prospect-ima. Social Selling Index uključuje pronalaženje pravih ljudi, engagement sa uvidima i gradnju odnosa.",
              "LinkedIn takođe preporučuje prioritet toplih leadova u outreach-u, posebno ljudi koji su već interagovali sa postovima ili posetili profil, i personalizaciju poruka referenciranjem nečeg specifičnog o primaocu.",
              "To je srž ove lekcije. Ne tretiraj engagement kao vanity. Tretiraj ga kao relationship data.",
              "Ali budi oprezan. Ne svaki engagement je lead. Neki ljudi lajkuju sve. Neki komentari su od peer-ova. Neki followeri nisu kupci. Neki profile view-ovi su irelevantni. Neki content privlači pogrešnu publiku.",
              "Cilj nije najveća outreach lista. Cilj je najrelevantnija.",
            ],
            [
              "Founder-Led Growth works because outreach and content run in parallel, and engagement adds visibility before the message. Signals only help if you use them in CRM.",
              "If someone engages with your content about a specific problem, that gives you a reason to continue the conversation.",
              "LinkedIn's social selling guidance defines social selling as using social networks to connect and build relationships with prospects. Its Social Selling Index includes finding the right people, engaging with insights, and building relationships.",
              "LinkedIn also recommends prioritizing warm leads in outreach, especially people who have already interacted with your posts or visited your profile, and personalizing messages by referencing something specific about the recipient.",
              "That is the core of this lesson. Do not treat engagement as vanity. Treat it as relationship data.",
              "But be careful. Not every engagement is a lead. Some people like everything. Some comments are from peers. Some followers are not buyers. Some profile views are irrelevant. Some content gets attention from the wrong audience.",
              "The goal is not to build the biggest outreach list. The goal is to build the most relevant one.",
            ],
          ),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("3", "3"),
              label: L("Filtera", "Filters"),
              description: L(
                "Fit · Intent · Context, pre nego što pošalješ outreach.",
                "Fit · Intent · Context, before you send outreach.",
              ),
            },
            {
              value: L("24-48h", "24-48h"),
              label: L("Capture prozor", "Capture window"),
              description: L(
                "Review engagement svakih 24-48h, signali brzo gube vrednost.",
                "Review engagement every 24-48h, signals lose value quickly.",
              ),
            },
            {
              value: L("21", "21"),
              label: L("Od 172", "From 172"),
              description: L(
                "Primer: 172 engagement-a → ~21 ICP fit, kvalifikacija je ključ.",
                "Example: 172 engagements → ~21 ICP fit, qualification is the key.",
              ),
            },
          ],
        },
        {
          type: "pipeline-flow",
          title: L("Od vanity engagement-a do buying signala", "From vanity engagement to buying signal"),
          subtitle: L(
            "Ne svaki lajk zaslužuje poruku, signal strength određuje akciju.",
            "Not every like deserves a message, signal strength determines action.",
          ),
          stages: [
            L("Lajk", "Like"),
            L("Komentar", "Comment"),
            L("Profil", "Profile"),
            L("DM", "DM"),
            L("Webinar", "Webinar"),
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
              "LinkedIn engagement postaje koristan samo kada prođe tri filtera:",
            ],
            [
              "LinkedIn engagement becomes useful only when it passes three filters:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            ["Fit, da li je osoba ili account blizu tvog ICP-a?", "Intent, da li su pokazali smislen interes ili samo lagani engagement?", "Context, da li tvoj outreach može da referencira nešto stvarno i korisno?"],
            ["Fit - Is this person or account close to your ICP?", "Intent - Did they show meaningful interest, or just light engagement?", "Context - Can your outreach reference something real and useful?"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Ako je odgovor ne, ne šalji outreach još. Ako je odgovor da, poruka može da deluje toplo."],
            ["If the answer is no, do not send outreach yet. If the answer is yes, the message can feel warm."],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Cilj nije da pišeš svima koji angažuju. Cilj je da identifikuješ ko zaslužuje sledeći korak.",
            "The goal is not to message everyone who engages. The goal is to identify who deserves a next step.",
          ),
        },
        {
          type: "zone-cards",
          title: L("3 filtera pre outreach-a", "3 filters before outreach"),
          subtitle: L(
            "Sva tri moraju biti „da“, inače čekaš ili nurture-uješ, ne pitch-uješ.",
            "All three must be \"yes\", otherwise wait or nurture, do not pitch.",
          ),
          cards: [
            {
              zone: L("Fit", "Fit"),
              eyebrow: L("ICP", "ICP"),
              job: L("Da li osoba/account odgovara tvom idealnom kupcu?", "Does the person/account match your ideal customer?"),
              doThis: L("Score industry, veličina, uloga, motion.", "Score industry, size, role, motion."),
              avoid: L("Outreach jer je „neko poznat“ ili ima veliki reach.", "Outreach because someone is \"famous\" or has big reach."),
            },
            {
              zone: L("Intent", "Intent"),
              eyebrow: L("Signal", "Signal"),
              job: L("Da li je engagement smislen ili samo lagani lajk?", "Is the engagement meaningful or just a light like?"),
              doThis: L("Komentar, DM, webinar pitanje > ponovljeni lajk > jedan lajk.", "Comment, DM, webinar question > repeat like > one like."),
              avoid: L("7-email sekvenca posle jednog random lajka.", "7-email sequence after one random like."),
            },
            {
              zone: L("Context", "Context"),
              eyebrow: L("Poruka", "Message"),
              job: L("Možeš li referencirati stvarnu interakciju i temu?", "Can you reference the real interaction and topic?"),
              doThis: L("„Video sam tvoj komentar na post o [tema]…“ + resource.", "\"Saw your comment on the post about [topic]…\" + resource."),
              avoid: L("Generički „hajde na call“ bez konteksta.", "Generic \"let's jump on a call\" with no context."),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "vs-intent",
      title: L("LinkedIn engagement vs buying intent", "Engagement vs buying intent"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Dashboard i metrike, razlikuj vanity od buying signala",
            "Dashboard and metrics, separate vanity from buying signals",
          ),
          caption: L(
            "Isti engagement tip ne znači isti intent. Signal map određuje šta uraditi.",
            "The same engagement type does not mean the same intent. The signal map decides what to do.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Vanity engagement", "Vanity engagement"),
              subtitle: L("Šum u listi", "Noise in the list"),
              variant: "muted",
              items: P(
                [
                  "Lajk od peer-a ili van ICP-a",
                  "Komentar „odličan post“ bez pitanja",
                  "Follower koji nikad ne kupuje",
                  "Profile view bez konteksta",
                  "Export svih iz posta",
                ],
                [
                  "Like from peer or outside ICP",
                  "\"Great post\" comment with no question",
                  "Follower who never buys",
                  "Profile view with no context",
                  "Export everyone from the post",
                ],
              ),
            },
            {
              title: L("Buying signal", "Buying signal"),
              subtitle: L("Topla lista", "Warm list"),
              variant: "accent",
              items: P(
                [
                  "ICP komentar na pain temu",
                  "Ponovljeni lajkovi + profile view",
                  "DM posle content-a",
                  "Webinar + pitanje",
                  "Fit + context → CRM",
                ],
                [
                  "ICP comment on pain topic",
                  "Repeat likes + profile view",
                  "DM after content",
                  "Webinar + question",
                  "Fit + context → CRM",
                ],
              ),
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Većina founder-a tretira svaki engagement isto. Ali lajk nije jednak komentaru. Komentar nije jednak buying pitanju. Webinar registracija nije jednaka zahtevu za call. Signal, fit i kontekst su bitni."],
            ["Most founders treat every engagement the same. But a like is not equal to a comment. A comment is not equal to a buying question. A webinar registration is not equal to someone asking for a call. The signal, fit, and context matter."],
          ),
        },
        {
          type: "table",
          caption: L("Tip engagement-a vs buying intent", "Engagement type vs buying intent"),
          headers: H(
            ["Tip engagement-a", "Šta znači", "Šta uraditi"],
            ["Engagement type", "What it means", "What to do"],
          ),
          rows: [
            { cells: [L("Lajk od irelevantne osobe", "Like from irrelevant person"), L("Vanity engagement", "Vanity engagement"), L("Ignoriši", "Ignore")] },
            { cells: [L("Lajk od ICP kupca", "Like from ICP buyer"), L("Lagani signal", "Light signal"), L("Prati / angažuj nazad", "Monitor / engage back")] },
            { cells: [L("Ponovljeni lajkovi od ICP kupca", "Repeat likes from ICP buyer"), L("Srednji signal", "Medium signal"), L("Dodaj na toplu listu", "Add to warm list")] },
            { cells: [L("Komentar od ICP kupca", "Comment from ICP buyer"), L("Srednji do jak signal", "Medium to strong signal"), L("Odgovori, pogledaj profil, dodaj belešku", "Reply, view profile, add note")] },
            { cells: [L("Profile view posle posta", "Profile view after post"), L("Lagani do srednji signal", "Light to medium signal"), L("Proveri fit i prati", "Check fit and monitor")] },
            { cells: [L("Novi follower iz ICP-a", "New follower from ICP"), L("Srednji signal", "Medium signal"), L("Dodaj na toplu listu", "Add to warm list")] },
            { cells: [L("DM posle content-a", "DM after content"), L("Jak signal", "Strong signal"), L("Dodaj u CRM i odgovori", "Add to CRM and respond")] },
            { cells: [L("Webinar registracija", "Webinar registration"), L("Srednji do jak signal", "Medium to strong signal"), L("Segmentiraj i follow-up", "Segment and follow up")] },
            { cells: [L("Webinar prisustvo + pitanje", "Webinar attendance + question"), L("Jak signal", "Strong signal"), L("Kreiraj sales task", "Create sales task")] },
            { cells: [L("Poseta sajtu posle LinkedIn interakcije", "Website visit after LinkedIn interaction"), L("Jak signal", "Strong signal"), L("Dodaj u CRM i prioritizuj", "Add to CRM and prioritize")] },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "not-all-leads",
      title: L("Nisu svi leadovi isti", "Not all leads are the same"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Isti kanal ne znači isti intent. Sledeći korak određuje signal, ne ego i ne automatski pitch.",
              "Kad lead pokaže lagani signal, cilj je relevancija i kontekst. Kad signal ojača, tek tada pojačavaš sledeći korak.",
            ],
            [
              "The same channel does not mean the same intent. The signal determines the next step, not ego and not an auto pitch.",
              "When a lead shows a light signal, the goal is relevance and context. When the signal gets stronger, then you increase the next action.",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Signal određuje sledeći korak", "Signal determines the next step"),
          headers: H(["Signal", "Intenzitet", "Sledeći korak"], ["Signal", "Intensity", "Next step"]),
          rows: [
            { cells: [L("Profile view", "Profile view"), L("Nizak", "Low"), L("Prati i angažuj nazad kroz sadržaj", "Monitor and engage back through content")] },
            { cells: [L("Lajk", "Like"), L("Nizak", "Low"), L("Dodaj u praćenje, bez pitch-a", "Add to tracking, no pitch")] },
            { cells: [L("Komentar", "Comment"), L("Srednji", "Medium"), L("Odgovori javno i dodaj na toplu listu", "Reply publicly and add to warm list")] },
            { cells: [L("Klik na sajt", "Website click"), L("Srednji", "Medium"), L("Pošalji relevantan resurs", "Send a relevant resource")] },
            { cells: [L("Prijava na webinar", "Webinar registration"), L("Srednji", "Medium"), L("Pre-event nurture + segmentacija", "Pre-event nurture + segmentation")] },
            { cells: [L("Prisustvo webinaru", "Webinar attended"), L("Srednji do jak", "Medium to strong"), L("Replay + kontekstualni follow-up", "Replay + contextual follow-up")] },
            { cells: [L("Pricing page", "Pricing page"), L("Jak", "Strong"), L("Kreiraj sales task i brz follow-up", "Create sales task and fast follow-up")] },
            { cells: [L("Odgovor na DM", "DM reply"), L("Jak", "Strong"), L("Nastavi razgovor dijagnostičkim pitanjem", "Continue conversation with a diagnostic question")] },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Signal treba da vodi sledeći korak. Ne šalji agresivan auto-pitch čim vidiš prvi engagement.",
            "Let the signal guide the next step. Do not send an aggressive auto pitch after the first engagement.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "connection-loop",
      title: L("Petlja konekcije sa ICP-om", "The ICP connection loop"),
      blocks: [
        {
          type: "framework-intro",
          title: L(
            "Poveži → Content → Prati signale → Re-engaguj → Value-based follow-up",
            "Connect → Content → Track signals → Re-engage → Value-based follow-up",
          ),
          description: L(
            "Ovo je Lead Agents operativni proces. Svaki korak hrani sledeći; CRM drži stanje leada kroz celu petlju.",
            "This is the Lead Agents operating process. Each step feeds the next; CRM holds lead state through the full loop.",
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Pet koraka konekcije", "Five connection steps"),
          subtitle: L(
            "Bez follow-up sistema gubiš one koji nisu odgovorili u prvom trenutku. Bez re-engagement-a na signal gubiš one koji jesu spremni sada.",
            "Without a follow-up system you lose people who were not ready on the first touch. Without signal-based re-engagement you lose people who are ready now.",
          ),
          stages: [
            L("Poveži", "Connect"),
            L("Content", "Content"),
            L("Signali", "Signals"),
            L("Re-engage", "Re-engage"),
            L("Follow-up", "Follow-up"),
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Poveži (cold outreach)", "Connect (cold outreach)"),
              whatToDo: L(
                "Lista iz Sales Navigator / Apollo. Prva poruka i ponuda iz ICP dokumenta. HeyReach, Lemlist, La Growth Machine ili Instantly.",
                "List from Sales Navigator / Apollo. First message and offer from the ICP document. HeyReach, Lemlist, La Growth Machine, or Instantly.",
              ),
              whyItMatters: L("Bez prve konekcije nema razgovora.", "Without the first connection there is no conversation."),
              example: L("Prva poruka pominje jedan ICP trigger, ne generički pitch.", "First message mentions one ICP trigger, not a generic pitch."),
              commonMistake: L("500 ljudi bez ICP filtera.", "500 people with no ICP filter."),
              tryThis: L("Testiraj dve ponude na 50 kontakata pre skaliranja.", "Test two offers on 50 contacts before scaling."),
              highlight: L("Outreach otvara vrata.", "Outreach opens the door."),
            },
            {
              step: 2,
              title: L("Content gradi poverenje", "Content builds trust"),
              whatToDo: L(
                "Intervjui, klipovi, carousel-i. Tržište vidi ekspertizu pre drugog dodira.",
                "Interviews, clips, carousels. The market sees expertise before the next touch.",
              ),
              whyItMatters: L("Content ne zamenjuje outreach, već ga jača.", "Content does not replace outreach; it strengthens it."),
              example: L("Klip iz intervjua o RevOps handoff-u posle outreach-a na RevOps lidere.", "Clip from interview on RevOps handoff after outreach to RevOps leaders."),
              commonMistake: L("Čekati viral post pre outreach-a.", "Waiting for a viral post before starting outreach."),
              tryThis: L("Jedan intervju → 3 posta + 2 carousel-a za nedelju dana.", "One interview → 3 posts + 2 carousels for the week."),
              highlight: L("Poverenje pre pitch-a.", "Trust before the pitch."),
            },
            {
              step: 3,
              title: L("Prati signale", "Track signals"),
              whatToDo: L(
                "Komentari, profile view-ovi, ponovljeni lajkovi, webinar, DM u listu ili CRM.",
                "Comments, profile views, repeat likes, webinar, DM into list or CRM.",
              ),
              whyItMatters: L("Signali govore kada je pravi trenutak.", "Signals tell you when timing is right."),
              example: L("VP Sales komentariše post o pipeline-u → zapis u CRM sa signal_reengage.", "VP Sales comments on pipeline post → CRM note with signal_reengage."),
              commonMistake: L("Signali ostaju u LinkedIn notifikacijama.", "Signals stay in LinkedIn notifications."),
              tryThis: L("Nedeljni export engagement-a u Sheets ili CRM.", "Weekly export of engagement into Sheets or CRM."),
              highlight: L("Capture, ne zaboravi.", "Capture, do not forget."),
            },
            {
              step: 4,
              title: L("Re-engaguj na signal", "Re-engage on signal"),
              whatToDo: L(
                "Poruka sa kontekstom stvarne interakcije. Nastavak razgovora, ne novi cold pitch.",
                "Message with context from the real interaction. Continue the conversation, not a new cold pitch.",
              ),
              whyItMatters: L("Topli leadovi konvertuju bolje od hladnih.", "Warm leads convert better than cold ones."),
              example: L("„Video sam tvoj komentar o [tema]. Da podelim checklist?“", "\"Saw your comment on [topic]. Worth sharing the checklist?\""),
              commonMistake: L("Isti cold template posle signala.", "Same cold template after a signal."),
              tryThis: L("Jedna poruka = jedan signal + jedan resurs.", "One message = one signal + one resource."),
              highlight: L("Signal = akcija.", "Signal = action."),
            },
            {
              step: 5,
              title: L("Value-based follow-up sistem", "Value-based follow-up system"),
              whatToDo: L(
                "Sekvenca korisnih dodira za no_reply: resurs, uvid, pitanje iz ICP boli.",
                "Sequence of useful touches for no_reply: resource, insight, question from ICP pain.",
              ),
              whyItMatters: L(
                "Lead odgovara kada je spreman, ne kada si najglasniji.",
                "The lead replies when ready, not when you are loudest.",
              ),
              example: L("Touch 2: mini case study. Touch 3: pitanje o njihovom motion-u.", "Touch 2: mini case study. Touch 3: question about their motion."),
              commonMistake: L("„Samo da proverim“ svake 3 dana.", "\"Just checking in\" every 3 days."),
              tryThis: L("3-5 touchpoint-a iz ICP dokumenta, pauza 5-7 dana.", "3-5 touchpoints from ICP document, 5-7 day gaps."),
              highlight: L("Vrednost, ne dosada.", "Value, not annoyance."),
            },
          ],
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Dosadan follow-up", "Annoying follow-up"),
              subtitle: L("Izbegavaj", "Avoid"),
              variant: "muted",
              items: P(
                [
                  "„Samo da proverim da li si video poruku“",
                  "Ista poruka 5 puta",
                  "Pitch odmah posle jednog lajka",
                  "7 touchpoint-a bez vrednosti",
                ],
                [
                  "\"Just checking if you saw my message\"",
                  "Same message five times",
                  "Pitch right after one like",
                  "Seven touchpoints with no value",
                ],
              ),
            },
            {
              title: L("Value-based follow-up", "Value-based follow-up"),
              subtitle: L("Iz ICP dokumenta", "From the ICP document"),
              variant: "accent",
              items: P(
                [
                  "Resurs vezan za bol koji si već pomenuo",
                  "Kratko pitanje o njihovom kontekstu",
                  "Re-engagement kada se pojavi novi signal",
                  "CRM status: no_reply → signal_reengage → meeting",
                ],
                [
                  "Resource tied to pain you already mentioned",
                  "Short question about their context",
                  "Re-engagement when a new signal appears",
                  "CRM status: no_reply → signal_reengage → meeting",
                ],
              ),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Outreach otvara vrata. Signali govore kada da prođeš. Follow-up sistem drži vrata otvorena dok lead nije spreman.",
            "Outreach opens the door. Signals tell you when to walk through. The follow-up system keeps the door open until the lead is ready.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "outreach-framework",
      title: L("Engagement-to-outreach okvir", "The Engagement-to-Outreach Framework"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Tim planira outreach, od capture-a do personalizovane sekvence",
            "Team planning outreach, from capture to personalized sequence",
          ),
          caption: L(
            "Sales Navigator + Sheets/Airtable drže listu. Findymail omogućava email follow-up.",
            "Sales Navigator + Sheets/Airtable hold the list. Findymail enables email follow-up.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "framework-intro",
          title: L(
            "Capture → Qualify → Enrich → Segment → Personalize → Sequence → Track",
            "Capture → Qualify → Enrich → Segment → Personalize → Sequence → Track",
          ),
          description: L(
            "Ovo je sistem. Svaki korak pretvara sirovi LinkedIn engagement u kvalifikovanu outreach listu sa jasnim sledećim koracima.",
            "This is the system. Each step turns raw LinkedIn engagement into a qualified outreach list with clear next actions.",
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Engagement-to-Outreach Framework", "Engagement-to-Outreach Framework"),
          subtitle: L(
            "Preskoči kvalifikaciju, i topao engagement postane spam.",
            "Skip qualification, and warm engagement becomes spam.",
          ),
          stages: [
            L("Capture", "Capture"),
            L("Qualify", "Qualify"),
            L("Enrich", "Enrich"),
            L("Segment", "Segment"),
            L("Personalize", "Personalize"),
            L("CRM", "CRM"),
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Capture", "Capture"),
              whatToDo: L(
                "Prikupi LinkedIn engagement sa postova, komentara, profile view-ova, followera, webinar aktivnosti i DM-ova.",
                "Collect LinkedIn engagement from posts, comments, profile views, followers, webinar activity, and DMs.",
              ),
              whyItMatters: L(
                "Bez capture-a, topli signali nestaju u notifikacijama.",
                "Without capture, warm signals disappear in notifications.",
              ),
              example: L(
                "Nedeljni review: komentari, ponovljeni lajkovi, profile view-ovi, webinar registracije.",
                "Weekly review: comments, repeat likes, profile views, webinar registrations.",
              ),
              commonMistake: L(
                "Exportovanje svih umesto filtriranja za ICP.",
                "Exporting everyone instead of filtering for ICP.",
              ),
              tryThis: L(
                "Počni ručno 2 nedelje pre automatizacije.",
                "Start manual for two weeks before automating.",
              ),
              highlight: L(
                "Capture bez kvalifikacije stvara buku, ne listu.",
                "Capture without qualification creates noise, not a list.",
              ),
            },
            {
              step: 2,
              title: L("Qualify", "Qualify"),
              whatToDo: L(
                "Proveri da li osoba ili firma odgovara ICP-u.",
                "Check whether the person or company matches your ICP.",
              ),
              whyItMatters: L(
                "Engagement ne znači relevantnost.",
                "Engagement does not equal relevance.",
              ),
              example: L(
                "Score 172 engagement-a, samo 21 odgovara ICP-u.",
                "Score 172 engagements, only 21 match the ICP.",
              ),
              commonMistake: L(
                "Dozvoliti uzbuđenje od engagement-a da nadjača fit.",
                "Letting excitement from engagement override fit.",
              ),
              tryThis: L(
                "Score 50 angažovanih ljudi iz poslednjih 30 dana.",
                "Score 50 engaged people from the last 30 days.",
              ),
              highlight: L(
                "Fit je prvi filter. Bez fit-a, nema toplog outreach-a.",
                "Fit is the first filter. Without fit, there is no warm outreach.",
              ),
            },
            {
              step: 3,
              title: L("Enrich", "Enrich"),
              whatToDo: L(
                "Dodaj podatke o firmi, ulozi, email-u, LinkedIn URL-u, sajtu, tech stack-u i relevantnom kontekstu.",
                "Add company data, role, email, LinkedIn URL, website, tech stack, and relevant context.",
              ),
              whyItMatters: L(
                "Personalizacija i routing zahtevaju podatke.",
                "Personalization and routing require data.",
              ),
              example: L(
                "Clay obogaćuje profil, firmu, email i hiring signale.",
                "Clay enriches profile, company, email, and hiring signals.",
              ),
              commonMistake: L(
                "Enrichment pre kvalifikacije, troši kredite i pravi naduvane liste.",
                "Enriching before qualifying, wastes credits and creates bloated lists.",
              ),
              tryThis: L(
                "Obogati samo kontakte koji prolaze minimum ICP score.",
                "Only enrich contacts that pass your minimum ICP score.",
              ),
              highlight: L(
                "Enrich samo ono što je već kvalifikovano.",
                "Enrich only what is already qualified.",
              ),
            },
            {
              step: 4,
              title: L("Segment", "Segment"),
              whatToDo: L(
                "Grupiši leadove po jačini signala i temi interesa.",
                "Group leads by signal strength and topic interest.",
              ),
              whyItMatters: L(
                "Različite teme zahtevaju različite poruke.",
                "Different topics require different messages.",
              ),
              example: L(
                "Segmenti: outbound, content, CRM, webinar, buying signals.",
                "Segments: outbound, content, CRM, webinar, buying signals.",
              ),
              commonMistake: L(
                "Jedna poruka za sve.",
                "Using one message for everyone.",
              ),
              tryThis: L(
                "Kreiraj šablone po content temi, ne samo po personi.",
                "Create message templates by content topic, not just persona.",
              ),
              highlight: L(
                "Segmentacija određuje ugao poruke.",
                "Segmentation determines the message angle.",
              ),
            },
            {
              step: 5,
              title: L("Personalize", "Personalize"),
              whatToDo: L(
                "Napiši outreach na osnovu stvarne interakcije i teme na koju su angažovani.",
                "Write outreach based on the real interaction and the topic they engaged with.",
              ),
              whyItMatters: L(
                "Topli outreach nastavlja stvarni kontekst, ne samo kaže „video sam tvoj post“.",
                "Warm outreach continues real context, not just says \"saw your post.\"",
              ),
              example: L(
                "„Primetio sam tvoj komentar na post o founder-led outreach-u…“",
                "\"Noticed your comment on the post about founder-led outreach…\"",
              ),
              commonMistake: L(
                "Korišćenje engagement-a kao izgovora za odmah pitch.",
                "Using engagement as an excuse to pitch immediately.",
              ),
              tryThis: L(
                "Prva poruka resource-first, ne meeting-first.",
                "Make the first message resource-first, not meeting-first.",
              ),
              highlight: L(
                "Prvi DM otvara vrata, ne forsira prodaju.",
                "The first DM should open the door, not force the sale.",
              ),
            },
            {
              step: 6,
              title: L("Sequence", "Sequence"),
              whatToDo: L(
                "Koristi LinkedIn DM, email, follow-up i po potrebi voice/video u zavisnosti od nivoa intent-a.",
                "Use LinkedIn DM, email, follow-up, and possibly voice/video depending on intent level.",
              ),
              whyItMatters: L(
                "Multichannel radi kad je kontekst jak i sekvenca kratka.",
                "Multichannel works when context is strong and the sequence is short.",
              ),
              example: L(
                "Touch 1: LinkedIn DM → Touch 2: email → Touch 3: LinkedIn follow-up → Touch 4: finalni nudge.",
                "Touch 1: LinkedIn DM → Touch 2: email → Touch 3: LinkedIn follow-up → Touch 4: final value nudge.",
              ),
              commonMistake: L(
                "7-email cold sekvenca na osnovu jednog laganog signala.",
                "Turning one LinkedIn like into a 7-email cold sequence.",
              ),
              tryThis: L(
                "Za topli engagement: kratka 2-3 touch sekvenca.",
                "For warm engagement, start with a short 2-3 touch sequence.",
              ),
              highlight: L(
                "Sekvenca treba da bude kratka, kontekstualna i poštovana.",
                "The sequence should be short, contextual, and respectful.",
              ),
            },
            {
              step: 7,
              title: L("Track", "Track"),
              whatToDo: L(
                "Gurni u CRM sa source, signal, topic, next action i pipeline stage.",
                "Push to CRM with source, signal, topic, next action, and pipeline stage.",
              ),
              whyItMatters: L(
                "CRM pretvara engagement u company memory.",
                "The CRM turns engagement into company memory.",
              ),
              example: L(
                "Source: LinkedIn engagement | Signal: comment | Topic: outreach | Stage: warm list.",
                "Source: LinkedIn engagement | Signal: comment | Topic: outreach | Stage: warm list.",
              ),
              commonMistake: L(
                "Dodavanje ljudi tek posle bookovanog call-a.",
                "Only adding people after they book a call.",
              ),
              tryThis: L(
                "Dodaj high-fit, medium/strong-signal kontakte pre sales call-a.",
                "Add high-fit, medium/strong-signal contacts before the sales call.",
              ),
              highlight: L(
                "CRM hvata relationship momentum pre nego što postane pipeline.",
                "CRM should capture relationship momentum before it becomes pipeline.",
              ),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Topli outreach nije topao jer poruka kaže „video sam tvoj post“. Topao je jer nastavlja stvarni kontekst.",
            "Warm outreach is not warm because the message says \"saw your post.\" It is warm because the message continues a real context.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "list-steps",
      title: L("Korak po korak: gradnja outreach liste", "Step-by-step list building workflow"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Sirova lista", "Raw list"),
              subtitle: L("Pre kvalifikacije", "Before qualification"),
              variant: "muted",
              items: P(
                [
                  "Export svih lajkova i komentara",
                  "Peer-ovi, agencije, pogrešan ICP",
                  "Nema signal score-a",
                  "Generički DM svima",
                  "CRM pun šuma",
                ],
                [
                  "Export all likes and comments",
                  "Peers, agencies, wrong ICP",
                  "No signal score",
                  "Generic DM to everyone",
                  "CRM full of noise",
                ],
              ),
            },
            {
              title: L("Kvalifikovana lista", "Qualified list"),
              subtitle: L("Posle Fit + Intent + Context", "After Fit + Intent + Context"),
              variant: "accent",
              items: P(
                [
                  "ICP score 60+ u Sheets/Airtable",
                  "Segment po temi (outreach, CRM…)",
                  "Findymail email za follow-up",
                  "Kontekstualni LinkedIn DM",
                  "CRM: source + signal + topic",
                ],
                [
                  "ICP score 60+ in Sheets/Airtable",
                  "Segment by topic (outreach, CRM…)",
                  "Findymail email for follow-up",
                  "Contextual LinkedIn DM",
                  "CRM: source + signal + topic",
                ],
              ),
            },
          ],
        },
        {
          type: "pipeline-flow",
          title: L("Funnel kvalifikacije, primer iz terena", "Qualification funnel, field example"),
          subtitle: L(
            "Brojevi pokazuju zašto capture bez qualify stvara spam.",
            "The numbers show why capture without qualify creates spam.",
          ),
          stages: [
            L("172 engagement", "172 engagements"),
            L("38 review", "38 review"),
            L("21 ICP fit", "21 ICP fit"),
            L("14 context", "14 context"),
            L("Outreach", "Outreach"),
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Definiši koji engagement signali su bitni", "Define which engagement signals matter"),
              whatToDo: L(
                "Kreiraj signal map pre exporta ili gradnje bilo koje liste.",
                "Create a signal map before exporting or building any list.",
              ),
              whyItMatters: L(
                "Bez signal map-e, tim će ili ignorisati topli engagement ili previše pisati ljudima sa niskim intent-om.",
                "Without a signal map, the team will either ignore warm engagement or over-message low-intent people.",
              ),
              example: L(
                "Light: lajk, profile view → monitor. Medium: komentar, ponovljeni lajk → warm list. Strong: DM, webinar pitanje → CRM.",
                "Light: like, profile view → monitor. Medium: comment, repeat like → warm list. Strong: DM, webinar question → CRM.",
              ),
              commonMistake: L(
                "Tretiranje svakog lajka kao buying signala.",
                "Treating every like as a buying signal.",
              ),
              tryThis: L(
                "Pravilo: „Nema outreach-a dok kontakt nema ICP fit + smislen kontekst.“",
                "Create one rule: \"No outreach until the contact has ICP fit + meaningful context.\"",
              ),
              highlight: L(
                "Engagement bez fit-a je buka. Fit bez konteksta je hladno. Fit + kontekst je toplo.",
                "Engagement without fit is noise. Fit without context is cold. Fit + context is warm.",
              ),
            },
            {
              step: 2,
              title: L("Capture angažovane ljude", "Capture engaged people"),
              whatToDo: L(
                "Prikupi ljude koji angažuju founder content: lajkovi, komentari, repostovi, profile view-ovi, followeri, webinar registracije, DM-ovi.",
                "Collect people who engage with founder content: likes, comments, reposts, profile views, followers, webinar registrants, DMs.",
              ),
              whyItMatters: L(
                "Tvoja najtoplija lista je često skrivena u vidljivom engagement-u.",
                "Your warmest list is often hidden in visible engagement.",
              ),
              example: L(
                "Ručno: review svakih 24-48h. Semi-auto: Sales Navigator liste. Auto: Clay, Trigify workflow-i.",
                "Manual: review every 24-48 hours. Semi-auto: Sales Navigator lists. Auto: Clay, Trigify workflows.",
              ),
              commonMistake: L(
                "Export svih umesto filtriranja za ICP.",
                "Exporting everyone instead of filtering for ICP.",
              ),
              tryThis: L(
                "Počni ručno 2 nedelje. Automatizuj tek kad znaš koji signali stvarno važe.",
                "Start manual for two weeks. Only automate after you know which signals actually matter.",
              ),
              highlight: L(
                "Capture je prvi korak, ali ne znači da svako ide na listu.",
                "Capture is the first step, but not everyone goes on the list.",
              ),
            },
            {
              step: 3,
              title: L("Kvalifikuj prema ICP-u", "Qualify against ICP"),
              whatToDo: L(
                "Score-uj svaku angažovanu osobu ili account prema ICP-u.",
                "Score each engaged person or account against your ICP.",
              ),
              whyItMatters: L(
                "Engagement ne znači relevantnost.",
                "Engagement does not equal relevance.",
              ),
              example: L(
                "172 engagement-a → 38 vredi pregledati → 21 odgovara ICP-u → 14 ima dovoljno konteksta.",
                "172 engagements → 38 worth reviewing → 21 match ICP → 14 have enough context.",
              ),
              commonMistake: L(
                "Dozvoliti uzbuđenje od engagement-a da nadjača fit.",
                "Letting excitement from engagement override fit.",
              ),
              tryThis: L(
                "Score 50 angažovanih ljudi iz poslednjih 30 dana i vidi koliko je stvarno ICP.",
                "Score 50 engaged people from the last 30 days. See how many are actually ICP.",
              ),
              highlight: L(
                "Kvalifikacija je razlika između liste i buke.",
                "Qualification is the difference between a list and noise.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Signal map", "Signal map"),
          headers: H(
            ["Nivo signala", "Signali", "Akcija"],
            ["Signal level", "Signals", "Action"],
          ),
          rows: [
            { cells: [L("Lagani", "Light"), L("Lajk, profile view, novi follower", "Like, profile view, new follower"), L("Prati, angažuj nazad, ne pitch-uj", "Monitor, engage back, do not pitch")] },
            { cells: [L("Srednji", "Medium"), L("Komentar, ponovljeni lajkovi, webinar registracija", "Comment, repeat likes, webinar registration"), L("Dodaj na toplu listu, angažuj, pošalji soft resurs", "Add to warm list, engage, send soft resource if context is strong")] },
            { cells: [L("Jak", "Strong"), L("DM, webinar prisustvo, pitanje, pricing/demo poseta", "DM, webinar attendance, question asked, pricing/demo visit"), L("Dodaj u CRM, pošalji kontekstualni outreach, kreiraj sales task", "Add to CRM, send contextual outreach, create sales task")] },
          ],
        },
        {
          type: "table",
          caption: L("ICP scoring model", "ICP scoring model"),
          headers: H(
            ["Faktor", "Poena"],
            ["Factor", "Points"],
          ),
          rows: [
            { cells: [L("ICP industry fit", "ICP industry fit"), L("15", "15")] },
            { cells: [L("Company size fit", "Company size fit"), L("15", "15")] },
            { cells: [L("Role fit", "Role fit"), L("15", "15")] },
            { cells: [L("Pain/topic fit", "Pain/topic fit"), L("20", "20")] },
            { cells: [L("Signal strength", "Signal strength"), L("20", "20")] },
            { cells: [L("Timing trigger", "Timing trigger"), L("10", "10")] },
            { cells: [L("Relationship/context", "Relationship/context"), L("5", "5")] },
          ],
        },
        {
          type: "table",
          caption: L("Score interpretacija", "Score interpretation"),
          headers: H(
            ["Score", "Značenje", "Akcija"],
            ["Score", "Meaning", "Action"],
          ),
          rows: [
            { cells: [L("80-100", "80-100"), L("Visokoprioritetni topli lead", "High-priority warm lead"), L("Dodaj u CRM i pošalji kontekstualni outreach", "Add to CRM and send contextual outreach")] },
            { cells: [L("60-79", "60-79"), L("Dobar fit", "Good fit"), L("Angažuj više i nurture-uj", "Engage more and nurture")] },
            { cells: [L("40-59", "40-59"), L("Slab fit", "Weak fit"), L("Samo prati", "Monitor only")] },
            { cells: [L("Ispod 40", "Under 40"), L("Nerelevantno", "Not relevant"), L("Ignoriši", "Ignore")] },
          ],
        },
        {
          type: "zone-cards",
          title: L("Signal map, šta uraditi po jačini", "Signal map, what to do by strength"),
          subtitle: L(
            "Jači signal = brža akcija. Slabiji = prati, ne pitch-uj.",
            "Stronger signal = faster action. Weaker = monitor, do not pitch.",
          ),
          cards: [
            {
              zone: L("Lagani signal", "Light signal"),
              eyebrow: L("Monitor", "Monitor"),
              job: L("Prati bez outreach pitch-a.", "Monitor without outreach pitch."),
              doThis: L("Lajk, profile view, follower van prioriteta, angažuj nazad u komentarima.", "Like, profile view, lower-priority follower, engage back in comments."),
              avoid: L("Cold DM posle jednog lajka.", "Cold DM after one like."),
            },
            {
              zone: L("Srednji signal", "Medium signal"),
              eyebrow: L("Topla lista", "Warm list"),
              job: L("Dodaj na listu, soft resource ili nurture.", "Add to list, soft resource or nurture."),
              doThis: L("Komentar, ponovljeni lajk, webinar registracija.", "Comment, repeat like, webinar registration."),
              avoid: L("Hard pitch u prvoj poruci.", "Hard pitch in the first message."),
            },
            {
              zone: L("Jak signal", "Strong signal"),
              eyebrow: L("CRM + outreach", "CRM + outreach"),
              job: L("Kontekstualni outreach + sales task.", "Contextual outreach + sales task."),
              doThis: L("DM, webinar pitanje, demo/pricing poseta.", "DM, webinar question, demo/pricing visit."),
              avoid: L("Čekanje nedeljama dok signal hladi.", "Waiting weeks while the signal goes cold."),
            },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 4,
              title: L("Obogati kvalifikovanu listu", "Enrich the qualified list"),
              whatToDo: L(
                "Dodaj podatke potrebne za personalizaciju i routing: ime, LinkedIn URL, uloga, firma, email, tech stack, hiring signali.",
                "Add the data needed for personalization and routing: name, LinkedIn URL, role, company, email, tech stack, hiring signals.",
              ),
              whyItMatters: L(
                "Bez enrichment-a, multichannel follow-up nije moguć.",
                "Without enrichment, multichannel follow-up is not possible.",
              ),
              example: L(
                "Clay kombinuje data providere, enrichment, intent signale i CRM podatke.",
                "Clay combines data providers, enrichment, intent signals, and CRM data.",
              ),
              commonMistake: L(
                "Enrichment pre kvalifikacije, troši kredite i pravi naduvane liste.",
                "Enriching before qualifying, wastes credits and creates bloated lists.",
              ),
              tryThis: L(
                "Obogati samo kontakte koji prolaze minimum ICP score.",
                "Only enrich contacts that pass your minimum ICP score.",
              ),
              highlight: L(
                "Enrich samo ono što je već kvalifikovano.",
                "Enrich only what is already qualified.",
              ),
            },
            {
              step: 5,
              title: L("Segmentiraj po temi i jačini signala", "Segment by topic and signal strength"),
              whatToDo: L(
                "Grupiši ljude na osnovu onoga sa čim su angažovali i koliko je signal jak.",
                "Group people based on what they engaged with and how strong the signal is.",
              ),
              whyItMatters: L(
                "Osoba koja je lajkovala post o LinkedIn profilu ne treba istu poruku kao neko ko je pitao CRM pitanje na webinaru.",
                "A person who liked a post about LinkedIn profile optimization should not receive the same message as someone who asked a webinar question about CRM tracking.",
              ),
              example: L(
                "Segmenti: profile optimization, content strategy, outreach, CRM, webinar, buying signals.",
                "Segments: profile optimization, content strategy, outreach, CRM, webinar, buying signals.",
              ),
              commonMistake: L(
                "Jedna poruka za sve.",
                "Using one message for everyone.",
              ),
              tryThis: L(
                "Kreiraj message template-e po content temi, ne samo po personi.",
                "Create message templates by content topic, not just persona.",
              ),
              highlight: L(
                "Segmentacija određuje ugao i resurs koji nudiš.",
                "Segmentation determines the angle and resource you offer.",
              ),
            },
            {
              step: 6,
              title: L("Napiši kontekstualne LinkedIn DM-ove", "Write contextual LinkedIn DMs"),
              whatToDo: L(
                "Koristi engagement kontekst kao otvaranje: referenca interakcije → problem → korisni asset ili pitanje → mali ask.",
                "Use the engagement context as the opening: reference interaction → problem → useful asset or question → small ask.",
              ),
              whyItMatters: L(
                "Prvi DM otvara vrata, ne forsira prodaju.",
                "The first DM should open the door, not force the sale.",
              ),
              example: L(
                "„Hej [Ime], video sam tvoj komentar na post o founder-led outreach-u. Imamo kratak checklist za pretvaranje engagement-a u listu. Da pošaljem?“",
                "\"Hey [Name], saw your comment on the post about founder-led outreach. We built a short checklist for turning LinkedIn engagement into a qualified outreach list. Want me to send it?\"",
              ),
              commonMistake: L(
                "„Hvala na lajku. Hoćeš call?“ umesto resource-first pristupa.",
                "\"Thanks for liking my post. Want to book a call?\" instead of a resource-first approach.",
              ),
              tryThis: L(
                "Prva poruka resource-first, ne meeting-first.",
                "Make the first message resource-first, not meeting-first.",
              ),
              highlight: L(
                "Topli DM nastavlja razgovor, ne prekida ga pitch-om.",
                "A warm DM continues the conversation, it does not interrupt it with a pitch.",
              ),
            },
            {
              step: 7,
              title: L("Dodaj email follow-up pažljivo", "Add email follow-up carefully"),
              whatToDo: L(
                "Koristi email samo kad ima dovoljno konteksta i osoba je kvalifikovana.",
                "Use email only when there is enough context and the person is qualified.",
              ),
              whyItMatters: L(
                "Multichannel radi dobro, ali postaje spam brzo ako je kontekst slab.",
                "Multichannel outreach can work well, but it gets spammy fast if the context is weak.",
              ),
              example: L(
                "Subject: quick follow-up on LinkedIn engagement. Body referencira post i nudi scoring model.",
                "Subject: quick follow-up on LinkedIn engagement. Body references the post and offers a scoring model.",
              ),
              commonMistake: L(
                "7-email cold sekvenca na osnovu jednog laganog signala.",
                "Turning one LinkedIn like into a 7-email cold sequence.",
              ),
              tryThis: L(
                "Za topli engagement: kratka 2-3 touch sekvenca.",
                "For warm engagement, start with a short 2-3 touch sequence.",
              ),
              highlight: L(
                "Email podržava LinkedIn, ne zamenjuje kontekst.",
                "Email supports LinkedIn, it does not replace context.",
              ),
            },
            {
              step: 8,
              title: L("Gurni kvalifikovani engagement u CRM", "Push qualified engagement into CRM"),
              whatToDo: L(
                "Prati lead, signal, temu i sledeću akciju u CRM-u.",
                "Track the lead, the signal, the topic, and the next action in CRM.",
              ),
              whyItMatters: L(
                "Ako engagement ostane u LinkedIn notifikacijama, nestaje.",
                "If engagement stays in LinkedIn notifications, it disappears.",
              ),
              example: L(
                "Source: LinkedIn engagement | First signal: comment | Topic: outreach | Stage: warm list | Next action: follow up in 3 days.",
                "Source: LinkedIn engagement | First signal: comment | Topic: outreach | Stage: warm list | Next action: follow up in 3 days.",
              ),
              commonMistake: L(
                "Dodavanje ljudi tek posle bookovanog call-a.",
                "Only adding people after they book a call.",
              ),
              tryThis: L(
                "Dodaj high-fit, medium/strong-signal kontakte pre sales call-a.",
                "Add high-fit, medium/strong-signal contacts before the sales call.",
              ),
              highlight: L(
                "CRM hvata relationship momentum pre nego što postane pipeline.",
                "CRM should capture relationship momentum before it becomes pipeline.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Segmenti po temi", "Segments by topic"),
          headers: H(
            ["Segment", "Signal", "Ugao poruke"],
            ["Segment", "Signal", "Message angle"],
          ),
          rows: [
            { cells: [L("Profile optimization interes", "Profile optimization interest"), L("Angažovao se sa Lekcijom 3 / profile postom", "Engaged with Lesson 3 / profile post"), L("Pošalji profile checklist", "Send profile checklist")] },
            { cells: [L("Content strategy interes", "Content strategy interest"), L("Angažovao se sa content strategy postom", "Engaged with content strategy post"), L("Pošalji content pillar template", "Send content pillar template")] },
            { cells: [L("Outreach interes", "Outreach interest"), L("Angažovao se sa outreach postom", "Engaged with outreach post"), L("Pošalji warm outreach framework", "Send warm outreach framework")] },
            { cells: [L("CRM interes", "CRM interest"), L("Angažovao se sa CRM postom", "Engaged with CRM post"), L("Pošalji CRM field checklist", "Send CRM field checklist")] },
            { cells: [L("Webinar interes", "Webinar interest"), L("Registrovan ili prisustvovao webinaru", "Registered or attended webinar"), L("Pošalji replay + kontekstualno pitanje", "Send replay + contextual question")] },
            { cells: [L("Buying signals interes", "Buying signals interest"), L("Angažovao se sa intent postom", "Engaged with intent post"), L("Pošalji signal scoring template", "Send signal scoring template")] },
          ],
        },
        {
          type: "table",
          caption: L("Primeri LinkedIn DM-ova", "LinkedIn DM examples"),
          headers: H(
            ["Tip", "Primer"],
            ["Type", "Example"],
          ),
          rows: [
            {
              cells: [
                L("Komentar-based DM", "Comment-based DM"),
                L(
                  "„Hej [Ime], video sam tvoj komentar na post o founder-led outreach-u. Deo oko timing-a je tačno gde mnogi B2B timovi zapinju. Imamo kratak checklist za pretvaranje engagement-a u listu. Da pošaljem?“",
                  "\"Hey [Name], saw your comment on the post about founder-led outreach. The part you mentioned around timing is exactly where a lot of B2B teams get stuck. We built a short checklist for turning LinkedIn engagement into a qualified outreach list. Want me to send it?\"",
                ),
              ],
            },
            {
              cells: [
                L("Lajk-based DM", "Like-based DM"),
                L(
                  "„Hej [Ime], primetio sam da si angažovao post o pretvaranju LinkedIn engagement-a u pipeline. Vidimo da founder-led timovi propuštaju handoff između content-a i sales-a. Imam jednostavan signal scoring template ako ti je korisno.“",
                  "\"Hey [Name], noticed you engaged with the post about turning LinkedIn engagement into pipeline. We see a lot of founder-led teams miss the handoff between content and sales. I have a simple signal scoring template if useful.\"",
                ),
              ],
            },
            {
              cells: [
                L("Webinar-based DM", "Webinar-based DM"),
                L(
                  "„Hej [Ime], hvala što si bio/la na sesiji o Founder-Led Growth-u. Glasao/la si za outreach/list-building kao najveći bottleneck. Mogu da pošaljem tačan engagement-to-outreach workflow koji koristimo ako želiš.“",
                  "\"Hey [Name], thanks for joining the session on Founder-Led Growth. You voted for outreach/list-building as the biggest bottleneck. I can send the exact engagement-to-outreach workflow we use if you want it.\"",
                ),
              ],
            },
          ],
        },
        {
          type: "table",
          caption: L("Primer email follow-up-a", "Email follow-up example"),
          headers: H(["Deo", "Primer"], ["Part", "Example"]),
          rows: [
            { cells: [L("Subject", "Subject"), L("quick follow-up on LinkedIn engagement", "quick follow-up on LinkedIn engagement")] },
            {
              cells: [
                L("Body", "Body"),
                L(
                  "„Hej [Ime], video sam da si angažovao post o pretvaranju LinkedIn engagement-a u outreach liste. Vidimo ovaj bottleneck često: founder-i stvaraju pažnju, ali sales tim nikad ne pretvara to u kvalifikovanu listu. Napravio sam jednostavan scoring model za odlučivanje ko treba DM, email ili nurture. Da pošaljem?“",
                  "\"Hey [Name], Saw you engaged with the post about turning LinkedIn engagement into outreach lists. We see this bottleneck a lot: founders create attention, but the sales team never turns it into a qualified list. I put together a simple scoring model for deciding who should get a DM, email, or just stay in nurture. Want me to send it over?\"",
                ),
              ],
            },
          ],
        },
        {
          type: "table",
          caption: L("CRM polja", "CRM fields"),
          headers: H(["Polje", "Primer"], ["Field", "Example"]),
          rows: [
            { cells: [L("Source", "Source"), L("LinkedIn engagement", "LinkedIn engagement")] },
            { cells: [L("First signal", "First signal"), L("Komentar na outreach post", "Comment on outreach post")] },
            { cells: [L("Signal level", "Signal level"), L("Srednji", "Medium")] },
            { cells: [L("Content topic", "Content topic"), L("Engagement-to-outreach", "Engagement-to-outreach")] },
            { cells: [L("ICP fit", "ICP fit"), L("Visok", "High")] },
            { cells: [L("Outreach angle", "Outreach angle"), L("Pošalji scoring template", "Send scoring template")] },
            { cells: [L("Last touch", "Last touch"), L("LinkedIn DM poslat", "LinkedIn DM sent")] },
            { cells: [L("Next action", "Next action"), L("Follow up za 3 dana", "Follow up in 3 days")] },
            { cells: [L("Stage", "Stage"), L("Warm list / conversation / qualified / opportunity", "Warm list / conversation / qualified / opportunity")] },
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
              "Ova lekcija je operativno srce Lead Agents petlje: poveži (outreach) → content → signali → re-engage → value-based follow-up.",
              "Cold outreach otvara vrata. Content gradi poverenje. Signali (komentar, view, webinar) pokreću re-engagement sa kontekstom. Follow-up sistem u HeyReach, Lemlist ili La Growth Machine drži no_reply lead-ove dok trenutak ne dođe.",
              "Engagement lista nije vanity metrika. Nedeljno filtrirate kroz ICP fit, intent i engagement signale pre sledeće poruke. Cilj su prave konekcije, ne 7 bump poruka.",
              "CRM statusi: cold_sent, no_reply, signal_reengage, meeting. Outreach direktan, ads indirektan, signali određuju timing.",
            ],
            [
              "This lesson is the operational heart of the Lead Agents loop: connect (outreach) → content → signals → re-engage → value-based follow-up.",
              "Cold outreach opens the door. Content builds trust. Signals (comment, view, webinar) trigger contextual re-engagement. A follow-up system in HeyReach, Lemlist, or La Growth Machine holds no_reply leads until timing is right.",
              "The engagement list is not a vanity metric. Filter weekly through ICP fit, intent, and engagement signals before the next message. The goal is real connections, not seven bump messages.",
              "CRM statuses: cold_sent, no_reply, signal_reengage, meeting. Outreach is direct, ads are indirect, signals set timing.",
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
              title: L("Social selling je relationship-driven", "Social selling is relationship-driven"),
              body: L(
                "LinkedIn Sales Solutions definiše social selling kao korišćenje društvenih mreža za povezivanje i gradnju odnosa sa prospect-ima. Engagement treba da postane relationship workflow, ne spam trigger.",
                "LinkedIn Sales Solutions defines social selling as using social networks to connect and build relationships with prospects. Engagement should become a relationship workflow, not a spam trigger.",
              ),
              sourceLabel: L("LinkedIn Sales Solutions", "LinkedIn Sales Solutions"),
              sourceUrl: "https://business.linkedin.com/sales-solutions/social-selling",
            },
            {
              title: L("Topli leadovi treba da budu prioritet", "Warm leads should be prioritized"),
              body: L(
                "LinkedIn outreach strategy resurs preporučuje prioritet toplih leadova, ljudi koji su interagovali sa postovima ili posetili profil, i personalizaciju svake poruke sa specifičnim kontekstom.",
                "LinkedIn's outreach strategy resource recommends prioritizing warm leads such as people who have interacted with posts or visited your profile, and personalizing every message with specific context.",
              ),
              sourceLabel: L("LinkedIn Outreach Strategies", "LinkedIn Outreach Strategies"),
              sourceUrl: "https://www.linkedin.com/top-content/marketing/linkedin-marketing-guide/linkedin-outreach-strategies-for-sales-demo-requests/",
            },
            {
              title: L("Clay kombinuje signale, enrichment i CRM podatke", "Clay helps combine signals, enrichment, and CRM data"),
              body: L(
                "Clay opisuje platformu kao spajanje enrichment-a, intent signala i CRM podataka za gradnju high-intent buyer segmenata i pokretanje akcije.",
                "Clay describes its platform as bringing together enrichments, intent signals, and CRM data to build high-intent buyer segments and trigger action.",
              ),
              sourceLabel: L("Clay", "Clay"),
              sourceUrl: "https://www.clay.com/",
            },
            {
              title: L("Multichannel outreach koordinira LinkedIn i email", "Multichannel outreach should coordinate LinkedIn and email"),
              body: L(
                "lemlist dokumentacija objašnjava kako multichannel outreach može kombinovati email, LinkedIn i manual akcije u jednoj campaign sekvenci.",
                "lemlist's documentation explains how multichannel outreach can combine email, LinkedIn, and manual actions in one campaign sequence.",
              ),
              sourceLabel: L("lemlist", "lemlist"),
              sourceUrl: "https://help.lemlist.com/en/articles/4664179-learn-why-multichannel-outreach-matters",
            },
          ],
        },
        { type: "video", video: video1 },
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
            ["1. Izgradi engagement capture sheet"],
            ["1. Build the engagement capture sheet"],
          ),
        },
        {
          type: "table",
          caption: L("Engagement capture polja", "Engagement capture fields"),
          headers: H(["Polje", "Svrha"], ["Field", "Purpose"]),
          rows: [
            { cells: [L("Name", "Name"), L("Osoba koja je angažovala", "Person who engaged")] },
            { cells: [L("LinkedIn URL", "LinkedIn URL"), L("Link profila", "Profile link")] },
            { cells: [L("Company", "Company"), L("Account", "Account")] },
            { cells: [L("Role", "Role"), L("Buyer persona", "Buyer persona")] },
            { cells: [L("Engagement type", "Engagement type"), L("Lajk, komentar, profile view, follow, webinar", "Like, comment, profile view, follow, webinar")] },
            { cells: [L("Engagement topic", "Engagement topic"), L("Sa kojim content-om/temom su angažovali", "What content/topic they engaged with")] },
            { cells: [L("Signal level", "Signal level"), L("Lagani, srednji, jak", "Light, medium, strong")] },
            { cells: [L("ICP fit", "ICP fit"), L("Visok, srednji, nizak", "High, medium, low")] },
            { cells: [L("Company size", "Company size"), L("Fit provera", "Fit check")] },
            { cells: [L("Industry", "Industry"), L("Fit provera", "Fit check")] },
            { cells: [L("Trigger", "Trigger"), L("Hiring, funding, content aktivnost, webinar, website visit", "Hiring, funding, content activity, webinar, website visit")] },
            { cells: [L("Email", "Email"), L("Za multichannel follow-up", "For multichannel follow-up")] },
            { cells: [L("Outreach angle", "Outreach angle"), L("Kontekst poruke", "Message context")] },
            { cells: [L("Status", "Status"), L("Monitor, nurture, DM, email, CRM, opportunity", "Monitor, nurture, DM, email, CRM, opportunity")] },
            { cells: [L("Next action", "Next action"), L("Šta se dešava dalje", "What happens next")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["2. Kreiraj nedeljni engagement review"],
            ["2. Create a weekly engagement review"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Pregledaj sve founder postove iz nedelje.",
              "Capture komentare prvo.",
              "Capture ponovljene engager-e.",
              "Capture relevantne profile view-ove i followere.",
              "Dodaj webinar registrante i učesnike.",
              "Ukloni irelevantne ljude.",
              "Score-uj preostalu listu.",
              "Obogati samo high-fit leadove.",
              "Segmentiraj po temi.",
              "Napiši kontekstualne DM-ove.",
              "Gurni kvalifikovane kontakte u CRM.",
            ],
            [
              "Review all founder posts from the week.",
              "Capture comments first.",
              "Capture repeat engagers.",
              "Capture relevant profile views and followers.",
              "Add webinar registrants and attendees.",
              "Remove irrelevant people.",
              "Score the remaining list.",
              "Enrich only high-fit leads.",
              "Segment by topic.",
              "Write contextual DMs.",
              "Push qualified contacts into CRM.",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Nedeljni output target", "Weekly output target"),
          headers: H(["Input", "Output"], ["Input", "Output"]),
          rows: [
            { cells: [L("100-300 sirovih engagement-a", "100-300 raw engagements"), L("20-50 pregledanih kontakata", "20-50 reviewed contacts")] },
            { cells: [L("20-50 pregledanih kontakata", "20-50 reviewed contacts"), L("10-25 kvalifikovanih kontakata", "10-25 qualified contacts")] },
            { cells: [L("10-25 kvalifikovanih kontakata", "10-25 qualified contacts"), L("5-15 kontekstualnih outreach poruka", "5-15 contextual outreach messages")] },
            { cells: [L("5-15 poruka", "5-15 messages"), L("2-5 razgovora", "2-5 conversations")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["3. Kreiraj signal-based segmente"],
            ["3. Create signal-based segments"],
          ),
        },
        {
          type: "table",
          caption: L("Primeri segmenata", "Segment examples"),
          headers: H(["Segment", "Kriterijum", "Akcija"], ["Segment", "Criteria", "Action"]),
          rows: [
            { cells: [L("Light nurture", "Light nurture"), L("ICP lajkovao jedan post", "ICP liked one post"), L("Angažuj nazad, prati", "Engage back, monitor")] },
            { cells: [L("Warm content engager", "Warm content engager"), L("ICP angažovao 2+ posta", "ICP engaged with 2+ posts"), L("Dodaj na toplu listu", "Add to warm list")] },
            { cells: [L("Conversation starter", "Conversation starter"), L("ICP komentarisao ili odgovorio", "ICP commented or replied"), L("Pošalji soft DM", "Send soft DM")] },
            { cells: [L("Webinar engaged", "Webinar engaged"), L("Registrovan ili prisustvovao", "Registered or attended webinar"), L("Pošalji replay/resurs", "Send replay/resource")] },
            { cells: [L("High intent", "High intent"), L("Pitanje, DM, pricing poseta, ponovljeni account activity", "Asked question, DM, pricing visit, repeated account activity"), L("Dodaj u CRM i sales task", "Add to CRM and sales task")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["4. Napiši message template-e po temi"],
            ["4. Write message templates by topic"],
          ),
        },
        {
          type: "table",
          caption: L("Template-i po temi", "Templates by topic"),
          headers: H(["Tema", "Primer DM-a"], ["Topic", "DM example"]),
          rows: [
            {
              cells: [
                L("LinkedIn profil", "LinkedIn profile"),
                L(
                  "„Hej [Ime], primetio sam da si angažovao post o founder profilima. Profili dobijaju view-ove, ali ne objašnjavaju ponudu dovoljno jasno. Imam kratak founder profile checklist ako ti je korisno.“",
                  "\"Hey [Name], noticed you engaged with the post about founder profiles. Profiles are getting views, but they do not explain the offer clearly enough to create replies. I have a quick founder profile checklist if useful.\"",
                ),
              ],
            },
            {
              cells: [
                L("Content strategija", "Content strategy"),
                L(
                  "„Hej [Ime], video sam da si angažovao content strategy post. Mnogi founder-i postuju konzistentno ali ne stvaraju pipeline jer content nije vezan za ICP bol. Mogu da pošaljem content pillar template ako ti je korisno.“",
                  "\"Hey [Name], saw you engaged with the content strategy post. A lot of founders post consistently but still do not create pipeline because the content is not tied to ICP pain. I can send the content pillar template if helpful.\"",
                ),
              ],
            },
            {
              cells: [
                L("Outreach", "Outreach"),
                L(
                  "„Hej [Ime], primetio sam da si angažovao post o toplom outreach-u. Glavni problem: timovi tretiraju engagement kao vanity umesto da ga pretvore u kvalifikovanu listu. Imam jednostavan engagement scoring template ako ti je korisno.“",
                  "\"Hey [Name], noticed you engaged with the post about warm outreach. The main issue we see is that teams treat engagement as vanity instead of turning it into a qualified list. I have a simple engagement scoring template if useful.\"",
                ),
              ],
            },
            {
              cells: [
                L("CRM", "CRM"),
                L(
                  "„Hej [Ime], video sam da si angažovao CRM tracking post. Ovde founder-led pipeline obično nestaje, signal postoji, ali nema next action. Mogu da pošaljem CRM field setup ako ti je korisno.“",
                  "\"Hey [Name], saw you engaged with the CRM tracking post. This is usually where founder-led pipeline gets lost: the signal exists, but no next action is created. I can send the CRM field setup if useful.\"",
                ),
              ],
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["5. Izgradi kratku multichannel sekvencu"],
            ["5. Build a short multichannel sequence"],
          ),
        },
        {
          type: "table",
          caption: L("Primer sekvence", "Sequence example"),
          headers: H(["Touch", "Kanal", "Cilj poruke"], ["Touch", "Channel", "Message goal"]),
          rows: [
            { cells: [L("1", "1"), L("LinkedIn DM", "LinkedIn DM"), L("Referenciraj engagement i ponudi resurs", "Reference engagement and offer resource")] },
            { cells: [L("2", "2"), L("Email", "Email"), L("Pošalji korisni kontekst / pitaj da li je relevantno", "Send useful context / ask if relevant")] },
            { cells: [L("3", "3"), L("LinkedIn", "LinkedIn"), L("Follow up ili angažuj sa njihovim postom", "Follow up or engage with their post")] },
            { cells: [L("4", "4"), L("Email ili DM", "Email or DM"), L("Finalni soft nudge sa vrednošću", "Final soft nudge with value")] },
          ],
        },
        {
          type: "bullets",
          items: P(
            [
              "Drži poruke kratke.",
              "Koristi stvarni kontekst.",
              "Ne pitch-uj prerano.",
              "Stani kad odgovore.",
              "Ne over-automatizuj high-context leadove.",
              "Nikad ne šalji dugu cold sekvencu na osnovu jednog laganog signala.",
            ],
            [
              "Keep messages short.",
              "Use real context.",
              "Do not pitch too early.",
              "Stop when they reply.",
              "Do not over-automate high-context leads.",
              "Never send a long cold sequence based on one light signal.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["6. Gurni kvalifikovane leadove u CRM"],
            ["6. Push qualified leads to CRM"],
          ),
        },
        {
          type: "table",
          caption: L("CRM stage predlozi", "CRM stage suggestions"),
          headers: H(["Stage", "Značenje"], ["Stage", "Meaning"]),
          rows: [
            { cells: [L("Engaged", "Engaged"), L("Osoba angažovala founder content", "Person engaged with founder content")] },
            { cells: [L("Warm list", "Warm list"), L("ICP fit + relevantna tema", "ICP fit + relevant topic")] },
            { cells: [L("Outreach sent", "Outreach sent"), L("Kontekstualni DM/email poslat", "Contextual DM/email sent")] },
            { cells: [L("Conversation", "Conversation"), L("Osoba odgovorila", "Person replied")] },
            { cells: [L("Qualified", "Qualified"), L("Problem, fit i next step potvrđeni", "Problem, fit, and next step confirmed")] },
            { cells: [L("Opportunity", "Opportunity"), L("Sales proces započet", "Sales process started")] },
            { cells: [L("Nurture", "Nurture"), L("Nije spreman ali relevantan", "Not ready but relevant")] },
            { cells: [L("Disqualified", "Disqualified"), L("Nije ICP ili nema fit-a", "Not ICP or no fit")] },
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
              name: "LinkedIn",
              logo: "/images/sales-tools/linkedin.png",
              usedFor: L(
                "Identifikacija lajkova, komentara, followera, profile view-ova, DM-ova i content engagement-a",
                "Identify likes, comments, followers, profile views, DMs, and content engagement",
              ),
              whyItFits: L(
                "Izvor toplih engagement signala.",
                "It is the source of warm engagement signals.",
              ),
              alternative: L("Nema alternative", "None"),
            },
            {
              name: "LinkedIn Sales Navigator",
              logo: "/images/sales-tools/linkedin-sales-navigator.png",
              usedFor: L(
                "Čuvanje leadova, gradnja account lista, provera buyer fit-a, monitoring account-a",
                "Save leads, build account lists, check buyer fit, monitor accounts",
              ),
              whyItFits: L(
                "Pomaže kvalifikaciji angažovanih ljudi prema ICP-u i strukturiranoj lead listi.",
                "Helps qualify engaged people against ICP and build structured lead lists.",
              ),
              alternative: L("Apollo, ručna LinkedIn pretraga", "Apollo, manual LinkedIn search"),
            },
            {
              name: "Google Sheets",
              logo: "/images/sales-tools/google-sheets.png",
              usedFor: L(
                "Staging lista za capture, ICP scoring, segmentaciju i next actions",
                "Staging list for capture, ICP scoring, segmentation, and next actions",
              ),
              whyItFits: L(
                "Brz start, idealno za nedeljni engagement review pre CRM-a.",
                "Fast start, ideal for weekly engagement review before CRM.",
              ),
              alternative: L("Airtable, Notion", "Airtable, Notion"),
            },
            {
              name: "Airtable",
              logo: "/images/sales-tools/airtable.png",
              usedFor: L(
                "Strukturisana baza za signale, segmente, enrichment status i outreach task-ove",
                "Structured base for signals, segments, enrichment status, and outreach tasks",
              ),
              whyItFits: L(
                "Views i filteri po signal strength, lakše od flat spreadsheet-a na većim listama.",
                "Views and filters by signal strength, easier than flat spreadsheets at scale.",
              ),
              alternative: L("Google Sheets, Notion", "Google Sheets, Notion"),
            },
            {
              name: "Clay",
              slug: "clay",
              usedFor: L(
                "Enrichment angažovanih LinkedIn profila sa podacima o firmi, email-u, ulozi, sajtu, tech stack-u i signalima",
                "Enrich engaged LinkedIn profiles with company data, email, role, website, tech stack, signals, and AI qualification",
              ),
              whyItFits: L(
                "Odličan za pretvaranje sirovog engagement-a u kvalifikovane, segmentirane lead liste.",
                "Great for turning raw engagement into qualified, segmented lead lists.",
              ),
              alternative: L("Apollo, Dropcontact, Findymail, PhantomBuster", "Apollo, Dropcontact, Findymail, PhantomBuster"),
            },
            {
              name: "Apollo",
              slug: "apollo",
              usedFor: L(
                "Pronalaženje company/contact podataka, email-ova, job title-ova i prospecting filtera",
                "Find company/contact data, emails, job titles, and prospecting filters",
              ),
              whyItFits: L(
                "Korisno za enrichment i validaciju angažovanih prospect-a.",
                "Useful for enriching and validating engaged prospects.",
              ),
              alternative: L("Cognism, ZoomInfo, Clay", "Cognism, ZoomInfo, Clay"),
            },
            {
              name: "Findymail",
              logo: "/images/sales-tools/findymail.png",
              usedFor: L(
                "Pronalaženje i verifikacija business email adresa za multichannel follow-up",
                "Find and verify business email addresses for multichannel follow-up",
              ),
              whyItFits: L(
                "Kad je LinkedIn DM otvorio vrata, email nastavlja razgovor sa istim kontekstom.",
                "When LinkedIn DM opens the door, email continues the conversation with the same context.",
              ),
              alternative: L("Dropcontact, Apollo, Hunter, Prospeo", "Dropcontact, Apollo, Hunter, Prospeo"),
            },
            {
              name: "HeyReach",
              slug: "heyreach",
              usedFor: L(
                "LinkedIn outreach kampanje i multi-sender LinkedIn sekvence",
                "Run LinkedIn outreach campaigns and manage multi-sender LinkedIn sequences",
              ),
              whyItFits: L(
                "Korisno za skaliranje kontekstualnog LinkedIn outreach-a kad je lista kvalifikovana.",
                "Useful for scaling contextual LinkedIn outreach once the list is qualified.",
              ),
              alternative: L("LaGrowthMachine, Expandi", "LaGrowthMachine, Expandi"),
            },
            {
              name: "Lemlist",
              slug: "lemlist",
              usedFor: L(
                "Multichannel outreach sa email, LinkedIn koracima, manual task-ovima i personalizacijom",
                "Run multichannel outreach with email, LinkedIn steps, manual tasks, and personalization",
              ),
              whyItFits: L(
                "Dobar za LinkedIn + email follow-up sekvence.",
                "Good for LinkedIn + email follow-up sequences.",
              ),
              alternative: L("LaGrowthMachine, Smartlead + ručni LinkedIn task-ovi", "LaGrowthMachine, Smartlead + manual LinkedIn tasks"),
            },
            {
              name: "LaGrowthMachine",
              slug: "lagrowthmachine",
              usedFor: L(
                "Multichannel outreach sa LinkedIn, email i Twitter koracima",
                "Multichannel outreach with LinkedIn, email, and Twitter steps",
              ),
              whyItFits: L(
                "Alternativa za koordinisane LinkedIn + email sekvence.",
                "Alternative for coordinated LinkedIn + email sequences.",
              ),
              alternative: L("HeyReach + Lemlist, Expandi", "HeyReach + Lemlist, Expandi"),
            },
            {
              name: "HubSpot / Pipedrive",
              slug: "hubspot",
              usedFor: L(
                "Praćenje source, signal, topic, stage, next action i pipeline-a",
                "Track source, signal, topic, stage, next action, and pipeline",
              ),
              whyItFits: L(
                "Pretvara engagement u merljiv revenue workflow.",
                "Turns engagement into measurable revenue workflow.",
              ),
              alternative: L("Attio, Folk, Salesforce", "Attio, Folk, Salesforce"),
            },
            {
              name: "Make.com / Zapier",
              usedFor: L(
                "Pomeranje podataka između formi, Sheets, Clay, CRM, Slack i outreach alata",
                "Move data between forms, Sheets, Clay, CRM, Slack, and outreach tools",
              ),
              whyItFits: L(
                "Korisno kad je manual workflow dokazan.",
                "Useful once the manual workflow is proven.",
              ),
              alternative: L("n8n, native integracije", "n8n, native integrations"),
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
          src: "https://images.unsplash.com/photo-1551836022-d5d88e1238ae?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Sastanak i planiranje, nedeljni engagement-to-outreach ritual",
            "Meeting and planning, weekly engagement-to-outreach ritual",
          ),
          caption: L(
            "Jedan post → capture u Sheets → qualify → enrich → segment → kontekstualni DM.",
            "One post → capture in Sheets → qualify → enrich → segment → contextual DM.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("80", "80"),
              label: L("Engagement", "Engagements"),
              description: L(
                "Primer: 80 reakcija na post, sirovina za capture.",
                "Example: 80 reactions on a post, raw material for capture.",
              ),
            },
            {
              value: L("18", "18"),
              label: L("ICP fit", "ICP fit"),
              description: L(
                "Posle filtera, samo oni idu na enrich i outreach.",
                "After filters, only these go to enrich and outreach.",
              ),
            },
            {
              value: L("2-3", "2-3"),
              label: L("Touch sekvenca", "Touch sequence"),
              description: L(
                "LinkedIn DM → email (Findymail) → kratak follow-up, ne 7-email cold.",
                "LinkedIn DM → email (Findymail) → short follow-up, not 7-email cold.",
              ),
            },
          ],
        },
        {
          type: "workflow",
          title: L(
            "Od LinkedIn engagement-a do kvalifikovane outreach liste",
            "From LinkedIn engagement to qualified outreach list",
          ),
          steps: P(
            [
              "Founder objavi post o toplom outreach-u.",
              "80 ljudi angažuje.",
              "Tim capture-uje komentare, ponovljene engager-e i relevantne profile view-ove.",
              "Sirova lista se filtrira prema ICP-u.",
              "18 ljudi odgovara ciljnom profilu.",
              "Clay obogaćuje firmu, ulogu, email i signale.",
              "Leadovi se segmentiraju po temi: outreach, content, CRM, profile.",
              "High-fit kontakti se guraju u CRM.",
              "Kontekstualni LinkedIn DM-ovi se šalju prvo.",
              "Email follow-up se koristi samo za high-fit kontakte sa dovoljno konteksta.",
              "Odgovori se loguju u CRM.",
              "Kvalifikovani razgovori postaju opportunity-ji.",
              "Nespremni ali relevantni kontakti ulaze u nurture.",
            ],
            [
              "Founder publishes a post about warm outreach.",
              "80 people engage.",
              "Team captures comments, repeat engagers, and relevant profile views.",
              "Raw list is filtered against ICP.",
              "18 people match the target profile.",
              "Clay enriches company, role, email, and signals.",
              "Leads are segmented by topic: outreach, content, CRM, profile.",
              "High-fit contacts are pushed to CRM.",
              "Contextual LinkedIn DMs are sent first.",
              "Email follow-up is used only for high-fit contacts with enough context.",
              "Replies are logged in CRM.",
              "Qualified conversations become opportunities.",
              "Non-ready but relevant contacts enter nurture.",
            ],
          ),
          highlight: L(
            "Ovako LinkedIn engagement prestaje da bude vanity metrika i postaje pipeline input.",
            "This is how LinkedIn engagement stops being a vanity metric and becomes a pipeline input.",
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
              title: L("Engagement-to-Outreach Pipeline Map", "Engagement-to-Outreach Pipeline Map"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "LinkedIn lajkovi, komentari, profile view-ovi, followeri i webinar signali teku u kvalifikaciju, enrichment, segmentaciju, outreach i CRM.",
                "LinkedIn likes, comments, profile views, followers, and webinar signals flowing into qualification, enrichment, segmentation, outreach, and CRM.",
              ),
            },
            {
              title: L(
                "Capture → Qualify → Enrich → Segment → Personalize → Sequence → Track",
                "Capture → Qualify → Enrich → Segment → Personalize → Sequence → Track",
              ),
              placement: L("Framework sekcija", "Framework section"),
              description: L(
                "Kompletan engagement-to-outreach workflow.",
                "The full engagement-to-outreach workflow.",
              ),
            },
            {
              title: L("Engagement vs Buying Intent Matrix", "Engagement vs Buying Intent Matrix"),
              placement: L("Core idea sekcija", "Core idea section"),
              description: L(
                "Matrica laganih, srednjih i jakih signala sa preporučenim akcijama.",
                "A matrix showing light, medium, and strong signals with recommended actions.",
              ),
            },
            {
              title: L("Signal Scoring Table", "Signal Scoring Table"),
              placement: L("Kvalifikacija sekcija", "Qualification section"),
              description: L(
                "100-poena scoring model za odlučivanje koji angažovani kontakti zaslužuju outreach.",
                "A 100-point scoring model for deciding which engaged contacts deserve outreach.",
              ),
            },
            {
              title: L("Topic-Based Outreach Segmentation", "Topic-Based Outreach Segmentation"),
              placement: L("Segmentacija sekcija", "Segmentation section"),
              description: L(
                "Različiti uglovi poruka po content temi: profile, content, outreach, CRM, webinar, buying signals.",
                "Different message angles based on content topic: profile, content, outreach, CRM, webinar, buying signals.",
              ),
            },
            {
              title: L("LinkedIn DM + Email Sequence Flow", "LinkedIn DM + Email Sequence Flow"),
              placement: L("Multichannel sekcija", "Multichannel section"),
              description: L(
                "Kratak, poštovan topli outreach flow od DM-a do email follow-up-a.",
                "Short, respectful warm outreach flow from DM to email follow-up.",
              ),
            },
            {
              title: L("CRM Field Map", "CRM Field Map"),
              placement: L("CRM sekcija", "CRM section"),
              description: L(
                "Polja potrebna za praćenje source, signal, topic, fit, next action i stage.",
                "Fields needed to track source, signal, topic, fit, next action, and stage.",
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
          title: L("Čeklista Lekcije 7", "Lesson 7 checklist"),
          items: P(
            [
              "Definiši lagane, srednje i jake LinkedIn engagement signale.",
              "Pregledaj poslednjih 30 dana founder LinkedIn engagement-a.",
              "Capture komentare, ponovljene engager-e, profile view-ove, nove followere i webinar aktivnost.",
              "Filtriraj sirovu listu prema ICP-u.",
              "Score-uj kontakte po fit-u, signalu, temi i timing-u.",
              "Obogati samo kvalifikovane kontakte.",
              "Segmentiraj listu po engagement temi.",
              "Napiši kontekstualne LinkedIn DM template-e po temi.",
              "Dodaj email follow-up samo za high-fit kontakte sa dovoljno konteksta.",
              "Gurni kvalifikovane kontakte u CRM.",
              "Dodaj polja za source, signal, topic, fit, next action i stage.",
              "Pregledaj engagement-to-outreach listu nedeljno.",
            ],
            [
              "Define your light, medium, and strong LinkedIn engagement signals.",
              "Review the last 30 days of founder LinkedIn engagement.",
              "Capture comments, repeat engagers, profile views, new followers, and webinar activity.",
              "Filter the raw list against your ICP.",
              "Score contacts by fit, signal, topic, and timing.",
              "Enrich only qualified contacts.",
              "Segment the list by engagement topic.",
              "Write contextual LinkedIn DM templates by topic.",
              "Add email follow-up only for high-fit contacts with enough context.",
              "Push qualified contacts into CRM.",
              "Add fields for source, signal, topic, fit, next action, and stage.",
              "Review the engagement-to-outreach list weekly.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "template",
      title: L("Šablon engagement-to-outreach liste", "Template / swipe file"),
      blocks: [
        {
          type: "template",
          title: L("LinkedIn Engagement-to-Outreach List Template", "LinkedIn Engagement-to-Outreach List Template"),
          content: L(
            `1. Signal map

Lagani signali:
- lajk od ICP-a
- profile view
- novi follower

Akcija:
prati / angažuj nazad / još nema outreach-a

Srednji signali:
- komentar od ICP-a
- ponovljeni lajkovi
- webinar registracija
- newsletter signup
- follow posle engagement-a

Akcija:
dodaj na toplu listu / angažuj / pošalji soft resurs ako je kontekst jak

Jaki signali:
- DM
- webinar prisustvo
- postavljeno pitanje
- pricing ili demo page poseta
- ponovljeni engagement iz ciljnog account-a

Akcija:
dodaj u CRM / pošalji kontekstualni outreach / kreiraj sales task

2. Engagement capture polja

Ime:
[puno ime]

LinkedIn URL:
[URL]

Firma:
[firma]

Uloga:
[uloga]

Tip engagement-a:
[lajk / komentar / profile view / follow / webinar / DM]

Engagement tema:
[tema]

Nivo signala:
[lagani / srednji / jak]

ICP fit:
[visok / srednji / nizak]

Trigger:
[hiring / funding / webinar / content aktivnost / website visit]

Email:
[email]

Outreach ugao:
[kontekst poruke]

Sledeća akcija:
[prati / nurture / DM / email / CRM / opportunity]

3. ICP scoring

Industry fit:
__/15

Company size fit:
__/15

Role fit:
__/15

Pain/topic fit:
__/20

Signal strength:
__/20

Timing trigger:
__/10

Relationship/context:
__/5

Ukupno:
__/100

4. Segmentacija po temi

Tema:
[profile / content / outreach / CRM / webinar / buying signals]

Resurs za ponudu:
[checklist / template / replay / guide / framework]

Ugao poruke:
[kontekstualni opener]

5. LinkedIn DM template

Hej [Ime], primetio sam da si angažovao post o [tema].

Vidimo ovo često kod [ICP]:
[problem].

Imam kratak [resurs] o [specifična tema].

Da pošaljem?

6. Email follow-up template

Subject:
quick follow-up on [tema]

Body:
Hej [Ime],

Video sam da si angažovao LinkedIn post o [tema].

Glavni problem koji vidimo:
[problem].

Napravio sam jednostavan [resurs] koji pomaže sa [ishod].

Da pošaljem?

Pozdrav,
[Ime]

7. CRM polja

Source:
LinkedIn engagement

First signal:
[komentar / lajk / profile view / webinar]

Signal level:
[lagani / srednji / jak]

Content topic:
[tema]

ICP fit:
[visok / srednji / nizak]

Outreach angle:
[ugao]

Last touch:
[datum / kanal]

Next action:
[akcija]

Pipeline stage:
[engaged / warm list / outreach sent / conversation / qualified / opportunity / nurture / disqualified]

8. Nedeljna review pitanja

- Koji postovi su stvorili najviše ICP engagement-a?
- Koje teme su stvorile najtoplije leadove?
- Koji signali su se pretvorili u odgovore?
- Koji DM template-i su najbolje radili?
- Koji kontakti treba da pređu u CRM?
- Koji kontakti treba da ostanu u nurture?
- Koje content teme treba ponoviti sledeće nedelje?`,
            `1. Signal map

Light signals:
- like from ICP
- profile view
- new follower

Action:
monitor / engage back / no outreach yet

Medium signals:
- comment from ICP
- repeat likes
- webinar registration
- newsletter signup
- follows after engaging

Action:
add to warm list / engage / send soft resource if context is strong

Strong signals:
- DM
- webinar attendance
- question asked
- pricing or demo page visit
- repeated engagement from target account

Action:
add to CRM / send contextual outreach / create sales task

2. Engagement capture fields

Name:
[full name]

LinkedIn URL:
[URL]

Company:
[company]

Role:
[role]

Engagement type:
[like / comment / profile view / follow / webinar / DM]

Engagement topic:
[topic]

Signal level:
[light / medium / strong]

ICP fit:
[high / medium / low]

Trigger:
[hiring / funding / webinar / content activity / website visit]

Email:
[email]

Outreach angle:
[message context]

Next action:
[monitor / nurture / DM / email / CRM / opportunity]

3. ICP scoring

Industry fit:
__/15

Company size fit:
__/15

Role fit:
__/15

Pain/topic fit:
__/20

Signal strength:
__/20

Timing trigger:
__/10

Relationship/context:
__/5

Total:
__/100

4. Segment by topic

Topic:
[profile / content / outreach / CRM / webinar / buying signals]

Resource to offer:
[checklist / template / replay / guide / framework]

Message angle:
[contextual opener]

5. LinkedIn DM template

Hey [Name], noticed you engaged with the post about [topic].

We see this a lot with [ICP]:
[problem].

I have a short [resource] on [specific topic].

Want me to send it?

6. Email follow-up template

Subject:
quick follow-up on [topic]

Body:
Hey [Name],

Saw you engaged with the LinkedIn post about [topic].

The main issue we see is:
[problem].

I put together a simple [resource] that helps with [outcome].

Want me to send it over?

Best,
[Name]

7. CRM fields

Source:
LinkedIn engagement

First signal:
[comment / like / profile view / webinar]

Signal level:
[light / medium / strong]

Content topic:
[topic]

ICP fit:
[high / medium / low]

Outreach angle:
[angle]

Last touch:
[date / channel]

Next action:
[action]

Pipeline stage:
[engaged / warm list / outreach sent / conversation / qualified / opportunity / nurture / disqualified]

8. Weekly review questions

- Which posts created the most ICP engagement?
- Which topics created the warmest leads?
- Which signals turned into replies?
- Which DM templates worked best?
- Which contacts should move to CRM?
- Which contacts should stay in nurture?
- Which content topics should we repeat next week?`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Da li je svaki LinkedIn engagement lead?", "Is every LinkedIn engagement a lead?"),
      answer: L(
        "Ne. Većina engagement-a nije lead. Lajk od irelevantne osobe je vanity. Ponovljeni engagement od high-fit kupca na relevantnoj temi je signal. Ključ je kvalifikovati engagement pre sledeće poruke.",
        "No. Most engagement is not a lead. A like from an irrelevant person is vanity. A repeated engagement from a high-fit buyer on a relevant topic is a signal. The key is to qualify engagement before the next message.",
      ),
    },
    {
      question: L("Koji LinkedIn engagement treba pratiti?", "What LinkedIn engagement should we track?"),
      answer: L(
        "Prati: komentare od ICP kupaca; ponovljene lajkove iz ciljnih account-a; profile view-ove posle content-a ili outreach-a; nove followere iz ICP firmi; webinar registracije i prisustvo; DM-ove; pitanja; ponovljeni engagement oko iste teme.",
        "Track: comments from ICP buyers; repeat likes from target accounts; profile views after content or outreach; new followers from ICP companies; webinar registrations and attendance; DMs; questions; repeated engagement around the same topic.",
      ),
    },
    {
      question: L("Kad treba poslati outreach posle engagement-a?", "When should we send outreach after someone engages?"),
      answer: L(
        "Pošalji outreach kad osoba ima i ICP fit i smislen kontekst. Jedan lajk obično nije dovoljan. Bolji triggeri uključuju komentare, ponovljeni engagement, webinar prisustvo, profile view posle relevantne interakcije ili direktna pitanja.",
        "Send outreach when the person has both ICP fit and meaningful context. A single like is usually not enough. Better triggers include comments, repeat engagement, webinar attendance, profile views after a relevant interaction, or direct questions.",
      ),
    },
    {
      question: L("Da li koristiti email posle LinkedIn engagement-a?", "Should we use email after LinkedIn engagement?"),
      answer: L(
        "Da, ali samo za high-fit kontakte sa dovoljno konteksta. Email može podržati LinkedIn outreach, posebno kad je osoba kvalifikovana i poruka referencira stvarnu interakciju. Ne pretvaraj jedan lagani signal u dugu cold email sekvencu.",
        "Yes, but only for high-fit contacts with enough context. Email can support LinkedIn outreach, especially when the person is qualified and the message references a real interaction. Do not turn one light signal into a long cold email sequence.",
      ),
    },
    {
      question: L("Koji alati pomažu pretvaranju engagement-a u listu?", "What tools can help turn engagement into a list?"),
      answer: L(
        "Počni ručno sa LinkedIn-om, Sales Navigator-om i Google Sheets-om. Zatim dodaj Clay za enrichment, Apollo ili Findymail za email podatke, HeyReach za LinkedIn outreach, Lemlist za multichannel sekvence, i HubSpot ili Pipedrive za CRM praćenje.",
        "Start manually with LinkedIn, Sales Navigator, and Google Sheets. Then add tools like Clay for enrichment, Apollo or Findymail for email data, HeyReach for LinkedIn outreach, Lemlist for multichannel sequences, and HubSpot or Pipedrive for CRM tracking.",
      ),
    },
    {
      question: L("Koliko često pregledati LinkedIn engagement?", "How often should we review LinkedIn engagement?"),
      answer: L(
        "Nedeljno je jak početni ritam. Za aktivne founder-e ili timove sa webinarima i čestim postovima, pregledaj svakih 24-48 sati da topli signali ne ohlade.",
        "Weekly is a strong starting rhythm. For active founders or teams running webinars and frequent posts, review every 24-48 hours so warm signals do not go cold.",
      ),
    },
    {
      question: L("Koja je najveća greška u engagement-based outreach-u?", "What is the biggest mistake in engagement-based outreach?"),
      answer: L(
        "Pisanje svima koji angažuju. Cilj nije scrapovati svaki lajk. Cilj je kvalifikovati signal, razumeti kontekst i poslati poruku koja deluje kao prirodan nastavak.",
        "Messaging everyone who engages. The goal is not to scrape every like. The goal is to qualify the signal, understand the context, and send a message that feels like a natural continuation.",
      ),
    },
  ],
  sources: [
    { title: L("LinkedIn Sales Solutions - Social Selling", "LinkedIn Sales Solutions - Social Selling"), url: "https://business.linkedin.com/sales-solutions/social-selling" },
    { title: L("LinkedIn Sales Solutions - Social Selling Index / SSI", "LinkedIn Sales Solutions - Social Selling Index / SSI"), url: "https://business.linkedin.com/sell/resources/SSI" },
    { title: L("LinkedIn Sales Navigator", "LinkedIn Sales Navigator"), url: "https://business.linkedin.com/sell/sales-navigator" },
    { title: L("LinkedIn Sales Solutions - Deep Sales Playbook", "LinkedIn Sales Solutions - Deep Sales Playbook"), url: "https://business.linkedin.com/sales-solutions/deep-sales-playbook" },
    { title: L("LinkedIn - Outreach Strategies for Sales Demo Requests", "LinkedIn - Outreach Strategies for Sales Demo Requests"), url: "https://www.linkedin.com/top-content/marketing/linkedin-marketing-guide/linkedin-outreach-strategies-for-sales-demo-requests/" },
    { title: L("Clay - Product / Data Enrichment Platform", "Clay - Product / Data Enrichment Platform"), url: "https://www.clay.com/" },
    { title: L("Clay - Tutorials", "Clay - Tutorials"), url: "https://www.clay.com/university" },
    { title: L("HeyReach - Outreach Strategies", "HeyReach - Outreach Strategies"), url: "https://www.heyreach.io/blog/outreach-strategies" },
    { title: L("HeyReach - How to Automate LinkedIn Outreach Using Clay, HeyReach and n8n", "HeyReach - How to Automate LinkedIn Outreach Using Clay, HeyReach and n8n"), url: "https://www.heyreach.io/blog/how-to-automate-linkedin-outreach" },
    { title: L("HeyReach - LinkedIn Automation Tool", "HeyReach - LinkedIn Automation Tool"), url: "https://www.heyreach.io/" },
    { title: L("lemlist - Learn Why Multichannel Outreach Matters", "lemlist - Learn Why Multichannel Outreach Matters"), url: "https://help.lemlist.com/en/articles/4664179-learn-why-multichannel-outreach-matters" },
    { title: L("lemlist - Choose a Multichannel Sequence to Build", "lemlist - Choose a Multichannel Sequence to Build"), url: "https://help.lemlist.com/en/articles/4565994-choose-a-multichannel-sequence-to-build" },
    { title: L("lemlist - AI Outbound Platform", "lemlist - AI Outbound Platform"), url: "https://www.lemlist.com/" },
    { title: L("Warmly - How To Build A Lead List In Clay For Cold Outreach", "Warmly - How To Build A Lead List In Clay For Cold Outreach"), url: "https://www.warmly.ai/p/blog/how-to-build-a-lead-list-in-clay" },
  ],
  relatedLessons: {
    previous: {
      slug: "linkedin-commenting-strategy",
      title: L(
        "Lekcija 6 - Kako koristiti komentarisanje na LinkedInu za vidljivost kod ICP-a",
        "Lesson 6 - How to Use LinkedIn Commenting for Visibility With Your ICP",
      ),
    },
    next: {
      slug: "webinars-founder-led-growth",
      title: L(
        "Lekcija 8 - Kako koristiti webinare kao deo Founder-Led Growth sistema",
        "Lesson 8 - How to Use Webinars as Part of Founder-Led Growth",
      ),
      note: L(
        "Sledeća lekcija pokazuje kako koristiti webinare kao dublji conversion layer.",
        "The next lesson shows how to use webinars as a deeper conversion layer inside the Founder-Led Growth system.",
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
          "Lekcija 2 - Kako definisati ICP",
          "Lesson 2 - How to Define Your ICP for Founder-Led Growth",
        ),
      },
      {
        slug: "linkedin-profile-optimization-founder",
        title: L(
          "Lekcija 3 - Kako optimizovati LinkedIn profil founder-a",
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
        slug: "write-educational-linkedin-posts",
        title: L(
          "Lekcija 5 - Kako pisati edukativne LinkedIn postove",
          "Lesson 5 - How to Write Educational LinkedIn Posts That Build Authority",
        ),
      },
      {
        slug: "crm-za-founder-led-growth",
        title: L(
          "Lekcija 10 - CRM za Founder-Led Growth",
          "Lesson 10 - How to Track Founder-Led Growth Activities in Your CRM",
        ),
      },
      {
        slug: "buying-signals-b2b-sales",
        title: L(
          "Lekcija 11 - Buying signali",
          "Lesson 11 - What Buying Signals Are and How to Use Them in B2B Sales",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Engagement nije pipeline dok neko ne preuzme sledeći korak",
      "Engagement is not pipeline until someone owns the next step",
    ),
    body: L(
      "Founder-Led Growth radi kad pažnja postane akcija. Lajkovi, komentari, profile view-ovi i webinar registracije su korisni samo kad se capture-uju, kvalifikuju, obogate, segmentiraju i prate sa pravim kontekstom. Cilj nije pisati svima. Cilj je pretvoriti prave signale u prave razgovore. Sledeća lekcija pokazuje kako koristiti webinare kao dublji conversion layer u Founder-Led Growth sistemu.",
      "Founder-Led Growth works when attention becomes action. Likes, comments, profile views, and webinar registrations are useful only when they are captured, qualified, enriched, segmented, and followed up with the right context. The goal is not to message everyone. The goal is to turn the right signals into the right conversations. The next lesson shows how to use webinars as a deeper conversion layer inside the Founder-Led Growth system.",
    ),
    primaryLabel: L("Nastavi na Lekciju 8", "Continue Lesson 8"),
    secondaryLabel: L("Zakaži konsultaciju", "Book consultation"),
  },
  seoKeywords: P(
    [
      "LinkedIn engagement outreach list",
      "LinkedIn engagement to outreach",
      "LinkedIn warm outreach",
      "LinkedIn lead list building",
      "LinkedIn outreach list",
      "LinkedIn engagement signals",
      "LinkedIn DM outreach",
      "personalized LinkedIn outreach",
      "LinkedIn Sales Navigator lead list",
      "Clay lead enrichment",
      "multichannel outreach",
      "Founder-Led Growth outreach",
      "LinkedIn engagement u outreach listu",
      "pretvaranje LinkedIn engagement-a u outreach",
      "topli LinkedIn outreach",
      "gradnja LinkedIn lead liste",
      "LinkedIn outreach lista",
      "LinkedIn engagement signali",
      "LinkedIn DM outreach",
      "personalizovani LinkedIn outreach",
      "LinkedIn Sales Navigator lead lista",
      "Clay lead enrichment",
      "multichannel outreach",
      "Founder-Led Growth outreach",
    ],
    [
      "LinkedIn engagement outreach list",
      "LinkedIn engagement to outreach",
      "LinkedIn warm outreach",
      "LinkedIn lead list building",
      "LinkedIn outreach list",
      "LinkedIn engagement signals",
      "LinkedIn DM outreach",
      "personalized LinkedIn outreach",
      "LinkedIn Sales Navigator lead list",
      "Clay lead enrichment",
      "multichannel outreach",
      "Founder-Led Growth outreach",
    ],
  ),
};
