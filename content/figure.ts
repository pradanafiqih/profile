import type { Figure } from "./schema";

/*
 * Identitas tokoh — Joko Widodo.
 *
 * Hanya fakta yang dapat diverifikasi dari sumber publik yang
 * masuk di sini. Ringkasan dijaga ≤ 60 kata, netral, tanpa kata
 * sifat pujian (content-integrity.md).
 *
 * TODO_FACT menandai data yang masih perlu dirujuk ke sumber
 * primer sebelum situs dirilis.
 */
export const figure: Figure = {
  slug: "joko-widodo",
  name: "Joko Widodo",
  role: "Presiden Republik Indonesia ke-7",
  term: {
    // TODO_FACT: verifikasi tanggal pelantikan (2014-10-20 dan
    //            2024-10-20) ke sumber primer sebelum rilis final.
    start: "2014-10-20",
    end: "2024-10-20",
  },
  summary:
    "Presiden Republik Indonesia ke-7, menjabat 2014–2024. Sebelum menjadi presiden, ia bekerja sebagai pengusaha mebel, lalu menjabat Wali Kota Surakarta dan Gubernur DKI Jakarta. Kariernya dari kepala daerah menjadi kepala negara berlangsung dalam waktu sekitar satu dekade.",
};
