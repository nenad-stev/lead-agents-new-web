import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson05RichContent: RichLessonContent = {
  meta: {
    stage: L("Content", "Content"),
    readingTime: L("14–18 min", "14–18 min"),
    difficulty: L("Početnik–srednji", "Beginner–intermediate"),
    outcome: L(
      "Videćeš content kao trust layer za sales — ne kao trku za lajkove — i kako ga povezati sa outreach-om.",
      "You’ll see content as a trust layer for sales — not a race for likes — and how to connect it to outreach.",
    ),
    recommendedTools: L(
      "LinkedIn, Taplio / AuthoredUp, snimanje intervjua",
      "LinkedIn, Taplio / AuthoredUp, interview recording",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 5", "Lesson 5"),
    title: L(
      "Founder content: kako gradite poverenje pre poruke",
      "Founder Content: How You Build Trust Before the Message",
    ),
    paragraphs: P(
      [
        "Founder content nije tu da founder postane influenser. Većina B2B founder-a neće postati viralna — i to nije problem.",
        "Cilj nije popularnost. Cilj je da pravi kupac, kada dobije outreach ili razmišlja o vašoj firmi, već ima osećaj: „Znam ko su. Deluju relevantno. Razumeju problem.“",
      ],
      [
        "Founder content isn’t there to turn the founder into an influencer. Most B2B founders won’t go viral — and that isn’t a problem.",
        "The goal isn’t popularity. The goal is that the right buyer, when they get outreach or think about your company, already feels: “I know who they are. They feel relevant. They understand the problem.”",
      ],
    ),
    callout: L(
      "U B2B-u poverenje često počinje pre prvog razgovora. Founder content nije marketing sa strane — to je trust layer za sales.",
      "In B2B, trust often starts before the first conversation. Founder content isn’t side marketing — it’s a trust layer for sales.",
    ),
  },
  toc: [
    { id: "momenat-pre-replya", title: L("Momenat pre reply-a", "The moment before the reply") },
    { id: "teret-poruke", title: L("Jedna poruka ne može sve", "One message can’t do it all") },
    { id: "pravo-pitanje", title: L("Pravo pitanje za teme", "The right question for topics") },
    { id: "teme-u-firmi", title: L("Teme već postoje", "The topics already exist") },
    { id: "stav", title: L("Mora da ima stav", "It needs a point of view") },
    { id: "povezan-sa-outreachom", title: L("Povezan sa outreach-om", "Connected to outreach") },
    { id: "video", title: L("Video kao trust format", "Video as a trust format") },
    { id: "nisu-ready", title: L("Nisu ready now", "Not ready now") },
    { id: "sistem", title: L("Content sistem", "Content system") },
    { id: "merenje", title: L("Šta meriti", "What to measure") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "momenat-pre-replya",
      title: L("Momenat pre reply-a", "The moment before the reply"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kupac dobije poruku. Klikne na profil. Pogleda headline. Preleti poslednjih nekoliko objava. Gleda da li pričate o njegovom problemu. Pokuša da shvati da li ste ozbiljni ili ste samo još jedna firma koja šalje pitch.",
              "Taj momenat traje kratko. Ali mnogo utiče na odluku da li će odgovoriti.",
            ],
            [
              "The buyer gets a message. Clicks the profile. Checks the headline. Skims the last few posts. Looks for whether you talk about their problem. Tries to figure out if you’re serious or just another company sending a pitch.",
              "That moment is short. But it heavily shapes whether they’ll reply.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "teret-poruke",
      title: L("Jedna poruka ne može sve", "One message can’t do it all"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Cold outreach poruka često mora da uradi previše: ko ste, koji problem, zašto ste relevantni, poverenje, diferencijacija, i da pokrene razgovor — sve u nekoliko rečenica.",
              "Ako kupac nikada nije čuo za vas, video vaše mišljenje, pročitao case study ili video da razumete njegov problem, svaka poruka kreće od nule.",
            ],
            [
              "A cold outreach message often has to do too much: who you are, which problem, why you’re relevant, trust, differentiation, and starting a conversation — all in a few sentences.",
              "If the buyer has never heard of you, seen your thinking, read a case study, or seen that you understand their problem, every message starts from zero.",
            ],
          ),
        },
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Bez konteksta", "No context"),
            title: L("„Ko su ovi?“", "“Who are these people?”"),
            body: L(
              "Poruka mora sama da izgradi sve. Teško i skupo.",
              "The message has to build everything alone. Hard and expensive.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Sa contentom", "With content"),
            title: L("„Video sam ih već.“", "“I’ve seen them before.”"),
            body: L(
              "Mala promena u glavi kupca — ogromna razlika u sales-u.",
              "A small shift in the buyer’s head — a huge difference in sales.",
            ),
            tone: "accent",
          },
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Kupac možda ne lajkuje i ne komentariše. Ali vas vidi — način razmišljanja, probleme, stav. Founder content smanjuje teret poruke.",
            "The buyer may not like or comment. But they see you — how you think, which problems, your stance. Founder content reduces the burden on the message.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "pravo-pitanje",
      title: L("Pravo pitanje za teme", "The right question for topics"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najčešća greška: firma odluči da bude aktivna na LinkedIn-u, pa pitanje postane „šta da objavimo ove nedelje?“",
            ],
            [
              "The most common mistake: the company decides to be active on LinkedIn, so the question becomes “what should we post this week?”",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Polazište", "Starting point"),
          statement: L(
            "Šta kupac mora da razume pre nego što ima smisla da pričamo sa njim?",
            "What does the buyer need to understand before it makes sense to talk with them?",
          ),
          support: L(
            "Tu počinje dobar founder content. Ne od random tema — od sales problema.",
            "That’s where good founder content starts. Not from random topics — from sales problems.",
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Ne razume zašto stari način rada pravi problem → content",
              "Misli da mu treba alat, a treba mu bolji proces → content",
              "Poredi vas sa pogrešnom alternativom → content",
              "Plaši se rizika / ne zna kako da interno opravda odluku → content",
              "Misli da može da odloži problem još 6 meseci → content",
            ],
            [
              "Doesn’t see why the old way creates a problem → content",
              "Thinks they need a tool, but need a better process → content",
              "Compares you to the wrong alternative → content",
              "Fears risk / doesn’t know how to justify internally → content",
              "Thinks they can delay the problem another 6 months → content",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Founder content treba da pripremi tržište za razgovor. Ne da zameni sales — nego da sales ne mora svaki put da počinje od nule.",
            ],
            [
              "Founder content should prepare the market for the conversation. Not replace sales — so sales doesn’t have to start from zero every time.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "teme-u-firmi",
      title: L("Teme već postoje", "The topics already exist"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Founder-i često misle da nemaju dovoljno tema. U praksi ih imaju previše — samo ih ne vide kao content.",
              "Teme se kriju u sales call-ovima, pitanjima kupaca, objection-ima, case study-jima, greškama iz isporuke, razlozima zašto neki klijenti uspeju (ili ne), internim diskusijama i rečenicama koje founder kaže usput.",
            ],
            [
              "Founders often think they don’t have enough topics. In practice they have too many — they just don’t see them as content.",
              "Topics hide in sales calls, buyer questions, objections, case studies, delivery mistakes, reasons some clients succeed (or don’t), internal discussions, and throwaway lines the founder already says.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "„Mi nikad ne bismo krenuli od toga.“",
              "„Ovo deluje logično, ali u praksi ne radi.“",
              "„Većina firmi pogrešno razume ovaj problem.“",
              "„Kupac misli da mu treba X, a zapravo mu treba Y.“",
              "„Ovo nije problem alata, nego procesa.“",
            ],
            [
              "“We would never start from that.”",
              "“This seems logical, but in practice it doesn’t work.”",
              "“Most companies misunderstand this problem.”",
              "“The buyer thinks they need X, but they actually need Y.”",
              "“This isn’t a tools problem — it’s a process problem.”",
            ],
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Najbolji content često nije nešto novo što morate da smislite. To je nešto što već objašnjavate kupcima svaki dan. Kupci veruju iskustvu više nego generičkim savetima.",
            "The best content often isn’t something new you invent. It’s something you already explain to buyers every day. Buyers trust experience more than generic advice.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "stav",
      title: L("Mora da ima stav", "It needs a point of view"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "B2B content često ne radi jer je previše bezbedan — korektan, ali zaboravljiv. Kupac ne pamti korektno. Pamti jasno.",
            ],
            [
              "B2B content often fails because it’s too safe — correct, but forgettable. Buyers don’t remember “correct.” They remember clarity.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "„Ovo je greška koju stalno vidim.“",
              "„Ovo ne bih nikad preporučio klijentu.“",
              "„Ovaj pristup deluje pametno, ali u praksi najčešće ne radi.“",
              "„Ne bih skalirao outreach dok ovo nije rešeno.“",
            ],
            [
              "“This is a mistake I keep seeing.”",
              "“I would never recommend this to a client.”",
              "“This approach looks smart, but in practice it usually fails.”",
              "“I wouldn’t scale outreach until this is fixed.”",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Ne mora da bude agresivno. Mora da ima stav. Founder bez stava zvuči kao company page — a company page retko gradi poverenje kao osoba.",
            "It doesn’t have to be aggressive. It has to have a point of view. A founder without one sounds like a company page — and a company page rarely builds trust like a person.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "povezan-sa-outreachom",
      title: L("Povezan sa outreach-om", "Connected to outreach"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Founder content ne treba da živi odvojeno od sales-a. Ako outreach ide ka Head of Sales-u, content treba da priča o pipeline-u, reply rate-u, follow-up-u i CRM signalima. Ako ide ka founder-ima — o zavisnosti od referral-a, manjku predvidivog pipeline-a, nejasnom positioning-u.",
              "Outreach otvara direktan razgovor. Content gradi kontekst. Kada kupac ode na profil posle poruke, treba da vidi sadržaj koji potvrđuje ono što ste upravo napisali.",
            ],
            [
              "Founder content shouldn’t live apart from sales. If outreach goes to Heads of Sales, content should talk about pipeline, reply rate, follow-up, and CRM signals. If it goes to founders — about referral dependency, lack of predictable pipeline, unclear positioning.",
              "Outreach opens a direct conversation. Content builds context. When the buyer hits the profile after the message, they should see content that confirms what you just wrote.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Ako poruka kaže „pipeline koji ne zavisi od preporuka“, a profil ima objave o referral-ima, outbound-u i CRM signalima — poruka deluje jače. Ako profil nema ništa relevantno, poruka ostaje sama.",
            "If the message says “a pipeline that doesn’t depend on referrals,” and the profile has posts about referrals, outbound, and CRM signals — the message hits harder. If the profile has nothing relevant, the message stays alone.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "video",
      title: L("Video kao trust format", "Video as a trust format"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Text može da objasni ideju. Carousel da spakuje proces. Case study da pokaže dokaz. Video ima nešto drugo: kupac vidi osobu — kako founder objašnjava, da li priča iz iskustva, da li razume nijanse.",
              "U kompleksnoj B2B prodaji često ne pobeđuje samo bolji pitch — pobeđuje firma kojoj više veruju. Video brže gradi poznatost.",
            ],
            [
              "Text can explain an idea. A carousel can package a process. A case study can show proof. Video has something else: the buyer sees the person — how the founder explains, whether they speak from experience, whether they get the nuances.",
              "In complex B2B sales, the winner often isn’t just the better pitch — it’s the company they trust more. Video builds familiarity faster.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "quiet",
          statement: L(
            "Ne mora 1000 pregleda. 30 pravih ljudi sa više poverenja može biti vrednije od viralnog posta bez razgovora.",
            "It doesn’t need 1,000 views. 30 right people with more trust can be worth more than a viral post with no conversations.",
          ),
          support: L(
            "Zato video ne gledamo samo kao content format. Gledamo ga kao trust format.",
            "That’s why we don’t treat video as just another content format. We treat it as a trust format.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "nisu-ready",
      title: L("Nisu ready now", "Not ready now"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Jedna od najvećih grešaka je očekivati da svaki post odmah donese lead. Većina kupaca nije spremna danas — ali će biti za 3, 6 ili 12 meseci.",
              "Oni sada čitaju, prate, pamte. Ako kroz vreme vide da razumete problem bolje od drugih, ulazite u njihovu mentalnu listu. Kada problem postane prioritet, ne kreću od nule.",
            ],
            [
              "One of the biggest mistakes is expecting every post to produce a lead immediately. Most buyers aren’t ready today — but they will be in 3, 6, or 12 months.",
              "Right now they read, follow, remember. If over time they see you understand the problem better than others, you enter their mental shortlist. When the problem becomes a priority, they don’t start from zero.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Doslednost nije zbog algoritma. Poverenje ne nastaje iz jedne objave — nastaje iz ponavljanja relevantnih ideja kroz vreme.",
            "Consistency isn’t for the algorithm. Trust doesn’t come from one post — it comes from repeating relevant ideas over time.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sistem",
      title: L("Content sistem", "Content system"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Dobar sistem ne zavisi od toga da founder svaki dan sedi i smišlja postove. To se brzo raspadne. Bolji pristup: content se izvlači iz njihovog znanja.",
            ],
            [
              "A good system doesn’t depend on the founder inventing posts every day. That collapses fast. Better approach: content is pulled from their knowledge.",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Od razgovora do distribucije", "From conversation to distribution"),
          steps: P(
            [
              "Jednom mesečno snimite razgovor (~60 min)",
              "Izvucite glavne teme",
              "Text postovi + short video + carousel",
              "Newsletter / webinar teme",
              "Follow-up materijal i sales talking points",
            ],
            [
              "Record a conversation once a month (~60 min)",
              "Extract the main themes",
              "Text posts + short video + carousel",
              "Newsletter / webinar themes",
              "Follow-up material and sales talking points",
            ],
          ),
          highlight: L(
            "Founder ne mora da glumi content kreatora. Treba da priča o tome što već zna — sistem to pretvara u distribuciju.",
            "The founder doesn’t have to play content creator. They need to talk about what they already know — the system turns that into distribution.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "merenje",
      title: L("Šta meriti", "What to measure"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Engagement je koristan. Ali nije jedini KPI. U Founder-Led Growth-u gledamo i:",
            ],
            [
              "Engagement is useful. But it isn’t the only KPI. In Founder-Led Growth we also look at:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "da li kupci pominju content na sales call-u,",
              "da li outreach ima bolji reply kada profil podržava poruku,",
              "koji postovi rade kao follow-up,",
              "koji video gradi najviše poverenja,",
              "ko iz target firmi gleda profil i reaguje na relevantne teme,",
              "da li sales razgovori počinju sa više konteksta.",
            ],
            [
              "whether buyers mention content on sales calls,",
              "whether outreach gets better replies when the profile supports the message,",
              "which posts work as follow-up,",
              "which video builds the most trust,",
              "who from target companies views the profile and engages on relevant topics,",
              "whether sales conversations start with more context.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Nekad najbolji content nema najviše lajkova — ali sales kaže: „Ljudi dolaze na call spremniji.“ To je signal da content radi.",
            "Sometimes the best content doesn’t have the most likes — but sales says: “People show up to the call more prepared.” That’s a signal content is working.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "checklist",
      title: L("Mini checklist", "Mini checklist"),
      blocks: [
        {
          type: "checklist",
          title: L(
            "Pre nego što pravite content",
            "Before you make content",
          ),
          items: P(
            [
              "Koji problem kupac mora da razume pre razgovora?",
              "Koje pogrešne pretpostavke stalno ispravljamo?",
              "Koje objection-e stalno čujemo?",
              "Koje priče iz prakse pokazuju da razumemo problem?",
              "Koji stav imamo, a konkurencija ga ne govori jasno?",
              "Šta bi kupac trebalo da vidi nakon outreach poruke?",
              "Koje teme podržavaju naš positioning?",
              "Koji format najbolje prenosi poverenje?",
              "Kako ćemo content koristiti u follow-up-u?",
              "Kako ćemo znati da content pomaže sales-u?",
            ],
            [
              "Which problem must the buyer understand before the conversation?",
              "Which wrong assumptions do we constantly correct?",
              "Which objections do we keep hearing?",
              "Which real stories show we understand the problem?",
              "Which stance do we have that competitors don’t state clearly?",
              "What should the buyer see after an outreach message?",
              "Which themes support our positioning?",
              "Which format best carries trust?",
              "How will we use content in follow-up?",
              "How will we know content is helping sales?",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Posao contenta", "Content’s job"),
          statement: L(
            "Da kupac pre sales razgovora već ima više poverenja nego što bi imao bez njega.",
            "That before the sales conversation, the buyer already has more trust than they would without it.",
          ),
          support: L(
            "Ne zato što svi treba da postanu influenseri. Nego zato što u B2B-u poverenje počinje mnogo pre call-a.",
            "Not because everyone should become influencers. But because in B2B, trust starts long before the call.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Koliko često treba da objavljujemo?",
        "How often should we post?",
      ),
      answer: L(
        "Bolje dosledno i relevantno nego često i prazno. Za većinu founder-a radi ritam koji može da izdrži sistem iz intervjua — ne dnevni pritisak da „nešto izmisle“.",
        "Better consistent and relevant than frequent and empty. For most founders, a rhythm the interview system can sustain works — not daily pressure to “invent something.”",
      ),
    },
    {
      question: L(
        "Da li content mora da bude na founder profilu?",
        "Does content have to be on the founder’s profile?",
      ),
      answer: L(
        "U Founder-Led Growth-u da — ili na drugom relevantnom licu kompanije. Company page retko gradi isti nivo poverenja kao osoba.",
        "In Founder-Led Growth, yes — or on another relevant company face. A company page rarely builds the same trust as a person.",
      ),
    },
    {
      question: L(
        "Šta ako nemamo video?",
        "What if we don’t have video?",
      ),
      answer: L(
        "Krenite od texta i priča iz sales call-ova. Video dodajte kada možete — kao trust format, ne kao uslov da sistem uopšte krene.",
        "Start with text and stories from sales calls. Add video when you can — as a trust format, not as a requirement for the system to start.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "positioning-in-five-seconds",
      title: L(
        "Positioning: šta kupac mora da razume za 5 sekundi",
        "Positioning: What Buyers Must Understand in 5 Seconds",
      ),
    },
    next: {
      slug: "signal-based-outreach",
      title: L(
        "Outreach po signalima",
        "Signal-Based Outreach",
      ),
      note: L(
        "Sledeće: kako prilazite pravim ljudima u pravom trenutku.",
        "Next: how you approach the right people at the right time.",
      ),
    },
    related: [
      {
        slug: "why-outbound-cant-work-alone",
        title: L(
          "Zašto outbound više ne može da radi sam",
          "Why Outbound Can’t Work Alone Anymore",
        ),
      },
      {
        slug: "follow-up-system",
        title: L("Follow up sistem", "Follow-Up System"),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš content koji greje kupce pre poruke?",
      "Want content that warms buyers before the message?",
    ),
    body: L(
      "Možemo da izvučemo teme iz vašeg znanja i povežemo ih sa outreach-om i sales call-ovima.",
      "We can pull topics from your knowledge and connect them to outreach and sales calls.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "founder content LinkedIn",
      "trust layer B2B",
      "content pre outreach-a",
      "founder led growth content",
      "video trust format",
    ],
    [
      "founder LinkedIn content",
      "B2B trust layer",
      "content before outreach",
      "founder led growth content",
      "video trust format",
    ],
  ),
};
