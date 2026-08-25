import { Link } from "@tanstack/react-router";

const STEPS = [
  {
    n: "01",
    title: "Conecte seu bot do Telegram",
    text: "Integre seus bots em poucos cliques, sem complicação técnica.",
  },
  {
    n: "02",
    title: "Configure os fluxos",
    text: "Defina o que acontece quando um lead dá /start: mensagens automáticas, mídias, botões personalizados, ofertas e CTAs.",
  },
  {
    n: "03",
    title: "Venda e acompanhe em tempo real",
    text: "Cada venda é rastreada, processada e registrada em tempo real.",
  },
  {
    n: "04",
    title: "Suba suas campanhas",
    text: "Crie campanhas de venda dentro do bot, com pagamentos integrados e automação completa.",
  },
];

export function Steps() {
  return (
    <section id="recursos" className="scroll-mt-24 border-y border-hairline bg-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <span className="eyebrow text-primary">Automatize seu Telegram</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
            Como a VerioxPay funciona na prática
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Transforme seu bot do Telegram em uma máquina de vendas em 4 passos simples.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <article key={s.n} className="premium-card rounded-3xl p-8">
              <span className="text-4xl font-extrabold tracking-tighter text-primary/40">{s.n}</span>
              <h3 className="mt-6 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/cadastro"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-0.5"
          >
            Criar Conta Gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}
