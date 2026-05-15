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

  const scrollByPage = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.82, 340);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
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
