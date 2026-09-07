import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/chaudronnerie1.png";


export const Route = createFileRoute("/chaudronnerie")({
  head: () => ({
    meta: [
      { title: "Chaudronnerie industrielle sur mesure — SAM MECA" },
      {
        name: "description",
        content:
          "Chaudronnerie industrielle sur mesure : trémies, godets, goulottes, cuves et réservoirs industriels, vis d'Archimède, turbines et équipements sur mesure.",
      },
      {
        name: "keywords",
        content:
          "chaudronnerie, chaudronnerie industrielle, trémie, goulotte, cuve industrielle, réservoir, vis d'Archimède, turbine",
      },
      { property: "og:title", content: "Chaudronnerie industrielle — SAM MECA" },
      {
        property: "og:description",
        content:
          "Trémies, goulottes, cuves, réservoirs, vis d'Archimède et équipements industriels sur mesure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/chaudronnerie" },
    ],
    links: [{ rel: "canonical", href: "/chaudronnerie" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Chaudronnerie",
          provider: { "@type": "Organization", name: "SAM MECA" },
          areaServed: "Tunisie",
          description:
            "Chaudronnerie industrielle sur mesure : trémies, godets, goulottes, cuves, réservoirs, vis d'Archimède, turbines et équipements industriels.",
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
      title="Chaudronnerie"
      intro="Notre atelier de chaudronnerie fabrique des équipements industriels sur mesure : trémies, godets, goulottes, cuves et réservoirs, vis d'Archimède et turbines, adaptés aux besoins spécifiques de chaque client."
      image={img}
      imageAlt="Pièces de chaudronnerie industrielle fabriquées en atelier"
      points={[
        "Trémies, godets et goulottes",
        "Cuves et réservoirs industriels",
        "Vis d'Archimède, turbines et équipements sur mesure",
        "Fabrication en acier, inox et aluminium",
        "Réalisation à l'unité ou en petite série selon plans",
      ]}
      sections={[
        {
          title: "Trémies, godets & goulottes",
          body: "Équipements de manutention et de transfert de matière pour l'industrie et l'agroalimentaire.",
        },
        {
          title: "Cuves & réservoirs industriels",
          body: "Fabrication de cuves et réservoirs de stockage adaptés aux exigences de chaque process.",
        },
        {
          title: "Vis d'Archimède & turbines",
          body: "Équipements mécaniques sur mesure : vis de convoyage, turbines et pièces techniques spécifiques.",
        },
      ]}
      gallery={Array(3).fill(img)}
      //gallery={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]}//
    />
  );
}