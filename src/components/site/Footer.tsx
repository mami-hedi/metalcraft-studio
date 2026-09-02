import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { serviceLinks, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="surface-steel mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold">SAM MECA</h3>
          <div className="rule-signal" />
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Atelier de construction métallique, chaudronnerie, charpente, confection de citernes et
            de remorques à Hammamet. Étude, fabrication et montage sur mesure.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex bg-accent px-5 py-2.5 text-xs font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90"
          >
            Demander un devis
          </Link>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {serviceLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>
                Barraket Sahel, Route Sidi Hamed
                <br />
                8050 Hammamet, Tunisie
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={SITE.phoneHref} className="transition-colors hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} SAM MECA — Tous droits réservés.
      </div>
    </footer>
  );
}
