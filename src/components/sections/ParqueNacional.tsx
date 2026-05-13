import { Reveal } from "../ui/Reveal";
import { Leaf, Bird, PawPrint } from "lucide-react";

const especies = [
  {
    nome: "Lobo-guará",
    descricao: "Maior canídeo da América do Sul, símbolo do Cerrado.",
    icone: PawPrint,
  },
  {
    nome: "Tamanduá-bandeira",
    descricao: "Mamífero ameaçado de extinção que habita a região.",
    icone: PawPrint,
  },
  {
    nome: "Aves do Cerrado",
    descricao: "Diversidade de espécies endêmicas e migratórias.",
    icone: Bird,
  },
];

export function ParqueNacional() {
  return (
    <section
      id="parque"
      className="relative overflow-hidden bg-canastra-stone py-20 text-canastra-cream sm:py-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=2000&q=80&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-canastra-stone/95 via-canastra-stone/80 to-canastra-stone/95"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-canastra-green-700/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-canastra-gold-300">
              <Leaf className="h-3 w-3" aria-hidden="true" /> Preservação eco
            </span>
            <h2 className="mt-4 font-display text-5xl uppercase leading-tight text-canastra-cream sm:text-6xl md:text-7xl">
              Parque <span className="text-canastra-gold-300">Nacional</span>
            </h2>
            <span
              className="mx-auto mt-3 block h-1 w-20 rounded-full bg-canastra-gold-300"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-canastra-green-700/40">
            <img
              src="/images/parque/cerrado-parque.png"
              alt="Trilha do Parque Nacional da Serra da Canastra atravessando o Cerrado, com árvores típicas e céu azul"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="bg-canastra-stone/80 px-4 py-2 text-xs uppercase tracking-wider text-canastra-cream/70 backdrop-blur-sm">
              Parque Nacional da Serra da Canastra — vegetação típica do Cerrado
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-12">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="space-y-5 text-base leading-relaxed text-canastra-cream/90 sm:text-lg">
              <p>
                O Parque Nacional da Serra da Canastra protege espécies raras do
                Cerrado, como o lobo-guará, o tamanduá-bandeira e diversas aves.
              </p>
              <p>
                É o lugar ideal para quem aprecia ecoturismo e quer vivenciar a
                natureza de forma autêntica e preservada.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-3">
              {especies.map((especie) => {
                const Icon = especie.icone;
                return (
                  <li
                    key={especie.nome}
                    className="rounded-2xl border border-canastra-green-700 bg-canastra-green-900/50 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-canastra-gold-400"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-canastra-gold-400 text-canastra-stone">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-canastra-gold-300">
                      {especie.nome}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-canastra-cream/80">
                      {especie.descricao}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
