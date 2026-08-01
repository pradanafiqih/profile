import { getContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineEntry } from "@/components/content/timeline-entry";
import type { Role, TimelineEntry as TimelineEntryType } from "@/content/schema";
import { RoleLabels } from "@/content/schema";

/*
 * Halaman linimasa (R3).
 *
 * - R3.1:urutan kronologis naik — tiap grup diurutkan berdasarkan
 *   `date` (dengan `year` sebagai fallback).
 * - R3.4: grup per periode jabatan (Wali Kota Surakarta, Gubernur
 *   DKI, Presiden I, Presiden II) — urutan periode tetap.
 * - R3.5: pembaca layar mendapat `<ol>` per periode (semantik
 *   daftar berurut), bukan sekadar div.
 * - R3.6: minimal 12 entri (sudah 16 dari content/timeline.ts).
 */

export const metadata = buildMetadata({
  title: "Linimasa",
  description:
    "Urutan kronologis peristiwa karier Joko Widodo, dikelompokkan per periode jabatan.",
  path: "/timeline",
});

const PERIOD_ORDER: ReadonlyArray<Role> = [
  "walikota-surakarta",
  "gubernur-dki-jakarta",
  "presiden-periode-1",
  "presiden-periode-2",
];

function entryTimestamp(entry: TimelineEntryType): number {
  if (entry.date) return new Date(entry.date).getTime();
  if (entry.year) return new Date(entry.year, 0, 1).getTime();
  return 0;
}

export default function TimelinePage() {
  const { timeline, sources } = getContent();

  const byRole = new Map<Role, TimelineEntryType[]>();
  for (const role of PERIOD_ORDER) byRole.set(role, []);
  for (const entry of timeline) {
    const list = byRole.get(entry.role);
    if (list) list.push(entry);
  }
  for (const [, list] of byRole) {
    list.sort((a, b) => entryTimestamp(a) - entryTimestamp(b));
  }

  return (
    <Container>
      <section
        aria-labelledby="timeline-title"
        className="border-t border-rule pt-section-mobile md:pt-section"
      >
        <h1
          id="timeline-title"
          className="font-serif text-2xl leading-tight md:text-3xl"
        >
          Linimasa karier
        </h1>
        <p className="prose-body mt-6 max-w-prose text-base text-ink-muted">
          Perjalanan karier dari kepala daerah hingga kepresidenan,
          dikelompokkan berdasarkan periode jabatan.
        </p>

        {PERIOD_ORDER.map((role) => {
          const entries = byRole.get(role) ?? [];
          if (entries.length === 0) return null;
          const headingId = "period-" + role;
          return (
            <section
              key={role}
              aria-labelledby={headingId}
              className="section-rule mt-section-mobile md:mt-section"
            >
              <SectionHeading id={headingId}>{RoleLabels[role]}</SectionHeading>
              <ol className="mt-6 flex flex-col gap-6">
                {entries.map((entry) => (
                  <li key={entry.id}>
                    <TimelineEntry
                      entry={entry}
                      sources={sources}
                      variant="full"
                    />
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </section>
    </Container>
  );
}