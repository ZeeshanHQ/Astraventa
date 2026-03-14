import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Instagram, Users, TrendingUp, Loader2, CheckCircle2 } from "lucide-react";

export default function AstraMatch() {
 const [brand, setBrand] = useState("");
 const [loading, setLoading] = useState(false);
 const [matches, setMatches] = useState<any[]>([]);

 const run = () => {
 setLoading(true);
 setTimeout(() => {
 setMatches([
 { handle: "@laradesigns", followers: "182K", fakeRate: "1.2%", brandFit: 96, niche: "Lifestyle & Entrepreneurship", insight: "Audience is 68% female, 25-34, high income. Ideal for B2B SaaS tools." },
 { handle: "@techwithtara", followers: "89K", fakeRate: "0.8%", brandFit: 91, niche: "Tech & AI Tools", insight: "Tight micro-community. High engagement (8.4%). Conversion-oriented audience." },
 { handle: "@megastar_ads", followers: "2.1M", fakeRate: "31%", brandFit: 22, niche: "General Lifestyle", insight: "31% bot followers detected. Low psychographic alignment. Not recommended." }
 ]);
 setLoading(false);
 }, 2800);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
 <Heart className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraMatch AI</h1>
 <p className="text-slate-500 font-medium">Psychographic Influencer-Brand Matching Engine</p>
 </div>
 </div>

 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-8 max-w-2xl">
 <div className="flex gap-4">
 <input value={brand} onChange={e => setBrand(e.target.value)} className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-rose-500/20 font-medium text-slate-800" placeholder="Describe your brand or paste website URL..." />
 <Button onClick={run} disabled={!brand || loading} className="h-[58px] px-8 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg shadow-rose-500/20">
 {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Find Matches"}
 </Button>
 </div>
 </div>

 <div className="space-y-5">
 {matches.map((m, i) => (
 <div key={i} className={`bg-white rounded-3xl p-6 border ${m.brandFit > 80 ? "border-emerald-200 shadow-emerald-100/50" : "border-rose-200 shadow-rose-100/50"} shadow-xl`}>
 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
 <div className="flex items-center gap-4">
 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white font-black text-lg">
 {m.handle[1].toUpperCase()}
 </div>
 <div>
 <div className="flex items-center gap-2">
 <h3 className="font-black text-slate-900 text-xl">{m.handle}</h3>
 <Instagram className="w-4 h-4 text-pink-500" />
 </div>
 <div className="flex items-center gap-3 mt-1">
 <span className="text-sm font-medium text-slate-500 flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {m.followers}</span>
 <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${parseFloat(m.fakeRate) > 10 ? "bg-rose-100 text-rose-600" : "bg-emerald-100 text-emerald-700"}`}>{m.fakeRate} Fake</span>
 <span className="text-xs text-slate-400 font-medium">{m.niche}</span>
 </div>
 </div>
 </div>
 
 <div className="flex items-center gap-6 md:gap-10">
 <div className="text-center">
 <div className={`text-3xl font-black ${m.brandFit > 80 ? "text-emerald-600" : "text-rose-500"}`}>{m.brandFit}%</div>
 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Brand Fit</div>
 </div>
 {m.brandFit > 80 ? (
 <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl"><CheckCircle2 className="w-4 h-4 mr-2" />Initiate Contact</Button>
 ) : (
 <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-50">Not Recommended</Button>
 )}
 </div>
 </div>
 
 {m.insight && (
 <div className="mt-4 bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-600 font-medium">
 <TrendingUp className="w-4 h-4 inline mr-2 text-rose-500" /> {m.insight}
 </div>
 )}
 </div>
 ))}
 </div>
 </main>
 <Footer />
 </div>
 );
}
