import Link from "next/link";

import type { Policy } from "@/content/schema";

/*
 * PolicyCard (R2.4, R4.1, R4.2).
 *
 * Dua variant:
 * - "compact" untuk homepage: judul, tahun, ringkasan 1 kalimat,
 *   tautan ke halaman detail.
 * - "full" untuk halaman /policies dan /policies/[slug]: judul,
 *   tahun, ringkasan, lalu "Latar belakang" dan "Isi kebijakan".
 *   Untuk halaman indeks, ringkasan sudah cukup; untuk halaman
 *   detail, tampilkan juga latar belakang dan isi.
 *
 * Server Component. Tidak memuat string spesifik tokoh (R10.2):
 * label "Tahun", "Baca selengkapnya" generik.
 */

export function PolicyCard({
  policy,
  variant = "compact",
}: {
  policy: Policy;
  variant?: "compact" | "full";
}) {
  const href = "/policies/" + policy.slug;
  return (
    <article className="border-t border-rule pt-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-serif text-sm leading-tight text-accent">
          {policy.year}
        </span>
      </div>
      <h3 className="mt-2 font-serif text-base leading-snug">{policy.title}</h3>
      <p className="prose-body mt-2 text-sm text-ink-muted">{policy.summary}</p>

      {variant === "compact" ? (
        <p className="mt-3 text-xs">
          <Link
            href={href}
            className="text-ink underline decoration-rule underline-offset-4 hover:text-accent"
          >
            Baca selengkapnya
          </Link>
        </p>
      ) : (
        <>
          {policy.background ? (
            <section
              aria-labelledby={"bg-" + policy.slug}
              className="prose-body mt-4 text-sm"
            >
              <h4
                id={"bg-" + policy.slug}
                className="font-serif text-sm leading-tight"
              >
                Latar belakang
              </h4>
              <p className="mt-2 text-ink-muted">{policy.background}</p>
            </section>
          ) : null}
          {policy.body ? (
            <section
              aria-labelledby={"body-" + policy.slug}
              className="prose-body mt-4 text-sm"
            >
              <h4
                id={"body-" + policy.slug}
                className="font-serif text-sm leading-tight"
              >
                Isi kebijakan
              </h4>
              <p className="mt-2 text-ink-muted">{policy.body}</p>
            </section>
          ) : null}
          {policy.debate ? (
            <section
              aria-labelledby={"debate-" + policy.slug}
              className="prose-body mt-4 text-sm"
            >
              <h4
                id={"debate-" + policy.slug}
                className="font-serif text-sm leading-tight"
              >
                Perdebatan publik
              </h4>
              <p className="mt-2 text-ink-muted">{policy.debate}</p>
            </section>
          ) : null}
        </>
      )}
    </article>
  );
}