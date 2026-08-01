# profile

Arsip biografis tidak resmi untuk tokoh publik Indonesia.
Instance pertama: Joko Widodo, Presiden RI ke-7 (2014–2024).

Situs statis, Next.js App Router, TypeScript, Tailwind, Zod.

## Prasyarat

- Node.js >= 20
- pnpm >= 9

## Perintah

```bash
pnpm install      # pasang dependensi
pnpm dev          # server pengembangan (http://localhost:3000)
pnpm build        # build produksi (output ke .next/)
pnpm start        # jalankan hasil build (opsional)
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit, strict mode
```

## Struktur

```
app/                # Next.js App Router
  layout.tsx        # shell: skip-link, header, footer, getContent()
  page.tsx          # beranda (R2)
  timeline/         # linimasa (R3)
  policies/         # kebijakan (R4) - termasuk [slug]/page.tsx
  gallery/          # galeri (R5)
  about/            # tentang (R6)
  sitemap.ts        # /sitemap.xml (R8.6)
  robots.ts         # /robots.txt (R8.6)
  not-found.tsx     # 404 kustom (R4.4)
  globals.css       # token Tailwind, prose-body, prefers-reduced-motion

components/
  layout/           # SiteHeader, SiteFooter, Container
  content/          # FigureImage, TimelineEntry, PolicyCard, SourceList
  ui/               # SectionHeading, Badge, Prose

content/            # Sumber kebenaran data (Zod-validated)
  figure.ts         # identitas tokoh (R1.6)
  sources.ts        # registry sumber (R1.4)
  timeline.ts       # entri linimasa (R3)
  policies.ts       # kebijakan publik (R4)
  media.ts          # gambar + atribusi (R5)
  quotes.ts         # kutipan langsung (R6)

lib/
  content.ts        # loader + validator build-time
  seo.ts            # buildMetadata(), SITE_URL, nextUrl()
```

## Menambah atau mengganti tokoh

Ganti isi file di `content/` - `app/`, `components/`, dan `lib/` tidak
memuat string spesifik tokoh (R10.1). Tweak yang dibutuhkan saat
menukar tokoh:

1. `content/figure.ts` - nama, jabatan, rentang tahun, ringkasan,
   `portraitId` (opsional).
2. `content/sources.ts` - bisa dikosongkan lalu diisi ulang
   (loader akan gagal build jika `sourceIds` merujuk id yang tidak
   ada).
3. `content/timeline.ts`, `policies.ts`, `media.ts`, `quotes.ts` -
   mengikuti nilai `RoleSchema` dan `MediaItemSchema`.

## Deployment

### Vercel (disarankan)

1. Push repo ke GitHub.
2. Import di vercel.com/new.
3. Set environment variable `NEXT_PUBLIC_SITE_URL` ke domain
   produksi (mis. `https://arsip-jkw.vercel.app`).
4. Deploy otomatis dari branch `main`.

### Hosting statis (Nginx, GitHub Pages, dsb.)

```bash
pnpm build         # menghasilkan .next/
```

Pakai `output: 'export'` di `next.config.ts` dan Node adapter yang
men-target output statis penuh jika diperlukan. Saat ini `next start`
cukup untuk VPS.

## Catatan konten

- **TODO_FACT** di file `content/*.ts` menandai data yang butuh
  verifikasi ke sumber primer sebelum rilis final.
- Gambar lokal di `public/images/` belum diunduh - salin dari URL
  di `content/media.ts` sebelum rilis. Placeholder tampil kosong
  sampai berkas tersedia.
- Bahasa mengikuti panduan `content-integrity.md`: netral, tanpa
  kata sifat pujian, klaim faktual selalu merujuk ke sumber.

## Kepatuhan desain

- 6 token warna terkunci di `:root` (`--ink`, `--ink-muted`,
  `--paper`, `--paper-alt`, `--rule`, `--accent`).
- Skala font 14/16/18/24/32/48/64 (lihat `tailwind.config.ts`).
- Lebar baca maksimal 68ch (class `.prose-body`).
- Radius sudut maksimal 4px; tanpa bayangan; aksen merah bata hanya
  untuk link aktif, penanda linimasa, dan satu highlight per halaman.
- Hormati `prefers-reduced-motion` (`app/globals.css`).

## Lisensi

Isi situs tunduk pada UU Hak Cipta Indonesia dan lisensi spesifik
masing-masing gambar (lihat `content/media.ts`). Kode mengikuti
lisensi yang akan ditentukan kemudian.