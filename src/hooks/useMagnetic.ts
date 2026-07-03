import { useRef, type PointerEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface UseMagneticOptions {
  strength?: number;
  enabled?: boolean;
}

export function useMagnetic({ strength = 14, enabled = true }: UseMagneticOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, x: springX, y: springY, handlePointerMove, handlePointerLeave };
}
