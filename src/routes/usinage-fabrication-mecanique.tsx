import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/usinage-fabrication-mecanique-hero.jpg";
import galleryImg from "@/assets/usinage-fabrication-mecanique1.jpeg";
import galleryImg2 from "@/assets/usinage-fabrication-mecanique2.jpg";
import galleryImg3 from "@/assets/usinage-fabrication-mecanique3.jpg";

export const Route = createFileRoute("/usinage-fabrication-mecanique")({
  head: () => ({
    meta: [
      { title: "Usinage & fabrication mécanique sur mesure — SAM MECA" },
      {
        name: "description",
        content:
          "Usinage et fabrication de pièces mécaniques sur mesure, selon plans et spécifications : précision, qualité, réparation et modification de pièces.",
      },
      {
        name: "keywords",
        content:
          "usinage, fabrication mécanique, pièces mécaniques, usinage sur mesure, réparation pièces industrielles",
      },
      { property: "og:title", content: "Usinage & fabrication mécanique — SAM MECA" },
      {
        property: "og:description",
        content:
          "Usinage de pièces mécaniques sur mesure, selon plans, avec réparation et modification si besoin.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/usinage-fabrication-mecanique" },
    ],
    links: [{ rel: "canonical", href: "/usinage-fabrication-mecanique" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Usinage et fabrication mécanique",
          provider: { "@type": "Organization", name: "SAM MECA" },
          areaServed: "Tunisie",
          description:
            "Usinage de pièces mécaniques sur mesure, selon plans et spécifications, avec réparation et modification de pièces si applicable.",
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
      title="Fabrication de pièces mécaniques"
      intro="Notre atelier d'usinage fabrique des pièces mécaniques sur mesure, à partir de vos plans et spécifications, avec un haut niveau de précision et de qualité. Nous intervenons aussi pour la réparation ou la modification de pièces existantes."
      image={img}
      imageAlt="Usinage de pièce mécanique en atelier"
      points={[
        "Usinage de pièces mécaniques",
        "Fabrication sur mesure",
        "Travail selon plans et spécifications",
        "Précision et qualité",
        "Réparation ou modification de pièces, si applicable",
      ]}
      sections={[
        {
          title: "Usinage sur mesure",
          body: "Fabrication de pièces mécaniques unitaires ou en petite série, réalisées selon plans et spécifications techniques.",
        },
        {
          title: "Précision & qualité",
          body: "Un savoir-faire technique garantissant des tolérances précises et une fabrication fiable, adaptée aux exigences industrielles.",
        },
        {
          title: "Réparation & modification",
          body: "Reprise, réparation ou modification de pièces existantes pour prolonger la durée de vie de vos équipements.",
        },
      ]}
      
      gallery={[galleryImg, galleryImg2, galleryImg3, ]}
    />
  );
}