import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { YouTubeEmbed } from "../ui/YouTubeEmbed";
import { Button } from "../ui/Button";
import { videos } from "../../data/videos";

export function Localizacao() {
  return (
    <section className="bg-canastra-green-900 py-20 text-canastra-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle eyebrow="Como chegar" align="center" variant="light">
            Localização
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-canastra-cream/85 sm:text-lg">
            Conheça mais sobre a Serra da Canastra e descubra o melhor caminho
            para sua próxima aventura.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-2xl border border-canastra-green-700 shadow-2xl">
              <iframe
                title="Mapa da Serra da Canastra"
                src="https://www.google.com/maps?q=Parque+Nacional+da+Serra+da+Canastra&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0 bg-canastra-stone"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-canastra-cream/80">
                <MapPin
                  className="h-4 w-4 text-canastra-gold-300"
                  aria-hidden="true"
                />
                Parque Nacional — São Roque de Minas, MG
              </div>
              <Button
                as="a"
                href="https://www.google.com/maps/dir/?api=1&destination=Parque+Nacional+da+Serra+da+Canastra"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Como chegar
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="flex items-center">
            <YouTubeEmbed
              videoId={videos.documentario.id}
              title={videos.documentario.title}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
