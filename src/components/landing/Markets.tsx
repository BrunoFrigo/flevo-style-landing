import { BarChart3, BookOpen, Globe2, Repeat, Users } from "lucide-react";

const MARKETS = [
  {
    icon: BarChart3,
    title: "Trading e Investimentos",
    text: "Gerencie salas de sinais e operações com segurança e eficiência.",
  },
  {
    icon: BookOpen,
    title: "Produtos Digitais e Infoprodutos",
    text: "Venda cursos, ebooks e conteúdos digitais com uma plataforma robusta.",
  },
  {
    icon: Users,
    title: "Comunidades Privadas",
    text: "Crie e gerencie comunidades exclusivas com controle total de acesso.",
  },
  {
    icon: Repeat,
    title: "Assinaturas e Recorrência",
    text: "Pagamentos recorrentes para garantir receita previsível e escalável.",
  },
  {
    icon: Globe2,
    title: "Projetos Nacionais e Internacionais",
    text: "Expanda sem fronteiras com suporte a múltiplas moedas e idiomas.",
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
            <article key={title} className="premium-card rounded-lg p-8">
              <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary">
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
