import type { ReactNode } from "react";

/**
 * Wadah teks badan. Menggunakan class `.prose-body` dari globals.css:
 * max-width 68ch dan line-height 1.6 (R9.4). Server Component.
 */
export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`prose-body ${className}`}>{children}</div>;
}
