const PLATFORMS = ["Adoorei", "Luna Checkout", "Vega Checkout", "Zedy", "Corvex Checkout"];

const STATS = [
  { label: "Integração", value: "< 5 min", text: "Cole a API key e está rodando." },
  { label: "Plataformas", value: "+12", text: "Adoorei, Luna, Vega, Zedy e crescendo." },
  { label: "Compatibilidade", value: "100%", text: "PIX, recorrência e order bumps nativos." },
];

function PlatformCard({ name, index }: { name: string; index: number }) {
  return (
    <div
      className="float-slow w-64 shrink-0 rounded-[1.75rem] border border-border bg-card p-6 shadow-soft"
      style={{ animationDelay: `${(index % 5) * 0.6}s` }}
    >
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        Checkout integrado
      </span>
      <p className="mt-5 text-2xl font-extrabold tracking-tight text-foreground">{name}</p>
      <div className="mt-6 flex items-center justify-between rounded-full bg-muted px-4 py-2">
        <span className="font-mono text-xs text-muted-foreground">api.verioxpay.com/v1</span>
        <span className="flex items-center gap-1.5 text-xs font-bold text-success">
          <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
          ativo
        </span>
      </div>
    </div>
  );
}

export function Integrations() {
  const loop = [...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS];

  return (
    <section id="integracoes" className="scroll-mt-24 border-y border-border bg-card">
      <div className="mx-auto w-full max-w-7xl px-5 pt-20 lg:px-8 lg:pt-28">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Ecossistema integrado
        </span>
        <h2 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground sm:text-5xl">
          Plugue nos melhores checkouts do mercado.
        </h2>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground">
          A VerioxPay nasceu para conversar com o ecossistema. Conecte em minutos as plataformas que
          já dominam o checkout no Brasil — sem código, sem fricção, sem perder venda.
        </p>
      </div>

      <div className="relative mt-14 overflow-hidden py-6">
        <div className="marquee-track flex w-max gap-5 pl-5">
          {loop.map((name, i) => (
            <PlatformCard key={`${name}-${i}`} name={name} index={i} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent" />
      </div>


      <div className="mx-auto grid w-full max-w-7xl gap-5 px-5 pb-20 pt-14 md:grid-cols-3 lg:px-8 lg:pb-28">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-[2rem] border border-border bg-background p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </p>
            <p className="mt-3 text-4xl font-extrabold tracking-tighter text-gradient-brand">
              {s.value}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
