import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  points: string[];
  sections: { title: string; body: string }[];
  children?: ReactNode;
};

export function ServiceLayout({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  points,
  sections,
  children,
}: Props) {
  return (
    <div>
      <section className="surface-steel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-white/75">{intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-primary">Notre savoir-faire</h2>
          <div className="rule-signal" />
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((s) => (
            <article key={s.title} className="card-industrial p-6">
              <h3 className="text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {children}

      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 border border-border bg-card p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary">Un projet en tête ?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Envoyez-nous vos plans ou votre cahier des charges, nous vous répondons sous 48 h.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
