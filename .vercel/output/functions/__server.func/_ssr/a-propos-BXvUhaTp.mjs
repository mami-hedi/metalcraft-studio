import { t as chaudronnerie_default } from "./chaudronnerie-LxDWvHDp.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as ShieldCheck, n as Wrench, r as Users, x as Award } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/a-propos-BXvUhaTp.js
var import_jsx_runtime = require_jsx_runtime();
var valeurs = [
	{
		icon: Wrench,
		t: "Parc machines complet",
		d: "Découpe plasma, rouleuse, plieuse, perceuse à colonne et postes de soudure."
	},
	{
		icon: Users,
		t: "Équipe qualifiée",
		d: "Dessinateurs, chaudronniers, soudeurs et monteurs formés en continu."
	},
	{
		icon: ShieldCheck,
		t: "Sécurité & conformité",
		d: "Procédures de travail sécurisées et respect des normes en atelier comme sur chantier."
	},
	{
		icon: Award,
		t: "Qualité contrôlée",
		d: "Contrôle dimensionnel, essais d'étanchéité et réception avec le client."
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
						children: "L'entreprise"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-bold md:text-5xl",
						children: "À propos de SAM MECA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-white/75",
						children: "Depuis plus de vingt ans, nous travaillons l'acier pour l'industrie, l'agriculture et le bâtiment. Un seul interlocuteur, de l'étude au montage."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-primary",
					children: "Un atelier, cinq spécialités"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted-foreground",
					children: "SAM MECA regroupe sous un même toit la construction métallique, la charpente, la chaudronnerie, la confection de citernes et la fabrication de remorques. Cette polyvalence nous permet de traiter des projets complets sans sous-traitance : l'étude, le débit, le façonnage, la soudure, le traitement de surface et le montage sont réalisés par nos propres équipes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "Chaque ouvrage part d'un plan validé avec le client et se termine par une réception sur site. C'est cette rigueur qui fait revenir nos clients industriels, projet après projet."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: chaudronnerie_default,
				alt: "Intérieur de l'atelier SAM MECA",
				loading: "lazy",
				width: 1200,
				height: 800,
				className: "h-full w-full object-cover"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: valeurs.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card-industrial p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-base font-bold text-primary",
							children: v.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: v.d
						})
					]
				}, v.t))
			})
		})
	] });
}
//#endregion
export { Page as component };
