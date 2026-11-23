# AGENTS.md

## Loyiha

«Eksperimentni rejalashtirish nazariyasi» mavzusidagi o‘zbek tilidagi veb-taqdimot (15 slayd, agrokimyo, magistratura kurs ishi, muallif — Axmadaliyeva Mubina). TanStack Start + React 19 + Vite + Tailwind 4, Netlify'da. Backend, ma’lumotlar bazasi yoki API yo‘q — sof frontend.

## Tuzilma

- `src/routes/index.tsx` — faqat `<Deck />` ni render qiladi.
- `src/routes/__root.tsx` — `<head>`: sarlavha, `lang="uz"`, Google Fonts (Fraunces, Newsreader, JetBrains Mono).
- `src/deck/Deck.tsx` — taqdimot dvigateli: 1600×900 sahnani oynaga moslab masshtablash, klaviatura/sichqoncha/svayp navigatsiyasi, `#n` hash, to‘liq ekran, `window.print()` orqali PDF.
- `src/deck/slides.tsx` — barcha 15 slayd (`S01`…`S15`) va ularning ma’lumotlari (TERMS, TIMELINE, SCHEME, MATRIX, YIELDS, REFS…). `SLIDES` massivi tartibni belgilaydi.
- `src/deck/deck.css` — dizayn tizimi: rang tokenlari, tipografiya klasslari (`display`, `h2`, `lede`, `body`, `label`, `term`, `math`, `serif-num`), bosma obyektlari (`card`, `tape`, `stamp`, `photo`, `ghost`), joylashtirish to‘rlari (`plot`, `v1`…`v6`) va `@media print`.
- `public/img/*.png` — AI bilan yaratilgan rasmlar; doim `img()` yordamchisi orqali Netlify Image CDN (`/.netlify/images?...&fm=webp`) bilan ishlatiladi.

## Konventsiyalar va muhim qarorlar

- Har bir slayd 1600×900 koordinatalarda **absolyut joylashuv** bilan quriladi (broken-grid). `at(delay, style)` yordamchisi joylashuvni, kirish animatsiyasi kechikishini (`--d`) va burilishni (`rot` → `--t`) bitta obyektga birlashtiradi. Burilgan elementlarda `transform` ni to‘g‘ridan-to‘g‘ri yozmang — `rot` dan foydalaning.
- Rang mantig‘i: terra — tuproq/o‘g‘it/asosiy urg‘u; clay — past daraja; sage — o‘simlik; ochre — hosil; ink — tuzilma. `v1`…`v6` — o‘g‘it dozasi oshib borishini och→to‘q tus bilan ko‘rsatadi va 8, 9, 13-slaydlarda izchil ishlatiladi.
- Indekslar (N₁₈₀, 2ᵏ, `_{d}`) `rich()` orqali `<sub>/<sup>` ga aylantiriladi — shrift fallback muammosini oldini oladi.
- O‘zbek apostroflari: o‘, g‘ uchun `‘` (U+2018), tutuq belgisi uchun `’` (U+2019). Kasr ajratgichi — vergul (54,6).
- 11-, 12-, 13-slaydlardagi raqamli misollar **shartli** (namuna) va slaydlarda shunday belgilangan; ular o‘zaro izchil (N₁₈₀ maqbul doza).
- Bo‘lim raqamlash: kickerlar `I.1`…`IV.3`, sahifa raqami folio'da.
