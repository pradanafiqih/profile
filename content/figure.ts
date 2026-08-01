import type { Figure } from "./schema";

/*
 * Identitas tokoh — Joko Widodo.
 *
 * Hanya fakta publik yang telah diverifikasi masuk di sini.
 * TODO_FACT menandai bagian yang akan dilengkapi di Task 2.1.
 * Prinsip: jangan menebak, jangan menambah angka/tanggal yang belum
 * bisa dirujuk ke sumber primer.
 */
export const figure: Figure = {
  slug: "joko-widodo",
  name: "Joko Widodo",
  role: "Presiden Republik Indonesia ke-7",
  term: {
    // TODO_FACT: verifikasi tanggal pelantikan ke sumber primer
    //            (BPMI Setpres / berita pelantikan) sebelum rilis final.
    start: "2014-10-20",
    end: "2024-10-20",
  },
  // TODO_FACT: ringkasan ≤ 60 kata akan diperluas di Task 2.1 dengan
  //            detail karier pra-presiden setelah tanggal spesifik
  //            divalidasi.
  summary:
    "Presiden Republik Indonesia ke-7 yang menjabat dari 2014 hingga 2024. Sebelumnya berkarier sebagai Wali Kota Surakarta dan Gubernur DKI Jakarta.",
};
