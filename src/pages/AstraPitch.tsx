import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Globe, FileDiff, Download, Loader2 } from "lucide-react";

export default function AstraPitch() {
 const [url, setUrl] = useState("");
 const [isGenerating, setIsGenerating] = useState(false);
 const [done, setDone] = useState(false);

 const handleGenerate = () => {
 setIsGenerating(true);
 setTimeout(() => {
 setDone(true);
 setIsGenerating(false);
 }, 3000);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex flex-col items-center text-center mb-12">
 <div className="w-16 h-16 rounded-2xl bg-rose-600/10 flex items-center justify-center text-rose-600 mb-6">
 <Target className="w-8 h-8" />
 </div>
 <h1 className="text-4xl font-black text-slate-900 mb-4">AstraPitch AI</h1>
 <p className="text-slate-500 text-lg max-w-2xl font-medium">Input your prospect's domain. The autonomous engine will scrape their entire product offering and generate a 12-slide custom Pitch Deck predicting their exact pain points.</p>
 </div>

 <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 p-8 max-w-3xl mx-auto">
 <div className="flex gap-4">
 <div className="relative flex-1">
 <Globe className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
 <input 
 placeholder="e.g. stripe.com" value={url} onChange={(e) => setUrl(e.target.value)}
 className="w-full pl-12 pr-4 h-14 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-rose-500/20 font-medium text-slate-800"
 />
 </div>
 <Button onClick={handleGenerate} disabled={!url || isGenerating} className="h-14 px-8 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg shadow-rose-500/20">
 {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Synthesize Deck"}
 </Button>
 </div>

 {isGenerating && (
 <div className="mt-12 py-12 flex flex-col items-center justify-center text-rose-600 border-t border-slate-100">
 <Loader2 className="w-12 h-12 animate-spin mb-4" />
 <span className="font-bold tracking-widest uppercase text-sm animate-pulse">Running Browser Crawler... Fetching "About Us"...</span>
 </div>
 )}

 {done && !isGenerating && (
 <div className="mt-12 pt-8 border-t border-slate-100 animate-in fade-in zoom-in duration-500">
 <div className="flex items-start justify-between bg-rose-50 border border-rose-100 p-6 rounded-2xl">
 <div className="flex items-center gap-4">
 <FileDiff className="w-12 h-12 text-rose-600" />
 <div>
 <h3 className="font-bold text-slate-900 text-lg">Sales Deck Generated</h3>
 <p className="text-sm text-slate-600">12 Slides • Identified 3 major scalability bottlenecks • Custom branding applied</p>
 </div>
 </div>
 <Button className="bg-slate-900 hover:bg-rose-600 text-white"><Download className="w-4 h-4 mr-2"/> Export PDF</Button>
 </div>
 </div>
 )}
 </div>
 </main>
 <Footer />
 </div>
 );
}
