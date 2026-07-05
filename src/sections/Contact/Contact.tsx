import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { GlassCard } from "../../components/ui/GlassCard";
import { MagneticButton } from "../../components/ui/MagneticButton";
import { PERSONAL, LINKS } from "../../data/constants";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const EMPTY_FORM: FormValues = { name: "", email: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function validate(): boolean {
    const nextErrors: Partial<FormValues> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.message.trim()) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setValues(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative w-full px-6 pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-20 lg:pb-10" aria-label="Contact">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Let's Build Something"
          subtitle="Open to AI Engineering and Full Stack opportunities -- reach out and I'll get back to you."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-[1fr_auto] sm:gap-8">
          <GlassCard hoverLift={false}>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <Field
                label="Name"
                name="name"
                value={values.name}
                error={errors.name}
                onChange={(v) => setValues((prev) => ({ ...prev, name: v }))}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={(v) => setValues((prev) => ({ ...prev, email: v }))}
              />
              <Field
                label="Message"
                name="message"
                as="textarea"
                value={values.message}
                error={errors.message}
                onChange={(v) => setValues((prev) => ({ ...prev, message: v }))}
              />

              <MagneticButton
                type="submit"
                disabled={status === "submitting"}
                strength={6}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-background transition-shadow duration-500 hover:shadow-[0_0_28px_2px_rgba(108,99,255,0.5)] disabled:opacity-70"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "submitting" ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </MagneticButton>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="flex items-center gap-2 text-sm text-success"
                    role="status"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                    >
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                ) : null}
                {status === "error" ? (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2 text-sm text-error"
                    role="alert"
                  >
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    Failed to send message. Please try again.
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </GlassCard>

          <div className="flex flex-row gap-3 sm:flex-col sm:justify-center">
            <ContactLink href={LINKS.email} label="Email" icon={Mail} />
            <ContactLink href={LINKS.github} label="GitHub" icon={Github} />
            <ContactLink href={LINKS.linkedin} label="LinkedIn" icon={Linkedin} />
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground sm:mt-6">{PERSONAL.location}</p>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  as?: "input" | "textarea";
}

function Field({ label, name, value, error, onChange, type = "text", as = "input" }: FieldProps) {
  const baseClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-all duration-500 focus:border-primary/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(108,99,255,0.15)]";

  return (
    <div className="group">
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors duration-300 group-focus-within:text-primary"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClass} resize-none`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClass}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Mail }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{ y: -3, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="flex flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white/80 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_8px_24px_-8px_rgba(108,99,255,0.5)] sm:flex-none"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span className="text-xs">{label}</span>
    </motion.a>
  );
}