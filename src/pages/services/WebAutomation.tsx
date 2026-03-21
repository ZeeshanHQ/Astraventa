import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Workflow,
  Zap,
  ShieldCheck,
  ArrowRight,
  Database,
  Globe,
  GitBranch,
  Clock,
  Network,
  FileText,
  ScanLine
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";

export const WebAutomation = () => {
  const relatedTools = [
    {
      title: "AstraFlow AI",
      tagline: "Smart Data-Entry Agent",
      icon: FileText,
      color: "text-black",
      bg: "bg-black/10",
      href: "/tools/astra-flow"
    },
    {
      title: "AstraScrape AI",
      tagline: "Enterprise Data Extraction",
      icon: Globe,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-scrape"
    },
    {
      title: "AstraRelay AI",
      tagline: "Cross-Platform Event Mesh",
      icon: Network,
      color: "text-primary",
      bg: "bg-primary/20",
      href: "/tools/astra-relay"
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />

      <main className="pt-12">
        {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
        <section className="relative px-6 pt-12 pb-0 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
               style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 0.75px, transparent 0.75px)", backgroundSize: "32px 32px" }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
              <div>
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/[0.01] border border-black/[0.06] mb-8"
                >
                  <Workflow className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-black text-[#4B5563] tracking-[0.2em] uppercase font-['Anonymous_Pro']">Autonomous Systems · Web</span>
                </motion.div>

                 <h1 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl mb-8">
                  Web<br />
                  <span className="text-primary">Automation.</span>
                </h1>

                 <p className="text-[#4B5563] font-medium text-lg leading-relaxed max-w-lg mb-10">
                  Build silent, deterministic pipelines that navigate complex web interfaces. 
                  Turn operational bottlenecks into automated competitive advantages.
                </p>

                 <div className="flex flex-wrap items-center gap-4">
                  <Button asChild className="h-16 px-10 bg-black hover:bg-black/90 text-white rounded-full font-display font-bold text-[14px] uppercase tracking-[0.15em] border-none shadow-none transition-all group">
                    <Link to="/contact">Deploy Pipeline <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:text-primary transition-all" /></Link>
                  </Button>
                </div>
              </div>

               <div className="relative h-[400px] lg:h-[500px] bg-black/[0.01] border border-black/[0.06] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opaicty-50" />
                <div className="absolute inset-8 border border-dashed border-border/20 rounded-2xl flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <motion.div 
                      className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <div className="relative w-full h-full bg-white rounded-2xl border border-primary/20 shadow-2xl flex items-center justify-center">
                      <Zap className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Floating tags */}
                 <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-12 right-12 bg-white border border-black/[0.06] px-4 py-2 rounded-2xl shadow-sm flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-['Anonymous_Pro'] font-black text-[#4B5563] uppercase tracking-widest">STATUS: OPTIMIZED</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

         {/* ─── CAPABILITIES ─────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] uppercase tracking-[0.2em] mb-3 block">Orchestration Layers</span>
                <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter leading-[0.9] uppercase">Deterministic<br /><span className="text-primary">Execution.</span></h2>
              </div>
              <p className="text-[#4B5563] font-medium max-w-xs leading-relaxed uppercase text-xs tracking-widest">
                Production-grade automation built to handle edge-cases and legacy environment friction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Clock, title: "Event Triggers", desc: "Real-time response to webhook signals and scheduled intervals." },
                { icon: GitBranch, title: "Logic Branches", desc: "Complex decision trees for dynamic workflow routing." },
                { icon: Database, title: "Data Sanitization", desc: "Automated extraction and transformation of messy web data." },
                { icon: ShieldCheck, title: "Hardened Security", desc: "End-to-end encryption and secure credential vaulting." }
              ].map((cap, i) => (
                 <motion.div 
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-black/[0.01] border border-border/30 hover:border-primary/30 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-black/20 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-black mb-3 tracking-tighter uppercase">{cap.title}</h3>
                  <p className="text-sm text-[#4B5563] font-black leading-relaxed uppercase tracking-tight">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

         {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────── */}
        <section className="pb-20 bg-white border-t border-black/[0.06]">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

         {/* ─── FINAL CTA ──────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.25em] text-white/50 mb-10">
              <ScanLine className="w-4 h-4 text-primary" /> Ready for Deployment
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-12 uppercase">
              Automate Your<br />Digital <span className="text-primary">Backbone.</span>
            </h2>
            <Button asChild className="h-20 px-12 bg-white hover:bg-white/90 text-black rounded-full font-display font-bold text-[14px] uppercase tracking-[0.15em] transition-all shadow-none group border-none">
              <Link to="/contact">Request Architecture Call</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebAutomation;
