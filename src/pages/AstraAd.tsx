import React, { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart2, ImageIcon, Eye, TrendingUp, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraAd() {
 const [file, setFile] = useState<File | null>(null);
 const [loading, setLoading] = useState(false);
 const [result, setResult] = useState<any>(null);
 const ref = useRef<HTMLInputElement>(null);

 const analyze = () => {
 setLoading(true);
 setTimeout(() => {
 setResult({ ctr: 3.8, score: 82, issues: ["CTA button too low — move above the fold.", "Headline font contrast is 2.1:1 — needs 4.5:1 minimum.", "Eye-flow leads to background — not CTA."], top: "Top 15% of ads in your category." });
 setLoading(false);
 }, 2500);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-600">
 <BarChart2 className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraAd AI</h1>
 <p className="text-slate-500 font-medium">Eye-Tracking Heatmap & CTR Predictor for Ad Creatives</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="space-y-6">
 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
 <h3 className="font-bold text-slate-800 mb-4">Upload Ad Creative</h3>
 <div onClick={() => ref.current?.click()} className="h-64 bg-purple-50/50 border-2 border-dashed border-purple-200 rounded-2xl flex flex-col items-center justify-center text-purple-600 cursor-pointer hover:bg-purple-50 transition-colors mb-6 overflow-hidden relative">
 {file ? (
 <div className="relative w-full h-full">
 <img src={URL.createObjectURL(file)} alt="Ad" className="object-cover w-full h-full" />
 {/* Eye-tracking heatmap overlay */}
 {result && (
 <div className="absolute inset-0">
 <div className="absolute top-[20%] left-[35%] w-32 h-20 bg-rose-500/30 rounded-[50%] blur-2xl" />
 <div className="absolute top-[55%] left-[20%] w-20 h-14 bg-amber-500/25 rounded-[50%] blur-2xl" />
 <div className="absolute top-[70%] right-[20%] w-16 h-12 bg-blue-500/20 rounded-[50%] blur-xl" />
 <div className="absolute inset-0 flex items-start justify-center pt-3">
 <span className="bg-black/60 text-white text-[10px] font-bold px-3 py-1 rounded-full">Eye-Tracking Heatmap Active</span>
 </div>
 </div>
 )}
 </div>
 ) : (
 <>
 <ImageIcon className="w-10 h-10 mb-3 opacity-80" />
 <span className="font-bold">Upload Your Ad Image</span>
 <span className="text-xs text-purple-500/60 mt-1">Facebook, Instagram, Google Display ads</span>
 </>
 )}
 <input type="file" ref={ref} className="hidden" onChange={e => e.target.files && setFile(e.target.files[0])} accept="image/*" />
 </div>
 <Button onClick={analyze} disabled={!file || loading} className="w-full bg-purple-700 hover:bg-purple-600 text-white h-14 rounded-xl font-bold shadow-lg shadow-purple-500/20">
 {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Eye className="w-5 h-5 mr-2" />}
 {loading ? "Running Gaze Simulation..." : "Analyze Creative"}
 </Button>
 </div>
 </div>

 {result && (
 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
 <div className="grid grid-cols-2 gap-4">
 <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center">
 <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
 <div className="text-3xl font-black text-slate-900">{result.ctr}%</div>
 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Predicted CTR</div>
 </div>
 <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center">
 <BarChart2 className="w-6 h-6 text-purple-600 mx-auto mb-2" />
 <div className="text-3xl font-black text-slate-900">{result.score}/100</div>
 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Creative Score</div>
 </div>
 </div>
 <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
 <h4 className="font-bold text-slate-800 text-sm uppercase tracking-widest mb-4">Optimization Issues</h4>
 <div className="space-y-3">
 {result.issues.map((issue: string, i: number) => (
 <div key={i} className="flex items-start gap-3 p-3 bg-rose-50 border border-rose-100 rounded-xl text-sm">
 <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">{i + 1}</span>
 <span className="text-rose-800 font-medium">{issue}</span>
 </div>
 ))}
 </div>
 </div>
 <div className="bg-purple-50 border border-purple-100 rounded-3xl p-5 text-center">
 <p className="font-bold text-purple-800">{result.top}</p>
 </div>
 </motion.div>
 )}
 {!result && !loading && (
 <div className="bg-white rounded-3xl border border-slate-200 flex items-center justify-center text-slate-400 font-medium shadow-sm p-10 text-center">
 Upload an ad creative to begin the gaze simulation and CTR prediction.
 </div>
 )}
 </div>
 </main>
 <Footer />
 </div>
 );
}
