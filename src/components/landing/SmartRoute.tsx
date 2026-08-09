import { ArrowRight, CheckCircle2, MousePointerClick, User, XCircle } from "lucide-react";

const ROUTE_CYCLE = 5.4;
const ROUTE_STEP = 1.08;

type NodeTone = "primary" | "error" | "success";

function RouteNode({
  label,
  eyebrow,
  detail,
  tone,
  icon: Icon,
  step,
}: {
  label: string;
  eyebrow: string;
  detail: string;
  tone: NodeTone;
  icon: typeof User;
  step: number;
}) {
  return (
    <article
      className={`route-node route-node-${tone}`}
      style={{ animationDelay: `${step * ROUTE_STEP}s`, animationDuration: `${ROUTE_CYCLE}s` }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="route-icon">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="route-node-index">0{step + 1}</span>
      </div>
      <div className="mt-7">
        <p className="route-node-eyebrow">{eyebrow}</p>
        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-foreground">{label}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
      </div>
    </article>
  );
}

function RouteConnector({ step }: { step: number }) {
  return (
    <div
      className="route-connector"
      style={{ animationDelay: `${step * ROUTE_STEP}s`, animationDuration: `${ROUTE_CYCLE}s` }}
      aria-hidden="true"
    >
      <span className="route-line" />
      <span className="route-particle" />
      <ArrowRight className="route-arrow" />
    </div>
  );
}

export function SmartRoute() {
  return (
    <section id="smartroute" className="smartroute-section scroll-mt-24 overflow-hidden border-y border-border">
      <div className="smartroute-ambient">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow text-primary">SmartRoute</span>
            <h2 className="mt-7 text-4xl font-extrabold leading-[1.02] tracking-tighter text-foreground sm:text-6xl">
              Recupere até <span className="text-gradient-brand">14% em vendas</span>
              <br className="hidden sm:block" /> com o SmartRoute da Veriox.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              O SmartRoute orquestra múltiplos adquirentes em tempo real. Se uma transação falhar em
              um provedor, o processamento é reroteado instantaneamente para o próximo — sem o
              comprador perceber, até chegar ao sucesso.
            </p>
          </div>

          <div className="route-board mt-16 lg:mt-20">
            <div className="route-board-header">
              <div>
                <p className="route-board-kicker">Roteamento inteligente</p>
                <p className="mt-2 text-sm text-muted-foreground">Uma venda. A melhor rota disponível.</p>
              </div>
              <div className="route-live">
                <span className="route-live-dot" />
                <span>Operação ao vivo</span>
              </div>
            </div>

            <div className="route-path">
              <RouteNode
                label="Fernanda"
                eyebrow="Cliente"
                detail="Click → Comprar"
                tone="primary"
                icon={User}
                step={0}
              />
              <RouteConnector step={0} />
              <RouteNode
                label="Adquirente 1"
                eyebrow="Tentativa 01"
                detail="Resposta recusada"
                tone="error"
                icon={XCircle}
                step={1}
              />
              <RouteConnector step={1} />
              <RouteNode
                label="Adquirente 2"
                eyebrow="Tentativa 02"
                detail="Transação aprovada"
                tone="success"
                icon={CheckCircle2}
                step={2}
              />
            </div>

            <div className="route-board-footer">
              <div className="flex items-center gap-3">
                <span className="route-success-icon">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Venda aprovada</p>
                  <p className="mt-1 text-xs text-muted-foreground">Sem interrupção para o comprador</p>
                </div>
              </div>
              <span className="route-approved">100% de continuidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
