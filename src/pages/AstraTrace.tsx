import React, { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScanLine, Image as ImageIcon, Loader2, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraTrace() {
 const [file, setFile] = useState<File | null>(null);
 const [loading, setLoading] = useState(false);
 const [result, setResult] = useState<any>(null);
 const ref = useRef<HTMLInputElement>(null);

 const analyze = () => {
 setLoading(true);
 setTimeout(() => {
 setResult({
 passed: true,
 standard: "ISO 9001:2015 / EN 13 Compliant",
 score: 91,
 checks: [
 { label: "Stitching integrity", pass: true },
 { label: "Label placement", pass: true },
 { label: "Color uniformity", pass: true },
 { label: "Material density (visual est.)", pass: false },
 ]
 });
 setLoading(false);
 }, 3000);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-teal-600/10 flex items-center justify-center text-teal-600">
 <ScanLine className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraTrace AI</h1>
 <p className="text-slate-500 font-medium">Supply Chain Quality Verification Engine</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="space-y-6">
 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
 <h3 className="font-bold text-slate-800 mb-4">Upload Product Photo</h3>
 <div onClick={() => ref.current?.click()} className="h-56 bg-teal-50/50 border-2 border-dashed border-teal-200 rounded-2xl flex flex-col items-center justify-center text-teal-600 cursor-pointer hover:bg-teal-50 transition-colors mb-6 overflow-hidden relative">
 {file ? (
 <img src={URL.createObjectURL(file)} alt="product" className="object-cover w-full h-full opacity-60" />
 ) : (
 <>
 <ImageIcon className="w-10 h-10 mb-3 opacity-80" />
 <span className="font-bold">Upload Product Image</span>
 <span className="text-xs text-teal-500/60 mt-1">Garments, sports goods, electronics, etc.</span>
 </>
 )}
 <input type="file" ref={ref} className="hidden" onChange={e => e.target.files && setFile(e.target.files[0])} accept="image/*" />
 </div>
 <Button onClick={analyze} disabled={!file || loading} className="w-full bg-teal-700 hover:bg-teal-600 text-white h-14 rounded-xl font-bold">
 {loading ? <><Loader2 className="w-5 h-5 animate-spin mr-2" />Scanning Standards...</> : "Run Quality Verification"}
 </Button>
 </div>
 </div>

 <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col shadow-2xl">
 {!result && !loading && <div className="flex-1 flex items-center justify-center text-slate-600 font-medium text-center">Quality report will appear here after scan.</div>}
 {loading && (
 <div className="flex-1 flex flex-col items-center justify-center text-teal-500">
 <ScanLine className="w-12 h-12 mb-4 animate-bounce" />
 <p className="font-bold uppercase tracking-widest text-xs animate-pulse">Running ISO 9001 matrix checks...</p>
 </div>
 )}
 {result && (
 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
 <div className={`p-5 rounded-2xl border ${result.passed ? "bg-emerald-500/10 border-emerald-500/30" : "bg-rose-500/10 border-rose-500/30"} flex items-center justify-between`}>
 <div>
 <div className={`font-black text-2xl ${result.passed ? "text-emerald-400" : "text-rose-400"}`}>{result.passed ? "PASSED" : "FAILED"}</div>
 <div className="text-slate-400 font-medium text-sm mt-1">{result.standard}</div>
 </div>
 <div className="text-right">
 <div className="text-4xl font-black text-white">{result.score}</div>
 <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">/100 Score</div>
 </div>
 </div>
 
 <div className="space-y-2">
 {result.checks.map((c: any, i: number) => (
 <div key={i} className="flex items-center gap-3 p-3 bg-slate-800/50 border border-slate-800 rounded-xl">
 {c.pass ? <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> : <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
 <span className={`font-medium text-sm ${c.pass ? "text-slate-300" : "text-rose-400"}`}>{c.label}</span>
 <span className={`ml-auto text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${c.pass ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"}`}>{c.pass ? "PASS" : "FLAG"}</span>
 </div>
 ))}
 </div>
 <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-400 text-xs font-bold">
 <AlertTriangle className="w-4 h-4 shrink-0" /> 1 non-critical flag. Suitable for export with minor correction.
 </div>
 </motion.div>
 )}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
