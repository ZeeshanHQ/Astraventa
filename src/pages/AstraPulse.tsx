import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Activity, Zap, Clock, ShieldAlert, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraPulse() {
 const [running] = useState(true);

 // Mock real-time data
 const metrics = [
 { title: "Avg Latency", value: "84ms", icon: Clock, color: "text-blue-500" },
 { title: "Token Spend (1h)", value: "$12.40", icon: Cpu, color: "text-emerald-500" },
 { title: "Success Rate", value: "99.8%", icon: Zap, color: "text-amber-500" },
 { title: "Hallucinations", value: "0.2%", icon: ShieldAlert, color: "text-rose-500" }
 ];

 return (
 <div className="min-h-screen bg-slate-950 font-sans text-white">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-6">
 <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
 <Activity className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-white">AstraPulse AI</h1>
 <p className="text-slate-400 font-medium tracking-wide">AI Observability & Agent Health Dashboard</p>
 </div>
 <div className="ml-auto flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
 <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
 <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">System Healthy</span>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
 {metrics.map((m, i) => (
 <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl relative overflow-hidden group">
 <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity bg-current ${m.color}`} />
 <div className="flex items-center gap-3 mb-4">
 <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800 ${m.color}`}>
 <m.icon className="w-4 h-4" />
 </div>
 <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{m.title}</h3>
 </div>
 <div className="text-3xl font-black">{m.value}</div>
 </div>
 ))}
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6">
 <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-6 border-b border-slate-800 pb-3">Live Agent Traces</h3>
 <div className="space-y-3">
 {[
 { agent: "Data Scraper V2", task: "Extracting contact info", status: "200 OK", time: "42ms" },
 { agent: "Support Router", task: "Categorizing ticket", status: "200 OK", time: "112ms" },
 { agent: "Pitch Generator", task: "LLM synthesis", status: "200 OK", time: "840ms" },
 { agent: "DB Query Builder", task: "SQL Compilation", status: "500 ERR - Malformed Intent", time: "60ms", fail: true },
 ].map((trace, i) => (
 <div key={i} className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl text-sm font-mono">
 <div>
 <span className="text-emerald-400 font-bold">{trace.agent}</span>
 <span className="text-slate-500 ml-3">{trace.task}</span>
 </div>
 <div className="flex items-center gap-4">
 <span className={trace.fail ? 'text-rose-500' : 'text-slate-300'}>{trace.status}</span>
 <span className="text-slate-500 text-xs">{trace.time}</span>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col">
 <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-6 border-b border-slate-800 pb-3">Token Burn Rate</h3>
 <div className="flex-1 flex flex-col justify-center items-center relative">
 <div className="w-48 h-48 rounded-full border-[16px] border-slate-800 relative flex items-center justify-center">
 <svg className="absolute inset-0 w-full h-full transform -rotate-90">
 <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-emerald-500" strokeDasharray="500" strokeDashoffset="100" strokeLinecap="round" />
 </svg>
 <div className="text-center">
 <div className="text-2xl font-black text-white text-emerald-500">62%</div>
 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Quota Used</div>
 </div>
 </div>
 <div className="w-full mt-8 bg-slate-950 border border-slate-800 p-4 rounded-xl text-center">
 <div className="text-xs text-slate-400 uppercase font-bold mb-1">Estimated Cost / Mo</div>
 <div className="text-lg font-black text-white">$450.00 <span className="text-xs text-slate-500 font-medium">via OpenAI</span></div>
 </div>
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
