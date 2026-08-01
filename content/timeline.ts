import type { TimelineEntry } from "./schema";

/*
 * Linimasa karier Joko Widodo (R3).
 *
 * Sumber: tanggal dan peristiwa diverifikasi dari artikel Wikipedia
 * bahasa Indonesia (diakses 2026-08-01) dan sumber resmi/berita yang
 * terdaftar di content/sources.ts. Setiap entri memuat `sourceIds`
 * minimal satu id yang valid (R1.4).
 *
 * Grup per periode jabatan (R3.4): walikota-surakarta,
 * gubernur-dki-jakarta, presiden-periode-1, presiden-periode-2.
 * Urutan kronologis naik (R3.1). Deskripsi netral, tanpa kata sifat
 * pujian, ≤ 80 kata (R3.2).
 */
export const timeline: TimelineEntry[] = [
  // ── Wali Kota Surakarta ─────────────────────────────────────────
  {
    id: "tl-pelantikan-walikota-2005",
    role: "walikota-surakarta",
    title: "Dilantik sebagai Wali Kota Surakarta",
    date: "2005-07-28",
    description:
      "Joko Widodo dilantik sebagai Wali Kota Surakarta periode 2005–2012. Sebelumnya ia berkarier sebagai pengusaha mebel dan lulus dari Fakultas Kehutanan Universitas Gadjah Mada pada 1985.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    id: "tl-terpilih-kembali-walikota-2010",
    role: "walikota-surakarta",
    title: "Terpilih kembali sebagai Wali Kota Surakarta",
    year: 2010,
    description:
      "Pada pemilihan Wali Kota Surakarta 2010, Joko Widodo terpilih kembali untuk periode kedua. Perolehan suaranya dilaporkan melebihi 90 persen.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    id: "tl-akhiri-jabatan-walikota-2012",
    role: "walikota-surakarta",
    title: "Mengakhiri masa jabatan Wali Kota Surakarta",
    date: "2012-10-01",
    description:
      "Joko Widodo mengakhiri masa jabatannya sebagai Wali Kota Surakarta per 1 Oktober 2012, digantikan oleh F.X. Hadi Rudyatmo. Sebelumnya ia telah dicalonkan sebagai calon Gubernur DKI Jakarta.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },

  // ── Gubernur DKI Jakarta ────────────────────────────────────────
  {
    id: "tl-pelantikan-gubernur-dki-2012",
    role: "gubernur-dki-jakarta",
    title: "Dilantik sebagai Gubernur DKI Jakarta",
    date: "2012-10-15",
    description:
      "Joko Widodo dilantik sebagai Gubernur DKI Jakarta periode 2012–2014, berpasangan dengan Basuki Tjahaja Purnama sebagai wakil gubernur. Pasangan ini memenangi pemilihan gubernur DKI dua putaran pada September 2012.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    id: "tl-mrt-jakarta-dimulai-2013",
    role: "gubernur-dki-jakarta",
    title: "Proyek MRT Jakarta resmi dimulai",
    date: "2013-10-10",
    description:
      "Proyek pembangunan MRT Jakarta resmi dimulai pada 10 Oktober 2013, dalam masa jabatan Joko Widodo sebagai Gubernur DKI Jakarta.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-kompas"],
  },
  {
    id: "tl-akhiri-jabatan-gubernur-2014",
    role: "gubernur-dki-jakarta",
    title: "Mengakhiri masa jabatan Gubernur DKI Jakarta",
    date: "2014-10-16",
    description:
      "Joko Widodo mengakhiri masa jabatannya sebagai Gubernur DKI Jakarta per 16 Oktober 2014 setelah terpilih sebagai Presiden Republik Indonesia. Basuki Tjahaja Purnama menggantikannya sebagai gubernur.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },

  // ── Presiden Periode I ──────────────────────────────────────────
  {
    id: "tl-mandat-capres-2014",
    role: "presiden-periode-1",
    title: "Ditetapkan sebagai calon presiden PDI-P",
    date: "2014-03-14",
    description:
      "Pada 14 Maret 2014, PDI-P memberikan mandat kepada Joko Widodo sebagai calon presiden untuk pemilihan umum 2014. Ia kemudian memilih Jusuf Kalla sebagai calon wakil presiden.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-kompas"],
  },
  {
    id: "tl-kpu-tetapkan-menang-pilpres-2014",
    role: "presiden-periode-1",
    title: "KPU menetapkan kemenangan Pilpres 2014",
    date: "2014-07-22",
    description:
      "KPU mengumumkan Joko Widodo–Jusuf Kalla sebagai pemenang Pilpres 2014 dengan perolehan 53,15 persen suara nasional. Lawannya, Prabowo Subianto, sebelumnya menarik diri dari proses penghitungan.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    id: "tl-pelantikan-presiden-2014",
    role: "presiden-periode-1",
    title: "Dilantik sebagai Presiden ke-7",
    date: "2014-10-20",
    description:
      "Joko Widodo dilantik sebagai Presiden Republik Indonesia ke-7 pada 20 Oktober 2014, menggantikan Susilo Bambang Yudhoyono. Ia adalah presiden pertama yang tidak berasal dari latar militer atau elite politik.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-presidenri-profil-jokowi"],
  },
  {
    id: "tl-pengumuman-kabinet-kerja-2014",
    role: "presiden-periode-1",
    title: "Mengumumkan Kabinet Kerja",
    date: "2014-10-26",
    description:
      "Joko Widodo mengumumkan susunan Kabinet Kerja berisi 34 menteri pada 26 Oktober 2014. Susunan kabinet mencakup menteri dari sejumlah partai politik dan kalangan profesional.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },

  // ── Presiden Periode II ─────────────────────────────────────────
  {
    id: "tl-pilpres-2019-menang",
    role: "presiden-periode-2",
    title: "Terpilih kembali dalam Pilpres 2019",
    date: "2019-04-17",
    description:
      "Pada pemilihan umum 17 April 2019, Joko Widodo kembali terpilih untuk masa jabatan kedua. Hitung cepat lembaga survei menunjukkan perolehan sekitar 54 persen; lawannya, Prabowo Subianto, menolak hasil tersebut.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-bbc-indonesia"],
  },
  {
    id: "tl-pelantikan-presiden-2019",
    role: "presiden-periode-2",
    title: "Dilantik untuk periode kedua",
    date: "2019-10-20",
    description:
      "Joko Widodo dilantik kembali sebagai presiden pada 20 Oktober 2019 untuk periode 2019–2024, berpasangan dengan Ma'ruf Amin sebagai wakil presiden. Kabinet periode kedua diumumkan pada 23 Oktober 2019.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-presidenri-profil-jokowi"],
  },
  {
    id: "tl-uu-cipta-kerja-2020",
    role: "presiden-periode-2",
    title: "UU Cipta Kerja disahkan",
    year: 2020,
    description:
      "Pada 2020, DPR mengesahkan Undang-Undang Cipta Kerja yang diajukan pemerintahan Joko Widodo. UU ini merevisi lebih dari 70 undang-undang dan memicu serangkaian protes di berbagai kota.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-bbc-indonesia"],
  },
  {
    id: "tl-ppkm-darurat-2021",
    role: "presiden-periode-2",
    title: "PPKM Darurat diberlakukan",
    date: "2021-07-01",
    description:
      "Pemerintah memberlakukan Pemberlakuan Pembatasan Kegiatan Masyarakat (PPKM) Darurat per 1 Juli 2021 sebagai respons terhadap lonjakan kasus COVID-19. Pengumuman disampaikan oleh Presiden Joko Widodo.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-setkab"],
  },
  {
    id: "tl-mulai-bekerja-ikn-2024",
    role: "presiden-periode-2",
    title: "Mulai bekerja dari Ibu Kota Nusantara",
    date: "2024-07-30",
    description:
      "Pada 30 Juli 2024, Joko Widodo mulai bekerja dari Ibu Kota Nusantara (IKN) di Kalimantan Timur di tengah pembangunan yang masih berlangsung. Rencana pemindahan ibu kota diumumkan pertama kali pada 2019.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    id: "tl-akhir-masa-jabatan-presiden-2024",
    role: "presiden-periode-2",
    title: "Mengakhiri masa jabatan presiden",
    date: "2024-10-20",
    description:
      "Joko Widodo mengakhiri masa jabatannya sebagai presiden pada 20 Oktober 2024, digantikan oleh Prabowo Subianto. Ia menjabat selama dua periode, dari 2014 hingga 2024.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-presidenri-profil-jokowi"],
  },
];
