import { t as chaudronnerie_default } from "./chaudronnerie-LxDWvHDp.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ServiceLayout } from "./ServiceLayout-BVsZT3Ht.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chaudronnerie-ChJXvOrU.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceLayout, {
		eyebrow: "Métier",
		title: "Chaudronnerie",
		intro: "Notre atelier transforme la tôle en pièces techniques : viroles, trémies, cyclones, tuyauteries et capotages, en acier noir, inox ou aluminium.",
		image: chaudronnerie_default,
		imageAlt: "Chaudronnier au travail sur une pièce en acier",
		points: [
			"Découpe plasma et oxycoupage, cisaillage",
			"Roulage de viroles et pliage jusqu'aux fortes épaisseurs",
			"Soudure TIG, MIG et à l'arc par soudeurs qualifiés",
			"Fabrication à l'unité ou en petite série sur plan",
			"Réparation et maintenance d'équipements existants"
		],
		sections: [
			{
				title: "Tuyauteries & viroles",
				body: "Conduits, coudes, réductions et brides pour circuits industriels."
			},
			{
				title: "Trémies & goulottes",
				body: "Pièces de manutention pour agroalimentaire, carrières et cimenteries."
			},
			{
				title: "Pièces sur plan",
				body: "Prototypage et reproduction de pièces à partir de vos plans ou d'un modèle."
			}
		]
	});
}
//#endregion
export { Page as component };
