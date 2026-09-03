import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Activity, Bot, Check, ShieldCheck, Zap } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="veriox-dark cyber-grid relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bloom opacity-70" aria-hidden="true" />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="relative py-4 lg:py-10">
          <Link to="/" className="mb-12 block w-fit lg:mb-24">
            <Logo />
          </Link>

          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card/60 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur-xl">
            <span className="status-pulse size-2 rounded-full bg-primary" aria-hidden="true" />
            Automação inteligente para Telegram
          </span>

          <h1 className="mt-7 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-normal text-foreground sm:text-6xl">
            Sua operação vende.
            <br />
            <span className="text-gradient-brand">A VerioxPay escala.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Centralize pagamentos, automações e métricas do seu negócio digital em uma
            experiência rápida e segura.
          </p>

          <div className="mt-10 grid max-w-lg gap-3 sm:grid-cols-2">
            {[
              { icon: Bot, label: "Bots sempre ativos" },
              { icon: Activity, label: "Dados em tempo real" },
              { icon: Zap, label: "Checkout otimizado" },
              { icon: ShieldCheck, label: "Operação protegida" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 border-t border-hairline py-3">
                <span className="grid size-8 place-items-center rounded-[8px] bg-accent text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <Check className="ml-auto size-4 text-primary" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full py-4">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[8px] border border-hairline bg-card/85 p-7 shadow-elevated backdrop-blur-2xl sm:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand" aria-hidden="true" />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export function GoogleButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex h-12 w-full items-center justify-center gap-3 rounded-[8px] border border-border bg-muted/40 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-muted"
    >
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.5 5.5 0 0 1-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8Z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.08 7.94-2.93l-3.86-3c-1.07.72-2.44 1.15-4.08 1.15-3.13 0-5.79-2.11-6.74-4.96H1.28v3.1A12 12 0 0 0 12 24Z"
        />
        <path
          fill="#FBBC05"
          d="M5.26 14.26a7.2 7.2 0 0 1 0-4.52v-3.1H1.28a12 12 0 0 0 0 10.72l3.98-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.2 15.24 0 12 0A12 12 0 0 0 1.28 6.64l3.98 3.1C6.21 6.86 8.87 4.75 12 4.75Z"
        />
      </svg>
      {label}
    </button>
  );
}

export function Divider() {
  return (
    <div className="my-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-border" />
      <span className="text-xs font-semibold text-muted-foreground">ou</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Field({
  id,
  label,
  icon: Icon,
  ...props
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />
        <input
          id={id}
          className="h-12 w-full rounded-[8px] border border-border bg-background/55 pl-11 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
          {...props}
        />
      </div>
    </div>
  );
}
