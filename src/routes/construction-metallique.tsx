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
          "Construction métallique : charpentes, structures et ossatures, passerelles, escaliers, châssis et supports industriels. Fabrication et montage sur site par SAM MECA.",
      },
      {
        name: "keywords",
        content:
          "construction métallique, charpente métallique, structure métallique, passerelle industrielle, châssis, atelier métallerie",
      },
      { property: "og:title", content: "Construction métallique sur mesure — SAM MECA" },
      {
        property: "og:description",
        content:
          "Structures acier sur mesure : charpentes, passerelles, escaliers, châssis, fabrication et montage.",
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
            "Fabrication et montage de charpentes, structures, passerelles, escaliers et châssis métalliques sur mesure selon plans.",
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServiceLayout
      eyebrow="Domaine d'intervention"
      title="Construction métallique"
      intro="Nous réalisons des ouvrages en acier sur mesure selon plans : charpentes, structures et ossatures métalliques, passerelles, plateformes, escaliers et châssis industriels — de la fabrication au montage sur site."
      image={img}
      imageAlt="Soudeur assemblant une structure métallique sur chantier"
      points={[
        "Charpentes métalliques",
        "Structures et ossatures métalliques",
        "Passerelles et plateformes",
        "Escaliers et garde-corps",
        "Châssis et supports industriels",
        "Fabrication et montage sur site",
        "Réalisation sur mesure selon plans",
      ]}
      sections={[
        {
          title: "Charpentes & structures",
          body: "Charpentes métalliques, structures et ossatures dimensionnées selon les charges et contraintes de chaque ouvrage.",
        },
        {
          title: "Passerelles & accès",
          body: "Passerelles, plateformes, escaliers et garde-corps pour un accès sûr aux zones techniques et de production.",
        },
        {
          title: "Châssis & fabrication sur site",
          body: "Châssis et supports industriels fabriqués sur mesure, avec montage directement sur le chantier du client.",
        },
      ]}
    />
  );
}