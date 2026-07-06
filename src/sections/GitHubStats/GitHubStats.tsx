import { motion } from "framer-motion";
import { Github, ArrowUpRight, Sparkles } from "lucide-react";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { MagneticButton } from "../../components/ui/MagneticButton";
import { GlassCard } from "../../components/ui/GlassCard";
import { StatImage } from "./StatImage";
import { LINKS } from "../../data/constants";
import { fadeUp } from "../../lib/motion-variants";

const USERNAME = "DhanushArceus05";

export function GitHubStats() {
  return (
    <section id="github" className="relative w-full px-6 py-24 sm:py-28 lg:py-32" aria-label="GitHub activity">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Explore my open-source work, contribution history, and software engineering journey."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2"
        >
          <GlassCard className="flex flex-col justify-center gap-4 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <Github className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Repository Activity</p>
            </div>
            <p className="text-3xl font-bold text-white sm:text-4xl">12+</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Production-ready AI, MERN, and data science projects built with modern technologies.
            </p>
          </GlassCard>

          <GlassCard className="flex flex-col justify-center gap-4 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Core Focus</p>
            </div>
            <p className="text-3xl font-bold text-white sm:text-4xl">AI + MERN</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Building Generative AI apps, full-stack platforms, and production-ready portfolio projects.
            </p>
          </GlassCard>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-5"
        >
          <GlassCard className="overflow-x-auto">
            <StatImage
              src={`https://ghchart.rshah.org/6C63FF/${USERNAME}`}
              alt="Dhanush's GitHub contribution graph"
              className="min-w-[600px]"
            />
          </GlassCard>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mt-8 flex justify-center"
        >
          <MagneticButton
            href={LINKS.github}
            external
            strength={8}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-500 hover:border-primary/40 hover:bg-white/10"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            View GitHub Profile
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </MagneticButton>
       </motion.div>
      </div>
    </section>
  );
}