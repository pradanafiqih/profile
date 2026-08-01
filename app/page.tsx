/*
 * Halaman beranda sementara.
 * Konten nyata (nama tokoh, ringkasan, foto, dll) dipasang pada Phase 4
 * setelah content/figure.ts dan SiteHeader/Footer siap.
 *
 * Aturan: tidak boleh menulis string spesifik tokoh di komponen ini (R10.2).
 */
export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-content px-6 py-section-mobile md:py-section">
      <div className="border-t border-rule pt-section-mobile md:pt-section">
        <p className="font-serif text-2xl leading-tight md:text-2xl">
          Arsip biografis
        </p>
        <p className="mt-6 max-w-prose text-base text-ink-muted">
          Situs ini sedang disiapkan. Kerangka fondasi sudah terpasang;
          halaman identitas tokoh, linimasa, kebijakan, galeri, dan tentang
          akan diisi pada task berikutnya.
        </p>
      </div>
    </main>
  );
}
