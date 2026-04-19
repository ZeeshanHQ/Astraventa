import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BANNER_KEY = "astraventa_banner_dismissed_v1";

export const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(BANNER_KEY) === "1";
    } catch {
      return false;
    }
  });
  const navigate = useNavigate();

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
    try {
      localStorage.setItem(BANNER_KEY, "1");
    } catch { /* noop */ }
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div
            className="relative w-full bg-[hsl(247,88%,48%)] text-white cursor-pointer group"
            onClick={() => navigate("/products/astra-tools")}
            role="button"
            tabIndex={0}
            aria-label="View AstraLab — 33+ AI Tools announcement"
          >
            {/* Subtle animated gradient shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />

            <div className="relative flex items-center justify-center gap-3 px-4 py-2.5 text-center">
              {/* Icon */}
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-white/80" />

              {/* Text */}
              <p className="text-[11.5px] sm:text-[12px] font-display font-medium tracking-[0.06em] leading-none">
                <span className="font-bold mr-1.5 text-white">New:</span>
                <span className="text-white/85">AstraLab now has 33+ AI tools for every growth team.</span>
              </p>

              {/* CTA link */}
              <span className="hidden sm:flex items-center gap-1 text-[11px] font-bold tracking-wide border border-white/25 rounded-full px-3 py-1 bg-white/10 hover:bg-white/20 transition-colors shrink-0">
                Explore tools <ArrowRight className="w-3 h-3" />
              </span>

              {/* Dismiss button */}
              <button
                onClick={handleDismiss}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/15 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5 text-white/70" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
