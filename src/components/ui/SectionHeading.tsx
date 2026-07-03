import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion-variants";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      className={`flex max-w-2xl flex-col ${alignment}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
    >
      {eyebrow ? (
        <span className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
