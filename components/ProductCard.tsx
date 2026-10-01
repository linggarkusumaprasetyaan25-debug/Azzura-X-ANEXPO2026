import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";
import { SITE } from "@/data/site";

export default function ProductCard({
  product,
  showCta = false,
}: {
  product: Product;
  showCta?: boolean;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#f3e3d8] bg-white transition hover:shadow-lg">
      <div className="relative aspect-square w-full bg-[#faf2ec]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
            <span className="font-display text-2xl font-bold text-[#b06252]/40">
              AZZURA
            </span>
            <span className="text-xs tracking-widest uppercase text-[#8f4c40]/60">
              {product.name}
            </span>
            <span className="mt-1 text-[11px] text-[#8f4c40]/50">
              Foto menyusul — ganti di data/products.ts
            </span>
          </div>
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-[#2c1f21] px-3 py-1 text-[11px] font-semibold text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#b06252]">
          {product.category}
        </p>
        <h3 className="font-display mt-1 text-lg font-bold text-[#2c1f21]">
          {product.name}
          {product.variant ? (
            <span className="block text-sm font-normal text-[#8f4c40]">
              {product.variant}
            </span>
          ) : null}
        </h3>
        <p className="mt-2 text-lg font-bold text-[#2c1f21]">
          {formatPrice(product.price)}
        </p>
        {product.description && (
          <p className="mt-2 text-sm leading-relaxed text-[#3d2b2e]/70">
            {product.description}
          </p>
        )}
        {showCta && (
          <div className="mt-4 flex gap-2">
            <Link
              href="/catalog"
              className="flex-1 rounded-full border border-[#2c1f21] px-4 py-2.5 text-center text-sm font-semibold text-[#2c1f21] transition hover:bg-[#2c1f21] hover:text-white"
            >
              Lihat di Katalog
            </Link>
            <a
              href={SITE.openPoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-[#b06252] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#8f4c40]"
            >
              Open PO
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
