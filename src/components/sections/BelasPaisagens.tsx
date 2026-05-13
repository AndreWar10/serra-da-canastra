import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { Mountain, Trees } from "lucide-react";

const stats = [
  { icon: Mountain, value: "200km²", label: "Parque Nacional" },
  { icon: Trees, value: "1.500+", label: "Espécies da fauna e flora" },
];

export function BelasPaisagens() {
  return (
    <section
      id="paisagens"
      className="relative overflow-hidden bg-canastra-green-800 py-20 text-canastra-cream sm:py-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/paisagens/colinas-canastra.png')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-canastra-green-900/80 via-canastra-green-900/50 to-canastra-green-900/95"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="flex flex-col gap-6">
            <SectionTitle eyebrow="Belas paisagens" variant="light">
              Conexão com a natureza
            </SectionTitle>
            <p className="text-base leading-relaxed text-canastra-cream/90 sm:text-lg">
              A Serra da Canastra é o destino perfeito para quem busca conexão
              com a natureza, aventura e tranquilidade. Localizada no coração de
              Minas Gerais, a região abriga paisagens impressionantes,
              cachoeiras de tirar o fôlego e uma biodiversidade única.
            </p>
            <p className="text-base leading-relaxed text-canastra-cream/90 sm:text-lg">
              Seja para relaxar ou explorar, a Canastra oferece uma experiência
              inesquecível em cada detalhe.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 rounded-2xl border border-canastra-green-700 bg-canastra-green-900/60 p-6 backdrop-blur-sm"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-canastra-gold-400 text-canastra-stone">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-display text-3xl text-canastra-gold-300 sm:text-4xl">
                        {stat.value}
                      </div>
                      <div className="text-sm uppercase tracking-wider text-canastra-cream/80">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
