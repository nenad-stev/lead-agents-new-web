"use client";

import { useCallback, useEffect, useState } from "react";

import type { ServiceShowreelVideo } from "@/types/service";

type ServiceShowreelProps = {
  videos: ServiceShowreelVideo[];
};

function PlayIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="drop-shadow-lg"
    >
      <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.45)" />
      <path d="M32 26L56 40L32 54V26Z" fill="#FFCC00" />
    </svg>
  );
}

export function ServiceShowreel({ videos }: ServiceShowreelProps) {
  const [activeVideo, setActiveVideo] = useState<ServiceShowreelVideo | null>(null);

  const closeModal = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo, closeModal]);

  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-border/80 bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Pusti video"
              >
                <video
                  src={video.preview}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/35">
                  <PlayIcon />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card text-xl leading-none text-foreground hover:bg-accent hover:text-background"
            aria-label="Zatvori"
          >
            ×
          </button>
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border/80 bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1`}
              title={activeVideo.id}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
