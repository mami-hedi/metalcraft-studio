import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis — SAM MECA" },
      {
        name: "description",
        content:
          "Contactez l'atelier SAM MECA pour un devis en construction métallique, chaudronnerie, charpente, citernes ou remorques. Réponse sous 48 h.",
      },
      { property: "og:title", content: "Contact & devis — SAM MECA" },
      {
        property: "og:description",
        content: "Décrivez votre projet acier, nous revenons vers vous sous 48 heures.",
      },
    ],
  }),
  component: Page,
});

const services = [
  "Construction métallique",
  "Charpente métallique",
  "Chaudronnerie",
  "Confection de citernes",
  "Remorques",
  "Autre demande",
];

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="surface-steel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Demander un devis</h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Décrivez votre besoin, joignez vos plans si vous en avez : notre bureau d'études vous
            répond sous 48 heures ouvrées.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.3fr_1fr]">
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">Nom</span>
              <input
                required
                name="nom"
                className="mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Société
              </span>
              <input
                name="societe"
                className="mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">E-mail</span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Téléphone
              </span>
              <input
                name="telephone"
                className="mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-wide text-primary">
              Prestation concernée
            </span>
            <select
              name="service"
              className="mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
            >
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-wide text-primary">
              Votre projet
            </span>
            <textarea
              required
              rows={6}
              name="message"
              className="mt-2 w-full border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
            />
          </label>

          <button
            type="submit"
            className="bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90"
          >
            Envoyer la demande
          </button>

          {sent && (
            <p className="border-l-4 border-accent bg-secondary p-4 text-sm text-primary">
              Merci, votre demande a bien été prise en compte. Nous vous recontactons sous 48 h.
            </p>
          )}
        </form>

        <aside className="h-fit border border-border bg-card p-8">
          <h2 className="text-xl font-bold text-primary">Coordonnées</h2>
          <div className="rule-signal" />
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-accent" /> Zone industrielle, Tunisie
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" /> +216 00 000 000
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" /> contact@sammeca.com
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-accent" /> Lun – Sam : 8h00 – 18h00
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
