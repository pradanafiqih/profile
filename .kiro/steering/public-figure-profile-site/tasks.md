# Tasks — public-figure-profile-site

> Spec-driven checklist. Setiap task = aksi coding konkret, satu sesi, repo tetap buildable di akhir.
> Sumber kebenaran requirement: [`requirements.md`](./requirements.md).
> Sumber kebenaran arsitektur: [`../structure.md`](../structure.md), [`../tech.md`](../tech.md), [`../design-system.md`](../design-system.md).

## Konvensi penamaan
- Phase `1.x` = fondasi & bootstrap (tanpa dependensi ke phase lain)
- Phase `2.x` = content layer (Zod schemas + data tokoh)
- Phase `3.x` = site shell (layout, header, footer, ui primitives)
- Phase `4.x` = homepage (R2)
- Phase `5.x` = linimasa (R3)
- Phase `6.x` = kebijakan (R4)
- Phase `7.x` = galeri (R5)
- Phase `8.x` = about & sumber (R6)
- Phase `9.x` = SEO, sitemap, JSON-LD, deploy (R7–R9, R11)
- Phase `10.x` = audit & portabilitas (R10)

---

## Phase 1 — Fondasi & bootstrap

- [x] **1.1 Bootstrap proyek Next.js** — `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `app/layout.tsx` (root shell + skip-link + 2 font self-host), `app/page.tsx` (placeholder), `app/globals.css` (Tailwind directives + token CSS variables) — memenuhi R7.1 (font), R7.4 (skip-link), R9.1 (token warna), R9.5 (2 font), fondasi untuk semua phase berikutnya. Verifikasi: `pnpm lint && pnpm typecheck && pnpm build` lulus.
- [x] **1.2 Token warna & skala font ke Tailwind** — extend `tailwind.config.ts` dengan warna `--ink`, `--ink-muted`, `--paper`, `--paper-alt`, `--rule`, `--accent` dan skala font 14/16/18/24/32/48/64. Buat helper class `prose-body` (max-w 68ch, leading 1.6) di `globals.css`. — memenuhi R9.1, R9.2, R9.4.
- [x] **1.3 Skema Zod fondasi** — `content/schema.ts` berisi `SourceSchema`, `MediaItemSchema`, `FigureSchema`, `TimelineEntrySchema`, `PolicySchema`, `QuoteSchema`, plus `RoleSchema` (enum). Semua entri fakta mewajibkan `sourceIds: string[]` non-empty. — memenuhi R1.2, R1.3, R1.4, R1.5, fondasi R1.6.
- [x] **1.4 Loader + validator build-time** — `lib/content.ts`导出 fungsi `loadContent()` yang baca semua file `content/*.ts`, jalankan `safeParse`, gagal build dengan pesan menyebut nama file + entri jika invalid. Wire ke `app/layout.tsx` agar kepanggil setiap build. — memenuhi R1.2, R1.3, R1.4, R1.5.

## Phase 2 — Data tokoh (Joko Widodo)

> Aturan: tulis `TODO_FACT: [deskripsi]` untuk data yang belum tersedia. Jangan menebak.

- [x] **2.1 Identitas tokoh** — `content/figure.ts` berisi `Figure` (nama, jabatan, rentang tahun, ringkasan ≤ 60 kata). Pakai placeholder eksplisit untuk angka ringkasan yang belum diverifikasi. — memenuhi R1.6, R2.1.
- [x] **2.2 Registry sumber** — `content/sources.ts` berisi 5–8 `Source` nyata (Kompas, Tempo, BBC, Wikipedia penunjuk, dll) lengkap dengan `id`, `title`, `publisher`, `date`, `url`. — memenuhi R6.2, prasyarat R1.4.
- [x] **2.3 Timeline seed** — `content/timeline.ts` berisi ≥ 12 `TimelineEntry` dikelompokkan 4 periode (Wali Kota Surakarta, Gubernur DKI, Presiden I, Presiden II). Pakai `TODO_FACT` untuk tanggal/entri yang belum diverifikasi. — memenuhi R3.1, R3.3, R3.4, R3.6.
- [x] **2.4 Policies seed** — `content/policies.ts` berisi ≥ 4 `Policy` (Kartu Indonesia Sehat, MP3I, IKN, dst) dengan slug stabil. — memenuhi R4.1, R4.5.
- [x] **2.5 Media seed** — `content/media.ts` berisi ≥ 6 `MediaItem` dengan `credit`, `license`, `sourceUrl` lengkap. Placeholder untuk gambar lokal di `public/images/`. — memenuhi R5.
- [x] **2.6 Quotes seed (opsional)** — `content/quotes.ts` dengan ≥ 3 kutipan bersumber. — memenuhi R6.

## Phase 3 — Site shell & UI primitives

- [x] **3.1 Container + SectionHeading + Badge + Prose** — `components/layout/container.tsx`, `components/ui/section-heading.tsx`, `components/ui/badge.tsx`, `components/ui/prose.tsx`. Server Component, tanpa string konten tokoh. — memenuhi R9 (kepatuhan visual).
- [x] **3.2 SiteHeader** — `components/layout/site-header.tsx` dengan nav (Linimasa, Kebijakan, Galeri, Tentang) + `aria-current` di halaman aktif. — memenuhi R7.1, R7.2, R7.5.
- [x] **3.3 SiteFooter** — `components/layout/site-footer.tsx` dengan disclaimer ketidakberafiliasian lengkap. — memenuhi R6.4, R7.3.
- [x] **3.4 Root layout finalisasi** — `app/layout.tsx` mount SiteHeader + SiteFooter, set metadata default, font self-host aktif. — memenuhi R7.1, R7.3.
- [x] **3.5 404 custom** — `app/not-found.tsx` dengan tautan balik ke beranda + indeks kebijakan. — memenuhi R4.4.
- [x] **3.6 SEO helper** — `lib/seo.ts` dengan builder `buildMetadata()` per halaman. — memenuhi R8.5.

## Phase 4 — Homepage (R2)

- [x] **4.1 FigureImage component** — `components/content/figure-image.tsx`, render `next/image` dengan `width`/`height` eksplisit, badge atribusi persistent (bukan hanya hover). — memenuhi R2.2, R5.2, R5.3, R5.4.
- [x] **4.2 TimelineEntry ringkas (card)** — `components/content/timeline-entry.tsx`, varian compact untuk homepage. — memenuhi R2.3.
- [ ] **4.3 PolicyCard ringkas** — `components/content/policy-card.tsx`, varian compact untuk homepage. — memenuhi R2.4.
- [ ] **4.4 Beranda assembly** — `app/page.tsx` menggabungkan hero (nama, jabatan, ringkasan, foto), 3 timeline preview, 3 policy preview. Server Component, tanpa JS klien untuk konten utama. — memenuhi R2.1–R2.6.

## Phase 5 — Linimasa (R3)

- [ ] **5.1 TimelineEntry lengkap** — extend `components/content/timeline-entry.tsx` dengan tanggal/rentang, judul, deskripsi ≤ 80 kata, daftar sumber. — memenuhi R3.2, R3.3.
- [ ] **5.2 SourceList** — `components/content/source-list.tsx` untuk daftar `Source` dengan tautan eksternal `target="_blank" rel="noopener"`. — memenuhi R3.2.
- [ ] **5.3 Halaman linimasa** — `app/timeline/page.tsx`, semantik `<ol>` (bukan `<div>`), grup per periode jabatan. — memenuhi R3.1, R3.4, R3.5.

## Phase 6 — Kebijakan (R4)

- [ ] **6.1 PolicyCard lengkap** — extend `components/content/policy-card.tsx`. — memenuhi R4.1.
- [ ] **6.2 Indeks kebijakan** — `app/policies/page.tsx`. — memenuhi R4.1.
- [ ] **6.3 Halaman detail kebijakan** — `app/policies/[slug]/page.tsx` dengan `generateStaticParams`, latar belakang, isi, tanggal kunci, daftar sumber lengkap, bagian "perdebatan publik" jika ada. — memenuhi R4.2, R4.3, R4.5, R4.6.

## Phase 7 — Galeri (R5)

- [ ] **7.1 Halaman galeri** — `app/gallery/page.tsx` dengan grid, kredit + lisensi persistent (bukan hover-only), `next/image` width/height eksplisit, klik buka `sourceUrl` di tab baru. — memenuhi R5.1–R5.6.

## Phase 8 — About & Sumber (R6)

- [ ] **8.1 Halaman about** — `app/about/page.tsx` dengan tujuan situs, metode pengumpulan data, kriteria sumber, daftar lengkap `sources`, tanggal pembaruan terakhir, disclaimer. — memenuhi R6.1–R6.4.

## Phase 9 — SEO, metadata, deployment (R8, R11)

- [ ] **9.1 Sitemap & robots** — `app/sitemap.ts`, `app/robots.ts`. — memenuhi R8.6.
- [ ] **9.2 JSON-LD Person** — di `app/page.tsx`, structured data `Person` sesuai figure.ts. — memenuhi R8.7.
- [ ] **9.3 Metadata per halaman** — pasang `metadata`/`generateMetadata` di tiap route dengan judul & OG unik. — memenuhi R8.5.
- [ ] **9.4 prefers-reduced-motion** — global CSS menonaktifkan transisi non-esensial saat `prefers-reduced-motion: reduce`. — memenuhi R8.4.
- [ ] **9.5 README deployment** — `README.md` berisi instruksi Vercel import, env (kosong), catatan pnpm. — memenuhi R11.1, R11.4.

## Phase 10 — Audit & portabilitas (R10)

- [ ] **10.1 Audit portabilitas** — grep `app/`, `components/`, `lib/` untuk string literal spesifik tokoh; pastikan hanya `content/` yang mengandung nama tokoh. — memenuhi R10.1, R10.2.
- [ ] **10.2 Empty-state handling** — pastikan halaman galeri, linimasa, kebijakan menyembunyikan seksi aman saat array kosong. — memenuhi R10.3.
- [ ] **10.3 Lighthouse audit** — jalankan build produksi lokal, verifikasi bundle `< 100 KB`, Lighthouse target ≥ 95. Catat hasil di laporan task. — memenuhi R8.1, R8.2.

---

## Format laporan setiap task (wajib)

```plain
Task: <nomor + judul>
File diubah: <daftar file>
Requirement dipenuhi: <R#.#>
lint: pass | fail  | typecheck: pass | fail  | build: pass | fail
TODO_FACT: (kosong / daftar)
Cek anti-slop: tidak ada elemen terlarang, semua teks dari content/, semua warna dari token
Catatan: <maks 2 kalimat>
```
