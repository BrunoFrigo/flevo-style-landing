import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

const STATS = [
  { label: "Total de Vendas", value: "2.009" },
  { label: "Faturamento", value: "R$ 29.556,38" },
  { label: "Taxa de Conversão", value: "36,20%" },
  { label: "Ticket Médio", value: "R$ 14,71" },
];

const BULLETS = [
  "Conecta múltiplos bots do Telegram",
  "Configura fluxos automatizados de mensagens, mídias e botões",
  "Cria campanhas de venda diretamente dentro do bot",
  "Integra gateways de pagamento",
  "Acompanha tudo com traqueamento profissional",
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          A VerioxPay é uma plataforma de bots para Telegram focada em vendas, automação e escala.
          Gerencie <strong className="text-foreground">múltiplos bots</strong>, integre pagamentos e{" "}
          <strong className="text-foreground">
            acompanhe seus resultados com segurança e eficiência.
          </strong>
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/cadastro"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-0.5"
          >
            Criar Conta Gratuita
          </Link>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="premium-card rounded-3xl p-6 text-left">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-3 text-3xl font-extrabold tracking-tighter text-foreground">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-primary">O que é a VerioxPay</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
              Escala, performance e controle total das vendas.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Uma plataforma de gerenciamento de bots no Telegram, criada para operações que
              precisam crescer sem perder o controle.
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {BULLETS.map((b) => (
              <li
                key={b}
                className="premium-card flex items-start gap-3 rounded-2xl px-5 py-4 text-sm text-foreground"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
