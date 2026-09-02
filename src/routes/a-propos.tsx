import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Wrench, ShieldCheck } from "lucide-react";
import img from "@/assets/chaudronnerie.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos de SAM MECA — métallier à Hammamet" },
      {
        name: "description",
        content:
          "SAM MECA : plus de 20 ans d'expérience en construction métallique, charpente, chaudronnerie, citernes et remorques, à Barraket Sahel, Hammamet.",
      },
      {
        name: "keywords",
        content: "SAM MECA, métallier Hammamet, construction métallique, chaudronnerie, charpente",
      },
      { property: "og:title", content: "À propos de SAM MECA" },
      {
        property: "og:description",
        content: "Une équipe qualifiée et un parc machines complet au service de vos projets acier.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SAM MECA",
          telephone: "+216 94 358 115",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Barraket Sahel, Route Sidi Hamed",
            postalCode: "8050",
            addressLocality: "Hammamet",
            addressCountry: "TN",
          },
        }),
      },
    ],
  }),
  component: Page,
});


const valeurs = [
  { icon: Wrench, t: "Parc machines complet", d: "Découpe plasma, rouleuse, plieuse, perceuse à colonne et postes de soudure." },
  { icon: Users, t: "Équipe qualifiée", d: "Dessinateurs, chaudronniers, soudeurs et monteurs formés en continu." },
  { icon: ShieldCheck, t: "Sécurité & conformité", d: "Procédures de travail sécurisées et respect des normes en atelier comme sur chantier." },
  { icon: Award, t: "Qualité contrôlée", d: "Contrôle dimensionnel, essais d'étanchéité et réception avec le client." },
];

function Page() {
  return (
    <div>
      <section className="surface-steel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">L'entreprise</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">À propos de SAM MECA</h1>

          <p className="mt-5 max-w-2xl text-white/75">
            Depuis plus de vingt ans, nous travaillons l'acier pour l'industrie, l'agriculture et le
            bâtiment. Un seul interlocuteur, de l'étude au montage.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">Un atelier, cinq spécialités</h2>
          <div className="rule-signal" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            SAM MECA regroupe sous un même toit la construction métallique, la charpente, la
            chaudronnerie, la confection de citernes et la fabrication de remorques. Cette
            polyvalence nous permet de traiter des projets complets sans sous-traitance :
            l'étude, le débit, le façonnage, la soudure, le traitement de surface et le montage
            sont réalisés par nos propres équipes.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Chaque ouvrage part d'un plan validé avec le client et se termine par une réception
            sur site. C'est cette rigueur qui fait revenir nos clients industriels, projet après
            projet.
          </p>
        </div>
        <img
          src={img}
          alt="Intérieur de l'atelier SAM MECA"
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valeurs.map((v) => (
            <article key={v.t} className="card-industrial p-6">
              <v.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-primary">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
