# steering/content-integrity.md

# Content Integrity Steering
## Aturan nomor satu
**Agent tidak boleh mengarang fakta, tanggal, angka, atau kutipan.** Titik. Ini situs tentang orang sungguhan; halusinasi di sini bukan cuma jelek, tapi berbahaya.

Kalau agent butuh data yang belum ada di `content/`, prosedurnya:
1. Isi dengan placeholder eksplisit: `TODO_FACT: [deskripsi apa yang dibutuhkan]`.
2. Catat di daftar di akhir laporan task.
3. Jangan pernah menebak, bahkan kalau "kelihatannya benar".

Kutipan langsung hanya boleh masuk kalau ada transkrip atau pemberitaan yang bisa dirujuk, lengkap dengan tanggal dan tempat.
## Tingkat kepercayaan sumber
1. Dokumen primer: teks undang-undang, peraturan presiden, siaran pers resmi, transkrip pidato.
2. Media arus utama dengan byline dan tanggal.
3. Ensiklopedia (Wikipedia) — **hanya sebagai penunjuk** untuk mencari sumber primernya, tidak boleh jadi sumber final.

Blog, thread media sosial, dan konten AI lain: dilarang.
## Netralitas
*   Untuk topik yang diperdebatkan, gunakan format: apa yang terjadi, kapan, siapa yang mendukung, siapa yang menolak, tautan ke keduanya. Tanpa kesimpulan penulis.
*   Hindari framing lewat pemilihan kata. "Kebijakan menuai kritik dari X" boleh; "kebijakan kontroversial" tidak.
*   Jangan menyaring pencapaian saja. Situs yang cuma memuji terbaca sebagai propaganda, dan itu justru merusak nilai portofolionya.
## Lisensi gambar
Setiap entri di `media.ts` wajib punya: `src`, `alt`, `credit`, `license`, `sourceUrl`. Skema Zod menolak yang kosong. Badge atribusi tampil di UI, minimal saat hover atau di caption.
## Disclaimer wajib (footer, semua halaman)
> Situs ini merupakan arsip biografis tidak resmi yang disusun untuk tujuan edukasi dan portofolio. Tidak berafiliasi dengan Joko Widodo, keluarganya, partai politik, atau institusi pemerintah manapun. Seluruh materi bersumber dari dokumen publik yang dirujuk pada halaman Sumber.