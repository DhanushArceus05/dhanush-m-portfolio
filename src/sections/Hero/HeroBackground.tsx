import { useMemo } from "react";
import { motion } from "framer-motion";
import { useMouseParallax } from "../../hooks/useMouseParallax";

interface HeroBackgroundProps {
  reducedMotion: boolean;
}

interface Particle {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 12,
    delay: Math.random() * 6,
  }));
}

export function HeroBackground({ reducedMotion }: HeroBackgroundProps) {
  const parallax = useMouseParallax(!reducedMotion);
  const particles = useMemo(() => generateParticles(reducedMotion ? 0 : 28), [reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base backdrop */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, rgba(108,99,255,0.25) 0%, transparent 60%), radial-gradient(50% 45% at 80% 30%, rgba(0,245,255,0.15) 0%, transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(108,99,255,0.18) 0%, transparent 65%)",
        }}
        animate={
          reducedMotion
            ? undefined
            : {
                backgroundPosition: ["0% 0%", "5% 5%", "0% 0%"],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating glass blobs, parallax on mouse move */}
      <motion.div
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.35), transparent 70%)" }}
        animate={
          reducedMotion
            ? undefined
            : {
                x: parallax.x * 24,
                y: [0, 20, 0] as unknown as number,
              }
        }
        transition={{
          x: { type: "spring", stiffness: 40, damping: 20 },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[380px] w-[380px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,245,255,0.22), transparent 70%)" }}
        animate={
          reducedMotion
            ? undefined
            : {
                x: parallax.x * -18,
                y: [0, -24, 0] as unknown as number,
              }
        }
        transition={{
          x: { type: "spring", stiffness: 40, damping: 20 },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.2), transparent 70%)" }}
        animate={
          reducedMotion
            ? undefined
            : {
                y: parallax.y * 14,
              }
        }
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Drifting particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/40"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Vignette for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
    </div>
  );
}
