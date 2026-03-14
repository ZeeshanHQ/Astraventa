import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trophy, Github, Code2, Loader2, Star, GitCommit } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraGrit() {
 const [username, setUsername] = useState("");
 const [loading, setLoading] = useState(false);
 const [data, setData] = useState<any>(null);

 const analyze = () => {
 setLoading(true);
 setTimeout(() => {
 setData({
 username: username || "zeeshanhq",
 gritScore: 87,
 rank: "Iron Coder",
 commits: 1423,
 streakDays: 62,
 hardestSolved: "LeetCode Hard: Serialize/Deserialize BT",
 summary: "This candidate demonstrates exceptional consistency under pressure. 62-day commit streak during the peak of a product launch indicates high stress tolerance. Highly recommended for senior technical roles."
 });
 setLoading(false);
 }, 2500);
 };

 return (
 <div className="min-h-screen bg-slate-950 text-white">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
 <Trophy className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-white">AstraGrit AI</h1>
 <p className="text-slate-400 font-medium">Candidate Resilience & Consistency Scorer</p>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
 <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
 <Github className="w-5 h-5 text-slate-400" />
 <h3 className="font-bold text-slate-300 uppercase tracking-widest text-xs">Profile Sources</h3>
 </div>
 <div className="space-y-3 mb-6">
 <div className="flex bg-slate-950 border border-slate-800 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-yellow-500/30">
 <span className="px-4 flex items-center text-slate-500 border-r border-slate-800 text-sm font-mono">github.com/</span>
 <input value={username} onChange={e => setUsername(e.target.value)} className="flex-1 bg-transparent px-4 py-3 outline-none text-white font-mono" placeholder="username" />
 </div>
 <div className="flex bg-slate-950 border border-slate-800 rounded-xl overflow-hidden opacity-50">
 <span className="px-4 flex items-center text-slate-500 border-r border-slate-800 text-sm font-mono">leetcode.com/</span>
 <input className="flex-1 bg-transparent px-4 py-3 outline-none text-white font-mono" placeholder="username (auto-linked)" disabled />
 </div>
 </div>
 <Button onClick={analyze} disabled={!username || loading} className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black h-14 rounded-xl text-lg">
 {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Calculate Grit Score →"}
 </Button>
 </div>

 <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
 {!data && !loading && (
 <div className="h-full flex items-center justify-center text-slate-600 font-medium p-10 text-center">
 Enter a GitHub username to generate a candidate Grit Report.
 </div>
 )}
 {loading && (
 <div className="h-full flex flex-col items-center justify-center text-yellow-500 gap-4 p-10">
 <Code2 className="w-10 h-10 animate-pulse" />
 <p className="font-bold tracking-widest text-xs uppercase animate-pulse">Mining commit history...</p>
 </div>
 )}
 {data && (
 <div className="p-8 animate-in fade-in slide-in-from-bottom-4">
 <div className="flex items-center justify-between mb-6">
 <div>
 <h3 className="font-black text-white text-2xl">@{data.username}</h3>
 <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">{data.rank}</span>
 </div>
 <div className="text-right">
 <div className="text-5xl font-black text-yellow-400">{data.gritScore}</div>
 <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">/100 Grit</div>
 </div>
 </div>
 <div className="grid grid-cols-2 gap-3 mb-6">
 {[
 { label: "Total Commits", val: data.commits, icon: GitCommit },
 { label: "Current Streak", val: `${data.streakDays} days`, icon: Star },
 ].map((stat, i) => (
 <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
 <stat.icon className="w-4 h-4 text-yellow-500 mb-2" />
 <div className="text-xl font-black text-white">{stat.val}</div>
 <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
 </div>
 ))}
 </div>
 <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
 <div className="text-xs text-yellow-500/70 font-bold uppercase tracking-widest mb-2">AI Assessment</div>
 <p className="text-slate-300 text-sm leading-relaxed">{data.summary}</p>
 </div>
 </div>
 )}
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
