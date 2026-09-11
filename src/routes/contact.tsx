import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Clock, Loader2 } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis — SAM MECA Hammamet" },
      {
        name: "description",
        content:
          "Contactez l'atelier SAM MECA à Hammamet pour un devis en construction métallique, chaudronnerie, charpente, citernes ou remorques. Tél. +216 94 358 115.",
      },
      {
        name: "keywords",
        content: "devis construction métallique, chaudronnerie Hammamet, charpente, citerne, remorque",
      },
      { property: "og:title", content: "Contact & devis — SAM MECA" },
      {
        property: "og:description",
        content: "Décrivez votre projet acier, nous revenons vers vous sous 48 heures.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SAM MECA",
          description:
            "Atelier de construction métallique, chaudronnerie, charpente métallique, confection de citernes et de remorques.",
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Barraket Sahel, Route Sidi Hamed",
            postalCode: "8050",
            addressLocality: "Hammamet",
            addressCountry: "TN",
          },
          openingHours: "Mo-Sa 08:00-18:00",
        }),
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

// Identifiants EmailJS
const EMAILJS_SERVICE_ID = "service_mwyo6ff";
const EMAILJS_TEMPLATE_ID = "template_1lfnyn8";
const EMAILJS_PUBLIC_KEY = "kTsT5hKqJimHbnxMG";

function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

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
        <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
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
            disabled={status === "sending"}
            className="flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "sending" ? "Envoi en cours..." : "Envoyer la demande"}
          </button>

          {status === "sent" && (
            <p className="border-l-4 border-accent bg-secondary p-4 text-sm text-primary">
              Merci, votre demande a bien été prise en compte. Nous vous recontactons sous 48 h.
            </p>
          )}
          {status === "error" && (
            <p className="border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-700">
              Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler directement.
            </p>
          )}
        </form>

        <aside className="h-fit border border-border bg-card p-8">
          <h2 className="text-xl font-bold text-primary">Coordonnées</h2>
          <div className="rule-signal" />
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              <span>
                Barraket Sahel, Route Sidi Hamed
                <br />
                8050 Hammamet, Tunisie
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={SITE.phoneHref} className="hover:text-accent">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-accent" /> {SITE.hours}
            </li>
          </ul>

          <a
            href={SITE.phoneHref}
            className="mt-6 flex items-center justify-center gap-2 bg-accent px-5 py-3 text-xs font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Appeler l'atelier
          </a>

          <div className="mt-6 overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.8902806479387!2d10.524963999999999!3d36.41184979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd670074588e5b%3A0x27430eac0f9bb64c!2sSam%20meca!5e0!3m2!1sfr!2stn!4v1789122921279!5m2!1sfr!2stn"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Localisation SAM MECA sur Google Maps"
            />
          </div>

          <a
            href="https://www.google.com/maps/place/Sam+meca/@36.4118498,10.524964,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd670074588e5b:0x27430eac0f9bb64c!8m2!3d36.4118498!4d10.524964!16s%2Fg%2F11zds3m75h"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 border border-accent px-5 py-2.5 text-xs font-bold uppercase text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <MapPin className="h-4 w-4" /> Voir l'itinéraire
          </a>
        </aside>
      </section>
    </div>
  );
}