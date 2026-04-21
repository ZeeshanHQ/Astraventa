import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Zap, Code2, Network, ShieldAlert, Sparkles, Activity, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export const AstraToolsNetwork = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#FAFAFA] py-32 md:py-48 border-y border-black/[0.03] overflow-hidden text-black">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Section - Refined Spacing */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-black/[0.05] shadow-sm mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-display font-bold text-black/40 uppercase tracking-[0.25em]">ASTRA_ECOSYSTEM</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-heading font-normal uppercase tracking-tight text-4xl sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem] mb-8 leading-[1.05]"
          >
            The Future is Built on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_auto] animate-gradient-x italic">
              AI Autonomy.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] sm:text-[18px] text-slate-500 font-medium leading-relaxed max-w-[700px] px-4"
          >
            Orchestrate high-velocity operations with our proprietary suite of specialized micro-agents. 
            Engineered for global enterprises that demand absolute precision and scale.
          </motion.p>
        </div>

        {/* Glassmorphism Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          
          {/* Feature Card: Astra Core Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => navigate('/products/astra-tools')}
            className="md:col-span-2 lg:col-span-2 row-span-2 group relative p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 overflow-hidden cursor-pointer flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-black/[0.03] flex items-center justify-center mb-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Network className="w-8 h-8 text-primary" />
              </div>
              
              <div className="mt-12">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-heading font-normal text-black uppercase tracking-wide">Astra Core Hub</h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest font-['Anonymous_Pro']">Operational</span>
                  </div>
                </div>
                <p className="text-[15px] text-slate-500 font-medium leading-relaxed max-w-md">
                  The central nervous system for autonomous workflows. Orchestrate complex logic trees with 99.9% uptime and &lt;10ms latency.
                </p>
                
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 font-['Anonymous_Pro']">Throughput</span>
                    <span className="text-xl font-heading font-normal text-black tracking-wide">1.2M req/s</span>
                  </div>
                  <div className="w-[1px] h-10 bg-black/[0.05]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 font-['Anonymous_Pro']">Accuracy</span>
                    <span className="text-xl font-heading font-normal text-black tracking-wide">99.98%</span>
                  </div>
                </div>
              </div>

              {/* Practical UI Overlay */}
              <div className="absolute right-[-10%] top-1/4 w-[60%] h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none select-none">
                <div className="font-['Anonymous_Pro'] text-[10px] leading-tight text-primary whitespace-pre">
                  {`{
  "agent_id": "ASTRA_01",
  "task": "CORE_ORCHESTRATION",
  "status": "EXECUTING",
  "logic_tree": [
    "RECOGNITION",
    "REASONING",
    "EXECUTION"
  ]
}`}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card: Astra Prompt */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => navigate('/products/astra-tools')}
            className="md:col-span-1 lg:col-span-2 group relative p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white hover:border-black/10 hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-black/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-black/[0.03] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="p-3 rounded-full bg-white border border-black/[0.03] group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-500">
              <h3 className="text-xl font-heading font-normal text-black uppercase tracking-wide mb-3 leading-none">Astra Prompt</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">Enterprise-grade prompt architecture and version control for LLM pipelines.</p>
              
              <div className="mt-6 flex gap-1.5">
                <span className="px-2 py-1 rounded bg-black/[0.03] text-[9px] font-black uppercase tracking-widest text-slate-400">v2.4.0</span>
                <span className="px-2 py-1 rounded bg-black/[0.03] text-[9px] font-black uppercase tracking-widest text-slate-400">Stable</span>
              </div>
            </div>
          </motion.div>

          {/* Feature Card: Astra Reach */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('/products/astra-tools')}
            className="group relative p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white hover:border-blue-500/20 hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-blue-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-blue-500/10 transition-all duration-500">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-heading font-normal text-black uppercase tracking-wide mb-3 leading-none">Astra Reach</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">Autonomous multi-channel outreach engine for scale.</p>
            </div>
            <div className="relative z-10 mt-4 h-8 flex items-end gap-1 overflow-hidden">
               {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: "20%" }}
                   whileInView={{ height: `${h * 100}%` }}
                   transition={{ duration: 1, delay: 0.5 + (i * 0.1), repeat: Infinity, repeatType: "reverse" }}
                   className="w-1.5 bg-blue-500/20 rounded-t-sm"
                 />
               ))}
            </div>
          </motion.div>

          {/* Feature Card: Astra Guard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/products/astra-tools')}
            className="group relative p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white hover:border-red-500/20 hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-red-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <ShieldAlert className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-heading font-normal text-black uppercase tracking-wide mb-3 leading-none">Astra Guard</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">Real-time threat detection and response protocols.</p>
            </div>
            <div className="relative z-10 flex items-center gap-2 mt-4 text-red-600/60 font-['Anonymous_Pro'] text-[10px] font-bold">
              <Activity className="w-3 h-3 animate-pulse" /> 
              MONITORING_ACTIVE
            </div>
          </motion.div>

        </div>

        {/* Global CTA - Refined Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <button 
            onClick={() => navigate('/products/astra-tools')}
            className="group relative inline-flex h-14 items-center justify-center rounded-full bg-black px-12 text-[12px] font-display font-bold uppercase tracking-[0.2em] text-white transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-black/20 gap-4 overflow-hidden"
          >
            <span className="relative z-10">Explore 33+ Enterprise Modules</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
