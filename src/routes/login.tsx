import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/landing/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar na VerioxPay — Acesso à plataforma" },
      {
        name: "description",
        content:
          "Acesse o painel VerioxPay para acompanhar vendas, saques instantâneos e a performance da sua operação em tempo real.",
      },
      { property: "og:title", content: "Entrar na VerioxPay" },
      {
        property: "og:description",
        content: "Acesse o painel VerioxPay e acompanhe sua operação em tempo real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
        <Link to="/" className="w-fit">
          <Logo />
        </Link>

        <div className="mx-auto w-full max-w-sm py-12">
          <p className="eyebrow text-primary">Área do cliente</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Bem-vindo de volta
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre para acompanhar suas vendas e movimentações.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="voce@empresa.com.br"
                className="h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-semibold text-foreground">
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="h-12 w-full rounded-xl border border-border bg-card px-4 pr-20 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground transition hover:text-primary"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  className="size-4 rounded border-border accent-primary"
                />
                Manter conectado
              </label>
              <a href="#" className="text-sm font-semibold text-primary hover:underline">
                Esqueci a senha
              </a>
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground shadow-brand transition hover:brightness-105 active:translate-y-px"
            >
              Entrar na plataforma
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Ainda não tem conta?{" "}
            <a href="#" className="font-semibold text-primary hover:underline">
              Criar conta
            </a>
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} VerioxPay. Todos os direitos reservados.
        </p>
      </div>

      {/* Right: brand panel */}
      <aside className="relative hidden overflow-hidden border-l border-white/5 bg-ink text-ink-foreground lg:flex lg:items-center lg:justify-center lg:p-12">
        {/* Bloom glows */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary opacity-15 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 size-64 rounded-full bg-primary opacity-10 blur-[100px]"
          aria-hidden="true"
        />
        <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 max-w-lg">
          <span className="eyebrow mb-8 block text-primary opacity-90" style={{ letterSpacing: "0.4em" }}>
            VerioxPay Infrastructure
          </span>

          <h2 className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight xl:text-5xl">
            Potencialize suas vendas com a{" "}
            <span className="text-gradient-brand">melhor conversão.</span>
          </h2>

          <p className="max-w-md text-lg leading-relaxed text-ink-muted">
            O gateway de pagamentos brasileiro construído para alta performance e segurança
            inabalável.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
            <div className="flex gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="size-1.5 rounded-full bg-white/20" />
              <span className="size-1.5 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Floating brand mark */}
        <div className="absolute bottom-12 right-12 opacity-20" aria-hidden="true">
          <Logo className="[&_span]:text-ink-foreground" />
        </div>
      </aside>

    </main>
  );
}
