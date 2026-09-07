import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/site/ServiceLayout";
import img from "@/assets/chaudronnerie.jpg";

export const Route = createFileRoute("/maintenance-industrielle")({
  head: () => ({
    meta: [
      { title: "Maintenance industrielle — SAM MECA" },
      {
        name: "description",
        content:
          "Maintenance industrielle : diagnostic des équipements, maintenance préventive et corrective, réparation, montage et démontage, intervention sur site.",
      },
      {
        name: "keywords",
        content:
          "maintenance industrielle, diagnostic équipements, maintenance préventive, maintenance corrective, intervention sur site",
      },
      { property: "og:title", content: "Maintenance industrielle — SAM MECA" },
      {
        property: "og:description",
        content:
          "Diagnostic, maintenance préventive et corrective, réparation et intervention sur site pour réduire vos arrêts de production.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/maintenance-industrielle" },
    ],
    links: [{ rel: "canonical", href: "/maintenance-industrielle" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Maintenance industrielle",
          provider: { "@type": "Organization", name: "SAM MECA" },
          areaServed: "Tunisie",
          description:
            "Diagnostic des équipements, maintenance préventive et corrective, réparation, montage et démontage, intervention sur site pour réduire les arrêts de production.",
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
      title="Maintenance industrielle"
      intro="Nous assurons le diagnostic, la maintenance préventive et corrective de vos équipements industriels, avec intervention sur site pour réduire au maximum vos arrêts de production."
      image={img}
      imageAlt="Technicien effectuant une intervention de maintenance industrielle"
      points={[
        "Diagnostic des équipements",
        "Maintenance préventive et corrective",
        "Réparation",
        "Montage et démontage",
        "Intervention sur site",
        "Réduction des arrêts de production",
      ]}
      sections={[
        {
          title: "Diagnostic & prévention",
          body: "Analyse de l'état des équipements et plan de maintenance préventive pour anticiper les pannes.",
        },
        {
          title: "Réparation & remise en état",
          body: "Intervention corrective rapide en cas de panne, réparation des pièces et organes défectueux.",
        },
        {
          title: "Montage, démontage & intervention sur site",
          body: "Équipes mobiles pour le montage, démontage et la maintenance directement chez le client, afin de limiter les arrêts de production.",
        },
      ]}
    />
  );
}