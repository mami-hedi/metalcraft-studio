import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "./Header";

export function Footer() {
  return (
    <footer className="surface-steel mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold">SAM MECA</h3>
          <div className="rule-signal" />
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Atelier de construction métallique, chaudronnerie, charpente, confection de citernes et
            de remorques. Étude, fabrication et montage sur mesure.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest">Nos métiers</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {navLinks.slice(1, 6).map((l) => (
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
              <MapPin className="h-4 w-4 shrink-0" /> Zone industrielle, Tunisie
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0" /> +216 00 000 000
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0" /> contact@sammeca.com
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
