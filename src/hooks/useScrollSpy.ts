import { useEffect, useState } from "react";

/**
 * Observa quais sections (por id) estão visíveis e devolve o id da seção
 * mais relevante no momento. Usa IntersectionObserver para evitar listeners
 * de scroll caros.
 */
export function useScrollSpy(sectionIds: string[], offset = 80): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
