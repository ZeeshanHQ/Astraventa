import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { BrainCircuit, Cpu, Layout, BarChart3, Database, Radio, Zap, ShieldCheck, Activity } from "lucide-react";
import { AstraventaLogo } from "./AstraventaLogo";

const NeuralPath = ({ d, delay = 0 }: { d: string; delay?: number }) => {
 return (
 <g>
 <path
 d={d}
 fill="none"
 stroke="#2910E5"
 strokeWidth="0.5"
 className="opacity-10"
 />
 <motion.circle
 r="1.5"
 fill="#2910E5"
 initial={{ offsetDistance: "0%" }}
 animate={{ offsetDistance: "100%" }}
 transition={{
 duration: 3,
 repeat: Infinity,
 ease: "linear",
 delay: delay,
 }}
 style={{ offsetPath: `path("${d}")` }}
 className="shadow-[0_0_8px_#2910E5]"
 />
 </g>
 );
};

const GlassModule = ({ 
 title, 
 subtitle, 
 icon: Icon, 
 className 
}: { 
 title: string; 
 subtitle: string; 
 icon: any; 
 className?: string;
}) => (
 <motion.div
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 whileHover={{ y: -5, transition: { duration: 0.3 } }}
 className={`absolute p-5 bg-white/40 backdrop-blur-xl border border-slate-200/40 rounded-2xl z-20 overflow-hidden ${className}`}
 >
 <div className="noise-overlay" />
 <div className="flex items-center gap-3 relative z-10" style={{ fontStyle: 'normal' }}>
 <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
 <Icon className="w-5 h-5 text-[#2910E5]" strokeWidth={1.5} />
 </div>
 <div>
 <h5 className="technical-label !text-[#0F172A] mb-1">MODULE {title}</h5>
 <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{subtitle}</div>
 </div>
 </div>
 </motion.div>
);

export const WhyAstraventa = () => {
 const mouseX = useMotionValue(0);
 const mouseY = useMotionValue(0);

 const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
 const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

 useEffect(() => {
 const handleMouseMove = (e: MouseEvent) => {
 const { clientX, clientY } = e;
 const moveX = clientX - window.innerWidth / 2;
 const moveY = clientY - window.innerHeight / 2;
 mouseX.set(moveX);
 mouseY.set(moveY);
 };

 window.addEventListener("mousemove", handleMouseMove);
 return () => window.removeEventListener("mousemove", handleMouseMove);
 }, [mouseX, mouseY]);

 return (
 <section id="why-astraventa" className="py-10 md:py-12 bg-transparent relative overflow-hidden section-transition">
 {/* BACKGROUND SCENE - Reduced opacity to blend with global grid */}
 <div className="absolute inset-0 z-0 pointer-events-none">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" />
 <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.05]" />
 <motion.div 
 style={{ x: springX, y: springY }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2910E5]/[0.02] rounded-full blur-[120px]"
 />
 </div>

 <div className="max-w-[1400px] mx-auto px-6 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
 
 {/* THE HYBRID CHECKLIST (Left) */}
 <div className="lg:col-span-5 order-2 lg:order-1">
 <div className="mb-12" style={{ fontStyle: 'normal' }}>
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
 <span className="w-1.5 h-1.5 rounded-full bg-[#2910E5] animate-pulse" />
 <span className="technical-label !text-slate-700">The Hybrid Advantage</span>
 </div>

  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
  Why Global Ventures / <br />
  <span className="text-primary">Trust Astraventa.</span>
  </h3>

 <p className="text-lg text-slate-500 font-medium font-sans leading-relaxed max-w-xl">
 Bridging the gap between raw engineering and product-market fit. We architect high-performance systems for world-class founders.
 </p>
 </div>

 {/* Checklist items */}
 <div className="flex flex-col gap-y-10" style={{ fontStyle: 'normal' }}>
 {[
 { 
 label: "AI-First Strategy", 
 title: "NEURAL SOLUTIONS", 
 icon: BrainCircuit,
 desc: "Customized LLM integrations and automated reasoning engines."
 },
 { 
 label: "Fast & Beautiful", 
 title: "KINETIC DESIGN", 
 icon: Activity,
 desc: "High-fidelity micro-interactions meet ultra-performance code."
 },
 { 
 label: "Modern Stack", 
 title: "MODERN STACK", 
 icon: Cpu,
 desc: "Built with Rust, Next.js, and Supabase for infinite scale."
 },
 { 
 label: "Automated Success", 
 title: "AGENTIC FLOW", 
 icon: Zap,
 desc: "Autonomous workflows that handle growth while you sleep."
 }
 ].map((item, idx) => (
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: idx * 0.1 }}
 key={item.title} 
 className="flex items-start gap-6 group"
 >
 <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-[#2910E5]/30 group-hover:bg-[#2910E5]/[0.02] transition-colors duration-500">
 <item.icon className="w-5 h-5 text-[#2910E5]" strokeWidth={1} />
 </div>
 <div>
 <span className="technical-label !text-slate-400 !text-[10px] mb-1 block">
 {item.label}
 </span>
 <h4 className="text-sm font-bold text-[#0F172A] font-heading tracking-tight group-hover:text-primary transition-colors duration-300">
 {item.title}
 </h4>
 <p className="text-[13px] text-slate-500 font-medium leading-relaxed mt-1 opacity-80">
 {item.desc}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 {/* THE 'CORE PULSE' HUB (Right) */}
 <div className="lg:col-span-7 order-1 lg:order-2 h-[600px] relative flex items-center justify-center">
 
 <div className="relative z-30">
 <motion.div 
 animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 className="absolute inset-0 rounded-full bg-[#2910E5] blur-3xl scale-150"
 />
 
 <div className="relative w-40 h-40 rounded-full border border-[#2910E5]/10 flex items-center justify-center bg-white/40 backdrop-blur-xl">
 <div className="absolute inset-2 rounded-full border border-[#2910E5]/20 animate-spin-slow" />
 <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center p-4 border border-slate-100 z-10">
 <AstraventaLogo iconOnly size="lg" />
 </div>
 </div>
 <div className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 text-center whitespace-nowrap" style={{ fontStyle: 'normal' }}>
 <span className="technical-label !text-[#0F172A] !text-[11px]">Astraventa Core</span>
 <div className="flex items-center justify-center gap-1 mt-1">
 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
 <span className="technical-label !text-slate-400 !text-[9px] !tracking-normal">PULSE_NOMINAL</span>
 </div>
 </div>
 </div>

 <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 600">
 <NeuralPath d="M 350 300 C 250 300, 250 150, 150 150" />
 <NeuralPath d="M 350 300 C 250 300, 250 450, 150 450" delay={0.8} />
 <NeuralPath d="M 350 300 C 450 300, 450 150, 550 150" delay={1.5} />
 <NeuralPath d="M 350 300 C 450 300, 450 450, 550 450" delay={2.2} />
 </svg>

 <GlassModule title="SaaS Products" subtitle="Tools for Growth" icon={Layout} className="top-[10%] left-[5%]" />
 <GlassModule title="Analytics" subtitle="Smart Data" icon={BarChart3} className="bottom-[10%] left-[5%]" />
 <GlassModule title="AI Agency" subtitle="Human Experts" icon={BrainCircuit} className="top-[10%] right-[5%]" />
 <GlassModule title="Dev Team" subtitle="Quality Code" icon={Database} className="bottom-[10%] right-[5%]" />
 </div>
 </div>
 </div>
 </section>
 );
};
