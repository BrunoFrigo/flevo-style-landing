import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Steps } from "@/components/landing/Steps";
import { Markets } from "@/components/landing/Markets";
import { Scale } from "@/components/landing/Scale";
import { IntegrationsFlex } from "@/components/landing/IntegrationsFlex";
import { FinalCta, Footer } from "@/components/landing/FinalCta";

const TITLE = "VerioxPay — Automação e vendas no Telegram";
const DESCRIPTION =
  "Gerencie bots, automatize campanhas e escale suas vendas no Telegram com pagamentos integrados e acompanhamento em tempo real.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="veriox-dark min-h-screen overflow-hidden bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Steps />
        <Markets />
        <Scale />
        <IntegrationsFlex />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
