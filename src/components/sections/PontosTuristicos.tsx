import { ArrowUpRight, Route } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { Card, CardImage, CardBody } from "../ui/Card";
import { MobileCarousel } from "../ui/MobileCarousel";
import { pontosTuristicos } from "../../data/pontosTuristicos";

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

        <MobileCarousel
          ariaLabel="Pontos do roteiro — deslize para o lado ou use as setas"
          scrollClassName="mt-10 -mx-4 flex flex-nowrap items-start gap-6 overflow-x-auto overflow-y-hidden touch-pan-x scroll-smooth px-4 pb-3 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:touch-auto sm:items-stretch sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
        >
          {pontosTuristicos.map((ponto, idx) => (
            <Reveal
              key={ponto.id}
              delay={idx * 0.1}
              className="flex w-[min(90vw,23rem)] shrink-0 snap-center flex-col sm:h-auto sm:min-h-0 sm:w-auto sm:shrink"
            >
              <Card className="flex flex-col sm:h-full">
                <CardImage
                  src={ponto.imagem}
                  alt={ponto.nome}
                />
                <CardBody className="flex flex-col gap-3 sm:min-h-0 sm:flex-1">
                  <h3 className="font-display text-2xl text-canastra-green-800">
                    {ponto.nome}
                  </h3>
                  <p className="text-sm leading-relaxed text-canastra-stone/80 sm:flex-1">
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
        </MobileCarousel>
      </div>
    </section>
  );
}
