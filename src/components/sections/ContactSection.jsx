import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useMemo } from "react";
import { Mail, ArrowRight, Check, Github, Linkedin, MessageSquare } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper.jsx";
import { submitLead } from "../../lib/api.js";
import { useTypewriter } from "../../hooks/useTypewriter.js";

const openPlaceholder = "Enter Your Email Here For Early Access";
const successPlaceholder = "You Will Receive Notifications By Email";

function ContactEmailForm() {
  const [mode, setMode] = useState("button");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resetTick, setResetTick] = useState(0);

  const placeholderTarget = useMemo(
    () => (submitted ? successPlaceholder : openPlaceholder),
    [submitted],
  );
  const typedPlaceholder = useTypewriter(placeholderTarget, mode !== "button", 60);

  useEffect(() => {
    if (mode !== "submitted") return undefined;
    const timer = window.setTimeout(() => {
      setMode("button");
      setSubmitted(false);
      setEmail("");
      setIsSubmitting(false);
      setResetTick((v) => v + 1);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [mode]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await submitLead(email.trim(), "contact");
      setSubmitted(true);
      setMode("submitted");
    } catch {
      setSubmitted(true);
      setMode("submitted");
    } finally {
      setIsSubmitting(false);
    }
  }

  const ButtonIcon = submitted ? Check : ArrowRight;

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-white/50 text-sm text-center mb-2">
        Drop your email and I'll get back to you.
      </p>

      <AnimatePresence mode="wait">
        {mode === "button" ? (
          <motion.button
            key={`btn-${resetTick}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            type="button"
            onClick={() => setMode("form")}
            className="px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer"
          >
            Get in touch
          </motion.button>
        ) : (
          <motion.form
            key={`form-${resetTick}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-medium border border-white/20 rounded-full bg-white/[0.02] backdrop-blur-sm w-full max-w-[360px] focus-within:border-white/40 transition-colors duration-300"
          >
            <Mail className="h-4 w-4 text-white/50 shrink-0" />
            <input
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={typedPlaceholder || openPlaceholder}
              className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/45 text-[14px]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105 disabled:opacity-70"
            >
              <ButtonIcon className="h-4 w-4" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactSection({ resumeData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <SectionWrapper id="contact">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-white/45 mb-4"
        >
          Let's Connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-medium section-title mb-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Open to opportunities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/55 text-[15px] leading-relaxed mb-10 max-w-xl mx-auto"
        >
          I'm currently seeking full-time software engineering roles. If you have an opportunity, project, or just want to say hi — let's talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <ContactEmailForm />

          {/* Social links */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-2 liquid-glass rounded-full px-5 py-2.5 text-sm font-medium text-white/75 hover:text-white hover:opacity-90 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href={resumeData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 liquid-glass rounded-full px-5 py-2.5 text-sm font-medium text-white/75 hover:text-white hover:opacity-90 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={resumeData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 liquid-glass rounded-full px-5 py-2.5 text-sm font-medium text-white/75 hover:text-white hover:opacity-90 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
