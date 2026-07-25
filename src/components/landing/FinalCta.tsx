import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function FinalCta() {
  return (
    <section id="precos" className="scroll-mt-24 border-t border-border bg-card">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-32">
        <h2 className="text-5xl font-extrabold tracking-tighter text-foreground sm:text-7xl">
          O Topo Aguarda{" "}
          <ArrowUpRight className="inline size-12 text-primary sm:size-16" aria-hidden="true" />
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground">
          Chame seu gerente de contas exclusivo e comece a vender com a FlevoPay hoje mesmo.
        </p>
        <a
          href="#criar-conta"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-brand px-10 py-5 text-base font-bold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
        >
          Falar com um especialista
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">
            Plataforma de pagamentos para negócios digitais. Pix, cartão e boleto em uma única
            integração.
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {["Infraestrutura", "Integrações", "Exclusivo", "Preços", "Termos", "Privacidade"].map(
            (l) => (
              <a
                key={l}
                href="#top"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ),
          )}
        </nav>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FlevoPay. Todos os direitos reservados.
      </div>
    </footer>
  );
}
