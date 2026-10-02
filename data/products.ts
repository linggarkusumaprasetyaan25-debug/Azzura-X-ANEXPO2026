export type Category =
  | "Lip Series"
  | "Face Series"
  | "Eye Series"
  | "Skin Care"
  | "Poise";

export interface Product {
  name: string;
  category: Category;
  price: number; // harga yang ditampilkan di website
  variant?: string;
  description?: string;
  image?: string; // path di /public, kosongkan untuk placeholder
  badge?: string;
}

export const CATEGORY_ORDER: Category[] = [
  "Lip Series",
  "Face Series",
  "Eye Series",
  "Skin Care",
  "Poise",
];

export const CATEGORY_PROMO: Partial<Record<Category, string>> = {
  "Lip Series": "DISCOUNT 25%",
  "Face Series": "DISCOUNT 25%",
  "Eye Series": "DISCOUNT 25%",
  "Skin Care": "DISCOUNT 10%",
  // Poise: tidak ada info diskon — jangan tampilkan
};

export const PRODUCTS: Product[] = [
  // LIP SERIES
  {
    name: "Matte Lipcream",
    category: "Lip Series",
    price: 44000,
    image: "/images/products/matte-lipcream.jpg",
  },
  {
    name: "Long Lasting",
    category: "Lip Series",
    price: 33500,
    image: "/images/products/long-lasting.jpg",
  },
  {
    name: "Lip Velvet",
    category: "Lip Series",
    price: 50000,
    description: "Warna velvet yang ringan untuk tampilan bibir natural.",
    image: "/images/products/lip-velvet.jpg",
    badge: "Unggulan",
  },
  {
    name: "Jelly Liptint",
    category: "Lip Series",
    price: 36000,
    image: "/images/products/jelly-liptint.jpg",
  },

  // FACE SERIES
  {
    name: "Luminous Cushion",
    category: "Face Series",
    price: 95000,
    description: "Complexion ringan dengan hasil natural effortless.",
    image: "/images/products/luminous-cushion.jpg",
    badge: "Unggulan",
  },
  {
    name: "Loose Powder",
    category: "Face Series",
    price: 31000,
    variant: "Silver & Biru",
    image: "/images/products/loose-powder.jpg",
  },
  {
    name: "Compact Powder",
    category: "Face Series",
    price: 32000,
    image: "/images/products/compact-powder.jpg",
  },
  {
    name: "Two Way Cake",
    category: "Face Series",
    price: 39000,
    variant: "Silver & Biru",
    image: "/images/products/two-way-cake.jpg",
  },

  // EYE SERIES
  {
    name: "Eyebrowmatic",
    category: "Eye Series",
    price: 40000,
    image: "/images/products/eyebrowmatic.jpg",
  },
  {
    name: "Eyebrow Pencil",
    category: "Eye Series",
    price: 33500,
    image: "/images/products/eyebrow-pencil.png",
  },
  {
    name: "Eyeliner Gel",
    category: "Eye Series",
    price: 34000,
    image: "/images/products/eyeliner-gel.png",
  },
  {
    name: "Eyeliner Liquid",
    category: "Eye Series",
    price: 55000,
    image: "/images/products/eyeliner-liquid.png",
  },
  {
    name: "Maskara",
    category: "Eye Series",
    price: 55000,
    image: "/images/products/maskara.png",
  },
  {
    name: "Eyeshadow",
    category: "Eye Series",
    price: 50000,
    image: "/images/products/eyeshadow.png",
  },

  // SKIN CARE
  {
    name: "Facial Foam / Whip",
    category: "Skin Care",
    price: 30000,
    image: "/images/products/facial-foam.png",
  },
  {
    name: "Micellar Water",
    category: "Skin Care",
    price: 27000,
    image: "/images/products/micellar-water.png",
  },
  {
    name: "Serum",
    category: "Skin Care",
    price: 27000,
    image: "/images/products/serum.png",
  },
  {
    name: "Sunscreen",
    category: "Skin Care",
    price: 32000,
    image: "/images/products/sunscreen.png",
  },
  {
    name: "Day Cream",
    category: "Skin Care",
    price: 41000,
    image: "/images/products/day-cream.png",
  },
  {
    name: "Night Cream",
    category: "Skin Care",
    price: 41000,
    image: "/images/products/night-cream.png",
  },

  // POISE
  {
    name: "Poise",
    category: "Poise",
    price: 29000,
    image: "/images/products/poise.png",
  },
];

export const FEATURED_PRODUCTS: Product[] = PRODUCTS.filter((p) =>
  ["Lip Velvet", "Luminous Cushion"].includes(p.name),
);

export function formatPrice(value: number): string {
  return "Rp" + value.toLocaleString("id-ID");
}
