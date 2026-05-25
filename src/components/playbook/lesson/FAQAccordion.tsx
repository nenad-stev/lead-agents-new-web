"use client";

import { Disclosure, DisclosureList } from "@/components/ui/Disclosure";
import type { Locale } from "@/lib/i18n";
import type { RichFaqItem } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type FAQAccordionProps = {
  locale: Locale;
  title: { sr: string; en: string };
  items: RichFaqItem[];
};

export function FAQAccordion({ locale, title, items }: FAQAccordionProps) {
  return (
    <div className="playbook-lesson-faq">
      <h2 className="playbook-lesson-section__title">{lt(title, locale)}</h2>
      <DisclosureList className="playbook-lesson-faq__list">
        {items.map((item, index) => (
          <Disclosure
            key={index}
            variant="joined"
            index={index}
            title={lt(item.question, locale)}
          >
            <p>{lt(item.answer, locale)}</p>
          </Disclosure>
        ))}
      </DisclosureList>
    </div>
  );
}
