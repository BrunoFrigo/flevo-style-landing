import { Check } from "lucide-react";
import phones from "@/assets/raven-phones.png";

const POINTS = [
  "Start mais rápido do mercado",
  "Alto volume de mensagens",
  "Múltiplos bots por conta",
  "API completa e documentada",
  "Alto volume de vendas",
  "Traqueamento avançado",
  "Infraestrutura preparada para crescimento",
];

export function Scale() {
  return (
    <section className="grain relative overflow-hidden border-y border-hairline bg-ink">
      <div
        aria-hidden="true"
        className="halo pointer-events-none absolute -left-40 top-1/3 size-[36rem] opacity-60"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tighter text-foreground sm:text-4xl">
            Se você vende no Telegram, a VerioxPay funciona para você.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Pensada para alta escala desde o primeiro dia. Não foi criada para bots simples — foi
            criada para operações que precisam escalar.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 rounded-lg border border-hairline bg-card/70 px-4 py-2 text-sm text-foreground"
              >
                <Check className="size-4 text-primary" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src={phones}
            alt="Painel da VerioxPay em dispositivos móveis"
            width={1280}
            height={1024}
            loading="lazy"
            className="drift-y mx-auto w-[min(100%,560px)]"
          />
        </div>
      </div>
    </section>
  );
}
