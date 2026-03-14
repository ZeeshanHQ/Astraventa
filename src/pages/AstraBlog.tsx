import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollText, Globe, Loader2, CheckCircle2 } from "lucide-react";

export default function AstraBlog() {
 const [keyword, setKeyword] = useState("");
 const [article, setArticle] = useState("");
 const [isGenerating, setIsGenerating] = useState(false);

 const handleGenerate = () => {
 setIsGenerating(true);
 setTimeout(() => {
 setArticle(`
# The Future of Agentic Automation in 2026

In the rapidly evolving landscape of artificial intelligence, traditional standard operating procedures (SOPs) are being entirely replaced by **Agentic Automation**. But what exactly does this mean for enterprise scaling?

## Moving Beyond Simple RPA
Robotic Process Automation (RPA) was deterministic. It followed a strict rigid rule path. Agentic workflows, dynamically powered by LLMs, can *reason* through errors. 

According to recent data fetched from Gartner (March 2026), 74% of enterprise businesses are planning to deploy fully autonomous departmental agents by Q3.

### Implementation Strategies
1. **Identify the Data Bottleneck:** Find the task where human engineers are acting as "routers" of information.
2. **Deploy the Agent:** Utilize tools like Astraventa OS to wrap the API endpoints in a secure context.
 `);
 setIsGenerating(false);
 }, 2500);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-8">
 <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500">
 <ScrollText className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraBlog AI</h1>
 <p className="text-slate-500 font-medium">Long-form SEO Writer with Live SERP Sync</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="col-span-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-lg">
 <label className="text-sm font-bold text-slate-700 mb-2 block">Target Keyword / Topic</label>
 <input 
 value={keyword}
 onChange={(e) => setKeyword(e.target.value)}
 className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-500/20 mb-6 font-medium text-slate-800 outline-none"
 placeholder="e.g. Agentic Automation..."
 />
 
 <div className="p-4 bg-teal-50 rounded-xl mb-6 border border-teal-100">
 <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> Engine Status</h4>
 <div className="text-sm font-medium text-teal-700 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Web Search Intact</div>
 <div className="text-sm font-medium text-teal-700 flex items-center gap-2 mt-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Anti-Plagiarism Active</div>
 </div>

 <Button onClick={handleGenerate} disabled={!keyword || isGenerating} className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 rounded-xl font-bold">
 {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Write Article"}
 </Button>
 </div>

 <div className="col-span-2 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
 <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
 <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-rose-500"/><div className="w-3 h-3 rounded-full bg-amber-500"/><div className="w-3 h-3 rounded-full bg-emerald-500"/></div>
 <div className="mx-auto text-xs font-mono text-slate-400">output.md</div>
 </div>
 <div className="p-8 flex-1 bg-slate-50/50">
 {isGenerating ? (
 <div className="h-full flex flex-col items-center justify-center text-teal-600">
 <Loader2 className="w-8 h-8 animate-spin mb-4" />
 <p className="font-bold animate-pulse">Scraping SERPs & Drafting outline...</p>
 </div>
 ) : article ? (
 <pre className="font-sans whitespace-pre-wrap prose prose-slate max-w-none text-slate-800">{article}</pre>
 ) : (
 <div className="h-full flex items-center justify-center text-slate-400 text-sm font-medium">Article draft will generate here automatically</div>
 )}
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
