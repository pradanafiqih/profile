import type { ReactNode } from "react";

/**
 * Pembungkus konten halaman: lebar maksimal 1120px, padding 24px
 * di mobile. Server Component murni, tanpa string konten (R10).
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 ${className}`}>
      {children}
    </div>
  );
}
