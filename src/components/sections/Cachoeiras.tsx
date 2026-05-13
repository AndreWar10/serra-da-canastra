import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { YouTubeEmbed } from "../ui/YouTubeEmbed";
import { videos } from "../../data/videos";

export function Cachoeiras() {
  return (
    <section id="cachoeiras" className="bg-canastra-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="right" className="flex flex-col gap-6">
          <SectionTitle eyebrow="Águas cristalinas">Cachoeiras</SectionTitle>
          <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
            Prepare-se para se surpreender com algumas das cachoeiras mais
            bonitas do Brasil, como a famosa{" "}
            <strong className="text-canastra-green-700">
              Cachoeira Casca d'Anta
            </strong>
            , considerada uma das maiores do país.
          </p>
          <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
            Águas cristalinas, trilhas acessíveis e cenários perfeitos fazem
            desse destino um verdadeiro paraíso para quem ama natureza e
            fotografia.
          </p>

          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-canastra-green-200 bg-white p-5 shadow-sm">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-canastra-green-100 font-display text-2xl text-canastra-green-700">
                +300
              </div>
              <p className="text-sm leading-snug text-canastra-stone/80">
                <strong className="text-canastra-green-800">cachoeiras</strong>{" "}
                catalogadas em toda a região da Serra da Canastra.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-canastra-green-200 bg-white p-5 shadow-sm">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-canastra-green-100 font-display text-2xl text-canastra-green-700">
                186m
              </div>
              <p className="text-sm leading-snug text-canastra-stone/80">
                <strong className="text-canastra-green-800">Casca d'Anta</strong>{" "}
                tem queda livre — uma das mais altas de Minas Gerais.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.15} className="flex items-center">
          <YouTubeEmbed
            videoId={videos.cachoeiras.id}
            title={videos.cachoeiras.title}
          />
        </Reveal>
      </div>
    </section>
  );
}
