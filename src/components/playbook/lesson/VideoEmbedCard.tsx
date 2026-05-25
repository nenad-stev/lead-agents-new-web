import type { Locale } from "@/lib/i18n";
import type { RichVideoEmbed } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type VideoEmbedCardProps = {
  locale: Locale;
  video: RichVideoEmbed;
};

export function VideoEmbedCard({ locale, video }: VideoEmbedCardProps) {
  return (
    <article className="playbook-lesson-video-card">
      <div className="playbook-lesson-video-card__meta">
        <h3 className="playbook-lesson-video-card__title">{lt(video.title, locale)}</h3>
        <p className="playbook-lesson-video-card__channel">{lt(video.channel, locale)}</p>
        <p className="playbook-lesson-video-card__description">
          {lt(video.description, locale)}
        </p>
        <p className="playbook-lesson-video-card__placement">
          {lt(video.placementNote, locale)}
        </p>
      </div>
      <div className="playbook-lesson-video-card__frame">
        <iframe
          src={video.embedUrl}
          title={lt(video.title, locale)}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <a
        href={video.watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="playbook-lesson-video-card__watch"
      >
        {locale === "sr" ? "Otvori na YouTube-u" : "Watch on YouTube"} →
      </a>
    </article>
  );
}
