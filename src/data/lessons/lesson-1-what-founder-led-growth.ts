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
    readingTime: L("18-22 min", "18-22 min"),
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
        "Većina founder-a misli da im treba više leadova. Zato kupe listu. Zaposle SDR-a. Šalju cold email. Automatizuju LinkedIn poruke. Pa se pitaju zašto outreach ne donosi rezultate.",
        "Problem nije uvek volumen. Kupac često ne zna ko si, šta misliš i zašto bi ga tvoja ponuda zanimala. Još nema dovoljno poverenja da odgovori na poruku.",
        "Founder-Led Growth to rešava kao jedan operativni sistem: ICP, profil, outreach, content, engagement, CRM i signali. Outreach i content rade istovremeno, outreach širi mrežu i otvara razgovore, a content gradi poverenje. Founder je kanal prodaje, a ne influencer.",
      ],
      [
        "Most founders think they need more leads. So they buy a list. They hire an SDR. They send cold emails. They automate LinkedIn messages. Then they wonder why outreach does not deliver results.",
        "The problem is not always volume. The buyer often does not know who you are, what you believe, or why your offer should matter to them. They do not yet trust your message enough to reply.",
        "Founder-Led Growth fixes that as one operating system: ICP, profile, outreach, content, engagement, CRM, and signals. Outreach and content run at the same time — outreach expands the network and opens conversations, content builds trust. The founder is a sales channel, not an influencer.",
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
    { id: "b2b-changed", title: L("Šta se promenilo u B2B prodaji", "What changed in B2B sales") },
    { id: "buyer-journey", title: L("Moderan B2B buyer journey", "Modern B2B buyer journey") },
    { id: "scaling-framework", title: L("Kako se skalira FLG sistem", "How the FLG system scales") },
    { id: "three-systems", title: L("Tri povezana sistema", "Three connected systems") },
    { id: "outreach-compare", title: L("Manualni vs sistemski outreach", "Manual vs systematic outreach") },
    { id: "core", title: L("Osnovna ideja", "Core idea") },
    { id: "vs-branding", title: L("FLG vs lični brend", "Founder-Led Growth vs Personal Branding") },
    { id: "trust-shortcut", title: L("Founder kao prečica poverenja", "The founder is the trust shortcut") },
    { id: "confidence", title: L("Poverenje pre demo-a", "Buyers need confidence before demo") },
    { id: "demand", title: L("Kreiranje vs hvatanje potražnje", "Demand creation vs capture") },
    { id: "crm", title: L("CRM kao sistemski sloj", "CRM as the system layer") },
    { id: "framework", title: L("Okvir: ICP → Pipeline", "Framework: ICP → Pipeline") },
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
              "zašto vidljivost koju pravi founder gradi poverenje brže od brenda;",
              "kako se ICP, profil, outreach, content, engagement, CRM i signali povezuju;",
              "zašto nasumično postovanje ne donosi rezultate i ne gradi pipeline;",
              "kako da razmišljaš o Founder-Led Growth kao revenue sistemu, ne marketing aktivnosti.",
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
            "Founder na sastanku sa B2B kupcem",
            "Founder in a B2B meeting, context before the sales pitch",
          ),
          caption: L(
            "Founder-Led Growth počinje izgradnjom poverenja, a ne cold pitch-om.",
            "Founder-Led Growth starts with problem context and trust, not a cold pitch.",
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
            L("Content", "Content"),
            L("Engagement", "Engagement"),
            L("CRM", "CRM"),
            L("Signali", "Signals"),
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
              "B2B prodaja retko ide pravolinijski od poruke do sastanka. Kupci istražuju, upoređuju i grade interni dogovor. To ne znači da treba čekati da neko sam dođe, već da sistem mora da radi paralelno.",
              "Founder-Led Growth počinje od jasnog ICP-a i profila, zatim pokreće outreach i content u isto vreme. Outreach povećava broj kontakata i širi mrežu. Content gradi poverenje. Engagement (komentari kod drugih) dodaje vidljivost. Ads pojačavaju ono što već radi. CRM prati šta se dešava. Signali pokazuju ko je zainteresovan i kada treba dodatni outreach.",
              "Većina founder-a greši tako što LinkedIn, outreach, content i CRM tretira kao odvojene projekte. Nisu odvojeni. To je jedan sistem. Ako jedan deo ne radi, ceo pipeline pati.",
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
            "Dashboard i CRM izveštaji, merenje founder-led pipeline-a",
            "Dashboard and CRM reports, measuring founder-led pipeline",
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
      id: "b2b-changed",
      title: L("Šta se promenilo u B2B prodaji?", "What Changed in B2B Sales?"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Pre nekoliko godina često je bilo dovoljno poslati solidan cold email i dobiti odgovor. Danas gotovo svaka kompanija koristi slične alate, AI pomaže svima da brže naprave poruke, a inbox-i su puni. Zbog toga dobra outreach poruka više nije dovoljna sama po sebi.",
              "Kupac pre odgovora često proverava profil, čita nekoliko objava, vidi komentar, webinar ili oglas i tek onda odlučuje da li razgovor ima smisla. Zato moderan B2B growth sistem ne zavisi samo od jednog kanala. Outreach, content, engagement, ads i CRM moraju da rade zajedno.",
            ],
            [
              "A few years ago, a solid cold email was often enough to generate a reply. Today, almost every company uses similar tools, AI helps everyone create messages faster, and inboxes are crowded. As a result, a good outreach message is no longer enough on its own.",
              "Before replying, buyers often check a profile, read several posts, notice a comment, see a webinar, or encounter an ad. Only then do they decide whether a conversation is worth having. That is why a modern B2B growth system cannot depend on a single channel. Outreach, content, engagement, ads, and CRM need to work together.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "buyer-journey",
      title: L("Kako danas izgleda moderan B2B buyer journey", "What a Modern B2B Buyer Journey Looks Like"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "B2B kupac retko rezerviše sastanak samo zato što je dobio jednu dobru poruku. Kupovina često počinje mnogo pre prvog razgovora. Kupac više puta nailazi na kompaniju i njene ljude kroz različite kanale.",
            ],
            [
              "A B2B buyer rarely books a meeting because of a single outreach message. The buying process often starts much earlier. The buyer encounters the company and its people multiple times across different channels.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Tipičan put do sastanka", "A typical path to a meeting"),
          subtitle: L(
            "Svaki korak povećava kontekst i poverenje pre razgovora.",
            "Each step adds context and trust before the conversation.",
          ),
          stages: [
            L("Vidi LinkedIn post", "Sees your LinkedIn post"),
            L("Klikne na profil", "Visits your profile"),
            L("Vidi webinar", "Sees a webinar announcement or recording"),
            L("Više dodira sa founder-om", "Encounters the founder or expert again"),
            L("Primi outreach", "Receives an outreach message"),
            L("Vidi reklamu", "Sees a retargeting ad or Thought Leader Ad"),
            L("Poseti website", "Visits the website"),
            L("Rezerviše sastanak", "Books a meeting"),
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Poenta nije da svaki kupac mora da prođe kroz identičan redosled. Poenta je da content, outreach, ads i CRM nisu odvojene aktivnosti. Zajedno povećavaju broj kvalitetnih dodirnih tačaka pre sastanka.",
            "The point is not that every buyer follows the exact same sequence. The point is that content, outreach, ads, and CRM are not separate activities. Together, they create more relevant touchpoints before a meeting.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "scaling-framework",
      title: L("Kako se skalira Founder-Led Growth sistem", "How the Founder-Led Growth System Scales"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ovaj okvir ne zamenjuje sedam operativnih koraka ispod. Objasnjava kako se sistem razvija i skalira kroz vreme, kada već imaš ICP, profil i pokrenut outreach + content.",
            ],
            [
              "This framework does not replace the seven operational steps below. It explains how the system evolves and scales over time, once you already have ICP, profile, and outreach + content running in parallel.",
            ],
          ),
        },
        {
          type: "zone-cards",
          cards: [
            {
              zone: L("1. Cold outreach", "1. Cold outreach"),
              eyebrow: L("Validacija", "Validation"),
              job: L(
                "Direktno testiramo ICP, ponudu i poruke. Cilj je da otkrijemo ko ima relevantan problem sada i koja poruka otvara razgovor.",
                "We directly test the ICP, offer, and messaging. The goal is to identify who has a relevant problem now and which message starts conversations.",
              ),
              doThis: L(
                "Testiraj više poruka i ponuda uz CRM praćenje odgovora.",
                "Test multiple messages and offers with CRM tracking of replies.",
              ),
            },
            {
              zone: L("2. Content", "2. Content"),
              eyebrow: L("Poverenje", "Trust"),
              job: L(
                "Founder kroz edukativni content pokazuje ekspertizu, stavove, primere i način razmišljanja. Idealni kupac ga vidi više puta pre sastanka.",
                "Through educational founder content, buyers repeatedly see expertise, opinions, examples, and a way of thinking before a meeting.",
              ),
              doThis: L(
                "Pokreni content paralelno sa outreach-om, ne posle njega.",
                "Start content in parallel with outreach, not after it.",
              ),
            },
            {
              zone: L("3. Ads", "3. Ads"),
              eyebrow: L("Skaliranje", "Scaling"),
              job: L(
                "Kada znamo koji ICP, poruke i postovi privlače prave ljude, najbolji sadržaj pojačavamo kroz oglase, posebno Thought Leader Ads.",
                "Once we know which ICP segments, messages, and posts attract the right audience, we amplify the best content through ads, especially Thought Leader Ads.",
              ),
              doThis: L(
                "Skaliraj samo ono što organski već daje kvalitetan engagement od ICP-a.",
                "Scale only what already drives quality engagement from your ICP organically.",
              ),
            },
            {
              zone: L("4. CRM", "4. CRM"),
              eyebrow: L("Sistem", "System"),
              job: L(
                "Pratimo odakle je lead došao, koje aktivnosti je imao, koje signale je pokazao i koji sledeći korak ima smisla.",
                "We track where each lead came from, which activities they completed, which signals they showed, and what the next relevant step should be.",
              ),
              doThis: L(
                "CRM od starta, ne na kraju kampanje.",
                "CRM from the start, not at the end of the campaign.",
              ),
            },
            {
              zone: L("5. Pravovremeni outreach", "5. Timely outreach"),
              eyebrow: L("Sastanci", "Meetings"),
              job: L(
                "Na osnovu buying signala šaljemo relevantniju poruku u trenutku kada kupac već ima više konteksta i poverenja.",
                "Buying signals help us reach out at the right moment, when the buyer already has more context and trust.",
              ),
              doThis: L(
                "Signal određuje ton i hitnost, ne agresivnu automatsku prodaju.",
                "Signals determine tone and urgency, not aggressive automated selling.",
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "three-systems",
      title: L("Tri povezana sistema unutar Founder-Led Growth-a", "Three Connected Systems Within Founder-Led Growth"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Sistem za generisanje sastanaka", "Meeting generation system"),
              subtitle: L("Outreach", "Outreach"),
              variant: "accent",
              items: P(
                [
                  "Validira ICP, ponudu i messaging",
                  "Širi mrežu i otvara razgovore",
                  "Testira šta kupac stvarno odgovara",
                  "Radi paralelno sa content-om",
                ],
                [
                  "Validates ICP, offer, and messaging",
                  "Expands the network and opens conversations",
                  "Tests what buyers actually respond to",
                  "Runs in parallel with content",
                ],
              ),
            },
            {
              title: L("Sistem za izgradnju poverenja", "Trust-building system"),
              subtitle: L("LinkedIn autoritet i content", "LinkedIn authority and content"),
              variant: "muted",
              items: P(
                [
                  "Profil kao landing stranica",
                  "Edukativni postovi i klipovi",
                  "Engagement kod ICP-a",
                  "Webinari kao lead magnet",
                ],
                [
                  "Profile as a landing page",
                  "Educational posts and clips",
                  "Engagement with your ICP",
                  "Webinars as lead magnets",
                ],
              ),
            },
            {
              title: L("Sistem za skaliranje", "Scaling system"),
              subtitle: L("LinkedIn Ads i ABM", "LinkedIn Ads and ABM"),
              variant: "muted",
              items: P(
                [
                  "Thought Leader Ads na postovima koji već rade",
                  "Retargeting i lead magnet kampanje",
                  "Targetiranje po firmi, roli i industriji",
                  "Pojačava signal, ne zamenjuje organski rad",
                ],
                [
                  "Thought Leader Ads on posts that already work",
                  "Retargeting and lead magnet campaigns",
                  "Targeting by company, role, and industry",
                  "Amplifies signals, does not replace organic work",
                ],
              ),
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Outreach i content rade paralelno od starta. Outreach validira tržište i offer. Content gradi poverenje pre sastanka. CRM i signali pokazuju kada treba reagovati. Ads pojačavaju ono što već organski daje kvalitetan engagement.",
            "Outreach and content run in parallel from the start. Outreach validates the market and offer. Content builds trust before the meeting. CRM and signals show when to react. Ads amplify what already drives quality organic engagement.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "outreach-compare",
      title: L("Manualni outreach i sistemski outreach", "Manual outreach and systematic outreach"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Manualni outreach", "Manual outreach"),
              subtitle: L("Zavisi od discipline pojedinca", "Depends on individual discipline"),
              variant: "muted",
              items: P(
                [
                  "Šalje se premalo poruka",
                  "Follow-up se često zaboravi",
                  "Teško je testirati više poruka i ponuda",
                  "Nema jasne statistike",
                  "Founder ili sales tim troše vreme na administraciju",
                  "Rezultat previše zavisi od discipline pojedinca",
                ],
                [
                  "Too few messages get sent",
                  "Follow-up is often forgotten",
                  "Hard to test multiple messages and offers",
                  "No clear statistics",
                  "Founder or sales team spends time on admin",
                  "Results depend too much on individual discipline",
                ],
              ),
            },
            {
              title: L("Sistemski outreach", "Systematic outreach"),
              subtitle: L("Zavisi od procesa", "Depends on process"),
              variant: "accent",
              items: P(
                [
                  "Šalje se veći broj relevantnih poruka",
                  "Follow-up ide automatski i na vreme",
                  "Testiraju se različite ponude i poruke",
                  "LinkedIn i email mogu da rade zajedno",
                  "Odgovori i signali se beleže u CRM",
                  "Sales tim više vremena ulaže u razgovore",
                ],
                [
                  "A larger volume of relevant messages gets sent",
                  "Follow-up runs automatically and on time",
                  "Different offers and messages get tested",
                  "LinkedIn and email can work together",
                  "Replies and signals are logged in CRM",
                  "Sales team spends more time in conversations",
                ],
              ),
            },
          ],
        },
        {
          type: "callout",
          text: L(
            "Manualni outreach zavisi od discipline osobe. Sistemski outreach zavisi od dobro postavljenog procesa.",
            "Manual outreach depends on individual discipline. Systematic outreach depends on a well-designed process.",
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
              "Founder-Led Growth nije lični brending. Lični brend je deo sistema za izgradnju poverenja, ali nije ceo Founder-Led Growth sistem. Founder-Led Growth je operativni B2B revenue sistem u kom founder ili drugo relevantno lice kompanije postaje prepoznatljivo, gradi poverenje kod idealnih kupaca i povezuje content, outreach, engagement, webinare, oglase, CRM i buying signale kako bi kompanija generisala kvalifikovane sastanke.",
              "Founder može imati lajkove bez prihoda. Može čak postati viralan na mrežama, ali ipak privući pogrešnu publiku. Cilj nije viralnost. Cilj je pipeline.",
              "Founder-Led Growth radi samo kada se vidljivost veže za revenue. Svaka aktivnost ima određenu ulogu:",
            ],
            [
              "Founder-Led Growth is not personal branding. Personal brand is part of the trust-building system, but it is not the entire Founder-Led Growth system. Founder-Led Growth is an operational B2B revenue system where the founder or another relevant company expert becomes visible, builds trust with ideal buyers, and connects content, outreach, engagement, webinars, ads, CRM, and buying signals to generate qualified meetings.",
              "A founder can get likes and still generate no revenue. They can even go viral and attract the wrong audience. The goal is not virality. The goal is pipeline.",
              "Founder-Led Growth only works when visibility connects to revenue. Every activity has a job:",
            ],
          ),
        },
        {
          type: "table",
          caption: L("Uloga svake aktivnosti u sistemu", "Each activity's job in the system"),
          headers: H(["Aktivnost", "Posao"], ["Activity", "Job"]),
          rows: [
            { cells: [L("ICP", "ICP"), L("Definiše kome pomažeš i šta prodaješ", "Defines who you help and what you sell")] },
            { cells: [L("LinkedIn profil", "LinkedIn profile"), L("Landing stranica za ICP, ne samo profil", "Landing page for your ICP, not just a profile")] },
            { cells: [L("Outreach", "Outreach"), L("Pretvara konekcije u razgovore", "Turns connections into conversations")] },
            { cells: [L("Content", "Content"), L("Pretvara pažnju u veće poverenje pre demo-a", "Turns attention into stronger trust before the demo")] },
            { cells: [L("Engagement", "Engagement"), L("Dodaje vidljivost kod ICP-a pre poruke", "Adds visibility with your ICP before you message them")] },
            { cells: [L("Webinari", "Webinars"), L("Produbljuju interes i daju lead magnet", "Deepen interest and act as a lead magnet")] },
            { cells: [L("Ads", "Ads"), L("Pojačavaju vidljivost dokazanog founder content-a", "Amplify visibility of proven founder content")] },
            { cells: [L("CRM", "CRM"), L("Prati šta se dešava u pipeline-u", "Tracks what is happening in the pipeline")] },
            { cells: [L("Signali", "Signals"), L("Pokazuju ko je zainteresovan i kada treba outreach", "Show who is interested and when outreach is needed")] },
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
            { cells: [L("4-7", "4-7"), L("Outreach + content + engagement", "Outreach + content + engagement"), L("Paralelno: mreža, poverenje, vidljivost", "In parallel: network, trust, visibility")] },
            { cells: [L("8-9", "8-9"), L("Webinar + Ads", "Webinar + Ads"), L("Lead magneti i skaliranje onoga što radi", "Lead magnets and scaling what works")] },
            { cells: [L("10-12", "10-12"), L("CRM + signali", "CRM + signals"), L("Praćenje, intent, inbound-to-outbound", "Tracking, intent, inbound-to-outbound")] },
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
              "Možeš imati jak lični brend i prazan CRM. Možeš imati skroman reach i pun pipeline, ako je ICP tačan i sistem povezan.",
              "Razlika nije u tome da li founder postuje. Razlika je u tome da li svaki touchpoint vodi ka komercijalnom sledećem koraku.",
            ],
            [
              "Personal branding measures reach, followers, and engagement. Founder-Led Growth measures conversations, meetings, SQL, and revenue.",
              "You can have a strong personal brand and an empty CRM. You can have modest reach and a full pipeline, if the ICP is right and the system is connected.",
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
                  "CRM + outreach + signali",
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
              "Founder ne mora zauvek da bude ceo sales tim, ali mora da oblikuje prodajnu priču, naročito pre nego što firma izgradi zreo GTM sistem.",
            ],
            [
              "In early and mid-stage B2B companies, the founder usually has the deepest market insight. They know buyer pain, objections, why deals stall, and what the product or service can actually do.",
              "They can say things a brand page cannot. That is why founder-led content often lands better than polished corporate content. Buyers trust people faster than companies.",
              "The founder does not need to be the whole sales team forever, but they do need to shape the sales narrative, especially before the company has a mature GTM machine.",
            ],
          ),
        },
        { type: "video", video: video1 },
      ],
    },
    {
      type: "section",
      id: "confidence",
      title: L("Kupcima treba poverenje pre demo-a", "Buyers need confidence before they need a demo"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Demo ne stvara potražnju, samo je hvata. Pre demo-a kupac mora da veruje da je problem stvaran i hitan, da ga stari način košta, da tvoj pogled ima smisla, da si kredibilan i da razgovor neće biti gubitak vremena.",
              "Kroz content gradiš poverenje kod kupaca pre demo-a. Zato content ima smisla, ne motivacioni postovi, ne selfiji, ne generičnih „5 saveta“, već oštar i praktičan sadržaj vezan za problem kupca.",
            ],
            [
              "A demo does not create demand. A demo captures demand. Before a demo, the buyer needs to believe the problem is real and urgent, the old way is costing them, your point of view makes sense, you are credible, and talking to you will not waste their time.",
              "Founder-Led Growth builds those beliefs before the call. That is why content matters, not motivational content or random tips. Useful, sharp, problem-aware content.",
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
              "Većina B2B firmi se previše fokusira na ljude koji baš sada žele da kupe. To je kratkoročan pristup prodaji.",
              "Founder-Led Growth pored toga gradi i potražnju: founder objašnjava problem, pokazuje cenu neaktivnosti i pokreće razgovor unutar firmi, inspirisan njegovim content-om.",
              "Većina tvojih potencijalnih kupaca trenutno ne traga za uslugama koje nudiš. Posao nije samo da ih kontaktiraš sada, već da se pozicioniraš u njihovoj glavi pre nego što krenu da traže rešenje. John Dawes i njegovo 95:5 pravilo to lepo opisuju: do 95% firmi u datom trenutku ne traži ovakve usluge, pa ih founder content pozicionira kod njih još pre nego što počnu da traže.",
            ],
            [
              "Most B2B companies over-focus on demand capture, chasing buyers already ready to buy. That is expensive because every competitor chases the same buyers.",
              "Founder-Led Growth also creates demand. The founder teaches the market how to think about the problem, explains what buyers are missing, shows the cost of inaction, and gives language for internal discussions.",
              "Many buyers are not in-market today. The job is not only to find people ready now, it is to become familiar before they are ready. John Dawes' 95:5 rule: up to 95% of firms may not be in-market at any given time, so founder content should build memory before the buying window opens.",
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
                "Nisu in-market sada, treba im memorija pre buying window-a (LinkedIn B2B Institute, 95-5 Rule).",
                "Not in-market now, they need memory before the buying window (LinkedIn B2B Institute, 95-5 Rule).",
              ),
            },
            {
              value: L("5%", "5%"),
              label: L("In-market sada", "In-market now"),
              description: L(
                "Spremni za kupovinu, ovde sales i outbound imaju najviše smisla.",
                "Ready to buy, this is where sales and outbound matter most.",
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "crm",
      title: L("Sistem radi samo kada CRM prati šta se dešava", "The system only works when CRM tracks what is happening"),
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
        "Okvir: ICP → Profil → Outreach + Content → CRM → Signali",
        "Framework: ICP → Profile → Outreach + Content → CRM → Signals",
      ),
      blocks: [
        {
          type: "pipeline-flow",
          title: L("Founder-Led Growth flow", "Founder-Led Growth flow"),
          subtitle: L(
            "Od ICP-a do merljivog pipeline-a, outreach i content rade paralelno.",
            "From ICP to measurable pipeline — outreach and content run in parallel.",
          ),
          stages: [
            L("ICP", "ICP"),
            L("Profil", "Profile"),
            L("Outreach", "Outreach"),
            L("Content", "Content"),
            L("Engagement", "Engagement"),
            L("CRM", "CRM"),
            L("Signali", "Signals"),
          ],
        },
        {
          type: "framework-intro",
          title: L("Najjednostavniji način da razumeš Founder-Led Growth", "The simplest way to understand Founder-Led Growth"),
          description: L(
            "Sedam operativnih koraka ispod pokazuju redosled implementacije. Outreach i content ne čekaju jedan drugog, pokreću se zajedno čim su ICP i profil spremni.",
            "The seven operational steps below show the implementation order. Outreach and content do not wait for each other — they start together once ICP and profile are ready.",
          ),
        },
        {
          type: "framework-steps",
          steps: [
            {
              step: 1,
              title: L("Definiši ICP", "Define your ICP"),
              whatToDo: L(
                "Napiši kome pomažeš, koji problem rešavaš, ko kupuje i šta ih pokreće da traže rešenje.",
                "Write who you help, what problem you solve, who buys, and what triggers them to look for a solution.",
              ),
              whyItMatters: L(
                "Bez ICP-a outreach ide na pogrešne ljude, a content privlači pogrešnu publiku.",
                "Without an ICP, outreach targets the wrong people and content attracts the wrong audience.",
              ),
              example: L(
                "„Pomažemo B2B service firmama od 10 do 50 ljudi koje za pipeline zavise od preporuka i founder odnosa.“",
                "\"We help 10–50 person B2B service firms that rely on referrals and founder relationships for pipeline.\"",
              ),
              commonMistake: L(
                "Preširok ICP: „pomažemo svim firmama koje žele rast“.",
                "An ICP that is too broad: \"we help any company that wants to grow.\"",
              ),
              tryThis: L(
                "Jedna rečenica ICP-a + lista od 20 firmi koje tačno odgovaraju tom opisu.",
                "One ICP sentence + a list of 20 companies that match it exactly.",
              ),
              highlight: L(
                "ICP je prvi korak. Bez njega ostatak sistema nema fokus.",
                "ICP is the first step. Without it, the rest of the system has no focus.",
              ),
            },
            {
              step: 2,
              title: L("Optimizuj LinkedIn profil founder-a", "Optimize the founder's LinkedIn profile"),
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
              title: L("Pokreni outreach", "Launch outreach"),
              whatToDo: L(
                "Gradi listu ICP kontakata i šalji personalizovane poruke. Outreach i content pokreći u isto vreme.",
                "Build an ICP contact list and send personalized messages. Start outreach and content at the same time.",
              ),
              whyItMatters: L(
                "Outreach povećava broj kontakata i širi mrežu. Ne čekaš da content „sazre“ pre prvog poruka.",
                "Outreach increases contacts and expands the network. You do not wait for content to mature before the first message.",
              ),
              example: L(
                "Founder šalje 20 poruka dnevno ICP decision maker-ima sa jasnom referencom na problem, ne generički pitch.",
                "Founder sends 20 messages per day to ICP decision makers with a clear reference to the problem, not a generic pitch.",
              ),
              commonMistake: L(
                "Čekanje da content postane viral pre outreach-a.",
                "Waiting for content to go viral before starting outreach.",
              ),
              tryThis: L(
                "Lista od 50 ICP kontakata + jedna outreach poruka koja imenuje problem na njihovom jeziku.",
                "A list of 50 ICP contacts + one outreach message that names the problem in their language.",
              ),
              highlight: L(
                "Outreach i content rade zajedno, ne jedan posle drugog.",
                "Outreach and content work together, not one after the other.",
              ),
            },
            {
              step: 4,
              title: L("Content koji gradi poverenje", "Create content that builds trust"),
              whatToDo: L(
                "Objavljuj postove o problemima, greškama, okvirima i kriterijumima odlučivanja, paralelno sa outreach-om.",
                "Publish posts about problems, mistakes, frameworks, and decision criteria — in parallel with outreach.",
              ),
              whyItMatters: L(
                "Content pretvara pažnju u veće poverenje pre demo-a. Kupcima daje jezik za internu diskusiju.",
                "Content turns attention into stronger trust before the demo. It gives buyers language for internal discussions.",
              ),
              example: L(
                "„Većina compliance projekata pada jer timovi tretiraju SOC 2 kao dokumentaciju. To je problem operativnog sistema.“",
                "'Most compliance projects fail because teams treat SOC 2 as documentation. It is really an operating system problem.'",
              ),
              commonMistake: L(
                "Čekanje da outreach „završi“ pre nego što počneš da postuješ.",
                "Waiting for outreach to finish before you start posting.",
              ),
              tryThis: L(
                "Dva posta nedeljno + outreach iste nedelje. Meri šta privlači ICP odgovore.",
                "Two posts per week + outreach the same week. Measure what attracts ICP replies.",
              ),
              highlight: L(
                "Content ne zamenjuje outreach. Gradi poverenje dok outreach širi mrežu.",
                "Content does not replace outreach. It builds trust while outreach expands the network.",
              ),
            },
            {
              step: 5,
              title: L("Engagement za vidljivost", "Use engagement for visibility"),
              whatToDo: L(
                "Svakodnevno komentariši postove ICP kupaca, eksperata, partnera i target accounta.",
                "Comment daily on posts from ICP buyers, industry experts, partners, and target accounts.",
              ),
              whyItMatters: L(
                "Komentari na tuđe postove dodaju vidljivost kod ICP-a, paralelno sa outreach-om i content-om.",
                "Comments on other people's posts add visibility with your ICP — in parallel with outreach and content.",
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
                "Lista od 50 ICP-relevantnih ljudi, komentariši 10 radnih dana 2 nedelje zaredom.",
                "Build a list of 50 ICP-relevant people and comment on 10 of them every weekday for 2 weeks.",
              ),
              highlight: L(
                "Pažnja se akumulira kada je fokusirana. Nasumičan engagement ne.",
                "Attention compounds when it is focused. Random engagement does not.",
              ),
            },
            {
              step: 6,
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
                "Sistem radi samo kada CRM prati šta se dešava.",
                "The system only works when CRM tracks what is happening.",
              ),
            },
            {
              step: 7,
              title: L("Signali pretvaraju inbound u outbound", "Turn signals into outbound actions"),
              whatToDo: L(
                "Prati profile views, komentare, webinar registracije, ponovljene interakcije i DM-ove. Kada signal dođe, pokreni dodatni outreach.",
                "Track profile views, comments, webinar registrations, repeat interactions, and DMs. When a signal appears, trigger additional outreach.",
              ),
              whyItMatters: L(
                "Praćenje signala pokazuje ko je zainteresovan u kom trenutku. Outreach na signale je topliji od cold poruke.",
                "Signal tracking shows who is interested and when. Outreach based on signals is warmer than a cold message.",
              ),
              example: L(
                "VP Operations lajkuje tri posta, poseti profil i registruje se na webinar, pa dobija personalizovan DM, a ne novi cold pitch.",
                "A VP of Operations likes three posts, visits the profile, registers for a webinar — they get a personalized DM, not a new cold pitch.",
              ),
              commonMistake: L(
                "Svaki lajk tretirati kao buying signal ili čekati demo request.",
                "Treating every like as a buying signal or waiting for a demo request.",
              ),
              tryThis: L(
                "Tri nivoa signala (light, medium, strong) sa definisanom akcijom za svaki u CRM-u.",
                "Three signal levels (light, medium, strong) with a defined CRM action for each.",
              ),
              highlight: L(
                "Signali ne zamenjuju outreach, već pokazuju kada je potreban dodatni, topliji korak.",
                "Signals do not replace outreach — they show when a warmer follow-up step is needed.",
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
              "Ne krećemo od pretpostavke da founder mora svaki dan da piše ili da će ICP sam doći. Krećemo od sistema koji radi i za zauzete founder-e.",
              "1) ICP dokument, osnova za ponudu, poruke i follow-up. 2) LinkedIn profil, ICP mora za 5 sekundi da razume kako mu pomažeš. 3) Outreach i content paralelno, outreach širi mrežu (Sales Navigator, Apollo, HeyReach, Lemlist), a content gradi poverenje (intervjui, klipovi, postovi).",
              "4) Engagement, komentari kod ICP-a za dodatnu vidljivost. 5) Ads, Thought Leader Ads i lead magneti pojačavaju ono što već radi organski. 6) CRM, prati outreach, content, signale i faze (cold_sent, signal_reengage, meeting).",
              "7) Signali, buying signali i engagement pokreću dodatni outreach u pravom trenutku, umesto čekanja na inbound formu.",
              "Cilj nisu lajkovi, već prave LinkedIn konekcije sa ICP-om i predvidljiv pipeline.",
            ],
            [
              "We do not start from the assumption that the founder must post every day or that the ICP will come on their own. We start from a system that works for busy founders too.",
              "1) ICP document — foundation for offer, messages, and follow-up. 2) LinkedIn profile — ICP must understand in 5 seconds how you help. 3) Outreach and content in parallel — outreach expands the network (Sales Navigator, Apollo, HeyReach, Lemlist), content builds trust (interviews, clips, posts).",
              "4) Engagement — comments on ICP posts for extra visibility. 5) Ads — Thought Leader Ads and lead magnets amplify what works organically. 6) CRM — tracks outreach, content, signals, and stages (cold_sent, signal_reengage, meeting).",
              "7) Signals — buying signals and engagement trigger additional outreach at the right moment, not waiting for an inbound form.",
              "The goal is not likes. It is real LinkedIn connections with the ICP and a predictable pipeline.",
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
                  "Čekamo da inbound dođe sam",
                  "Outreach tek kad content „sazre“",
                  "CRM na kraju, ako stigne",
                ],
                [
                  "Founder must write alone every day",
                  "Wait for inbound to arrive on its own",
                  "Outreach only after content matures",
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
                  "Outreach + content paralelno",
                  "Engagement + Ads za vidljivost",
                  "CRM + signali od starta",
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
                "Gartner navodi da 75% B2B kupaca preferira rep-free iskustvo, ali i da sam digitalni self-service može povećati buyer's remorse, potrebna je i digitalna edukacija i ljudsko poverenje.",
                "Gartner states that 75% of B2B buyers prefer a rep-free sales experience, but also notes that digital self-service alone can increase purchase regret, supporting the need for both digital education and human trust.",
              ),
              sourceLabel: L("Gartner - B2B Buying Journey", "Gartner - B2B Buying Journey"),
              sourceUrl: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
            },
            {
              title: L("Thought leadership utiče na skrivene kupce", "Thought leadership helps influence hidden buyers"),
              body: L(
                "Edelman / LinkedIn 2025 B2B Thought Leadership Impact Report: thought leadership gradi poverenje, alignment i otvara vrata u složenim buying grupama.",
                "Edelman / LinkedIn's 2025 B2B Thought Leadership Impact Report explains that thought leadership builds trust, drives alignment, and opens doors in complex buying groups.",
              ),
              sourceLabel: L("Edelman / LinkedIn - 2025 Report", "Edelman / LinkedIn - 2025 Report"),
              sourceUrl: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report",
            },
            {
              title: L("Poznatost pre buying window-a", "Familiarity matters before the buying window opens"),
              body: L(
                "TrustRadius 2024 B2B Buying Disconnect: 78% kupaca na shortlist-u biralo proizvode koje su već čuli pre istraživanja; kod enterprise 86%.",
                "TrustRadius 2024 B2B Buying Disconnect Report: 78% of buyers creating shortlists selected products they had heard of before starting research; for enterprise buyers, 86%.",
              ),
              sourceLabel: L("TrustRadius - 2024 Report", "TrustRadius - 2024 Report"),
              sourceUrl:
                "https://go.trustradius.com/rs/827-FOI-687/images/2024%20B2B%20Buying%20Disconnect%20Year%20of%20the%20Brand%20Crisis.pdf",
            },
            {
              title: L("Većina kupaca nije in-market sada", "Most buyers are not in-market right now"),
              body: L(
                "John Dawes 95:5 pravilo: do 95% firmi možda nije in-market u datom trenutku, marketing i founder content treba da grade memoriju pre prozora kupovine.",
                "John Dawes' 95:5 rule: up to 95% of firms may not be in-market at any given time, marketing and founder content should build memory before the buying window opens.",
              ),
              sourceLabel: L("John Dawes - The 95:5 Rule", "John Dawes - The 95:5 Rule"),
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
                L("B2B agencije 20-100", "B2B agencies 20-100"),
                L("Founder i dalje vodi prodaju", "Founder still drives most sales"),
                L("Znanje founder-a je zarobljeno", "Founder knowledge is trapped"),
                L("Sales nije bottleneck, dokumentacija jeste", "Sales is not the bottleneck, documentation is"),
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
                L("Outbound ne pada zbog copy-ja, pada jer kupac još ne zna ko si.", "Your outbound is not failing because of copy, the buyer does not know who you are yet."),
              ],
            },
            {
              cells: [
                L("Point of view", "Point of view"),
                L("Kako drugačije misliš", "Show how you think differently"),
                L("Ne čekaj inbound. Pokreni outreach i content zajedno.", "Don't wait for inbound. Start outreach and content together."),
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
              "Nedeljni ritam: 2 edukativna posta, 1 POV post, 10-15 ICP komentara radnim danima, 1 soft CTA nedeljno, CRM review petkom.",
            ],
            [
              "Weekly rhythm: 2 educational posts, 1 founder POV post, 10-15 ICP comments weekdays, 1 soft CTA weekly, Friday CRM review.",
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
            "Lajk nije buying signal. Pet interakcija u dve nedelje od target accounta, jeste.",
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
              "Example: 'Noticed you engaged with the post about founder-led pipeline. We see this with B2B service firms, referrals work but aren't predictable. I have a short checklist for where founder-led systems leak pipeline. Want me to send it?'",
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
              "Founder follow-up posle webinara, kontekstualan DM.",
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
            "To je sistem, ne nasumično postovanje ni nasumičan outreach.",
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
              title: L("ICP → Profil → Outreach + Content → CRM → Signali", "ICP → Profile → Outreach + Content → CRM → Signals"),
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
            `1. ICP\n\nPomažemo:\n[tip firme] sa [veličina / industrija] koji imaju problem [problem].\n\nPrimer:\nPomažemo B2B service firmama 10-50 ljudi koje previše zavise od referral-a i founder odnosa za pipeline.\n\n2. Buyer problem\n\nSkup problem je:\n[problem na jeziku kupca]\n\nPrimer:\nFounder je i dalje glavni izvor poverenja, ali nema ponovljiv sistem da to pretvori u pipeline.\n\n3. Founder POV\n\nVećina kupaca veruje:\n[uobičajeno uverenje]\n\nMi verujemo:\n[oštrije / kontrarno uverenje]\n\nPrimer:\nVećina misli da treba više outreach volumena. Mi verujemo da treba jasan ICP, profil i paralelan outreach + content.\n\n4. LinkedIn obećanje profila\n\nPomažemo [ICP] da postignu [ishod] bez [bol].\n\n5. Content pilari\n\nPilar 1: [edukacija problema]\nPilar 2: [POV]\nPilar 3: [dokaz / praksa]\n\n6. Engagement lista\n\n- [persona 1]\n- [persona 2]\n- [partner]\n- [ekspert]\n- [advocate]\n\n7. Signali\n\nLight: [lajkovi, views, follows]\nMedium: [komentari, repeat, webinar reg]\nStrong: [DM, webinar live, pricing visit]\n\n8. Outreach trigger\n\nKada neko: [signal]\nPošalji: [kontekstualna poruka]\n\n9. CRM polja\n\nLead source | Founder touchpoint | Content topic | Signal level | Last interaction | Next action | Pipeline stage\n\n10. Nedeljna pitanja review-a\n\n- Koji content je privukao ICP?\n- Koji komentari su otvorili razgovore?\n- Koji signali su postali sastanci?\n- Šta radimo više sledeće nedelje?`,
            `1. ICP\n\nWe help:\n[company type] with [team size / revenue / industry] who struggle with [problem].\n\nExample:\nWe help 10-50 person B2B service firms that rely too heavily on referrals and founder relationships for pipeline.\n\n2. Buyer problem\n\nThe expensive problem is:\n[describe in buyer language]\n\nExample:\nThe founder is still the main source of trust, but there is no repeatable system for turning that trust into pipeline.\n\n3. Founder point of view\n\nMost buyers believe:\n[common belief]\n\nWe believe:\n[contrarian / sharper belief]\n\nExample:\nMost founders believe they need more outreach volume. We believe they need a clear ICP, profile, and parallel outreach + content.\n\n4. LinkedIn profile promise\n\nHelping [ICP] achieve [outcome] without [pain / failed alternative].\n\n5. Content pillars\n\nPillar 1: [problem education]\nPillar 2: [point of view]\nPillar 3: [proof / practical breakdown]\n\n6. Engagement list\n\n- [buyer persona 1]\n- [buyer persona 2]\n- [partner persona]\n- [industry expert]\n- [customer advocate]\n\n7. Signals to track\n\nLight: [likes, follows, profile views]\nMedium: [comments, repeat engagement, webinar registration]\nStrong: [DM, webinar attendance, pricing/demo visit, buying question]\n\n8. Outreach trigger\n\nWhen someone: [signal]\nSend: [contextual message]\n\n9. CRM fields\n\nLead source | Founder touchpoint | Content topic | Signal level | Last interaction | Next action | Pipeline stage\n\n10. Weekly review questions\n\n- Which content attracted ICP buyers?\n- Which comments created conversations?\n- Which signals turned into meetings?\n- What should we do more of next week?`,
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L("Šta je Founder-Led Growth?", "What is Founder-Led Growth?"),
      answer: L(
        "B2B pipeline sistem gde founder koristi ICP, profil, outreach, content, engagement, webinare, CRM, ads i signale da gradi prodajne razgovore. Lični brending je širenje vidljivosti; Founder-Led Growth je pipeline koji donosi prodaju.",
        "A B2B pipeline system where the founder uses market expertise, LinkedIn presence, content, engagement, webinars, outreach, CRM, ads, and intent signals to create trust and sales conversations. It is not just personal branding, personal branding focuses on visibility; Founder-Led Growth focuses on revenue.",
      ),
    },
    {
      question: L("Zašto Founder-Led Growth radi za B2B?", "Why does Founder-Led Growth work for B2B companies?"),
      answer: L(
        "Jer B2B kupci istražuju pre prodaje, traže poverenje, dokaz i relevantnost. Founder-Led Growth pomaže da se pojaviš u toj fazi.",
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
        "Cold outbound počinje porukom bez sistema iza nje. Founder-Led Growth počinje od ICP-a i profila, zatim pokreće outreach i content paralelno. Signali i CRM pokazuju kada treba topliji follow-up.",
        "Cold outbound starts with a message and no system behind it. Founder-Led Growth starts with ICP and profile, then launches outreach and content in parallel. Signals and CRM show when a warmer follow-up is needed.",
      ),
    },
    {
      question: L("Da li founder mora svaki dan da postuje?", "Does the founder need to post every day?"),
      answer: L(
        "Ne. Bitna je doslednost: 2 korisna posta nedeljno, 10 promišljenih komentara radnim danima, 1 soft CTA nedeljno, 1 webinar ili veći sadržaj mesečno i 1 nedeljni CRM pregled. Kvalitet je važniji od količine.",
        "No. Consistency matters: 2 useful LinkedIn posts per week, 10 thoughtful comments per weekday, 1 soft CTA weekly, 1 webinar or deep-dive asset per month, 1 weekly CRM review. Quality beats volume.",
      ),
    },
    {
      question: L("Kada predati timu?", "When should a founder hand this off to a team?"),
      answer: L(
        "Founder može da delegira produkciju, research, formatiranje, unos u CRM, organizaciju webinara i izveštavanje, ali ne i svoj pogled na problem, bar ne prerano. Ne mora sve da radi zauvek, ali njegovo razmišljanje mora da oblikuje sistem.",
        "The founder can delegate production, research, formatting, CRM updates, webinar operations, and reporting, but should not fully delegate the point of view too early. The founder does not need to do everything forever, but the founder's thinking must shape the system.",
      ),
    },
  ],
  sources: [
    {
      title: L("Gartner - B2B Buying Journey", "Gartner - B2B Buying Journey"),
      url: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
    },
    {
      title: L("Edelman / LinkedIn - 2025 B2B Thought Leadership Impact Report", "Edelman / LinkedIn - 2025 B2B Thought Leadership Impact Report"),
      url: "https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report",
    },
    {
      title: L("LinkedIn Marketing Blog - Hidden Buyers / Thought Leadership", "LinkedIn Marketing Blog - Hidden Buyers / Thought Leadership"),
      url: "https://www.linkedin.com/business/marketing/blog/research-and-insights/b2b-thought-leadership-influence-hidden-buyers",
    },
    {
      title: L("TrustRadius - 2024 B2B Buying Disconnect Report", "TrustRadius - 2024 B2B Buying Disconnect Report"),
      url: "https://go.trustradius.com/rs/827-FOI-687/images/2024%20B2B%20Buying%20Disconnect%20Year%20of%20the%20Brand%20Crisis.pdf",
    },
    {
      title: L("Ipsos - LinkedIn Sales Solutions Deep Sales Study", "Ipsos - LinkedIn Sales Solutions Deep Sales Study"),
      url: "https://www.ipsos.com/en-us/linkedin-sales-solutions-deep-sales-study",
    },
    {
      title: L("LinkedIn Sales Solutions - Deep Sales Playbook", "LinkedIn Sales Solutions - Deep Sales Playbook"),
      url: "https://business.linkedin.com/sales-solutions/deep-sales-playbook",
    },
    {
      title: L("John Dawes - The 95:5 Rule", "John Dawes - The 95:5 Rule"),
      url: "https://johndawes.info/the-955-rule/",
    },
    {
      title: L("LinkedIn B2B Institute - How B2B Brands Grow", "LinkedIn B2B Institute - How B2B Brands Grow"),
      url: "https://business.linkedin.com/advertise/resources/b2b-institute/how-b2b-brands-grow",
    },
    {
      title: L("Y Combinator - The Sales Playbook for Founders", "Y Combinator - The Sales Playbook for Founders"),
      url: "https://www.ycombinator.com/library/Mo-the-sales-playbook-for-founders",
    },
    {
      title: L("Y Combinator - Enterprise Sales for Founders", "Y Combinator - Enterprise Sales for Founders"),
      url: "https://www.ycombinator.com/library/LF-enterprise-sales-for-founders",
    },
  ],
  relatedLessons: {
    next: {
      slug: "how-to-define-your-icp",
      title: L("Lekcija 2 - Definisanje ICP-a", "Lesson 2 - How to Define Your ICP for Founder-Led Growth"),
      note: L("Sledeći korak u playbook-u.", "Next step in the playbook."),
    },
    related: [
      {
        slug: "linkedin-profile-optimization-founder",
        title: L("Lekcija 3 - LinkedIn profil founder-a", "Lesson 3 - Optimize a Founder's LinkedIn Profile"),
      },
      {
        slug: "linkedin-content-strategy-founder",
        title: L("Lekcija 4 - LinkedIn content strategija", "Lesson 4 - LinkedIn Content Strategy for Founders"),
      },
      {
        slug: "crm-za-founder-led-growth",
        title: L("Lekcija 10 - CRM za Founder-Led Growth", "Lesson 10 - Track Founder-Led Growth in CRM"),
      },
      {
        slug: "buying-signals-b2b-sales",
        title: L("Lekcija 11 - Buying signals", "Lesson 11 - Buying Signals in B2B Sales"),
      },
    ],
  },
  cta: {
    title: L(
      "Founder-Led Growth radi kada postane sistem, ne sporedni projekat",
      "Founder-Led Growth works when it becomes a system, not a side project",
    ),
    body: L(
      "Sledeći korak je definisati ICP i optimizovati profil, zatim pokrenuti outreach i content paralelno, uz CRM i signale koji pokazuju kada treba topliji follow-up.",
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
