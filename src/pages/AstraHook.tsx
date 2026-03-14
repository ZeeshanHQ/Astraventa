import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PenTool, Target, Zap, ChevronRight, Loader2, Copy } from "lucide-react";

export default function AstraHook() {
 const [blogText, setBlogText] = useState("");
 const [isGenerating, setIsGenerating] = useState(false);
 const [hooks, setHooks] = useState<string[]>([]);

 const handleGenerate = () => {
 if (!blogText) return;
 setIsGenerating(true);
 setTimeout(() => {
 setHooks([
 "Stop wasting 10 hours a week on manual data entry. Here's a 3-step AI workflow that cuts it down to 5 minutes 👇",
 "90% of B2B agencies are losing clients because of slow response times. The secret weapon? Autonomous Agentic Systems. A thread 🧵",
 "I analyzed 1,000 viral SaaS launch posts. They all share this ONE psychological trigger. (And it's not what you think)"
 ]);
 setIsGenerating(false);
 }, 1500);
 };

 return (
 <div className="min-h-screen bg-white">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-8">
 <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
 <PenTool className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraHook AI</h1>
 <p className="text-slate-500 font-medium">Viral Hook Generator for LinkedIn & X</p>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
 <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
 <Target className="w-4 h-4 text-orange-500" /> Source Material
 </h2>
 <textarea
 className="w-full h-64 p-4 rounded-2xl border border-slate-200 bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none text-slate-700"
 placeholder="Paste your long-form blog post, article, or raw thoughts here..."
 value={blogText}
 onChange={(e) => setBlogText(e.target.value)}
 />
 <Button 
 onClick={handleGenerate}
 disabled={!blogText || isGenerating}
 className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white h-14 rounded-xl font-bold shadow-lg shadow-orange-500/20"
 >
 {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Generate Viral Hooks"}
 </Button>
 </div>

 <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
 <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
 <Zap className="w-4 h-4 text-orange-500" /> AI Outputs
 </h2>
 
 <div className="space-y-4">
 {hooks.length === 0 && !isGenerating ? (
 <div className="h-64 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
 <PenTool className="w-8 h-8 opacity-20 mb-2" />
 <span className="font-medium text-sm">Hooks will appear here</span>
 </div>
 ) : (
 hooks.map((hook, idx) => (
 <motion.div 
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: idx * 0.1 }}
 key={idx} 
 className="p-5 rounded-2xl bg-orange-50/50 border border-orange-100 group relative pr-12"
 >
 <span className="absolute top-4 left-4 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
 {idx + 1}
 </span>
 <p className="pl-8 text-slate-800 font-medium leading-relaxed">{hook}</p>
 <button className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-400 hover:text-orange-600 transition-colors">
 <Copy className="w-5 h-5" />
 </button>
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
