import { t as chaudronnerie_default } from "./chaudronnerie-LxDWvHDp.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Cog, i as Truck, l as PaintBucket, m as Flame, o as Scissors, s as Ruler } from "../_libs/lucide-react.mjs";
import { t as hero_atelier_default } from "./hero-atelier-C7Ig9aK7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atelier-AfEnjGm_.js
var import_jsx_runtime = require_jsx_runtime();
var equipements = [
	{
		icon: Scissors,
		t: "Découpe & débit",
		d: "Découpe plasma, oxycoupage, cisaillage et tronçonnage de profilés."
	},
	{
		icon: Cog,
		t: "Roulage & pliage",
		d: "Rouleuse et presse plieuse pour viroles, tôles et pièces de chaudronnerie."
	},
	{
		icon: Flame,
		t: "Soudure",
		d: "Postes TIG, MIG et à l'arc pour acier, inox et aluminium."
	},
	{
		icon: Ruler,
		t: "Traçage & montage",
		d: "Marbres de montage et contrôle dimensionnel des ensembles soudés."
	},
	{
		icon: PaintBucket,
		t: "Traitement de surface",
		d: "Sablage, primaire antirouille et peinture de finition."
	},
	{
		icon: Truck,
		t: "Levage & livraison",
		d: "Manutention, chargement et pose sur chantier par nos équipes."
	}
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
						children: "Notre atelier de métallerie à Hammamet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-white/75",
						children: "Implanté à Barraket Sahel, route Sidi Hamed (8050 Hammamet), notre atelier réunit tous les moyens nécessaires pour fabriquer vos ouvrages en acier sans sous-traitance."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-primary",
					children: "Nos moyens de production"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: equipements.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-industrial p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, { className: "h-6 w-6 text-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-base font-bold text-primary",
								children: e.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: e.d
							})
						]
					}, e.t))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-6 px-4 pb-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_atelier_default,
				alt: "Structure métallique fabriquée par SAM MECA",
				loading: "lazy",
				width: 1600,
				height: 900,
				className: "h-72 w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: chaudronnerie_default,
				alt: "Poste de soudure dans l'atelier SAM MECA",
				loading: "lazy",
				width: 1200,
				height: 800,
				className: "h-72 w-full object-cover"
			})]
		})
	] });
}
//#endregion
export { Page as component };
