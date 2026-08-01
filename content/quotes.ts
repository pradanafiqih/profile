import type { Quote } from "./schema";

/*
 * Kutipan langsung bersumber (R6).
 *
 * Semua kutipan diverifikasi dari artikel Wikipedia bahasa Indonesia
 * (diakses 2026-08-01) — teks, tanggal, dan tempat. Tidak ada
 * kutipan yang dikarang dari memori umum.
 *
 * Sumber terdaftar di content/sources.ts; kutipan WAJIB punya minimal
 * satu `sourceIds` (R1.3).
 */
export const quotes: Quote[] = [
  {
    id: "q-pilkada-langsung-2014",
    text: "Pilkada langsung, pada prinsipnya, tidak dapat dinegosiasikan.",
    speaker: "Joko Widodo",
    date: "2014-12-05",
    context:
      "Pernyataan saat merespons upaya pencabutan Perppu pilkada oleh DPR awal masa jabatan pertamanya.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    id: "q-kedaulatan-natuna-2017",
    text: "Tidak akan ada kompromi mengenai kedaulatan.",
    speaker: "Joko Widodo",
    date: "2017-04-21",
    context:
      "Pernyataan terkait sengketa wilayah di Laut Natuna, merespons klaim sembilan garis putus-putus Tiongkok.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    id: "q-trisakti-2015",
    text: "Berdaulat di bidang politik, berdikari di bidang ekonomi, dan berkepribadian nasional dalam bidang kebudayaan.",
    speaker: "Joko Widodo",
    date: "2015-09-21",
    context:
      "Pernyataan tentang ideology kepresidenan, mengutip trisakti Bung Karno. Disampaikan dalam wawancara media.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    id: "q-uu-cipta-kerja-2020",
    text: "Undang-undang ini diperlukan untuk menciptakan lapangan kerja.",
    speaker: "Joko Widodo",
    date: "2020-10-12",
    context:
      "Pembelaan atas Undang-Undang Cipta Kerja di tengah protes besar dari serikat pekerja dan mahasiswa.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-bbc-indonesia"],
  },
];
