import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Receipt, UploadCloud, RefreshCw, AlertCircle, FileDigit, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AstraFinance() {
 const [analyzing, setAnalyzing] = useState(false);
 const [complete, setComplete] = useState(false);
 const [showDocs, setShowDocs] = useState(false);

 const handleReconcile = () => {
 setAnalyzing(true);
 setTimeout(() => {
 setAnalyzing(false);
 setComplete(true);
 setShowDocs(true);
 }, 3000);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center text-green-600">
 <Receipt className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraFinance AI</h1>
 <p className="text-slate-500 font-medium">Invoice NLP Parsing & Auto-Reconciliation</p>
 </div>
 </div>

 <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-8">
 <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50/50">
 <div className="flex items-center gap-6">
 <div className="text-center p-4 bg-white border border-slate-200 rounded-2xl shadow-sm w-32">
 <div className="text-3xl font-black text-slate-800">142</div>
 <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Invoices</div>
 </div>
 <div className="text-center p-4 bg-white border border-slate-200 rounded-2xl shadow-sm w-32">
 <div className="text-3xl font-black text-slate-800">1</div>
 <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Bank Stmt</div>
 </div>
 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-200 text-slate-400 cursor-pointer hover:bg-slate-300 transition-colors">
 <UploadCloud className="w-6 h-6" />
 </div>
 </div>
 
 <div className="w-full md:w-auto">
 <Button onClick={handleReconcile} disabled={analyzing || complete} className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white h-16 px-10 rounded-2xl font-black tracking-wide shadow-lg shadow-green-500/20 text-lg">
 {analyzing ? <RefreshCw className="w-6 h-6 animate-spin mr-3"/> : <RefreshCw className="w-6 h-6 mr-3"/>}
 {analyzing ? "Reconciling Ledgers..." : "Run Reconciliation"}
 </Button>
 </div>
 </div>
 
 <AnimatePresence>
 {complete && showDocs && (
 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="p-8 bg-white">
 
 {/* Ledger Summary */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
 <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
 <div className="flex items-center justify-between mb-4">
 <h4 className="text-xs font-black uppercase text-emerald-800 tracking-widest">Matched</h4>
 <CheckCircle2 className="w-5 h-5 text-emerald-500" />
 </div>
 <div className="text-4xl font-black text-emerald-600 mb-1">139</div>
 <div className="text-sm font-medium text-emerald-700">Line items perfectly synced to QuickBooks.</div>
 </div>
 
 <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl">
 <div className="flex items-center justify-between mb-4">
 <h4 className="text-xs font-black uppercase text-rose-800 tracking-widest">Anomalies</h4>
 <AlertCircle className="w-5 h-5 text-rose-500 animate-pulse" />
 </div>
 <div className="text-4xl font-black text-rose-600 mb-1">3</div>
 <div className="text-sm font-medium text-rose-700">Flagged for manual review.</div>
 </div>

 <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
 <div className="flex items-center justify-between mb-4">
 <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest">Time Saved</h4>
 </div>
 <div className="text-4xl font-black text-slate-800 mb-1">11.4h</div>
 <div className="text-sm font-medium text-slate-500">Manual data entry bypassed.</div>
 </div>
 </div>

 {/* Anomalies Table */}
 <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">Attention Required</h3>
 <div className="space-y-3">
 {[
 { inv: "INV-2049", vendor: "AWS Web Services", expected: "$4,250.00", charged: "$4,900.00", reason: "Variance > 15%" },
 { inv: "INV-2051", vendor: "SlackTech Inc.", expected: "$1,200.00", charged: "$1,200.00", reason: "Duplicate invoice detected" },
 { inv: "STRIPE-11", vendor: "Stripe Subscriptions", expected: "N/A", charged: "$14.00", reason: "No matching vendor record in Ledger" }
 ].map((item, i) => (
 <div key={i} className="flex flex-col md:flex-row items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
 <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0">
 <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600"><FileDigit className="w-5 h-5"/></div>
 <div>
 <h5 className="font-bold text-slate-900">{item.inv}</h5>
 <span className="text-xs font-medium text-slate-500">{item.vendor}</span>
 </div>
 </div>
 <div className="flex flex-col items-end md:items-center md:flex-row gap-6 w-full md:w-auto">
 <div className="text-right">
 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-0.5">Charged</span>
 <span className="font-bold text-rose-600">{item.charged}</span>
 </div>
 <div className="text-right">
 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-0.5">Expected</span>
 <span className="font-bold text-slate-700">{item.expected}</span>
 </div>
 <div className="bg-rose-100 text-rose-800 px-3 py-1.5 rounded-lg text-xs font-bold w-full md:w-auto text-center md:text-left">
 {item.reason}
 </div>
 <Button variant="outline" size="sm" className="hidden md:flex">Resolve</Button>
 </div>
 </div>
 ))}
 </div>

 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </main>
 <Footer />
 </div>
 );
}
