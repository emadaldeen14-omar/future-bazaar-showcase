import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Truck, Snowflake } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { ProductCard } from "@/components/ProductCard";
import { brand, categories, featuredProducts } from "@/data/catalog";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-secondary via-background to-background">
        <div className="container-page grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {brand.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent"
                >
                  {b}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-black leading-tight text-primary md:text-6xl">
              {brand.name}
            </h1>
            <p className="max-w-md text-lg font-medium text-muted-foreground md:text-xl">
              {brand.slogan}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/catalog"
                search={{ q: undefined, cat: undefined }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                تصفح المنتجات
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition hover:bg-secondary"
              >
                اطلب عبر واتساب
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={heroImg}
                alt="تشكيلة منتجات طازجة مجمدة"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-card">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
          {[
            { icon: Snowflake, title: "طازج مجمد", text: "أفضل جودة وحفظ مثالي" },
            { icon: BadgeCheck, title: "جودة مضمونة", text: "منتجات مختارة بعناية" },
            { icon: Truck, title: "أسعار تنافسية", text: "أفضل قيمة مقابل السعر" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
                <f.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-foreground">{f.title}</p>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-primary">التصنيفات</h2>
            <p className="mt-1 text-muted-foreground">اختر تصنيفك المفضل وابدأ التصفح</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/category/$categoryId"
              params={{ categoryId: c.id }}
              className="group relative overflow-hidden rounded-3xl shadow-soft transition hover:shadow-card"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <h3 className="text-xl font-extrabold">{c.short}</h3>
                <p className="mt-1 line-clamp-1 text-sm text-primary-foreground/80">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page pb-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-primary">منتجات مميزة</h2>
            <p className="mt-1 text-muted-foreground">مختارات من أفضل منتجاتنا</p>
          </div>
          <Link
            to="/catalog"
            search={{ q: undefined, cat: undefined }}
            className="hidden shrink-0 items-center gap-1 text-sm font-bold text-accent hover:underline sm:flex"
          >
            عرض الكل
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
