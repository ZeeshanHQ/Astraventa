import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// ─── Mini Animations for each card ─────────────────────────────────────────

/**
 * IdentityBlueprint — professional vector logo construction
 */
function IdentityBlueprint() {
 return (
 <div className="relative flex flex-col items-center justify-center w-full h-full">
 {/* Grid background */}
 <div 
 className="absolute inset-0 opacity-40 rounded-xl" 
 style={{ backgroundImage: 'radial-gradient(circle at center, #0066ff30 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
 />
 {/* SVG drawing */}
 <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10 overflow-visible">
 {/* Outer construction circle */}
 <motion.circle 
 cx="50" cy="50" r="45" 
 fill="none" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="4 4"
 initial={{ rotate: 0 }} animate={{ rotate: 360 }}
 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
 className="origin-center"
 />
 {/* Inner construction circle */}
 <motion.circle 
 cx="50" cy="50" r="30" 
 fill="none" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="4 4"
 initial={{ rotate: 0 }} animate={{ rotate: -360 }}
 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
 className="origin-center opacity-50"
 />
 {/* Vector paths drawing */}
 <motion.path 
 d="M50 20 L80 80 L50 65 L20 80 Z" 
 fill="#0066FF" stroke="#0066FF" strokeWidth="2" strokeLinejoin="round" fillOpacity="0"
 initial={{ pathLength: 0, fillOpacity: 0 }}
 animate={{ pathLength: [0, 1, 1, 0.4, 0], fillOpacity: [0, 0, 0.1, 0, 0] }}
 transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
 />
 {/* Anchor points */}
 <motion.circle cx="50" cy="20" r="2.5" fill="white" stroke="#0066FF" strokeWidth="1.5" />
 <motion.circle cx="80" cy="80" r="2.5" fill="white" stroke="#0066FF" strokeWidth="1.5" />
 <motion.circle cx="20" cy="80" r="2.5" fill="white" stroke="#0066FF" strokeWidth="1.5" />
 <motion.circle cx="50" cy="65" r="2.5" fill="white" stroke="#0066FF" strokeWidth="1.5" />
 </svg>
 </div>
 )
}

/**
 * VisualSystem — cycling typographic scaling and palette systems
 */
function VisualSystem() {
 const [fontCombo, setFontCombo] = useState(0)
 const fonts = [
 { class: "font-serif font-black", label: "Serif 900" },
 { class: "font-sans font-medium", label: "Sans 500" },
 { class: "font-mono font-normal tracking-widest", label: "Mono 400" },
 ]
 const colors = ["#0066FF", "#38bdf8", "#0f172a"]

 useEffect(() => {
 const interval = setInterval(() => {
 setFontCombo((prev) => (prev + 1) % 3)
 }, 2800)
 return () => clearInterval(interval)
 }, [])

 return (
 <div className="flex flex-col items-center w-full h-full justify-between py-2 relative">
 {/* Typography Demo */}
 <motion.div 
 key={fontCombo}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.5 }}
 className="flex flex-col items-center mt-3"
 >
 <span className={`text-[3.5rem] leading-none text-slate-900 ${fonts[fontCombo].class}`}>Aa</span>
 <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em] mt-2">
 {fonts[fontCombo].label}
 </span>
 </motion.div>

 {/* Palette + UI Strip */}
 <div className="flex flex-col w-full px-8 gap-3 mb-1">
 {/* Color Palette */}
 <div className="flex justify-between items-end gap-1.5">
 {colors.map((c, i) => (
 <motion.div
 key={c}
 className="h-5 w-full rounded shadow-sm border border-slate-900/5 relative overflow-hidden"
 style={{ backgroundColor: c, transformOrigin: "bottom" }}
 initial={{ scaleY: 0.5, opacity: 0 }}
 animate={{ scaleY: 1, opacity: 1 }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 />
 ))}
 <div className="h-5 w-full rounded shadow-sm border border-slate-200 bg-white flex items-center justify-center">
 <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
 </div>
 </div>
 
 {/* Component skeleton */}
 <motion.div 
 className="h-8 w-full rounded-lg border border-slate-200 bg-slate-50 flex items-center px-3 gap-2 overflow-hidden shadow-sm"
 animate={{ borderColor: ["#e2e8f0", "#bfdbfe", "#e2e8f0"] }}
 transition={{ duration: 3, repeat: Infinity }}
 >
 <div className="w-2.5 h-2.5 rounded-full bg-[#0066FF]/20 flex shrink-0" />
 <motion.div 
 className="h-1.5 bg-slate-200 rounded-full" 
 animate={{ width: ["40%", "80%", "40%"] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 />
 <div className="ml-auto w-5 h-3 bg-[#0066FF]/10 rounded shadow-sm border border-[#0066FF]/20 shrink-0" />
 </motion.div>
 </div>
 </div>
 )
}

/**
 * BrandValidator — sophisticated scanning animation for consistency
 */
function BrandValidator() {
 const [scanIndex, setScanIndex] = useState(0)
 
 useEffect(() => {
 const interval = setInterval(() => {
 setScanIndex((prev) => (prev + 1) % 3)
 }, 3000)
 return () => clearInterval(interval)
 }, [])

 const elements = [
 { label: "Logomark", status: "Validated" },
 { label: "Colours", status: "Aligned" },
 { label: "Typography", status: "Rule-Match" },
 ]

 return (
 <div className="relative flex flex-col items-center justify-center w-full h-full px-10">
 {/* Scanner Box */}
 <div className="relative w-full aspect-[4/3] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner">
 {/* Scanning Line */}
 <motion.div 
 className="absolute left-0 right-0 h-[2px] bg-[#0066FF] shadow-[0_0_15px_#0066FF] z-20"
 animate={{ top: ["0%", "100%", "0%"] }}
 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
 />
 
 {/* Abstract "Element" being scanned */}
 <motion.div 
 key={scanIndex}
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 className="relative z-10 flex flex-col items-center gap-3"
 >
 {scanIndex === 0 && (
 <div className="w-16 h-16 border-2 border-[#0066FF] rounded-lg rotate-45 flex items-center justify-center">
 <div className="w-8 h-8 bg-[#0066FF]/20 rounded-sm" />
 </div>
 )}
 {scanIndex === 1 && (
 <div className="flex gap-1.5">
 <div className="w-6 h-10 bg-[#0066FF] rounded-sm" />
 <div className="w-6 h-10 bg-[#0066FF]/60 rounded-sm" />
 <div className="w-6 h-10 bg-[#0066FF]/20 rounded-sm" />
 </div>
 )}
 {scanIndex === 2 && (
 <div className="text-4xl font-black text-[#0066FF] italic tracking-tighter">Aa</div>
 )}
 
 <div className="flex flex-col items-center">
 <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{elements[scanIndex].label}</span>
 <motion.span 
 className="text-[9px] font-mono font-black text-[#0066FF] uppercase"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1.5 }}
 >
 {elements[scanIndex].status}
 </motion.span>
 </div>
 </motion.div>
 </div>

 {/* Floating Status Badge */}
 <motion.div 
 className="absolute -bottom-2 -right-4 bg-[#0066FF] text-white text-[10px] font-black px-4 py-2 rounded-xl shadow-xl shadow-[#0066FF]/20 flex items-center gap-2"
 animate={{ y: [0, -5, 0] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 >
 <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
 CONSISTENCY_LOCKED
 </motion.div>
 </div>
 )
}

// ─── FeaturesSection Export ─────────────────────────────────────────────────

export function BrandingFeaturesSection() {
 return (
 <section className="bg-white px-6 py-28 border-t border-slate-100 relative overflow-hidden">
 {/* Very subtle blueprint grid */}
 <div
 className="absolute inset-0 opacity-[0.025] pointer-events-none"
 style={{
 backgroundImage:
 "linear-gradient(#0066FF 0.5px, transparent 0.5px), linear-gradient(90deg, #0066FF 0.5px, transparent 0.5px)",
 backgroundSize: "56px 56px",
 }}
 />

 <div className="max-w-[1400px] mx-auto relative z-10">
 {/* Section header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7 }}
 className="mb-14"
 >
 <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-6">
 <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
 <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] font-mono">
 Brand Craft · What Sets Us Apart
 </span>
 </div>
 <h2 className="text-slate-900 mb-5 leading-[0.95] tracking-tight">
 Where strategy meets<br />
 <span className="text-[#0066FF]">visual mastery.</span>
 </h2>
 <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
 Three dimensions of brand excellence, animated live — because a great brand
 isn't static. It adapts, scales, and stays unmistakably <em>you</em>.
 </p>
 </motion.div>

 {/* 3-card grid */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Card 1 — Identity */}
 <motion.div
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 min-h-[320px] flex flex-col group hover:border-[#0066FF]/30 hover:shadow-lg transition-all duration-300 cursor-default"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 whileHover={{ scale: 0.99 }}
 whileTap={{ scale: 0.97 }}
 transition={{ duration: 0.7 }}
 >
 <div className="flex-1 flex items-center justify-center py-4 relative group-hover:bg-[#0066FF]/[0.02] rounded-xl transition-colors duration-500">
 <IdentityBlueprint />
 </div>
 <div className="mt-4 border-t border-slate-100 pt-6">
 <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
 Identity Architecture
 </h3>
 <p className="text-slate-500 text-sm font-medium leading-relaxed">
 Strategic brand marks built on absolute geometry — resilient across all mediums and scales.
 </p>
 </div>
 </motion.div>

 {/* Card 2 — Visual Language */}
 <motion.div
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 min-h-[320px] flex flex-col group hover:border-[#0066FF]/30 hover:shadow-lg transition-all duration-300 cursor-default"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 whileHover={{ scale: 0.99 }}
 whileTap={{ scale: 0.97 }}
 transition={{ duration: 0.7, delay: 0.1 }}
 >
 <div className="flex-1 flex items-center justify-center py-4 relative group-hover:bg-[#0066FF]/[0.02] rounded-xl transition-colors duration-500">
 <VisualSystem />
 </div>
 <div className="mt-4 border-t border-slate-100 pt-6">
 <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
 Visual Language
 </h3>
 <p className="text-slate-500 text-sm font-medium leading-relaxed">
 Scalable typography, curated palettes, and component design systems that act as your digital blueprint.
 </p>
 </div>
 </motion.div>

 {/* Card 3 — Consistency */}
 <motion.div
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 min-h-[320px] flex flex-col group hover:border-[#0066FF]/30 hover:shadow-lg transition-all duration-300 cursor-default"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 whileHover={{ scale: 0.99 }}
 whileTap={{ scale: 0.97 }}
 transition={{ duration: 0.7, delay: 0.2 }}
 >
 <div className="flex-1 flex items-center justify-center py-4 relative group-hover:bg-[#0066FF]/[0.02] rounded-xl transition-colors duration-500">
 <BrandValidator />
 </div>
 <div className="mt-4 border-t border-slate-100 pt-6">
 <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
 Brand Consistency
 </h3>
 <p className="text-slate-500 text-sm font-medium leading-relaxed">
 Automated rulebooks and validation systems that protect your brand equity across all future touchpoints.
 </p>
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 )
}
