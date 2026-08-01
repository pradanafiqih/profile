import Link from "next/link";

import type { Source, TimelineEntry } from "@/content/schema";

/*
 * TimelineEntry (R2.3, R3.2, R3.3, R3.4).
 *
 * Dua variant:
 * - "compact" untuk homepage: tanggal, judul, ringkasan terpotong,
 *   tautan ke entri lengkap.
 * - "full" untuk halaman /timeline: tanggal/rentang, judul,
 *   deskripsi utuh, daftar sumber dengan tautan ke sourceUrl.
 *
 * Tanggal dirender sesuai presisi (R3.3): jika hanya year, tampil
 * tahun saja tanpa mengarang tanggal.
 *
 * Server Component. String konten masuk lewat props, bukan hardcode.
 */

function formatDate(entry: TimelineEntry): string {
  if (entry.date) {
    const d = new Date(entry.date);
    return d.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  if (entry.year) return String(entry.year);
  return "";
}

function truncate(text: string, maxWords: number): string {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
}

export function TimelineEntry({
  entry,
  sources,
  variant = "compact",
}: {
  entry: TimelineEntry;
  sources: ReadonlyArray<Source>;
  variant?: "compact" | "full";
}) {
  const when = formatDate(entry);
  const summary =
    variant === "compact" ? truncate(entry.description, 22) : entry.description;
  const sourceList = sources.filter((s) => entry.sourceIds.includes(s.id));

  return (
    <article className="border-t border-rule pt-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <time className="font-serif text-sm leading-tight text-accent">
          {when}
        </time>
      </div>
      <h3 className="mt-2 font-serif text-base leading-snug">{entry.title}</h3>
      <p className="prose-body mt-2 text-sm text-ink-muted">{summary}</p>

      {variant === "compact" ? (
        <p className="mt-3 text-xs">
          <Link
            href={"/timeline#" + entry.id}
            className="text-ink underline decoration-rule underline-offset-4 hover:text-accent"
          >
            Lihat di linimasa lengkap
          </Link>
        </p>
      ) : (
        <>
          {sourceList.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-muted">
              {sourceList.map((source) => (
                <li key={source.id}>
                  <Link
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-rule underline-offset-4 hover:text-accent"
                  >
                    {source.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <p id={entry.id} className="sr-only">
            {entry.title}
          </p>
        </>
      )}
    </article>
  );
}