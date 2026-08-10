import { useEffect, useState } from "react";

const STEP_MS = 1400;
const TOTAL_STEPS = 6;

function Connector({ active, done, spinner }: { active: boolean; done: boolean; spinner: boolean }) {
  return (
    <div className="relative flex h-10 w-12 shrink-0 items-center justify-center md:h-12 md:w-20">
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-primary/15 md:inset-x-0 md:left-0 md:top-1/2 md:h-[2px] md:w-auto md:-translate-x-0 md:-translate-y-1/2">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            active || done ? "w-full" : "w-0"
          } ${active ? "beam-flow" : ""}`}
        />
      </div>
      {spinner ? (
        <div className="relative z-10 grid size-9 place-items-center rounded-full border border-primary/20 bg-background shadow-sm">
          <div className="size-4 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
        </div>
      ) : null}
    </div>
  );
}

function ErrorCross() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid place-items-center"
      style={{ animation: "fade-scale-in 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      <div className="absolute inset-0 bg-destructive/5" />
      <svg
        viewBox="0 0 100 100"
        className="relative size-3/5 text-destructive"
        fill="none"
        stroke="currentColor"
        strokeWidth={9}
        strokeLinecap="round"
      >
        <line
          x1="25"
          y1="25"
          x2="75"
          y2="75"
          style={{ strokeDasharray: 80, strokeDashoffset: 80, animation: "draw-stroke 0.55s cubic-bezier(0.22,1,0.36,1) 0.1s forwards" }}
        />
        <line
          x1="75"
          y1="25"
          x2="25"
          y2="75"
          style={{ strokeDasharray: 80, strokeDashoffset: 80, animation: "draw-stroke 0.55s cubic-bezier(0.22,1,0.36,1) 0.45s forwards" }}
        />
      </svg>
    </div>
  );
}

function SuccessCheck() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid place-items-center"
      style={{ animation: "fade-scale-in 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      <div className="absolute inset-0 bg-primary/5" />
      <svg
        viewBox="0 0 100 100"
        className="relative size-3/5 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22 52 42 72 78 30"
          style={{ strokeDasharray: 100, strokeDashoffset: 100, animation: "draw-stroke 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s forwards" }}
        />
      </svg>
    </div>
  );
}

export function SmartRoute() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % TOTAL_STEPS), STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  const clientActive = step >= 1;
  const beam1Active = step === 1;
  const beam1Done = step >= 2 && step < 5;
  const errorShown = step >= 2 && step < 5;
  const beam2Active = step === 3;
  const beam2Done = step >= 4 && step < 5;
  const successShown = step === 4;

  return (
    <section id="smartroute" className="smartroute-section scroll-mt-24 overflow-hidden border-y border-border">
      <div className="smartroute-ambient">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-32">
          <span className="eyebrow text-primary">SmartRoute</span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tighter text-foreground sm:text-4xl md:text-6xl">
            Recupere até <span className="text-gradient-brand">14%</span> em vendas com o SmartRoute da Veriox.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            O SmartRoute orquestra múltiplos adquirentes em tempo real. Se uma transação falhar em um
            provedor, o processamento é reroteado instantaneamente para o próximo — sem o comprador
            perceber, até chegar ao sucesso.
          </p>

          <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-center gap-3 md:mt-16 md:flex-row md:flex-nowrap">
            <div
              className={`w-full rounded-2xl border bg-card p-6 text-left shadow-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-w-[170px] md:flex-1 ${
                clientActive ? "-translate-y-1 border-primary/40 shadow-elevated" : "border-border"
              }`}
            >
              <div className="text-lg font-bold tracking-tight text-foreground">Fernanda (CLIENTE)</div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <span
                  className={`inline-block size-2 rounded-full transition-all duration-300 ${
                    clientActive
                      ? "bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_22%,transparent)]"
                      : "bg-muted-foreground/40"
                  }`}
                />
                Click → Comprar
              </div>
            </div>

            <Connector active={beam1Active} done={beam1Done} spinner={beam1Active} />

            <div
              className={`relative w-full overflow-hidden rounded-2xl border bg-card p-6 text-left shadow-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-w-[170px] md:flex-1 ${
                errorShown ? "border-destructive/40" : "border-border"
              }`}
            >
              <div className="text-lg font-bold tracking-tight text-foreground">Adquirente 1</div>
              <div className="mt-2 h-5 text-sm font-semibold">
                <span
                  className={`inline-flex items-center gap-1.5 text-destructive transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    errorShown ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                  }`}
                >
                  Erro
                </span>
              </div>
              {errorShown ? <ErrorCross /> : null}
            </div>

            <Connector active={beam2Active} done={beam2Done} spinner={beam2Active} />

            <div
              className={`relative w-full overflow-hidden rounded-2xl border bg-card p-6 text-left shadow-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-w-[170px] md:flex-1 ${
                successShown ? "-translate-y-1 border-primary/40 shadow-elevated" : "border-border"
              }`}
            >
              <div className="text-lg font-bold tracking-tight text-foreground">Adquirente 2</div>
              <div className="mt-2 h-5 text-sm font-semibold">
                <span
                  className={`inline-flex items-center gap-1.5 text-primary transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    successShown ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                  }`}
                >
                  Sucesso
                </span>
              </div>
              {successShown ? <SuccessCheck /> : null}
            </div>
          </div>

          <div
            className={`mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary transition-opacity duration-500 ${
              successShown ? "opacity-100" : "opacity-0"
            }`}
          >
            Venda aprovada
          </div>
        </div>
      </div>
    </section>
  );
}
