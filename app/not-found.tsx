import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-content px-6 py-section-mobile md:py-section">
      <div className="border-t border-rule pt-section-mobile md:pt-section">
        <p className="font-serif text-2xl">Halaman tidak ditemukan</p>
        <p className="mt-6 max-w-prose text-base text-ink-muted">
          Tautan yang Anda buka tidak mengarah ke halaman yang tersedia di
          arsip ini.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <Link className="underline decoration-rule underline-offset-4 hover:text-accent" href="/">
              Beranda
            </Link>
          </li>
          <li>
            <Link
              className="underline decoration-rule underline-offset-4 hover:text-accent"
              href="/policies"
            >
              Indeks kebijakan
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
