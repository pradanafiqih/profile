# steering/tech.md

# Tech Steering
## Stack terkunci

| Layer | Pilihan | Alasan |
| ---| ---| --- |
| Framework | Next.js (App Router), TypeScript strict | Static export, ekosistem paling matang di Vercel |
| Styling | Tailwind CSS | Token-driven, gampang dikunci lewat config |
| Konten | File TypeScript/MDX di `content/`, divalidasi Zod | Tanpa DB, type-safe, diff-able di git |
| Gambar | `next/image`, aset lokal di `public/` | Optimasi otomatis, no hotlink |
| Hosting | Vercel Hobby | Gratis, cukup untuk situs statis |
| Font | 2 keluarga font saja, self-hosted via `next/font` | Hindari layout shift dan request pihak ketiga |

## Larangan keras
*   **Tidak boleh nambah dependency** tanpa izin eksplisit. Butuh library? Ajukan dulu: nama, ukuran bundle, kenapa nggak bisa pakai native.
*   Tidak ada UI kit jadi (MUI, Chakra, shadcn full-install, template Bootstrap). Komponen ditulis sendiri.
*   Tidak ada animation library (Framer Motion dsb) di v1. Cukup CSS transition.
*   Tidak ada state management library. Situs ini statis.
*   Tidak ada `any`, tidak ada `@ts-ignore`, tidak ada `console.log` yang tertinggal.
*   Tidak ada API route, tidak ada environment variable rahasia. Kalau butuh, itu tanda scope melebar.
## Standar kode
*   Server Component secara default. `"use client"` hanya kalau memang butuh interaktivitas, dan wajib disertai komentar satu baris menjelaskan kenapa.
*   Semua data konten diketik lewat skema Zod di `content/schema.ts`. Build gagal kalau data tidak valid. Ini pagar utama melawan konten karangan.
*   File komponen maksimal ~150 baris. Lebih dari itu, pecah.
*   Nama file `kebab-case`, komponen `PascalCase`, tanpa default export kecuali `page.tsx` dan `layout.tsx`.
*   Tanpa komentar yang cuma mengulang kode. Komentar hanya untuk menjelaskan _kenapa_.
## Performa & aksesibilitas (gerbang, bukan saran)
*   Lighthouse ≥ 95 untuk Performance, Accessibility, Best Practices, SEO.
*   Semua gambar wajib `alt` deskriptif. Tanpa `alt=""` kecuali gambar murni dekoratif.
*   Kontras teks minimal WCAG AA. Fokus keyboard harus terlihat jelas.
*   Total JS terkirim di halaman utama di bawah 100 KB gzipped.
*   Hormati `prefers-reduced-motion`.
## Deployment
*   Repo GitHub → import ke Vercel → auto deploy dari branch `main`.
*   Branch `main` selalu deployable. Kerja di branch fitur, satu branch per spec task group.
*   Preview deployment wajib dicek sebelum merge.
*   Domain: subdomain `.vercel.app` dulu. Custom domain nanti setelah konten lengkap.
## Perintah

```bash
pnpm dev        # dev server
pnpm build      # wajib lolos sebelum commit
pnpm lint       # wajib bersih
pnpm typecheck  # wajib bersih
```

Agent wajib menjalankan `build`, `lint`, dan `typecheck` di akhir setiap task, dan melaporkan hasilnya. Tidak boleh menandai task selesai kalau salah satu gagal.