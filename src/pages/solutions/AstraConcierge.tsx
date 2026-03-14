import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, PhoneCall, CalendarDays, ArrowRight, Zap } from "lucide-react";

export default function AstraConcierge() {
 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh]">
 <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
 <div className="flex-1 space-y-8">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-widest">
 <Bot className="w-3.5 h-3.5" /> Enterprise Solution
 </div>
 <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
 Astra AI <span className="text-sky-600">Concierge</span>
 </h1>
 <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
 Deploy a 24/7 digital sales team and virtual assistant. Astra Concierge handles inbound inquiries, qualifies leads, and books meetings on autopilot across your website, WhatsApp, and SMS.
 </p>
 <div className="flex gap-4">
 <Button className="h-14 px-8 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-lg shadow-xl shadow-sky-500/20">
 Deploy Concierge <ArrowRight className="ml-2 w-5 h-5" />
 </Button>
 </div>
 </div>
 
 <div className="flex-1 w-full bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden">
 <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white"><Bot className="w-5 h-5" /></div>
 <div>
 <h3 className="text-white font-bold text-sm">Astra Assistant</h3>
 <div className="text-sky-400 text-xs flex items-center gap-1 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" /> Always Online</div>
 </div>
 </div>
 </div>
 <div className="h-[400px] p-6 bg-slate-50 flex flex-col gap-4 overflow-y-auto">
 {/* Simulated Chat */}
 <div className="self-start bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[80%] text-sm text-slate-700 font-medium">
 Hi! I'm the Astraventa AI Concierge. I noticed you're exploring our enterprise infrastructure. Do you need high-availability servers or custom LLM deployments?
 </div>
 <div className="self-end bg-sky-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm max-w-[80%] text-sm font-medium">
 We're looking for an on-premise LLM solution.
 </div>
 <div className="self-start bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[80%] text-sm text-slate-700 font-medium space-y-3">
 <p>Perfect. We specialize in air-gapped Private AI Server deployments. This requires a scoping call with one of our lead architects.</p>
 <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
 <div className="flex items-center gap-2 text-slate-600"><CalendarDays className="w-4 h-4" /> <span>Book Discovery Call</span></div>
 <Button size="sm" className="bg-sky-100 text-sky-700 hover:bg-sky-200 font-bold">Select Time</Button>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 { title: "Omnichannel Support", desc: "Integrates instantly with your website, WhatsApp, SMS, and Instagram DMs.", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50" },
 { title: "Voice & Phone Routing", desc: "Can handle inbound voice calls, answer FAQS, and route to human agents.", icon: PhoneCall, color: "text-emerald-500", bg: "bg-emerald-50" },
 { title: "Instant Lead Qualification", desc: "Follows your exact BANT (Budget, Authority, Need, Timeline) framework.", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" }
 ].map((feat, i) => (
 <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
 <div className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center mb-6`}>
 <feat.icon className={`w-7 h-7 ${feat.color}`} />
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
 <p className="text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
 </div>
 ))}
 </div>
 </main>
 <Footer />
 </div>
 );
}
