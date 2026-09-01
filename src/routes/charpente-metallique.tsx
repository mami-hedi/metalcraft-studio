import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/charpente.jpg";

export const Route = createFileRoute("/charpente-metallique")({
  head: () => ({
    meta: [
      { title: "Charpente métallique — fermes et portiques | SAM MECA" },
      {
        name: "description",
        content:
          "Conception et fabrication de charpentes métalliques : fermes treillis, portiques, pannes et contreventements, montés sur chantier.",
      },
      { property: "og:title", content: "Charpente métallique — SAM MECA" },
      {
        property: "og:description",
        content: "Fermes treillis, portiques et pannes calculés et montés par nos équipes.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServiceLayout
      eyebrow="Métier"
      title="Charpente métallique"
      intro="De la ferme treillis au portique de grande portée, nous calculons, fabriquons et montons des charpentes durables adaptées aux charges de neige, de vent et de manutention."
      image={img}
      imageAlt="Charpente métallique de hangar montée sur site"
      points={[
        "Portiques et fermes treillis jusqu'aux grandes portées",
        "Pannes, lisses et contreventements complets",
        "Platines d'ancrage et tiges scellées calculées",
        "Compatibilité avec ponts roulants et charges suspendues",
        "Bardage et couverture en option",
      ]}
      sections={[
        {
          title: "Étude structurelle",
          body: "Descente de charges, choix des profilés et plans d'assemblage détaillés.",
        },
        {
          title: "Préfabrication",
          body: "Tronçons assemblés en atelier pour réduire le temps d'immobilisation du chantier.",
        },
        {
          title: "Levage & montage",
          body: "Équipes de monteurs, boulonnerie HR et réglage à l'aplomb.",
        },
      ]}
    />
  );
}
