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
  <div className="min-h-screen bg-white">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
  <div className="flex items-center gap-3 mb-10">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
      <Megaphone className="w-6 h-6" />
    </div>
    <div>
      <h1 className="text-3xl font-black text-slate-900 tracking-tight">AstraBrand AI</h1>
      <p className="text-slate-500 font-medium text-xs uppercase font-mono tracking-widest flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Multichannel Identity Synthesis
      </p>
    </div>
  </div>

 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
 
 {/* Controls */}
 <div className="lg:col-span-1 space-y-6">
  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
    <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Campaign Strategy</label>
    <textarea 
      className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-primary/50 resize-none font-medium mb-4"
      placeholder="e.g. Announcing our new 400% faster API infrastructure..."
      value={topic} onChange={(e) => setTopic(e.target.value)}
    />
    <Button onClick={handleGenerate} disabled={!topic || generating} className="w-full bg-slate-950 hover:bg-primary text-white font-black h-12 rounded-xl transition-all shadow-lg hover:shadow-primary/20">
      {generating ? <Loader2 className="w-4 h-4 animate-spin"/> : <><Zap className="w-4 h-4 mr-2"/> Generate Suite</>}
    </Button>
  </div>

 <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
 <div className="flex items-center gap-2 mb-4">
 <LayoutDashboard className="w-4 h-4 text-slate-400" />
 <span className="text-sm font-bold text-slate-700">Brand Identity</span>
 </div>
  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-[11px] font-bold text-slate-500 flex justify-between items-center mb-2">
    LOGIC <span className="text-primary font-black bg-primary/10 px-2 py-0.5 rounded tracking-tighter">TECHNICAL / ASSERTIVE</span>
  </div>
 <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-medium text-slate-600 flex justify-between items-center">
 Guidelines <span className="text-slate-400 font-bold bg-slate-200 px-2 py-0.5 rounded">Loaded</span>
 </div>
 </div>
 </div>

 {/* Outputs */}
 <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col min-h-[500px]">
  <div className="flex border-b border-slate-100 h-14 bg-slate-50/50">
    {['twitter', 'linkedin', 'email'].map(tab => (
      <button 
        key={tab} onClick={() => setActiveTab(tab)}
        className={`flex-1 font-black text-[11px] tracking-widest uppercase transition-all ${activeTab === tab ? 'bg-white text-primary border-b-2 border-primary' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
      >
        {tab}
      </button>
    ))}
  </div>

 <div className="flex-1 p-8 bg-white relative">
  {generating ? (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-primary bg-white/95 backdrop-blur-sm z-10 p-10 text-center">
      <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-primary animate-spin mb-6" />
      <span className="font-black tracking-widest uppercase text-[11px] animate-pulse">Running Omnichannel Generation Engine...</span>
    </div>
  ) : drafts ? (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col">
      <textarea 
        readOnly
        value={drafts[activeTab as keyof typeof drafts]} 
        className="flex-1 w-full resize-none outline-none text-slate-800 text-lg leading-relaxed bg-transparent font-medium"
      />
      <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Astra Core V4 Engine</span>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-slate-600 border-slate-200 rounded-xl hover:bg-slate-50"><Copy className="w-4 h-4 mr-2"/> Copy Output</Button>
          <Button className="bg-slate-950 hover:bg-primary text-white font-black rounded-xl transition-all shadow-lg hover:shadow-primary/20 px-8"><Send className="w-4 h-4 mr-2"/> Schedule Deployment</Button>
        </div>
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
