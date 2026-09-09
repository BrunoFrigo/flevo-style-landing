import { useState } from "react";
import { ArrowRight, BookOpen, Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/Logo";

type BusinessType = "infoprodutor" | "nicho-hot";

const options: Array<{
  id: BusinessType;
  icon: typeof BookOpen;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  soon?: boolean;
}> = [
  {
    id: "infoprodutor",
    icon: BookOpen,
    eyebrow: "Produtos digitais",
    title: "Infoprodutor",
    description: "Venda cursos, e-books, assinaturas e produtos digitais.",
    items: ["Catálogo de produtos", "Área de membros", "Sistema de afiliados", "Assinaturas e recorrência", "Relatórios de vendas"],
    soon: true,
  },
  {
    id: "nicho-hot",
    icon: Flame,
    eyebrow: "Alta conversão",
    title: "Nicho Hot",
    description: "Operações de tráfego, automação e alta conversão.",
    items: ["Automações e bots", "Funil de vendas", "Remarketing", "Tracking e pixels", "Agentes de IA"],
  },
];

export function BusinessTypeStep({ onComplete }: { onComplete: (type: BusinessType) => void }) {
  const [selected, setSelected] = useState<BusinessType | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-ink-foreground">
      <div className="pointer-events-none absolute inset-0 bloom opacity-80" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mb-8 flex items-center justify-between gap-4 sm:mb-14">
          <Logo inverted />
          <span className="eyebrow hidden text-ink-muted sm:block">Configuração inicial</span>
        </div>

        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="eyebrow text-primary">Passo 02 / 02</span>
            <div className="mt-3 flex items-center gap-2" aria-hidden="true">
              <span className="h-1.5 w-14 rounded-full bg-gradient-brand shadow-brand" />
              <span className="h-1.5 w-14 rounded-full bg-gradient-brand shadow-brand" />
            </div>
          </div>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            O que você <span className="text-gradient-brand">vende?</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Escolha uma opção para concluir seu cadastro e preparar seu painel. Você poderá alterar essa escolha depois.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {options.map(({ id, icon: Icon, eyebrow, title, description, items, soon }) => {
            const isSelected = selected === id;
            return (
              <button
                key={id}
                type="button"
                disabled={soon}
                onClick={() => !soon && setSelected(id)}
                aria-pressed={isSelected}
                aria-disabled={soon}
                className={`group relative flex w-full flex-col items-start justify-start overflow-hidden rounded-2xl border p-5 sm:min-h-[320px] sm:p-6 text-left transition duration-300 ${
                  soon
                    ? "cursor-not-allowed border-ink-foreground/10 bg-ink-soft opacity-70"
                    : "hover:-translate-y-1 " + (isSelected
                      ? "border-primary bg-primary/10 shadow-brand"
                      : "border-ink-foreground/10 bg-ink-soft hover:border-primary/60 hover:bg-ink-soft hover:shadow-brand")
                }`}
              >
                {soon && (
                  <span className="absolute right-5 top-5 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-glow">
                    Em breve
                  </span>
                )}
                {!soon && (
                  <span className={`absolute right-5 top-5 grid size-7 place-items-center rounded-full border transition ${isSelected ? "border-primary bg-primary text-primary-foreground opacity-100" : "border-ink-foreground/10 text-ink-muted opacity-0 group-hover:opacity-100"}`}>
                    {isSelected ? <Check className="size-3.5" aria-hidden="true" /> : <ArrowRight className="size-3.5" aria-hidden="true" />}
                  </span>
                )}
                <span className={`mb-6 grid size-11 sm:mb-8 place-items-center rounded-xl border border-ink-foreground/10 bg-ink-foreground/5 text-primary-glow transition ${soon ? "" : "group-hover:border-primary/50 group-hover:bg-primary/15"}`}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="eyebrow text-ink-muted">{eyebrow}</span>
                <span className="mt-2 block text-xl font-bold tracking-tight text-ink-foreground">{title}</span>
                <span className="mt-2 block max-w-sm text-sm leading-relaxed text-ink-muted">{description}</span>
                <ul className="mt-5 grid gap-2 text-xs text-ink-muted sm:grid-cols-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="size-3.5 shrink-0 text-primary-glow" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-4 border-t sm:flex-row sm:items-center sm:justify-between sm:gap-5 border-ink-foreground/10 pt-6">
          <p className="text-xs text-ink-muted">Você poderá ajustar essa escolha depois.</p>
          <Button
            type="button"
            disabled={!selected}
            onClick={() => selected && onComplete(selected)}
            className="h-12 w-full justify-center rounded-xl sm:h-11 sm:w-auto bg-gradient-brand px-6 font-bold text-primary-foreground shadow-brand hover:brightness-110"
          >
            Finalizar cadastro
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </main>
  );
}
