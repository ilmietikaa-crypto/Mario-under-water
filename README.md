# Underwater Arabic Adventure

Game edukasi Bahasa Arab kelas VIII MTs dengan tema **الهواية (Hobi)**.

## Fitur
- Platformer 2D side-scrolling bergaya retro pixel-art.
- Fisika berenang: karakter perlahan tenggelam dan berenang naik saat tombol SWIM/Space/Arrow Up ditekan.
- Batas permukaan air, gelembung, karang, koin, jurang, dan musuh laut.
- Tepat lima blok kuis pilihan ganda; jawaban salah dapat dicoba lagi.
- Jawaban benar memberi +1.000 skor dan +10 koin.
- Finish tidak mensyaratkan semua kuis selesai.
- Keyboard dan tombol layar sentuh.
- Ringkasan kosakata Bahasa Arab.

> Karakter pada proyek ini adalah penyelam pixel-art orisinal, bukan sprite Mario/Nintendo. Ini menjaga proyek tetap menggunakan aset orisinal dan lebih aman untuk dipublikasikan.

## Menjalankan secara lokal
Persyaratan: Node.js 18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite.

## Build
```bash
npm run build
npm run preview
```

Hasil build berada di folder `dist/`.

## Deploy ke GitHub dan Netlify
1. Buat repository baru di GitHub.
2. Ekstrak ZIP ini, lalu unggah seluruh isi folder proyek ke repository (pastikan `package.json`, `index.html`, `src/`, dan `netlify.toml` berada di root repository).
3. Di Netlify pilih **Add new project → Import an existing project**.
4. Hubungkan GitHub dan pilih repository.
5. Build command: `npm run build`.
6. Publish directory: `dist`.
7. Klik **Deploy**.

`netlify.toml` sudah menyimpan konfigurasi build dan publish tersebut.

## Mengubah materi
Edit array `questions` dan `vocab` di bagian atas `src/main.js`. Setiap pertanyaan memiliki `word`, `prompt`, `options`, `answer` (indeks mulai dari 0), dan `hint`.
