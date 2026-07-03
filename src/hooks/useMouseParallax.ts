import { useEffect, useState } from "react";

interface Position {
  x: number; // -1 to 1
  y: number; // -1 to 1
}

/**
 * Tracks pointer position normalized to [-1, 1] relative to viewport center.
 * Returns {x: 0, y: 0} on touch devices or when reduced motion is preferred,
 * so callers don't need extra branching.
 */
export function useMouseParallax(enabled: boolean): Position {
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    function handleMove(e: PointerEvent) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPos({ x, y });
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [enabled]);

  return pos;
}
