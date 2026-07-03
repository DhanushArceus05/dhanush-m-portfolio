import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface ProjectCarouselProps {
  images: string[];
  projectName: string;
  eager?: boolean;
}

export function ProjectCarousel({ images, projectName, eager = false }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const reducedMotion = useReducedMotion();
  const hasMultiple = images.length > 1;

  function goTo(next: number) {
    setIndex((next + images.length) % images.length);
  }

  return (
    <div
      className="group/carousel relative h-full w-full select-none overflow-hidden"
      role="region"
      aria-label={`${projectName} screenshots`}
    >
      {/* Loading skeleton -- shimmer instead of a blank/broken flash */}
      {!loaded[index] ? (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/[0.03] via-white/[0.06] to-white/[0.03]" />
      ) : null}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={images[index]}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <picture>
            <source srcSet={`/images/projects/${images[index]}.webp`} type="image/webp" />
            <img
              src={`/images/projects/${images[index]}.png`}
              alt={`${projectName} -- screenshot ${index + 1} of ${images.length}`}
              className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover/carousel:scale-[1.035]"
              loading={eager && index === 0 ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => setLoaded((prev) => ({ ...prev, [index]: true }))}
            />
          </picture>
        </motion.div>
      </AnimatePresence>

      {hasMultiple ? (
        <>
          <motion.button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous screenshot"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="absolute left-1.5 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/50 text-white opacity-60 backdrop-blur-md transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 sm:left-2 sm:h-8 sm:w-8 sm:opacity-0 sm:group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next screenshot"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="absolute right-1.5 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/50 text-white opacity-60 backdrop-blur-md transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 sm:right-2 sm:h-8 sm:w-8 sm:opacity-0 sm:group-hover/carousel:opacity-100"
          >
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </motion.button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
