import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { MagneticButton } from "../../components/ui/MagneticButton";
import { GlassCard } from "../../components/ui/GlassCard";
import { StatImage } from "./StatImage";
import { LINKS } from "../../data/constants";
import { fadeUp } from "../../lib/motion-variants";

const USERNAME = "DhanushArceus05";
const THEME_PARAMS =
  "hide_border=true&bg_color=00000000&title_color=6C63FF&text_color=94A3B8&icon_color=00F5FF";

export function GitHubStats() {
  return (
    <section id="github" className="relative w-full px-6 py-24 sm:py-28 lg:py-32" aria-label="GitHub activity">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="GitHub Activity"
          subtitle="A live look at contributions, top languages, and repository activity."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2"
        >
          <GlassCard className="flex items-center justify-center">
            <StatImage
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&${THEME_PARAMS}`}
              alt="Dhanush's GitHub stats -- stars, commits, PRs, issues"
            />
          </GlassCard>

          <GlassCard className="flex items-center justify-center">
            <StatImage
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&${THEME_PARAMS}`}
              alt="Dhanush's most-used programming languages on GitHub"
            />
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
