import { ArrowRight, AlertTriangle } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { YouTubeEmbed } from "../ui/YouTubeEmbed";
import { Button } from "../ui/Button";
import { videos } from "../../data/videos";

export function SalveCanastra() {
  return (
    <section className="bg-canastra-earth-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-canastra-gold-400 p-2 text-canastra-stone">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </span>
            <SectionTitle eyebrow="Conscientização">
              Salve a Canastra
            </SectionTitle>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="flex flex-col gap-5">
            <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
              O documentário{" "}
              <em className="text-canastra-earth-700">
                "SALVE A CANASTRA — O lixo urbano chega ao pé da serra"
              </em>{" "}
              aborda os impactos do lixo urbano na região, uma área conhecida
              pela importância ambiental e pelas nascentes do Rio São Francisco.
            </p>
            <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
              A produção mostra como o descarte inadequado de resíduos ameaça a
              natureza, os recursos hídricos e a vida das comunidades locais.
            </p>
            <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
              Ao longo do documentário, são apresentados relatos de moradores e
              especialistas sobre os problemas causados pelo aumento do lixo na
              região, além da falta de conscientização e de políticas eficazes
              para preservação ambiental.
            </p>

            <div className="mt-2">
              <Button
                as="a"
                href="https://www.youtube.com/results?search_query=salve+a+canastra+lixo+urbano"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Saiba mais
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="flex items-center">
            <YouTubeEmbed
              videoId={videos.salveCanastra.id}
              title={videos.salveCanastra.title}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
