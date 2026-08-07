import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { AuthLayout, Divider, Field, GoogleButton } from "@/components/auth/AuthLayout";

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
    <AuthLayout>
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
        Bem-vindo de <span className="text-primary">volta</span>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Entre com suas credenciais para acessar o painel.
      </p>

      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Field
          id="email"
          label="E-mail"
          icon={Mail}
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
        />

        <div className="space-y-1.5">
          <label htmlFor="password" className="text-sm font-semibold text-foreground">
            Senha
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-primary"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <a href="#" className="text-sm font-semibold text-primary hover:underline">
            Esqueci minha senha
          </a>
        </div>

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground shadow-brand transition hover:brightness-105 active:translate-y-px"
        >
          Entrar no Painel
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </form>

      <Divider />

      <GoogleButton label="Entrar com Google" />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Ainda não tem uma conta?{" "}
        <Link to="/cadastro" className="font-semibold text-primary hover:underline">
          Criar conta grátis
        </Link>
      </p>
    </AuthLayout>
  );
}
