import { useState } from "react";
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const ORDER_PHONE = "201223890915";

export function CartDrawer() {
  const { items, total, isOpen, setOpen, removeItem, setQty, clear } = useCart();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function handleOrder() {
    const addr = address.trim();
    const tel = phone.trim();
    if (!addr || !tel) {
      setError("من فضلك أدخل العنوان ورقم الهاتف.");
      return;
    }
    setError("");

    const lines = [
      `• العنوان: ${addr} | الهاتف: ${tel}`,
      ...items.map((i) => `• ${i.name} × ${i.qty} = ${i.qty * i.price} جنيه`),
      "",
      `الإجمالي: ${total} جنيه`,
    ];
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${ORDER_PHONE}?text=${message}`, "_blank", "noopener");
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      />

      {/* Panel (start side for RTL) */}
      <aside
        className={`fixed inset-y-0 start-0 z-[70] flex w-full max-w-md flex-col bg-background shadow-card transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"
        }`}
        role="dialog"
        aria-label="سلة الطلبات"
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 text-lg font-black text-primary">
            <ShoppingCart className="h-5 w-5" />
            سلة الطلبات
          </h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="إغلاق"
            className="rounded-full p-2 text-foreground hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingCart className="h-12 w-12 text-muted-foreground/40" />
            <p className="font-bold text-foreground">السلة فارغة</p>
            <p className="text-sm text-muted-foreground">أضف منتجات لبدء طلبك.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {items.map((i) => (
                <div
                  key={i.id}
                  className="flex gap-3 rounded-2xl border border-border bg-card p-3"
                >
                  <img
                    src={i.image}
                    alt={i.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="line-clamp-2 text-sm font-bold text-card-foreground">{i.name}</p>
                    <p className="mt-0.5 text-sm font-extrabold text-accent">
                      {i.price} جنيه
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(i.id, i.qty - 1)}
                          aria-label="إنقاص"
                          className="rounded-full border border-border p-1 hover:bg-secondary"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-6 text-center text-sm font-bold">{i.qty}</span>
                        <button
                          onClick={() => setQty(i.id, i.qty + 1)}
                          aria-label="زيادة"
                          className="rounded-full border border-border p-1 hover:bg-secondary"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(i.id)}
                        aria-label="حذف"
                        className="rounded-full p-1.5 text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clear}
                className="mt-2 text-sm font-bold text-muted-foreground hover:text-destructive"
              >
                تفريغ السلة
              </button>
            </div>

            <div className="space-y-3 border-t border-border px-5 py-4">
              <div>
                <label className="mb-1 block text-sm font-bold text-foreground">العنوان</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  maxLength={200}
                  placeholder="أدخل عنوان التوصيل"
                  className="w-full rounded-xl border border-border bg-secondary/60 px-3 py-2.5 text-sm outline-none focus:border-accent focus:bg-card"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-bold text-foreground">رقم الهاتف</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d+\s]/g, ""))}
                  inputMode="tel"
                  maxLength={20}
                  placeholder="أدخل رقم هاتفك"
                  className="w-full rounded-xl border border-border bg-secondary/60 px-3 py-2.5 text-sm outline-none focus:border-accent focus:bg-card"
                />
              </div>

              {error && <p className="text-sm font-bold text-destructive">{error}</p>}

              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-bold text-muted-foreground">الإجمالي</span>
                <span className="text-xl font-extrabold text-accent">{total} جنيه</span>
              </div>

              <button
                onClick={handleOrder}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-soft transition hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                إتمام الطلب عبر واتساب
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
