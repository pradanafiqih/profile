# steering/design-system.md

# Design System Steering
Ini file paling penting untuk melawan hasil generik. Agent tidak boleh "berkreasi" di luar token di bawah.
## Arah desain
Rasa **arsip / museum digital**, bukan startup landing page. Rujukan mental: halaman longform surat kabar serius, katalog pameran, laporan tahunan yang dikerjakan desainer beneran. Tenang, banyak ruang putih, tipografi memimpin, warna irit.
## Token warna (kunci, jangan ditambah)

```plain
--ink:        #14110F   /* teks utama, hampir hitam kecoklatan */
--ink-muted:  #5C5652   /* teks sekunder */
--paper:      #FBF9F5   /* latar utama, putih hangat */
--paper-alt:  #F1EDE6   /* latar seksi bergantian */
--rule:       #DDD6CB   /* garis pemisah */
--accent:     #7A2E1E   /* merah bata gelap, hanya untuk aksen */
```

Aksen dipakai maksimal **tiga kali per halaman**: link aktif, penanda linimasa, dan satu elemen highlight. Titik.
## Tipografi
*   Judul: satu serif berkarakter (Instrument Serif, Fraunces, atau Newsreader). Pilih satu, kunci.
*   Teks: satu sans netral (Inter atau Geist).
*   Skala: 14 / 16 / 18 / 24 / 32 / 48 / 64. Tidak ada ukuran di luar daftar ini.
*   Lebar baca maksimal 68 karakter.
*   Tinggi baris 1.6 untuk badan teks, 1.1 untuk judul besar.
## Layout
*   Grid 12 kolom, lebar konten maksimal 1120px, padding 24px di mobile.
*   Ritme spasi kelipatan 8. Jarak antar seksi 96px desktop, 56px mobile.
*   Radius sudut maksimal 4px. Situs ini tegas, bukan bulat-bulat.
*   Bayangan: **tidak ada**. Pemisahan pakai garis `--rule` dan perbedaan latar.
## Gerak
Hanya dua: fade-in konten 150ms saat load, dan transisi warna 120ms saat hover. Tanpa parallax, tanpa animasi scroll-triggered, tanpa counter yang naik.
## DILARANG (kalau muncul, tolak dan ulang)
*   Gradient apapun, terutama ungu-ke-biru atau warna gelap ke gelap.
*   Hero berupa teks besar di tengah dengan dua tombol berdampingan.
*   Grid tiga kartu berisi ikon + judul + satu kalimat.
*   Ikon emoji di heading atau tombol.
*   Glassmorphism, blur backdrop, border glow, neon.
*   Ilustrasi blob, mesh gradient, pola dot grid.
*   Font Poppins, Montserrat, atau Roboto.
*   Kalimat pemasaran kosong: "empowering", "transforming", "journey of a leader", "a legacy of", "seamless", "unlock".
*   Statistik tanpa sumber ("270 juta rakyat terlayani").
*   Tombol CTA yang tidak menuju kemana-mana.
## Gaya penulisan konten
*   Kalimat pendek. Fakta dulu, konteks belakangan.
*   Selalu sertakan tanggal dan angka konkret ketika tersedia.
*   Voice aktif, orang ketiga, lampau. "Ia menandatangani..." bukan "Beliau dengan penuh dedikasi..."
*   Tanpa kata sifat pujian: hebat, luar biasa, visioner, ikonik, legendaris.
*   Setiap paragraf yang memuat klaim diakhiri rujukan sumber.
## Cek mandiri sebelum lapor selesai
Agent wajib menjawab tiga pertanyaan ini di akhir setiap task UI:
1. Ada elemen dari daftar DILARANG?
2. Ada teks yang tidak berasal dari `content/`?
3. Ada warna atau ukuran font di luar token?

Kalau salah satu "ya", perbaiki sebelum lapor.