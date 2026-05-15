import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { Footprints, Car, Binoculars, Waves } from "lucide-react";

const TRILHAS_IMAGE_CAPTION =
  "Trilhas da Serra da Canastra. Foto: Divulgação.- turismodenatureza.com.br";

const atividades = [
  { icon: Footprints, label: "Trilhas e trekking" },
  { icon: Car, label: "Passeios de 4x4" },
  { icon: Binoculars, label: "Observação de animais" },
  { icon: Waves, label: "Banhos de cachoeira" },
];

export function Trilhas() {
  return (
    <section id="trilhas" className="bg-canastra-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="right" className="flex flex-col gap-6">
          <SectionTitle eyebrow="Aventura mineira">Trilhas</SectionTitle>
          <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
            Se você gosta de emoção, a Serra da Canastra oferece trilhas e
            trekking, passeios de 4x4, observação de animais, banhos de
            cachoeira e experiências culturais em fazendas locais.
          </p>
          <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
            Ou, se preferir, é só relaxar e aproveitar o silêncio e a paz da
            natureza.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {atividades.map((atividade) => {
              const Icon = atividade.icon;
              return (
                <div
                  key={atividade.label}
                  className="flex items-center gap-3 rounded-xl border border-canastra-green-200 bg-white p-4 shadow-sm transition-all hover:border-canastra-gold-400 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-canastra-green-100 text-canastra-green-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-canastra-stone">
                    {atividade.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.15} className="flex items-center">
          <figure className="m-0 w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/trilhas/trilha-canastra.png"
                alt="Grupo de trilheiros em descida por trecho rochoso na Serra da Canastra, com vale verde e chapada ao fundo sob céu nublado"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs font-medium leading-snug text-canastra-stone/75 sm:text-sm lg:text-left">
              {TRILHAS_IMAGE_CAPTION}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
