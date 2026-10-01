export type Category =
  | "Lip Series"
  | "Face Series"
  | "Eye Series"
  | "Skin Care"
  | "Poise";

export interface Product {
  name: string;
  category: Category;
  price: number; // harga PROMO
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
  { name: "Lip Cream", category: "Lip Series", price: 39000 },
  {
    name: "Lip Velvet",
    category: "Lip Series",
    price: 45000,
    description: "Warna velvet yang ringan untuk tampilan bibir natural.",
    badge: "Unggulan",
  },
  { name: "Long Lasting", category: "Lip Series", price: 28500 },
  { name: "Lip Tint", category: "Lip Series", price: 30750 },

  // FACE SERIES
  {
    name: "Cushion",
    category: "Face Series",
    price: 90000,
    description: "Complexion ringan dengan hasil natural effortless.",
    badge: "Unggulan",
  },
  {
    name: "Loose Powder",
    category: "Face Series",
    price: 26250,
    variant: "Silver & Biru",
  },
  { name: "Compact Powder", category: "Face Series", price: 27000 },
  {
    name: "TWC",
    category: "Face Series",
    price: 33750,
    variant: "Silver & Biru",
  },

  // EYE SERIES
  { name: "Eye Brow Pencil", category: "Eye Series", price: 28500 },
  { name: "Eye Brow Matic", category: "Eye Series", price: 34875 },
  { name: "Eye Liner Gel", category: "Eye Series", price: 28875 },
  { name: "Eye Liner Liquid", category: "Eye Series", price: 50250 },
  { name: "Maskara", category: "Eye Series", price: 48750 },
  { name: "Eye Shadow", category: "Eye Series", price: 45000 },

  // SKIN CARE
  { name: "Facial Wash/Foam", category: "Skin Care", price: 24750 },
  { name: "Micellar Water", category: "Skin Care", price: 21600 },
  { name: "Serum", category: "Skin Care", price: 21600 },
  { name: "Sun Screen", category: "Skin Care", price: 27000 },
  { name: "Day Cream", category: "Skin Care", price: 36000 },
  { name: "Night Cream", category: "Skin Care", price: 36000 },

  // POISE
  { name: "Poise F. Foam All", category: "Poise", price: 24000 },
];

export const FEATURED_PRODUCTS: Product[] = PRODUCTS.filter((p) =>
  ["Lip Velvet", "Cushion"].includes(p.name),
);

export function formatPrice(value: number): string {
  return "Rp" + value.toLocaleString("id-ID");
}
