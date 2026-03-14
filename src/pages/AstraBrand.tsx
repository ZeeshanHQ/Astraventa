import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Megaphone, LayoutDashboard, Send, Copy, Loader2, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraBrand() {
 const [topic, setTopic] = useState("");
 const [generating, setGenerating] = useState(false);
 const [activeTab, setActiveTab] = useState("twitter");

 const [drafts, setDrafts] = useState<any>(null);

 const handleGenerate = () => {
 setGenerating(true);
 setTimeout(() => {
 setDrafts({
 twitter: "We just rebuilt our entire core infrastructure from the ground up.\n\nResult: 400% faster API latency and 0 downtime deployments.\n\nHere is how we did it in 5 steps 🧵👇 #Engineering",
 linkedin: "Thrilled to announce the launch of our new API infrastructure today. The team worked relentlessly over the past 3 months to solve one of the hardest scalability challenges in B2B data routing. By moving to a distributed micro-architecture, our enterprise clients now experience sub-50ms latency globally. 🚀",
 email: "Subject: Important Update: Faster API Infrastructure\n\nHi {{first_name}},\n\nStarting today, your Astraventa integration is running on our V2 infrastructure. You don't need to change any code—you'll simply notice your requests returning 400% faster. We've scaled our underlying architecture to ensure zero latency during your peak traffic loads."
 });
 setGenerating(false);
 }, 2000);
 };

 return (
 <div className="min-h-screen bg-orange-50/30">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600">
 <Megaphone className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraBrand AI</h1>
 <p className="text-slate-500 font-medium">Omnichannel Brand Voice Generator</p>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
 
 {/* Controls */}
 <div className="lg:col-span-1 space-y-6">
 <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
 <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Campaign Topic</label>
 <textarea 
 className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-orange-500/50 resize-none font-medium mb-4"
 placeholder="e.g. Announcing our new 400% faster API infrastructure..."
 value={topic} onChange={(e) => setTopic(e.target.value)}
 />
 <Button onClick={handleGenerate} disabled={!topic || generating} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 rounded-xl">
 {generating ? <Loader2 className="w-4 h-4 animate-spin"/> : <><Zap className="w-4 h-4 mr-2"/> Generate Suite</>}
 </Button>
 </div>

 <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
 <div className="flex items-center gap-2 mb-4">
 <LayoutDashboard className="w-4 h-4 text-slate-400" />
 <span className="text-sm font-bold text-slate-700">Brand Identity</span>
 </div>
 <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-medium text-slate-600 flex justify-between items-center mb-2">
 Tone <span className="text-orange-600 font-bold bg-orange-100 px-2 py-0.5 rounded">Technical / Assertive</span>
 </div>
 <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-medium text-slate-600 flex justify-between items-center">
 Guidelines <span className="text-slate-400 font-bold bg-slate-200 px-2 py-0.5 rounded">Loaded</span>
 </div>
 </div>
 </div>

 {/* Outputs */}
 <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col min-h-[500px]">
 <div className="flex border-b border-slate-100 h-14 bg-slate-50">
 {['twitter', 'linkedin', 'email'].map(tab => (
 <button 
 key={tab} onClick={() => setActiveTab(tab)}
 className={`flex-1 font-bold text-sm tracking-wide capitalize transition-colors ${activeTab === tab ? 'bg-white text-orange-600 border-b-2 border-orange-600' : 'text-slate-500 hover:bg-slate-100'}`}
 >
 {tab}
 </button>
 ))}
 </div>

 <div className="flex-1 p-8 bg-white relative">
 {generating ? (
 <div className="absolute inset-0 flex flex-col items-center justify-center text-orange-600 bg-white/80 backdrop-blur-sm z-10">
 <Loader2 className="w-10 h-10 animate-spin mb-4" />
 <span className="font-bold tracking-widest uppercase text-sm animate-pulse">Running Omnichannel Generation...</span>
 </div>
 ) : drafts ? (
 <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} className="h-full flex flex-col">
 <textarea 
 readOnly
 value={drafts[activeTab as keyof typeof drafts]} 
 className="flex-1 w-full resize-none outline-none text-slate-800 text-lg leading-relaxed bg-transparent"
 />
 <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end gap-3">
 <Button variant="outline" className="text-slate-600"><Copy className="w-4 h-4 mr-2"/> Copy</Button>
 <Button className="bg-slate-900 hover:bg-orange-600 text-white"><Send className="w-4 h-4 mr-2"/> Schedule Post</Button>
 </div>
 </motion.div>
 ) : (
 <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
 Configure your campaign to generate the marketing suite.
 </div>
 )}
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
