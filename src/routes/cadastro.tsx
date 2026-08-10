import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, CreditCard, Eye, EyeOff, Lock, Mail, Phone } from "lucide-react";
import { AuthLayout, Divider, Field, GoogleButton } from "@/components/auth/AuthLayout";
import { BusinessTypeStep } from "@/components/auth/BusinessTypeStep";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Criar conta na VerioxPay — Comece a vender" },
      {
        name: "description",
        content:
          "Crie sua conta VerioxPay em minutos: saque instantâneo, taxas justas e um painel completo para gerenciar suas vendas.",
      },
      { property: "og:title", content: "Criar conta na VerioxPay" },
      {
        property: "og:description",
        content: "Abra sua conta VerioxPay e comece a vender com saque instantâneo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [businessTypeStep, setBusinessTypeStep] = useState(false);

  if (businessTypeStep) {
    return <BusinessTypeStep onComplete={() => undefined} />;
  }

  return (
    <AuthLayout>
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
        Criar <span className="text-primary">conta</span>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Preencha os dados abaixo para começar a vender.
      </p>

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setBusinessTypeStep(true);
        }}
      >
        <Field
          id="nome"
          label="Nome"
          icon={Building2}
          placeholder="Ex: Minha Loja Digital"
          autoComplete="organization"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="doc" label="CPF / CNPJ" icon={CreditCard} placeholder="000.000.000-00" />
          <Field
            id="telefone"
            label="Telefone (WhatsApp)"
            icon={Phone}
            placeholder="(11) 99999-9999"
            autoComplete="tel"
          />
        </div>

        <Field
          id="email"
          label="E-mail"
          icon={Mail}
          type="email"
          placeholder="seu@email.com"
          autoComplete="email"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              id: "senha",
              label: "Senha",
              placeholder: "Mínimo 8",
              visible: show,
              toggle: () => setShow((v) => !v),
            },
            {
              id: "confirmar",
              label: "Confirmar senha",
              placeholder: "Repita a senha",
              visible: showConfirm,
              toggle: () => setShowConfirm((v) => !v),
            },
          ].map((f) => (
            <div key={f.id} className="space-y-1.5">
              <label htmlFor={f.id} className="text-sm font-semibold text-foreground">
                {f.label}
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />
                <input
                  id={f.id}
                  type={f.visible ? "text" : "password"}
                  placeholder={f.placeholder}
                  autoComplete="new-password"
                  className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
                <button
                  type="button"
                  onClick={f.toggle}
                  aria-label={f.visible ? "Ocultar senha" : "Mostrar senha"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-primary"
                >
                  {f.visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        <label className="flex items-start gap-2 pt-1 text-sm text-muted-foreground">
          <input type="checkbox" className="mt-0.5 size-4 rounded border-border accent-primary" />
          <span>
            Concordo com os{" "}
            <a href="#" className="font-semibold text-primary hover:underline">
              Termos de Uso
            </a>{" "}
            e a{" "}
            <a href="#" className="font-semibold text-primary hover:underline">
              Política de Privacidade
            </a>
          </span>
        </label>

        <button
          type="submit"
          className="h-12 w-full rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground shadow-brand transition hover:brightness-105 active:translate-y-px"
        >
          Criar minha conta
        </button>
      </form>

      <Divider />

      <GoogleButton label="Cadastrar com Google" />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Já tem uma conta?{" "}
        <Link to="/login" className="font-semibold text-primary hover:underline">
          Entrar
        </Link>
      </p>
    </AuthLayout>
  );
}
