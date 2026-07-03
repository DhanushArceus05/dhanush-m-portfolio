import { type ReactNode, useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export function GlassCard({ children, className = "", hoverLift = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glowX = useSpring(mx, { stiffness: 150, damping: 20 });
  const glowY = useSpring(my, { stiffness: 150, damping: 20 });
  const glowBackground = useMotionTemplate`radial-gradient(180px circle at ${glowX}% ${glowY}%, rgba(108,99,255,0.14), transparent 70%)`;

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!hoverLift || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={`group/card relative rounded-card border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-500 hover:border-primary/30 sm:p-8 ${
        hoverLift ? "hover:shadow-[0_0_36px_-10px_rgba(108,99,255,0.55)]" : "hover:border-white/20"
      } ${className}`}
      whileHover={hoverLift ? { y: -5 } : undefined}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Cursor-reactive glow (only on cards that lift/respond) */}
      {hoverLift ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-card opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          style={{ background: glowBackground }}
        />
      ) : null}
      {/* Subtle top glass reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden rounded-t-card bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      {children}
    </motion.div>
  );
}
