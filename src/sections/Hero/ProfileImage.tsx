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

  const imageSrc = size === "hero" ? "/images/dhanush-home.png" : "/images/dhanush-about.png";
  const isHero = size === "hero";

  const containerRef = useRef<HTMLDivElement | null>(null);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 120, damping: 16, mass: 0.6 });
  const rotateY = useSpring(rawRotateY, { stiffness: 120, damping: 16, mass: 0.6 });

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotXSpring = useSpring(spotX, { stiffness: 150, damping: 20 });
  const spotYSpring = useSpring(spotY, { stiffness: 150, damping: 20 });

  const spotlight = useMotionTemplate`radial-gradient(140px circle at ${spotXSpring}% ${spotYSpring}%, rgba(255,255,255,0.15), transparent 70%)`;

  const enableTilt = isHero && !reducedMotion;

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
      {/* Soft AI aura */}
      <motion.div
        className="absolute -inset-5 rounded-[3.25rem] blur-2xl"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 48%, rgba(0,245,255,0.22) 0%, rgba(108,99,255,0.16) 45%, transparent 76%)",
        }}
        animate={
          reducedMotion
            ? { opacity: isHero ? 0.32 : 0.22 }
            : {
                opacity: isHero ? [0.28, 0.48, 0.28] : [0.18, 0.28, 0.18],
                scale: isHero ? [1, 1.05, 1] : [1, 1.025, 1],
              }
        }
        transition={{ duration: isHero ? 6 : 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Outer energy ring */}
      <motion.div
        className="absolute -inset-[7px] rounded-[3rem]"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,245,255,0.42), rgba(108,99,255,0.18), rgba(255,255,255,0.12), rgba(0,245,255,0.35))",
          filter: "blur(10px)",
        }}
        animate={
          reducedMotion
            ? { opacity: isHero ? 0.28 : 0.18 }
            : {
                opacity: isHero ? [0.28, 0.55, 0.28] : [0.16, 0.3, 0.16],
              }
        }
        transition={{ duration: isHero ? 5 : 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Premium micro-orbs */}
      {!reducedMotion && (
        <>
          {(isHero
            ? [
                "left-[-10px] top-[18%]",
                "right-[-8px] top-[26%]",
                "left-[10%] bottom-[15%]",
                "right-[12%] bottom-[9%]",
                "left-[48%] top-[-8px]",
                "right-[2px] top-[62%]",
              ]
            : ["left-[-6px] top-[24%]", "right-[-5px] bottom-[20%]", "left-[48%] top-[-6px]"]
          ).map((position, index) => (
            <motion.span
              key={position}
              className={`absolute ${position} z-10 rounded-full bg-cyan-200/70 shadow-[0_0_14px_rgba(0,245,255,0.65)] ${
                isHero ? "h-2 w-2" : "h-1.5 w-1.5"
              }`}
              animate={{
                y: [0, -12, 0],
                opacity: [0.25, 0.95, 0.25],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: isHero ? 4 + index * 0.35 : 5 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
              aria-hidden="true"
            />
          ))}
        </>
      )}

      {/* Breathing + tilt wrapper */}
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[2.75rem]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={
          reducedMotion
            ? undefined
            : {
                y: isHero ? [0, -8, 0] : [0, -4, 0],
                scale: isHero ? [1, 1.012, 1] : [1, 1.006, 1],
              }
        }
        transition={{ duration: isHero ? 7 : 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute -inset-[3px]"
          style={{
            background: "linear-gradient(135deg, #6C63FF, #00F5FF, #6C63FF)",
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  opacity: [0.9, 1, 0.9],
                }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="absolute inset-[3px] overflow-hidden rounded-[2.6rem] border border-white/10 bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
          <img
            src={imageSrc}
            srcSet={`${imageSrc} 900w`}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 310px, 240px"
            alt="Dhanush M, AI Engineer and Full Stack Developer"
            width={900}
            height={2001}
            className="h-full w-full object-cover"
            style={{ objectPosition: "50% 41%" }}
            loading={isHero ? "eager" : "lazy"}
            fetchPriority={isHero ? "high" : "auto"}
            decoding="async"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-white/[0.04]" />

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