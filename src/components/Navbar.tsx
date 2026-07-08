import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, Menu, X, Phone, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";
import { brand } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

function CartButton({ className = "" }: { className?: string }) {
  const { count, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="سلة الطلبات"
      className={`relative rounded-full p-2 text-foreground transition hover:bg-secondary ${className}`}
    >
      <ShoppingCart className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -end-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-accent-foreground">
          {count}
        </span>
      )}
    </button>
  );
}

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/catalog", label: "المنتجات" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Navbar() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    navigate({ to: "/catalog", search: { q: q || undefined, cat: undefined } });
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center gap-4 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="شعار" width={40} height={40} className="h-10 w-10" />
          <span className="hidden text-lg font-extrabold leading-tight text-primary sm:block md:text-xl">
            بورصة المستقبل
          </span>
        </Link>

        <form onSubmit={submit} className="relative mx-auto hidden w-full max-w-md md:block">
          <Search className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث عن منتج..."
            className="w-full rounded-full border border-border bg-secondary/60 py-2.5 pe-10 ps-4 text-sm outline-none transition focus:border-accent focus:bg-card"
          />
        </form>

        <nav className="hidden shrink-0 items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              search={l.to === "/catalog" ? { q: undefined, cat: undefined } : undefined}
              className="rounded-full px-4 py-2 text-sm font-bold text-foreground/80 transition hover:bg-secondary hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="ms-auto hidden shrink-0 items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-soft transition hover:opacity-90 lg:ms-0 lg:flex"
        >
          <Phone className="h-4 w-4" />
          اطلب الآن
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="ms-auto rounded-full p-2 text-foreground lg:hidden"
          aria-label="القائمة"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page space-y-3 py-4">
            <form onSubmit={submit} className="relative">
              <Search className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="ابحث عن منتج..."
                className="w-full rounded-full border border-border bg-secondary/60 py-2.5 pe-10 ps-4 text-sm outline-none"
              />
            </form>
            <div className="flex flex-col">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  search={l.to === "/catalog" ? { q: undefined, cat: undefined } : undefined}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-bold text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-accent-foreground"
              >
                <Phone className="h-4 w-4" />
                اطلب عبر واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
