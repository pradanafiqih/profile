import Link from "next/link";

/*
 * 404 khusus. Tidak boleh punya <main id="main"> sendiri karena
 * Next.js merender page ini di dalam slot {children} layout yang
 * sudah memiliki <main id="main">. Pakai <section> + aria-labelledby.
 */
export default function NotFound() {
  return (
    <section
      aria-labelledby="notfound-title"
      className="mx-auto max-w-content px-6 py-section-mobile md:py-section"
    >
      <div className="border-t border-rule pt-section-mobile md:pt-section">
        <h1
          id="notfound-title"
          className="font-serif text-lg leading-tight md:text-xl"
        >
          Halaman tidak ditemukan
        </h1>
        <p className="prose-body mt-6 text-base text-ink-muted">
          Tautan yang Anda buka tidak mengarah ke halaman yang tersedia di
          arsip ini.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <Link
              className="underline decoration-rule underline-offset-4 hover:text-accent"
              href="/"
            >
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
          <li>
            <Link
              className="underline decoration-rule underline-offset-4 hover:text-accent"
              href="/timeline"
            >
              Linimasa
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
