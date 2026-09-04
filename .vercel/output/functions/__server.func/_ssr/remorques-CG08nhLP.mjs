import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ServiceLayout } from "./ServiceLayout-BVsZT3Ht.mjs";
import { t as remorque_default } from "./remorque-CsHJ0i0A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/remorques-CG08nhLP.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceLayout, {
		eyebrow: "Métier",
		title: "Remorques",
		intro: "Châssis, plateaux, bennes et remorques spéciales : nous fabriquons des remorques robustes adaptées à votre charge utile et à votre activité.",
		image: remorque_default,
		imageAlt: "Châssis de remorque en fabrication dans l'atelier",
		points: [
			"Châssis en profilés renforcés, calculé selon la charge utile",
			"Plateaux, ridelles, bennes basculantes et porte-engins",
			"Essieux, suspensions et freinage montés et réglés",
			"Éclairage et signalisation conformes à la réglementation",
			"Sablage et peinture deux couches pour tenir dans le temps"
		],
		sections: [
			{
				title: "Remorques plateau",
				body: "Transport de matériaux, palettes et engins légers, avec ridelles amovibles."
			},
			{
				title: "Bennes basculantes",
				body: "Vérin hydraulique, bâchage et hayon renforcé pour les chantiers."
			},
			{
				title: "Remorques spéciales",
				body: "Porte-citerne, porte-engins et modèles conçus autour de votre besoin."
			}
		]
	});
}
//#endregion
export { Page as component };
