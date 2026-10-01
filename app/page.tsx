import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import { FEATURED_PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";

export default function Home() {
  return (
    <div className="fade-in">
      {/* HERO */}
      <section className="hero-texture">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#b06252]">
              {SITE.brand}
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold leading-tight text-[#2c1f21] sm:text-5xl">
              AZZURA X<br />
              ANEXPO2026
            </h1>
            <p className="font-display mt-2 text-xl text-[#8f4c40] italic sm:text-2xl">
              Discover the Difference
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3d2b2e]/75 sm:text-base">
              Brand kecantikan lokal dengan produk makeup dan skincare —
              formula ringan, hasil natural.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/catalog"
                className="rounded-full bg-[#2c1f21] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b06252]"
              >
                LIHAT KATALOG
              </Link>
              <a
                href={SITE.openPoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#2c1f21] px-7 py-3 text-sm font-semibold text-[#2c1f21] transition hover:bg-[#2c1f21] hover:text-white"
              >
                OPEN PO
              </a>
            </div>
          </div>

          {/* Hero — foto banner asli AZZURA */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#f3e3d8] bg-[#ead7c2] shadow-sm sm:aspect-[16/9] lg:aspect-[16/10]">
            <Image
              src="/images/hero/azzura-hero.png"
              alt="Banner AZZURA — Discover the Difference, rangkaian cushion, compact powder, dan lip series"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* PRODUK UNGGULAN */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6" aria-label="Produk unggulan">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#b06252]">
              Pilihan Terbaik
            </p>
            <h2 className="font-display mt-1 text-3xl font-bold text-[#2c1f21]">
              Produk Unggulan
            </h2>
          </div>
          <Link href="/catalog" className="text-sm font-semibold text-[#b06252] hover:underline">
            Lihat semua →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {FEATURED_PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} showCta />
          ))}
        </div>
      </section>

      {/* BRAND PREVIEW */}
      <section className="border-y border-[#f3e3d8] bg-white" aria-label="Kenali AZZURA">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-[#f3e3d8] bg-[#faf2ec]">
            <Image
              src="/images/brand/skincare.png"
              alt="Rangkaian skincare AZZURA Diamond Bright: Gentle Facial Wash, Serum, Night Cream, Day Cream, Sunscreen, dan Micellar Cleansing Water"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#b06252]">
              Kenali AZZURA
            </p>
            <h2 className="font-display mt-1 text-3xl font-bold text-[#2c1f21]">
              Brand kecantikan lokal
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#3d2b2e]/80 sm:text-base">
              AZZURA Cosmetics adalah brand kecantikan lokal yang menghadirkan
              produk makeup dan skincare. AZZURA lahir dari kebutuhan perempuan
              Indonesia akan makeup dengan formula ringan dan hasil natural.
            </p>
            <p className="font-display mt-3 text-lg italic text-[#8f4c40]">
              “Unlock your beauty potential.”
            </p>
            <Link
              href="/informasi-toko"
              className="mt-6 inline-block rounded-full border border-[#2c1f21] px-7 py-3 text-sm font-semibold text-[#2c1f21] transition hover:bg-[#2c1f21] hover:text-white"
            >
              SELENGKAPNYA
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <CTASection />
      </div>
    </div>
  );
}
