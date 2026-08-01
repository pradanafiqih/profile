import { getContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { PolicyCard } from "@/components/content/policy-card";

/*
 * Indeks kebijakan publik (R4.1).
 *
 * Menampilkan judul, tahun, dan ringkasan satu kalimat untuk
 * seluruh kebijakan. Tautan "Baca selengkapnya" membuka halaman
 * detail per slug (R4.5 slug stabil).
 */

export const metadata = buildMetadata({
  title: "Kebijakan",
  description:
    "Indeks kebijakan publik yang dirujuk ke pemerintahan Joko Widodo, dengan ringkasan, latar belakang, dan perdebatan.",
  path: "/policies",
});

export default function PoliciesIndexPage() {
  const { policies } = getContent();

  return (
    <Container>
      <section
        aria-labelledby="policies-title"
        className="border-t border-rule pt-section-mobile md:pt-section"
      >
        <h1
          id="policies-title"
          className="font-serif text-2xl leading-tight md:text-3xl"
        >
          Indeks kebijakan
        </h1>
        <p className="prose-body mt-6 max-w-prose text-base text-ink-muted">
          Daftar kebijakan publik yang terkait pemerintahan Joko Widodo,
          dengan ringkasan singkat. Halaman detail memuat latar
          belakang, isi, dan perdebatan publik jika terdokumentasi.
        </p>

        <div className="mt-section-mobile flex flex-col gap-8 md:mt-10">
          {policies.map((policy) => (
            <PolicyCard key={policy.slug} policy={policy} variant="compact" />
          ))}
        </div>
      </section>
    </Container>
  );
}