import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Zap, Code2, Network, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export const AstraToolsNetwork = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-white py-24 sm:py-32 border-y border-black/[0.04] overflow-hidden text-black">
      {/* Light Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-display font-medium text-black/60 uppercase tracking-[0.2em]">ASTRA_ECOSYSTEM</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-normal uppercase tracking-[0.1em] text-3xl sm:text-4xl md:text-[3.5rem] lg:text-[4rem] mb-6 leading-[1.3]"
          >
            The Future is Built on <br />
            <span className="text-primary">
              AI Autonomy.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] sm:text-[16px] text-[#4B5563] font-normal leading-[1.8] max-w-[600px]"
          >
            Deploy our proprietary suite of highly-specialized micro-tools. Designed to accelerate development, automate complex operations, and scale your engineering capacity instantly.
          </motion.p>
        </div>

        {/* Premium Bento Grid - Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[280px]">
          
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => navigate('/products/astra-tools')}
            className="md:col-span-2 lg:col-span-2 row-span-2 group relative p-8 rounded-3xl bg-white border border-black/[0.06] hover:border-primary/30 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-auto group-hover:scale-110 transition-transform duration-500">
                <Network className="w-6 h-6 text-primary" />
              </div>
              
              <div className="mt-8 transform group-hover:translate-x-2 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-black uppercase tracking-wide">Astra Core Hub</h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest border border-emerald-200">Live</span>
                </div>
                <p className="text-[15px] text-[#6B7280] font-normal leading-[1.7] max-w-md">
                  The central nervous system for your automated workflows. Connect agents, manage state, and execute complex logic trees.
                </p>
              </div>

              {/* Decorative Tech Visual */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-full opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-1/4 right-10 w-24 h-[1px] bg-primary group-hover:w-32 transition-all duration-700" />
                <div className="absolute top-1/2 right-10 w-48 h-[1px] bg-primary group-hover:w-56 transition-all duration-700" />
                <div className="absolute top-3/4 right-10 w-32 h-[1px] bg-primary group-hover:w-40 transition-all duration-700" />
                <div className="absolute top-1/4 right-32 w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="absolute top-1/2 right-56 w-2 h-2 rounded-full bg-primary animate-ping" />
              </div>
            </div>
          </motion.div>

          {/* Top Right Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => navigate('/products/astra-tools')}
            className="md:col-span-1 lg:col-span-2 group relative p-8 rounded-3xl bg-white border border-black/[0.06] hover:border-black/20 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex justify-between items-start">
              <Terminal className="w-8 h-8 text-black/40 group-hover:text-black group-hover:scale-110 transition-all duration-500" />
              <ArrowRight className="w-5 h-5 text-black/20 group-hover:text-black transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div className="relative z-10 transform group-hover:translate-y-[-4px] transition-transform duration-500">
              <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-2">Astra Prompt</h3>
              <p className="text-[13px] text-[#6B7280]">Enterprise-grade prompt engineering and version control suite.</p>
            </div>
          </motion.div>

          {/* Bottom Middle Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('/products/astra-tools')}
            className="group relative p-8 rounded-3xl bg-white border border-black/[0.06] hover:border-blue-500/30 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative z-10 transform group-hover:translate-y-[-4px] transition-transform duration-500">
              <Zap className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-2">Astra Reach</h3>
              <p className="text-[13px] text-[#6B7280]">Autonomous multi-channel outreach engine.</p>
            </div>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/products/astra-tools')}
            className="group relative p-8 rounded-3xl bg-white border border-black/[0.06] hover:border-red-500/30 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative z-10 transform group-hover:translate-y-[-4px] transition-transform duration-500">
              <ShieldAlert className="w-8 h-8 text-red-500 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-2">Astra Guard</h3>
              <p className="text-[13px] text-[#6B7280]">Real-time threat detection and automated response protocols.</p>
            </div>
          </motion.div>

        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => navigate('/products/astra-tools')}
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-black/[0.02] px-8 text-[12px] font-display font-bold uppercase tracking-[0.15em] text-black transition-all hover:bg-black hover:text-white hover:border-transparent gap-3"
          >
            Explore All 20+ Modules <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
