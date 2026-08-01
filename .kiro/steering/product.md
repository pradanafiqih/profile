# steering/product.md

# Product Steering
## Apa yang dibangun
Situs profil publik (arsip biografis) satu tokoh: **Joko Widodo**, presiden RI ke-7 (2014-2024). Bukan situs kampanye, bukan situs resmi, bukan blog opini. Ini **arsip yang dikurasi**: perjalanan karier, kebijakan besar, dan dokumentasi visual, disajikan dengan standar editorial.
## Kenapa dibangun
Portofolio teknis pertama. Target sekundernya: jadi template yang bisa dipakai ulang untuk tokoh lain (kepala daerah, tokoh sejarah, founder) tanpa nulis ulang arsitektur.
## Audiens
1. **Recruiter / reviewer teknis** — masuk 20 detik, nilai kualitas kerja. Harus langsung kelihatan rapi dan cepat.
2. **Pembaca umum / pelajar** — cari fakta cepat: kapan menjabat, kebijakan apa, sumbernya mana.
3. **Diri sendiri di masa depan** — harus gampang ganti data tokoh tanpa bongkar komponen.
## Prinsip produk
*   **Sumber di atas gaya.** Setiap klaim faktual punya sumber yang bisa diklik. Tidak ada pernyataan tanpa rujukan.
*   **Netral secara politis.** Deskriptif, bukan evaluatif. Tulis "program X diluncurkan tahun Y, menargetkan Z", bukan "program X sukses besar".
*   **Kedalaman kalahkan lebar.** 6 entri yang ditulis serius lebih baik daripada 30 entri satu kalimat.
*   **Statis dulu.** Tidak ada login, tidak ada komentar, tidak ada database sampai benar-benar dibutuhkan.
## Batasan hukum & etika (non-negotiable)
*   Footer wajib memuat disclaimer: situs tidak resmi.
*   Hanya pakai foto dengan lisensi jelas (Wikimedia Commons, BPMI Setpres, Creative Commons). Setiap gambar wajib punya atribusi yang tampil di UI, bukan cuma di kode.
*   Tidak ada iklan, tidak ada donasi, tidak ada afiliasi. Ini syarat Vercel Hobby dan juga menjaga netralitas.
*   Tidak ada klaim medis, hukum, atau tuduhan personal. Kalau sebuah topik kontroversial, sajikan sebagai "peristiwa + rentang tanggal + sumber pemberitaan", tanpa kesimpulan.
## Definisi selesai (v1)
Situs live di Vercel, Lighthouse ≥ 95 di keempat kategori, semua konten punya sumber, dan orang asing bisa paham siapa tokohnya dalam 30 detik tanpa scroll lebih dari dua layar.
## Bukan bagian dari v1
Multibahasa, dark mode toggle, search, CMS, newsletter, komentar, animasi scroll kompleks, chatbot.