import { ArrowRight, Headphones, Play, Shield, ShieldCheck, Sparkles, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const SEALS = [
  { icon: Sparkles, label: "Ativação rápida" },
  { icon: Shield, label: "Segurança de ponta" },
  { icon: Headphones, label: "Suporte 24/7" },
];

function FloatCard({
  icon: Icon,
  title,
  lines,
  className,
}: {
  icon: typeof Zap;
  title: string;
  lines: string[];
  className: string;
}) {
  return (
    <div className={`glass-card absolute w-52 rounded-3xl p-4 ${className}`}>
      <span className="grid size-8 place-items-center rounded-xl bg-accent text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <p className="mt-3 text-sm font-bold text-foreground">{title}</p>
      {lines.map((line) => (
        <p key={line} className="text-xs text-muted-foreground">
          {line}
        </p>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 size-[46rem] rounded-full bg-accent/70 blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Plataforma de pagamentos para negócios digitais
          </span>

          <h1 className="mt-7 text-5xl font-extrabold leading-[0.95] tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
            Dinheiro entrando.
            <span className="mt-2 block text-gradient-brand">Sem atrito.</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            O Gateway de pagamentos que maximiza conversão, reduz falhas e mantém sua operação
            vendendo 24 horas por dia.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#criar-conta"
              className="inline-flex items-center justify-between gap-6 rounded-full bg-gradient-brand px-8 py-5 text-base font-bold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
            >
              Criar conta grátis <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#smartroute"
              className="inline-flex items-center gap-4 rounded-full border border-border bg-card px-8 py-5 text-base font-bold text-foreground shadow-soft transition-colors hover:bg-accent"
            >
              <span className="grid size-7 place-items-center rounded-full bg-accent text-primary">
                <Play className="size-3.5 fill-current" aria-hidden="true" />
              </span>
              Conhecer plataforma
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
            {SEALS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="float-slow relative">
            <img
              src={heroPhone}
              alt="Mockup do app VerioxPay com dashboard de faturamento"
              width={1024}
              height={1408}
              className="mx-auto w-[78%] rotate-6 drop-shadow-2xl"
            />
          </div>

          <FloatCard
            icon={Zap}
            title="Mais conversão"
            lines={["Menos falhas.", "Mais vendas aprovadas."]}
            className="-left-2 top-1/3 hidden sm:block"
          />
          <FloatCard
            icon={ShieldCheck}
            title="Operação segura"
            lines={["Infraestrutura robusta", "e antifraude avançada."]}
            className="-right-2 top-8 hidden sm:block"
          />
          <FloatCard
            icon={Headphones}
            title="Venda 24 horas"
            lines={["Seu negócio nunca", "para de vender."]}
            className="-right-2 bottom-24 hidden sm:block"
          />

          <div className="glass-card mx-auto mt-4 flex w-fit items-center gap-5 rounded-full px-6 py-3 text-sm font-bold text-foreground">
            {["Pix", "Cartão", "Boleto"].map((m) => (
              <span key={m} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
