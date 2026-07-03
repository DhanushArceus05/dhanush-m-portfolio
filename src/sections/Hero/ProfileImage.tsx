import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

interface ProfileImageProps {
  reducedMotion: boolean;
  size?: "hero" | "about";
}

export function ProfileImage({ reducedMotion, size = "hero" }: ProfileImageProps) {
  const dimensions =
    size === "hero"
      ? "h-[210px] w-[180px] sm:h-[360px] sm:w-[310px] lg:h-[440px] lg:w-[380px]"
      : "h-[220px] w-[190px]";

  const containerRef = useRef<HTMLDivElement | null>(null);

  // 3D tilt -- max 3deg, spring-smoothed so it reads as fluid rather than snappy.
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 120, damping: 16, mass: 0.6 });
  const rotateY = useSpring(rawRotateY, { stiffness: 120, damping: 16, mass: 0.6 });

  // Cursor-reactive spotlight position (percentage within the frame).
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotXSpring = useSpring(spotX, { stiffness: 150, damping: 20 });
  const spotYSpring = useSpring(spotY, { stiffness: 150, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(120px circle at ${spotXSpring}% ${spotYSpring}%, rgba(255,255,255,0.16), transparent 70%)`;

  const enableTilt = size === "hero" && !reducedMotion;

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    spotX.set(relX * 100);
    spotY.set(relY * 100);

    if (enableTilt) {
      const MAX_TILT = 3;
      rawRotateY.set((relX - 0.5) * 2 * MAX_TILT);
      rawRotateX.set(-(relY - 0.5) * 2 * MAX_TILT);
    }
  }

  function handlePointerLeave() {
    spotX.set(50);
    spotY.set(50);
    rawRotateX.set(0);
    rawRotateY.set(0);
  }

  return (
    <motion.div
      className={`relative mx-auto ${dimensions}`}
      style={{ perspective: 900 }}
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      ref={containerRef}
    >
      {/* Layered ambient glow -- two blurred blobs breathing at different speeds */}
      <motion.div
        className="absolute -inset-4 rounded-[3rem] blur-3xl"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 40%, rgba(108,99,255,0.4) 0%, rgba(0,245,255,0.16) 55%, transparent 75%)",
        }}
        animate={reducedMotion ? { opacity: 0.4 } : { opacity: [0.32, 0.48, 0.32] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -inset-8 rounded-[3.5rem] blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 55% 60%, rgba(0,245,255,0.14) 0%, transparent 70%)" }}
        animate={reducedMotion ? { opacity: 0.25 } : { opacity: [0.18, 0.3, 0.18], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        aria-hidden="true"
      />

      {/* Breathing + tilt wrapper */}
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[2.75rem]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -8, 0],
                scale: [1, 1.012, 1],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Static gradient ring -- no rotation */}
        <div
          className="absolute -inset-[3px]"
          style={{
            background: "linear-gradient(135deg, #6C63FF, #00F5FF, #6C63FF)",
          }}
          aria-hidden="true"
        />

        {/* Glass frame + image */}
        <div className="absolute inset-[3px] overflow-hidden rounded-[2.6rem] border border-white/10 bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
          <img
            src="/images/dhanush-profile.webp"
            srcSet="/images/dhanush-profile.webp 900w"
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 310px, 240px"
            alt="Dhanush M, AI Engineer and Full Stack Developer"
            width={900}
            height={2001}
            className="h-full w-full object-cover"
            style={{ objectPosition: "50% 41%" }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          {/* Subtle glass sheen for cohesion with the rest of the UI */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-white/[0.04]" />
          {/* Cursor-reactive spotlight */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ background: spotlight }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[2.6rem] ring-1 ring-inset ring-white/10" />
        </div>
      </motion.div>
    </motion.div>
  );
}
