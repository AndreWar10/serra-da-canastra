import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { menuItems } from "../../data/menu";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(menuItems.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navBg = scrolled || open
    ? "bg-canastra-green-900/95 backdrop-blur-md shadow-lg"
    : "bg-gradient-to-b from-black/40 to-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-2 text-canastra-cream"
          aria-label="Serra da Canastra — voltar ao topo"
        >
          <Mountain className="h-7 w-7 text-canastra-gold-300" aria-hidden="true" />
          <span className="font-display text-xl tracking-wider sm:text-2xl">
            Serra da Canastra
          </span>
        </a>

        <nav className="hidden lg:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-canastra-gold-300"
                        : "text-canastra-cream hover:text-canastra-gold-300"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-canastra-gold-300"
                        aria-hidden="true"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-canastra-cream lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav
          className="border-t border-canastra-green-700 bg-canastra-green-900/95 px-4 py-4"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-canastra-green-700 text-canastra-gold-300"
                        : "text-canastra-cream hover:bg-canastra-green-800"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
