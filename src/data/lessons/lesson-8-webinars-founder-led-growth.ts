import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L(
    "The Call-Booking Webinar - Funnel That Converts",
    "The Call-Booking Webinar - Funnel That Converts",
  ),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Kompletan funnel: pozivnica, prezentacija, CTA i 3-dnevni follow-up sa replay-om.",
    "Full funnel: invitation, presentation, CTA, and 3-day follow-up with replay.",
  ),
  placementNote: L("Pogledaj posle webinar framework-a ili u video sekciji.", "Watch after the webinar framework or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/7kDcjsiSm2c",
  watchUrl: "https://www.youtube.com/watch?v=7kDcjsiSm2c",
};

const video2 = {
  title: L(
    "LinkedIn Content Strategy Framework 2026 - Webinar Demand",
    "LinkedIn Content Strategy Framework 2026 - Webinar Demand",
  ),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za strukturisanje teme, promociju i demand pre live webinara.",
    "Useful for structuring the topic, promotion, and demand before the live webinar.",
  ),
  placementNote: L("Pogledaj posle webinar-steps sekcije ili u video sekciji.", "Watch after the webinar steps section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/2HSavr17yq0",
  watchUrl: "https://www.youtube.com/watch?v=2HSavr17yq0",
};

const video3 = {
  title: L("What Is Inbound Marketing? (Webinar Follow-Up Basics)", "What Is Inbound Marketing? (Webinar Follow-Up Basics)"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Relevantno za povezivanje webinar engagement-a sa nurture-om, CRM-om i follow-up-om.",
    "Relevant for connecting webinar engagement to nurture, CRM, and follow-up.",
  ),
  placementNote: L("Pogledaj posle CRM / follow-up sekcije ili u video sekciji.", "Watch after the CRM / follow-up section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/R0UWvdyABFo",
  watchUrl: "https://www.youtube.com/watch?v=R0UWvdyABFo",
};

const video4 = {
  title: L("LinkedIn Sales Navigator - Webinar Attendees & Lead Lists", "LinkedIn Sales Navigator - Webinar Attendees & Lead Lists"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za kvalifikaciju registranata, list building i follow-up posle webinara.",
    "Useful for qualifying registrants, list building, and post-webinar follow-up.",
  ),
  placementNote: L("Pogledaj posle tool stack-a ili u video sekciji.", "Watch after the tool stack or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/lieJwZX_T8E",
  watchUrl: "https://www.youtube.com/watch?v=lieJwZX_T8E",
};

export const lesson8RichContent: RichLessonContent = {
  meta: {
    stage: L("Webinar Engine", "Webinar Engine"),
    readingTime: L("12-15 min", "12-15 min"),
    difficulty: L("Srednji nivo", "Intermediate"),
    outcome: L(
      "Izgradićeš webinar sistem koji pretvara founder ekspertizu u high-intent registracije, korisnu edukaciju kupca, segmentiran follow-up i kvalifikovan pipeline.",
      "Build a webinar system that turns founder expertise into high-intent registrations, useful buyer education, segmented follow-up, and qualified pipeline.",
    ),
    recommendedTools: L(
      "Zoom Webinars, Livestorm, HubSpot, Pipedrive, Tally, Typeform, Calendly, Riverside, Descript, Canva, LinkedIn Events, Unbounce, Make.com, Zapier",
      "Zoom Webinars, Livestorm, HubSpot, Pipedrive, Tally, Typeform, Calendly, Riverside, Descript, Canva, LinkedIn Events, Unbounce, Make.com, Zapier",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 8", "Lesson 8"),
    title: L(
      "Kako koristiti webinare kao deo Founder-Led Growth sistema",
      "How to Use Webinars as Part of Founder-Led Growth",
    ),
    paragraphs: P(
      [
        "Većina B2B webinara propada jer se tretiraju kao događaji.",
        "Trebalo bi da se tretiraju kao pipeline asset-i.",
        "Webinar nije nešto što promovišeš dve nedelje i zaboraviš.",
        "U Founder-Led Growth-u webinar ima vrlo specifičan posao: pretvoriti pažnju u nameru.",
        "LinkedIn postovi stvaraju awareness. Profil gradi poverenje. Komentari stvaraju familiarity. Outreach pokreće razgovore.",
        "Ali webinar radi nešto dublje, daje kupcima 30-45 minuta sa tvojim razmišljanjem.",
        "Čuju founder-a kako objašnjava problem. Vide okvir. Postavljaju pitanja. Glasanje u anketama. Otkrivaju šta im je važno.",
        "To nije samo content. To su first-party intent podaci, ali samo ako ga strukturiraš kako treba.",
        "Webinar bez follow-up-a je samo content. Webinar sa segmentacijom, CRM tracking-om i kontekstualnim outreach-om postaje pipeline.",
      ],
      [
        "Most B2B webinars fail because they are treated like events.",
        "They should be treated like pipeline assets.",
        "A webinar is not just something you promote for two weeks and forget.",
        "In Founder-Led Growth, a webinar has a very specific job: turn attention into intent.",
        "LinkedIn posts create awareness. Your profile builds trust. Comments create familiarity. Outreach starts conversations.",
        "But a webinar does something deeper, it gives buyers 30-45 minutes with your thinking.",
        "They hear the founder explain the problem. They see the framework. They ask questions. They vote in polls. They reveal what they care about.",
        "That is not just content. That is first-party intent data, but only if you structure it correctly.",
        "A webinar without follow-up is just content. A webinar with segmentation, CRM tracking, and contextual outreach becomes pipeline.",
      ],
    ),
    callout: L(
      "Pipeline asset, ne jednokratni event, webinar skuplja first-party intent podatke.",
      "Pipeline asset, not a one-off event, webinars collect first-party intent data.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vs-assets", title: L("Webinar vs drugi asset-i", "Webinar vs other assets") },
    { id: "webinar-framework", title: L("Founder-Led Webinar okvir", "Founder-Led Webinar framework") },
    { id: "webinar-steps", title: L("Korak po korak: webinar sistem", "Step-by-step webinar system") },
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
              "birati webinar teme na osnovu ICP bola;",
              "strukturirati webinar koji edukuje bez da postane pitch;",
              "promovisati webinare kroz founder LinkedIn aktivnost;",
              "koristiti ankete i pitanja za hvatanje buyer intent-a;",
              "segmentirati učesnike po ponašanju;",
              "pratiti drugačije no-show, učesnike, one koji su pitali i high-intent leadove;",
              "povezati webinar engagement sa CRM-om i sales task-ovima;",
              "repurpose-ovati webinar u postove, clip-ove, email-ove i outreach asset-e.",
            ],
            [
              "choose webinar topics based on ICP pain;",
              "structure a webinar that educates without turning into a pitch;",
              "promote webinars through founder LinkedIn activity;",
              "use polls and questions to capture buyer intent;",
              "segment attendees based on behavior;",
              "follow up differently with no-shows, attendees, question askers, and high-intent leads;",
              "connect webinar engagement to CRM and sales tasks;",
              "repurpose the webinar into posts, clips, emails, and outreach assets.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Live webinar, founder pred publikom, intent engine",
            "Live webinar, founder in front of audience, intent engine",
          ),
          caption: L(
            "Webinar nije event koji zaboraviš, to je pipeline asset koji skuplja first-party intent.",
            "A webinar is not an event you forget, it is a pipeline asset that collects first-party intent.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Webinar u Founder-Led Growth sistemu", "Webinar in the Founder-Led Growth system"),
          subtitle: L(
            "Content gradi demand, webinar hvata intent, follow-up pretvara u pipeline.",
            "Content builds demand, the webinar captures intent, follow-up turns it into pipeline.",
          ),
          stages: [
            L("Content", "Content"),
            L("Registracija", "Registration"),
            L("Live", "Live"),
            L("Intent", "Intent"),
            L("Segment", "Segment"),
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
              "Founder-Led Growth treba dublji conversion layer. Postovi su odlični za pažnju. Komentari za familiarity. DM-ovi za početak razgovora.",
              "Webinari omogućavaju kupcima da dožive tvoju ekspertizu na dubljem nivou.",
              "ON24-ov 2025 Webinar Benchmarks izveštaj kaže da webinar engagement raste, prosečno prisustvo je poraslo, a on-demand gledanje čini veliki deo učesnika. ON24 ističe da interaktivni alati, ankete, download-i, ankete, CTA, pomažu webinare da utiču na odluke o kupovini.",
              "Livestorm opisuje webinare kao korisne za live angažovanje prospect-a, follow-up email-ove i webinar funnels koji nastavljaju da generišu leadove posle live sesije.",
              "Zato webinari odgovaraju Founder-Led Growth-u. Nisu samo lead magneti. Oni su intent engine-i.",
            ],
            [
              "Founder-Led Growth needs a deeper conversion layer. Posts are great for attention. Comments for familiarity. DMs for starting conversations.",
              "Webinars let buyers experience your expertise at a deeper level.",
              "ON24's 2025 Webinar Benchmarks report says webinar engagement is growing, average attendance increased, and on-demand viewing accounts for a large share of attendees. ON24 highlights that interactive tools, polls, downloads, surveys, CTAs, help webinars influence buying decisions.",
              "Livestorm describes webinars as useful for engaging prospects live, follow-up emails, and webinar funnels that keep generating leads after the live session.",
              "That is exactly why webinars fit Founder-Led Growth. They are not just lead magnets. They are intent engines.",
            ],
          ),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("45", "45"),
              label: L("Minuta live", "Live minutes"),
              description: L(
                "Dovoljno dubine da kupac doživi founder POV, ne samo post.",
                "Enough depth for buyers to experience founder POV, not just a post.",
              ),
            },
            {
              value: L("2-3", "2-3"),
              label: L("Ankete", "Polls"),
              description: L(
                "Intent capture tokom sesije, svaki odgovor = CRM polje.",
                "Intent capture during the session, each answer = CRM field.",
              ),
            },
            {
              value: L("24h", "24h"),
              label: L("Follow-up", "Follow-up"),
              description: L(
                "Prvi follow-up dok je sesija sveža, intent brzo opada.",
                "First follow-up while the session is fresh, intent decays fast.",
              ),
            },
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
            ["Founder-Led Growth webinar treba da uradi četiri posla:"],
            ["A Founder-Led Growth webinar should do four jobs:"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Edukuj ICP o bolnom problemu.",
              "Dokaži da founder ima oštriji način rešavanja.",
              "Capture intent kroz prisustvo, ankete, pitanja i klikove.",
              "Kreiraj segmentiran follow-up koji pretvara interes u pipeline.",
            ],
            [
              "Educate the ICP on a painful problem.",
              "Prove the founder has a sharper way to solve it.",
              "Capture intent through attendance, polls, questions, and clicks.",
              "Create segmented follow-up that turns interest into pipeline.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako webinar samo edukuje, to je content. Ako samo pitch-uje, gubi poverenje.",
              "Prava struktura radi oba: dovoljno uči da gradi poverenje, dovoljno pokazuje da stvara želju, dovoljno pita da identifikuje intent, dovoljno brzo prati da stvara pipeline.",
            ],
            [
              "If the webinar only educates, it is content. If it only pitches, it loses trust.",
              "The right structure does both: teach enough to build trust, show enough to create desire, ask enough to identify intent, follow up fast enough to create pipeline.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Webinar nije konverzija. Follow-up sistem jeste.",
            "The webinar is not the conversion. The follow-up system is.",
          ),
        },
        {
          type: "zone-cards",
          title: L("4 posla founder webinara", "4 jobs of a founder webinar"),
          subtitle: L(
            "Ako webinar radi samo jedan posao, ostatak sistema curi.",
            "If the webinar only does one job, the rest of the system leaks.",
          ),
          cards: [
            {
              zone: L("Edukuj", "Educate"),
              eyebrow: L("ICP bol", "ICP pain"),
              job: L("Kupac mora otići sa jasnoćom, ne samo inspiracijom.", "Buyer must leave with clarity, not just inspiration."),
              doThis: L("45-min: kontekst → bol → framework → case.", "45-min: context → pain → framework → case."),
              avoid: L("Prvih 15 min company pitch.", "First 15 minutes as company pitch."),
            },
            {
              zone: L("Dokaz POV", "Prove POV"),
              eyebrow: L("Founder", "Founder"),
              job: L("Pokaži oštriji način rešavanja od vendor pitch-a.", "Show a sharper way to solve than a vendor pitch."),
              doThis: L("„Šta većina firmi pogrešno radi“ slide.", "\"What most companies get wrong\" slide."),
              avoid: L("Generički saveti bez kontrasta.", "Generic advice without contrast."),
            },
            {
              zone: L("Capture intent", "Capture intent"),
              eyebrow: L("Ankete + Q&A", "Polls + Q&A"),
              job: L("Otkrij šta kupcu stvarno treba.", "Reveal what the buyer actually needs."),
              doThis: L("2-3 ankete + chat + CTA klik.", "2-3 polls + chat + CTA click."),
              avoid: L("Ankete bez CRM polja.", "Polls without CRM fields."),
            },
            {
              zone: L("Segmentiraj", "Segment"),
              eyebrow: L("Follow-up", "Follow-up"),
              job: L("Različito ponašanje = različita poruka.", "Different behavior = different message."),
              doThis: L("No-show / attended / pitanje / CTA - 4 putanje.", "No-show / attended / question / CTA - 4 paths."),
              avoid: L("Jedan „hvala na učešću“ email svima.", "One \"thanks for attending\" email to everyone."),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "vs-assets",
      title: L("Webinar vs lead magnet vs sales pitch", "Webinar vs lead magnet vs sales pitch"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            ["Webinar sedi između content-a i prodaje. Zato je moćan, daje dovoljno vrednosti za poverenje i dovoljno interakcije da otkrije intent."],
            ["A webinar sits between content and sales. That is why it is powerful, it gives enough value to trust you and enough interaction to reveal intent."],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Lead magnet", "Lead magnet"),
              subtitle: L("Kontakt, mali odnos", "Contact, low relationship"),
              variant: "muted",
              items: P(
                [
                  "PDF / checklist download",
                  "Jedan touchpoint",
                  "Slab intent signal",
                  "Generički nurture",
                ],
                [
                  "PDF / checklist download",
                  "One touchpoint",
                  "Weak intent signal",
                  "Generic nurture",
                ],
              ),
            },
            {
              title: L("Founder webinar", "Founder webinar"),
              subtitle: L("Intent engine", "Intent engine"),
              variant: "accent",
              items: P(
                [
                  "30-45 min sa founder POV-om",
                  "Ankete + pitanja = first-party data",
                  "Segmentiran follow-up",
                  "Repurpose u content + outreach",
                ],
                [
                  "30-45 min with founder POV",
                  "Polls + questions = first-party data",
                  "Segmented follow-up",
                  "Repurpose into content + outreach",
                ],
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Poređenje asset tipova", "Asset type comparison"),
          headers: H(
            ["Tip asset-a", "Šta radi", "Slabost", "Najbolja upotreba"],
            ["Asset type", "What it does", "Weakness", "Best use"],
          ),
          rows: [
            { cells: [L("LinkedIn post", "LinkedIn post"), L("Stvara pažnju", "Creates attention"), L("Mala dubina", "Low depth"), L("Awareness i gradnja poverenja", "Awareness and trust building")] },
            { cells: [L("Lead magnet", "Lead magnet"), L("Skuplja kontakt podatke", "Captures contact info"), L("Slab odnos", "Low relationship"), L("Rana edukacija i list building", "Early education and list building")] },
            { cells: [L("Webinar", "Webinar"), L("Stvara vreme, pažnju i intent", "Creates time, attention, and intent"), L("Zahteva follow-up", "Requires follow-up"), L("Edukacija, demand capture, segmentacija", "Education, demand capture, segmentation")] },
            { cells: [L("Sales call", "Sales call"), L("Konvertuje kvalifikovan interes", "Converts qualified interest"), L("Prerano za mnoge kupce", "Too early for many buyers"), L("High-intent opportunity-ji", "High-intent opportunities")] },
            { cells: [L("Product demo", "Product demo"), L("Pokazuje rešenje", "Shows solution"), L("Radi samo kad je bol jasan", "Only works when pain is clear"), L("Kasna evaluacija", "Late-stage evaluation")] },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "webinar-framework",
      title: L("Founder-Led Webinar okvir", "The Founder-Led Webinar Framework"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1475721027840-f489ca8d60d2?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Predavanje i prezentacija, live teaching deo webinara",
            "Presentation and speaking, the live teaching part of the webinar",
          ),
          caption: L(
            "Zoom ili Livestorm host-uje live - Tally skuplja registracije - Riverside/Descript repurposuju snimak.",
            "Zoom or Livestorm hosts live - Tally captures registrations - Riverside/Descript repurpose the recording.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "framework-intro",
          title: L(
            "ICP Pain → Sharp Topic → Founder POV → Live Teaching → Intent Capture → Segmented Follow-Up → Pipeline",
            "ICP Pain → Sharp Topic → Founder POV → Live Teaching → Intent Capture → Segmented Follow-Up → Pipeline",
          ),
          description: L(
            "Ovo je webinar sistem. Svaki korak pretvara founder ekspertizu u merljiv pipeline input.",
            "This is the webinar system. Each step turns founder expertise into measurable pipeline input.",
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Founder-Led Webinar Framework", "Founder-Led Webinar Framework"),
          subtitle: L(
            "Od buyer pain-a do pipeline-a, follow-up sistem je gde se konvertuje.",
            "From buyer pain to pipeline, the follow-up system is where conversion happens.",
          ),
          stages: [
            L("ICP Pain", "ICP Pain"),
            L("Tema", "Topic"),
            L("Live", "Live"),
            L("Intent", "Intent"),
            L("Segment", "Segment"),
            L("Pipeline", "Pipeline"),
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("ICP Pain", "ICP Pain"),
              whatToDo: L("Počni od problema koji kupac već oseća.", "Start with a problem the buyer already feels."),
              whyItMatters: L("Bez bola nema relevantne publike.", "Without pain, there is no relevant audience."),
              example: L("„LinkedIn engagement ne postaje pipeline.“", "\"LinkedIn engagement does not become pipeline.\""),
              commonMistake: L("Brainstorm tema umesto ponovljenog buyer pain-a.", "Brainstorming topics instead of repeated buyer pain."),
              tryThis: L("Izlistaj 5 problema iz sales call-ova i komentara.", "List 5 problems from sales calls and comments."),
              highlight: L("Tema webinara dolazi iz ponovljenog buyer pain-a.", "A webinar topic should come from repeated buyer pain."),
            },
            {
              step: 2,
              title: L("Sharp Topic", "Sharp Topic"),
              whatToDo: L("Pretvori bol u specifičan naslov webinara.", "Turn the pain into a specific webinar title."),
              whyItMatters: L("Široke teme privlače široku publiku.", "Broad topics attract broad audiences."),
              example: L("„Kako B2B founder-i pretvaraju LinkedIn engagement u kvalifikovan pipeline bez spama.“", "\"How B2B founders turn LinkedIn engagement into qualified pipeline without spamming prospects.\""),
              commonMistake: L("Impresivan naslov umesto bolnog.", "Impressive title instead of painful."),
              tryThis: L("Formula: Kako [ICP] može [ishod] bez [bol / neuspešan pristup].", "Formula: How [ICP] can [outcome] without [pain / failed approach]."),
              highlight: L("Specifičnost privlači bolji-fit kupce.", "Specificity attracts better-fit buyers."),
            },
            {
              step: 3,
              title: L("Founder POV", "Founder POV"),
              whatToDo: L("Nauči tržište kako razmišljaš o problemu.", "Teach the market how you think about the problem."),
              whyItMatters: L("Founder POV gradi poverenje pre prodaje.", "Founder POV builds trust before the sale."),
              example: L("Zašto engagement nije pipeline dok nema capture + segmentacije.", "Why engagement is not pipeline without capture + segmentation."),
              commonMistake: L("Generički saveti bez point of view-a.", "Generic advice without a point of view."),
              tryThis: L("Jedan slide: „Šta većina firmi pogrešno radi.“", "One slide: \"What most companies get wrong.\""),
              highlight: L("POV razlikuje founder webinar od vendor pitch-a.", "POV differentiates a founder webinar from a vendor pitch."),
            },
            {
              step: 4,
              title: L("Live Teaching", "Live Teaching"),
              whatToDo: L("Isporuči praktičnu vrednost, okvire, primere i greške.", "Deliver practical value, frameworks, examples, and mistakes."),
              whyItMatters: L("Kupac mora otići sa jasnoćom, ne samo inspiracijom.", "The buyer must leave with clarity, not just inspiration."),
              example: L("45-min struktura: kontekst → bol → reframe → framework → case → implementacija.", "45-min structure: context → pain → reframe → framework → case → implementation."),
              commonMistake: L("Prvih 15 minuta company intro.", "First 15 minutes as company intro."),
              tryThis: L("Predstavi buyer problem pre svoje firme.", "Introduce the buyer problem before your company."),
              highlight: L("Najbrži način da izgubiš poverenje: pitch pre edukacije.", "The fastest way to lose trust: pitch before you teach."),
            },
            {
              step: 5,
              title: L("Intent Capture", "Intent Capture"),
              whatToDo: L("Koristi ankete, pitanja, chat, download-e, CTA klikove i ponašanje prisustva.", "Use polls, questions, chat, downloads, CTA clicks, and attendance behavior."),
              whyItMatters: L("Interakcija otkriva šta kupcu stvarno treba.", "Interaction reveals what the buyer actually needs."),
              example: L("2-3 ankete + Q&A + CTA za checklist ili konsultaciju.", "2-3 polls + Q&A + CTA for checklist or consultation."),
              commonMistake: L("Ankete kao gimmick bez CRM polja.", "Polls as gimmicks without CRM fields."),
              tryThis: L("Svaki poll answer = CRM polje + follow-up ugao.", "Every poll answer = CRM field + follow-up angle."),
              highlight: L("Webinar bez intent capture-a je samo broadcast.", "A webinar without intent capture is just a broadcast."),
            },
            {
              step: 6,
              title: L("Segmented Follow-Up", "Segmented Follow-Up"),
              whatToDo: L("Prati različito po ponašanju, ne jedan generičan email.", "Follow up based on behavior, not one generic email."),
              whyItMatters: L("Isti follow-up za sve ubija konverziju.", "Same follow-up for everyone kills conversion."),
              example: L("No-show → replay. Učesnik → checklist. Pitanje → founder DM. CTA → sales task.", "No-show → replay. Attendee → checklist. Question → founder DM. CTA → sales task."),
              commonMistake: L("„Hvala na učešću“ svima isto.", "One \"thanks for attending\" to everyone."),
              tryThis: L("Pripremi 3 putanje pre live-a: no-show, attended, high-intent.", "Prepare 3 paths before going live: no-show, attended, high-intent."),
              highlight: L("Follow-up gradi se pre nego što webinar krene.", "Follow-up is built before the webinar starts."),
            },
            {
              step: 7,
              title: L("Pipeline", "Pipeline"),
              whatToDo: L("Gurni high-intent leadove u CRM sa kontekstom.", "Push high-intent leads into CRM with context."),
              whyItMatters: L("CRM pretvara webinar u company memory.", "CRM turns the webinar into company memory."),
              example: L("Source: Webinar | Topic: engagement-to-pipeline | Signal: strong | Next: sales call.", "Source: Webinar | Topic: engagement-to-pipeline | Signal: strong | Next: sales call."),
              commonMistake: L("Praćenje samo registracija.", "Only tracking registrations."),
              tryThis: L("Score-uj po ponašanju, ne samo prisustvu.", "Score by behavior, not only attendance."),
              highlight: L("Pipeline review 7 dana posle webinara.", "Pipeline review 7 days after the webinar."),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Tema webinara dolazi iz ponovljenog buyer pain-a, ne iz marketing brainstorm-a.",
            "A webinar topic should come from repeated buyer pain, not a marketing brainstorm.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "webinar-steps",
      title: L("Korak po korak: webinar sistem", "Step-by-step webinar system"),
      blocks: [
        {
          type: "pipeline-flow",
          title: L("45-min struktura, šta se dešava kada", "45-min structure, what happens when"),
          subtitle: L(
            "Vizuelni ritam drži pažnju, pitch dolazi posle edukacije.",
            "Visual rhythm keeps attention, pitch comes after education.",
          ),
          stages: [
            L("0-3 Kontekst", "0-3 Context"),
            L("3-15 Bol + POV", "3-15 Pain + POV"),
            L("15-30 Framework", "15-30 Framework"),
            L("30-40 Case", "30-40 Case"),
            L("40-43 CTA", "40-43 CTA"),
            L("43-45 Q&A", "43-45 Q&A"),
          ],
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Loš follow-up", "Bad follow-up"),
              subtitle: L("Jedan email svima", "One email to everyone"),
              variant: "muted",
              items: P(
                [
                  "„Hvala na učešću“ + replay link",
                  "Isti CTA za no-show i high-intent",
                  "Čekanje 7+ dana",
                  "Intent nestaje",
                ],
                [
                  "\"Thanks for attending\" + replay link",
                  "Same CTA for no-show and high-intent",
                  "Waiting 7+ days",
                  "Intent disappears",
                ],
              ),
            },
            {
              title: L("Segmentiran follow-up", "Segmented follow-up"),
              subtitle: L("Ponašanje → poruka", "Behavior → message"),
              variant: "accent",
              items: P(
                [
                  "No-show → replay + 1 takeaway",
                  "75%+ → checklist + pitanje",
                  "Pitanje → founder DM",
                  "CTA → CRM sales task",
                ],
                [
                  "No-show → replay + 1 takeaway",
                  "75%+ → checklist + question",
                  "Question → founder DM",
                  "CTA → CRM sales task",
                ],
              ),
            },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Izaberi temu iz ponovljenog buyer pain-a", "Pick a topic from repeated buyer pain"),
              whatToDo: L("Izaberi temu na osnovu onoga sa čim se ICP već bori.", "Choose a topic based on what your ICP is already struggling with."),
              whyItMatters: L("Široke teme privlače široku publiku.", "Broad topics attract broad audiences."),
              example: L("„Kako B2B founder-i pretvaraju LinkedIn engagement u kvalifikovan pipeline bez spama.“", "\"How B2B founders turn LinkedIn engagement into qualified pipeline without spamming prospects.\""),
              commonMistake: L("Impresivna tema umesto bolnog problema.", "Impressive topic instead of painful problem."),
              tryThis: L("Formula: Kako [ICP] može [ishod] bez [bol].", "Formula: How [ICP] can [outcome] without [pain]."),
              highlight: L("Specifičan bol privlači bolji-fit kupce.", "Specific pain attracts better-fit buyers."),
            },
            {
              step: 2,
              title: L("Strukturiraj webinar kao sales asset", "Structure the webinar like a useful sales asset"),
              whatToDo: L("Koristi jednostavnu 45-minutnu strukturu.", "Use a simple 45-minute structure."),
              whyItMatters: L("Struktura drži pažnju i gradi poverenje.", "Structure keeps attention and builds trust."),
              example: L("0-3 kontekst, 3-8 bol, 8-15 reframe, 15-30 framework, 30-36 case, 36-40 implementacija, 40-43 soft CTA, 43-45 Q&A.", "0-3 context, 3-8 pain, 8-15 reframe, 15-30 framework, 30-36 case, 36-40 implementation, 40-43 soft CTA, 43-45 Q&A."),
              commonMistake: L("Prvih 15 minuta company intro.", "First 15 minutes as company intro."),
              tryThis: L("Predstavi buyer problem pre firme.", "Introduce the buyer problem before the company."),
              highlight: L("Pitch pre edukacije = izgubljeno poverenje.", "Pitch before teaching = lost trust."),
            },
            {
              step: 3,
              title: L("Promoviši kroz founder content", "Promote through founder content"),
              whatToDo: L("Koristi founder LinkedIn content da gradiš demand pre webinara.", "Use founder LinkedIn content to build demand before the webinar."),
              whyItMatters: L("Webinar ne sme da se pojavi iz ničega.", "A webinar should not appear out of nowhere."),
              example: L("5 postova: problem, greška, framework, priča, checklist + reminder.", "5 posts: problem, mistake, framework, story, checklist + reminder."),
              commonMistake: L("Samo jedna objava i očekivanje registracija.", "Only one announcement and expecting registrations."),
              tryThis: L("Za svaki webinar: 5 LinkedIn postova iz iste teme.", "For every webinar: 5 LinkedIn posts from the same topic."),
              highlight: L("Content zagreva temu pre registracije.", "Content warms the topic before registration."),
            },
            {
              step: 4,
              title: L("Koristi ankete za intent", "Use polls to capture intent"),
              whatToDo: L("Dodaj 2-3 ankete tokom webinara.", "Add 2-3 polls during the webinar."),
              whyItMatters: L("Ankete pokazuju šta kupcu treba i kako da pratiš.", "Polls show what the buyer needs and how to follow up."),
              example: L("Najveći bottleneck, kako prate engagement, šta im treba posle sesije.", "Biggest bottleneck, how they track engagement, what they need after the session."),
              commonMistake: L("Ankete kao engagement gimmick.", "Polls as engagement gimmicks."),
              tryThis: L("Poll odgovori = CRM polja + follow-up uglovi.", "Poll answers = CRM fields + follow-up angles."),
              highlight: L("Intent capture, ne samo engagement.", "Intent capture, not just engagement."),
            },
            {
              step: 5,
              title: L("Segmentiraj učesnike po ponašanju", "Segment attendees by behavior"),
              whatToDo: L("Ne šalji svima isti follow-up.", "Do not send everyone the same follow-up."),
              whyItMatters: L("Različito ponašanje = različita relevantnost.", "Different behavior = different relevance."),
              example: L("No-show → replay. 75%+ → resurs + pitanje. Pitanje → founder DM. CTA → CRM task.", "No-show → replay. 75%+ → resource + question. Question → founder DM. CTA → CRM task."),
              commonMistake: L("Jedan generičan „hvala na učešću“ email.", "One generic \"thanks for attending\" email."),
              tryThis: L("Minimum 3 putanje: no-show, attended, high-intent.", "At least 3 paths: no-show, attended, high-intent."),
              highlight: L("Segmentacija je gde webinar postaje pipeline.", "Segmentation is where the webinar becomes pipeline."),
            },
            {
              step: 6,
              title: L("Prati u roku od 24 sata", "Follow up within 24 hours"),
              whatToDo: L("Pošalji follow-up dok je sesija sveža.", "Send follow-up while the session is still fresh."),
              whyItMatters: L("Webinar intent brzo opada.", "Webinar intent decays quickly."),
              example: L("Odmah: hvala + replay. 24h: personalizovano po anketi. 3 dana: asset. 7 dana: soft CTA.", "Immediately: thanks + replay. 24h: personalized by poll. 3 days: asset. 7 days: soft CTA."),
              commonMistake: L("Čekanje nedelju dana.", "Waiting a week."),
              tryThis: L("Pripremi email-ove pre nego što webinar krene.", "Prepare emails before the webinar goes live."),
              highlight: L("Follow-up gradi se pre live-a.", "Follow-up is built before going live."),
            },
            {
              step: 7,
              title: L("Gurni webinar signale u CRM", "Push webinar signals into CRM"),
              whatToDo: L("Prati webinar ponašanje kao pipeline podatke.", "Track webinar behavior as pipeline data."),
              whyItMatters: L("Bez CRM-a, intent nestaje posle event-a.", "Without CRM, intent disappears after the event."),
              example: L("Topic, status, duration, poll, question, CTA, signal level, stage.", "Topic, status, duration, poll, question, CTA, signal level, stage."),
              commonMistake: L("Samo broj registracija.", "Only registration count."),
              tryThis: L("Score-uj po ponašanju, ne samo attendance.", "Score by behavior, not only attendance."),
              highlight: L("CRM hvata webinar momentum.", "CRM captures webinar momentum."),
            },
          ],
        },
        {
          type: "table",
          caption: L("45-min struktura webinara", "45-minute webinar structure"),
          headers: H(["Vreme", "Sekcija", "Cilj"], ["Time", "Section", "Goal"]),
          rows: [
            { cells: [L("0-3 min", "0-3 min"), L("Postavi kontekst", "Set context"), L("Za koga je i koji problem rešava", "Who it is for and what problem it solves")] },
            { cells: [L("3-8 min", "3-8 min"), L("Imenuj bol", "Name the pain"), L("Pokaži da razumeš svet kupca", "Show you understand the buyer's world")] },
            { cells: [L("8-15 min", "8-15 min"), L("Reframe", "Reframe"), L("Objasni zašto stari pristup puca", "Explain why the old way breaks")] },
            { cells: [L("15-30 min", "15-30 min"), L("Framework", "Framework"), L("Nauči sistem", "Teach the system")] },
            { cells: [L("30-36 min", "30-36 min"), L("Primer / case", "Example / case"), L("Učini konkretnim", "Make it concrete")] },
            { cells: [L("36-40 min", "36-40 min"), L("Implementacija", "Implementation"), L("Pokaži sledeće korake", "Show what to do next")] },
            { cells: [L("40-43 min", "40-43 min"), L("Soft CTA", "Soft CTA"), L("Checklist, konsultacija ili sledeći korak", "Checklist, consultation, or next step")] },
            { cells: [L("43-45 min", "43-45 min"), L("Q&A setup", "Q&A setup"), L("Skupljaj pitanja i intent", "Collect questions and intent")] },
          ],
        },
        {
          type: "table",
          caption: L("Promocija, timeline", "Promotion timeline"),
          headers: H(["Timeline", "Content"], ["Timeline", "Content"]),
          rows: [
            { cells: [L("14 dana pre", "14 days before"), L("Problem education post", "Problem education post")] },
            { cells: [L("10 dana pre", "10 days before"), L("Founder POV post", "Founder POV post")] },
            { cells: [L("7 dana pre", "7 days before"), L("Webinar announcement", "Webinar announcement")] },
            { cells: [L("5 dana pre", "5 days before"), L("Story / example post", "Story / example post")] },
            { cells: [L("3 dana pre", "3 days before"), L("Framework teaser", "Framework teaser")] },
            { cells: [L("1 dan pre", "1 day before"), L("Reminder post", "Reminder post")] },
            { cells: [L("Dan live-a", "Day of"), L("„Going live“ post", "\"Going live\" post")] },
            { cells: [L("Posle", "After"), L("Replay + key takeaways", "Replay + key takeaways")] },
          ],
        },
        {
          type: "table",
          caption: L("Primeri anketa", "Poll examples"),
          headers: H(["Anketa", "Opcije"], ["Poll", "Options"]),
          rows: [
            {
              cells: [
                L("Poll 1: Najveći bottleneck?", "Poll 1: Biggest bottleneck?"),
                L("Founder content / LinkedIn outreach / CRM / webinar follow-up / buying signals", "Founder content / LinkedIn outreach / CRM / webinar follow-up / buying signals"),
              ],
            },
            {
              cells: [
                L("Poll 2: Kako pratiš LinkedIn engagement?", "Poll 2: How do you track LinkedIn engagement?"),
                L("Ne pratim / Sheets / CRM / automatizacija / nisam siguran", "Not tracking / Sheets / CRM / automated / not sure"),
              ],
            },
            {
              cells: [
                L("Poll 3: Šta ti najviše treba posle sesije?", "Poll 3: Most useful after this session?"),
                L("Checklist / CRM template / outreach sekvenca / konsultacija / samo replay", "Checklist / CRM template / outreach sequence / consultation / replay only"),
              ],
            },
          ],
        },
        {
          type: "table",
          caption: L("Segmentacija učesnika", "Attendee segmentation"),
          headers: H(["Segment", "Signal", "Follow-up"], ["Segment", "Signal", "Follow-up"]),
          rows: [
            { cells: [L("Registrovan, no-show", "Registered, no-show"), L("Lagani interes", "Light interest"), L("Replay + jedan takeaway", "Replay + one takeaway")] },
            { cells: [L("Prisustvovao live", "Attended live"), L("Srednji interes", "Medium interest"), L("Replay + checklist", "Replay + checklist")] },
            { cells: [L("Ostao 75%+", "Stayed 75%+"), L("Jači interes", "Stronger interest"), L("Resurs + kontekstualno pitanje", "Resource + contextual question")] },
            { cells: [L("Postavio pitanje", "Asked a question"), L("Jak signal", "Strong signal"), L("Founder šalje personal DM", "Founder sends personal DM")] },
            { cells: [L("Kliknuo CTA", "Clicked CTA"), L("Jak signal", "Strong signal"), L("Kreiraj CRM task", "Create CRM task")] },
            { cells: [L("Tražio pomoć", "Requested help"), L("High intent", "High intent"), L("Deal ili sales task", "Deal or sales task")] },
            { cells: [L("Gledao replay", "Watched replay"), L("Srednji signal", "Medium signal"), L("Pošalji related asset", "Send related asset")] },
          ],
        },
        {
          type: "table",
          caption: L("Follow-up timing", "Follow-up timing"),
          headers: H(["Timing", "Poruka"], ["Timing", "Message"]),
          rows: [
            { cells: [L("Odmah posle", "Immediately after"), L("Hvala + replay + resurs", "Thank you + replay + resource")] },
            { cells: [L("24 sata", "24 hours"), L("Personalizovano po anketi/pitanju", "Personalized by poll/question")] },
            { cells: [L("3 dana", "3 days"), L("Praktičan asset ili checklist", "Practical asset or checklist")] },
            { cells: [L("7 dana", "7 days"), L("Soft CTA / poziv na konsultaciju", "Soft CTA / consultation invite")] },
            { cells: [L("14 dana", "14 days"), L("Related content ili sledeći webinar", "Related content or next webinar")] },
          ],
        },
        {
          type: "table",
          caption: L("CRM polja za webinar", "CRM fields for webinars"),
          headers: H(["Polje", "Primer"], ["Field", "Example"]),
          rows: [
            { cells: [L("Source", "Source"), L("Webinar", "Webinar")] },
            { cells: [L("Webinar topic", "Webinar topic"), L("LinkedIn engagement → pipeline", "LinkedIn engagement to pipeline")] },
            { cells: [L("Registration status", "Registration status"), L("Registered / attended / no-show / replay", "Registered / attended / no-show / replay")] },
            { cells: [L("Attendance duration", "Attendance duration"), L("15 min / 30 min / 75%+", "15 min / 30 min / 75%+")] },
            { cells: [L("Poll answer", "Poll answer"), L("CRM tracking bottleneck", "CRM tracking bottleneck")] },
            { cells: [L("Question asked", "Question asked"), L("„Kako score-ujemo LinkedIn engagement?“", "\"How do we score LinkedIn engagement?\"")] },
            { cells: [L("CTA clicked", "CTA clicked"), L("Book consultation", "Book consultation")] },
            { cells: [L("Signal level", "Signal level"), L("Light / medium / strong", "Light / medium / strong")] },
            { cells: [L("Next action", "Next action"), L("Send checklist / founder DM / sales call", "Send checklist / founder DM / sales call")] },
            { cells: [L("Stage", "Stage"), L("Engaged / warm list / qualified / opportunity", "Engaged / warm list / qualified / opportunity")] },
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
              "Lead Agents redosled: ICP, profil, Outreach, signali, content iz intervjua, Thought Leader Ads, CRM. Webinari dolaze posle poverenja i toplog Outreach-a, kao opcioni sloj dubine.",
              "Ova lekcija nije prvi korak. Specifičan webinar (imenovan ICP i ishod) skuplja intent od ljudi koji već znaju vaš sistem, ne široku publiku sa lead magnet-a.",
              "Promocija ide kroz postove o engagement-u, signale i CRM. Follow-up je segmentiran (no-show, učesnik, pitanje, CTA) i završava u CRM lead scoring-u.",
              "Outreach direktno gradi odnos. Webinar produbljuje. Reklame indirektno šire dokaz. Bez redosleda, webinar samo troši vreme.",
            ],
            [
              "Lead Agents order: ICP, profile, Outreach, signals, interview content, Thought Leader Ads, CRM. Webinars come after trust and warm Outreach, as an optional depth layer.",
              "This lesson is not the first step. A specific webinar (named ICP and outcome) collects intent from people who already know your system, not a broad lead magnet audience.",
              "Promotion runs through posts on engagement, signals, and CRM. Follow-up is segmented (no-show, attendee, question, CTA) and ends in CRM lead scoring.",
              "Outreach builds the relationship directly. The webinar deepens it. Ads spread proof indirectly. Without order, the webinar only wastes time.",
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
              title: L("Webinar engagement raste", "Webinar engagement is growing"),
              body: L(
                "ON24-ov 2025 Webinar Benchmarks izveštaj kaže da učesnici ostaju duže, prosečno prisustvo je poraslo, a on-demand gledanje čini veliki deo webinar učesnika.",
                "ON24's 2025 Webinar Benchmarks report says attendees are staying longer, average attendance increased, and on-demand viewing accounts for a large share of webinar attendees.",
              ),
              sourceLabel: L("ON24", "ON24"),
              sourceUrl: "https://www.on24.com/blog/key-takeaways-from-the-2025-webinar-benchmarks-report/",
            },
            {
              title: L("Interaktivni alati identifikuju intent", "Interactive tools help identify intent"),
              body: L(
                "ON24 ističe da webinari utiču na odluke o kupovini kroz CTA klikove, ankete, download-e, ankete i druge interaktivne alate.",
                "ON24 highlights that webinars influence buying decisions through CTA clicks, polls, downloads, surveys, and other interactive tools.",
              ),
              sourceLabel: L("ON24", "ON24"),
              sourceUrl: "https://www.on24.com/blog/key-takeaways-from-the-2025-webinar-benchmarks-report/",
            },
            {
              title: L("Follow-up i webinar funnels su bitni", "Follow-up and webinar funnels matter"),
              body: L(
                "Livestorm objašnjava da timovi mogu koristiti live chat, follow-up email-ove i webinar funnels da zadrže leadove angažovane posle event-a.",
                "Livestorm explains that teams can use live chat, follow-up emails, and webinar funnels to keep leads engaged after the event.",
              ),
              sourceLabel: L("Livestorm", "Livestorm"),
              sourceUrl: "https://livestorm.co/blog/b2b-lead-generation-best-practices",
            },
            {
              title: L("Post-webinar segmentacija poboljšava relevantnost", "Post-webinar segmentation improves follow-up relevance"),
              body: L(
                "Martech HubSpot webinar strategy članak preporučuje filtriranje učesnika po ponašanju i različite follow-up putanje za učesnike i non-attendees.",
                "Martech's HubSpot webinar strategy article recommends filtering attendees by behavior and sending different follow-up paths for attendees and non-attendees.",
              ),
              sourceLabel: L("Martech", "Martech"),
              sourceUrl: "https://martech.org/how-to-use-hubspot-to-improve-your-webinar-strategy/",
            },
          ],
        },
        { type: "video", video: video3 },
      ],
    },
    {
      type: "section",
      id: "implement",
      title: L("Kako implementirati", "How to implement"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(["1. Kreiraj webinar one-liner"], ["1. Create the webinar one-liner"]),
        },
        {
          type: "bullets",
          items: P(
            [
              "Formula: „Kako [ICP] može [željeni ishod] bez [bol / neuspešan pristup].“",
              "Primer: „Kako B2B founder-i pretvaraju LinkedIn engagement u kvalifikovan pipeline bez spama.“",
              "Primer: „Kako B2B service firme grade founder-led pipeline bez oslanjanja samo na referral-e.“",
            ],
            [
              "Formula: \"How [ICP] can [desired outcome] without [pain / failed approach].\"",
              "Example: \"How B2B founders turn LinkedIn engagement into qualified pipeline without spamming prospects.\"",
              "Example: \"How B2B service firms build founder-led pipeline without relying only on referrals.\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["2. Izgradi registration page (Unbounce ili slično)"], ["2. Build the registration page (Unbounce or similar)"]),
        },
        {
          type: "table",
          caption: L("Struktura registration page-a", "Registration page structure"),
          headers: H(["Element", "Sadržaj"], ["Element", "Content"]),
          rows: [
            { cells: [L("Headline", "Headline"), L("[webinar one-liner]", "[webinar one-liner]")] },
            { cells: [L("Subheadline", "Subheadline"), L("Praktična sesija za [ICP] koji se bore sa [problem]", "A practical session for [ICP] who struggle with [problem]")] },
            { cells: [L("You'll learn", "You'll learn"), L("3-5 bullet-a šta će naučiti", "3-5 bullets of what they will learn")] },
            { cells: [L("Bonus", "Bonus"), L("[checklist/template] posle sesije", "[checklist/template] after the session")] },
            { cells: [L("CTA", "CTA"), L("Save my seat / Rezerviši mesto", "Save my seat")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["3. Kreiraj 5-post promociju"], ["3. Create a 5-post promotion sequence"]),
        },
        {
          type: "bullets",
          items: P(
            ["Post 1: Problem", "Post 2: Greška", "Post 3: Framework teaser", "Post 4: Priča/primer", "Post 5: Finalni reminder"],
            ["Post 1: Problem", "Post 2: Mistake", "Post 3: Framework teaser", "Post 4: Story/example", "Post 5: Final reminder"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["4. Pripremi follow-up pre event-a"], ["4. Prepare follow-up before the event"]),
        },
        {
          type: "bullets",
          items: P(
            ["no-show", "prisustvovao live", "ostao 75%+", "postavio pitanje", "kliknuo CTA", "tražio pomoć"],
            ["no-show", "attended live", "stayed 75%+", "asked a question", "clicked CTA", "requested help"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["5. Kreiraj CRM pravila"], ["5. Create CRM rules"]),
        },
        {
          type: "table",
          caption: L("CRM pravila", "CRM rules"),
          headers: H(["Ponašanje", "Akcija"], ["Behavior", "Action"]),
          rows: [
            { cells: [L("No-show", "No-show"), L("Nurture + replay", "Nurture + replay")] },
            { cells: [L("Prisustvovao", "Attended"), L("Pošalji checklist", "Send checklist")] },
            { cells: [L("Ostao 75%+", "Stayed 75%+"), L("Topli follow-up", "Warm follow-up")] },
            { cells: [L("Postavio pitanje", "Asked question"), L("Founder DM", "Founder DM")] },
            { cells: [L("Kliknuo CTA", "Clicked CTA"), L("Sales task", "Sales task")] },
            { cells: [L("Tražio pomoć", "Requested help"), L("Qualified opportunity", "Qualified opportunity")] },
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
              name: "Zoom Webinars",
              logo: "/images/sales-tools/zoom.png",
              usedFor: L("Hosting live webinara", "Hosting live webinars"),
              whyItFits: L("Pouzdana platforma za live sesije, registraciju, Q&A i upravljanje učesnicima.", "Reliable platform for live sessions, registration, Q&A, and attendee management."),
              alternative: L("Livestorm, WebinarJam", "Livestorm, WebinarJam"),
            },
            {
              name: "Livestorm",
              logo: "/images/sales-tools/livestorm.png",
              usedFor: L("Webinar hosting, registration stranice, follow-up email-ovi i webinar funnels", "Webinar hosting, registration pages, follow-up emails, and webinar funnels"),
              whyItFits: L("Jak fit za B2B lead generation i on-demand webinar workflow-e.", "Strong fit for B2B lead generation and on-demand webinar workflows."),
              alternative: L("Zoom Webinars, Demio", "Zoom Webinars, Demio"),
            },
            {
              name: "LinkedIn Events",
              usedFor: L("Promocija webinara unutar LinkedIn-a", "Promoting webinars inside LinkedIn"),
              whyItFits: L("Korisno kad su founder publika i ICP već na LinkedIn-u.", "Useful when founder audience and ICP are already on LinkedIn."),
              alternative: L("Landing page + LinkedIn postovi", "Landing page + LinkedIn posts"),
            },
            {
              name: "Tally",
              logo: "/images/sales-tools/tally.png",
              usedFor: L("Registration forme, kvalifikaciona pitanja i pre-webinar ankete", "Registration forms, qualification questions, and pre-webinar surveys"),
              whyItFits: L("Brz setup, capture-uje ulogu, firmu i bottleneck pre live sesije.", "Fast setup, captures role, company, and bottleneck before the live session."),
              alternative: L("Typeform, HubSpot forms, Livestorm forms", "Typeform, HubSpot forms, Livestorm forms"),
            },
            {
              name: "HubSpot / Pipedrive",
              slug: "hubspot",
              usedFor: L("Praćenje registranata, učesnika, poll odgovora, CTA klikova, follow-up task-ova i pipeline-a", "Track registrants, attendees, poll answers, CTA clicks, follow-up tasks, and pipeline"),
              whyItFits: L("Pretvara webinar aktivnost u sales workflow.", "Turns webinar activity into sales workflow."),
              alternative: L("Attio, Folk, Salesforce", "Attio, Folk, Salesforce"),
            },
            {
              name: "Riverside",
              logo: "/images/sales-tools/riverside.png",
              usedFor: L("Snimanje visokokvalitetnih webinara i founder sesija", "Recording high-quality webinars and founder sessions"),
              whyItFits: L("Dobar za repurposing webinar content-a u clip-ove.", "Good for repurposing webinar content into clips."),
              alternative: L("Zoom recording", "Zoom recording"),
            },
            {
              name: "Descript",
              logo: "/images/sales-tools/descript.png",
              usedFor: L("Editovanje snimaka, clip-ovi, transkripti i short-form content", "Edit webinar recordings, create clips, transcripts, and short-form content"),
              whyItFits: L("Jedan webinar postaje više LinkedIn asset-a.", "Turns one webinar into multiple LinkedIn assets."),
              alternative: L("CapCut, OpusClip", "CapCut, OpusClip"),
            },
            {
              name: "Make.com / Zapier",
              slug: "n8n",
              usedFor: L("Sync registration formi, webinar platforme, CRM, Slack i follow-up workflow-a", "Sync registration forms, webinar platforms, CRM, Slack, and follow-up workflows"),
              whyItFits: L("Automatizuje handoff od webinar engagement-a do CRM-a.", "Automates handoff from webinar engagement to CRM."),
              alternative: L("Native integracije, n8n", "Native integrations, n8n"),
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
          src: "https://images.unsplash.com/photo-1511578314322-379afb4768ee?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Online događaj i registracija, od Tally forme do live sesije",
            "Online event and registration, from Tally form to live session",
          ),
          caption: L(
            "Tally → Zoom/Livestorm → ankete → segment → CRM → Riverside/Descript repurposing.",
            "Tally → Zoom/Livestorm → polls → segment → CRM → Riverside/Descript repurposing.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("5", "5"),
              label: L("LinkedIn postova", "LinkedIn posts"),
              description: L(
                "Promocija pre webinara, content zagreva temu.",
                "Pre-webinar promotion, content warms the topic.",
              ),
            },
            {
              value: L("3", "3"),
              label: L("Follow-up putanje", "Follow-up paths"),
              description: L(
                "Minimum: no-show, attended, high-intent, pripremi pre live-a.",
                "Minimum: no-show, attended, high-intent, prepare before going live.",
              ),
            },
            {
              value: L("1", "1"),
              label: L("Snimak → N asset-a", "Recording → N assets"),
              description: L(
                "Descript: postovi, clip-ovi, newsletter, outreach openere.",
                "Descript: posts, clips, newsletter, outreach openers.",
              ),
            },
          ],
        },
        {
          type: "workflow",
          title: L("Od webinar teme do pipeline-a", "From webinar topic to pipeline"),
          steps: P(
            [
              "Founder identifikuje ponovljeni ICP bol iz LinkedIn komentara i sales call-ova.",
              "Tim pretvara bol u oštru webinar temu.",
              "Founder promoviše webinar sa 5 LinkedIn postova.",
              "Registration forma capture-uje ulogu, firmu i najveći bottleneck.",
              "Webinar podučava framework i koristi 2-3 ankete.",
              "Učesnici se segmentiraju po ponašanju.",
              "No-show dobija replay.",
              "Učesnici dobijaju checklist.",
              "Oni koji su pitali dobijaju founder DM.",
              "CTA klikeri dobijaju CRM sales task.",
              "Snimak se repurposuje u postove, clip-ove i outreach asset-e.",
              "Pipeline se pregleda nedelju dana kasnije.",
            ],
            [
              "Founder identifies repeated ICP pain from LinkedIn comments and sales calls.",
              "Team turns the pain into a sharp webinar title.",
              "Founder promotes the webinar with 5 LinkedIn posts.",
              "Registration form captures role, company, and biggest bottleneck.",
              "Webinar teaches the framework and uses 2-3 polls.",
              "Attendees are segmented by behavior.",
              "No-shows get replay.",
              "Attendees get checklist.",
              "Question askers get founder DMs.",
              "CTA clickers get CRM sales tasks.",
              "Recording is repurposed into posts, clips, and outreach assets.",
              "Pipeline is reviewed one week later.",
            ],
          ),
          highlight: L(
            "Webinar nije završen kad live sesija završi. Tada pipeline posao počinje.",
            "The webinar is not finished when the live session ends. That is when the pipeline work starts.",
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
              title: L("Webinar Engine Map", "Webinar Engine Map"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "Founder content i LinkedIn promocija teku u registraciju, live prisustvo, ankete, segmentaciju, CRM i pipeline.",
                "Founder content and LinkedIn promotion flowing into registration, live attendance, polls, segmentation, CRM, and pipeline.",
              ),
            },
            {
              title: L(
                "ICP Pain → Sharp Topic → Founder POV → Live Teaching → Intent Capture → Segmented Follow-Up → Pipeline",
                "ICP Pain → Sharp Topic → Founder POV → Live Teaching → Intent Capture → Segmented Follow-Up → Pipeline",
              ),
              placement: L("Framework sekcija", "Framework section"),
              description: L("Kompletan Founder-Led Webinar workflow.", "The complete Founder-Led Webinar workflow."),
            },
            {
              title: L("Webinar Structure Timeline", "Webinar Structure Timeline"),
              placement: L("Korak 2", "Step 2"),
              description: L("45-min breakdown od konteksta do CTA i Q&A.", "A 45-minute breakdown from context to CTA and Q&A."),
            },
            {
              title: L("Attendee Segmentation Matrix", "Attendee Segmentation Matrix"),
              placement: L("Korak 5", "Step 5"),
              description: L("No-show, attended, stayed 75%+, asked question, clicked CTA, requested help.", "No-show, attended, stayed 75%+, asked question, clicked CTA, requested help."),
            },
            {
              title: L("Webinar-to-Pipeline CRM Map", "Webinar-to-Pipeline CRM Map"),
              placement: L("CRM sekcija", "CRM section"),
              description: L("Polja i stage-ovi potrebni za praćenje webinar uticaja.", "Fields and stages needed to track webinar influence."),
            },
            {
              title: L("Webinar Repurposing Flywheel", "Webinar Repurposing Flywheel"),
              placement: L("Workflow sekcija", "Workflow section"),
              description: L("Jedan webinar postaje LinkedIn postovi, clip-ovi, newsletter, outreach asset-i i CRM signali.", "One webinar becomes LinkedIn posts, clips, newsletter, outreach assets, and CRM signals."),
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
          title: L("Čeklista Lekcije 8", "Lesson 8 checklist"),
          items: P(
            [
              "Izaberi jedan ponovljeni ICP bol.",
              "Napiši webinar naslov formulom „Kako [ICP] može [ishod] bez [bol].“",
              "Kreiraj registration page sa jasnim learning outcomes.",
              "Izgradi 5-post LinkedIn promociju.",
              "Pripremi 45-min webinar strukturu.",
              "Dodaj 2-3 poll pitanja.",
              "Pripremi follow-up email-ove pre live-a.",
              "Segmentiraj no-show, učesnike, one koji su pitali i CTA klikere.",
              "Dodaj webinar polja u CRM.",
              "Dodeli sales task-ove za high-intent učesnike.",
              "Repurpose webinar u minimum 5 LinkedIn asset-a.",
            ],
            [
              "Choose one repeated ICP pain.",
              "Write a webinar title using the \"How [ICP] can [outcome] without [pain]\" formula.",
              "Create a registration page with clear learning outcomes.",
              "Build a 5-post LinkedIn promotion sequence.",
              "Prepare a 45-minute webinar structure.",
              "Add 2-3 poll questions.",
              "Prepare follow-up emails before going live.",
              "Segment no-shows, attendees, question askers, and CTA clickers.",
              "Add webinar fields to CRM.",
              "Assign sales tasks for high-intent attendees.",
              "Repurpose the webinar into at least 5 LinkedIn assets.",
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
          title: L("Founder-Led Webinar Template", "Founder-Led Webinar Template"),
          content: L(
            `1. Webinar topic

ICP:
[ICP]

Pain:
[specific buyer pain]

Title:
How [ICP] can [desired outcome] without [pain / failed approach]

Example:
How B2B founders can turn LinkedIn engagement into qualified pipeline without spamming prospects.

2. Registration page

Headline:
[webinar title]

Subheadline:
A practical session for [ICP] who struggle with [problem].

You'll learn:
- [lesson 1]
- [lesson 2]
- [lesson 3]
- [lesson 4]

Bonus:
[checklist/template/replay/resource]

CTA:
Save my seat

3. Webinar structure

0-3 min: Set context
3-8 min: Name the pain
8-15 min: Reframe
15-30 min: Teach the framework
30-36 min: Example / case
36-40 min: Implementation steps
40-43 min: Soft CTA
43-45 min: Q&A setup

4. Polls

Poll 1: What is your biggest bottleneck right now?
- [option 1]
- [option 2]
- [option 3]
- [option 4]

Poll 2: How are you currently solving this?
- [option 1]
- [option 2]
- [option 3]
- [option 4]

Poll 3: What would be most useful after this session?
- Checklist
- Template
- Replay
- Consultation

5. Follow-up paths

No-show: Send replay + one takeaway.
Attended: Send replay + checklist.
Stayed 75%+: Send resource + contextual question.
Asked a question: Founder sends personal DM.
Clicked CTA: Create CRM sales task.
Requested help: Create qualified opportunity.

6. CRM fields

Source: Webinar
Webinar topic: [topic]
Registration status: registered / attended / no-show / replay
Attendance duration: [duration]
Poll answer: [answer]
Question asked: [question]
CTA clicked: yes / no
Signal level: light / medium / strong
Next action: [action]
Stage: engaged / warm list / qualified / opportunity / nurture`,
            `1. Webinar topic

ICP:
[ICP]

Pain:
[specific buyer pain]

Title:
How [ICP] can [desired outcome] without [pain / failed approach]

Example:
How B2B founders can turn LinkedIn engagement into qualified pipeline without spamming prospects.

2. Registration page

Headline:
[webinar title]

Subheadline:
A practical session for [ICP] who struggle with [problem].

You'll learn:
- [lesson 1]
- [lesson 2]
- [lesson 3]
- [lesson 4]

Bonus:
[checklist/template/replay/resource]

CTA:
Save my seat

3. Webinar structure

0-3 min: Set context
3-8 min: Name the pain
8-15 min: Reframe
15-30 min: Teach the framework
30-36 min: Example / case
36-40 min: Implementation steps
40-43 min: Soft CTA
43-45 min: Q&A setup

4. Polls

Poll 1: What is your biggest bottleneck right now?
- [option 1]
- [option 2]
- [option 3]
- [option 4]

Poll 2: How are you currently solving this?
- [option 1]
- [option 2]
- [option 3]
- [option 4]

Poll 3: What would be most useful after this session?
- Checklist
- Template
- Replay
- Consultation

5. Follow-up paths

No-show: Send replay + one takeaway.
Attended: Send replay + checklist.
Stayed 75%+: Send resource + contextual question.
Asked a question: Founder sends personal DM.
Clicked CTA: Create CRM sales task.
Requested help: Create qualified opportunity.

6. CRM fields

Source: Webinar
Webinar topic: [topic]
Registration status: registered / attended / no-show / replay
Attendance duration: [duration]
Poll answer: [answer]
Question asked: [question]
CTA clicked: yes / no
Signal level: light / medium / strong
Next action: [action]
Stage: engaged / warm list / qualified / opportunity / nurture`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Zašto koristiti webinare u Founder-Led Growth-u?", "Why use webinars in Founder-Led Growth?"),
      answer: L(
        "Webinari daju kupcima više vremena sa founder razmišljanjem. Pretvaraju lagani engagement u dublji intent kroz edukaciju, interakciju, pitanja, ankete i follow-up.",
        "Webinars give buyers more time with the founder's thinking. They turn lightweight engagement into deeper intent by combining education, interaction, questions, polls, and follow-up.",
      ),
    },
    {
      question: L("Šta čini dobru B2B webinar temu?", "What makes a good B2B webinar topic?"),
      answer: L(
        "Dobra tema je specifična za ICP i vezana za boln poslovni problem. Formula: „Kako [ICP] može [ishod] bez [bol / neuspešan pristup].“",
        "A good webinar topic is specific to the ICP and tied to a painful business problem. Formula: \"How [ICP] can [desired outcome] without [pain / failed approach].\"",
      ),
    },
    {
      question: L("Koliko dug treba da traje webinar?", "How long should a Founder-Led Growth webinar be?"),
      answer: L(
        "Praktična dužina je 30-45 minuta, dovoljno da naučiš korisni framework i capture-uješ intent, ali dovoljno kratko da poštuješ vreme kupca.",
        "A practical length is 30-45 minutes, long enough to teach a useful framework and capture intent, but short enough to respect the buyer's time.",
      ),
    },
    {
      question: L("Da li webinari treba da budu live ili on-demand?", "Should webinars be live or on-demand?"),
      answer: L(
        "Koristi oba. Live je bolji za interakciju, pitanja i trenutni intent. On-demand produžava život asset-a i nastavlja da generiše leadove posle live sesije.",
        "Use both. Live is better for interaction, questions, and immediate intent. On-demand extends the life of the asset and keeps generating leads after the live session.",
      ),
    },
    {
      question: L("Šta treba da se desi posle webinara?", "What should happen after the webinar?"),
      answer: L(
        "Segmentiraj follow-up po ponašanju. No-show dobija replay. Učesnici checklist. Oni koji su pitali personal follow-up. CTA klikeri sales task. High-intent ulazi u pipeline.",
        "Segment follow-up by behavior. No-shows get replay. Attendees get checklist. Question askers get personal follow-up. CTA clickers get sales tasks. High-intent enters pipeline.",
      ),
    },
    {
      question: L("Koja je najveća greška sa webinareima?", "What is the biggest mistake with webinars?"),
      answer: L(
        "Tretiranje svih isto posle event-a. Vrednost je u segmentaciji i follow-up-u. Webinar stvara intent. Follow-up ga konvertuje.",
        "Treating everyone the same after the event. The value is in segmentation and follow-up. The webinar creates intent. Follow-up converts it.",
      ),
    },
  ],
  sources: [
    { title: L("ON24 - 2025 Webinar Benchmarks Key Takeaways", "ON24 - 2025 Webinar Benchmarks Key Takeaways"), url: "https://www.on24.com/blog/key-takeaways-from-the-2025-webinar-benchmarks-report/" },
    { title: L("Livestorm - B2B Lead Generation Best Practices", "Livestorm - B2B Lead Generation Best Practices"), url: "https://livestorm.co/blog/b2b-lead-generation-best-practices" },
    { title: L("Livestorm - Why Webinars Are Critical for B2B in 2026", "Livestorm - Why Webinars Are Critical for B2B in 2026"), url: "https://livestorm.co/blog/why-webinars-are-critical-for-b2b" },
    { title: L("Zoom - How To Host A Webinar", "Zoom - How To Host A Webinar"), url: "https://www.zoom.com/en/products/webinars/resources/hosting-a-virtual-event-guide/" },
    { title: L("Zoom - Online Event Best Practices PDF", "Zoom - Online Event Best Practices PDF"), url: "https://assets.zoom.us/docs/user-guides/Zoom-Online-Event-Best-Practices.pdf" },
    { title: L("MarketingProfs - B2B Webinar Benchmarks", "MarketingProfs - B2B Webinar Benchmarks"), url: "https://www.marketingprofs.com/charts/2025/52917/b2b-webinar-benchmarks-conversion-attendance-personalization" },
    { title: L("Leadfeeder - B2B Webinar Strategies", "Leadfeeder - B2B Webinar Strategies"), url: "https://www.leadfeeder.com/blog/lead-generation/b2b-webinar-strategies/" },
    { title: L("Martech - How to Use HubSpot to Improve Your Webinar Strategy", "Martech - How to Use HubSpot to Improve Your Webinar Strategy"), url: "https://martech.org/how-to-use-hubspot-to-improve-your-webinar-strategy/" },
    { title: L("Livestorm - Lead Generation Funnel", "Livestorm - Lead Generation Funnel"), url: "https://livestorm.co/blog/lead-generation-funnel" },
    { title: L("HubSpot - Webinar Resources", "HubSpot - Webinar Resources"), url: "https://www.hubspot.com/resources/webinar" },
  ],
  relatedLessons: {
    previous: {
      slug: "linkedin-engagement-outreach-list",
      title: L(
        "Lekcija 7 - Kako pretvoriti LinkedIn engagement u outreach listu",
        "Lesson 7 - How to Turn LinkedIn Engagement Into an Outreach List",
      ),
    },
    next: {
      slug: "linkedin-ads-thought-leader-ads",
      title: L(
        "Lekcija 9 - Kako koristiti LinkedIn Ads da pojačaš Founder-Led Growth",
        "Lesson 9 - How to Use LinkedIn Ads to Boost Founder-Led Growth",
      ),
      note: L(
        "Sledeća lekcija pokazuje kako LinkedIn Ads pojačavaju founder content, webinar registracije i retargeting.",
        "The next lesson shows how LinkedIn Ads amplify founder content, webinar registrations, and retargeting.",
      ),
    },
    related: [
      { slug: "what-founder-led-growth-is", title: L("Lekcija 1 - Šta je Founder-Led Growth", "Lesson 1 - What Founder-Led Growth Is and Why It Works for B2B Companies") },
      { slug: "linkedin-content-strategy-founder", title: L("Lekcija 4 - LinkedIn content strategija za founder-a", "Lesson 4 - How to Build a LinkedIn Content Strategy for a Founder") },
      { slug: "write-educational-linkedin-posts", title: L("Lekcija 5 - Edukativni LinkedIn postovi", "Lesson 5 - How to Write Educational LinkedIn Posts That Build Authority") },
      { slug: "linkedin-commenting-strategy", title: L("Lekcija 6 - LinkedIn komentarisanje", "Lesson 6 - How to Use LinkedIn Commenting for Visibility With Your ICP") },
      { slug: "crm-za-founder-led-growth", title: L("Lekcija 10 - CRM za Founder-Led Growth", "Lesson 10 - How to Track Founder-Led Growth Activities in Your CRM") },
      { slug: "buying-signals-b2b-sales", title: L("Lekcija 11 - Buying signali", "Lesson 11 - What Buying Signals Are and How to Use Them in B2B Sales") },
    ],
  },
  cta: {
    title: L("Webinar nije jednokratni event", "A webinar is not a one-time event"),
    body: L(
      "To je conversion layer unutar Founder-Led Growth sistema. LinkedIn content stvara pažnju. Profil gradi poverenje. Webinar stvara dublji intent. Follow-up pretvara intent u pipeline. Sledeća lekcija pokazuje kako LinkedIn Ads pojačavaju founder content, webinar registracije i retargeting.",
      "It is a conversion layer inside the Founder-Led Growth system. LinkedIn content creates attention. Your profile creates trust. Your webinar creates deeper intent. Follow-up turns that intent into pipeline. The next lesson shows how to use LinkedIn Ads to amplify founder content, webinar registrations, and retargeting.",
    ),
    primaryLabel: L("Nastavi na Lekciju 9", "Continue Lesson 9"),
    secondaryLabel: L("Zakaži konsultaciju", "Book consultation"),
  },
  seoKeywords: P(
    [
      "webinari za founder-led growth",
      "B2B webinar strategija",
      "webinar lead generation",
      "webinar follow-up strategija",
      "founder-led webinar",
      "LinkedIn webinar promocija",
      "webinar pipeline",
      "webinar CRM follow-up",
      "B2B webinar funnel",
      "webinar conversion strategija",
      "webinar segmentacija učesnika",
      "webinars for founder-led growth",
      "B2B webinar strategy",
      "webinar lead generation",
      "webinar follow-up strategy",
      "founder-led webinar",
      "LinkedIn webinar promotion",
      "webinar pipeline",
      "webinar CRM follow-up",
      "B2B webinar funnel",
      "webinar conversion strategy",
      "webinar attendee segmentation",
    ],
    [
      "webinars for founder-led growth",
      "B2B webinar strategy",
      "webinar lead generation",
      "webinar follow-up strategy",
      "founder-led webinar",
      "LinkedIn webinar promotion",
      "webinar pipeline",
      "webinar CRM follow-up",
      "B2B webinar funnel",
      "webinar conversion strategy",
      "webinar attendee segmentation",
    ],
  ),
};
