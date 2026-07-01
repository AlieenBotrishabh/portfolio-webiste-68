import { motion, useInView } from "motion/react";
import { useRef } from "react";

/**
 * Reusable section wrapper that:
 * - Adds an `id` for in-page navigation
 * - Handles a consistent scroll-reveal animation via `useInView`
 * - Applies uniform vertical padding
 */
export function SectionWrapper({
  id,
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

/**
 * Stagger container — wraps children that each animate in sequence.
 */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger child — individual item animation.
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
