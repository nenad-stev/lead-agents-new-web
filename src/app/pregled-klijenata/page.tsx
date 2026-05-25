import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClientsSection } from "@/components/home/ClientsSection";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pregled — sekcija klijenata | Lead Agents",
  description: "Privremena stranica za pregled nove sekcije sa logotipima klijenata.",
  robots: { index: false, follow: false },
};

export default function PregledKlijenataPage() {
  const locale = "sr";
  const dictionary = getDictionary(locale);
  const home = dictionary.home;

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <div className="border-b border-border/60 bg-card/40 px-6 py-8 text-center md:px-8">
          <p className="text-sm text-muted">
            Privremeni pregled nove sekcije — nije u meniju. Na početnoj je ista komponenta ispod
            hero-a.
          </p>
        </div>
        <ClientsSection
          locale={locale}
          title={home.clientsTitle}
          subtitle={home.clientsSubtitle}
          impact={home.clientsImpact}
        />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
