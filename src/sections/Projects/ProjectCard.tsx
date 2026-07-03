import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import type { Project } from "../../data/projects";
import { ProjectPreview } from "./ProjectPreview";
import { MagneticButton } from "../../components/ui/MagneticButton";
import { fadeUp, staggerContainer } from "../../lib/motion-variants";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  if (project.flagship) {
    return <FlagshipCard project={project} />;
  }

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="group relative overflow-hidden rounded-card border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_44px_-14px_rgba(108,99,255,0.5)] sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl">
          <ProjectPreview project={project} />
        </div>

        <ProjectBody project={project} />
      </div>
    </motion.article>
  );
}

function FlagshipCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="relative rounded-[28px] p-[2px]"
    >
      {/* Animated gradient border -- the flagship's signature treatment.
          Flowing background-position (not element rotation) keeps this
          feeling premium/ambient rather than a spinning effect. */}
      <motion.div
        className="absolute inset-0 rounded-[28px] opacity-90"
        style={{
          background: "linear-gradient(115deg, #6C63FF, #00F5FF, #6C63FF, #00F5FF)",
          backgroundSize: "300% 300%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="group relative rounded-[26px] bg-surface/95 p-7 backdrop-blur-md sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-7 top-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:inset-x-10 sm:top-10"
        />
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Flagship Project
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <ProjectPreview project={project} tall />
          </div>
          <ProjectBody project={project} large />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectBody({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">{project.category}</span>
      <h3
        className={`mt-2 font-display font-bold tracking-tight text-white ${
          large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        }`}
      >
        {project.name}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{project.description}</p>

      <div className="mt-4 space-y-2 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-sm leading-relaxed">
        <p className="text-white/75">
          <span className="font-semibold text-white/90">Challenge: </span>
          {project.challenge}
        </p>
        <p className="text-white/75">
          <span className="font-semibold text-white/90">Solution: </span>
          {project.solution}
        </p>
      </div>

      <motion.div
        className="mt-5 flex flex-wrap gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
      >
        {project.features.map((feature) => (
          <motion.span
            key={feature}
            variants={fadeUp}
            whileHover={{ y: -2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary"
          >
            {feature}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="mt-4 flex flex-wrap gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
      >
        {project.techStack.map((tech) => (
          <motion.span
            key={tech}
            variants={fadeUp}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <div className="mt-6 flex flex-wrap gap-3">
        <MagneticButton
          href={project.liveUrl}
          external
          strength={7}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-background transition-shadow duration-500 hover:shadow-[0_0_28px_2px_rgba(108,99,255,0.5)]"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live Demo
        </MagneticButton>
        <MagneticButton
          href={project.githubUrl}
          external
          strength={7}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-500 hover:border-white/30 hover:bg-white/10"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </MagneticButton>
      </div>
    </div>
  );
}
