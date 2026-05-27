import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });
const H = (sr: string[], en: string[]) => sr.map((s, i) => ({ sr: s, en: en[i] }));

const video1 = {
  title: L("How to Write LinkedIn Posts That Convert", "How to Write LinkedIn Posts That Convert"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za razumevanje kako LinkedIn postovi mogu da pređu od pažnje do konverzije.",
    "Useful for understanding how LinkedIn posts can move from attention to conversion.",
  ),
  placementNote: L(
    "Pogledaj posle okvira post strukture ili u sekciji video materijala.",
    "Watch after the post structure framework or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/vcFh5-fynHc",
  watchUrl: "https://www.youtube.com/watch?v=vcFh5-fynHc",
};

const video2 = {
  title: L("The Best LinkedIn Content Strategy for 2025", "The Best LinkedIn Content Strategy for 2025"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Relevantno za povezivanje pojedinačnih postova sa širom content strategijom.",
    "Relevant for connecting individual posts to the broader content strategy.",
  ),
  placementNote: L(
    "Pogledaj posle core ideje ili u video materijalima.",
    "Watch after the core idea section or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/K2H2KGTbZ08",
  watchUrl: "https://www.youtube.com/watch?v=K2H2KGTbZ08",
};

const video3 = {
  title: L("How to Write Better LinkedIn Hooks", "How to Write Better LinkedIn Hooks"),
  channel: L("YouTube", "YouTube"),
  description: L(
    "Korisno za poboljšanje prvih linija i povećanje čitljivosti posta.",
    "Useful for improving the first lines and increasing post readability.",
  ),
  placementNote: L(
    "Pogledaj posle koraka za hook-ove u writing-steps sekciji.",
    "Watch after the hook writing step in the writing-steps section.",
  ),
  embedUrl: "https://www.youtube.com/embed/2HSavr17yq0",
  watchUrl: "https://www.youtube.com/watch?v=2HSavr17yq0",
};

const video4 = {
  title: L("AuthoredUp Guided Tour", "AuthoredUp Guided Tour"),
  channel: L("AuthoredUp", "AuthoredUp"),
  description: L(
    "Pokazuje kako AuthoredUp pomaže pri pisanju, formatiranju i preview-u LinkedIn postova.",
    "Shows how AuthoredUp can help with LinkedIn post writing, formatting, and previewing.",
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
    "Podržava vezu između pojedinačnih postova i B2B content strategije fokusirane na pipeline.",
    "Supports the connection between individual posts and pipeline-focused B2B content.",
  ),
  placementNote: L(
    "Pogledaj posle proof sekcije ili u video materijalima.",
    "Watch after the proof section or in the videos section.",
  ),
  embedUrl: "https://www.youtube.com/embed/QLsrenrNDe0",
  watchUrl: "https://www.youtube.com/watch?v=QLsrenrNDe0",
};

export const lesson5RichContent: RichLessonContent = {
  meta: {
    stage: L("Content Engine", "Content Engine"),
    readingTime: L("16-20 min", "16-20 min"),
    difficulty: L("Početnik do srednjeg nivoa", "Beginner to intermediate"),
    outcome: L(
      "Naučićeš kako da pišeš edukativne LinkedIn postove sa jasnim hook-ovima, korisnom strukturom, dokazom i CTA-ovima koji grade autoritet kod ICP-a i pomeraju čitaoca ka sledećem koraku u prodaji.",
      "Learn how to write educational LinkedIn posts with clear hooks, useful structure, proof, and CTAs that build authority with your ICP and move readers toward the next sales step.",
    ),
    recommendedTools: L(
      "LinkedIn, AuthoredUp, Taplio, Notion, Google Docs, Canva, HubSpot CRM, Pipedrive",
      "LinkedIn, AuthoredUp, Taplio, Notion, Google Docs, Canva, HubSpot CRM, Pipedrive",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 5", "Lesson 5"),
    title: L(
      "Kako pisati edukativne LinkedIn postove koji grade autoritet",
      "How to Write Educational LinkedIn Posts That Build Authority",
    ),
    paragraphs: P(
      [
        "Većina LinkedIn postova ne pada zbog loše ideje.",
        "Pada zbog slabe strukture.",
        "Founder zna temu. Razume kupca. Ima stvarnu ekspertizu. Ima priče iz sales call-ova, klijentskog rada i tržišta.",
        "Ali kad napiše post, postane generičan.",
        "Hook je mekan. Poenta nije jasna. Telo ima previše ideja. Primer nedostaje. CTA je ili previše agresivan ili ga nema.",
        "Čitalac skroluje, ne zato što founder nije kredibilan, već zato što post nije zaslužio pažnju dovoljno brzo.",
        "Edukativni LinkedIn postovi su drugačiji. Ne dele samo savet, uče kupca kako da misli.",
        "Imenuju problem. Refreimuju stari način. Objašnjavaju bolji način. Pokazuju primer. Daju praktičan sledeći korak.",
        "Tako se gradi autoritet, ne rečima „mi smo eksperti“, već time što pomažeš pravom kupcu da bolje razume svoj problem.",
      ],
      [
        "Most LinkedIn posts do not fail because the idea is bad.",
        "They fail because the structure is weak.",
        "The founder knows the topic. They understand the buyer. They have real expertise. They have stories from sales calls, client work, and the market.",
        "But when they write the post, it becomes generic.",
        "The hook is soft. The point is unclear. The body has too many ideas. The example is missing. The CTA is either too aggressive or not there at all.",
        "So the reader scrolls, not because the founder is not credible, but because the post did not earn attention fast enough.",
        "Educational LinkedIn posts are different. They do not just share advice. They teach the buyer how to think.",
        "They name the problem. They reframe the old way. They explain the better way. They show an example. They give the reader a practical next step.",
        "That is how authority is built, not by saying \"we are experts,\" but by helping the right buyer understand their problem better than they did before.",
      ],
    ),
    callout: L(
      "Autoritet ne gradiš više postovanjem. Gradiš ga time što učiš pravog kupca kako da misli.",
      "Authority is not built by posting more. It is built by teaching the right buyer how to think.",
    ),
  },
  toc: [
    { id: "learn", title: L("Šta ćeš naučiti", "What this lesson will teach you") },
    { id: "why", title: L("Zašto je ovo važno", "Why this matters") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vs-generic", title: L("Edukativni vs generički post", "Educational post vs generic post") },
    { id: "post-framework", title: L("Okvir edukativnog posta", "Authority post framework") },
    { id: "writing-steps", title: L("Korak po korak pisanje", "Step-by-step post writing framework") },
    { id: "story", title: L("Mesto u Lead Agents sistemu", "Place in the Lead Agents system") },
    { id: "proof", title: L("Dokaz i istraživanja", "Proof / trust section") },
    { id: "implement", title: L("Kako implementirati", "How to implement") },
    { id: "tools", title: L("Idealni stack alata", "Ideal tool stack") },
    { id: "workflow", title: L("Primer workflow-a", "Workflow example") },
    { id: "videos", title: L("Video materijali", "YouTube videos") },
    { id: "visuals", title: L("Predlozi vizuala", "Visual elements") },
    { id: "checklist", title: L("Čeklista", "Checklist") },
    { id: "template", title: L("Šablon posta", "Template / swipe file") },
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
              "pisati hook-ove koji zaustavljaju pravog kupca, ne svakoga;",
              "strukturisati edukativne postove oko jedne jasne ideje;",
              "pretvarati ICP bol u korisne LinkedIn postove;",
              "koristiti framework-e, primere i greške za gradnju autoriteta;",
              "dodavati dokaz bez da post deluje kao pitch;",
              "pisati CTA-ove koji odgovaraju nameri kupca;",
              "izbeći generičan „5 saveta“ content;",
              "graditi postove koji podržavaju outreach, webinare, CRM i sales razgovore;",
              "kreirati ponovljive šablone koje founder može koristiti svake nedelje.",
            ],
            [
              "write hooks that stop the right buyer, not everyone;",
              "structure educational posts around one clear idea;",
              "turn buyer pains into useful LinkedIn posts;",
              "use frameworks, examples, and mistakes to build authority;",
              "add proof without making the post feel like a pitch;",
              "write CTAs that match buyer intent;",
              "avoid generic \"5 tips\" content;",
              "build posts that support outreach, webinars, CRM, and sales conversations;",
              "create repeatable post templates the founder can use every week.",
            ],
          ),
        },
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1455390582261-994c6a988f63?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Pisanje na laptopu, edukativni LinkedIn post sa jasnom strukturom",
            "Writing on a laptop, an educational LinkedIn post with clear structure",
          ),
          caption: L(
            "Jak post ne zavisi od inspiracije, zavisi od strukture koja uči pravog kupca.",
            "A strong post does not depend on inspiration, it depends on structure that teaches the right buyer.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "pipeline-flow",
          title: L("Edukativni post u Founder-Led Growth sistemu", "Educational post in the Founder-Led Growth system"),
          subtitle: L(
            "Jedan post gradi poverenje, zatim hrani profil, outreach i CRM.",
            "One post builds trust, then feeds profile, outreach, and CRM.",
          ),
          stages: [
            L("ICP bol", "ICP pain"),
            L("Hook", "Hook"),
            L("Post", "Post"),
            L("Trust", "Trust"),
            L("Engagement", "Engagement"),
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
              "Founder-Led Growth content nije zabava, to je sales kontekst.",
              "Dobar edukativni post može: učiniti kupca svesnim problema; pomoći mu da objasni problem interno; izgraditi poverenje u founder POV; dati razlog za engagement; stvoriti topao outreach opener; validirati webinar temu; generisati DM-ove; kreirati CRM signale; uticati na buduće sales razgovore.",
              "LinkedIn B2B content marketing smernice kažu da jak B2B content treba da pomaže kupcima da reše poslovne probleme i da bude povezan sa publikom, ciljevima, merenjem, customer journey-em i izgradnjom odnosa.",
              "Edelman i LinkedIn 2025 B2B Thought Leadership Impact Report kaže da thought leadership gradi poverenje, usklađivanje i otvara vrata gde tradicionalna prodaja i marketing mogu da padnu.",
              "Tvoji postovi ne treba da „skupljaju lajkove“. Treba da pomeraju kupca jedan korak bliže poverenju.",
            ],
            [
              "Founder-Led Growth content is not entertainment. It is sales context.",
              "A good educational post can: make a buyer aware of a problem; help them explain the problem internally; make them trust the founder's point of view; give the founder a reason to engage; create a warm outreach opener; validate a webinar topic; generate DMs; create CRM signals; influence future sales conversations.",
              "LinkedIn's B2B content marketing guidance says strong B2B content should help buyers solve business problems and should be connected to audience, objectives, measurement, customer journey, and relationship-building.",
              "Edelman and LinkedIn's 2025 B2B Thought Leadership Impact Report says thought leadership builds trust, drives alignment, and opens doors where traditional sales and marketing may fall short.",
              "Your posts should not \"get likes.\" They should move the buyer one step closer to trust.",
            ],
          ),
        },
        {
          type: "stat-row",
          items: [
            {
              value: L("1", "1"),
              label: L("Ideja po postu", "One idea per post"),
              description: L(
                "Jedan problem · jedan reframe · jedan takeaway.",
                "One problem · one reframe · one takeaway.",
              ),
            },
            {
              value: L("3", "3"),
              label: L("Linije koje broje", "Lines that matter"),
              description: L(
                "Prve 3 linije odlučuju da li ICP klikne „see more“.",
                "The first 3 lines decide if your ICP clicks \"see more.\"",
              ),
            },
            {
              value: L("7", "7"),
              label: L("Delova strukture", "Structure parts"),
              description: L(
                "Hook → Problem → Reframe → Framework → Example → Action → CTA.",
                "Hook → Problem → Reframe → Framework → Example → Action → CTA.",
              ),
            },
          ],
        },
        {
          type: "pipeline-flow",
          title: L("Šta jedan jak post može da pokrene", "What one strong post can trigger"),
          subtitle: L(
            "Edukativni content je sales kontekst, ne zabava za feed.",
            "Educational content is sales context, not feed entertainment.",
          ),
          stages: [
            L("Svest", "Awareness"),
            L("POV", "POV"),
            L("DM", "DM"),
            L("Profil", "Profile"),
            L("Outreach", "Outreach"),
            L("CRM", "CRM"),
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
              "Edukativni LinkedIn post treba da ima jedan posao: učiniti pravog kupca pametnijim oko jednog važnog problema.",
              "Ne pet problema. Ne celu ponudu. Ne ceo životni story.",
              "Jedan problem. Jedan reframe. Jedan praktičan takeaway. Jedan sledeći korak.",
              "Većina founder-a pokušava previše u jednom postu, objasni tržište, problem, proizvod, tri primera, case study i CTA. Čitalac se izgubi.",
              "Bolji post je jednostavan:",
            ],
            [
              "An educational LinkedIn post should have one job: make the right buyer smarter about one important problem.",
              "Not five problems. Not your whole offer. Not your life story.",
              "One problem. One reframe. One practical takeaway. One next step.",
              "Most founders try to do too much in one post, they explain the market, problem, product, three examples, a case study, and a CTA. The reader gets lost.",
              "A better post is simple:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Hook-uj pravog kupca.",
              "Imenuj problem.",
              "Refreimuj problem.",
              "Nauči bolji način.",
              "Pokaži konkretan primer.",
              "Daj praktičnu akciju.",
              "Dodaj pravi CTA.",
            ],
            [
              "Hook the right buyer.",
              "Name the problem.",
              "Reframe the issue.",
              "Teach the better way.",
              "Show a concrete example.",
              "Give a practical action.",
              "Add the right CTA.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Najbolji edukativni postovi deluju korisno čak i ako čitalac nikad ne kupi. Zato grade poverenje.",
            "The best educational posts feel useful even if the reader never buys. That is why they build trust.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "vs-generic",
      title: L("Edukativni LinkedIn post vs generički post", "Educational LinkedIn post vs generic LinkedIn post"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Generički postovi tera ljude da kimaju glavom. Edukativni postovi tera kupce da pomisle: „Ovo je tačno ono sa čim se mi bore.“",
            ],
            [
              "Generic posts make people nod. Educational posts make buyers think: \"This is exactly what we are dealing with.\"",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Generički post", "Generic post"),
              subtitle: L("Engagement bez ICP-a", "Engagement without ICP"),
              variant: "muted",
              items: P(
                [
                  "„5 saveta za founder-e“",
                  "Vague hook, široka publika",
                  "Nema primer iz terena",
                  "CTA „zakaži call“ ili ništa",
                  "Meri lajkove",
                ],
                [
                  "\"5 tips for founders\"",
                  "Vague hook, broad audience",
                  "No field example",
                  "CTA \"book a call\" or nothing",
                  "Measures likes",
                ],
              ),
            },
            {
              title: L("Edukativni authority post", "Educational authority post"),
              subtitle: L("Trust kod ICP-a", "Trust with ICP"),
              variant: "accent",
              items: P(
                [
                  "Počinje specifičnim buyer problemom",
                  "Hook filtrira pogrešnu publiku",
                  "Before/after ili mini case",
                  "CTA ladder (save → DM → webinar)",
                  "Meri ICP engagement i DM-ove",
                ],
                [
                  "Starts with a specific buyer problem",
                  "Hook filters out wrong audience",
                  "Before/after or mini case",
                  "CTA ladder (save → DM → webinar)",
                  "Measures ICP engagement and DMs",
                ],
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Generički vs edukativni authority post", "Generic vs educational authority post"),
          headers: H(
            ["Generički LinkedIn post", "Edukativni authority post"],
            ["Generic LinkedIn post", "Educational authority post"],
          ),
          rows: [
            { cells: [L("Počinje vague savetom", "Starts with vague advice"), L("Počinje specifičnim buyer problemom", "Starts with a specific buyer problem")] },
            { cells: [L("Pokušava da privuče sve", "Tries to appeal to everyone"), L("Govori direktno ICP-u", "Speaks directly to the ICP")] },
            { cells: [L("Koristi široke savete", "Uses broad tips"), L("Uči oštriji framework", "Teaches a sharper framework")] },
            { cells: [L("Zvuči kao content za engagement", "Sounds like content for engagement"), L("Zvuči kao stvarni field insight", "Sounds like a real field insight")] },
            { cells: [L("Nema jasan POV", "Has no clear point of view"), L("Izaziva uobičajeno verovanje", "Challenges a common belief")] },
            { cells: [L("Završava bez sledećeg koraka", "Ends with no next step"), L("Koristi CTA usklađen sa namerom", "Uses a CTA matched to intent")] },
            { cells: [L("Meri samo lajkove", "Measures likes only"), L("Meri ICP engagement, DM-ove, save-ove, profile view-ove i sales razgovore", "Measures ICP engagement, DMs, saves, profile views, and sales conversations")] },
            { cells: [L("Stvara pažnju", "Creates attention"), L("Stvara poverenje", "Creates trust")] },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "post-framework",
      title: L("Okvir edukativnog LinkedIn posta", "The Educational LinkedIn Post Framework"),
      blocks: [
        {
          type: "illustration",
          src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
          alt: L(
            "Struktura LinkedIn posta, hook, telo, primer i CTA",
            "LinkedIn post structure, hook, body, example, and CTA",
          ),
          caption: L(
            "Svaki deo ima jedan posao. Preskoči ga, i post postane generičan.",
            "Each part has one job. Skip it, and the post becomes generic.",
          ),
          credit: L("Foto: Unsplash", "Photo: Unsplash"),
        },
        {
          type: "framework-intro",
          title: L(
            "Hook → Problem → Reframe → Framework → Example → Action → CTA",
            "Hook → Problem → Reframe → Framework → Example → Action → CTA",
          ),
          description: L(
            "Ovo je struktura. Ne svaki post mora izgledati identično, ali svaki jak edukativni post obično sadrži ove delove.",
            "This is the structure. Not every post has to look identical, but every strong educational post usually contains these parts.",
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Anatomija edukativnog posta", "Educational post anatomy"),
          subtitle: L(
            "Čitalac prolazi kroz sekvencu, svaki korak gradi na prethodnom.",
            "The reader moves through a sequence, each step builds on the last.",
          ),
          stages: [
            L("Hook", "Hook"),
            L("Problem", "Problem"),
            L("Reframe", "Reframe"),
            L("Framework", "Framework"),
            L("Example", "Example"),
            L("CTA", "CTA"),
          ],
        },
        {
          type: "zone-cards",
          title: L("7 zona posta, šta radi svaki deo", "7 post zones, what each part does"),
          subtitle: L(
            "Koristi kao checklist pre objave. Ako zona ne radi posao, prepiši je.",
            "Use as a pre-publish checklist. If a zone does not do its job, rewrite it.",
          ),
          cards: [
            {
              zone: L("Hook", "Hook"),
              eyebrow: L("Linija 1-3", "Lines 1-3"),
              job: L("Zaustavi ICP i nateraj „see more“.", "Stop the ICP and earn \"see more.\""),
              doThis: L("Imenuj problem, grešku ili kontrarian POV.", "Name the problem, mistake, or contrarian POV."),
              avoid: L("„Ovo je promenilo sve“ bez konteksta.", "\"This changed everything\" with no context."),
            },
            {
              zone: L("Problem", "Problem"),
              eyebrow: L("Prepoznavanje", "Recognition"),
              job: L("Kupac mora da pomisli: „Ovo je moj svet.“", "Buyer must think: \"This is my world.\""),
              doThis: L("Jezik iz sales call-ova i CRM beleški.", "Language from sales calls and CRM notes."),
              avoid: L("Preširok problem koji ne pogađa ICP.", "A problem too broad to hit your ICP."),
            },
            {
              zone: L("Reframe", "Reframe"),
              eyebrow: L("Autoritet", "Authority"),
              job: L("Pokaži dublje razmišljanje od surface saveta.", "Show deeper thinking than surface advice."),
              doThis: L("„Većina misli X. Pravi problem je Y.“", "\"Most think X. The real problem is Y.\""),
              avoid: L("Saveti bez promene načina razmišljanja.", "Tips that do not change how they think."),
            },
            {
              zone: L("Framework", "Framework"),
              eyebrow: L("Uči", "Teach"),
              job: L("Učini ekspertizu prenosivom (3-5 koraka).", "Make expertise portable (3-5 steps)."),
              doThis: L("Jednostavan model koji se pamti i deli.", "A simple model that is easy to remember and share."),
              avoid: L("Više od 7 koraka u jednom postu.", "More than 7 steps in one post."),
            },
            {
              zone: L("Example", "Example"),
              eyebrow: L("Dokaz", "Proof"),
              job: L("Pretvori teoriju u poverenje.", "Turn theory into trust."),
              doThis: L("Before/after, mini case, rewrite poruke.", "Before/after, mini case, message rewrite."),
              avoid: L("Koncept bez primene u praksi.", "Concept with no real-world application."),
            },
            {
              zone: L("Action", "Action"),
              eyebrow: L("Uradi sada", "Do now"),
              job: L("Jedna stvar koju čitalac može odmah.", "One thing the reader can do immediately."),
              doThis: L("„Napiši sledeći post iz jednog buyer bola.“", "\"Write your next post from one buyer pain.\""),
              avoid: L("Samo teorija bez ponašanja.", "Theory only with no behavior change."),
            },
            {
              zone: L("CTA", "CTA"),
              eyebrow: L("Sledeći korak", "Next step"),
              job: L("Vodi dalje bez hard pitch-a.", "Guide forward without a hard pitch."),
              doThis: L("Save → comment → DM → webinar → consultation.", "Save → comment → DM → webinar → consultation."),
              avoid: L("„Zakaži call“ na svakom korisnom postu.", "\"Book a call\" on every useful post."),
            },
          ],
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Hook", "Hook"),
              whatToDo: L(
                "Zaustavi pravog kupca imenovanjem problema, verovanja, greške ili tenzije.",
                "Stop the right buyer by naming a problem, belief, mistake, or tension.",
              ),
              whyItMatters: L(
                "Bez jakog hook-a čitalac ne klikne „see more“.",
                "Without a strong hook, the reader will not click \"see more.\"",
              ),
              example: L(
                "„Tvoj outbound ne pada zbog copy-ja.“",
                "\"Your outbound is not failing because of copy.\"",
              ),
              commonMistake: L(
                "Clickbait koji privlači pogrešnu publiku.",
                "Clickbait that attracts the wrong audience.",
              ),
              tryThis: L(
                "Napiši 10 hook-ova za jednu ideju i izaberi onaj koji zaustavlja ICP.",
                "Write 10 hooks for one idea and choose the one that stops your ICP.",
              ),
              highlight: L(
                "Dobar hook kvalifikuje pažnju, ne samo maksimizuje je.",
                "A good hook qualifies attention, not just maximizes it.",
              ),
            },
            {
              step: 2,
              title: L("Problem", "Problem"),
              whatToDo: L(
                "Objasni šta se dešava u svetu kupca.",
                "Explain what is happening in the buyer's world.",
              ),
              whyItMatters: L(
                "Kupac mora da se prepozna pre nego što prihvati savet.",
                "The buyer must recognize themselves before they accept advice.",
              ),
              example: L(
                "„Outbound se ignoriše jer kupac nema kontekst pre poruke.“",
                "\"Outbound gets ignored because the buyer has no context before the message arrives.\"",
              ),
              commonMistake: L(
                "Opis problema koji je previše širok.",
                "Describing a problem that is too broad.",
              ),
              tryThis: L(
                "Koristi jezik iz stvarnih sales call-ova.",
                "Use language from real sales calls.",
              ),
              highlight: L(
                "Problem mora zvučati kao njihov, ne tvoj.",
                "The problem must sound like theirs, not yours.",
              ),
            },
            {
              step: 3,
              title: L("Reframe", "Reframe"),
              whatToDo: L(
                "Pokaži zašto očigledno objašnjenje nije kompletno ili je pogrešno.",
                "Show why the obvious explanation is incomplete or wrong.",
              ),
              whyItMatters: L(
                "Reframe gradi autoritet jer pokazuje dublje razmišljanje od surface saveta.",
                "Reframes build authority because they show deeper thinking than surface-level advice.",
              ),
              example: L(
                "„Većina misli da je problem copy. Pravi problem je nedostatak konteksta.“",
                "\"Most think the problem is copy. The real problem is lack of context.\"",
              ),
              commonMistake: L(
                "Saveti bez promene načina razmišljanja kupca.",
                "Giving tips without changing how the buyer thinks.",
              ),
              tryThis: L(
                "„Većina [ICP] misli da je problem [površinski]. Pravi problem je [dublji].“",
                "\"Most [ICP] think the problem is [surface issue]. The real problem is [deeper issue].\"",
              ),
              highlight: L(
                "Reframe je razlika između saveta i autoriteta.",
                "The reframe is the difference between advice and authority.",
              ),
            },
            {
              step: 4,
              title: L("Framework", "Framework"),
              whatToDo: L(
                "Nauči bolji način razmišljanja ili delovanja - 3-5 koraka.",
                "Teach a better way to think or act - 3-5 steps.",
              ),
              whyItMatters: L(
                "Framework čini ekspertizu prenosivom i lakom za deljenje interno.",
                "Frameworks make expertise portable and easy to share internally.",
              ),
              example: L(
                "Context → Trust → Signal → Conversation → Pipeline",
                "Context → Trust → Signal → Conversation → Pipeline",
              ),
              commonMistake: L(
                "Više od 7 koraka u jednom postu.",
                "More than 7 steps in one post.",
              ),
              tryThis: L(
                "Ako ima više od 7 koraka, podeli u više postova.",
                "If it has more than 7 steps, split into multiple posts.",
              ),
              highlight: L(
                "Jednostavan framework se pamti, deli i koristi u sales razgovorima.",
                "A simple framework is easier to remember, share, and use in sales conversations.",
              ),
            },
            {
              step: 5,
              title: L("Example", "Example"),
              whatToDo: L(
                "Pokaži kako ideja izgleda u praksi.",
                "Show what the idea looks like in practice.",
              ),
              whyItMatters: L(
                "Primeri pretvaraju apstraktan savet u poverenje.",
                "Examples turn abstract advice into trust.",
              ),
              example: L(
                "Before/after rewrite profila ili outreach poruke.",
                "Before/after profile or outreach message rewrite.",
              ),
              commonMistake: L(
                "Objašnjenje koncepta bez primene.",
                "Explaining the concept but not showing the application.",
              ),
              tryThis: L(
                "Uključi bar jedan: before/after, mini case, real message, checklist ili rewrite.",
                "Include at least one: before/after, mini case, real message, checklist, or rewrite.",
              ),
              highlight: L(
                "Bez primera post ostaje teorija.",
                "Without an example, the post stays theory.",
              ),
            },
            {
              step: 6,
              title: L("Action", "Action"),
              whatToDo: L(
                "Daj čitaocu nešto što može da uradi odmah.",
                "Give the reader something they can do right away.",
              ),
              whyItMatters: L(
                "Akcija pretvara učenje u ponašanje, i signal za follow-up.",
                "Action turns learning into behavior, and a signal for follow-up.",
              ),
              example: L(
                "„Napiši sledeći post iz jednog buyer bola, ne iz topic ideje.“",
                "\"Write your next post from one buyer pain, not a topic idea.\"",
              ),
              commonMistake: L(
                "Samo teorija bez sledećeg koraka.",
                "Theory only with no next step.",
              ),
              tryThis: L(
                "Jedna jasna akcija na kraju tela posta.",
                "One clear action at the end of the post body.",
              ),
              highlight: L(
                "Akcija ne mora biti kupovina, mora biti korisna.",
                "The action does not have to be a purchase, it has to be useful.",
              ),
            },
            {
              step: 7,
              title: L("CTA", "CTA"),
              whatToDo: L(
                "Vodi sledeći korak bez forsiranog pitch-a.",
                "Guide the next step without forcing a pitch.",
              ),
              whyItMatters: L(
                "Edukativni content treba sledeći korak usklađen sa namerom čitaoca.",
                "Educational content needs a next step aligned with reader intent.",
              ),
              example: L(
                "„DM mi ‚POST‘ i pošaljem framework.“ ili „Sačuvaj pre sledećeg content planiranja.“",
                "\"DM me 'POST' and I'll send the framework.\" or \"Save this before your next content planning session.\"",
              ),
              commonMistake: L(
                "„Zakaži call“ na svakom korisnom postu.",
                "\"Book a call\" on every useful post.",
              ),
              tryThis: L(
                "Koristi CTA ladder: save → comment → DM → webinar → consultation.",
                "Use the CTA ladder: save → comment → DM → webinar → consultation.",
              ),
              highlight: L(
                "CTA treba da deluje kao logičan sledeći korak, ne prekid prodaje.",
                "The CTA should feel like the next logical step, not a sales interruption.",
              ),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Post bez strukture zavisi od inspiracije. Post sa strukturom postaje ponovljiv.",
            "A post without structure depends on inspiration. A post with structure becomes repeatable.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "writing-steps",
      title: L("Korak po korak: pisanje posta", "Step-by-step post writing framework"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Slabe prve linije", "Weak opening lines"),
              subtitle: L("Čitalac skroluje", "Reader scrolls"),
              variant: "muted",
              items: P(
                [
                  "„Danas bih podelio nešto važno…“",
                  "Duga pozadina pre poente",
                  "Generički savet bez ICP-a",
                  "Clickbait za široku publiku",
                ],
                [
                  "\"Today I want to share something important…\"",
                  "Long background before the point",
                  "Generic advice with no ICP",
                  "Clickbait for a broad audience",
                ],
              ),
            },
            {
              title: L("Jake prve linije", "Strong opening lines"),
              subtitle: L("ICP klikne „see more“", "ICP clicks \"see more\""),
              variant: "accent",
              items: P(
                [
                  "Počinje od buyer bola ili greške",
                  "Tenzija u prvoj rečenici",
                  "Konkretan jezik iz terena",
                  "Filtrira pogrešnu publiku",
                ],
                [
                  "Starts from buyer pain or mistake",
                  "Tension in the first sentence",
                  "Concrete language from the field",
                  "Filters out the wrong audience",
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
              title: L("Izaberi jedan buyer problem", "Choose one buyer problem"),
              whatToDo: L(
                "Svaki post počni sa jednim ICP problemom.",
                "Start every post with one ICP problem.",
              ),
              whyItMatters: L(
                "Autoritet dolazi iz relevantnosti.",
                "Authority comes from relevance.",
              ),
              example: L(
                "Loše: „LinkedIn saveti za founder-e.“ Bolje: „Zašto founder LinkedIn content dobija engagement ali ne stvara pipeline.“",
                "Bad: \"LinkedIn tips for founders.\" Better: \"Why founder LinkedIn content gets engagement but does not create pipeline.\"",
              ),
              commonMistake: L(
                "Pisanje o usluzi umesto o buyer problemu.",
                "Writing about your service instead of the buyer's problem.",
              ),
              tryThis: L(
                "„Ovaj post je za [ICP] koji se bore sa [specifičan problem].“",
                "\"This post is for [ICP] who struggle with [specific problem].\"",
              ),
              highlight: L(
                "Ako ne možeš da imenuješ buyer problem, nisi spreman da pišeš post.",
                "If you cannot name the buyer problem, you are not ready to write the post.",
              ),
            },
            {
              step: 2,
              title: L("Napiši hook koji filtrira ICP", "Write a hook that filters for the ICP"),
              whatToDo: L(
                "Hook-ovi treba da privuku pravog kupca, ne svakoga.",
                "Write hooks that attract the right buyer, not everyone.",
              ),
              whyItMatters: L(
                "Hook ne treba samo da maksimizuje pažnju, treba da je kvalifikuje.",
                "A hook should not only maximize attention. It should qualify attention.",
              ),
              example: L(
                "Loše: „Ovo je promenilo sve.“ Bolje: „Ovo je promenilo kako pretvaramo LinkedIn engagement u sales razgovore.“",
                "Bad: \"This changed everything.\" Better: \"This changed how we turn LinkedIn engagement into sales conversations.\"",
              ),
              commonMistake: L(
                "Clickbait koji privlači nasumičan engagement.",
                "Using clickbait hooks that attract random engagement.",
              ),
              tryThis: L(
                "Napiši 10 hook-ova za jednu ideju i izaberi onaj koji zaustavlja ICP.",
                "Write 10 hooks for one post idea. Choose the one that would stop your ICP.",
              ),
              highlight: L(
                "Dobar hook tera pogrešnu publiku da skroluje dalje.",
                "A good hook makes the wrong person keep scrolling.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("Tipovi hook-ova", "Hook types"),
          headers: H(
            ["Tip hook-a", "Koristi kad", "Primer"],
            ["Hook type", "Use when", "Example"],
          ),
          rows: [
            { cells: [L("Problem hook", "Problem hook"), L("Kupac već oseća bol", "Buyer feels the pain already"), L("„Tvoj outbound ne pada zbog copy-ja.“", "\"Your outbound is not failing because of copy.\"")] },
            { cells: [L("Reframe hook", "Reframe hook"), L("Izazivaš verovanje", "You want to challenge a belief"), L("„Većina founder-a ne treba više leadova. Treba im više konteksta.“", "\"Most founders do not need more leads. They need more context.\"")] },
            { cells: [L("Mistake hook", "Mistake hook"), L("Kupac radi pogrešno", "Buyer is doing something wrong"), L("„Tretiraš LinkedIn kao content. Kupac ga tretira kao research.“", "\"You are treating LinkedIn like content. Your buyer treats it like research.\"")] },
            { cells: [L("Contrarian hook", "Contrarian hook"), L("Imaš jak POV", "You have a strong POV"), L("„Postovanje svaki dan nije strategija.“", "\"Posting every day is not a strategy.\"")] },
            { cells: [L("Story hook", "Story hook"), L("Imaš stvaran primer", "You have a real example"), L("„Founder mi je rekao da LinkedIn ne radi. Onda smo otvorili profil.“", "\"A founder told me LinkedIn did not work. Then we opened his profile.\"")] },
            { cells: [L("Checklist hook", "Checklist hook"), L("Praktična korisnost", "You want practical utility"), L("„Pre nego što pokreneš outreach, proveri ovih 7 stvari.“", "\"Before you launch outreach, check these 7 things.\"")] },
            { cells: [L("Data hook", "Data hook"), L("Imaš kredibilan stat", "You have a credible stat"), L("„Većina kupaca nije spremna da kupi danas. Tvoj content i dalje ima posao.“", "\"Most buyers are not ready to buy today. Your content still matters.\"")] },
          ],
        },
        {
          type: "pipeline-flow",
          title: L("Workflow pisanja, od Notion banka do objave", "Writing workflow, from Notion bank to publish"),
          subtitle: L(
            "Notion drži šablone i hook bank - Google Docs za draft i review sa timom.",
            "Notion holds templates and hook banks - Google Docs for drafting and team review.",
          ),
          stages: [
            L("Buyer bol", "Buyer pain"),
            L("10 hook-ova", "10 hooks"),
            L("Draft", "Draft"),
            L("Review", "Review"),
            L("AuthoredUp", "AuthoredUp"),
            L("Objava", "Publish"),
          ],
        },
        { type: "video", video: video3 },
        {
          type: "framework-steps",
          steps: [
            {
              step: 3,
              title: L("Prve 3 linije rade posao", "Make the first 3 lines do the work"),
              whatToDo: L(
                "Koristi prve linije za tenziju i relevantnost.",
                "Use the first lines to create tension and relevance.",
              ),
              whyItMatters: L(
                "Na LinkedIn-u prve linije odlučuju da li neko klikne „see more“.",
                "On LinkedIn, the first lines decide whether people click \"see more.\"",
              ),
              example: L(
                "„Većina founder-a misli da im je problem konzistentnost. Nije. Problem je da content nije povezan sa pipeline-om.“",
                "\"Most founders think their LinkedIn content problem is consistency. It is not. It is that their content does not connect to pipeline.\"",
              ),
              commonMistake: L(
                "Početak sa pozadinom, kontekstom ili mekim uvodom.",
                "Starting with background, context, or a soft intro.",
              ),
              tryThis: L(
                "Obriši prvu rečenicu draft-a, post je često jači posle toga.",
                "Delete the first sentence of your draft. Most of the time, the post gets stronger.",
              ),
              highlight: L(
                "Ne zagrevaj. Počni tamo gde kupac već oseća bol.",
                "Do not warm up. Start where the buyer already feels pain.",
              ),
            },
            {
              step: 4,
              title: L("Problem → reframe → bolji način", "Use problem → reframe → better way"),
              whatToDo: L(
                "Objasni staro verovanje i zameni ga oštrijim.",
                "Once the reader is hooked, explain the old belief and replace it with a sharper one.",
              ),
              whyItMatters: L(
                "Reframe pokazuje da founder misli dublje od surface saveta.",
                "Reframes build authority because they show deeper thinking than surface-level advice.",
              ),
              example: L(
                "Problem: outbound se ignoriše. Staro verovanje: copy je loš. Reframe: kupac nema kontekst. Bolji način: profil + content + engagement pre pitch-a.",
                "Problem: outbound gets ignored. Old belief: copy is bad. Reframe: buyer has no context. Better way: profile + content + engagement before pitching.",
              ),
              commonMistake: L(
                "Saveti bez promene načina razmišljanja.",
                "Giving tips without changing how the buyer thinks.",
              ),
              tryThis: L(
                "„Većina [ICP] misli da je problem [površinski]. Pravi problem je [dublji].“",
                "\"Most [ICP] think the problem is [surface issue]. The real problem is [deeper issue].\"",
              ),
              highlight: L(
                "Reframe je srce edukativnog posta.",
                "The reframe is the heart of the educational post.",
              ),
            },
            {
              step: 5,
              title: L("Nauči jedan framework", "Teach one framework"),
              whatToDo: L(
                "Daj praktičan model koji čitalac može da zapamti.",
                "Give the reader a practical model they can remember.",
              ),
              whyItMatters: L(
                "Framework čini ekspertizu prenosivom i lakom za objašnjenje interno.",
                "Frameworks make expertise portable and help buyers explain the idea internally.",
              ),
              example: L(
                "ICP Pain → Founder POV → Content Pillar → Post → Signal → Follow-up",
                "ICP Pain → Founder POV → Content Pillar → Post → Signal → Follow-up",
              ),
              commonMistake: L(
                "Korisno ali nezaboravno, previše koraka.",
                "Useful but hard to remember, too many steps.",
              ),
              tryThis: L(
                "Pretvori savet u 3-5 koraka. Više od 7 → podeli u više postova.",
                "Turn your advice into 3-5 steps. More than 7 → split into multiple posts.",
              ),
              highlight: L(
                "Jednostavan framework se pamti i deli.",
                "A simple framework is easier to remember and share.",
              ),
            },
            {
              step: 6,
              title: L("Dodaj konkretan primer", "Add a concrete example"),
              whatToDo: L(
                "Pokaži kako ideja izgleda u praksi.",
                "Show what the idea looks like in practice.",
              ),
              whyItMatters: L(
                "Primeri pretvaraju apstraktan savet u poverenje.",
                "Examples turn abstract advice into trust.",
              ),
              example: L(
                "Before: „Hey, saw you run a SaaS company…“ After: „Primetio sam da zapošljavate SDR-ove dok još gradite founder content. Obično outbound radi bolje kad je poruka već dokazana…“",
                "Before: \"Hey, saw you run a SaaS company…\" After: \"Noticed you're hiring SDRs while still posting founder-led content. Usually outbound works better when the message is already proven…\"",
              ),
              commonMistake: L(
                "Koncept bez primene.",
                "Explaining the concept but not showing the application.",
              ),
              tryThis: L(
                "Svaki post treba bar jedan: before/after, mini case, real message, checklist ili rewrite.",
                "Every post should include at least one: before/after, mini case, real message, checklist, or rewrite.",
              ),
              highlight: L(
                "Primer je dokaz da znaš kako se ovo radi u stvarnosti.",
                "The example proves you know how this works in reality.",
              ),
            },
            {
              step: 7,
              title: L("Dodaj dokaz bez pitch-a", "Add proof without turning the post into a pitch"),
              whatToDo: L(
                "Koristi dokaz da podržiš ideju, ne da dominiraš post.",
                "Use proof to support the idea, not dominate the post.",
              ),
              whyItMatters: L(
                "Dokaz čini content kredibilnim, ali self-promotion ubija poverenje.",
                "Proof makes content credible, but self-promotion kills trust.",
              ),
              example: L(
                "Dobro: „Ovaj obrazac vidimo u 30+ B2B firmi: postovi koji stvaraju pipeline retko su najviralniji.“ Loše: „Mi smo najbolja agencija. Zakaži call.“",
                "Good: \"We saw this pattern across 30+ B2B companies: posts that created pipeline were rarely the most viral.\" Bad: \"We are the best agency. Book a call.\"",
              ),
              commonMistake: L(
                "Dokaz kao self-promotion umesto evidence.",
                "Adding proof as self-promotion instead of evidence.",
              ),
              tryThis: L(
                "„Evo obrasca koji stalno vidimo…“ / „Ovo se pojavilo u 3 sales call-a prošle nedelje…“",
                "\"Here's the pattern we keep seeing…\" / \"This showed up in 3 sales calls last week…\"",
              ),
              highlight: L(
                "Dokaz treba da zvuči kao uvid, ne kao reklama.",
                "Proof should sound like insight, not advertising.",
              ),
            },
            {
              step: 8,
              title: L("CTA usklađen sa namerom", "Use CTAs that match reader intent"),
              whatToDo: L(
                "Završi post jasnim sledećim korakom.",
                "End the post with a clear next step.",
              ),
              whyItMatters: L(
                "Edukativni content ne treba uvek da gura call, različiti postovi stvaraju različit nivo namere.",
                "Educational content should not always push for a call. Different posts create different levels of intent.",
              ),
              example: L(
                "Problem education → soft CTA. Framework → template CTA. Proof → consultation CTA.",
                "Problem education → soft CTA. Framework → template CTA. Proof → consultation CTA.",
              ),
              commonMistake: L(
                "„Zakaži call“ na kraju svakog korisnog posta.",
                "Ending every useful post with \"book a call.\"",
              ),
              tryThis: L(
                "Uskladi CTA sa tipom posta i nivoom namere čitaoca.",
                "Match the CTA to the post type and the reader's intent level.",
              ),
              highlight: L(
                "CTA treba da deluje kao logičan sledeći korak.",
                "The CTA should feel like the next logical step.",
              ),
            },
          ],
        },
        {
          type: "table",
          caption: L("CTA ladder", "CTA ladder"),
          headers: H(
            ["Nivo namere", "Tip CTA", "Primer"],
            ["Intent level", "CTA type", "Example"],
          ),
          rows: [
            { cells: [L("Niska", "Low intent"), L("Save / refleksija", "Save / reflect"), L("„Sačuvaj pre sledećeg content planiranja.“", "\"Save this before your next content planning session.\"")] },
            { cells: [L("Lagani engagement", "Light engagement"), L("Komentar", "Comment"), L("„Komentariši ‚HOOKS‘ i pošaljem listu hook-ova.“", "\"Comment 'HOOKS' and I'll send the hook list.\"")] },
            { cells: [L("Srednja", "Medium intent"), L("DM keyword", "DM keyword"), L("„DM mi ‚ICP‘ i pošaljem šablon.“", "\"DM me 'ICP' and I'll send the template.\"")] },
            { cells: [L("Event", "Event intent"), L("Webinar", "Webinar"), L("„Pridruži se sledećem Founder-Led Growth webinaru.“", "\"Join the next Founder-Led Growth webinar.\"")] },
            { cells: [L("Visoka", "High intent"), L("Konsultacija", "Consultation"), L("„Zakaži konsultaciju ako želiš pomoć da izgradiš ovaj sistem.“", "\"Book a consultation if you want help building this system.\"")] },
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
              "Lead Agents redosled: ICP, profil, Outreach, buying signali, content iz intervjua (Riverside, Descript), objava postova, Thought Leader Ads, CRM.",
              "Ova lekcija je operativni sloj contenta: kako od transkripta intervjua napraviti edukativne LinkedIn postove koji uče ICP kako da misli o problemu, ne generične savete.",
              "Jedan snimak daje više postova (greška, okvir, checklist, pre/posle). Post ne mora biti viral, mora privući prave komentare i tag u CRM-u.",
              "Outreach direktno napada ICP. Postovi grade kontekst pre poruke. Reklame indirektno skaliraju ono što već radi organski.",
            ],
            [
              "Lead Agents order: ICP, profile, Outreach, buying signals, interview content (Riverside, Descript), publishing posts, Thought Leader Ads, CRM.",
              "This lesson is the operational layer of content: how to turn interview transcripts into educational LinkedIn posts that teach the ICP how to think about the problem, not generic tips.",
              "One recording yields multiple posts (mistake, framework, checklist, before/after). The post does not need to go viral. It needs the right comments and a CRM tag.",
              "Outreach attacks the ICP directly. Posts build context before the message. Ads indirectly scale what already works organically.",
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
              title: L("Thought leadership gradi poverenje i otvara vrata", "Thought leadership builds trust and opens doors"),
              body: L(
                "Edelman / LinkedIn 2025 B2B Thought Leadership Impact Report pozicionira thought leadership kao strateški alat za gradnju poverenja, usklađivanje i otvaranje vrata gde tradicionalna prodaja i marketing mogu da padnu.",
                "The Edelman / LinkedIn 2025 B2B Thought Leadership Impact Report positions thought leadership as a strategic tool for building trust, driving alignment, and opening doors where traditional sales and marketing may fall short.",
              ),
              sourceLabel: L("Edelman / LinkedIn 2025", "Edelman / LinkedIn 2025"),
              sourceUrl: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report",
            },
            {
              title: L("B2B content treba da pomaže kupcima da reše poslovne probleme", "B2B content should help buyers solve business problems"),
              body: L(
                "LinkedIn Marketing Solutions objašnjava da B2B content treba da pomaže ljudima da reše poslovne probleme i rade posao bolje, dok ih vodi ka brendu i rešenju.",
                "LinkedIn Marketing Solutions explains that B2B content should help people solve business problems and do their jobs better while guiding them toward your brand and solution.",
              ),
              sourceLabel: L("LinkedIn Marketing Solutions", "LinkedIn Marketing Solutions"),
              sourceUrl: "https://www.linkedin.com/business/marketing/blog/content-marketing/the-ultimate-guide-to-improve-your-b2b-content-marketing-strategy",
            },
            {
              title: L("Thought leadership može da dosegne hidden buyers", "Thought leadership can reach hidden buyers"),
              body: L(
                "LinkedIn objašnjava da hidden buyers mogu imati značajan uticaj u B2B buying grupama i da thought leadership pomaže da se ti stakeholder-i dosegnu i usklade.",
                "LinkedIn explains that hidden buyers can hold significant influence inside B2B buying groups and that thought leadership can help reach and align those stakeholders.",
              ),
              sourceLabel: L("LinkedIn Marketing Blog", "LinkedIn Marketing Blog"),
              sourceUrl: "https://www.linkedin.com/business/marketing/blog/research-and-insights/b2b-thought-leadership-influence-hidden-buyers",
            },
            {
              title: L("Kupci trebaju jasnoću pre sales angažmana", "Buyers need clarity before sales engagement"),
              body: L(
                "LinkedIn thought leadership resursi naglašavaju da mnogi B2B kupci definišu potrebe pre nego što kontaktiraju sales, zato je edukativni content važan pre direktne prodajne aktivnosti.",
                "LinkedIn thought leadership resources highlight that many B2B buyers define their needs before engaging sales, which makes educational content important before direct sales activity.",
              ),
              sourceLabel: L("LinkedIn - Thought Leadership 101", "LinkedIn - Thought Leadership 101"),
              sourceUrl: "https://business.linkedin.com/advertise/resources/marketing-terms/thought-leadership",
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
            ["1. Izgradi post iz jednog buyer bola"],
            ["1. Build a post from one buyer pain"],
          ),
        },
        {
          type: "table",
          caption: L("Elementi posta iz bola", "Post elements from pain"),
          headers: H(["Element", "Primer"], ["Element", "Example"]),
          rows: [
            { cells: [L("ICP", "ICP"), L("B2B service founder-i", "B2B service founders")] },
            { cells: [L("Bol", "Pain"), L("LinkedIn content dobija engagement ali ne pipeline", "LinkedIn content gets engagement but no pipeline")] },
            { cells: [L("Staro verovanje", "Old belief"), L("Treba postovati češće", "Need to post more often")] },
            { cells: [L("Dublji problem", "Deeper problem"), L("Content nije povezan sa ICP bolom ili sales sistemom", "Content is not connected to ICP pain or sales system")] },
            { cells: [L("Bolji način", "Better way"), L("Gradi content iz ICP bola, founder POV i CTA logike", "Build content from ICP pain, founder POV, and CTA logic")] },
            { cells: [L("Primer", "Example"), L("Rewrite generičnog posta u problem-led post", "Rewrite generic post into problem-led post")] },
            { cells: [L("CTA", "CTA"), L("DM „CONTENT“ za post framework", "DM \"CONTENT\" for the post framework")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["2. Koristi 7-delnu strukturu posta"],
            ["2. Use the 7-part post structure"],
          ),
        },
        {
          type: "table",
          caption: L("Primer 7-delne strukture", "7-part structure example"),
          headers: H(["Deo", "Primer"], ["Part", "Example"]),
          rows: [
            { cells: [L("Hook", "Hook"), L("„Tvoji LinkedIn postovi dobijaju lajkove. Ali pipeline je i dalje prazan.“", "\"Your LinkedIn posts are getting likes. But your pipeline is still empty.\"")] },
            { cells: [L("Problem", "Problem"), L("Većina founder-a meša engagement sa demand-om.", "Most founders confuse engagement with demand.")] },
            { cells: [L("Reframe", "Reframe"), L("Problem nije volumen content-a. Problem je relevantnost.", "The issue is not content volume. It is content relevance.")] },
            { cells: [L("Framework", "Framework"), L("ICP Pain → Founder POV → Post → Signal → Follow-up", "ICP Pain → Founder POV → Post → Signal → Follow-up")] },
            { cells: [L("Example", "Example"), L("Post o „sales tips“ privlači peer-ove. Post o usporavanju referenci privlači kupce.", "A post about \"sales tips\" attracts peers. A post about slowing referrals attracts buyers.")] },
            { cells: [L("Action", "Action"), L("Napiši sledeći post iz jednog buyer bola.", "Write your next post from one buyer pain.")] },
            { cells: [L("CTA", "CTA"), L("DM mi „POST“ i pošaljem framework.", "DM me \"POST\" and I'll send the framework.")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["3. Izgradi hook bank"],
            ["3. Build a hook bank"],
          ),
        },
        {
          type: "table",
          caption: L("Hook formule", "Hook formulas"),
          headers: H(["Formula", "Primer"], ["Formula", "Example"]),
          rows: [
            { cells: [L("Problem: „Tvoj [kanal] ne pada zbog [površinski].“", "Problem: \"Your [channel] is not failing because of [surface].\""), L("„Tvoj outbound ne pada zbog copy-ja.“", "\"Your outbound is not failing because of copy.\"")] },
            { cells: [L("Reframe: „Većina [ICP] misli [uobičajeno]. Pravi problem je [dublje].“", "Reframe: \"Most [ICP] think [common]. The real issue is [deeper].\""), L("„Većina founder-a misli da treba više leadova. Pravi problem je trust.“", "\"Most founders think they need more leads. The real issue is trust.\"")] },
            { cells: [L("Mistake: „Tretiraš [X] kao [pogrešno]. Kupac kao [stvarno].“", "Mistake: \"You treat [X] like [wrong]. Buyer like [real].\""), L("„Tretiraš LinkedIn kao content. Kupac kao research.“", "\"You treat LinkedIn like content. Buyer like research.\"")] },
            { cells: [L("Contrarian: „[Popular savet] nije strategija.“", "Contrarian: \"[Popular advice] is not the strategy.\""), L("„Postovanje svaki dan nije strategija.“", "\"Posting every day is not the strategy.\"")] },
            { cells: [L("Story: „[Uloga] mi je rekao [verovanje]. Onda [dokaz].“", "Story: \"A [role] told me [belief]. Then [evidence].\""), L("„Founder mi je rekao da LinkedIn ne radi. Otvorili smo profil.“", "\"A founder told me LinkedIn did not work. We opened his profile.\"")] },
            { cells: [L("Before/after: „Pre: [staro]. Posle: [novo].“", "Before/after: \"Before: [old]. After: [new].\""), L("„Pre: generičan outreach. Posle: context-led outreach.“", "\"Before: generic outreach. After: context-led outreach.\"")] },
            { cells: [L("Checklist: „Pre [akcija], proveri [broj] stvari.“", "Checklist: \"Before [action], check [number] things.\""), L("„Pre outreach-a, proveri ovih 7 stvari.“", "\"Before outreach, check these 7 things.\"")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["4. Piši telo sa jednom idejom po sekciji"],
            ["4. Write the body with one idea per section"],
          ),
        },
        {
          type: "table",
          caption: L("Formatiranje: pre i posle", "Formatting: before and after"),
          headers: H(["Pre", "Posle"], ["Before", "After"]),
          rows: [
            {
              cells: [
                L(
                  "„Mnogi founder-i imaju problem sa content-om jer nisu sigurni šta da kažu, što može da se desi zbog nedostatka jasnoće oko ICP-a, ponude i sales procesa.“",
                  "\"Many founders struggle with content because they are not sure what to say, which can happen because they lack clarity around ICP, offer, and sales process.\"",
                ),
                L(
                  "„Većina founder-a nema content problem.\n\nIma clarity problem.\n\nNe znaju:\n- kome je post;\n- koji bol treba da imenuje;\n- koje verovanje treba da izazove;\n- koju akciju čitalac treba da uradi.“",
                  "\"Most founders do not have a content problem.\n\nThey have a clarity problem.\n\nThey do not know:\n- who the post is for;\n- what pain it should name;\n- what belief it should challenge;\n- what action the reader should take.\"",
                ),
              ],
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["5. Dodaj autoritet bez arogancije"],
            ["5. Add authority without sounding arrogant"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "„Ovo najčešće vidimo u B2B service firmama od 10-50 ljudi.“",
              "„Ovo obično puca kad founder zapošljava SDR-ove pre nego što je poruka jasna.“",
              "„Problem retko je CTA. Obično je nedostatak konteksta pre CTA-a.“",
            ],
            [
              "\"We see this most often in 10-50 person B2B service firms.\"",
              "\"This usually breaks when the founder starts hiring SDRs before the message is clear.\"",
              "\"The issue is rarely the CTA. It is usually the lack of context before the CTA.\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["6. Dodaj dokaz prirodno"],
            ["6. Add proof naturally"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Pattern: „Ovaj obrazac stalno vidimo…“",
              "Primer: „U jednom founder-led sistemu, najbolji post po pipeline-u nije bio najviše impresija.“",
              "Lekcija: „Najspecifičniji post često privlači najrelevantnijeg kupca.“",
            ],
            [
              "Pattern: \"We keep seeing this pattern…\"",
              "Example: \"In one founder-led system, the best post by pipeline was not the highest-impression post.\"",
              "Lesson: \"The most specific post often attracts the most relevant buyer.\"",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["7. Izaberi pravi CTA"],
            ["7. Choose the right CTA"],
          ),
        },
        {
          type: "table",
          caption: L("CTA matrica po tipu posta", "CTA matrix by post type"),
          headers: H(["Tip posta", "CTA"], ["Post type", "CTA"]),
          rows: [
            { cells: [L("Problem education", "Problem education"), L("„Sačuvaj pre planiranja sledeće kampanje.“", "\"Save this before planning your next campaign.\"")] },
            { cells: [L("Framework post", "Framework post"), L("„Komentariši ‚FRAMEWORK‘ i pošaljem šablon.“", "\"Comment 'FRAMEWORK' and I'll send the template.\"")] },
            { cells: [L("Checklist post", "Checklist post"), L("„DM mi ‚CHECKLIST‘ i pošaljem.“", "\"DM me 'CHECKLIST' and I'll send it over.\"")] },
            { cells: [L("Story post", "Story post"), L("„Ako ti je ovo poznato, mapiraj gde sistem puca.“", "\"If this sounds familiar, map where the system breaks.\"")] },
            { cells: [L("Proof post", "Proof post"), L("„Zakaži konsultaciju ako želiš da izgradiš ovo za firmu.“", "\"Book a consultation if you want to build this for your company.\"")] },
            { cells: [L("Webinar post", "Webinar post"), L("„Pridruži se sledećem Founder-Led Growth webinaru.“", "\"Join the next Founder-Led Growth webinar.\"")] },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["8. Pretvori jedan post u sales asset-e"],
            ["8. Turn one post into sales assets"],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "outreach opener;",
              "webinar sekcija;",
              "newsletter sekcija;",
              "sales call talking point;",
              "CRM content topic tag;",
              "ugao za komentarisanje;",
              "carousel;",
              "kratak video script;",
              "lead magnet sekcija.",
            ],
            [
              "outreach opener;",
              "webinar section;",
              "newsletter section;",
              "sales call talking point;",
              "CRM content topic tag;",
              "comment angle;",
              "carousel;",
              "short video script;",
              "lead magnet section.",
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
                "Planiranje postova, šabloni, swipe fajlovi, hook bank, CTA bank i founder intervjui",
                "Post planning, templates, swipe files, hook banks, CTA banks, and founder interviews",
              ),
              whyItFits: L(
                "Jednostavan workspace za pretvaranje ideja u ponovljive postove.",
                "A simple workspace for turning ideas into repeatable posts.",
              ),
              alternative: L("Google Docs, Airtable", "Google Docs, Airtable"),
            },
            {
              name: "Google Docs",
              logo: "/images/sales-tools/google-docs.png",
              usedFor: L(
                "Draft i review postova",
                "Drafting and reviewing posts",
              ),
              whyItFits: L(
                "Lak za saradnju founder-a i tima.",
                "Easy for founder/team collaboration.",
              ),
              alternative: L("Notion, AuthoredUp", "Notion, AuthoredUp"),
            },
            {
              name: "AuthoredUp",
              usedFor: L(
                "Pisanje, formatiranje, preview i poboljšanje LinkedIn postova",
                "Writing, formatting, previewing, and improving LinkedIn posts",
              ),
              whyItFits: L(
                "Korisno za čitljivost, hook-ove, CTA-ove i preview pre objave.",
                "Helpful for readability, hooks, CTAs, formatting, and previewing before publishing.",
              ),
              alternative: L("Taplio, native LinkedIn editor", "Taplio, native LinkedIn editor"),
            },
            {
              name: "Taplio",
              slug: "taplio",
              usedFor: L(
                "Content ideation, zakazivanje, inspiracija i analitika",
                "Content ideation, scheduling, inspiration, and analytics",
              ),
              whyItFits: L(
                "Korisno za founder-e koji žele all-in-one LinkedIn content workflow.",
                "Useful for founders who want an all-in-one LinkedIn content workflow.",
              ),
              alternative: L("AuthoredUp, LinkedIn native analytics", "AuthoredUp, LinkedIn native analytics"),
            },
            {
              name: "Canva",
              logo: "/images/sales-tools/canva.png",
              usedFor: L(
                "Carousel postovi, checklist vizuali i framework grafike",
                "Carousel posts, checklist visuals, and framework graphics",
              ),
              whyItFits: L(
                "Korisno kad edukativne postove pretvaraš u vizuelne asset-e.",
                "Useful when turning educational posts into visual assets.",
              ),
              alternative: L("Figma, Adobe Express", "Figma, Adobe Express"),
            },
            {
              name: "HubSpot",
              slug: "hubspot",
              usedFor: L(
                "Praćenje razgovora, content-influenced leadova i pipeline-a",
                "Track conversations, content-influenced leads, and pipeline",
              ),
              whyItFits: L(
                "Edukativni content treba da se poveže sa CRM signalima, ne samo lajkovima.",
                "Educational content should connect to CRM signals, not just likes.",
              ),
              alternative: L("Pipedrive, Attio, Folk, Salesforce", "Pipedrive, Attio, Folk, Salesforce"),
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
              value: L("10", "10"),
              label: L("Hook varijanti", "Hook variants"),
              description: L(
                "Napiši 10, izaberi onaj koji zaustavlja ICP, ne svakoga.",
                "Write 10, pick the one that stops your ICP, not everyone.",
              ),
            },
            {
              value: L("1", "1"),
              label: L("Primer", "Example"),
              description: L(
                "Before/after, mini case ili rewrite, obavezno u svakom jakom postu.",
                "Before/after, mini case, or rewrite, required in every strong post.",
              ),
            },
            {
              value: L("1", "1"),
              label: L("CTA", "CTA"),
              description: L(
                "Soft ili medium intent, usklađen sa buyer stage-om.",
                "Soft or medium intent, matched to buyer stage.",
              ),
            },
          ],
        },
        {
          type: "workflow",
          title: L("Od buyer bola do edukativnog LinkedIn posta", "From buyer pain to educational LinkedIn post"),
          steps: P(
            [
              "Izaberi jedan ICP bol iz content strategije.",
              "Napiši staro verovanje koje kupci obično imaju.",
              "Napiši founder-ov oštriji reframe.",
              "Izaberi format: greška, framework, priča, checklist, before/after.",
              "Napiši 10 hook-ova.",
              "Izaberi hook koji najbolje kvalifikuje ICP.",
              "Draft-uj post: Hook → Problem → Reframe → Framework → Example → Action → CTA.",
              "Dodaj jedan konkretan primer.",
              "Dodaj soft ili medium-intent CTA.",
              "Objavi post.",
              "Prati ICP komentare, profile view-ove, DM-ove i save-ove.",
              "Repurpose-uj post u outreach, webinar ili CRM signal workflow.",
            ],
            [
              "Choose one ICP pain from your content strategy.",
              "Write the old belief buyers usually have.",
              "Write the founder's sharper reframe.",
              "Pick one post format: mistake, framework, story, checklist, before/after.",
              "Write 10 hooks.",
              "Choose the hook that best qualifies the ICP.",
              "Draft the post: Hook → Problem → Reframe → Framework → Example → Action → CTA.",
              "Add one concrete example.",
              "Add one soft or medium-intent CTA.",
              "Publish the post.",
              "Track ICP comments, profile views, DMs, and saves.",
              "Repurpose the post into outreach, webinar, or CRM signal workflow.",
            ],
          ),
          highlight: L(
            "Ovako pisanje postaje deo sales sistema, ne samo content produkcija.",
            "This is how writing becomes part of the sales system. Not just content production.",
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
              title: L("Educational Post Anatomy", "Educational Post Anatomy"),
              placement: L("Vrh lekcije", "Top of lesson"),
              description: L(
                "Vizuelna anatomija posta: hook, problem, reframe, framework, example, action, CTA.",
                "A visual breakdown of a LinkedIn post: hook, problem, reframe, framework, example, action, CTA.",
              ),
            },
            {
              title: L(
                "Hook → Problem → Reframe → Framework → Example → Action → CTA",
                "Hook → Problem → Reframe → Framework → Example → Action → CTA",
              ),
              placement: L("Framework sekcija", "Framework section"),
              description: L(
                "Core struktura pisanja posta.",
                "The core post writing structure.",
              ),
            },
            {
              title: L("Generički post vs Authority post", "Generic Post vs Authority Post"),
              placement: L("Core / vs-generic sekcija", "Core idea section"),
              description: L(
                "Poređenje vague postovanja i edukativnog authority content-a.",
                "Comparison between vague posting and educational authority content.",
              ),
            },
            {
              title: L("Hook Bank Cards", "Hook Bank Cards"),
              placement: L("Implement sekcija", "How to implement section"),
              description: L(
                "Set hook formula sa primerima.",
                "A set of hook formulas with examples.",
              ),
            },
            {
              title: L("CTA Ladder", "CTA Ladder"),
              placement: L("CTA sekcija", "CTA section"),
              description: L(
                "Tipovi CTA mapirani na nivo buyer intent-a.",
                "CTA types mapped to buyer intent level.",
              ),
            },
            {
              title: L("Post-to-Pipeline Workflow", "Post-to-Pipeline Workflow"),
              placement: L("Workflow sekcija", "Workflow example section"),
              description: L(
                "Jedan post postaje engagement, profile view-ovi, DM-ovi, webinar interes, CRM signali i sales razgovori.",
                "One post becomes engagement, profile views, DMs, webinar interest, CRM signals, and sales conversations.",
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
          title: L("Čeklista Lekcije 5", "Lesson 5 checklist"),
          items: P(
            [
              "Izaberi jedan ICP bol za sledeći post.",
              "Napiši staro verovanje i dublji problem.",
              "Kreiraj jedan founder reframe.",
              "Napiši 10 hook-ova za istu ideju.",
              "Izaberi hook koji najbolje kvalifikuje ICP.",
              "Koristi strukturu Hook → Problem → Reframe → Framework → Example → Action → CTA.",
              "Dodaj jedan konkretan primer.",
              "Dodaj jednu praktičnu akciju.",
              "Izaberi CTA usklađen sa namerom posta.",
              "Objavi post.",
              "Prati ICP engagement, ne samo lajkove.",
              "Repurpose-uj post u jedan outreach opener ili webinar sekciju.",
            ],
            [
              "Choose one ICP pain for your next post.",
              "Write the old belief and the deeper problem.",
              "Create one founder reframe.",
              "Write 10 hooks for the same idea.",
              "Choose the hook that best qualifies the ICP.",
              "Use the Hook → Problem → Reframe → Framework → Example → Action → CTA structure.",
              "Add one concrete example.",
              "Add one practical action.",
              "Choose a CTA that matches the post intent.",
              "Publish the post.",
              "Track ICP engagement, not only likes.",
              "Repurpose the post into one outreach opener or webinar section.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "template",
      title: L("Šablon edukativnog posta", "Template / swipe file"),
      blocks: [
        {
          type: "template",
          title: L("Educational LinkedIn Post Template", "Educational LinkedIn Post Template"),
          content: L(
            `1. Cilj posta

Ovaj post je za:
[ICP]

Bore se sa:
[specifičan problem]

Post treba da im pomogne da razumeju:
[lekcija / reframe]

2. Hook opcije

Problem hook:
Tvoj [stvar] ne pada zbog [površinski problem].

Reframe hook:
Većina [ICP] misli [uobičajeno verovanje]. Pravi problem je [dublji problem].

Mistake hook:
Tretiraš [stvar] kao [pogrešna kategorija]. Kupac je tretira kao [prava kategorija].

Story hook:
[Uloga] mi je rekao [verovanje]. Onda smo pogledali [dokaz].

Checklist hook:
Pre nego što [akcija], proveri ovih [broj] stvari.

3. Struktura posta

Hook:
[prve 1-3 linije]

Problem:
[šta kupac doživljava]

Staro verovanje:
[šta misle da je uzrok]

Reframe:
[šta je stvarni uzrok]

Framework:
[3-5 koraka ili delova]

Primer:
[before/after, priča, checklist, rewrite poruke ili mini case]

Akcija:
[šta čitalac treba da uradi]

CTA:
[save / comment / DM / webinar / konsultacija]

4. CTA opcije

Niska namera:
Sačuvaj pre sledećeg [aktivnost].

Comment CTA:
Komentariši "[keyword]" i pošaljem šablon.

DM CTA:
DM mi "[keyword]" i pošaljem checklist.

Webinar CTA:
Pridruži se sledećem Founder-Led Growth webinaru.

Konsultacija CTA:
Zakaži konsultaciju ako želiš pomoć da izgradiš ovaj sistem.

5. Provera kvaliteta

Pre objave pitaj:
- Da li je post o jednoj jasnoj ideji?
- Da li je ICP očigledan?
- Da li hook imenuje stvarni buyer problem?
- Da li post ima reframe?
- Da li postoji jedan praktičan takeaway?
- Da li postoji konkretan primer?
- Da li je CTA usklađen sa namerom?
- Da li bi ovaj post stvorio koristan sales razgovor?`,
            `1. Post goal

This post is for:
[ICP]

They struggle with:
[specific problem]

The post should help them understand:
[lesson / reframe]

2. Hook options

Problem hook:
Your [thing] is not failing because of [surface issue].

Reframe hook:
Most [ICP] think [common belief]. The real problem is [deeper issue].

Mistake hook:
You are treating [thing] like [wrong category]. Your buyer treats it like [real category].

Story hook:
A [role] told me [belief]. Then we looked at [evidence].

Checklist hook:
Before you [action], check these [number] things.

3. Post structure

Hook:
[write the first 1-3 lines]

Problem:
[what the buyer is experiencing]

Old belief:
[what they think is causing it]

Reframe:
[what is actually causing it]

Framework:
[3-5 steps or parts]

Example:
[before/after, story, checklist, message rewrite, or mini case]

Action:
[what the reader should do next]

CTA:
[save / comment / DM / webinar / consultation]

4. CTA options

Low intent:
Save this before your next [activity].

Comment CTA:
Comment "[keyword]" and I'll send the template.

DM CTA:
DM me "[keyword]" and I'll send the checklist.

Webinar CTA:
Join the next Founder-Led Growth webinar.

Consultation CTA:
Book a consultation if you want help building this system.

5. Post quality check

Before publishing, ask:
- Is this post about one clear idea?
- Is the ICP obvious?
- Does the hook name a real buyer problem?
- Does the post include a reframe?
- Is there one practical takeaway?
- Is there a concrete example?
- Is the CTA aligned with intent?
- Would this create a useful sales conversation?`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Šta je edukativni LinkedIn post?", "What is an educational LinkedIn post?"),
      answer: L(
        "Edukativni LinkedIn post uči ICP nešto korisno o problemu koji već zanima. Obično imenuje bol, refreimuje problem, objašnjava bolji način, daje primer i završava praktičnim sledećim korakom.",
        "An educational LinkedIn post teaches your ICP something useful about a problem they already care about. It usually names a pain, reframes the issue, explains a better way, gives an example, and ends with a practical next step.",
      ),
    },
    {
      question: L("Šta čini dobar LinkedIn hook?", "What makes a good LinkedIn hook?"),
      answer: L(
        "Dobar hook zaustavlja pravog kupca imenovanjem specifičnog problema, greške, verovanja ili tenzije. Najbolji hook nije uvek onaj sa najviše pažnje, već onaj koji privlači pravu publiku.",
        "A good hook stops the right buyer by naming a specific problem, mistake, belief, or tension. The best hook is not always the one that gets the most attention, it is the one that attracts the right audience.",
      ),
    },
    {
      question: L("Koliko dug treba da bude LinkedIn post?", "How long should a LinkedIn post be?"),
      answer: L(
        "Post treba da bude onoliko dug koliko treba da prenese jednu jasnu poentu. Za Founder-Led Growth, većina jakih edukativnih postova su dovoljno dugi da objasne problem, reframe, primer i CTA, ne duži samo da izgledaju vredno.",
        "A post should be as long as needed to make one clear point. For Founder-Led Growth, most strong educational posts are long enough to explain the problem, reframe it, give an example, and include a CTA, not longer just to look valuable.",
      ),
    },
    {
      question: L("Da li svaki post treba da ima CTA?", "Should every post have a CTA?"),
      answer: L(
        "Svaki post treba sledeći korak, ali ne mora biti sales call. Koristi soft CTA često: save, comment za šablon, DM za checklist, webinar, konsultacija, uskladi sa namerom kupca.",
        "Every post should have a next step, but not every next step has to be a sales call. Use soft CTAs often: save, comment for template, DM for checklist, webinar, consultation, match buyer intent.",
      ),
    },
    {
      question: L("Koja je najveća greška founder-a pri pisanju postova?", "What is the biggest mistake founders make when writing LinkedIn posts?"),
      answer: L(
        "Pišu generičan savet umesto specifične buyer edukacije. Generičan savet se ignoriše jer zvuči kao svi ostali. Autoritet dolazi iz specifičnosti, primera i jasnog POV-a.",
        "They write generic advice instead of specific buyer education. Generic advice gets ignored because it sounds like everyone else. Authority comes from specificity, examples, and a clear point of view.",
      ),
    },
    {
      question: L("Kako edukativni postovi podržavaju prodaju?", "How do educational posts support sales?"),
      answer: L(
        "Stvaraju kontekst pre outreach-a; daju kupcima jezik za problem; čine founder-a kredibilnijim; stvaraju engagement signale; mogu biti outreach opener, webinar tema i referenca na sales call-u.",
        "They create context before outreach; give buyers language for the problem; make the founder more credible; create engagement signals; can be outreach openers, webinar topics, and sales call references.",
      ),
    },
    {
      question: L("Kako znam da post radi?", "How do I know if a post is working?"),
      answer: L(
        "Ne gledaj samo lajkove. Prati: ICP komentare, profile view-ove, DM-ove, save-ove, share-ove od relevantnih kupaca, webinar registracije, CRM kontakte i sales call-ove koje je post uticao.",
        "Do not only look at likes. Track: ICP comments, profile views, DMs, saves, shares from relevant buyers, webinar registrations, CRM contacts created, and sales calls influenced.",
      ),
    },
  ],
  sources: [
    { title: L("LinkedIn Marketing Solutions - Ultimate Guide to Improve Your B2B Content Marketing Strategy", "LinkedIn Marketing Solutions - Ultimate Guide to Improve Your B2B Content Marketing Strategy"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/the-ultimate-guide-to-improve-your-b2b-content-marketing-strategy" },
    { title: L("LinkedIn Marketing Solutions - Thought Leadership 101", "LinkedIn Marketing Solutions - Thought Leadership 101"), url: "https://business.linkedin.com/advertise/resources/marketing-terms/thought-leadership" },
    { title: L("LinkedIn Marketing Blog - How to Create Impactful Thought Leadership Content", "LinkedIn Marketing Blog - How to Create Impactful Thought Leadership Content"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/creating-a-thought-leadership-marketing-plan" },
    { title: L("Edelman / LinkedIn - 2025 B2B Thought Leadership Impact Report", "Edelman / LinkedIn - 2025 B2B Thought Leadership Impact Report"), url: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report" },
    { title: L("LinkedIn Marketing Blog - Thought Leadership and Hidden Buyers", "LinkedIn Marketing Blog - Thought Leadership and Hidden Buyers"), url: "https://www.linkedin.com/business/marketing/blog/research-and-insights/b2b-thought-leadership-influence-hidden-buyers" },
    { title: L("LinkedIn Marketing Blog - B2B Content Marketing Types", "LinkedIn Marketing Blog - B2B Content Marketing Types"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/b2b-content-marketing-types" },
    { title: L("LinkedIn Marketing Blog - Real Examples That Showcase B2B Thought Leadership Success", "LinkedIn Marketing Blog - Real Examples That Showcase B2B Thought Leadership Success"), url: "https://www.linkedin.com/business/marketing/blog/content-marketing/examples-of-thought-leadership-content-b2b" },
    { title: L("AuthoredUp - LinkedIn Content Strategy", "AuthoredUp - LinkedIn Content Strategy"), url: "https://authoredup.com/blog/linkedin-content-strategy" },
    { title: L("Taplio vs AuthoredUp - LinkedIn Tool Comparison", "Taplio vs AuthoredUp - LinkedIn Tool Comparison"), url: "https://taplio.com/blog/taplio-vs-authoredup" },
    { title: L("PostBeam - AuthoredUp vs Taplio Comparison", "PostBeam - AuthoredUp vs Taplio Comparison"), url: "https://www.postbeam.ai/blog/authoredup-vs-taplio" },
    { title: L("HubSpot - How to Use LinkedIn for Business Marketing", "HubSpot - How to Use LinkedIn for Business Marketing"), url: "https://offers.hubspot.com/how-to-use-linkedin-business-marketing" },
    { title: L("Content Marketing Institute - B2B Content Marketing Trends", "Content Marketing Institute - B2B Content Marketing Trends"), url: "https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" },
  ],
  relatedLessons: {
    previous: {
      slug: "linkedin-content-strategy-founder",
      title: L(
        "Lekcija 4 - Kako napraviti LinkedIn content strategiju za founder-a",
        "Lesson 4 - How to Build a LinkedIn Content Strategy for a Founder",
      ),
    },
    next: {
      slug: "linkedin-commenting-strategy",
      title: L(
        "Lekcija 6 - Kako koristiti komentarisanje na LinkedInu za vidljivost kod ICP-a",
        "Lesson 6 - How to Use LinkedIn Commenting to Get Visibility With Your ICP",
      ),
      note: L(
        "Sledeća lekcija pokazuje kako koristiti komentarisanje za vidljivost pre slanja poruke.",
        "The next lesson shows how to use commenting for visibility before sending a message.",
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
      "Autoritet se ne gradi više postovanjem",
      "Authority is not built by posting more",
    ),
    body: L(
      "Gradi se time što učiš pravog kupca kako da misli. Kad su postovi edukativni, specifični i povezani sa sales sistemom, oni stvaraju kontekst, grade poverenje, validiraju bol, zagrevaju outreach, daju bolje webinar teme, kreiraju CRM signale i pomeraju kupce ka akciji. Sledeća lekcija pokazuje kako koristiti LinkedIn komentarisanje za vidljivost kod ICP-a pre slanja poruke.",
      "It is built by teaching the right buyer how to think. When your posts are educational, specific, and connected to your sales system, they create context, build trust, validate buyer pain, make outreach warmer, give webinars better topics, create CRM signals, and move buyers one step closer to action. The next lesson shows how to use LinkedIn commenting to get visibility with your ICP before sending a message.",
    ),
    primaryLabel: L("Nastavi na Lekciju 6", "Continue to Lesson 6"),
    secondaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
  },
  seoKeywords: P(
    [
      "edukativni LinkedIn postovi",
      "LinkedIn struktura posta",
      "LinkedIn hook-ovi",
      "B2B LinkedIn postovi",
      "founder LinkedIn postovi",
      "LinkedIn thought leadership postovi",
      "LinkedIn CTA primeri",
      "LinkedIn šabloni postova",
      "B2B thought leadership content",
      "LinkedIn gradnja autoriteta",
      "founder-led content",
      "educational LinkedIn posts",
      "LinkedIn post structure",
      "LinkedIn hooks",
      "B2B LinkedIn posts",
      "founder LinkedIn posts",
      "LinkedIn thought leadership posts",
      "LinkedIn CTA examples",
      "LinkedIn post templates",
      "B2B thought leadership content",
      "LinkedIn authority building",
    ],
    [
      "educational LinkedIn posts",
      "LinkedIn post structure",
      "LinkedIn hooks",
      "B2B LinkedIn posts",
      "founder LinkedIn posts",
      "LinkedIn thought leadership posts",
      "LinkedIn CTA examples",
      "LinkedIn post templates",
      "B2B thought leadership content",
      "LinkedIn authority building",
      "founder-led content",
    ],
  ),
};

