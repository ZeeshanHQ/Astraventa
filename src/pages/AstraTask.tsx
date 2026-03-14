import React, { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckSquare, UploadCloud, FileAudio, FileText, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraTask() {
 const [file, setFile] = useState<File | null>(null);
 const [analyzing, setAnalyzing] = useState(false);
 const [tasks, setTasks] = useState<any[]>([]);
 const fileInputRef = useRef<HTMLInputElement>(null);

 const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
 if (e.target.files && e.target.files[0]) {
 setFile(e.target.files[0]);
 }
 };

 const processFile = () => {
 setAnalyzing(true);
 setTimeout(() => {
 setTasks([
 { title: "Setup PostgreSQL RLS Policies", assignee: "David", priority: "High", type: "Backend" },
 { title: "Design the AstraTools Dashboard UI", assignee: "Sarah", priority: "Medium", type: "Frontend" },
 { title: "Email AWS about quota limit increase", assignee: "Mike", priority: "Urgent", type: "Ops" }
 ]);
 setAnalyzing(false);
 }, 2500);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-12">
 <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600">
 <CheckSquare className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraTask AI</h1>
 <p className="text-slate-500 font-medium">Meeting Transcript to Jira/Linear Ticket Automation</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
 <h3 className="font-bold text-slate-900 mb-4">1. Upload Meeting Audio or Transcript</h3>
 <div 
 onClick={() => fileInputRef.current?.click()}
 className="w-full h-48 border-2 border-dashed border-sky-200 rounded-2xl flex flex-col items-center justify-center text-sky-600 bg-sky-50/50 cursor-pointer hover:bg-sky-50 transition-colors mb-6"
 >
 {file ? (
 <>
 {file.name.endsWith('.mp3') || file.name.endsWith('.wav') ? <FileAudio className="w-10 h-10 mb-3" /> : <FileText className="w-10 h-10 mb-3" />}
 <span className="font-bold text-slate-800">{file.name}</span>
 <span className="text-xs text-slate-500 mt-1">Ready for extraction</span>
 </>
 ) : (
 <>
 <UploadCloud className="w-10 h-10 mb-3 opacity-80" />
 <span className="font-bold">Click or drag file here</span>
 <span className="text-xs text-sky-600/60 mt-1">.MP3, .WAV, .TXT, .VTT supported</span>
 </>
 )}
 <input type="file" ref={fileInputRef} className="hidden" onChange={handleUpload} accept="audio/*,text/plain" />
 </div>
 
 <Button onClick={processFile} disabled={!file || analyzing} className="w-full bg-slate-900 hover:bg-sky-600 text-white h-14 rounded-xl font-bold transition-all">
 {analyzing ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Extract Action Items"}
 </Button>
 </div>

 <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
 <h3 className="font-bold text-white mb-6">2. Extracted Jira Tickets</h3>
 
 {analyzing ? (
 <div className="flex flex-col items-center justify-center h-48 text-sky-400">
 <Loader2 className="w-8 h-8 animate-spin mb-3" />
 <p className="text-sm font-bold uppercase tracking-widest animate-pulse">Running NLP Extraction...</p>
 </div>
 ) : tasks.length > 0 ? (
 <div className="space-y-3 relative z-10">
 {tasks.map((t, i) => (
 <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={i} className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-start justify-between">
 <div>
 <p className="text-white font-medium mb-1.5 leading-snug">{t.title}</p>
 <div className="flex gap-2">
 <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 font-bold">@ {t.assignee}</span>
 <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${t.priority === 'High' || t.priority === 'Urgent' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'}`}>{t.priority}</span>
 <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 font-bold">{t.type}</span>
 </div>
 </div>
 </motion.div>
 ))}
 <Button className="w-full mt-4 bg-sky-600 hover:bg-sky-500 text-white"><ArrowRight className="w-4 h-4 mr-2"/> Push to Jira Board</Button>
 </div>
 ) : (
 <div className="h-48 border border-dashed border-slate-700 rounded-2xl flex items-center justify-center text-slate-500 text-sm font-medium">
 Awaiting analysis...
 </div>
 )}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
