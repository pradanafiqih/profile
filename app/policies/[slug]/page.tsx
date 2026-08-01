import Link from "next/link";
import { notFound } from "next/navigation";

import { getContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { SourceList } from "@/components/content/source-list";

/*
 * Halaman detail kebijakan (R4).
 *
 * - R4.2: latar belakang, isi, tanggal kunci, daftar sumber lengkap.
 * - R4.3: perdebatan publik di section terpisah, tanpa kesimpulan
 *   penulis.
 * - R4.4: slug tidak valid → `notFound()` dari Next.js, yang
 *   me-render app/not-found.tsx (sudah 404 kustom dengan tautan
 *   balik ke beranda + indeks kebijakan).
 * - R4.5: halaman distatis pada build via `generateStaticParams`.
 * - R4.6: bahasa deskriptif; tanpa string spesifik tokoh
 *   hardcode — semua dari content/policies.ts.
 */

export function generateStaticParams() {
  const { policies } = getContent();
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { policies } = getContent();
  const policy = policies.find((p) => p.slug === slug);
  if (!policy) {
    return buildMetadata({
      title: "Kebijakan tidak ditemukan",
      description: "Slug kebijakan tidak terdaftar.",
      path: "/policies/" + slug,
    });
  }
  return buildMetadata({
    title: policy.title,
    description: policy.summary,
    path: "/policies/" + slug,
  });
}

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { policies, sources } = getContent();
  const policy = policies.find((p) => p.slug === slug);
  if (!policy) notFound();

  return (
    <Container>
      <article
        aria-labelledby="policy-title"
        className="border-t border-rule pt-section-mobile md:pt-section"
      >
        <p className="font-serif text-sm leading-tight text-accent">
          {policy.year}
        </p>
        <h1
          id="policy-title"
          className="mt-3 font-serif text-2xl leading-tight md:text-3xl"
        >
          {policy.title}
        </h1>
        <p className="prose-body mt-6 max-w-prose text-base">{policy.summary}</p>

        <section
          aria-labelledby="bg"
          className="prose-body mt-10 max-w-prose text-base"
        >
          <h2 id="bg" className="font-serif text-lg leading-tight">
            Latar belakang
          </h2>
          <p className="mt-3">{policy.background}</p>
        </section>

        <section
          aria-labelledby="body"
          className="prose-body mt-10 max-w-prose text-base"
        >
          <h2 id="body" className="font-serif text-lg leading-tight">
            Isi kebijakan
          </h2>
          <p className="mt-3">{policy.body}</p>
        </section>

        {policy.keyDates.length > 0 ? (
          <section
            aria-labelledby="dates"
            className="prose-body mt-10 max-w-prose text-base"
          >
            <h2 id="dates" className="font-serif text-lg leading-tight">
              Tanggal kunci
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {policy.keyDates.map((kd) => (
                <li key={kd.date} className="flex gap-x-3">
                  <time className="font-serif text-sm text-accent">
                    {kd.date}
                  </time>
                  <span>{kd.label}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {policy.debate ? (
          <section
            aria-labelledby="debate"
            className="prose-body mt-10 max-w-prose text-base"
          >
            <h2 id="debate" className="font-serif text-lg leading-tight">
              Perdebatan publik
            </h2>
            <p className="mt-3 text-ink-muted">{policy.debate}</p>
            <p className="mt-3 text-xs text-ink-muted">
              Disajikan sebagai peristiwa + rentang tanggal + sumber
              pemberitaan, tanpa kesimpulan penulis.
            </p>
          </section>
        ) : null}

        <div className="mt-10">
          <SourceList
            sources={sources}
            sourceIds={policy.sourceIds}
            title="Sumber kebijakan"
          />
        </div>

        <div className="mt-10 border-t border-rule pt-6">
          <Link
            href="/policies"
            className="text-sm text-ink underline decoration-rule underline-offset-4 hover:text-accent"
          >
            ← Kembali ke indeks kebijakan
          </Link>
        </div>
      </article>
    </Container>
  );
}