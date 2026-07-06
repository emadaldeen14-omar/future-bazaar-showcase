import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { brand, categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <img src={logo} alt="شعار" width={44} height={44} className="h-11 w-11" />
            <span className="text-lg font-extrabold">{brand.name}</span>
          </div>
          <p className="text-sm text-primary-foreground/70">{brand.slogan}</p>
          <div className="flex gap-3">
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" aria-label="واتساب" className="rounded-full bg-white/10 p-2.5 transition hover:bg-accent">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" aria-label="فيسبوك" className="rounded-full bg-white/10 p-2.5 transition hover:bg-accent">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="انستجرام" className="rounded-full bg-white/10 p-2.5 transition hover:bg-accent">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-bold">التصنيفات</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}>
                <Link
                  to="/category/$categoryId"
                  params={{ categoryId: c.id }}
                  className="transition hover:text-primary-foreground"
                >
                  {c.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold">تواصل معنا</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{brand.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-accent" />
              <span>{brand.hours}</span>
            </li>
            {brand.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${p}`} dir="ltr" className="transition hover:text-primary-foreground">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold">اطلب الآن</h4>
          <p className="mb-4 text-sm text-primary-foreground/70">
            انضم إلى مجتمعنا على واتساب لمتابعة أحدث العروض والأسعار.
          </p>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            مجتمع واتساب
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {brand.name} — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
