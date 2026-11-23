import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/react.mjs";
import { require_jsx_runtime } from "../_libs/react2.mjs";
import { ChevronLeft, ChevronRight, Maximize, Printer } from "../_libs/lucide-react2.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-M_dXgeIW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PARTS = {
	0: {
		label: "Kirish",
		color: "var(--terra)"
	},
	I: {
		label: "I · Nazariy asoslar",
		color: "var(--ochre)"
	},
	II: {
		label: "II · Dala tajribasi metodikasi",
		color: "var(--terra)"
	},
	III: {
		label: "III · Matematik rejalashtirish",
		color: "var(--ink-3)"
	},
	IV: {
		label: "IV · Tahlil va xulosa",
		color: "var(--sage)"
	}
};
/** Netlify Image CDN orqali optimallashtirilgan rasm manzili */
var img = (name, w) => `/.netlify/images?url=/img/${name}.png&w=${w}&fm=webp&q=80`;
/** joylashuv + kirish animatsiyasi uchun style yordamchisi */
function at(d, s = {}) {
	const { rot, ...rest } = s;
	return {
		...rest,
		...rot ? { transform: `rotate(${rot}deg)` } : {},
		"--d": d,
		"--t": rot ? `rotate(${rot}deg)` : "none"
	};
}
/** Unicode indekslarni (N₁₈₀, 2ᵏ) va _{x} yozuvini <sub>/<sup> ga aylantiradi —
*  shunda barcha shriftlarda bir xil ko‘rinadi. */
var SUBS = "₀₁₂₃₄₅₆₇₈₉";
var SUPS = {
	"⁰": "0",
	"¹": "1",
	"²": "2",
	"³": "3",
	"⁴": "4",
	"⁵": "5",
	"⁶": "6",
	"⁷": "7",
	"⁸": "8",
	"⁹": "9",
	"ᵏ": "k",
	"⁻": "−"
};
var RICH_RE = /(_\{[^}]+\}|[₀-₉]+|[⁰¹²³⁴-⁹ᵏ⁻]+)/;
function rich(text) {
	const parts = text.split(RICH_RE);
	if (parts.length === 1) return text;
	return parts.map((part, i) => {
		if (!part) return null;
		if (part.startsWith("_{")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: part.slice(2, -1) }, i);
		if (SUBS.includes(part[0])) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: [...part].map((c) => SUBS.indexOf(c)).join("") }, i);
		if (SUPS[part[0]]) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: [...part].map((c) => SUPS[c]).join("") }, i);
		return part;
	});
}
function Slide({ active, n, total, part, tone, children }) {
	const p = PARTS[part];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `slide ${active ? "is-active" : ""} ${tone ? `is-${tone}` : ""}`,
		"aria-hidden": !active,
		"aria-label": `Slayd ${n}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "folio top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Eksperimentni rejalashtirish nazariyasi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "part",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dot",
						style: { background: p.color }
					}), p.label]
				})]
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "folio bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Agrokimyoda ilmiy tadqiqot uslublari · Axmadaliyeva M." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "pg",
					children: [String(n).padStart(2, "0"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: { opacity: .45 },
						children: [" / ", total]
					})]
				})]
			})
		]
	});
}
function S01(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "vtext label abs",
				style: {
					left: 30,
					top: 300
				},
				children: "Magistratura · Semestr kurs ishi · 2026"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 122
				}),
				children: "Agrokimyoda ilmiy tadqiqot uslublari"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "photo framed",
				"data-in": true,
				style: at(4, {
					left: 905,
					top: 400,
					width: 620,
					height: 338,
					rot: -2.5
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img("cover", 1300),
					alt: "Tajriba dalasi delyankalari — yuqoridan ko‘rinish"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tape",
				style: {
					left: 1150,
					top: 382,
					transform: "rotate(4deg)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "display abs",
				"data-in": true,
				style: at(1, {
					left: 88,
					top: 170,
					fontSize: 152,
					zIndex: 10
				}),
				children: [
					"Eksperimentni",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { paddingLeft: 170 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "rejalashtirish" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"nazariyasi"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 640,
					width: 640
				}),
				children: "Kamroq tajriba — ishonchliroq bilim: agrokimyoviy tadqiqotlarni statistik asosda loyihalash tamoyillari, usullari va modellari."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(3, {
					left: 96,
					top: 770
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					children: "Taqdimot muallifi"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "display",
					style: {
						fontSize: 40,
						fontStyle: "italic",
						marginTop: 6,
						fontWeight: 400
					},
					children: "Axmadaliyeva Mubina"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stamp",
				"data-in": true,
				style: at(5, {
					left: 1350,
					top: 110,
					rot: 12
				}),
				children: [
					"Kurs ishi",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"———",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"2026"
				]
			})
		]
	});
}
var PLAN = [
	{
		r: "I",
		t: "Nazariy asoslar",
		items: [
			["03", "Tushuncha va atamalar"],
			["04", "Tarixiy rivojlanish"],
			["05", "Agrokimyoviy tajriba turlari"],
			["06", "Fisherning uch tamoyili"]
		],
		pos: {
			left: 720,
			top: 130
		}
	},
	{
		r: "II",
		t: "Dala tajribasi metodikasi",
		items: [
			["07", "Tajribaning besh elementi"],
			["08", "Tajriba sxemasi"],
			["09", "Joylashtirish usullari"]
		],
		pos: {
			left: 1160,
			top: 190
		}
	},
	{
		r: "III",
		t: "Matematik rejalashtirish",
		items: [
			["10", "Ko‘p omilli tajriba 2ᵏ"],
			["11", "Regressiya modeli"],
			["12", "Optimumni izlash"]
		],
		pos: {
			left: 760,
			top: 500
		}
	},
	{
		r: "IV",
		t: "Tahlil va xulosa",
		items: [
			["13", "Dispersion tahlil"],
			["14", "Rejalashtirish algoritmi"],
			["15", "Xulosa va adabiyotlar"]
		],
		pos: {
			left: 1200,
			top: 545
		}
	}
];
function S02(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: 0,
		tone: "dark",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ghost",
				style: {
					left: -40,
					top: 470,
					fontSize: 520,
					opacity: .35
				},
				children: "IV"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 120,
					color: "var(--clay)"
				}),
				children: "Taqdimot rejasi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 160,
					fontSize: 190
				}),
				children: "Reja"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lede abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 360,
					width: 500,
					color: "var(--paper-3)"
				}),
				children: "To‘rt bo‘lim: tushunchadan boshlab dala metodikasi, matematik model va natijalar tahliliga qadar."
			}),
			PLAN.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(3 + i, {
					...b.pos,
					width: 330
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "baseline",
							gap: 14
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "serif-num",
							style: {
								fontSize: 64,
								color: "var(--terra)"
							},
							children: b.r
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "term",
							style: {
								fontSize: 26,
								color: "var(--paper)"
							},
							children: b.t
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rule",
						style: {
							margin: "14px 0 10px",
							color: "var(--paper-3)"
						}
					}),
					b.items.map(([num, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: 16,
							padding: "7px 0",
							fontSize: 19,
							color: "var(--paper-2)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontFamily: "var(--f-mono)",
								fontSize: 13,
								color: "var(--clay)",
								paddingTop: 4
							},
							children: num
						}), rich(label)]
					}, num))
				]
			}, b.r))
		]
	});
}
var TERMS = [
	[
		"omil · faktor",
		"Omil",
		"Tadqiqotchi maqsadli o‘zgartiradigan va natijaga ta’sir etuvchi o‘zgaruvchi. Masalan, azot me’yori."
	],
	[
		"daraja",
		"Daraja",
		"Omilning tajribada qabul qilingan aniq qiymati: N₀, N₉₀, N₁₈₀ kg/ga."
	],
	[
		"variant",
		"Variant",
		"Sinaladigan usul — omillar darajalarining muayyan birikmasi."
	],
	[
		"javob funksiyasi",
		"Natija ko‘rsatkichi",
		"O‘lchanadigan javob: hosildorlik, don oqsili, tuproqdagi N-NO₃."
	],
	[
		"takrorlanish",
		"Takrorlanish",
		"Har bir variantning tajriba maydonida necha marta qaytarilishi."
	],
	[
		"delyanka",
		"Delyanka",
		"Bitta variant joylashtiriladigan, chegaralangan tajriba maydonchasi."
	]
];
function S03(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "I",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "I.1 — Tushuncha"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 700
				}),
				children: ["Eksperimentni rejalashtirish ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "nima?" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 335,
					width: 640,
					borderLeft: "3px solid var(--terra)",
					paddingLeft: 28,
					margin: 0
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "lede",
					style: {
						fontSize: 29,
						color: "var(--ink)",
						margin: 0
					},
					children: [
						"Qo‘yilgan masalani talab etilgan aniqlik bilan yechish uchun",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "zarur va yetarli" }),
						" tajribalar sonini, ularni o‘tkazish sharoiti va tartibini ilmiy asosda tanlash."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "caption",
					style: { marginTop: 14 },
					children: "Yu. P. Adler, Ye. V. Markova, Yu. V. Granovskiy ta’rifi asosida"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(3, {
					left: 96,
					top: 625,
					width: 660,
					display: "flex",
					gap: 34
				}),
				children: [
					["Aniqlik", "xatoni kamaytirish"],
					["Ishonchlilik", "xatoni baholash"],
					["Tejamkorlik", "kam xarajat, ko‘p axborot"]
				].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { flex: 1 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "serif-num",
							style: {
								fontSize: 54,
								color: "var(--terra)"
							},
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "term",
							style: {
								fontSize: 26,
								marginTop: 10
							},
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "small",
							style: {
								marginTop: 6,
								fontStyle: "italic"
							},
							children: d
						})
					]
				}, t))
			}),
			TERMS.map(([lab, t, d], i) => {
				const col = i % 2;
				const row = Math.floor(i / 2);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "abs",
					"data-in": true,
					style: at(4 + i, {
						left: 850 + col * 360,
						top: 128 + row * 222 + col * 58,
						width: 320
					}),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "label",
							style: { color: "var(--terra)" },
							children: [
								String(i + 1).padStart(2, "0"),
								" · ",
								lab
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "term",
							style: { marginTop: 10 },
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "small",
							style: { marginTop: 10 },
							children: rich(d)
						})
					]
				}, lab);
			})
		]
	});
}
var TIMELINE = [
	[
		"1843",
		"Rotamsted, Angliya",
		"Lawes va Gilbert Broadbalk bug‘doy-o‘g‘it tajribasini boshlaydi — eng qadimiy uzluksiz dala tajribalaridan biri."
	],
	[
		"1925",
		"R. A. Fisher",
		"«Statistical Methods for Research Workers»: dispersion tahlil tadqiqot amaliyotiga kiradi."
	],
	[
		"1926",
		"R. A. Fisher",
		"«The Arrangement of Field Experiments»: takrorlanish, randomizatsiya va mahalliy nazorat."
	],
	[
		"1935",
		"R. A. Fisher",
		"«The Design of Experiments»: randomizatsiyalangan bloklar, lotin kvadrati, omilli tajribalar."
	],
	[
		"1951",
		"G. Box, K. Wilson",
		"Javob yuzasi metodologiyasi — optimal sharoitni tajriba yo‘li bilan izlash."
	],
	[
		"1985",
		"B. A. Dospexov",
		"«Методика полевого опыта» (5-nashr) — MDH agronomiyasida asosiy metodik qo‘llanma."
	]
];
function S04(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "I",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "I.2 — Tarixiy rivojlanish"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 980,
					fontSize: 64
				}),
				children: ["Rotamsted dalalaridan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "matematik nazariyagacha" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body abs",
				"data-in": true,
				style: at(2, {
					left: 1110,
					top: 160,
					width: 400,
					fontStyle: "italic"
				}),
				children: "Eksperimentni rejalashtirish nazariyasi aynan qishloq xo‘jaligi tajribalaridan — tuproq notekisligi bilan kurashish zaruratidan tug‘ilgan."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": "fade",
				style: at(3, {
					left: 64,
					right: 64,
					top: 565,
					height: 2,
					background: "var(--terra)"
				})
			}),
			TIMELINE.map(([y, who, d], i) => {
				const up = i % 2 === 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "abs",
					"data-in": true,
					style: at(4 + i, {
						left: 96 + i * 238,
						width: 228,
						...up ? { bottom: 361 } : { top: 590 }
					}),
					children: [
						up ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							width: 13,
							height: 13,
							borderRadius: "50%",
							background: "var(--terra)",
							marginTop: -31,
							marginBottom: 18
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "serif-num",
							style: {
								fontSize: 60,
								color: i === 2 ? "var(--terra)" : "var(--ink)"
							},
							children: y
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label",
							style: {
								margin: "12px 0 8px",
								color: "var(--terra)"
							},
							children: who
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "small",
							style: { fontSize: 15.5 },
							children: d
						}),
						up ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							width: 13,
							height: 13,
							borderRadius: "50%",
							background: "var(--ink)",
							marginTop: 14,
							marginBottom: -33
						} }) : null
					]
				}, y);
			})
		]
	});
}
var TYPES = [
	[
		"Laboratoriya",
		"Tuproq, o‘simlik va o‘g‘it namunalarining kimyoviy tahlili. Sharoit to‘liq nazoratda.",
		"pH, gumus, NPK harakatchan shakllari"
	],
	[
		"Vegetatsion",
		"Idishlarda (tuproq, qum, suv madaniyati) o‘stirish. O‘g‘itning o‘simlikka bevosita ta’siri.",
		"Elementning fiziologik roli"
	],
	[
		"Lizimetrik",
		"Tuproq qatlamidan sizib o‘tgan suv va ozuqa elementlarini hisobga olish.",
		"Nitratlarning yuvilishi"
	],
	[
		"Dala",
		"Tabiiy sharoitda o‘tkaziladi. O‘g‘it samaradorligini baholashning asosiy usuli.",
		"Doza, muddat, usul"
	],
	[
		"Ishlab chiqarish",
		"Xo‘jalik miqyosida tekshirish: tavsiyani amaliyotda tasdiqlash.",
		"Iqtisodiy samaradorlik"
	]
];
function S05(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "I",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "I.3 — Agrokimyoviy tajriba turlari"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 820
				}),
				children: ["Kolbadan dalaga: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "besh daraja" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "photo framed",
				"data-in": true,
				style: at(2, {
					left: 1010,
					top: 100,
					width: 510,
					height: 278,
					rot: 2
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img("pots", 1100),
					alt: "Vegetatsion tajriba: idishlardagi nihollar"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "caption abs",
				"data-in": true,
				style: at(3, {
					left: 1030,
					top: 395
				}),
				children: "Vegetatsion tajriba: bir xil idish, bir xil tuproq — farq faqat o‘g‘itda."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 298,
					color: "var(--ink-2)"
				}),
				children: "← sharoit nazorati yuqori \xA0·\xA0 amaliy ahamiyat yuqori →"
			}),
			TYPES.map(([t, d, ex], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `card abs ${i === 3 ? "terra" : ""}`,
				"data-in": true,
				style: at(4 + i, {
					left: 90 + i * 290,
					top: 330 + i * 32 + (i >= 3 ? 24 : 0),
					width: 262,
					height: 272,
					padding: "22px 22px"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "label",
						style: { color: i === 3 ? "var(--paper)" : "var(--terra)" },
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "term",
						style: {
							fontSize: 28,
							marginTop: 12
						},
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "small",
						style: {
							marginTop: 12,
							fontSize: 16
						},
						children: d
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							position: "absolute",
							left: 22,
							right: 22,
							bottom: 20,
							fontFamily: "var(--f-text)",
							fontStyle: "italic",
							fontSize: 15,
							borderTop: "1px solid currentColor",
							paddingTop: 8,
							opacity: .85
						},
						children: ex
					})
				]
			}, t))
		]
	});
}
var PRINCIPLES = [
	[
		"I",
		"Takrorlanish",
		"Har bir variant bir necha delyankada qaytariladi. Bu tajriba xatosini baholash imkonini beradi va o‘rtacha qiymat aniqligini oshiradi."
	],
	[
		"II",
		"Randomizatsiya",
		"Variantlar delyankalarga tasodifiy taqsimlanadi. Muntazam (sistematik) xatolar yo‘qoladi, xato bahosi xolis bo‘ladi."
	],
	[
		"III",
		"Mahalliy nazorat",
		"Maydon unumdorligi bir xil bo‘lgan bloklarga bo‘linadi. Tuproq notekisligi tajriba xatosidan ajratib olinadi."
	]
];
function S06(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "I",
		tone: "terra",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "I.4 — Asosiy tamoyillar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 700,
					fontSize: 84
				}),
				children: [
					"Fisherning",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontStyle: "italic",
							paddingLeft: 90
						},
						children: "uch tamoyili"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "abs",
				"data-in": true,
				style: at(2, {
					left: 900,
					top: 140,
					width: 610,
					margin: 0
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "serif-num",
						style: {
							fontSize: 120,
							lineHeight: .5,
							opacity: .5
						},
						children: "“"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "lede",
						style: {
							margin: 0,
							color: "var(--paper)",
							fontSize: 25
						},
						children: "Tajriba tugagach statistikka murojaat qilish — ko‘pincha undan tajribaning «o‘lim sababini» aniqlab berishni so‘rash, xolos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "label",
						style: {
							marginTop: 14,
							color: "var(--paper-2)"
						},
						children: "R. A. Fisher, 1938"
					})
				]
			}),
			PRINCIPLES.map(([r, t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(3 + i, {
					left: 96 + i * 490,
					top: 375 + i * 34,
					width: 420
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "serif-num",
						style: {
							fontSize: 130,
							color: "transparent",
							WebkitTextStroke: "1.5px var(--paper)"
						},
						children: r
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "term",
						style: {
							fontSize: 38,
							marginTop: 14
						},
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						style: {
							marginTop: 12,
							color: "var(--paper-2)",
							fontSize: 19
						},
						children: d
					})
				]
			}, r)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card ink abs",
				"data-in": true,
				style: at(6, {
					left: 96,
					top: 752,
					width: 1e3,
					padding: "14px 22px",
					rot: -.8
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label",
						style: { color: "var(--clay)" },
						children: "+ Yagona farq tamoyili ·"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { fontSize: 18 },
						children: "variantlar faqat o‘rganilayotgan omil bo‘yicha farqlanadi, qolgan barcha sharoitlar bir xil saqlanadi."
					})
				]
			})
		]
	});
}
var ELEMENTS = [
	["Variantlar soni", "Tajriba sxemasi — maqsad va vazifalardan kelib chiqadi."],
	["Delyanka", "Maydoni, shakli va yo‘nalishi. Odatda 50–200 m², cho‘ziq to‘g‘ri to‘rtburchak."],
	["Takrorlanish", "Joyda (delyankalar soni) va vaqtda (yillar soni)."],
	["Joylashtirish usuli", "Variant va takrorlarning maydonda taqsimlanishi."],
	["Hosilni hisobga olish", "Faqat hisob maydonidan, yagona usulda."]
];
function S07(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "II",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "II.1 — Dala tajribasi metodikasi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 560,
					fontSize: 66
				}),
				children: ["Tajribaning ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "besh elementi" })]
			}),
			ELEMENTS.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(2 + i, {
					left: 96,
					top: 330 + i * 96,
					width: 520,
					display: "flex",
					gap: 22,
					borderTop: "1px solid color-mix(in srgb, var(--ink) 25%, transparent)",
					paddingTop: 14
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "serif-num",
					style: {
						fontSize: 44,
						color: "var(--terra)",
						width: 34
					},
					children: i + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "term",
					style: { fontSize: 24 },
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "small",
					style: {
						marginTop: 4,
						fontSize: 16
					},
					children: d
				})] })]
			}, t)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(4, {
					left: 680,
					top: 118,
					width: 440,
					height: 660
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlotDiagram, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card terra abs",
				"data-in": true,
				style: at(6, {
					left: 1180,
					top: 125,
					width: 340,
					rot: 1.5
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label",
						style: { color: "var(--paper)" },
						children: "Zarur takrorlanish soni"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "math",
						style: {
							fontSize: 50,
							margin: "16px 0 6px"
						},
						children: ["n = (V / P)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "2" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "small",
						style: { fontSize: 15 },
						children: "V — variatsiya koeffitsiyenti, %; P — talab etilgan aniqlik, %."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rule",
						style: { margin: "14px 0" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "math",
						style: { fontSize: 24 },
						children: "V = 20 %, P = 10 % → n = 4"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(7, {
					left: 1190,
					top: 455,
					width: 330
				}),
				children: [
					["≥ 4", "odatiy dala tajribasi"],
					["6–8", "yuqori aniqlik, kichik delyanka"],
					["2–3", "dastlabki, namoyish tajribasi"]
				].map(([v, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "baseline",
						gap: 16,
						padding: "6px 0"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "serif-num",
						style: {
							fontSize: 40,
							width: 92,
							color: "var(--ink)"
						},
						children: v
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "small",
						style: { fontSize: 16 },
						children: d
					})]
				}, v))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card ink abs",
				"data-in": true,
				style: at(8, {
					left: 1170,
					top: 655,
					width: 360,
					padding: "18px 22px",
					rot: -1.2
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "small",
					style: { fontSize: 16 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						style: { color: "var(--clay)" },
						children: "Muhim:"
					}), " takrorlanishni oshirish aniqlikni delyanka maydonini kattalashtirishdan tezroq oshiradi."]
				})
			})
		]
	});
}
function PlotDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 440 660",
		width: "440",
		height: "660",
		style: { overflow: "visible" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
				id: "hatch",
				width: "7",
				height: "7",
				patternUnits: "userSpaceOnUse",
				patternTransform: "rotate(45)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "7",
					stroke: "var(--ink)",
					strokeWidth: "1.1"
				})
			}) }),
			[
				0,
				1,
				2
			].map((k) => {
				const x = 40 + k * 120;
				const mid = k === 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x,
					y: 40,
					width: 110,
					height: 560,
					fill: mid ? "var(--paper-2)" : "var(--paper)",
					stroke: "var(--ink)",
					strokeWidth: "1.5"
				}), mid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x,
					y: 40,
					width: 110,
					height: 560,
					fill: "url(#hatch)",
					opacity: "0.35"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: x + 16,
					y: 80,
					width: 78,
					height: 480,
					fill: "var(--clay)",
					stroke: "var(--terra-deep)",
					strokeWidth: "1.5",
					strokeDasharray: "6 4"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					opacity: "0.5",
					children: Array.from({ length: 9 }).map((_, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: x + 12 + r * 11,
						y1: 60,
						x2: x + 12 + r * 11,
						y2: 580,
						stroke: "var(--ink-3)",
						strokeWidth: "1",
						strokeDasharray: "2 5"
					}, r))
				})] }, k);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fontFamily: "var(--f-mono)",
				fontSize: "12",
				letterSpacing: "1.5",
				fill: "var(--ink)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "216",
						y1: "320",
						x2: "420",
						y2: "250",
						stroke: "var(--ink)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "216",
						cy: "320",
						r: "4",
						fill: "var(--ink)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "300",
						y: "236",
						children: "HISOB MAYDONI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "166",
						y1: "590",
						x2: "420",
						y2: "630",
						stroke: "var(--ink)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "166",
						cy: "590",
						r: "4",
						fill: "var(--ink)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "290",
						y: "652",
						children: "HIMOYA CHIZIG‘I"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "40",
						y: "26",
						fill: "var(--terra)",
						children: "DELYANKA: UZUNLIK : ENI ≈ 5–10 : 1"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "640",
				fontFamily: "var(--f-text)",
				fontStyle: "italic",
				fontSize: "15",
				fill: "var(--ink-3)",
				children: "Himoya chizig‘i qo‘shni"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "30",
				y: "658",
				fontFamily: "var(--f-text)",
				fontStyle: "italic",
				fontSize: "15",
				fill: "var(--ink-3)",
				children: "variant ta’sirini kesadi"
			})
		]
	});
}
var SCHEME = [
	[
		"1",
		"Nazorat (o‘g‘itsiz)",
		"tuproqning tabiiy unumdorligi"
	],
	[
		"2",
		"P₉₀K₆₀ — fon",
		"azotsiz taqqoslash asosi"
	],
	[
		"3",
		"Fon + N₆₀",
		""
	],
	[
		"4",
		"Fon + N₁₂₀",
		""
	],
	[
		"5",
		"Fon + N₁₈₀",
		""
	],
	[
		"6",
		"Fon + N₂₄₀",
		""
	]
];
function S08(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "II",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "II.2 — Tajriba sxemasi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 760
				}),
				children: ["Sxema — tajribaning ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "savoli" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 298,
					width: 680
				}),
				children: "Variantlar majmui tajriba sxemasi deyiladi. Uning tarkibi tadqiqot mavzusi, maqsadi va gipotezasidan kelib chiqadi."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(3, {
					left: 96,
					top: 400,
					width: 690
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: {
						marginBottom: 12,
						color: "var(--terra)"
					},
					children: "Namuna: kuzgi bug‘doyga azot me’yorlari, kg/ga sof modda"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "tbl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							style: { width: 70 },
							children: "№"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Variant" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Vazifasi" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SCHEME.map(([n, v, r], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `v${i + 1}`,
							style: {
								display: "inline-grid",
								placeItems: "center",
								width: 30,
								height: 30,
								border: "1px solid var(--ink)",
								fontFamily: "var(--f-mono)",
								fontSize: 13,
								fontWeight: 700
							},
							children: n
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							style: {
								color: "var(--ink)",
								fontWeight: 500
							},
							children: rich(v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							style: {
								fontStyle: "italic",
								fontSize: 17
							},
							children: r || "azot dozasi samarasi"
						})
					] }, n)) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(4, {
					left: 860,
					top: 150,
					width: 380
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: { marginBottom: 12 },
					children: "Sxema tuzish qoidalari"
				}), [
					["Nazorat majburiy", "Har qanday ta’sir nazoratga nisbatan baholanadi."],
					["Fon bir xil", "O‘rganilmayotgan omillar barcha variantlarda teng."],
					["Teng oraliq", "Dozalar bir xil qadam bilan — regressiya tahlili uchun qulay."],
					["Ortiqcha variantsiz", "Har bir qo‘shimcha variant maydonni va xatoni oshiradi."]
				].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						padding: "12px 0",
						borderTop: "1px solid color-mix(in srgb, var(--ink) 25%, transparent)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "term",
						style: { fontSize: 22 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: {
								color: "var(--terra)",
								fontFamily: "var(--f-mono)",
								fontSize: 13,
								marginRight: 10
							},
							children: ["0", i + 1]
						}), t]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "small",
						style: {
							fontSize: 16,
							marginTop: 4
						},
						children: d
					})]
				}, t))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "photo framed",
				"data-in": true,
				style: at(5, {
					left: 1300,
					top: 110,
					width: 220,
					height: 394,
					rot: 2.5
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img("soil", 500),
					alt: "Tuproq kesimi va bug‘doy ildizlari"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(6, {
					left: 1090,
					top: 590,
					width: 440,
					textAlign: "right"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "display",
					style: { fontSize: 84 },
					children: ["6 × 4 = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "24" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "small",
					style: {
						marginTop: 10,
						fontStyle: "italic"
					},
					children: "6 variant, 4 takror — 24 ta delyanka. Delyanka 100 m² bo‘lsa, hisob maydoni 0,24 ga."
				})]
			})
		]
	});
}
var CRD = [
	3,
	6,
	1,
	4,
	2,
	5,
	5,
	2,
	6,
	1,
	3,
	4,
	1,
	4,
	3,
	6,
	5,
	2,
	6,
	3,
	5,
	2,
	4,
	1
];
var RCBD = [
	[
		3,
		1,
		5,
		2,
		6,
		4
	],
	[
		5,
		2,
		4,
		6,
		1,
		3
	],
	[
		1,
		6,
		2,
		4,
		3,
		5
	],
	[
		4,
		3,
		6,
		1,
		5,
		2
	]
];
var LATIN = [
	"ABCD",
	"CDAB",
	"DCBA",
	"BADC"
];
var SPLIT = [
	["S₁", [
		2,
		1,
		3
	]],
	["S₂", [
		3,
		2,
		1
	]],
	["S₂", [
		1,
		3,
		2
	]],
	["S₁", [
		3,
		1,
		2
	]]
];
function S09(p) {
	const panel = (i, left, top, t, use, grid) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "abs",
		"data-in": true,
		style: at(2 + i, {
			left,
			top,
			width: 320
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "label",
				style: { color: "var(--terra)" },
				children: ["Usul 0", i + 1]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "term",
				style: {
					fontSize: 26,
					margin: "8px 0 16px",
					minHeight: 56
				},
				children: t
			}),
			grid,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "small",
				style: {
					fontSize: 16,
					marginTop: 16
				},
				children: use
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "II",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "II.3 — Joylashtirish usullari"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 1100,
					fontSize: 64
				}),
				children: ["Tuproq notekisligiga qarshi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "to‘rt usul" })]
			}),
			panel(0, 96, 290, "To‘liq randomizatsiya", "Sharoit bir jinsli bo‘lganda: laboratoriya va vegetatsion tajribalar.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "plots",
				style: { gridTemplateColumns: "repeat(6, 1fr)" },
				children: CRD.map((v, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `plot v${v}`,
					style: { aspectRatio: "1 / 1.1" },
					children: v
				}, k))
			})),
			panel(1, 470, 250, "Randomizatsiyalangan bloklar", "Dala tajribasida eng ko‘p qo‘llaniladi: har blokda barcha variantlar bir martadan.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gap: 6
				},
				children: RCBD.map((row, b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "26px repeat(6, 1fr)",
						gap: 3,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label",
						style: { color: "var(--ink)" },
						children: [
							"I",
							"II",
							"III",
							"IV"
						][b]
					}), row.map((v, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `plot v${v}`,
						style: { aspectRatio: "1 / 1.1" },
						children: v
					}, k))]
				}, b))
			})),
			panel(2, 850, 310, "Lotin kvadrati", "Unumdorlik ikki yo‘nalishda o‘zgarsa. Variantlar soni = takrorlar soni.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "plots",
				style: {
					gridTemplateColumns: "repeat(4, 1fr)",
					width: 250
				},
				children: LATIN.join("").split("").map((c, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `plot v${"ABCD".indexOf(c) + 2}`,
					style: { aspectRatio: "1 / 1" },
					children: c
				}, k))
			})),
			panel(3, 1210, 270, "Bo‘lingan delyankalar", "Bir omil katta maydon talab qilsa (sug‘orish S), ikkinchisi — kichik delyankada (azot dozasi).", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 8
				},
				children: SPLIT.map(([s, subs], k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						border: "2px solid var(--ink)",
						padding: 3
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label",
						style: {
							color: "var(--ink)",
							marginBottom: 3
						},
						children: rich(s)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							gap: 2
						},
						children: subs.map((v, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `plot v${v + 2}`,
							style: {
								aspectRatio: "1 / 1.6",
								fontSize: 11
							},
							children: ["N", v]
						}, j))
					})]
				}, k))
			})),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(6, {
					left: 96,
					top: 790,
					display: "flex",
					gap: 6,
					alignItems: "center"
				}),
				children: [[
					1,
					2,
					3,
					4,
					5,
					6
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `v${v}`,
					style: {
						width: 34,
						height: 18,
						border: "1px solid var(--ink)"
					}
				}, v)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label",
					style: {
						marginLeft: 12,
						color: "var(--ink-2)"
					},
					children: "Rang — o‘g‘it dozasi: och tusdan to‘q tusga oshib boradi"
				})]
			})
		]
	});
}
var LEVELS = {
	N: [120, 240],
	P: [60, 120],
	K: [40, 80]
};
var MATRIX = [
	[
		-1,
		-1,
		-1
	],
	[
		1,
		-1,
		-1
	],
	[
		-1,
		1,
		-1
	],
	[
		1,
		1,
		-1
	],
	[
		-1,
		-1,
		1
	],
	[
		1,
		-1,
		1
	],
	[
		-1,
		1,
		1
	],
	[
		1,
		1,
		1
	]
];
function Sign({ v }) {
	const on = v > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			display: "inline-grid",
			placeItems: "center",
			width: 34,
			height: 26,
			fontFamily: "var(--f-mono)",
			fontWeight: 700,
			fontSize: 15,
			background: on ? "var(--terra)" : "transparent",
			color: on ? "var(--paper)" : "var(--ink)",
			border: "1px solid var(--ink)"
		},
		children: on ? "+1" : "−1"
	});
}
function S10(p) {
	const lv = (k, v) => LEVELS[k][v > 0 ? 1 : 0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "III",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "III.1 — Ko‘p omilli tajriba"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 640
				}),
				children: [
					"To‘liq omilli reja",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: ["2", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "k" })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "body abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 305,
					width: 600
				}),
				children: [
					"Har bir omil ikki darajada olinadi va barcha birikmalar sinaladi. Tajribalar soni: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "math",
						style: { fontSize: 24 },
						children: ["N = 2", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "k" })]
					}),
					", bunda ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "k" }),
					" — omillar soni. N, P, K uchun: 2³ = 8 variant."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(3, {
					left: 96,
					top: 420,
					width: 600
				}),
				children: [
					["O‘zaro ta’sir", "N × P kabi birgalikdagi samarani ham baholaydi — bir omilli tajribada bu imkonsiz."],
					["Har bir kuzatish ishlaydi", "Barcha 8 natija har bir omil samarasini hisoblashda qatnashadi."],
					["Ortogonallik", "Koeffitsiyentlar bir-biridan mustaqil, oddiy formula bilan topiladi."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 18,
						padding: "10px 0",
						borderTop: "1px solid color-mix(in srgb, var(--ink) 25%, transparent)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							color: "var(--terra)",
							fontSize: 22
						},
						children: "✦"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "term",
						style: { fontSize: 22 },
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "small",
						style: {
							fontSize: 16,
							marginTop: 2
						},
						children: d
					})] })]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(4, {
					left: 96,
					top: 700,
					display: "flex",
					gap: 40,
					alignItems: "flex-end"
				}),
				children: [
					[
						"3⁵",
						"243",
						"uch darajada, 5 omil"
					],
					[
						"2⁵",
						"32",
						"to‘liq omilli reja"
					],
					[
						"2⁵⁻¹",
						"16",
						"kasr reja — skrining"
					]
				].map(([f, v, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "serif-num",
					style: {
						fontSize: 66,
						color: i === 2 ? "var(--terra)" : "var(--ink)"
					},
					children: v
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "label",
					style: {
						marginTop: 8,
						color: "var(--ink-2)"
					},
					children: [
						rich(f),
						" · ",
						d
					]
				})] }, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card abs",
				"data-in": true,
				style: at(5, {
					left: 790,
					top: 115,
					width: 730,
					rot: 1,
					padding: "24px 30px"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						justifyContent: "space-between",
						alignItems: "baseline"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "term",
						style: { fontSize: 26 },
						children: "Reja matritsasi 2³ · NPK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pill",
						style: { color: "var(--terra)" },
						children: "kg/ga sof modda"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "tbl",
					style: {
						marginTop: 16,
						fontSize: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "u" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
							className: "c",
							children: [
								"x",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "1" }),
								" (N)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
							className: "c",
							children: [
								"x",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
								" (P)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
							className: "c",
							children: [
								"x",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
								" (K)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "c",
							children: "Variant"
						})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: MATRIX.map(([a, b, c], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							style: {
								fontFamily: "var(--f-mono)",
								fontSize: 14
							},
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "c",
							style: { padding: "5px 12px" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sign, { v: a })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "c",
							style: { padding: "5px 12px" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sign, { v: b })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "c",
							style: { padding: "5px 12px" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sign, { v: c })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "c math",
							style: {
								color: "var(--ink)",
								fontSize: 20
							},
							children: [
								"N",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: lv("N", a) }),
								"P",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: lv("P", b) }),
								"K",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: lv("K", c) })
							]
						})
					] }, i)) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "caption abs",
				"data-in": true,
				style: at(6, {
					left: 820,
					top: 665,
					width: 690
				}),
				children: [
					"−1 — quyi daraja, +1 — yuqori daraja. Markaz (0): ",
					rich("N₁₈₀P₉₀K₆₀"),
					"; variatsiya oralig‘i: ΔN = 60, ΔP = 30, ΔK = 20."
				]
			})
		]
	});
}
var FORMULA = [
	{
		f: "ŷ",
		l: "javob funksiyasi"
	},
	{
		f: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["b", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "0" })] }),
		l: "erkin had"
	},
	{
		f: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Σ b",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
			"x",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" })
		] }),
		l: "chiziqli ta’sir",
		accent: true
	},
	{
		f: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Σ b",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "ij" }),
			"x",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
			"x",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "j" })
		] }),
		l: "o‘zaro ta’sir"
	},
	{
		f: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Σ b",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "ii" }),
			"x",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "2" })
		] }),
		l: "kvadratik had · 2-tartibli model",
		dim: true
	}
];
function S11(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "III",
		tone: "dark",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ghost",
				style: {
					right: -60,
					top: 470,
					fontSize: 600,
					WebkitTextStroke: "1.5px var(--terra)",
					opacity: .2
				},
				children: "ŷ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112,
					color: "var(--clay)"
				}),
				children: "III.2 — Matematik model"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 1300,
					fontSize: 64
				}),
				children: ["Natijani tenglama bilan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					style: { color: "var(--clay)" },
					children: "tasvirlash"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 262,
					display: "flex",
					alignItems: "flex-start",
					gap: 22
				}),
				children: FORMULA.map((seg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 22,
						alignItems: "flex-start"
					},
					children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "math",
						style: {
							fontSize: 56,
							color: "var(--paper-3)"
						},
						children: i === 1 ? "=" : "+"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "math",
						style: {
							fontSize: 56,
							color: seg.accent ? "var(--clay)" : "var(--paper)",
							opacity: seg.dim ? .65 : 1
						},
						children: seg.f
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label",
						style: {
							marginTop: 10,
							color: seg.accent ? "var(--clay)" : "var(--paper-3)",
							maxWidth: 170,
							lineHeight: 1.5
						},
						children: seg.l
					})] })]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(3, {
					left: 96,
					top: 440,
					display: "flex",
					gap: 28
				}),
				children: [[
					"Kodlash",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"x",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
						" = (X",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
						" − X",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i0" }),
						") / ΔX",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" })
					] }),
					"Natural qiymatni −1…+1 shkalasiga o‘tkazadi."
				], [
					"Koeffitsiyent",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"b",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" }),
						" = Σ x",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "iu" }),
						"y",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "u" }),
						" / N"
					] }),
					"Ortogonal rejada har biri mustaqil topiladi."
				]].map(([h, f, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						width: 360,
						borderTop: "1px solid var(--paper-3)",
						paddingTop: 14
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label",
							style: { color: "var(--clay)" },
							children: h
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "math",
							style: {
								fontSize: 31,
								margin: "12px 0 8px",
								color: "var(--paper)"
							},
							children: f
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "small",
							style: {
								fontSize: 16,
								color: "var(--paper-3)"
							},
							children: d
						})
					]
				}, h))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(4, {
					left: 920,
					top: 430,
					width: 560
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: {
						color: "var(--paper-3)",
						marginBottom: 6
					},
					children: "Modelni tekshirish ketma-ketligi"
				}), [
					[
						"G",
						"Koxren mezoni",
						"tajribalar takrorlanuvchanligi: dispersiyalar bir jinsliligi"
					],
					[
						"t",
						"Styudent mezoni",
						"har bir koeffitsiyentning ahamiyatliligi"
					],
					[
						"F",
						"Fisher mezoni",
						"modelning tajribaga adekvatligi"
					]
				].map(([l, n, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 22,
						alignItems: "center",
						padding: "10px 0",
						borderBottom: "1px solid color-mix(in srgb, var(--paper) 18%, transparent)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "math",
						style: {
							fontSize: 50,
							width: 44,
							color: "var(--terra)"
						},
						children: l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "term",
						style: {
							fontSize: 22,
							color: "var(--paper)"
						},
						children: n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "small",
						style: {
							fontSize: 16,
							color: "var(--paper-3)"
						},
						children: d
					})] })]
				}, l))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card terra abs",
				"data-in": true,
				style: at(5, {
					left: 96,
					top: 650,
					width: 760,
					padding: "18px 26px",
					rot: -1,
					boxShadow: "8px 8px 0 var(--paper)"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label",
						style: { color: "var(--paper)" },
						children: "Shartli misol · bug‘doy hosili, s/ga"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "math",
						style: {
							fontSize: 30,
							margin: "8px 0 6px"
						},
						children: [
							"ŷ = 54,6 + 5,8x",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "1" }),
							" + 2,1x",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							" + 0,6x",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "3" }),
							" + 1,4x",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "1" }),
							"x",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "small",
						style: { fontSize: 16 },
						children: "Azot — eng kuchli omil; N × P o‘zaro ta’siri ijobiy. Kaliy koeffitsiyenti t-mezon bo‘yicha ahamiyatsiz bo‘lsa, modeldan chiqariladi."
					})
				]
			})
		]
	});
}
var yOf = (x) => 42 + .19 * x - 4e-4 * x * x;
function ResponseCurve() {
	const X = (x) => 70 + x / 300 * 700;
	const Y = (y) => 470 - (y - 38) / 30 * 420;
	const d = Array.from({ length: 61 }, (_, i) => i * 5).map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(yOf(x)).toFixed(1)}`).join(" ");
	const dots = [
		0,
		60,
		120,
		180,
		240
	];
	const bio = 237.5;
	const eco = 180;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 820 540",
		width: "820",
		height: "540",
		style: { overflow: "visible" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "470",
				x2: "790",
				y2: "470",
				stroke: "var(--ink)",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "40",
				x2: "70",
				y2: "470",
				stroke: "var(--ink)",
				strokeWidth: "1.5"
			}),
			[
				0,
				60,
				120,
				180,
				240,
				300
			].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: X(x),
				y1: "470",
				x2: X(x),
				y2: "478",
				stroke: "var(--ink)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: X(x),
				y: "500",
				textAnchor: "middle",
				fontFamily: "var(--f-mono)",
				fontSize: "13",
				fill: "var(--ink-2)",
				children: x
			})] }, x)),
			[
				40,
				50,
				60
			].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "62",
				y1: Y(y),
				x2: "790",
				y2: Y(y),
				stroke: "var(--ink)",
				strokeOpacity: "0.12"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "52",
				y: Y(y) + 4,
				textAnchor: "end",
				fontFamily: "var(--f-mono)",
				fontSize: "13",
				fill: "var(--ink-2)",
				children: y
			})] }, y)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "790",
				y: "530",
				textAnchor: "end",
				fontFamily: "var(--f-mono)",
				fontSize: "12",
				letterSpacing: "1.5",
				fill: "var(--ink-3)",
				children: "AZOT DOZASI, KG/GA →"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "70",
				y: "22",
				fontFamily: "var(--f-mono)",
				fontSize: "12",
				letterSpacing: "1.5",
				fill: "var(--ink-3)",
				children: "↑ HOSIL, S/GA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: X(eco),
				y1: Y(yOf(eco)),
				x2: X(eco),
				y2: "470",
				stroke: "var(--terra)",
				strokeWidth: "1.5",
				strokeDasharray: "5 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: X(bio),
				y1: Y(yOf(bio)),
				x2: X(bio),
				y2: "470",
				stroke: "var(--ink)",
				strokeWidth: "1",
				strokeDasharray: "2 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d,
				fill: "none",
				stroke: "var(--ink)",
				strokeWidth: "2.5"
			}),
			dots.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: X(x),
				cy: Y(yOf(x)),
				r: "6",
				fill: "var(--paper)",
				stroke: "var(--ink)",
				strokeWidth: "1.5"
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: X(eco),
				cy: Y(yOf(eco)),
				r: "9",
				fill: "var(--terra)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fontFamily: "var(--f-text)",
				fontSize: "19",
				fontStyle: "italic",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: X(eco) - 14,
						y: Y(yOf(eco)) - 40,
						textAnchor: "end",
						fill: "var(--terra)",
						children: "iqtisodiy optimum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: X(eco) - 14,
						y: Y(yOf(eco)) - 18,
						textAnchor: "end",
						fill: "var(--ink-2)",
						fontSize: "15",
						children: "dy/dx = narx(N) / narx(don)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: X(bio) + 12,
						y: Y(yOf(bio)) - 30,
						fill: "var(--ink)",
						children: "biologik maksimum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: X(bio) + 12,
						y: Y(yOf(bio)) - 10,
						fill: "var(--ink-2)",
						fontSize: "15",
						children: "dy/dx = 0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: X(40),
						y: Y(yOf(40)) + 46,
						fill: "var(--ink-3)",
						fontSize: "16",
						children: "har bir qo‘shimcha kg azot samarasi kamayib boradi"
					})
				]
			})
		]
	});
}
function CCD() {
	const c = 70;
	const s = 34;
	const a = 48;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 140 140",
		width: "96",
		height: "96",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: 36,
				y: 36,
				width: 68,
				height: 68,
				fill: "none",
				stroke: "var(--ink)",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: c,
				cy: c,
				r: a,
				fill: "none",
				stroke: "var(--ink)",
				strokeOpacity: "0.3",
				strokeDasharray: "3 3"
			}),
			[
				[-34, -34],
				[s, -34],
				[-34, s],
				[s, s]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: c + x,
				cy: c + y,
				r: "6",
				fill: "var(--ink)"
			}, i)),
			[
				[-48, 0],
				[a, 0],
				[0, -48],
				[0, a]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: c + x,
				cy: c + y,
				r: "6",
				fill: "var(--terra)"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: c,
				cy: c,
				r: "6",
				fill: "var(--paper)",
				stroke: "var(--ink)",
				strokeWidth: "1.5"
			})
		]
	});
}
function S12(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "III",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "III.3 — Optimallashtirish"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 600
				}),
				children: ["Optimumni izlash: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "javob yuzasi" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "body abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 312,
					width: 560
				}),
				children: [
					"O‘g‘it dozasi oshgani sari hosil qo‘shimchasi kamayadi (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Mitcherlix qonuni" }),
					"). Shuning uchun maqsad — eng yuqori hosil emas, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "eng samarali doza" }),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(3, {
					left: 96,
					top: 440,
					width: 560
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: { marginBottom: 6 },
					children: "Box–Wilson usuli, 1951"
				}), [
					["Tik ko‘tarilish", "2ᵏ reja asosida gradient yo‘nalishida qadam tashlab, optimum sohasiga yaqinlashish."],
					["Markaziy kompozitsion reja", "Optimum sohasida har bir omil 5 darajada: −α, −1, 0, +1, +α."],
					["Optimum nuqtasi", "Kvadratik model hosilasini nolga tenglash: x* = −b₁ / (2b₁₁)."]
				].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 16,
						padding: "9px 0",
						borderTop: "1px solid color-mix(in srgb, var(--ink) 25%, transparent)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "serif-num",
						style: {
							fontSize: 34,
							color: "var(--terra)",
							width: 26
						},
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "term",
						style: { fontSize: 21 },
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "small",
						style: {
							fontSize: 15.5,
							marginTop: 2
						},
						children: rich(d)
					})] })]
				}, t))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(4, {
					left: 720,
					top: 150
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponseCurve, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card abs",
				"data-in": true,
				style: at(5, {
					left: 96,
					top: 712,
					width: 540,
					padding: "10px 18px",
					rot: -1,
					display: "flex",
					gap: 18,
					alignItems: "center"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						width: 96,
						height: 96,
						flex: "none"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CCD, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: { color: "var(--ink)" },
					children: "Markaziy kompozitsion reja · k = 2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "caption",
					style: {
						fontSize: 15,
						marginTop: 6
					},
					children: [
						"● 2",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "k" }),
						" burchak nuqtalari · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--terra)" },
							children: "●"
						}),
						" yulduz nuqtalar (±α) · ○ markaz"
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "caption abs",
				"data-in": true,
				style: at(6, {
					left: 790,
					top: 712,
					width: 700
				}),
				children: "Grafik — shartli ma’lumotlar asosidagi namuna: y = 42 + 0,19x − 0,0004x²."
			})
		]
	});
}
var YIELDS = [
	["Nazorat", 41.2],
	["Fon PK", 45],
	["+N₆₀", 52.3],
	["+N₁₂₀", 58.6],
	["+N₁₈₀", 63.1],
	["+N₂₄₀", 64]
];
var LSD = 2.4;
function YieldBars() {
	const H = 380;
	const max = 70;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "relative",
			width: 740,
			height: 450
		},
		children: [
			[
				0,
				20,
				40,
				60
			].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 70 + g / max * H,
					borderTop: "1px solid color-mix(in srgb, var(--ink) 14%, transparent)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label",
					style: {
						position: "absolute",
						left: -34,
						top: -8
					},
					children: g
				})
			}, g)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					left: 10,
					right: 0,
					bottom: 70,
					height: H,
					display: "flex",
					alignItems: "flex-end",
					gap: 22
				},
				children: YIELDS.map(([l, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						flex: 1,
						position: "relative",
						height: y / max * H
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `v${i + 1}`,
							style: {
								position: "absolute",
								inset: 0,
								border: "1.5px solid var(--ink)",
								borderBottom: "none"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "serif-num",
							style: {
								position: "absolute",
								top: -38,
								left: 0,
								right: 0,
								textAlign: "center",
								fontSize: 28,
								fontWeight: 400,
								color: i === 4 ? "var(--terra)" : "var(--ink)"
							},
							children: y.toFixed(1).replace(".", ",")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label",
							style: {
								position: "absolute",
								bottom: -30,
								left: -10,
								right: -10,
								textAlign: "center",
								color: "var(--ink)",
								letterSpacing: "0.06em",
								fontSize: 12
							},
							children: rich(l)
						})
					]
				}, l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				left: 0,
				right: 0,
				bottom: 70,
				borderTop: "1.5px solid var(--ink)"
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				right: 0,
				width: 228,
				bottom: 463.42857142857144,
				borderTop: "1.5px solid var(--terra)",
				borderLeft: "1.5px solid var(--terra)",
				borderRight: "1.5px solid var(--terra)",
				height: 12
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					right: -6,
					width: 300,
					textAlign: "right",
					bottom: 481.42857142857144,
					fontFamily: "var(--f-text)",
					fontStyle: "italic",
					fontSize: 17,
					color: "var(--terra)"
				},
				children: [
					"farq 0,9 < EKMF",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "05" }),
					" = ",
					String(LSD).replace(".", ","),
					" — ishonchsiz"
				]
			})
		]
	});
}
function S13(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "IV",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "IV.1 — Natijalar tahlili"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 640,
					fontSize: 64
				}),
				children: ["Dispersion tahlil: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "farq haqiqiymi?" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(2, {
					left: 96,
					top: 320,
					width: 600
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label",
						style: { marginBottom: 10 },
						children: "Umumiy o‘zgaruvchanlikni ajratish (randomizatsiyalangan bloklar)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							height: 46,
							border: "1.5px solid var(--ink)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "v4",
								style: {
									width: "74%",
									display: "grid",
									placeItems: "center",
									fontFamily: "var(--f-mono)",
									fontSize: 13
								},
								children: [
									"C",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "V" }),
									"\xA0variantlar"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "v2",
								style: {
									width: "11%",
									display: "grid",
									placeItems: "center",
									fontFamily: "var(--f-mono)",
									fontSize: 13,
									borderLeft: "1.5px solid var(--ink)"
								},
								children: ["C", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "P" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "v1",
								style: {
									flex: 1,
									display: "grid",
									placeItems: "center",
									fontFamily: "var(--f-mono)",
									fontSize: 13,
									borderLeft: "1.5px solid var(--ink)"
								},
								children: [
									"C",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "Z" }),
									" xato"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "math",
						style: {
							fontSize: 26,
							marginTop: 12
						},
						children: [
							"C",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "Y" }),
							" = C",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "P" }),
							" + C",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "V" }),
							" + C",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "Z" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "small",
								style: {
									fontStyle: "normal",
									marginLeft: 14,
									fontSize: 15
								},
								children: "(P — takrorlar)"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(3, {
					left: 96,
					top: 490,
					width: 600,
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "22px 30px"
				}),
				children: [
					[/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"F",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "f" }),
						" = s²",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "V" }),
						" / s²",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "Z" })
					] }), "F_{f} > F₀₅ bo‘lsa, variantlar orasida ishonchli farq bor."],
					[/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"EKMF",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "05" }),
						" = t",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "05" }),
						" · s",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })
					] }), "Eng kichik muhim farq (НСР₀₅); s_{d} = √(2s²/n)."],
					[/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"S",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "x̄" }),
						"% ≤ 3–5"
					] }), "Tajriba aniqligi: 3 % gacha — yaxshi, 3–5 % — qoniqarli."],
					[/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "V: 10 · 20 %" }), "Variatsiya: <10 % — kichik, 10–20 % — o‘rtacha, >20 % — katta."]
				].map(([f, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						borderTop: "1px solid color-mix(in srgb, var(--ink) 30%, transparent)",
						paddingTop: 10
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "math",
						style: {
							fontSize: 26,
							color: "var(--ink)"
						},
						children: f
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "small",
						style: {
							fontSize: 15,
							marginTop: 6
						},
						children: rich(d)
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(4, {
					left: 790,
					top: 180
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: { marginBottom: 54 },
					children: "Shartli natijalar · bug‘doy hosili, s/ga · 4 takror o‘rtachasi"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YieldBars, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card ink abs",
				"data-in": true,
				style: at(5, {
					left: 820,
					top: 730,
					width: 700,
					padding: "16px 24px",
					rot: -.8
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "small",
					style: { fontSize: 17 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							style: { color: "var(--clay)" },
							children: "Xulosa:"
						}),
						" N",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "240" }),
						" qo‘shimcha hosil bermaydi. Maqbul me’yor — ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
							style: { color: "var(--paper)" },
							children: ["N", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "180" })]
						}),
						", bu optimallashtirish natijasi bilan mos keladi."
					]
				})
			})
		]
	});
}
var STEPS = [
	["Muammo va maqsad", "Ilmiy savolni aniq va o‘lchanadigan shaklda qo‘yish."],
	["Gipoteza", "Kutilayotgan ta’sir va uning yo‘nalishini oldindan belgilash."],
	["Omil va darajalar", "Omillar, darajalar va variatsiya oralig‘ini tanlash."],
	["Sxema va reja", "Variantlar, takrorlar soni, delyanka o‘lchami."],
	["Joylashtirish", "Bloklash va randomizatsiya, dala xaritasini tuzish."],
	["O‘tkazish", "Kuzatuvlar, namuna olish, hosilni yagona usulda hisobga olish."],
	["Statistik tahlil", "Dispersion tahlil, EKMF₀₅, regressiya modeli."],
	["Xulosa va tavsiya", "Natijani agrokimyoviy va iqtisodiy jihatdan baholash."]
];
function S14(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "IV",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "IV.2 — Rejalashtirish algoritmi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "h2 abs",
				"data-in": true,
				style: at(1, {
					left: 90,
					top: 148,
					width: 1050
				}),
				children: ["G‘oyadan tavsiyagacha: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "sakkiz qadam" })]
			}),
			STEPS.map(([t, d], i) => {
				const row = Math.floor(i / 4);
				const col = i % 4;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "abs",
					"data-in": true,
					style: at(2 + i, {
						left: 96 + col * 278,
						top: 300 + row * 255 + col % 2 * 42,
						width: 245
					}),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "serif-num",
							style: {
								fontSize: 92,
								color: i === 4 || i === 6 ? "var(--terra)" : "transparent",
								WebkitTextStroke: i === 4 || i === 6 ? "0" : "1.4px var(--ink)"
							},
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "term",
							style: {
								fontSize: 23,
								marginTop: 8
							},
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "small",
							style: {
								fontSize: 16,
								marginTop: 6
							},
							children: rich(d)
						})
					]
				}, t);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card ink abs",
				"data-in": true,
				style: at(10, {
					left: 1225,
					top: 120,
					width: 300,
					rot: 1.5,
					padding: "24px 24px"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: { color: "var(--clay)" },
					children: "Ko‘p uchraydigan xatolar"
				}), [
					"Nazorat varianti yo‘q",
					"Takrorlanish 3 tadan kam",
					"Randomizatsiyasiz, muntazam joylashtirish",
					"Himoya chiziqlarisiz delyankalar",
					"Bir yillik natija bo‘yicha xulosa — kamida 3 yil kerak",
					"Ortiqcha variantlar bilan to‘ldirilgan sxema"
				].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 12,
						padding: "11px 0",
						borderBottom: "1px solid color-mix(in srgb, var(--paper) 16%, transparent)",
						fontSize: 17,
						lineHeight: 1.35,
						color: "var(--paper-2)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "var(--terra)" },
						children: "✕"
					}), e]
				}, e))]
			})
		]
	});
}
var REFS = [
	"Доспехов Б. А. Методика полевого опыта. 5-е изд. — М.: Агропромиздат, 1985.",
	"Fisher R. A. The Design of Experiments. — Edinburgh: Oliver & Boyd, 1935.",
	"Box G. E. P., Wilson K. B. On the Experimental Attainment of Optimum Conditions // J. Royal Stat. Soc. B. — 1951. — Vol. 13(1). — P. 1–45.",
	"Gomez K. A., Gomez A. A. Statistical Procedures for Agricultural Research. 2nd ed. — New York: Wiley, 1984.",
	"Адлер Ю. П., Маркова Е. В., Грановский Ю. В. Планирование эксперимента при поиске оптимальных условий. — М.: Наука, 1976.",
	"Montgomery D. C. Design and Analysis of Experiments. 10th ed. — Hoboken: Wiley, 2019.",
	"Azizov B. M., Israilov I. A., Xudoyqulov J. B. O‘simlikshunoslikda ilmiy tadqiqot ishlari. — Toshkent, 2014."
];
function S15(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slide, {
		...p,
		part: "IV",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kicker abs",
				"data-in": true,
				style: at(0, {
					left: 96,
					top: 112
				}),
				children: "IV.3 — Xulosa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "abs",
				"data-in": true,
				style: at(1, {
					left: 96,
					top: 150,
					width: 690
				}),
				children: [
					"Rejalashtirish tajribadan oldin bajariladi: u natijaning ishonchliligini oldindan belgilaydi.",
					"Takrorlanish, randomizatsiya va mahalliy nazorat — har qanday agrokimyoviy tajribaning asosi.",
					"Ko‘p omilli rejalar kam tajriba bilan omillarning o‘zaro ta’sirini ham ochib beradi.",
					"Regressiya modeli va dispersion tahlil maqbul o‘g‘it me’yorini asoslashga imkon beradi."
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 20,
						padding: "14px 0",
						borderTop: "1px solid color-mix(in srgb, var(--ink) 25%, transparent)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "serif-num",
						style: {
							fontSize: 40,
							color: "var(--terra)",
							width: 30
						},
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						style: {
							margin: 0,
							fontSize: 20,
							color: "var(--ink)"
						},
						children: t
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card abs",
				"data-in": true,
				style: at(2, {
					left: 870,
					top: 112,
					width: 650,
					rot: 1.2,
					padding: "22px 28px"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: {
						color: "var(--terra)",
						marginBottom: 8
					},
					children: "Asosiy adabiyotlar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					style: {
						margin: 0,
						paddingLeft: 22,
						listStyle: "decimal"
					},
					children: REFS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						style: {
							fontSize: 14.5,
							lineHeight: 1.4,
							color: "var(--ink-2)",
							padding: "4px 0"
						},
						children: r
					}, r))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "photo abs",
				"data-in": "fade",
				style: at(3, {
					left: 900,
					top: 560,
					width: 700,
					height: 340,
					WebkitMaskImage: "linear-gradient(to right, transparent, #000 35%)",
					maskImage: "linear-gradient(to right, transparent, #000 35%)"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img("wheat", 1400),
					alt: "",
					style: { objectPosition: "30% 80%" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "abs",
				"data-in": true,
				style: at(4, {
					left: 90,
					top: 640
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "display",
					style: { fontSize: 96 },
					children: ["E’tiboringiz uchun ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "rahmat" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label",
					style: {
						marginTop: 18,
						color: "var(--ink-2)"
					},
					children: "Axmadaliyeva Mubina · Agrokimyoda ilmiy tadqiqot uslublari"
				})]
			})
		]
	});
}
var SLIDES = [
	S01,
	S02,
	S03,
	S04,
	S05,
	S06,
	S07,
	S08,
	S09,
	S10,
	S11,
	S12,
	S13,
	S14,
	S15
];
var W = 1600;
var H = 900;
function readHash() {
	if (typeof window === "undefined") return 0;
	const n = parseInt(window.location.hash.replace("#", ""), 10);
	return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), SLIDES.length - 1) : 0;
}
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [scale, setScale] = (0, import_react.useState)(0);
	const [idle, setIdle] = (0, import_react.useState)(false);
	const idleTimer = (0, import_react.useRef)(void 0);
	const touchX = (0, import_react.useRef)(null);
	const go = (0, import_react.useCallback)((next) => {
		setIndex((cur) => {
			const n = Math.min(Math.max(next, 0), SLIDES.length - 1);
			if (n !== cur) window.history.replaceState(null, "", `#${n + 1}`);
			return n;
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const fit = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H));
		fit();
		setIndex(readHash());
		window.addEventListener("resize", fit);
		const onHash = () => setIndex(readHash());
		window.addEventListener("hashchange", onHash);
		return () => {
			window.removeEventListener("resize", fit);
			window.removeEventListener("hashchange", onHash);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.metaKey || e.ctrlKey || e.altKey) return;
			switch (e.key) {
				case "ArrowRight":
				case "ArrowDown":
				case "PageDown":
				case " ":
				case "Enter":
					e.preventDefault();
					go(index + 1);
					break;
				case "ArrowLeft":
				case "ArrowUp":
				case "PageUp":
				case "Backspace":
					e.preventDefault();
					go(index - 1);
					break;
				case "Home":
					go(0);
					break;
				case "End":
					go(SLIDES.length - 1);
					break;
				case "f":
				case "F": toggleFullscreen();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [index, go]);
	(0, import_react.useEffect)(() => {
		const wake = () => {
			setIdle(false);
			window.clearTimeout(idleTimer.current);
			idleTimer.current = window.setTimeout(() => setIdle(true), 2600);
		};
		wake();
		window.addEventListener("mousemove", wake);
		window.addEventListener("keydown", wake);
		return () => {
			window.removeEventListener("mousemove", wake);
			window.removeEventListener("keydown", wake);
			window.clearTimeout(idleTimer.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "deck-viewport",
		onTouchStart: (e) => touchX.current = e.touches[0].clientX,
		onTouchEnd: (e) => {
			if (touchX.current === null) return;
			const dx = e.changedTouches[0].clientX - touchX.current;
			if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
			touchX.current = null;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-stage",
				style: {
					transform: `translate(-50%, -50%) scale(${scale || 1})`,
					opacity: scale ? 1 : 0
				},
				onClick: (e) => {
					if (e.target.closest("a,button")) return;
					const rect = e.currentTarget.getBoundingClientRect();
					go(index + (e.clientX - rect.left > rect.width * .3 ? 1 : -1));
				},
				children: SLIDES.map((S, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, {
					active: i === index,
					n: i + 1,
					total: SLIDES.length
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "deck-progress",
				style: { width: `${(index + 1) / SLIDES.length * 100}%` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `deck-hint ${idle ? "idle" : ""}`,
				children: "← → varaqlash · F to‘liq ekran"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `deck-ui ${idle ? "idle" : ""}`,
				"aria-label": "Taqdimotni boshqarish",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(index - 1),
						"aria-label": "Oldingi slayd",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 16 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "count",
						children: [
							String(index + 1).padStart(2, "0"),
							" /",
							" ",
							String(SLIDES.length).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(index + 1),
						"aria-label": "Keyingi slayd",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: toggleFullscreen,
						"aria-label": "To‘liq ekran",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { size: 15 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => window.print(),
						"aria-label": "PDF sifatida saqlash",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { size: 15 }), " PDF"]
					})
				]
			})
		]
	});
}
function toggleFullscreen() {
	if (document.fullscreenElement) document.exitFullscreen();
	else document.documentElement.requestFullscreen?.();
}
var SplitComponent = Deck;
export { SplitComponent as component };
