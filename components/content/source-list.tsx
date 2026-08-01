import Link from "next/link";

import type { Source } from "@/content/schema";

/*
 * SourceList (R3.2, R4.2, R6.2).
 *
 * Daftar sumber untuk entri linimasa / kebijakan. Setiap item
 * membuka `source.url` di tab baru dengan `rel=noopener noreferrer`.
 *
 * Bisa menerima seluruh sumber lalu memfilter lewat `sourceIds`,
 * atau menerima subset sumber yang sudah difilter di pemanggil.
 */

export function SourceList({
  sources,
  sourceIds,
  title = "Sumber",
}: {
  sources: ReadonlyArray<Source>;
  sourceIds?: ReadonlyArray<string>;
  title?: string;
}) {
  const items = sourceIds
    ? sources.filter((s) => sourceIds.includes(s.id))
    : sources;

  if (items.length === 0) return null;

  return (
    <section aria-label={title} className="mt-4">
      <h4 className="font-serif text-xs uppercase tracking-wide text-ink-muted">
        {title}
      </h4>
      <ul className="mt-2 flex flex-col gap-1 text-xs text-ink-muted">
        {items.map((source) => (
          <li key={source.id}>
            <Link
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule underline-offset-4 hover:text-accent"
            >
              {source.title}
            </Link>
            <span aria-hidden="true"> · </span>
            <span>{source.publisher}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}