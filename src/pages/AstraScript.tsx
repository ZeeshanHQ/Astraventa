import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Video, Youtube, Play, Loader2, ListOrdered } from "lucide-react";

export default function AstraScript() {
 const [topic, setTopic] = useState("");
 const [script, setScript] = useState("");
 const [isGenerating, setIsGenerating] = useState(false);

 const handleGenerate = () => {
 setIsGenerating(true);
 setTimeout(() => {
 setScript(`
[0:00 - HOOK]
(Camera zooms in quickly, aggressive music)
"If you are still using manual data entry in 2026, your business is already dead. You just don't know it yet."

[0:15 - INTRO / PROBLEM]
(B-roll of stressed office workers)
"Let me explain. Last week, I audited a 7-figure agency that was spending $40,000 a year just moving text from a PDF into Salesforce. That's insane."

[0:30 - THE SOLUTION]
(Screen recording of AstraFlow AI working instantly)
"Enter Agentic Automation. With one simple script, we built an AI that intercepts the PDF, parses the exact fields needed, and injects it into the CRM. Time taken? 4 seconds."
 `);
 setIsGenerating(false);
 }, 2000);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
 <Video className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraScript AI</h1>
 <p className="text-slate-500 font-medium">YouTube/Reels Scriptwriter tuned for retention</p>
 </div>
 </div>

 <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
 <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-red-50/30">
 <input 
 className="flex-1 bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-red-500/20 outline-none text-slate-800 font-medium"
 placeholder="E.g., Why AI Automation Agencies are the new SaaS..."
 value={topic}
 onChange={(e) => setTopic(e.target.value)}
 />
 <Button onClick={handleGenerate} disabled={!topic || isGenerating} className="bg-red-600 hover:bg-red-700 h-14 px-8 rounded-xl font-bold">
 {isGenerating ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : <Youtube className="w-5 h-5 mr-2" />}
 Draft Script
 </Button>
 </div>

 <div className="p-8 min-h-[400px]">
 {isGenerating ? (
 <div className="h-full flex flex-col items-center justify-center text-red-500 pt-20">
 <Loader2 className="w-12 h-12 animate-spin mb-4" />
 <span className="font-bold tracking-widest uppercase text-sm animate-pulse">Analyzing YouTube Retention Curves...</span>
 </div>
 ) : script ? (
 <div className="prose prose-slate max-w-none">
 <pre className="bg-slate-900 text-slate-50 p-6 rounded-2xl whitespace-pre-wrap font-mono text-sm leading-relaxed border border-slate-800 shadow-inner">
 {script}
 </pre>
 </div>
 ) : (
 <div className="h-full flex flex-col items-center justify-center text-slate-400 pt-20">
 <ListOrdered className="w-16 h-16 opacity-20 mb-4" />
 <p className="font-medium">Enter a topic to generate a high-retention script structure.</p>
 </div>
 )}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
