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
  <div className="flex items-center gap-4 mb-10">
    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
      <PenTool className="w-6 h-6" />
    </div>
    <div>
      <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">AstraHook AI</h1>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Viral Retention Synthesis
      </p>
    </div>
  </div>

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
  </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
    <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 blur-3xl rounded-full" />
    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3 relative z-10">
      <Target className="w-4 h-4 text-primary" /> Source Material
    </h2>
    <textarea
      className="w-full h-64 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none text-slate-700 font-medium text-[15px] transition-all focus:bg-white relative z-10"
      placeholder="Paste your long-form blog post, article, or raw thoughts here..."
      value={blogText}
      onChange={(e) => setBlogText(e.target.value)}
    />
    <Button 
      onClick={handleGenerate}
      disabled={!blogText || isGenerating}
      className="w-full mt-6 bg-slate-950 hover:bg-primary text-white h-16 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 transition-all relative z-10"
    >
      {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Generate Viral Hooks"}
    </Button>
  </div>

  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50">
    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
      <Zap className="w-4 h-4 text-primary" /> AI Outputs
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
          className="p-6 rounded-[1.5rem] bg-slate-50 border border-slate-100 group relative pr-14 hover:border-primary/20 transition-all"
        >
          <span className="absolute top-4 left-4 w-7 h-7 bg-primary/10 text-primary border border-primary/20 rounded-full flex items-center justify-center text-[10px] font-black mr-4">
            {idx + 1}
          </span>
          <p className="pl-10 text-slate-800 font-medium text-[15px] leading-relaxed">{hook}</p>
          <button className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-300 hover:text-primary transition-colors">
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
