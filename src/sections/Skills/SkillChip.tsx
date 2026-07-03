import { motion } from "framer-motion";
import type { Skill } from "../../data/skills";

const LEVEL_COLOR: Record<Skill["level"], string> = {
  Proficient: "bg-secondary",
  Comfortable: "bg-primary",
  Familiar: "bg-muted-foreground",
};

interface SkillChipProps {
  skill: Skill;
}

export function SkillChip({ skill }: SkillChipProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.045 }}
      transition={{ type: "spring", stiffness: 340, damping: 22 }}
      className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08] hover:shadow-[0_8px_24px_-6px_rgba(108,99,255,0.5)]"
    >
      <motion.span
        className="flex shrink-0"
        whileHover={{ rotate: -8, scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <Icon className="h-4 w-4 text-secondary" aria-hidden="true" />
      </motion.span>
      <span className="text-sm text-white/90">{skill.name}</span>
      <span
        className={`ml-auto h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-500 group-hover:scale-125 ${LEVEL_COLOR[skill.level]}`}
        title={skill.level}
        aria-label={skill.level}
      />
    </motion.div>
  );
}
