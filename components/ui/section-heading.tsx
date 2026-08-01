import type { ReactNode } from "react";

/**
 * Judul seksi: serif, skala 24px mobile / 32px desktop, leading 1.1.
 * Opsional `id` untuk anchor. Tidak memuat string konten (R10).
 */
export function SectionHeading({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`font-serif text-lg leading-tight md:text-xl ${className}`}
    >
      {children}
    </h2>
  );
}
