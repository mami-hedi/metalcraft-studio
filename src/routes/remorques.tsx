import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/remorque.jpg";

export const Route = createFileRoute("/remorques")({
  head: () => ({
    meta: [
      { title: "Fabrication de remorques et bennes sur mesure — SAM MECA" },
      {
        name: "description",
        content:
          "Fabrication de remorques sur mesure : plateaux, bennes basculantes, porte-engins et remorques citerne. Châssis renforcé, freinage et signalisation conformes.",
      },
      { name: "keywords", content: "remorque, fabrication remorque, benne basculante, porte-engins, châssis remorque" },
      { property: "og:title", content: "Fabrication de remorques — SAM MECA" },
      {
        property: "og:description",
        content: "Plateaux, bennes, porte-engins : châssis robustes fabriqués en atelier.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/remorques" },
    ],
    links: [{ rel: "canonical", href: "/remorques" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Fabrication de remorques",
          provider: { "@type": "Organization", name: "SAM MECA" },
          areaServed: "Tunisie",
          description:
            "Remorques sur mesure : plateaux, bennes basculantes, porte-engins et remorques spéciales.",
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
      title="Remorques"
      intro="Châssis, plateaux, bennes et remorques spéciales : nous fabriquons des remorques robustes adaptées à votre charge utile et à votre activité."
      image={img}
      imageAlt="Châssis de remorque en fabrication dans l'atelier"
      points={[
        "Châssis en profilés renforcés, calculé selon la charge utile",
        "Plateaux, ridelles, bennes basculantes et porte-engins",
        "Essieux, suspensions et freinage montés et réglés",
        "Éclairage et signalisation conformes à la réglementation",
        "Sablage et peinture deux couches pour tenir dans le temps",
      ]}
      sections={[
        {
          title: "Remorques plateau",
          body: "Transport de matériaux, palettes et engins légers, avec ridelles amovibles.",
        },
        {
          title: "Bennes basculantes",
          body: "Vérin hydraulique, bâchage et hayon renforcé pour les chantiers.",
        },
        {
          title: "Remorques spéciales",
          body: "Porte-citerne, porte-engins et modèles conçus autour de votre besoin.",
        },
      ]}
    />
  );
}
