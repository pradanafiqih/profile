# specs/public-figure-profile-site/requirements.md

# Requirements Document
## Introduction
Situs arsip biografis statis untuk satu tokoh publik (instance pertama: Joko Widodo, Presiden RI ke-7). Tujuannya menyajikan perjalanan karier, kebijakan utama, kutipan bersumber, dan dokumentasi visual dengan standar editorial dan atribusi penuh. Arsitekturnya harus memungkinkan pergantian tokoh hanya dengan mengganti isi folder `content/`.

Cakupan v1: lima halaman statis, tanpa autentikasi, tanpa database, tanpa CMS. Di-deploy sebagai situs statis di Vercel Hobby.

* * *
## Requirement 1 — Fondasi konten yang tervalidasi
**User Story:** Sebagai pengelola situs, saya ingin seluruh konten tersimpan sebagai data bertipe dan tervalidasi, agar tidak ada fakta tanpa sumber yang bisa lolos ke produksi.

**Acceptance Criteria**
1. THE SYSTEM SHALL menyimpan seluruh konten yang dibaca pengunjung di dalam direktori `content/`, terpisah dari komponen presentasi.
2. THE SYSTEM SHALL memvalidasi seluruh file konten terhadap skema Zod pada waktu build.
3. IF sebuah entri linimasa, kebijakan, atau kutipan tidak memiliki minimal satu `sourceId` yang valid, THEN THE SYSTEM SHALL menggagalkan proses build disertai pesan yang menyebut nama file dan entri bersangkutan.
4. IF sebuah `sourceId` merujuk ke sumber yang tidak terdaftar di `sources.ts`, THEN THE SYSTEM SHALL menggagalkan build.
5. IF sebuah entri media tidak memiliki `credit`, `license`, dan `sourceUrl`, THEN THE SYSTEM SHALL menggagalkan build.
6. THE SYSTEM SHALL memuat identitas tokoh (nama, jabatan, rentang menjabat, ringkasan) dari satu file tunggal `content/figure.ts`.

* * *
## Requirement 2 — Beranda
**User Story:** Sebagai pengunjung pertama kali, saya ingin memahami siapa tokoh ini dan apa isi situs dalam waktu singkat, agar saya tahu perlu lanjut membaca atau tidak.

**Acceptance Criteria**
1. WHEN pengunjung membuka `/`, THE SYSTEM SHALL menampilkan nama tokoh, jabatan, rentang tahun menjabat, dan ringkasan maksimal 60 kata di layar pertama.
2. THE SYSTEM SHALL menampilkan satu foto utama disertai atribusi yang terlihat.
3. THE SYSTEM SHALL menampilkan pratinjau tiga entri linimasa terpenting dan tautan ke halaman linimasa lengkap.
4. THE SYSTEM SHALL menampilkan pratinjau tiga kebijakan dan tautan ke indeks kebijakan.
5. THE SYSTEM SHALL merender seluruh beranda tanpa JavaScript sisi klien untuk konten utamanya.
6. THE SYSTEM SHALL NOT menampilkan angka statistik apapun yang tidak memiliki sumber terkait.

* * *
## Requirement 3 — Linimasa karier
**User Story:** Sebagai pembaca, saya ingin melihat urutan kronologis peristiwa karier tokoh, agar saya memahami perjalanannya secara utuh.

**Acceptance Criteria**
1. WHEN pengunjung membuka `/timeline`, THE SYSTEM SHALL menampilkan seluruh entri linimasa terurut menaik berdasarkan tanggal mulai.
2. THE SYSTEM SHALL menampilkan untuk setiap entri: tanggal atau rentang tanggal, judul, deskripsi maksimal 80 kata, dan daftar sumber yang bisa diklik.
3. IF sebuah entri hanya memiliki tahun tanpa tanggal pasti, THEN THE SYSTEM SHALL menampilkan tahun saja tanpa mengarang tanggal.
4. THE SYSTEM SHALL mengelompokkan entri berdasarkan periode jabatan (contoh: Wali Kota Surakarta, Gubernur DKI Jakarta, Presiden Periode I, Presiden Periode II).
5. WHEN pengunjung menggunakan pembaca layar, THE SYSTEM SHALL menyajikan linimasa sebagai daftar terurut semantik, bukan sekumpulan div.
6. THE SYSTEM SHALL memuat minimal 12 entri pada rilis pertama.

* * *
## Requirement 4 — Halaman kebijakan
**User Story:** Sebagai pembaca, saya ingin membaca penjelasan netral tentang kebijakan besar beserta sumbernya, agar saya bisa memverifikasi sendiri.

**Acceptance Criteria**
1. WHEN pengunjung membuka `/policies`, THE SYSTEM SHALL menampilkan daftar seluruh kebijakan berisi judul, tahun peluncuran, dan ringkasan satu kalimat.
2. WHEN pengunjung membuka `/policies/[slug]`, THE SYSTEM SHALL menampilkan latar belakang, isi kebijakan, tanggal-tanggal kunci, dan daftar sumber lengkap.
3. IF sebuah kebijakan memiliki kritik atau perdebatan publik yang terdokumentasi, THEN THE SYSTEM SHALL menampilkannya dalam bagian tersendiri dengan sumber, tanpa memberikan penilaian.
4. IF slug yang diminta tidak ada, THEN THE SYSTEM SHALL menampilkan halaman 404 kustom dengan tautan kembali ke indeks kebijakan.
5. THE SYSTEM SHALL menghasilkan seluruh halaman kebijakan secara statis pada waktu build.
6. THE SYSTEM SHALL menggunakan bahasa deskriptif dan menghindari kata sifat evaluatif pada seluruh teks kebijakan.

* * *
## Requirement 5 — Galeri dengan atribusi
**User Story:** Sebagai pengunjung, saya ingin melihat dokumentasi visual yang jelas asal-usulnya, agar situs ini kredibel dan tidak melanggar hak cipta.

**Acceptance Criteria**
1. WHEN pengunjung membuka `/gallery`, THE SYSTEM SHALL menampilkan seluruh gambar dari `media.ts` dalam tata letak grid.
2. THE SYSTEM SHALL menampilkan kredit fotografer dan jenis lisensi untuk setiap gambar secara persisten, bukan hanya saat hover.
3. THE SYSTEM SHALL menyajikan setiap gambar melalui `next/image` dengan `width` dan `height` eksplisit untuk mencegah layout shift.
4. THE SYSTEM SHALL menyertakan teks `alt` deskriptif yang menjelaskan isi foto, bukan sekadar mengulang judulnya.
5. WHEN pengunjung mengklik sebuah gambar, THE SYSTEM SHALL membuka halaman sumber aslinya di tab baru.
6. THE SYSTEM SHALL NOT memuat gambar dari domain eksternal secara langsung.

* * *
## Requirement 6 — Halaman metodologi dan sumber
**User Story:** Sebagai pembaca skeptis, saya ingin tahu bagaimana situs ini disusun dan dari mana datanya, agar saya bisa menilai keandalannya.

**Acceptance Criteria**
1. WHEN pengunjung membuka `/about`, THE SYSTEM SHALL menjelaskan tujuan situs, metode pengumpulan data, dan kriteria pemilihan sumber.
2. THE SYSTEM SHALL menampilkan daftar lengkap seluruh sumber dari `sources.ts` berisi judul, penerbit, tanggal, dan tautan.
3. THE SYSTEM SHALL menampilkan tanggal pembaruan terakhir situs.
4. THE SYSTEM SHALL menampilkan disclaimer ketidakberafiliasian secara utuh.

* * *
## Requirement 7 — Kerangka situs, navigasi, dan disclaimer
**User Story:** Sebagai pengunjung, saya ingin berpindah halaman dengan mudah dan selalu tahu status situs ini, agar tidak tersesat atau salah paham.

**Acceptance Criteria**
1. THE SYSTEM SHALL menampilkan header berisi nama situs dan tautan ke Linimasa, Kebijakan, Galeri, dan Tentang di seluruh halaman.
2. WHEN pengunjung berada di sebuah halaman, THE SYSTEM SHALL menandai tautan navigasi yang aktif secara visual dan lewat `aria-current`.
3. THE SYSTEM SHALL menampilkan disclaimer ketidakberafiliasian pada footer di seluruh halaman.
4. WHEN pengunjung menekan Tab dari awal halaman, THE SYSTEM SHALL menyediakan tautan lewati-ke-konten sebagai elemen fokus pertama.
5. WHILE viewport di bawah 768px, THE SYSTEM SHALL menyajikan navigasi yang tetap dapat digunakan tanpa menyembunyikan tautan di balik menu yang butuh JavaScript.

* * *
## Requirement 8 — Performa, aksesibilitas, dan SEO
**User Story:** Sebagai pemilik portofolio, saya ingin situs ini terukur bagus secara teknis, agar bisa dipakai sebagai bukti kompetensi.

**Acceptance Criteria**
1. THE SYSTEM SHALL mencapai skor Lighthouse minimal 95 pada kategori Performance, Accessibility, Best Practices, dan SEO di build produksi.
2. THE SYSTEM SHALL mengirimkan JavaScript kurang dari 100 KB terkompresi pada beranda.
3. THE SYSTEM SHALL memenuhi rasio kontras WCAG AA pada seluruh kombinasi teks dan latar.
4. WHILE pengguna mengaktifkan `prefers-reduced-motion`, THE SYSTEM SHALL menonaktifkan seluruh transisi non-esensial.
5. THE SYSTEM SHALL menyediakan metadata Open Graph unik dan judul unik untuk setiap halaman.
6. THE SYSTEM SHALL menghasilkan `sitemap.xml` dan `robots.txt` pada waktu build.
7. THE SYSTEM SHALL menyertakan structured data JSON-LD bertipe `Person` pada beranda.

* * *
## Requirement 9 — Kepatuhan visual terhadap design system
**User Story:** Sebagai pemilik proyek, saya ingin hasil akhirnya terlihat sengaja dirancang, bukan keluaran template generik.

**Acceptance Criteria**
1. THE SYSTEM SHALL menggunakan hanya token warna yang didefinisikan di `steering/design-system.md`.
2. THE SYSTEM SHALL menggunakan hanya ukuran font dari skala yang ditetapkan.
3. THE SYSTEM SHALL NOT menggunakan gradient, box-shadow, glassmorphism, atau ikon emoji.
4. THE SYSTEM SHALL membatasi lebar baris teks badan maksimal 68 karakter.
5. THE SYSTEM SHALL menggunakan tepat dua keluarga font yang di-host sendiri.

* * *
## Requirement 10 — Portabilitas ke tokoh lain
**User Story:** Sebagai pengembang, saya ingin memakai ulang situs ini untuk tokoh berbeda, agar upaya membangunnya terbayar lebih dari sekali.

**Acceptance Criteria**
1. WHEN seluruh file di `content/` diganti dengan data tokoh lain yang valid, THE SYSTEM SHALL berhasil di-build tanpa perubahan apapun pada `app/`, `components/`, atau `lib/`.
2. THE SYSTEM SHALL NOT memuat string literal spesifik tokoh di dalam kode komponen.
3. IF sebuah bagian konten opsional kosong (misalnya galeri), THEN THE SYSTEM SHALL menyembunyikan seksi terkait tanpa error dan tanpa ruang kosong menggantung.

* * *
## Requirement 11 — Deployment
**User Story:** Sebagai pemilik, saya ingin situs live dan mudah diperbarui, tanpa biaya.

**Acceptance Criteria**
1. WHEN commit didorong ke branch `main`, THE SYSTEM SHALL memicu deployment produksi otomatis di Vercel.
2. WHEN pull request dibuka, THE SYSTEM SHALL menghasilkan preview deployment.
3. IF `lint`, `typecheck`, atau `build` gagal, THEN THE SYSTEM SHALL membatalkan deployment.
4. THE SYSTEM SHALL beroperasi dalam batas paket Vercel Hobby dan tidak memuat iklan, permintaan donasi, tautan afiliasi, maupun pemrosesan pembayaran.

* * *
## Out of scope (v1)
Multibahasa, dark mode, pencarian, komentar, newsletter, CMS, analitik pihak ketiga, konten yang dihasilkan pengguna.