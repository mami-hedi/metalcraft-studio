import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Flame, HardHat, Truck, Container, Ruler } from "lucide-react";
import hero from "@/assets/hero-atelier.jpg";
import charpente from "@/assets/charpente.jpg";
import chaudronnerie from "@/assets/chaudronnerie.jpg";
import citerne from "@/assets/citerne.jpg";
import remorque from "@/assets/remorque.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construction métallique & chaudronnerie à Hammamet — SAM MECA" },
      {
        name: "description",
        content:
          "SAM MECA, atelier à Hammamet : construction métallique, charpente métallique, chaudronnerie, confection de citernes et fabrication de remorques sur mesure.",
      },
      {
        name: "keywords",
        content:
          "construction métallique, chaudronnerie, charpente métallique, citerne, remorque, Hammamet, Tunisie",
      },
      { property: "og:title", content: "Construction métallique & chaudronnerie — SAM MECA" },
      {
        property: "og:description",
        content: "Charpente, chaudronnerie, citernes et remorques : de l'étude au montage.",
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
            "Atelier de construction métallique, charpente métallique, chaudronnerie, confection de citernes et de remorques.",
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
            "Charpente métallique",
            "Chaudronnerie",
            "Confection de citernes",
            "Fabrication de remorques",
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
    text: "Hangars, mezzanines, passerelles et structures industrielles clés en main.",
    img: hero,
  },
  {
    to: "/charpente-metallique",
    label: "Charpente métallique",
    icon: HardHat,
    text: "Fermes, portiques et pannes calculés selon les normes en vigueur.",
    img: charpente,
  },
  {
    to: "/chaudronnerie",
    label: "Chaudronnerie",
    icon: Flame,
    text: "Roulage, pliage, soudure TIG/MIG sur acier, inox et aluminium.",
    img: chaudronnerie,
  },
  {
    to: "/citernes",
    label: "Confection de citernes",
    icon: Container,
    text: "Citernes de stockage et de transport, aériennes ou enterrées.",
    img: citerne,
  },
  {
    to: "/remorques",
    label: "Remorques",
    icon: Truck,
    text: "Châssis, plateaux, bennes et remorques spéciales homologuées.",
    img: remorque,
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
              Construction métallique, chaudronnerie, charpente métallique, confection de citernes
              et de remorques : SAM MECA maîtrise votre projet de l'étude au montage.
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

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold text-primary">Nos métiers</h2>
        <div className="rule-signal" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {metiers.map((m) => (
            <Link key={m.to} to={m.to} className="card-industrial group block overflow-hidden">
              <img
                src={m.img}
                alt={m.label}
                loading="lazy"
                width={1200}
                height={800}
                className="h-44 w-full object-cover"
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
      </section>

      <section className="surface-steel">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["+20 ans", "d'expérience en métallerie"],
            ["2 500 m²", "d'atelier et de parc à tôles"],
            ["+400", "ouvrages livrés"],
            ["48 h", "pour recevoir votre devis"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-4xl font-bold text-accent">{k}</p>
              <p className="mt-2 text-sm text-white/70">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold text-primary">Notre méthode</h2>
        <div className="rule-signal" />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { t: "Étude & plans", d: "Relevé sur site, notes de calcul et plans d'exécution." },
            { t: "Débit & façonnage", d: "Découpe plasma, roulage, pliage et perçage." },
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
        </div>
      </section>
    </div>
  );
}
