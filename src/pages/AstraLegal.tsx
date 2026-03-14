import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Scale, FileWarning, ShieldAlert, Loader2, Link as LinkIcon, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraLegal() {
 const [url, setUrl] = useState("");
 const [analyzing, setAnalyzing] = useState(false);
 const [flags, setFlags] = useState<any[]>([]);

 const handleScan = () => {
 setAnalyzing(true);
 setTimeout(() => {
 setFlags([
 { severity: "High", issue: "Data Ownership Surrendered", detail: "Clause 4.2 implies the vendor claims intellectual property rights over any data you upload to their system." },
 { severity: "Medium", issue: "Auto-Renewal Without Notice", detail: "Clause 7.1 states the 1-year contract auto-renews at full price without requiring a 30-day warning to the customer." },
 { severity: "Low", issue: "Binding Arbitration", detail: "Clause 11 mandates any legal dispute must be handled in private arbitration in the state of Delaware." }
 ]);
 setAnalyzing(false);
 }, 2800);
 };

 return (
 <div className="min-h-screen bg-slate-900 text-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10 justify-center text-center">
 <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white border border-slate-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
 <Scale className="w-6 h-6" />
 </div>
 <h1 className="text-3xl font-black text-white">AstraLegal AI</h1>
 </div>

 <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 shadow-2xl mb-10 text-center max-w-2xl mx-auto">
 <p className="text-slate-400 mb-6 font-medium">Never sign a blind contract again. Paste a URL to an Enterprise SaaS Terms & Conditions or Privacy Policy page. AstraLegal will extract and simplify predatory clauses instantly.</p>
 
 <div className="flex bg-slate-900 border border-slate-700 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-white/20">
 <div className="flex items-center px-4 text-slate-500 border-r border-slate-800"><LinkIcon className="w-5 h-5"/></div>
 <input 
 value={url} onChange={(e) => setUrl(e.target.value)}
 className="flex-1 bg-transparent p-4 outline-none font-medium text-white placeholder:text-slate-600"
 placeholder="e.g. acmecorp.com/legal/terms"
 />
 <Button onClick={handleScan} disabled={!url || analyzing} className="h-auto px-8 bg-white hover:bg-slate-200 text-slate-900 rounded-none font-black text-sm">
 {analyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : "Audit Terms"}
 </Button>
 </div>
 </div>

 {analyzing && (
 <div className="py-12 flex flex-col items-center justify-center text-white">
 <ShieldAlert className="w-12 h-12 mb-4 animate-pulse text-rose-500" />
 <p className="text-sm font-bold tracking-widest uppercase text-slate-400">Running LLM against legal database markers...</p>
 </div>
 )}

 {flags.length > 0 && !analyzing && (
 <div className="animate-in slide-in-from-bottom-4 space-y-4">
 <h3 className="font-bold text-white mb-6 flex items-center gap-2"><FileWarning className="w-5 h-5 text-rose-500"/> Critical Red Flags Detected</h3>
 {flags.map((flag, i) => (
 <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
 <div className={`absolute top-0 left-0 w-1 h-full ${flag.severity === 'High' ? 'bg-rose-600' : flag.severity === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'}`} />
 <div className="flex items-start gap-4">
 <div className="mt-1">
 <AlertTriangle className={`w-5 h-5 ${flag.severity === 'High' ? 'text-rose-600' : flag.severity === 'Medium' ? 'text-amber-500' : 'text-blue-500'}`} />
 </div>
 <div>
 <div className="flex items-center gap-3 mb-2">
 <h4 className="font-bold text-white text-lg">{flag.issue}</h4>
 <span className={`text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-sm ${flag.severity === 'High' ? 'bg-rose-500/20 text-rose-400' : flag.severity === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
 {flag.severity} RISK
 </span>
 </div>
 <p className="text-slate-400 text-sm leading-relaxed">{flag.detail}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 )}

 </main>
 <Footer />
 </div>
 );
}
