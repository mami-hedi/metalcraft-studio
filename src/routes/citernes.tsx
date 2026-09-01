import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/citerne.jpg";

export const Route = createFileRoute("/citernes")({
  head: () => ({
    meta: [
      { title: "Confection de citernes de stockage et de transport — SAM MECA" },
      {
        name: "description",
        content:
          "Confection de citernes sur mesure : eau, carburant, produits chimiques et agroalimentaires, en acier ou inox, aériennes, enterrées ou sur châssis.",
      },
      { name: "keywords", content: "citerne, confection citerne, citerne acier, citerne inox, cuve de stockage" },
      { property: "og:title", content: "Confection de citernes — SAM MECA" },
      {
        property: "og:description",
        content: "Citernes acier et inox, de 1 000 à 50 000 litres, testées avant livraison.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/citernes" },
    ],
    links: [{ rel: "canonical", href: "/citernes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Confection de citernes",
          provider: { "@type": "Organization", name: "SAM MECA" },
          areaServed: "Tunisie",
          description:
            "Fabrication de citernes de stockage et de transport en acier et inox, de 1 000 à 50 000 litres.",
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
      title="Confection de citernes"
      intro="Nous fabriquons des citernes de stockage et de transport, de 1 000 à 50 000 litres, en acier ou en inox, avec compartiments, brise-lames et accessoires selon le produit transporté."
      image={img}
      imageAlt="Citerne en acier inoxydable en cours de fabrication"
      points={[
        "Citernes eau potable, carburant, huile et produits chimiques",
        "Modèles aériens, enterrés ou montés sur châssis",
        "Cloisons brise-lames, trous d'homme, vannes et jauges",
        "Test d'étanchéité et mise en pression avant livraison",
        "Revêtement intérieur et peinture extérieure adaptés au produit",
      ]}
      sections={[
        {
          title: "Stockage fixe",
          body: "Cuves verticales ou horizontales sur berceaux, avec rétention si nécessaire.",
        },
        {
          title: "Transport",
          body: "Citernes montées sur camion ou remorque, compartimentées si besoin.",
        },
        {
          title: "Maintenance",
          body: "Nettoyage, reprise de soudure, remplacement d'accessoires et remise en service.",
        },
      ]}
    />
  );
}
