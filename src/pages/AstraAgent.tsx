import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MousePointerClick, Terminal, CheckCircle2, Loader2, Globe, Command } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraAgent() {
 const [intent, setIntent] = useState("");
 const [running, setRunning] = useState(false);
 const [logs, setLogs] = useState<string[]>([]);

 const handleRun = () => {
 setRunning(true);
 setLogs(["Initializing headless browser instance...", "Navigating to designated portal..."]);
 
 setTimeout(() => setLogs(l => [...l, "Locating date selection calendar UI..."]), 1500);
 setTimeout(() => setLogs(l => [...l, "Filling form fields with context data..."]), 3000);
 setTimeout(() => setLogs(l => [...l, "Clicking 'Confirm Booking' button..."]), 4500);
 setTimeout(() => {
 setLogs(l => [...l, "Task Completed Successfully."]);
 setRunning(false);
 }, 6000);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="text-center mb-12">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10 text-blue-600 mb-6 border border-blue-600/20 shadow-inner">
 <MousePointerClick className="w-8 h-8" />
 </div>
 <h1 className="text-4xl font-black text-slate-900 mb-4">AstraAgent AI</h1>
 <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Autonomous Browser Automation Worker. Tell it what to do, and watch it manipulate the UI, fill forms, and click buttons like a human.</p>
 </div>

 <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
 
 <div className="flex-1">
 <div className="flex bg-slate-900 border border-slate-800 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/30 mb-6">
 <div className="px-4 flex items-center text-slate-500 border-r border-slate-800"><Command className="w-5 h-5"/></div>
 <textarea 
 className="flex-1 bg-transparent p-4 outline-none font-medium text-white placeholder:text-slate-600 resize-none h-32"
 placeholder="e.g. 'Go to Expedia, find a direct flight from JFK to LHR on Oct 12 under $800, and book it for John Doe...'"
 value={intent} onChange={(e) => setIntent(e.target.value)}
 />
 </div>
 <Button onClick={handleRun} disabled={!intent || running} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-xl font-bold shadow-lg shadow-blue-500/20">
 {running ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Globe className="w-5 h-5 mr-2" />}
 {running ? "Worker Active..." : "Deploy Browser Worker"}
 </Button>
 </div>

 <div className="flex-1 bg-black rounded-2xl border border-slate-800 p-4 font-mono relative overflow-hidden flex flex-col">
 <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
 <Terminal className="w-4 h-4 text-slate-500" />
 <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Worker Console</span>
 {running && <span className="ml-auto flex items-center gap-2 text-xs font-bold text-blue-500"><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/> LIVE</span>}
 </div>
 
 <div className="flex-1 overflow-y-auto space-y-2">
 {logs.length === 0 ? (
 <div className="h-48 flex items-center justify-center text-slate-700 text-sm">Waiting for instructions...</div>
 ) : (
 logs.map((log, i) => (
 <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="text-sm flex gap-3">
 <span className="text-slate-600 shrink-0">[{new Date().toLocaleTimeString()}]</span>
 <span className={log.includes("Successfully") ? "text-emerald-400 font-bold" : "text-slate-300"}>{log}</span>
 </motion.div>
 ))
 )}
 </div>
 </div>

 </div>
 </main>
 <Footer />
 </div>
 );
}
