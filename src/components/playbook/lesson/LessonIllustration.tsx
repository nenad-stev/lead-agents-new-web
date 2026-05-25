import Image from "next/image";

import type { Locale } from "@/lib/i18n";
import type { RichIllustrationBlock } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type LessonIllustrationProps = {
  locale: Locale;
  block: RichIllustrationBlock;
};

export function LessonIllustration({ locale, block }: LessonIllustrationProps) {
  const fit = block.fit ?? "cover";
  const frameStyle = block.aspectRatio ? { aspectRatio: block.aspectRatio } : undefined;

  const frame = (
    <div
      className={`playbook-lesson-illustration__frame${fit === "contain" ? " playbook-lesson-illustration__frame--contain" : ""}`}
      style={frameStyle}
    >
      <Image
        src={block.src}
        alt={lt(block.alt, locale)}
        fill
        className={fit === "contain" ? "object-contain" : "object-cover"}
        sizes="(max-width: 768px) 100vw, 720px"
      />
    </div>
  );

  return (
    <figure className="playbook-lesson-illustration">
      {block.href ? (
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="playbook-lesson-illustration__link"
        >
          {frame}
        </a>
      ) : (
        frame
      )}
      {block.caption ? (
        <figcaption className="playbook-lesson-illustration__caption">
          {lt(block.caption, locale)}
          {block.href ? (
            <>
              {" "}
              <a
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="playbook-lesson-illustration__caption-link"
              >
                {locale === "sr" ? "Pogledaj profil na LinkedIn-u →" : "View profile on LinkedIn →"}
              </a>
            </>
          ) : null}
        </figcaption>
      ) : null}
      {block.credit ? (
        <p className="playbook-lesson-illustration__credit">{lt(block.credit, locale)}</p>
      ) : null}
    </figure>
  );
}
