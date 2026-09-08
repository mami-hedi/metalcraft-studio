import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, a as Ruler, d as Flame, f as Factory, i as ShieldCheck, n as Wrench, p as Cog, r as Users, u as Headphones } from "../_libs/lucide-react.mjs";
import { t as construction_metallique_default } from "./construction-metallique-CC0PuN1X.mjs";
import { t as hero_atelier_default } from "./hero-atelier-C7Ig9aK7.mjs";
import { t as maintenceindustrielle1_default } from "./maintenceindustrielle1-G_Iiy-hy.mjs";
import { t as chaudronnerie1_default } from "./chaudronnerie1-CXFgRrMv.mjs";
import { t as usinage_fabrication_mecanique_hero_default } from "./usinage-fabrication-mecanique-hero-DiBj3UZv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BsUZewsY.js
var import_jsx_runtime = require_jsx_runtime();
var metiers = [
	{
		to: "/construction-metallique",
		label: "Construction métallique",
		icon: Factory,
		text: "Charpentes, structures, passerelles, escaliers et châssis industriels sur mesure.",
		img: construction_metallique_default
	},
	{
		to: "/chaudronnerie",
		label: "Chaudronnerie",
		icon: Flame,
		text: "Trémies, goulottes, cuves, réservoirs, vis d'Archimède et équipements sur mesure.",
		img: chaudronnerie1_default
	},
	{
		to: "/usinage-fabrication-mecanique",
		label: "Fabrication de pièces mécaniques",
		icon: Cog,
		text: "Usinage de précision, fabrication sur mesure selon plans, réparation et modification.",
		img: usinage_fabrication_mecanique_hero_default
	},
	{
		to: "/maintenance-industrielle",
		label: "Maintenance industrielle",
		icon: Wrench,
		text: "Diagnostic, maintenance préventive et corrective, intervention sur site.",
		img: maintenceindustrielle1_default
	}
];
var engagements = [{
	icon: Users,
	title: "Notre équipe",
	text: "Une équipe qui réunit des compétences techniques diversifiées et un savoir-faire spécialisé, garantissant une réalisation efficace et de qualité. Nous favorisons la collaboration, le développement des compétences et l'amélioration continue afin de répondre aux exigences de nos clients. La sécurité reste une priorité dans toutes nos activités, à travers la prévention, la sensibilisation et le respect des procédures."
}, {
	icon: Headphones,
	title: "Notre service client",
	text: "Nous plaçons nos clients au cœur de nos priorités, en leur offrant un accompagnement personnalisé et une écoute attentive à chaque étape de leurs projets. Notre réactivité et notre proximité nous permettent de proposer des solutions adaptées à leurs besoins, tout en garantissant leur satisfaction et la qualité de nos services."
}];
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
								children: "Entreprise de métallerie industrielle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl",
								children: "L'acier travaillé avec précision"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-white/80",
								children: "Construction métallique, chaudronnerie industrielle, fabrication de pièces mécaniques et maintenance industrielle : SAM MECA maîtrise votre projet de l'étude au montage."
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
					children: "Présentation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-bold text-primary",
					children: "Qui sommes-nous"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-3xl text-muted-foreground",
					children: "SAM MECA est une entreprise spécialisée dans la construction métallique, la chaudronnerie industrielle et la fabrication mécanique sur mesure. Grâce à une équipe qualifiée et compétente, nous sommes capables de réaliser des projets industriels de différentes envergures, de la fabrication de pièces mécaniques aux ensembles et équipements métalliques complexes, tout en garantissant qualité, précision et fiabilité."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-muted-foreground",
					children: "Notre objectif est de proposer des solutions fiables, adaptées et de qualité, en répondant aux exigences de chaque projet."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-steel",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold text-white",
						children: "Nos domaines d'intervention"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-white/70",
						children: "Notre expertise s'articule autour de quatre domaines clés, nous permettant de répondre aux différents besoins de nos clients industriels."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
						children: metiers.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: m.to,
							className: "card-industrial group block overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.img,
								alt: m.label,
								loading: "lazy",
								width: 1200,
								height: 800,
								className: "h-40 w-full object-cover"
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
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold text-primary",
					children: "Nos engagements"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: engagements.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-industrial p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, { className: "h-8 w-8 text-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-xl font-bold text-primary",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: e.text
							})
						]
					}, e.title))
				})
			]
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
							d: "Découpe, roulage, pliage et perçage."
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { className: "h-4 w-4 text-accent" }),
						" Tolérances et normes respectées sur chaque ouvrage.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-border",
							children: "•"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-accent" }),
						" Sécurité et qualité à chaque étape."
					]
				})
			]
		})
	] });
}
//#endregion
export { Index as component };
