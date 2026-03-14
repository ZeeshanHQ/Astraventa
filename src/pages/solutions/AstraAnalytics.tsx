import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, PieChart, Database, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraAnalytics() {
 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh]">
 <div className="text-center max-w-3xl mx-auto mb-20">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 text-xs font-bold uppercase tracking-widest mb-6">
 <BarChart3 className="w-3.5 h-3.5" /> Enterprise Solution
 </div>
 <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
 Astra <span className="text-violet-600">Analytics</span>
 </h1>
 <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
 Unify your fragmented data silos into a single source of truth. Advanced BI dashboards powered by NLP querying—ask your data questions in plain English.
 </p>
 <div className="flex items-center justify-center gap-4">
 <Button className="h-14 px-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg shadow-xl shadow-violet-500/20">
 Schedule Architecture Review <ArrowRight className="ml-2 w-5 h-5" />
 </Button>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
 <div className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800 shadow-2xl text-white relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
 <div className="relative z-10">
 <h3 className="text-2xl font-black mb-4">Chat With Your Database</h3>
 <p className="text-slate-400 font-medium mb-8">Skip the SQL. Ask complex operational questions in plain English and get instant, boardroom-ready visualizations.</p>
 
 <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
 <div className="flex gap-4 mb-6">
 <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-xs font-bold">You</div>
 <div className="bg-slate-700/50 rounded-xl p-3 text-sm font-medium">Show me Q3 revenue breakdown by enterprise tier vs startup tier.</div>
 </div>
 <div className="flex gap-4">
 <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center shrink-0"><BarChart3 className="w-4 h-4" /></div>
 <div className="flex-1 bg-violet-600/10 border border-violet-500/20 rounded-xl p-4">
 <div className="h-32 flex items-end gap-2 mt-2">
 <div className="w-full bg-slate-600 rounded-t-sm h-[40%] hover:bg-violet-400 transition-colors" />
 <div className="w-full bg-slate-600 rounded-t-sm h-[65%] hover:bg-violet-400 transition-colors" />
 <div className="w-full bg-violet-500 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
 </div>
 <div className="text-xs font-bold text-violet-400 uppercase tracking-widest mt-4">Enterprise tier up 42% YoY</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 {[
 { title: "ETL Pipelines", desc: "Automated extraction, transformation, and loading from 50+ sources.", icon: Database, color: "text-blue-500", bg: "bg-blue-50" },
 { title: "Predictive Modeling", desc: "Forecast churn, revenue, and inventory needs using historical data.", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
 { title: "Boardroom BI", desc: "Pixel-perfect dashboards designed for executive consumption.", icon: PieChart, color: "text-rose-500", bg: "bg-rose-50" },
 { title: "Real-time Metrics", desc: "Sub-second latency on critical operational dashboards.", icon: BarChart3, color: "text-violet-500", bg: "bg-violet-50" }
 ].map((feat, i) => (
 <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-center">
 <div className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center mb-4`}>
 <feat.icon className={`w-6 h-6 ${feat.color}`} />
 </div>
 <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
 <p className="text-sm text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
