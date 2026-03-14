import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquareText, Star, Bot, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraReview() {
 const [review] = useState({
 rating: 2,
 author: "Michael T.",
 platform: "G2 Crowd",
 text: "The software works fine for basic analytics, but their API limits are incredibly low for enterprise use. We hit the ceiling twice this week and support was slow."
 });
 const [draft, setDraft] = useState("");

 const handleDraft = () => {
 setDraft("Hi Michael, we sincerely apologize for the frustration with the API limits. We've just rolled out our V3 architecture which increases tier caps by 500% specifically for heavy enterprise loads. Our Account Manager, Sarah, will be reaching out via email today to upgrade your workspace to the new infrastructure free of charge to get you unblocked immediately.");
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-12">
 <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
 <MessageSquareText className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraReview AI</h1>
 <p className="text-slate-500 font-medium">Reputation Management & Autonomous Response</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {/* Incoming Review */}
 <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
 <div className="flex justify-between items-start mb-6">
 <div>
 <h3 className="font-bold text-slate-900">{review.author}</h3>
 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.platform}</span>
 </div>
 <div className="flex gap-1">
 {[1,2,3,4,5].map(i => <Star key={i} className={`w-5 h-5 ${i <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />)}
 </div>
 </div>
 <p className="text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-2xl">"{review.text}"</p>
 
 <div className="mt-8">
 <Button onClick={handleDraft} className="w-full bg-slate-900 hover:bg-amber-500 text-white h-14 rounded-xl font-bold shadow-lg">
 <Bot className="w-5 h-5 mr-2" /> Auto-Draft De-escalation Response
 </Button>
 </div>
 </div>

 {/* Draft Area */}
 <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200/50 shadow-inner">
 <h3 className="font-bold text-amber-900 mb-6 flex items-center gap-2"><SparkleIcon /> Brand-Aligned AI Draft</h3>
 {draft ? (
 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
 <div className="bg-white p-6 rounded-2xl border border-amber-100 text-slate-800 text-sm leading-relaxed whitespace-pre-wrap shadow-sm">
 {draft}
 </div>
 <div className="flex gap-3">
 <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-500/20"><Send className="w-4 h-4 mr-2"/> Approve & Publish</Button>
 </div>
 </motion.div>
 ) : (
 <div className="h-48 flex items-center justify-center border-2 border-dashed border-amber-200 rounded-2xl text-amber-700/50 font-medium">
 Click 'Auto-Draft' to securely query the CRM rules engine.
 </div>
 )}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}

function SparkleIcon() {
 return <Bot className="w-5 h-5 text-amber-500" />;
}
