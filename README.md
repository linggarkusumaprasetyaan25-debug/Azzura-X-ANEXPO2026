# AZZURA X ANEXPO2026 — Discover the Difference

Website mitra bisnis AZZURA Cosmetics. Bukan e-commerce — pemesanan via Google Form Open PO.

## Tujuan
- Memperkenalkan AZZURA Cosmetics
- Menampilkan 1–2 produk unggulan di Home
- Katalog lengkap di `/catalog`
- Informasi perusahaan di `/informasi-toko`
- CTA Open PO + kontak WhatsApp / Instagram / TikTok

## Teknologi
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Siap deploy ke Vercel

## Cara Menjalankan
```bash
npm install
npm run dev
# buka http://localhost:3000
```

## Build
```bash
npm run build
npm start
```

Routing:
- `/` — Home (Hero, 2 produk unggulan, brand preview, CTA)
- `/informasi-toko` — Tentang AZZURA
- `/catalog` — Semua produk (Lip, Face, Eye, Skin Care, Poise)

## Struktur Folder
```
app/
  page.tsx               # Home
  informasi-toko/page.tsx
  catalog/page.tsx
  layout.tsx             # Navbar + Footer + SEO
  globals.css            # Design system
components/
  Navbar.tsx
  Footer.tsx
  Hero (di page.tsx)
  ProductCard.tsx
  CategorySection.tsx
  CTASection.tsx
  SocialLinks.tsx
data/
  site.ts                # Link Open PO & sosmed
  products.ts            # Produk + harga promo
public/
  images/
    hero/                # hero image
    brand/               # foto brand/skincare
    products/            # foto individual produk
```

## Cara Mengganti Foto
1. Simpan foto asli ke:
   - Hero: `public/images/hero/azzura-hero.jpg`
   - Skincare: `public/images/brand/skincare.jpg`
   - Produk: `public/images/products/nama-produk.jpg` (cth: `lip-velvet.jpg`)
2. Update path di:
   - Hero: `app/page.tsx` → ubah `src="/images/hero/azzura-hero.svg"` ke `.jpg`
   - Brand: `app/page.tsx` → ubah `src="/images/brand/skincare.svg"` ke `.jpg`
   - Produk: `data/products.ts` → isi `image: "/images/products/lip-velvet.jpg"`
3. Gunakan `alt` yang sesuai. Jangan pakai foto AI / foto internet sembarangan.

Saat ini placeholder SVG dipakai agar build tetap hijau tanpa asset asli.

## Cara Mengganti Produk / Harga
Edit `data/products.ts`:
```ts
{ name: "Lip Velvet", category: "Lip Series", price: 45000 }
```
Harga = harga PROMO (angka saja, tanpa titik). Format `Rp45.000` otomatis via `formatPrice()`.

## Cara Mengganti Link Open PO & Sosmed
Edit `data/site.ts`:
```ts
openPoUrl, whatsappUrl, instagramUrl, tiktokUrl
```
Semua tombol OPEN PO / WhatsApp / Instagram / TikTok membaca dari file ini.
External link memakai `target="_blank" rel="noopener noreferrer"`.

Link saat ini:
- Open PO: https://forms.gle/Uw2MsFi3ywoRk26V7
- WA: https://wa.me/6285710776902
- IG: https://www.instagram.com/azzura.x.anexpo?stkn=MTlremFibzZxYml2OA==
- TikTok: https://www.tiktok.com/@azzura.x.anexpo?is_from_webapp=1&sender_device=pc

## Deploy ke Vercel
1. Push ke GitHub:
```bash
git init
git add .
git commit -m "feat: azzura x anexpo2026 website"
git branch -M main
git remote add origin <URL_REPO>
git push -u origin main
```
2. Di Vercel → New Project → Import repo → Framework: Next.js → Deploy.
3. Tidak perlu env variable.

## Catatan
- Jangan mengarang harga / shade / kontak / klaim produk.
- Varian resmi: Loose Powder (Silver & Biru), TWC (Silver & Biru).
- Poise tidak menampilkan badge diskon.
