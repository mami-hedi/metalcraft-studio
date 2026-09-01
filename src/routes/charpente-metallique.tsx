import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/charpente.jpg";

export const Route = createFileRoute("/charpente-metallique")({
  head: () => ({
    meta: [
      { title: "Charpente métallique : fermes, portiques et pannes — SAM MECA" },
      {
        name: "description",
        content:
          "Charpente métallique sur mesure : fermes treillis, portiques, pannes et contreventements, calculés, fabriqués et montés par SAM MECA.",
      },
      { name: "keywords", content: "charpente métallique, charpente, ferme treillis, portique métallique, hangar" },
      { property: "og:title", content: "Charpente métallique — SAM MECA" },
      {
        property: "og:description",
        content: "Fermes treillis, portiques et pannes calculés et montés par nos équipes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/charpente-metallique" },
    ],
    links: [{ rel: "canonical", href: "/charpente-metallique" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Charpente métallique",
          provider: { "@type": "Organization", name: "SAM MECA" },
          areaServed: "Tunisie",
          description:
            "Étude, préfabrication et montage de charpentes métalliques : fermes, portiques, pannes et contreventements.",
        }),
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
