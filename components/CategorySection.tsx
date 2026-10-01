import { CATEGORY_PROMO, PRODUCTS, type Category } from "@/data/products";
import ProductCard from "./ProductCard";

export default function CategorySection({ category }: { category: Category }) {
  const items = PRODUCTS.filter((p) => p.category === category);
  const promo = CATEGORY_PROMO[category];

  return (
    <section aria-label={category} className="scroll-mt-20">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-2xl font-bold text-[#2c1f21] uppercase tracking-wide">
          {category}
        </h2>
        {promo && (
          <span className="rounded-full bg-[#fbe9e5] px-4 py-1.5 text-xs font-bold tracking-wider text-[#8f4c40]">
            {promo}
          </span>
        )}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  );
}
