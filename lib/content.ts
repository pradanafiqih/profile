import { z } from "zod";

import {
  FigureSchema,
  MediaItemSchema,
  PolicySchema,
  QuoteSchema,
  SourceSchema,
  TimelineEntrySchema,
} from "@/content/schema";
import { figure } from "@/content/figure";
import { media } from "@/content/media";
import { policies } from "@/content/policies";
import { quotes } from "@/content/quotes";
import { sources } from "@/content/sources";
import { timeline } from "@/content/timeline";

/*
 * Loader + validator build-time.
 *
 * Tugas:
 * 1. Validasi setiap koleksi konten terhadap skema Zod-nya (R1.2).
 * 2. Validasi silang: setiap `sourceId` di timeline/policies/quotes
 *    harus terdaftar di sources.ts (R1.4).
 * 3. Gagal build dengan pesan menyebut nama file + entri jika
 *    ditemukan masalah (R1.3, R1.5).
 *
 * Loader dipanggil dari `app/layout.tsx` agar kepanggil setiap kali
 * `next build` berjalan. Karena ini Server Component, eksekusi
 * terjadi saat build, bukan saat runtime di browser.
 */

export type Content = {
  figure: z.infer<typeof FigureSchema>;
  sources: z.infer<typeof SourceSchema>[];
  timeline: z.infer<typeof TimelineEntrySchema>[];
  policies: z.infer<typeof PolicySchema>[];
  quotes: z.infer<typeof QuoteSchema>[];
  media: z.infer<typeof MediaItemSchema>[];
};

class ContentValidationError extends Error {
  override name = "ContentValidationError";
  constructor(issues: readonly string[]) {
    super(
      [
        "Validasi konten gagal. Build dihentikan.",
        "",
        ...issues.map((issue) => `  • ${issue}`),
      ].join("\n"),
    );
  }
}

function parseOrThrow<TSchema extends z.ZodTypeAny>(
  label: string,
  schema: TSchema,
  data: unknown,
): z.infer<TSchema> {
  const result = schema.safeParse(data);
  if (!result.success) {
    const issues = result.error.issues.map(
      (issue) =>
        `${label}: ${issue.path.join(".") || "(root)"} — ${issue.message}`,
    );
    throw new ContentValidationError(issues);
  }
  return result.data;
}

function checkSourceRefs(
  sourceIds: ReadonlySet<string>,
  issues: string[],
): void {
  const ensureRefs = <T>(
    collection: string,
    items: readonly T[],
    getLabel: (item: T) => string,
    getSourceIds: (item: T) => readonly string[],
  ): void => {
    for (const item of items) {
      const label = getLabel(item);
      for (const ref of getSourceIds(item)) {
        if (!sourceIds.has(ref)) {
          issues.push(
            `${collection}[${label}] merujuk sourceId "${ref}" yang tidak terdaftar di sources.ts (R1.4)`,
          );
        }
      }
    }
  };

  ensureRefs("timeline", timeline, (e) => e.id, (e) => e.sourceIds);
  ensureRefs("policies", policies, (p) => p.slug, (p) => p.sourceIds);
  ensureRefs("quotes", quotes, (q) => q.id, (q) => q.sourceIds);
}

let cached: Content | null = null;

export function getContent(): Content {
  if (cached) {
    return cached;
  }

  const figureParsed = parseOrThrow(
    "content/figure.ts",
    FigureSchema,
    figure,
  );
  const sourcesParsed = parseOrThrow(
    "content/sources.ts",
    z.array(SourceSchema),
    sources,
  );
  const timelineParsed = parseOrThrow(
    "content/timeline.ts",
    z.array(TimelineEntrySchema),
    timeline,
  );
  const policiesParsed = parseOrThrow(
    "content/policies.ts",
    z.array(PolicySchema),
    policies,
  );
  const quotesParsed = parseOrThrow(
    "content/quotes.ts",
    z.array(QuoteSchema),
    quotes,
  );
  const mediaParsed = parseOrThrow(
    "content/media.ts",
    z.array(MediaItemSchema),
    media,
  );

  const sourceIds = new Set(sourcesParsed.map((source) => source.id));
  if (sourceIds.size !== sourcesParsed.length) {
    const dupes = sourcesParsed
      .map((s) => s.id)
      .filter((id, index, list) => list.indexOf(id) !== index);
    throw new ContentValidationError([
      `content/sources.ts: id sumber duplikat terdeteksi: ${dupes.join(", ")}`,
    ]);
  }

  const refIssues: string[] = [];
  checkSourceRefs(sourceIds, refIssues);
  if (refIssues.length > 0) {
    throw new ContentValidationError(refIssues);
  }

  cached = {
    figure: figureParsed,
    sources: sourcesParsed,
    timeline: timelineParsed,
    policies: policiesParsed,
    quotes: quotesParsed,
    media: mediaParsed,
  };
  return cached;
}
