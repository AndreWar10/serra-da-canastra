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
      <div className="mx-auto flex min-w-0 max-w-7xl flex-nowrap items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:gap-3 lg:px-4 xl:gap-4 xl:px-8">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-1.5 text-canastra-cream sm:gap-2"
          aria-label="Serra da Canastra — voltar ao topo"
        >
          <Mountain
            className="h-6 w-6 shrink-0 text-canastra-gold-300 xl:h-7 xl:w-7"
            aria-hidden="true"
          />
          <span className="font-display text-lg tracking-wider sm:text-xl xl:text-2xl">
            Serra da Canastra
          </span>
        </a>

        <nav
          className="hidden min-w-0 flex-1 lg:block"
          aria-label="Navegação principal"
        >
          <ul className="flex flex-nowrap items-center justify-end gap-0">
            {menuItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={item.href}
                    className={`relative whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold uppercase tracking-wide transition-colors xl:px-3 xl:text-sm xl:tracking-wider ${
                      isActive
                        ? "text-canastra-gold-300"
                        : "text-canastra-cream hover:text-canastra-gold-300"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-canastra-gold-300 xl:inset-x-3"
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
          className="shrink-0 rounded-full p-2 text-canastra-cream lg:hidden"
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
