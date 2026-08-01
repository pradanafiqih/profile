"use client";

// Client Component karena `aria-current` butuh `usePathname()` dari
// `next/navigation`. App Router tidak menyediakan pathname ke root
// Server Component secara native; alternatifnya middleware + headers(),
// tapi untuk satu nav tautan statis, `usePathname` lebih sederhana.

import Link from "next/link";
import { usePathname } from "next/navigation";

/*
 * SiteHeader (R7.1, R7.2, R7.5).
 *
 * - Nav: Linimasa, Kebijakan, Galeri, Tentang (4 tautan).
 * - `aria-current="page"` di tautan yang sesuai dengan pathname.
 * - Tidak pakai menu hamburger JS: di mobile nav tetap ditampilkan
 *   horizontal (overflow-x-auto), jadi R7.5 (tanpa JavaScript
 *   untuk membuka nav) terpenuhi.
 * - Server Component murni, tanpa string spesifik tokoh (R10.2):
 *   label "Arsip Biografis" adalah nama situs generik.
 */

const NAV_ITEMS = [
  { href: "/timeline", label: "Linimasa" },
  { href: "/policies", label: "Kebijakan" },
  { href: "/gallery", label: "Galeri" },
  { href: "/about", label: "Tentang" },
] as const;

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  return (
    <header className="border-b border-rule bg-paper">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="font-serif text-base leading-tight text-ink hover:text-accent"
        >
          Arsip Biografis
        </Link>
        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-x-6 overflow-x-auto text-sm">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-ink underline decoration-accent decoration-2 underline-offset-4"
                        : "text-ink-muted hover:text-accent"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}