import type { Policy } from "./schema";

/*
 * Kebijakan publik masa pemerintahan Joko Widodo (R4).
 *
 * Sumber: fakta diverifikasi dari artikel Wikipedia bahasa Indonesia
 * (diakses 2026-08-01) dan sumber yang terdaftar di content/sources.ts.
 * Slug stabil untuk URL (R4.5). Bahasa deskriptif, bukan evaluatif
 * (R4.6). `debate` hanya diisi bila perdebatan publik terdokumentasi,
 * tanpa kesimpulan penulis (R4.3).
 *
 * TODO_FACT menandai tanggal/klaim yang belum diverifikasi.
 */
export const policies: Policy[] = [
  {
    slug: "uu-cipta-kerja",
    title: "Undang-Undang Cipta Kerja",
    year: 2020,
    summary:
      "Omnibus law yang merevisi lebih dari 70 undang-undang untuk menyederhanakan regulasi ketenagakerjaan dan investasi, disahkan DPR pada 2020.",
    background:
      "Rancangan diajukan pemerintahan Joko Widodo setelah terpilih kembali pada 2019. UU ini dimaksudkan untuk meningkatkan investasi dan mengurangi birokrasi.",
    body: "UU ini merevisi lebih dari 70 undang-undang dan memuat sekitar 1.200 klausul, termasuk perubahan pada aturan ketenagakerjaan, lingkungan hidup, dan perizinan. Joko Widodo menyatakan UU ini diperlukan untuk menciptakan lapangan kerja.",
    // Terverifikasi: DPR menyetujui 5 Okt 2020; diundangkan 2 Nov 2020
    // sebagai UU No. 11 Tahun 2020 (pengesahan, bukan "tahun 2020" saja).
    keyDates: [
      {
        date: "2020-10-05",
        label: "DPR menyetujui RUU menjadi UU",
      },
      {
        date: "2020-11-02",
        label: "Diundangkan sebagai UU No. 11 Tahun 2020",
      },
    ],
    debate:
      "UU ini dianggap melemahkan perlindungan tenaga kerja dan lingkungan hidup, sehingga memicu serangkaian protes di kota-kota besar. Joko Widodo membela UU tersebut dan meminta para pengunjuk rasa mengajukan gugatan ke Mahkamah Konstitusi.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-bbc-indonesia"],
  },
  {
    slug: "pembangunan-infrastruktur",
    title: "Pembangunan infrastruktur",
    year: 2016,
    summary:
      "Program besar pembangunan jalan, kereta api, pelabuhan, bandara, dan irigasi yang menjadi fokus pemerintahan 2014–2024.",
    background:
      "Pembangunan infrastruktur menjadi fitur penting pemerintahan Joko Widodo, dengan fokus pada perluasan jalan dan kereta api, pembangunan pelabuhan dan bandara, serta irigasi.",
    body: "Pada 2016, anggaran negara mengalokasikan Rp290 triliun untuk infrastruktur, jumlah terbesar dalam sejarah Indonesia. Secara total, pemerintahan merencanakan 265 proyek infrastruktur mulai 2016, termasuk penyelesaian Jalan Tol Trans-Jawa dan Trans Papua sepanjang 4.325 kilometer.",
    // Catatan: fakta ini bersifat tahunan (alokasi APBN 2016), tidak
    // terikat tanggal tunggal; `year: 2016` sudah cukup (R4.1).
    keyDates: [],
    debate:
      "Pihak oposisi mengkritik belanja infrastruktur yang agresif karena meningkatkan utang nasional Indonesia sebesar 48 persen antara 2014 dan Maret 2018.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    slug: "amnesti-pajak",
    title: "Amnesti Pajak",
    year: 2016,
    summary:
      "Program pengampunan pajak yang memberi kesempatan wajib pajak melaporkan aset yang belum dilaporkan, berlaku sejak 2016.",
    background:
      "Pada 2016, pemerintah menandatangani undang-undang amnesti pajak setelah perdebatan publik yang panjang dan penolakan.",
    body: "Program ini memberi kesempatan kepada wajib pajak untuk melaporkan aset yang sebelumnya tidak dilaporkan. Pemerintah menyatakan lebih dari Rp4.865 triliun aset dilaporkan selama program berjalan.",
    // Terverifikasi: program periode I dimulai 1 Juli 2016 (tarif 2%,
    // Juli-September 2016) hingga 31 Maret 2017.
    keyDates: [
      {
        date: "2016-07-01",
        label: "Program periode pertama dimulai",
      },
      {
        date: "2017-03-31",
        label: "Periode program berakhir",
      },
    ],
    debate:
      "Undang-undang ini disahkan setelah perdebatan publik yang panjang, termasuk penolakan dari sejumlah kalangan.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-kompas"],
  },
  {
    slug: "pemindahan-ibu-kota-nusantara",
    title: "Pemindahan Ibu Kota ke Nusantara",
    year: 2019,
    summary:
      "Rencana pemindahan ibu kota dari Jakarta ke Kalimantan Timur, diumumkan 2019 dan mulai digunakan pada 2024.",
    background:
      "Pada April 2019, pemerintah mengumumkan keputusan untuk memindahkan ibu kota dari Jakarta ke lokasi di luar Pulau Jawa.",
    body: "Pada 26 Agustus 2019, lokasi ibu kota baru diumumkan berada di Kalimantan Timur, antara Kabupaten Penajam Paser Utara dan Kutai Kartanegara, dengan nama Nusantara. Joko Widodo mulai bekerja dari lokasi tersebut pada 30 Juli 2024 di tengah pembangunan yang masih berlangsung.",
    // Terverifikasi (26 Agu 2019): berita resmi detik/Jakarta Post/CNN
    // bertanggal 26 Agustus 2019; tanggal lama 25 Agu di artikel Jokowi
    // adalah inkonsistensi yang sudah dikoreksi.
    keyDates: [
      {
        date: "2019-04-29",
        label: "Keputusan memindahkan ibu kota diumumkan",
      },
      {
        date: "2019-08-26",
        label: "Lokasi di Kalimantan Timur diumumkan",
      },
      {
        date: "2022-01-18",
        label: "UU No. 3 Tahun 2022 tentang IKN disahkan DPR",
      },
      {
        date: "2024-07-30",
        label: "Joko Widodo mulai bekerja dari Nusantara",
      },
    ],
    debate:
      "Sejumlah kritik terdokumentasi terhadap program ini. Wahana Lingkungan Hidup Indonesia (Walhi) pada 12 Januari 2022 mengkritik UU No. 3 Tahun 2022 yang dinilai disahkan terlalu cepat, dengan masa pembahasan sekitar 40 hari, serta tidak melibatkan seluruh unsur masyarakat. Organisasi masyarakat Kalimantan Timur pada 30 Mei 2022 mengkritik wacana impor tenaga kerja dari luar provinsi. The Guardian (Oktober 2025) menilai Nusantara berisiko menjadi kota hantu. Di sisi lain, sejumlah media internasional memuji proyek ini sebagai model kota masa depan.",
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
  {
    slug: "dana-desa",
    title: "Dana Desa",
    year: 2015,
    summary:
      "Program penyaluran dana pemerintah ke desa untuk infrastruktur dasar, pariwisata, dan usaha desa, berjalan sejak 2015.",
    background:
      "Janji kampanye Joko Widodo pada 2014 mencakup alokasi dana untuk setiap desa setiap tahunnya.",
    body: "Antara 2015 dan 2018, pemerintah merealokasikan Rp187 triliun melalui program ini. Dana digunakan untuk infrastruktur dasar seperti jalan dan pasokan air, pengembangan pariwisata, dan usaha desa.",
    // TODO_FACT (belum terverifikasi): tanggal persis penyaluran perdana.
    // Tahun 2015 terverifikasi; tanggal spesifik butuh sumber berita tersendiri.
    keyDates: [],
    sourceIds: ["src-wikipedia-joko-widodo", "src-antara"],
  },
];
