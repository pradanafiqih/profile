import type { Source } from "./schema";

/*
 * Registry sumber (R6.2, R1.4).
 *
 * Prinsip content-integrity:
 * - Tier "primary": dokumen primer (teks UU, Perpres, rilis pers resmi,
 *   transkrip pidato).
 * - Tier "secondary": media arus utama dengan byline dan tanggal.
 * - Tier "encyclopedia-pointer": Wikipedia HANYA penunjuk ke sumber
 *   primer; tidak boleh jadi sumber final.
 * - Blog, thread media sosial, konten AI: DILARANG.
 *
 * `date` di sini = tanggal akses terakhir untuk sumber registri
 * (homepage/ensiklopedia yang terus diperbarui). Saat sebuah fakta
 * (task 2.3–2.5) merujuk artikel spesifik, tanggal publikasi artikel
 * dicatat di entri fakta/artikel terkait — lihat TODO_FACT.
 */
export const sources: Source[] = [
  {
    id: "src-wikipedia-joko-widodo",
    title: "Joko Widodo (Wikipedia bahasa Indonesia)",
    publisher: "Wikipedia",
    date: "2026-08-01", // tanggal akses terakhir
    url: "https://id.wikipedia.org/wiki/Joko_Widodo",
    tier: "encyclopedia-pointer",
  },
  {
    id: "src-presidenri-profil-jokowi",
    title: "Profil Presiden Joko Widodo — presidenri.go.id",
    publisher: "Sekretariat Negara RI",
    date: "2026-08-01",
    url: "https://www.presidenri.go.id/presiden-joko-widodo/",
    tier: "primary",
  },
  {
    id: "src-setkab",
    title: "Sekretariat Kabinet Republik Indonesia — rilis resmi",
    publisher: "Sekretariat Kabinet RI",
    date: "2026-08-01",
    url: "https://setkab.go.id/",
    tier: "primary",
  },
  {
    id: "src-antara",
    title: "ANTARA News — Lembaga Kantor Berita Nasional",
    publisher: "ANTARA",
    date: "2026-08-01",
    url: "https://www.antaranews.com/",
    tier: "secondary",
  },
  {
    id: "src-kompas",
    title: "KOMPAS.com",
    publisher: "Kompas Gramedia",
    date: "2026-08-01",
    url: "https://www.kompas.com/",
    tier: "secondary",
  },
  {
    id: "src-bbc-indonesia",
    title: "BBC News Indonesia",
    publisher: "BBC",
    date: "2026-08-01",
    url: "https://www.bbc.com/indonesia",
    tier: "secondary",
  },
  {
    id: "src-tempo",
    title: "Tempo.co",
    publisher: "Tempo",
    date: "2026-08-01",
    url: "https://www.tempo.co/",
    tier: "secondary",
  },
];
