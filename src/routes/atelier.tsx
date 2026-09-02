import { createFileRoute } from "@tanstack/react-router";
import { Flame, Ruler, Scissors, PaintBucket, Cog, Truck } from "lucide-react";
import img from "@/assets/chaudronnerie.jpg";
import img2 from "@/assets/hero-atelier.jpg";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "Notre atelier de métallerie à Hammamet — SAM MECA" },
      {
        name: "description",
        content:
          "Atelier SAM MECA à Barraket Sahel, Hammamet : parc machines de découpe, roulage, pliage et soudure pour la construction métallique et la chaudronnerie.",
      },
      {
        name: "keywords",
        content: "atelier métallerie Hammamet, construction métallique, chaudronnerie, soudure, découpe plasma",
      },
      { property: "og:title", content: "Notre atelier de métallerie — SAM MECA" },
      {
        property: "og:description",
        content: "Parc machines complet et équipes qualifiées pour vos ouvrages en acier.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/atelier" },
    ],
    links: [{ rel: "canonical", href: "/atelier" }],
  }),
  component: Page,
});

const equipements = [
  { icon: Scissors, t: "Découpe & débit", d: "Découpe plasma, oxycoupage, cisaillage et tronçonnage de profilés." },
  { icon: Cog, t: "Roulage & pliage", d: "Rouleuse et presse plieuse pour viroles, tôles et pièces de chaudronnerie." },
  { icon: Flame, t: "Soudure", d: "Postes TIG, MIG et à l'arc pour acier, inox et aluminium." },
  { icon: Ruler, t: "Traçage & montage", d: "Marbres de montage et contrôle dimensionnel des ensembles soudés." },
  { icon: PaintBucket, t: "Traitement de surface", d: "Sablage, primaire antirouille et peinture de finition." },
  { icon: Truck, t: "Levage & livraison", d: "Manutention, chargement et pose sur chantier par nos équipes." },
];

function Page() {
  return (
    <div>
      <section className="surface-steel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">L'atelier</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Notre atelier de métallerie à Hammamet
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Implanté à Barraket Sahel, route Sidi Hamed (8050 Hammamet), notre atelier réunit tous
            les moyens nécessaires pour fabriquer vos ouvrages en acier sans sous-traitance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold text-primary">Nos moyens de production</h2>
        <div className="rule-signal" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipements.map((e) => (
            <article key={e.t} className="card-industrial p-6">
              <e.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-primary">{e.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 md:grid-cols-2">
        <img
          src={img2}
          alt="Structure métallique fabriquée par SAM MECA"
          loading="lazy"
          width={1600}
          height={900}
          className="h-72 w-full object-cover"
        />
        <img
          src={img}
          alt="Poste de soudure dans l'atelier SAM MECA"
          loading="lazy"
          width={1200}
          height={800}
          className="h-72 w-full object-cover"
        />
      </section>
    </div>
  );
}
