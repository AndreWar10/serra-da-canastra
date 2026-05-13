import { useState, type FormEvent } from "react";
import { Instagram, Facebook, Youtube, Mail, Mountain, Send, Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // Sem backend: apenas confirma recebimento. No futuro, integrar Formspree/EmailJS.
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="bg-canastra-green-900 text-canastra-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-canastra-gold-300" aria-hidden="true" />
              <span className="font-display text-2xl tracking-wider">
                Serra da Canastra
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-canastra-cream/80">
              Natureza, cultura e sabores típicos no coração de Minas Gerais.
              Descubra cachoeiras, trilhas e a tradição do legítimo Queijo
              Canastra.
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl uppercase tracking-wider text-canastra-gold-300">
              Inscreva-se
            </h3>
            <p className="text-sm text-canastra-cream/80">
              Receba dicas de roteiros, eventos e novidades direto no seu e-mail.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 sm:flex-row"
              aria-label="Formulário de newsletter"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Seu e-mail
              </label>
              <div className="relative flex-1">
                <Mail
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-canastra-green-700"
                  aria-hidden="true"
                />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full rounded-full border border-canastra-green-700 bg-canastra-cream py-2.5 pl-9 pr-4 text-sm text-canastra-stone placeholder:text-canastra-green-700/60 focus:border-canastra-gold-400 focus:outline-none focus:ring-2 focus:ring-canastra-gold-300/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-canastra-gold-400 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-canastra-stone transition-colors hover:bg-canastra-gold-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-canastra-gold-300"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" /> Pronto
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" /> Inscrever
                  </>
                )}
              </button>
            </form>
            {submitted ? (
              <p className="text-sm text-canastra-gold-300" role="status">
                Obrigado! Em breve enviaremos novidades para o seu e-mail.
              </p>
            ) : null}
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl uppercase tracking-wider text-canastra-gold-300">
              Siga nossas redes
            </h3>
            <p className="text-sm text-canastra-cream/80">
              Acompanhe os bastidores da serra e dicas em primeira mão.
            </p>
            <ul className="flex flex-wrap gap-3">
              <li>
                <a
                  href="https://www.instagram.com/viajantesdacanastra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-canastra-green-700 bg-canastra-green-800 px-4 py-2 text-sm transition-colors hover:border-canastra-gold-400 hover:text-canastra-gold-300"
                  aria-label="Instagram @viajantesdacanastra"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  @viajantesdacanastra
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-canastra-green-700 bg-canastra-green-800 transition-colors hover:border-canastra-gold-400 hover:text-canastra-gold-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-canastra-green-700 bg-canastra-green-800 transition-colors hover:border-canastra-gold-400 hover:text-canastra-gold-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-canastra-green-800 pt-6 text-center text-xs text-canastra-cream/60">
          <p>
            &copy; {new Date().getFullYear()} Serra da Canastra. Trabalho
            acadêmico — fotos e textos meramente ilustrativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
