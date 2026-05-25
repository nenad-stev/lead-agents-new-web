import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", containerClassName)}>
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow ? (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
