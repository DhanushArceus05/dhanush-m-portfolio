import { motion } from "framer-motion";
import type { ExperienceEntry } from "../../data/experience";
import { GlassCard } from "../../components/ui/GlassCard";

interface TimelineItemProps {
  entry: ExperienceEntry;
  isLast: boolean;
  reducedMotion: boolean;
}

export function TimelineItem({ entry, isLast, reducedMotion }: TimelineItemProps) {
  const Icon = entry.icon;

  return (
    <div className="relative flex gap-6 sm:gap-8">
      {/* Rail: milestone dot + connecting segment */}
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-surface text-primary shadow-[0_0_16px_-2px_rgba(108,99,255,0.55)]"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </motion.span>

        {!isLast ? (
          <div className="relative mt-1 w-px flex-1">
            {/* Soft pulsing glow behind the line */}
            <motion.span
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={
                reducedMotion ? { scaleY: 1, opacity: 0.5 } : { scaleY: 1, opacity: [0.35, 0.7, 0.35] }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={
                reducedMotion
                  ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
                  : {
                      scaleY: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                    }
              }
              style={{ transformOrigin: "top" }}
              className="absolute inset-y-0 left-1/2 w-[5px] -translate-x-1/2 rounded-full bg-primary/50 blur-[3px]"
              aria-hidden="true"
            />
            {/* Crisp core line */}
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-primary/70 to-transparent"
            />
          </div>
        ) : null}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 pb-12"
      >
        <GlassCard hoverLift>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{entry.period}</span>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
            {entry.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{entry.organization}</p>
          <ul className="mt-5 space-y-4">
            {entry.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </div>
  );
}
