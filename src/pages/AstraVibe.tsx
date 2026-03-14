import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Palette, Sparkles, Droplets, Loader2, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraVibe() {
 const [desc, setDesc] = useState("");
 const [colors, setColors] = useState<string[]>([]);
 const [isGenerating, setIsGenerating] = useState(false);

 const handleGenerate = () => {
 setIsGenerating(true);
 setTimeout(() => {
 // Mock generated palette
 setColors(["#0F172A", "#3B82F6", "#8B5CF6", "#F8FAFC", "#10B981"]);
 setIsGenerating(false);
 }, 1500);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10 justify-center">
 <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
 <Palette className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900 text-center">AstraVibe AI</h1>
 </div>
 </div>

 <div className="max-w-2xl mx-auto text-center mb-12">
 <p className="text-slate-500 mb-6 font-medium">Describe your business, and the AI will generate a complete brand palette & typography suite.</p>
 <div className="flex bg-white p-2 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50">
 <input 
 value={desc}
 onChange={(e) => setDesc(e.target.value)}
 className="flex-1 bg-transparent border-none px-4 outline-none text-slate-800 font-medium" 
 placeholder="e.g. A cutting-edge fintech startup bridging crypto and traditional banking..."
 />
 <Button onClick={handleGenerate} disabled={!desc || isGenerating} className="bg-pink-600 hover:bg-pink-700 h-12 px-6 rounded-xl font-bold">
 {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
 Design Brand
 </Button>
 </div>
 </div>

 {colors.length > 0 && (
 <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
 <div className="flex items-center justify-between mb-8">
 <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2"><Droplets className="w-5 h-5 text-pink-500" /> Primary Palette</h3>
 <Button variant="outline" size="sm" onClick={handleGenerate}><RefreshCw className="w-4 h-4 mr-2" /> Re-roll</Button>
 </div>
 
 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-48">
 {colors.map((hex, i) => (
 <div key={i} className="rounded-2xl flex flex-col overflow-hidden shadow-inner border border-slate-100">
 <div className="flex-1 transition-transform " style={{ backgroundColor: hex }} />
 <div className="h-12 bg-white flex items-center justify-center font-mono text-sm font-bold tracking-wider text-slate-700">
 {hex}
 </div>
 </div>
 ))}
 </div>

 <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
 <div>
 <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Heading Font</h4>
 <div className="text-5xl font-black text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>Inter Tight</div>
 </div>
 <div>
 <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Body Font</h4>
 <div className="text-2xl font-medium text-slate-600" style={{ fontFamily: 'Roboto, sans-serif' }}>Roboto Flex</div>
 </div>
 </div>
 </motion.div>
 )}
 </main>
 <Footer />
 </div>
 );
}
