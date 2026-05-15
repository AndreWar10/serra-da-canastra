import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group bg-white border border-canastra-earth-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

type CardImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function CardImage({ src, alt, className = "" }: CardImageProps) {
  return (
    <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${className}`}
      />
    </div>
  );
}

type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

export function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={`p-5 sm:p-6 ${className}`}>{children}</div>;
}
