import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Zap, Database, Search, Bot, Webhook, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const techNodes = [
 { id: 1, name: "Slack", icon: MessageSquare, angle: 0, distance: 180 },
 { id: 2, name: "Zapier", icon: Zap, angle: 51, distance: 160 },
 { id: 3, name: "Supabase", icon: Database, angle: 102, distance: 200 },
 { id: 4, name: "Google", icon: Search, angle: 154, distance: 170 },
 { id: 5, name: "OpenAI", icon: Bot, angle: 205, distance: 190 },
 { id: 6, name: "Webhooks", icon: Webhook, angle: 257, distance: 150 },
 { id: 7, name: "Cloud", icon: Cloud, angle: 308, distance: 180 },
];

export const IntegrationEcosystem = () => {
 const [hoveredNode, setHoveredNode] = useState<number | null>(null);

 return (
 <section className="relative py-32 px-6 bg-white overflow-hidden border-t border-slate-100">
 {/* Blueprint Grid Background */}
 <div 
 className="absolute inset-0 pointer-events-none opacity-[0.05]"
 style={{ 
 backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
 backgroundSize: '40px 40px'
 }}
 />

 <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
 
 {/* Left: Orbital Design */}
 <div className="relative w-full h-[600px] flex items-center justify-center">
 {/* Central Glow */}
 <div className="absolute w-64 h-64 bg-[#2910E5] rounded-full blur-[100px] opacity-20 pointer-events-none" />
 
 {/* Center Node */}
 <div className="relative z-20 w-32 h-32 bg-white rounded-full border border-slate-200 shadow-[0_0_40px_rgba(41,16,229,0.15)] flex flex-col items-center justify-center group overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50" />
 <div className="w-4 h-4 rounded-full bg-[#2910E5] mb-2 shadow-[0_0_15px_#2910E5] animate-pulse" />
 <span className="text-[10px] font-black tracking-widest text-[#2910E5] uppercase relative z-10 text-center leading-tight">
 AI<br/>Core
 </span>
 </div>

 {/* Satellites & Neural Paths */}
 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
 {techNodes.map((node) => {
 const rad = (node.angle * Math.PI) / 180;
 const x = Math.cos(rad) * node.distance;
 const y = Math.sin(rad) * node.distance;
 const isHovered = hoveredNode === node.id;
 
 const Icon = node.icon;

 return (
 <div key={node.id} className="absolute inset-0 flex items-center justify-center">
 {/* Neural Path SVG Line */}
 <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
 <line 
 x1="50%" 
 y1="50%" 
 x2={`calc(50% + ${x}px)`} 
 y2={`calc(50% + ${y}px)`} 
 stroke={isHovered ? "#2910E5" : "#e2e8f0"} 
 strokeWidth={isHovered ? "2" : "1"}
 strokeDasharray={isHovered ? "0" : "4 4"}
 className="transition-all duration-300"
 />
 
 {/* Traveling Light Pulse */}
 {!isHovered && (
 <motion.circle
 r="3"
 fill="#2910E5"
 initial={{ cx: "50%", cy: "50%", opacity: 0 }}
 animate={{ 
 cx: [`50%`, `calc(50% + ${x}px)`], 
 cy: [`50%`, `calc(50% + ${y}px)`],
 opacity: [0, 1, 0]
 }}
 transition={{
 duration: 2 + Math.random(),
 repeat: Infinity,
 ease: "linear",
 delay: Math.random() * 2
 }}
 className="shadow-[0_0_8px_#2910E5]"
 />
 )}
 </svg>

 {/* Satellite Node */}
 <div 
 className="absolute pointer-events-auto transition-transform duration-300"
 style={{ transform: `translate(${x}px, ${y}px)` }}
 onMouseEnter={() => setHoveredNode(node.id)}
 onMouseLeave={() => setHoveredNode(null)}
 >
 <div className={`relative w-14 h-14 rounded-full bg-white border flex items-center justify-center cursor-pointer transition-all duration-300 ${isHovered ? 'border-[#2910E5] shadow-[0_0_20px_rgba(41,16,229,0.2)] scale-110' : 'border-slate-200 shadow-sm '}`}>
 <Icon className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-[#2910E5]' : 'text-slate-500'}`} />
 
 {/* Hover Label */}
 <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 transform-none' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
 <div className="bg-slate-900 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
 <span className="w-1.5 h-1.5 rounded-full bg-[#2910E5] animate-pulse" />
 [ SYNCED ]
 </div>
 </div>
 </div>
 </div>
 </div>
 );
 })}
 </div>
 </div>

 {/* Right: Content Side */}
 <div className="max-w-xl">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 >
 <h2 className="text-4xl md:text-[48px] font-black text-slate-900 mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
 Unified Autonomy.<br/>
 Seamless Control.
 </h2>
 <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
 Connect your fragmented infrastructure to our proprietary automation layer. We build the bridges; you dominate the workflow.
 </p>
 
 <Button 
 className="h-16 px-8 bg-white border-2 border-slate-200 hover:border-[#2910E5] text-slate-900 hover:text-[#2910E5] rounded-2xl font-bold text-base transition-all group shadow-sm hover:shadow-[0_0_20px_rgba(41,16,229,0.1)]"
 asChild
 >
 <Link to="/contact" className="flex items-center gap-3">
 <span className="relative">
 Explore Connectors
 <span className="absolute -inset-x-4 -inset-y-2 bg-[#2910E5]/5 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
 </span>
 <ArrowRight className="w-5 h-5 transition-transform" />
 </Link>
 </Button>
 </motion.div>
 </div>

 </div>
 </section>
 );
};
