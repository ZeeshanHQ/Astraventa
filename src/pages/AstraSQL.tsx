import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, Terminal, Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraSQL() {
 const [nlQuery, setNlQuery] = useState("");
 const [sql, setSql] = useState("");
 const [isGenerating, setIsGenerating] = useState(false);

 const handleExecute = () => {
 setIsGenerating(true);
 setTimeout(() => {
 setSql(`-- Generated context: Postgres, Schema: public.users, public.orders
SELECT 
 u.id AS user_id, 
 u.company_name, 
 u.email,
 COUNT(o.id) AS total_purchases
FROM 
 public.users u
LEFT JOIN 
 public.orders o ON u.id = o.user_id
WHERE 
 u.created_at >= NOW() - INTERVAL '30 days'
 AND o.status = 'COMPLETED'
GROUP BY 
 u.id, 
 u.company_name, 
 u.email
HAVING 
 SUM(o.amount) > 5000
ORDER BY 
 total_purchases DESC;`);
 setIsGenerating(false);
 }, 1200);
 };

 return (
 <div className="min-h-screen bg-slate-950 font-mono">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
 <Database className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-white">AstraSQL AI</h1>
 <p className="text-slate-400 font-medium font-sans">Natural Language to Production SQL</p>
 </div>
 </div>

 <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 mb-8">
 <label className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-3 block flex items-center gap-2">
 <Terminal className="w-4 h-4" /> User Intent
 </label>
 <textarea
 className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-emerald-50 h-24 focus:outline-none focus:border-emerald-500/50 resize-none font-sans"
 placeholder="e.g., 'Show me all enterprise clients who signed up in the last 30 days and spent over $5k...'"
 value={nlQuery}
 onChange={(e) => setNlQuery(e.target.value)}
 />
 <Button onClick={handleExecute} disabled={!nlQuery || isGenerating} className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold">
 {isGenerating ? <Loader2 className="w-4 h-4 animate-spin"/> : "Compile to SQL"}
 </Button>
 </div>

 {sql && (
 <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6">
 <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-4">
 <span className="text-slate-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2"><Check className="text-emerald-500 w-4 h-4"/> Query Compiled Successfully</span>
 </div>
 <pre className="text-emerald-300 text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap">
 {sql}
 </pre>
 </motion.div>
 )}
 </main>
 <Footer />
 </div>
 );
}
