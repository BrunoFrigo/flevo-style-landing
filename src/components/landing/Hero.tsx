import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import phones from "@/assets/raven-phones.png";
import logoAsset from "@/assets/veriox-logo.jpg.asset.json";

const NOTIFICATIONS: Array<{ title: string; sub?: string; className: string; delay: string }> = [
  {
    title: "✅ Automação executada com sucesso",
    className: "left-0 top-[28%] hidden md:flex",
    delay: "0s",
  },
  {
    title: "🔄 Sequência de mensagens enviada",
    className: "left-[-2%] top-[46%] hidden md:flex",
    delay: "1.2s",
  },
  {
    title: "📨 Mensagem entregue para 1.247 usuários",
    className: "left-[8%] top-[64%] hidden lg:flex",
    delay: "2.1s",
  },
  {
    title: "Venda Realizada!",
    sub: "Comissão: R$ 136,87",
    className: "right-0 top-[30%] hidden md:flex",
    delay: "0.6s",
  },
  {
    title: "Automação executada com sucesso",
    className: "right-[-1%] top-[52%] hidden lg:flex",
    delay: "1.7s",
  },
];

function NotifCard({
  title,
  sub,
  className,
  delay,
}: {
  title: string;
  sub?: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`drift-y absolute z-20 w-64 items-start gap-3 rounded-2xl border border-hairline bg-card/90 px-4 py-3 shadow-elevated backdrop-blur-xl ${className}`}
    >
      <img src={logoAsset.url} alt="" className="size-7 shrink-0 rounded-[8px] object-cover" />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold leading-snug text-foreground">{title}</p>
        {sub && <p className="mt-0.5 text-xs text-primary">{sub}</p>}
      </div>
      <span className="text-[10px] text-muted-foreground">agora</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      <div
        aria-hidden="true"
        className="halo pointer-events-none absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 opacity-70"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-8 pt-16 text-center lg:px-8 lg:pt-24">
        <h1 className="reveal-up mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
          A plataforma definitiva para gerenciar, escalar e vender com bots no Telegram
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Conecte múltiplos bots, crie campanhas automatizadas, venda em alta escala e acompanhe
          tudo com traqueamento avançado pagando apenas por resultado.
        </p>
        <Link
          to="/cadastro"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 text-base font-bold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-1"
        >
          Criar Conta Gratuita
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </Link>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="halo pointer-events-none absolute inset-x-1/4 bottom-0 top-1/4 opacity-60"
          />
          <img
            src={phones}
            alt="Bots da VerioxPay funcionando no Telegram"
            width={1280}
            height={1024}
            className="relative z-10 mx-auto w-[min(100%,880px)]"
          />
          {NOTIFICATIONS.map((n) => (
            <NotifCard key={n.title} {...n} />
          ))}
        </div>
      </div>
    </section>
  );
}
