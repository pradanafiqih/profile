import type { MediaItem } from "./schema";

/*
 * Item media (gambar + atribusi) (R5).
 *
 * Semua foto diambil dari Wikimedia Commons, berstatus public domain
 * di Indonesia (Pasal 43 UU 28/2014 — PD-IDGov) karena diterbitkan
 * oleh lembaga pemerintah. Metadata (kredit, dimensi, tanggal)
 * diverifikasi langsung dari halaman Commons pada 2026-08-01.
 *
 * `src` adalah path lokal (R5.6 — tidak hotlink). Berkas gambar
 * aktual di `public/images/` belum diunduh; TODO_FACT: unduh dari
 * sourceUrl sebelum rilis final agar galeri tidak menampilkan
 * gambar rusak.
 */
export const media: MediaItem[] = [
  {
    id: "media-portrait-2014",
    src: "/images/portrait/joko-widodo-2014.jpg",
    alt: "Potret resmi Joko Widodo sebagai Presiden RI periode 2014, mengenakan jas dan peci hitam di depan bendera merah putih.",
    credit: "Pemerintah Indonesia",
    license: "Public Domain (Pasal 43 UU 28/2014)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Joko_Widodo_2014_official_portrait.jpg",
    width: 2000,
    height: 2509,
    category: "portrait",
    caption: "Potret resmi presiden, 2014.",
  },
  {
    id: "media-portrait-2019",
    src: "/images/portrait/joko-widodo-2019.jpg",
    alt: "Potret resmi Joko Widodo sebagai Presiden RI periode 2019–2024, mengenakan jas dan peci hitam di depan bendera merah putih.",
    credit: "Kementerian Sekretariat Negara RI",
    license: "Public Domain (Pasal 43 UU 28/2014)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Joko_Widodo_2019_official_portrait.jpg",
    width: 1200,
    height: 1443,
    category: "portrait",
    caption: "Potret resmi presiden, 2019.",
  },
  {
    id: "media-portrait-walikota-2005",
    src: "/images/portrait/joko-widodo-walikota-surakarta.jpg",
    alt: "Potret resmi Joko Widodo sebagai Wali Kota Surakarta, mengenakan jas dan peci hitam.",
    credit: "Pemerintah Kota Surakarta",
    license: "Public Domain (Pasal 43 UU 28/2014)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Official_Portrait_of_Joko_Widodo_as_the_Mayor_of_Surakarta.jpg",
    width: 428,
    height: 594,
    category: "portrait",
    caption: "Potret resmi sebagai Wali Kota Surakarta, 2005.",
  },
  {
    id: "media-portrait-gubernur-2012",
    src: "/images/portrait/joko-widodo-gubernur-dki.jpg",
    alt: "Potret resmi Joko Widodo sebagai Gubernur DKI Jakarta, mengenakan jas dan peci hitam.",
    credit: "Pemerintah Provinsi DKI Jakarta",
    license: "Public Domain (Pasal 43 UU 28/2014)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gubernur_DKI_Joko_Widodo.jpg",
    width: 2362,
    height: 3543,
    category: "portrait",
    caption: "Potret resmi sebagai Gubernur DKI Jakarta, 2012.",
  },
  {
    id: "media-blusukan-2013",
    src: "/images/event/jokowi-blusukan.jpg",
    alt: "Joko Widodo berbincang dengan warga saat kunjungan blusukan sebagai Gubernur DKI Jakarta.",
    credit: "Pemerintah Provinsi DKI Jakarta",
    license: "Public Domain (Pasal 43 UU 28/2014)",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jokowi_blusukan.jpg",
    width: 4256,
    height: 2832,
    category: "event",
    caption: "Jokowi blusukan, 2013.",
  },
  {
    id: "media-cop26-glasgow-2021",
    src: "/images/event/jokowi-cop26-glasgow.jpg",
    alt: "Joko Widodo menyampaikan pidato di KTT Perubahan Iklim COP26 di Glasgow, Skotlandia, 1 November 2021.",
    credit: "Biro Pers, Media, dan Informasi Sekretariat Presiden",
    license: "Public Domain (Pasal 43 UU 28/2014)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Joko_Widodo_at_the_opening_ceremony_of_COP26_(10).jpg",
    width: 4000,
    height: 2991,
    category: "event",
    caption: "Pidato pada pembukaan COP26, 1 November 2021.",
  },
];
