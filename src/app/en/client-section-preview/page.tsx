import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClientsSection } from "@/components/home/ClientsSection";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Preview, client logos section | Lead Agents",
  description: "Temporary page to preview the new client logos section.",
  robots: { index: false, follow: false },
};

export default function ClientSectionPreviewPage() {
  const locale = "en";
  const dictionary = getDictionary(locale);
  const home = dictionary.home;

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <div className="border-b border-border/60 bg-card/40 px-6 py-8 text-center md:px-8">
          <p className="text-sm text-muted">
            Temporary preview, not in the menu. The homepage uses the same block below the hero.
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
