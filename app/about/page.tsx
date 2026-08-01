import Link from "next/link";

import { getContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";

/*
 * Halaman Tentang (R6).
 *
 * - R6.1: tujuan situs, metode pengumpulan data, kriteria pemilihan
 *   sumber.
 * - R6.2: daftar lengkap seluruh sumber dari sources.ts berisi
 *   judul, penerbit, tanggal, tautan.
 * - R6.3: tanggal pembaruan terakhir.
 * - R6.4: disclaimer ketidakberafiliasian secara utuh (anchor
 *   #penafian agar tautan footer berfungsi).
 *
 * Footer SiteFooter menaut ke /about#sumber dan /about#penafian —
 * section di bawah diberi id yang cocok.
 */

export const metadata = buildMetadata({
  title: "Tentang",
  description:
    "Tujuan arsip, metode pengumpulan data, kriteria sumber, dan disclaimer ketidakberafiliasian.",
  path: "/about",
});

// Tanggal pembaruan terakhir (R6.3). Di situs dinamis, ini biasanya
// waktu deploy; untuk situs statis, kami tulis tanggal hand-off
// terakhir kali konten diverifikasi.
const LAST_UPDATED = "2026-08-01";

export default function AboutPage() {
  const { sources } = getContent();

  return (
    <Container>
      <article className="border-t border-rule pt-section-mobile md:pt-section">
        <h1 className="font-serif text-2xl leading-tight md:text-3xl">
          Tentang arsip
        </h1>

        {/* R6.1 — tujuan & metode */}
        <section
          aria-labelledby="tujuan"
          className="prose-body mt-10 max-w-prose text-base"
        >
          <h2 id="tujuan" className="font-serif text-lg leading-tight">
            Tujuan dan metode
          </h2>
          <p className="mt-3">
            Arsip ini disusun sebagai dokumentasi terbuka perjalanan
            karier satu tokoh publik Indonesia, dengan standar editorial
            dan atribusi penuh. Tujuan utamanya bukan promosi atau
            penilaian, melainkan ketersediaan fakta yang dapat diverifikasi
            oleh siapa saja.
          </p>
          <p className="mt-3">
            Data dikumpulkan dari dokumen publik, pemberitaan arus utama,
            dan ensiklopedia yang merujuk ke sumber primer. Setiap
            klaim faktual yang muncul di halaman lain pada arsip ini
            dapat dilacak ke salah satu sumber di bawah.
          </p>
        </section>

        {/* R6.1 — kriteria sumber */}
        <section
          aria-labelledby="kriteria"
          className="prose-body mt-10 max-w-prose text-base"
        >
          <h2 id="kriteria" className="font-serif text-lg leading-tight">
            Kriteria pemilihan sumber
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <strong>Dokumen primer</strong>: teks undang-undang,
              peraturan presiden, rilis pers resmi, transkrip pidato.
            </li>
            <li>
              <strong>Media arus utama</strong>: media dengan byline dan
              tanggal terbit, seperti kantor berita dan surat kabar
              nasional.
            </li>
            <li>
              <strong>Ensiklopedia</strong>: Wikipedia hanya digunakan
              sebagai penunjuk ke sumber primer, bukan sebagai rujukan
              akhir.
            </li>
            <li>
              <strong>Tidak digunakan</strong>: blog tanpa byline, utas
              media sosial, dan konten yang dihasilkan sistem AI.
            </li>
          </ul>
        </section>

        {/* R6.4 — disclaimer (anchor yang dipakai footer) */}
        <section
          aria-labelledby="penafian"
          className="prose-body mt-10 max-w-prose text-base"
        >
          <h2 id="penafian" className="font-serif text-lg leading-tight">
            Penafian
          </h2>
          <p className="mt-3">
            Situs ini merupakan arsip biografis tidak resmi yang disusun
            untuk tujuan edukasi dan portofolio. Tidak berafiliasi dengan
            Joko Widodo, keluarganya, partai politik, atau institusi
            pemerintah manapun. Seluruh materi bersumber dari dokumen
            publik yang dirujuk pada bagian Sumber di bawah.
          </p>
        </section>

        {/* R6.2 — daftar lengkap sumber (anchor yang dipakai footer) */}
        <section
          aria-labelledby="sumber"
          className="prose-body mt-10 max-w-prose text-base"
        >
          <h2 id="sumber" className="font-serif text-lg leading-tight">
            Sumber
          </h2>
          <p className="mt-3">
            Daftar lengkap sumber yang dipakai pada arsip ini. Tanggal
            menunjukkan tanggal publikasi atau akses terakhir.
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {sources.map((source) => (
              <li
                key={source.id}
                className="border-t border-rule pt-3 leading-relaxed"
              >
                <Link
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-base text-ink underline decoration-rule underline-offset-4 hover:text-accent"
                >
                  {source.title}
                </Link>
                <div className="mt-1 text-xs text-ink-muted">
                  {source.publisher} · {source.date}
                  {source.tier === "encyclopedia-pointer"
                    ? " · penunjuk ensiklopedia"
                    : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* R6.3 — tanggal pembaruan */}
        <section
          aria-labelledby="pembaruan"
          className="prose-body mt-10 max-w-prose text-base"
        >
          <h2 id="pembaruan" className="font-serif text-lg leading-tight">
            Pembaruan terakhir
          </h2>
          <p className="mt-3 text-sm text-ink-muted">
            Konten terakhir diverifikasi: {LAST_UPDATED}.
          </p>
        </section>
      </article>
    </Container>
  );
}