# Per-product images

Put each product's own photo in this folder, then wire it up in
`src/data/catalog.ts`:

1. Add your image file here, e.g. `strips-dolphin.jpg`.
2. Import it at the top of `src/data/catalog.ts`:
   ```ts
   import stripsDolphin from "@/assets/products/strips-dolphin.jpg";
   ```
3. Add it as the 5th value in that product's row inside the `raw` list:
   ```ts
   ["fastfood", "ستريبس دولفين", 200, "عبوة", stripsDolphin],
   ```

Any product without a 5th value automatically falls back to its category image.
