import Link from "next/link";

import { getContent } from "@/lib/content";

/*
 * SiteFooter (R6.4, R7.3).
 *
 * Disclaimer ketidakberafiliasian Wajib tampil utuh di setiap
 * halaman (content-integrity.md). Nama tokoh dibaca dari
 * `content/figure.ts` (bukan hardcode) agar portabel: mengganti
 * tokoh = mengganti isi content/ saja, tanpa sentuh komponen
 * (R10.1, R10.2).
 *
 * Server Component murni.
 */

export function SiteFooter() {
  const { figure } = getContent();
  return (
    <footer className="border-t border-rule bg-paper-alt">
      <div className="mx-auto w-full max-w-content px-6 py-section-mobile md:py-12">
        <p className="prose-body text-sm text-ink-muted">
          Situs ini merupakan arsip biografis tidak resmi yang disusun
          untuk tujuan edukasi dan portofolio. Tidak berafiliasi dengan{" "}
          {figure.name}, keluarganya, partai politik, atau institusi
          pemerintah manapun. Seluruh materi bersumber dari dokumen
          publik yang dirujuk pada halaman Sumber.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
          <li>
            <Link
              href="/about#sumber"
              className="underline decoration-rule underline-offset-4 hover:text-accent"
            >
              Sumber
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="underline decoration-rule underline-offset-4 hover:text-accent"
            >
              Metodologi
            </Link>
          </li>
          <li>
            <Link
              href="/about#penafian"
              className="underline decoration-rule underline-offset-4 hover:text-accent"
            >
              Penafian lengkap
            </Link>
          </li>
        </ul>
        <p className="mt-8 text-xs text-ink-muted">
          Arsip statis. Tanpa iklan, donasi, atau afiliasi.
        </p>
      </div>
    </footer>
  );
}