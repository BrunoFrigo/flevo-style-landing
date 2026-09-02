import { ArrowUpRight, Check, CircleDollarSign, RefreshCw, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";
import phones from "@/assets/raven-phones.png";
import logoAsset from "@/assets/veriox-logo.jpg.asset.json";

type NotificationKind = "success" | "sync" | "sent" | "sale";

const NOTIFICATIONS: Array<{
  app: string;
  message: string;
  detail?: string;
  kind: NotificationKind;
  className: string;
  delay: string;
}> = [
  {
    app: "Automação",
    message: "Executada com sucesso",
    kind: "success",
    className: "left-0 top-[28%] hidden md:flex",
    delay: "0s",
  },
  {
    app: "Sequência",
    message: "Mensagens enviadas",
    kind: "sync",
    className: "left-[-2%] top-[46%] hidden md:flex",
    delay: "1.2s",
  },
  {
    app: "Campanha",
    message: "Entregue para 1.247 usuários",
    kind: "sent",
    className: "left-[8%] top-[64%] hidden lg:flex",
    delay: "2.1s",
  },
  {
    app: "Venda realizada",
    message: "Pagamento aprovado",
    detail: "Comissão: R$ 136,87",
    kind: "sale",
    className: "right-0 top-[30%] hidden md:flex",
    delay: "0.6s",
  },
  {
    app: "Automação",
    message: "Executada com sucesso",
    kind: "success",
    className: "right-[-1%] top-[52%] hidden lg:flex",
    delay: "1.7s",
  },
];

const NOTIFICATION_ICONS = {
  success: Check,
  sync: RefreshCw,
  sent: Send,
  sale: CircleDollarSign,
};

function NotifCard({
  app,
  message,
  detail,
  kind,
  className,
  delay,
}: {
  app: string;
  message: string;
  detail?: string;
  kind: NotificationKind;
  className: string;
  delay: string;
}) {
  const StatusIcon = NOTIFICATION_ICONS[kind];

  return (
    <div
      style={{ animationDelay: delay }}
      className={`drift-y absolute z-20 w-[18.5rem] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-4 -bottom-2 -z-10 h-12 scale-[0.98] rounded-[24px] border border-foreground/5 bg-card/40 opacity-60 backdrop-blur-md"
      />
      <div className="flex items-start gap-3 rounded-[28px] border border-foreground/10 bg-card/80 p-3.5 shadow-elevated backdrop-blur-2xl transition-transform duration-300 hover:scale-[1.02]">
        <img
          src={logoAsset.url}
          alt=""
          className="size-11 shrink-0 rounded-[10px] object-cover shadow-soft"
        />
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-1.5">
              <span className="flex size-4 shrink-0 items-center justify-center rounded-[4px] bg-success text-primary-foreground">
                <StatusIcon className="size-2.5" strokeWidth={3} aria-hidden="true" />
              </span>
              <p className="truncate text-[13px] font-semibold leading-tight text-foreground">{app}</p>
            </div>
            <span className="shrink-0 text-[10px] font-medium text-muted-foreground">agora</span>
          </div>
          <p className="mt-1 text-[13px] font-medium leading-tight text-foreground/85">{message}</p>
          {detail && <p className="mt-1 text-[11px] leading-tight text-primary">{detail}</p>}
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
            <NotifCard key={`${n.app}-${index}`} {...n} />
          ))}
        </div>
      </div>
    </section>
  );
}
