import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Flame, i as ShieldCheck, n as Wrench } from "../_libs/lucide-react.mjs";
import { t as construction_metallique_default } from "./construction-metallique-CC0PuN1X.mjs";
import { t as hero_atelier_default } from "./hero-atelier-C7Ig9aK7.mjs";
import { t as maintenceindustrielle1_default } from "./maintenceindustrielle1-BJTE4I_i.mjs";
import { t as usinage_fabrication_mecanique2_default } from "./usinage-fabrication-mecanique2-zRrF0xCL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atelier-DF7HT0RO.js
var import_jsx_runtime = require_jsx_runtime();
var usinage = [
	"Fraiseuse aléseuse vernier",
	"Tour parallèle 3 m",
	"Tour parallèle 2 m",
	"Tour parallèle 1,5 m",
	"Mortaiseuse 300 mm",
	"Perceuse à colonne",
	"Presse 100 t",
	"Scie mécanique",
	"Fraiseuse classique"
];
var chaudronnerie = [
	"Cisaille guillotine",
	"Plieuse hydraulique",
	"Rouleuse cintreuse"
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-steel",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
						children: "L'atelier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-bold md:text-5xl",
						children: "Notre atelier & parc machines à Hammamet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-white/75",
						children: "Implanté à Barraket Sahel, route Sidi Hamed, notre atelier réunit les machines d'usinage et de chaudronnerie nécessaires pour fabriquer vos ouvrages sans sous-traitance, de la découpe au façonnage précis des pièces."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-5 w-5 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-primary",
							children: "Usinage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase text-muted-foreground",
							children: "9 machines"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-muted-foreground",
					children: "Fraisage, tournage, alésage et perçage pour la fabrication et la réparation de pièces mécaniques selon plans."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
					children: usinage.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border border-border bg-card px-4 py-5 text-center shadow-sm transition-colors hover:border-accent hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold leading-snug text-primary",
							children: it
						})
					}, it))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-5 w-5 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-primary",
							children: "Chaudronnerie"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase text-muted-foreground",
							children: "3 machines"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-muted-foreground",
					children: "Découpe, pliage et roulage de tôle pour la fabrication de trémies, cuves, réservoirs et équipements sur mesure."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3",
					children: chaudronnerie.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border border-border bg-card px-4 py-5 text-center shadow-sm transition-colors hover:border-accent hover:bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold leading-snug text-primary",
							children: it
						})
					}, it))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center gap-2 border-l-2 border-accent bg-secondary px-4 py-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 shrink-0 text-accent" }), "Sécurité et qualité respectées à chaque étape de fabrication."]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-6 px-4 pb-8 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_atelier_default,
					alt: "Structure métallique fabriquée par SAM MECA",
					loading: "lazy",
					width: 1600,
					height: 900,
					className: "h-72 w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: construction_metallique_default,
					alt: "Pièces de chaudronnerie fabriquées à l'atelier SAM MECA",
					loading: "lazy",
					width: 1200,
					height: 800,
					className: "h-72 w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: maintenceindustrielle1_default,
					alt: "Structure métallique fabriquée par SAM MECA",
					loading: "lazy",
					width: 1600,
					height: 900,
					className: "h-72 w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: usinage_fabrication_mecanique2_default,
					alt: "Pièces de chaudronnerie fabriquées à l'atelier SAM MECA",
					loading: "lazy",
					width: 1200,
					height: 800,
					className: "h-72 w-full object-cover"
				})
			]
		})
	] });
}
//#endregion
export { Page as component };
