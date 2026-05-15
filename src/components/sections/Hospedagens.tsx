import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { Card, CardImage, CardBody } from "../ui/Card";
import { MobileCarousel } from "../ui/MobileCarousel";
import { Button } from "../ui/Button";
import { hospedagens } from "../../data/hospedagens";

export function Hospedagens() {
  return (
    <section
      id="hospedagens"
      className="bg-canastra-earth-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle eyebrow="Onde ficar" align="center">
            Hospedagens
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-canastra-stone/80 sm:text-lg">
            Pousadas, chalés e casas de campo selecionados para garantir conforto
            e contato direto com a natureza da serra.
          </p>
        </Reveal>

        <MobileCarousel
          ariaLabel="Hospedagens — deslize para o lado ou use as setas"
          scrollClassName="mt-12 -mx-4 flex flex-nowrap items-start gap-6 overflow-x-auto overflow-y-hidden touch-pan-x scroll-smooth px-4 pb-3 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:touch-auto sm:items-stretch sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-2 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
          {hospedagens.map((hosp, idx) => (
            <Reveal
              key={hosp.id}
              delay={idx * 0.08}
              className="flex w-[min(88vw,22rem)] shrink-0 snap-center flex-col sm:h-auto sm:min-h-0 sm:w-auto sm:shrink"
            >
              <Card className="flex flex-col sm:h-full">
                <CardImage
                  src={hosp.imagem}
                  alt={hosp.nome}
                />
                <CardBody className="flex flex-col gap-4 sm:min-h-0 sm:flex-1">
                  <h3 className="font-display text-xl leading-tight text-canastra-green-800">
                    {hosp.nome}
                  </h3>

                  <ul className="flex flex-col gap-2 text-xs text-canastra-stone/80 sm:flex-1 sm:text-sm">
                    <li className="flex items-start gap-2">
                      <MapPin
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-canastra-green-600"
                        aria-hidden="true"
                      />
                      <span>{hosp.localizacao}</span>
                    </li>
                    {hosp.telefone ? (
                      <li className="flex items-start gap-2">
                        <Phone
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-canastra-green-600"
                          aria-hidden="true"
                        />
                        <span>{hosp.telefone}</span>
                      </li>
                    ) : null}
                    {hosp.email ? (
                      <li className="flex items-start gap-2">
                        <Mail
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-canastra-green-600"
                          aria-hidden="true"
                        />
                        <span className="break-all">{hosp.email}</span>
                      </li>
                    ) : null}
                    {hosp.atendimento ? (
                      <li className="flex items-start gap-2">
                        <Clock
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-canastra-green-600"
                          aria-hidden="true"
                        />
                        <span>{hosp.atendimento}</span>
                      </li>
                    ) : null}
                  </ul>

                  <Button
                    as="a"
                    href={hosp.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    className="mt-2 w-full"
                  >
                    {hosp.ctaLabel}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}
