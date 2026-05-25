import Image from "next/image";

import { homeTeam } from "@/data/home";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";

type TeamSectionProps = {
  locale: Locale;
  title: string;
  leadershipLabel: string;
  membersLabel: string;
  expertiseLabel: string;
};

function TeamAvatar({
  name,
  image,
  size = "md",
  className = "",
}: {
  name: string;
  image: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const sizeClass = size === "lg" ? "h-16 w-16" : "h-14 w-14";

  return (
    <div
      className={`relative ${sizeClass} shrink-0 overflow-hidden rounded-full border border-border/80 bg-background ${className}`}
    >
      <Image src={image} alt={name} fill className="object-cover object-center" sizes="64px" />
    </div>
  );
}

export function TeamSection({
  locale,
  title,
  leadershipLabel,
  membersLabel,
  expertiseLabel,
}: TeamSectionProps) {
  return (
    <Section title={title} className="home-section home-section--alt">
      <div className="space-y-10">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {leadershipLabel}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {homeTeam.leadership.map((person) => (
              <article
                key={person.name}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <TeamAvatar name={person.name} image={person.image} size="lg" />
                <div>
                  <p className="font-bold text-foreground">{person.name}</p>
                  <p className="text-sm text-muted">{person.role[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {membersLabel}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeTeam.members.map((person) => (
              <article
                key={person.name}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <TeamAvatar name={person.name} image={person.image} className="mb-3" />
                <p className="font-bold text-foreground">{person.name}</p>
                <p className="mt-1 text-sm text-muted">{person.role[locale]}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {homeTeam.expertise.map((item) => (
            <span
              key={item[locale]}
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted"
            >
              {item[locale]}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
