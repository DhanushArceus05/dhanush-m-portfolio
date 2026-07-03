import { motion } from "framer-motion";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ROADMAP } from "../../data/timeline";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { fadeUp } from "../../lib/motion-variants";

export function Timeline() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="roadmap" className="relative w-full px-6 py-24 sm:py-28 lg:py-32" aria-label="Project roadmap">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Project Timeline" subtitle="How the work has progressed, project by project." />

        <div className="relative mt-16">
          {/* Central connecting line -- glow trail + crisp core, both drawn on scroll */}
          <div className="absolute bottom-0 left-5 top-0 w-px sm:left-1/2 sm:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 w-[4px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/50 via-secondary/25 to-transparent blur-[3px]"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="h-full w-full bg-gradient-to-b from-primary to-secondary/40"
            />
          </div>

          <div className="space-y-10">
            {ROADMAP.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              const isCurrent = milestone.label === "Librix";

              return (
                <motion.div
                  key={milestone.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  className={`relative flex items-center gap-5 sm:gap-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 sm:pl-0 ${isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:text-left"}`}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`inline-block rounded-2xl border bg-white/[0.05] px-4 py-3 backdrop-blur-md transition-colors duration-300 ${
                        isCurrent ? "border-primary/40" : "border-white/10"
                      }`}
                    >
                      <p
                        className={`font-display text-sm font-semibold sm:text-base ${
                          milestone.comingSoon ? "text-secondary" : "text-white"
                        }`}
                      >
                        {milestone.label}
                        {isCurrent ? (
                          <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                            Latest
                          </span>
                        ) : null}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{milestone.tag}</p>
                    </motion.div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-5 z-10 -translate-x-1/2 sm:relative sm:left-auto sm:translate-x-0">
                    {isCurrent && !reducedMotion ? (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary/40"
                        animate={{ scale: [1, 1.9, 1.9], opacity: [0.55, 0, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      animate={
                        milestone.comingSoon && !reducedMotion
                          ? {
                              boxShadow: [
                                "0 0 0px 0px rgba(0,245,255,0.4)",
                                "0 0 14px 3px rgba(0,245,255,0.4)",
                                "0 0 0px 0px rgba(0,245,255,0.4)",
                              ],
                            }
                          : undefined
                      }
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border bg-surface ${
                        milestone.comingSoon
                          ? "border-secondary/50 text-secondary"
                          : isCurrent
                            ? "border-primary/60 text-primary"
                            : "border-primary/40 text-primary"
                      }`}
                      transition={{
                        scale: { type: "spring", stiffness: 280, damping: 18 },
                        opacity: { duration: 0.4 },
                        boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </div>

                  <div className="hidden flex-1 sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
