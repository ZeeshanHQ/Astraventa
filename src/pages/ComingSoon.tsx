import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Mail, ArrowRight, Construction, Cpu, ShieldCheck, Activity, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #2910E5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <main className="relative z-10 pt-48 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl w-full"
          >
            <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 mb-12 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.4)]" />
              <span className="text-[10px] font-black font-['Anonymous_Pro'] text-slate-900 uppercase tracking-[0.4em]">SYSTEM_IN_PROGRESS // V1.0</span>
            </div>
            
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-heading font-normal text-slate-950 tracking-[-0.02em] leading-[0.9] uppercase mb-10">
              Module Under <br />
              <span className="text-slate-300">Construction.</span>
            </h1>
            
            <p className="text-slate-500 font-medium text-[15px] max-w-xl mx-auto leading-relaxed mb-16">
              Our engineering team is currently architecting this module for high-frequency enterprise environments. 
              We’re deploying soon with a sub-second autonomous experience.
            </p>

            {/* Redesigned Waitlist */}
            <div className="p-1.5 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-xl max-w-md mx-auto relative group">
              <div className="flex items-center gap-2 px-6 h-14">
                <Mail className="w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="ENGINEERING_EMAIL"
                  className="flex-1 bg-transparent border-none text-[12px] font-['Anonymous_Pro'] text-slate-900 uppercase tracking-[0.2em] focus:ring-0 placeholder:text-slate-300"
                />
                <button className="h-11 px-8 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-lg shadow-black/10 active:scale-95">
                  DEPLOY_ME
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-black font-['Anonymous_Pro'] text-slate-300 uppercase tracking-[0.3em]">
              <ShieldCheck className="w-3.5 h-3.5" /> 256-BIT ENCRYPTION SECURED
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 mt-32 text-[9px] font-black font-['Anonymous_Pro'] text-slate-400 uppercase tracking-[0.4em]"
          >
            <span className="flex items-center gap-3 transition-colors hover:text-primary"><Cpu className="w-4 h-4 opacity-40 text-primary" /> NEXT_GEN_AI</span>
            <span className="flex items-center gap-3 transition-colors hover:text-primary"><Activity className="w-4 h-4 opacity-40 text-primary" /> EDGE_ORCHESTRATION</span>
            <span className="flex items-center gap-3 transition-colors hover:text-primary"><Radio className="w-4 h-4 opacity-40 text-primary" /> SUB_SECOND_LATENCY</span>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
