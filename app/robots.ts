import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

/*
 * Robots (R8.6).
 *
 * Next.js App Router mem-build file ini dan mengeksposnya di
 * `/robots.txt`. Mengizinkan semua crawler utama, menunjuk ke
 * sitemap, dan melarang folder internal Next.js.
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}