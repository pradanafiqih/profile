import type { Metadata } from "next";

/*
 * SEO helper (R8.5).
 *
 * `buildMetadata()` menghasilkan objek `Metadata` Next.js dengan:
 * - Judul unik per halaman (pakai `template` "%s · Arsip Biografis"
 *   yang dipasang di root layout).
 * - `description` spesifik per halaman.
 * - `alternates.canonical` agar tidak duplikat sinyal ke mesin
 *   pencari.
 * - `openGraph` + `twitter` cards agar share link kaya.
 *
 * `nextUrl()` membentuk URL absolut dari path relatif, dipakai untuk
 * OG image dan canonical. Memakai `NEXT_PUBLIC_SITE_URL` dengan
 * fallback aman.
 *
 * Tidak ada string spesifik tokoh di sini — server mengikuti R10.2.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app";

export const SITE_NAME = "Arsip Biografis";
export const SITE_DESCRIPTION =
  "Arsip biografis tidak resmi untuk tokoh publik Indonesia. Disusun untuk tujuan edukasi dan portofolio.";

export function nextUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function buildMetadata({
  title,
  description,
  path,
  imagePath,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  type?: "website" | "article";
}): Metadata {
  const url = nextUrl(path);
  const ogImage = nextUrl(imagePath ?? "/og-default.png");
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      locale: "id_ID",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}