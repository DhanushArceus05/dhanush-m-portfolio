import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  words: readonly string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  reducedMotion?: boolean;
}

/**
 * Cycles through `words`, typing and deleting each one in a loop.
 * When `reducedMotion` is true, it skips the animation and simply
 * cycles the full word every `pauseMs` with a plain fade (handled by caller).
 */
export function useTypewriter({
  words,
  typingSpeedMs = 80,
  deletingSpeedMs = 40,
  pauseMs = 1600,
  reducedMotion = false,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (words.length === 0) return;

    if (reducedMotion) {
      setText(words[wordIndex]);
      const id = setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
      }, pauseMs + 800);
      return () => clearTimeout(id);
    }

    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const id = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeedMs);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setPhase("pausing"), pauseMs);
      return () => clearTimeout(id);
    }

    if (phase === "pausing") {
      const id = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(id);
    }

    // deleting
    if (text.length > 0) {
      const id = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeedMs);
      return () => clearTimeout(id);
    }
    setWordIndex((i) => (i + 1) % words.length);
    setPhase("typing");
  }, [text, phase, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs, reducedMotion]);

  return text;
}
