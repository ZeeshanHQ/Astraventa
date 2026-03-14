import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
 Code2,
 Terminal,
 Globe,
 Zap,
 Layers,
 Activity,
 ArrowRight,
 Monitor,
 Cpu,
 CheckCircle2,
 LineChart,
 FileText
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";

// ─── Stitch Primitive: Terminal & velocity Mockup (Hero Right Side) ────────────
const StitchTerminal = () => {
 return (
 <div className="relative w-full h-[400px] bg-[#0A0A0A] rounded-3xl border border-slate-800 p-6 overflow-hidden flex flex-col shadow-2xl font-mono text-xs">
 <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4 z-10 w-full">
 <div className="flex gap-2">
 <div className="w-3 h-3 rounded-full bg-slate-700" />
 <div className="w-3 h-3 rounded-full bg-slate-700" />
 <div className="w-3 h-3 rounded-full bg-slate-700" />
 </div>
 <div className="text-[10px] uppercase tracking-[0.2em] text-[#0066FF] font-bold flex items-center gap-2">
 <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full animate-pulse" />
 Production Build
 </div>
 </div>
 
 <div className="flex-1 space-y-3 overflow-hidden">
 <div className="flex gap-4">
 <span className="text-pink-500">import</span>
 <span className="text-white">{"{ "}DataLayer{" } "}</span>
 <span className="text-pink-500">from</span>
 <span className="text-emerald-400">'@/core'</span>
 </div>
 <div className="text-slate-500">// Initialize high-velocity edge node</div>
 <div className="flex gap-4">
 <span className="text-blue-400">const</span>
 <span className="text-white">app = </span>
 <span className="text-pink-500">await</span>
 <span className="text-blue-400">deploy</span>
 <span className="text-white">('us-east-1')</span>
 </div>
 
 <div className="pt-8 space-y-1">
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 1 }}
 className="text-emerald-500"
 >
 ✔ Compiled successfully in 142ms
 </motion.div>
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 1.5 }}
 className="text-blue-400"
 >
 λ Next.js 15.1.0 (Edge Runtime)
 </motion.div>
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: 2 }}
 className="text-white"
 >
 ○ /api/v1/sync <span className="float-right text-slate-500">1.2 kB</span>
 </motion.div>
 </div>

 {/* Animated Scan Line */}
 <motion.div 
 className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-[#0066FF]/10 to-transparent pointer-events-none"
 animate={{ top: ['-100%', '200%'] }}
 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
 />
 </div>
 </div>
 );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const WebEngineering = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraMarket AI",
      tagline: "Market Intelligence Engine",
      icon: LineChart,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      href: "/tools/astra-market"
    },
    {
      title: "AstraFlow AI",
      tagline: "High-Throughput ETL",
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-600/10",
      href: "/tools/astra-flow"
    },
    {
      title: "AstraPulse AI",
      tagline: "Real-time Web Observability",
      icon: Activity,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      href: "/tools/astra-pulse"
    }
  ];

  const fadeUp = {
 initial: { opacity: 0, y: 30 },
 whileInView: { opacity: 1, y: 0 },
 viewport: { once: true },
 transition: { duration: 0.8, ease: "easeOut" as const }
 };

 return (
 <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0066FF]/20 overflow-x-hidden font-sans transition-colors duration-700">
 <Header />

 <main className="pt-20">
 {/* ─── HERO (50/50 Split) ────────────────────────────────────────────────── */}
 <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
 {/* Subtle grid background */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
 
 <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-32">
 
 {/* Left Content (Minimalist) */}
 <div>
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-[12px] font-mono uppercase tracking-[0.2em] text-[#0066FF] mb-8 shadow-sm">
 <Terminal className="w-4 h-4" /> Edge Architecture
 </div>
 <h1 className="mb-6 text-slate-900 leading-none">
 Web & Infrastructure <br />
 <span className="text-[#0066FF]">Engineering.</span>
 </h1>
 <div className="text-slate-500 max-w-lg mb-12">
 We engineer high-velocity web platforms using Next.js and React. Optimized for sub-second delivery, global scalability, and extreme performance at the edge.
 </div>
 <Button className="h-14 px-8 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-full font-heading font-bold flex items-center gap-3 transition-transform border-none shadow-xl shadow-[#0066FF]/20" asChild>
 <Link to="/contact">
 Initialize Deployment <ArrowRight className="w-5 h-5" />
 </Link>
 </Button>
 </div>

 {/* Right Content (Interactive Stitch Component) */}
 <div className="relative w-full">
 <StitchTerminal />
 </div>

 </motion.div>
 </section>

 {/* ─── ARCHITECTURE (Technical Schematic) ─────────────────────────────────── */}
 <section className="py-32 px-6 relative border-t border-slate-100 bg-slate-50/50">
 <div className="max-w-[1400px] mx-auto">
 <motion.div {...fadeUp} className="mb-20 text-center">
 <h2 className="text-slate-900 mb-6">Velocity Stack</h2>
 <div className="text-slate-500 max-w-2xl mx-auto">
 Our proprietary engineering framework for modern, sub-second web applications.
 </div>
 </motion.div>

 {/* Schematic Flow Diagram */}
 <div className="relative w-full h-auto min-h-[400px] bg-white rounded-3xl border border-slate-200 p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
 {/* Extremely thin lines connecting elements */}
 <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#0066FF]/30 hidden lg:block -translate-y-1/2" />
 
 {[
 { step: "01", title: "Core", desc: "Next.js 15 & React 19", icon: Cpu },
 { step: "02", title: "Styling", desc: "Tailwind & Motion", icon: Layers },
 { step: "03", desc: "SSR / ISR Hybrid", title: "Data Layer", icon: Globe },
 { step: "04", title: "Vercel / AWS", desc: "Edge Delivery", icon: Activity }
 ].map((node, i) => {
 const Icon = node.icon;
 return (
 <motion.div 
 key={i} 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.2 }}
 className="relative z-10 flex flex-col items-center bg-white p-6 rounded-2xl border-[0.5px] border-[#0066FF]/20 w-full lg:w-64 shadow-md"
 >
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[0.5px] bg-[#0066FF]" />
 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[0.5px] bg-[#0066FF]" />
 
 <div className="text-[10px] font-mono text-[#0066FF] mb-4 tracking-widest uppercase">Layer {node.step}</div>
 <Icon className="w-8 h-8 text-slate-800 mb-4 stroke-[1px]" />
 <h4 className="text-slate-900 text-lg font-bold mb-2">{node.title}</h4>
 <p className="text-[12px] text-slate-500 text-center font-mono">{node.desc}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* ─── FEATURES (Bento Grid) ────────────────────────────────────────────── */}
 <section className="py-32 px-6 relative border-t border-slate-100 bg-white">
 <div className="max-w-[1400px] mx-auto">
 <motion.div {...fadeUp} className="mb-16">
 <h2 className="text-slate-900 mb-6">Engineering Excellence</h2>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Feature 1 (Spans 2 columns) */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.1 }}
 whileHover={{ scale: 0.98 }}
 className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-0" />
 <Globe className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-2xl text-slate-900 mb-4">SSR & ISR Architectures</h3>
 <p className="text-slate-500">
 We leverage Server-Side Rendering and Incremental Static Regeneration to ensure instant page loads while maintaining real-time data accuracy across global edge nodes.
 </p>
 </div>
 </motion.div>

 {/* Feature 2 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.2 }}
 whileHover={{ scale: 0.98 }}
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <Zap className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-xl text-slate-900 mb-4">Core Web Vitals</h3>
 <p className="text-slate-500">
 Obsessive optimization for LCP, FID, and CLS scores, targeting a 100/100 Lighthouse benchmark.
 </p>
 </div>
 </motion.div>

 {/* Feature 3 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.3 }}
 whileHover={{ scale: 0.98 }}
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <Code2 className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-xl text-slate-900 mb-4">Clean Code Standards</h3>
 <p className="text-slate-500">
 Maintainable, strictly-typed codebases designed to evolve without technical debt.
 </p>
 </div>
 </motion.div>

 {/* Feature 4 (Spans 2 columns) */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.4 }}
 whileHover={{ scale: 0.98 }}
 className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#0066FF]/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-0" />
 <Monitor className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-2xl text-slate-900 mb-4">Cross-Device Perfection</h3>
 <p className="text-slate-500">
 Fluid, responsive components engineered for everything from 4K enterprise displays to low-bandwidth mobile viewports—delivered as a standard.
 </p>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

  {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
  <section className="pb-12 bg-white">
    <AstraEcosystemSync tools={relatedTools} />
  </section>

  </main>
 <Footer />
 </div>
 );
};

export default WebEngineering;
