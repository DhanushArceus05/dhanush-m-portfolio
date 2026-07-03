import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import type { AcademicProject } from "../../data/academicProjects";
import { GlassCard } from "../../components/ui/GlassCard";
import { fadeUp } from "../../lib/motion-variants";

interface AcademicProjectCardProps {
  project: AcademicProject;
}

export function AcademicProjectCard({ project }: AcademicProjectCardProps) {
  return (
    <motion.div variants={fadeUp} whileHover={{ scale: 1.012 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
      <GlassCard className="h-full">
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`relative inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
              project.comingSoon
                ? "border border-secondary/30 bg-secondary/10 text-secondary shadow-[0_0_16px_-4px_rgba(0,245,255,0.6)]"
                : "border border-white/10 bg-white/5 text-muted-foreground"
            }`}
          >
            {project.comingSoon ? (
              <motion.span
                animate={{ opacity: [1, 0.35, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-1.5 w-1.5 rounded-full bg-secondary"
                aria-hidden="true"
              />
            ) : (
              <GraduationCap className="h-3 w-3" aria-hidden="true" />
            )}
            {project.category}
          </span>
          {project.comingSoon ? (
            <motion.span
              animate={{ rotate: [0, 12, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-4 w-4 text-secondary/70" aria-hidden="true" />
            </motion.span>
          ) : null}
        </div>

        <h3 className="font-display text-base font-semibold text-white sm:text-lg">{project.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-white/60 transition-colors duration-300 hover:border-white/25 hover:text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
