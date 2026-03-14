import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Link as LinkIcon, Loader2, Send } from "lucide-react";

export default function AstraLead() {
 const [url, setUrl] = useState("");
 const [isGenerating, setIsGenerating] = useState(false);
 const [result, setResult] = useState<any>(null);

 const handleScrape = () => {
 setIsGenerating(true);
 setTimeout(() => {
 setResult({
 name: "Sarah Jenkins",
 title: "VP of Engineering at CloudScale",
 recentActivity: "Commented on a post about AI scaling problems 2 days ago.",
 icebreaker: "Hi Sarah - loved your comment on the AI scaling thread Tuesday. Since CloudScale is aggressively expanding its machine learning team, I thought you might be interested in how we cut inference latency by 40% for similar startups. Open to a quick chat?"
 });
 setIsGenerating(false);
 }, 2000);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10 text-center justify-center">
 <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600">
 <Users className="w-6 h-6" />
 </div>
 <h1 className="text-3xl font-black text-slate-900">AstraLead AI</h1>
 </div>

 <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 text-center max-w-2xl mx-auto mb-8">
 <p className="text-slate-500 mb-6 font-medium">Paste a LinkedIn profile URL. AstraLead will scrape their recent activity and draft a hyper-personalized outreach sequence.</p>
 <div className="flex bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-600/20">
 <div className="flex items-center px-4 text-slate-400 border-r border-slate-200"><LinkIcon className="w-5 h-5"/></div>
 <input 
 value={url} onChange={(e) => setUrl(e.target.value)}
 className="flex-1 bg-transparent p-4 outline-none font-medium text-slate-800"
 placeholder="linkedin.com/in/username..."
 />
 <Button onClick={handleScrape} disabled={!url || isGenerating} className="h-auto px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-none font-bold">
 {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : "Run Scraper"}
 </Button>
 </div>
 </div>

 {result && (
 <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-w-2xl mx-auto animate-in slide-in-from-bottom-4">
 <div className="p-6 border-b border-slate-100 bg-blue-50/50">
 <div className="flex items-center gap-4">
 <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center"><Users className="w-6 h-6 text-slate-400"/></div>
 <div>
 <h3 className="font-bold text-slate-900 text-xl">{result.name}</h3>
 <p className="text-blue-600 font-medium text-sm">{result.title}</p>
 </div>
 </div>
 <div className="mt-4 p-3 bg-white rounded-xl text-sm text-slate-600 border border-slate-200 shadow-sm inline-flex items-center gap-2">
 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/> 
 <strong>Recent Trigger:</strong> {result.recentActivity}
 </div>
 </div>
 <div className="p-6 bg-slate-900 text-white relative">
 <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-2">Generated Icebreaker</h4>
 <p className="text-lg leading-relaxed font-medium">"{result.icebreaker}"</p>
 <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white"><Send className="w-4 h-4 mr-2"/> Push to Smartlead / Lemlist</Button>
 </div>
 </div>
 )}
 </main>
 <Footer />
 </div>
 );
}
