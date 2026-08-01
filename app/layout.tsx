import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { getContent } from "@/lib/content";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/*
 * Panggil loader konten saat modul dimuat. Efeknya:
 * - Setiap file content/*.ts divalidasi terhadap skema Zod.
 * - Setiap sourceId di timeline/policies/quotes dicek silang
 *   dengan sources.ts. Build gagal jika ada yang tidak terdaftar.
 * - Komponen tidak memakai hasilnya; yang penting adalah
 *   side-effect validasi.
 *
 * Letakkan di top-level (bukan di dalam komponen) agar Next.js
 * menjadikannya bagian dari static rendering pipeline.
 */
getContent();

/*
 * Dua keluarga font, self-hosted via next/font (R9.5).
 * Inter = teks badan. Instrument Serif = judul.
 * Dipasang sebagai CSS variable agar Tailwind bisa merujuknya.
 */
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-serif",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arsip Biografis",
    template: "%s · Arsip Biografis",
  },
  description:
    "Arsip biografis tidak resmi untuk tokoh publik Indonesia. Disusun untuk tujuan edukasi dan portofolio.",
  openGraph: {
    type: "website",
    siteName: "Arsip Biografis",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        {/*
          R7.4: Tautan lewati-ke-konten sebagai elemen fokus pertama
          saat pengguna menekan Tab dari awal halaman.
        */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Lewati ke konten
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
