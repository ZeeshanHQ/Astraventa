import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ShinyButton } from "@/components/ui/shiny-button";
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
  <ShinyButton 
  onClick={() => navigate('/products/astra-tools')}
  className="h-10 px-6 rounded-full font-display font-medium text-[12px] uppercase tracking-[0.1em]"
  >
  <span className="flex items-center gap-2.5 pt-[2px]">
  Explore Full Network
  <ArrowUpRight className="w-3.5 h-3.5" />
  </span>
  </ShinyButton>
 
 <p className="mt-8 text-[11px] font-display font-normal text-slate-400 uppercase tracking-[0.15em]">
 20+ Specialized Modules Ready for Deployment
 </p>
 </motion.div>
 </div>

 </section>
 );
};
