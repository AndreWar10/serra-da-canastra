import { ArrowUpRight, Route } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { Card, CardImage, CardBody } from "../ui/Card";
import { pontosTuristicos } from "../../data/pontosTuristicos";

const fallbackImages: Record<string, string> = {
  "igreja-itajai":
    "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=900&q=80&auto=format&fit=crop",
  "queijaria-vale-guirita":
    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=900&q=80&auto=format&fit=crop",
  "caminho-do-ceu":
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80&auto=format&fit=crop",
};

export function PontosTuristicos() {
  return (
    <section className="bg-canastra-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Roteiro especial">
              Não deixe de visitar
            </SectionTitle>
            <p className="flex items-center gap-2 text-sm font-medium text-canastra-green-700">
              <Route className="h-4 w-4" aria-hidden="true" />
              Visite os três pontos em uma única rota
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pontosTuristicos.map((ponto, idx) => (
            <Reveal key={ponto.id} delay={idx * 0.1}>
              <Card>
                <CardImage
                  src={fallbackImages[ponto.id] ?? ponto.imagem}
                  alt={ponto.nome}
                />
                <CardBody className="flex h-full flex-col gap-3">
                  <h3 className="font-display text-2xl text-canastra-green-800">
                    {ponto.nome}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-canastra-stone/80">
                    {ponto.descricao}
                  </p>
                  <a
                    href={ponto.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-canastra-green-700 transition-colors hover:text-canastra-gold-500"
                  >
                    Veja mais
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
