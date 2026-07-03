import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollState } from "../../hooks/useScrollState";
import { PERSONAL } from "../../data/constants";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "academic-projects", label: "Academic" },
  { id: "roadmap", label: "Roadmap" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));
  const { isScrolled, isHidden } = useScrollState();

  function handleNavClick(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.header
      animate={{ y: isHidden && !menuOpen ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 32, mass: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className={`mt-3 flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-background/70 backdrop-blur-xl transition-all duration-500 ${
          isScrolled ? "px-5 py-2 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]" : "px-6 py-3"
        }`}
      >
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="font-display text-sm font-bold tracking-tight text-white transition-opacity duration-300 hover:opacity-80"
        >
          {PERSONAL.name}
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors duration-300 ${
                  activeId === item.id ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {activeId === item.id ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <motion.button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          whileTap={{ scale: 0.92 }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 right-4 top-[72px] rounded-3xl border border-white/10 bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              className="flex flex-col gap-1"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                      activeId === item.id ? "bg-primary/15 text-white" : "text-muted-foreground hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
