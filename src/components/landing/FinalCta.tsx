import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function FinalCta() {
  return (
    <section id="suporte" className="grain relative scroll-mt-24 overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="halo pointer-events-none absolute inset-x-1/4 -top-20 h-[30rem] opacity-70"
      />
      <div className="cyber-grid relative z-10 mx-auto w-full max-w-7xl px-5 py-28 text-center lg:px-8">
        <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground sm:text-5xl">
          Faça parte hoje mesmo com apenas um clique
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted-foreground">
          Crie sua conta gratuita e comece a vender no Telegram com a VerioxPay.
        </p>
        <Link
          to="/cadastro"
          className="mt-10 inline-flex items-center gap-3 rounded-lg bg-primary px-9 py-4 text-base font-bold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-1"
        >
          Criar Conta Gratuita
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Plataforma de bots para Telegram focada em vendas, automação e escala.
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {["Recursos", "Sobre Nós", "Taxas", "Suporte", "Termos", "Privacidade"].map((l) => (
            <a
              key={l}
              href="#top"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-hairline py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VerioxPay. Todos os direitos reservados.
      </div>
    </footer>
  );
}
