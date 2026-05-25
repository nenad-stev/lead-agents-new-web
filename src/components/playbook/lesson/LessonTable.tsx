import type { Locale } from "@/lib/i18n";
import type { RichTableBlock } from "@/types/rich-lesson";
import { ll, lt } from "@/components/playbook/lesson/lesson-utils";

type LessonTableProps = {
  locale: Locale;
  table: RichTableBlock;
};

export function LessonTable({ locale, table }: LessonTableProps) {
  const wrapClass = [
    "playbook-lesson-table-wrap",
    table.id ? `playbook-lesson-table-wrap--${table.id}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClass}>
      {table.caption ? (
        <p className="playbook-lesson-table__caption">{lt(table.caption, locale)}</p>
      ) : null}
      <table className="playbook-lesson-table">
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header[locale]} scope="col">
                {lt(header, locale)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.cells.map((cell) => (
                <td key={cell[locale]}>{lt(cell, locale)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Bullet list helper */
export function LessonBulletList({
  locale,
  items,
}: {
  locale: Locale;
  items: { sr: string[]; en: string[] };
}) {
  return (
    <ul className="playbook-lesson-bullets">
      {ll(items, locale).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
