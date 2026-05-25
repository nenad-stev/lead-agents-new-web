import Link from "next/link";

import { getServiceAnchor, homeServices } from "@/data/home";
import { hasServicePage } from "@/data/services";
import { getRoutes, siteConfig } from "@/data/site";
import type { Dictionary, Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
  const routes = getRoutes(locale);
  const year = new Date().getFullYear();
  const footer = dictionary.footer;

  return (
    <footer className="border-t border-border/60 bg-[var(--footer)]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-xl font-bold text-foreground">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{footer.tagline}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-sm text-muted hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>

          <nav aria-label={footer.servicesTitle}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {footer.servicesTitle}
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {homeServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={
                      hasServicePage(service.slug)
                        ? routes.service(service.slug)
                        : `${routes.home}${getServiceAnchor(service.slug)}`
                    }
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {service.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.companyTitle}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {footer.companyTitle}
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href={routes.home} className="text-muted hover:text-accent">
                  {footer.links.home}
                </Link>
              </li>
              <li>
                <Link href={routes.caseStudies} className="text-muted hover:text-accent">
                  {footer.links.caseStudies}
                </Link>
              </li>
              <li>
                <Link href={routes.growthPlaybook} className="text-muted hover:text-accent">
                  {dictionary.nav.growthPlaybook}
                </Link>
              </li>
              <li>
                <Link href={routes.salesTools} className="text-muted hover:text-accent">
                  {footer.links.salesTools}
                </Link>
              </li>
              <li>
                <Link href={routes.contact} className="text-muted hover:text-accent">
                  {footer.links.contact}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {footer.contactTitle}
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {locale === "sr"
                ? "Imate potrebu za novim leadovima? Javite nam se."
                : "Need new leads? Get in touch."}
            </p>
            <Link
              href={routes.contact}
              className="mt-4 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[var(--accent-hover)] hover:text-black"
            >
              {locale === "sr" ? "Zakaži konsultaciju" : "Book consultation"}
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-sm text-muted">
          <p>
            © {year} {siteConfig.name}. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
