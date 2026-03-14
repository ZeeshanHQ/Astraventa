import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bot, BarChart3, Server, ArrowRight, Database, Network, ShieldCheck, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
 {
 id: "astra-ai-concierge",
 title: "Astra AI Concierge",
 subtitle: "Autonomous Customer Operations",
 description: "Enterprise-grade conversational AI that integrates seamlessly with your existing databases to resolve complex customer queries, process transactions, and escalate intelligently—all with sub-second latency.",
 icon: Bot,
 highlights: ["Natural Language Processing", "Automated Resolution Paths", "CRM Data Sync"],
 visual: "ai-flow"
 },
 {
 id: "synapse-analytics",
 title: "Synapse Analytics",
 subtitle: "Predictive Data Engine",
 description: "Ingest, process, and visualize millions of data points in real-time. Our proprietary analytics engine uses machine learning to identify trends before they happen, giving you a distinct competitive advantage.",
 icon: BarChart3,
 highlights: ["Real-time Data Streaming", "Predictive Modeling", "Custom Dashboards"],
 visual: "analytics-dashboard"
 },
 {
 id: "scalable-infrastructure",
 title: "Cloud Infrastructure",
 subtitle: "Zero-Latency Hosting Environments",
 description: "High-availability, globally distributed server networks designed specifically for AI and heavy computational loads. Secure, scalable, and guaranteed 99.99% uptime for mission-critical applications.",
 icon: Server,
 highlights: ["Auto-scaling Node Clusters", "Edge Caching", "DDoS Protection"],
 visual: "server-mesh"
 }
];

export const Products = () => {
 const [activeIndex, setActiveIndex] = useState(0);

 return (
 <section id="products" className="py-32 md:py-48 bg-slate-50 relative overflow-hidden section-transition">
 {/* Structural Grid Background */}
 <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
 </div>

 <div className="max-w-7xl mx-auto px-6 relative z-10">
 <div className="mb-16 md:mb-24">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
 <span className="w-1.5 h-1.5 rounded-full bg-[#2910E5] animate-pulse" />
 <span className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em] font-heading">Our Architecture</span>
 </div>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 font-heading uppercase">
 Enterprise Product <br className="hidden md:block"/>
 <span className="text-[#2910E5]">Ecosystem.</span>
 </h2>
 <p className="text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
 We don't just build websites; we architect comprehensive digital systems designed for high-performance scale and autonomous operation.
 </p>
 </div>

 {/* High-Fidelity Interactive Dashboard Layout */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
 
 {/* Left Panel: Navigation Tabs */}
 <div className="lg:col-span-5 flex flex-col gap-4">
 {products.map((product, index) => {
 const isActive = activeIndex === index;
 return (
 <motion.div
 key={product.id}
 onClick={() => setActiveIndex(index)}
 whileHover={{ scale: isActive ? 1 : 1.02 }}
 className={`cursor-pointer p-6 rounded-3xl border transition-all duration-500 overflow-hidden relative ${
 isActive 
 ? "bg-white border-transparent shadow-2xl shadow-[#2910E5]/10" 
 : "bg-white/50 border-slate-200/50 hover:bg-white hover:border-slate-200 shadow-sm"
 }`}
 >
 {/* Active Indicator Line */}
 {isActive && (
 <motion.div 
 layoutId="active-indicator"
 className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2910E5]"
 />
 )}

 <div className="flex items-start gap-4">
 <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-500 delay-100 ${
 isActive ? "bg-[#2910E5]/10 text-[#2910E5]" : "bg-slate-100 text-slate-400"
 }`}>
 <product.icon className="w-6 h-6" />
 </div>
 
 <div>
 <h3 className={`text-xl font-bold font-heading tracking-tight mb-1 transition-colors duration-500 ${
 isActive ? "text-slate-900" : "text-slate-600"
 }`}>
 {product.title}
 </h3>
 <p className={`text-sm tracking-wide font-bold uppercase transition-colors duration-500 mb-3 ${
 isActive ? "text-[#2910E5]" : "text-slate-400"
 }`}>
 {product.subtitle}
 </p>
 
 <AnimatePresence>
 {isActive && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: "auto" }}
 exit={{ opacity: 0, height: 0 }}
 transition={{ duration: 0.3 }}
 >
 <p className="text-slate-500 text-sm font-medium leading-[1.7] mb-6">
 {product.description}
 </p>
 
 <ul className="space-y-2 mb-6">
 {product.highlights.map((highlight, idx) => (
 <li key={idx} className="flex items-center text-sm font-bold text-slate-700">
 <div className="w-4 h-4 rounded-full bg-[#2910E5]/10 flex items-center justify-center mr-3">
 <div className="w-1.5 h-1.5 rounded-full bg-[#2910E5]" />
 </div>
 {highlight}
 </li>
 ))}
 </ul>

 <Button variant="link" className="p-0 h-auto font-black text-[#2910E5] group/btn uppercase tracking-[0.2em] text-[10px]">
 View Documentation 
 <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
 </Button>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>

 {/* Right Panel: Architectural Visualizer */}
 <div className="lg:col-span-7 relative h-[400px] lg:h-auto min-h-[500px] rounded-3xl bg-slate-900 overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center">
 {/* Global Visualizer Grid */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
 
 {/* Terminal Header */}
 <div className="absolute top-0 w-full h-12 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm flex items-center px-4 z-20">
 <div className="flex gap-2">
 <div className="w-3 h-3 rounded-full bg-slate-700" />
 <div className="w-3 h-3 rounded-full bg-slate-700" />
 <div className="w-3 h-3 rounded-full bg-slate-700" />
 </div>
 <div className="mx-auto text-xs font-mono text-slate-500 tracking-widest flex items-center gap-2">
 <ShieldCheck className="w-3 h-3 text-emerald-500" /> SYSTEM ARCHITECTURE
 </div>
 </div>

 <AnimatePresence mode="wait">
 {activeIndex === 0 && (
 <motion.div
 key="ai-flow"
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 transition={{ duration: 0.5 }}
 className="w-full h-full pt-12 flex items-center justify-center relative p-8"
 >
 {/* Neural Flow Path */}
 <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
 <path
 d="M 100 250 C 200 250, 250 150, 350 150 C 450 150, 500 350, 600 350"
 fill="transparent"
 stroke="#2910E5"
 strokeWidth="2"
 strokeDasharray="5,5"
 />
 <path
 d="M 100 250 C 200 250, 250 350, 350 350 C 450 350, 500 150, 600 150"
 fill="transparent"
 stroke="#2910E5"
 strokeWidth="2"
 strokeDasharray="5,5"
 />
 </svg>
 
 {/* Nodes */}
 <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
 {/* User Node */}
 <div className="flex flex-col items-center gap-3">
 <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-[0_0_30px_-5px_#2910E5]">
 <Zap className="w-6 h-6 text-white" />
 </div>
 <span className="text-xs font-mono text-slate-400">INPUT_STREAM</span>
 </div>

 {/* AI Engine Node (Central) */}
 <div className="relative">
 <div className="absolute inset-[-20%] animate-spin-slow rounded-full border border-dashed border-[#2910E5]/30" />
 <div className="absolute inset-[-40%] animate-spin-slow-reverse rounded-full border border-dashed border-[#2910E5]/20" />
 <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#2910E5] to-blue-400 p-[1px] shadow-[0_0_50px_-10px_#2910E5]">
 <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
 <Bot className="w-10 h-10 text-white animate-pulse" />
 </div>
 </div>
 <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-[#2910E5] font-bold">NLP_CORE</span>
 </div>

 {/* Database Node */}
 <div className="flex flex-col items-center gap-3">
 <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
 <Database className="w-6 h-6 text-emerald-400" />
 </div>
 <span className="text-xs font-mono text-slate-400">KNOWLEDGE_DB</span>
 </div>
 </div>
 </motion.div>
 )}

 {activeIndex === 1 && (
 <motion.div
 key="analytics-dashboard"
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.5 }}
 className="w-full h-full pt-12 p-8 flex flex-col gap-6 relative"
 >
 <div className="grid grid-cols-3 gap-4">
 {[1, 2, 3].map((i) => (
 <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
 <div className="w-6 h-6 rounded bg-slate-700 mb-3" />
 <div className="h-2 w-1/2 bg-slate-600 rounded mb-2" />
 <div className="h-6 w-3/4 bg-slate-200 rounded" />
 </div>
 ))}
 </div>
 
 <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 relative overflow-hidden flex flex-col justify-end gap-2">
 {/* Mock Graph Bars */}
 <div className="absolute top-6 left-6 flex items-center gap-2">
 <Activity className="w-4 h-4 text-[#2910E5]" />
 <span className="text-xs font-mono text-slate-300">LIVE_METRICS</span>
 </div>
 
 <div className="flex items-end justify-between h-[120px] px-2">
 {[40, 70, 45, 90, 65, 120, 85, 110, 140, 95].map((height, i) => (
 <motion.div 
 key={i}
 initial={{ height: 0 }}
 animate={{ height: `${(height / 140) * 100}%` }}
 transition={{ duration: 1, delay: i * 0.05 }}
 className={`w-1/12 rounded-t-sm ${i === 8 ? 'bg-[#2910E5] shadow-[0_0_20px_#2910E5]' : 'bg-slate-700'}`}
 />
 ))}
 </div>
 </div>
 </motion.div>
 )}

 {activeIndex === 2 && (
 <motion.div
 key="server-mesh"
 initial={{ opacity: 0, rotateX: 20 }}
 animate={{ opacity: 1, rotateX: 0 }}
 exit={{ opacity: 0, rotateX: -20 }}
 transition={{ duration: 0.5 }}
 className="w-full h-full pt-12 flex items-center justify-center relative perspective-1000"
 >
 <div className="relative w-[300px] h-[300px] transform-gpu rotate-x-60 rotate-z-45">
 {/* Base Grid Layer */}
 <div className="absolute inset-0 border-2 border-slate-800 rounded-3xl bg-slate-900/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]" />
 
 {/* Server Nodes */}
 <motion.div 
 animate={{ y: [-10, -20, -10] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#2910E5]/20 border border-[#2910E5] rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_#2910E5]"
 >
 <Network className="w-8 h-8 text-white" />
 </motion.div>
 
 <motion.div 
 animate={{ y: [-20, -10, -20] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.5)]"
 >
 <Server className="w-8 h-8 text-white" />
 </motion.div>

 <motion.div 
 animate={{ y: [-15, -25, -15] }}
 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-indigo-500/20 border border-indigo-500 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.5)]"
 >
 <Activity className="w-8 h-8 text-white" />
 </motion.div>

 {/* Connecting Mesh Lines */}
 <svg className="absolute inset-0 w-full h-full">
 <path d="M 100 100 L 150 150 L 200 200" stroke="#2910E5" strokeWidth="2" fill="none" className="opacity-50" />
 </svg>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </div>
 </div>
 </section>
 );
};
