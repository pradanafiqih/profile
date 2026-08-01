import { getContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { FigureImage } from "@/components/content/figure-image";

/*
 * Galeri (R5).
 *
 * - R5.1: seluruh gambar dari content/media.ts dalam tata letak grid.
 * - R5.2: kredit fotografer + lisensi tampil PERSISTEN (sudah
 *   ditangani FigureImage).
 * - R5.3: width/height eksplisit (sudah di FigureImage).
 * - R5.4: alt deskriptif (sudah di FigureImage).
 * - R5.5: klik gambar buka sourceUrl di tab baru (prop clickable).
 * - R5.6: src adalah path lokal /images/..., tidak ada hotlink.
 *
 * Empty-state: kalau media[] kosong, tampilkan pesan dan tautan ke
 * halaman Tentang (R10.3).
 */

export const metadata = buildMetadata({
  title: "Galeri",
  description:
    "Dokumentasi visual tokoh publik Indonesia dengan atribusi fotografer, lisensi, dan tautan ke sumber asli.",
  path: "/gallery",
});

export default function GalleryPage() {
  const { media } = getContent();

  if (media.length === 0) {
    return (
      <Container>
        <section
          aria-labelledby="gallery-title"
          className="border-t border-rule pt-section-mobile md:pt-section"
        >
          <h1
            id="gallery-title"
            className="font-serif text-2xl leading-tight md:text-3xl"
          >
            Galeri
          </h1>
          <p className="prose-body mt-6 max-w-prose text-base text-ink-muted">
            Belum ada gambar yang ditambahkan ke arsip ini.
          </p>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section
        aria-labelledby="gallery-title"
        className="border-t border-rule pt-section-mobile md:pt-section"
      >
        <h1
          id="gallery-title"
          className="font-serif text-2xl leading-tight md:text-3xl"
        >
          Galeri
        </h1>
        <p className="prose-body mt-6 max-w-prose text-base text-ink-muted">
          Dokumentasi visual dengan atribusi lengkap. Klik gambar
          untuk membuka sumber aslinya.
        </p>

        <ul className="mt-section-mobile grid grid-cols-1 gap-12 md:mt-10 md:grid-cols-2">
          {media.map((item) => (
            <li key={item.id}>
              <FigureImage item={item} clickable />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}