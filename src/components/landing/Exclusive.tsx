import apiReference from "@/assets/api-reference.png";

export function Exclusive() {
  return (
    <section id="exclusivo" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <article className="rounded-[2.5rem] border border-border bg-card p-8 shadow-soft lg:p-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            01 · Exclusividade iminente
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl">
            API Global Inteligente.
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Construído para suportar volumes massivos sem sequer arranhar a performance.
          </p>
          <img
            src={apiReference}
            alt="Referência da API FlevoPay com endpoints PIX IN e PIX OUT"
            width={1280}
            height={912}
            loading="lazy"
            className="mt-10 w-full rounded-3xl border border-border"
          />
        </article>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
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
              className="flex flex-col justify-between rounded-[2rem] border border-border bg-card p-8 shadow-soft"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tighter text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
              <div className="mt-10 rounded-2xl bg-muted px-5 py-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {item.statLabel}
                </p>
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
