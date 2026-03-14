import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarDays, Search, MapPin, Building2, UserPlus, Loader2 } from "lucide-react";

export default function AstraEvent() {
 const [event, setEvent] = useState("");
 const [scanning, setScanning] = useState(false);
 const [leads, setLeads] = useState<any[]>([]);

 const handleScan = () => {
 setScanning(true);
 setTimeout(() => {
 setLeads([
 { name: "David Chen", role: "CTO at NexusCorp", fit: "98%", need: "Enterprise RAG Scale" },
 { name: "Amanda Royce", role: "VP Data at SynthAI", fit: "85%", need: "PostgreSQL Opt." },
 { name: "Marcus Toll", role: "Founder, LoopScale", fit: "76%", need: "Series A Compliance" }
 ]);
 setScanning(false);
 }, 2000);
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
 <CalendarDays className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraEvent AI</h1>
 <p className="text-slate-500 font-medium">Webinar/Event Attendee Scraper & Scorer</p>
 </div>
 </div>

 <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-200 flex items-center gap-4 mb-10">
 <input 
 value={event} onChange={(e) => setEvent(e.target.value)}
 className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 font-medium text-slate-800"
 placeholder="Paste Eventbrite, Luma, or Meetup URL..."
 />
 <Button onClick={handleScan} disabled={!event || scanning} className="h-[58px] px-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold">
 {scanning ? <Loader2 className="w-5 h-5 animate-spin"/> : <><Search className="w-4 h-4 mr-2"/> Scan Network</>}
 </Button>
 </div>

 {leads.length > 0 && (
 <div className="space-y-4 animate-in slide-in-from-bottom-4">
 <h3 className="font-bold text-slate-900 mb-6 flex gap-2 items-center"><UserPlus className="text-indigo-600 w-5 h-5"/> High-Intent VIP Leads Discovered ({leads.length})</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {leads.map((lead, i) => (
 <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg hover:border-indigo-500/30 transition-colors group">
 <div className="flex justify-between items-start mb-4">
 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
 <Building2 className="w-5 h-5 text-slate-400" />
 </div>
 <div className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black tracking-widest border border-emerald-100">
 {lead.fit} MATCH
 </div>
 </div>
 <h4 className="font-black text-slate-900 text-lg">{lead.name}</h4>
 <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">{lead.role}</p>
 <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
 <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Predicted Pain Point</span>
 <span className="text-sm font-medium text-slate-700">{lead.need}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 )}
 </main>
 <Footer />
 </div>
 );
}
