import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-sammeca.jpg.asset.json";
import { serviceLinks, SITE } from "@/lib/site";

const mainLinks = [
  { to: "/", label: "Accueil" },
  { to: "/atelier", label: "Atelier" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const linkClass =
    "text-[13px] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="SAM MECA — atelier de construction métallique à Hammamet"
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            to="/"
            className={linkClass}
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Accueil
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className={`${linkClass} inline-flex items-center gap-1`}
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-3 w-64 border border-border bg-card py-2 shadow-lg">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
                    activeProps={{ className: "text-primary" }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={linkClass}
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 bg-accent px-3 py-2 text-[11px] font-bold uppercase text-accent-foreground transition-opacity hover:opacity-90 sm:px-4 sm:text-xs"
          >
            <Phone className="h-3.5 w-3.5" /> Demander un devis
          </Link>

          <button
            aria-label="Menu"
            className="text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block border-b border-border py-3 text-sm font-semibold uppercase text-primary"
          >
            Accueil
          </Link>

          <div className="border-b border-border py-3">
            <p className="text-sm font-semibold uppercase text-primary">Services</p>
            <div className="mt-2 space-y-1 pl-3">
              {serviceLinks.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-sm text-muted-foreground"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {mainLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm font-semibold uppercase text-primary last:border-0"
            >
              {l.label}
            </Link>
          ))}

          <a
            href={SITE.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 border border-border py-3 text-sm font-bold uppercase text-primary"
          >
            <Phone className="h-4 w-4 text-accent" /> {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
