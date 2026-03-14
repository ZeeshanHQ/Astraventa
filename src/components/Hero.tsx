import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Sparkles, Cpu, Boxes, Code2, Heart } from "lucide-react";
import { AstraventaLogo } from "./AstraventaLogo";
import { LinkPreview } from "@/components/ui/link-preview";

export const Hero = () => {
  return (
    <section id="hero" className="section-transition relative overflow-hidden bg-white pt-32 pb-4 md:pt-40 md:pb-16 flex items-center min-h-[90vh]">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Advanced Mesh Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120%] bg-[radial-gradient(circle_at_50%_-20%,rgba(41,16,229,0.06),transparent_70%)]" />
        
        {/* Rich Orbs Behind the Glass Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 translate-x-[20%] -translate-y-[40%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Intelligence Nodes - Decorative SVGs */}
        <div className="absolute top-[10%] left-[5%] opacity-30 animate-pulse">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="1.5" fill="#2910E5" />
            <circle cx="20" cy="20" r="1" fill="#2910E5" />
            <circle cx="80" cy="80" r="1" fill="#2910E5" />
            <path d="M50 50L20 20M50 50L80 80" stroke="#2910E5" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
        <div className="absolute bottom-[30%] right-[5%] opacity-30 animate-pulse delay-700">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="58" y="58" width="4" height="4" rx="2" fill="#10B981" />
            <rect x="20" y="30" width="2" height="2" rx="1" fill="#10B981" />
            <rect x="90" y="100" width="2" height="2" rx="1" fill="#10B981" />
            <path d="M60 60L21 31M60 60L91 101" stroke="#10B981" strokeWidth="0.5" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl relative z-10 mx-auto px-4 md:px-6 w-full text-center">
        {/* Premium Glassmorphism Container with Internal Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] bg-white/60 backdrop-blur-3xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 overflow-hidden transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(41,16,229,0.15)] group/card"
        >
          {/* Card Internal Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover/card:opacity-[0.05] transition-opacity duration-700" 
            style={{ 
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: '40px 40px' 
            }} 
          />

          {/* Inner subtle glow for the glass card edge */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
          <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/50 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-64 bg-primary/10 rounded-[100%] blur-[60px] pointer-events-none" />
          
          <div className="relative z-10">
            {/* Friendly Recognition Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-10 group cursor-default hover:border-primary/20 transition-colors"
            >
              <div className="relative">
                <span className="flex h-2 w-2 rounded-full bg-primary" />
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
              </div>
              <span className="technical-label !tracking-[0.15em] !text-[10px] sm:!text-[11px] uppercase">
                Architecting the <span className="text-primary font-bold">Autonomous</span> Future
              </span>
            </motion.div>

            {/* Expansive Headline - Fixed Typography & Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-slate-900 tracking-tight leading-[1.1] md:leading-[1.05] drop-shadow-sm">
                Automate the <span className="text-primary">Routine.</span><br />
                Engineer the Future.
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-[650px] mx-auto text-base sm:text-lg md:text-[20px] text-slate-600 font-medium leading-[1.6] mb-12"
            >
              Astraventa helps businesses grow by building{" "}
              <LinkPreview 
                url="https://astraventa.com/products/astra-ai-concierge" 
                className="text-slate-900 border-b-2 border-primary/20 font-bold hover:border-primary transition-colors inline-block"
                imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                isStatic
              >
                smart AI tools
              </LinkPreview>{" "}
              and beautiful websites. We take care of the complex tech so you can focus on what you love.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button size="lg" className="btn-primary h-14 px-10 group overflow-hidden relative shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 text-base w-full sm:w-auto">
                <span className="relative z-10 flex items-center font-bold">
                  See Our Products
                  <Boxes className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
              </Button>
              
              <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-slate-200 bg-white hover:bg-slate-50 hover:border-primary/30 font-bold group transition-all active:scale-95 shadow-sm hover:shadow-md text-base text-slate-800 hover:text-primary w-full sm:w-auto">
                <span className="flex items-center">
                  Build Your Vision
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-primary" />
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
