import React, { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PenLine, ImageIcon, Loader2, Download, Box } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraDraft() {
 const [file, setFile] = useState<File | null>(null);
 const [loading, setLoading] = useState(false);
 const [done, setDone] = useState(false);
 const ref = useRef<HTMLInputElement>(null);

 const process = () => {
 setLoading(true);
 setTimeout(() => { setDone(true); setLoading(false); }, 3500);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-slate-600/10 flex items-center justify-center text-slate-600">
 <PenLine className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraDraft AI</h1>
 <p className="text-slate-500 font-medium">Napkin Sketch → 1:1 Scale Technical 3D CAD Model</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
 <h3 className="font-bold text-slate-800 mb-2">Upload Rough Sketch</h3>
 <p className="text-slate-500 text-sm mb-5 font-medium">Hand-drawn on paper, tablet sketch, or whiteboard photo. AstraDraft's vision engine reconstructs your intent into precise technical geometry.</p>
 <div onClick={() => ref.current?.click()} className="h-64 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:border-slate-400 hover:bg-slate-100 transition-all mb-6 overflow-hidden relative">
 {file ? (
 <img src={URL.createObjectURL(file)} alt="Sketch" className="object-contain w-full h-full p-2" />
 ) : (
 <>
 <PenLine className="w-10 h-10 mb-3 opacity-50" />
 <span className="font-bold">Upload Sketch or Drawing</span>
 <span className="text-xs mt-1 text-slate-400">JPG, PNG (architectural, mechanical, structural)</span>
 </>
 )}
 <input type="file" ref={ref} className="hidden" onChange={e => e.target.files && setFile(e.target.files[0])} accept="image/*" />
 </div>
 <Button onClick={process} disabled={!file || loading} className="w-full bg-slate-900 hover:bg-slate-700 text-white h-14 rounded-xl font-bold shadow-lg">
 {loading ? <><Loader2 className="w-5 h-5 animate-spin mr-2" />Interpreting Geometry...</> : "Convert to 3D CAD Model"}
 </Button>
 </div>

 <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
 {!done && !loading && (
 <div className="h-full flex flex-col items-center justify-center text-slate-600 p-10 text-center gap-4" style={{ minHeight: 400 }}>
 <Box className="w-16 h-16 opacity-20" />
 <p className="font-medium">3D model output will render here.</p>
 </div>
 )}
 {loading && (
 <div className="h-full flex flex-col items-center justify-center text-slate-400 p-10 text-center gap-6" style={{ minHeight: 400 }}>
 <div className="relative">
 <Box className="w-20 h-20 text-slate-700 animate-pulse" />
 <Loader2 className="w-8 h-8 text-slate-500 animate-spin absolute -bottom-2 -right-2" />
 </div>
 <div>
 <p className="font-bold text-slate-300">Reconstructing Wireframe...</p>
 <p className="text-xs text-slate-600 mt-1 font-mono">Inferring scale, depth & proportional geometry</p>
 </div>
 </div>
 )}
 {done && (
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 h-full" style={{ minHeight: 400 }}>
 {/* Simulated 3D wireframe SVG */}
 <div className="relative h-56 mb-6 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden">
 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
 <svg width="220" height="160" viewBox="0 0 220 160" fill="none">
 <polygon points="110,20 180,60 180,120 110,140 40,120 40,60" stroke="#6366f1" strokeWidth="1.5" fill="rgba(99,102,241,0.05)" />
 <line x1="110" y1="20" x2="110" y2="140" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="4 2" />
 <line x1="40" y1="60" x2="180" y2="120" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="4 2" />
 <line x1="180" y1="60" x2="40" y2="120" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="4 2" />
 <circle cx="110" cy="20" r="3" fill="#818cf8" />
 <circle cx="180" cy="60" r="3" fill="#818cf8" />
 <circle cx="180" cy="120" r="3" fill="#818cf8" />
 <circle cx="110" cy="140" r="3" fill="#818cf8" />
 <circle cx="40" cy="120" r="3" fill="#818cf8" />
 <circle cx="40" cy="60" r="3" fill="#818cf8" />
 </svg>
 <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-500">WIREFRAME VIEW · 1:1 SCALE</div>
 </div>
 <div className="space-y-3 mb-6">
 {[["Inferred Height", "3.4m"], ["Inferred Width", "6.1m"], ["Wall Thickness", "0.25m"], ["Export Format", "DXF / OBJ / STEP"]].map(([k, v], i) => (
 <div key={i} className="flex justify-between text-sm border-b border-slate-800 pb-2">
 <span className="text-slate-500 font-medium">{k}</span>
 <span className="font-bold text-white">{v}</span>
 </div>
 ))}
 </div>
 <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl"><Download className="w-4 h-4 mr-2" />Export CAD File</Button>
 </motion.div>
 )}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
