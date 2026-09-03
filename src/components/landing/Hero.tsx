import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import phones from "@/assets/raven-phones.png";
import logoAsset from "@/assets/veriox-logo.jpg.asset.json";

const NOTIFICATIONS: Array<{
  amount: string;
  className: string;
  delay: string;
}> = [
  {
    amount: "R$ 29,90",
    className: "left-0 top-[28%] hidden md:flex",
    delay: "0s",
  },
  {
    amount: "R$ 49,90",
    className: "left-[-2%] top-[46%] hidden md:flex",
    delay: "1.2s",
  },
  {
    amount: "R$ 97,00",
    className: "left-[8%] top-[64%] hidden lg:flex",
    delay: "2.1s",
  },
  {
    amount: "R$ 136,87",
    className: "right-0 top-[30%] hidden md:flex",
    delay: "0.6s",
  },
  {
    amount: "R$ 67,90",
    className: "right-[-1%] top-[52%] hidden lg:flex",
    delay: "1.7s",
  },
];

function NotifCard({
  amount,
  className,
  delay,
}: {
  amount: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`drift-y absolute z-20 w-[20.5rem] ${className}`}
    >
      <div className="flex min-h-[6.8rem] items-start gap-3.5 rounded-[24px] border border-foreground/25 bg-card/70 px-4 py-3.5 shadow-elevated backdrop-blur-2xl transition-transform duration-300 hover:scale-[1.02]">
        <img
          src={logoAsset.url}
          alt=""
          className="mt-0.5 size-12 shrink-0 rounded-[12px] object-cover shadow-soft"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 text-left text-[15px] font-bold leading-[1.18] text-foreground">
              <p>⚡ Nova venda!</p>
              <p>via VerioxPay</p>
            </div>
            <span className="shrink-0 pt-0.5 text-[12px] font-medium text-muted-foreground">agora</span>
          </div>
          <p className="mt-1 text-left text-[15px] font-medium leading-tight text-foreground/90">
            Você recebeu {amount}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="cyber-grid grain relative overflow-hidden border-b border-hairline">
      <div
        aria-hidden="true"
        className="halo pointer-events-none absolute -top-48 left-1/2 size-[56rem] -translate-x-1/2 opacity-80"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-0 pt-16 text-center lg:px-8 lg:pt-20">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-[10px] font-medium uppercase text-primary backdrop-blur-xl">
          <span className="status-pulse size-2 rounded-full bg-primary" />
          Sistema de automação para Telegram
        </div>
        <h1 className="reveal-up mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-7xl">
          A nova geração de vendas<br className="hidden sm:block" /> com bots no Telegram
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Centralize bots, pagamentos e campanhas em uma operação inteligente. Venda em alta escala
          e acompanhe cada resultado em tempo real.
        </p>
        <Link
          to="/cadastro"
          className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-primary px-9 py-4 text-base font-bold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-1"
        >
          Criar Conta Gratuita
          <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>

        <div className="relative mt-16 min-h-[380px] sm:min-h-[520px] lg:min-h-[610px]">
          <div
            aria-hidden="true"
            className="halo pointer-events-none absolute inset-x-1/4 bottom-0 top-1/4 opacity-60"
          />
          <img
            src={phones}
            alt="Bots da VerioxPay funcionando no Telegram"
            width={1280}
            height={1024}
            className="float-slow relative z-10 mx-auto w-[min(112%,940px)] max-w-none"
          />
          {NOTIFICATIONS.map((n, index) => (
            <NotifCard key={`${n.amount}-${index}`} {...n} />
          ))}
        </div>
      </div>
    </section>
  );
}
