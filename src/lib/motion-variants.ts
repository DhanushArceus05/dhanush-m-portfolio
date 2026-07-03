import type { Variants } from "framer-motion";

// Premium, expo-out easing curve (the signature "Stripe/Linear" feel) --
// updating this one constant elevates every scroll-reveal and hover
// transition across the whole site since all variants below share it.
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

// Shared hover/tap spring for interactive elements (buttons, chips, cards) --
// a soft spring reads as more "expensive" than a linear/ease tween.
export const hoverSpring = { type: "spring", stiffness: 380, damping: 28, mass: 0.6 } as const;
