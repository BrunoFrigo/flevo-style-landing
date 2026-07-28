import { Banknote, Cpu, ShieldHalf } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    index: "01",
    title: "MultiAdquirência Inteligente",
    text: "IA escolhe o adquirente de menor resistência em milissegundos. Plano A falha, plano B já aprovou.",
  },
  {
    icon: Banknote,
    index: "02",
    title: "Saque Instantâneo",
    text: "Não somos banco — o dinheiro é seu. Saque a qualquer hora e reinjete no caixa em tempo real.",
  },
  {
    icon: ShieldHalf,
    index: "03",
    title: "Escudo Invisível",
    text: "Antifraude dinâmico, PCI-DSS Nível 1. Bloqueia o golpe antes do clique acontecer.",
  },
];

export function Features() {
  return (
    <section id="infraestrutura" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <span className="eyebrow text-primary">Infraestrutura</span>
        <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.03] tracking-tighter text-foreground sm:text-5xl">
          Feito para você escalar mais.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Um gateway não é um obstáculo burocrático — é o ato final. Nossa arquitetura converte sem
          que o usuário perceba o sistema.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, index, title, text }) => (
            <article
              key={title}
              className="premium-card hairline-top overflow-hidden rounded-[2rem] p-9"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-brand">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="eyebrow text-muted-foreground/60">{index}</span>
              </div>
              <h3 className="mt-8 text-xl font-extrabold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
