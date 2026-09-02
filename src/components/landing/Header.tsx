import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const NAV = [
  { label: "Recursos", href: "#recursos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Taxas", href: "#taxas" },
  { label: "Suporte", href: "#suporte" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto grid h-20 w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:flex sm:justify-between lg:px-8">
        <a href="#top" aria-label="VerioxPay — início">
          <Logo inverted />
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-hairline bg-card/60 px-2 py-2 shadow-soft backdrop-blur-xl lg:flex"
          aria-label="Principal"
        >
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:text-primary sm:inline-flex"
          >
            Login
          </Link>
          <Link
            to="/cadastro"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-0.5"
          >
            Criar Conta
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="grid size-11 shrink-0 place-items-center rounded-lg border border-hairline bg-card lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-background/95 px-5 py-4 backdrop-blur-2xl lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-medium text-muted-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
