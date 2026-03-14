import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";

export const AstraToolsNetwork = () => {
 const navigate = useNavigate();
 return (
 <section className="relative bg-white border-y border-slate-100">
 
 {/* The Morphing Experience */}
 <div className="relative z-10">
 <ScrollMorphHero />
 </div>

 {/* Final Global CTA - Positioned below the Hero within the same section flow */}
 <div className="max-w-7xl mx-auto px-6 relative z-20 pb-20 -mt-20 flex flex-col items-center">
 <motion.div 
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.3 }}
 className="flex flex-col items-center"
 >
 <button 
 onClick={() => navigate('/products/astra-tools')}
 className="group relative px-10 py-5 bg-[#2910E5] rounded-full overflow-hidden shadow-[0_0_25px_rgba(41,16,229,0.15)] hover:shadow-[0_0_40px_rgba(41,16,229,0.4)] transition-all duration-500"
 >
 <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
 <div className="relative flex items-center gap-3">
 <span className="text-sm font-bold text-white tracking-[0.2em] font-heading uppercase">Explore Full Network</span>
 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
 <ArrowUpRight className="w-4 h-4 text-white" />
 </div>
 </div>
 </button>
 
 <p className="mt-8 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">
 20+ Specialized Modules Ready for Deployment
 </p>
 </motion.div>
 </div>

 </section>
 );
};
