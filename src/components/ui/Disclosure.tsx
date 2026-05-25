import type { ReactNode } from "react";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type DisclosureProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  /** Stacked FAQ list inside one panel */
  variant?: "card" | "joined";
  index?: number;
};

function DisclosureIcon({ joined }: { joined?: boolean }) {
  if (joined) {
    return (
      <span className="disclosure-icon disclosure-icon--plus" aria-hidden>
        <span className="disclosure-icon-bar disclosure-icon-bar--h" />
        <span className="disclosure-icon-bar disclosure-icon-bar--v" />
      </span>
    );
  }

  return (
    <span className="disclosure-icon disclosure-icon--chevron" aria-hidden>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 7.5 10 12.5 15 7.5" />
      </svg>
    </span>
  );
}

export function Disclosure({
  title,
  children,
  className,
  defaultOpen = false,
  variant = "card",
  index,
}: DisclosureProps) {
  const joined = variant === "joined";

  return (
    <details
      className={cn(
        "disclosure group",
        joined && "disclosure--joined",
        className,
      )}
      open={defaultOpen || undefined}
    >
      <summary className="disclosure-trigger">
        {joined && index !== undefined ? (
          <span className="disclosure-index" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
        <span className="disclosure-title">{title}</span>
        <DisclosureIcon joined={joined} />
      </summary>
      <div className="disclosure-panel">
        <div className="disclosure-content">
          <div className="disclosure-content-inner">{children}</div>
        </div>
      </div>
    </details>
  );
}

type DisclosureListProps = {
  children: ReactNode;
  className?: string;
};

/** Single bordered panel for a group of joined disclosures (e.g. FAQ) */
export function DisclosureList({ children, className }: DisclosureListProps) {
  return (
    <div className={cn("disclosure-list", className)}>{children}</div>
  );
}
