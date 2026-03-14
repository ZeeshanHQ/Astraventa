import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IntegrationEcosystem } from "@/components/IntegrationEcosystem";
import { ArchitectureStack } from "@/components/ArchitectureStack";
import { useRef } from "react";
import {
 Workflow,
 RefreshCw,
 Settings,
 Code2,
 BarChart3,
 ArrowRight,
 Database,
 Cpu,
 Globe,
 GitBranch,
 CheckCircle2,
 Clock,
 Zap,
 Layers,
 Network,
 FileText,
 Mail
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { N8nWorkflowBlock } from "@/components/ui/n8n-workflow-block-shadcnui";

// ─── Visual Engine: Neural Data Flow ───────────────────────────────────────────
const NeuralDataFlowVisual = () => {
 return (
 <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
 {/* Active Aura Pulse */}
 <motion.div 
 className="absolute inset-0 bg-[#2910E5] rounded-full blur-[80px]"
 animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 />
 
 {/* Neural Paths Pulsing Inwards */}
 <svg className="absolute inset-0 w-full h-full pointer-events-none">
 {/* Static Path Backgrounds */}
 <line x1="15%" y1="15%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
 <line x1="85%" y1="15%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
 <line x1="15%" y1="85%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
 <line x1="85%" y1="85%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
 
 {/* Electric Blue Pulsing Lights */}
 <motion.line x1="15%" y1="15%" x2="50%" y2="50%" stroke="#2910E5" strokeWidth="2" strokeDasharray="60 200" 
 initial={{ strokeDashoffset: 260 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
 <motion.line x1="85%" y1="15%" x2="50%" y2="50%" stroke="#2910E5" strokeWidth="2" strokeDasharray="60 200" 
 initial={{ strokeDashoffset: 260 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.6 }} />
 <motion.line x1="15%" y1="85%" x2="50%" y2="50%" stroke="#2910E5" strokeWidth="2" strokeDasharray="60 200" 
 initial={{ strokeDashoffset: 260 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.2 }} />
 <motion.line x1="85%" y1="85%" x2="50%" y2="50%" stroke="#2910E5" strokeWidth="2" strokeDasharray="60 200" 
 initial={{ strokeDashoffset: 260 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.8 }} />
 </svg>

 {/* Central Astra Engine Node */}
 <motion.div 
 className="relative z-10 w-28 h-28 bg-white rounded-2xl border border-[#2910E5]/30 flex items-center justify-center shadow-[0_0_40px_rgba(41,16,229,0.2)] transition-transform duration-500 cursor-pointer"
 animate={{ y: [-4, 4, -4] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 >
 <div className="absolute inset-1.5 border border-dashed border-[#2910E5]/20 rounded-xl" />
 <Zap className="w-10 h-10 text-[#2910E5] stroke-[1.5px] z-10 relative" />
 <div className="absolute inset-0 bg-gradient-to-br from-[#2910E5]/5 to-[#2910E5]/10 rounded-2xl" />
 <div className="absolute w-2 h-2 bg-[#2910E5] rounded-full top-3 right-3 shadow-[0_0_8px_#2910E5] animate-pulse" />
 </motion.div>
 </div>
 );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const AutomationService = () => {
 const heroRef = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
 const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

 // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
 const relatedTools = [
   {
     title: "AstraFlow AI",
     tagline: "Smart Data-Entry Agent",
     icon: FileText,
     color: "text-purple-500",
     bg: "bg-purple-500/10",
     href: "/tools/astra-flow"
   },
   {
     title: "AstraReach AI",
     tagline: "Autonomous Email Operations",
     icon: Mail,
     color: "text-blue-500",
     bg: "bg-blue-500/10",
     href: "/tools/astra-reach"
   },
   {
     title: "AstraScrape AI",
     tagline: "Enterprise Data Extraction",
     icon: Globe,
     color: "text-emerald-500",
     bg: "bg-emerald-500/10",
     href: "/tools/astra-scrape"
   }
 ];

 const fadeUp: any = {
 initial: { opacity: 0, y: 30 },
 whileInView: { opacity: 1, y: 0 },
 viewport: { once: true },
 transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
 };

 return (
 <div className="min-h-screen bg-transparent selection:bg-[#2910E5]/10 overflow-x-hidden">
 <Header />

 <main className="pt-20">
 {/* ─── Hero (High-Velocity Engineering / Frictionless Movement) ───────────── */}
 <section ref={heroRef} className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
 {/* Architectural Background */}
 <div 
 className="absolute inset-0 pointer-events-none opacity-[0.05]"
 style={{ 
 backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
 backgroundSize: '40px 40px'
 }}
 />
 
 <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center py-24">
 
 {/* Left Content (60%) */}
 <div className="max-w-3xl">
 <motion.div 
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.6 }}
 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-sm"
 >
 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
 <span className="technical-label !text-slate-600">[ STATUS: ENGINE_ACTIVE ]</span>
 </motion.div>
 
 <h1>
 Autonomous Pipelines. <br />
 <span className="text-primary">Zero Human Latency.</span>
 </h1>
 
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-lg md:text-2xl text-slate-500 max-w-xl mb-12 font-medium leading-relaxed"
 >
 Orchestrating complex enterprise workflows into event-driven, self-correcting systems. Build for speed; deploy for scale.
 </motion.p>
 
 <div className="flex flex-wrap gap-5">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.3 }}
 >
 <Button className="btn-primary h-14 px-8 text-sm group" asChild>
 <Link to="/contact">
 DEPLOY PIPELINE &rarr;
 </Link>
 </Button>
 </motion.div>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.45 }}
 >
 <Button variant="outline" className="btn-ghost h-14 px-8 text-sm" asChild>
 <Link to="/portfolio">VIEW SYSTEM SPECS</Link>
 </Button>
 </motion.div>
 </div>
 </div>

 {/* Right Interactive Component (40%) */}
 <motion.div 
 initial={{ opacity: 0, x: 50 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 1, delay: 0.5 }}
 className="relative w-full"
 >
 <NeuralDataFlowVisual />
 </motion.div>

 </motion.div>
 </section>


 {/* ─── ARCHITECTURE SCHEMATIC ────────────────────────────────────────── */}
 <section className="py-40 px-6 relative border-t border-slate-100 bg-slate-50/40">
 {/* Decorative side lines */}
 <div className="absolute left-1/4 top-0 w-px h-full bg-slate-200 hidden lg:block" />
 
 <div className="max-w-7xl mx-auto relative z-10">
 <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
 <div className="max-w-2xl">
 <motion.h2 {...fadeUp} className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">Logical Infrastructure</motion.h2>
 <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-slate-500 font-medium">BPMN-compliant workflow design mapped across our high-performance execution mesh.</motion.p>
 </div>
 <div className="hidden lg:block w-32 h-1 bg-blue-600 mb-4" />
 </div>

 <div className="relative w-full h-auto bg-white rounded-[3rem] border border-slate-200 p-12 md:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-slate-200/50">
 {/* Dash connecting lines */}
 <div className="absolute top-1/2 left-[15%] right-[15%] h-px border-t-2 border-dashed border-slate-200 hidden lg:block -translate-y-1/2" />
 
 {[
 { step: "01", title: "Trigger", desc: "Event-based Crons", icon: Clock, color: "blue" },
 { step: "02", title: "Logic", desc: "Condition Mapping", icon: GitBranch, color: "slate" },
 { step: "03", title: "Action", desc: "API Orchestration", icon: Globe, color: "blue" },
 { step: "04", title: "Log", desc: "Immutable Audits", icon: CheckCircle2, color: "slate" }
 ].map((node, i) => {
 const Icon = node.icon as any;
 const isBlue = node.color === "blue";
 return (
 <motion.div 
 key={i} 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.15 }}
 className="glass-card aura-glow relative z-10 flex flex-col items-center p-8 rounded-3xl w-full lg:w-72 group transition-colors"
 >
 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${isBlue ? 'bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-slate-50 text-slate-600 group-hover:bg-slate-900 group-hover:text-white'}`}>
 <Icon className="w-8 h-8 stroke-[1.5px]" />
 </div>
 <div className="technical-label !text-primary mb-3">Stage {node.step}</div>
 <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{node.title}</h4>
 <p className="text-sm text-slate-500 text-center font-medium leading-relaxed">{node.desc}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* ─── LIVE WORKFLOW ORCHESTRATOR ───────────────────────────────────── */}
 <section className="py-40 px-6 relative border-t border-slate-100 bg-white">
 <div className="max-w-7xl mx-auto">
 <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
 <div className="max-w-2xl">
 <motion.h2 {...fadeUp} className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">Live Workflow Builder</motion.h2>
 <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-slate-500 font-medium">Interactive blueprinting for high-velocity automation pipelines. Drag, connect, and deploy in real-time.</motion.p>
 </div>
 <div className="hidden lg:block w-32 h-1 bg-emerald-500 mb-4" />
 </div>

 <div className="relative z-10 bg-slate-50/50 rounded-[3rem] p-4 sm:p-8 border border-slate-200 shadow-xl shadow-slate-100">
 <N8nWorkflowBlock />
 </div>
 </div>
 </section>

 {/* ─── BENTO CAPABILITIES ────────────────────────────────────────────── */}
 <section className="py-40 px-6 relative border-t border-slate-100 bg-white">
 <div className="max-w-7xl mx-auto">
 <motion.div {...fadeUp} className="mb-24">
 <h2>Core Modules</h2>
 <p className="text-xl text-slate-500 max-w-xl font-medium">Deterministic sub-systems built for reliability at global scale.</p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {/* Feature 1 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.1 }}
 className="lg:col-span-2 bg-slate-50/50 border border-slate-100 rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden relative"
 >
 <div 
 className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800')] bg-cover mix-blend-multiply"
 />
 <div className="relative z-10">
 <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0d59f2] mb-10 shadow-sm group- transition-transform">
 <Workflow className="w-8 h-8" />
 </div>
 <h3>Business Process Orchestration</h3>
 <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
 We map complex manual dependencies into deterministic state-machines. Eliminate single points of failure with redundant exit nodes and human-in-the-loop validation.
 </p>
 </div>
 <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#0d59f2]">
 <span className="w-2 h-2 rounded-full bg-blue-500" /> Latency Optimized
 </div>
 </motion.div>

 {/* Feature 2 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.2 }}
 className="glass-card aura-glow rounded-[3rem] p-12 flex flex-col justify-between group relative"
 >
 <RefreshCw className="w-12 h-12 text-primary mb-10 stroke-[1.5px]" />
 <div>
 <h3>Synchronous Data Pipelines</h3>
 <p className="text-lg text-slate-500 font-medium leading-relaxed">
 High-throughput ETL systems that extract, sanitize, and reconstruct data across cross-platform environment APIs.
 </p>
 </div>
 </motion.div>

 {/* Feature 3 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.3 }}
 className="bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-between group relative overflow-hidden"
 >
 <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full" />
 <Settings className="w-12 h-12 text-blue-400 mb-10 stroke-[1.5px] relative z-10" />
 <div className="relative z-10">
 <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-tight">Autonomous Browser Agents</h3>
 <p className="text-lg text-slate-400 font-medium leading-relaxed mb-6">
 Harnessing AI to navigate legacy web interfaces that lack native APIs.
 </p>
 <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-colors">
 Deploy Robot <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </motion.div>

 {/* Feature 4 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.4 }}
 className="lg:col-span-2 bg-white border border-slate-200 rounded-[3rem] p-12 flex flex-col md:flex-row items-center gap-12 group shadow-xl shadow-slate-100"
 >
 <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-center p-8">
 <Network className="w-24 h-24 text-slate-200 stroke-[1px]" />
 </div>
 <div className="flex-1">
 <Code2 className="w-10 h-10 text-[#0d59f2] mb-8 stroke-[1.5px]" />
 <h3>Integration Ebus</h3>
 <p className="text-xl text-slate-500 font-medium leading-relaxed">
 Connect fragmented CRM, ERP, and bespoke stacks into a unified messaging layer. Real-time consistency across every terminal.
 </p>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 <IntegrationEcosystem />
 <ArchitectureStack />

 {/* ─── TRUST STATS ────────────────────────────────────────────────────── */}
 <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
 <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
 <div className="flex flex-col border-l-2 border-blue-600 pl-8">
 <span className="text-6xl font-black text-slate-900 tracking-tighter mb-2">95%</span>
 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Manual Hours Saved</span>
 </div>
 <div className="flex flex-col border-l-2 border-blue-600 pl-8">
 <span className="text-6xl font-black text-slate-900 tracking-tighter mb-2">1M+</span>
 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Events</span>
 </div>
 <div className="flex flex-col border-l-2 border-blue-600 pl-8">
 <span className="text-6xl font-black text-slate-900 tracking-tighter mb-2">0</span>
 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Missing Packets</span>
 </div>
 <div className="flex flex-col border-l-2 border-blue-600 pl-8">
 <span className="text-6xl font-black text-slate-900 tracking-tighter mb-2">24h</span>
 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Setup Pipeline</span>
 </div>
 </div>
 </section>

  {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
  <section className="pb-12 bg-white">
    <AstraEcosystemSync tools={relatedTools} />
  </section>

 {/* ─── CTA ────────────────────────────────────────────────────────────── */}
 <section className="py-40 px-6 bg-white overflow-hidden relative">
 <div className="max-w-5xl mx-auto text-center relative z-10">
 <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter text-slate-900">Build Your Engine</h2>
 <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl md:text-3xl text-slate-500 mb-16 font-medium max-w-3xl mx-auto leading-tight">
 Turn your operational chaos into silent, deterministic automation. Redefine efficiency with AstraAI.
 </motion.p>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
 <Button className="btn-primary h-20 px-12 text-xl" asChild>
 <Link to="/contact">Request Architecture Call</Link>
 </Button>
 <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-3">
 <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
 Priority Setup Available
 </div>
 </div>
 </div>
 
 {/* Decorative floating lines */}
 <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-[0.05] pointer-events-none">
 <div className="absolute bottom-10 left-1/4 w-px h-64 bg-slate-900" />
 <div className="absolute bottom-40 right-1/4 w-px h-96 bg-slate-900" />
 </div>
 </section>

 </main>
 <Footer />
 </div>
 );
};

export default AutomationService;
