import Link from "next/link";

import { SalesToolLogo } from "@/components/sales-tools/SalesToolLogo";
import { getSalesToolBySlug } from "@/data/sales-tools/index";
import type { Locale } from "@/lib/i18n";
import { t, type LocalizedText, type PlaybookRecommendedTool } from "@/types/playbook";

type RecommendedToolsProps = {
  locale: Locale;
  title: LocalizedText;
  description?: LocalizedText;
  tools: PlaybookRecommendedTool[];
  toolHref: (slug: string) => string;
  salesToolsHubHref: string;
  viewToolLabel: LocalizedText;
};

const defaultViewTool: LocalizedText = {
  sr: "Pogledaj alat",
  en: "View tool",
};

export function RecommendedTools({
  locale,
  title,
  description,
  tools,
  toolHref,
  salesToolsHubHref,
  viewToolLabel = defaultViewTool,
}: RecommendedToolsProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground">{t(title, locale)}</h3>
      {description ? (
        <p className="mt-3 max-w-2xl text-muted">{t(description, locale)}</p>
      ) : null}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const salesTool = tool.slug ? getSalesToolBySlug(tool.slug) : undefined;
          const href = tool.slug ? toolHref(tool.slug) : salesToolsHubHref;

          return (
            <Link
              key={tool.slug ?? tool.name}
              href={href}
              className="group flex gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-accent/40 hover:bg-card"
            >
              {salesTool ? (
                <SalesToolLogo name={salesTool.name} logo={salesTool.logo} size="sm" />
              ) : null}
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t(tool.category, locale)}
                </p>
                <h4 className="mt-2 text-lg font-bold text-foreground group-hover:text-accent">
                  {tool.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(tool.description, locale)}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">
                  {t(viewToolLabel, locale)} →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
