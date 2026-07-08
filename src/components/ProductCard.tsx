import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { StarRating } from "./StarRating";
import { productImage, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$productId"
      params={{ productId: product.id }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={productImage(product)}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.weight && (
          <span className="absolute end-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-primary-foreground backdrop-blur">
            {product.weight}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 min-h-[2.75rem] text-base font-bold leading-snug text-card-foreground">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <StarRating value={product.rating} size={14} />
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="mt-auto flex items-baseline gap-1 pt-2">
          <span className="text-xl font-extrabold text-accent">{product.price}</span>
          <span className="text-sm font-bold text-muted-foreground">جنيه</span>
        </div>
      </div>
    </Link>
  );
}
