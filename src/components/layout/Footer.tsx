import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL, LINKS } from "../../data/constants";
import { fadeIn } from "../../lib/motion-variants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeIn}
      className="w-full border-t border-white/10 px-6 py-10 lg:py-6"
      aria-label="Footer"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-white">{PERSONAL.name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            &copy; {year} {PERSONAL.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FooterIcon href={LINKS.email} label="Email">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </FooterIcon>
          <FooterIcon href={LINKS.github} label="GitHub">
            <Github className="h-4 w-4" aria-hidden="true" />
          </FooterIcon>
          <FooterIcon href={LINKS.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </FooterIcon>
        </div>
      </div>
    </motion.footer>
  );
}

function FooterIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      whileHover={{ y: -3, scale: 1.1 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 380, damping: 20 }}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors duration-500 hover:border-primary/40 hover:text-white hover:shadow-[0_4px_16px_-4px_rgba(108,99,255,0.5)]"
    >
      {children}
    </motion.a>
  );
}
