import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";

interface StatImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function StatImage({ src, alt, className = "" }: StatImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");

  return (
    <div className={`relative w-full ${className}`}>
      <AnimatePresence mode="wait">
        {status === "failed" ? (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center"
          >
            <Github className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
            <p className="text-xs text-muted-foreground">Live stats couldn&apos;t load -- view the profile directly.</p>
          </motion.div>
        ) : (
          <motion.div key="image" className="relative">
            {status === "loading" ? (
              <div className="absolute inset-0 min-h-[160px] animate-pulse rounded-xl bg-gradient-to-br from-white/[0.03] via-white/[0.06] to-white/[0.03]" />
            ) : null}
            {/* Image stays invisible until it loads successfully -- a native
                broken-image icon can never appear on screen. */}
            <motion.img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              onLoad={() => setStatus("loaded")}
              onError={() => setStatus("failed")}
              initial={{ opacity: 0 }}
              animate={{ opacity: status === "loaded" ? 1 : 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
