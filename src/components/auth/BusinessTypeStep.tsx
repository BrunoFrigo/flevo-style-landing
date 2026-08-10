import { useState } from "react";
import { ArrowRight, BookOpen, Check, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type BusinessType = "infoprodutor" | "nicho-hot";

const options: Array<{
  id: BusinessType;
  icon: typeof BookOpen;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
}> = [
  {
    id: "infoprodutor",
    icon: BookOpen,
    eyebrow: "Produtos digitais",
    title: "Infoprodutor",
    description: "Venda cursos, e-books, assinaturas e produtos digitais.",
    items: ["Catálogo de produtos", "Área de membros", "Sistema de afiliados", "Assinaturas e recorrência", "Relatórios de vendas"],
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
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-12 sm:px-10">
        <div className="mb-12 flex items-center justify-between gap-6 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-brand shadow-brand">
              <Sparkles className="size-5 text-primary-foreground" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              Veriox<span className="text-primary-glow">Pay</span>
            </span>
          </div>
          <span className="eyebrow hidden text-ink-muted sm:block">Configuração inicial</span>
        </div>

        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-primary-glow">
            <span className="h-px w-10 bg-primary-glow/70" />
            <span className="eyebrow">Passo 01 / 02</span>
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-6xl">
            O que você <span className="text-gradient-brand">vende?</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Isso ajusta seu painel para o que você precisa. Você pode trocar depois nas configurações.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {options.map(({ id, icon: Icon, eyebrow, title, description, items }) => {
            const isSelected = selected === id;
            return (
              <Button
                key={id}
                type="button"
                variant="ghost"
                onClick={() => setSelected(id)}
                aria-pressed={isSelected}
                className={`group relative min-h-[320px] w-full justify-start overflow-hidden rounded-2xl border p-6 text-left transition duration-300 hover:-translate-y-1 sm:p-7 ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-brand"
                    : "border-ink-foreground/10 bg-ink-soft hover:border-primary/60 hover:shadow-brand"
                }`}
              >
                <span className={`absolute right-5 top-5 grid size-7 place-items-center rounded-full border transition ${isSelected ? "border-primary bg-primary text-primary-foreground opacity-100" : "border-ink-foreground/10 text-ink-muted opacity-0 group-hover:opacity-100"}`}>
                  {isSelected ? <Check className="size-3.5" aria-hidden="true" /> : <ArrowRight className="size-3.5" aria-hidden="true" />}
                </span>
                <span className="mb-8 grid size-11 place-items-center rounded-xl border border-ink-foreground/10 bg-ink-foreground/5 text-primary-glow transition group-hover:border-primary/50 group-hover:bg-primary/15">
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
              </Button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between gap-5 border-t border-ink-foreground/10 pt-6">
          <p className="text-xs text-ink-muted">Você poderá ajustar essa escolha depois.</p>
          <Button
            type="button"
            disabled={!selected}
            onClick={() => selected && onComplete(selected)}
            className="h-11 rounded-xl bg-gradient-brand px-6 font-bold text-primary-foreground shadow-brand hover:brightness-110"
          >
            Começar
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </main>
  );
}
