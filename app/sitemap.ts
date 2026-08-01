import type { MetadataRoute } from "next";

import { getContent } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

/*
 * Sitemap (R8.6).
 *
 * Next.js App Router mem-build file ini saat `next build` dan
 * mengeksposnya di `/sitemap.xml`. Memasukkan semua halaman statis
 * dari App Router dan halaman detail kebijakan (5 slug dari
 * generateStaticParams).
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const { policies } = getContent();
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/timeline`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/policies`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const policyPages: MetadataRoute.Sitemap = policies.map((p) => ({
    url: `${SITE_URL}/policies/${p.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticPages, ...policyPages];
}