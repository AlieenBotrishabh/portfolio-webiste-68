import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useScrolled } from "../hooks/useScrolled.js";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 w-full"
        style={{
          backdropFilter: scrolled ? "blur(16px)" : "blur(4px)",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(4px)",
          transition: "backdrop-filter 0.4s ease",
        }}
      >
        <div
          className="liquid-glass rounded-full px-5 py-3 flex items-center justify-between max-w-5xl mx-auto"
          style={{
            background: scrolled ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.01)",
            transition: "background 0.4s ease",
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Globe className="h-5 w-5 text-white" />
              <span className="text-white font-semibold text-base tracking-tight">RK</span>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7 text-white/75 text-sm font-medium">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className="transition-colors duration-300 hover:text-white cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:rishabhk1324@gmail.com"
              className="hidden sm:inline-flex text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="liquid-glass glass-pill rounded-full px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer hidden sm:block"
            >
              Get in touch
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full liquid-glass text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-4 right-4 z-40 liquid-glass rounded-2xl p-4 flex flex-col gap-2"
            style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(20px)" }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  scrollTo(item.href);
                  setMobileOpen(false);
                }}
                className="text-left px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-1 border-t border-white/[0.06] pt-2">
              <a
                href="mailto:rishabhk1324@gmail.com"
                className="block px-4 py-3 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                rishabhk1324@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}