# Wire uploaded product images into the catalog

All product photos now live directly in `src/assets/` (not `src/assets/products/`). I'll import each one in `src/data/catalog.ts` and attach it to the matching product row so cards and product pages show real photos instead of the shared category fallback.

## What I'll do

Edit **only** `src/data/catalog.ts`:

1. Add an `import` for each image at the top of the file (Latin variable names, quoted Arabic paths), e.g.:
   ```ts
   import stripsDolphin from "@/assets/ستريبس دولفين.webp";
   import burgerJustFrozen from "@/assets/برجر جاست فروزن.webp";
   // ...etc
   ```
2. Add each as the 5th value in the matching product's row in the `raw` array.

No other files change — `productImage()`, `ProductCard`, and the product page already use the per-product image with category fallback.

## Image → product mapping

**Fast food & chicken**
- ستريبس دولفين → `ستريبس دولفين.webp`
- ستريبس ولعتين → `ستريبس ولعتين.webp`
- ستريبس ميزه / الحريف / أطياب → `ستريبسميزه.webp`
- صدور فراشه سمارت → `صدور-فراشه-نساير-سمارت-1-كيلو.webp`
- وجبة شهد فرخه كامله → `وجبة شهد فرخه كامله 12 قطعه.webp`
- وجبة شيكتيتا → `وجبة شيكتيتا.webp`

**Burgers, kofta & meats**
- برجر جاست فروزن → `برجر جاست فروزن.webp`
- برجر ميتكو الاسود الجامبو → `برجر ميتكو الاسود الجامبو.webp`
- كفته جاست فروزن → `كفته جاست فروزن.webp`
- كفته دولفين مشويه + عجينة كفته دولفين → `كفته دولفين.webp`
- هوت دوج ميتكو → `هوت دوج ميتكو.png`
- كبده عصافيرى متبله سجود → `كبده عصافيرى متبله سجود.webp`

**Seafood**
- بورى مجمد → `بوري.webp`
- ماكريل يابانى → `ماكريل يابانى.webp`

**Dairy & cheese**
- زبدة بقرى المصريين → `زبدة بقرى المصريين.webp`
- زبدة جاموسى → `زبدة جاموسي المصريين.webp`
- بقرى بديل النيوزلندى → `بقرى بديل النيوزلندى.webp`
- موزاريلا → `موزاريلا.webp`
- مكس → `مكس.webp`
- صوص شيدر طبيعي → `صوص شيدر.webp`
- جبن كريمى شيدر أو رومى → `جبنة رومي.webp`
- جبن الطارق دمياطى → `جبنه الطارق.jpg`
- جبن المصريين فيتا → `جبن المصريين فيتا.webp`
- مش اللهلبو دمياطى → `مش المصريين.webp`

**Misc**
- ممبار العابد (متضف + محشى) → `ممبار العابد 2.webp`
- عيش سورى / جلاش / رقاق → `عيش سوري.webp`
- روزبيف / سلامة / تركى مدخن → `سلامي.webp`
- كريمه لبانى → `كريمه لباني.webp`

## Notes / unmatched
- Some rows have no dedicated photo yet (e.g. برجر/كفته الاسكندرانى, sardines, shrimp, brazilian cuts, جوز سمان) — these keep the category-image fallback automatically.
- Extra unused images (`جبنه شيدر.webp`, `ستريبس الحريف.jpg`, `ستريبس اطياب.png`, `جلاش سوري.webp`, `لفة رقاق طري.png`, `تركي مدخن.webp`) can be swapped in on request.

After wiring, I'll confirm the build passes.