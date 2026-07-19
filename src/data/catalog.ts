import data from "../../public/data.json";

export type Product = {
  id: string;
  name: string;
  price: number;
  weight?: string;
  categoryId: string;
  image?: string;
  rating: number;
  reviews: number;
  description: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  short: string;
  image: string;
  description: string;
};

export const categories: Category[] = data.categories as Category[];

const reviewsList = data.reviews as Array<{ name: string; text: string }>;

export function reviewsFor(id: string) {
  const seed = id.length;
  return [reviewsList[seed % 5], reviewsList[(seed + 2) % 5], reviewsList[(seed + 4) % 5]];
}

function slugify(name: string, i: number) {
  return `p-${i}-${name.replace(/[^\u0600-\u06FF0-9]+/g, "-").slice(0, 24)}`;
}

type RawProduct = {
  categoryId: string;
  name: string;
  price: number;
  weight?: string;
  image?: string;
};

export const products: Product[] = (data.products as RawProduct[]).map((p, i) => ({
  id: slugify(p.name, i),
  name: p.name,
  price: p.price,
  weight: p.weight,
  categoryId: p.categoryId,
  image: p.image,
  rating: 4 + ((i * 7) % 10) / 10,
  reviews: 8 + ((i * 13) % 90),
  description:
    "منتج طازج مجمد بأفضل جودة، مُعد بعناية للحفاظ على النكهة والقيمة الغذائية. أسعارنا تنافسية وجودتنا مضمونة.",
  featured: i % 7 === 0,
}));

export const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

const fallbackCategoryImage = categories[0]?.image ?? "";

export function categoryImage(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.image ?? fallbackCategoryImage;
}

export function productImage(product: Product) {
  return product.image ?? categoryImage(product.categoryId);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export const brand = data.brand as {
  name: string;
  slogan: string;
  badges: string[];
  hours: string;
  address: string;
  phones: string[];
  whatsapp: string;
};
