import { SectionHeading } from "../../components/ui/SectionHeading";
import { SkillCategoryCard } from "./SkillCategoryCard";
import { SKILL_CATEGORIES } from "../../data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative w-full px-6 py-24 sm:py-28 lg:py-32" aria-label="Technical skills">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Technical Expertise"
          subtitle="A toolkit spanning full-stack web engineering, applied AI, REST APIs, and RAG pipelines."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              className={category.title === "Artificial Intelligence" ? "sm:col-span-2 lg:col-span-2" : ""}
            />
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-5 text-xs text-muted-foreground">
          <LegendDot colorClass="bg-secondary" label="Proficient" />
          <LegendDot colorClass="bg-primary" label="Comfortable" />
          <LegendDot colorClass="bg-muted-foreground" label="Familiar" />
        </p>
      </div>
    </section>
  );
}

function LegendDot({ colorClass, label }: { colorClass: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`h-1.5 w-1.5 rounded-full ${colorClass}`} aria-hidden="true" />
      {label}
    </span>
  );
}
