# Shopping cart with WhatsApp order checkout

Add a client-side cart so users can collect products, adjust quantities, enter their **address** and **phone number**, then send the whole order as a pre-filled WhatsApp message to **01223890915** (international format `201223890915` → `https://wa.me/201223890915?text=...`). No backend — cart lives in React context and persists to `localStorage`.

## New files

**`src/context/CartContext.tsx`** — cart provider + `useCart()` hook.
- State: `items: { id, name, price, weight, image, qty }[]`, persisted to `localStorage` (key `bmc-cart`).
- Actions: `addItem(product)`, `removeItem(id)`, `setQty(id, qty)`, `clear()`, plus `isOpen`/`setOpen`.
- Derived: `count` (total qty), `total` (sum price×qty).

**`src/components/CartDrawer.tsx`** — slide-in panel (RTL, opens from the start side).
- Lists items with thumbnail, name, price, quantity +/- controls, remove button.
- Shows running total in جنيه.
- **Two input fields**: العنوان (address) and رقم الهاتف (phone number), both required before ordering.
- Empty state message when no items.
- **"إتمام الطلب عبر واتساب"** button: validates fields, builds the Arabic order message, then opens `https://wa.me/201223890915?text=<encoded>` in a new tab. Uses `encodeURIComponent` for the message.
- Optional "تفريغ السلة" (clear) link.

## Edited files

**`src/routes/__root.tsx`** — wrap the app in `<CartProvider>` and render `<CartDrawer />` alongside Navbar/Footer.

**`src/components/Navbar.tsx`** — add a cart icon button (lucide `ShoppingCart`) with a badge showing `count`; clicking opens the drawer. Added to both desktop and mobile bars.

**`src/components/ProductCard.tsx`** — add an "أضف للسلة" button. Since the card is a `<Link>`, the button uses `preventDefault`/`stopPropagation` so adding to cart doesn't navigate.

**`src/routes/product.$productId.tsx`** — add an "أضف للسلة" button next to the existing WhatsApp button.

## WhatsApp message format

No greeting line. First line is the address + phone, then products, then total:

```text
• العنوان: قطاع T | الهاتف: 01000000000
• ستريبس دولفين × 2 = 400 جنيه
• موزاريلا × 1 = 100 جنيه

الإجمالي: 500 جنيه
```

## Validation
- Address and phone required (trimmed, non-empty) with inline error messages before the order can be sent.
- Phone limited to a reasonable length; message encoded with `encodeURIComponent`.

## Notes
- The existing "اطلب الآن" WhatsApp community button stays as-is; the new order flow targets the order number 201223890915.