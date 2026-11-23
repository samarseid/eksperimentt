# Eksperimentni rejalashtirish nazariyasi — taqdimot

Bu «Agrokimyoda ilmiy tadqiqot uslublari» fanidan tayyorlangan 15 slaydli veb-taqdimot (magistratura semestr kurs ishi).
Muallifi: **Axmadaliyeva Mubina**.

Dizayn: **Paper · Ink · Terracotta**. Uslubi editorial / broken-grid: jurnal sahifasiga o‘xshaydi, lekin elementlar ataylab to‘rdan chiqarilgan va qiyshaytirilgan.

## Tarkib

1. Muqova · 2. Reja
3. Tushuncha va atamalar · 4. Tarixiy rivojlanish (Rotamsted → Fisher → Box–Wilson → Dospexov) · 5. Agrokimyoviy tajriba turlari · 6. Fisherning uch tamoyili
7. Dala tajribasining besh elementi · 8. Tajriba sxemasi · 9. Joylashtirish usullari (to‘liq randomizatsiya, bloklar, lotin kvadrati, bo‘lingan delyankalar)
10. To‘liq omilli reja 2ᵏ · 11. Regressiya modeli · 12. Optimallashtirish va javob yuzasi
13. Dispersion tahlil va EKMF₀₅ · 14. Rejalashtirish algoritmi · 15. Xulosa, adabiyotlar

## Boshqarish

- `→` / `Space` / sichqoncha bosish — keyingi slayd; `←` — oldingi
- `F` — to‘liq ekran
- **PDF** tugmasi (yoki `Ctrl/Cmd + P`) — har bir slayd alohida 16:9 sahifa bo‘lib chop etiladi (chop etish oynasida «Background graphics» yoqilsin)
- Manzilga `#7` qo‘shilsa, to‘g‘ridan-to‘g‘ri 7-slayd ochiladi

## Texnologiyalar

TanStack Start (React 19), Vite, Tailwind CSS 4. Netlify'da joylashtiriladi. Rasmlar Netlify Image CDN orqali WebP formatida uzatiladi.
Shriftlar: Fraunces (sarlavhalar), Newsreader (matn), JetBrains Mono (yorliqlar).
Rasmlar AI yordamida bir xil ikki rangli risograf uslubida yaratilgan.

## Lokal ishga tushirish

```bash
pnpm install
netlify dev   # yoki: pnpm dev
```
