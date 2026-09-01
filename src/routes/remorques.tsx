import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/remorque.jpg";

export const Route = createFileRoute("/remorques")({
  head: () => ({
    meta: [
      { title: "Fabrication de remorques et semi-remorques — SAM MECA" },
      {
        name: "description",
        content:
          "Remorques sur mesure : plateaux, bennes, porte-engins et remorques citerne. Châssis renforcé, freinage et signalisation conformes.",
      },
      { property: "og:title", content: "Fabrication de remorques — SAM MECA" },
      {
        property: "og:description",
        content: "Plateaux, bennes, porte-engins : châssis robustes fabriqués en atelier.",
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
