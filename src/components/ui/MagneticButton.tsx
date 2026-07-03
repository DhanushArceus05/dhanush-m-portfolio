import { type ReactNode, type PointerEvent as ReactPointerEvent } from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  external?: boolean;
  download?: boolean;
  strength?: number;
}

export function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  external = false,
  download = false,
  strength = 10,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const { ref, x, y, handlePointerMove, handlePointerLeave } = useMagnetic({
    strength,
    enabled: !reducedMotion && !disabled,
  });

  const sharedProps = {
    className,
    style: { x, y },
    onPointerMove: (e: ReactPointerEvent<HTMLElement>) => handlePointerMove(e),
    onPointerLeave: handlePointerLeave,
    whileHover: disabled || reducedMotion ? undefined : { scale: 1.035 },
    whileTap: disabled || reducedMotion ? undefined : { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 26 } as const,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download}
        {...sharedProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...sharedProps}
    >
      {children}
    </motion.button>
  );
}
