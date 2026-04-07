import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { BrainCircuit, Cpu, Layout, BarChart3, Database, Zap, Activity } from "lucide-react";
import { AstraventaLogo } from "./AstraventaLogo";

const NeuralPath = ({ d, delay = 0 }: { d: string; delay?: number }) => {
 return (
 <g>
 <path
 d={d}
 fill="none"
 stroke="#000000"
 strokeWidth="0.5"
 className="opacity-10"
 />
 <motion.circle
 r="1.5"
 fill="hsl(var(--primary))"
 initial={{ offsetDistance: "0%" }}
 animate={{ offsetDistance: "100%" }}
 transition={{
 duration: 3,
 repeat: Infinity,
 ease: "linear",
 delay: delay,
 }}
 style={{ offsetPath: `path("${d}")` }}
 className="shadow-[0_0_8px_hsl(var(--primary))]"
 />
 </g>
 );
};

const StatusModule = ({ 
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
 className={`absolute px-4 py-3 bg-white/90 backdrop-blur-xl border border-black/[0.06] rounded-full z-20 shadow-lg ${className}`}
 >
 <div className="flex items-center gap-2.5 relative z-10">
 <div className="text-primary">
 <Icon className="w-4 h-4" strokeWidth={1.5} />
 </div>
 <div>
 <h5 className="text-[10px] font-display font-normal text-black/80 uppercase tracking-[0.15em] leading-none">{title}</h5>
 <div className="text-[9px] font-display font-normal text-black/40 uppercase tracking-[0.1em] mt-0.5">{subtitle}</div>
 </div>
 <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse ml-1 flex-shrink-0" />
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
 <section id="why-astraventa" className="py-24 bg-white relative overflow-hidden section-transition">
 {/* BACKGROUND SCENE */}
 <div className="absolute inset-0 z-0 pointer-events-none">
 <div className="absolute inset-0 bg-white" />
 <motion.div 
 style={{ x: springX, y: springY }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/[0.02] rounded-full blur-[120px]"
 />
 </div>

 <div className="max-w-[1400px] mx-auto px-6 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
 
 {/* THE HYBRID CHECKLIST (Left) */}
 <div className="lg:col-span-5 order-2 lg:order-1">
 <div className="mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8">
 <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
 <span className="text-[11px] font-display font-normal text-black/60 uppercase tracking-[0.15em]">The Hybrid Advantage</span>
 </div>

 <h3 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl lg:text-5xl mb-6">
 Why Global Ventures<br />
 <span className="text-[hsl(var(--primary))]">Choose Astraventa.</span>
 </h3>

 <p className="text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] max-w-xl">
 Bridging the gap between raw engineering and product-market fit. We architect high-performance systems for world-class founders.
 </p>
 </div>

 {/* Checklist items */}
 <div className="flex flex-col gap-y-9">
 {[
 { 
 label: "AI-First Strategy", 
 title: "NEURAL SOLUTIONS", 
 icon: BrainCircuit,
 desc: "Customized LLM integrations and automated reasoning engines."
 },
 { 
 label: "Precise & Beautiful", 
 title: "PRECISION DESIGN", 
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
 className="flex items-start gap-5 group"
 >
 <div className="flex-shrink-0 mt-0.5 text-black/30 group-hover:text-primary transition-colors duration-300">
 <item.icon className="w-5 h-5" strokeWidth={1.5} />
 </div>
 <div>
 <span className="text-[10px] font-display font-normal text-black/30 uppercase tracking-[0.15em] mb-1 block">
 {item.label}
 </span>
 <h4 className="text-[13px] font-display font-normal text-black uppercase tracking-[0.12em] group-hover:text-[hsl(var(--primary))] transition-colors duration-300 mb-1">
 {item.title}
 </h4>
 <p className="text-[13px] text-[#4B5563] font-display font-normal leading-[1.7]">
 {item.desc}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 {/* THE 'CORE PULSE' HUB (Right) */}
 <div className="lg:col-span-7 order-1 lg:order-2 h-[560px] relative flex items-center justify-center">
 
 <div className="relative z-30">
 <motion.div 
 animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-150"
 />
 
 {/* Central Hub — clean, no black bg */}
 <div className="relative w-36 h-36 rounded-full border border-black/[0.06] flex items-center justify-center bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
 <div className="absolute inset-2 rounded-full border border-black/[0.04] animate-spin-slow" />
 <div className="w-24 h-24 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center p-4 z-10">
 <AstraventaLogo iconOnly size="lg" />
 </div>
 </div>
 <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
 <span className="text-[11px] font-display font-normal text-black uppercase tracking-[0.1em]">Astraventa Core</span>
 <div className="flex items-center justify-center gap-1 mt-1">
 <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
 <span className="text-[9px] font-display font-normal text-black/40 uppercase tracking-[0.15em]">PULSE_NOMINAL</span>
 </div>
 </div>
 </div>

 <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 600">
 <NeuralPath d="M 350 300 C 250 300, 250 150, 150 150" />
 <NeuralPath d="M 350 300 C 250 300, 250 450, 150 450" delay={0.8} />
 <NeuralPath d="M 350 300 C 450 300, 450 150, 550 150" delay={1.5} />
 <NeuralPath d="M 350 300 C 450 300, 450 450, 550 450" delay={2.2} />
 </svg>

 <StatusModule title="SaaS Products" subtitle="Tools for Growth" icon={Layout} className="top-[10%] left-[5%]" />
 <StatusModule title="Analytics" subtitle="Smart Data" icon={BarChart3} className="bottom-[10%] left-[5%]" />
 <StatusModule title="AI Agency" subtitle="Human Experts" icon={BrainCircuit} className="top-[10%] right-[5%]" />
 <StatusModule title="Dev Team" subtitle="Quality Code" icon={Database} className="bottom-[10%] right-[5%]" />
 </div>
 </div>
 </div>
 </section>
 );
};
