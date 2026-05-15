import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-canastra-cream"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/serra-canastra-hero.png')",
        }}
        aria-hidden="true"
      />
      {/* Overlay com gradiente para garantir contraste do texto sobre a foto */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-canastra-green-900/60 via-canastra-stone/55 to-canastra-stone/85"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block text-xs uppercase tracking-[0.5em] text-canastra-gold-300 sm:text-sm"
        >
          Minas Gerais — Brasil
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Serra da Canastra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-canastra-cream/90 sm:text-lg md:text-xl lg:max-w-full"
        >
          Natureza, cultura e sabores típicos criam uma experiência autêntica
          mineira.{" "}
          <br className="hidden lg:block" aria-hidden="true" />
          Cachoeiras, trilhas e o legítimo Queijo Canastra esperam por você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button as="a" href="#cachoeiras" variant="secondary" size="lg">
            Comece a explorar
          </Button>
          <Button as="a" href="#hospedagens" variant="outline" size="lg" className="!border-canastra-cream !text-canastra-cream hover:!bg-canastra-cream hover:!text-canastra-green-800">
            Onde ficar
          </Button>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#cachoeiras"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-canastra-cream/80 hover:text-canastra-gold-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
