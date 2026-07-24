import Image from "next/image";

import { visibleClientLogos } from "@/data/clients";

type ClientLogoMarqueeProps = {
  durationSeconds?: number;
};

export function ClientLogoMarquee({ durationSeconds = 45 }: ClientLogoMarqueeProps) {
  const logos = visibleClientLogos;
  const track = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div
        className="flex w-max animate-marquee will-change-transform"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {track.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex h-20 w-44 shrink-0 items-center justify-center px-6"
          >
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.logoAlt ?? client.name}
                width={320}
                height={80}
                className="h-10 w-auto max-w-[160px] object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            ) : (
              <span className="text-sm font-bold tracking-wide text-muted">{client.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
