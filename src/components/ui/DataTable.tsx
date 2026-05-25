import type { ReactNode } from "react";

export type DataTableCell = string | ReactNode;

type DataTableProps = {
  headers: string[];
  rows: DataTableCell[][];
  caption?: string;
};

export function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-border bg-card">
            {headers.map((header, index) => (
              <th
                key={header}
                scope="col"
                className={`px-4 py-3 font-semibold text-foreground ${index === 0 ? "" : "text-center"}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`row-${rowIndex}`}
              className="border-b border-border/60 last:border-0 even:bg-card/40"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`px-4 py-3 text-muted ${cellIndex === 0 ? "font-medium text-foreground" : "text-center"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
