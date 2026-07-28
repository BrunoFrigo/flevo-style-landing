import { ArrowRight, CheckCircle2, MousePointerClick, User, XCircle } from "lucide-react";

function Node({
  label,
  sub,
  tone,
  icon: Icon,
}: {
  label: string;
  sub: string;
  tone: "neutral" | "error" | "success";
  icon: typeof User;
}) {
  const toneClass =
    tone === "error"
      ? "text-destructive"
      : tone === "success"
        ? "text-success"
        : "text-muted-foreground";

  return (
    <div className="glass-card flex min-w-[9.5rem] flex-1 flex-col items-center gap-2 rounded-3xl px-5 py-6 text-center">
      <span className="grid size-10 place-items-center rounded-2xl bg-accent text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <p className="text-sm font-bold text-foreground">{label}</p>
      <p className={`text-xs font-semibold uppercase tracking-wide ${toneClass}`}>{sub}</p>
    </div>
  );
}

export function SmartRoute() {
  return (
    <section id="smartroute" className="scroll-mt-24 border-y border-border bg-card">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          SmartRoute
        </span>
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
          <h2 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground sm:text-5xl">
            Recupere até <span className="text-gradient-brand">14% em vendas</span> com o SmartRoute
            da Veriox.
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            O SmartRoute orquestra múltiplos adquirentes em tempo real. Se uma transação falhar em
            um provedor, o processamento é reroteado instantaneamente para o próximo — sem o
            comprador perceber, até chegar ao sucesso.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-stretch justify-center gap-3 rounded-[2rem] border border-border bg-background p-6 sm:gap-4 sm:p-10">
          <Node label="Fernanda" sub="Cliente" tone="neutral" icon={User} />
          <ArrowRight
            className="hidden size-5 self-center text-primary sm:block"
            aria-hidden="true"
          />
          <Node label="Click → Comprar" sub="Checkout" tone="neutral" icon={MousePointerClick} />
          <ArrowRight
            className="hidden size-5 self-center text-primary sm:block"
            aria-hidden="true"
          />
          <Node label="Adquirente 1" sub="Erro" tone="error" icon={XCircle} />
          <ArrowRight
            className="hidden size-5 self-center text-primary sm:block"
            aria-hidden="true"
          />
          <Node label="Adquirente 2" sub="Sucesso" tone="success" icon={CheckCircle2} />
          <ArrowRight
            className="hidden size-5 self-center text-primary sm:block"
            aria-hidden="true"
          />
          <Node label="Venda aprovada" sub="100%" tone="success" icon={CheckCircle2} />
        </div>
      </div>
    </section>
  );
}
