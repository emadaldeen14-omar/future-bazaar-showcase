import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { getCategory, products } from "@/data/catalog";

export const Route = createFileRoute("/category/$categoryId")({
  loader: ({ params }) => {
    const category = getCategory(params.categoryId);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "التصنيف غير موجود" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.category.name} — مجمدات بورصة المستقبل` },
        { name: "description", content: loaderData.category.description },
        { property: "og:title", content: loaderData.category.name },
        { property: "og:description", content: loaderData.category.description },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">التصنيف غير موجود</h1>
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

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = products.filter((p) => p.categoryId === category.id);

  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          width={800}
          height={800}
          className="h-56 w-full object-cover md:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/20" />
        <div className="container-page absolute inset-x-0 bottom-0 pb-8 text-primary-foreground">
          <h1 className="text-3xl font-black md:text-4xl">{category.name}</h1>
          <p className="mt-2 max-w-xl text-primary-foreground/85">{category.description}</p>
        </div>
      </section>

      <div className="container-page py-12">
        <p className="mb-6 text-muted-foreground">{items.length} منتج</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
