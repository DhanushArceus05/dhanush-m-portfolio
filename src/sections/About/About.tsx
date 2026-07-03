import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Quote, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { GlassCard } from "../../components/ui/GlassCard";
import { ProfileImage } from "../Hero/ProfileImage";
import { PERSONAL, EDUCATION } from "../../data/constants";
import { PERSONAL_VALUES, RECENT_WORK } from "../../data/about";
import { fadeUp, staggerContainer } from "../../lib/motion-variants";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative w-full px-6 py-24 sm:py-28 lg:py-32" aria-label="About Dhanush">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          {/* Narrative column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <GlassCard>
                <p className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I am a passionate software developer with interests spanning Artificial Intelligence, Data
                  Science, Generative AI, and Full Stack Development. I enjoy building practical applications
                  that solve real-world problems while continuously improving my engineering skills.
                </p>

                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-primary">My recent work</p>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {RECENT_WORK.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <div className="relative rounded-card border-l-2 border-primary bg-white/[0.04] py-5 pl-6 pr-6 sm:py-6">
                <Quote className="absolute -top-3 left-4 h-6 w-6 text-primary/70" aria-hidden="true" />
                <p className="text-balance font-display text-lg font-semibold leading-snug text-white sm:text-xl">
                  Become an AI Engineer capable of building enterprise-grade intelligent systems while continuing
                  to grow as a Full Stack Developer.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">What I value</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {PERSONAL_VALUES.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.06]"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Facts / photo column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="flex flex-col items-center text-center">
              <ProfileImage reducedMotion={reducedMotion} size="about" />

              <h3 className="mt-6 font-display text-lg font-semibold text-white">{PERSONAL.name}</h3>
              <p className="text-sm text-muted-foreground">AI Engineer &amp; Full Stack Developer</p>

              <div className="mt-6 w-full space-y-4 border-t border-white/10 pt-6 text-left">
                <FactRow icon={MapPin} label="Location" value={PERSONAL.location} />
                <FactRow
                  icon={GraduationCap}
                  label="Education"
                  value={`${EDUCATION.degree}, ${EDUCATION.institution}, ${EDUCATION.university}`}
                />
                <FactRow
                  icon={Award}
                  label="Certification"
                  value="AI & Data Science -- Intellipaat x IIT Roorkee"
                />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="text-sm leading-snug text-white/90">{value}</p>
      </div>
    </div>
  );
}
