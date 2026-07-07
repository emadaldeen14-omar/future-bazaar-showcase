import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ArrowRight, Snowflake, Thermometer, Package, MessageCircle } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { ProductCard } from "@/components/ProductCard";
import {
  brand,
  getCategory,
  getProduct,
  productImage,
  products,
  reviewsFor,
} from "@/data/catalog";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "المنتج غير موجود" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — مجمدات بورصة المستقبل` },
        { name: "description", content: `${product.name} بسعر ${product.price} جنيه. ${product.description}` },
        { property: "og:title", content: product.name },
        { property: "og:description", content: `${product.name} بسعر ${product.price} جنيه.` },
        { property: "og:image", content: categoryImage(product.categoryId) },
        { name: "twitter:image", content: categoryImage(product.categoryId) },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">المنتج غير موجود</h1>
      <Link to="/catalog" search={{ q: undefined, cat: undefined }} className="mt-4 inline-block text-accent hover:underline">
        العودة للمنتجات
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">حدث خطأ</h1>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const category = getCategory(product.categoryId);
  const reviews = reviewsFor(product.id);
  const related = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  const [userRating, setUserRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container-page py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-accent">الرئيسية</Link>
        <ArrowRight className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link
              to="/category/$categoryId"
              params={{ categoryId: category.id }}
              className="hover:text-accent"
            >
              {category.short}
            </Link>
            <ArrowRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-card">
          <img
            src={categoryImage(product.categoryId)}
            alt={product.name}
            width={800}
            height={800}
            className="aspect-square w-full object-cover"
          />
          {product.weight && (
            <span className="absolute end-4 top-4 rounded-full bg-primary/90 px-4 py-1.5 text-sm font-bold text-primary-foreground backdrop-blur">
              {product.weight}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-black text-primary md:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <StarRating value={product.rating} size={18} />
            <span className="text-sm text-muted-foreground">
              {product.rating.toFixed(1)} ({product.reviews} تقييم)
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-accent">{product.price}</span>
            <span className="text-lg font-bold text-muted-foreground">جنيه مصري</span>
          </div>

          <p className="mt-5 leading-relaxed text-foreground/80">{product.description}</p>

          {/* Info cards */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: Snowflake, label: "طازج مجمد" },
              { icon: Thermometer, label: "يُحفظ مجمداً -18°" },
              { icon: Package, label: product.weight ?? "عبوة" },
            ].map((f) => (
              <div key={f.label} className="rounded-2xl border border-border bg-card p-4 text-center">
                <f.icon className="mx-auto h-6 w-6 text-accent" />
                <p className="mt-2 text-xs font-bold text-foreground">{f.label}</p>
              </div>
            ))}
          </div>

          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-soft transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            اطلب هذا المنتج عبر واتساب
          </a>
        </div>
      </div>

      {/* Storage / nutrition info */}
      <section className="mt-12 grid gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
        <div>
          <h2 className="text-xl font-bold text-primary">معلومات التخزين</h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>• يُحفظ مجمداً على درجة حرارة -18° مئوية.</li>
            <li>• يُحفظ في الثلاجة لمدة يومين بعد إذابة التجميد.</li>
            <li>• لا يُعاد تجميد المنتج بعد إذابته.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">القيمة الغذائية</h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>• منتج طازج بأفضل جودة ومصادر موثوقة.</li>
            <li>• خالٍ من المواد الحافظة الضارة.</li>
            <li>• مُعبأ بعناية للحفاظ على النكهة والقيمة الغذائية.</li>
          </ul>
        </div>
      </section>

      {/* Interactive rating + reviews */}
      <section className="mt-12">
        <h2 className="text-2xl font-black text-primary">التقييمات والمراجعات</h2>

        <div className="mt-6 rounded-3xl border border-border bg-secondary/50 p-6 text-center">
          <p className="font-bold text-foreground">ما رأيك في هذا المنتج؟</p>
          <div className="mt-3 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const idx = i + 1;
              const active = idx <= (hover || userRating);
              return (
                <button
                  key={i}
                  type="button"
                  onMouseEnter={() => setHover(idx)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => {
                    setUserRating(idx);
                    setSubmitted(true);
                  }}
                  aria-label={`${idx} نجوم`}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={active ? "text-gold" : "text-muted-foreground/30"}
                    fill="currentColor"
                    size={32}
                  />
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="mt-3 text-sm font-bold text-accent">
              شكراً لك! تم تسجيل تقييمك ({userRating}/5)
            </p>
          )}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <StarRating value={5} size={14} />
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">"{r.text}"</p>
              <p className="mt-4 text-sm font-bold text-primary">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-primary">منتجات مشابهة</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
