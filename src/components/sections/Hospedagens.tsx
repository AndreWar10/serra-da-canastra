import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { Card, CardImage, CardBody } from "../ui/Card";
import { Button } from "../ui/Button";
import { hospedagens } from "../../data/hospedagens";

const fallbackImages: Record<string, string> = {
  "vale-do-ceu":
    "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1000&q=80&auto=format&fit=crop",
  passaredo:
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&q=80&auto=format&fit=crop",
  "chales-marisa":
    "https://images.unsplash.com/photo-1518602164578-cd0074062767?w=1000&q=80&auto=format&fit=crop",
  "casa-campo":
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000&q=80&auto=format&fit=crop",
};

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {hospedagens.map((hosp, idx) => (
            <Reveal key={hosp.id} delay={idx * 0.08}>
              <Card className="flex h-full flex-col">
                <CardImage
                  src={fallbackImages[hosp.id] ?? hosp.imagem}
                  alt={hosp.nome}
                />
                <CardBody className="flex flex-1 flex-col gap-4">
                  <h3 className="font-display text-xl leading-tight text-canastra-green-800">
                    {hosp.nome}
                  </h3>

                  <ul className="flex flex-1 flex-col gap-2 text-xs text-canastra-stone/80 sm:text-sm">
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
        </div>
      </div>
    </section>
  );
}
