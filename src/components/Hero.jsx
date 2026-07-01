import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Mail, Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { submitLead } from "../lib/api.js";
import { useTypewriter } from "../hooks/useTypewriter.js";

const openPlaceholder = "Enter Your Email Here For Early Access";
const successPlaceholder = "You Will Receive Notifications By Email";

export function Hero({ resumeData }) {
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
    if (mode !== "submitted") {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setMode("button");
      setSubmitted(false);
      setEmail("");
      setIsSubmitting(false);
      setResetTick((value) => value + 1);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [mode]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLead(email.trim());
      setSubmitted(true);
      setMode("submitted");
    } catch {
      setSubmitted(true);
      setMode("submitted");
    } finally {
      setIsSubmitting(false);
    }
  }

  const buttonLabel = isSubmitting ? "Saving..." : "Get early access";
  const ButtonIcon = submitted ? Check : ArrowRight;

  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
          >
            BUILD A NO-CODE AI APP IN MINUTES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-[64px] font-medium tracking-[-0.01em] leading-[1.1] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl mx-auto"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            A new way to think and create
            <br className="hidden md:block" /> with computers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl text-sm md:text-base text-white/70 leading-relaxed"
          >
            {resumeData.summary}
          </motion.p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-white/55">
            <span className="glass-pill rounded-full px-3 py-1">{resumeData.location}</span>
            <span className="glass-pill rounded-full px-3 py-1">{resumeData.email}</span>
            <span className="glass-pill rounded-full px-3 py-1">Full-time opportunities</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="min-h-[50px] mt-2"
        >
          <AnimatePresence mode="wait">
            {mode === "button" ? (
              <motion.button
                key={`button-${resetTick}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={() => setMode("form")}
                className="px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer"
              >
                Get early access
              </motion.button>
            ) : (
              <motion.form
                key={`form-${resetTick}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-medium border border-white/20 rounded-full bg-white/[0.02] backdrop-blur-sm w-full max-w-[360px] focus-within:border-white/40 transition-colors duration-300 mx-auto"
              >
                <Mail className="h-4 w-4 text-white/50 shrink-0" />
                <input
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          type="button"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white/40 transition-colors duration-300 text-[13px] font-medium tracking-wide"
        >
          <Play className="h-4 w-4" />
          Play Video Demo
        </motion.button>
      </div>
    </section>
  );
}