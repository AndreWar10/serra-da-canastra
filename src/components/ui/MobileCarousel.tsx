import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MobileCarouselProps = {
  children: ReactNode;
  /** Classes do contentor com scroll (flex + snap no mobile, grid no sm+). */
  scrollClassName: string;
  /** Rótulo acessível da lista rolável. */
  ariaLabel: string;
};

export function MobileCarousel({
  children,
  scrollClassName,
  ariaLabel,
}: MobileCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = scrollWidth - clientWidth;
    setCanPrev(scrollLeft > 6);
    setCanNext(scrollLeft < max - 6);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  /** Índice do slide cujo centro está mais próximo do centro do viewport (alinhado a snap-center). */
  const indexNearestCenter = (el: HTMLDivElement) => {
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return 0;
    const portCenter = el.getBoundingClientRect().left + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    children.forEach((child, i) => {
      const r = child.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - portCenter);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  };

  /** scrollLeft que centraliza o filho no eixo X (compatível com snap-center no iOS). */
  const scrollLeftToCenterChild = (el: HTMLDivElement, child: HTMLElement) => {
    const cRect = el.getBoundingClientRect();
    const chRect = child.getBoundingClientRect();
    const delta =
      chRect.left + chRect.width / 2 - (cRect.left + cRect.width / 2);
    const max = el.scrollWidth - el.clientWidth;
    return Math.max(0, Math.min(el.scrollLeft + delta, max));
  };

  const scrollByPage = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    const from = indexNearestCenter(el);
    const to = Math.min(Math.max(from + dir, 0), children.length - 1);
    const target = scrollLeftToCenterChild(el, children[to]!);
    // `smooth` + snap-mandatory no Safari costuma parar entre slides; nas setas usamos instantâneo.
    el.scrollTo({ left: Math.round(target), behavior: "auto" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        role="list"
        aria-label={ariaLabel}
        className={scrollClassName}
      >
        {children}
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-0 sm:hidden">
        <button
          type="button"
          aria-label="Itens anteriores"
          aria-hidden={!canPrev}
          tabIndex={canPrev ? 0 : -1}
          onClick={() => scrollByPage(-1)}
          className={`pointer-events-auto ml-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-canastra-green-700/30 bg-canastra-cream/95 text-canastra-green-800 shadow-md backdrop-blur-sm transition-opacity hover:bg-white hover:shadow-lg ${
            canPrev ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Próximos itens"
          aria-hidden={!canNext}
          tabIndex={canNext ? 0 : -1}
          onClick={() => scrollByPage(1)}
          className={`pointer-events-auto mr-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-canastra-green-700/30 bg-canastra-cream/95 text-canastra-green-800 shadow-md backdrop-blur-sm transition-opacity hover:bg-white hover:shadow-lg ${
            canNext ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
