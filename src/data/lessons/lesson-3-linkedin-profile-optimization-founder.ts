import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("Optimizing Your LinkedIn Profile for Sales in 2026", "Optimizing Your LinkedIn Profile for Sales in 2026"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Praktičan vodič za pretvaranje LinkedIn profila u asset fokusiran na prodaju.",
    "Useful walkthrough for turning a LinkedIn profile into a more sales-focused asset.",
  ),
  placementNote: L(
    "Pogledaj posle okvira konverzije profila ili u sekciji video materijala.",
    "Watch after the profile conversion framework or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/_BEUUq5SBos",
  watchUrl: "https://www.youtube.com/watch?v=_BEUUq5SBos",
};

const video2 = {
  title: L("How To Turn Your LinkedIn Profile Into A Lead Machine", "How To Turn Your LinkedIn Profile Into A Lead Machine"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Relevantno za founder-e koji žele da profil generiše inbound interes i sales razgovore.",
    "Relevant for founders who want their profile to create inbound interest and sales conversations.",
  ),
  placementNote: L(
    "Pogledaj posle sekcije About i Featured.",
    "Watch after the About and Featured sections.",
  ),
  embedUrl: "https://www.youtube.com/embed/n-ulf7AupPY",
  watchUrl: "https://www.youtube.com/watch?v=n-ulf7AupPY",
};

const video3 = {
  title: L("How to optimize your LinkedIn Profile to get clients in 2026", "How to optimize your LinkedIn Profile to get clients in 2026"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Praktičan proces optimizacije profila za privlačenje potencijalnih klijenata.",
    "Practical profile optimization process for attracting potential clients.",
  ),
  placementNote: L(
    "Pogledaj posle koraka za headline i banner.",
    "Watch after the headline and banner steps.",
  ),
  embedUrl: "https://www.youtube.com/embed/3sf8fojVfpM",
  watchUrl: "https://www.youtube.com/watch?v=3sf8fojVfpM",
};

const video4 = {
  title: L("LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips", "LinkedIn Sales Navigator MASTERCLASS - Tutorial, Tips"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za povezivanje optimizacije profila sa Sales Navigator targetiranjem i listama leadova.",
    "Useful for connecting profile optimization with Sales Navigator targeting and lead list building.",
  ),
  placementNote: L(
    "Pogledaj posle tool stack-a ili Sales Navigator sekcije.",
    "Watch after the tool stack or Sales Navigator section.",
  ),
  embedUrl: "https://www.youtube.com/embed/8vnfIsGc2_g",
  watchUrl: "https://www.youtube.com/watch?v=8vnfIsGc2_g",
};

export const lesson3RichContent: RichLessonContent = {
  meta: {
    stage: L("LinkedIn Profile", "LinkedIn Profile"),
    readingTime: L("15–18 min", "15–18 min"),
    difficulty: L("Početnik do srednjeg nivoa", "Beginner to intermediate"),
    outcome: L(
      "Pretvorićeš LinkedIn profil founder-a u buyer-facing landing stranicu koja objašnjava kome pomažeš, koji problem rešavaš, zašto kupci treba da ti veruju i šta treba da urade sledeće.",
      "Turn the founder's LinkedIn profile into a buyer-facing landing page that explains who you help, what problem you solve, why buyers should trust you, and what they should do next.",
    ),
    recommendedTools: L(
      "LinkedIn, Canva, Figma, AuthoredUp, Taplio, LinkedIn Sales Navigator, LinkedIn Analytics, HubSpot CRM, Pipedrive",
      "LinkedIn, Canva, Figma, AuthoredUp, Taplio, LinkedIn Sales Navigator, LinkedIn Analytics, HubSpot CRM, Pipedrive",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 3", "Lesson 3"),
    title: L(
      "Kako optimizovati LinkedIn profil founder-a za B2B lead generation",
      "How to Optimize a Founder's LinkedIn Profile for B2B Lead Generation",
    ),
    paragraphs: P(
      [
        "Tvoj LinkedIn profil nije CV.",
        "To je landing stranica.",
        "Većina founder-a tretira LinkedIn kao arhivu karijere.",
        "Navedu titulu. Opisuju kompaniju. Pominju nagrade. Napišu About sekciju koja zvuči kao pitch deck. Dodaju nekoliko postova. Onda se pitaju zašto profile view-ovi ne postaju razgovori.",
        "Ali kupci ne posećuju tvoj profil da čitaju biografiju.",
        "Posećuju ga jer nešto pokrene radoznalost.",
        "Možda su videli tvoj post. Možda si komentarisao njihov content. Možda su dobili connection request. Možda su te videli na webinaru. Možda je neko pomenuo tvoje ime. Možda je outreach stigao u inbox.",
        "Tvoj profil je mesto gde odlučuju: „Da li je ova osoba relevantna za mene?“ „Da li razume moj problem?“ „Da li je kredibilan?“ „Da li vredi odgovoriti?“",
        "To znači da LinkedIn profil ima jedan posao: pretvoriti radoznalost u poverenje. Ne lajkove. Ne vanity metrike. Ne founder ego. Poverenje.",
        "Jer u Founder-Led Growth-u, profil je most između pažnje i pipeline-a.",
        "Ako je profil vague, čak i dobar content underperform-uje. Ako je profil jasan, svaki post, komentar, DM, webinar i profile view rade jače.",
        "Ova lekcija pokazuje kako pretvoriti LinkedIn profil founder-a u B2B lead generation asset — ne tako što će biti flashy, već tako što će biti jasan.",
      ],
      [
        "Your LinkedIn profile is not a CV.",
        "It is a landing page.",
        "Most founders treat LinkedIn like a career archive.",
        "They list their title. They describe their company. They mention awards. They write an About section that sounds like a pitch deck. They add a few posts. Then they wonder why profile views do not turn into conversations.",
        "But buyers do not visit your profile to read your biography.",
        "They visit because something triggered curiosity.",
        "Maybe they saw your post. Maybe you commented on their content. Maybe they received your connection request. Maybe they saw your name in a webinar. Maybe someone mentioned you. Maybe your outreach landed in their inbox.",
        "Your profile is where they decide: \"Is this person relevant to me?\" \"Do they understand my problem?\" \"Are they credible?\" \"Is it worth replying?\"",
        "That means your LinkedIn profile has one job: convert curiosity into trust. Not likes. Not vanity. Not founder ego. Trust.",
        "Because in Founder-Led Growth, the profile is the bridge between attention and pipeline.",
        "If your profile is vague, even good content underperforms. If your profile is clear, every post, comment, DM, webinar, and profile view works harder.",
        "This lesson shows you how to turn the founder's LinkedIn profile into a B2B lead generation asset. Not by making it flashy. By making it clear.",
      ],
    ),
    callout: L(
      "Profil nije CV. To je trust stranica koja pretvara radoznalost u pipeline.",
      "Your profile is not a CV. It is a trust page that converts curiosity into pipeline.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vs-cv", title: L("Profil vs CV", "Founder LinkedIn profile vs CV") },
    { id: "conversion-framework", title: L("Okvir konverzije profila", "Profile conversion framework") },
    { id: "profile-steps", title: L("Korak po korak optimizacija", "Step-by-step profile optimization framework") },
    { id: "story", title: L("Mesto u Lead Agents sistemu", "Place in the Lead Agents system") },
    { id: "proof", title: L("Dokaz i istraživanja", "Proof / trust section") },
    { id: "implement", title: L("Kako implementirati", "How to implement") },
    { id: "tools", title: L("Idealni stack alata", "Ideal tool stack") },
    { id: "workflow", title: L("Primer workflow-a", "Workflow example") },
    { id: "videos", title: L("Video materijali", "YouTube videos") },
    { id: "visuals", title: L("Predlozi vizuala", "Visual elements") },
    { id: "checklist", title: L("Čeklista", "Checklist") },
    { id: "template", title: L("Šablon: LinkedIn profil", "Template / swipe file") },
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
              "pretvoriti LinkedIn profil founder-a u conversion-focused landing stranicu;",
              "napisati jasan headline koji govori ICP-u;",
              "napraviti banner koji komunicira ponudu za sekunde;",
              "napisati About sekciju koja gradi poverenje i vodi ka akciji;",
              "koristiti Featured content za dokaz i sledeće korake;",
              "strukturirati Experience oko buyer outcome-a, ne istorije poslova;",
              "koristiti dokaz, case study-je i content asset-e za kredibilitet;",
              "kreirati profile CTA-ove koji vode ka DM-ovima, webinarima, lead magnetima ili pozivima;",
              "povezati optimizaciju profila sa content-om, outreach-om i CRM-om.",
            ],
            [
              "turn a founder LinkedIn profile into a conversion-focused landing page;",
              "write a clear headline that speaks to your ICP;",
              "create a banner that communicates your offer in seconds;",
              "write an About section that builds trust and leads to action;",
              "use Featured content to show proof and create next steps;",
              "structure Experience around buyer outcomes, not job history;",
              "use proof, case studies, and content assets to increase credibility;",
              "create profile CTAs that lead to DMs, webinars, lead magnets, or calls;",
              "connect profile optimization to content, outreach, and CRM.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1611944936353-4e8ba551d6f3?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "LinkedIn profil na ekranu — landing stranica, ne CV",
            "LinkedIn profile on screen — a landing page, not a CV",
          ),
          caption: L(
            "Kupac odlučuje za sekunde: relevantnost, poverenje, sledeći korak.",
            "Buyers decide in seconds: relevance, trust, and the next step.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Profil u Founder-Led Growth sistemu", "Profile in the Founder-Led Growth system"),
          subtitle: L(
            "Svaki kanal vodi nazad na profil — profil vodi ka pipeline-u.",
            "Every channel sends people back to the profile — the profile feeds pipeline.",
          ),
          stages: [
            L("Post", "Post"),
            L("Komentar", "Comment"),
            L("Profil", "Profile"),
            L("Trust", "Trust"),
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
              "U Founder-Led Growth-u, svaki kanal šalje ljude nazad na founder-ov profil. Content šalje ljude tamo. Komentari šalju ljude tamo. Connection request-ovi šalju ljude tamo. Webinari šalju ljude tamo. Outreach šalje ljude tamo. LinkedIn Ads mogu slati ljude tamo. Sales Navigator aktivnost šalje ljude tamo.",
              "To znači da profil nije samo branding asset. To je sales infrastruktura.",
              "LinkedIn-ovo social selling uputstvo preporučuje kvalitetnu profilnu sliku, headline koji ide dalje od job title-a, summary koji oživljava veštine, social proof i jasan call to action.",
              "LinkedIn takođe kaže da profili sa slikom imaju znatno veću verovatnoću pregleda, i preporučuje prodavcima da jasno objasne šta rade i kako to rade.",
              "Tačno tako treba da radi founder profil — ne kao CV, već kao trust stranica.",
              "Ako neko poseti tvoj profil i i dalje ne može da odgovori na: kome pomažeš, koji skup problem rešavaš, zašto da ti veruju, koji dokaz imaš, šta treba da urade sledeće — profil curi pipeline.",
              "Većina founder-a ovde pada. Nateraju kupca da radi previše. Tvoj profil treba da smanji trenje i učini sledeći korak očiglednim.",
            ],
            [
              "In Founder-Led Growth, every channel sends people back to the founder's profile. Content sends people there. Comments send people there. Connection requests send people there. Webinars send people there. Outreach sends people there. LinkedIn Ads can send people there. Sales Navigator activity sends people there.",
              "That means the profile is not just a branding asset. It is sales infrastructure.",
              "LinkedIn's own social selling guidance recommends using a high-quality profile photo, going beyond job title in the headline, bringing skills to life in the summary, showing social proof, and including a clear call to action.",
              "LinkedIn also says profiles with a picture are significantly more likely to be viewed, and recommends that sellers clearly explain what they do and how they do it.",
              "That is exactly how a founder profile should work. Not as a CV. As a trust page.",
              "If someone visits your profile and still cannot answer: who you help, what expensive problem you solve, why they should trust you, what proof you have, what they should do next — the profile is leaking pipeline.",
              "Most founders fail here. They make the buyer work too hard. Your profile should reduce friction and make the next step obvious.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Šta šalje ljude na tvoj profil", "What sends people to your profile"),
          subtitle: L(
            "Svaki kanal završava na istom mestu — tvom trust layer-u.",
            "Every channel ends in the same place — your trust layer.",
          ),
          stages: [
            L("Post", "Post"),
            L("Komentar", "Comment"),
            L("Outreach", "Outreach"),
            L("Webinar", "Webinar"),
            L("Ads", "Ads"),
            L("Profil", "Profile"),
            L("Pipeline", "Pipeline"),
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
              "LinkedIn profil treba da odgovori na pet pitanja za manje od 10 sekundi:",
              "1. Kome pomažeš? 2. Koji problem rešavaš? 3. Koji outcome kreiraš? 4. Zašto kupac treba da ti veruje? 5. Šta treba da urade sledeće?",
              "Ako profil ne odgovara na ta pitanja, nije optimizovan za lead generation. Može i dalje da izgleda profesionalno. Ali profesionalno nije dovoljno. Profesionalno ne kreira pipeline. Specifično kreira.",
            ],
            [
              "Your LinkedIn profile should answer five questions in under 10 seconds:",
              "1. Who do you help? 2. What problem do you solve? 3. What outcome do you create? 4. Why should the buyer trust you? 5. What should they do next?",
              "If your profile does not answer those five questions, it is not optimized for lead generation. It may still look professional. But professional is not enough. Professional does not create pipeline. Specific does.",
            ],
          ),
        },
        {
          type: "checklist",
          title: L("10-sekundni test profila — 5 pitanja", "10-second profile test — 5 questions"),
          items: P(
            [
              "Kome pomažeš? (ICP mora da se prepozna za 2 sekunde)",
              "Koji skup problem rešavaš? (jezik kupca, ne tvoj pitch)",
              "Koji outcome kreiraš? (šta se menja posle saradnje)",
              "Zašto da ti veruju? (dokaz, POV, Featured)",
              "Šta treba da urade sledeće? (jedan jasan CTA)",
            ],
            [
              "Who do you help? (ICP must recognize themselves in 2 seconds)",
              "What expensive problem do you solve? (buyer language, not your pitch)",
              "What outcome do you create? (what changes after working with you)",
              "Why should they trust you? (proof, POV, Featured)",
              "What should they do next? (one clear CTA)",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "vs-cv",
      title: L("Founder LinkedIn profil vs CV", "Founder LinkedIn profile vs CV"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Većina founder-a piše: „Founder & CEO at GrowthOps. Passionate about sales, marketing, technology, and helping businesses scale.“ To ne govori ništa.",
              "Jači profil kaže: „Helping B2B SaaS founders turn LinkedIn activity into qualified pipeline before hiring a full SDR team.“ Razlika nije u stilu. Razlika je u relevantnosti.",
            ],
            [
              "Most founders write: \"Founder & CEO at GrowthOps. Passionate about sales, marketing, technology, and helping businesses scale.\" That says nothing.",
              "A stronger profile says: \"Helping B2B SaaS founders turn LinkedIn activity into qualified pipeline before hiring a full SDR team.\" The difference is not style. The difference is relevance.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("CV stil profila", "CV-style profile"),
              subtitle: L("Karijera founder-a", "Founder's career"),
              variant: "muted",
              items: P(
                [
                  "„Founder & CEO“ + generički tagline",
                  "About = company pitch",
                  "Experience = job duties",
                  "Nema jasan CTA",
                ],
                [
                  "\"Founder & CEO\" + generic tagline",
                  "About = company pitch",
                  "Experience = job duties",
                  "No clear CTA",
                ],
              ),
            },
            {
              title: L("Landing page stil", "Landing page-style profile"),
              subtitle: L("Buyer problem", "Buyer problem"),
              variant: "accent",
              items: P(
                [
                  "Headline = ICP + outcome",
                  "Banner = obećanje za 3 sekunde",
                  "Featured = dokaz + lead magnet",
                  "Jasan sledeći korak (DM, webinar, asset)",
                ],
                [
                  "Headline = ICP + outcome",
                  "Banner = promise in 3 seconds",
                  "Featured = proof + lead magnet",
                  "Clear next step (DM, webinar, asset)",
                ],
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("CV stil vs landing page stil", "CV-style profile vs landing page-style profile"),
          headers: H(["CV stil", "Landing page stil"], ["CV-style profile", "Landing page-style profile"]),
          rows: [
            { cells: [L("Fokus na karijeru founder-a", "Focuses on the founder's career"), L("Fokus na buyer problem", "Focuses on the buyer's problem")] },
            { cells: [L("Navodi titule i odgovornosti", "Lists titles and responsibilities"), L("Komunicira outcome-e i dokaz", "Communicates outcomes and proof")] },
            { cells: [L("Kaže „Founder & CEO“", "Says \"Founder & CEO\""), L("Kaže kome founder pomaže i kako", "Says who the founder helps and how")] },
            { cells: [L("Koristi širok jezik", "Uses broad language"), L("Koristi ICP-specifičan jezik", "Uses ICP-specific language")] },
            { cells: [L("Nema jasan CTA", "Has no clear CTA"), L("Daje jasan sledeći korak", "Gives a clear next step")] },
            { cells: [L("Prikazuje informacije o kompaniji", "Shows company information"), L("Prikazuje buyer relevantnost", "Shows buyer relevance")] },
            { cells: [L("Deluje kao biografija", "Feels like a biography"), L("Deluje kao trust stranica", "Feels like a trust page")] },
            { cells: [L("Loše konvertuje", "Converts poorly"), L("Stvara bolje odgovore i inbound interes", "Creates better replies and inbound interest")] },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "conversion-framework",
      title: L("Okvir konverzije LinkedIn profila", "The Founder LinkedIn Profile Conversion Framework"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1542744173-8e7e13410ec9?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Tim pregleda LinkedIn profil i banner dizajn",
            "Team reviewing LinkedIn profile and banner design",
          ),
          caption: L(
            "Banner i headline su prvi conversion layer — Canva ili Figma za vizuel, copy za jasnoću.",
            "Banner and headline are the first conversion layer — Canva or Figma for visuals, copy for clarity.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Okvir konverzije profila", "Profile conversion framework"),
          subtitle: L(
            "Redosled koji kupac prođe za manje od minuta.",
            "The sequence a buyer goes through in under a minute.",
          ),
          stages: [
            L("Attention", "Attention"),
            L("Relevance", "Relevance"),
            L("Trust", "Trust"),
            L("Proof", "Proof"),
            L("Action", "Action"),
          ],
        },
        {
          type: "framework-intro",
          title: L("Attention → Relevance → Trust → Proof → Action", "Attention → Relevance → Trust → Proof → Action"),
          description: L(
            "Tako profil konvertuje — ne objašnjavajući sve, već vodeći kupca kroz jednostavnu sekvencu.",
            "This is how a profile converts. Not by explaining everything. By guiding the buyer through a simple sequence.",
          ),
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Attention", "Attention"),
              whatToDo: L(
                "Profilna slika i banner zaustavljaju scroll. Kupac odmah treba da oseti: „Ovo izgleda profesionalno i relevantno.“",
                "The profile photo and banner stop the scroll. The buyer should instantly feel: \"This looks professional and relevant.\"",
              ),
              whyItMatters: L(
                "Prvi utisak se dešava pre nego što kupac pročita bilo šta. Ako vizuelni elementi ne grade poverenje, ostatak profila se ne čita.",
                "The first impression happens before the buyer reads anything. If the visual elements do not build trust, the rest of the profile does not get read.",
              ),
              example: L(
                "Banner: „Founder-Led Growth Systems for B2B Companies“ + subline o pipeline-u + logo + CTA „Read the playbook“.",
                "Banner: \"Founder-Led Growth Systems for B2B Companies\" + subline about pipeline + logo + CTA \"Read the playbook\".",
              ),
              commonMistake: L(
                "Prazan banner, apstraktni oblici ili motivacioni citati koji ne govore kupcu ništa.",
                "Empty banner, abstract shapes, or motivational quotes that tell the buyer nothing.",
              ),
              tryThis: L(
                "Pitaj: „Da li banner za 3 sekunde objašnjava outcome koji ICP želi?“ Ako ne, prepiši ga.",
                "Ask: \"Does the banner explain the outcome your ICP wants in 3 seconds?\" If not, rewrite it.",
              ),
              highlight: L(
                "Banner je najveći vizuelni prostor na profilu — ne troši ga.",
                "The banner is the largest visual space on the profile — do not waste it.",
              ),
            },
            {
              step: 2,
              title: L("Relevance", "Relevance"),
              whatToDo: L(
                "Headline govori kupcu: „Ova osoba pomaže ljudima poput mene.“",
                "The headline tells the buyer: \"This person helps people like me.\"",
              ),
              whyItMatters: L(
                "Headline se pojavljuje svuda — search, komentari, connection request-ovi, DM-ovi, profile preview, post preview. To nije samo profile copy. To je distribution copy.",
                "The headline appears everywhere — search results, comments, connection requests, DMs, profile preview, post previews. It is not just profile copy. It is distribution copy.",
              ),
              example: L(
                "„Helping B2B founders turn LinkedIn, content & outreach into predictable pipeline“ umesto „Founder & CEO at Lead Agents“.",
                "\"Helping B2B founders turn LinkedIn, content & outreach into predictable pipeline\" instead of \"Founder & CEO at Lead Agents\".",
              ),
              commonMistake: L(
                "Vođenje titulom umesto buyer value-a.",
                "Leading with title instead of buyer value.",
              ),
              tryThis: L(
                "Formula: „I help [ICP] achieve [outcome] through [mechanism].“",
                "Formula: \"I help [ICP] achieve [outcome] through [mechanism].\"",
              ),
              highlight: L(
                "Titula nije hook. Buyer problem jeste.",
                "Your title is not the hook. The buyer's problem is.",
              ),
            },
            {
              step: 3,
              title: L("Trust", "Trust"),
              whatToDo: L(
                "About sekcija objašnjava: „Ova osoba razume moj problem.“",
                "The About section explains: \"This person understands my problem.\"",
              ),
              whyItMatters: L(
                "Dobra About sekcija čini da se kupac oseća shvaćeno pre nego što ikad razgovara sa tobom.",
                "A good About section makes the buyer feel understood before they ever speak to you.",
              ),
              example: L(
                "Počni sa: „Most B2B founders do not have a lead problem. They have a trust problem.“ Zatim POV, sistem, dokaz, CTA.",
                "Start with: \"Most B2B founders do not have a lead problem. They have a trust problem.\" Then POV, system, proof, CTA.",
              ),
              commonMistake: L(
                "Pisanje About sekcije kao company description umesto buyer conversation.",
                "Writing the About section like a company description instead of a buyer conversation.",
              ),
              tryThis: L(
                "Struktura: Problem → Zašto stari način puca → POV → Šta pomažeš → Dokaz → CTA.",
                "Structure: Problem → Why the old way breaks → POV → What you help with → Proof → CTA.",
              ),
              highlight: L(
                "Kupac ne mari šta radiš dok ne oseti da razumeš sa čime se bori.",
                "The buyer does not care what you do until they feel you understand what they are dealing with.",
              ),
            },
            {
              step: 4,
              title: L("Proof", "Proof"),
              whatToDo: L(
                "Featured content, postovi, case study-ji i Experience pokazuju: „Ova osoba je ovo već uradila.“",
                "Featured content, posts, case studies, and experience show: \"This person has done this before.\"",
              ),
              whyItMatters: L(
                "Kupci skeniraju dokaz pre nego što odgovore. Bez specifičnog proof-a, profil zvuči kao obećanje bez osnova.",
                "Buyers scan for proof before they reply. Without specific proof, the profile sounds like a promise without foundation.",
              ),
              example: L(
                "Featured: Playbook + case study „1,500+ B2B leads from LinkedIn“ + webinar registration + Book a consultation.",
                "Featured: Playbook + case study \"1,500+ B2B leads from LinkedIn\" + webinar registration + Book a consultation.",
              ),
              commonMistake: L(
                "Vague proof: „Trusted by clients worldwide“ umesto „Worked with 30+ B2B companies across SaaS, IT services, consulting.“",
                "Vague proof: \"Trusted by clients worldwide\" instead of \"Worked with 30+ B2B companies across SaaS, IT services, consulting.\"",
              ),
              tryThis: L(
                "Featured sekcija: jedan educational asset, jedan proof asset, jedan conversion asset.",
                "Featured section: one educational asset, one proof asset, one conversion asset.",
              ),
              highlight: L(
                "Featured ne treba da pokaže ono na šta si ponosan — već ono što pomaže kupcu da napravi sledeći korak.",
                "Your Featured section should not show what you are proud of. It should show what helps the buyer take the next step.",
              ),
            },
            {
              step: 5,
              title: L("Action", "Action"),
              whatToDo: L(
                "CTA čini sledeći korak očiglednim: „Znam šta da uradim ako želim da idem dalje.“",
                "The CTA makes the next step obvious: \"I know what to do if I want to go deeper.\"",
              ),
              whyItMatters: L(
                "Profil bez CTA-a stvara pasivan interes. Profil sa jasnim CTA-om stvara akciju.",
                "A profile without a CTA creates passive interest. A profile with a clear CTA creates action.",
              ),
              example: L(
                "„Send me 'PLAYBOOK' if you want the Founder-Led Growth checklist.“ ili „Book a 30-minute consultation.“",
                "\"Send me 'PLAYBOOK' if you want the Founder-Led Growth checklist.\" or \"Book a 30-minute consultation.\"",
              ),
              commonMistake: L(
                "Samo „Contact me“ ili nikakav CTA.",
                "Using only \"Contact me\" or no CTA at all.",
              ),
              tryThis: L(
                "Jedan primarni CTA kroz banner, About, Featured i postove. CTA treba da odgovara buyer stage-u.",
                "Use one primary CTA across your banner, About section, Featured content, and posts. The CTA should match the buyer's stage.",
              ),
              highlight: L(
                "Ne svako je spremno za call. Nekome treba checklist, nekom webinar, nekom DM.",
                "Not everyone is ready to book a call. Some need a checklist, some a webinar, some a DM.",
              ),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Dobar profil ne tera kupca da više razmišlja. Pomaže mu da brže odluči.",
            "A good profile does not make the buyer think harder. It helps them decide faster.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "profile-steps",
      title: L("Korak po korak okvir optimizacije profila", "Step-by-step profile optimization framework"),
      blocks: [
        {
          type: "zone-cards",
          title: L("Anatomija profila — šta kupac vidi dok skroluje", "Profile anatomy — what buyers see as they scroll"),
          subtitle: L(
            "Svaka zona ima jedan posao. Ako zona ne radi posao, curi pipeline.",
            "Each zone has one job. If a zone does not do its job, you leak pipeline.",
          ),
          cards: [
            {
              zone: L("Profilna slika", "Profile photo"),
              eyebrow: L("1. sekunda", "1 sec"),
              job: L("Trust signal — da li izgledaš kredibilno i pristupačno.", "Trust signal — do you look credible and approachable."),
              doThis: L("Jasno lice, čista pozadina, profesionalno ali ljudski.", "Clear face, clean background, professional but human."),
              avoid: L("Grupna slika, selfie, naočare za sunce, previše AI filtera.", "Group photo, casual selfie, sunglasses, over-edited AI look."),
            },
            {
              zone: L("Banner", "Banner"),
              eyebrow: L("3 sekunde", "3 sec"),
              job: L("Billboard za ICP — outcome + mehanizam.", "Billboard for your ICP — outcome + mechanism."),
              doThis: L("Jedno obećanje, jedna subline, logo, opcioni proof, jedan CTA.", "One promise, one subline, logo, optional proof, one CTA."),
              avoid: L("Apstraktni oblici, samo logo, motivacioni citati.", "Abstract shapes, logo only, motivational quotes."),
            },
            {
              zone: L("Headline", "Headline"),
              eyebrow: L("Svuda", "Everywhere"),
              job: L("Distribution copy — kome pomažeš i zašto je bitno.", "Distribution copy — who you help and why it matters."),
              doThis: L("„I help [ICP] achieve [outcome] through [mechanism].“", "\"I help [ICP] achieve [outcome] through [mechanism].\""),
              avoid: L("„Founder & CEO“, buzzwords, „helping businesses grow.“", "\"Founder & CEO\", buzzwords, \"helping businesses grow.\""),
            },
            {
              zone: L("About", "About"),
              eyebrow: L("Sales page", "Sales page"),
              job: L("Kupac mora da oseti: „Ova osoba razume moj problem.“", "Buyer must feel: \"This person understands my problem.\""),
              doThis: L("Problem → stari način puca → POV → dokaz → CTA.", "Problem → why the old way breaks → POV → proof → CTA."),
              avoid: L("Company description, biografija, lista usluga.", "Company description, biography, service list."),
            },
            {
              zone: L("Featured", "Featured"),
              eyebrow: L("Proof + next step", "Proof + next step"),
              job: L("Dokaz i sledeći korak bez pitch-a.", "Proof and next step without a pitch."),
              doThis: L("Playbook, case study, webinar, checklist, „Book a call“.", "Playbook, case study, webinar, checklist, \"Book a call\"."),
              avoid: L("Random linkovi, stari PDF-ovi, ništa relevantno ICP-u.", "Random links, old PDFs, nothing relevant to ICP."),
            },
            {
              zone: L("Experience", "Experience"),
              eyebrow: L("Outcome-i", "Outcomes"),
              job: L("Pokaži business outcomes, ne job duties.", "Show business outcomes, not job duties."),
              doThis: L("Šta si pomogao klijentima da postignu — u buyer jeziku.", "What you helped clients achieve — in buyer language."),
              avoid: L("Lista odgovornosti, generički opisi pozicija.", "Responsibility lists, generic role descriptions."),
            },
          ],
        },
        {
          type: "illustration",
          src: "/images/playbook/lesson-3/lara-acosta-linkedin-profile.png",
          alt: L(
            "Primer optimizovanog LinkedIn profila — Lara Acosta: banner, headline, social proof i CTA",
            "Example of an optimized LinkedIn profile — Lara Acosta: banner, headline, social proof, and CTA",
          ),
          caption: L(
            "Primer dobrog profila: banner odmah komunicira obećanje i proof, headline je ICP-specifičan, a CTA vodi ka sledećem koraku.",
            "Example of a strong profile: the banner communicates promise and proof instantly, the headline is ICP-specific, and the CTA drives the next step.",
          ),
          credit: L("Primer: Lara Acosta", "Example: Lara Acosta"),
          href: "https://www.linkedin.com/in/laraacostar/",
          fit: "contain",
          aspectRatio: "1024 / 749",
        },
        {
          type: "table",
          caption: L("Headline formule (kopiraj i prilagodi)", "Headline formulas (copy and adapt)"),
          headers: H(["Formula", "Primer"], ["Formula", "Example"]),
          rows: [
            {
              cells: [
                L("I help [ICP] achieve [outcome] through [mechanism]", "I help [ICP] achieve [outcome] through [mechanism]"),
                L("I help B2B founders turn LinkedIn & outreach into predictable pipeline", "I help B2B founders turn LinkedIn & outreach into predictable pipeline"),
              ],
            },
            {
              cells: [
                L("[Outcome] for [ICP] using [system]", "[Outcome] for [ICP] using [system]"),
                L("Predictable B2B pipeline for founder-led teams using LinkedIn + CRM", "Predictable B2B pipeline for founder-led teams using LinkedIn + CRM"),
              ],
            },
            {
              cells: [
                L("Founder-Led Growth for [ICP] with [specific pain]", "Founder-Led Growth for [ICP] with [specific pain]"),
                L("Founder-Led Growth for B2B service firms stuck on referrals-only pipeline", "Founder-Led Growth for B2B service firms stuck on referrals-only pipeline"),
              ],
            },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Kreni od ICP-a", "Start with the ICP"),
              whatToDo: L(
                "Pre nego što edituješ profil, definiši tačno koga founder želi da privuče.",
                "Before editing the profile, define exactly who the founder wants to attract.",
              ),
              whyItMatters: L(
                "Profil pisan za sve ne konvertuje nikoga.",
                "A profile written for everyone converts no one.",
              ),
              example: L(
                "Ako je ICP B2B SaaS 10–50 ljudi gde founder i dalje vodi prodaju, profil ne treba da kaže „I help companies grow.“ Treba da kaže: „Helping B2B SaaS founders turn founder-led sales into a repeatable pipeline system.“",
                "If the ICP is 10–50 person B2B SaaS teams where the founder still drives sales, the profile should not say \"I help companies grow.\" It should say: \"Helping B2B SaaS founders turn founder-led sales into a repeatable pipeline system.\"",
              ),
              commonMistake: L(
                "Pisanje profila pre definisanja ICP-a.",
                "Writing the profile before defining the ICP.",
              ),
              tryThis: L(
                "Napiši pre nego što dirneš profil: „My profile is for [ICP] who struggle with [expensive problem] and want [desired outcome].“",
                "Write this sentence before touching the profile: \"My profile is for [ICP] who struggle with [expensive problem] and want [desired outcome].\"",
              ),
              highlight: L(
                "Profil nije o founder-u. Profil je o tome da buyer prepozna sebe.",
                "The profile is not about the founder. It is about the buyer recognizing themselves.",
              ),
            },
            {
              step: 2,
              title: L("Profilna slika koja gradi poverenje", "Use a profile photo that creates trust"),
              whatToDo: L(
                "Koristi aktuelnu, visokokvalitetnu, profesionalnu sliku gde founder izgleda pristupačno i kredibilno.",
                "Use a current, high-quality, professional profile photo where the founder looks approachable and credible.",
              ),
              whyItMatters: L(
                "Slika je prvi trust signal. LinkedIn preporučuje aktuelnu, visokorezolucionu sliku i napominje da profili sa slikama imaju mnogo veću verovatnoću pregleda.",
                "The photo is the first trust signal. LinkedIn recommends a current, high-resolution profile picture and notes that profiles with photos are much more likely to be viewed.",
              ),
              example: L(
                "Dobro: jasno lice, čista pozadina, samopouzdan izraz, dobro osvetljenje, profesionalno ali ljudski. Loše: cropped wedding photo, blurry selfie, naočare za sunce, grupna slika, previše AI editovana slika.",
                "Good: clear face, clean background, confident expression, good lighting, professional but human. Bad: cropped wedding photo, blurry selfie, sunglasses, group photo, over-edited AI image.",
              ),
              commonMistake: L(
                "Pokušaj da izgledaš „cool“ umesto kredibilno.",
                "Trying to look \"cool\" instead of credible.",
              ),
              tryThis: L(
                "Pitaj: „Da li bi moj ICP verovao ovoj osobi dovoljno da prihvati business call?“ Ako ne, ponovi slikanje.",
                "Ask: \"Would my ICP trust this person enough to take a business call?\" If not, reshoot it.",
              ),
              highlight: L(
                "Slika nije self-expression. Slika je trust signal.",
                "The photo is not self-expression. The photo is a trust signal.",
              ),
            },
            {
              step: 3,
              title: L("Banner kao positioning asset", "Turn the banner into a positioning asset"),
              whatToDo: L(
                "Koristi LinkedIn banner da komunicira market promise. Struktura: Headline [outcome] → Subline [mechanism] → Proof [optional] → CTA.",
                "Use the LinkedIn banner to communicate your market promise. Structure: Headline [outcome] → Subline [mechanism] → Proof [optional] → CTA.",
              ),
              whyItMatters: L(
                "Većina banner-a troši najveći vizuelni prostor: apstraktni oblici, samo logo, motivacioni citati, generički „growth“ jezik, ili ništa.",
                "Most banners waste the largest visual space: abstract shapes, company logo only, motivational quotes, generic \"growth\" language, or nothing at all.",
              ),
              example: L(
                "„Founder-Led Growth Systems for B2B Companies“ ili „Turn LinkedIn, Content, Outreach & CRM Into Predictable B2B Pipeline“ ili „Helping B2B Founders Build Pipeline Without Relying Only on Cold Outbound“.",
                "\"Founder-Led Growth Systems for B2B Companies\" or \"Turn LinkedIn, Content, Outreach & CRM Into Predictable B2B Pipeline\" or \"Helping B2B Founders Build Pipeline Without Relying Only on Cold Outbound\".",
              ),
              commonMistake: L(
                "Lep banner koji ne govori ništa.",
                "Using a pretty banner that says nothing.",
              ),
              tryThis: L(
                "Banner sa: jedno jasno obećanje, jedna subline, company logo, opcioni proof point, jednostavan CTA.",
                "Create a banner with: one clear promise, one subline, company logo, optional proof point, simple CTA.",
              ),
              highlight: L(
                "Banner je billboard za ICP — ne ukras.",
                "The banner is a billboard for your ICP — not decoration.",
              ),
            },
            {
              step: 4,
              title: L("Headline oko buyer value-a", "Rewrite the headline around buyer value"),
              whatToDo: L(
                "Napiši headline koji kupcu odmah objašnjava kome pomažeš i zašto je to bitno. LinkedIn preporučuje da ideš dalje od job title-a.",
                "Write a headline that makes the buyer understand who you help and why it matters. LinkedIn recommends going beyond your job title.",
              ),
              whyItMatters: L(
                "Headline je distribution copy — pojavljuje se u search-u, komentarima, connection request-ovima, DM-ovima, profile preview-u.",
                "The headline is distribution copy — it appears in search, comments, connection requests, DMs, and profile previews.",
              ),
              example: L(
                "Loše: „Founder & CEO at Lead Agents“, „Growth Consultant | Entrepreneur | Speaker“, „Helping businesses grow.“ Bolje: „Helping B2B founders turn LinkedIn, content & outreach into predictable pipeline.“",
                "Bad: \"Founder & CEO at Lead Agents\", \"Growth Consultant | Entrepreneur | Speaker\", \"Helping businesses grow.\" Better: \"Helping B2B founders turn LinkedIn, content & outreach into predictable pipeline.\"",
              ),
              commonMistake: L(
                "Vođenje titulom umesto value-a.",
                "Leading with title instead of value.",
              ),
              tryThis: L(
                "Formula: „I help [ICP] achieve [outcome] through [mechanism].“ Primer: „I help B2B service firms turn founder expertise into qualified pipeline through LinkedIn & outreach.“",
                "Formula: \"I help [ICP] achieve [outcome] through [mechanism].\" Example: \"I help B2B service firms turn founder expertise into qualified pipeline through LinkedIn & outreach.\"",
              ),
              highlight: L(
                "Titula nije hook. Buyer problem jeste.",
                "Your title is not the hook. The buyer's problem is.",
              ),
            },
          ],
        },
        { type: "video", video: video3 },
        {
          type: "framework-steps",
          steps: [
            {
              step: 5,
              title: L("About sekcija kao sales page", "Write the About section like a sales page"),
              whatToDo: L(
                "Koristi About sekciju da objasniš buyer problem, POV, dokaz i sledeći korak. Struktura: Problem → Zašto stari način puca → POV → Šta pomažeš → Dokaz → CTA.",
                "Use the About section to explain the buyer problem, your point of view, proof, and next step. Structure: Problem → Why the old way breaks → POV → What you help with → Proof → CTA.",
              ),
              whyItMatters: L(
                "Dobra About sekcija čini da se kupac oseća shvaćeno pre nego što ikad razgovara sa tobom.",
                "A good About section makes the buyer feel understood before they ever speak to you.",
              ),
              example: L(
                "Loše: „I'm the founder of a growth agency. We help companies with sales, marketing, automation, and growth.“ Bolje: počni sa „Most B2B founders do not have a lead problem. They have a trust problem.“ → objasni sistem → dodaj proof → završi sa „Send me a message with the word 'PLAYBOOK'.“",
                "Bad: \"I'm the founder of a growth agency. We help companies with sales, marketing, automation, and growth.\" Better: start with \"Most B2B founders do not have a lead problem. They have a trust problem.\" → explain the system → add proof → end with \"Send me a message with the word 'PLAYBOOK'.\"",
              ),
              commonMistake: L(
                "Pisanje About sekcije kao company description umesto buyer conversation.",
                "Writing the About section like a company description instead of a buyer conversation.",
              ),
              tryThis: L(
                "Počni About sekciju sa buyer problemom, ne sa biografijom.",
                "Start your About section with the buyer's problem, not your bio.",
              ),
              highlight: L(
                "Kupac ne mari šta radiš dok ne oseti da razumeš sa čime se bori.",
                "The buyer does not care what you do until they feel you understand what they are dealing with.",
              ),
            },
            {
              step: 6,
              title: L("Featured content kao sledeći korak", "Use Featured content as the next step"),
              whatToDo: L(
                "Koristi Featured sekciju da vodiš kupca ka najboljoj sledećoj akciji: playbook, case study, webinar, newsletter, lead magnet, best post, customer story, demo page, checklist.",
                "Use the Featured section to guide the buyer toward the best next action: playbook, case study, webinar, newsletter, lead magnet, best post, customer story, demo page, checklist.",
              ),
              whyItMatters: L(
                "Featured content je mesto gde pažnja postaje konverzija.",
                "Featured content is where attention becomes conversion.",
              ),
              example: L(
                "Featured 1: Founder-Led Growth Playbook. Featured 2: Case study — 1,500+ B2B leads from LinkedIn. Featured 3: Webinar registration. Featured 4: Book a consultation.",
                "Featured 1: Founder-Led Growth Playbook. Featured 2: Case study — How we generated 1,500+ B2B leads from LinkedIn. Featured 3: Webinar registration. Featured 4: Book a consultation.",
              ),
              commonMistake: L(
                "Featuring random postova koji su dobili lajkove ali ne pomeraju kupca ka sales razgovoru.",
                "Featuring random posts that got likes but do not move buyers closer to a sales conversation.",
              ),
              tryThis: L(
                "Izaberi 3 featured asset-a: jedan educational, jedan proof, jedan conversion.",
                "Choose 3 featured assets: one educational asset, one proof asset, one conversion asset.",
              ),
              highlight: L(
                "Featured ne treba da pokaže ono na šta si ponosan — već ono što pomaže kupcu da napravi sledeći korak.",
                "Your Featured section should not show what you are proud of. It should show what helps the buyer take the next step.",
              ),
            },
            {
              step: 7,
              title: L("Experience oko outcome-a", "Reframe Experience around outcomes"),
              whatToDo: L(
                "Prepiši Experience sekciju da pokaže komercijalne outcome-e i buyer relevantnost: kome pomažeš, koje probleme rešavaš, koje outcome-e kreiraš, proof points, ključne usluge, CTA.",
                "Rewrite the Experience section to show commercial outcomes and buyer relevance: who you help, what problems you solve, what outcomes you create, proof points, key services, CTA.",
              ),
              whyItMatters: L(
                "Kupci često skeniraju Experience da razumeju kredibilitet. Većina founder-a piše Experience kao job description.",
                "Buyers often scan Experience to understand credibility. Most founders write Experience like a job description.",
              ),
              example: L(
                "Ne piši: „Responsible for sales, marketing, operations, strategy, and business development.“ Piši: „At Lead Agents, we build Founder-Led Growth systems for B2B companies that want predictable pipeline from LinkedIn, content, outreach, webinars, CRM, and buying signals.“",
                "Do not write: \"Responsible for sales, marketing, operations, strategy, and business development.\" Write: \"At Lead Agents, we build Founder-Led Growth systems for B2B companies that want predictable pipeline from LinkedIn, content, outreach, webinars, CRM, and buying signals.\"",
              ),
              commonMistake: L(
                "Pisanje odgovornosti umesto outcome-a.",
                "Writing responsibilities instead of outcomes.",
              ),
              tryThis: L(
                "Za svaku Experience sekciju odgovori: „Šta bi moj ICP morao da vidi ovde da bi mi više verovao?“",
                "For each Experience section, answer: \"What would my ICP need to see here to trust me more?\"",
              ),
              highlight: L(
                "Experience nije CV. Experience je dokaz komercijalne relevantnosti.",
                "Experience is not a CV. Experience is proof of commercial relevance.",
              ),
            },
            {
              step: 8,
              title: L("Uskladi aktivnost sa pozicioniranjem", "Align creator activity with your positioning"),
              whatToDo: L(
                "Osiguraj da recent postovi, komentari i aktivnost podržavaju istu market poruku.",
                "Make sure recent posts, comments, and activity reinforce the same market message.",
              ),
              whyItMatters: L(
                "Profil nije samo statične sekcije. Kupci skeniraju i recent activity. Ako headline kaže Founder-Led Growth a aktivnost je random motivational content, trust puca.",
                "The profile is not just static sections. Buyers also scan recent activity. If your headline says Founder-Led Growth but your activity is random motivational content, the trust breaks.",
              ),
              example: L(
                "Mix aktivnosti: postovi o founder-led pipeline; komentari na ICP postovima; breakdown outreach sistema; CRM i signal primeri; webinar clip-ovi; lekcije iz klijenata; buyer problem analiza.",
                "Activity mix: posts about founder-led pipeline; comments on ICP posts; outreach system breakdowns; CRM and signal examples; webinar clips; lessons from client work; buyer problem analysis.",
              ),
              commonMistake: L(
                "Optimizovanje profile copy-a ali postovanje content-a koji privlači pogrešnu publiku.",
                "Optimizing profile copy but posting content that attracts the wrong audience.",
              ),
              tryThis: L(
                "Zalepi profile positioning pored content kalendara. Svaki post treba da podržava jedan ICP pain ili founder POV.",
                "Pin your profile positioning next to your content calendar. Every post should support one of your ICP pains or founder POVs.",
              ),
              highlight: L(
                "Profil i content moraju govoriti isti jezik.",
                "Profile and content must speak the same language.",
              ),
            },
            {
              step: 9,
              title: L("Dodaj jasne CTA-ove", "Add clear CTAs"),
              whatToDo: L(
                "Daj kupcima jasan sledeći korak. Ne pretpostavljaj da znaju šta da rade. Primeri: „Send me 'PLAYBOOK'“, „Book a 30-minute consultation“, „Join the next webinar“, „Read the full playbook“, „DM me 'ICP' and I'll send the template.“",
                "Give buyers a clear next step. Do not assume they know what to do. Examples: \"Send me 'PLAYBOOK'\", \"Book a 30-minute consultation\", \"Join the next Founder-Led Growth webinar\", \"Read the full playbook\", \"DM me 'ICP' and I'll send the template.\"",
              ),
              whyItMatters: L(
                "Profil bez CTA-a stvara pasivan interes. Profil sa jasnim CTA-om stvara akciju.",
                "A profile without a CTA creates passive interest. A profile with a clear CTA creates action.",
              ),
              example: L(
                "Soft CTA: DM „PLAYBOOK“ za checklist. Medium CTA: Join webinar. Direct CTA: Book 30-min consultation. Content CTA: Read full playbook.",
                "Soft CTA: DM \"PLAYBOOK\" for checklist. Medium CTA: Join webinar. Direct CTA: Book 30-min consultation. Content CTA: Read full playbook.",
              ),
              commonMistake: L(
                "Samo „Contact me“ ili nikakav CTA.",
                "Using only \"Contact me\" or no CTA at all.",
              ),
              tryThis: L(
                "Jedan primarni CTA kroz banner, About, Featured i postove. CTA treba da odgovara buyer stage-u.",
                "Use one primary CTA across your banner, About section, Featured content, and posts. The CTA should match the buyer's stage.",
              ),
              highlight: L(
                "CTA treba da odgovara buyer stage-u. Ne svako je spremno za call.",
                "The CTA should match the buyer's stage. Not everyone is ready to book a call.",
              ),
            },
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
              "Lead Agents redosled: ICP dokument, zatim LinkedIn profil, cold Outreach (Sales Navigator, Apollo, La Growth Machine, HeyReach, Instantly, Lemlist), buying signali, content iz intervjua, Thought Leader Ads, CRM sa lead scoring-om.",
              "Ova lekcija je drugi korak, odmah posle ICP-a. Profil nije CV, već prodajna stranica: ICP mora za oko 5 sekundi da razume kome pomažete, koji problem rešavate i šta je sledeći korak.",
              "Bez jasnog profila, Outreach deluje hladno, a content ne konvertuje posetioce u razgovore. Profil povezuje ICP sa svim kasnijim signalima i porukama.",
              "Outreach direktno napada ICP. Reklame indirektno šire dokaz. Profil je most između njih.",
            ],
            [
              "Lead Agents order: ICP document, then LinkedIn profile, cold Outreach (Sales Navigator, Apollo, La Growth Machine, HeyReach, Instantly, Lemlist), buying signals, interview-based content, Thought Leader Ads, CRM with lead scoring.",
              "This lesson is step two, right after ICP. The profile is not a CV. It is a sales page: the ICP must understand in about 5 seconds who you help, what problem you solve, and what the next step is.",
              "Without a clear profile, Outreach feels cold and content does not turn visitors into conversations. The profile connects ICP to every later signal and message.",
              "Outreach attacks the ICP directly. Ads spread proof indirectly. The profile is the bridge between them.",
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
              title: L("LinkedIn profil osnove direktno utiču na vidljivost", "LinkedIn profile basics directly affect visibility"),
              body: L(
                "LinkedIn Sales Solutions preporučuje aktuelnu, visokorezolucionu profilnu sliku i napominje da profili sa slikama imaju znatno veću verovatnoću pregleda.",
                "LinkedIn Sales Solutions recommends using a current, high-resolution profile picture and notes that profiles with pictures are significantly more likely to be viewed.",
              ),
              sourceLabel: L("LinkedIn Sales Solutions — Social Selling", "LinkedIn Sales Solutions — Social Selling"),
              sourceUrl: "https://business.linkedin.com/sales-solutions/social-selling",
            },
            {
              title: L("Headline treba da ide dalje od job title-a", "The headline needs to go beyond job title"),
              body: L(
                "LinkedIn Sales Solutions preporučuje da headline ide dalje od job title-a i objašnjava šta radiš i kako to radiš.",
                "LinkedIn Sales Solutions recommends going beyond a job title in the headline and explaining what you do and how you do it.",
              ),
              sourceLabel: L("LinkedIn Sales Solutions — Social Selling", "LinkedIn Sales Solutions — Social Selling"),
              sourceUrl: "https://business.linkedin.com/sales-solutions/social-selling",
            },
            {
              title: L("Social selling je povezan sa boljim sales outcome-ima", "Social selling is tied to better sales outcomes"),
              body: L(
                "LinkedIn Social Selling Index (SSI) je dizajniran oko profesionalnog brenda, pronalaženja pravih ljudi, engagement-a sa insight-ima i gradnje odnosa.",
                "LinkedIn's Social Selling Index is designed around creating a professional brand, finding the right people, engaging with insights, and building relationships.",
              ),
              sourceLabel: L("LinkedIn Sales Solutions — Social Selling Index / SSI", "LinkedIn Sales Solutions — Social Selling Index / SSI"),
              sourceUrl: "https://business.linkedin.com/sell/resources/SSI",
            },
            {
              title: L("Sales Navigator podržava profile-driven prospecting", "Sales Navigator supports profile-driven prospecting"),
              body: L(
                "LinkedIn Sales Navigator pomaže prodavcima da pronađu prave kupce, rastu pipeline i brže zatvaraju deal-ove koristeći LinkedIn B2B sales podatke.",
                "LinkedIn Sales Navigator helps sellers find the right buyers, grow pipeline, and close deals faster using LinkedIn's B2B sales data.",
              ),
              sourceLabel: L("LinkedIn Sales Navigator", "LinkedIn Sales Navigator"),
              sourceUrl: "https://business.linkedin.com/sell/sales-navigator",
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
            ["1. Uradi 10-sekundni profile test"],
            ["1. Run a 10-second profile test"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Pitaj nekoga iz ICP-a da pogleda profil 10 sekundi. Zatim pitaj: Kome pomažem? Koji problem rešavam? Zašto kupci treba da mi veruju? Šta neko treba da uradi sledeće?",
              "Ne pitaj: „Da li izgleda dobro?“ Pitaj: „Da li je očigledno zašto bi kupac trebalo da mari?“",
            ],
            [
              "Ask someone from your ICP to look at the profile for 10 seconds. Then ask: Who do I help? What problem do I solve? Why should buyers trust me? What should someone do next?",
              "Do not ask: \"Does it look good?\" Ask: \"Is it obvious why a buyer should care?\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["2. Prepiši profile promise"],
            ["2. Rewrite the profile promise"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Formula: „Helping [ICP] achieve [outcome] through [mechanism].“",
              "Primeri: „Helping B2B SaaS founders build qualified pipeline through LinkedIn, content, and outreach.“ / „Helping IT service companies create trust before enterprise buyers speak to sales.“ / „Helping B2B agencies turn founder expertise into predictable sales conversations.“",
              "Izbegavaj: „I help businesses grow“, „Growth consultant“, „Sales and marketing expert“, „Founder & CEO“, „Helping companies scale.“",
            ],
            [
              "Formula: \"Helping [ICP] achieve [outcome] through [mechanism].\"",
              "Examples: \"Helping B2B SaaS founders build qualified pipeline through LinkedIn, content, and outreach.\" / \"Helping IT service companies create trust before enterprise buyers speak to sales.\" / \"Helping B2B agencies turn founder expertise into predictable sales conversations.\"",
              "Avoid: \"I help businesses grow\", \"Growth consultant\", \"Sales and marketing expert\", \"Founder & CEO\", \"Helping companies scale.\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["3. Napravi conversion-focused banner"],
            ["3. Create a conversion-focused banner"],
          ),
        },
        {
          type: "table",
          caption: L("Banner opcije", "Banner copy options"),
          headers: H(["Opcija", "Headline", "Subline", "CTA"], ["Option", "Headline", "Subline", "CTA"]),
          rows: [
            {
              cells: [
                L("1", "1"),
                L("Founder-Led Growth Systems for B2B Companies", "Founder-Led Growth Systems for B2B Companies"),
                L("Turn LinkedIn, content, outreach, webinars & CRM into predictable pipeline.", "Turn LinkedIn, content, outreach, webinars & CRM into predictable pipeline."),
                L("Read the playbook", "Read the playbook"),
              ],
            },
            {
              cells: [
                L("2", "2"),
                L("Your Founder Profile Should Create Pipeline", "Your Founder Profile Should Create Pipeline"),
                L("Build trust before outreach ever starts.", "Build trust before outreach ever starts."),
                L("Book a consultation", "Book a consultation"),
              ],
            },
            {
              cells: [
                L("3", "3"),
                L("LinkedIn-Driven Pipeline for B2B Founders", "LinkedIn-Driven Pipeline for B2B Founders"),
                L("Profile. Content. Engagement. Outreach. CRM. Signals.", "Profile. Content. Engagement. Outreach. CRM. Signals."),
                L("Join the webinar", "Join the webinar"),
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Vizuelni stil: clean, premium, jasan, ne previše teksta, lako čitljiv na mobilnom.",
            "Visual style: clean, premium, clear, not too much text, easy to read on mobile.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["4. Napiši buyer-first About sekciju"],
            ["4. Write a buyer-first About section"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Struktura: 1) Počni sa problemom. 2) Imenuj pokvareni stari način. 3) Objasni POV. 4) Objasni šta pomažeš. 5) Dodaj proof. 6) Dodaj CTA.",
              "Template: „Most [ICP] do not have a [surface problem]. They have a [deeper problem]. They are trying to [old way], but [why it breaks]. That is why we build [your mechanism]. We help [ICP] [outcome] through [system/process]. That usually includes: [component 1–4]. Proof: [short proof point]. If you want to [desired outcome], [CTA].“",
            ],
            [
              "Structure: 1) Start with the problem. 2) Name the broken old way. 3) Explain your point of view. 4) Explain what you help with. 5) Add proof. 6) Add CTA.",
              "Template: \"Most [ICP] do not have a [surface problem]. They have a [deeper problem]. They are trying to [old way], but [why it breaks]. That is why we build [your mechanism]. We help [ICP] [outcome] through [system/process]. That usually includes: [component 1–4]. Proof: [short proof point]. If you want to [desired outcome], [CTA].\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["5. Gradi Featured sekciju kao funnel"],
            ["5. Build your Featured section like a funnel"],
          ),
        },
        {
          type: "table",
          caption: L("Featured funnel", "Featured funnel"),
          headers: H(["Featured asset", "Svrha"], ["Featured asset", "Purpose"]),
          rows: [
            { cells: [L("Playbook / guide", "Playbook / guide"), L("Edukuje kupca", "Educates the buyer")] },
            { cells: [L("Case study", "Case study"), L("Gradi dokaz", "Builds proof")] },
            { cells: [L("Webinar / event", "Webinar / event"), L("Hvata high intent", "Captures high intent")] },
            { cells: [L("Consultation / CTA", "Consultation / CTA"), L("Konvertuje interes", "Converts interest")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["6. Dodaj proof svuda"],
            ["6. Add proof everywhere"],
          ),
        },
        {
          type: "table",
          caption: L("Primeri proof-a", "Proof examples"),
          headers: H(["Slab proof", "Bolji proof"], ["Weak proof", "Better proof"]),
          rows: [
            { cells: [L("„We help companies grow.“", "\"We help companies grow.\""), L("„Built LinkedIn outreach systems that generated 1,500+ B2B leads in two years.“", "\"Built LinkedIn outreach systems that generated 1,500+ B2B leads in two years.\"")] },
            { cells: [L("„Trusted by clients worldwide.“", "\"Trusted by clients worldwide.\""), L("„Worked with 30+ B2B companies across SaaS, IT services, consulting, and staffing.“", "\"Worked with 30+ B2B companies across SaaS, IT services, consulting, and staffing.\"")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["7. Uskladi profil sa outreach-om"],
            ["7. Align profile with outreach"],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Pre launch-a outreach-a, osiguraj da profil podržava poruku. Ako outreach kaže „We help B2B founders turn LinkedIn into pipeline“, profil ne treba da kaže „Founder, speaker, entrepreneur, investor.“ Profil treba da ponovi istu market promise.",
            ],
            [
              "Before launching outreach, make sure the profile supports the message. If outreach says \"We help B2B founders turn LinkedIn into pipeline,\" the profile should not say \"Founder, speaker, entrepreneur, investor.\" The profile should repeat the same market promise.",
            ],
          ),
        },
        {
          type: "callout",
          text: L(
            "Ovo poboljšava message consistency i reply rate.",
            "This improves message consistency and reply rates.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["8. Poveži profile activity sa CRM-om"],
            ["8. Connect profile activity to CRM"],
          ),
        },
        {
          type: "table",
          caption: L("Profile-driven signali", "Profile-driven signals"),
          headers: H(["Signal", "Značenje", "Akcija"], ["Signal", "What it means", "Action"]),
          rows: [
            { cells: [L("Profile view od ICP", "Profile view from ICP"), L("Light interest", "Light interest"), L("View back, engage, monitor", "View back, engage, monitor")] },
            { cells: [L("Follow founder-a", "Follows founder"), L("Light to medium interest", "Light to medium interest"), L("Dodaj na warm listu", "Add to warm list")] },
            { cells: [L("Profile view posle outreach-a", "Views profile after outreach"), L("Medium interest", "Medium interest"), L("Follow up sa kontekstom", "Follow up with context")] },
            { cells: [L("Engage sa Featured content-om", "Engages with Featured content"), L("Medium to strong interest", "Medium to strong interest"), L("Dodaj u CRM", "Add to CRM")] },
            { cells: [L("DM posle profile visit-a", "Sends DM after profile visit"), L("Strong interest", "Strong interest"), L("Kreiraj sales task", "Create sales task")] },
            { cells: [L("Book call sa profile CTA", "Books call from profile CTA"), L("Strong intent", "Strong intent"), L("Kreiraj deal", "Create deal")] },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Profil ne treba samo da generiše pažnju. Treba da hrani pipeline sistem.",
            "The profile should not just generate attention. It should feed the pipeline system.",
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
              usedFor: L("Optimizacija profila, content, engagement, vidljivost i inbound trust", "Profile optimization, content, engagement, visibility, and inbound trust"),
              whyItFits: L(
                "Founder profil je conversion point za ceo Founder-Led Growth sistem.",
                "The founder profile is the conversion point for the whole Founder-Led Growth system.",
              ),
              alternative: L("Nema alternative", "None"),
            },
            {
              name: "Canva",
              logo: "/images/sales-tools/canva.png",
              usedFor: L("Kreiranje clean LinkedIn banner-a i jednostavnih vizuala", "Create a clean LinkedIn banner and simple visual assets"),
              whyItFits: L(
                "Brz način da napraviš jasan, profesionalan banner bez full design tima.",
                "Fast way to create a clear, professional banner without needing a full design team.",
              ),
              alternative: L("Figma, Adobe Express", "Figma, Adobe Express"),
            },
            {
              name: "Figma",
              logo: "/images/sales-tools/figma.png",
              usedFor: L("Dizajn polished banner-a, framework vizuala i brand asset-a", "Design more polished profile banners, framework visuals, and brand assets"),
              whyItFits: L(
                "Dobro za timove koji žele da profil odgovara website-u i brand dizajnu.",
                "Good for teams that want the profile to match website and brand design.",
              ),
              alternative: L("Canva", "Canva"),
            },
            {
              name: "AuthoredUp / Taplio",
              slug: "taplio",
              usedFor: L(
                "Draft, format, schedule i analitika LinkedIn postova (koji postovi vode profile view-ove)",
                "Draft, format, schedule, and analyze LinkedIn posts (which posts drive profile views)",
              ),
              whyItFits: L(
                "Pomaže da profile activity ostane usklađena sa pozicioniranjem — i da vidiš šta privlači ICP.",
                "Helps keep profile activity aligned with positioning — and shows what attracts your ICP.",
              ),
              alternative: L("Native LinkedIn drafts, LinkedIn Creator analytics", "Native LinkedIn drafts, LinkedIn Creator analytics"),
            },
            {
              name: "LinkedIn Sales Navigator",
              logo: "/images/sales-tools/linkedin-sales-navigator.png",
              usedFor: L("Pronalaženje ICP kupaca, pregled profila, saved leads, account monitoring", "Find ICP buyers, view profiles, save leads, and monitor accounts"),
              whyItFits: L(
                "Podržava founder-led targetiranje i profile-driven prospecting.",
                "Supports founder-led targeting and profile-driven prospecting.",
              ),
              alternative: L("Apollo, ručna LinkedIn pretraga", "Apollo, manual LinkedIn search"),
            },
            {
              name: "HubSpot / Pipedrive",
              slug: "hubspot",
              usedFor: L("Praćenje profile-driven leadova, profile visit-a, DM razgovora, source-a i next action", "Track profile-driven leads, profile visits, DM conversations, source, and next action"),
              whyItFits: L(
                "Pretvara founder profile interest u merljiv pipeline workflow.",
                "Turns founder profile interest into a measurable pipeline workflow.",
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
          title: L("Od profile view-a do pipeline-a", "From profile view to pipeline"),
          steps: P(
            [
              "Founder objavi post o buyer problemu.",
              "ICP kupac vidi post i poseti founder profil.",
              "Profile headline potvrdi relevantnost.",
              "Banner objasni outcome.",
              "About sekcija gradi poverenje.",
              "Featured sekcija nudi playbook ili webinar.",
              "Kupac engage-uje sa asset-om ili pošalje DM.",
              "Tim doda kontakt u CRM sa source: LinkedIn profile.",
              "Signal level se označi kao medium ili strong.",
              "Founder pošalje kontekstualan follow-up.",
              "Razgovor postane kvalifikovan sales call.",
            ],
            [
              "Founder publishes a post about a buyer problem.",
              "ICP buyer sees the post and visits the founder profile.",
              "Profile headline confirms relevance.",
              "Banner explains the outcome.",
              "About section builds trust.",
              "Featured section offers a playbook or webinar.",
              "Buyer engages with the asset or sends a DM.",
              "Team adds the contact to CRM with source: LinkedIn profile.",
              "Signal level is marked as medium or strong.",
              "Founder sends contextual follow-up.",
              "Conversation turns into a qualified sales call.",
            ],
          ),
          highlight: L(
            "Zato profil ima značaj. To je conversion layer između pažnje i pipeline-a.",
            "This is why the profile matters. It is the conversion layer between attention and pipeline.",
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
              title: L("Founder Profile Landing Page Map", "Founder Profile Landing Page Map"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "Vizuelna mapa LinkedIn profila podeljena na conversion sekcije: photo, banner, headline, About, Featured, Experience, activity, CTA.",
                "A visual map of a LinkedIn profile broken into conversion sections: photo, banner, headline, About, Featured, Experience, activity, CTA.",
              ),
            },
            {
              title: L("Attention → Relevance → Trust → Proof → Action", "Attention → Relevance → Trust → Proof → Action"),
              placement: L("Pre okvira konverzije", "Before framework section"),
              description: L(
                "Petostepeni profile conversion flow.",
                "A five-stage profile conversion flow.",
              ),
            },
            {
              title: L("CV Profile vs Landing Page Profile", "CV Profile vs Landing Page Profile"),
              placement: L("Core / vs-cv sekcija", "Core idea section"),
              description: L(
                "Comparison tabela koja pokazuje kako founder profil treba da pređe od biografije ka buyer relevantnosti.",
                "Comparison table showing how a founder profile should shift from biography to buyer relevance.",
              ),
            },
            {
              title: L("Profile Optimization Checklist", "Profile Optimization Checklist"),
              placement: L("Pre finalne čekliste", "Before final checklist"),
              description: L(
                "Čeklista koja pokriva photo, banner, headline, About, Featured, Experience, proof, CTA i recent activity.",
                "A checklist covering photo, banner, headline, About, Featured, Experience, proof, CTA, and recent activity.",
              ),
            },
            {
              title: L("Profile-to-Pipeline Workflow", "Profile-to-Pipeline Workflow"),
              placement: L("Workflow sekcija", "Workflow example section"),
              description: L(
                "Vizuelni flow: LinkedIn post → profile view → Featured asset → DM → CRM → sales call.",
                "Visual flow from LinkedIn post → profile view → Featured asset → DM → CRM → sales call.",
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
          title: L("Čeklista Lekcije 3", "Lesson 3 checklist"),
          items: P(
            [
              "Definiši ICP za koga je profil pisan.",
              "Napiši jedno jasno profile promise.",
              "Ažuriraj profilnu sliku ako ne gradi poverenje.",
              "Napravi banner sa jednim jasnim outcome-om i jednim CTA-om.",
              "Prepiši headline oko buyer value-a, ne titule.",
              "Prepiši About sekciju: problem → POV → proof → CTA.",
              "Dodaj 3–4 Featured asset-a: edukacija, proof, webinar, CTA.",
              "Prepiši Experience oko outcome-a i buyer relevantnosti.",
              "Ukloni vague jezik iz profila.",
              "Uskladi recent content sa founder pozicioniranjem.",
              "Dodaj jedan soft CTA u About sekciju.",
              "Dodaj profile-driven signale u CRM.",
              "Uradi 10-sekundni profile test sa nekim iz ICP-a.",
            ],
            [
              "Define the ICP this profile is written for.",
              "Write one clear profile promise.",
              "Update the profile photo if it does not create trust.",
              "Create a banner with one clear outcome and one CTA.",
              "Rewrite the headline around buyer value, not title.",
              "Rewrite the About section using problem → POV → proof → CTA.",
              "Add 3–4 Featured assets: education, proof, webinar, CTA.",
              "Rewrite Experience around outcomes and buyer relevance.",
              "Remove vague language from the profile.",
              "Align recent content with the founder's positioning.",
              "Add one soft CTA to the About section.",
              "Add profile-driven signals to CRM.",
              "Run the 10-second profile test with someone from the ICP.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "template",
      title: L("Šablon: Founder LinkedIn Profile Optimization", "Template / swipe file"),
      blocks: [
        {
          type: "template",
          title: L("Kopiraj i popuni", "Copy and fill in"),
          content: L(
            `1. ICP

Ovaj profil je pisan za:
[ICP]

Bore se sa:
[skup problem]

Žele:
[željeni outcome]

2. Profile promise

Pomažem [ICP] da postignu [outcome] kroz [mechanism].

Primer:
Pomažem B2B SaaS founder-ima da pretvore LinkedIn aktivnost u kvalifikovan pipeline pre zapošljavanja punog SDR tima.

3. Banner copy

Headline:
[jasan outcome]

Subline:
[mechanism / kako pomažeš]

Proof:
[opcioni proof point]

CTA:
[zakaži call / pročitaj playbook / join webinar / DM keyword]

4. Headline

Opcija 1:
Pomažem [ICP] da postignu [outcome] kroz [mechanism]

Opcija 2:
[Outcome] za [ICP] koristeći [system]

Opcija 3:
Founder-Led Growth za [ICP] sa [specifičan pain]

5. About sekcija

Većina [ICP] nema [surface problem].

Imaju [deeper problem].

Pokušavaju [old way], ali [why it breaks].

Zato gradimo [your mechanism].

Pomažemo [ICP] da [outcome] kroz [system/process].

To obično uključuje:
- [component 1]
- [component 2]
- [component 3]
- [component 4]

Proof:
[kratak proof point / case study / credibility marker]

Ako želiš [desired outcome], [CTA].

6. Featured sekcija

Featured asset 1:
[edukativni asset]

Featured asset 2:
[proof / case study]

Featured asset 3:
[webinar / lead magnet]

Featured asset 4:
[zakaži call / konsultacija]

7. Experience sekcija

Kompanija:
[ime kompanije]

Šta radimo:
Pomažemo [ICP] da reše [problem] kroz [mechanism].

Problemi koje rešavamo:
- [problem 1]
- [problem 2]
- [problem 3]

Kako pomažemo:
- [service / system 1]
- [service / system 2]
- [service / system 3]

Proof:
[rezultat / credibility point]

CTA:
[sledeći korak]

8. Profile CTA opcije

Soft CTA:
Pošalji mi "[keyword]" i poslaću ti checklist.

Medium CTA:
Pridruži se sledećem webinaru o [topic].

Direct CTA:
Zakaži 30-minutnu konsultaciju.

Content CTA:
Pročitaj ceo Founder-Led Growth Playbook.

9. CRM tracking

Prati ove profile-driven signale:
- profile view od ICP
- follow od ICP
- DM posle profile visit-a
- Featured asset click
- webinar registracija
- call booked sa profile CTA

Polja za dodavanje:
- profile source
- profile signal
- CTA used
- content topic
- next action
- pipeline stage`,
            `1. ICP

This profile is written for:
[ICP]

They struggle with:
[expensive problem]

They want:
[desired outcome]

2. Profile promise

I help [ICP] achieve [outcome] through [mechanism].

Example:
I help B2B SaaS founders turn LinkedIn activity into qualified pipeline before hiring a full SDR team.

3. Banner copy

Headline:
[clear outcome]

Subline:
[mechanism / how you help]

Proof:
[optional proof point]

CTA:
[book a call / read playbook / join webinar / DM keyword]

4. Headline

Option 1:
Helping [ICP] achieve [outcome] through [mechanism]

Option 2:
[Outcome] for [ICP] using [system]

Option 3:
Founder-Led Growth for [ICP] with [specific pain]

5. About section

Most [ICP] do not have a [surface problem].

They have a [deeper problem].

They are trying to [old way], but [why it breaks].

That is why we build [your mechanism].

We help [ICP] [outcome] through [system/process].

That usually includes:
- [component 1]
- [component 2]
- [component 3]
- [component 4]

Proof:
[short proof point / case study / credibility marker]

If you want to [desired outcome], [CTA].

6. Featured section

Featured asset 1:
[educational asset]

Featured asset 2:
[proof / case study]

Featured asset 3:
[webinar / lead magnet]

Featured asset 4:
[book a call / consultation]

7. Experience section

Company:
[company name]

What we do:
We help [ICP] solve [problem] through [mechanism].

Problems we solve:
- [problem 1]
- [problem 2]
- [problem 3]

How we help:
- [service / system 1]
- [service / system 2]
- [service / system 3]

Proof:
[result / credibility point]

CTA:
[next step]

8. Profile CTA options

Soft CTA:
DM me "[keyword]" and I'll send the checklist.

Medium CTA:
Join the next webinar on [topic].

Direct CTA:
Book a 30-minute consultation.

Content CTA:
Read the full Founder-Led Growth Playbook.

9. CRM tracking

Track these profile-driven signals:
- profile view from ICP
- follow from ICP
- DM after profile visit
- Featured asset click
- webinar registration
- call booked from profile CTA

Fields to add:
- profile source
- profile signal
- CTA used
- content topic
- next action
- pipeline stage`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Zašto founder treba da optimizuje LinkedIn profil?", "Why should a founder optimize their LinkedIn profile?"),
      answer: L(
        "Jer je profil mesto gde kupci proveravaju relevantnost i kredibilitet pre nego što odgovore, prihvate connection, zakažu call ili engage-uju sa content-om. U Founder-Led Growth-u, profil deluje kao landing stranica između pažnje i pipeline-a.",
        "Because the profile is where buyers check relevance and credibility before replying, connecting, booking a call, or engaging with content. In Founder-Led Growth, the profile acts like a landing page between attention and pipeline.",
      ),
    },
    {
      question: L("Šta treba da sadrži founder LinkedIn headline?", "What should a founder's LinkedIn headline include?"),
      answer: L(
        "Jak founder headline treba da objasni: kome pomažeš, koji outcome kreiraš, kako to kreiraš. Primer: „Helping B2B founders turn LinkedIn, content & outreach into predictable pipeline.“",
        "A strong founder headline should explain: who you help, what outcome you create, how you create it. Example: \"Helping B2B founders turn LinkedIn, content & outreach into predictable pipeline.\"",
      ),
    },
    {
      question: L("Da li founder profil treba da fokusira kompaniju ili kupca?", "Should the founder profile focus on the company or the buyer?"),
      answer: L(
        "Kupca. Kompanija je bitna, ali profil prvo treba da natera kupca da oseti: „Ova osoba razume moj problem.“ Tek onda objašnjava kompaniju, dokaz i sledeći korak.",
        "The buyer. The company matters, but the profile should first make the buyer feel: \"This person understands my problem.\" Then it should explain the company, proof, and next step.",
      ),
    },
    {
      question: L("Šta treba da ide u Featured sekciju?", "What should go in the Featured section?"),
      answer: L(
        "Koristi Featured content da vodiš kupca ka sledećem koraku. Preporučeni asset-i: playbook ili guide, case study, webinar registration, best educational post, consultation page, lead magnet, customer story.",
        "Use Featured content to guide the buyer toward the next step. Recommended assets: playbook or guide, case study, webinar registration, best educational post, consultation page, lead magnet, customer story.",
      ),
    },
    {
      question: L("Koliko često founder treba da ažurira LinkedIn profil?", "How often should the founder update their LinkedIn profile?"),
      answer: L(
        "Pregledaj ga svakih 30–60 dana. Ažuriraj kada: ICP se promeni, ponuda se promeni, novi proof postane dostupan, webinar ili lead magnet se promeni, content strategija se promeni, profile view-ovi rastu ali konverzije ne.",
        "Review it every 30–60 days. Update it when: ICP changes, offer changes, new proof becomes available, webinar or lead magnet changes, content strategy changes, profile views increase but conversions do not.",
      ),
    },
    {
      question: L("Koja je najveća LinkedIn profile greška founder-a?", "What is the biggest LinkedIn profile mistake founders make?"),
      answer: L(
        "Pišu profil koji opisuje sebe umesto da pomaže kupcu da razume relevantnost. Najveća greška je pretvaranje profila u biografiju. Treba da bude buyer-facing trust stranica.",
        "They write a profile that describes themselves instead of helping the buyer understand relevance. The biggest mistake is making the profile a biography. It should be a buyer-facing trust page.",
      ),
    },
    {
      question: L("Da li dobar LinkedIn profil generiše leadove sam?", "Does a good LinkedIn profile generate leads by itself?"),
      answer: L(
        "Obično ne. Dobar profil ne zamenjuje content, engagement, webinare, outreach ili CRM. Ali čini sve te aktivnosti efikasnijim. Pretvara radoznalost u poverenje.",
        "Not usually. A good profile does not replace content, engagement, webinars, outreach, or CRM. But it makes all of those activities work better. It converts curiosity into trust.",
      ),
    },
  ],
  sources: [
    { title: L("LinkedIn Sales Solutions — Social Selling", "LinkedIn Sales Solutions — Social Selling"), url: "https://business.linkedin.com/sales-solutions/social-selling" },
    { title: L("LinkedIn Sales Solutions — Social Selling Index / SSI", "LinkedIn Sales Solutions — Social Selling Index / SSI"), url: "https://business.linkedin.com/sell/resources/SSI" },
    { title: L("LinkedIn Sales Navigator", "LinkedIn Sales Navigator"), url: "https://business.linkedin.com/sell/sales-navigator" },
    { title: L("LinkedIn Sales Solutions — Deep Sales Playbook", "LinkedIn Sales Solutions — Deep Sales Playbook"), url: "https://business.linkedin.com/sales-solutions/deep-sales-playbook" },
    { title: L("HubSpot — Social Selling on LinkedIn PDF", "HubSpot — Social Selling on LinkedIn PDF"), url: "https://www.hubspot.com/hubfs/Social%20Selling%20on%20LinkedIn.pdf" },
    { title: L("PhantomBuster — LinkedIn Social Selling Guide", "PhantomBuster — LinkedIn Social Selling Guide"), url: "https://phantombuster.com/blog/social-selling/linkedin-social-selling/" },
    { title: L("Leadfeeder — LinkedIn Marketing Strategy", "Leadfeeder — LinkedIn Marketing Strategy"), url: "https://www.leadfeeder.com/blog/paid-marketing/linkedin-marketing-strategy/" },
    { title: L("Orsys — Social Selling: Optimize Your LinkedIn Profile to Sell Effectively", "Orsys — Social Selling: Optimize Your LinkedIn Profile to Sell Effectively"), url: "https://www.orsys.fr/orsys-lemag/en/social-selling-optimize-linkedin-profile-sell-well/" },
  ],
  relatedLessons: {
    previous: {
      slug: "how-to-define-your-icp",
      title: L(
        "Lekcija 2 — Kako definisati ICP za Founder-Led Growth",
        "Lesson 2 — How to Define Your ICP for Founder-Led Growth",
      ),
    },
    next: {
      slug: "linkedin-content-strategy-founder",
      title: L(
        "Lekcija 4 — Kako napraviti LinkedIn content strategiju za founder-a",
        "Lesson 4 — How to Build a LinkedIn Content Strategy for a Founder",
      ),
      note: L(
        "Gradimo content strategiju koja daje ICP-u razlog da veruje pre outreach-a.",
        "Build a content strategy that gives your ICP a reason to trust you before outreach starts.",
      ),
    },
    related: [
      {
        slug: "what-founder-led-growth-is",
        title: L(
          "Lekcija 1 — Šta je Founder-Led Growth",
          "Lesson 1 — What Founder-Led Growth Is and Why It Works for B2B Companies",
        ),
      },
      {
        slug: "write-educational-linkedin-posts",
        title: L(
          "Lekcija 5 — Kako pisati edukativne LinkedIn postove",
          "Lesson 5 — How to Write Educational LinkedIn Posts That Build Authority",
        ),
      },
      {
        slug: "linkedin-commenting-strategy",
        title: L(
          "Lekcija 6 — LinkedIn komentarisanje",
          "Lesson 6 — How to Use LinkedIn Commenting to Get Visibility With Your ICP",
        ),
      },
      {
        slug: "linkedin-engagement-outreach-list",
        title: L(
          "Lekcija 7 — Engagement u outreach listu",
          "Lesson 7 — How to Turn LinkedIn Engagement Into an Outreach List",
        ),
      },
      {
        slug: "crm-za-founder-led-growth",
        title: L(
          "Lekcija 10 — CRM za Founder-Led Growth",
          "Lesson 10 — How to Track Founder-Led Growth Activities in Your CRM",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "LinkedIn profil ne treba samo da izgleda profesionalno",
      "Your LinkedIn profile should not just look professional",
    ),
    body: L(
      "Treba da pravi da pravi kupac brže veruje tebi. Kada je profil jasan, svaki deo Founder-Led Growth-a radi bolje: content dobija više profile view-ova; komentari stvaraju više radoznalosti; outreach dobija više odgovora; webinari konvertuju bolje; CRM ima čistije signale; pipeline je lakši za praćenje. Sledeća lekcija pokazuje kako graditi LinkedIn content strategiju koja daje ICP-u razlog da veruje pre nego što outreach uopšte počne.",
      "It should make the right buyer trust you faster. When the profile is clear, every other part of Founder-Led Growth works better: content gets more profile visits; comments create more curiosity; outreach gets more replies; webinars convert better; CRM has cleaner signals; pipeline becomes easier to track. The next lesson shows how to build a LinkedIn content strategy that gives your ICP a reason to trust you before outreach ever starts.",
    ),
    primaryLabel: L("Nastavi na Lekciju 4", "Continue to Lesson 4"),
    secondaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
  },
  seoKeywords: P(
    [
      "LinkedIn profile optimization for founders",
      "founder LinkedIn profile",
      "LinkedIn profile for lead generation",
      "B2B LinkedIn profile optimization",
      "LinkedIn profile landing page",
      "founder-led sales LinkedIn",
      "LinkedIn headline for founders",
      "LinkedIn about section template",
      "LinkedIn profile CTA",
      "B2B social selling profile",
      "optimizacija LinkedIn profila founder-a",
      "LinkedIn profil za lead generation",
    ],
    [
      "LinkedIn profile optimization for founders",
      "founder LinkedIn profile",
      "LinkedIn profile for lead generation",
      "B2B LinkedIn profile optimization",
      "LinkedIn profile landing page",
      "founder-led sales LinkedIn",
      "LinkedIn headline for founders",
      "LinkedIn about section template",
      "LinkedIn profile CTA",
      "B2B social selling profile",
    ],
  ),
};
