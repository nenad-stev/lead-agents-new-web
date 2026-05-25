import Link from "next/link";

import { CalBookingEmbed } from "@/components/contact/CalBookingEmbed";
import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CtaSection } from "@/components/ui/CtaSection";
import { contactInfo } from "@/data/contact";
import type { Dictionary, Locale } from "@/lib/i18n";

type ContactPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm font-bold text-accent transition-colors hover:border-accent">
      {children}
    </span>
  );
}

export function ContactPage({ locale, dictionary }: ContactPageProps) {
  const labels = dictionary.pages.contact;

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />

      <main>
        <CtaSection
          locale={locale}
          variant="band"
          align="left"
          className="border-b border-border/40"
          eyebrow={locale === "sr" ? "Kontakt" : "Contact"}
          title={labels.title}
          description={labels.heroSubtitle}
          primaryHref="#booking"
          primaryLabel={labels.bookMeetingCta}
          highlights={[]}
        />

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {labels.detailsTitle}
                </h2>
                <p className="mt-3 text-muted">{labels.detailsSubtitle}</p>
              </div>

              <ul className="space-y-4 text-sm">
                <li>
                  <p className="font-semibold text-foreground">{labels.emailLabel}</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-foreground">{labels.phoneLabel}</p>
                  <a
                    href={contactInfo.phoneHref}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-foreground">{labels.locationLabel}</p>
                  <p className="text-muted">{contactInfo.location[locale]}</p>
                </li>
              </ul>

              <div>
                <p className="mb-3 text-sm font-semibold text-foreground">{labels.followUs}</p>
                <div className="flex gap-3">
                  <Link href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <SocialIcon>in</SocialIcon>
                  </Link>
                  <Link href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                    <SocialIcon>ig</SocialIcon>
                  </Link>
                  <Link href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                    <SocialIcon>fb</SocialIcon>
                  </Link>
                </div>
              </div>
            </div>

            <ContactForm locale={locale} labels={labels} />
          </div>
        </section>

        <section id="booking" className="border-t border-border/60 bg-card/30 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.bookingTitle}</h2>
            <p className="mt-3 max-w-2xl text-muted">{labels.bookingSubtitle}</p>
            <div className="mt-8">
              <CalBookingEmbed />
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
