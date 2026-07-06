import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { SearchX } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/catalog";

type CatalogSearch = { q?: string; cat?: string };

export const Route = createFileRoute("/catalog")({
  validateSearch: (search: Record<string, unknown>): CatalogSearch => ({
    q: typeof search.q === "string" && search.q ? search.q : undefined,
    cat: typeof search.cat === "string" && search.cat ? search.cat : undefined,
  }),
  head: () => ({
    meta: [
      { title: "المنتجات — مجمدات بورصة المستقبل" },
      { name: "description", content: "تصفح جميع منتجات مجمدات بورصة المستقبل بالأسعار." },
      { property: "og:title", content: "المنتجات — مجمدات بورصة المستقبل" },
      { property: "og:description", content: "تصفح جميع المنتجات الطازجة المجمدة بالأسعار." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const { q, cat } = Route.useSearch();
  const navigate = Route.useNavigate();

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchQ = q ? p.name.includes(q) : true;
      const matchCat = cat ? p.categoryId === cat : true;
      return matchQ && matchCat;
    });
  }, [q, cat]);

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-black text-primary md:text-4xl">المنتجات</h1>
      <p className="mt-2 text-muted-foreground">
        {q ? `نتائج البحث عن "${q}" — ` : ""}
        {filtered.length} منتج
      </p>

      {/* Category filter chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => navigate({ search: { q, cat: undefined } })}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            !cat ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:bg-secondary"
          }`}
        >
          الكل
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => navigate({ search: { q, cat: c.id } })}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              cat === c.id
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card hover:bg-secondary"
            }`}
          >
            {c.short}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <SearchX className="h-12 w-12 text-muted-foreground" />
          <p className="text-lg font-bold text-foreground">لا توجد منتجات مطابقة</p>
          <Link
            to="/catalog"
            search={{ q: undefined, cat: undefined }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
          >
            عرض كل المنتجات
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
