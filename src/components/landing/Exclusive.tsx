const ENDPOINTS = [
  { method: "POST", path: "/v1/pix/charges", desc: "Criar cobrança PIX IN" },
  { method: "POST", path: "/v1/pix/payouts", desc: "Enviar PIX OUT" },
  { method: "GET", path: "/v1/transactions/:id", desc: "Consultar transação" },
  { method: "POST", path: "/v1/webhooks", desc: "Registrar webhook" },
];

const CODE: Array<{ t: string; c?: string }> = [
  { t: "curl -X POST https://api.verioxpay.com/v1/pix/charges \\", c: "text-emerald-300" },
  { t: '  -H "Authorization: Bearer $VERIOX_SECRET_KEY" \\' },
  { t: '  -H "Content-Type: application/json" \\' },
  { t: "  -d '{" },
  { t: '    "amount": 24990,', c: "text-primary" },
  { t: '    "currency": "BRL",', c: "text-primary" },
  { t: '    "customer": { "document": "123.456.789-00" },' },
  { t: '    "webhook_url": "https://sualoja.com/hooks/veriox"' },
  { t: "  }'" },
];

export function Exclusive() {
  return (
    <section id="exclusivo" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <article className="premium-card hairline-top overflow-hidden rounded-[2.5rem] p-8 lg:p-14">
          <span className="eyebrow text-primary">01 · Exclusividade iminente</span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl">
            API Global Inteligente.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Construído para suportar volumes massivos sem sequer arranhar a performance.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <ul className="flex flex-col gap-3">
              {ENDPOINTS.map((e) => (
                <li
                  key={e.path}
                  className="flex items-center gap-3 rounded-2xl border border-hairline bg-muted/50 px-4 py-3"
                >
                  <span className="rounded-md bg-primary/12 px-2 py-1 font-mono text-[11px] font-bold tracking-wide text-primary">
                    {e.method}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-mono text-[13px] text-foreground">{e.path}</p>
                    <p className="truncate text-xs text-muted-foreground">{e.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d10] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-white/40">request.sh</span>
              </div>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed text-white/70">
                <code>
                  {CODE.map((line, i) => (
                    <div key={i} className={line.c ?? ""}>
                      {line.t || " "}
                    </div>
                  ))}
                </code>
              </pre>
              <div className="border-t border-white/10 px-5 py-4 font-mono text-[12.5px] leading-relaxed">
                <p className="text-white/40">// 200 OK · 0.4ms</p>
                <p className="text-emerald-300">{'{ "status": "paid", "id": "txn_9f21c" }'}</p>
              </div>
            </div>
          </div>
        </article>


        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {[
            {
              tag: "02 · Opere sem se preocupar",
              title: "Controle absoluto.",
              text: "Aqui você roda sua operação de PIX com 0 MED. Sem bloqueios, sem travas, sem fricção — nós cobrimos todos os reembolsos da sua operação de pix.",
              statLabel: "Mais lucro no seu bolso",
              stat: "0 MED",
            },
            {
              tag: "03 · Responsivo · Translúcido",
              title: "Fricção zero.",
              text: "Uma experiência de pagamento tão invisível que maximiza aprovações através de um ecossistema projetado para o sucesso.",
              statLabel: "Latência média",
              stat: "0.4ms",
            },
            {
              tag: "04 · Atendimento white-glove",
              title: "Gerente de contas exclusivo.",
              text: "Um único ponto de contato, disponível para você. Decisões rápidas, ajustes finos e prioridade absoluta — sem fila, sem ticket, sem ruído.",
              statLabel: "Atendimento e suporte dedicado",
              stat: "24 horas",
            },
          ].map((item) => (
            <article
              key={item.tag}
              className="premium-card hairline-top flex flex-col justify-between overflow-hidden rounded-[2rem] p-9"
            >
              <div>
                <span className="eyebrow text-primary">{item.tag}</span>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tighter text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
              <div className="mt-10 rounded-2xl border border-hairline bg-muted/60 px-5 py-4">
                <p className="eyebrow text-muted-foreground">{item.statLabel}</p>
                <p className="mt-1 text-3xl font-extrabold tracking-tighter text-gradient-brand">
                  {item.stat}
                </p>
              </div>
            </article>

          ))}
        </div>
      </div>
    </section>
  );
}
