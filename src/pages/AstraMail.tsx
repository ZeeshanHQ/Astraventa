import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MailX, ShieldAlert, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

export default function AstraMail() {
 const [scanning, setScanning] = useState(false);
 const [complete, setComplete] = useState(false);

 const startScan = () => {
 setScanning(true);
 setTimeout(() => {
 setComplete(true);
 setScanning(false);
 }, 4000);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[90vh]">
 <div className="text-center mb-12">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600/10 text-red-600 mb-6">
 <MailX className="w-8 h-8" />
 </div>
 <h1 className="text-4xl font-black text-slate-900 mb-4">AstraMail AI</h1>
 <p className="text-slate-500 font-medium text-lg">Intelligent autonomous unsubscription and "Inbox Zero" enforce protocol.</p>
 </div>

 <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl max-w-2xl mx-auto relative overflow-hidden text-center">
 
 {!scanning && !complete && (
 <>
 <ShieldAlert className="w-16 h-16 text-slate-200 mx-auto mb-6" />
 <h2 className="text-2xl font-bold text-slate-800 mb-4">Cleanse Your Inbox Hierarchy</h2>
 <p className="text-slate-500 mb-8 max-w-sm mx-auto font-medium">AstraMail will securely read headers from the past 90 days, identify cold-email platforms, newsletters, and spam, and programmatically unsubscribe you.</p>
 <Button onClick={startScan} className="h-14 px-10 text-lg bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg shadow-red-500/20">
 <RefreshCw className="w-5 h-5 mr-2" /> Start Neural Inbox Scan
 </Button>
 </>
 )}

 {scanning && (
 <div className="py-12">
 <Loader2 className="w-16 h-16 text-red-500 animate-spin mx-auto mb-6" />
 <h2 className="text-xl font-bold text-slate-800 mb-2">Analyzing Inbox Footprint...</h2>
 <p className="text-red-500 font-bold tracking-widest uppercase text-xs animate-pulse">Running unsubscribe scripts...</p>
 </div>
 )}

 {complete && (
 <div className="py-8">
 <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
 <CheckCircle2 className="w-10 h-10 text-emerald-600" />
 </div>
 <h2 className="text-3xl font-black text-slate-900 mb-2">Inbox Purged Successfully.</h2>
 <p className="text-slate-500 mb-8 font-medium">AstraMail removed you from 147 unsolicited lists and created 3 automated defender rules.</p>
 
 <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 mt-2 max-w-sm mx-auto">
 <div className="text-center">
 <div className="text-2xl font-black text-slate-800">147</div>
 <div className="text-xs font-bold text-slate-400 uppercase">Unsubscribes</div>
 </div>
 <div className="text-center">
 <div className="text-2xl font-black text-emerald-600">4.2<span className="text-sm">GB</span></div>
 <div className="text-xs font-bold text-slate-400 uppercase">Space Freed</div>
 </div>
 <div className="text-center">
 <div className="text-2xl font-black text-blue-600">3</div>
 <div className="text-xs font-bold text-slate-400 uppercase">Rules Setup</div>
 </div>
 </div>
 </div>
 )}
 </div>
 </main>
 <Footer />
 </div>
 );
}
