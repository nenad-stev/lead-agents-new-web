import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("HubSpot CRM Tutorial for Beginners", "HubSpot CRM Tutorial for Beginners"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za razumevanje osnova HubSpot CRM setup-a.",
    "Useful for understanding the basics of HubSpot CRM setup.",
  ),
  placementNote: L("Pogledaj posle pipeline stage sekcije ili u video sekciji.", "Watch after the pipeline stages section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/GBS7XK3H4k4",
  watchUrl: "https://www.youtube.com/watch?v=GBS7XK3H4k4",
};

const video2 = {
  title: L("How to Build a Sales Pipeline in HubSpot", "How to Build a Sales Pipeline in HubSpot"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Relevantno za kreiranje pipeline stage-ova i deal tracking-a.",
    "Relevant for creating pipeline stages and deal tracking.",
  ),
  placementNote: L("Pogledaj posle crm-steps sekcije ili u video sekciji.", "Watch after the CRM steps section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/5L7PZk5-MoU",
  watchUrl: "https://www.youtube.com/watch?v=5L7PZk5-MoU",
};

const video3 = {
  title: L("Pipedrive CRM Tutorial for Beginners", "Pipedrive CRM Tutorial for Beginners"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za timove koji koriste Pipedrive za sales stage-ove i custom polja.",
    "Useful for teams using Pipedrive to manage sales stages and custom fields.",
  ),
  placementNote: L("Pogledaj posle fields-tags sekcije ili u video sekciji.", "Watch after the fields and tags section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/7gtsND1UqUI",
  watchUrl: "https://www.youtube.com/watch?v=7gtsND1UqUI",
};

const video4 = {
  title: L("How to Build Sales Pipelines in Attio", "How to Build Sales Pipelines in Attio"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za timove koji grade custom pipeline workflow-e u Attio-u.",
    "Helpful for teams using Attio to build custom pipeline workflows.",
  ),
  placementNote: L("Pogledaj posle implement sekcije ili u video sekciji.", "Watch after the implement section or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/HDUgAKvF2so",
  watchUrl: "https://www.youtube.com/watch?v=HDUgAKvF2so",
};

const video5 = {
  title: L("How to Automate CRM Workflows with Zapier", "How to Automate CRM Workflows with Zapier"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za automatizaciju handoff-a između formi, webinara, outreach alata i CRM-a.",
    "Useful for automating handoffs between forms, webinars, outreach tools, and CRM.",
  ),
  placementNote: L("Pogledaj posle automation tabele ili u video sekciji.", "Watch after the automation table or in the videos section."),
  embedUrl: "https://www.youtube.com/embed/JMNhks8i5t8",
  watchUrl: "https://www.youtube.com/watch?v=JMNhks8i5t8",
};

export const lesson10RichContent: RichLessonContent = {
  meta: {
    stage: L("CRM & Pipeline", "CRM & Pipeline"),
    readingTime: L("18-22 min", "18-22 min"),
    difficulty: L("Srednji nivo", "Intermediate"),
    outcome: L(
      "Izgradićeš jednostavan CRM sistem koji prati founder-led LinkedIn aktivnosti, engagement signale, webinare, outreach, ads i pipeline stage-ove, tako da tim može da poveže aktivnost sa revenue.",
      "You will build a simple CRM system that tracks founder-led LinkedIn activity, engagement signals, webinars, outreach, ads, and pipeline stages so the team can connect activity to revenue.",
    ),
    recommendedTools: L(
      "HubSpot, Pipedrive, Attio, Salesforce, Folk, Google Sheets, Airtable, LinkedIn Sales Navigator, Make.com, Zapier, Clay, HeyReach, Lemlist",
      "HubSpot, Pipedrive, Attio, Salesforce, Folk, Google Sheets, Airtable, LinkedIn Sales Navigator, Make.com, Zapier, Clay, HeyReach, Lemlist",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 10", "Lesson 10"),
    title: L(
      "Kako pratiti Founder-Led Growth aktivnosti u CRM-u",
      "How to Track Founder-Led Growth Activities in Your CRM",
    ),
    paragraphs: P(
      [
        "Founder-Led Growth propada kada sve ostane u founder-ovoj glavi.",
        "Prospect komentariše post. Founder se seti. Neko se prijavi na webinar. Marketing tim ima listu. Target account pogleda profil, niko to ne prati.",
        "Neko odgovori na DM, ostaje u LinkedIn inbox-u. Lead kaže „ne sada“, niko ne prati za 60 dana.",
        "Tako nestaje topli pipeline.",
        "Problem nije nedostatak aktivnosti. Problem je što aktivnost nikad ne postane sistem.",
        "Founder-Led Growth stvara mnoge male signale: profile views, komentare, lajkove, followere, webinar registracije, pitanja, LinkedIn DM-ove, email odgovore, ad klikove, lead magnet download-e, site posete, „not now“ odgovore.",
        "Pojedinačno, signali izgledaju mali. Zajedno pokazuju ko se približava kupovini, ali samo ako ih CRM hvata.",
        "Ako CRM počinje tek kad neko zakaže call, pratiš prodaju prekasno. CRM treba da hvata relationship momentum pre nego što postane pipeline.",
      ],
      [
        "Founder-Led Growth breaks when everything stays in the founder's head.",
        "A prospect comments on a post. The founder remembers it. Someone joins a webinar. The marketing team has the list. A target account views the profile, nobody tracks it.",
        "Someone replies to a DM, it stays inside LinkedIn. A lead says \"not now\", no one follows up in 60 days.",
        "This is how warm pipeline disappears.",
        "The problem is not that the team lacks activity. The problem is that the activity never becomes a system.",
        "Founder-Led Growth creates many small signals: profile views, comments, likes, followers, webinar registrations, questions, LinkedIn DMs, email replies, ad clicks, lead magnet downloads, website visits, \"not now\" replies.",
        "Individually, these signals look small. Together, they show who is moving closer to buying, but only if the CRM captures them.",
        "If your CRM only starts when someone books a call, you are tracking the sales process too late. The CRM should capture relationship momentum before it becomes pipeline.",
      ],
    ),
    callout: L(
      "CRM hvata relationship momentum pre nego što postane pipeline, ne tek kad neko zakaže call.",
      "CRM captures relationship momentum before it becomes pipeline, not only when someone books a call.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "crm-chaos", title: L("CRM haos vs FLG CRM", "CRM chaos vs Founder-Led Growth CRM") },
    { id: "crm-framework", title: L("CRM tracking okvir", "CRM tracking framework") },
    { id: "pipeline-stages", title: L("Pipeline stage-ovi", "Pipeline stages") },
    { id: "fields-tags", title: L("Polja i tagovi", "Custom fields and tags") },
    { id: "reports", title: L("Izveštaji", "Reports and dashboards") },
    { id: "crm-steps", title: L("Korak po korak: CRM setup", "Step-by-step CRM setup") },
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
              "dizajnirati CRM pipeline stage-ove za Founder-Led Growth;",
              "pratiti LinkedIn aktivnost bez prekomplikovanja CRM-a;",
              "kreirati custom polja za source, signal, topic i next action;",
              "koristiti tagove za content, webinar, outreach i buying intent;",
              "povezati LinkedIn engagement sa CRM zapisima;",
              "razdvojiti light signale od pravog pipeline-a;",
              "graditi nedeljne izveštaje koji pokazuju šta stvara razgovore;",
              "pratiti revenue influenced by LinkedIn, webinara, ads i outreach-a;",
              "izbeći pretvaranje CRM-a u admin haos.",
            ],
            [
              "design CRM pipeline stages for Founder-Led Growth;",
              "track LinkedIn activity without overcomplicating the CRM;",
              "create custom fields for source, signal, topic, and next action;",
              "use tags for content, webinar, outreach, and buying intent;",
              "connect LinkedIn engagement to CRM records;",
              "separate light signals from real pipeline;",
              "build weekly reports that show what creates conversations;",
              "track revenue influenced by LinkedIn, webinars, ads, and outreach;",
              "avoid turning CRM into admin chaos.",
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
              "Founder-Led Growth nije samo marketing sistem. To je revenue operating system.",
              "Ako CRM ne odražava način na koji kupci stvarno napreduju, tim ne može da poboljša sistem.",
              "HubSpot attribution reporting dokumentacija objašnjava da attribution izveštaji mogu da analiziraju interakcije, klikove, forme, page views i source, kroz contact create, deal create i revenue attribution.",
              "Pipedrive podržava custom polja koja se mogu prikazati u add view-ovima i mapirati tokom importa, što omogućava prilagođavanje CRM podataka poslovnom procesu.",
              "Salesforce Campaign Influence je izgrađen oko povezivanja kampanja sa opportunities i revenue influence, ista ideja koju Founder-Led Growth timovi treba da primene.",
              "Tačan CRM alat je manje važan od data modela. Jednostavan CRM koji se konzistentno koristi pobedi kompleksan CRM koji niko ne ažurira.",
            ],
            [
              "Founder-Led Growth is not only a marketing system. It is a revenue operating system.",
              "If the CRM does not reflect the way buyers actually move, the team cannot improve the system.",
              "HubSpot's attribution reporting documentation explains that attribution reports can analyze interactions, clicks, forms, page views, and sources, across contact create, deal create, and revenue attribution.",
              "Pipedrive supports custom fields that can be shown in add views and mapped during imports, making it possible to adapt CRM data to the business process.",
              "Salesforce Campaign Influence is built around connecting campaigns with opportunities and revenue influence, the same idea Founder-Led Growth teams need.",
              "The exact CRM tool matters less than the data model. A simple CRM used consistently beats a complex CRM nobody updates.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Ako nije praćeno, neće se poboljšati. Ako je loše praćeno, zavodiće u pogrešan smer.",
            "If it is not tracked, it will not improve. If it is tracked badly, it will mislead you.",
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
            ["CRM treba da odgovori na pet pitanja:"],
            ["Your CRM should answer five questions:"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Odakle je ova osoba ili account došao/la?",
              "Koji signal su pokazali?",
              "Koja tema je stvorila interesovanje?",
              "Šta treba da se desi sledeće?",
              "Da li se pretvorilo u pipeline ili revenue?",
            ],
            [
              "Where did this person or account come from?",
              "What signal did they show?",
              "What topic created the interest?",
              "What should happen next?",
              "Did it turn into pipeline or revenue?",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "To je ceo sistem. Ne treba ti 100 polja, treba ti prava polja.",
              "Founder-Led Growth CRM nije o praćenju svega. Radi se o praćenju handoff-a između pažnje, odnosa, razgovora i revenue.",
            ],
            [
              "That is the whole system. You do not need 100 fields, you need the right fields.",
              "Founder-Led Growth CRM is not about tracking everything. It is about tracking the handoff between attention, relationship, conversation, and revenue.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "crm-chaos",
      title: L("CRM haos vs Founder-Led Growth CRM", "CRM chaos vs Founder-Led Growth CRM"),
      blocks: [
        {
          type: "table",
          caption: L("Poređenje", "Comparison"),
          headers: H(["CRM haos", "Founder-Led Growth CRM"], ["CRM chaos", "Founder-Led Growth CRM"]),
          rows: [
            { cells: [L("Leadovi se dodaju tek posle call-ova", "Leads added only after calls"), L("Topli signali se hvataju ranije", "Warm signals captured earlier")] },
            { cells: [L("Source je nejasan ili nedostaje", "Source is vague or missing"), L("Source, first touch i signal su praćeni", "Source, first touch, and signal are tracked")] },
            { cells: [L("LinkedIn DM-ovi ostaju van CRM-a", "LinkedIn DMs stay outside CRM"), L("Važni DM-ovi kreiraju zapise ili task-ove", "Important DMs create records or tasks")] },
            { cells: [L("Webinar učesnici su jedna lista", "Webinar attendees are one list"), L("Učesnici su segmentirani po ponašanju", "Attendees are segmented by behavior")] },
            { cells: [L("„Not now“ leadovi se zaboravljaju", "\"Not now\" leads are forgotten"), L("Nurture task-ovi su zakazani", "Nurture tasks are scheduled")] },
            { cells: [L("Uticaj content-a je nevidljiv", "Content influence is invisible"), L("Content topic je tagovan", "Content topic is tagged")] },
            { cells: [L("Izveštaji pokazuju samo aktivnost", "Reports show activity only"), L("Izveštaji povezuju aktivnost sa pipeline-om", "Reports connect activity to pipeline")] },
            { cells: [L("Founder drži memoriju", "Founder owns memory"), L("CRM postaje company memory", "CRM becomes company memory")] },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Cilj nije savršen CRM. Cilj je koristan CRM.",
            "The goal is not to make the CRM perfect. The goal is to make it useful.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "crm-framework",
      title: L("Founder-Led Growth CRM okvir", "The Founder-Led Growth CRM Framework"),
      blocks: [
        {
          type: "framework-intro",
          title: L(
            "Source → Signal → Topic → Stage → Next Action → Revenue",
            "Source → Signal → Topic → Stage → Next Action → Revenue",
          ),
          description: L(
            "Ovo je CRM sistem. Svaki korak pretvara founder aktivnost u merljiv pipeline input.",
            "This is the CRM system. Each step turns founder activity into measurable pipeline input.",
          ),
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Source", "Source"),
              whatToDo: L("Zabeleži odakle je osoba došla.", "Record where the person came from."),
              whyItMatters: L("Bez source-a ne možeš da znaš koji kanal stvara pipeline.", "Without source, you cannot know which channel creates pipeline."),
              example: L("LinkedIn post, comment, webinar, ad, referral, website, outbound, lead magnet.", "LinkedIn post, comment, webinar, ad, referral, website, outbound, lead magnet."),
              commonMistake: L("Označavanje svega kao „LinkedIn“ ili „direct“.", "Labeling everything as \"LinkedIn\" or \"direct\"."),
              tryThis: L("Koristi tri sloja: original source, first touchpoint, campaign/asset.", "Use three layers: original source, first touchpoint, campaign/asset."),
              highlight: L("Source određuje kanal.", "Source determines the channel."),
            },
            {
              step: 2,
              title: L("Signal", "Signal"),
              whatToDo: L("Zabeleži šta su uradili.", "Record what they did."),
              whyItMatters: L("Signal level određuje prioritet i next action.", "Signal level determines priority and next action."),
              example: L("Komentarisali, registrovali se, prisustvovali, odgovorili, kliknuli CTA, pogledali pricing page.", "Commented, registered, attended, replied, clicked CTA, viewed pricing page."),
              commonMistake: L("Tretiranje svakog lajka kao jednakog signala.", "Treating every like as an equal signal."),
              tryThis: L("Koristi light / medium / strong za prioritizaciju.", "Use light / medium / strong for prioritization."),
              highlight: L("Signal pokazuje nameru.", "Signal shows intent."),
            },
            {
              step: 3,
              title: L("Topic", "Topic"),
              whatToDo: L("Zabeleži o čemu su pokazali interesovanje.", "Record what they showed interest in."),
              whyItMatters: L("Topic omogućava content-to-pipeline izveštaje.", "Topic enables content-to-pipeline reports."),
              example: L("ICP, profile, content, outreach, webinar, CRM, buying signals.", "ICP, profile, content, outreach, webinar, CRM, buying signals."),
              commonMistake: L("Ne tagovanje content teme, gubi se attribution.", "Not tagging content topic, attribution is lost."),
              tryThis: L("Koristi dropdown za content topic polje.", "Use a dropdown for the content topic field."),
              highlight: L("Topic povezuje content sa pipeline-om.", "Topic connects content to pipeline."),
            },
            {
              step: 4,
              title: L("Stage", "Stage"),
              whatToDo: L("Postavi gde su u pipeline-u.", "Set where they are in the pipeline."),
              whyItMatters: L("Stage pokazuje relationship momentum pre deal-a.", "Stage shows relationship momentum before a deal."),
              example: L("Engaged, warm list, outreach sent, conversation, qualified, opportunity, proposal, won/lost, nurture.", "Engaged, warm list, outreach sent, conversation, qualified, opportunity, proposal, won/lost, nurture."),
              commonMistake: L("Kreiranje deal-a pre nego što postoji fit i pain.", "Creating a deal before fit and pain exist."),
              tryThis: L("Koristi contact stage-ove pre deal stage-ova.", "Use contact stages before deal stages."),
              highlight: L("Stage prati momentum, ne samo revenue.", "Stage tracks momentum, not just revenue."),
            },
            {
              step: 5,
              title: L("Next Action", "Next Action"),
              whatToDo: L("Definiši šta treba da se desi sledeće.", "Define what should happen next."),
              whyItMatters: L("Bez next action-a, signali stoje u CRM-u bez pokreta.", "Without next action, signals sit in CRM without movement."),
              example: L("Engage back, send template, founder DM, book call, follow up in 30 days.", "Engage back, send template, founder DM, book call, follow up in 30 days."),
              commonMistake: L("Dodavanje kontakta bez owner-a ili follow-up datuma.", "Adding a contact without owner or follow-up date."),
              tryThis: L("Svaki signal kreira: no action, nurture, follow-up task, sales task, ili deal.", "Every signal creates: no action, nurture, follow-up task, sales task, or deal."),
              highlight: L("Next action pokreće workflow.", "Next action drives the workflow."),
            },
            {
              step: 6,
              title: L("Revenue", "Revenue"),
              whatToDo: L("Prati da li je aktivnost uticala na pipeline ili closed revenue.", "Track whether activity influenced pipeline or closed revenue."),
              whyItMatters: L("Bez revenue attribution-a, FLG izgleda kao „brand activity“.", "Without revenue attribution, FLG looks like \"brand activity\"."),
              example: L("Opportunity created, deal value, revenue source, campaign influence.", "Opportunity created, deal value, revenue source, campaign influence."),
              commonMistake: L("Označavanje deal-a kao „direct“ ili „unknown“.", "Labeling deals as \"direct\" or \"unknown\"."),
              tryThis: L("Popuni pipeline influence polje na svakom deal-u.", "Fill pipeline influence field on every deal."),
              highlight: L("Revenue zatvara attribution loop.", "Revenue closes the attribution loop."),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "CRM nije baza podataka. To je memorija Founder-Led Growth sistema.",
            "The CRM is not a database. It is the memory of the Founder-Led Growth system.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "pipeline-stages",
      title: L("Founder-Led Growth pipeline stage-ovi", "Founder-Led Growth pipeline stages"),
      blocks: [
        {
          type: "table",
          caption: L("10 stage-ova", "10 stages"),
          headers: H(["Stage", "Značenje", "Entry criteria", "Next action"], ["Stage", "Meaning", "Entry criteria", "Next action"]),
          rows: [
            { cells: [L("Engaged", "Engaged"), L("Osoba/account je interagovao/la sa founder content-om", "Person/account interacted with founder content"), L("Like, comment, profile view, follow, webinar registration", "Like, comment, profile view, follow, webinar registration"), L("Proveri ICP fit", "Check ICP fit")] },
            { cells: [L("Warm List", "Warm List"), L("ICP fit + relevant topic signal", "ICP fit + relevant topic signal"), L("Repeat engagement, comment, webinar registration", "Repeat engagement, comment, webinar registration"), L("Engage ili pošalji soft resource", "Engage or send soft resource")] },
            { cells: [L("Outreach Sent", "Outreach Sent"), L("Kontekstualni DM/email poslat", "Contextual DM/email sent"), L("Poruka poslata na osnovu realnog konteksta", "Message sent based on real context"), L("Follow up", "Follow up")] },
            { cells: [L("Conversation", "Conversation"), L("Osoba je odgovorila ili se angažovala u DM/email-u", "Person replied or engaged in DM/email"), L("Reply, question, resource request", "Reply, question, resource request"), L("Kvalifikuj pain i timing", "Qualify pain and timing")] },
            { cells: [L("Qualified", "Qualified"), L("Fit, pain i next step potvrđeni", "Fit, pain, and next step confirmed"), L("Discovery interest ili jasan business problem", "Discovery interest or clear business problem"), L("Zakaži call / kreiraj deal", "Book call / create deal")] },
            { cells: [L("Opportunity", "Opportunity"), L("Aktivan sales proces", "Active sales process"), L("Sales call prihvaćen ili deal kreiran", "Sales call accepted or deal created"), L("Upravljaj deal-om", "Manage deal")] },
            { cells: [L("Proposal", "Proposal"), L("Ponuda poslata", "Proposal sent"), L("Commercial offer podeljen", "Commercial offer shared"), L("Follow up", "Follow up")] },
            { cells: [L("Won", "Won"), L("Kupac zatvoren", "Customer closed"), L("Deal closed won", "Deal closed won"), L("Onboard", "Onboard")] },
            { cells: [L("Lost", "Lost"), L("Nije fit ili izabrali drugu opciju", "Not a fit or chose another option"), L("Deal closed lost", "Deal closed lost"), L("Zabeleži razlog", "Record reason")] },
            { cells: [L("Nurture", "Nurture"), L("Relevantan ali nije spreman", "Relevant but not ready"), L("„Not now“, low timing, early interest", "\"Not now,\" low timing, early interest"), L("Follow-up task za 30-90 dana", "Follow-up task in 30-90 days")] },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Ne svaka engaged osoba treba da postane deal. Rani stage-ovi prate relationship momentum bez zagađivanja sales pipeline-a.",
            "Not every engaged person should become a deal. Use early stages to track relationship momentum without polluting the sales pipeline.",
          ),
        },
        { type: "video", video: video2 },
      ],
    },
    {
      type: "section",
      id: "fields-tags",
      title: L("Minimum CRM polja za Founder-Led Growth", "The minimum CRM fields for Founder-Led Growth"),
      blocks: [
        {
          type: "table",
          caption: L("Obavezna polja", "Required fields"),
          headers: H(["Polje", "Tip", "Primer vrednosti", "Zašto je važno"], ["Field", "Type", "Example values", "Why it matters"]),
          rows: [
            { cells: [L("Lead source", "Lead source"), L("Dropdown", "Dropdown"), L("LinkedIn, webinar, ads, referral, website, outbound", "LinkedIn, webinar, ads, referral, website, outbound"), L("Pokazuje kanal", "Shows channel")] },
            { cells: [L("First touchpoint", "First touchpoint"), L("Dropdown/text", "Dropdown/text"), L("Founder post, comment, DM, webinar, ad click", "Founder post, comment, DM, webinar, ad click"), L("Pokazuje entry point", "Shows entry point")] },
            { cells: [L("Founder touchpoint", "Founder touchpoint"), L("Dropdown", "Dropdown"), L("Post engagement, comment, profile view, DM, webinar", "Post engagement, comment, profile view, DM, webinar"), L("Prati founder uticaj", "Tracks founder influence")] },
            { cells: [L("Signal level", "Signal level"), L("Dropdown", "Dropdown"), L("Light, medium, strong", "Light, medium, strong"), L("Prioritizuje akciju", "Prioritizes action")] },
            { cells: [L("Content topic", "Content topic"), L("Dropdown", "Dropdown"), L("ICP, profile, content, outreach, CRM, buying signals", "ICP, profile, content, outreach, CRM, buying signals"), L("Pokazuje šta je stvorilo interes", "Shows what created interest")] },
            { cells: [L("ICP fit", "ICP fit"), L("Dropdown", "Dropdown"), L("High, medium, low", "High, medium, low"), L("Sprečava jurnjavu za lošim leadovima", "Prevents chasing bad-fit leads")] },
            { cells: [L("Buying committee role", "Buying committee role"), L("Dropdown", "Dropdown"), L("Economic buyer, champion, evaluator, blocker", "Economic buyer, champion, evaluator, blocker"), L("Pomaže sales follow-up", "Helps sales follow-up")] },
            { cells: [L("Last meaningful interaction", "Last meaningful interaction"), L("Date", "Date"), L("Datum poslednjeg signala", "Date of last signal"), L("Sprečava zastareli follow-up", "Prevents stale follow-up")] },
            { cells: [L("Next best action", "Next best action"), L("Dropdown/text", "Dropdown/text"), L("Engage, send asset, DM, call, nurture", "Engage, send asset, DM, call, nurture"), L("Pokreće workflow", "Drives workflow")] },
            { cells: [L("Follow-up date", "Follow-up date"), L("Date", "Date"), L("Sledeća zakazana akcija", "Next scheduled action"), L("Sprečava zaboravljanje leadova", "Prevents forgetting leads")] },
            { cells: [L("Campaign / asset", "Campaign / asset"), L("Text/dropdown", "Text/dropdown"), L("Webinar, playbook, checklist, Thought Leader Ad", "Webinar, playbook, checklist, Thought Leader Ad"), L("Prati uticaj", "Tracks influence")] },
            { cells: [L("Pipeline influence", "Pipeline influence"), L("Multi-select", "Multi-select"), L("LinkedIn content, webinar, ad, outreach", "LinkedIn content, webinar, ad, outreach"), L("Pokazuje multi-touch journey", "Shows multi-touch journey")] },
          ],
        },
        {
          type: "table",
          caption: L("Preporučeni tagovi", "Recommended tags"),
          headers: H(["Kategorija tagova", "Primer tagova"], ["Tag category", "Example tags"]),
          rows: [
            { cells: [L("Channel", "Channel"), L("LinkedIn, Webinar, Ads, Referral, Website", "LinkedIn, Webinar, Ads, Referral, Website")] },
            { cells: [L("Content topic", "Content topic"), L("ICP, Profile, Content, Commenting, Outreach, Webinar, Ads, CRM, Signals", "ICP, Profile, Content, Commenting, Outreach, Webinar, Ads, CRM, Signals")] },
            { cells: [L("Signal", "Signal"), L("Commented, Replied, Registered, Attended, CTA Clicked, Downloaded", "Commented, Replied, Registered, Attended, CTA Clicked, Downloaded")] },
            { cells: [L("Fit", "Fit"), L("High Fit, Medium Fit, Low Fit", "High Fit, Medium Fit, Low Fit")] },
            { cells: [L("Timing", "Timing"), L("Now, 30 Days, 60 Days, 90 Days, Not Now", "Now, 30 Days, 60 Days, 90 Days, Not Now")] },
            { cells: [L("Role", "Role"), L("Founder, CEO, VP Sales, Head of Growth, RevOps", "Founder, CEO, VP Sales, Head of Growth, RevOps")] },
            { cells: [L("Action", "Action"), L("Send Checklist, Invite Webinar, Founder DM, Book Call, Nurture", "Send Checklist, Invite Webinar, Founder DM, Book Call, Nurture")] },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Ne kreiraj polja zato što možeš. Kreiraj polja zato što menjaju šta se dešava sledeće.",
            "Do not create fields because you can. Create fields because they change what happens next.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "reports",
      title: L("Izveštaji koji povezuju LinkedIn sa revenue", "Reports that connect LinkedIn to revenue"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            ["Report 1: Founder-Led Growth Source Report"],
            ["Report 1: Founder-Led Growth Source Report"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Pokazuje koliko kontakata, razgovora, opportunities i won deal-ova dolazi iz LinkedIn-a, webinara, ads, referrals, outbound-a i website-a.",
              "Koristi lead source i pipeline influence polja.",
              "Review: nedeljno, petak ujutru.",
            ],
            [
              "Shows how many contacts, conversations, opportunities, and won deals came from LinkedIn, webinars, ads, referrals, outbound, and website.",
              "Uses lead source and pipeline influence fields.",
              "Review: weekly, Friday morning.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Report 2: Content Topic to Pipeline Report"],
            ["Report 2: Content Topic to Pipeline Report"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Pokazuje koje content teme stvaraju najviše razgovora i opportunities.",
              "Primer teme: ICP, profile, content, outreach, CRM, buying signals.",
              "Pomaže founder-u da zna šta da piše sledeće.",
            ],
            [
              "Shows which content topics create the most conversations and opportunities.",
              "Example topics: ICP, profile, content, outreach, CRM, buying signals.",
              "Helps the founder know what to write next.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Report 3: Signal Strength Report"],
            ["Report 3: Signal Strength Report"],
          ),
        },
        {
          type: "table",
          caption: L("Signal conversion", "Signal conversion"),
          headers: H(["Signal level", "Tipična konverzija"], ["Signal level", "Typical conversion"]),
          rows: [
            { cells: [L("Light", "Light"), L("Monitor / nurture", "Monitor / nurture")] },
            { cells: [L("Medium", "Medium"), L("Contextual outreach", "Contextual outreach")] },
            { cells: [L("Strong", "Strong"), L("Sales follow-up / opportunity", "Sales follow-up / opportunity")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Report 4: Webinar Influence Report"],
            ["Report 4: Webinar Influence Report"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Registrations, attendance, questions, CTA clicks, conversations, opportunities, revenue.",
              "Segmentiraj no-show vs attended vs question askers.",
              "Poveži sa campaign / asset poljem.",
            ],
            [
              "Registrations, attendance, questions, CTA clicks, conversations, opportunities, revenue.",
              "Segment no-shows vs attendees vs question askers.",
              "Connect to campaign / asset field.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Report 5: Founder Touchpoint Report"],
            ["Report 5: Founder Touchpoint Report"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Koji founder activity stvara pipeline: postovi, komentari, profile views, DM-ovi, webinari, ads.",
              "Koristi founder touchpoint polje.",
              "Pomaže founder-u da vidi gde je najveći ROI vremena.",
            ],
            [
              "Which founder activities create pipeline: posts, comments, profile views, DMs, webinars, ads.",
              "Uses founder touchpoint field.",
              "Helps the founder see where time ROI is highest.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Report 6: Nurture Follow-Up Report"],
            ["Report 6: Nurture Follow-Up Report"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "„Not now“ leadovi, next follow-up dates, reactivation opportunities.",
              "Filter: follow-up date = this week.",
              "Sprečava gubitak toplih leadova posle 60-90 dana.",
            ],
            [
              "\"Not now\" leads, next follow-up dates, reactivation opportunities.",
              "Filter: follow-up date = this week.",
              "Prevents losing warm leads after 60-90 days.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Report 7: Revenue Influence Report"],
            ["Report 7: Revenue Influence Report"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Pipeline i closed revenue influenced by LinkedIn content, webinara, ads, lead magneta i outreach-a.",
              "Koristi pipeline influence multi-select polje.",
              "Zatvara loop između FLG aktivnosti i revenue.",
            ],
            [
              "Pipeline and closed revenue influenced by LinkedIn content, webinars, ads, lead magnets, and outreach.",
              "Uses pipeline influence multi-select field.",
              "Closes the loop between FLG activity and revenue.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Ne izveštavaj samo aktivnost. Izveštavaj kretanje.",
            "Do not only report activity. Report movement.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "crm-steps",
      title: L("Korak po korak: CRM setup", "Step-by-step CRM setup"),
      blocks: [
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Definiši šta se smatra CRM-worthy signalom", "Define what counts as a CRM-worthy signal"),
              whatToDo: L(
                "Odluči koje signale treba pratiti: ICP komentari, repeat engagement, webinar registration/attendance, DM-ovi, email replies, lead magnet downloads, ad form submissions, site visits, sales conversations.",
                "Decide which signals to track: ICP comments, repeat engagement, webinar registration/attendance, DMs, email replies, lead magnet downloads, ad form submissions, site visits, sales conversations.",
              ),
              whyItMatters: L("Bez jasnog pravila, CRM postaje bučan ili prazan.", "Without a clear rule, CRM becomes noisy or empty."),
              example: L("Pravilo: kreiraj CRM zapis samo kad postoji ICP fit + meaningful signal.", "Rule: only create a CRM record when there is ICP fit + meaningful signal."),
              commonMistake: L("Dodavanje svega u CRM i stvaranje šuma.", "Adding everything to CRM and creating noise."),
              tryThis: L("Ne prati: random lajkove, irelevantne followere, peer engagement bez ICP fit-a.", "Do not track: random likes, irrelevant followers, peer engagement with no ICP fit."),
              highlight: L("ICP fit + meaningful signal = CRM record.", "ICP fit + meaningful signal = CRM record."),
            },
            {
              step: 2,
              title: L("Kreiraj pipeline stage-ove", "Create the pipeline stages"),
              whatToDo: L("Kreiraj stage-ove: Engaged → Warm List → Outreach Sent → Conversation → Qualified → Opportunity → Proposal → Won/Lost/Nurture.", "Create stages: Engaged → Warm List → Outreach Sent → Conversation → Qualified → Opportunity → Proposal → Won/Lost/Nurture."),
              whyItMatters: L("FLG ima više pre-opportunity aktivnosti nego klasična prodaja.", "Founder-Led Growth has more pre-opportunity activity than classic sales."),
              example: L("Koristi contact/company stage-ove pre deal stage-ova.", "Use contact/company stages before deal stages."),
              commonMistake: L("Kreiranje deal-a prerano.", "Creating deals too early."),
              tryThis: L("Deal kreiraj tek kad postoji confirmed fit, pain i next step.", "Create a deal only when there is confirmed fit, pain, and next step."),
              highlight: L("Rani stage-ovi prate momentum.", "Early stages track momentum."),
            },
            {
              step: 3,
              title: L("Dodaj custom polja", "Add custom fields"),
              whatToDo: L("Dodaj minimum polja: lead source, first touchpoint, founder touchpoint, signal level, content topic, ICP fit, next best action, follow-up date, campaign/asset, pipeline influence.", "Add minimum fields: lead source, first touchpoint, founder touchpoint, signal level, content topic, ICP fit, next best action, follow-up date, campaign/asset, pipeline influence."),
              whyItMatters: L("Ova polja omogućavaju izveštaje.", "These fields make reports possible."),
              example: L("Dropdown za source i topic; date za follow-up; multi-select za pipeline influence.", "Dropdown for source and topic; date for follow-up; multi-select for pipeline influence."),
              commonMistake: L("Korišćenje free-text notes za sve.", "Using free-text notes for everything."),
              tryThis: L("Dropdown za sve što želiš da reportuješ.", "Use dropdowns for anything you want to report on."),
              highlight: L("Polja omogućavaju izveštaje.", "Fields enable reports."),
            },
            {
              step: 4,
              title: L("Kreiraj handoff pravila", "Create handoff rules"),
              whatToDo: L("Definiši šta se dešava posle svakog signala, ko je owner i koja je next action.", "Define what happens after each signal, who owns it and what the next action is."),
              whyItMatters: L("Bez owner-a, signali stoje u CRM-u.", "Without an owner, signals sit in CRM."),
              example: L("ICP comment → Engaged + Marketing/Sales owner. DM reply → Conversation + Sales owner.", "ICP comment → Engaged + Marketing/Sales owner. DM reply → Conversation + Sales owner."),
              commonMistake: L("Nema owner-a za next action.", "No owner for the next action."),
              tryThis: L("Svaki signal kreira: no action, nurture, follow-up task, sales task, ili deal.", "Every signal creates: no action, nurture, follow-up task, sales task, or deal."),
              highlight: L("Handoff pravila pokreću workflow.", "Handoff rules drive the workflow."),
            },
            {
              step: 5,
              title: L("Izgradi nedeljni dashboard", "Build weekly dashboard"),
              whatToDo: L("Kreiraj jednostavan nedeljni dashboard sa metrikama: new LinkedIn contacts, ICP engagement, warm list growth, outreach sent, replies, conversations, qualified opportunities, revenue influenced, nurture due.", "Create a simple weekly dashboard with metrics: new LinkedIn contacts, ICP engagement, warm list growth, outreach sent, replies, conversations, qualified opportunities, revenue influenced, nurture due."),
              whyItMatters: L("Dashboard povezuje content metrike sa pipeline metrikama.", "Dashboard connects content metrics to pipeline metrics."),
              example: L("30-min Founder-Led Growth CRM review svakog petka.", "30-minute Founder-Led Growth CRM review every Friday."),
              commonMistake: L("Review content metrika odvojeno od pipeline metrika.", "Reviewing content metrics separately from pipeline metrics."),
              tryThis: L("Jedan dashboard, jedan review, jedan tim.", "One dashboard, one review, one team."),
              highlight: L("Nedeljni review zatvara loop.", "Weekly review closes the loop."),
            },
          ],
        },
        {
          type: "table",
          caption: L("Handoff pravila po signalu", "Handoff rules by signal"),
          headers: H(["Signal", "CRM akcija", "Owner"], ["Signal", "CRM action", "Owner"]),
          rows: [
            { cells: [L("ICP komentariše post", "ICP comments on post"), L("Dodaj contact ili update record", "Add contact or update record"), L("Marketing / Sales", "Marketing / Sales")] },
            { cells: [L("ICP ponavlja engagement", "ICP repeats engagement"), L("Dodaj u warm list", "Add to warm list"), L("Sales", "Sales")] },
            { cells: [L("Webinar registration", "Webinar registration"), L("Kreiraj contact + tag topic", "Create contact + tag topic"), L("Marketing", "Marketing")] },
            { cells: [L("Webinar question", "Webinar question"), L("Kreiraj founder follow-up task", "Create founder follow-up task"), L("Founder / Sales", "Founder / Sales")] },
            { cells: [L("DM reply", "DM reply"), L("Update stage na Conversation", "Update stage to Conversation"), L("Sales", "Sales")] },
            { cells: [L("Resource request", "Resource request"), L("Pošalji asset + follow-up task", "Send asset + follow-up task"), L("Sales", "Sales")] },
            { cells: [L("Booked call", "Booked call"), L("Kreiraj deal", "Create deal"), L("Sales", "Sales")] },
            { cells: [L("Not now", "Not now"), L("Move to Nurture + follow-up date", "Move to Nurture + follow-up date"), L("Sales", "Sales")] },
          ],
        },
        {
          type: "table",
          caption: L("Nedeljni dashboard metrike", "Weekly dashboard metrics"),
          headers: H(["Metrika", "Pitanje koje odgovara"], ["Metric", "Question it answers"]),
          rows: [
            { cells: [L("New LinkedIn-sourced contacts", "New LinkedIn-sourced contacts"), L("Da li founder aktivnost stvara relevantne kontakte?", "Is founder activity creating relevant contacts?")] },
            { cells: [L("ICP engagement", "ICP engagement"), L("Da li se pravi ljudi angažuju?", "Are the right people engaging?")] },
            { cells: [L("Warm list growth", "Warm list growth"), L("Da li signali postaju liste?", "Are signals turning into lists?")] },
            { cells: [L("Outreach sent", "Outreach sent"), L("Da li delujemo na signale?", "Are we acting on signals?")] },
            { cells: [L("Replies", "Replies"), L("Da li su poruke relevantne?", "Are messages relevant?")] },
            { cells: [L("Conversations", "Conversations"), L("Da li signali postaju razgovori?", "Are signals becoming conversations?")] },
            { cells: [L("Qualified opportunities", "Qualified opportunities"), L("Da li se kreira pipeline?", "Is pipeline being created?")] },
            { cells: [L("Revenue influenced", "Revenue influenced"), L("Da li FLG doprinosi revenue?", "Is Founder-Led Growth contributing to revenue?")] },
            { cells: [L("Nurture due", "Nurture due"), L("Da li se „not now“ leadovi reaktiviraju?", "Are \"not now\" leads being reactivated?")] },
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
              "CRM je memorija cele petlje konekcije: outreach, content, signali, re-engagement, value-based follow-up.",
              "Svaki lead ima status (cold_sent, no_reply, signal_reengage, nurture, meeting) i istoriju dodira. Lead scoring odlučuje sledeću akciju, ne osećaj u inbox-u.",
              "Redosled kanala u Lead Agents-u: ICP → profil → cold outreach → signali → content → TLA → CRM. Ova lekcija pretvara aktivnost u merljiv pipeline.",
              "Bez CRM-a, follow-up sistem i signali rade u praznini. Sa CRM-om, tim zna ko čeka pravi trenutak i ko je spreman za razgovor danas.",
            ],
            [
              "CRM is the memory of the full connection loop: outreach, content, signals, re-engagement, value-based follow-up.",
              "Every lead has status (cold_sent, no_reply, signal_reengage, nurture, meeting) and touch history. Lead scoring decides the next action, not inbox intuition.",
              "Lead Agents channel order: ICP → profile → cold outreach → signals → content → TLA → CRM. This lesson turns activity into measurable pipeline.",
              "Without CRM, follow-up systems and signals run in a vacuum. With CRM, the team knows who is waiting for the right moment and who is ready to talk today.",
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
              title: L("Attribution reporting povezuje interakcije sa revenue", "Attribution reporting connects interactions to revenue"),
              body: L(
                "HubSpot attribution izveštaji mogu da analiziraju contact create, deal create i revenue attribution koristeći interakcije poput klikova, formi, page views i source-a.",
                "HubSpot attribution reports can analyze contact create, deal create, and revenue attribution using interactions like clicks, forms, page views, and sources.",
              ),
              sourceLabel: L("HubSpot Knowledge Base", "HubSpot Knowledge Base"),
              sourceUrl: "https://knowledge.hubspot.com/reports/understand-attribution-reporting",
            },
            {
              title: L("Custom polja prilagođavaju CRM vašem procesu", "Custom fields make CRM fit your process"),
              body: L(
                "Pipedrive podržava custom polja koja se mogu prikazati u add view-ovima i mapirati tokom importa, što olakšava praćenje poslovno-specifičnih podataka.",
                "Pipedrive supports custom fields that can be shown in add views and mapped during imports, making it easier to track business-specific data.",
              ),
              sourceLabel: L("Pipedrive Support", "Pipedrive Support"),
              sourceUrl: "https://support.pipedrive.com/en/article/custom-fields",
            },
            {
              title: L("Campaign influence povezuje aktivnost sa opportunities", "Campaign influence helps connect activity to opportunities"),
              body: L(
                "Salesforce Campaign Influence je dizajniran da identifikuje revenue share iz kampanja koristeći standardne i custom attribution modele.",
                "Salesforce Campaign Influence is designed to identify revenue share from campaigns using standard and custom attribution models.",
              ),
              sourceLabel: L("Salesforce", "Salesforce"),
              sourceUrl: "https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/campaign_influence_implementation_guide.pdf",
            },
            {
              title: L("Moderni CRM-ovi treba da prate vaš business model", "Modern CRMs should match your business model"),
              body: L(
                "Attio podržava custom objects i relationships tako da timovi mogu da mapiraju CRM strukturu na jedinstveni business model i proces.",
                "Attio supports custom objects and relationships so teams can map CRM structure to their unique business model and process.",
              ),
              sourceLabel: L("Attio Help", "Attio Help"),
              sourceUrl: "https://attio.com/help/academy/introduction/customizing-objects",
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
          paragraphs: P(["1. Kreiraj CRM data model"], ["1. Create your CRM data model"]),
        },
        {
          type: "table",
          caption: L("CRM objekti", "CRM objects"),
          headers: H(["Objekat", "Svrha"], ["Object", "Purpose"]),
          rows: [
            { cells: [L("Contact", "Contact"), L("Individual buyer ili influencer", "Individual buyer or influencer")] },
            { cells: [L("Company", "Company"), L("Target account", "Target account")] },
            { cells: [L("Deal", "Deal"), L("Aktivna sales opportunity", "Active sales opportunity")] },
            { cells: [L("Activity", "Activity"), L("Post engagement, DM, email, call, webinar", "Post engagement, DM, email, call, webinar")] },
            { cells: [L("Campaign / Asset", "Campaign / Asset"), L("Webinar, lead magnet, Thought Leader Ad, playbook", "Webinar, lead magnet, Thought Leader Ad, playbook")] },
            { cells: [L("Task", "Task"), L("Next action", "Next action")] },
            { cells: [L("Note", "Note"), L("Kontekst od founder-a ili sales-a", "Context from founder or sales")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["2. Dodaj lifecycle stage-ove"], ["2. Add lifecycle stages"]),
        },
        {
          type: "table",
          caption: L("Lifecycle stage-ovi", "Lifecycle stages"),
          headers: H(["Lifecycle stage", "Značenje"], ["Lifecycle stage", "Meaning"]),
          rows: [
            { cells: [L("Subscriber", "Subscriber"), L("Downloadovao asset ili se registrovao", "Downloaded asset or registered")] },
            { cells: [L("Engaged", "Engaged"), L("Interagovao sa founder content-om", "Interacted with founder content")] },
            { cells: [L("Warm lead", "Warm lead"), L("ICP fit + signal", "ICP fit + signal")] },
            { cells: [L("Sales conversation", "Sales conversation"), L("Odgovorio ili započeo DM/email thread", "Replied or started DM/email thread")] },
            { cells: [L("Qualified lead", "Qualified lead"), L("Fit + pain + timing", "Fit + pain + timing")] },
            { cells: [L("Opportunity", "Opportunity"), L("Aktivan sales proces", "Active sales process")] },
            { cells: [L("Customer", "Customer"), L("Closed won", "Closed won")] },
            { cells: [L("Nurture", "Nurture"), L("Relevantan ali nije spreman", "Relevant but not ready")] },
            { cells: [L("Disqualified", "Disqualified"), L("Nije fit", "Not a fit")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["3. Dodaj source hijerarhiju"], ["3. Add source hierarchy"]),
        },
        {
          type: "table",
          caption: L("Tri sloja source-a", "Three source layers"),
          headers: H(["Sloj", "Primer"], ["Layer", "Example"]),
          rows: [
            { cells: [L("Original source", "Original source"), L("LinkedIn", "LinkedIn")] },
            { cells: [L("First touchpoint", "First touchpoint"), L("Comment on founder post", "Comment on founder post")] },
            { cells: [L("Campaign / topic", "Campaign / topic"), L("CRM tracking lesson / webinar", "CRM tracking lesson / webinar")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["4. Kreiraj LinkedIn activity tagove"], ["4. Create LinkedIn activity tags"]),
        },
        {
          type: "bullets",
          items: P(
            [
              "LI-post-engagement, LI-comment, LI-profile-view, LI-DM, LI-webinar, LI-lead-magnet, LI-thought-leader-ad, LI-outreach, LI-reply, LI-not-now.",
            ],
            [
              "LI-post-engagement, LI-comment, LI-profile-view, LI-DM, LI-webinar, LI-lead-magnet, LI-thought-leader-ad, LI-outreach, LI-reply, LI-not-now.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["5. Kreiraj jednostavan lead scoring model"], ["5. Create a simple lead scoring model"]),
        },
        {
          type: "table",
          caption: L("Lead scoring", "Lead scoring"),
          headers: H(["Signal", "Poeni"], ["Signal", "Points"]),
          rows: [
            { cells: [L("ICP fit high", "ICP fit high"), L("30", "30")] },
            { cells: [L("Komentarisao founder post", "Commented on founder post"), L("10", "10")] },
            { cells: [L("Repeat engagement", "Repeat engagement"), L("15", "15")] },
            { cells: [L("Webinar registered", "Webinar registered"), L("10", "10")] },
            { cells: [L("Webinar attended", "Webinar attended"), L("20", "20")] },
            { cells: [L("Asked webinar question", "Asked webinar question"), L("25", "25")] },
            { cells: [L("Downloaded checklist", "Downloaded checklist"), L("10", "10")] },
            { cells: [L("Replied to DM/email", "Replied to DM/email"), L("25", "25")] },
            { cells: [L("Viewed pricing/demo page", "Viewed pricing/demo page"), L("30", "30")] },
            { cells: [L("„Not now“ but relevant", "\"Not now\" but relevant"), L("10", "10")] },
          ],
        },
        {
          type: "table",
          caption: L("Action thresholds", "Action thresholds"),
          headers: H(["Score", "Akcija"], ["Score", "Action"]),
          rows: [
            { cells: [L("0-29", "0-29"), L("Monitor", "Monitor")] },
            { cells: [L("30-49", "30-49"), L("Nurture", "Nurture")] },
            { cells: [L("50-69", "50-69"), L("Send contextual outreach", "Send contextual outreach")] },
            { cells: [L("70-89", "70-89"), L("Sales follow-up", "Sales follow-up")] },
            { cells: [L("90+", "90+"), L("Create opportunity ili priority sales task", "Create opportunity or priority sales task")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(["6. Kreiraj nedeljne izveštaje"], ["6. Create weekly reports"]),
        },
        {
          type: "bullets",
          items: P(
            [
              "LinkedIn-sourced contacts by week;",
              "warm list growth;",
              "content topic to conversations;",
              "webinar to opportunities;",
              "outreach replies by source topic;",
              "Thought Leader Ads to pipeline;",
              "nurture due this week;",
              "opportunities influenced by founder activity;",
              "closed-won by Founder-Led Growth source.",
            ],
            [
              "LinkedIn-sourced contacts by week;",
              "warm list growth;",
              "content topic to conversations;",
              "webinar to opportunities;",
              "outreach replies by source topic;",
              "Thought Leader Ads to pipeline;",
              "nurture due this week;",
              "opportunities influenced by founder activity;",
              "closed-won by Founder-Led Growth source.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(["7. Automatizuj tek kad manual workflow radi"], ["7. Automate only after the manual workflow works"]),
        },
        {
          type: "table",
          caption: L("Automation workflow-i", "Automation workflows"),
          headers: H(["Workflow", "Automatizacija"], ["Workflow", "Automation"]),
          rows: [
            { cells: [L("Webinar registration", "Webinar registration"), L("Form → CRM contact", "Form → CRM contact")] },
            { cells: [L("Lead magnet download", "Lead magnet download"), L("Form → CRM + tag", "Form → CRM + tag")] },
            { cells: [L("CRM signal alert", "CRM signal alert"), L("CRM → Slack", "CRM → Slack")] },
            { cells: [L("Follow-up task", "Follow-up task"), L("Signal → task created", "Signal → task created")] },
            { cells: [L("Ads form fill", "Ads form fill"), L("LinkedIn Lead Gen Form → CRM", "LinkedIn Lead Gen Form → CRM")] },
            { cells: [L("Outreach reply", "Outreach reply"), L("Outreach tool → CRM update", "Outreach tool → CRM update")] },
            { cells: [L("Nurture reminder", "Nurture reminder"), L("Follow-up date → task", "Follow-up date → task")] },
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
              name: "HubSpot",
              slug: "hubspot",
              usedFor: L("CRM, custom properties, forms, lists, attribution reports, workflows, deal tracking", "CRM, custom properties, forms, lists, attribution reports, workflows, and deal tracking"),
              whyItFits: L("Dobar za povezivanje marketing aktivnosti, formi, webinara i sales pipeline-a.", "Good for connecting marketing activity, forms, webinars, and sales pipeline."),
              alternative: L("Pipedrive, Salesforce, Attio", "Pipedrive, Salesforce, Attio"),
            },
            {
              name: "Pipedrive",
              usedFor: L("Pipeline stage-ovi, custom polja, deal tracking, sales activities, reports", "Pipeline stages, custom fields, deal tracking, sales activities, and reports"),
              whyItFits: L("Jednostavan i sales-friendly za founder-led timove.", "Simple and sales-friendly for founder-led teams."),
              alternative: L("HubSpot, Attio, Folk", "HubSpot, Attio, Folk"),
            },
            {
              name: "Attio",
              slug: "attio",
              usedFor: L("Custom CRM workflows, objects, attributes, lists, relationship tracking", "Custom CRM workflows, objects, attributes, lists, and flexible relationship tracking"),
              whyItFits: L("Dobar za timove koji žele modern CRM mapiran na custom GTM motion.", "Good for teams that want a modern CRM mapped to a custom GTM motion."),
              alternative: L("HubSpot, Pipedrive", "HubSpot, Pipedrive"),
            },
            {
              name: "Salesforce",
              usedFor: L("Enterprise CRM, campaign influence, attribution, opportunity tracking, advanced reporting", "Enterprise CRM, campaign influence, attribution, opportunity tracking, and advanced reporting"),
              whyItFits: L("Korisno za zrelije timove koji trebaju campaign influence i multi-touch attribution.", "Useful for more mature teams that need campaign influence and multi-touch attribution."),
              alternative: L("HubSpot Enterprise", "HubSpot Enterprise"),
            },
            {
              name: "LinkedIn Sales Navigator",
              usedFor: L("Save leads, monitor accounts, povezivanje LinkedIn relationships sa sales workflow-om", "Save leads, monitor accounts, and connect LinkedIn relationships to sales workflow"),
              whyItFits: L("Podržava ICP targeting i account monitoring pre CRM handoff-a.", "Supports ICP targeting and account monitoring before CRM handoff."),
              alternative: L("Apollo, manual LinkedIn search", "Apollo, manual LinkedIn search"),
            },
            {
              name: "Google Sheets / Airtable",
              usedFor: L("Staging lists, early signal tracking, manual scoring, workflow testing", "Staging lists, early signal tracking, manual scoring, and workflow testing"),
              whyItFits: L("Dobar pre nego što je CRM workflow potpuno izgrađen.", "Good before the CRM workflow is fully built."),
              alternative: L("Notion, CRM list views", "Notion, CRM list views"),
            },
            {
              name: "Make.com / Zapier",
              slug: "n8n",
              usedFor: L("Sync LinkedIn forms, webinar tools, lead magnets, CRM, Slack, outreach tools", "Sync LinkedIn forms, webinar tools, lead magnets, CRM, Slack, and outreach tools"),
              whyItFits: L("Automatizuje handoff kad je workflow dokazan.", "Automates handoff once the workflow is proven."),
              alternative: L("n8n, native integrations", "n8n, native integrations"),
            },
            {
              name: "Clay",
              slug: "clay",
              usedFor: L("Enrichment kontakata i account-a pre outreach-a ili CRM-a", "Enrich contacts and accounts before outreach or CRM"),
              whyItFits: L("Dodaje company, role, email i signal data LinkedIn engagement listama.", "Adds company, role, email, and signal data to LinkedIn engagement lists."),
              alternative: L("Apollo, Findymail, Dropcontact", "Apollo, Findymail, Dropcontact"),
            },
            {
              name: "HeyReach",
              slug: "heyreach",
              usedFor: L("LinkedIn outreach, multichannel sequences, response tracking", "LinkedIn outreach, multichannel sequences, and response tracking"),
              whyItFits: L("Povezuje warm lists sa sales aktivnostima.", "Connects warm lists to sales activity."),
              alternative: L("Lemlist, LaGrowthMachine", "Lemlist, LaGrowthMachine"),
            },
            {
              name: "Lemlist",
              slug: "lemlist",
              usedFor: L("Email outreach, multichannel sequences, response tracking", "Email outreach, multichannel sequences, and response tracking"),
              whyItFits: L("Povezuje warm lists sa email follow-up-om i CRM update-ima.", "Connects warm lists to email follow-up and CRM updates."),
              alternative: L("HeyReach, Smartlead", "HeyReach, Smartlead"),
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
          title: L("Od LinkedIn signala do revenue report-a", "From LinkedIn signal to revenue report"),
          steps: P(
            [
              "Founder objavljuje LinkedIn post o CRM tracking-u.",
              "ICP buyer komentariše.",
              "Tim proverava ICP fit.",
              "Contact se dodaje u CRM kao Engaged.",
              "Polja se popunjavaju: source, first touchpoint, topic, signal level, next action.",
              "Founder odgovara na komentar.",
              "Buyer se kasnije registruje na webinar.",
              "CRM ažurira campaign / asset i signal level.",
              "Buyer postavlja pitanje na webinaru.",
              "Founder šalje kontekstualni DM.",
              "Buyer odgovara i zakazuje call.",
              "Deal se kreira.",
              "Opportunity se označava kao influenced by LinkedIn content + webinar.",
              "Revenue report pokazuje Founder-Led Growth influence.",
            ],
            [
              "Founder publishes a LinkedIn post about CRM tracking.",
              "ICP buyer comments.",
              "Team checks ICP fit.",
              "Contact is added to CRM as Engaged.",
              "Fields are filled: source, first touchpoint, topic, signal level, next action.",
              "Founder replies to the comment.",
              "Buyer later registers for webinar.",
              "CRM updates campaign / asset and signal level.",
              "Buyer asks a webinar question.",
              "Founder sends contextual DM.",
              "Buyer replies and books a call.",
              "Deal is created.",
              "Opportunity is marked as influenced by LinkedIn content + webinar.",
              "Revenue report shows Founder-Led Growth influence.",
            ],
          ),
          highlight: L(
            "Sistem postaje merljiv ne praćenjem svakog impression-a, već trenucima koji pomeraju kupce napred.",
            "The system becomes measurable not by tracking every impression, but by tracking the moments that move buyers forward.",
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
              title: L("Founder-Led Growth CRM Map", "Founder-Led Growth CRM Map"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "LinkedIn postovi, komentari, webinari, ads, DM-ovi i website signali teku u CRM stage-ove i revenue reports.",
                "LinkedIn posts, comments, webinars, ads, DMs, and website signals flowing into CRM stages and revenue reports.",
              ),
            },
            {
              title: L(
                "Source → Signal → Topic → Stage → Next Action → Revenue",
                "Source → Signal → Topic → Stage → Next Action → Revenue",
              ),
              placement: L("Framework sekcija", "Framework section"),
              description: L("Core CRM tracking framework.", "The core CRM tracking framework."),
            },
            {
              title: L("Pipeline Stage Map", "Pipeline Stage Map"),
              placement: L("Pipeline stages sekcija", "Pipeline stages section"),
              description: L(
                "Engaged → Warm List → Outreach Sent → Conversation → Qualified → Opportunity → Proposal → Won/Lost/Nurture.",
                "Engaged → Warm List → Outreach Sent → Conversation → Qualified → Opportunity → Proposal → Won/Lost/Nurture.",
              ),
            },
            {
              title: L("Minimum CRM Fields Table", "Minimum CRM Fields Table"),
              placement: L("Custom fields sekcija", "Custom fields section"),
              description: L("Polja potrebna za povezivanje LinkedIn aktivnosti sa pipeline-om.", "Fields needed to connect LinkedIn activity to pipeline."),
            },
            {
              title: L("Signal Scoring Model", "Signal Scoring Model"),
              placement: L("Implement sekcija", "How to implement section"),
              description: L("Points-based model za prioritizaciju founder-led signala.", "Points-based model for prioritizing founder-led signals."),
            },
            {
              title: L("Revenue Dashboard Mockup", "Revenue Dashboard Mockup"),
              placement: L("Reports sekcija", "Reports section"),
              description: L("Dashboard sa source, topic, signal, pipeline i closed revenue.", "Dashboard showing source, topic, signal, pipeline, and closed revenue."),
            },
            {
              title: L("CRM Automation Flow", "CRM Automation Flow"),
              placement: L("Automation sekcija", "Automation section"),
              description: L("Lead magnet/webinar/ad form → CRM → task → Slack alert → follow-up.", "Lead magnet/webinar/ad form → CRM → task → Slack alert → follow-up."),
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
          title: L("Čeklista Lekcije 10", "Lesson 10 checklist"),
          items: P(
            [
              "Definiši koji Founder-Led Growth signali su CRM-worthy.",
              "Kreiraj pipeline stage-ove od Engaged do Won/Lost/Nurture.",
              "Dodaj polja za source, first touchpoint, signal level, content topic, ICP fit i next action.",
              "Kreiraj tagove za LinkedIn postove, komentare, DM-ove, webinare, ads i lead magnete.",
              "Definiši kada contact postaje deal.",
              "Dodaj follow-up dates za sve „not now“ leadove.",
              "Izgradi nedeljni source report.",
              "Izgradi content topic to pipeline report.",
              "Izgradi webinar influence report.",
              "Izgradi nurture due report.",
              "Kreiraj nedeljni 30-min CRM review.",
              "Automatizuj tek posle manual procesa.",
            ],
            [
              "Define which Founder-Led Growth signals are CRM-worthy.",
              "Create pipeline stages from Engaged to Won/Lost/Nurture.",
              "Add fields for source, first touchpoint, signal level, content topic, ICP fit, and next action.",
              "Create tags for LinkedIn posts, comments, DMs, webinars, ads, and lead magnets.",
              "Define when a contact becomes a deal.",
              "Add follow-up dates for all \"not now\" leads.",
              "Build a weekly source report.",
              "Build a content topic to pipeline report.",
              "Build a webinar influence report.",
              "Build a nurture due report.",
              "Create a weekly 30-minute CRM review.",
              "Automate only after the manual process works.",
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
          title: L("Founder-Led Growth CRM Tracking Template", "Founder-Led Growth CRM Tracking Template"),
          content: L(
            `1. Pipeline stages

Engaged:
Interacted with founder content or asset.

Warm List:
ICP fit + meaningful signal.

Outreach Sent:
Contextual DM or email sent.

Conversation:
Person replied or requested resource.

Qualified:
Fit, pain, and next step confirmed.

Opportunity:
Active sales process started.

Proposal:
Commercial offer sent.

Won:
Deal closed.

Lost:
No fit or lost deal.

Nurture:
Relevant but not ready.

2. Required fields

Lead source:
[LinkedIn / webinar / ads / referral / website / outbound]

First touchpoint:
[founder post / comment / profile view / webinar / ad / lead magnet]

Founder touchpoint:
[post engagement / DM / webinar / comment / profile]

Signal level:
[light / medium / strong]

Content topic:
[ICP / profile / content / outreach / webinar / ads / CRM / signals]

ICP fit:
[high / medium / low]

Buying committee role:
[economic buyer / champion / evaluator / blocker]

Last meaningful interaction:
[date]

Next best action:
[engage / send asset / DM / call / nurture]

Follow-up date:
[date]

Campaign / asset:
[webinar / checklist / playbook / ad]

Pipeline influence:
[LinkedIn content / webinar / ad / outreach]

3. Tags

Channel tags:
LinkedIn, Webinar, Ads, Referral, Website, Outbound

Signal tags:
Commented, Replied, Registered, Attended, CTA Clicked, Downloaded, Profile View

Topic tags:
ICP, Profile, Content, Commenting, Outreach, Webinar, Ads, CRM, Buying Signals

Timing tags:
Now, 30 Days, 60 Days, 90 Days, Not Now

4. Lead scoring

ICP fit high:
+30

Commented on founder post:
+10

Repeat engagement:
+15

Webinar registered:
+10

Webinar attended:
+20

Asked webinar question:
+25

Downloaded checklist:
+10

Replied to DM/email:
+25

Viewed pricing/demo page:
+30

Not now but relevant:
+10

5. Action thresholds

0-29:
Monitor

30-49:
Nurture

50-69:
Send contextual outreach

70-89:
Sales follow-up

90+:
Create opportunity or priority sales task

6. Weekly review questions

- Which LinkedIn activities created new contacts?
- Which content topics created conversations?
- Which signals converted to replies?
- Which webinars created opportunities?
- Which ads influenced pipeline?
- Which nurture leads are due this week?
- Which source created the highest-quality opportunities?
- Which activities should we stop, repeat, or scale?`,
            `1. Pipeline stages

Engaged:
Interacted with founder content or asset.

Warm List:
ICP fit + meaningful signal.

Outreach Sent:
Contextual DM or email sent.

Conversation:
Person replied or requested resource.

Qualified:
Fit, pain, and next step confirmed.

Opportunity:
Active sales process started.

Proposal:
Commercial offer sent.

Won:
Deal closed.

Lost:
No fit or lost deal.

Nurture:
Relevant but not ready.

2. Required fields

Lead source:
[LinkedIn / webinar / ads / referral / website / outbound]

First touchpoint:
[founder post / comment / profile view / webinar / ad / lead magnet]

Founder touchpoint:
[post engagement / DM / webinar / comment / profile]

Signal level:
[light / medium / strong]

Content topic:
[ICP / profile / content / outreach / webinar / ads / CRM / signals]

ICP fit:
[high / medium / low]

Buying committee role:
[economic buyer / champion / evaluator / blocker]

Last meaningful interaction:
[date]

Next best action:
[engage / send asset / DM / call / nurture]

Follow-up date:
[date]

Campaign / asset:
[webinar / checklist / playbook / ad]

Pipeline influence:
[LinkedIn content / webinar / ad / outreach]

3. Tags

Channel tags:
LinkedIn, Webinar, Ads, Referral, Website, Outbound

Signal tags:
Commented, Replied, Registered, Attended, CTA Clicked, Downloaded, Profile View

Topic tags:
ICP, Profile, Content, Commenting, Outreach, Webinar, Ads, CRM, Buying Signals

Timing tags:
Now, 30 Days, 60 Days, 90 Days, Not Now

4. Lead scoring

ICP fit high:
+30

Commented on founder post:
+10

Repeat engagement:
+15

Webinar registered:
+10

Webinar attended:
+20

Asked webinar question:
+25

Downloaded checklist:
+10

Replied to DM/email:
+25

Viewed pricing/demo page:
+30

Not now but relevant:
+10

5. Action thresholds

0-29:
Monitor

30-49:
Nurture

50-69:
Send contextual outreach

70-89:
Sales follow-up

90+:
Create opportunity or priority sales task

6. Weekly review questions

- Which LinkedIn activities created new contacts?
- Which content topics created conversations?
- Which signals converted to replies?
- Which webinars created opportunities?
- Which ads influenced pipeline?
- Which nurture leads are due this week?
- Which source created the highest-quality opportunities?
- Which activities should we stop, repeat, or scale?`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Zašto treba pratiti Founder-Led Growth aktivnost u CRM-u?", "Why should Founder-Led Growth activity be tracked in CRM?"),
      answer: L(
        "LinkedIn komentari, DM-ovi, webinar engagement, ads i outreach odgovori mogu uticati na pipeline. Ako nisu praćeni, tim ne može da vidi koje aktivnosti stvaraju razgovore ili revenue.",
        "LinkedIn comments, DMs, webinar engagement, ads, and outreach replies can influence pipeline. If they are not tracked, the team cannot see which activities create conversations or revenue.",
      ),
    },
    {
      question: L("Da li svaki LinkedIn lajk treba u CRM?", "Should every LinkedIn like go into CRM?"),
      answer: L(
        "Ne. Prati samo signale sa ICP fit-om i smislenim kontekstom. Random lajk nije vredan praćenja. Komentar od high-fit buyer-a ili repeat engagement target account-a jeste.",
        "No. Only track signals that have ICP fit and meaningful context. A random like is not worth tracking. A comment from a high-fit buyer or repeated engagement from a target account is worth tracking.",
      ),
    },
    {
      question: L("Koja CRM polja su najvažnija?", "What CRM fields are most important?"),
      answer: L(
        "Počni sa: lead source, first touchpoint, founder touchpoint, signal level, content topic, ICP fit, next best action, follow-up date, campaign/asset, pipeline influence.",
        "Start with: lead source, first touchpoint, founder touchpoint, signal level, content topic, ICP fit, next best action, follow-up date, campaign/asset, pipeline influence.",
      ),
    },
    {
      question: L("Kada contact treba da postane deal?", "When should a contact become a deal?"),
      answer: L(
        "Ne kreiraj deal prerano. Deal kreiraj kad postoji confirmed ICP fit, pain i real next step, sales call, discovery, proposal ili commercial conversation.",
        "Do not create deals too early. Create a deal when there is confirmed ICP fit, pain, and a real next step, sales call, discovery, proposal, or commercial conversation.",
      ),
    },
    {
      question: L("Kako pratiti LinkedIn uticaj na revenue?", "How do you track LinkedIn influence on revenue?"),
      answer: L(
        "Koristi source, first touchpoint, content topic, campaign/asset i pipeline influence polja. Zatim gradi izveštaje koji pokazuju contacts, conversations, opportunities i closed revenue influenced by LinkedIn activity.",
        "Use source, first touchpoint, content topic, campaign/asset, and pipeline influence fields. Then build reports showing contacts, conversations, opportunities, and closed revenue influenced by LinkedIn activity.",
      ),
    },
    {
      question: L("Koji CRM je najbolji za Founder-Led Growth?", "Which CRM is best for Founder-Led Growth?"),
      answer: L(
        "Za male i srednje timove: HubSpot, Pipedrive, Attio i Folk mogu svi raditi. Alat je manje važan od jasnih stage-ova, polja, tagova, izveštaja i workflow-a.",
        "For small and mid-sized teams: HubSpot, Pipedrive, Attio, and Folk can all work. The tool matters less than whether your stages, fields, tags, reports, and workflows are clear.",
      ),
    },
    {
      question: L("Koja je najveća CRM greška?", "What is the biggest CRM mistake?"),
      answer: L(
        "Korišćenje CRM-a tek posle što neko zakaže call. Founder-Led Growth stvara signale pre toga. CRM treba da hvata relationship momentum pre formalnog sales procesa.",
        "Using CRM only after someone books a call. Founder-Led Growth creates signals before that. The CRM should capture relationship momentum before the formal sales process starts.",
      ),
    },
  ],
  sources: [
    { title: L("HubSpot - Attribution Reporting", "HubSpot - Attribution Reporting"), url: "https://knowledge.hubspot.com/reports/understand-attribution-reporting" },
    { title: L("HubSpot - Create and Edit Properties", "HubSpot - Create and Edit Properties"), url: "https://knowledge.hubspot.com/properties/create-and-edit-properties" },
    { title: L("HubSpot - Create and Customize Deal Pipelines", "HubSpot - Create and Customize Deal Pipelines"), url: "https://knowledge.hubspot.com/object-settings/create-and-customize-deal-pipelines-and-deal-stages" },
    { title: L("Pipedrive - Custom Fields", "Pipedrive - Custom Fields"), url: "https://support.pipedrive.com/en/article/custom-fields" },
    { title: L("Pipedrive - Sales Reports and Insights", "Pipedrive - Sales Reports and Insights"), url: "https://support.pipedrive.com/en/article/insights-reports" },
    { title: L("Pipedrive - Customizable CRM", "Pipedrive - Customizable CRM"), url: "https://www.pipedrive.com/en/products/sales/customizable-crm" },
    { title: L("Salesforce - Campaign Influence Implementation Guide", "Salesforce - Campaign Influence Implementation Guide"), url: "https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/campaign_influence_implementation_guide.pdf" },
    { title: L("Attio - Custom Objects and Relationships", "Attio - Custom Objects and Relationships"), url: "https://attio.com/help/academy/introduction/customizing-objects" },
    { title: L("Attio - Understanding Attributes", "Attio - Understanding Attributes"), url: "https://attio.com/help/reference/attio-101/attios-data-model/Understanding-attributes" },
    { title: L("LinkedIn Sales Solutions - Social Selling", "LinkedIn Sales Solutions - Social Selling"), url: "https://business.linkedin.com/sales-solutions/social-selling" },
    { title: L("LinkedIn Sales Navigator", "LinkedIn Sales Navigator"), url: "https://business.linkedin.com/sell/sales-navigator" },
    { title: L("Make.com", "Make.com"), url: "https://www.make.com/" },
    { title: L("Zapier", "Zapier"), url: "https://zapier.com/" },
  ],
  relatedLessons: {
    previous: {
      slug: "linkedin-ads-thought-leader-ads",
      title: L(
        "Lekcija 9 - Kako koristiti LinkedIn Ads da pojačaš Founder-Led Growth",
        "Lesson 9 - How to Use LinkedIn Ads to Boost Founder-Led Growth",
      ),
    },
    next: {
      slug: "buying-signals-b2b-sales",
      title: L(
        "Lekcija 11 - Šta su buying signali i kako ih koristiti u B2B prodaji",
        "Lesson 11 - What Buying Signals Are and How to Use Them in B2B Sales",
      ),
      note: L(
        "Sledeća lekcija pokazuje kako prepoznati buying signale i koristiti ih u B2B prodaji.",
        "The next lesson shows how to identify buying signals and use them in B2B sales.",
      ),
    },
    related: [
      { slug: "what-founder-led-growth-is", title: L("Lekcija 1 - Šta je Founder-Led Growth", "Lesson 1 - What Founder-Led Growth Is and Why It Works for B2B Companies") },
      { slug: "how-to-define-your-icp", title: L("Lekcija 2 - Kako definisati ICP", "Lesson 2 - How to Define Your ICP for B2B Lead Generation") },
      { slug: "linkedin-commenting-strategy", title: L("Lekcija 6 - LinkedIn commenting strategija", "Lesson 6 - How to Use LinkedIn Commenting for Visibility With Your ICP") },
      { slug: "linkedin-engagement-outreach-list", title: L("Lekcija 7 - LinkedIn engagement u outreach listu", "Lesson 7 - How to Turn LinkedIn Engagement Into an Outreach List") },
      { slug: "webinars-founder-led-growth", title: L("Lekcija 8 - Webinari u Founder-Led Growth-u", "Lesson 8 - How to Use Webinars as Part of Founder-Led Growth") },
      { slug: "inbound-to-outbound-system", title: L("Lekcija 12 - Inbound-to-outbound sistem", "Lesson 12 - How to Build an Inbound-to-Outbound System") },
    ],
  },
  cta: {
    title: L("CRM je mesto gde Founder-Led Growth postaje merljiv", "CRM is where Founder-Led Growth becomes measurable"),
    body: L(
      "LinkedIn aktivnost je korisna samo kad postane company memory. Ako komentari, DM-ovi, webinari, ads i outreach odgovori ostaju van CRM-a, tim će i dalje nagađati. Kad je CRM pravilno podešen, vidiš koja content tema stvara razgovore, koji signali postaju pipeline, koji webinari utiču na deal-ove, koji „not now“ leadovi treba reaktivirati, i koje aktivnosti stvarno povezuju sa revenue. Sledeća lekcija pokazuje kako prepoznati buying signale.",
      "LinkedIn activity is useful only when it becomes company memory. If comments, DMs, webinars, ads, and outreach replies stay outside the CRM, the team will keep guessing. When the CRM is set up properly, you can see which content creates conversations, which signals turn into pipeline, which webinars influence deals, which \"not now\" leads should be reactivated, and which activities actually connect to revenue. The next lesson shows how to identify buying signals.",
    ),
    primaryLabel: L("Nastavi na Lekciju 11", "Continue Lesson 11"),
    secondaryLabel: L("Zakaži konsultaciju", "Book consultation"),
  },
  seoKeywords: P(
    [
      "founder-led growth CRM tracking",
      "CRM pipeline stages",
      "LinkedIn CRM tracking",
      "B2B CRM attribution",
      "founder-led sales CRM",
      "CRM custom fields",
      "pipeline reporting",
      "LinkedIn to CRM workflow",
      "CRM tags LinkedIn leads",
      "HubSpot pipeline tracking",
      "Pipedrive pipeline tracking",
      "CRM revenue attribution",
      "FLG CRM setup",
      "founder CRM tracking",
    ],
    [
      "founder-led growth CRM tracking",
      "CRM pipeline stages",
      "LinkedIn CRM tracking",
      "B2B CRM attribution",
      "founder-led sales CRM",
      "CRM custom fields",
      "pipeline reporting",
      "LinkedIn to CRM workflow",
      "CRM tags for LinkedIn leads",
      "HubSpot pipeline tracking",
      "Pipedrive pipeline tracking",
      "CRM revenue attribution",
      "FLG CRM setup",
      "founder CRM tracking",
    ],
  ),
};
