## Objetivo

Recriar a landing page do flevopay.com.br em `/` — mesma estrutura, copy em português, identidade rosa magenta sobre branco quase-neutro.

## Design system (src/styles.css)

- Fundo `#faf8fa` / branco, texto quase-preto, acento rosa magenta (`#ec1e79`–`#ff4da6`) com gradiente para botões e destaques.
- Tipografia sans geométrica pesada (heading extra-bold, tracking apertado) carregada via `<link>` no `__root.tsx`.
- Raio grande (pílulas nos botões e badges), sombras suaves rosadas, cartões flutuantes de vidro.

## Seções (na ordem do original)

1. **Header** — logo FlevoPay, nav (Infraestrutura, Integrações, Exclusivo, Preços, Recursos), botão "Entrar" e CTA rosa "Comece agora".
2. **Hero** — badge "Plataforma de pagamentos para negócios digitais", título "Dinheiro entrando. / **Sem atrito.**", subtítulo, dois CTAs, três selos (Ativação rápida, Segurança de ponta, Suporte 24/7). À direita, mockup de celular inclinado com dashboard, três cards flutuantes (Mais conversão, Operação segura, Venda 24 horas) e pílula "Pix · Cartão · Boleto".
3. **SmartRoute** — título "Recupere até 14% em vendas com o SmartRoute da Flevo", texto e diagrama de fluxo: Cliente → Adquirente 1 (Erro) → Adquirente 2 (Sucesso) → Venda aprovada.
4. **Feito para você escalar mais** — 3 cards: MultiAdquirência Inteligente, Saque Instantâneo, Escudo Invisível.
5. **Ecossistema integrado** — "Plugue nos melhores checkouts do mercado", carrossel horizontal em loop com cards de plataformas (Adoorei, Luna, Vega, Zedy, Corvex) mostrando `api.flevopay.com/v1 · ativo`; abaixo três métricas: < 5 min, +12, 100%.
6. **Blocos exclusivos 01–04** — API Global Inteligente (com painel de referência de API PIX IN/PIX OUT), Controle absoluto (0 MED), Fricção zero (0.4ms), Gerente de contas exclusivo (24 horas).
7. **CTA final** — "O Topo Aguarda ↗" + "Chame seu gerente de contas exclusivo" com botão.
8. **Footer** — logo, links e aviso legal.

## Imagens

Geradas com o gerador de imagens e salvas em `src/assets/`: mockup do celular com dashboard financeiro rosa, painel de referência de API, e logos genéricos das plataformas de checkout (não copiaremos assets do site original).

## Técnico

- Tudo em `src/routes/index.tsx` (substitui o placeholder), com componentes de seção em `src/components/landing/`.
- Tokens semânticos no `src/styles.css` (@theme inline) — sem cores hardcoded nos componentes.
- Animações leves com CSS/Motion: fade-up no scroll, marquee do carrossel, pulso no diagrama SmartRoute.
- `head()` na rota `/` com title, description, og:* e twitter:card próprios; HTML semântico e um único H1.
- Sem backend — página estática; links de CTA como âncoras/placeholders.

Observação: será uma recriação fiel de layout, copy e estilo, não uma cópia byte a byte dos assets proprietários (logo e imagens serão versões próprias).
