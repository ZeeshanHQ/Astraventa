import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ArrowRight, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="section-transition relative overflow-hidden bg-white pt-32 pb-16 md:pt-44 md:pb-28 flex items-center min-h-[96vh]">

      {/* Background: subtle engineering grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Very subtle indigo radial bloom */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(126, 150, 246,0.08)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-[1400px] relative z-10 mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/[0.06] mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-['Anonymous_Pro'] text-[11.5px] font-bold uppercase tracking-[0.2em] text-black/60">
                ASTRAVENTA — <span className="text-primary">SYSTEMS OPERATIONAL</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-10 font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-[3rem]">
              Build What<br />
              <span className="text-primary">Doesn&apos;t Break.</span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-[560px] text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] mb-14">
              We architect and deploy high-velocity engineering systems — AI, backend, web, and mobile — that scale without friction.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <ShinyButton
                className="h-11 px-7 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.1em]"
                onClick={() => navigate("/contact")}
              >
                <span className="flex items-center gap-2.5 pt-[2px]">
                Start a Project <ArrowRight className="w-4 h-4" />
                </span>
              </ShinyButton>
              <Button
                variant="ghost"
                className="h-9 px-5 text-black/70 hover:text-black hover:bg-transparent transition-colors text-[12px] font-display font-medium tracking-[0.08em] uppercase shadow-none bg-transparent"
                onClick={() => navigate("/services")}
              >
                <Terminal className="mr-2 w-3.5 h-3.5 text-primary" /> View Capabilities
              </Button>
            </div>

            {/* Technical Markers */}
            <div className="flex flex-wrap items-center gap-7 mt-20 pt-8 border-t border-black/5 text-[11px] font-display font-normal uppercase tracking-[0.15em] text-black/30">
              <span className="flex items-center gap-2 cursor-default hover:text-black/70 transition-colors duration-200"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />AI Engineering</span>
              <span className="flex items-center gap-2 cursor-default hover:text-black/70 transition-colors duration-200"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Web Systems</span>
              <span className="flex items-center gap-2 cursor-default hover:text-black/70 transition-colors duration-200"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Backend Infra</span>
              <span className="flex items-center gap-2 cursor-default hover:text-black/70 transition-colors duration-200"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Mobile Native</span>
              <span className="flex items-center gap-2 cursor-default hover:text-black/70 transition-colors duration-200"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Security Hardening</span>
            </div>
          </motion.div>

          {/* Right Side: High-End Video Integration */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative -mt-6"
          >
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Video Container with Glass Effect */}
              <div className="relative rounded-[2.5rem] overflow-hidden border border-black/[0.03] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/3] object-cover scale-[1.01]"
                  style={{
                    maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                  }}
                >
                  <source src="/hero.mp4" type="video/mp4" />
                </video>

                {/* Subtle Overlay Grid on Video */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
