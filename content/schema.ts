import { z } from "zod";

/*
 * Skema Zod tunggal untuk seluruh konten situs.
 *
 * Aturan pagar:
 * - Setiap entri fakta (TimelineEntry, Policy, Quote) WAJIB punya
 *   `sourceIds` minimal satu id (R1.3).
 * - Setiap id sumber berbentuk `src-{slug}` agar validasi silang
 *   dengan content/sources.ts bisa dilakukan di loader (Task 1.4).
 * - MediaItem wajib punya `credit`, `license`, `sourceUrl` (R1.5) dan
 *   path lokal `/images/...` (R5.6 — tidak ada hotlink).
 *
 * Validator tambahan (cross-reference, ID pool) dipasang di
 * `lib/content.ts`, bukan di sini. Schema ini cuma satu sumber
 * kebenaran bentuk data.
 */

/**
 * Peran resmi. Dipakai pengelompokan timeline per periode jabatan
 * (R3.4) dan untuk filter/entri beranda.
 */
export const RoleSchema = z.enum([
  "walikota-surakarta",
  "gubernur-dki-jakarta",
  "presiden-periode-1",
  "presiden-periode-2",
]);
export type Role = z.infer<typeof RoleSchema>;

/**
 * Label manusiawi untuk peran. Dipakai UI; tidak boleh jadi sumber
 * pencocokan data. Key HARUS cocok dengan nilai RoleSchema.
 */
export const RoleLabels: Record<Role, string> = {
  "walikota-surakarta": "Wali Kota Surakarta",
  "gubernur-dki-jakarta": "Gubernur DKI Jakarta",
  "presiden-periode-1": "Presiden Periode I",
  "presiden-periode-2": "Presiden Periode II",
};

/**
 * Tingkat kepercayaan sumber. Hanya tiga tingkat:
 * - primary: dokumen primer (UU, Perpres, rilis pers, transkrip pidato)
 * - secondary: media arus utama dengan byline dan tanggal
 * - encyclopedia-pointer: ensiklopedia, HANYA penunjuk ke sumber primer
 *   (R1.1 product.md / content-integrity.md)
 */
export const SourceTierSchema = z.enum([
  "primary",
  "secondary",
  "encyclopedia-pointer",
]);
export type SourceTier = z.infer<typeof SourceTierSchema>;

/**
 * Sumber: disimpan di content/sources.ts dan dirujuk dari entri lain
 * lewat `sourceIds`. Id berbentuk `src-{slug}`. Tanggal YYYY-MM-DD.
 */
export const SourceSchema = z.object({
  id: z.string().regex(/^src-[a-z0-9-]+$/, {
    message: "id sumber harus berformat 'src-{slug-kebab-case}'",
  }),
  title: z.string().min(3),
  publisher: z.string().min(2),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "date sumber harus berformat YYYY-MM-DD",
  }),
  url: z.string().url(),
  tier: SourceTierSchema,
});
export type Source = z.infer<typeof SourceSchema>;

/**
 * Pembatas: id sumber yang lolos format. Dipakai ulang oleh
 * TimelineEntry, Policy, dan Quote agar tidak menulis regex yang
 * sama tiga kali.
 */
const SourceIdRef = z
  .string()
  .regex(/^src-[a-z0-9-]+$/, "id sumber tidak valid");
const SourceIdsSchema = z
  .array(SourceIdRef)
  .min(1, "setiap entri fakta wajib merujuk minimal satu sumber (R1.3)");

/**
 * Item media: gambar lokal dengan atribusi lengkap. Badge atribusi
 * tampil persistent di UI (R5.2), bukan hanya saat hover.
 */
export const MediaItemSchema = z.object({
  id: z.string().regex(/^media-[a-z0-9-]+$/, {
    message: "id media harus berformat 'media-{slug-kebab-case}'",
  }),
  src: z
    .string()
    .regex(/^\/images\//, "src gambar harus path lokal di /images/ (R5.6)"),
  alt: z.string().min(5, "alt wajib deskriptif (R5.4)"),
  credit: z.string().min(2, "credit fotografer/pemilik wajib (R1.5)"),
  license: z.string().min(2, "lisensi wajib (R1.5)"),
  sourceUrl: z.string().url("sourceUrl wajib dan harus URL valid (R1.5)"),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  category: z
    .enum(["portrait", "event", "policy", "place", "other"])
    .default("other"),
  caption: z.string().optional(),
});
export type MediaItem = z.infer<typeof MediaItemSchema>;

/**
 * Identitas tokoh. Dimuat tunggal dari content/figure.ts (R1.6).
 * Ringkasan dijaga ≤ 60 kata; validator hanya mengecek panjang
 * karakter karena Zod tidak memiliki pembilang kata bawaan.
 */
export const FigureSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "slug tokoh hanya huruf kecil, angka, tanda hubung"),
  name: z.string().min(2),
  role: z.string().min(2),
  term: z.object({
    start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "start harus YYYY-MM-DD"),
    end: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "end harus YYYY-MM-DD")
      .nullable(),
  }),
  summary: z
    .string()
    .min(20)
    .max(480, "ringkasan dijaga ≤ 60 kata (~480 karakter, R2.1)"),
  portraitId: z
    .string()
    .regex(/^media-[a-z0-9-]+$/)
    .optional(),
});
export type Figure = z.infer<typeof FigureSchema>;

/**
 * Entri linimasa. `date` presisi atau `year` saja (R3.3: kalau
 * hanya tahun, tampilkan tahun tanpa mengarang tanggal).
 */
export const TimelineEntrySchema = z
  .object({
    id: z.string().regex(/^tl-[a-z0-9-]+$/, {
      message: "id linimasa harus 'tl-{slug}'",
    }),
    role: RoleSchema,
    title: z.string().min(3),
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "date harus YYYY-MM-DD")
      .optional(),
    year: z.number().int().min(1900).max(2100).optional(),
    description: z
      .string()
      .min(20)
      .max(560, "deskripsi ≤ 80 kata (~560 karakter, R3.2)"),
    sourceIds: SourceIdsSchema,
  })
  .refine((entry) => Boolean(entry.date) || Boolean(entry.year), {
    message: "TimelineEntry wajib punya 'date' atau 'year'",
  });
export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;

/**
 * Kebijakan publik. Slug stabil untuk URL (R4.5). `debate` memuat
 * perdebatan publik yang terdokumentasi, ditulis netral (R4.3, R4.6).
 */
export const PolicySchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "slug kebijakan hanya huruf kecil dan tanda hubung"),
  title: z.string().min(3),
  year: z.number().int().min(1900).max(2100),
  summary: z.string().min(20).max(200, "ringkasan satu kalimat (R4.1)"),
  background: z.string().min(20),
  body: z.string().min(20),
  keyDates: z
    .array(
      z.object({
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        label: z.string().min(2),
      }),
    )
    .default([]),
  debate: z.string().optional(),
  sourceIds: SourceIdsSchema,
});
export type Policy = z.infer<typeof PolicySchema>;

/**
 * Kutipan langsung. Wajib ada tanggal dan sumber agar dapat
 * diverifikasi (content-integrity.md).
 */
export const QuoteSchema = z.object({
  id: z.string().regex(/^q-[a-z0-9-]+$/, {
    message: "id kutipan harus 'q-{slug}'",
  }),
  text: z.string().min(10),
  speaker: z.string().min(2),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "date harus YYYY-MM-DD"),
  context: z.string().optional(),
  sourceIds: SourceIdsSchema,
});
export type Quote = z.infer<typeof QuoteSchema>;
