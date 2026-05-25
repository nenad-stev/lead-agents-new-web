import Link from "next/link";

import { SalesToolLogo } from "@/components/sales-tools/SalesToolLogo";
import { getSalesToolBySlug } from "@/data/sales-tools/index";
import type { Locale } from "@/lib/i18n";
import type { RichToolCard } from "@/types/rich-lesson";
import { resolveSalesToolSlug } from "@/components/playbook/lesson/lesson-tool-utils";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type ToolCardProps = {
  locale: Locale;
  tool: RichToolCard;
  salesToolHref?: (slug: string) => string;
};

export function ToolCard({ locale, tool, salesToolHref }: ToolCardProps) {
  const slug = resolveSalesToolSlug(tool.name, tool.slug);
  const salesTool = slug ? getSalesToolBySlug(slug) : undefined;
  const href = salesTool && salesToolHref ? salesToolHref(salesTool.slug) : null;

  const body = (
    <>
      <div className="playbook-lesson-tool-card__header">
        {salesTool ? (
          <SalesToolLogo name={salesTool.name} logo={salesTool.logo} size="sm" />
        ) : tool.logo ? (
          <SalesToolLogo name={tool.name} logo={tool.logo} size="sm" fit="contain" />
        ) : (
          <span className="playbook-lesson-tool-card__initial" aria-hidden>
            {tool.name.charAt(0).toUpperCase()}
          </span>
        )}
        <div className="playbook-lesson-tool-card__header-text">
          <h3 className="playbook-lesson-tool-card__name">{tool.name}</h3>
          {href ? (
            <span className="playbook-lesson-tool-card__badge">
              {locale === "sr" ? "Na sajtu" : "On site"}
            </span>
          ) : null}
        </div>
        {href ? (
          <span className="playbook-lesson-tool-card__arrow" aria-hidden>
            →
          </span>
        ) : null}
      </div>
      <div className="playbook-lesson-tool-card__fields">
        <div>
          <p className="playbook-lesson-tool-card__label">
            {locale === "sr" ? "Za šta" : "Used for"}
          </p>
          <p className="playbook-lesson-tool-card__text">{lt(tool.usedFor, locale)}</p>
        </div>
        <div>
          <p className="playbook-lesson-tool-card__label">
            {locale === "sr" ? "Zašto u stack-u" : "Why it fits"}
          </p>
          <p className="playbook-lesson-tool-card__text">{lt(tool.whyItFits, locale)}</p>
        </div>
      </div>
      <p className="playbook-lesson-tool-card__alt">
        <span className="playbook-lesson-tool-card__label-inline">
          {locale === "sr" ? "Alternativa:" : "Alternative:"}
        </span>{" "}
        {lt(tool.alternative, locale)}
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="playbook-lesson-tool-card playbook-lesson-tool-card--linked">
        {body}
      </Link>
    );
  }

  return <article className="playbook-lesson-tool-card">{body}</article>;
}
