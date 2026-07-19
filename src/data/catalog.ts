import fastfood from "@/assets/cat-fastfood.jpg";
import burgers from "@/assets/cat-burgers.jpg";
import brazilian from "@/assets/cat-brazilian.jpg";
import seafood from "@/assets/cat-seafood.jpg";
import dairy from "@/assets/cat-dairy.jpg";
import misc from "@/assets/cat-misc.jpg";
import grocery from "@/assets/cat-grocery.jpg";
import saltedFish from "@/assets/cat-salted-fish.jpg";

import imgEggsRed from "@/assets/prod-eggs-red.jpg";
import imgEggsWhite from "@/assets/prod-eggs-white.jpg";
import imgEggsBaladi from "@/assets/prod-eggs-baladi.jpg";
import imgFeseekh from "@/assets/prod-feseekh.jpg";
import imgRengaa from "@/assets/prod-rengaa.jpg";

// Per-product images
import imgStripsDolphin from "@/assets/ستريبس دولفين.webp";
import imgStripsWal3ten from "@/assets/ستريبس ولعتين.webp";
import imgStripsMeza from "@/assets/ستريبسميزه.webp";
import imgChickenBreast from "@/assets/صدور-فراشه-نساير-سمارت-1-كيلو.webp";
import imgWagbaShahd from "@/assets/وجبة شهد فرخه كامله 12 قطعه.webp";
import imgWagbaChictita from "@/assets/وجبة شيكتيتا.webp";
import imgBurgerJustFrozen from "@/assets/برجر جاست فروزن.webp";
import imgBurgerMitko from "@/assets/برجر ميتكو الاسود الجامبو.webp";
import imgKoftaJustFrozen from "@/assets/كفته جاست فروزن.webp";
import imgKoftaDolphin from "@/assets/كفته دولفين.webp";
import imgHotDogMitko from "@/assets/هوت دوج ميتكو.png";
import imgLiverSogod from "@/assets/كبده عصافيرى متبله سجود.webp";
import imgBoury from "@/assets/بوري.webp";
import imgMackerel from "@/assets/ماكريل يابانى.webp";
import imgButterBaqari from "@/assets/زبدة بقرى المصريين.webp";
import imgButterGamousi from "@/assets/زبدة جاموسي المصريين.webp";
import imgBaqariNz from "@/assets/بقرى بديل النيوزلندى.webp";
import imgMozzarella from "@/assets/موزاريلا.webp";
import imgMix from "@/assets/مكس.webp";
import imgCheddarSauce from "@/assets/صوص شيدر.webp";
import imgRomyCheese from "@/assets/جبنة رومي.webp";
import imgTarekCheese from "@/assets/جبنه الطارق.jpg";
import imgFetaCheese from "@/assets/جبن المصريين فيتا.webp";
import imgMesh from "@/assets/مش المصريين.webp";
import imgMombar from "@/assets/ممبار العابد 2.webp";
import imgEshSoury from "@/assets/عيش سوري.webp";
import imgSalami from "@/assets/سلامي.webp";
import imgCreamaLabani from "@/assets/كريمه لباني.webp";

// ============================================================
// PER-PRODUCT IMAGES
// To give a product its own picture:
//   1. Drop the image file in: src/assets/products/
//   2. Import it here, e.g.:
//        import stripsDolphin from "@/assets/products/strips-dolphin.jpg";
//   3. Add a 5th value to that product's row in the `raw` list below:
//        ["fastfood", "ستريبس دولفين", 200, "عبوة", stripsDolphin],
// Products without a 5th value fall back to their category image.
// ============================================================

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

export const categories: Category[] = [
  {
    id: "fastfood",
    name: "الأكلات السريعة ومصنعات الدجاج",
    short: "أكلات سريعة ودجاج",
    image: fastfood,
    description: "ستريبس، صدور، ووجبات دجاج جاهزة بأفضل جودة وطعم لا يقاوم.",
  },
  {
    id: "burgers",
    name: "البرجر والكفتة ومصنعات اللحوم",
    short: "برجر وكفتة ولحوم",
    image: burgers,
    description: "برجر، كفتة، سجق، وهوت دوج من أجود مصنعات اللحوم.",
  },
  {
    id: "brazilian",
    name: "اللحوم البرازيلي",
    short: "لحوم برازيلي",
    image: brazilian,
    description: "مفروم، بفتيك، وكبدة برازيلي طازجة مجمدة.",
  },
  {
    id: "seafood",
    name: "الأسماك والمأكولات البحرية",
    short: "أسماك وسي فود",
    image: seafood,
    description: "بوري، سردين، ماكريل، وجمبري من أطيب البحار.",
  },
  {
    id: "dairy",
    name: "الزبدة والأجبان والموزاريلا",
    short: "زبدة وأجبان",
    image: dairy,
    description: "زبدة طبيعية، أجبان، وموزاريلا 100% طبيعية.",
  },
  {
    id: "misc",
    name: "المتنوع",
    short: "منتجات متنوعة",
    image: misc,
    description: "ممبار، مدخنات، مخبوزات، ومنتجات متنوعة أخرى.",
  },
  {
    id: "grocery",
    name: "البقاله",
    short: "البقاله",
    image: grocery,
    description: "بيض طازج بأنواعه: أحمر، أبيض، وبلدي.",
  },
  {
    id: "salted-fish",
    name: "الاسماك المملحه",
    short: "أسماك مملحة",
    image: saltedFish,
    description: "فسيخ ورنجة بأجود الأنواع وبطعم أصيل.",
  },
];

const reviewsList = [
  { name: "أحمد ك.", text: "لحوم عالية الجودة وطازجة جداً، تعامل راقٍ." },
  { name: "منى س.", text: "جبنة طازجة وطعمها رائع، هطلب تاني أكيد." },
  { name: "خالد م.", text: "أسعار تنافسية والجودة مضمونة، أنصح بيهم." },
  { name: "سارة ع.", text: "التوصيل سريع والمنتجات مغلفة بعناية." },
  { name: "يوسف ر.", text: "أفضل مكان للمجمدات في المنطقة بجد." },
];

export function reviewsFor(id: string) {
  const seed = id.length;
  return [reviewsList[seed % 5], reviewsList[(seed + 2) % 5], reviewsList[(seed + 4) % 5]];
}

const raw: Array<[string, string, number, string?, string?]> = [
  // fastfood
  ["fastfood", "ستريبس دولفين كيلو ", 195, "عبوة", imgStripsDolphin],
  ["fastfood", "ستريبس ولعتين كيلو ", 280, "عبوة", imgStripsWal3ten],
  ["fastfood", "ستريبس ميزه / الحريف / أطياب كيلو ", 215, "عبوة", imgStripsMeza],
  ["fastfood", "صدور فراشه سمارت كيلو ", 270, "عبوة", imgChickenBreast],
  ["fastfood", "وجبة شهد فرخه كامله 12 قطعه", 215, "12 قطعة", imgWagbaShahd],
  ["fastfood", "وجبة شيكتيتا", 185, "12 قطعة", imgWagbaChictita],
  // burgers
  ["burgers", "برجر جاست فروزن ", 230, "800 جرام", imgBurgerJustFrozen],
  ["burgers", "برجر لحوم الاسكندرانى", 115, "نص كيلو"],
  ["burgers", "برجر ميتكو الاسود الجامبو", 220, "10 قطع", imgBurgerMitko],
  ["burgers", "برجر شيكتيتا", 190, "20ق كيلو"],
  ["burgers", "كفته لحوم الاسكندرانى", 115, "نص كيلو"],
  ["burgers", "كفته جاست فروزن", 230, "800 جرام", imgKoftaJustFrozen],
  ["burgers", "كفته دولفين مشويه على الفحم جاهزه على التسخين", 230, "كيلو", imgKoftaDolphin],
  ["burgers", "عجينة كفته دولفين", 160, "كيلو", imgKoftaDolphin],
  ["burgers", "هوت دوج ميتكو", 140, "عبوة", imgHotDogMitko],
  ["burgers", "سجق شرقى لحوم الاسكندرانى", 115, "نص كيلو"],
  ["burgers", "كبده عصافيرى متبله سوجود", 95, "عبوة", imgLiverSogod],
  ["burgers", "كبده عصافيرى او شرائح لحوم الاسكندرانى", 100, "نص كيلو"],
  // brazilian
  ["brazilian", "مفروم برازيلى", 140, "نص كيلو"],
  ["brazilian", "سجق شرقى", 115, "نص كيلو"],
  ["brazilian", "برجر لحم", 115, "نص كيلو"],
  ["brazilian", "بفتيك / لحم قطع", 160, "نص كيلو"],
  ["brazilian", "كبدة عصافيرى / كبدة شرائح", 100, "نص كيلو"],
  ["brazilian", "كبدة متبله جاهزه", 95, "نص كيلو"],
  // seafood
  ["seafood", "بورى مجمد", 130, "كيلو", imgBoury],
  ["seafood", "سردين عمانى كبير", 85, "كيلو"],
  ["seafood", "سردين عمانى جامبو", 90, "كيلو"],
  ["seafood", "ماكريل يابانى", 160, "كيلو", imgMackerel],
  ["seafood", "عرض جمبرى سى فود", 395, "عرض"],
  ["seafood", "جمبرى عمانى مقاس 50/40", 480, "كيلو"],
  ["seafood", "نص سى فود", 60, "نص"],
  // dairy
  ["dairy", "زبدة بقرى المصريين", 295, "كيلو", imgButterBaqari],
  ["dairy", "زبدة جاموسى", 325, "كيلو", imgButterGamousi],
  ["dairy", "بقرى بديل النيوزلندى", 325, "كيلو", imgBaqariNz],
  ["dairy", "زبدة بقرى بديل النيوزلندى أو جاموسى طبيعي", 80, "ربع كيلو"],
  ["dairy", "موزاريلا", 120, "نص كيلو", imgMozzarella],

  ["dairy", "موزاريلا كيلو", 220, "نص كيلو", imgMozzarella],
  ["dairy", "مكس", 115, "نص كيلو", imgMix],
  ["dairy", "صوص شيدر طبيعي", 105, "نص كيلو", imgCheddarSauce],
  ["dairy", "جبن المصريين كريمى شيدر أو رومى طبيعي 100%", 90, "500 جرام", imgRomyCheese],
  ["dairy", "جبن الطارق دمياطى طبيعى العلبة صافى", 175, "كيلو", imgTarekCheese],
  ["dairy", "جبن المصريين فيتا نباتى العبوة الاقتصادية", 250, "2.5 كيلو", imgFetaCheese],
  ["dairy", "مش اللهلبو دمياطى", 60, "نص كيلو", imgMesh],
  // misc
  ["misc", "ممبار العابد متضف", 50, "عبوة", imgMombar],
  ["misc", "ممبار العابد محشى", 100, "عبوة", imgMombar],
  ["misc", "جوز سمان العابد", 95, "عبوة"],
  ["misc", "عيش سورى 7 رغيف / جلاش الحريف / لفة رقاق طرى", 25, "عبوة", imgEshSoury],
  ["misc", "روزبيف / سلامة / تركى مدخن ربع / نقانق", 80, "ربع / نص كيلو", imgSalami],
  ["misc", "كريمه لبانى", 55, "نص كيلو", imgCreamaLabani],
  // grocery
  ["grocery", "بيض احمر", 100, "كرتونة", imgEggsRed],
  ["grocery", "بيض ابيض", 100, "كرتونة", imgEggsWhite],
  ["grocery", "بيض بلدي", 100, "كرتونة", imgEggsBaladi],
  // salted-fish
  ["salted-fish", "فسيخ", 100, "كيلو", imgFeseekh],
  ["salted-fish", "رنجه", 100, "كيلو", imgRengaa],
];

function slugify(name: string, i: number) {
  return `p-${i}-${name.replace(/[^\u0600-\u06FF0-9]+/g, "-").slice(0, 24)}`;
}

export const products: Product[] = raw.map(([categoryId, name, price, weight, image], i) => ({
  id: slugify(name, i),
  name,
  price,
  weight,
  categoryId,
  image,
  rating: 4 + ((i * 7) % 10) / 10,
  reviews: 8 + ((i * 13) % 90),
  description:
    "منتج طازج مجمد بأفضل جودة، مُعد بعناية للحفاظ على النكهة والقيمة الغذائية. أسعارنا تنافسية وجودتنا مضمونة.",
  featured: i % 7 === 0,
}));

export const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

export function categoryImage(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.image ?? fastfood;
}

// Returns the product's own image if it has one, otherwise its category image.
export function productImage(product: Product) {
  return product.image ?? categoryImage(product.categoryId);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export const brand = {
  name: "مجمدات بورصة المستقبل",
  slogan: "جودة تثق فيها .. وطعم لا يقاوم",
  badges: ["طازج مجمد بأفضل جودة", "أسعارنا تنافسية وجودتنا مضمونة"],
  hours: "من 10 صباحاً إلى 10 مساءً يومياً",
  address: "قطاع الـ T - بجوار منفذ التموين ومكتبة الرضا",
  phones: ["01010732475", "01156132388"],
  whatsapp: "https://chat.whatsapp.com/JoxcWNxLRv3BaJCJmQjRdX",
};
