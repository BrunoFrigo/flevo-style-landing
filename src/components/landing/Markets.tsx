import { BookOpen, Radio, Repeat, Rocket, Sparkles } from "lucide-react";

const MARKETS = [
  {
    icon: BookOpen,
    title: "Produtos Digitais e Infoprodutos",
    text: "Venda cursos, ebooks e conteúdos digitais com uma plataforma robusta.",
  },
  {
    icon: Repeat,
    title: "Assinaturas e Recorrência",
    text: "Pagamentos recorrentes para garantir receita previsível e escalável.",
  },
  {
    icon: Rocket,
    title: "Lançamentos e Afiliações",
    text: "Estruture ofertas com afiliados e acompanhe cada venda em tempo real.",
  },
  {
    icon: Radio,
    title: "Conteúdo e Canais Pagos",
    text: "Monetize conteúdo e acessos pagos direto pelo Telegram, sem fricção.",
  },
  {
    icon: Sparkles,
    title: "E qualquer negócio digital",
    text: "Se a venda acontece no Telegram, a VerioxPay recebe e libera para você.",
  },
];

export function Markets() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <span className="eyebrow text-primary">Plataforma universal</span>
        <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
          Uma plataforma. Vários mercados. A VerioxPay não é limitada a um único nicho.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Usada hoje majoritariamente por quem atua em mercados de alta performance, mas criada para
          qualquer negócio que venda via Telegram.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="premium-card group relative overflow-hidden rounded-lg p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-24px_oklch(from_var(--primary)_l_c_h/0.35)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary transition-transform duration-500 group-hover:scale-110">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
