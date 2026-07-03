import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, FolderGit2 } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { ProfileImage } from "./ProfileImage";
import { MagneticButton } from "../../components/ui/MagneticButton";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { PERSONAL, TYPING_TITLES, LINKS } from "../../data/constants";
import { fadeUp, staggerContainer, EASE } from "../../lib/motion-variants";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const typedTitle = useTypewriter({ words: TYPING_TITLES, reducedMotion });

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center justify-center px-6 py-28 sm:py-24 lg:py-0"
      aria-label="Introduction"
    >
      <HeroBackground reducedMotion={reducedMotion} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            DHANUSH M
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex h-8 items-center gap-1 tracking-wide text-primary sm:mt-5 sm:h-9 sm:text-xl lg:text-2xl text-lg font-medium"
            aria-live="polite"
          >
            <span>{typedTitle}</span>
            <motion.span
              className="inline-block h-5 w-[2px] bg-primary sm:h-7"
              animate={reducedMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {PERSONAL.heroDescription}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <MagneticButton
              onClick={scrollToProjects}
              strength={8}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3 text-sm font-semibold text-background shadow-[0_0_0_0_rgba(108,99,255,0)] transition-shadow duration-500 hover:shadow-[0_0_32px_4px_rgba(108,99,255,0.45)]"
            >
              <FolderGit2 className="h-4 w-4" aria-hidden="true" />
              View Projects
            </MagneticButton>

            <MagneticButton
              href={LINKS.resumePdf}
              download
              strength={8}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-500 hover:border-white/30 hover:bg-white/10"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-2 mt-6 flex items-center justify-center gap-3 sm:mt-7 sm:mb-0 lg:justify-start">
            <IconLink href={LINKS.email} label="Email Dhanush">
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
            </IconLink>
            <IconLink href={LINKS.github} label="Dhanush's GitHub profile">
              <Github className="h-[18px] w-[18px]" aria-hidden="true" />
            </IconLink>
            <IconLink href={LINKS.linkedin} label="Dhanush's LinkedIn profile">
              <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
            </IconLink>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <ProfileImage reducedMotion={reducedMotion} />
        </div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
        aria-label="Scroll to About section"
      >
        <motion.span
          className="flex flex-col items-center gap-1"
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:text-white hover:shadow-[0_0_16px_0_rgba(108,99,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    >
      {children}
    </a>
  );
}
