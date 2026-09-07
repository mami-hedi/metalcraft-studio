import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Factory,
  Flame,
  Cog,
  Wrench,
  Users,
  Headphones,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import hero from "@/assets/hero-atelier.jpg";
import chaudronnerie from "@/assets/chaudronnerie.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construction métallique & chaudronnerie à Hammamet — SAM MECA" },
      {
        name: "description",
        content:
          "SAM MECA, atelier à Hammamet : construction métallique, chaudronnerie industrielle, fabrication de pièces mécaniques et maintenance industrielle.",
      },
      {
        name: "keywords",
        content:
          "construction métallique, chaudronnerie, usinage, fabrication mécanique, maintenance industrielle, Hammamet, Tunisie",
      },
      { property: "og:title", content: "Construction métallique & chaudronnerie — SAM MECA" },
      {
        property: "og:description",
        content:
          "Chaudronnerie industrielle et fabrication mécanique sur mesure : de l'étude au montage.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SAM MECA",
          description:
            "Entreprise spécialisée dans la construction métallique, la chaudronnerie industrielle et la fabrication mécanique sur mesure.",
          telephone: "+216 94 358 115",
          email: "contact@sammeca.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Barraket Sahel, Route Sidi Hamed",
            postalCode: "8050",
            addressLocality: "Hammamet",
            addressCountry: "TN",
          },
          openingHours: "Mo-Sa 08:00-18:00",
          makesOffer: [
            "Construction métallique",
            "Chaudronnerie",
            "Fabrication de pièces mécaniques",
            "Maintenance industrielle",
          ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
        }),
      },
    ],
  }),
  component: Index,
});

const metiers = [
  {
    to: "/construction-metallique",
    label: "Construction métallique",
    icon: Factory,
    text: "Charpentes, structures, passerelles, escaliers et châssis industriels sur mesure.",
    img: hero,
  },
  {
    to: "/chaudronnerie",
    label: "Chaudronnerie",
    icon: Flame,
    text: "Trémies, goulottes, cuves, réservoirs, vis d'Archimède et équipements sur mesure.",
    img: chaudronnerie,
  },
  {
    to: "/usinage-fabrication-mecanique",
    label: "Fabrication de pièces mécaniques",
    icon: Cog,
    text: "Usinage de précision, fabrication sur mesure selon plans, réparation et modification.",
    img: hero,
  },
  {
    to: "/maintenance-industrielle",
    label: "Maintenance industrielle",
    icon: Wrench,
    text: "Diagnostic, maintenance préventive et corrective, intervention sur site.",
    img: chaudronnerie,
  },
] as const;

const engagements = [
  {
    icon: Users,
    title: "Notre équipe",
    text: "Une équipe qui réunit des compétences techniques diversifiées et un savoir-faire spécialisé, garantissant une réalisation efficace et de qualité. Nous favorisons la collaboration, le développement des compétences et l'amélioration continue afin de répondre aux exigences de nos clients. La sécurité reste une priorité dans toutes nos activités, à travers la prévention, la sensibilisation et le respect des procédures.",
  },
  {
    icon: Headphones,
    title: "Notre service client",
    text: "Nous plaçons nos clients au cœur de nos priorités, en leur offrant un accompagnement personnalisé et une écoute attentive à chaque étape de leurs projets. Notre réactivité et notre proximité nous permettent de proposer des solutions adaptées à leurs besoins, tout en garantissant leur satisfaction et la qualité de nos services.",
  },
] as const;

const equipements = [
  {
    cat: "Usinage",
    items: [
      "Fraiseuse aléseuse vernier",
      "Tour parallèle 3 m",
      "Tour parallèle 2 m",
      "Tour parallèle 1,5 m",
      "Mortaiseuse 300 mm",
      "Perceuse à colonne",
      "Presse 100 t",
      "Scie mécanique",
      "Fraiseuse classique",
    ],
  },
  {
    cat: "Chaudronnerie",
    items: ["Cisaille guillotine", "Plieuse hydraulique", "Rouleuse cintreuse"],
  },
] as const;

function Index() {
  return (
    <div>
      <section className="relative">
        <img
          src={hero}
          alt="Structure métallique en cours de montage dans l'atelier SAM MECA"
          width={1600}
          height={900}
          className="h-[68vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white">
              Atelier de métallerie industrielle
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              L'acier travaillé avec précision
            </h1>
            <p className="mt-5 max-w-xl text-white/80">
              Construction métallique, chaudronnerie industrielle, fabrication de pièces
              mécaniques et maintenance industrielle : SAM MECA maîtrise votre projet de l'étude
              au montage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90"
              >
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/construction-metallique"
                className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-white/10"
              >
                Nos prestations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Présentation</p>
        <h2 className="mt-2 text-3xl font-bold text-primary">Qui sommes-nous</h2>
        <div className="rule-signal" />
        <p className="mt-6 max-w-3xl text-muted-foreground">
          SAM MECA est une entreprise spécialisée dans la construction métallique, la
          chaudronnerie industrielle et la fabrication mécanique sur mesure. Grâce à une équipe
          qualifiée et compétente, nous sommes capables de réaliser des projets industriels de
          différentes envergures, de la fabrication de pièces mécaniques aux ensembles et
          équipements métalliques complexes, tout en garantissant qualité, précision et
          fiabilité.
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Notre objectif est de proposer des solutions fiables, adaptées et de qualité, en
          répondant aux exigences de chaque projet.
        </p>
      </section>

      {/* Nos domaines d'intervention */}
      <section className="surface-steel">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-bold text-white">Nos domaines d'intervention</h2>
          <div className="rule-signal" />
          <p className="mt-6 max-w-2xl text-white/70">
            Notre expertise s'articule autour de quatre domaines clés, nous permettant de
            répondre aux différents besoins de nos clients industriels.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metiers.map((m) => (
              <Link key={m.to} to={m.to} className="card-industrial group block overflow-hidden">
                <img
                  src={m.img}
                  alt={m.label}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <m.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 text-lg font-bold text-primary">{m.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase text-accent">
                    En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe & service client */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold text-primary">Nos engagements</h2>
        <div className="rule-signal" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {engagements.map((e) => (
            <article key={e.title} className="card-industrial p-8">
              <e.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-xl font-bold text-primary">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
            </article>
          ))}
        </div>
      </section>

      

      {/* Notre méthode */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold text-primary">Notre méthode</h2>
        <div className="rule-signal" />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { t: "Étude & plans", d: "Relevé sur site, notes de calcul et plans d'exécution." },
            { t: "Débit & façonnage", d: "Découpe, roulage, pliage et perçage." },
            { t: "Assemblage & soudure", d: "Soudeurs qualifiés, contrôle dimensionnel." },
            { t: "Traitement & montage", d: "Sablage, peinture époxy et pose sur chantier." },
          ].map((s, i) => (
            <article key={s.t} className="border-l-4 border-accent bg-card p-6">
              <span className="font-display text-3xl font-bold text-steel">0{i + 1}</span>
              <h3 className="mt-2 text-base font-bold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
          <Ruler className="h-4 w-4 text-accent" /> Tolérances et normes respectées sur chaque
          ouvrage.
          <span className="mx-2 text-border">•</span>
          <ShieldCheck className="h-4 w-4 text-accent" /> Sécurité et qualité à chaque étape.
        </div>
      </section>
    </div>
  );
}