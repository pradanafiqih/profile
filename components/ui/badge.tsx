import type { ReactNode } from "react";

/**
 * Label kecil (penanda tahun, kategori, dll). Netral: border --rule,
 * teks --ink-muted. Aksen tidak dipaksakan di sini — pemanggil boleh
 * menambahkannya hanya untuk penanda (design-system: aksen maks 3x).
 */
export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border border-rule px-2 py-0.5 text-xs leading-relaxed text-ink-muted ${className}`}
    >
      {children}
    </span>
  );
}
