import { useEffect, useRef, useState } from "react";

interface ScrollState {
  isScrolled: boolean;
  isHidden: boolean;
}

export function useScrollState(hideThreshold = 120): ScrollState {
  const [state, setState] = useState<ScrollState>({ isScrolled: false, isHidden: false });
  const lastY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const pastThreshold = y > hideThreshold;

      setState({
        isScrolled: y > 24,
        isHidden: goingDown && pastThreshold,
      });

      lastY.current = y;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideThreshold]);

  return state;
}
