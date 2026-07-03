import { SectionHeading } from "../../components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

export function Projects() {
  const flagship = PROJECTS.find((p) => p.flagship)!;
  const rest = PROJECTS.filter((p) => !p.flagship);

  return (
    <section id="projects" className="relative w-full px-6 py-24 sm:py-28 lg:py-32" aria-label="Featured projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="Flagship Projects"
          subtitle="Production-ready applications demonstrating expertise in Full Stack Development, Generative AI, Healthcare Technology, and Modern Web Engineering."
        />

        <div className="mt-14 space-y-8">
          <ProjectCard project={flagship} />
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
