import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as MapPin, h as Clock, l as Mail, o as Phone, u as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as SITE } from "./site-Zp2OqwdD.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BLD1tYG5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var services = [
	"Construction métallique",
	"Charpente métallique",
	"Chaudronnerie",
	"Confection de citernes",
	"Remorques",
	"Autre demande"
];
var EMAILJS_SERVICE_ID = "service_mwyo6ff";
var EMAILJS_TEMPLATE_ID = "template_1lfnyn8";
var EMAILJS_PUBLIC_KEY = "kTsT5hKqJimHbnxMG";
function Page() {
	const formRef = (0, import_react.useRef)(null);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formRef.current) return;
		setStatus("sending");
		try {
			await es_default.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY });
			setStatus("sent");
			formRef.current.reset();
		} catch (err) {
			console.error("EmailJS error:", err);
			setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "surface-steel",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-bold md:text-5xl",
					children: "Demander un devis"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-white/75",
					children: "Décrivez votre besoin, joignez vos plans si vous en avez : notre bureau d'études vous répond sous 48 heures ouvrées."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.3fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			ref: formRef,
			className: "space-y-5",
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wide text-primary",
								children: "Nom"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "nom",
								className: "mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wide text-primary",
								children: "Société"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "societe",
								className: "mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wide text-primary",
								children: "E-mail"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								name: "email",
								className: "mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wide text-primary",
								children: "Téléphone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "telephone",
								className: "mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wide text-primary",
						children: "Prestation concernée"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						name: "service",
						className: "mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wide text-primary",
						children: "Votre projet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						rows: 6,
						name: "message",
						className: "mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: status === "sending",
					className: "flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60",
					children: [status === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), status === "sending" ? "Envoi en cours..." : "Envoyer la demande"]
				}),
				status === "sent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border-l-4 border-accent bg-secondary p-4 text-sm text-primary",
					children: "Merci, votre demande a bien été prise en compte. Nous vous recontactons sous 48 h."
				}),
				status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-700",
					children: "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler directement."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit border border-border bg-card p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold text-primary",
					children: "Coordonnées"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-signal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Barraket Sahel, Route Sidi Hamed",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"8050 Hammamet, Tunisie"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.phoneHref,
								className: "hover:text-accent",
								children: SITE.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${SITE.email}`,
								className: "hover:text-accent",
								children: SITE.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 shrink-0 text-accent" }),
								" ",
								SITE.hours
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SITE.phoneHref,
					className: "mt-6 flex items-center justify-center gap-2 bg-accent px-5 py-3 text-xs font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Appeler l'atelier"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.8902806479387!2d10.524963999999999!3d36.41184979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd670074588e5b%3A0x27430eac0f9bb64c!2sSam%20meca!5e0!3m2!1sfr!2stn!4v1789122921279!5m2!1sfr!2stn",
						width: "100%",
						height: "300",
						style: { border: 0 },
						allowFullScreen: true,
						loading: "lazy",
						referrerPolicy: "strict-origin-when-cross-origin",
						title: "Localisation SAM MECA sur Google Maps"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://www.google.com/maps/place/Sam+meca/@36.4118498,10.524964,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd670074588e5b:0x27430eac0f9bb64c!8m2!3d36.4118498!4d10.524964!16s%2Fg%2F11zds3m75h",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-3 flex items-center justify-center gap-2 border border-accent px-5 py-2.5 text-xs font-bold uppercase text-accent transition-colors hover:bg-accent hover:text-accent-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Voir l'itinéraire"]
				})
			]
		})]
	})] });
}
//#endregion
export { Page as component };
