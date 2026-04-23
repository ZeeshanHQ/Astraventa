import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Zap, Code2, Network, ShieldAlert, Sparkles, Activity, Layers, Search, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ShinyButton } from "./ui/shiny-button";

export const AstraToolsNetwork = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#FAFAFA] py-32 md:py-48 border-y border-black/[0.03] overflow-hidden text-black">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_auto] animate-gradient-x font-medium">
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
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Top Header Row */}
              <div className="flex items-start justify-between mb-12">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-black/[0.03] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest font-['Anonymous_Pro']">Operational_Core</span>
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-4xl font-heading font-normal text-black uppercase tracking-wide mb-6">Astra Core Hub</h3>
                <p className="text-[16px] text-slate-500 font-medium leading-relaxed max-w-md mb-10">
                  The central nervous system for autonomous workflows. Orchestrate complex logic trees with 99.9% uptime and &lt;10ms latency.
                </p>
                
                <div className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 font-['Anonymous_Pro']">Real-time Throughput</span>
                    <span className="text-2xl font-heading font-normal text-black tracking-wide">1.2M req/s</span>
                  </div>
                  <div className="w-[1px] h-12 bg-black/[0.08]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 font-['Anonymous_Pro']">Process Accuracy</span>
                    <span className="text-2xl font-heading font-normal text-black tracking-wide">99.98%</span>
                  </div>
                </div>
              </div>

              {/* Bottom Visual - Filling Space Professionally */}
              <div className="mt-auto pt-10">
                 <div className="relative h-24 w-full bg-black/[0.02] rounded-2xl border border-black/[0.04] overflow-hidden group-hover:bg-black/[0.03] transition-colors p-4">
                    <div className="absolute inset-0 flex items-center justify-around opacity-20">
                       {[1,2,3,4,5,6,7,8].map((i) => (
                         <motion.div 
                           key={i}
                           animate={{ height: ["20%", "60%", "20%"] }}
                           transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                           className="w-1 bg-primary/40 rounded-full"
                         />
                       ))}
                    </div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                       <span className="text-[9px] font-black text-primary/60 uppercase tracking-[0.2em] font-['Anonymous_Pro'] mb-1">SYSTEM_PULSE_MONITOR</span>
                       <span className="text-[10px] text-slate-400 font-medium font-['Anonymous_Pro']">STABLE_CONNECTIVITY_ACTIVE</span>
                    </div>
                 </div>
              </div>

              {/* Practical UI Overlay - Positioned to NOT overlap with text */}
              <div className="absolute right-[5%] bottom-[25%] w-[35%] h-[20%] bg-white/40 backdrop-blur-sm rounded-xl border border-black/[0.03] p-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 pointer-events-none select-none hidden xl:block z-0">
                <div className="font-['Anonymous_Pro'] text-[9px] leading-tight text-primary/60 whitespace-pre">
                  {`[AGENT_INIT]
> AUTH_SECURE
> LOAD_LOGIC_V4
> SCALE_READY`}
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
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/[0.03] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <Terminal className="w-7 h-7" />
              </div>
              <div className="p-3 rounded-full bg-white border border-black/[0.03] group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col">
               <div className="mb-6 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-heading font-normal text-black uppercase tracking-wide leading-none">Astra Prompt</h3>
                    <span className="text-[10px] text-primary/60 font-black tracking-widest font-['Anonymous_Pro']">v2.4</span>
                  </div>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed max-w-[300px]">Enterprise-grade prompt architecture and version control for LLM pipelines.</p>
               </div>
               
               <div className="flex items-center gap-3">
                  <div className="h-8 flex-1 bg-black/[0.03] rounded-lg border border-black/[0.05] px-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-['Anonymous_Pro']">compiling_tokens...</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-black/[0.03] border border-black/[0.05] flex items-center justify-center">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                  </div>
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
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-blue-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-blue-500/10 transition-all duration-500">
                <Zap className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-heading font-normal text-black uppercase tracking-wide mb-3 leading-none">Astra Reach</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">Autonomous multi-channel outreach engine for hyper-scale growth.</p>
            </div>
            <div className="relative z-10 mt-6 flex flex-col gap-4">
              <div className="flex items-end gap-1.5 h-12 overflow-hidden px-1">
                 {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.7, 0.5].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: "20%" }}
                     whileInView={{ height: `${h * 100}%` }}
                     transition={{ duration: 1, delay: 0.5 + (i * 0.1), repeat: Infinity, repeatType: "reverse" }}
                     className="flex-1 bg-blue-500/20 rounded-t-sm"
                   />
                 ))}
              </div>
              <div className="flex items-center justify-between px-1">
                 <span className="text-[9px] font-black text-blue-600/50 uppercase tracking-widest font-['Anonymous_Pro']">Traffic_Sync</span>
                 <span className="text-[9px] font-black text-blue-600/50 uppercase tracking-widest font-['Anonymous_Pro']">88%</span>
              </div>
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
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-red-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <ShieldAlert className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-heading font-normal text-black uppercase tracking-wide mb-3 leading-none">Astra Guard</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed">Real-time threat detection and automated response protocols.</p>
            </div>
            
            <div className="relative z-10 flex flex-col gap-3 mt-6">
               <div className="p-3 rounded-xl bg-red-500/[0.03] border border-red-500/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest font-['Anonymous_Pro']">Active_Scan</span>
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500/40" />
               </div>
               <div className="h-1.5 w-full bg-red-500/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/3 h-full bg-red-500/20"
                  />
               </div>
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
          <ShinyButton 
            onClick={() => navigate('/products/astra-tools')}
            className="h-14 px-12 text-[13px] font-display font-bold uppercase tracking-[0.2em]"
          >
            <span className="flex items-center gap-4">
              Explore 33+ Enterprise Modules <ArrowRight className="w-4 h-4" />
            </span>
          </ShinyButton>
        </motion.div>

      </div>
    </section>
  );
};
