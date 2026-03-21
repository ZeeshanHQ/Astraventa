import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Radio, Database, Smartphone, Calendar, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export const AstraventaEcosystem = () => {
 const navigate = useNavigate();

 return (
 <section className="py-16 md:py-24 bg-transparent relative overflow-hidden section-transition">
 {/* Container */}
 <div className="max-w-[1400px] mx-auto px-6 relative z-10">
 
 {/* Section Header */}
 <div className="mb-12" style={{ fontStyle: 'normal' }}>
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/50 border border-indigo-100/50 mb-6">
 <span className="w-1.5 h-1.5 rounded-full bg-[#7E96F6]" />
 <span className="text-[10px] font-bold text-[#7E96F6] uppercase tracking-[0.2em] font-heading">Our Range</span>
 </div>
 <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tighter mb-4 font-heading">
 The Astraventa Ecosystem
 </h2>
 <p className="text-lg text-slate-500 font-medium max-w-2xl font-sans">
 A comprehensive suite of autonomous systems designed to scale your operations from strategic inception to global distribution.
 </p>
 </div>

 {/* Asymmetric Bento Grid - 12 Columns */}
 <div className="grid grid-cols-12 gap-6 lg:gap-8">
 
 {/* Main Card (Left) - 60% Width */}
 <motion.a 
 href="/products/launchpact"
 target="_blank"
 rel="noopener noreferrer"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
 className="col-span-12 lg:col-span-7 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-[2rem] overflow-hidden flex flex-col group relative cursor-pointer"
 >
 <div className="noise-overlay" />
 {/* Soft background glow */}
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7E96F6]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
 
 <div className="p-8 relative z-10 flex-col h-full justify-between flex" style={{ fontStyle: 'normal' }}>
 <div className="mb-12">
 <div className="w-12 h-12 rounded-xl bg-[#7E96F6]/5 border border-[#7E96F6]/10 flex items-center justify-center mb-6">
 <BarChart3 className="w-5 h-5 text-[#7E96F6]" />
 </div>
 <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] font-heading tracking-tight mb-3">
 LaunchPact: <span className="text-slate-400 font-normal">AI as your Co-Founder</span>
 </h3>
 <p className="text-slate-500 font-sans leading-relaxed max-w-md">
 The strategic engine for ambitious founders. Transform raw ideas into executable, enterprise-grade business roadmaps instantly.
 </p>
 </div>

 {/* Minimalist 30-day venture roadmap UI */}
 <div className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm overflow-hidden relative">
 <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
 <h4 className="text-sm font-bold text-[#0F172A] font-heading flex items-center gap-2">
 <Calendar className="w-4 h-4 text-[#7E96F6]" /> Q3 Growth Roadmap
 </h4>
 <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">On Track</span>
 </div>

 <div className="space-y-4">
 {[
 { day: "Day 01", title: "Market Validation & NLP Analysis", status: "completed" },
 { day: "Day 14", title: "Automated MVP Architecture", status: "completed" },
 { day: "Day 30", title: "Go-to-Market Execution", status: "active" },
 ].map((item, i) => (
 <div key={i} className="flex items-start gap-4">
 <div className="w-16 flex-shrink-0 pt-0.5">
 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.day}</span>
 </div>
 <div className="flex flex-col items-center">
 <div className={`w-4 h-4 rounded-full flex items-center justify-center z-10 ${
 item.status === 'completed' ? 'bg-[#7E96F6] text-white' : 'bg-[#7E96F6]/20 border-2 border-[#7E96F6]'
 }`}>
 {item.status === 'completed' && <CheckCircle2 className="w-3 h-3" />}
 </div>
 {i < 2 && <div className="w-px h-8 bg-slate-200 my-1" />}
 </div>
 <div className="pt-0.5">
 <p className={`text-sm font-medium ${item.status === 'completed' ? 'text-slate-600' : 'text-[#0F172A] font-bold'}`}>
 {item.title}
 </p>
 </div>
 </div>
 ))}
 </div>
 
 {/* Decorative fade at bottom */}
 <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
 </div>
 </div>
 </motion.a>

 {/* Stacked Cards (Right) - 40% Width */}
 <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 lg:gap-8">
 
 {/* Top Card: Cavexa */}
 <motion.a 
 href="/products/cavexa"
 target="_blank"
 rel="noopener noreferrer"
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
 className="flex-1 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative cursor-pointer"
 >
 <div className="noise-overlay" />
 <div className="relative z-10 mb-8">
 <div className="flex items-center justify-between mb-4">
 <div className="w-10 h-10 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center">
 <Radio className="w-4 h-4 text-pink-500" />
 </div>
 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Consumer Ops</span>
 </div>
 <h3 className="text-xl font-bold text-[#0F172A] font-heading tracking-tight mb-2">Cavexa</h3>
 <p className="text-sm text-slate-500 font-sans">The Autonomous Viral Engine. Programmatic content scaling.</p>
 </div>

 {/* Sleek Waveform UI */}
 <div className="h-24 bg-slate-900 rounded-xl border border-slate-800 p-4 relative overflow-hidden flex items-center justify-center gap-1 group-hover:border-[#7E96F6]/50 transition-colors">
 <div className="absolute top-3 left-3 flex gap-1.5">
 <div className="w-2 h-2 rounded-full bg-slate-700" />
 <div className="w-2 h-2 rounded-full bg-slate-700" />
 </div>
 {Array.from({ length: 40 }).map((_, i) => (
 <motion.div 
 key={i}
 initial={{ height: "20%" }}
 animate={{ height: ["20%", `${Math.random() * 80 + 20}%`, "20%"] }}
 transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
 className={`w-1 rounded-full ${i > 15 && i < 25 ? 'bg-pink-500' : 'bg-slate-700'}`}
 />
 ))}
 {/* Playhead line */}
 <div className="absolute top-0 bottom-0 w-px bg-white/20 left-1/2 shadow-[0_0_10px_white]" />
 </div>
 </motion.a>

 {/* Bottom Card: Vectrax */}
 <motion.a 
 href="/products/vectrax"
 target="_blank"
 rel="noopener noreferrer"
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
 className="flex-1 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative cursor-pointer"
 style={{ fontStyle: 'normal' }}
 >
 <div className="noise-overlay" />
 <div className="relative z-10 mb-8">
 <div className="flex items-center justify-between mb-4">
 <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
 <Smartphone className="w-4 h-4 text-emerald-600" />
 </div>
 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mobile Infra</span>
 </div>
 <h3 className="text-xl font-bold text-[#0F172A] font-heading tracking-tight mb-2">Vectrax</h3>
 <p className="text-sm text-slate-500 font-sans">The pulse of Supabase. Mobile database infrastructure.</p>
 </div>

 {/* Minimalist iPhone frame with Database Scan */}
 <div className="h-24 bg-white border-2 border-slate-100 rounded-xl p-3 flex gap-4 items-center relative overflow-hidden">
 <div className="w-12 h-16 border-2 border-slate-200 rounded-lg flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-slate-50">
 <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-200 rounded-full" />
 <Database className="w-4 h-4 text-slate-400" />
 {/* Scanner line */}
 <motion.div 
 animate={{ top: ["0%", "100%", "0%"] }}
 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
 className="absolute left-0 right-0 h-0.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
 />
 </div>
 <div className="flex-1 space-y-2">
 <div className="flex items-center justify-between">
 <div className="h-2 w-16 bg-slate-200 rounded-full" />
 <Activity className="w-3 h-3 text-emerald-500" />
 </div>
 <div className="h-1.5 w-full bg-slate-100 rounded-full" />
 <div className="h-1.5 w-3/4 bg-slate-100 rounded-full" />
 </div>
 </div>
 </motion.a>

 </div>
 </div>

 {/* Global CTA */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.3 }}
 className="mt-16 flex justify-center"
 >
 <Button 
 variant="outline" 
 size="lg" 
 onClick={() => navigate('/products')}
 className="h-12 px-8 bg-transparent border-slate-200 text-[#0F172A] hover:bg-slate-50 hover:text-[#7E96F6] hover:border-[#7E96F6]/30 font-bold font-heading rounded-full shadow-sm transition-all duration-300 group"
 >
 Explore the Full Suite
 <ChevronRight className="ml-2 w-4 h-4 transition-transform " />
 </Button>
 </motion.div>

 </div>
 </section>
 );
};
