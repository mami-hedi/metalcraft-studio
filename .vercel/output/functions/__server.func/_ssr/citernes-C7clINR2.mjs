import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ServiceLayout } from "./ServiceLayout-BVsZT3Ht.mjs";
import { t as citerne_default } from "./citerne-Bu8Krp2c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/citernes-C7clINR2.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceLayout, {
		eyebrow: "Métier",
		title: "Confection de citernes",
		intro: "Nous fabriquons des citernes de stockage et de transport, de 1 000 à 50 000 litres, en acier ou en inox, avec compartiments, brise-lames et accessoires selon le produit transporté.",
		image: citerne_default,
		imageAlt: "Citerne en acier inoxydable en cours de fabrication",
		points: [
			"Citernes eau potable, carburant, huile et produits chimiques",
			"Modèles aériens, enterrés ou montés sur châssis",
			"Cloisons brise-lames, trous d'homme, vannes et jauges",
			"Test d'étanchéité et mise en pression avant livraison",
			"Revêtement intérieur et peinture extérieure adaptés au produit"
		],
		sections: [
			{
				title: "Stockage fixe",
				body: "Cuves verticales ou horizontales sur berceaux, avec rétention si nécessaire."
			},
			{
				title: "Transport",
				body: "Citernes montées sur camion ou remorque, compartimentées si besoin."
			},
			{
				title: "Maintenance",
				body: "Nettoyage, reprise de soudure, remplacement d'accessoires et remise en service."
			}
		]
	});
}
//#endregion
export { Page as component };
