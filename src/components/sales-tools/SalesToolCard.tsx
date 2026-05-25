import Link from "next/link";

import { SalesToolLogo } from "@/components/sales-tools/SalesToolLogo";
import type { SalesToolListingItem } from "@/data/sales-tools/listing";

type SalesToolCardProps = {
  tool: SalesToolListingItem;
  labels: {
    recommended: string;
    startingFrom: string;
    viewTool: string;
  };
};

export function SalesToolCard({ tool, labels }: SalesToolCardProps) {
  return (
    <Link
      href={tool.href}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(255,204,0,0.15)]"
    >
      <div className="flex items-start justify-between gap-3">
        <SalesToolLogo name={tool.name} logo={tool.logo} size="sm" />
        {tool.recommended ? (
          <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
            {labels.recommended}
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {tool.category}
        </span>
        {tool.rating ? (
          <span className="text-xs text-muted">G2 {tool.rating.g2}/5</span>
        ) : null}
      </div>

      <h2 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-accent">
        {tool.name}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
        {tool.tagline}
      </p>

      <div className="mt-5 space-y-1 border-t border-border/60 pt-4 text-sm">
        <p className="text-muted">
          <span className="font-medium text-foreground">{labels.startingFrom}:</span>{" "}
          {tool.startingPrice}
        </p>
        <p className="text-xs text-muted">{tool.trial}</p>
      </div>

      <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
        {labels.viewTool}
        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
