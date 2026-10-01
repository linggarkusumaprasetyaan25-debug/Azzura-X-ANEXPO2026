import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Informasi Toko — AZZURA X ANEXPO2026",
  description:
    "Tentang AZZURA Cosmetics: sejarah, visi, nilai brand, keunggulan, dan kategori produk.",
};

const VALUES = [
  { title: "Self-Love", desc: "Merawat diri sebagai bentuk mencintai diri sendiri." },
  { title: "Percaya Diri", desc: "Tampil natural namun memancarkan kepercayaan diri." },
  { title: "Bebas Mengekspresikan Diri", desc: "Bebas berekspresi sesuai gaya masing-masing." },
];

const CATEGORIES = ["Lip Series", "Face Series", "Eye Series", "Skin Care"];

export default function InformasiToko() {
  return (
    <div className="fade-in mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#b06252]">
        Informasi Toko
      </p>
      <h1 className="font-display mt-2 text-4xl font-bold text-[#2c1f21]">
        Tentang AZZURA
      </h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[#f3e3d8] bg-white p-6 sm:p-8" aria-label="Profil perusahaan">
          {/* Logo resmi AZZURA */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
            <Image
              src="/images/brand/azzura-logo.jpg"
              alt="Logo AZZURA — Discover the Difference"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <h2 className="font-display mt-4 text-xl font-bold">AZZURA Cosmetics</h2>
          <dl className="mt-4 space-y-3 text-sm leading-relaxed">
            <div>
              <dt className="font-semibold text-[#8f4c40]">Tentang</dt>
              <dd className="text-[#3d2b2e]/80">
                Brand kecantikan lokal yang menghadirkan produk makeup dan skincare.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#8f4c40]">Sejarah</dt>
              <dd className="text-[#3d2b2e]/80">
                AZZURA lahir dari kebutuhan perempuan Indonesia akan makeup dengan
                formula ringan dan hasil natural.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#8f4c40]">Visi</dt>
              <dd className="text-[#3d2b2e]/80">Unlock your beauty potential.</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#8f4c40]">Nilai Brand</dt>
              <dd className="text-[#3d2b2e]/80">
                Self-love, percaya diri, dan bebas mengekspresikan diri.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#8f4c40]">Keunggulan</dt>
              <dd className="text-[#3d2b2e]/80">
                Formula ringan, hasil makeup effortless, serta produk makeup yang
                memiliki manfaat skincare.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#8f4c40]">Lokasi</dt>
              <dd className="text-[#3d2b2e]/80">Indonesia</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-2xl bg-[#2c1f21] p-6 text-white sm:p-8" aria-label="Nilai brand">
          <h2 className="font-display text-xl font-bold">Nilai yang Kami Pegang</h2>
          <div className="mt-4 space-y-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl bg-white/5 p-4">
                <p className="font-semibold text-[#d4af7a]">{v.title}</p>
                <p className="mt-1 text-sm text-white/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-[#f3e3d8] bg-white p-6 sm:p-8" aria-label="Kategori produk">
        <h2 className="font-display text-xl font-bold">Kategori Produk</h2>
        <p className="mt-2 text-sm text-[#3d2b2e]/70">
          AZZURA memiliki produk makeup dan skincare dalam beberapa kategori:
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <li
              key={c}
              className="rounded-xl bg-[#faf2ec] px-4 py-5 text-center text-sm font-semibold text-[#2c1f21]"
            >
              {c}
            </li>
          ))}
        </ul>
        <Link
          href="/catalog"
          className="mt-6 inline-block rounded-full bg-[#2c1f21] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b06252]"
        >
          LIHAT KATALOG
        </Link>
      </section>

      <section className="mt-6 rounded-2xl border border-[#f3e3d8] bg-white p-6 sm:p-8" aria-label="Kontak">
        <h2 className="font-display text-xl font-bold">Hubungi Kami</h2>
        <p className="mt-2 text-sm text-[#3d2b2e]/70">
          Klik untuk menghubungi AZZURA X ANEXPO2026:
        </p>
        <div className="mt-4">
          <SocialLinks />
        </div>
      </section>

      <div className="mt-8">
        <CTASection />
      </div>
    </div>
  );
}
