import Link from "next/link";

import { getContent } from "@/lib/content";
import { buildMetadata, nextUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FigureImage } from "@/components/content/figure-image";
import { TimelineEntry } from "@/components/content/timeline-entry";
import { PolicyCard } from "@/components/content/policy-card";

/*
 * Beranda (R2).
 *
 * Konten 100% dibaca dari `content/` lewat `getContent()`. Tidak ada
 * string spesifik tokoh yang hardcode (R10.2). Server Component,
 * dirender ke HTML statis saat build.
 *
 * R8.7: structured data `Person` (schema.org) di-inject sebagai
 * JSON-LD agar mesin pencari memahami entitas tokoh.
 */

export const metadata = buildMetadata({
  title: "Beranda",
  description:
    "Arsip biografis tidak resmi: perjalanan karier, kebijakan, dan dokumentasi visual satu tokoh publik Indonesia.",
  path: "/",
});

const TIMELINE_PREVIEW_IDS = [
  "tl-pelantik-2014",
  "tl-terpilih-kembali-walikota-2010",
  "tl-akhir-masa-jabatan-presiden-2024",
];

export default function HomePage() {
  const { figure, timeline, sources, policies, media } = getContent();
  const portrait = figure.portraitId
    ? media.find((m) => m.id === figure.portraitId)
    : undefined;

  const fallbackIds = [
    timeline[0]?.id,
    timeline[Math.floor(timeline.length / 2)]?.id,
    timeline[timeline.length - 1]?.id,
  ].filter((id): id is string => Boolean(id));

  const previewIds = TIMELINE_PREVIEW_IDS.some((id) =>
    timeline.some((e) => e.id === id),
  )
    ? TIMELINE_PREVIEW_IDS.filter((id) =>
        timeline.some((e) => e.id === id),
      )
    : fallbackIds;

  const timelinePreview = previewIds
    .map((id) => timeline.find((entry) => entry.id === id))
    .filter((entry): entry is (typeof timeline)[number] => Boolean(entry));

  const policyPreview = policies.slice(0, 3);

  // JSON-LD Person (R8.7). Bidang yang dipakai:
  // - @id: URL kanonik beranda
  // - name, jobTitle, description
  // - startDate / endDate (hanya jika periodenya jelas)
  // - image: potret utama jika tersedia
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": nextUrl("/#person"),
    name: figure.name,
    jobTitle: {
      "@type": "DefinedTerm",
      name: figure.role,
    },
    description: figure.summary,
    startDate: figure.term.start,
    endDate: figure.term.end ?? undefined,
    image: portrait ? nextUrl(portrait.src) : undefined,
    url: nextUrl("/"),
  };

  return (
    <Container>
      <script
        type="application/ld+json"
        // dangerouslySetInnerHTML aman karena konten sepenuhnya
        // dihasilkan dari data internal yang sudah divalidasi Zod.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero (R2.1, R2.2) */}
      <section
        aria-labelledby="hero-title"
        className="border-t border-rule pt-section-mobile md:pt-section"
      >
        <h1
          id="hero-title"
          className="font-serif text-2xl leading-tight md:text-3xl"
        >
          {figure.name}
        </h1>
        <p className="mt-3 font-serif text-base text-ink-muted md:text-lg">
          {figure.role} ({figure.term.start.slice(0, 4)}–
          {figure.term.end ? figure.term.end.slice(0, 4) : "sekarang"})
        </p>
        <p className="prose-body mt-6 max-w-prose text-base">{figure.summary}</p>

        {portrait ? (
          <div className="mt-section-mobile md:mt-10">
            <FigureImage item={portrait} />
          </div>
        ) : null}
      </section>

      {/* Pratinjau linimasa (R2.3) */}
      <section
        aria-labelledby="timeline-preview"
        className="section-rule mt-section-mobile md:mt-section"
      >
        <div className="flex items-baseline justify-between gap-4">
          <SectionHeading id="timeline-preview">Linimasa</SectionHeading>
          <Link
            href="/timeline"
            className="text-sm text-ink underline decoration-rule underline-offset-4 hover:text-accent"
          >
            Linimasa lengkap
          </Link>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {timelinePreview.map((entry) => (
            <TimelineEntry
              key={entry.id}
              entry={entry}
              sources={sources}
              variant="compact"
            />
          ))}
        </div>
      </section>

      {/* Pratinjau kebijakan (R2.4) */}
      <section
        aria-labelledby="policy-preview"
        className="section-rule mt-section-mobile md:mt-section"
      >
        <div className="flex items-baseline justify-between gap-4">
          <SectionHeading id="policy-preview">Kebijakan</SectionHeading>
          <Link
            href="/policies"
            className="text-sm text-ink underline decoration-rule underline-offset-4 hover:text-accent"
          >
            Indeks kebijakan
          </Link>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {policyPreview.map((policy) => (
            <PolicyCard key={policy.slug} policy={policy} variant="compact" />
          ))}
        </div>
      </section>
    </Container>
  );
}