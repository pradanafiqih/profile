# steering/workflow.md

# Workflow Steering (spec-driven)
Ini yang bikin agent kerja bertahap, bukan muntahin 40 file sekaligus.
## Tiga fase, satu per satu
### Fase 1 — Requirements (`requirements.md`)
Ubah ide kasar jadi user story + acceptance criteria format **EARS**:
*   `WHEN <pemicu>, THE SYSTEM SHALL <perilaku>`
*   `IF <kondisi>, THEN THE SYSTEM SHALL <perilaku>`
*   `WHILE <keadaan>, THE SYSTEM SHALL <perilaku>`
*   `THE SYSTEM SHALL <perilaku>` (tanpa syarat)

Kriteria harus bisa diuji. "Tampilan harus bagus" bukan kriteria. "Halaman harus render di bawah 1.5s LCP pada koneksi 4G" baru kriteria.

Selesai fase 1 → berhenti, tanya: **"Requirements sudah sesuai? Boleh lanjut ke design?"**
### Fase 2 — Design (`design.md`)
Isi wajib:
*   Ringkasan pendekatan
*   Arsitektur & alur data (boleh diagram Mermaid)
*   Skema data (definisi Zod)
*   Daftar komponen + tanggung jawabnya masing-masing
*   Keputusan desain beserta alternatif yang ditolak dan alasannya
*   Strategi penanganan error dan kasus kosong
*   Pemetaan balik: setiap requirement nomor berapa dipenuhi bagian mana

Selesai fase 2 → berhenti, minta persetujuan.
### Fase 3 — Tasks (`tasks.md`)
Checklist bertingkat. Aturannya:
*   Setiap task adalah aksi coding konkret, bukan "riset" atau "pikirkan".
*   Setiap task menyebut file yang disentuh dan requirement yang dipenuhi.
*   Setiap task bisa selesai dalam satu sesi dan meninggalkan repo dalam kondisi bisa di-build.
*   Urutan inkremental: tidak ada task yang bergantung pada kode yang belum ada.
*   Format: `- [ ] 1.2 Buat komponen TimelineEntry — components/content/timeline-entry.tsx — memenuhi R3.2, R3.4`
## Aturan eksekusi
*   Kerjakan **satu task, lalu berhenti dan lapor.** Jangan lanjut ke task berikutnya tanpa disuruh.
*   Sebelum mulai task, baca ulang requirement yang dirujuk.
*   Setelah task: jalankan `pnpm lint && pnpm typecheck && pnpm build`, laporkan hasil, centang checkbox.
*   Kalau menemukan requirement yang salah atau kurang saat coding: berhenti, laporkan, jangan diam-diam ubah scope.
*   Kalau ragu: tanya. Satu pertanyaan bagus lebih murah daripada 300 baris yang harus dibuang.
## Format laporan setiap task

```plain
Task: 1.2 TimelineEntry
File diubah: components/content/timeline-entry.tsx, content/schema.ts
Requirement dipenuhi: R3.2, R3.4
lint: pass | typecheck: pass | build: pass
TODO_FACT: (kosong / daftar)
Cek anti-slop: tidak ada elemen terlarang, semua teks dari content/, semua warna dari token
Catatan: <maks 2 kalimat>
```