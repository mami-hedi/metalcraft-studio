import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Flame, ShieldCheck } from "lucide-react";
import img from "@/assets/chaudronnerie.jpg";
import img2 from "@/assets/hero-atelier.jpg";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "Notre atelier & parc machines à Hammamet — SAM MECA" },
      {
        name: "description",
        content:
          "Atelier SAM MECA à Barraket Sahel, Hammamet : parc machines d'usinage (tours, fraiseuses, presse) et de chaudronnerie (cisaille, plieuse, rouleuse).",
      },
      {
        name: "keywords",
        content:
          "atelier métallerie Hammamet, parc machines, tour parallèle, fraiseuse, cisaille guillotine, plieuse hydraulique, rouleuse",
      },
      { property: "og:title", content: "Notre atelier & parc machines — SAM MECA" },
      {
        property: "og:description",
        content: "Un parc machines complet pour l'usinage et la chaudronnerie, sans sous-traitance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/atelier" },
    ],
    links: [{ rel: "canonical", href: "/atelier" }],
  }),
  component: Page,
});

const usinage = [
  "Fraiseuse aléseuse vernier",
  "Tour parallèle 3 m",
  "Tour parallèle 2 m",
  "Tour parallèle 1,5 m",
  "Mortaiseuse 300 mm",
  "Perceuse à colonne",
  "Presse 100 t",
  "Scie mécanique",
  "Fraiseuse classique",
];

const chaudronnerie = ["Cisaille guillotine", "Plieuse hydraulique", "Rouleuse cintreuse"];

function Page() {
  return (
    <div>
      <section className="surface-steel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">L'atelier</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Notre atelier & parc machines à Hammamet
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Implanté à Barraket Sahel, route Sidi Hamed, notre atelier réunit les machines
            d'usinage et de chaudronnerie nécessaires pour fabriquer vos ouvrages sans
            sous-traitance, de la découpe au façonnage précis des pièces.
          </p>
        </div>
      </section>

      {/* Usinage */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-baseline gap-3">
          <Wrench className="h-5 w-5 text-accent" />
          <h2 className="text-2xl font-bold text-primary">Usinage</h2>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase text-muted-foreground">
            9 machines
          </span>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Fraisage, tournage, alésage et perçage pour la fabrication et la réparation de pièces
          mécaniques selon plans.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {usinage.map((it) => (
            <div
              key={it}
              className="border border-border bg-card px-4 py-5 text-center shadow-sm transition-colors hover:border-accent hover:bg-secondary"
            >
              <p className="text-sm font-semibold leading-snug text-primary">{it}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chaudronnerie */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex items-baseline gap-3">
          <Flame className="h-5 w-5 text-accent" />
          <h2 className="text-2xl font-bold text-primary">Chaudronnerie</h2>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase text-muted-foreground">
            3 machines
          </span>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Découpe, pliage et roulage de tôle pour la fabrication de trémies, cuves, réservoirs et
          équipements sur mesure.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {chaudronnerie.map((it) => (
            <div
              key={it}
              className="border border-border bg-card px-4 py-5 text-center shadow-sm transition-colors hover:border-accent hover:bg-secondary"
            >
              <p className="text-sm font-semibold leading-snug text-primary">{it}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 border-l-2 border-accent bg-secondary px-4 py-3 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
          Sécurité et qualité respectées à chaque étape de fabrication.
        </div>
      </section>

      {/* Galerie */}
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
          alt="Pièces de chaudronnerie fabriquées à l'atelier SAM MECA"
          loading="lazy"
          width={1200}
          height={800}
          className="h-72 w-full object-cover"
        />
      </section>
    </div>
  );
}