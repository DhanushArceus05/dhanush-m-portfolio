import { SectionHeading } from "../../components/ui/SectionHeading";
import { TimelineItem } from "./TimelineItem";
import { EXPERIENCE } from "../../data/experience";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="relative w-full px-6 py-24 sm:py-28 lg:py-32" aria-label="Experience">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Experience"
          subtitle="Hands-on engineering work and structured AI upskilling, side by side."
        />

        <div className="mt-14">
          {EXPERIENCE.map((entry, index) => (
            <TimelineItem
              key={entry.title}
              entry={entry}
              isLast={index === EXPERIENCE.length - 1}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
