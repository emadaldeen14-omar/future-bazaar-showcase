import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { brand } from "@/data/catalog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — مجمدات بورصة المستقبل" },
      { name: "description", content: `تواصل مع مجمدات بورصة المستقبل. العنوان: ${brand.address}. مواعيد العمل ${brand.hours}.` },
      { property: "og:title", content: "تواصل معنا — مجمدات بورصة المستقبل" },
      { property: "og:description", content: "تواصل معنا للطلب والاستفسار." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-black text-primary md:text-4xl">تواصل معنا</h1>
        <p className="mt-3 text-muted-foreground">{brand.slogan}</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <MapPin className="h-7 w-7 text-accent" />
          <h2 className="mt-4 text-lg font-bold text-foreground">العنوان</h2>
          <p className="mt-2 text-muted-foreground">{brand.address}</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <Clock className="h-7 w-7 text-accent" />
          <h2 className="mt-4 text-lg font-bold text-foreground">مواعيد العمل</h2>
          <p className="mt-2 text-muted-foreground">{brand.hours}</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <Phone className="h-7 w-7 text-accent" />
          <h2 className="mt-4 text-lg font-bold text-foreground">أرقام الطلبات</h2>
          <div className="mt-2 flex flex-col gap-1">
            {brand.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p}`}
                dir="ltr"
                className="text-start font-bold text-primary transition hover:text-accent"
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-accent/30 bg-accent/10 p-6">
          <div>
            <MessageCircle className="h-7 w-7 text-accent" />
            <h2 className="mt-4 text-lg font-bold text-foreground">مجتمع واتساب</h2>
            <p className="mt-2 text-muted-foreground">
              انضم إلينا لمتابعة أحدث العروض والأسعار والطلب مباشرة.
            </p>
          </div>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            انضم الآن
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl border border-border shadow-soft">
        <iframe
          title="الموقع"
          src="https://www.google.com/maps?q=Egypt&output=embed"
          className="h-72 w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
