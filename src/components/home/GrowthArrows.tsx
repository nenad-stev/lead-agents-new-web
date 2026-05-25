function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type GrowthArrowsProps = {
  variant?: "hero" | "section";
  className?: string;
};

/** Decorative up-right arrows — growth motif */
export function GrowthArrows({ variant = "hero", className }: GrowthArrowsProps) {
  if (variant === "hero") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
        aria-hidden
      >
        <svg
          viewBox="0 0 32 32"
          className="home-growth-arrow home-growth-arrow-1 absolute right-[8%] top-[18%] h-16 w-16 text-accent md:right-[12%] md:h-20 md:w-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 24V8M8 8h14M8 8l11 11" />
        </svg>
        <svg
          viewBox="0 0 32 32"
          className="home-growth-arrow home-growth-arrow-2 absolute right-[22%] top-[32%] h-10 w-10 text-accent/70 md:h-12 md:w-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 24V8M8 8h14M8 8l11 11" />
        </svg>
        <svg
          viewBox="0 0 32 32"
          className="home-growth-arrow home-growth-arrow-3 absolute bottom-[22%] left-[6%] h-12 w-12 text-accent/50 md:left-[10%] md:h-14 md:w-14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 24V8M8 8h14M8 8l11 11" />
        </svg>
        <svg
          viewBox="0 0 32 32"
          className="home-growth-arrow home-growth-arrow-4 absolute bottom-[35%] right-[4%] h-8 w-8 text-accent/40 md:h-10 md:w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 24V8M8 8h14M8 8l11 11" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 32 32"
        className="home-growth-arrow home-growth-arrow-2 absolute -right-2 top-8 h-10 w-10 text-accent/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 24V8M8 8h14M8 8l11 11" />
      </svg>
      <svg
        viewBox="0 0 32 32"
        className="home-growth-arrow home-growth-arrow-3 absolute bottom-6 left-4 h-8 w-8 text-accent/20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 24V8M8 8h14M8 8l11 11" />
      </svg>
    </div>
  );
}

export function GrowthArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("h-4 w-4 shrink-0 text-accent", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 12V4M4 4h7M4 4l6 6" className="home-arrow-icon-path" />
    </svg>
  );
}
