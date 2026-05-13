import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export function SectionTitle({
  eyebrow,
  children,
  align = "left",
  variant = "dark",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const colorClass =
    variant === "light"
      ? "text-canastra-cream"
      : "text-canastra-green-800";
  const eyebrowColorClass =
    variant === "light"
      ? "text-canastra-gold-300"
      : "text-canastra-green-600";

  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {eyebrow ? (
        <span
          className={`text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold ${eyebrowColorClass}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-tight ${colorClass}`}
      >
        {children}
      </h2>
      <span
        className={`block h-1 w-16 mt-2 rounded-full ${
          variant === "light" ? "bg-canastra-gold-300" : "bg-canastra-gold-400"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
