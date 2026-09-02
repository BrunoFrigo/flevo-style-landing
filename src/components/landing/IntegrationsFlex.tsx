import { CreditCard, LineChart, Plug, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: CreditCard,
    title: "Gateways de Pagamento",
    text: "Conecte seus gateways preferidos e gerencie tudo em um só lugar.",
  },
  {
    icon: LineChart,
    title: "Traqueamento Avançado",
    text: "Pixel, UTMs e postbacks para medir cada clique até a venda.",
  },
  {
    icon: Plug,
    title: "API e Webhooks",
    text: "Integre a plataforma às ferramentas que sua operação já usa.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Avançada",
    text: "Tecnologia de ponta contra fraudes e transparência total nas operações.",
  },
];

export function IntegrationsFlex() {
  return (
    <section id="taxas" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <div>
            <span className="eyebrow text-primary">Integrações flexíveis</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
              Conecte a VerioxPay a qualquer operação.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Integrações amplas e sem limitações, para infoprodutores, afiliados e empresas que
              usam o Telegram como canal de vendas.
            </p>
            <div className="premium-card mt-8 flex items-center justify-between rounded-lg px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Taxa por transação
                </p>
                <p className="mt-1 text-3xl font-extrabold tracking-tighter text-primary">
                  R$ 0,50
                </p>
              </div>
              <p className="max-w-[12rem] text-right text-xs text-muted-foreground">
                Você paga apenas por resultado. Sem mensalidade.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {ITEMS.map(({ icon: Icon, title, text }) => (
              <article key={title} className="premium-card rounded-lg p-7">
                <span className="grid size-11 place-items-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
