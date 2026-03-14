import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const layers = [
 { id: 1, title: "AI ORCHESTRATION", sub: "The Logic", latency: "< 5ms" },
 { id: 2, title: "AUTOMATION PROCESSES", sub: "The Engine", latency: "< 12ms" },
 { id: 3, title: "DATA ARCHITECTURE", sub: "The Intelligence", latency: "< 8ms" },
 { id: 4, title: "UI/UX INTERFACE", sub: "The Frictionless Layer", latency: "< 20ms" },
 { id: 5, title: "CLOUD INFRASTRUCTURE", sub: "The Foundation", latency: "99.999%" },
];

export const ArchitectureStack = () => {
 const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

 return (
 <section className="relative py-40 px-6 bg-white overflow-hidden border-t border-slate-100">
 {/* Blueprint Grid Background */}
 <div 
 className="absolute inset-0 pointer-events-none opacity-[0.05]"
 style={{ 
 backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
 backgroundSize: '40px 40px'
 }}
 />

 <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
 
 {/* Left: 3D Isometric Stack */}
 <div className="relative w-full h-[700px] flex items-center justify-center -mt-20">
 
 <motion.div 
 className="relative w-[340px] h-[500px]"
 animate={{ y: [-10, 10, -10] }}
 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
 >
 {/* Top Neural Brain Icon (Floating slightly higher) */}
 <motion.div 
 className="absolute top-[-80px] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center"
 animate={{ y: [-5, 5, -5] }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
 >
 <div className="w-20 h-20 rounded-2xl bg-white border border-[#2910E5] shadow-[0_0_30px_rgba(41,16,229,0.3)] flex items-center justify-center relative overflow-hidden group">
 <div className="absolute inset-0 bg-[#2910E5]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
 <BrainCircuit className="w-10 h-10 text-[#2910E5]" />
 
 {/* Intense Inner Glow */}
 <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(41,16,229,0.2)]" />
 </div>
 
 {/* Connecting Light Beam downwards */}
 <div className="w-0.5 h-12 bg-gradient-to-b from-[#2910E5] to-transparent relative overflow-hidden mt-2">
 <motion.div 
 className="absolute top-0 left-0 w-full h-8 bg-white/80 blur-[2px]"
 animate={{ y: [-10, 50] }}
 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
 />
 </div>
 </motion.div>

 {/* The 5 Layers */}
 {layers.map((layer, index) => {
 const isHovered = hoveredLayer === layer.id;
 
 return (
 <div 
 key={layer.id} 
 className="absolute left-0 w-full"
 style={{ top: `${index * 90}px`, zIndex: 40 - index }}
 >
 <div 
 className="relative w-full h-40 cursor-pointer group transition-transform duration-500 ease-out"
 style={{
 transform: `rotateX(60deg) rotateZ(45deg) skewX(-15deg) ${isHovered ? 'translateZ(30px) scale(1.05)' : 'translateZ(0px) scale(1)'}`,
 transformStyle: 'preserve-3d'
 }}
 onMouseEnter={() => setHoveredLayer(layer.id)}
 onMouseLeave={() => setHoveredLayer(null)}
 >
 {/* Glass Slab Body */}
 <div className={`absolute inset-0 rounded-2xl border transition-all duration-300 ${isHovered ? 'bg-[#2910E5]/10 border-[#2910E5] shadow-[0_0_40px_rgba(41,16,229,0.25)]' : 'bg-white/90 border-slate-200 shadow-xl shadow-slate-200/50 backdrop-blur-md'}`}>
 
 {/* Inner Corner Accents */}
 <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-400 opacity-50" />
 <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-400 opacity-50" />
 
 {/* Text Content inside the 3D plane */}
 <div 
 className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
 style={{ transform: 'translateZ(20px)' }} // Lift text off the slab slightly
 >
 <h4 className={`font-black tracking-widest text-sm transition-colors duration-300 ${isHovered ? 'text-[#2910E5]' : 'text-slate-900'}`}>{layer.title}</h4>
 <p className="text-[10px] font-bold text-slate-500 uppercase mt-1 tracking-wider">{layer.sub}</p>
 </div>

 </div>
 
 {/* 3D Depth / Edge (Simulated) */}
 <div className={`absolute -bottom-4 left-4 w-full h-4 rounded-b-2xl transition-colors duration-300 ${isHovered ? 'bg-[#2910E5]/20' : 'bg-slate-100'}`} style={{ transform: 'skewX(45deg) translateZ(-1px)' }} />
 <div className={`absolute top-4 -right-4 w-4 h-[calc(100%-16px)] rounded-r-2xl transition-colors duration-300 ${isHovered ? 'bg-[#2910E5]/15' : 'bg-slate-50'}`} style={{ transform: 'skewY(45deg) translateZ(-1px)' }} />

 {/* Interaction Tech Label */}
 <motion.div 
 className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none"
 initial={{ opacity: 0, x: -10 }}
 animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
 style={{
 transform: 'rotateX(-60deg) rotateZ(-45deg) skewX(15deg)' // Counteract the parent rotation to face camera
 }}
 >
 <div className="bg-slate-900 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl whitespace-nowrap">
 <span className="w-1.5 h-1.5 rounded-full bg-[#2910E5] shadow-[0_0_8px_#2910E5] animate-pulse" />
 [ LATENCY: {layer.latency} ]
 </div>
 </motion.div>

 </div>

 {/* Vertical Pulsing Lines Between Slabs (Except the last one) */}
 {index < layers.length - 1 && (
 <div className="absolute top-24 left-1/2 w-px h-16 bg-gradient-to-t from-slate-200 to-[#2910E5]/50 overflow-hidden" style={{ transform: 'translateZ(-10px)' }}>
 <motion.div 
 className="w-full h-4 bg-[#2910E5] shadow-[0_0_10px_#2910E5]"
 animate={{ y: [64, -16] }}
 transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
 />
 </div>
 )}
 </div>
 );
 })}
 </motion.div>
 </div>

 {/* Right: Content Side */}
 <div className="max-w-xl">
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 >
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[#2910E5] text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
 <span className="w-2 h-2 rounded-full bg-[#2910E5] animate-pulse" />
 Systems Architecture
 </div>

 <h2 className="text-4xl md:text-[52px] font-black text-slate-900 mb-8 tracking-tight leading-[1.05]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
 Our Multi-Layered <br/>
 Agentic Core.
 </h2>
 <p className="text-xl text-slate-500 font-medium leading-relaxed">
 We don't just build apps; we architect ecosystems. Each layer of our stack is engineered to communicate natively, ensuring maximum velocity and zero-latency performance.
 </p>
 </motion.div>
 </div>

 </div>
 </section>
 );
};
