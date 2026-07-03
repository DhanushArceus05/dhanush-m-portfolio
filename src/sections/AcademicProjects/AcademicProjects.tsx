import { motion } from "framer-motion";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { AcademicProjectCard } from "./AcademicProjectCard";
import { ACADEMIC_PROJECTS } from "../../data/academicProjects";
import { staggerContainer } from "../../lib/motion-variants";

export function AcademicProjects() {
  return (
    <section id="academic-projects" className="relative w-full px-6 py-24 sm:py-28 lg:py-32" aria-label="Academic and AI projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Academic &amp; AI Projects"
          subtitle="Applied Machine Learning, Time Series Analysis and Recommendation Systems completed through professional certification and hands-on implementation."
        />

        <motion.div
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {ACADEMIC_PROJECTS.map((project) => (
            <AcademicProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
