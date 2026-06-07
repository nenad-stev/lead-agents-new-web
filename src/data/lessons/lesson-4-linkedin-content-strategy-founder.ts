import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("The Best LinkedIn Content Strategy for 2025", "The Best LinkedIn Content Strategy for 2025"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za razumevanje moderne LinkedIn content strategije i B2B lead generation-a kroz content.",
    "Useful for understanding modern LinkedIn content strategy and B2B lead generation through content.",
  ),
  placementNote: L(
    "Pogledaj posle okvira content strategije ili u sekciji video materijala.",
    "Watch after the content strategy framework or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/K2H2KGTbZ08",
  watchUrl: "https://www.youtube.com/watch?v=K2H2KGTbZ08",
};

const video2 = {
  title: L("The Only LinkedIn Content Strategy You Need in 2025", "The Only LinkedIn Content Strategy You Need in 2025"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Relevantno za founder-e koji žele jednostavnu content strategiju koja može da generiše prihod, ne samo impresije.",
    "Relevant for founders who want a simple content strategy that can generate revenue, not just impressions.",
  ),
  placementNote: L(
    "Pogledaj posle koraka za nedeljni ritam.",
    "Watch after the weekly rhythm step.",
  ),
  embedUrl: "https://www.youtube.com/embed/vcFh5-fynHc",
  watchUrl: "https://www.youtube.com/watch?v=vcFh5-fynHc",
};

const video3 = {
  title: L("LinkedIn Content Strategy Framework 2026 - How to Get Started", "LinkedIn Content Strategy Framework 2026 - How to Get Started"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za pretvaranje LinkedIn-a u strukturisan content i lead generation kanal.",
    "Useful for turning LinkedIn into a structured content and lead generation channel.",
  ),
  placementNote: L(
    "Pogledaj posle framework sekcije.",
    "Watch after the framework section.",
  ),
  embedUrl: "https://www.youtube.com/embed/2HSavr17yq0",
  watchUrl: "https://www.youtube.com/watch?v=2HSavr17yq0",
};

const video4 = {
  title: L("AuthoredUp Guided Tour", "AuthoredUp Guided Tour"),
  channel: L("AuthoredUp", "AuthoredUp"),
  description: L(
    "Pokazuje kako AuthoredUp podržava pisanje, formatiranje i upravljanje LinkedIn content-om.",
    "Shows how AuthoredUp can support writing, formatting, and managing LinkedIn content.",
  ),
  placementNote: L(
    "Pogledaj posle AuthoredUp u tool stack-u ili u sekciji alata.",
    "Watch after AuthoredUp in the tool stack or tools section.",
  ),
  embedUrl: "https://www.youtube.com/embed/_YwAMi9JuSg",
  watchUrl: "https://www.youtube.com/watch?v=_YwAMi9JuSg",
};

const video5 = {
  title: L("How To Create a B2B Content Strategy that ACTUALLY Converts", "How To Create a B2B Content Strategy that ACTUALLY Converts"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Podržava širi B2B content strategy deo i pomaže da misliš dalje od nasumičnog postovanja.",
    "Supports the broader B2B content strategy section and helps you think beyond random posting.",
  ),
  placementNote: L(
    "Pogledaj posle proof sekcije ili u video materijalima.",
    "Watch after the proof section or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/QLsrenrNDe0",
  watchUrl: "https://www.youtube.com/watch?v=QLsrenrNDe0",
};

export const lesson4RichContent: RichLessonContent = {
  meta: {
    stage: L("Content Engine", "Content Engine"),
    readingTime: L("18-22 min", "18-22 min"),
    difficulty: L("Početnik do srednjeg nivoa", "Beginner to intermediate"),
    outcome: L(
      "Izgradićeš content sistem zasnovan na intervjuima (ne na dnevnom pisanju founder-a) koji podiže reply rate na outreach i vodi ka sastancima.",
      "Build an interview-based content system (not daily founder writing) that raises outreach reply rate and leads to meetings.",
    ),
    recommendedTools: L(
      "Notion, Google Sheets, AuthoredUp, Taplio, Canva, Riverside, Descript, LinkedIn Analytics, HubSpot CRM, Pipedrive",
      "Notion, Google Sheets, AuthoredUp, Taplio, Canva, Riverside, Descript, LinkedIn Analytics, HubSpot CRM, Pipedrive",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 4", "Lesson 4"),
    title: L(
      "Kako napraviti LinkedIn content strategiju za founder-a",
      "How to Build a LinkedIn Content Strategy for a Founder",
    ),
    paragraphs: P(
      [
        "Većina founder-a ne treba više content ideja.",
        "Treba im content sistem.",
        "Content ideje su lake. Možeš da pitaš AI za 100 LinkedIn post ideja za 30 sekundi. To nije problem.",
        "Problem je što je većina founder content-a nasumična.",
        "Jedne nedelje lična priča. Sledeće generičan sales savet. Zatim product update. Zatim „5 lekcija koje sam naučio“. Zatim ništa tri nedelje jer je founder zauzet.",
        "Zato founder content pada. Ne zato što LinkedIn ne radi. Zato što content nema strategiju.",
        "Ne ponavlja istu market poruku. Ne edukuje isti ICP. Ne povezuje se sa profilom. Ne stvara outreach kontekst. Ne hrani webinare. Ne stvara CRM signale. Ne gradi jasan point of view vremenom.",
        "U Lead Agents FLG-u, content dolazi posle ICP-a, profila i cold outreach-a. Founder retko ima vreme da piše autentično svaki dan, zato radimo intervjue u stilu podcasta: snimak (Riverside), transkript (Descript), kratki klipovi i carousel (Canva).",
        "Cilj nije viralnost. Cilj je poverenje koje podiže acceptance rate i reply rate na outreach. Kada ICP već vidi founder-a kroz post, poruka u inbox-u nije hladna.",
      ],
      [
        "Most founders do not need more content ideas.",
        "They need a content system.",
        "Content ideas are easy. You can ask AI for 100 LinkedIn post ideas in 30 seconds. That is not the problem.",
        "The problem is that most founder content is random.",
        "One week it is a personal story. The next week it is a generic sales tip. Then a product update. Then a \"5 lessons I learned\" post. Then nothing for three weeks because the founder got busy.",
        "This is why founder content fails. Not because LinkedIn does not work. Because the content has no strategy.",
        "It does not repeat the same market message. It does not educate the same ICP. It does not connect to the profile. It does not create outreach context. It does not feed webinars. It does not create CRM signals. It does not build a clear point of view over time.",
        "In Lead Agents FLG, content comes after ICP, profile, and cold outreach. Founders rarely have time to write authentically every day, so we run podcast-style interviews: recording (Riverside), transcript (Descript), short clips and carousels (Canva).",
        "The goal is not virality. The goal is trust that raises acceptance rate and outreach reply rate. When the ICP already sees the founder through posts, the inbox message is not cold.",
      ],
    ),
    callout: L(
      "Founder content nije brainstorm ideja. To je content engine koji hrani pipeline.",
      "Founder content is not a brainstorm of ideas. It is a content engine that feeds pipeline.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vs-random", title: L("Strategija vs nasumično postovanje", "Founder content strategy vs random posting") },
    { id: "content-framework", title: L("Okvir content strategije", "Content strategy framework") },
    { id: "interview-system", title: L("Intervju content sistem", "Interview-based content system") },
    { id: "strategy-steps", title: L("Korak po korak strategija", "Step-by-step content strategy framework") },
    { id: "story", title: L("Mesto u Lead Agents sistemu", "Place in the Lead Agents system") },
    { id: "proof", title: L("Dokaz i istraživanja", "Proof / trust section") },
    { id: "implement", title: L("Kako implementirati", "How to implement") },
    { id: "tools", title: L("Idealni stack alata", "Ideal tool stack") },
    { id: "workflow", title: L("Primer workflow-a", "Workflow example") },
    { id: "videos", title: L("Video materijali", "YouTube videos") },
    { id: "visuals", title: L("Predlozi vizuala", "Visual elements") },
    { id: "checklist", title: L("Čeklista", "Checklist") },
    { id: "template", title: L("Šablon content strategije", "Template / swipe file") },
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
              "definisati content pilare na osnovu ICP bola;",
              "izgraditi founder content strategiju koja podržava pipeline, ne vanity metrike;",
              "izabrati ponovljive formate koji ne sagorevaju founder-a;",
              "kreirati nedeljni publishing ritam;",
              "balansirati thought leadership, taktične postove, dokaz i soft CTA-ove;",
              "pretvoriti buyer pitanja u content teme;",
              "repurpose-ovati founder znanje u postove, carousel-e, video, webinare i newsletter-e;",
              "povezati LinkedIn content sa outreach-om i CRM-om;",
              "meriti kvalitet content-a izvan lajkova i impresija.",
            ],
            [
              "define content pillars based on ICP pain;",
              "build a founder content strategy that supports pipeline, not vanity metrics;",
              "choose repeatable formats that do not burn out the founder;",
              "create a weekly publishing rhythm;",
              "balance thought leadership, tactical posts, proof, and soft CTAs;",
              "turn buyer questions into content topics;",
              "repurpose founder knowledge into posts, carousels, videos, webinars, and newsletters;",
              "connect LinkedIn content to outreach and CRM;",
              "measure content quality beyond likes and impressions.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Content kalendar i planiranje, founder content sistem, ne nasumične ideje",
            "Content calendar and planning, a founder content system, not random ideas",
          ),
          caption: L(
            "Strategija znači ponavljanje pravih poruka u pravom ritmu, ne jurenje inspiracije.",
            "Strategy means repeating the right messages on the right rhythm, not chasing inspiration.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Content engine u Founder-Led Growth sistemu", "Content engine in the Founder-Led Growth system"),
          subtitle: L(
            "Outreach povezuje prvo. Content gradi poverenje. Signali i CRM pretvaraju engagement u pipeline.",
            "Outreach connects first. Content builds trust. Signals and CRM turn engagement into pipeline.",
          ),
          stages: [
            L("ICP bol", "ICP pain"),
            L("Founder POV", "Founder POV"),
            L("Post", "Post"),
            L("Komentar", "Comment"),
            L("Profil", "Profile"),
            L("DM", "DM"),
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
              "Founder-Led Growth zavisi od market edukacije. Većina B2B kupaca nije spremna da kupi danas, ali i dalje uči. Primećuju probleme. Porede pristupe. Pitaju kolege. Gledaju ko razume tržište. Grade poverenje pre nego što pričaju sa sales-om.",
              "Founder content je način da uđeš u taj proces. LinkedIn B2B content marketing smernice kažu da B2B content treba da pomaže ljudima da reše poslovne probleme i rade posao bolje, dok ih vodi ka brendu i rešenju. Strategija treba da počne od publike, konkurenata, ciljeva, merenja, customer journey-a i izgradnje odnosa.",
              "Edelman i LinkedIn 2025 B2B Thought Leadership Impact Report kaže da thought leadership nije samo content marketing, već strateški alat za gradnju poverenja, usklađivanje i otvaranje vrata gde tradicionalna prodaja može da padne.",
              "To je uloga founder content-a: daje kupcima jezik; čini problem vidljivim; pokazuje cenu neakcije; uči tržište kako da misli; čini outreach nastavkom, ne prekidom. Ali strategija mora biti održiva. Ako founder sagori posle 3 nedelje, to nije strategija, to je kampanja.",
            ],
            [
              "Founder-Led Growth depends on market education. Most B2B buyers are not ready to buy today, but they are still learning. They are noticing problems. They are comparing approaches. They are asking peers. They are watching who understands the market. They are building trust before they speak to sales.",
              "Your founder content is how you enter that process. LinkedIn's B2B content marketing guidance says B2B content should help people solve business problems and do their jobs better while guiding them toward your brand and solution. Strategy should start with audience, competitors, objectives, measurement, customer journey, and relationship-building.",
              "Edelman and LinkedIn's 2025 B2B Thought Leadership Impact Report says thought leadership is not just content marketing. It is a strategic tool for building trust, driving alignment, and opening doors where traditional sales may fall short.",
              "That is the role of founder content. It gives buyers language. It makes the problem visible. It shows the cost of inaction. It teaches the market how to think. It makes outreach feel like a continuation, not an interruption. But the strategy has to be sustainable. If the founder burns out after 3 weeks, it is not a strategy. It is a campaign.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Kako kupac uči pre nego što kupi", "How buyers learn before they buy"),
          subtitle: L(
            "Founder content ulazi u proces odlučivanja dok sales još nije u igri.",
            "Founder content enters the decision process before sales is even in the room.",
          ),
          stages: [
            L("Problem", "Problem"),
            L("Edukacija", "Education"),
            L("POV", "POV"),
            L("Poverenje", "Trust"),
            L("Signal", "Signal"),
            L("Razgovor", "Conversation"),
          ],
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("4", "4"),
              label: L("Posla content-a", "Jobs of content"),
              description: L(
                "Edukuj ICP · Gradi POV · Stvori kontekst · Generiši signale.",
                "Educate ICP · Build POV · Create context · Generate signals.",
              ),
            },
            {
              value: L("3-5", "3-5"),
              label: L("Pilari", "Pillars"),
              description: L(
                "Ponavljajuće topic area-e umesto nasumičnih tema.",
                "Recurring topic areas instead of random themes.",
              ),
            },
            {
              value: L("2+", "2+"),
              label: L("Posta / nedelja", "Posts / week"),
              description: L(
                "Realističan početak, bolje konzistentno nego intenzivno pa tišina.",
                "A realistic start, consistent beats intense then silent.",
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
            [
              "Founder LinkedIn content strategija treba da radi četiri posla: 1) Edukuje ICP. 2) Gradi poverenje u founder pogled na problem. 3) Radi paralelno sa outreach-om, ne umesto njega. 4) Generiše signale za pipeline sistem.",
              "Cilj nije „biti aktivan na LinkedIn-u“. Cilj je postati poznat po problemu koji tvoja kompanija rešava. Content ne treba da bude nasumičan, treba da ponavlja iste core ideje iz različnih uglova dok tržište ne počne da te povezuje sa problemom, POV-om i rešenjem.",
              "Većina founder-a prestane prerano jer im ponavljanje deluje dosadno. Ali ponavljanje je način na koji se tržište seća. Umoran si od svoje poruke pre nego što je kupac uopšte primetio.",
            ],
            [
              "A founder LinkedIn content strategy should do four jobs: 1) Educate the ICP. 2) Build trust in the founder's point of view. 3) Run in parallel with outreach, not instead of it. 4) Generate signals for the pipeline system.",
              "The goal is not to \"be active on LinkedIn.\" The goal is to become known for the problem your company solves. Your content should not be random. It should repeat the same core ideas from different angles until your market starts associating you with the problem, the point of view, and the solution.",
              "Most founders stop too early because repetition feels boring to them. But repetition is how the market remembers. You are tired of your message before your buyer has even noticed it.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Founder content nije da svaki dan kažeš nešto novo. Već da konzistentno kažeš prave stvari.",
            "Founder content is not about saying something new every day. It is about saying the right things consistently.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "vs-random",
      title: L("Founder content strategija vs nasumično postovanje", "Founder content strategy vs random posting"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Nasumičan content može da dobije pažnju. Strateški content stvara sećanje. To sećanje olakšava prodaju.",
            ],
            [
              "Random content can get attention. Strategic content creates memory. That memory makes sales easier.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Nasumično postovanje", "Random posting"),
              subtitle: L("Inspiracija i trendovi", "Inspiration and trends"),
              variant: "muted",
              items: P(
                [
                  "Postuje kad „dođe ideja“",
                  "Juri viralne formate",
                  "Meri lajkove i impresije",
                  "Nema veze sa ICP-om",
                  "Burnout posle 2-3 nedelje",
                ],
                [
                  "Posts when an idea \"hits\"",
                  "Chases viral formats",
                  "Measures likes and impressions",
                  "No connection to ICP",
                  "Burnout after 2-3 weeks",
                ],
              ),
            },
            {
              title: L("Content strategija", "Content strategy"),
              subtitle: L("Sistem i ponavljanje", "System and repetition"),
              variant: "accent",
              items: P(
                [
                  "Nedeljni ritam + pilari",
                  "Ponavlja founder POV",
                  "Meri ICP engagement i DM-ove",
                  "Hrani profil, outreach, CRM",
                  "Održivo 6+ meseci",
                ],
                [
                  "Weekly rhythm + pillars",
                  "Repeats founder POV",
                  "Measures ICP engagement and DMs",
                  "Feeds profile, outreach, CRM",
                  "Sustainable for 6+ months",
                ],
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Nasumično vs Founder-Led Growth content", "Random posting vs Founder-Led Growth content strategy"),
          headers: H(
            ["Nasumično founder postovanje", "Founder-Led Growth content strategija"],
            ["Random founder posting", "Founder-Led Growth content strategy"],
          ),
          rows: [
            { cells: [L("Postuje kad dođe inspiracija", "Posts when inspiration hits"), L("Koristi nedeljni operativni ritam", "Uses a weekly operating rhythm")] },
            { cells: [L("Juri trendove", "Chases trends"), L("Ponavlja founder market POV", "Repeats the founder's market POV")] },
            { cells: [L("Priča o mnogo tema", "Talks about many topics"), L("Fokus na ICP bol i buying triggere", "Focuses on ICP pain and buying triggers")] },
            { cells: [L("Meri lajkove", "Measures likes"), L("Meri profile view-ove, ICP engagement, DM-ove, webinar registracije i pipeline", "Measures profile visits, ICP engagement, DMs, webinar registrations, and pipeline")] },
            { cells: [L("Privlači širok engagement", "Attracts broad engagement"), L("Privlači relevantne kupce", "Attracts relevant buyers")] },
            { cells: [L("Nema CTA logiku", "Has no CTA logic"), L("Koristi soft CTA-ove po buyer stage-u", "Uses soft CTAs based on buyer stage")] },
            { cells: [L("Stvara pritisak na founder-a", "Creates pressure on founder"), L("Koristi repurposing i ponovljive formate", "Uses repurposing and repeatable formats")] },
            { cells: [L("Deluje kao personal branding", "Feels like personal branding"), L("Radi kao deo pipeline sistema", "Works as part of the pipeline system")] },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "content-framework",
      title: L("Okvir Founder Content strategije", "The Founder Content Strategy Framework"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Founder piše LinkedIn post, strategija, ne nasumičan brainstorm",
            "Founder writing a LinkedIn post, strategy, not a random brainstorm",
          ),
          caption: L(
            "Okvir pretvara ekspertizu u ponovljiv engine: bol → POV → pilari → formati → ritam → signali.",
            "The framework turns expertise into a repeatable engine: pain → POV → pillars → formats → rhythm → signals.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "framework-intro",
          title: L(
            "ICP Pain → Founder POV → Content Pillars → Repeatable Formats → Weekly Rhythm → Pipeline Signals",
            "ICP Pain → Founder POV → Content Pillars → Repeatable Formats → Weekly Rhythm → Pipeline Signals",
          ),
          description: L(
            "Ovo je content sistem, ne brainstorm, ne lista ideja, već ponovljivi engine.",
            "This is the content system. Not a brainstorm. Not a list of ideas. A repeatable engine.",
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Founder Content Strategy Framework", "Founder Content Strategy Framework"),
          subtitle: L(
            "Svaki korak gradi na prethodnom, preskakanje ICP bola vodi do vague content-a.",
            "Each step builds on the last, skipping ICP pain leads to vague content.",
          ),
          stages: [
            L("ICP Pain", "ICP Pain"),
            L("Founder POV", "Founder POV"),
            L("Pilari", "Pillars"),
            L("Formati", "Formats"),
            L("Ritam", "Rhythm"),
            L("Signali", "Signals"),
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("ICP Pain", "ICP Pain"),
              whatToDo: L(
                "Kreni od problema koje tvoj kupac već oseća.",
                "Start with the problems your buyer already feels.",
              ),
              whyItMatters: L(
                "Founder content najbolje radi kada imenuje stvarni bol kupca pre nego što zna tvoje rešenje.",
                "Founder content works best when it names the buyer's real-world pain before they know your solution exists.",
              ),
              example: L(
                "Bol nije „treba im LinkedIn content“. Bol je: „Pipeline zavisi previše od referenci i founder mreže.“",
                "The pain is not \"they need LinkedIn content.\" The pain is: \"Pipeline depends too much on referrals and the founder network.\"",
              ),
              commonMistake: L(
                "Počinjanje od „šta da postujem?“ umesto „šta moj kupac treba da razume?“",
                "Starting with \"What should I post?\" instead of \"What does my buyer need to understand?\"",
              ),
              tryThis: L(
                "Napiši 20 ICP bolova: „Naš ICP se bori sa [problem], što uzrokuje [poslovni trošak].“",
                "Write 20 buyer pains: \"Our ICP struggles with [problem], which causes [business cost].\"",
              ),
              highlight: L(
                "Ako je bol vague, content će biti vague.",
                "If the pain is vague, the content will be vague.",
              ),
            },
            {
              step: 2,
              title: L("Founder POV", "Founder POV"),
              whatToDo: L(
                "Definiši šta founder veruje, oštrije, jasnije ili korisnije od očiglednog saveta.",
                "Define what the founder believes that is sharper, clearer, or more useful than the obvious advice.",
              ),
              whyItMatters: L(
                "Strategija bez POV-a postaje generičan savet koji se lako ignoriše.",
                "A content strategy without a POV becomes advice that is easy to ignore.",
              ),
              example: L(
                "„Cold outreach ne pada zbog copy-ja. Pada jer kupci nemaju kontekst.“ ili „CRM nije admin. To je pipeline memorija.“",
                "\"Cold outreach does not fail because of copy. It fails because buyers have no context.\" or \"CRM is not admin. It is pipeline memory.\"",
              ),
              commonMistake: L(
                "Postovanje neutralnih saveta sa kojima se niko ne slaže ni ne slaže.",
                "Posting neutral tips that nobody disagrees with.",
              ),
              tryThis: L(
                "Za svaki bol napiši: „Većina firmi misli [uobičajeno verovanje]. Mi verujemo [oštrije verovanje].“",
                "For each buyer pain, write: \"Most companies think [common belief]. We believe [sharper belief].\"",
              ),
              highlight: L(
                "Founder POV je ono što čini content nezaboravnim.",
                "The founder's POV is what makes the content memorable.",
              ),
            },
            {
              step: 3,
              title: L("Content Pillars", "Content Pillars"),
              whatToDo: L(
                "Pretvori bol i POV u 3-5 ponavljajućih topic area-a.",
                "Turn the pain and POV into 3-5 recurring topic areas.",
              ),
              whyItMatters: L(
                "Pilari sprečavaju nasumično postovanje i smanjuju stres planiranja.",
                "Pillars prevent random posting and reduce content planning stress.",
              ),
              example: L(
                "Problem education, Founder POV, Practical breakdowns, Proof / story, Buying criteria.",
                "Problem education, Founder POV, Practical breakdowns, Proof / story, Buying criteria.",
              ),
              commonMistake: L(
                "Pilari oko usluga (LinkedIn, Outreach, CRM) umesto buyer problema.",
                "Creating pillars around your services instead of buyer problems.",
              ),
              tryThis: L(
                "Izaberi 4 pilara i napiši 10 post ideja za svaki, to je 40 ideja bez inspiracije.",
                "Choose 4 pillars and write 10 post ideas for each, that gives you 40 ideas without chasing inspiration.",
              ),
              highlight: L(
                "Pilari su filter za svaku content odluku.",
                "Pillars are the filter for every content decision.",
              ),
            },
            {
              step: 4,
              title: L("Repeatable Formats", "Repeatable Formats"),
              whatToDo: L(
                "Koristi mali set formata koje founder može da proizvodi svake nedelje bez prazne stranice.",
                "Use a small set of post formats the founder can produce every week without starting from zero.",
              ),
              whyItMatters: L(
                "Burnout se dešava kada svaki post deluje kao novi projekat.",
                "Burnout happens when every post feels like a blank page.",
              ),
              example: L(
                "Problem → Reframe → Action, Mistake breakdown, Mini-framework, Story lesson, Checklist, Contrarian POV.",
                "Problem → Reframe → Action, Mistake breakdown, Mini-framework, Story lesson, Checklist, Contrarian POV.",
              ),
              commonMistake: L(
                "Izmišljanje nove strukture svaki put.",
                "Trying to invent a new structure every time.",
              ),
              tryThis: L(
                "Izaberi 5 formata i rotiraj ih 30 dana.",
                "Pick 5 formats and rotate them for 30 days.",
              ),
              highlight: L(
                "Ograničenja čine founder content lakšim, ne slabijim.",
                "Constraints make founder content easier, not weaker.",
              ),
            },
            {
              step: 5,
              title: L("Weekly Rhythm", "Weekly Rhythm"),
              whatToDo: L(
                "Definiši kadencu koju founder stvarno može da održi.",
                "Create a realistic cadence that fits the founder's schedule.",
              ),
              whyItMatters: L(
                "Konzistentnost pobedi intenzitet. Postovanje svaki dan dve nedelje pa nestajanje ne gradi poverenje.",
                "Consistency beats intensity. Posting every day for two weeks and disappearing for a month does not build trust.",
              ),
              example: L(
                "Pon: problem education. Sre/Čet: ICP komentari. Sre: founder POV. Pet: practical / proof. Nedeljno: soft CTA. Mesečno: deep asset.",
                "Mon: problem education. Tue/Thu: ICP comments. Wed: founder POV. Fri: practical / proof. Weekly: soft CTA. Monthly: deep asset.",
              ),
              commonMistake: L(
                "Kadenca zasnovana na ambiciji umesto realnosti.",
                "Setting a cadence based on ambition instead of reality.",
              ),
              tryThis: L(
                "Počni sa 2 posta nedeljno i 10 komentara po radnom danu. Dodaj više tek kad sistem postane lak.",
                "Start with 2 posts per week and 10 comments per weekday. Add more only when the system becomes easy.",
              ),
              highlight: L(
                "Najbolja kadenca je ona koju founder može da drži 6 meseci.",
                "The best content cadence is the one the founder can keep for 6 months.",
              ),
            },
            {
              step: 6,
              title: L("Pipeline Signals", "Pipeline Signals"),
              whatToDo: L(
                "Prati koji postovi stvaraju ICP engagement, DM-ove, profile view-ove, webinar interes i sales razgovore.",
                "Track which posts create ICP engagement, DMs, profile views, webinar interest, and sales conversations.",
              ),
              whyItMatters: L(
                "Content strategija nije kompletna dok ne kaže sales-u šta da radi sledeće.",
                "The content strategy is not complete until it tells sales what to do next.",
              ),
              example: L(
                "Taguj engagement: ICP, partner, peer, irrelevant. Optimizuj za ICP.",
                "Tag engagement: ICP, partner, peer, irrelevant. Optimize for ICP.",
              ),
              commonMistake: L(
                "Suditi postove samo po impresijama i lajkovima.",
                "Judging posts only by impressions and likes.",
              ),
              tryThis: L(
                "Nakon svakog posta zabeleži: ICP komentari, DM-ovi, profile view-ovi, webinar signali, CRM kontakti.",
                "After each post, record: ICP comments, DMs, profile views, webinar signals, CRM contacts.",
              ),
              highlight: L(
                "Cilj nije više engagement-a. Cilj je bolji engagement.",
                "The goal is not more engagement. The goal is better engagement.",
              ),
            },
          ],
        },
        { type: "video", video: video3 },
      ],
    },
    {
      type: "section",
      id: "interview-system",
      title: L("Intervju content sistem", "Interview-based content system"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako founder nema kapacitet za dnevno pisanje, koristi intervju sistem od 60-120 minuta nedeljno. Jedan kvalitetan razgovor može da nahrani ceo content ciklus bez gubitka stručnosti.",
              "Praksa: vodi strukturisan intervju, izvuci transkript, zatim od istog materijala gradi postove, klipove, newsletter i outreach uglove.",
            ],
            [
              "If the founder cannot write daily, run a 60-120 minute weekly interview system. One high-quality conversation can feed the full content cycle without losing expertise.",
              "Practical flow: run a structured interview, create the transcript, then turn that single source into posts, clips, newsletter sections, and outreach angles.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L(
            "Intervju → transkript → ideje → format → edit → objava → analiza → repurpose",
            "Interview → transcript → ideas → format → edit → publish → analyze → repurpose",
          ),
          subtitle: L(
            "Jedan razgovor postaje više asset-a kroz ponovljiv operativni proces.",
            "One conversation becomes multiple assets through a repeatable operating process.",
          ),
          stages: [
            L("Intervju", "Interview"),
            L("Transkript", "Transcript"),
            L("Ideje", "Ideas"),
            L("Format", "Format"),
            L("Edit", "Edit"),
            L("Objava", "Publish"),
            L("Analiza", "Analyze"),
            L("Repurpose", "Repurpose"),
          ],
        },
        {
          type: "bullets",
          items: P(
            [
              "LinkedIn edukativni postovi (problem, reframe, framework);",
              "short-form video klipovi sa ključnim momentima;",
              "carousel sa koracima ili checklist-om;",
              "newsletter sekcija sa dubljim objašnjenjem;",
              "webinar tema i struktura sesije;",
              "outreach opener i follow-up reference;",
              "CRM tagovi po temi i signalima zainteresovanosti.",
            ],
            [
              "LinkedIn educational posts (problem, reframe, framework);",
              "short-form video clips with key moments;",
              "carousel assets with steps or checklists;",
              "newsletter sections with deeper explanation;",
              "webinar topic and session structure;",
              "outreach opener and follow-up references;",
              "CRM tags by topic and engagement signal.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "AI koristi za ekstrakciju i draft, ali finalni ton mora ostati founder-ov. Cilj je ubrzanje produkcije, ne gubitak autentičnog glasa.",
            "Use AI for extraction and first drafts, but keep the founder voice in the final output. The goal is faster production, not loss of authenticity.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "strategy-steps",
      title: L("Korak po korak okvir content strategije", "Step-by-step content strategy framework"),
      blocks: [
        {
          type: "zone-cards",
          title: L("5 content pilara, šta objavljujes i zašto", "5 content pillars, what you publish and why"),
          subtitle: L(
            "Svaki pilar ima jedan posao u market edukaciji. Rotiraj ih, ne mešaj nasumično.",
            "Each pillar has one job in market education. Rotate them, do not mix randomly.",
          ),
          cards: [
            {
              zone: L("Problem education", "Problem education"),
              eyebrow: L("Učini bol vidljivim", "Make pain visible"),
              job: L("Kupac mora da oseti: „Da, ovo je moj problem.“", "Buyer must feel: \"Yes, this is my problem.\""),
              doThis: L("Imenuj stvarni poslovni trošak vague strategija.", "Name the real business cost of vague strategies."),
              avoid: L("Generički saveti tipa „postuj konzistentno“.", "Generic advice like \"post consistently.\""),
            },
            {
              zone: L("Founder POV", "Founder POV"),
              eyebrow: L("Kontrast", "Contrast"),
              job: L("Uči tržište kako da misli o problemu.", "Teach the market how to think about the problem."),
              doThis: L("„Većina firmi misli X. Mi verujemo Y.“", "\"Most companies think X. We believe Y.\""),
              avoid: L("Neutralni saveti sa kojima se svi slažu.", "Neutral tips everyone agrees with."),
            },
            {
              zone: L("Practical breakdown", "Practical breakdown"),
              eyebrow: L("Kako", "How"),
              job: L("Pokaži jedan deo sistema koji kupac može da primeni.", "Show one part of the system the buyer can apply."),
              doThis: L("Mini-framework, checklist, 3 koraka.", "Mini-framework, checklist, 3 steps."),
              avoid: L("Lista alata bez konteksta i outcome-a.", "Tool lists without context and outcomes."),
            },
            {
              zone: L("Proof / story", "Proof / story"),
              eyebrow: L("Dokaz", "Proof"),
              job: L("Pokaži da sistem radi u stvarnosti.", "Show the system works in the real world."),
              doThis: L("Case study, webinar rezultat, pre/posle.", "Case study, webinar result, before/after."),
              avoid: L("Humble brag bez buyer lekcije.", "Humble brag with no buyer lesson."),
            },
            {
              zone: L("Buying criteria", "Buying criteria"),
              eyebrow: L("Odluka", "Decision"),
              job: L("Pomozi kupcu da donese bolju odluku pre kupovine.", "Help the buyer make a better decision before buying."),
              doThis: L("„Pre nego što angažuješ X, proveri ova 4 stvari.“", "\"Before you hire X, check these 4 things.\""),
              avoid: L("Hard pitch u svakom postu.", "Hard pitch in every post."),
            },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Kreni od ICP bola, ne od content ideja", "Start from ICP pain, not content ideas"),
              whatToDo: L(
                "Nabroj probleme o kojima ICP priča pre nego što zna tvoje rešenje.",
                "List the problems your ICP talks about before they know your solution exists.",
              ),
              whyItMatters: L(
                "Founder content najbolje radi kada imenuje stvarni bol kupca.",
                "Founder content works best when it names the buyer's real-world pain.",
              ),
              example: L(
                "Ako je ICP B2B SaaS founder sa nepredvidivim pipeline-om, bol nije „treba im LinkedIn content“. Bol je: „Pipeline zavisi previše od referenci i founder mreže.“",
                "If your ICP is B2B SaaS founders with inconsistent pipeline, the pain is not \"They need LinkedIn content.\" The pain is: \"Pipeline depends too much on referrals and the founder network.\"",
              ),
              commonMistake: L(
                "Počinjanje sa „Šta da postujem?“ umesto „Šta moj kupac treba da razume?“",
                "Starting with \"What should I post?\" instead of \"What does my buyer need to understand?\"",
              ),
              tryThis: L(
                "Napiši 20 bolova: „Naš ICP se bori sa [problem], što uzrokuje [poslovni trošak].“ Primer: „Naš ICP se bori sa slabim outbound reply rate-om, što uzrokuje nepredvidiv pipeline.“",
                "Write 20 buyer pains: \"Our ICP struggles with [problem], which causes [business cost].\" Example: \"Our ICP struggles with low outbound reply rates, which causes unpredictable pipeline.\"",
              ),
              highlight: L(
                "Ako je bol vague, content će biti vague.",
                "If the pain is vague, the content will be vague.",
              ),
            },
            {
              step: 2,
              title: L("Definiši founder point of view", "Define the founder's point of view"),
              whatToDo: L(
                "Kreiraj 5-10 uverenja za koja founder želi da bude poznat.",
                "Create 5-10 beliefs the founder wants to be known for.",
              ),
              whyItMatters: L(
                "Strategija bez POV-a postaje savet koji se lako ignoriše. POV stvara kontrast.",
                "A content strategy without a POV becomes advice that is easy to ignore. A point of view creates contrast.",
              ),
              example: L(
                "Cold outreach pada bez konteksta. Profil nije CV. Founder ekspertiza ne treba da ostane u sales call-ovima. Like nije lead. Webinar tema dolazi iz ponavljanog buyer bola.",
                "Cold outreach fails without context. A founder profile is not a CV. Founder expertise should not stay trapped in sales calls. A like is not a lead. Webinar topics should come from repeated buyer pain.",
              ),
              commonMistake: L(
                "Postovanje neutralnih saveta sa kojima se niko ne slaže.",
                "Posting neutral tips that nobody disagrees with.",
              ),
              tryThis: L(
                "Za svaki bol: „Većina firmi misli [uobičajeno verovanje]. Mi verujemo [oštrije verovanje].“",
                "For each buyer pain: \"Most companies think [common belief]. We believe [sharper belief].\"",
              ),
              highlight: L(
                "Founder POV je ono što čini content nezaboravnim.",
                "The founder's POV is what makes the content memorable.",
              ),
            },
            {
              step: 3,
              title: L("Izgradi 3-5 content pilara", "Build 3-5 content pillars"),
              whatToDo: L(
                "Pretvori ICP bolove i founder POV u ponavljajuće pilare.",
                "Turn ICP pains and founder POVs into recurring pillars.",
              ),
              whyItMatters: L(
                "Pilari sprečavaju nasumično postovanje i smanjuju stres planiranja.",
                "Pillars prevent random posting and reduce content planning stress.",
              ),
              example: L(
                "Problem education: „Tvoj outbound problem verovatno nije copy.“ Founder POV: „Pokreni outreach i content zajedno, ne čekaj jedan na drugi.“",
                "Problem education: \"Your outbound problem is probably not copy.\" Founder POV: \"Don't start with outreach. Start with context.\"",
              ),
              commonMistake: L(
                "Pilari oko usluga (LinkedIn, Outreach, CRM) umesto buyer problema.",
                "Creating pillars around your services instead of buyer problems.",
              ),
              tryThis: L(
                "Izaberi 4 pilara i napiši 10 post ideja za svaki.",
                "Choose 4 pillars and write 10 post ideas for each.",
              ),
              highlight: L(
                "40 ideja bez jurenja inspiracije.",
                "40 ideas without chasing inspiration.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Preporučeni founder-led content pilari", "Recommended founder-led content pillars"),
          headers: H(["Pilar", "Svrha", "Primer teme"], ["Pillar", "Purpose", "Example topic"]),
          rows: [
            { cells: [L("Problem education", "Problem education"), L("Pomaže kupcu da razume šta je pokvareno", "Help buyers understand what is broken"), L("„Tvoj outbound problem verovatno nije copy.“", "\"Your outbound problem is probably not copy.\"")] },
            { cells: [L("Founder POV", "Founder POV"), L("Uči tržište kako misliš", "Teach the market how you think"), L("„Outreach širi mrežu, content gradi poverenje — oba od starta.“", "\"Outreach expands the network, content builds trust — both from day one.\"")] },
            { cells: [L("Practical breakdowns", "Practical breakdowns"), L("Pokazuje kako da rešiš deo problema", "Show how to solve part of the problem"), L("„5 CRM polja za founder-led pipeline.“", "\"The 5 CRM fields we use to track founder-led pipeline.\"")] },
            { cells: [L("Proof / story", "Proof / story"), L("Pokazuje rezultate i lekcije iz terena", "Show results, examples, or lessons from the field"), L("„Kako je jedna webinar tema stvorila 9 sales razgovora.“", "\"How one webinar topic created 9 sales conversations.\"")] },
            { cells: [L("Buying criteria", "Buying criteria"), L("Pomaže kupcu da donese bolju odluku", "Help buyers make better decisions"), L("„Pre nego što angažuješ SDR-ove, proveri ova 4 stvari.“", "\"Before hiring SDRs, check these 4 things.\"")] },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 4,
              title: L("Izaberi ponovljive formate", "Choose repeatable formats"),
              whatToDo: L(
                "Kreiraj mali set formata koje founder može da ponavlja.",
                "Create a small set of post formats the founder can reuse.",
              ),
              whyItMatters: L(
                "Burnout se dešava kada svaki post deluje kao prazna stranica.",
                "Burnout happens when every post feels like a blank page.",
              ),
              example: L(
                "Problem → Reframe → Action sa hook-om: „Većina founder-a misli da im treba više leadova. Treba im više poverenja.“",
                "Problem → Reframe → Action with hook: \"Most founders think they need more leads. They need more trust.\"",
              ),
              commonMistake: L(
                "Izmišljanje nove strukture svaki put.",
                "Trying to invent a new structure every time.",
              ),
              tryThis: L(
                "Izaberi 5 formata i rotiraj ih 30 dana.",
                "Pick 5 formats and rotate them for 30 days.",
              ),
              highlight: L(
                "Ograničenja čine founder content lakšim.",
                "Constraints make founder content easier.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Ponovljivi formati", "Repeatable formats"),
          headers: H(["Format", "Kada koristiti", "Primer hook-a"], ["Format", "When to use it", "Example hook"]),
          rows: [
            { cells: [L("Problem → Reframe → Action", "Problem → Reframe → Action"), L("Da osporiš uobičajeno verovanje", "To challenge a common belief"), L("„Većina founder-a misli da im treba više leadova…“", "\"Most founders think they need more leads...\"")] },
            { cells: [L("Mistake breakdown", "Mistake breakdown"), L("Da pokažeš šta kupci rade pogrešno", "To show what buyers are doing wrong"), L("„3 razloga zašto ti LinkedIn outreach ignorišu.“", "\"3 reasons your LinkedIn outreach gets ignored.\"")] },
            { cells: [L("Mini-framework", "Mini-framework"), L("Da naučiš ponovljiv proces", "To teach a repeatable process"), L("„Context → Trust → Signal → Conversation.“", "\"The Context → Trust → Signal → Conversation framework.\"")] },
            { cells: [L("Story lesson", "Story lesson"), L("Da ilustruješ poentu primerom", "To make a point through a real example"), L("„Founder mi je rekao da LinkedIn ne radi. Onda smo proverili profil.“", "\"A founder told me LinkedIn did not work. Then we checked his profile.\"")] },
            { cells: [L("Before / after", "Before / after"), L("Da pokažeš transformaciju", "To show transformation"), L("„Pre: generičan content. Posle: ICP-led content.“", "\"Before: generic content. After: ICP-led content.\"")] },
            { cells: [L("Checklist", "Checklist"), L("Praktična vrednost", "To create practical value"), L("„Pre launch-a outreach-a proveri ovih 7 stvari.“", "\"Before launching outreach, check these 7 things.\"")] },
            { cells: [L("Contrarian POV", "Contrarian POV"), L("Gradnja autoriteta", "To build authority"), L("„Postovanje svaki dan nije strategija.“", "\"Posting every day is not the strategy.\"")] },
            { cells: [L("Tool workflow", "Tool workflow"), L("Povezivanje sa implementacijom", "To connect content with implementation"), L("„Kako koristiti Sales Navigator + CRM za warm engagement.“", "\"How to use Sales Navigator + CRM to track warm engagement.\"")] },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 5,
              title: L("Kreiraj nedeljni publishing ritam", "Create a weekly publishing rhythm"),
              whatToDo: L(
                "Definiši kadencu koju founder stvarno može da održi.",
                "Define a cadence that the founder can actually maintain.",
              ),
              whyItMatters: L(
                "Konzistentnost pobedi intenzitet.",
                "Consistency beats intensity.",
              ),
              example: L(
                "Pon: problem education. Uto/Čet: 10-15 ICP komentara. Sre: founder POV. Pet: practical ili proof. Nedeljno: soft CTA. Mesečno: deep asset.",
                "Mon: problem education. Tue/Thu: 10-15 ICP comments. Wed: founder POV. Fri: practical or proof. Weekly: soft CTA. Monthly: deep asset.",
              ),
              commonMistake: L(
                "Kadenca zasnovana na ambiciji umesto realnosti.",
                "Setting a cadence based on ambition instead of reality.",
              ),
              tryThis: L(
                "Počni sa 2 posta nedeljno i 10 komentara po radnom danu.",
                "Start with 2 posts per week and 10 comments per weekday.",
              ),
              highlight: L(
                "Najbolja kadenca je ona koju founder može da drži 6 meseci.",
                "The best content cadence is the one the founder can keep for 6 months.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Praktičan početni ritam", "A practical starting rhythm"),
          headers: H(["Dan", "Tip content-a", "Cilj"], ["Day", "Content type", "Goal"]),
          rows: [
            { cells: [L("Ponedeljak", "Monday"), L("Problem education post", "Problem education post"), L("Učini ICP bol vidljivim", "Make ICP pain visible")] },
            { cells: [L("Utorak", "Tuesday"), L("10-15 ICP komentara", "10-15 ICP comments"), L("Targetirana vidljivost", "Create targeted visibility")] },
            { cells: [L("Sreda", "Wednesday"), L("Founder POV post", "Founder POV post"), L("Gradi market narativ", "Build market narrative")] },
            { cells: [L("Četvrtak", "Thursday"), L("10-15 ICP komentara", "10-15 ICP comments"), L("Pokreni razgovore", "Start conversations")] },
            { cells: [L("Petak", "Friday"), L("Practical breakdown ili proof", "Practical breakdown or proof"), L("Pokaži kako sistem radi", "Show how the system works")] },
            { cells: [L("Nedeljno", "Weekly"), L("1 soft CTA", "1 soft CTA"), L("Pomeri zainteresovane na sledeći korak", "Move interested people to next step")] },
            { cells: [L("Mesečno", "Monthly"), L("1 deeper asset", "1 deeper asset"), L("Webinar, guide, checklist, case study", "Webinar, guide, checklist, case study")] },
          ],
        },
        {
          type: "pipeline-flow",
          title: L("Repurposing flow, jedan snimak, više asset-a", "Repurposing flow, one recording, many assets"),
          subtitle: L(
            "Riverside + Descript pretvaraju founder razgovor u nedeljni content paket.",
            "Riverside + Descript turn one founder conversation into a weekly content package.",
          ),
          stages: [
            L("Intervju", "Interview"),
            L("Transkript", "Transcript"),
            L("Post", "Post"),
            L("Carousel", "Carousel"),
            L("Video clip", "Video clip"),
            L("Outreach", "Outreach"),
          ],
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Vanity metrike", "Vanity metrics"),
              subtitle: L("Šta LinkedIn default pokazuje", "What LinkedIn defaults show"),
              variant: "muted",
              items: P(
                [
                  "Impresije i lajkovi",
                  "Širok engagement van ICP-a",
                  "Viralni post bez DM-ova",
                  "Ne kaže sales-u šta dalje",
                ],
                [
                  "Impressions and likes",
                  "Broad engagement outside ICP",
                  "Viral post with no DMs",
                  "Does not tell sales what to do next",
                ],
              ),
            },
            {
              title: L("Pipeline signali", "Pipeline signals"),
              subtitle: L("Šta founder content treba da meri", "What founder content should measure"),
              variant: "accent",
              items: P(
                [
                  "ICP komentari i DM-ovi",
                  "Profile view-ovi posle posta",
                  "Webinar / lead magnet registracije",
                  "CRM tagovi i sales razgovori",
                ],
                [
                  "ICP comments and DMs",
                  "Profile views after a post",
                  "Webinar / lead magnet registrations",
                  "CRM tags and sales conversations",
                ],
              ),
            },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 6,
              title: L("Dodaj soft CTA-ove", "Add soft CTAs"),
              whatToDo: L(
                "Koristi CTA-ove koji odgovaraju buyer intent-u. Ne svaki post treba da traži sales call.",
                "Use CTAs that match buyer intent. Not every post should ask for a sales call.",
              ),
              whyItMatters: L(
                "Soft CTA-ovi stvaraju pokret bez osećaja prodaje u svakom postu.",
                "Soft CTAs create movement without making every post feel like a pitch.",
              ),
              example: L(
                "Low: „Sačuvaj ako gradiš LinkedIn sistem.“ Medium: „Komentariši 'ICP' za šablon.“ High: „Zakaži konsultaciju.“",
                "Low: \"Save this if you're building your LinkedIn system.\" Medium: \"Comment 'ICP' and I'll send the template.\" High: \"Book a consultation.\"",
              ),
              commonMistake: L(
                "Korisni content bez sledećeg koraka.",
                "Posting helpful content with no next step.",
              ),
              tryThis: L(
                "Jedan soft CTA nedeljno i jedan jači CTA svake 2-4 nedelje.",
                "Use one soft CTA per week and one stronger CTA every 2-4 weeks.",
              ),
              highlight: L(
                "Content prvo uči. Zatim vodi sledeći korak.",
                "Content should teach first. Then guide the next step.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("CTA primeri po intent nivou", "CTA examples by intent level"),
          headers: H(["Intent nivo", "Primer CTA"], ["Intent level", "CTA example"]),
          rows: [
            { cells: [L("Nizak intent", "Low intent"), L("„Sačuvaj ako gradiš LinkedIn sistem.“", "\"Save this if you're building your LinkedIn system.\"")] },
            { cells: [L("Srednji intent", "Medium intent"), L("„Komentariši 'ICP' i pošaljem šablon.“", "\"Comment 'ICP' and I'll send the template.\"")] },
            { cells: [L("Srednje-visok intent", "Medium-high intent"), L("„DM mi 'PLAYBOOK' za checklist.“", "\"DM me 'PLAYBOOK' and I'll send the checklist.\"")] },
            { cells: [L("Visok intent", "High intent"), L("„Zakaži konsultaciju ako želiš pomoć oko sistema.“", "\"Book a consultation if you want help building this system.\"")] },
            { cells: [L("Event intent", "Event intent"), L("„Pridruži se sledećem Founder-Led Growth webinaru.“", "\"Join the next Founder-Led Growth webinar.\"")] },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 7,
              title: L("Repurpose founder znanje", "Repurpose founder knowledge"),
              whatToDo: L(
                "Koristi postojeće founder znanje kao sirovinu: sales call-ovi, pitanja, prigovori, webinari, CRM beleške.",
                "Use existing founder knowledge as raw material: sales calls, questions, objections, webinars, CRM notes.",
              ),
              whyItMatters: L(
                "Najbolji founder content već postoji u razgovorima, samo ga treba izvući.",
                "The best founder content usually already exists inside conversations. You just need to extract it.",
              ),
              example: L(
                "30-min founder intervju nedeljno → 3 posta, 1 video, newsletter sekcija, webinar ugao, 5 komentara, 1 outreach opener.",
                "30-minute weekly founder interview → 3 posts, 1 short video, newsletter section, webinar angle, 5 comments, 1 outreach opener.",
              ),
              commonMistake: L(
                "Traženje od founder-a da „smisli content“, to stvara pritisak.",
                "Asking the founder to sit down and \"think of content\", that creates pressure.",
              ),
              tryThis: L(
                "Snimi intervju. Pitaj: šta su kupci pitali? Koji prigovor se ponavlja? Šta bi rekao founder-u pre nego što proba?",
                "Record an interview. Ask: What did buyers ask? What objection came up? What would you tell a founder before they try this?",
              ),
              highlight: L(
                "Founder content se ne kreira od nule. Ekstrahuje se iz ekspertize.",
                "Founder content is not created from scratch. It is extracted from expertise.",
              ),
            },
            {
              step: 8,
              title: L("Meri ICP engagement, ne vanity metrike", "Measure ICP engagement, not vanity metrics"),
              whatToDo: L(
                "Prati da li se angažuju pravi ljudi.",
                "Track whether the right people are engaging.",
              ),
              whyItMatters: L(
                "Post sa 30 lajkova od ICP kupaca bolji je od 300 lajkova od kreatora i peer-ova.",
                "A post with 30 likes from ICP buyers is better than 300 likes from creators and peers.",
              ),
              example: L(
                "Taguj: ICP, partner, peer, irrelevant. Optimizuj za ICP.",
                "Tag: ICP, partner, peer, irrelevant. Optimize for ICP.",
              ),
              commonMistake: L(
                "Suditi postove samo po impresijama i lajkovima.",
                "Judging posts only by impressions and likes.",
              ),
              tryThis: L(
                "Prati ICP komentare, profile view-ove, DM-ove, webinar registracije, CRM kontakte, sales call uticaj.",
                "Track ICP comments, profile views, DMs, webinar registrations, CRM contacts, sales calls influenced.",
              ),
              highlight: L(
                "Cilj nije više engagement-a. Cilj je bolji engagement.",
                "The goal is not more engagement. The goal is better engagement.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Metrike koje treba pratiti", "Metrics to track"),
          headers: H(["Metrika", "Zašto je bitna"], ["Metric", "Why it matters"]),
          rows: [
            { cells: [L("ICP komentari", "ICP comments"), L("Pokazuje relevantnost teme", "Shows topic relevance")] },
            { cells: [L("ICP profile view-ovi", "ICP profile views"), L("Pokazuje radoznalost", "Shows curiosity")] },
            { cells: [L("DM odgovori", "DM replies"), L("Pokazuje poverenje i interes", "Shows trust and interest")] },
            { cells: [L("Follow od target kupaca", "Follows from target buyers"), L("Pokazuje kvalitet publike", "Shows audience quality")] },
            { cells: [L("Featured asset klikovi", "Featured asset clicks"), L("Pokazuje dublji interes", "Shows deeper interest")] },
            { cells: [L("Webinar registracije", "Webinar registrations"), L("Pokazuje potražnju za temom", "Shows topic demand")] },
            { cells: [L("CRM kontakti", "CRM contacts created"), L("Pokazuje pipeline vezu", "Shows pipeline connection")] },
            { cells: [L("Sales call uticaj", "Sales calls influenced"), L("Pokazuje revenue relevantnost", "Shows revenue relevance")] },
          ],
        },
        { type: "video", video: video1 },
        { type: "video", video: video2 },
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
              "Lead Agents redosled: ICP dokument, profil, cold Outreach, buying signali, zatim content iz podcast intervjua (Riverside, Descript, Canva), Thought Leader Ads, CRM sa lead scoring-om.",
              "Ova lekcija pokriva content strategiju, ne dnevno pisanje founder-a. Ekspertiza dolazi iz intervjua i snimaka, transkript se seče u postove, klipove i carousel-e. Cilj je poverenje koje podiže reply rate i broj sastanaka.",
              "Content dolazi posle ICP-a i profila, paralelno sa outreach-om — ne čeka da outreach završi. Komentari i engagement hrane signale za topliji sledeći korak.",
              "Outreach direktno napada ICP. Reklame indirektno šire dokaz koji content već testira organski.",
            ],
            [
              "Lead Agents order: ICP document, profile, cold Outreach, buying signals, then content from podcast interviews (Riverside, Descript, Canva), Thought Leader Ads, CRM with lead scoring.",
              "This lesson covers content strategy, not daily writing by the founder. Expertise comes from interviews and recordings. Transcripts become posts, clips, and carousels. The goal is trust that raises reply rate and meetings.",
              "Content comes after ICP, profile, and Outreach, when you already know what the market feels. Comments and engagement feed signals for the next Outreach.",
              "Outreach attacks the ICP directly. Ads indirectly spread proof that content already tests organically.",
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
              title: L("B2B content treba da pomaže kupcima da reše poslovne probleme", "B2B content should help buyers solve business problems"),
              body: L(
                "LinkedIn Marketing Solutions objašnjava da B2B content marketing treba da pomaže ljudima da reše poslovne probleme i rade posao bolje, dok ih vodi ka brendu i rešenju.",
                "LinkedIn Marketing Solutions explains that B2B content marketing should help people solve business problems and do their jobs better while guiding them toward your brand and solution.",
              ),
              sourceLabel: L("LinkedIn Marketing Solutions", "LinkedIn Marketing Solutions"),
              sourceUrl: "https://www.linkedin.com/business/marketing/blog/content-marketing/the-ultimate-guide-to-improve-your-b2b-content-marketing-strategy",
            },
            {
              title: L("Thought leadership gradi poverenje i otvara vrata", "Thought leadership builds trust and opens doors"),
              body: L(
                "Edelman / LinkedIn 2025 B2B Thought Leadership Impact Report kaže da thought leadership nije samo content marketing, već strateški alat za gradnju poverenja, usklađivanje i otvaranje vrata gde ads i tradicionalna prodaja mogu da padnu.",
                "The Edelman / LinkedIn 2025 B2B Thought Leadership Impact Report says thought leadership is not just content marketing but a strategic tool for building trust, driving alignment, and opening doors where ads and traditional sales may fall short.",
              ),
              sourceLabel: L("Edelman / LinkedIn 2025", "Edelman / LinkedIn 2025"),
              sourceUrl: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report",
            },
            {
              title: L("Hidden buyers su pod uticajem thought leadership-a", "Hidden buyers are influenced by thought leadership"),
              body: L(
                "LinkedIn objašnjava da hidden buyers mogu imati značajan uticaj u B2B buying grupama i da thought leadership pomaže da se ti stakeholder-i dosegnu i usklade.",
                "LinkedIn explains that hidden buyers can hold significant influence inside B2B buying groups and that thought leadership can help reach and align those stakeholders.",
              ),
              sourceLabel: L("LinkedIn Marketing Blog", "LinkedIn Marketing Blog"),
              sourceUrl: "https://www.linkedin.com/business/marketing/blog/research-and-insights/b2b-thought-leadership-influence-hidden-buyers",
            },
            {
              title: L("Dokumentovana strategija je bitna", "Documented strategy matters"),
              body: L(
                "LinkedIn B2B content marketing vodič ističe da strategija treba da uključi publiku, konkurente, ciljeve, merenje, customer journey i izgradnju odnosa, sa istraživanjem da top performeri češće imaju dokumentovanu content strategiju.",
                "LinkedIn's B2B content marketing guide highlights that strategy should include audience, competitors, objectives, measurement, customer journey, and relationship-building, with research showing top performers are more likely to have a documented content strategy.",
              ),
              sourceLabel: L("LinkedIn Marketing Solutions", "LinkedIn Marketing Solutions"),
              sourceUrl: "https://www.linkedin.com/business/marketing/blog/content-marketing/the-ultimate-guide-to-improve-your-b2b-content-marketing-strategy",
            },
          ],
        },
        { type: "video", video: video5 },
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
            ["1. Izgradi content strategy mapu"],
            ["1. Build the content strategy map"],
          ),
        },
        {
          type: "table",
          caption: L("Content strategy mapa", "Content strategy map"),
          headers: H(
            ["ICP", "Bol", "Founder POV", "Pilar", "Format", "CTA", "Signal"],
            ["ICP", "Pain", "Founder POV", "Pillar", "Format", "CTA", "Signal to track"],
          ),
          rows: [
            { cells: [L("B2B SaaS founder-i", "B2B SaaS founders"), L("Pipeline zavisi od referenci", "Pipeline depends on referrals"), L("Paralelan outreach + content", "Parallel outreach + content"), L("Founder-led pipeline", "Founder-led pipeline"), L("Problem post", "Problem post"), L("DM „PLAYBOOK“", "DM \"PLAYBOOK\""), L("Profile view-ovi + DM-ovi", "Profile views + DMs")] },
            { cells: [L("Agencije", "Agencies"), L("Ekspertiza zarobljena u call-ovima", "Founder expertise stuck in calls"), L("Ekspertiza treba da postane market-facing content", "Expertise should become market-facing content"), L("Founder ekspertiza", "Founder expertise"), L("Story post", "Story post"), L("Download checklist", "Download checklist"), L("Komentari od founder-a", "Comments from founders")] },
            { cells: [L("IT usluge", "IT services"), L("Dugi sales ciklusi trebaju trust", "Long sales cycles need trust"), L("Kompleksne usluge trebaju edukaciju pre prodaje", "Complex services need education before sales"), L("Trust pre prodaje", "Trust before sales"), L("Framework post", "Framework post"), L("Join webinar", "Join webinar"), L("Webinar registracije", "Webinar registrations")] },
            { cells: [L("Konsalting", "Consulting firms"), L("Partner-led sales ne skalira", "Partner-led sales does not scale"), L("Thought leadership treba da podrži pipeline", "Thought leadership should support pipeline"), L("Content kao sales asset", "Content as sales asset"), L("Checklist post", "Checklist post"), L("Book consultation", "Book consultation"), L("CRM kontakt kreiran", "CRM contact created")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["2. Kreiraj 4-pillar content sistem"],
            ["2. Create your 4-pillar content system"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Pilar 1 - Problem education: pokaži kupcu šta je pokvareno. Teme: zašto outbound pada bez konteksta; zašto referenci nisu predvidljiv sistem; zašto founder-led sales zapne; zašto CRM gubi warm LinkedIn signale.",
              "Pilar 2 - Founder POV: nauči tržište kako misliš. Teme: ne kreni od outreach-a; profil je sales infrastruktura; like nije lead; ekspertiza ne treba da ostane privatna.",
              "Pilar 3 - Practical breakdowns: pokaži implementaciju. Teme: 5 CRM polja; komentari u warm listu; webinar follow-up; soft CTA.",
              "Pilar 4 - Proof i priče: gradi trust kroz primere. Teme: webinar tema → sales razgovori; rewrite profila; before/after outreach; lekcije iz neuspešne kampanje.",
            ],
            [
              "Pillar 1 - Problem education: show the buyer what is broken. Topics: why outbound fails without context; why referrals are not a predictable pipeline system; why founder-led sales gets stuck; why CRM loses warm LinkedIn signals.",
              "Pillar 2 - Founder POV: teach the market how you think. Topics: don't start with outreach; profile is sales infrastructure; a like is not a lead; expertise should not stay private.",
              "Pillar 3 - Practical breakdowns: show how to implement. Topics: 5 CRM fields; comments into warm list; webinar follow-up; soft CTA.",
              "Pillar 4 - Proof and stories: build trust through examples. Topics: webinar topic → sales conversations; profile rewrite; before/after outreach; lessons from a failed campaign.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["3. Kreiraj nedeljni content ritam"],
            ["3. Create a weekly content rhythm"],
          ),
        },
        {
          type: "table",
          caption: L("Nedeljni ritam", "Weekly content rhythm"),
          headers: H(["Dan", "Aktivnost", "Output"], ["Day", "Activity", "Output"]),
          rows: [
            { cells: [L("Ponedeljak", "Monday"), L("Problem education post", "Problem education post"), L("Učini buyer bol vidljivim", "Make buyer pain visible")] },
            { cells: [L("Utorak", "Tuesday"), L("ICP engagement", "ICP engagement"), L("10-15 korisnih komentara", "10-15 useful comments")] },
            { cells: [L("Sreda", "Wednesday"), L("Founder POV post", "Founder POV post"), L("Gradi market narativ", "Build market narrative")] },
            { cells: [L("Četvrtak", "Thursday"), L("ICP engagement", "ICP engagement"), L("10-15 korisnih komentara", "10-15 useful comments")] },
            { cells: [L("Petak", "Friday"), L("Practical breakdown / proof", "Practical breakdown / proof"), L("Pokaži implementaciju ili rezultat", "Show implementation or result")] },
            { cells: [L("Nedeljno", "Weekly"), L("Soft CTA", "Soft CTA"), L("Pomeri zainteresovane na sledeći korak", "Move interested people to next step")] },
            { cells: [L("Mesečno", "Monthly"), L("Deep asset", "Deep asset"), L("Webinar, guide, checklist, case study", "Webinar, guide, checklist, case study")] },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Minimum viable kadenca: 2 posta nedeljno, 10 ICP komentara po radnom danu, 1 CTA nedeljno, 1 founder intervju nedeljno, 1 mesečni deep asset.",
            "Minimum viable cadence: 2 posts per week, 10 ICP comments per weekday, 1 CTA per week, 1 founder interview per week, 1 monthly deep asset.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["4. Izgradi founder interview sistem"],
            ["4. Build the founder interview system"],
          ),
        },
        {
          type: "table",
          caption: L("Od input-a do output-a", "From input to output"),
          headers: H(["Input", "Output"], ["Input", "Output"]),
          rows: [
            { cells: [L("Sales call prigovor", "Sales call objection"), L("LinkedIn post", "LinkedIn post")] },
            { cells: [L("Pitanje kupca", "Customer question"), L("Mini-framework", "Mini-framework")] },
            { cells: [L("Interni proces", "Internal process"), L("Practical breakdown", "Practical breakdown")] },
            { cells: [L("Case study detalj", "Case study detail"), L("Proof post", "Proof post")] },
            { cells: [L("Webinar pitanje", "Webinar question"), L("Follow-up post", "Follow-up post")] },
            { cells: [L("Founder voice note", "Founder voice note"), L("Kratak video script", "Short video script")] },
            { cells: [L("CRM insight", "CRM insight"), L("Taktična checklist", "Tactical checklist")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["5. Kreiraj content backlog"],
            ["5. Create a content backlog"],
          ),
        },
        {
          type: "table",
          caption: L("Polja backlog-a", "Backlog fields"),
          headers: H(["Polje", "Svrha"], ["Field", "Purpose"]),
          rows: [
            { cells: [L("Topic", "Topic"), L("O čemu je post", "What the post is about")] },
            { cells: [L("ICP pain", "ICP pain"), L("Koji buyer problem cilja", "Which buyer problem it targets")] },
            { cells: [L("Pillar", "Pillar"), L("Koji pilar podržava", "Which content pillar it supports")] },
            { cells: [L("Format", "Format"), L("Story, framework, checklist, POV, mistake, tool workflow", "Story, framework, checklist, POV, mistake, tool workflow")] },
            { cells: [L("Stage", "Stage"), L("Awareness, education, consideration, conversion", "Awareness, education, consideration, conversion")] },
            { cells: [L("CTA", "CTA"), L("Save, comment, DM, webinar, call", "Save, comment, DM, join webinar, book call")] },
            { cells: [L("Source", "Source"), L("Sales call, client work, webinar, interview, CRM", "Sales call, client work, webinar, founder interview, CRM insight")] },
            { cells: [L("Status", "Status"), L("Idea, draft, review, scheduled, published", "Idea, draft, review, scheduled, published")] },
            { cells: [L("Performance", "Performance"), L("ICP komentari, DM-ovi, profile view-ovi, webinar signups", "ICP comments, DMs, profile views, webinar signups")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["6. Dodaj repurposing workflow"],
            ["6. Add a repurposing workflow"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Core idea: „Outreach i content rade zajedno od starta.“ Repurpose u: LinkedIn text post, carousel, 60s founder video, webinar sekciju, newsletter, comment framework, outreach opener, CRM signal tag, kratku checklist.",
            ],
            [
              "Core idea: \"Don't start with outreach. Start with context.\" Repurpose into: LinkedIn text post, carousel, 60-second founder video, webinar section, newsletter section, comment framework, outreach opener, CRM signal tag, short checklist.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["7. Pregledaj performanse content-a nedeljno"],
            ["7. Review content performance weekly"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Koji post je privukao ICP komentare?",
              "Koji post je doveo do profile view-ova od target kupaca?",
              "Koja tema je stvorila DM-ove?",
              "Koji post je dao ideje za webinar?",
              "Koji content je stvorio outreach kontekst?",
              "Koji post je uticao na sales call?",
              "Koje teme treba ponoviti?",
              "Koji formati su founder-u najlakši?",
            ],
            [
              "Which post attracted ICP comments?",
              "Which post led to profile views from target buyers?",
              "Which topic created DMs?",
              "Which post gave us webinar ideas?",
              "Which content created outreach context?",
              "Which post influenced a sales call?",
              "Which topics should we repeat?",
              "Which formats are easiest for the founder?",
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
              name: "Notion",
              logo: "/images/sales-tools/notion.png",
              usedFor: L(
                "Content strategija, content backlog, founder interview notes, post kalendar i pillar mapping",
                "Content strategy, content backlog, founder interview notes, post calendar, and pillar mapping",
              ),
              whyItFits: L(
                "Dobar centralni workspace za pretvaranje founder ekspertize u ponovljiv content sistem.",
                "Good central workspace for turning founder expertise into a repeatable content system.",
              ),
              alternative: L("Airtable, Google Sheets, Coda", "Airtable, Google Sheets, Coda"),
            },
            {
              name: "Google Sheets",
              logo: "/images/sales-tools/google-sheets.png",
              usedFor: L(
                "Jednostavan content kalendar, content scoring, ICP engagement tracking",
                "Simple content calendar, content scoring, ICP engagement tracking",
              ),
              whyItFits: L(
                "Brz, fleksibilan i lak za male timove.",
                "Fast, flexible, and easy for small teams.",
              ),
              alternative: L("Notion, Airtable", "Notion, Airtable"),
            },
            {
              name: "AuthoredUp",
              usedFor: L(
                "Pisanje, preview, formatiranje, zakazivanje i analiza LinkedIn postova",
                "Writing, previewing, formatting, scheduling, and analyzing LinkedIn posts",
              ),
              whyItFits: L(
                "Korisno za founder-e koji žele dedicirani LinkedIn content workflow.",
                "Useful for founders who want a dedicated LinkedIn content workflow.",
              ),
              alternative: L("Taplio, native LinkedIn drafts", "Taplio, native LinkedIn drafts"),
            },
            {
              name: "Taplio",
              slug: "taplio",
              usedFor: L(
                "Content ideation, zakazivanje, analitika i LinkedIn workflow podrška",
                "Content ideation, scheduling, analytics, and LinkedIn workflow support",
              ),
              whyItFits: L(
                "Pomaže konzistentnosti i upravljanju LinkedIn publishing-om.",
                "Helps create consistency and manage LinkedIn publishing.",
              ),
              alternative: L("AuthoredUp, LinkedIn native analytics", "AuthoredUp, LinkedIn native analytics"),
            },
            {
              name: "Canva",
              logo: "/images/sales-tools/canva.png",
              usedFor: L(
                "Jednostavni carousel-i, quote kartice i framework vizuali",
                "Create simple carousels, quote cards, and framework visuals",
              ),
              whyItFits: L(
                "Brza vizuelna produkcija za founder-e i male timove.",
                "Fast visual production for founders and small teams.",
              ),
              alternative: L("Figma, Adobe Express", "Figma, Adobe Express"),
            },
            {
              name: "Riverside",
              logo: "/images/sales-tools/riverside.png",
              usedFor: L(
                "Snimanje founder intervjua, webinara i video klipova",
                "Record founder interviews, webinars, and video clips",
              ),
              whyItFits: L(
                "Founder content postaje lakši kada se ekspertiza hvata u razgovoru.",
                "Founder content becomes easier when expertise is captured in conversation.",
              ),
              alternative: L("Zoom, Google Meet", "Zoom, Google Meet"),
            },
            {
              name: "Descript",
              logo: "/images/sales-tools/descript.png",
              usedFor: L(
                "Edit founder video/audio, klipovi, transkripti i repurposed asset-i",
                "Edit founder video/audio, create clips, transcripts, and repurposed assets",
              ),
              whyItFits: L(
                "Jedan founder snimak postaje više content asset-a.",
                "Turns one founder recording into multiple content assets.",
              ),
              alternative: L("CapCut, OpusClip", "CapCut, OpusClip"),
            },
            {
              name: "HubSpot / Pipedrive",
              slug: "hubspot",
              usedFor: L(
                "Praćenje content-influenced leadova, DM-ova, webinar registracija i pipeline-a",
                "Track content-influenced leads, DMs, webinar registrations, and pipeline",
              ),
              whyItFits: L(
                "Povezuje content strategiju sa prihodom umesto vanity metrika.",
                "Connects content strategy to revenue instead of vanity metrics.",
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
          type: "stat-row",
          items: [
            {
              value: L("30 min", "30 min"),
              label: L("Founder snimak", "Founder recording"),
              description: L(
                "Jedan Riverside intervju nedeljno, sirovina za ceo content paket.",
                "One Riverside interview per week, raw material for the full content package.",
              ),
            },
            {
              value: L("5", "5"),
              label: L("Postova", "Posts"),
              description: L(
                "Izvučeno iz transkripta u Notion backlog, draft u AuthoredUp.",
                "Extracted from transcript into Notion backlog, drafted in AuthoredUp.",
              ),
            },
            {
              value: L("1", "1"),
              label: L("Deep asset", "Deep asset"),
              description: L(
                "Deep asset mesečno (webinar, guide, checklist).",
                "Deep asset monthly (webinar, guide, checklist).",
              ),
            },
          ],
        },
        {
          type: "workflow",
          title: L("Od founder ekspertize do LinkedIn content engine-a", "From founder expertise to LinkedIn content engine"),
          steps: P(
            [
              "Founder snimi 30-minutni nedeljni intervju.",
              "Tim izvuče 5 buyer problema i 3 founder POV-a.",
              "Svaka ideja se mapira na content pilar.",
              "Postovi se draft-uju u Notion-u ili AuthoredUp-u.",
              "Founder pregleda i dodaje lični jezik.",
              "Postovi se zakazuju kroz nedelju.",
              "Tim prati ICP engagement, profile view-ove, DM-ove i webinar interes.",
              "Jaki postovi se repurposuju u carousel, video, newsletter i outreach openere.",
              "CRM se ažurira kada content stvori razgovor.",
              "Nedeljni review odlučuje koje teme ponoviti.",
            ],
            [
              "Founder records a 30-minute weekly interview.",
              "Team extracts 5 buyer problems and 3 founder POVs.",
              "Each idea is mapped to a content pillar.",
              "Posts are drafted in Notion or AuthoredUp.",
              "Founder reviews and adds personal language.",
              "Posts are scheduled across the week.",
              "Team tracks ICP engagement, profile views, DMs, and webinar interest.",
              "Strong posts are repurposed into carousels, videos, newsletter sections, and outreach openers.",
              "CRM is updated when content creates a conversation.",
              "Weekly review decides which topics to repeat.",
            ],
          ),
          highlight: L(
            "Ovako founder content postaje sistem, ne dnevna kreativna borba.",
            "This is how founder content becomes a system. Not a daily creative struggle.",
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
              title: L("Founder Content Engine Map", "Founder Content Engine Map"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "Founder ekspertiza teče u content pilare, postove, komentare, webinare, outreach, CRM i pipeline.",
                "A founder's expertise flowing into content pillars, posts, comments, webinars, outreach, CRM, and pipeline.",
              ),
            },
            {
              title: L(
                "ICP Pain → Founder POV → Content Pillars → Repeatable Formats → Weekly Rhythm → Pipeline Signals",
                "ICP Pain → Founder POV → Content Pillars → Repeatable Formats → Weekly Rhythm → Pipeline Signals",
              ),
              placement: L("Pre framework sekcije", "Before framework section"),
              description: L(
                "Core content strategy framework.",
                "The core content strategy framework.",
              ),
            },
            {
              title: L("Nasumično postovanje vs Founder-Led Content strategija", "Random Posting vs Founder-Led Content Strategy"),
              placement: L("Core / vs-random sekcija", "Core idea section"),
              description: L(
                "Comparison tabela: ad hoc postovanje vs pipeline-fokusiran content sistem.",
                "Comparison table showing ad hoc posting vs a pipeline-focused content system.",
              ),
            },
            {
              title: L("Nedeljni Founder Content ritam", "Weekly Founder Content Rhythm"),
              placement: L("Implement sekcija", "How to implement section"),
              description: L(
                "Jednostavan nedeljni content kalendar za founder-e.",
                "A simple weekly content calendar for founders.",
              ),
            },
            {
              title: L("Content Repurposing Flywheel", "Content Repurposing Flywheel"),
              placement: L("Repurposing sekcija", "Repurposing section"),
              description: L(
                "Jedan founder insight postaje postovi, video, webinar, newsletter, outreach opener i CRM signal.",
                "One founder insight becomes posts, video, webinar, newsletter, outreach opener, and CRM signal.",
              ),
            },
            {
              title: L("Content-to-Pipeline Dashboard", "Content-to-Pipeline Dashboard"),
              placement: L("Measurement sekcija", "Measurement section"),
              description: L(
                "Metrike koje povezuju LinkedIn content sa profile view-ovima, DM-ovima, webinar registracijama, CRM kontaktima i pipeline-om.",
                "Metrics that connect LinkedIn content to profile views, DMs, webinar registrations, CRM contacts, and pipeline.",
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
          title: L("Čeklista Lekcije 4", "Lesson 4 checklist"),
          items: P(
            [
              "Nabroj top 10 bolova o kojima tvoj ICP priča.",
              "Napiši 5 founder POV izjava.",
              "Izaberi 3-5 content pilara.",
              "Izaberi 5 ponovljivih formata postova.",
              "Kreiraj minimum viable nedeljni content ritam.",
              "Izgradi Notion, Airtable ili Sheets content backlog.",
              "Snimi jedan 30-minutni founder intervju.",
              "Pretvori taj intervju u 3 LinkedIn posta.",
              "Dodaj jedan soft CTA u nedeljni content plan.",
              "Prati ICP engagement odvojeno od ukupnog engagement-a.",
              "Repurpose-uj jednu jaku ideju u bar 3 formata.",
              "Pregledaj content performanse svakog petka.",
            ],
            [
              "List the top 10 pains your ICP talks about.",
              "Write 5 founder POV statements.",
              "Choose 3-5 content pillars.",
              "Pick 5 repeatable post formats.",
              "Create a minimum viable weekly content rhythm.",
              "Build a Notion, Airtable, or Sheets content backlog.",
              "Record one 30-minute founder interview.",
              "Turn that interview into 3 LinkedIn posts.",
              "Add one soft CTA to the weekly content plan.",
              "Track ICP engagement separately from total engagement.",
              "Repurpose one strong idea into at least 3 formats.",
              "Review content performance every Friday.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "template",
      title: L("Šablon: Founder LinkedIn Content Strategy", "Template / swipe file"),
      blocks: [
        {
          type: "template",
          title: L("Founder LinkedIn Content Strategy Template", "Founder LinkedIn Content Strategy Template"),
          content: L(
            `1. ICP

Ovaj content je za:
[ICP]

Bore se sa:
[skup problem]

Žele:
[željeni outcome]

2. Founder POV

Većina firmi veruje:
[uobičajeno verovanje]

Mi verujemo:
[oštriji founder POV]

Primer:
Većina founder-a veruje da im treba više outreach volumena.
Mi verujemo da treba jasan ICP, profil i paralelan outreach + content.

3. Content pilari

Pilar 1: [Problem education]
Svrha: [šta ovaj pilar uči]
Primer teme:
- [tema 1]
- [tema 2]
- [tema 3]

Pilar 2: [Founder POV]
Svrha: [šta ovaj pilar uči]
Primer teme:
- [tema 1]
- [tema 2]
- [tema 3]

Pilar 3: [Practical breakdowns]
Svrha: [šta ovaj pilar uči]
Primer teme:
- [tema 1]
- [tema 2]
- [tema 3]

Pilar 4: [Proof / stories]
Svrha: [šta ovaj pilar dokazuje]
Primer teme:
- [tema 1]
- [tema 2]
- [tema 3]

4. Ponovljivi formati

- Problem → Reframe → Action
- Mistake breakdown
- Mini-framework
- Story lesson
- Before / after
- Checklist
- Contrarian POV
- Tool workflow

5. Nedeljni ritam

Ponedeljak: [problem education post]
Utorak: [ICP komentari]
Sreda: [founder POV post]
Četvrtak: [ICP komentari]
Petak: [practical breakdown / proof post]
Nedeljni CTA: [soft CTA]
Mesečni asset: [webinar / guide / checklist / case study]

6. Founder interview pitanja

- Šta su kupci pitali ove nedelje?
- Koji prigovor se ponovio?
- Koji problem se ponavlja?
- Šta je prospect pogrešno razumeo?
- Šta smo popravili za klijenta?
- Šta primećujemo na tržištu?
- Šta bi rekao nekom pre nego što proba?

7. Content backlog polja

Topic: [tema]
ICP pain: [bol]
Pillar: [pilar]
Format: [format]
Stage: [awareness / education / consideration / conversion]
CTA: [CTA]
Source: [sales call / client work / webinar / founder interview / CRM insight]
Status: [idea / draft / review / scheduled / published]
Performance: [ICP komentari / DM-ovi / profile view-ovi / webinar signups]

8. CTA bank

Nizak intent: Sačuvaj za kasnije.
Srednji intent: Komentariši "[keyword]" i pošaljem šablon.
Srednje-visok intent: DM mi "[keyword]" za checklist.
Visok intent: Zakaži konsultaciju ako želiš pomoć oko sistema.
Event CTA: Pridruži se sledećem Founder-Led Growth webinaru.

9. Nedeljni review

- Koji post je privukao ICP kupce?
- Koji post je stvorio profile view-ove?
- Koja tema je stvorila DM-ove?
- Koji content je stvorio outreach kontekst?
- Koji post je uticao na sales call?
- Koju ideju ponoviti sledeće nedelje?
- Koji format je founder-u bio najlakši?`,
            `1. ICP

This content is for:
[ICP]

They struggle with:
[expensive problem]

They want:
[desired outcome]

2. Founder POV

Most companies believe:
[common belief]

We believe:
[sharper founder POV]

Example:
Most founders believe they need more outreach volume.
We believe they need a clear ICP, profile, and parallel outreach + content.

3. Content pillars

Pillar 1: [Problem education]
Purpose: [what this pillar teaches]
Example topics:
- [topic 1]
- [topic 2]
- [topic 3]

Pillar 2: [Founder POV]
Purpose: [what this pillar teaches]
Example topics:
- [topic 1]
- [topic 2]
- [topic 3]

Pillar 3: [Practical breakdowns]
Purpose: [what this pillar teaches]
Example topics:
- [topic 1]
- [topic 2]
- [topic 3]

Pillar 4: [Proof / stories]
Purpose: [what this pillar proves]
Example topics:
- [topic 1]
- [topic 2]
- [topic 3]

4. Repeatable formats

- Problem → Reframe → Action
- Mistake breakdown
- Mini-framework
- Story lesson
- Before / after
- Checklist
- Contrarian POV
- Tool workflow

5. Weekly rhythm

Monday: [problem education post]
Tuesday: [ICP comments]
Wednesday: [founder POV post]
Thursday: [ICP comments]
Friday: [practical breakdown / proof post]
Weekly CTA: [soft CTA]
Monthly asset: [webinar / guide / checklist / case study]

6. Founder interview questions

- What did buyers ask this week?
- What objection came up?
- What problem keeps repeating?
- What did a prospect misunderstand?
- What did we fix for a client?
- What are we seeing in the market?
- What would you tell someone before they try this?

7. Content backlog fields

Topic: [topic]
ICP pain: [pain]
Pillar: [pillar]
Format: [format]
Stage: [awareness / education / consideration / conversion]
CTA: [CTA]
Source: [sales call / client work / webinar / founder interview / CRM insight]
Status: [idea / draft / review / scheduled / published]
Performance: [ICP comments / DMs / profile views / webinar signups]

8. CTA bank

Low-intent CTA: Save this for later.
Medium-intent CTA: Comment "[keyword]" and I'll send the template.
Medium-high intent CTA: DM me "[keyword]" and I'll send the checklist.
High-intent CTA: Book a consultation if you want help building this system.
Event CTA: Join the next Founder-Led Growth webinar.

9. Weekly review

- Which post attracted ICP buyers?
- Which post created profile views?
- Which topic created DMs?
- Which content created outreach context?
- Which post influenced a sales call?
- Which idea should we repeat next week?
- Which format was easiest for the founder?`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Šta je LinkedIn content strategija za founder-e?", "What is a LinkedIn content strategy for founders?"),
      answer: L(
        "To je ponovljiv sistem za pretvaranje founder ekspertize u postove, komentare, video, webinare i asset-e koji edukuju ICP, grade trust i podržavaju pipeline, ne postovanje kad dođe inspiracija.",
        "It is a repeatable system for turning founder expertise into posts, comments, videos, webinars, and assets that educate the ICP, build trust, and support pipeline, not posting when inspiration hits.",
      ),
    },
    {
      question: L("Koliko često founder treba da postuje na LinkedIn-u?", "How often should a founder post on LinkedIn?"),
      answer: L(
        "Dobar početak je 2-3 posta nedeljno i 10 promišljenih ICP komentara po radnom danu. Tačna kadenca je manje bitna od konzistentnosti, bolje 2x nedeljno 6 meseci nego svaki dan 2 nedelje pa nestajanje.",
        "A good starting point is 2-3 posts per week and 10 thoughtful ICP comments per weekday. The exact cadence matters less than consistency, better to post twice per week for six months than daily for two weeks and then disappear.",
      ),
    },
    {
      question: L("O čemu founder treba da postuje?", "What should founders post about?"),
      answer: L(
        "O ICP problemima, market greškama, founder POV-u, praktičnim framework-ima, lekcijama iz sales call-ova, customer pričama, prigovorima, buying kriterijumima, workflow-ima i proof-u. Najbolji content obično dolazi iz stvarnih buyer razgovora.",
        "About ICP problems, market mistakes, founder point of view, practical frameworks, lessons from sales calls, customer stories, objections, buying criteria, workflows, and proof. The best content usually comes from real buyer conversations.",
      ),
    },
    {
      question: L("Kako izbeći founder content burnout?", "How do you avoid founder content burnout?"),
      answer: L(
        "Koristi sistem: nedeljni founder intervju, ideje iz sales call-ova, ponovljivi formati, repurposing, content backlog, ne počinjanje svakog posta od prazne stranice.",
        "Use a system: weekly founder interview, ideas from sales calls, repeatable formats, repurposing, content backlog, do not start every post from a blank page.",
      ),
    },
    {
      question: L("Da li svaki LinkedIn post treba da ima CTA?", "Should every LinkedIn post have a CTA?"),
      answer: L(
        "Ne. Ne svaki post treba hard CTA. Ali nedeljni sistem treba jasne sledeće korake, soft CTA često, jači CTA kad post prirodno podržava.",
        "No. Not every post needs a hard CTA. But the weekly system should include clear next steps, soft CTAs often, stronger CTAs when the post naturally supports them.",
      ),
    },
    {
      question: L("Koje metrike treba pratiti?", "What metrics should we track?"),
      answer: L(
        "ICP komentare, profile view-ove od target kupaca, DM-ove, kvalitet followera, Featured klikove, webinar registracije, CRM kontakte, sales call uticaj i pipeline uticaj, ne samo lajkove i impresije.",
        "ICP comments, profile views from target buyers, DMs, follower quality, Featured asset clicks, webinar registrations, CRM contacts, sales calls influenced, and pipeline influenced, not just likes and impressions.",
      ),
    },
    {
      question: L("Koja je najveća greška u founder LinkedIn content-u?", "What is the biggest mistake in founder LinkedIn content?"),
      answer: L(
        "Nasumično postovanje. Ono stvara nasumičnu pažnju. Founder-Led Growth content treba da ponavlja isti market narativ dok pravi kupci ne povežu founder-a sa problemom i rešenjem.",
        "Random posting. It creates random attention. Founder-Led Growth content should repeat the same market narrative until the right buyers associate the founder with the problem and solution.",
      ),
    },
  ],
  sources: [
    { title: L("LinkedIn Marketing Solutions - Ultimate Guide to Improve Your B2B Content Marketing Strategy", "LinkedIn Marketing Solutions - Ultimate Guide to Improve Your B2B Content Marketing Strategy"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/the-ultimate-guide-to-improve-your-b2b-content-marketing-strategy" },
    { title: L("Edelman / LinkedIn - 2025 B2B Thought Leadership Impact Report", "Edelman / LinkedIn - 2025 B2B Thought Leadership Impact Report"), url: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report" },
    { title: L("LinkedIn Marketing Blog - Thought Leadership and Hidden Buyers", "LinkedIn Marketing Blog - Thought Leadership and Hidden Buyers"), url: "https://www.linkedin.com/business/marketing/blog/research-and-insights/b2b-thought-leadership-influence-hidden-buyers" },
    { title: L("LinkedIn Marketing Blog - B2B Content Marketing Types", "LinkedIn Marketing Blog - B2B Content Marketing Types"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/b2b-content-marketing-types" },
    { title: L("LinkedIn Marketing Blog - How to Create a Content Strategy for Thought Leadership", "LinkedIn Marketing Blog - How to Create a Content Strategy for Thought Leadership"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/how-to-create-a-content-strategy-for-thought-leadership" },
    { title: L("LinkedIn Marketing Blog - Real Examples That Showcase B2B Thought Leadership Success", "LinkedIn Marketing Blog - Real Examples That Showcase B2B Thought Leadership Success"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/examples-of-thought-leadership-content-b2b" },
    { title: L("LinkedIn B2B Institute", "LinkedIn B2B Institute"), url: "https://business.linkedin.com/advertise/resources/b2b-institute" },
    { title: L("HubSpot - How to Use LinkedIn for Business Marketing", "HubSpot - How to Use LinkedIn for Business Marketing"), url: "https://offers.hubspot.com/how-to-use-linkedin-business-marketing" },
    { title: L("Huble - How to Build a B2B Content Marketing Strategy", "Huble - How to Build a B2B Content Marketing Strategy"), url: "https://huble.com/blog/how-to-build-a-b2b-content-marketing-strategy" },
    { title: L("AuthoredUp - LinkedIn Content Strategy", "AuthoredUp - LinkedIn Content Strategy"), url: "https://authoredup.com/blog/linkedin-content-strategy" },
    { title: L("Content Marketing Institute - B2B Content Marketing Trends", "Content Marketing Institute - B2B Content Marketing Trends"), url: "https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" },
    { title: L("AuthoredUp Chrome Web Store", "AuthoredUp Chrome Web Store"), url: "https://chromewebstore.google.com/detail/authoredup-%E2%80%93-no-1-linkedi/dkkmpkpjimkollpfgbbglcikcmgmdlhn" },
  ],
  relatedLessons: {
    previous: {
      slug: "linkedin-profile-optimization-founder",
      title: L(
        "Lekcija 3 - Kako optimizovati LinkedIn profil founder-a za B2B lead generation",
        "Lesson 3 - How to Optimize a Founder's LinkedIn Profile for B2B Lead Generation",
      ),
    },
    next: {
      slug: "write-educational-linkedin-posts",
      title: L(
        "Lekcija 5 - Kako pisati edukativne LinkedIn postove koji grade autoritet",
        "Lesson 5 - How to Write Educational LinkedIn Posts That Build Authority",
      ),
      note: L(
        "Sledeća lekcija pokazuje kako pisati postove koji grade autoritet i pomeraju kupce ka akciji.",
        "The next lesson shows how to write posts that build authority and move buyers closer to action.",
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
        slug: "linkedin-commenting-strategy",
        title: L(
          "Lekcija 6 - LinkedIn komentarisanje",
          "Lesson 6 - How to Use LinkedIn Commenting to Get Visibility With Your ICP",
        ),
      },
      {
        slug: "linkedin-engagement-outreach-list",
        title: L(
          "Lekcija 7 - Engagement u outreach listu",
          "Lesson 7 - How to Turn LinkedIn Engagement Into an Outreach List",
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
      "Founder content ne treba da zavisi od inspiracije",
      "Founder content should not depend on inspiration",
    ),
    body: L(
      "Treba da dolazi iz sistema. Kada je content strategija jasna, svaki post ima posao: edukuje ICP; gradi founder POV; radi paralelno sa outreach-om; validira webinar teme; generiše CRM signale; i zagreva sales razgovore. Sledeća lekcija pokazuje kako pisati edukativne LinkedIn postove koji grade autoritet i pomeraju kupce ka akciji.",
      "It should come from a system. When your content strategy is clear, every post has a job: educate the ICP; build the founder's point of view; run in parallel with outreach; validate webinar topics; generate CRM signals; and make sales conversations warmer. The next lesson shows how to write educational LinkedIn posts that build authority and move buyers closer to action.",
    ),
    primaryLabel: L("Nastavi na Lekciju 5", "Continue to Lesson 5"),
    secondaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
  },
  seoKeywords: P(
    [
      "LinkedIn content strategija za founder-e",
      "founder LinkedIn content strategija",
      "B2B LinkedIn content strategija",
      "founder-led content",
      "LinkedIn content pilari",
      "LinkedIn content kalendar za founder-e",
      "B2B thought leadership strategija",
      "LinkedIn posting strategija",
      "founder-led growth content",
      "LinkedIn content bez burnout-a",
      "B2B content strategija",
      "LinkedIn content strategy for founders",
      "founder LinkedIn content strategy",
      "B2B LinkedIn content strategy",
      "LinkedIn content pillars",
      "LinkedIn content calendar for founders",
    ],
    [
      "LinkedIn content strategy for founders",
      "founder LinkedIn content strategy",
      "B2B LinkedIn content strategy",
      "founder-led content",
      "LinkedIn content pillars",
      "LinkedIn content calendar for founders",
      "B2B thought leadership strategy",
      "LinkedIn posting strategy",
      "founder-led growth content",
      "LinkedIn content without burnout",
      "B2B content strategy",
    ],
  ),
};
