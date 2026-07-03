import { motion } from "framer-motion";
import { GlassCard } from "../../components/ui/GlassCard";
import { SkillChip } from "./SkillChip";
import type { SkillCategory } from "../../data/skills";
import { fadeUp, staggerContainer } from "../../lib/motion-variants";

interface SkillCategoryCardProps {
  category: SkillCategory;
  className?: string;
}

export function SkillCategoryCard({ category, className = "" }: SkillCategoryCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      className={className}
    >
      <GlassCard className="h-full">
        <div className="mb-5 flex items-center gap-3">
          <motion.span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
            whileHover={{ scale: 1.1, rotate: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </motion.span>
          <h3 className="font-display text-lg font-semibold text-white">{category.title}</h3>
        </div>

        <motion.div
          className="flex flex-wrap gap-2.5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {category.skills.map((skill) => (
            <motion.div key={skill.name} variants={fadeUp}>
              <SkillChip skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}
