import React, { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Video, UserCheck, ShieldAlert, BadgeCheck, Loader2 } from "lucide-react";

export default function AstraVerify() {
 const [scanning, setScanning] = useState(false);
 const [result, setResult] = useState<any>(null);

 const startScan = () => {
 setScanning(true);
 setResult(null);
 setTimeout(() => {
 setResult({
 authentic: true,
 confidence: "99.2%",
 liveness: "Verified",
 synthesis: "No deepfake modulation detected in audio or visual frames.",
 });
 setScanning(false);
 }, 3500);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="text-center mb-12">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-600/10 text-violet-600 mb-6">
 <ShieldCheck className="w-8 h-8" />
 </div>
 <h1 className="text-4xl font-black text-slate-900 mb-4">AstraVerify AI</h1>
 <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Live Identity & Deepfake Detection. Secure your remote hiring and freelance onboarding with enterprise-grade cryptographic liveness checks.</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
 <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 text-center">
 <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm text-slate-400">Live Video Stream Status</h3>
 
 <div className="w-full h-64 bg-black rounded-2xl border border-slate-800 flex flex-col items-center justify-center mb-6 relative overflow-hidden">
 
 {scanning ? (
 <div className="absolute inset-0 border-4 border-violet-500 animate-pulse rounded-2xl" />
 ) : null}

 {!scanning && !result ? (
 <>
 <Video className="w-12 h-12 text-slate-600 mb-3" />
 <span className="text-slate-400 font-medium">Camera Input Standby...</span>
 </>
 ) : scanning ? (
 <>
 <div className="w-full h-1 bg-violet-500 absolute top-0 animate-[scan_2s_ease-in-out_infinite]" />
 <Loader2 className="w-12 h-12 text-violet-500 animate-spin mb-3 relative z-10" />
 <span className="text-violet-400 font-bold uppercase tracking-widest text-xs relative z-10">Running Liveness Heuristics</span>
 </>
 ) : (
 <>
 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=400" className="opacity-40 object-cover w-full h-full" alt="Scan result"/>
 <div className="absolute inset-0 flex items-center justify-center text-emerald-400 border-4 border-emerald-500 rounded-2xl">
 <UserCheck className="w-16 h-16" />
 </div>
 </>
 )}
 </div>
 <Button onClick={startScan} disabled={scanning} className="w-full h-14 bg-violet-600 hover:bg-violet-700 text-white font-bold text-lg rounded-xl">
 {scanning ? "Scanning Frame Data..." : "Initiate Verification"}
 </Button>
 </div>

 <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 flex flex-col justify-center">
 <h3 className="font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4 text-xl flex items-center gap-3">
 <BadgeCheck className="w-6 h-6 text-violet-600" /> Assessment Report
 </h3>

 {!result && !scanning && (
 <div className="flex-1 flex items-center justify-center text-slate-400 font-medium pb-10 text-center">
 Awaiting scan data to generate trust report.
 </div>
 )}

 {scanning && (
 <div className="flex-1 flex flex-col items-center justify-center text-violet-600 pb-10">
 <ShieldAlert className="w-8 h-8 mb-4 animate-bounce" />
 <span className="font-bold">Analyzing micro-expressions...</span>
 </div>
 )}

 {result && (
 <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
 <div className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
 <span className="font-bold text-emerald-800">Authenticity</span>
 <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Verified Human</span>
 </div>
 <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
 <span className="font-bold text-slate-700">Confidence Score</span>
 <span className="font-black text-violet-600 text-xl">{result.confidence}</span>
 </div>
 <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
 <span className="font-bold text-slate-700 block mb-2 text-sm uppercase tracking-widest">Synthesis Scan</span>
 <span className="font-medium text-slate-500 text-sm leading-relaxed">{result.synthesis}</span>
 </div>
 </div>
 )}
 </div>
 </div>
 </main>
 <style dangerouslySetInnerHTML={{__html: `
 @keyframes scan {
 0% { top: 0%; box-shadow: 0 0 15px 5px rgba(139, 92, 246, 0.5); }
 50% { top: 100%; box-shadow: 0 0 15px 5px rgba(139, 92, 246, 0.5); }
 100% { top: 0%; box-shadow: 0 0 15px 5px rgba(139, 92, 246, 0.5); }
 }
 `}} />
 <Footer />
 </div>
 );
}
