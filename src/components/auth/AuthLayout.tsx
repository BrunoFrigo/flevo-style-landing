import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Layers, Zap, Percent } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient light */}
      <div
        className="pointer-events-none absolute inset-0 bloom opacity-60"
        aria-hidden="true"
      />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-2 lg:px-10">
        {/* Left: brand story */}
        <div className="relative">
          <Link to="/" className="mb-16 block w-fit lg:mb-24">
            <Logo />
          </Link>

          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
            <Layers className="size-3.5" aria-hidden="true" />
            Soluções que impulsionam seu negócio
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Sua operação
            <br />
            <span className="text-gradient-brand">começa aqui.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Acompanhe suas vendas, gerencie pagamentos e impulsione seus resultados com a
            VerioxPay.
          </p>

          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { icon: Zap, title: "Saque", sub: "Instantâneo" },
              { icon: Percent, title: "Taxas", sub: "Justas" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold leading-tight text-foreground">
                  {title}
                  <br />
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: card */}
        <div className="w-full">
          <div className="mx-auto w-full max-w-md rounded-3xl border border-hairline bg-card p-8 shadow-elevated sm:p-10">
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
      className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-card text-sm font-semibold text-foreground transition hover:bg-muted"
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
          className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
          {...props}
        />
      </div>
    </div>
  );
}
