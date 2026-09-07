import { createFileRoute } from "@tanstack/react-router";
import { Cog, Users, Headphones, ShieldCheck, Factory, Flame, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";

import img from "@/assets/chaudronnerie.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos de SAM MECA — métallier à Hammamet" },
      {
        name: "description",
        content:
          "SAM MECA : entreprise spécialisée en construction métallique, chaudronnerie industrielle, fabrication de pièces mécaniques et maintenance industrielle, à Barraket Sahel, Hammamet.",
      },
      {
        name: "keywords",
        content:
          "SAM MECA, métallier Hammamet, construction métallique, chaudronnerie, fabrication mécanique, maintenance industrielle",
      },
      { property: "og:title", content: "À propos de SAM MECA" },
      {
        property: "og:description",
        content:
          "Une équipe qualifiée et un atelier équipé au service de vos projets industriels.",
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

const domaines = [
  { icon: Factory, t: "Construction métallique", d: "Charpentes, structures, passerelles, escaliers et châssis industriels." },
  { icon: Flame, t: "Chaudronnerie", d: "Trémies, cuves, réservoirs, vis d'Archimède et équipements sur mesure." },
  { icon: Cog, t: "Fabrication de pièces mécaniques", d: "Usinage de précision selon plans, réparation et modification de pièces." },
  { icon: Wrench, t: "Maintenance industrielle", d: "Diagnostic, maintenance préventive et corrective, intervention sur site." },
];

const engagements = [
  {
    icon: Users,
    t: "Notre équipe",
    d: "Des compétences techniques diversifiées et un savoir-faire spécialisé. Nous favorisons la collaboration, le développement des compétences et l'amélioration continue. La sécurité reste une priorité, à travers la prévention, la sensibilisation et le respect des procédures.",
  },
  {
    icon: Headphones,
    t: "Notre service client",
    d: "Nos clients au cœur de nos priorités, avec un accompagnement personnalisé et une écoute attentive à chaque étape. Notre réactivité et notre proximité nous permettent de proposer des solutions adaptées, en garantissant satisfaction et qualité.",
  },
];

function Page() {
  return (
    <div>
      <section className="surface-steel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">L'entreprise</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">À propos de SAM MECA</h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Une entreprise spécialisée dans la construction métallique, la chaudronnerie
            industrielle et la fabrication mécanique sur mesure, au service des projets
            industriels de toute envergure.
          </p>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">Qui sommes-nous</h2>
          <div className="rule-signal" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            SAM MECA est une entreprise spécialisée dans la construction métallique, la
            chaudronnerie industrielle et la fabrication mécanique sur mesure. Grâce à une
            équipe qualifiée et compétente, nous sommes capables de réaliser des projets
            industriels de différentes envergures, de la fabrication de pièces mécaniques aux
            ensembles et équipements métalliques complexes, tout en garantissant qualité,
            précision et fiabilité.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Notre objectif est de proposer des solutions fiables, adaptées et de qualité, en
            répondant aux exigences de chaque projet.
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

      {/* Nos domaines d'intervention */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <h2 className="text-2xl font-bold text-primary">Nos domaines d'intervention</h2>
        <div className="rule-signal" />
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Notre expertise s'articule autour de quatre domaines clés, nous permettant de
          répondre aux différents besoins de nos clients industriels.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {domaines.map((v) => (
            <article key={v.t} className="card-industrial p-6">
              <v.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-primary">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Équipe & service client */}
      <section className="surface-steel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold text-white">Nos engagements</h2>
          <div className="rule-signal" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {engagements.map((e) => (
              <article key={e.t} className="border border-white/10 bg-white/5 p-8">
                <e.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-lg font-bold text-white">{e.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{e.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

            {/* Renvoi vers la page atelier */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="card-industrial flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-primary">Découvrez notre parc machines</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Usinage et chaudronnerie : consultez le détail de nos équipements et de nos
              moyens de production.
            </p>
          </div>
          <Link
            to="/atelier"
            className="inline-flex shrink-0 items-center gap-2 bg-accent px-6 py-3 text-xs font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90"
          >
            Voir notre atelier
          </Link>
        </div>
      </section>
    </div>
  );
}