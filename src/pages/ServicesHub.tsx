import { motion, useScroll, useSpring } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { Link } from "react-router-dom";
import { 
  Zap,
  ArrowRight
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────


// ─── Components ───────────────────────────────────────────────────────────────

const TechnicalNodes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.4] z-0">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r={2}
            fill="#2910E5"
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// ─── Main Hub ─────────────────────────────────────────────────────────────────

const ServicesHub = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-transparent selection:bg-primary/10 scroll-smooth">
      <Header />
      
      {/* Progress Bar */}
      <motion.div className="fixed top-20 left-0 right-0 h-[2px] bg-primary/20 z-50 origin-[0%]">
        <motion.div style={{ scaleX }} className="h-full bg-primary shadow-[0_0_10px_#2910E5]" />
      </motion.div>

      <main className="relative z-10 pt-40 pb-0">
        
        {/* Hero Section */}
        <section className="px-6 mb-24 relative">
          <TechnicalNodes />
          <div className="max-w-[1400px] mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="technical-label !text-primary !text-[11px]">Directory Navigation</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
                Our Engineering <br />
                <span className="text-primary italic">Disciplines.</span>
              </h1>
              <p className="text-slate-700 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                A high-fidelity directory of Astraventa's technical core. Bridge the gap between AI innovation and scalable business architecture.
              </p>
            </motion.div>
          </div>
        </section>


        {/* Ecosystem Scale - Project Showcase */}
        <section className="max-w-[1400px] mx-auto px-6 mt-40">
          <ProjectShowcase />
        </section>

        {/* Final Home CTA (Deep Charcoal) */}
        <section className="mt-40">
          <div className="w-full bg-[#0A0A0A] py-32 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
              style={{ 
                backgroundImage: "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "60px 60px"
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-10 text-white/40">
                  <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                  <span className="technical-label !text-white/40">Integration Ready</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
                  Ready to start <br /> your project?
                </h2>
                <p className="text-white/50 text-xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                  Engage our engineering core to build, scale, and secure your next-generation autonomous infrastructure.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link to="/contact">
                    <Button className="h-16 px-12 bg-white hover:bg-white/90 text-slate-950 rounded-full font-black text-xl flex items-center gap-4 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] transition-all border-none group relative">
                      <span className="relative z-10">START A PROJECT</span>
                      <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesHub;
