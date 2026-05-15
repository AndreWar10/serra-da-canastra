import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const GASTRONOMIA_VIDEO_SRC = "/videos/gastronomia.mp4";

const GASTRONOMIA_VIDEO_CAPTION =
  "SERRA DA CANASTRA, o paraíso dos queijos e das cachoeiras! | Documentário";

export function Gastronomia() {
  return (
    <section id="gastronomia" className="bg-canastra-earth-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="left" className="order-2 flex items-center lg:order-1">
          <figure className="m-0 w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-canastra-stone shadow-2xl">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label={GASTRONOMIA_VIDEO_CAPTION}
              >
                <source src={GASTRONOMIA_VIDEO_SRC} type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-3 text-center text-xs font-medium leading-snug text-canastra-stone/75 sm:text-sm lg:text-left">
              {GASTRONOMIA_VIDEO_CAPTION}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal
          direction="right"
          delay={0.15}
          className="order-1 flex flex-col gap-6 lg:order-2"
        >
          <SectionTitle eyebrow="Sabores típicos">Gastronomia</SectionTitle>
          <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
            Além das belezas naturais, a região é famosa pelo tradicional{" "}
            <strong className="text-canastra-earth-700">Queijo Canastra</strong>
            , reconhecido nacionalmente pela sua qualidade e sabor único.
          </p>
          <p className="text-base leading-relaxed text-canastra-stone/85 sm:text-lg">
            Visitar a Canastra é também uma experiência gastronômica com
            comidas típicas, hospitalidade mineira e aquele gostinho de casa.
          </p>

          <ul className="mt-2 grid grid-cols-2 gap-3 text-sm sm:gap-4">
            {[
              "Queijo Canastra",
              "Doce de leite",
              "Café fresco",
              "Pão de queijo",
              "Cachaça artesanal",
              "Comida raiz",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full border border-canastra-earth-200 bg-white px-4 py-2 text-canastra-earth-700"
              >
                <span className="h-2 w-2 rounded-full bg-canastra-gold-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
