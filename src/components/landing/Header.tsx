import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Infraestrutura", href: "#infraestrutura" },
  { label: "Integrações", href: "#integracoes" },
  { label: "Exclusivo", href: "#exclusivo" },
  { label: "Preços", href: "#precos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="FlevoPay — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <span className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            Recursos <ChevronDown className="size-4" aria-hidden="true" />
          </span>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#entrar"
            className="hidden rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground shadow-soft transition-colors hover:bg-accent sm:inline-flex"
          >
            Entrar
          </a>
          <a
            href="#criar-conta"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Comece agora <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-5 py-4 lg:hidden" aria-label="Mobile">
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
