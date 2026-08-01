# steering/structure.md

# Structure Steering
## Struktur folder

```plain
app/
  layout.tsx            # shell, font, metadata dasar, skip-link
  page.tsx              # beranda
  timeline/page.tsx     # linimasa karier
  policies/page.tsx     # indeks kebijakan
  policies/[slug]/page.tsx
  gallery/page.tsx      # galeri berbadge atribusi
  about/page.tsx        # metodologi, sumber, disclaimer
  not-found.tsx

components/
  layout/      # SiteHeader, SiteFooter, Container
  content/     # TimelineEntry, PolicyCard, QuoteBlock, SourceList, FigureImage
  ui/          # primitif kecil: Badge, Prose, SectionHeading

content/
  schema.ts    # skema Zod, satu-satunya sumber kebenaran bentuk data
  figure.ts    # identitas tokoh: nama, jabatan, rentang tahun, ringkasan
  timeline.ts
  policies.ts
  quotes.ts
  media.ts     # daftar gambar + lisensi + atribusi
  sources.ts   # registry sumber, dirujuk pakai id dari file lain

lib/
  content.ts   # loader + validasi
  seo.ts

public/images/
```

## Aturan arsitektur
*   **Komponen tidak boleh mengandung teks konten.** Semua string yang dibaca pengunjung datang dari `content/`. Kalau agent nulis kalimat langsung di JSX, itu pelanggaran.
*   **Satu tokoh = satu set file di** **`content/`****.** Ganti tokoh berarti ganti isi folder itu saja, tanpa menyentuh `components/` atau `app/`.
*   **Setiap fakta merujuk ke** **`sources.ts`** lewat array `sourceIds`. Fakta tanpa `sourceIds` ditolak oleh skema Zod.
*   `lib/` tidak boleh mengimpor dari `components/`. Arah dependensi satu arah: `app` → `components` → `lib` → `content`.
## Konvensi penamaan
*   Slug kebijakan: huruf kecil, tanda hubung, stabil selamanya (masuk URL). Contoh: `kartu-indonesia-sehat`.
*   Id sumber: `src-` + slug pendek. Contoh: `src-kompas-2014-inaugurasi`.
*   Aset gambar: `public/images/{kategori}/{slug}.jpg`, sertakan lebar asli di `media.ts`.
## Git
*   Conventional commits: `feat:`, `fix:`, `content:`, `chore:`.
*   Satu commit per task di `tasks.md`. Pesan commit menyebut nomor task.
*   Tidak ada commit langsung ke `main`.