import { Banknote, Cpu, ShieldHalf } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    title: "MultiAdquirência Inteligente",
    text: "IA escolhe o adquirente de menor resistência em milissegundos. Plano A falha, plano B já aprovou.",
  },
  {
    icon: Banknote,
    title: "Saque Instantâneo",
    text: "Não somos banco — o dinheiro é seu. Saque a qualquer hora e reinjete no caixa em tempo real.",
  },
  {
    icon: ShieldHalf,
    title: "Escudo Invisível",
    text: "Antifraude dinâmico, PCI-DSS Nível 1. Bloqueia o golpe antes do clique acontecer.",
  },
];

export function Features() {
  return (
    <section id="infraestrutura" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground sm:text-5xl">
          Feito para você escalar mais.
        </h2>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground">
          Um gateway não é um obstáculo burocrático — é o ato final. Nossa arquitetura converte sem
          que o usuário perceba o sistema.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[2rem] border border-border bg-card p-8 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-brand">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-foreground">
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
