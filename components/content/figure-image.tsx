import Image from "next/image";
import Link from "next/link";

import type { MediaItem } from "@/content/schema";

/*
 * FigureImage (R5.2, R5.3, R5.4).
 *
 * - Render `next/image` dengan `width`/`height` eksplisit dari
 *   MediaItem, mencegah layout shift (R5.3).
 * - Atribusi tampil PERSISTEN di bawah gambar, bukan hanya saat
 *   hover (R5.2). Klik kredit membuka `sourceUrl` di tab baru.
 * - `alt` deskriptif wajib dari `MediaItem.alt` (R5.4).
 *
 * Server Component. Tidak memuat string spesifik tokoh (R10.2):
 * label "Kredit", "Lisensi" generik.
 */
export function FigureImage({ item }: { item: MediaItem }) {
  return (
    <figure className="border-t border-rule pt-6">
      <div className="overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="(min-width: 768px) 720px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-ink-muted">
        {item.caption ? (
          <span className="text-ink">{item.caption}</span>
        ) : null}
        <span>
          Kredit:{" "}
          <Link
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-rule underline-offset-4 hover:text-accent"
          >
            {item.credit}
          </Link>
        </span>
        <span aria-hidden="true">·</span>
        <span>{item.license}</span>
      </figcaption>
    </figure>
  );
}