import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

/**
 * Embed otimizado: só carrega o iframe quando o componente entra no viewport
 * (e ainda assim só após clique do usuário, evitando que o player do YouTube
 * baixe ~1MB sem necessidade). Inspirado em lite-youtube-embed.
 */
export function YouTubeEmbed({ videoId, title, className = "" }: YouTubeEmbedProps) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "200px" });
  const [activated, setActivated] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      ref={ref}
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-canastra-stone shadow-2xl ${className}`}
    >
      {activated ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          className="group absolute inset-0 flex items-center justify-center cursor-pointer"
          aria-label={`Reproduzir vídeo: ${title}`}
        >
          {inView ? (
            <img
              src={thumbnailUrl}
              alt={title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-canastra-gold-400 text-canastra-stone shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <Play className="h-7 w-7 fill-current sm:h-9 sm:w-9" aria-hidden="true" />
          </div>
          <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-semibold text-white sm:text-base">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
