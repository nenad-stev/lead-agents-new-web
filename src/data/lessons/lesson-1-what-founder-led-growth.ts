import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L(
    "The Sales Playbook For Founders | Startup School",
    "The Sales Playbook For Founders | Startup School",
  ),
  channel: L("Y Combinator", "Y Combinator"),
  description: L(
    "Pomaže founder-ima da razumeju zašto moraju da nauče prodaju pre nego što je skaliraju.",
    "Helps founders understand why they need to learn sales before they scale sales.",
  ),
  placementNote: L(
    "Pogledaj posle sekcije o founder-u kao prečici poverenja.",
    "Watch after the founder-as-trust-shortcut section.",
  ),
  embedUrl: "https://www.youtube.com/embed/DH7REvnQ1y4",
  watchUrl: "https://www.youtube.com/watch?v=DH7REvnQ1y4",
};

const video2 = {
  title: L("Enterprise Sales | Startup School", "Enterprise Sales | Startup School"),
  channel: L("Y Combinator", "Y Combinator"),
  description: L(
    "Pokazuje zašto B2B prodaja traži proces, ne samo harizmu founder-a.",
    "Shows why B2B sales needs process, not just founder charisma.",
  ),
  placementNote: L(
    "Pogledaj posle okvira implementacije ili u sekciji video materijala.",
    "Watch after the implementation framework or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/0fKYVl12VTA",
  watchUrl: "https://www.youtube.com/watch?v=0fKYVl12VTA",
};

export const lesson1RichContent: RichLessonContent = {
  meta: {
    stage: L("Strategija i pozicioniranje", "Strategy & Positioning"),
    readingTime: L("18–22 min", "18–22 min"),
    difficulty: L("Početnik", "Beginner"),
    outcome: L(
      "Razumećeš kako Founder-Led Growth povezuje LinkedIn, content, engagement, webinare, outreach, CRM, ads i intent signale u jedan predvidljiv B2B pipeline sistem.",
      "Understand how Founder-Led Growth connects LinkedIn, content, engagement, webinars, outreach, CRM, ads, and intent signals into one predictable B2B pipeline system.",
    ),
    recommendedTools: L(
      "LinkedIn, LinkedIn Sales Navigator, HubSpot ili Pipedrive, Notion ili Airtable, AuthoredUp ili Taplio, Google Sheets, Make.com ili Zapier",
      "LinkedIn, LinkedIn Sales Navigator, HubSpot or Pipedrive, Notion or Airtable, AuthoredUp or Taplio, Google Sheets, Make.com or Zapier",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 1", "Lesson 1"),
    title: L(
      "Šta je Founder-Led Growth i zašto radi za B2B firme",
      "What Founder-Led Growth Is and Why It Works for B2B Companies",
    ),
    paragraphs: P(
      [
        "Većina founder-a nema problem sa leadovima.",
        "Ima problem sa poverenjem.",
        "Većina founder-a misli da im treba više leadova. Zato kupe listu. Zaposle SDR-a. Šalju cold email. Automatizuju LinkedIn poruke. Pa se pitaju zašto tržište deluje hladno.",
        "Problem nije uvek volumen. Problem je kontekst.",
        "Kupac nikad nije čuo tvoj pogled na problem. Ne zna šta misliš. Ne zna zašto je tvoja firma drugačija. Još ne veruje tvojoj poruci. Zato outreach deluje kao prekid.",
        "Founder-Led Growth to rešava sistemom konekcija: ICP, profil, outreach, content, signali, value-based follow-up, re-engagement, CRM. Founder je kanal poverenja, ne influencer.",
      ],
      [
        "Most founders don't have a lead problem.",
        "They have a trust problem.",
        "Most founders think they need more leads. So they buy a list. They hire an SDR. They send cold emails. They automate LinkedIn messages. Then they wonder why the market feels cold.",
        "The problem is not always volume. The problem is context.",
        "Your buyer has never heard your point of view. They do not know what you believe. They do not know why your company is different. They do not trust your message yet. So when your outreach lands, it feels like interruption.",
        "Founder-Led Growth fixes that — not by turning the founder into an influencer, but by turning the founder into the most trusted distribution channel in the company.",
      ],
    ),
    callout: L(
      "Poveži se sa ICP-om. Prati signale. Re-engaguj u pravom trenutku. Value-based follow-up dok lead nije spreman.",
      "Connect with your ICP. Track signals. Re-engage at the right moment. Value-based follow-up until the lead is ready.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vs-branding", title: L("FLG vs lični brend", "Founder-Led Growth vs Personal Branding") },
    { id: "trust-shortcut", title: L("Founder kao prečica poverenja", "The founder is the trust shortcut") },
    { id: "confidence", title: L("Poverenje pre demo-a", "Buyers need confidence before demo") },
    { id: "demand", title: L("Kreiranje vs hvatanje potražnje", "Demand creation vs capture") },
    { id: "crm", title: L("CRM kao sistemski sloj", "CRM as the system layer") },
    { id: "framework", title: L("Okvir: Context → Pipeline", "Framework: Context → Pipeline") },
    { id: "story", title: L("Lead Agents redosled", "Lead Agents sequence") },
    { id: "proof", title: L("Dokaz i istraživanja", "Proof / trust section") },
    { id: "implement", title: L("Kako implementirati", "How to implement") },
    { id: "tools", title: L("Idealni stack alata", "Ideal tool stack") },
    { id: "workflow", title: L("Primer workflow-a", "Workflow example") },
    { id: "videos", title: L("Video materijali", "YouTube videos") },
    { id: "visuals", title: L("Predlozi vizuala", "Visual elements") },
    { id: "checklist", title: L("Čeklista", "Checklist") },
    { id: "template", title: L("Šablon: System Map", "Template / swipe file") },
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
              "šta Founder-Led Growth zapravo jeste;",
              "zašto radi za B2B firme;",
              "zašto founder vidljivost gradi poverenje brže od brand content-a;",
              "kako se LinkedIn, content, webinari, outreach, CRM i intent signali povezuju;",
              "zašto nasumično postovanje ne pravi pipeline;",
              "kako da misliš o Founder-Led Growth kao revenue sistemu, ne marketing aktivnosti.",
            ],
            [
              "what Founder-Led Growth actually is;",
              "why it works for B2B companies;",
              "why founder visibility creates trust faster than brand content;",
              "how LinkedIn, content, webinars, outreach, CRM, and intent signals connect;",
              "why random posting does not create pipeline;",
              "how to think about Founder-Led Growth as a revenue system, not a marketing activity.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Founder na sastanku sa B2B kupcem — kontekst pre prodaje",
            "Founder in a B2B meeting — context before the sales pitch",
          ),
          caption: L(
            "Founder-Led Growth počinje razgovorom o problemu i poverenju — ne cold pitch-om.",
            "Founder-Led Growth starts with problem context and trust — not a cold pitch.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Jedan sistem, ne odvojeni kanali", "One system, not separate channels"),
          subtitle: L(
            "Svaki deo hrani sledeći korak u pipeline-u.",
            "Each part feeds the next step in the pipeline.",
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
      id: "why",
      title: L("Zašto je ovo važno", "Why this matters"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "B2B kupci ne kreću u pravoj liniji. Istražuju tiho. Upoređuju opcije pre razgovora sa prodajom. Pitaju kolege. Gledaju LinkedIn. Čitaju content. Grade interni konsenzus. Prave shortlist pre nego što tvoj sales tim uopšte zna da postoji prilika.",
              "Tu Founder-Led Growth ima smisla. Founder gradi poverenje pre nego što kupac uđe u formalan sales proces.",
              "LinkedIn profil postaje sloj kredibiliteta. Content objašnjava problem pre poziva. Engagement zagreva tržište. Webinar produbljuje pažnju. Outreach koristi kontekst umesto lažne personalizacije. CRM prati celo putovanje. Intent signali pokazuju ko se približava kupovini.",
              "Većina founder-a greši tako što LinkedIn, content, outbound, webinare i CRM tretira kao odvojene aktivnosti. Nisu odvojene. To je jedan sistem. Ako je jedan deo slab, ostatak puca.",
            ],
            [
              "B2B buyers do not move in a straight line. They research quietly. They compare options before they talk to sales. They ask peers. They check LinkedIn. They review content. They build internal consensus. They shortlist vendors before your sales team even knows there is an opportunity.",
              "That is exactly where Founder-Led Growth fits. The founder creates trust before the buyer enters a formal sales process.",
              "The founder's LinkedIn profile becomes a credibility layer. Content explains the problem before the sales call. Engagement warms the market. The webinar deepens attention. Outreach uses context instead of fake personalization. CRM tracks the full journey. Intent signals show who is moving closer to buying.",
              "Most founders get this wrong. They treat LinkedIn, content, outbound, webinars, and CRM as separate activities. They are not separate. They are one system. If one part is weak, the rest of the system breaks.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Dashboard i CRM izveštaji — merenje founder-led pipeline-a",
            "Dashboard and CRM reports — measuring founder-led pipeline",
          ),
          caption: L(
            "Kada su kanali povezani, vidiš koji touchpoint stvara razgovore i revenue.",
            "When channels are connected, you can see which touchpoint creates conversations and revenue.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
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
              "Founder-Led Growth nije lični brending. Lični brending je obično o vidljivosti. Founder-Led Growth je o pipeline-u. Founder može imati lajkove bez prihoda. Može postati viral, a privući pogrešnu publiku. Može postovati svaki dan bez sales procesa iza toga.",
              "Founder-Led Growth radi samo kada se vidljivost veže za revenue motion. Svaka aktivnost ima posao:",
            ],
            [
              "Founder-Led Growth is not personal branding. Personal branding is usually about visibility. Founder-Led Growth is about pipeline.",
              "A founder can get likes and still generate no revenue. Founder-Led Growth only works when visibility connects to a revenue motion. Every activity has a job:",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Uloga svake aktivnosti u sistemu", "Each activity's job in the system"),
          headers: H(["Aktivnost", "Posao"], ["Activity", "Job"]),
          rows: [
            { cells: [L("Pozicioniranje", "Positioning"), L("Čini poruku specifičnom", "Makes the message specific")] },
            { cells: [L("LinkedIn profil", "LinkedIn profile"), L("Pretvara posete profila u poverenje", "Converts profile visits into trust")] },
            { cells: [L("Content", "Content"), L("Edukuje tržište pre prodaje", "Educates the market before sales")] },
            { cells: [L("Engagement", "Engagement"), L("Stvara vidljivost kod pravih ljudi", "Creates visibility with the right people")] },
            { cells: [L("Webinari", "Webinars"), L("Pretvara pažnju u dublju potražnju", "Turns attention into deeper demand")] },
            { cells: [L("Outreach", "Outreach"), L("Pretvara topao kontekst u razgovore", "Converts warm context into conversations")] },
            { cells: [L("Ads", "Ads"), L("Pojačava dokazani founder content", "Amplifies proven founder content")] },
            { cells: [L("CRM", "CRM"), L("Prati aktivnost, signale i pipeline", "Tracks activity, signals, and pipeline")] },
            { cells: [L("Intent signali", "Intent signals"), L("Prioritetizuje koga i kada kontaktirati", "Prioritizes who to contact and when")] },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L("Cilj nisu lajkovi. Cilj je pipeline.", "Likes are not the goal. Pipeline is the goal."),
        },
        {
          type: "table",
          caption: L("12 lekcija = jedan operativni sistem", "12 lessons = one operating system"),
          headers: H(["#", "Faza", "Posao u sistemu"], ["#", "Phase", "Job in the system"]),
          rows: [
            { cells: [L("1", "1"), L("Strategija", "Strategy"), L("Zašto FLG i kako sve stoji zajedno", "Why FLG and how it fits together")] },
            { cells: [L("2", "2"), L("ICP", "ICP"), L("Kome pomažeš", "Who you help")] },
            { cells: [L("3", "3"), L("Profil", "Profile"), L("5 sekundi jasnoće za ICP", "5-second clarity for ICP")] },
            { cells: [L("4–7", "4–7"), L("Outreach + signali", "Outreach + signals"), L("Cold outreach, buying signali, engagement", "Cold outreach, buying signals, engagement")] },
            { cells: [L("4–6", "4–6"), L("Content engine", "Content engine"), L("Intervjui, klipovi, postovi (ne dnevno pisanje)", "Interviews, clips, posts (not daily writing)")] },
            { cells: [L("8–9", "8–9"), L("Webinar + Ads", "Webinar + Ads"), L("Webinar intent, TLA skaliranje", "Webinar intent, TLA scaling")] },
            { cells: [L("10–12", "10–12"), L("CRM + signali + sistem", "CRM + signals + system"), L("Merenje, intent, inbound-to-outbound", "Measurement, intent, inbound-to-outbound")] },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "vs-branding",
      title: L("Founder-Led Growth vs lični brending", "Founder-Led Growth vs Personal Branding"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Lični brending meri reach, follower-e i engagement. Founder-Led Growth meri razgovore, sastanke, SQL i prihod.",
              "Možeš imati jak lični brend i prazan CRM. Možeš imati skroman reach i pun pipeline — ako je ICP tačan i sistem povezan.",
              "Razlika nije u tome da li founder postuje. Razlika je u tome da li svaki touchpoint vodi ka komercijalnom sledećem koraku.",
            ],
            [
              "Personal branding measures reach, followers, and engagement. Founder-Led Growth measures conversations, meetings, SQL, and revenue.",
              "You can have a strong personal brand and an empty CRM. You can have modest reach and a full pipeline — if the ICP is right and the system is connected.",
              "The difference is not whether the founder posts. The difference is whether every touchpoint leads to a commercial next step.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Lični brending", "Personal branding"),
              subtitle: L("Metrika: reach", "Metric: reach"),
              variant: "muted",
              items: P(
                [
                  "Fokus na follower-e i impresije",
                  "Viralnost bez ICP fit-a",
                  "Nema jasnog sales handoff-a",
                  "Teško povezati sa revenue",
                ],
                [
                  "Focus on followers and impressions",
                  "Virality without ICP fit",
                  "No clear sales handoff",
                  "Hard to tie to revenue",
                ],
              ),
            },
            {
              title: L("Founder-Led Growth", "Founder-Led Growth"),
              subtitle: L("Metrika: pipeline", "Metric: pipeline"),
              variant: "accent",
              items: P(
                [
                  "Fokus na signale i razgovore",
                  "ICP-first content i engagement",
                  "CRM + outreach sa kontekstom",
                  "Merljiv uticaj na deal-ove",
                ],
                [
                  "Focus on signals and conversations",
                  "ICP-first content and engagement",
                  "CRM + outreach with context",
                  "Measurable influence on deals",
                ],
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "trust-shortcut",
      title: L("Founder je prečica poverenja", "The founder is the trust shortcut"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "U ranim i srednjim B2B fazama founder obično ima najdublji uvid u tržište. Zna bol kupca, prigovore, zašto deal-ovi stoje, šta proizvod ili usluga stvarno mogu.",
              "Može reći stvari koje brand stranica ne može. Zato founder content često prolazi bolje od poliranog korporativnog sadržaja. Kupci brže veruju ljudima nego firmama.",
              "Founder ne mora zauvek biti ceo sales tima — ali mora oblikovati sales narativ, posebno pre zrelog GTM mehanizma.",
            ],
            [
              "In early and mid-stage B2B companies, the founder usually has the deepest market insight. They know buyer pain, objections, why deals stall, and what the product or service can actually do.",
              "They can say things a brand page cannot. That is why founder-led content often lands better than polished corporate content. Buyers trust people faster than companies.",
              "The founder does not need to be the whole sales team forever — but they do need to shape the sales narrative, especially before the company has a mature GTM machine.",
            ],
          ),
        },
        { type: "video", video: video1 },
      ],
    },
    {
      type: "section",
      id: "confidence",
      title: L("Kupci trebaju poverenje pre demo-a", "Buyers need confidence before they need a demo"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Demo ne kreira potražnju — hvata je. Pre demo-a kupac mora da veruje da je problem stvaran, hitan, da stari način košta, da tvoj POV ima smisla, da si kredibilan i da razgovor neće biti gubitak vremena.",
              "Founder-Led Growth gradi ta uverenja pre poziva. Zato content ima smisla — ne motivacioni content, ne selfiji, ne generični „5 saveta“. Vežban, oštar, problem-aware content.",
            ],
            [
              "A demo does not create demand. A demo captures demand. Before a demo, the buyer needs to believe the problem is real and urgent, the old way is costing them, your point of view makes sense, you are credible, and talking to you will not waste their time.",
              "Founder-Led Growth builds those beliefs before the call. That is why content matters — not motivational content or random tips. Useful, sharp, problem-aware content.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "problem je stvaran;",
              "problem je hitan;",
              "stari način ih košta;",
              "tvoj pogled na problem ima smisla;",
              "firma je kredibilna;",
              "razumeš njihov svet;",
              "razgovor neće biti gubitak vremena.",
            ],
            [
              "the problem is real;",
              "the problem is urgent;",
              "the old way is costing them;",
              "your point of view makes sense;",
              "your company is credible;",
              "you understand their world;",
              "talking to you will not waste their time.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "demand",
      title: L("Kreiranje i hvatanje potražnje", "Founder-Led Growth creates demand and captures demand"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Većina B2B firmi previše fokusira hvatanje potražnje — chase ljude koji su već spremni. To je skupo jer svi jurcaju iste kupce.",
              "Founder-Led Growth takođe kreira potražnju: founder uči tržište kako da misli o problemu, objašnjava šta kupci propuštaju, pokazuje cenu neaktivnosti, daje jezik za internu diskusiju.",
              "Mnogi kupci danas nisu in-market. Posao nije samo naći spremne sada — već postati poznat pre nego što budu spremni. John Dawes 95:5 pravilo: do 95% firmi možda nije in-market u datom trenutku — zato founder content gradi memoriju pre buying window-a.",
            ],
            [
              "Most B2B companies over-focus on demand capture — chasing buyers already ready to buy. That is expensive because every competitor chases the same buyers.",
              "Founder-Led Growth also creates demand. The founder teaches the market how to think about the problem, explains what buyers are missing, shows the cost of inaction, and gives language for internal discussions.",
              "Many buyers are not in-market today. The job is not only to find people ready now — it is to become familiar before they are ready. John Dawes' 95:5 rule: up to 95% of firms may not be in-market at any given time — so founder content should build memory before the buying window opens.",
            ],
          ),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("95%", "95%"),
              label: L("Future buyers", "Future buyers"),
              description: L(
                "Nisu in-market sada — treba im memorija pre buying window-a (LinkedIn B2B Institute, 95-5 Rule).",
                "Not in-market now — they need memory before the buying window (LinkedIn B2B Institute, 95-5 Rule).",
              ),
            },
            {
              value: L("5%", "5%"),
              label: L("In-market sada", "In-market now"),
              description: L(
                "Spremni za kupovinu — ovde sales i outbound imaju najviše smisla.",
                "Ready to buy — this is where sales and outbound matter most.",
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "crm",
      title: L("Sistem radi samo kada CRM hvata putovanje", "The system only works when CRM captures the journey"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Founder-led sistem bez CRM discipline postaje haos: komentari bez follow-up-a, učesnici webinara bez owner-a, profile views bez segmentacije, zainteresovani kupci zaglavljeni u DM-ovima, topli accounti zaboravljeni posle jedne poruke, uticaj content-a koji se nikad ne vidi u pipeline izveštajima.",
              "Potreban je praktičan CRM koji hvata: source, signal, relationship, stage, next action, owner, pipeline value. Ako nije praćeno, ne možeš optimizovati.",
            ],
            [
              "A founder-led system without CRM discipline becomes chaos: comments with no follow-up, webinar attendees with no sales owner, profile viewers with no segmentation, interested buyers stuck in DMs, warm accounts forgotten after one exchange, content influence that never shows up in pipeline reporting.",
              "You need a practical CRM that captures: source, signal, relationship, stage, next action, owner, pipeline value. If it is not tracked, it will not improve.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            ["source", "signal", "relationship", "stage", "next action", "owner", "pipeline value"],
            ["source", "signal", "relationship", "stage", "next action", "owner", "pipeline value"],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "framework",
      title: L(
        "Okvir: Context → Trust → Signal → Conversation → Pipeline",
        "Framework: Context → Trust → Signal → Conversation → Pipeline",
      ),
      blocks: [
        {
          type: "pipeline-flow",
          title: L("Founder-Led Growth flow", "Founder-Led Growth flow"),
          subtitle: L(
            "Od konteksta na tržištu do merljivog pipeline-a.",
            "From market context to measurable pipeline.",
          ),
          stages: [
            L("Context", "Context"),
            L("Trust", "Trust"),
            L("Signal", "Signal"),
            L("Conversation", "Conversation"),
            L("Pipeline", "Pipeline"),
          ],
        },
        {
          type: "framework-intro",
          title: L("Najjednostavniji način da razumeš Founder-Led Growth", "The simplest way to understand Founder-Led Growth"),
          description: L(
            "Pet koraka i sedam operativnih koraka ispod pretvaraju vidljivost u predvidljiv pipeline — od konteksta pre outreach-a do CRM discipline.",
            "Five stages and seven operational steps below turn visibility into predictable pipeline — from context before outreach to CRM discipline.",
          ),
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Izgradi kontekst pre outreach-a", "Build context before outreach"),
              whatToDo: L(
                "Objavljuj i komentariši oko problema koje kupci već zanima pre slanja outreach-a.",
                "Publish and engage around the problems your buyers already care about before sending outreach.",
              ),
              whyItMatters: L(
                "Cold outreach pada kada kupac nema razloga da mari. Kontekst čini poruku relevantnom, ne nasumičnom.",
                "Cold outreach fails when the buyer has no reason to care. Context makes your message feel relevant instead of random.",
              ),
              example: L(
                "Pre kontakta sa CTO-ima u mid-market softveru, founder postuje zašto legacy QA usporava release i komentariše postove o engineering velocity.",
                "Before contacting CTOs at mid-sized software companies, a founder posts about why legacy QA workflows slow release cycles and comments on CTO posts about engineering velocity.",
              ),
              commonMistake: L(
                "Počinjanje sa cold listom od 500 ljudi pre nego što tržište vidi bilo kakav founder POV.",
                "Starting with a 500-person cold list before the market has seen any useful point of view from the founder.",
              ),
              tryThis: L(
                "Zapiši top 5 problema koje rešavaš. Svaki pretvori u jedan LinkedIn post i 10 komentara pre launch-a outreach-a.",
                "Write down the top 5 buyer problems your company solves. Turn each into one LinkedIn post and 10 comments before launching outreach.",
              ),
              highlight: L(
                "Počni od ICP dokumenta i profila, zatim outreach. Content i signali hrane istu petlju.",
                "Start with the ICP document and profile, then outreach. Content and signals feed the same loop.",
              ),
            },
            {
              step: 2,
              title: L("Profil founder-a kao trust stranica", "Turn the founder profile into a trust page"),
              whatToDo: L(
                "Prepiši LinkedIn profil da govori kupcu, ne founder-ovoj karijeri.",
                "Rewrite the founder's LinkedIn profile so it speaks to the buyer, not the founder's career history.",
              ),
              whyItMatters: L(
                "Kupci proveravaju profil pre odgovora. Slab profil ruši dobar outreach.",
                "Buyers check profiles before replying. A weak profile makes good outreach underperform.",
              ),
              example: L(
                "Umesto „Founder at CloudOpsPro“ koristi: „Pomažem B2B SaaS timovima da smanje cloud waste bez usporavanja engineering-a.“",
                "Instead of 'Founder at CloudOpsPro', use: 'Helping B2B SaaS teams reduce cloud waste without slowing engineering.'",
              ),
              commonMistake: L(
                "LinkedIn kao CV umesto landing stranice.",
                "Treating LinkedIn like a CV instead of a landing page.",
              ),
              tryThis: L(
                "Pitaj se: da li bi moj ICP za 10 sekundi znao kome pomažem, koji problem rešavam i zašto sam kredibilan?",
                "Ask: would my ICP know who I help, what problem I solve, and why I am credible in 10 seconds?",
              ),
              highlight: L(
                "Profil nije dekoracija. To je sales infrastruktura.",
                "Your LinkedIn profile is not decoration. It is sales infrastructure.",
              ),
            },
            {
              step: 3,
              title: L("Content koji daje kupcu jezik", "Create content that gives buyers language"),
              whatToDo: L(
                "Objavljuj postove o problemima, greškama, okvirima, trade-off-ovima i kriterijumima odluke.",
                "Publish posts that explain problems, mistakes, frameworks, trade-offs, and decision criteria.",
              ),
              whyItMatters: L(
                "Kupcima treba interni jezik da objasne zašto promena ima smisla. Dobar content im daje taj jezik.",
                "Buyers need internal language to explain why change matters. Good content gives them that language.",
              ),
              example: L(
                "„Većina compliance projekata pada jer timovi tretiraju SOC 2 kao dokumentaciju. To je operating system problem.“",
                "'Most compliance projects fail because teams treat SOC 2 as documentation. It is really an operating system problem.'",
              ),
              commonMistake: L(
                "Company update-i, feature postovi i generični „5 saveta“ bez jakog POV-a.",
                "Posting company updates, product features, and generic '5 tips' content with no strong point of view.",
              ),
              tryThis: L(
                "Jedan post koji počinje: „Većina [ICP] misli da je problem [površinski]. Pravi problem je [dublji].“",
                "Write one post that starts with: 'Most [ICP] think the problem is [surface issue]. The real problem is [deeper issue].'",
              ),
              highlight: L(
                "Autoritet ne dolazi od čestog postovanja. Dolazi od korisnih stvari koje kažeš.",
                "Authority does not come from posting often. It comes from saying something useful.",
              ),
            },
            {
              step: 4,
              title: L("Engagement — ulazak u svet kupca", "Use engagement to enter the buyer's world"),
              whatToDo: L(
                "Svakodnevno komentariši postove ICP kupaca, eksperata, partnera i target accounta.",
                "Comment daily on posts from ICP buyers, industry experts, partners, and target accounts.",
              ),
              whyItMatters: L(
                "Komentari stvaraju ponovljenu vidljivost pre direktnog outreach-a.",
                "Comments create repeated visibility before direct outreach.",
              ),
              example: L(
                "Founder agencije komentariše RevOps postove o atribuciji i CRM hygiene pre poziva na webinar.",
                "An agency founder comments on RevOps leaders' posts about attribution and CRM hygiene before inviting them to a webinar.",
              ),
              commonMistake: L(
                "Komentarisanje creator-a sa ogromnim reach-om ali bez buyer relevantnosti.",
                "Commenting on creator posts with huge reach but no buyer relevance.",
              ),
              tryThis: L(
                "Lista od 50 ICP-relevantnih ljudi — komentariši 10 radnih dana 2 nedelje zaredom.",
                "Build a list of 50 ICP-relevant people and comment on 10 of them every weekday for 2 weeks.",
              ),
              highlight: L(
                "Pažnja se akumulira kada je fokusirana. Nasumičan engagement ne.",
                "Attention compounds when it is focused. Random engagement does not.",
              ),
            },
            {
              step: 5,
              title: L("Engagement u signale", "Convert engagement into signals"),
              whatToDo: L(
                "Prati profile views, ponovljene lajkove, komentare, webinar registracije, share-ove i DM odgovore.",
                "Track meaningful LinkedIn actions: profile views, repeat likes, comments, webinar registrations, content shares, and DM replies.",
              ),
              whyItMatters: L(
                "Engagement pokazuje ko se naginje. Outreach treba da prati ponašanje.",
                "Engagement tells you who is leaning in. Outreach should follow behavior.",
              ),
              example: L(
                "VP Operations lajkuje tri posta o automatizaciji, ide na webinar, poseti profil — dobija kontekstualan DM, ne cold pitch.",
                "A VP of Operations likes three posts about workflow automation, attends a webinar, and visits the founder profile. That person should get a contextual DM, not a cold pitch.",
              ),
              commonMistake: L(
                "Svaki lajk tretirati kao buying signal.",
                "Treating every like as a buying signal.",
              ),
              tryThis: L(
                "Tri nivoa signala: light, active, buying-intent — i definisana akcija za svaki.",
                "Create three signal levels: light engagement, active engagement, buying-intent engagement — then define what action happens at each level.",
              ),
              highlight: L(
                "Lajk nije lead. Obrazac je signal.",
                "A like is not a lead. A pattern is a signal.",
              ),
            },
            {
              step: 6,
              title: L("Outreach kao nastavak razgovora", "Use outreach to continue the conversation"),
              whatToDo: L(
                "Šalji poruke na osnovu stvarne interakcije, business trigger-a ili content teme.",
                "Send messages based on a real interaction, business trigger, or content topic.",
              ),
              whyItMatters: L(
                "Kontekstualan outreach deluje kao nastavak, ne prekid.",
                "Contextual outreach feels like a continuation, not an interruption.",
              ),
              example: L(
                "„Video sam tvoj komentar o sales handoff-u. Kod B2B timova 20–80 ljudi ownership je nejasan. Da podelim checklist koji koristimo?“",
                "'Saw your comment on the post about sales handoff. We're seeing the same issue with 20–80 person B2B teams: leads exist, but ownership is unclear. Worth sharing the checklist we use?'",
              ),
              commonMistake: L(
                "Generička poruka sa imenom i firmom kao „personalizacija“.",
                "Pretending a generic message is personalized because it includes the person's name and company.",
              ),
              tryThis: L(
                "U svakoj outreach poruci jedan razlog zašto timing ima smisla sada.",
                "For every outreach message, include one reason the timing makes sense now.",
              ),
              highlight: L(
                "Ne pitch-uj prerano. Zasluži razgovor.",
                "Don't pitch too early. Earn the conversation.",
              ),
            },
            {
              step: 7,
              title: L("Prati sistem u CRM-u", "Track the system in CRM"),
              whatToDo: L(
                "Dodaj founder-led source, signale i stage-ove u CRM.",
                "Add founder-led sources, signals, and stages to your CRM.",
              ),
              whyItMatters: L(
                "Ne možeš optimizovati ono što ne vidiš.",
                "You cannot optimize what you cannot see.",
              ),
              example: L(
                "Source: LinkedIn comment. Signal: webinar attended. Stage: warm conversation. Next: poslati founder POV asset.",
                "Contact source: LinkedIn comment. Signal: Webinar attended. Stage: Warm conversation. Next action: Send founder POV asset.",
              ),
              commonMistake: L(
                "Odnosi u DM-ovima, memoriji ili spreadsheet-ovima zauvek.",
                "Keeping founder relationships in DMs, memory, or spreadsheets forever.",
              ),
              tryThis: L(
                "CRM polja: Founder touchpoint, LinkedIn signal, Content topic, Next best action.",
                "Create CRM fields for: Founder touchpoint, LinkedIn signal, Content topic, Next best action.",
              ),
              highlight: L(
                "CRM je mesto gde founder-led sistem postaje company asset.",
                "The CRM is where the founder-led system becomes a company asset.",
              ),
            },
          ],
        },
        { type: "video", video: video2 },
      ],
    },
    {
      type: "section",
      id: "story",
      title: L("Kako Lead Agents vodi Founder-Led Growth", "How Lead Agents runs Founder-Led Growth"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ne krećemo od pretpostavke da svaki founder piše content i da će ICP odmah reagovati. Krećemo od sistema koji radi i za zauzete founder-e.",
              "1) ICP dokument (holy grail) za ponudu, poruke i value-based follow-up. 2) LinkedIn profil, ICP mora za 5 sekundi da razume kako pomažeš. 3) Cold outreach preko Sales Navigator-a ili Apollo-a, izvršenje kroz La Growth Machine, HeyReach, Instantly, Lemlist.",
              "4) Buying signali pokreću re-engagement (kontekstualna poruka, ne novi cold spam). 5) Follow-up sistem za no_reply: value-based dodiri u HeyReach, Lemlist ili La Growth Machine dok trenutak ne dođe.",
              "6) Content iz intervjua gradi poverenje (Riverside, Descript, Canva). 7) Thought Leader Ads skaliraju dokaz. 8) CRM sa lead scoring-om i statusima (cold_sent, signal_reengage, meeting).",
              "Cilj nisu lajkovi, već prave LinkedIn konekcije sa ICP-om u pravom trenutku.",
            ],
            [
              "We do not start from the assumption that every founder writes content and that the ICP will react immediately. We start from a system that works for busy founders too.",
              "1) ICP document (holy grail) for offer, messages, and value-based follow-up. 2) LinkedIn profile, ICP must understand in 5 seconds how you help. 3) Cold outreach via Sales Navigator or Apollo, execution via La Growth Machine, HeyReach, Instantly, Lemlist.",
              "4) Buying signals trigger re-engagement (contextual message, not new cold spam). 5) Follow-up system for no_reply: value-based touches in HeyReach, Lemlist, or La Growth Machine until timing is right.",
              "6) Interview content builds trust (Riverside, Descript, Canva). 7) Thought Leader Ads scale proof. 8) CRM with lead scoring and statuses (cold_sent, signal_reengage, meeting).",
              "The goal is not likes. It is real LinkedIn connections with the ICP at the right moment.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Pogrešan FLG", "Wrong FLG"),
              subtitle: L("Često u teoriji", "Common in theory"),
              variant: "muted",
              items: P(
                [
                  "Founder mora sam da piše svaki dan",
                  "Čekamo viral engagement",
                  "Ads pre outreach-a",
                  "CRM na kraju, ako stigne",
                ],
                [
                  "Founder must write alone every day",
                  "Wait for viral engagement",
                  "Ads before outreach",
                  "CRM last, if at all",
                ],
              ),
            },
            {
              title: L("Lead Agents FLG", "Lead Agents FLG"),
              subtitle: L("Kako radimo", "How we work"),
              variant: "accent",
              items: P(
                [
                  "ICP dokument vodi sve",
                  "Intervjui za autentičan content",
                  "Outreach direktno, Ads indirektno",
                  "CRM + lead scoring od starta",
                ],
                [
                  "ICP document drives everything",
                  "Interviews for authentic content",
                  "Outreach direct, Ads indirect",
                  "CRM + lead scoring from the start",
                ],
              ),
            },
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
          type: "proof-grid",
          cards: [
            {
              title: L("Kupci istražuju pre razgovora sa prodajom", "Buyers research before they talk to sales"),
              body: L(
                "Gartner navodi da 75% B2B kupaca preferira rep-free iskustvo, ali i da sam digitalni self-service može povećati buyer's remorse — potrebna je i digitalna edukacija i ljudsko poverenje.",
                "Gartner states that 75% of B2B buyers prefer a rep-free sales experience, but also notes that digital self-service alone can increase purchase regret — supporting the need for both digital education and human trust.",
              ),
              sourceLabel: L("Gartner — B2B Buying Journey", "Gartner — B2B Buying Journey"),
              sourceUrl: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
            },
            {
              title: L("Thought leadership utiče na skrivene kupce", "Thought leadership helps influence hidden buyers"),
              body: L(
                "Edelman / LinkedIn 2025 B2B Thought Leadership Impact Report: thought leadership gradi poverenje, alignment i otvara vrata u složenim buying grupama.",
                "Edelman / LinkedIn's 2025 B2B Thought Leadership Impact Report explains that thought leadership builds trust, drives alignment, and opens doors in complex buying groups.",
              ),
              sourceLabel: L("Edelman / LinkedIn — 2025 Report", "Edelman / LinkedIn — 2025 Report"),
              sourceUrl: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report",
            },
            {
              title: L("Poznatost pre buying window-a", "Familiarity matters before the buying window opens"),
              body: L(
                "TrustRadius 2024 B2B Buying Disconnect: 78% kupaca na shortlist-u biralo proizvode koje su već čuli pre istraživanja; kod enterprise 86%.",
                "TrustRadius 2024 B2B Buying Disconnect Report: 78% of buyers creating shortlists selected products they had heard of before starting research; for enterprise buyers, 86%.",
              ),
              sourceLabel: L("TrustRadius — 2024 Report", "TrustRadius — 2024 Report"),
              sourceUrl:
                "https://go.trustradius.com/rs/827-FOI-687/images/2024%20B2B%20Buying%20Disconnect%20Year%20of%20the%20Brand%20Crisis.pdf",
            },
            {
              title: L("Većina kupaca nije in-market sada", "Most buyers are not in-market right now"),
              body: L(
                "John Dawes 95:5 pravilo: do 95% firmi možda nije in-market u datom trenutku — marketing i founder content treba da grade memoriju pre prozora kupovine.",
                "John Dawes' 95:5 rule: up to 95% of firms may not be in-market at any given time — marketing and founder content should build memory before the buying window opens.",
              ),
              sourceLabel: L("John Dawes — The 95:5 Rule", "John Dawes — The 95:5 Rule"),
              sourceUrl: "https://johndawes.info/the-955-rule/",
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
              "1. Definiši ulogu founder-a na tržištu",
              "Pre postovanja: „Pomažem [ICP] da reše [skup problem] bez [bol / neuspešna alternativa].“ Kupac mora za 5 sekundi da razume kome pomažeš. Izbegavaj vague „growth partner“, buzzwords i feature-first poruke.",
            ],
            [
              "1. Define the founder's market role",
              "Before posting, clarify: 'I help [ICP] solve [expensive problem] without [common pain / failed alternative].' The buyer must understand who you help in 5 seconds. Avoid vague category claims, buzzwords, and feature-first messaging.",
            ],
          ),
        },
        {
          type: "table",
          id: "system-map",
          caption: L("Mapa Founder-Led Growth sistema", "Founder-Led Growth system map"),
          headers: H(
            ["ICP", "Problem kupca", "Founder POV", "Profil poruka", "Content pillar", "Engagement", "Webinar", "Outreach trigger", "CRM polje"],
            ["ICP", "Buyer problem", "Founder POV", "Profile message", "Content pillar", "Engagement", "Webinar", "Outreach trigger", "CRM field"],
          ),
          rows: [
            {
              cells: [
                L("B2B agencije 20–100", "B2B agencies 20–100"),
                L("Founder i dalje vodi prodaju", "Founder still drives most sales"),
                L("Znanje founder-a je zarobljeno", "Founder knowledge is trapped"),
                L("Sales nije bottleneck — dokumentacija jeste", "Sales is not the bottleneck — documentation is"),
                L("Founder-led pipeline", "Founder-led pipeline"),
                L("RevOps / founder peers", "RevOps / founder peers"),
                L("Referral sistem", "Referral system"),
                L("Komentar na post o referral-ima", "Commented on referral post"),
                L("founder_touchpoint", "founder_touchpoint"),
              ],
            },
            {
              cells: [
                L("IT service firme", "IT service firms"),
                L("Dug sales ciklus, nisko poverenje", "Long cycle, low trust"),
                L("Kupcu treba tehničko poverenje pre vendora", "Buyers need technical confidence before vendor calls"),
                L("Enterprise razgovori bez hladnog outbound-a", "Enterprise conversations without cold-only outbound"),
                L("Trust & proof", "Trust & proof"),
                L("CTO / IT direktori", "CTO / IT directors"),
                L("Vendor evaluation", "Vendor evaluation"),
                L("Webinar registracija", "Webinar registration"),
                L("signal_level", "signal_level"),
              ],
            },
            {
              cells: [
                L("Rani SaaS", "Early SaaS"),
                L("Nema ponovljiv pipeline", "No repeatable pipeline"),
                L("Ne zapošljavaj sales pre dokumentovanog founder motion-a", "Don't hire sales before founder motion is documented"),
                L("Od profila do SQL", "From profile to SQL"),
                L("ICP mistakes", "ICP mistakes"),
                L("Founder / VP Sales", "Founder / VP Sales"),
                L("First 10 SQL", "First 10 SQL"),
                L("Profile view posle sales posta", "Profile view after sales post"),
                L("content_topic", "content_topic"),
              ],
            },
          ],
        },
        {
          type: "table",
          caption: L("Audit founder profila", "Founder profile audit"),
          headers: H(["Sekcija profila", "Šta treba da radi"], ["Profile section", "What it should do"]),
          rows: [
            { cells: [L("Banner", "Banner"), L("Market promise", "State the market promise")] },
            { cells: [L("Headline", "Headline"), L("Kome pomažeš i koji ishod", "Who you help and what outcome")] },
            { cells: [L("About", "About"), L("Problem, POV, dokaz, CTA", "Buyer problem, POV, proof, CTA")] },
            { cells: [L("Featured", "Featured"), L("Case study, webinar, lead magnet", "Case study, webinar, lead magnet")] },
            { cells: [L("Iskustvo", "Experience"), L("Business outcomes, ne job duties", "Business outcomes, not job duties")] },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Loš profil: „Founder & CEO. Strastven prema tehnologiji i skaliranju.“ Bolji: „Pomažem B2B service firmama da pretvore founder ekspertizu u LinkedIn pipeline.“",
            "Bad: 'Founder & CEO. Passionate about technology and scaling.' Better: 'Helping B2B service firms turn founder expertise into LinkedIn-driven pipeline.'",
          ),
        },
        {
          type: "table",
          caption: L("Prvi content engine", "First content engine"),
          headers: H(["Pilar", "Svrha", "Primer ugla"], ["Pillar", "Purpose", "Example angle"]),
          rows: [
            {
              cells: [
                L("Edukacija problema", "Problem education"),
                L("Pokaži šta je pokvareno", "Show what is broken"),
                L("Outbound ne pada zbog copy-ja — kupci nemaju kontekst.", "Your outbound is not failing because of copy. Buyers have no context."),
              ],
            },
            {
              cells: [
                L("Point of view", "Point of view"),
                L("Kako drugačije misliš", "Show how you think differently"),
                L("Ne počinji outreach-om. Počni kontekstom.", "Don't start with outreach. Start with context."),
              ],
            },
            {
              cells: [
                L("Dokaz / praksa", "Proof / practical"),
                L("Šta radi u praksi", "What works in the field"),
                L("5 CRM polja za founder-led pipeline.", "The 5 CRM fields we use to track founder-led pipeline."),
              ],
            },
          ],
        },
        {
          type: "bullets",
          items: P(
            [
              "Nedeljni ritam: 2 edukativna posta, 1 POV post, 10–15 ICP komentara radnim danima, 1 soft CTA nedeljno, CRM review petkom.",
            ],
            [
              "Weekly rhythm: 2 educational posts, 1 founder POV post, 10–15 ICP comments weekdays, 1 soft CTA weekly, Friday CRM review.",
            ],
          ),
        },
        {
          type: "callout",
          text: L(
            "Ne optimizuj za viralnost. Optimizuj da privučeš prave ljude.",
            "Do not optimize for going viral. Optimize for attracting the right people.",
          ),
        },
        {
          type: "table",
          caption: L("Engagement lista", "Engagement list"),
          headers: H(["Segment", "Broj"], ["Segment", "Number"]),
          rows: [
            { cells: [L("ICP decision-makers", "ICP decision-makers"), L("40", "40")] },
            { cells: [L("ICP influenseri", "ICP influencers"), L("20", "20")] },
            { cells: [L("Partneri / referral", "Partners / referral"), L("15", "15")] },
            { cells: [L("Industry eksperti", "Industry experts"), L("15", "15")] },
            { cells: [L("Kupci / advocate", "Customers / advocates"), L("10", "10")] },
          ],
        },
        {
          type: "table",
          caption: L("Nivoi signala", "Signal levels"),
          headers: H(["Nivo", "Primeri", "Akcija"], ["Level", "Examples", "Action"]),
          rows: [
            {
              cells: [
                L("Light", "Light"),
                L("Lajk, profile view, follower", "Like, profile view, new follower"),
                L("Prati. Možda engage nazad.", "Monitor. Maybe engage back."),
              ],
            },
            {
              cells: [
                L("Medium", "Medium"),
                L("Komentar, repeat lajkovi, webinar signup", "Comment, repeat likes, newsletter signup"),
                L("Warm lista. Nurture.", "Add to warm list. Engage and nurture."),
              ],
            },
            {
              cells: [
                L("Strong", "Strong"),
                L("DM, pricing/demo visit, webinar live, repeat od target accounta", "DM, demo/pricing visit, webinar attendance, repeat from target account"),
                L("CRM. Kontekstualan outreach.", "Add to CRM. Start contextual outreach."),
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Lajk nije buying signal. Pet interakcija u dve nedelje od target accounta — jeste.",
            "A like is not a buying signal. Five interactions across two weeks from a target account is worth attention.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "7. Prvi outreach workflow: (1) referenca konteksta, (2) imenuj problem, (3) ponudi nešto korisno, (4) mali ask.",
              "Primer: „Video sam engagement na postu o founder-led pipeline. Kod B2B service firmi referral-i više nisu predvidljivi. Imam kratku checklist gde sistem curi pipeline. Da pošaljem?“",
            ],
            [
              "7. First outreach workflow: (1) reference context, (2) name the problem, (3) offer something useful, (4) keep the ask small.",
              "Example: 'Noticed you engaged with the post about founder-led pipeline. We see this with B2B service firms — referrals work but aren't predictable. I have a short checklist for where founder-led systems leak pipeline. Want me to send it?'",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Webinar follow-up", "Webinar follow-up"),
          headers: H(["Segment", "Follow-up"], ["Segment", "Follow-up"]),
          rows: [
            { cells: [L("Registrovan, nije došao", "Registered, no show"), L("Replay + jedan takeaway", "Replay + one useful takeaway")] },
            { cells: [L("Bio live", "Attended live"), L("Checklist + kontekstualno pitanje", "Checklist + contextual question")] },
            { cells: [L("Postavio pitanje", "Asked a question"), L("Founder personal DM", "Founder personal DM")] },
            { cells: [L("Ostao 75%+", "Stayed 75%+"), L("Warm follow-up lista", "Warm follow-up list")] },
            { cells: [L("Tražio pomoć", "Requested help"), L("CRM deal / sales task", "CRM deal or sales task")] },
          ],
        },
        {
          type: "table",
          caption: L("CRM polja", "CRM fields"),
          headers: H(["Polje", "Svrha"], ["Field", "Purpose"]),
          rows: [
            { cells: [L("Lead source", "Lead source"), L("LinkedIn, webinar, referral, outbound, ad…", "LinkedIn, webinar, referral, outbound, ad…")] },
            { cells: [L("Founder touchpoint", "Founder touchpoint"), L("Komentar, DM, profil, webinar, poziv", "Comment, DM, profile, webinar, call")] },
            { cells: [L("Content topic", "Content topic"), L("Koja tema je privukla interes", "Which topic created interest")] },
            { cells: [L("Signal level", "Signal level"), L("Light / medium / strong", "Light / medium / strong")] },
            { cells: [L("Last interaction", "Last interaction"), L("Datum i tip poslednjeg touch-a", "Date and type of last meaningful touch")] },
            { cells: [L("Next action", "Next action"), L("Šta sledi", "What happens next")] },
            { cells: [L("Pipeline stage", "Pipeline stage"), L("Engaged → conversation → SQL → won/lost", "Engaged → conversation → SQL → won/lost")] },
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
              name: "LinkedIn Sales Navigator",
              logo: "/images/sales-tools/linkedin-sales-navigator.png",
              usedFor: L("Liste accounta i leadova", "Build account and lead lists"),
              whyItFits: L("Fokus founder-a na prave kupce.", "Helps the founder focus on the right buyers."),
              alternative: L("Apollo, Clay, ručna LinkedIn pretraga", "Apollo, Clay, manual LinkedIn search"),
            },
            {
              name: "HubSpot",
              slug: "hubspot",
              usedFor: L("Kontakti, deal-ovi, signali, pipeline", "Track contacts, deals, signals, and pipeline"),
              whyItFits: L("Sprečava gubitak toplih leadova u DM-ovima.", "Prevents warm leads from getting lost in DMs."),
              alternative: L("Pipedrive, Attio, Folk", "Pipedrive, Attio, Folk"),
            },
            {
              name: "Notion",
              logo: "/images/sales-tools/notion.png",
              usedFor: L("ICP, content, messaging, webinar ideje", "Organize ICP, content, messaging, webinar ideas"),
              whyItFits: L("Dobar workspace pre zrelog CRM setup-a.", "Good workspace before CRM setup becomes mature."),
              alternative: L("Airtable, Google Sheets", "Airtable, Google Sheets"),
            },
            {
              name: "Taplio",
              slug: "taplio",
              usedFor: L("Draft, format, schedule, analitika postova", "Draft, format, schedule, and analyze LinkedIn posts"),
              whyItFits: L("Drži konzistentnost objava.", "Helps keep publishing consistent."),
              alternative: L("AuthoredUp, native LinkedIn drafts", "AuthoredUp, native LinkedIn drafts"),
            },
            {
              name: "Make.com / Zapier",
              slug: "n8n",
              usedFor: L("Forme, webinar registracije, CRM, alerti", "Connect forms, webinar registrations, CRM, and alerts"),
              whyItFits: L("Automatizuje handoff signala u CRM.", "Automates signal handoff into CRM."),
              alternative: L("Native integracije, ručni import", "Native integrations, manual imports"),
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
          title: L("Povezan founder-led pipeline", "Connected founder-led pipeline"),
          steps: P(
            [
              "Founder objavi na LinkedIn-u.",
              "ICP kupac komentariše.",
              "Tim doda kupca u HubSpot sa „Founder touchpoint: LinkedIn comment“.",
              "Kupac se registruje na webinar.",
              "Make/Zapier pošalje registraciju u HubSpot i kreira follow-up task.",
              "Founder follow-up posle webinara — kontekstualan DM.",
              "Zakazan sales poziv.",
              "Deal source: „Founder-Led Growth“.",
            ],
            [
              "Founder posts on LinkedIn.",
              "ICP buyer comments.",
              "Team adds buyer to HubSpot with 'Founder touchpoint: LinkedIn comment.'",
              "Buyer registers for webinar.",
              "Make/Zapier sends registration to HubSpot and creates a follow-up task.",
              "Founder follows up after webinar with a contextual DM.",
              "Sales call is booked.",
              "Deal source is tracked as 'Founder-Led Growth.'",
            ],
          ),
          highlight: L(
            "To je sistem — ne nasumično postovanje ni nasumičan outreach.",
            "That is the system. Not random posting. Not random outreach. A connected pipeline workflow.",
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
              title: L("Founder-Led Growth Command Center", "Founder-Led Growth Command Center"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "Founder koji upravlja LinkedIn-om, CRM-om, webinarom, outreach-om i intent signalima kao jednim sistemom.",
                "Founder operating LinkedIn, CRM, webinar, outreach, and intent signals as one connected system.",
              ),
            },
            {
              title: L("Context → Trust → Signal → Conversation → Pipeline", "Context → Trust → Signal → Conversation → Pipeline"),
              placement: L("Pre okvira", "Before framework section"),
              description: L("Petodelni Founder-Led Growth flow.", "Five-part Founder-Led Growth flow."),
            },
            {
              title: L("9-stage Founder-Led Growth System", "The 9-Stage Founder-Led Growth System"),
              placement: L("Core koncepti", "Core concepts"),
              description: L("Uloga svake faze u sistemu.", "Role of each stage in the system."),
            },
            {
              title: L("Founder-Led Growth Readiness Checklist", "Founder-Led Growth Readiness Checklist"),
              placement: L("Pre finalne čekliste", "Before final checklist"),
              description: L("Minimum asset-a pre launch-a outreach-a.", "Minimum assets needed before launching founder-led outreach."),
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
          title: L("Čeklista Lekcije 1", "Lesson 1 checklist"),
          items: P(
            [
              "Jedna rečenica: kome founder pomaže i koji skup problem rešava.",
              "Top 5 buyer problema za koje želiš da budeš poznat.",
              "Audit LinkedIn profila kao ICP kupac.",
              "Tri content pilara: problem, POV, dokaz.",
              "Lista od 50 ICP-relevantnih ljudi za engagement.",
              "Definiši light, medium i strong buying signale.",
              "CRM polje „Founder touchpoint“.",
              "Jedna kontekstualna outreach poruka na osnovu LinkedIn interakcije.",
              "Jedna webinar tema na osnovu ponovljenog buyer problema.",
              "Nedeljni 30-min Founder-Led Growth review u kalendaru.",
            ],
            [
              "Write one sentence that defines who the founder helps and what expensive problem they solve.",
              "List the top 5 buyer problems your company wants to be known for.",
              "Audit the founder's LinkedIn profile as if you were an ICP buyer.",
              "Create three content pillars: problem, point of view, proof.",
              "Build a list of 50 ICP-relevant people to engage with on LinkedIn.",
              "Define light, medium, and strong buying signals.",
              "Create a simple CRM field for 'Founder touchpoint.'",
              "Write one contextual outreach message based on a LinkedIn interaction.",
              "Pick one webinar topic based on a repeated buyer problem.",
              "Schedule a weekly 30-minute Founder-Led Growth review.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "template",
      title: L("Šablon: Founder-Led Growth System Map", "Founder-Led Growth System Map"),
      blocks: [
        {
          type: "template",
          title: L("Kopiraj i popuni", "Copy and fill in"),
          content: L(
            `1. ICP\n\nPomažemo:\n[tip firme] sa [veličina / industrija] koji imaju problem [problem].\n\nPrimer:\nPomažemo B2B service firmama 10–50 ljudi koje previše zavise od referral-a i founder odnosa za pipeline.\n\n2. Buyer problem\n\nSkup problem je:\n[problem na jeziku kupca]\n\nPrimer:\nFounder je i dalje glavni izvor poverenja, ali nema ponovljiv sistem da to pretvori u pipeline.\n\n3. Founder POV\n\nVećina kupaca veruje:\n[uobičajeno uverenje]\n\nMi verujemo:\n[oštrije / kontrarno uverenje]\n\nPrimer:\nVećina misli da treba više outreach volumena. Mi verujemo da treba više konteksta pre outreach-a.\n\n4. LinkedIn obećanje profila\n\nPomažemo [ICP] da postignu [ishod] bez [bol].\n\n5. Content pilari\n\nPilar 1: [edukacija problema]\nPilar 2: [POV]\nPilar 3: [dokaz / praksa]\n\n6. Engagement lista\n\n- [persona 1]\n- [persona 2]\n- [partner]\n- [ekspert]\n- [advocate]\n\n7. Signali\n\nLight: [lajkovi, views, follows]\nMedium: [komentari, repeat, webinar reg]\nStrong: [DM, webinar live, pricing visit]\n\n8. Outreach trigger\n\nKada neko: [signal]\nPošalji: [kontekstualna poruka]\n\n9. CRM polja\n\nLead source | Founder touchpoint | Content topic | Signal level | Last interaction | Next action | Pipeline stage\n\n10. Nedeljna pitanja review-a\n\n- Koji content je privukao ICP?\n- Koji komentari su otvorili razgovore?\n- Koji signali su postali sastanci?\n- Šta radimo više sledeće nedelje?`,
            `1. ICP\n\nWe help:\n[company type] with [team size / revenue / industry] who struggle with [problem].\n\nExample:\nWe help 10–50 person B2B service firms that rely too heavily on referrals and founder relationships for pipeline.\n\n2. Buyer problem\n\nThe expensive problem is:\n[describe in buyer language]\n\nExample:\nThe founder is still the main source of trust, but there is no repeatable system for turning that trust into pipeline.\n\n3. Founder point of view\n\nMost buyers believe:\n[common belief]\n\nWe believe:\n[contrarian / sharper belief]\n\nExample:\nMost founders believe they need more outreach volume. We believe they need more context before outreach.\n\n4. LinkedIn profile promise\n\nHelping [ICP] achieve [outcome] without [pain / failed alternative].\n\n5. Content pillars\n\nPillar 1: [problem education]\nPillar 2: [point of view]\nPillar 3: [proof / practical breakdown]\n\n6. Engagement list\n\n- [buyer persona 1]\n- [buyer persona 2]\n- [partner persona]\n- [industry expert]\n- [customer advocate]\n\n7. Signals to track\n\nLight: [likes, follows, profile views]\nMedium: [comments, repeat engagement, webinar registration]\nStrong: [DM, webinar attendance, pricing/demo visit, buying question]\n\n8. Outreach trigger\n\nWhen someone: [signal]\nSend: [contextual message]\n\n9. CRM fields\n\nLead source | Founder touchpoint | Content topic | Signal level | Last interaction | Next action | Pipeline stage\n\n10. Weekly review questions\n\n- Which content attracted ICP buyers?\n- Which comments created conversations?\n- Which signals turned into meetings?\n- What should we do more of next week?`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Šta je Founder-Led Growth?", "What is Founder-Led Growth?"),
      answer: L(
        "B2B pipeline sistem gde founder koristi ekspertizu, LinkedIn, content, engagement, webinare, outreach, CRM, ads i intent signale da gradi poverenje i prodajne razgovore. Nije lični brending — lični brending je vidljivost; Founder-Led Growth je prihod.",
        "A B2B pipeline system where the founder uses market expertise, LinkedIn presence, content, engagement, webinars, outreach, CRM, ads, and intent signals to create trust and sales conversations. It is not just personal branding — personal branding focuses on visibility; Founder-Led Growth focuses on revenue.",
      ),
    },
    {
      question: L("Zašto Founder-Led Growth radi za B2B?", "Why does Founder-Led Growth work for B2B companies?"),
      answer: L(
        "Jer B2B kupci istražuju pre prodaje — traže poverenje, dokaz i relevantnost. Founder-Led Growth pomaže da se pojaviš u toj fazi.",
        "Because B2B buyers research before they speak to sales. They look for trust, proof, and relevance. Founder-Led Growth helps your company show up during that research phase.",
      ),
    },
    {
      question: L("Da li je samo za SaaS?", "Is Founder-Led Growth only for SaaS companies?"),
      answer: L(
        "Ne. Posebno dobro radi za B2B agencije, konsalting, IT usluge, professional services, rani SaaS i trust-based prodaju. Zajednički faktor: kupcu treba poverenje pre kupovine.",
        "No. It works especially well for B2B agencies, consulting firms, IT services, professional services, early-stage SaaS, and trust-based sales cycles. The common factor is that buyers need trust before they buy.",
      ),
    },
    {
      question: L("Razlika od cold outbound-a?", "How is Founder-Led Growth different from cold outbound?"),
      answer: L(
        "Cold outbound počinje porukom. Founder-Led Growth počinje kontekstom — iz content-a, komentara, webinara, intent signala. Outreach postoji, ali je topliji i bolje tempiran.",
        "Cold outbound starts with the message. Founder-Led Growth starts with context — from content, comments, webinars, intent signals. Outreach still exists; it is just warmer, sharper, and better timed.",
      ),
    },
    {
      question: L("Da li founder mora svaki dan da postuje?", "Does the founder need to post every day?"),
      answer: L(
        "Ne. Potrebna je konzistentnost: 2 korisna posta nedeljno, 10 thoughtful komentara radnim danima, 1 soft CTA nedeljno, 1 webinar ili deep asset mesečno, 1 nedeljni CRM review. Kvalitet pobeđuje volumen.",
        "No. Consistency matters: 2 useful LinkedIn posts per week, 10 thoughtful comments per weekday, 1 soft CTA weekly, 1 webinar or deep-dive asset per month, 1 weekly CRM review. Quality beats volume.",
      ),
    },
    {
      question: L("Kada predati timu?", "When should a founder hand this off to a team?"),
      answer: L(
        "Founder može delegirati produkciju, research, format, CRM update, webinar ops i reporting — ali ne i POV prerano. Founder ne mora sve zauvek, ali njegovo mišljenje mora oblikovati sistem.",
        "The founder can delegate production, research, formatting, CRM updates, webinar operations, and reporting — but should not fully delegate the point of view too early. The founder does not need to do everything forever, but the founder's thinking must shape the system.",
      ),
    },
  ],
  sources: [
    {
      title: L("Gartner — B2B Buying Journey", "Gartner — B2B Buying Journey"),
      url: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
    },
    {
      title: L("Edelman / LinkedIn — 2025 B2B Thought Leadership Impact Report", "Edelman / LinkedIn — 2025 B2B Thought Leadership Impact Report"),
      url: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report",
    },
    {
      title: L("LinkedIn Marketing Blog — Hidden Buyers / Thought Leadership", "LinkedIn Marketing Blog — Hidden Buyers / Thought Leadership"),
      url: "https://www.linkedin.com/business/marketing/blog/research-and-insights/b2b-thought-leadership-influence-hidden-buyers",
    },
    {
      title: L("TrustRadius — 2024 B2B Buying Disconnect Report", "TrustRadius — 2024 B2B Buying Disconnect Report"),
      url: "https://go.trustradius.com/rs/827-FOI-687/images/2024%20B2B%20Buying%20Disconnect%20Year%20of%20the%20Brand%20Crisis.pdf",
    },
    {
      title: L("Ipsos — LinkedIn Sales Solutions Deep Sales Study", "Ipsos — LinkedIn Sales Solutions Deep Sales Study"),
      url: "https://www.ipsos.com/en-us/linkedin-sales-solutions-deep-sales-study",
    },
    {
      title: L("LinkedIn Sales Solutions — Deep Sales Playbook", "LinkedIn Sales Solutions — Deep Sales Playbook"),
      url: "https://business.linkedin.com/sales-solutions/deep-sales-playbook",
    },
    {
      title: L("John Dawes — The 95:5 Rule", "John Dawes — The 95:5 Rule"),
      url: "https://johndawes.info/the-955-rule/",
    },
    {
      title: L("LinkedIn B2B Institute — How B2B Brands Grow", "LinkedIn B2B Institute — How B2B Brands Grow"),
      url: "https://business.linkedin.com/advertise/resources/b2b-institute/how-b2b-brands-grow",
    },
    {
      title: L("Y Combinator — The Sales Playbook for Founders", "Y Combinator — The Sales Playbook for Founders"),
      url: "https://www.ycombinator.com/library/Mo-the-sales-playbook-for-founders",
    },
    {
      title: L("Y Combinator — Enterprise Sales for Founders", "Y Combinator — Enterprise Sales for Founders"),
      url: "https://www.ycombinator.com/library/LF-enterprise-sales-for-founders",
    },
  ],
  relatedLessons: {
    next: {
      slug: "how-to-define-your-icp",
      title: L("Lekcija 2 — Definisanje ICP-a", "Lesson 2 — How to Define Your ICP for Founder-Led Growth"),
      note: L("Sledeći korak u playbook-u.", "Next step in the playbook."),
    },
    related: [
      {
        slug: "linkedin-profile-optimization-founder",
        title: L("Lekcija 3 — LinkedIn profil founder-a", "Lesson 3 — Optimize a Founder's LinkedIn Profile"),
      },
      {
        slug: "linkedin-content-strategy-founder",
        title: L("Lekcija 4 — LinkedIn content strategija", "Lesson 4 — LinkedIn Content Strategy for Founders"),
      },
      {
        slug: "crm-za-founder-led-growth",
        title: L("Lekcija 10 — CRM za Founder-Led Growth", "Lesson 10 — Track Founder-Led Growth in CRM"),
      },
      {
        slug: "buying-signals-b2b-sales",
        title: L("Lekcija 11 — Buying signals", "Lesson 11 — Buying Signals in B2B Sales"),
      },
    ],
  },
  cta: {
    title: L(
      "Founder-Led Growth radi kada postane sistem, ne sporedni projekat",
      "Founder-Led Growth works when it becomes a system, not a side project",
    ),
    body: L(
      "Sledeći korak je povezati pozicioniranje, LinkedIn profil, content, engagement, outreach, webinare, CRM i buying signale u jedan operativni ritam.",
      "The next step is to connect your positioning, LinkedIn profile, content, engagement, outreach, webinars, CRM, and buying signals into one operating rhythm.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Nastavi na Lekciju 2", "Continue to Lesson 2"),
  },
  seoKeywords: P(
    [
      "founder-led growth",
      "founder-led sales",
      "LinkedIn lead generation za founder-e",
      "B2B founder marketing",
      "founder-led content",
      "B2B pipeline generation",
      "LinkedIn outbound",
      "B2B buying signals",
      "founder-led growth Srbija",
      "B2B prodaja preko LinkedIn-a",
    ],
    [
      "founder-led growth",
      "founder-led sales",
      "LinkedIn lead generation for founders",
      "B2B founder marketing",
      "founder-led content",
      "B2B pipeline generation",
      "LinkedIn outbound",
      "B2B buying signals",
    ],
  ),
};
