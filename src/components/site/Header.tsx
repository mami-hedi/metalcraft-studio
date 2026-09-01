import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-sammeca.jpg.asset.json";

export const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/construction-metallique", label: "Construction métallique" },
  { to: "/charpente-metallique", label: "Charpente" },
  { to: "/chaudronnerie", label: "Chaudronnerie" },
  { to: "/citernes", label: "Citernes" },
  { to: "/remorques", label: "Remorques" },
  { to: "/a-propos", label: "L'atelier" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="SAM MECA — atelier de construction métallique" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+21600000000"
          className="hidden items-center gap-2 bg-accent px-4 py-2 text-sm font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> Devis
        </a>

        <button
          aria-label="Menu"
          className="text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm font-semibold uppercase text-primary last:border-0"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
