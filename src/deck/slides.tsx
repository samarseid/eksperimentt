import type { CSSProperties, ReactNode } from 'react'

/* ─────────────────────────────────────────────────────────────
   Taqdimot slaydlari. Har bir slayd 1600×900 sahnada
   absolyut joylashuv bilan quriladi (broken-grid uslubi).
   ───────────────────────────────────────────────────────────── */

export type SlideProps = { active: boolean; n: number; total: number }

const PARTS = {
  0: { label: 'Kirish', color: 'var(--terra)' },
  I: { label: 'I · Nazariy asoslar', color: 'var(--ochre)' },
  II: { label: 'II · Dala tajribasi metodikasi', color: 'var(--terra)' },
  III: { label: 'III · Matematik rejalashtirish', color: 'var(--ink-3)' },
  IV: { label: 'IV · Tahlil va xulosa', color: 'var(--sage)' },
} as const
type Part = keyof typeof PARTS

const img = (name: string, _w: number) => `/img/${name}.png`


function at(
  d: number,
  pos: CSSProperties & { rot?: number },
): CSSProperties {
  const { rot, ...rest } = pos
  return {
    ...rest,
    '--d': d,
    '--t': rot ? `rotate(${rot}deg)` : 'none',
  } as CSSProperties
}

/** Unicode indekslarni (N₁₈₀, 2ᵏ) va _{x} yozuvini <sub>/<sup> ga aylantiradi —
 *  shunda barcha shriftlarda bir xil ko‘rinadi. */
const SUBS = '₀₁₂₃₄₅₆₇₈₉'
const SUPS: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5',
  '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', 'ᵏ': 'k', '⁻': '−',
}
const RICH_RE = /(_\{[^}]+\}|[₀-₉]+|[⁰¹²³⁴-⁹ᵏ⁻]+)/
function rich(text: string): ReactNode {
  const parts = text.split(RICH_RE)
  if (parts.length === 1) return text
  return parts.map((part, i) => {
    if (!part) return null
    if (part.startsWith('_{')) return <sub key={i}>{part.slice(2, -1)}</sub>
    if (SUBS.includes(part[0]))
      return <sub key={i}>{[...part].map((c) => SUBS.indexOf(c)).join('')}</sub>
    if (SUPS[part[0]]) return <sup key={i}>{[...part].map((c) => SUPS[c]).join('')}</sup>
    return part
  })
}

function Slide({
  active,
  n,
  total,
  part,
  tone,
  children,
}: SlideProps & {
  part: Part
  tone?: 'dark' | 'terra'
  children: ReactNode
}) {
  const p = PARTS[part]
  return (
    <section
      className={`slide ${active ? 'is-active' : ''} ${tone ? `is-${tone}` : ''}`}
      aria-hidden={!active}
      aria-label={`Slayd ${n}`}
    >
      <div className="folio top">
        <span>Eksperimentni rejalashtirish nazariyasi</span>
        <span className="part">
          <span className="dot" style={{ background: p.color }} />
          {p.label}
        </span>
      </div>
      {children}
      <div className="folio bottom">
        <span>Agrokimyoda ilmiy tadqiqot uslublari · Axmadaliyeva M.</span>
        <span className="pg">
          {String(n).padStart(2, '0')}
          <span style={{ opacity: 0.45 }}> / {total}</span>
        </span>
      </div>
    </section>
  )
}

/* ═══ 01 · MUQOVA ═══════════════════════════════════════════ */
function S01(p: SlideProps) {
  return (
    <Slide {...p} part={0}>
      <div className="vtext label abs" style={{ left: 30, top: 300 }}>
        Magistratura · Semestr kurs ishi · 2026
      </div>

      <div className="kicker abs" data-in style={at(0, { left: 96, top: 122 })}>
        Agrokimyoda ilmiy tadqiqot uslublari
      </div>

      <div
        className="photo framed"
        data-in
        style={at(4, { left: 905, top: 400, width: 620, height: 338, rot: -2.5 })}
      >
        <img src={img('cover', 1300)} alt="Tajriba dalasi delyankalari — yuqoridan ko‘rinish" />
      </div>
      <div className="tape" style={{ left: 1150, top: 382, transform: 'rotate(4deg)' }} />

      <h1
        className="display abs"
        data-in
        style={at(1, { left: 88, top: 170, fontSize: 152, zIndex: 10 })}
      >
        Eksperimentni
        <br />
        <span style={{ paddingLeft: 170 }}>
          <em>rejalashtirish</em>
        </span>
        <br />
        nazariyasi
      </h1>

      <p className="lede abs" data-in style={at(2, { left: 96, top: 640, width: 640 })}>
        Kamroq tajriba — ishonchliroq bilim: agrokimyoviy tadqiqotlarni
        statistik asosda loyihalash tamoyillari, usullari va modellari.
      </p>

      <div className="abs" data-in style={at(3, { left: 96, top: 770 })}>
        <div className="label">Taqdimot muallifi</div>
        <div
          className="display"
          style={{ fontSize: 40, fontStyle: 'italic', marginTop: 6, fontWeight: 400 }}
        >
          Axmadaliyeva Mubina
        </div>
      </div>

      <div className="stamp" data-in style={at(5, { left: 1350, top: 110, rot: 12 })}>
        Kurs ishi
        <br />
        ———
        <br />
        2026
      </div>
    </Slide>
  )
}

/* ═══ 02 · REJA ═════════════════════════════════════════════ */
const PLAN: { r: string; t: string; items: [string, string][]; pos: CSSProperties }[] = [
  {
    r: 'I',
    t: 'Nazariy asoslar',
    items: [
      ['03', 'Tushuncha va atamalar'],
      ['04', 'Tarixiy rivojlanish'],
      ['05', 'Agrokimyoviy tajriba turlari'],
      ['06', 'Fisherning uch tamoyili'],
    ],
    pos: { left: 720, top: 130 },
  },
  {
    r: 'II',
    t: 'Dala tajribasi metodikasi',
    items: [
      ['07', 'Tajribaning besh elementi'],
      ['08', 'Tajriba sxemasi'],
      ['09', 'Joylashtirish usullari'],
    ],
    pos: { left: 1160, top: 190 },
  },
  {
    r: 'III',
    t: 'Matematik rejalashtirish',
    items: [
      ['10', 'Ko‘p omilli tajriba 2ᵏ'],
      ['11', 'Regressiya modeli'],
      ['12', 'Optimumni izlash'],
    ],
    pos: { left: 760, top: 500 },
  },
  {
    r: 'IV',
    t: 'Tahlil va xulosa',
    items: [
      ['13', 'Dispersion tahlil'],
      ['14', 'Rejalashtirish algoritmi'],
      ['15', 'Xulosa va adabiyotlar'],
    ],
    pos: { left: 1200, top: 545 },
  },
]

function S02(p: SlideProps) {
  return (
    <Slide {...p} part={0} tone="dark">
      <div className="ghost" style={{ left: -40, top: 470, fontSize: 520, opacity: 0.35 }}>
        IV
      </div>
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 120, color: 'var(--clay)' })}>
        Taqdimot rejasi
      </div>
      <h2 className="display abs" data-in style={at(1, { left: 90, top: 160, fontSize: 190 })}>
        Reja
      </h2>
      <p
        className="lede abs"
        data-in
        style={at(2, { left: 96, top: 360, width: 500, color: 'var(--paper-3)' })}
      >
        To‘rt bo‘lim: tushunchadan boshlab dala metodikasi, matematik model va
        natijalar tahliliga qadar.
      </p>

      {PLAN.map((b, i) => (
        <div key={b.r} className="abs" data-in style={at(3 + i, { ...b.pos, width: 330 })}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span className="serif-num" style={{ fontSize: 64, color: 'var(--terra)' }}>
              {b.r}
            </span>
            <span className="term" style={{ fontSize: 26, color: 'var(--paper)' }}>
              {b.t}
            </span>
          </div>
          <div className="rule" style={{ margin: '14px 0 10px', color: 'var(--paper-3)' }} />
          {b.items.map(([num, label]) => (
            <div
              key={num}
              style={{
                display: 'flex',
                gap: 16,
                padding: '7px 0',
                fontSize: 19,
                color: 'var(--paper-2)',
              }}
            >
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 13, color: 'var(--clay)', paddingTop: 4 }}>
                {num}
              </span>
              {rich(label)}
            </div>
          ))}
        </div>
      ))}
    </Slide>
  )
}

/* ═══ 03 · TUSHUNCHA ════════════════════════════════════════ */
const TERMS: [string, string, string][] = [
  ['omil · faktor', 'Omil', 'Tadqiqotchi maqsadli o‘zgartiradigan va natijaga ta’sir etuvchi o‘zgaruvchi. Masalan, azot me’yori.'],
  ['daraja', 'Daraja', 'Omilning tajribada qabul qilingan aniq qiymati: N₀, N₉₀, N₁₈₀ kg/ga.'],
  ['variant', 'Variant', 'Sinaladigan usul — omillar darajalarining muayyan birikmasi.'],
  ['javob funksiyasi', 'Natija ko‘rsatkichi', 'O‘lchanadigan javob: hosildorlik, don oqsili, tuproqdagi N-NO₃.'],
  ['takrorlanish', 'Takrorlanish', 'Har bir variantning tajriba maydonida necha marta qaytarilishi.'],
  ['delyanka', 'Delyanka', 'Bitta variant joylashtiriladigan, chegaralangan tajriba maydonchasi.'],
]

function S03(p: SlideProps) {
  return (
    <Slide {...p} part="I">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        I.1 — Tushuncha
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 700 })}>
        Eksperimentni rejalashtirish <em>nima?</em>
      </h2>

      <blockquote
        className="abs"
        data-in
        style={at(2, {
          left: 96,
          top: 335,
          width: 640,
          borderLeft: '3px solid var(--terra)',
          paddingLeft: 28,
          margin: 0,
        })}
      >
        <p className="lede" style={{ fontSize: 29, color: 'var(--ink)', margin: 0 }}>
          Qo‘yilgan masalani talab etilgan aniqlik bilan yechish uchun{' '}
          <b>zarur va yetarli</b> tajribalar sonini, ularni o‘tkazish sharoiti
          va tartibini ilmiy asosda tanlash.
        </p>
        <div className="caption" style={{ marginTop: 14 }}>
          Yu. P. Adler, Ye. V. Markova, Yu. V. Granovskiy ta’rifi asosida
        </div>
      </blockquote>

      <div className="abs" data-in style={at(3, { left: 96, top: 625, width: 660, display: 'flex', gap: 34 })}>
        {[
          ['Aniqlik', 'xatoni kamaytirish'],
          ['Ishonchlilik', 'xatoni baholash'],
          ['Tejamkorlik', 'kam xarajat, ko‘p axborot'],
        ].map(([t, d], i) => (
          <div key={t} style={{ flex: 1 }}>
            <div className="serif-num" style={{ fontSize: 54, color: 'var(--terra)' }}>
              0{i + 1}
            </div>
            <div className="term" style={{ fontSize: 26, marginTop: 10 }}>
              {t}
            </div>
            <div className="small" style={{ marginTop: 6, fontStyle: 'italic' }}>
              {d}
            </div>
          </div>
        ))}
      </div>

      {TERMS.map(([lab, t, d], i) => {
        const col = i % 2
        const row = Math.floor(i / 2)
        return (
          <div
            key={lab}
            className="abs"
            data-in
            style={at(4 + i, {
              left: 850 + col * 360,
              top: 128 + row * 222 + col * 58,
              width: 320,
            })}
          >
            <div className="label" style={{ color: 'var(--terra)' }}>
              {String(i + 1).padStart(2, '0')} · {lab}
            </div>
            <div className="term" style={{ marginTop: 10 }}>
              {t}
            </div>
            <div className="small" style={{ marginTop: 10 }}>
              {rich(d)}
            </div>
          </div>
        )
      })}
    </Slide>
  )
}

/* ═══ 04 · TARIX ════════════════════════════════════════════ */
const TIMELINE: [string, string, string][] = [
  ['1843', 'Rotamsted, Angliya', 'Lawes va Gilbert Broadbalk bug‘doy-o‘g‘it tajribasini boshlaydi — eng qadimiy uzluksiz dala tajribalaridan biri.'],
  ['1925', 'R. A. Fisher', '«Statistical Methods for Research Workers»: dispersion tahlil tadqiqot amaliyotiga kiradi.'],
  ['1926', 'R. A. Fisher', '«The Arrangement of Field Experiments»: takrorlanish, randomizatsiya va mahalliy nazorat.'],
  ['1935', 'R. A. Fisher', '«The Design of Experiments»: randomizatsiyalangan bloklar, lotin kvadrati, omilli tajribalar.'],
  ['1951', 'G. Box, K. Wilson', 'Javob yuzasi metodologiyasi — optimal sharoitni tajriba yo‘li bilan izlash.'],
  ['1985', 'B. A. Dospexov', '«Методика полевого опыта» (5-nashr) — MDH agronomiyasida asosiy metodik qo‘llanma.'],
]

function S04(p: SlideProps) {
  return (
    <Slide {...p} part="I">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        I.2 — Tarixiy rivojlanish
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 980, fontSize: 64 })}>
        Rotamsted dalalaridan <em>matematik nazariyagacha</em>
      </h2>
      <p className="body abs" data-in style={at(2, { left: 1110, top: 160, width: 400, fontStyle: 'italic' })}>
        Eksperimentni rejalashtirish nazariyasi aynan qishloq xo‘jaligi
        tajribalaridan — tuproq notekisligi bilan kurashish zaruratidan tug‘ilgan.
      </p>

      <div
        className="abs"
        data-in="fade"
        style={at(3, { left: 64, right: 64, top: 565, height: 2, background: 'var(--terra)' })}
      />

      {TIMELINE.map(([y, who, d], i) => {
        const up = i % 2 === 0
        return (
          <div
            key={y}
            className="abs"
            data-in
            style={at(4 + i, {
              left: 96 + i * 238,
              width: 228,
              ...(up ? { bottom: 361 } : { top: 590 }),
            })}
          >
            {up ? null : (
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: 'var(--terra)', marginTop: -31, marginBottom: 18 }} />
            )}
            <div className="serif-num" style={{ fontSize: 60, color: i === 2 ? 'var(--terra)' : 'var(--ink)' }}>
              {y}
            </div>
            <div className="label" style={{ margin: '12px 0 8px', color: 'var(--terra)' }}>
              {who}
            </div>
            <div className="small" style={{ fontSize: 15.5 }}>
              {d}
            </div>
            {up ? (
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: 'var(--ink)', marginTop: 14, marginBottom: -33 }} />
            ) : null}
          </div>
        )
      })}
    </Slide>
  )
}

/* ═══ 05 · TAJRIBA TURLARI ══════════════════════════════════ */
const TYPES: [string, string, string][] = [
  ['Laboratoriya', 'Tuproq, o‘simlik va o‘g‘it namunalarining kimyoviy tahlili. Sharoit to‘liq nazoratda.', 'pH, gumus, NPK harakatchan shakllari'],
  ['Vegetatsion', 'Idishlarda (tuproq, qum, suv madaniyati) o‘stirish. O‘g‘itning o‘simlikka bevosita ta’siri.', 'Elementning fiziologik roli'],
  ['Lizimetrik', 'Tuproq qatlamidan sizib o‘tgan suv va ozuqa elementlarini hisobga olish.', 'Nitratlarning yuvilishi'],
  ['Dala', 'Tabiiy sharoitda o‘tkaziladi. O‘g‘it samaradorligini baholashning asosiy usuli.', 'Doza, muddat, usul'],
  ['Ishlab chiqarish', 'Xo‘jalik miqyosida tekshirish: tavsiyani amaliyotda tasdiqlash.', 'Iqtisodiy samaradorlik'],
]

function S05(p: SlideProps) {
  return (
    <Slide {...p} part="I">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        I.3 — Agrokimyoviy tajriba turlari
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 820 })}>
        Kolbadan dalaga: <em>besh daraja</em>
      </h2>

      <div className="photo framed" data-in style={at(2, { left: 1010, top: 100, width: 510, height: 278, rot: 2 })}>
        <img src={img('pots', 1100)} alt="Vegetatsion tajriba: idishlardagi nihollar" />
      </div>
      <div className="caption abs" data-in style={at(3, { left: 1030, top: 395 })}>
        Vegetatsion tajriba: bir xil idish, bir xil tuproq — farq faqat o‘g‘itda.
      </div>

      <div className="label abs" data-in style={at(2, { left: 96, top: 298, color: 'var(--ink-2)' })}>
        ← sharoit nazorati yuqori &nbsp;·&nbsp; amaliy ahamiyat yuqori →
      </div>

      {TYPES.map(([t, d, ex], i) => (
        <div
          key={t}
          className={`card abs ${i === 3 ? 'terra' : ''}`}
          data-in
          style={at(4 + i, {
            left: 90 + i * 290,
            top: 330 + i * 32 + (i >= 3 ? 24 : 0),
            width: 262,
            height: 272,
            padding: '22px 22px',
          })}
        >
          <div className="label" style={{ color: i === 3 ? 'var(--paper)' : 'var(--terra)' }}>
            0{i + 1}
          </div>
          <div className="term" style={{ fontSize: 28, marginTop: 12 }}>
            {t}
          </div>
          <div className="small" style={{ marginTop: 12, fontSize: 16 }}>
            {d}
          </div>
          <div
            style={{
              position: 'absolute',
              left: 22,
              right: 22,
              bottom: 20,
              fontFamily: 'var(--f-text)',
              fontStyle: 'italic',
              fontSize: 15,
              borderTop: '1px solid currentColor',
              paddingTop: 8,
              opacity: 0.85,
            }}
          >
            {ex}
          </div>
        </div>
      ))}
    </Slide>
  )
}

/* ═══ 06 · FISHER TAMOYILLARI ═══════════════════════════════ */
const PRINCIPLES: [string, string, string][] = [
  ['I', 'Takrorlanish', 'Har bir variant bir necha delyankada qaytariladi. Bu tajriba xatosini baholash imkonini beradi va o‘rtacha qiymat aniqligini oshiradi.'],
  ['II', 'Randomizatsiya', 'Variantlar delyankalarga tasodifiy taqsimlanadi. Muntazam (sistematik) xatolar yo‘qoladi, xato bahosi xolis bo‘ladi.'],
  ['III', 'Mahalliy nazorat', 'Maydon unumdorligi bir xil bo‘lgan bloklarga bo‘linadi. Tuproq notekisligi tajriba xatosidan ajratib olinadi.'],
]

function S06(p: SlideProps) {
  return (
    <Slide {...p} part="I" tone="terra">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        I.4 — Asosiy tamoyillar
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 700, fontSize: 84 })}>
        Fisherning
        <br />
        <span style={{ fontStyle: 'italic', paddingLeft: 90 }}>uch tamoyili</span>
      </h2>

      <figure className="abs" data-in style={at(2, { left: 900, top: 140, width: 610, margin: 0 })}>
        <div className="serif-num" style={{ fontSize: 120, lineHeight: 0.5, opacity: 0.5 }}>
          “
        </div>
        <blockquote className="lede" style={{ margin: 0, color: 'var(--paper)', fontSize: 25 }}>
          Tajriba tugagach statistikka murojaat qilish — ko‘pincha undan
          tajribaning «o‘lim sababini» aniqlab berishni so‘rash, xolos.
        </blockquote>
        <figcaption className="label" style={{ marginTop: 14, color: 'var(--paper-2)' }}>
          R. A. Fisher, 1938
        </figcaption>
      </figure>

      {PRINCIPLES.map(([r, t, d], i) => (
        <div key={r} className="abs" data-in style={at(3 + i, { left: 96 + i * 490, top: 375 + i * 34, width: 420 })}>
          <div
            className="serif-num"
            style={{ fontSize: 130, color: 'transparent', WebkitTextStroke: '1.5px var(--paper)' }}
          >
            {r}
          </div>
          <div className="term" style={{ fontSize: 38, marginTop: 14 }}>
            {t}
          </div>
          <p className="body" style={{ marginTop: 12, color: 'var(--paper-2)', fontSize: 19 }}>
            {d}
          </p>
        </div>
      ))}

      <div
        className="card ink abs"
        data-in
        style={at(6, { left: 96, top: 752, width: 1000, padding: '14px 22px', rot: -0.8 })}
      >
        <span className="label" style={{ color: 'var(--clay)' }}>
          + Yagona farq tamoyili ·
        </span>{' '}
        <span style={{ fontSize: 18 }}>
          variantlar faqat o‘rganilayotgan omil bo‘yicha farqlanadi, qolgan barcha
          sharoitlar bir xil saqlanadi.
        </span>
      </div>
    </Slide>
  )
}

/* ═══ 07 · TAJRIBA ELEMENTLARI ══════════════════════════════ */
const ELEMENTS: [string, string][] = [
  ['Variantlar soni', 'Tajriba sxemasi — maqsad va vazifalardan kelib chiqadi.'],
  ['Delyanka', 'Maydoni, shakli va yo‘nalishi. Odatda 50–200 m², cho‘ziq to‘g‘ri to‘rtburchak.'],
  ['Takrorlanish', 'Joyda (delyankalar soni) va vaqtda (yillar soni).'],
  ['Joylashtirish usuli', 'Variant va takrorlarning maydonda taqsimlanishi.'],
  ['Hosilni hisobga olish', 'Faqat hisob maydonidan, yagona usulda.'],
]

function S07(p: SlideProps) {
  return (
    <Slide {...p} part="II">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        II.1 — Dala tajribasi metodikasi
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 560, fontSize: 66 })}>
        Tajribaning <em>besh elementi</em>
      </h2>

      {ELEMENTS.map(([t, d], i) => (
        <div
          key={t}
          className="abs"
          data-in
          style={at(2 + i, {
            left: 96,
            top: 330 + i * 96,
            width: 520,
            display: 'flex',
            gap: 22,
            borderTop: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)',
            paddingTop: 14,
          })}
        >
          <span className="serif-num" style={{ fontSize: 44, color: 'var(--terra)', width: 34 }}>
            {i + 1}
          </span>
          <div>
            <div className="term" style={{ fontSize: 24 }}>
              {t}
            </div>
            <div className="small" style={{ marginTop: 4, fontSize: 16 }}>
              {d}
            </div>
          </div>
        </div>
      ))}

      {/* delyanka sxemasi */}
      <div className="abs" data-in style={at(4, { left: 680, top: 118, width: 440, height: 660 })}>
        <PlotDiagram />
      </div>

      <div className="card terra abs" data-in style={at(6, { left: 1180, top: 125, width: 340, rot: 1.5 })}>
        <div className="label" style={{ color: 'var(--paper)' }}>
          Zarur takrorlanish soni
        </div>
        <div className="math" style={{ fontSize: 50, margin: '16px 0 6px' }}>
          n = (V / P)<sup>2</sup>
        </div>
        <div className="small" style={{ fontSize: 15 }}>
          V — variatsiya koeffitsiyenti, %; P — talab etilgan aniqlik, %.
        </div>
        <div className="rule" style={{ margin: '14px 0' }} />
        <div className="math" style={{ fontSize: 24 }}>
          V = 20 %, P = 10 % → n = 4
        </div>
      </div>

      <div className="abs" data-in style={at(7, { left: 1190, top: 455, width: 330 })}>
        {[
          ['≥ 4', 'odatiy dala tajribasi'],
          ['6–8', 'yuqori aniqlik, kichik delyanka'],
          ['2–3', 'dastlabki, namoyish tajribasi'],
        ].map(([v, d]) => (
          <div key={v} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '6px 0' }}>
            <span className="serif-num" style={{ fontSize: 40, width: 92, color: 'var(--ink)' }}>
              {v}
            </span>
            <span className="small" style={{ fontSize: 16 }}>
              {d}
            </span>
          </div>
        ))}
      </div>

      <div className="card ink abs" data-in style={at(8, { left: 1170, top: 655, width: 360, padding: '18px 22px', rot: -1.2 })}>
        <div className="small" style={{ fontSize: 16 }}>
          <b style={{ color: 'var(--clay)' }}>Muhim:</b> takrorlanishni oshirish
          aniqlikni delyanka maydonini kattalashtirishdan tezroq oshiradi.
        </div>
      </div>
    </Slide>
  )
}

function PlotDiagram() {
  return (
    <svg viewBox="0 0 440 660" width="440" height="660" style={{ overflow: 'visible' }}>
      <defs>
        <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="var(--ink)" strokeWidth="1.1" />
        </pattern>
      </defs>
      {[0, 1, 2].map((k) => {
        const x = 40 + k * 120
        const mid = k === 1
        return (
          <g key={k}>
            <rect x={x} y={40} width={110} height={560} fill={mid ? 'var(--paper-2)' : 'var(--paper)'} stroke="var(--ink)" strokeWidth="1.5" />
            {mid ? (
              <>
                <rect x={x} y={40} width={110} height={560} fill="url(#hatch)" opacity="0.35" />
                <rect x={x + 16} y={80} width={78} height={480} fill="var(--clay)" stroke="var(--terra-deep)" strokeWidth="1.5" strokeDasharray="6 4" />
              </>
            ) : (
              <g opacity="0.5">
                {Array.from({ length: 9 }).map((_, r) => (
                  <line key={r} x1={x + 12 + r * 11} y1={60} x2={x + 12 + r * 11} y2={580} stroke="var(--ink-3)" strokeWidth="1" strokeDasharray="2 5" />
                ))}
              </g>
            )}
          </g>
        )
      })}
      {/* annotations */}
      <g fontFamily="var(--f-mono)" fontSize="12" letterSpacing="1.5" fill="var(--ink)">
        <line x1="216" y1="320" x2="420" y2="250" stroke="var(--ink)" />
        <circle cx="216" cy="320" r="4" fill="var(--ink)" />
        <text x="300" y="236">HISOB MAYDONI</text>
        <line x1="166" y1="590" x2="420" y2="630" stroke="var(--ink)" />
        <circle cx="166" cy="590" r="4" fill="var(--ink)" />
        <text x="290" y="652">HIMOYA CHIZIG‘I</text>
        <text x="40" y="26" fill="var(--terra)">
          DELYANKA: UZUNLIK : ENI ≈ 5–10 : 1
        </text>
      </g>
      <text x="30" y="640" fontFamily="var(--f-text)" fontStyle="italic" fontSize="15" fill="var(--ink-3)">
        Himoya chizig‘i qo‘shni
      </text>
      <text x="30" y="658" fontFamily="var(--f-text)" fontStyle="italic" fontSize="15" fill="var(--ink-3)">
        variant ta’sirini kesadi
      </text>
    </svg>
  )
}

/* ═══ 08 · TAJRIBA SXEMASI ══════════════════════════════════ */
const SCHEME: [string, string, string][] = [
  ['1', 'Nazorat (o‘g‘itsiz)', 'tuproqning tabiiy unumdorligi'],
  ['2', 'P₉₀K₆₀ — fon', 'azotsiz taqqoslash asosi'],
  ['3', 'Fon + N₆₀', ''],
  ['4', 'Fon + N₁₂₀', ''],
  ['5', 'Fon + N₁₈₀', ''],
  ['6', 'Fon + N₂₄₀', ''],
]

function S08(p: SlideProps) {
  return (
    <Slide {...p} part="II">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        II.2 — Tajriba sxemasi
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 760 })}>
        Sxema — tajribaning <em>savoli</em>
      </h2>
      <p className="body abs" data-in style={at(2, { left: 96, top: 298, width: 680 })}>
        Variantlar majmui tajriba sxemasi deyiladi. Uning tarkibi tadqiqot
        mavzusi, maqsadi va gipotezasidan kelib chiqadi.
      </p>

      <div className="abs" data-in style={at(3, { left: 96, top: 400, width: 690 })}>
        <div className="label" style={{ marginBottom: 12, color: 'var(--terra)' }}>
          Namuna: kuzgi bug‘doyga azot me’yorlari, kg/ga sof modda
        </div>
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: 70 }}>№</th>
              <th>Variant</th>
              <th>Vazifasi</th>
            </tr>
          </thead>
          <tbody>
            {SCHEME.map(([n, v, r], i) => (
              <tr key={n}>
                <td>
                  <span className={`v${i + 1}`} style={{ display: 'inline-grid', placeItems: 'center', width: 30, height: 30, border: '1px solid var(--ink)', fontFamily: 'var(--f-mono)', fontSize: 13, fontWeight: 700 }}>
                    {n}
                  </span>
                </td>
                <td style={{ color: 'var(--ink)', fontWeight: 500 }}>{rich(v)}</td>
                <td style={{ fontStyle: 'italic', fontSize: 17 }}>{r || 'azot dozasi samarasi'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="abs" data-in style={at(4, { left: 860, top: 150, width: 380 })}>
        <div className="label" style={{ marginBottom: 12 }}>
          Sxema tuzish qoidalari
        </div>
        {[
          ['Nazorat majburiy', 'Har qanday ta’sir nazoratga nisbatan baholanadi.'],
          ['Fon bir xil', 'O‘rganilmayotgan omillar barcha variantlarda teng.'],
          ['Teng oraliq', 'Dozalar bir xil qadam bilan — regressiya tahlili uchun qulay.'],
          ['Ortiqcha variantsiz', 'Har bir qo‘shimcha variant maydonni va xatoni oshiradi.'],
        ].map(([t, d], i) => (
          <div key={t} style={{ padding: '12px 0', borderTop: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)' }}>
            <div className="term" style={{ fontSize: 22 }}>
              <span style={{ color: 'var(--terra)', fontFamily: 'var(--f-mono)', fontSize: 13, marginRight: 10 }}>0{i + 1}</span>
              {t}
            </div>
            <div className="small" style={{ fontSize: 16, marginTop: 4 }}>
              {d}
            </div>
          </div>
        ))}
      </div>

      <div className="photo framed" data-in style={at(5, { left: 1300, top: 110, width: 220, height: 394, rot: 2.5 })}>
        <img src={img('soil', 500)} alt="Tuproq kesimi va bug‘doy ildizlari" />
      </div>

      <div className="abs" data-in style={at(6, { left: 1090, top: 590, width: 440, textAlign: 'right' })}>
        <div className="display" style={{ fontSize: 84 }}>
          6 × 4 = <em>24</em>
        </div>
        <div className="small" style={{ marginTop: 10, fontStyle: 'italic' }}>
          6 variant, 4 takror — 24 ta delyanka. Delyanka 100 m² bo‘lsa, hisob
          maydoni 0,24 ga.
        </div>
      </div>
    </Slide>
  )
}

/* ═══ 09 · JOYLASHTIRISH USULLARI ═══════════════════════════ */
const CRD = [3, 6, 1, 4, 2, 5, 5, 2, 6, 1, 3, 4, 1, 4, 3, 6, 5, 2, 6, 3, 5, 2, 4, 1]
const RCBD = [
  [3, 1, 5, 2, 6, 4],
  [5, 2, 4, 6, 1, 3],
  [1, 6, 2, 4, 3, 5],
  [4, 3, 6, 1, 5, 2],
]
const LATIN = ['ABCD', 'CDAB', 'DCBA', 'BADC']
const SPLIT = [
  ['S₁', [2, 1, 3]],
  ['S₂', [3, 2, 1]],
  ['S₂', [1, 3, 2]],
  ['S₁', [3, 1, 2]],
] as const

function S09(p: SlideProps) {
  const panel = (i: number, left: number, top: number, t: string, use: string, grid: ReactNode) => (
    <div className="abs" data-in style={at(2 + i, { left, top, width: 320 })}>
      <div className="label" style={{ color: 'var(--terra)' }}>
        Usul 0{i + 1}
      </div>
      <div className="term" style={{ fontSize: 26, margin: '8px 0 16px', minHeight: 56 }}>
        {t}
      </div>
      {grid}
      <div className="small" style={{ fontSize: 16, marginTop: 16 }}>
        {use}
      </div>
    </div>
  )
  return (
    <Slide {...p} part="II">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        II.3 — Joylashtirish usullari
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 1100, fontSize: 64 })}>
        Tuproq notekisligiga qarshi <em>to‘rt usul</em>
      </h2>

      {panel(
        0,
        96,
        290,
        'To‘liq randomizatsiya',
        'Sharoit bir jinsli bo‘lganda: laboratoriya va vegetatsion tajribalar.',
        <div className="plots" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {CRD.map((v, k) => (
            <div key={k} className={`plot v${v}`} style={{ aspectRatio: '1 / 1.1' }}>
              {v}
            </div>
          ))}
        </div>,
      )}

      {panel(
        1,
        470,
        250,
        'Randomizatsiyalangan bloklar',
        'Dala tajribasida eng ko‘p qo‘llaniladi: har blokda barcha variantlar bir martadan.',
        <div style={{ display: 'grid', gap: 6 }}>
          {RCBD.map((row, b) => (
            <div key={b} style={{ display: 'grid', gridTemplateColumns: '26px repeat(6, 1fr)', gap: 3, alignItems: 'center' }}>
              <span className="label" style={{ color: 'var(--ink)' }}>
                {['I', 'II', 'III', 'IV'][b]}
              </span>
              {row.map((v, k) => (
                <div key={k} className={`plot v${v}`} style={{ aspectRatio: '1 / 1.1' }}>
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>,
      )}

      {panel(
        2,
        850,
        310,
        'Lotin kvadrati',
        'Unumdorlik ikki yo‘nalishda o‘zgarsa. Variantlar soni = takrorlar soni.',
        <div className="plots" style={{ gridTemplateColumns: 'repeat(4, 1fr)', width: 250 }}>
          {LATIN.join('')
            .split('')
            .map((c, k) => (
              <div key={k} className={`plot v${'ABCD'.indexOf(c) + 2}`} style={{ aspectRatio: '1 / 1' }}>
                {c}
              </div>
            ))}
        </div>,
      )}

      {panel(
        3,
        1210,
        270,
        'Bo‘lingan delyankalar',
        'Bir omil katta maydon talab qilsa (sug‘orish S), ikkinchisi — kichik delyankada (azot dozasi).',
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {SPLIT.map(([s, subs], k) => (
            <div key={k} style={{ border: '2px solid var(--ink)', padding: 3 }}>
              <div className="label" style={{ color: 'var(--ink)', marginBottom: 3 }}>
                {rich(s)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                {subs.map((v, j) => (
                  <div key={j} className={`plot v${v + 2}`} style={{ aspectRatio: '1 / 1.6', fontSize: 11 }}>
                    N{v}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>,
      )}

      <div className="abs" data-in style={at(6, { left: 96, top: 790, display: 'flex', gap: 6, alignItems: 'center' })}>
        {[1, 2, 3, 4, 5, 6].map((v) => (
          <span key={v} className={`v${v}`} style={{ width: 34, height: 18, border: '1px solid var(--ink)' }} />
        ))}
        <span className="label" style={{ marginLeft: 12, color: 'var(--ink-2)' }}>
          Rang — o‘g‘it dozasi: och tusdan to‘q tusga oshib boradi
        </span>
      </div>
    </Slide>
  )
}

/* ═══ 10 · KO‘P OMILLI TAJRIBA ══════════════════════════════ */
const LEVELS = { N: [120, 240], P: [60, 120], K: [40, 80] }
const MATRIX = [
  [-1, -1, -1],
  [1, -1, -1],
  [-1, 1, -1],
  [1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [-1, 1, 1],
  [1, 1, 1],
]

function Sign({ v }: { v: number }) {
  const on = v > 0
  return (
    <span
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        width: 34,
        height: 26,
        fontFamily: 'var(--f-mono)',
        fontWeight: 700,
        fontSize: 15,
        background: on ? 'var(--terra)' : 'transparent',
        color: on ? 'var(--paper)' : 'var(--ink)',
        border: '1px solid var(--ink)',
      }}
    >
      {on ? '+1' : '−1'}
    </span>
  )
}

function S10(p: SlideProps) {
  const lv = (k: keyof typeof LEVELS, v: number) => LEVELS[k][v > 0 ? 1 : 0]
  return (
    <Slide {...p} part="III">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        III.1 — Ko‘p omilli tajriba
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 640 })}>
        To‘liq omilli reja{' '}
        <em>
          2<sup>k</sup>
        </em>
      </h2>
      <p className="body abs" data-in style={at(2, { left: 96, top: 305, width: 600 })}>
        Har bir omil ikki darajada olinadi va barcha birikmalar sinaladi.
        Tajribalar soni: <span className="math" style={{ fontSize: 24 }}>N = 2<sup>k</sup></span>,
        bunda <i>k</i> — omillar soni. N, P, K uchun: 2³ = 8 variant.
      </p>

      <div className="abs" data-in style={at(3, { left: 96, top: 420, width: 600 })}>
        {[
          ['O‘zaro ta’sir', 'N × P kabi birgalikdagi samarani ham baholaydi — bir omilli tajribada bu imkonsiz.'],
          ['Har bir kuzatish ishlaydi', 'Barcha 8 natija har bir omil samarasini hisoblashda qatnashadi.'],
          ['Ortogonallik', 'Koeffitsiyentlar bir-biridan mustaqil, oddiy formula bilan topiladi.'],
        ].map(([t, d]) => (
          <div key={t} style={{ display: 'flex', gap: 18, padding: '10px 0', borderTop: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)' }}>
            <span style={{ color: 'var(--terra)', fontSize: 22 }}>✦</span>
            <div>
              <div className="term" style={{ fontSize: 22 }}>
                {t}
              </div>
              <div className="small" style={{ fontSize: 16, marginTop: 2 }}>
                {d}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="abs" data-in style={at(4, { left: 96, top: 700, display: 'flex', gap: 40, alignItems: 'flex-end' })}>
        {[
          ['3⁵', '243', 'uch darajada, 5 omil'],
          ['2⁵', '32', 'to‘liq omilli reja'],
          ['2⁵⁻¹', '16', 'kasr reja — skrining'],
        ].map(([f, v, d], i) => (
          <div key={f}>
            <div className="serif-num" style={{ fontSize: 66, color: i === 2 ? 'var(--terra)' : 'var(--ink)' }}>
              {v}
            </div>
            <div className="label" style={{ marginTop: 8, color: 'var(--ink-2)' }}>
              {rich(f)} · {d}
            </div>
          </div>
        ))}
      </div>

      <div className="card abs" data-in style={at(5, { left: 790, top: 115, width: 730, rot: 1, padding: '24px 30px' })}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="term" style={{ fontSize: 26 }}>
            Reja matritsasi 2³ · NPK
          </div>
          <span className="pill" style={{ color: 'var(--terra)' }}>
            kg/ga sof modda
          </span>
        </div>
        <table className="tbl" style={{ marginTop: 16, fontSize: 18 }}>
          <thead>
            <tr>
              <th>u</th>
              <th className="c">x<sub>1</sub> (N)</th>
              <th className="c">x<sub>2</sub> (P)</th>
              <th className="c">x<sub>3</sub> (K)</th>
              <th className="c">Variant</th>
            </tr>
          </thead>
          <tbody>
            {MATRIX.map(([a, b, c], i) => (
              <tr key={i}>
                <td style={{ fontFamily: 'var(--f-mono)', fontSize: 14 }}>{i + 1}</td>
                <td className="c" style={{ padding: '5px 12px' }}>
                  <Sign v={a} />
                </td>
                <td className="c" style={{ padding: '5px 12px' }}>
                  <Sign v={b} />
                </td>
                <td className="c" style={{ padding: '5px 12px' }}>
                  <Sign v={c} />
                </td>
                <td className="c math" style={{ color: 'var(--ink)', fontSize: 20 }}>
                  N<sub>{lv('N', a)}</sub>P<sub>{lv('P', b)}</sub>K<sub>{lv('K', c)}</sub>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="caption abs" data-in style={at(6, { left: 820, top: 665, width: 690 })}>
        −1 — quyi daraja, +1 — yuqori daraja. Markaz (0): {rich('N₁₈₀P₉₀K₆₀')}; variatsiya
        oralig‘i: ΔN = 60, ΔP = 30, ΔK = 20.
      </div>
    </Slide>
  )
}

/* ═══ 11 · REGRESSIYA MODELI ════════════════════════════════ */
const FORMULA: { f: ReactNode; l: string; accent?: boolean; dim?: boolean }[] = [
  { f: 'ŷ', l: 'javob funksiyasi' },
  { f: <>b<sub>0</sub></>, l: 'erkin had' },
  { f: <>Σ b<sub>i</sub>x<sub>i</sub></>, l: 'chiziqli ta’sir', accent: true },
  { f: <>Σ b<sub>ij</sub>x<sub>i</sub>x<sub>j</sub></>, l: 'o‘zaro ta’sir' },
  { f: <>Σ b<sub>ii</sub>x<sub>i</sub><sup>2</sup></>, l: 'kvadratik had · 2-tartibli model', dim: true },
]

function S11(p: SlideProps) {
  return (
    <Slide {...p} part="III" tone="dark">
      <div className="ghost" style={{ right: -60, top: 470, fontSize: 600, WebkitTextStroke: '1.5px var(--terra)', opacity: 0.2 }}>
        ŷ
      </div>
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112, color: 'var(--clay)' })}>
        III.2 — Matematik model
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 1300, fontSize: 64 })}>
        Natijani tenglama bilan <em style={{ color: 'var(--clay)' }}>tasvirlash</em>
      </h2>

      <div className="abs" data-in style={at(2, { left: 96, top: 262, display: 'flex', alignItems: 'flex-start', gap: 22 })}>
        {FORMULA.map((seg, i) => (
          <div key={i} style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
            {i > 0 ? (
              <span className="math" style={{ fontSize: 56, color: 'var(--paper-3)' }}>
                {i === 1 ? '=' : '+'}
              </span>
            ) : null}
            <div>
              <div className="math" style={{ fontSize: 56, color: seg.accent ? 'var(--clay)' : 'var(--paper)', opacity: seg.dim ? 0.65 : 1 }}>
                {seg.f}
              </div>
              <div className="label" style={{ marginTop: 10, color: seg.accent ? 'var(--clay)' : 'var(--paper-3)', maxWidth: 170, lineHeight: 1.5 }}>
                {seg.l}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="abs" data-in style={at(3, { left: 96, top: 440, display: 'flex', gap: 28 })}>
        {[
          ['Kodlash', <>x<sub>i</sub> = (X<sub>i</sub> − X<sub>i0</sub>) / ΔX<sub>i</sub></>, 'Natural qiymatni −1…+1 shkalasiga o‘tkazadi.'],
          ['Koeffitsiyent', <>b<sub>i</sub> = Σ x<sub>iu</sub>y<sub>u</sub> / N</>, 'Ortogonal rejada har biri mustaqil topiladi.'],
        ].map(([h, f, d]) => (
          <div key={h as string} style={{ width: 360, borderTop: '1px solid var(--paper-3)', paddingTop: 14 }}>
            <div className="label" style={{ color: 'var(--clay)' }}>
              {h}
            </div>
            <div className="math" style={{ fontSize: 31, margin: '12px 0 8px', color: 'var(--paper)' }}>
              {f}
            </div>
            <div className="small" style={{ fontSize: 16, color: 'var(--paper-3)' }}>
              {d}
            </div>
          </div>
        ))}
      </div>

      <div className="abs" data-in style={at(4, { left: 920, top: 430, width: 560 })}>
        <div className="label" style={{ color: 'var(--paper-3)', marginBottom: 6 }}>
          Modelni tekshirish ketma-ketligi
        </div>
        {[
          ['G', 'Koxren mezoni', 'tajribalar takrorlanuvchanligi: dispersiyalar bir jinsliligi'],
          ['t', 'Styudent mezoni', 'har bir koeffitsiyentning ahamiyatliligi'],
          ['F', 'Fisher mezoni', 'modelning tajribaga adekvatligi'],
        ].map(([l, n, d]) => (
          <div key={l} style={{ display: 'flex', gap: 22, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid color-mix(in srgb, var(--paper) 18%, transparent)' }}>
            <span className="math" style={{ fontSize: 50, width: 44, color: 'var(--terra)' }}>
              {l}
            </span>
            <div>
              <div className="term" style={{ fontSize: 22, color: 'var(--paper)' }}>
                {n}
              </div>
              <div className="small" style={{ fontSize: 16, color: 'var(--paper-3)' }}>
                {d}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card terra abs" data-in style={at(5, { left: 96, top: 650, width: 760, padding: '18px 26px', rot: -1, boxShadow: '8px 8px 0 var(--paper)' })}>
        <div className="label" style={{ color: 'var(--paper)' }}>
          Shartli misol · bug‘doy hosili, s/ga
        </div>
        <div className="math" style={{ fontSize: 30, margin: '8px 0 6px' }}>
          ŷ = 54,6 + 5,8x<sub>1</sub> + 2,1x<sub>2</sub> + 0,6x<sub>3</sub> + 1,4x<sub>1</sub>x<sub>2</sub>
        </div>
        <div className="small" style={{ fontSize: 16 }}>
          Azot — eng kuchli omil; N × P o‘zaro ta’siri ijobiy. Kaliy koeffitsiyenti
          t-mezon bo‘yicha ahamiyatsiz bo‘lsa, modeldan chiqariladi.
        </div>
      </div>
    </Slide>
  )
}

/* ═══ 12 · OPTIMALLASHTIRISH ════════════════════════════════ */
// shartli javob egri chizig‘i: y = 42 + 0,19x − 0,0004x²
const yOf = (x: number) => 42 + 0.19 * x - 0.0004 * x * x

function ResponseCurve() {
  const X = (x: number) => 70 + (x / 300) * 700
  const Y = (y: number) => 470 - ((y - 38) / 30) * 420
  const pts = Array.from({ length: 61 }, (_, i) => i * 5)
  const d = pts.map((x, i) => `${i ? 'L' : 'M'}${X(x).toFixed(1)},${Y(yOf(x)).toFixed(1)}`).join(' ')
  const dots = [0, 60, 120, 180, 240]
  const bio = 237.5
  const eco = 180
  return (
    <svg viewBox="0 0 820 540" width="820" height="540" style={{ overflow: 'visible' }}>
      {/* axes */}
      <line x1="70" y1="470" x2="790" y2="470" stroke="var(--ink)" strokeWidth="1.5" />
      <line x1="70" y1="40" x2="70" y2="470" stroke="var(--ink)" strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((x) => (
        <g key={x}>
          <line x1={X(x)} y1="470" x2={X(x)} y2="478" stroke="var(--ink)" />
          <text x={X(x)} y="500" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="13" fill="var(--ink-2)">
            {x}
          </text>
        </g>
      ))}
      {[40, 50, 60].map((y) => (
        <g key={y}>
          <line x1="62" y1={Y(y)} x2="790" y2={Y(y)} stroke="var(--ink)" strokeOpacity="0.12" />
          <text x="52" y={Y(y) + 4} textAnchor="end" fontFamily="var(--f-mono)" fontSize="13" fill="var(--ink-2)">
            {y}
          </text>
        </g>
      ))}
      <text x="790" y="530" textAnchor="end" fontFamily="var(--f-mono)" fontSize="12" letterSpacing="1.5" fill="var(--ink-3)">
        AZOT DOZASI, KG/GA →
      </text>
      <text x="70" y="22" fontFamily="var(--f-mono)" fontSize="12" letterSpacing="1.5" fill="var(--ink-3)">
        ↑ HOSIL, S/GA
      </text>

      {/* optimum markers */}
      <line x1={X(eco)} y1={Y(yOf(eco))} x2={X(eco)} y2="470" stroke="var(--terra)" strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1={X(bio)} y1={Y(yOf(bio))} x2={X(bio)} y2="470" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 4" />

      <path d={d} fill="none" stroke="var(--ink)" strokeWidth="2.5" />
      {dots.map((x) => (
        <circle key={x} cx={X(x)} cy={Y(yOf(x))} r="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
      ))}
      <circle cx={X(eco)} cy={Y(yOf(eco))} r="9" fill="var(--terra)" />

      <g fontFamily="var(--f-text)" fontSize="19" fontStyle="italic">
        <text x={X(eco) - 14} y={Y(yOf(eco)) - 40} textAnchor="end" fill="var(--terra)">
          iqtisodiy optimum
        </text>
        <text x={X(eco) - 14} y={Y(yOf(eco)) - 18} textAnchor="end" fill="var(--ink-2)" fontSize="15">
          dy/dx = narx(N) / narx(don)
        </text>
        <text x={X(bio) + 12} y={Y(yOf(bio)) - 30} fill="var(--ink)">
          biologik maksimum
        </text>
        <text x={X(bio) + 12} y={Y(yOf(bio)) - 10} fill="var(--ink-2)" fontSize="15">
          dy/dx = 0
        </text>
        <text x={X(40)} y={Y(yOf(40)) + 46} fill="var(--ink-3)" fontSize="16">
          har bir qo‘shimcha kg azot samarasi kamayib boradi
        </text>
      </g>
    </svg>
  )
}

function CCD() {
  const c = 70
  const s = 34
  const a = 48
  return (
    <svg viewBox="0 0 140 140" width="96" height="96">
      <rect x={c - s} y={c - s} width={s * 2} height={s * 2} fill="none" stroke="var(--ink)" strokeWidth="1.2" />
      <circle cx={c} cy={c} r={a} fill="none" stroke="var(--ink)" strokeOpacity="0.3" strokeDasharray="3 3" />
      {[
        [-s, -s],
        [s, -s],
        [-s, s],
        [s, s],
      ].map(([x, y], i) => (
        <circle key={i} cx={c + x} cy={c + y} r="6" fill="var(--ink)" />
      ))}
      {[
        [-a, 0],
        [a, 0],
        [0, -a],
        [0, a],
      ].map(([x, y], i) => (
        <circle key={i} cx={c + x} cy={c + y} r="6" fill="var(--terra)" />
      ))}
      <circle cx={c} cy={c} r="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
    </svg>
  )
}

function S12(p: SlideProps) {
  return (
    <Slide {...p} part="III">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        III.3 — Optimallashtirish
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 600 })}>
        Optimumni izlash: <em>javob yuzasi</em>
      </h2>
      <p className="body abs" data-in style={at(2, { left: 96, top: 312, width: 560 })}>
        O‘g‘it dozasi oshgani sari hosil qo‘shimchasi kamayadi
        (<b>Mitcherlix qonuni</b>). Shuning uchun maqsad — eng yuqori hosil
        emas, <b>eng samarali doza</b>.
      </p>

      <div className="abs" data-in style={at(3, { left: 96, top: 440, width: 560 })}>
        <div className="label" style={{ marginBottom: 6 }}>
          Box–Wilson usuli, 1951
        </div>
        {[
          ['Tik ko‘tarilish', '2ᵏ reja asosida gradient yo‘nalishida qadam tashlab, optimum sohasiga yaqinlashish.'],
          ['Markaziy kompozitsion reja', 'Optimum sohasida har bir omil 5 darajada: −α, −1, 0, +1, +α.'],
          ['Optimum nuqtasi', 'Kvadratik model hosilasini nolga tenglash: x* = −b₁ / (2b₁₁).'],
        ].map(([t, d], i) => (
          <div key={t} style={{ display: 'flex', gap: 16, padding: '9px 0', borderTop: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)' }}>
            <span className="serif-num" style={{ fontSize: 34, color: 'var(--terra)', width: 26 }}>
              {i + 1}
            </span>
            <div>
              <div className="term" style={{ fontSize: 21 }}>
                {t}
              </div>
              <div className="small" style={{ fontSize: 15.5, marginTop: 2 }}>
                {rich(d)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="abs" data-in style={at(4, { left: 720, top: 150 })}>
        <ResponseCurve />
      </div>

      <div className="card abs" data-in style={at(5, { left: 96, top: 712, width: 540, padding: '10px 18px', rot: -1, display: 'flex', gap: 18, alignItems: 'center' })}>
        <div style={{ width: 96, height: 96, flex: 'none' }}>
          <CCD />
        </div>
        <div>
          <div className="label" style={{ color: 'var(--ink)' }}>
            Markaziy kompozitsion reja · k = 2
          </div>
          <div className="caption" style={{ fontSize: 15, marginTop: 6 }}>
            ● 2<sup>k</sup> burchak nuqtalari · <span style={{ color: 'var(--terra)' }}>●</span> yulduz nuqtalar (±α) · ○ markaz
          </div>
        </div>
      </div>
      <div className="caption abs" data-in style={at(6, { left: 790, top: 712, width: 700 })}>
        Grafik — shartli ma’lumotlar asosidagi namuna: y = 42 + 0,19x − 0,0004x².
      </div>
    </Slide>
  )
}

/* ═══ 13 · DISPERSION TAHLIL ════════════════════════════════ */
const YIELDS: [string, number][] = [
  ['Nazorat', 41.2],
  ['Fon PK', 45.0],
  ['+N₆₀', 52.3],
  ['+N₁₂₀', 58.6],
  ['+N₁₈₀', 63.1],
  ['+N₂₄₀', 64.0],
]
const LSD = 2.4

function YieldBars() {
  const H = 380
  const max = 70
  return (
    <div style={{ position: 'relative', width: 740, height: H + 70 }}>
      {[0, 20, 40, 60].map((g) => (
        <div key={g} style={{ position: 'absolute', left: 0, right: 0, bottom: 70 + (g / max) * H, borderTop: '1px solid color-mix(in srgb, var(--ink) 14%, transparent)' }}>
          <span className="label" style={{ position: 'absolute', left: -34, top: -8 }}>
            {g}
          </span>
        </div>
      ))}
      <div style={{ position: 'absolute', left: 10, right: 0, bottom: 70, height: H, display: 'flex', alignItems: 'flex-end', gap: 22 }}>
        {YIELDS.map(([l, y], i) => (
          <div key={l} style={{ flex: 1, position: 'relative', height: (y / max) * H }}>
            <div className={`v${i + 1}`} style={{ position: 'absolute', inset: 0, border: '1.5px solid var(--ink)', borderBottom: 'none' }} />
            <div className="serif-num" style={{ position: 'absolute', top: -38, left: 0, right: 0, textAlign: 'center', fontSize: 28, fontWeight: 400, color: i === 4 ? 'var(--terra)' : 'var(--ink)' }}>
              {y.toFixed(1).replace('.', ',')}
            </div>
            <div className="label" style={{ position: 'absolute', bottom: -30, left: -10, right: -10, textAlign: 'center', color: 'var(--ink)', letterSpacing: '0.06em', fontSize: 12 }}>
              {rich(l)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 70, borderTop: '1.5px solid var(--ink)' }} />
      {/* bracket over the last two bars */}
      <div style={{ position: 'absolute', right: 0, width: 228, bottom: 70 + (64 / max) * H + 46, borderTop: '1.5px solid var(--terra)', borderLeft: '1.5px solid var(--terra)', borderRight: '1.5px solid var(--terra)', height: 12 }} />
      <div style={{ position: 'absolute', right: -6, width: 300, textAlign: 'right', bottom: 70 + (64 / max) * H + 64, fontFamily: 'var(--f-text)', fontStyle: 'italic', fontSize: 17, color: 'var(--terra)' }}>
        farq 0,9 &lt; EKMF<sub>05</sub> = {String(LSD).replace('.', ',')} — ishonchsiz
      </div>
    </div>
  )
}

function S13(p: SlideProps) {
  return (
    <Slide {...p} part="IV">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        IV.1 — Natijalar tahlili
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 640, fontSize: 64 })}>
        Dispersion tahlil: <em>farq haqiqiymi?</em>
      </h2>

      <div className="abs" data-in style={at(2, { left: 96, top: 320, width: 600 })}>
        <div className="label" style={{ marginBottom: 10 }}>
          Umumiy o‘zgaruvchanlikni ajratish (randomizatsiyalangan bloklar)
        </div>
        <div style={{ display: 'flex', height: 46, border: '1.5px solid var(--ink)' }}>
          <div className="v4" style={{ width: '74%', display: 'grid', placeItems: 'center', fontFamily: 'var(--f-mono)', fontSize: 13 }}>
              C<sub>V</sub>&nbsp;variantlar
          </div>
          <div className="v2" style={{ width: '11%', display: 'grid', placeItems: 'center', fontFamily: 'var(--f-mono)', fontSize: 13, borderLeft: '1.5px solid var(--ink)' }}>
            C<sub>P</sub>
          </div>
          <div className="v1" style={{ flex: 1, display: 'grid', placeItems: 'center', fontFamily: 'var(--f-mono)', fontSize: 13, borderLeft: '1.5px solid var(--ink)' }}>
            C<sub>Z</sub> xato
          </div>
        </div>
        <div className="math" style={{ fontSize: 26, marginTop: 12 }}>
          C<sub>Y</sub> = C<sub>P</sub> + C<sub>V</sub> + C<sub>Z</sub>
          <span className="small" style={{ fontStyle: 'normal', marginLeft: 14, fontSize: 15 }}>
            (P — takrorlar)
          </span>
        </div>
      </div>

      <div className="abs" data-in style={at(3, { left: 96, top: 490, width: 600, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px 30px' })}>
        {[
          [<>F<sub>f</sub> = s²<sub>V</sub> / s²<sub>Z</sub></>, 'F_{f} > F₀₅ bo‘lsa, variantlar orasida ishonchli farq bor.'],
          [<>EKMF<sub>05</sub> = t<sub>05</sub> · s<sub>d</sub></>, 'Eng kichik muhim farq (НСР₀₅); s_{d} = √(2s²/n).'],
          [<>S<sub>x̄</sub>% ≤ 3–5</>, 'Tajriba aniqligi: 3 % gacha — yaxshi, 3–5 % — qoniqarli.'],
          [<>V: 10 · 20 %</>, 'Variatsiya: <10 % — kichik, 10–20 % — o‘rtacha, >20 % — katta.'],
        ].map(([f, d], i) => (
          <div key={i} style={{ borderTop: '1px solid color-mix(in srgb, var(--ink) 30%, transparent)', paddingTop: 10 }}>
            <div className="math" style={{ fontSize: 26, color: 'var(--ink)' }}>
              {f}
            </div>
            <div className="small" style={{ fontSize: 15, marginTop: 6 }}>
              {rich(d as string)}
            </div>
          </div>
        ))}
      </div>

      <div className="abs" data-in style={at(4, { left: 790, top: 180 })}>
        <div className="label" style={{ marginBottom: 54 }}>
          Shartli natijalar · bug‘doy hosili, s/ga · 4 takror o‘rtachasi
        </div>
        <YieldBars />
      </div>

      <div className="card ink abs" data-in style={at(5, { left: 820, top: 730, width: 700, padding: '16px 24px', rot: -0.8 })}>
        <div className="small" style={{ fontSize: 17 }}>
          <b style={{ color: 'var(--clay)' }}>Xulosa:</b> N<sub>240</sub> qo‘shimcha
          hosil bermaydi. Maqbul me’yor — <b style={{ color: 'var(--paper)' }}>N<sub>180</sub></b>, bu
          optimallashtirish natijasi bilan mos keladi.
        </div>
      </div>
    </Slide>
  )
}

/* ═══ 14 · ALGORITM ═════════════════════════════════════════ */
const STEPS: [string, string][] = [
  ['Muammo va maqsad', 'Ilmiy savolni aniq va o‘lchanadigan shaklda qo‘yish.'],
  ['Gipoteza', 'Kutilayotgan ta’sir va uning yo‘nalishini oldindan belgilash.'],
  ['Omil va darajalar', 'Omillar, darajalar va variatsiya oralig‘ini tanlash.'],
  ['Sxema va reja', 'Variantlar, takrorlar soni, delyanka o‘lchami.'],
  ['Joylashtirish', 'Bloklash va randomizatsiya, dala xaritasini tuzish.'],
  ['O‘tkazish', 'Kuzatuvlar, namuna olish, hosilni yagona usulda hisobga olish.'],
  ['Statistik tahlil', 'Dispersion tahlil, EKMF₀₅, regressiya modeli.'],
  ['Xulosa va tavsiya', 'Natijani agrokimyoviy va iqtisodiy jihatdan baholash.'],
]

function S14(p: SlideProps) {
  return (
    <Slide {...p} part="IV">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        IV.2 — Rejalashtirish algoritmi
      </div>
      <h2 className="h2 abs" data-in style={at(1, { left: 90, top: 148, width: 1050 })}>
        G‘oyadan tavsiyagacha: <em>sakkiz qadam</em>
      </h2>

      {STEPS.map(([t, d], i) => {
        const row = Math.floor(i / 4)
        const col = i % 4
        return (
          <div
            key={t}
            className="abs"
            data-in
            style={at(2 + i, {
              left: 96 + col * 278,
              top: 300 + row * 255 + (col % 2) * 42,
              width: 245,
            })}
          >
            <div
              className="serif-num"
              style={{
                fontSize: 92,
                color: i === 4 || i === 6 ? 'var(--terra)' : 'transparent',
                WebkitTextStroke: i === 4 || i === 6 ? '0' : '1.4px var(--ink)',
              }}
            >
              {i + 1}
            </div>
            <div className="term" style={{ fontSize: 23, marginTop: 8 }}>
              {t}
            </div>
            <div className="small" style={{ fontSize: 16, marginTop: 6 }}>
              {rich(d)}
            </div>
          </div>
        )
      })}

      <div className="card ink abs" data-in style={at(10, { left: 1225, top: 120, width: 300, rot: 1.5, padding: '24px 24px' })}>
        <div className="label" style={{ color: 'var(--clay)' }}>
          Ko‘p uchraydigan xatolar
        </div>
        {[
          'Nazorat varianti yo‘q',
          'Takrorlanish 3 tadan kam',
          'Randomizatsiyasiz, muntazam joylashtirish',
          'Himoya chiziqlarisiz delyankalar',
          'Bir yillik natija bo‘yicha xulosa — kamida 3 yil kerak',
          'Ortiqcha variantlar bilan to‘ldirilgan sxema',
        ].map((e) => (
          <div key={e} style={{ display: 'flex', gap: 12, padding: '11px 0', borderBottom: '1px solid color-mix(in srgb, var(--paper) 16%, transparent)', fontSize: 17, lineHeight: 1.35, color: 'var(--paper-2)' }}>
            <span style={{ color: 'var(--terra)' }}>✕</span>
            {e}
          </div>
        ))}
      </div>
    </Slide>
  )
}

/* ═══ 15 · XULOSA ═══════════════════════════════════════════ */
const REFS = [
  'Доспехов Б. А. Методика полевого опыта. 5-е изд. — М.: Агропромиздат, 1985.',
  'Fisher R. A. The Design of Experiments. — Edinburgh: Oliver & Boyd, 1935.',
  'Box G. E. P., Wilson K. B. On the Experimental Attainment of Optimum Conditions // J. Royal Stat. Soc. B. — 1951. — Vol. 13(1). — P. 1–45.',
  'Gomez K. A., Gomez A. A. Statistical Procedures for Agricultural Research. 2nd ed. — New York: Wiley, 1984.',
  'Адлер Ю. П., Маркова Е. В., Грановский Ю. В. Планирование эксперимента при поиске оптимальных условий. — М.: Наука, 1976.',
  'Montgomery D. C. Design and Analysis of Experiments. 10th ed. — Hoboken: Wiley, 2019.',
  'Azizov B. M., Israilov I. A., Xudoyqulov J. B. O‘simlikshunoslikda ilmiy tadqiqot ishlari. — Toshkent, 2014.',
]

function S15(p: SlideProps) {
  return (
    <Slide {...p} part="IV">
      <div className="kicker abs" data-in style={at(0, { left: 96, top: 112 })}>
        IV.3 — Xulosa
      </div>

      <div className="abs" data-in style={at(1, { left: 96, top: 150, width: 690 })}>
        {[
          'Rejalashtirish tajribadan oldin bajariladi: u natijaning ishonchliligini oldindan belgilaydi.',
          'Takrorlanish, randomizatsiya va mahalliy nazorat — har qanday agrokimyoviy tajribaning asosi.',
          'Ko‘p omilli rejalar kam tajriba bilan omillarning o‘zaro ta’sirini ham ochib beradi.',
          'Regressiya modeli va dispersion tahlil maqbul o‘g‘it me’yorini asoslashga imkon beradi.',
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 20, padding: '14px 0', borderTop: '1px solid color-mix(in srgb, var(--ink) 25%, transparent)' }}>
            <span className="serif-num" style={{ fontSize: 40, color: 'var(--terra)', width: 30 }}>
              {i + 1}
            </span>
            <p className="body" style={{ margin: 0, fontSize: 20, color: 'var(--ink)' }}>
              {t}
            </p>
          </div>
        ))}
      </div>

      <div className="card abs" data-in style={at(2, { left: 870, top: 112, width: 650, rot: 1.2, padding: '22px 28px' })}>
        <div className="label" style={{ color: 'var(--terra)', marginBottom: 8 }}>
          Asosiy adabiyotlar
        </div>
        <ol style={{ margin: 0, paddingLeft: 22, listStyle: 'decimal' }}>
          {REFS.map((r) => (
            <li key={r} style={{ fontSize: 14.5, lineHeight: 1.4, color: 'var(--ink-2)', padding: '4px 0' }}>
              {r}
            </li>
          ))}
        </ol>
      </div>

      <div
        className="photo abs"
        data-in="fade"
        style={at(3, {
          left: 900,
          top: 560,
          width: 700,
          height: 340,
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 35%)',
          maskImage: 'linear-gradient(to right, transparent, #000 35%)',
        })}
      >
        <img src={img('wheat', 1400)} alt="" style={{ objectPosition: '30% 80%' }} />
      </div>

      <div className="abs" data-in style={at(4, { left: 90, top: 640 })}>
        <div className="display" style={{ fontSize: 96 }}>
          E’tiboringiz uchun <em>rahmat</em>
        </div>
        <div className="label" style={{ marginTop: 18, color: 'var(--ink-2)' }}>
          Axmadaliyeva Mubina · Agrokimyoda ilmiy tadqiqot uslublari
        </div>
      </div>
    </Slide>
  )
}

export const SLIDES = [S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15]
