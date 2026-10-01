import type { Metadata } from "next";
import CategorySection from "@/components/CategorySection";
import CTASection from "@/components/CTASection";
import { CATEGORY_ORDER } from "@/data/products";

export const metadata: Metadata = {
  title: "Katalog — AZZURA X ANEXPO2026",
  description:
    "Katalog lengkap AZZURA Cosmetics: Lip Series, Face Series, Eye Series, Skin Care, dan Poise dengan harga promo.",
};

export default function Catalog() {
  return (
    <div className="fade-in mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#b06252]">
        Katalog Produk
      </p>
      <h1 className="font-display mt-2 text-4xl font-bold text-[#2c1f21]">
        Semua Produk
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#3d2b2e]/70 sm:text-base">
        Semua harga di bawah adalah harga setelah diskon. Pemesanan dilakukan
        melalui Open PO.
      </p>

      <div className="mt-8 space-y-12">
        {CATEGORY_ORDER.map((cat) => (
          <CategorySection key={cat} category={cat} />
        ))}
      </div>

      <div className="mt-12">
        <CTASection />
      </div>
    </div>
  );
}
