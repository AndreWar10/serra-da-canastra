import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonOwnProps<E extends ElementType> = {
  as?: E;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-canastra-green-600 text-white hover:bg-canastra-green-700 active:bg-canastra-green-800 shadow-lg shadow-canastra-green-900/20",
  secondary:
    "bg-canastra-gold-400 text-canastra-stone hover:bg-canastra-gold-500 active:bg-canastra-gold-600 shadow-lg shadow-canastra-gold-700/20",
  ghost:
    "bg-transparent text-canastra-green-700 hover:bg-canastra-green-100",
  outline:
    "border-2 border-canastra-green-600 text-canastra-green-700 hover:bg-canastra-green-600 hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

export function Button<E extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonProps<E>) {
  const Component = (as ?? "button") as ElementType;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-canastra-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canastra-cream disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <Component
      className={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
