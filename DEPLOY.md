# 🚀 Panduan Deploy ke Vercel

## Langkah 1: Setup Vercel Account

1. Buka https://vercel.com
2. Klik "Sign Up" dan pilih "Continue with GitHub"
3. Authorize Vercel untuk mengakses repository GitHub Anda

## Langkah 2: Deploy dari GitHub

1. Di dashboard Vercel, klik "New Project"
2. Pilih repository `mohamadnuralif17-tech/Quran`
3. Vercel akan auto-detect Next.js configuration
4. Klik "Deploy"

## Langkah 3: Konfigurasi Domain (Opsional)

1. Setelah deploy selesai, Anda akan mendapat URL otomatis (e.g., `quran-hub.vercel.app`)
2. Untuk custom domain:
   - Klik "Settings" → "Domains"
   - Tambahkan domain Anda
   - Update DNS settings di registrar domain Anda

## Langkah 4: Auto Deploy

- Setiap kali Anda push ke branch `main`, Vercel akan otomatis deploy
- Untuk production, merge `develop` ke `main`

## Verifikasi Deploy

Setelah deploy selesai:
```bash
# Test local build
npm run build
npm start
```

Kemudian akses URL yang diberikan Vercel di browser.

## Troubleshooting

### Error: Module not found
```bash
npm install
npm run build
```

### Error: ENOENT: no such file or directory
Pastikan semua file sudah di-commit ke GitHub sebelum deploy.

### Build logs
Lihat deployment logs di Vercel dashboard → Deployments → Logs

---

**Website Quran Hub Anda akan live dalam hitungan menit!** ✨
