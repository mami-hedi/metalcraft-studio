import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/hero-atelier.jpg";

export const Route = createFileRoute("/construction-metallique")({
  head: () => ({
    meta: [
      { title: "Construction métallique sur mesure — SAM MECA" },
      {
        name: "description",
        content:
          "Construction métallique : hangars, bâtiments industriels, mezzanines et passerelles en acier. Étude, fabrication et montage par l'atelier SAM MECA.",
      },
      { name: "keywords", content: "construction métallique, structure métallique, hangar métallique, mezzanine, atelier métallerie" },
      { property: "og:title", content: "Construction métallique sur mesure — SAM MECA" },
      {
        property: "og:description",
        content: "Structures acier clés en main : hangars, mezzanines, passerelles, escaliers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/construction-metallique" },
    ],
    links: [{ rel: "canonical", href: "/construction-metallique" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Construction métallique",
          provider: { "@type": "Organization", name: "SAM MECA" },
          areaServed: "Tunisie",
          description:
            "Fabrication et montage de bâtiments industriels, hangars, mezzanines et passerelles en acier.",
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
      title="Construction métallique"
      intro="Nous réalisons des ouvrages en acier clés en main : bâtiments industriels, hangars agricoles, mezzanines de stockage, passerelles et escaliers techniques."
      image={img}
      imageAlt="Bâtiment industriel en construction métallique"
      points={[
        "Notes de calcul et plans d'exécution avant fabrication",
        "Profilés IPE, HEA, HEB, tubes et tôles pliées",
        "Assemblages boulonnés ou soudés selon la portée",
        "Sablage et peinture anticorrosion en atelier",
        "Montage sur chantier avec nos équipes et engins de levage",
      ]}
      sections={[
        {
          title: "Bâtiments industriels",
          body: "Ateliers, entrepôts et halls de production avec bardage, couverture et chéneaux.",
        },
        {
          title: "Mezzanines & planchers",
          body: "Gain de surface immédiat, dimensionnement selon les charges d'exploitation.",
        },
        {
          title: "Ouvrages secondaires",
          body: "Escaliers, garde-corps, passerelles, supports de machines et auvents.",
        },
      ]}
    />
  );
}
