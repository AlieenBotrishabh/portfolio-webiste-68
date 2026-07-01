import { Globe } from "lucide-react";
import { motion } from "motion/react";

const navItems = ["Features", "Pricing", "About"];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 px-6 py-6 w-full"
    >
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-white" />
            <span className="text-white font-semibold text-lg tracking-tight">Asme</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="transition-colors duration-300 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-sm font-medium text-white transition-colors hover:text-white/80 cursor-pointer"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="liquid-glass glass-pill rounded-full px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </motion.nav>
  );
}