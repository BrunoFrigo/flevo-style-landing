import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function FinalCta() {
  return (
    <section
      id="precos"
      className="grain scroll-mt-24 overflow-hidden border-t border-border bg-ink"
    >
      <div className="bloom">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 text-center lg:px-8 lg:py-36">
          <span className="eyebrow text-primary-glow">Acesso exclusivo</span>
          <h2 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tighter text-ink-foreground sm:text-7xl">
            O Topo Aguarda{" "}
            <ArrowUpRight className="inline size-12 text-primary sm:size-16" aria-hidden="true" />
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink-muted">
            Chame seu gerente de contas exclusivo e comece a vender com a VerioxPay hoje mesmo.
          </p>
          <a
            href="#criar-conta"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-brand px-10 py-5 text-base font-bold text-primary-foreground shadow-brand transition-transform duration-500 hover:-translate-y-1"
          >
            Falar com um especialista
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
        © {new Date().getFullYear()} VerioxPay. Todos os direitos reservados.
      </div>
    </footer>
  );
}
