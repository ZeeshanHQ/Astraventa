import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wand2, Code2, Copy, Sparkles, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraPrompt() {
 const [badPrompt, setBadPrompt] = useState("");
 const [goodPrompt, setGoodPrompt] = useState("");
 const [isGenerating, setIsGenerating] = useState(false);

 const handleFix = () => {
 setIsGenerating(true);
 setTimeout(() => {
 setGoodPrompt(`Act as an expert Systems Architect with 20 years of experience.

Context: I am building a B2B SaaS platform using Next.js 14, Supabase, and TailwindCSS. I need to implement a complex RBAC (Role Based Access Control) system.

Goal: Write the exact Row Level Security (RLS) SQL policies required for Supabase, ensuring that users can only read data associated with their specific 'team_id'.

Format Requirements:
- Use standard PostgreSQL syntax.
- Provide a brief 1-sentence explanation above each policy.
- Format code blocks clearly.`);
 setIsGenerating(false);
 }, 1200);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="text-center mb-12">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500/10 text-violet-600 mb-6">
 <Wand2 className="w-8 h-8" />
 </div>
 <h1 className="text-4xl font-black text-slate-900 mb-4">AstraPrompt AI</h1>
 <p className="text-slate-500 font-medium text-lg">Turn basic, vague inputs into Master-Level AI instructions.</p>
 </div>

 <div className="flex flex-col md:flex-row gap-6 relative">
 
 {/* Block 1 */}
 <div className="flex-1 bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
 <h3 className="font-bold text-slate-700 mb-3 flex items-center gap-2"><Code2 className="w-4 h-4 text-slate-400" /> Your Basic Prompt</h3>
 <textarea 
 className="w-full h-48 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-600 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/20"
 placeholder="E.g. Write me some code for a login system..."
 value={badPrompt}
 onChange={(e) => setBadPrompt(e.target.value)}
 />
 <Button onClick={handleFix} disabled={!badPrompt || isGenerating} className="w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white h-14 rounded-xl font-bold shadow-lg shadow-violet-500/20">
 {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-4 h-4 mr-2" /> Engineer Prompt</>}
 </Button>
 </div>

 {/* Block 2 */}
 <div className="flex-1 bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl relative group">
 <h3 className="font-bold text-slate-300 mb-3 flex items-center gap-2"><Sparkles className="w-4 h-4 text-violet-400" /> Engineered Master Prompt</h3>
 {isGenerating ? (
 <div className="h-48 flex items-center justify-center text-violet-400">
 <Loader2 className="w-8 h-8 animate-spin" />
 </div>
 ) : goodPrompt ? (
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
 <pre className="w-full h-48 overflow-y-auto bg-slate-950/50 rounded-2xl p-4 text-violet-100 font-mono text-sm leading-relaxed whitespace-pre-wrap">
 {goodPrompt}
 </pre>
 <button className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-lg transition-colors">
 <Copy className="w-4 h-4" />
 </button>
 </motion.div>
 ) : (
 <div className="h-48 border border-dashed border-slate-700 rounded-2xl flex items-center justify-center text-slate-500 text-sm font-medium">
 Awaiting input...
 </div>
 )}
 
 </div>

 </div>
 </main>
 <Footer />
 </div>
 );
}
