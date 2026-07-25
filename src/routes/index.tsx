import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { SmartRoute } from "@/components/landing/SmartRoute";
import { Features } from "@/components/landing/Features";
import { Integrations } from "@/components/landing/Integrations";
import { Exclusive } from "@/components/landing/Exclusive";
import { FinalCta, Footer } from "@/components/landing/FinalCta";

const TITLE = "FlevoPay — Gateway de pagamentos sem atrito";
const DESCRIPTION =
  "Gateway de pagamentos com SmartRoute, multiadquirência inteligente e saque instantâneo. Pix, cartão e boleto vendendo 24 horas por dia.";

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
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <SmartRoute />
        <Features />
        <Integrations />
        <Exclusive />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
