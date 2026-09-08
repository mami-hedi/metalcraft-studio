import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MapPin, h as ChevronDown, l as Mail, o as Phone, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as serviceLinks, t as SITE } from "./site-Zp2OqwdD.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DgIqe6Sb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-IoflY-ym.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var logo_default = "/assets/logo-PGoGLofX.jpeg";
var mainLinks = [
	{
		to: "/",
		label: "Accueil"
	},
	{
		to: "/atelier",
		label: "Atelier"
	},
	{
		to: "/a-propos",
		label: "À propos"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);
	const linkClass = "text-[13px] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "SAM MECA — atelier de construction métallique à Hammamet",
						className: "h-11 w-auto md:h-12"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: linkClass,
							activeProps: { className: "text-primary" },
							activeOptions: { exact: true },
							children: "Accueil"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							ref: dropdownRef,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setServicesOpen((v) => !v),
								className: `${linkClass} inline-flex items-center gap-1`,
								"aria-expanded": servicesOpen,
								children: ["Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
							}), servicesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-full z-50 mt-3 w-64 border border-border bg-card py-2 shadow-lg",
								children: serviceLinks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: s.to,
									onClick: () => setServicesOpen(false),
									className: "block px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:bg-secondary hover:text-accent",
									activeProps: { className: "text-primary" },
									children: s.label
								}, s.to))
							})]
						}),
						mainLinks.slice(1).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: linkClass,
							activeProps: { className: "text-primary" },
							children: l.label
						}, l.to))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "inline-flex items-center gap-2 bg-accent px-3 py-2 text-[11px] font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90 sm:px-4 sm:text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Demander un devis"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Menu",
						className: "text-primary lg:hidden",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "border-t border-border bg-card px-4 py-3 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					onClick: () => setOpen(false),
					className: "block border-b border-border py-3 text-sm font-semibold uppercase text-primary",
					children: "Accueil"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase text-primary",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 space-y-1 pl-3",
						children: serviceLinks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: s.to,
							onClick: () => setOpen(false),
							className: "block py-1.5 text-sm text-muted-foreground",
							children: s.label
						}, s.to))
					})]
				}),
				mainLinks.slice(1).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "block border-b border-border py-3 text-sm font-semibold uppercase text-primary last:border-0",
					children: l.label
				}, l.to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SITE.phoneHref,
					className: "mt-4 flex items-center justify-center gap-2 border border-border py-3 text-sm font-bold uppercase text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-accent" }),
						" ",
						SITE.phone
					]
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "surface-steel mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold",
						children: "SAM MECA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-white/70",
						children: "Sociéte de construction métallique, chaudronnerie, fabrication de pièces mécaniques et maintenance industrielle à Hammamet. Étude, fabrication et montage sur mesure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex bg-accent px-5 py-2.5 text-xs font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90",
						children: "Demander un devis"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-bold tracking-widest",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-white/70",
					children: serviceLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "transition-colors hover:text-white",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-bold tracking-widest",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Barraket Sahel, Route Sidi Hamed",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"8050 Hammamet, Tunisie"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.phoneHref,
								className: "transition-colors hover:text-white",
								children: SITE.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${SITE.email}`,
								className: "transition-colors hover:text-white",
								children: SITE.email
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-white/10 py-5 text-center text-xs text-white/50",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" SAM MECA — Tous droits réservés."
			]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SAM MECA — Construction métallique & chaudronnerie" },
			{
				name: "description",
				content: "Atelier SAM MECA : construction métallique, chaudronnerie, charpente métallique, confection de citernes et de remorques sur mesure."
			},
			{
				name: "author",
				content: "SAM MECA"
			},
			{
				property: "og:title",
				content: "SAM MECA — Construction métallique & chaudronnerie"
			},
			{
				property: "og:description",
				content: "Étude, fabrication et montage de structures métalliques, citernes et remorques."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$10 = () => import("./routes-BsUZewsY.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Construction métallique & chaudronnerie à Hammamet — SAM MECA" },
			{
				name: "description",
				content: "SAM MECA, atelier à Hammamet : construction métallique, chaudronnerie industrielle, fabrication de pièces mécaniques et maintenance industrielle."
			},
			{
				name: "keywords",
				content: "construction métallique, chaudronnerie, usinage, fabrication mécanique, maintenance industrielle, Hammamet, Tunisie"
			},
			{
				property: "og:title",
				content: "Construction métallique & chaudronnerie — SAM MECA"
			},
			{
				property: "og:description",
				content: "Chaudronnerie industrielle et fabrication mécanique sur mesure : de l'étude au montage."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "SAM MECA",
				description: "Entreprise spécialisée dans la construction métallique, la chaudronnerie industrielle et la fabrication mécanique sur mesure.",
				telephone: "+216 94 358 115",
				email: "contact@sammeca.com",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Barraket Sahel, Route Sidi Hamed",
					postalCode: "8050",
					addressLocality: "Hammamet",
					addressCountry: "TN"
				},
				openingHours: "Mo-Sa 08:00-18:00",
				makesOffer: [
					"Construction métallique",
					"Chaudronnerie",
					"Fabrication de pièces mécaniques",
					"Maintenance industrielle"
				].map((s) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: s
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./a-propos-B3kXwq9M.mjs");
var Route$9 = createFileRoute("/a-propos")({
	head: () => ({
		meta: [
			{ title: "À propos de SAM MECA — métallier à Hammamet" },
			{
				name: "description",
				content: "SAM MECA : entreprise spécialisée en construction métallique, chaudronnerie industrielle, fabrication de pièces mécaniques et maintenance industrielle, à Barraket Sahel, Hammamet."
			},
			{
				name: "keywords",
				content: "SAM MECA, métallier Hammamet, construction métallique, chaudronnerie, fabrication mécanique, maintenance industrielle"
			},
			{
				property: "og:title",
				content: "À propos de SAM MECA"
			},
			{
				property: "og:description",
				content: "Une équipe qualifiée et un atelier équipé au service de vos projets industriels."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/a-propos"
			}
		],
		links: [{
			rel: "canonical",
			href: "/a-propos"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "SAM MECA",
				telephone: "+216 94 358 115",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Barraket Sahel, Route Sidi Hamed",
					postalCode: "8050",
					addressLocality: "Hammamet",
					addressCountry: "TN"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./atelier-CkNmkhpR.mjs");
var Route$8 = createFileRoute("/atelier")({
	head: () => ({
		meta: [
			{ title: "Notre atelier & parc machines à Hammamet — SAM MECA" },
			{
				name: "description",
				content: "Atelier SAM MECA à Barraket Sahel, Hammamet : parc machines d'usinage (tours, fraiseuses, presse) et de chaudronnerie (cisaille, plieuse, rouleuse)."
			},
			{
				name: "keywords",
				content: "atelier métallerie Hammamet, parc machines, tour parallèle, fraiseuse, cisaille guillotine, plieuse hydraulique, rouleuse"
			},
			{
				property: "og:title",
				content: "Notre atelier & parc machines — SAM MECA"
			},
			{
				property: "og:description",
				content: "Un parc machines complet pour l'usinage et la chaudronnerie, sans sous-traitance."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/atelier"
			}
		],
		links: [{
			rel: "canonical",
			href: "/atelier"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./charpente-metallique-CY6K_EgX.mjs");
var Route$7 = createFileRoute("/charpente-metallique")({
	head: () => ({
		meta: [
			{ title: "Charpente métallique : fermes, portiques et pannes — SAM MECA" },
			{
				name: "description",
				content: "Charpente métallique sur mesure : fermes treillis, portiques, pannes et contreventements, calculés, fabriqués et montés par SAM MECA."
			},
			{
				name: "keywords",
				content: "charpente métallique, charpente, ferme treillis, portique métallique, hangar"
			},
			{
				property: "og:title",
				content: "Charpente métallique — SAM MECA"
			},
			{
				property: "og:description",
				content: "Fermes treillis, portiques et pannes calculés et montés par nos équipes."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/charpente-metallique"
			}
		],
		links: [{
			rel: "canonical",
			href: "/charpente-metallique"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				serviceType: "Charpente métallique",
				provider: {
					"@type": "Organization",
					name: "SAM MECA"
				},
				areaServed: "Tunisie",
				description: "Étude, préfabrication et montage de charpentes métalliques : fermes, portiques, pannes et contreventements."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./chaudronnerie-DzM-k-WJ.mjs");
var Route$6 = createFileRoute("/chaudronnerie")({
	head: () => ({
		meta: [
			{ title: "Chaudronnerie industrielle sur mesure — SAM MECA" },
			{
				name: "description",
				content: "Chaudronnerie industrielle sur mesure : trémies, godets, goulottes, cuves et réservoirs industriels, vis d'Archimède, turbines et équipements sur mesure."
			},
			{
				name: "keywords",
				content: "chaudronnerie, chaudronnerie industrielle, trémie, goulotte, cuve industrielle, réservoir, vis d'Archimède, turbine"
			},
			{
				property: "og:title",
				content: "Chaudronnerie industrielle — SAM MECA"
			},
			{
				property: "og:description",
				content: "Trémies, goulottes, cuves, réservoirs, vis d'Archimède et équipements industriels sur mesure."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/chaudronnerie"
			}
		],
		links: [{
			rel: "canonical",
			href: "/chaudronnerie"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				serviceType: "Chaudronnerie",
				provider: {
					"@type": "Organization",
					name: "SAM MECA"
				},
				areaServed: "Tunisie",
				description: "Chaudronnerie industrielle sur mesure : trémies, godets, goulottes, cuves, réservoirs, vis d'Archimède, turbines et équipements industriels."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./citernes-CbZ5bPdA.mjs");
var Route$5 = createFileRoute("/citernes")({
	head: () => ({
		meta: [
			{ title: "Confection de citernes de stockage et de transport — SAM MECA" },
			{
				name: "description",
				content: "Confection de citernes sur mesure : eau, carburant, produits chimiques et agroalimentaires, en acier ou inox, aériennes, enterrées ou sur châssis."
			},
			{
				name: "keywords",
				content: "citerne, confection citerne, citerne acier, citerne inox, cuve de stockage"
			},
			{
				property: "og:title",
				content: "Confection de citernes — SAM MECA"
			},
			{
				property: "og:description",
				content: "Citernes acier et inox, de 1 000 à 50 000 litres, testées avant livraison."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/citernes"
			}
		],
		links: [{
			rel: "canonical",
			href: "/citernes"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				serviceType: "Confection de citernes",
				provider: {
					"@type": "Organization",
					name: "SAM MECA"
				},
				areaServed: "Tunisie",
				description: "Fabrication de citernes de stockage et de transport en acier et inox, de 1 000 à 50 000 litres."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./construction-metallique-CiutvRwq.mjs");
var Route$4 = createFileRoute("/construction-metallique")({
	head: () => ({
		meta: [
			{ title: "Construction métallique sur mesure — SAM MECA" },
			{
				name: "description",
				content: "Construction métallique : charpentes, structures et ossatures, passerelles, escaliers, châssis et supports industriels. Fabrication et montage sur site par SAM MECA."
			},
			{
				name: "keywords",
				content: "construction métallique, charpente métallique, structure métallique, passerelle industrielle, châssis, atelier métallerie"
			},
			{
				property: "og:title",
				content: "Construction métallique sur mesure — SAM MECA"
			},
			{
				property: "og:description",
				content: "Structures acier sur mesure : charpentes, passerelles, escaliers, châssis, fabrication et montage."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/construction-metallique"
			}
		],
		links: [{
			rel: "canonical",
			href: "/construction-metallique"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				serviceType: "Construction métallique",
				provider: {
					"@type": "Organization",
					name: "SAM MECA"
				},
				areaServed: "Tunisie",
				description: "Fabrication et montage de charpentes, structures, passerelles, escaliers et châssis métalliques sur mesure selon plans."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-BRP577Wt.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact & devis — SAM MECA Hammamet" },
			{
				name: "description",
				content: "Contactez l'atelier SAM MECA à Hammamet pour un devis en construction métallique, chaudronnerie, charpente, citernes ou remorques. Tél. +216 94 358 115."
			},
			{
				name: "keywords",
				content: "devis construction métallique, chaudronnerie Hammamet, charpente, citerne, remorque"
			},
			{
				property: "og:title",
				content: "Contact & devis — SAM MECA"
			},
			{
				property: "og:description",
				content: "Décrivez votre projet acier, nous revenons vers vous sous 48 heures."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "SAM MECA",
				description: "Atelier de construction métallique, chaudronnerie, charpente métallique, confection de citernes et de remorques.",
				telephone: SITE.phone,
				email: SITE.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: "Barraket Sahel, Route Sidi Hamed",
					postalCode: "8050",
					addressLocality: "Hammamet",
					addressCountry: "TN"
				},
				openingHours: "Mo-Sa 08:00-18:00"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./maintenance-industrielle-DSLntdfy.mjs");
var Route$2 = createFileRoute("/maintenance-industrielle")({
	head: () => ({
		meta: [
			{ title: "Maintenance industrielle — SAM MECA" },
			{
				name: "description",
				content: "Maintenance industrielle : diagnostic des équipements, maintenance préventive et corrective, réparation, montage et démontage, intervention sur site."
			},
			{
				name: "keywords",
				content: "maintenance industrielle, diagnostic équipements, maintenance préventive, maintenance corrective, intervention sur site"
			},
			{
				property: "og:title",
				content: "Maintenance industrielle — SAM MECA"
			},
			{
				property: "og:description",
				content: "Diagnostic, maintenance préventive et corrective, réparation et intervention sur site pour réduire vos arrêts de production."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/maintenance-industrielle"
			}
		],
		links: [{
			rel: "canonical",
			href: "/maintenance-industrielle"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				serviceType: "Maintenance industrielle",
				provider: {
					"@type": "Organization",
					name: "SAM MECA"
				},
				areaServed: "Tunisie",
				description: "Diagnostic des équipements, maintenance préventive et corrective, réparation, montage et démontage, intervention sur site pour réduire les arrêts de production."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./remorques-B5rHPb6z.mjs");
var Route$1 = createFileRoute("/remorques")({
	head: () => ({
		meta: [
			{ title: "Fabrication de remorques et bennes sur mesure — SAM MECA" },
			{
				name: "description",
				content: "Fabrication de remorques sur mesure : plateaux, bennes basculantes, porte-engins et remorques citerne. Châssis renforcé, freinage et signalisation conformes."
			},
			{
				name: "keywords",
				content: "remorque, fabrication remorque, benne basculante, porte-engins, châssis remorque"
			},
			{
				property: "og:title",
				content: "Fabrication de remorques — SAM MECA"
			},
			{
				property: "og:description",
				content: "Plateaux, bennes, porte-engins : châssis robustes fabriqués en atelier."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/remorques"
			}
		],
		links: [{
			rel: "canonical",
			href: "/remorques"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				serviceType: "Fabrication de remorques",
				provider: {
					"@type": "Organization",
					name: "SAM MECA"
				},
				areaServed: "Tunisie",
				description: "Remorques sur mesure : plateaux, bennes basculantes, porte-engins et remorques spéciales."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./usinage-fabrication-mecanique-C7tjvstt.mjs");
var Route = createFileRoute("/usinage-fabrication-mecanique")({
	head: () => ({
		meta: [
			{ title: "Usinage & fabrication mécanique sur mesure — SAM MECA" },
			{
				name: "description",
				content: "Usinage et fabrication de pièces mécaniques sur mesure, selon plans et spécifications : précision, qualité, réparation et modification de pièces."
			},
			{
				name: "keywords",
				content: "usinage, fabrication mécanique, pièces mécaniques, usinage sur mesure, réparation pièces industrielles"
			},
			{
				property: "og:title",
				content: "Usinage & fabrication mécanique — SAM MECA"
			},
			{
				property: "og:description",
				content: "Usinage de pièces mécaniques sur mesure, selon plans, avec réparation et modification si besoin."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/usinage-fabrication-mecanique"
			}
		],
		links: [{
			rel: "canonical",
			href: "/usinage-fabrication-mecanique"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				serviceType: "Usinage et fabrication mécanique",
				provider: {
					"@type": "Organization",
					name: "SAM MECA"
				},
				areaServed: "Tunisie",
				description: "Usinage de pièces mécaniques sur mesure, selon plans et spécifications, avec réparation et modification de pièces si applicable."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$10.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AProposRoute: Route$9.update({
		id: "/a-propos",
		path: "/a-propos",
		getParentRoute: () => Route$11
	}),
	AtelierRoute: Route$8.update({
		id: "/atelier",
		path: "/atelier",
		getParentRoute: () => Route$11
	}),
	CharpenteMetalliqueRoute: Route$7.update({
		id: "/charpente-metallique",
		path: "/charpente-metallique",
		getParentRoute: () => Route$11
	}),
	ChaudronnerieRoute: Route$6.update({
		id: "/chaudronnerie",
		path: "/chaudronnerie",
		getParentRoute: () => Route$11
	}),
	CiternesRoute: Route$5.update({
		id: "/citernes",
		path: "/citernes",
		getParentRoute: () => Route$11
	}),
	ConstructionMetalliqueRoute: Route$4.update({
		id: "/construction-metallique",
		path: "/construction-metallique",
		getParentRoute: () => Route$11
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$11
	}),
	MaintenanceIndustrielleRoute: Route$2.update({
		id: "/maintenance-industrielle",
		path: "/maintenance-industrielle",
		getParentRoute: () => Route$11
	}),
	RemorquesRoute: Route$1.update({
		id: "/remorques",
		path: "/remorques",
		getParentRoute: () => Route$11
	}),
	UsinageFabricationMecaniqueRoute: Route.update({
		id: "/usinage-fabrication-mecanique",
		path: "/usinage-fabrication-mecanique",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
