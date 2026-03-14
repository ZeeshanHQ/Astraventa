import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { UserSquare2, FileBadge, Check, Upload, Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraRecruit() {
 const [scanning, setScanning] = useState(false);
 const [results, setResults] = useState<any[]>([]);

 const handleRun = () => {
 setScanning(true);
 setTimeout(() => {
 setResults([
 { name: "Eleanor Vance", match: 94, missing: "Kubernetes exp.", status: "Strong Hire" },
 { name: "John Doe", match: 72, missing: "React framework, Node.js", status: "Pass" },
 { name: "Jane Smith", match: 88, missing: "GraphQL", status: "Phone Screen" }
 ]);
 setScanning(false);
 }, 2500);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-12">
 <div className="w-12 h-12 rounded-xl bg-fuchsia-600/10 flex items-center justify-center text-fuchsia-600">
 <UserSquare2 className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraRecruit AI</h1>
 <p className="text-slate-500 font-medium">Resume Ranking & Skill Matching Engine</p>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-1 space-y-6">
 <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
 <h3 className="font-bold border-b border-slate-100 pb-3 mb-3 text-sm text-slate-700 uppercase tracking-widest"><FileBadge className="w-4 h-4 inline mr-2 text-fuchsia-500"/> 1. Target Job Description</h3>
 <textarea 
 className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20"
 defaultValue="Senior Full Stack Engineer. 5+ years experience in React, Node.js, and Postgres. Must have experience deploying scalable ML architectures to AWS. Kubernetes experience is a nice to have."
 />
 </div>
 <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
 <h3 className="font-bold border-b border-slate-100 pb-3 mb-3 text-sm text-slate-700 uppercase tracking-widest"><Upload className="w-4 h-4 inline mr-2 text-fuchsia-500"/> 2. Resumes (PDF Zip)</h3>
 <div className="h-24 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400 font-bold mb-4">
 applicants.zip (23 MB)
 </div>
 <Button onClick={handleRun} disabled={scanning} className="w-full bg-slate-900 hover:bg-fuchsia-600 text-white font-bold h-12 rounded-xl">
 {scanning ? <Loader2 className="w-4 h-4 animate-spin"/> : "Execute Ranking"}
 </Button>
 </div>
 </div>

 <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
 <h3 className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-3"><Sparkles className="w-5 h-5 text-fuchsia-500"/> AI Assessment Results</h3>
 
 {scanning ? (
 <div className="h-64 flex flex-col items-center justify-center text-fuchsia-600">
 <Loader2 className="w-10 h-10 animate-spin mb-4" />
 <p className="font-bold uppercase tracking-widest text-sm animate-pulse">Parsing unstructured PDFs...</p>
 </div>
 ) : results.length > 0 ? (
 <div className="space-y-4">
 {results.map((r, i) => (
 <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} key={i} className={`p-4 rounded-2xl border ${r.match >= 90 ? 'bg-emerald-50 border-emerald-100' : r.match > 80 ? 'bg-amber-50 border-amber-100' : 'bg-slate-50 border-slate-200'} flex items-start justify-between`}>
 <div>
 <div className="flex items-center gap-3 mb-2">
 <h4 className="font-bold text-slate-900 text-lg">{r.name}</h4>
 <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${r.status === 'Strong Hire' ? 'bg-emerald-200 text-emerald-800' : r.status === 'Phone Screen' ? 'bg-amber-200 text-amber-800' : 'bg-slate-200 text-slate-600'}`}>
 {r.status}
 </span>
 </div>
 <p className="text-xs font-bold text-slate-500">MISSING REQUIREMENTS: <span className="font-medium text-rose-500">{r.missing}</span></p>
 </div>
 <div className="text-right">
 <div className={`text-3xl font-black ${r.match >= 90 ? 'text-emerald-600' : r.match > 80 ? 'text-amber-500' : 'text-slate-400'}`}>
 {r.match}%
 </div>
 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Match</div>
 </div>
 </motion.div>
 ))}
 </div>
 ) : (
 <div className="h-64 border-2 border-dashed border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-medium">
 Results will display here
 </div>
 )}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
