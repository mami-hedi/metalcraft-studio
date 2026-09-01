import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/chaudronnerie.jpg";

export const Route = createFileRoute("/chaudronnerie")({
  head: () => ({
    meta: [
      { title: "Chaudronnerie industrielle acier & inox — SAM MECA" },
      {
        name: "description",
        content:
          "Chaudronnerie sur mesure : roulage, pliage, découpe plasma et soudure TIG/MIG sur acier, inox et aluminium.",
      },
      { property: "og:title", content: "Chaudronnerie industrielle — SAM MECA" },
      {
        property: "og:description",
        content: "Viroles, trémies, tuyauteries et pièces sur plan en acier, inox et aluminium.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServiceLayout
      eyebrow="Métier"
      title="Chaudronnerie"
      intro="Notre atelier transforme la tôle en pièces techniques : viroles, trémies, cyclones, tuyauteries et capotages, en acier noir, inox ou aluminium."
      image={img}
      imageAlt="Chaudronnier au travail sur une pièce en acier"
      points={[
        "Découpe plasma et oxycoupage, cisaillage",
        "Roulage de viroles et pliage jusqu'aux fortes épaisseurs",
        "Soudure TIG, MIG et à l'arc par soudeurs qualifiés",
        "Fabrication à l'unité ou en petite série sur plan",
        "Réparation et maintenance d'équipements existants",
      ]}
      sections={[
        {
          title: "Tuyauteries & viroles",
          body: "Conduits, coudes, réductions et brides pour circuits industriels.",
        },
        {
          title: "Trémies & goulottes",
          body: "Pièces de manutention pour agroalimentaire, carrières et cimenteries.",
        },
        {
          title: "Pièces sur plan",
          body: "Prototypage et reproduction de pièces à partir de vos plans ou d'un modèle.",
        },
      ]}
    />
  );
}
