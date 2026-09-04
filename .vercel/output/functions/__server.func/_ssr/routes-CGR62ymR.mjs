import { t as chaudronnerie_default } from "./chaudronnerie-LxDWvHDp.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as ArrowRight, g as Container, h as Factory, i as Truck, m as Flame, p as HardHat, s as Ruler } from "../_libs/lucide-react.mjs";
import { t as hero_atelier_default } from "./hero-atelier-C7Ig9aK7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as charpente_default } from "./charpente-CtL63lcf.mjs";
import { t as citerne_default } from "./citerne-Bu8Krp2c.mjs";
import { t as remorque_default } from "./remorque-CsHJ0i0A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CGR62ymR.js
var import_jsx_runtime = require_jsx_runtime();
var metiers = [
	{
		to: "/construction-metallique",
		label: "Construction métallique",
		icon: Factory,
		text: "Hangars, mezzanines, passerelles et structures industrielles clés en main.",
		img: hero_atelier_default
	},
	{
		to: "/charpente-metallique",
		label: "Charpente métallique",
		icon: HardHat,
		text: "Fermes, portiques et pannes calculés selon les normes en vigueur.",
		img: charpente_default
	},
	{
		to: "/chaudronnerie",
		label: "Chaudronnerie",
		icon: Flame,
		text: "Roulage, pliage, soudure TIG/MIG sur acier, inox et aluminium.",
		img: chaudronnerie_default
	},
	{
		to: "/citernes",
		label: "Confection de citernes",
		icon: Container,
		text: "Citernes de stockage et de transport, aériennes ou enterrées.",
		img: citerne_default
	},
	{
		to: "/remorques",
		label: "Remorques",
		icon: Truck,
		text: "Châssis, plateaux, bennes et remorques spéciales homologuées.",
		img: remorque_default
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_atelier_default,
					alt: "Structure métallique en cours de montage dans l'atelier SAM MECA",
					width: 1600,
					height: 900,
					className: "h-[68vh] min-h-[420px] w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy-deep/75" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto w-full max-w-7xl px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.35em] text-white",
								children: "Atelier de métallerie industrielle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl",
								children: "L'acier travaillé avec précision"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-white/80",
								children: "Construction métallique, chaudronnerie, charpente métallique, confection de citernes et de remorques : SAM MECA maîtrise votre projet de l'étude au montage."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90",
									children: ["Demander un devis ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/construction-metallique",
									className: "inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-white/10",
									children: "Nos prestations"
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold text-primary",
					children: "Nos métiers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: metiers.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: m.to,
						className: "card-industrial group block overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m.img,
							alt: m.label,
							loading: "lazy",
							width: 1200,
							height: 800,
							className: "h-44 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-6 w-6 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-lg font-bold text-primary",
									children: m.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: m.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase text-accent",
									children: ["En savoir plus ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})]
					}, m.to))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-steel",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					["+20 ans", "d'expérience en métallerie"],
					["2 500 m²", "d'atelier et de parc à tôles"],
					["+400", "ouvrages livrés"],
					["48 h", "pour recevoir votre devis"]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl font-bold text-accent",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/70",
					children: v
				})] }, k))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold text-primary",
					children: "Notre méthode"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-4",
					children: [
						{
							t: "Étude & plans",
							d: "Relevé sur site, notes de calcul et plans d'exécution."
						},
						{
							t: "Débit & façonnage",
							d: "Découpe plasma, roulage, pliage et perçage."
						},
						{
							t: "Assemblage & soudure",
							d: "Soudeurs qualifiés, contrôle dimensionnel."
						},
						{
							t: "Traitement & montage",
							d: "Sablage, peinture époxy et pose sur chantier."
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-l-4 border-accent bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-3xl font-bold text-steel",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-base font-bold text-primary",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.d
							})
						]
					}, s.t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-center gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { className: "h-4 w-4 text-accent" }), " Tolérances et normes respectées sur chaque ouvrage."]
				})
			]
		})
	] });
}
//#endregion
export { Index as component };
