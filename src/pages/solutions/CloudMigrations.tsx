import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Cloud, ArrowRight, Server, Database, ShieldCheck } from "lucide-react";

export default function CloudMigrations() {
 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh]">
 <div className="text-center max-w-3xl mx-auto mb-20">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
 <Cloud className="w-3.5 h-3.5" /> Enterprise Solution
 </div>
 <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
 Enterprise <span className="text-blue-600">Cloud Migration</span>
 </h1>
 <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
 Seamlessly transition legacy on-premise monoliths to scalable, resilient microservices hosted on AWS, GCP, or Azure. Zero-downtime guaranteed.
 </p>
 <div className="flex items-center justify-center gap-4">
 <Button className="h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-xl shadow-blue-500/20">
 Speak with a Cloud Architect <ArrowRight className="ml-2 w-5 h-5" />
 </Button>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 { title: "Zero-Downtime Migration", desc: "Blue/Green deployment strategies ensure your users never experience an outage during the transition.", icon: Server, color: "text-blue-500", bg: "bg-blue-50" },
 { title: "Database Modernization", desc: "Refactor legacy SQL to distributed NoSQL or managed cloud SQL with native replication.", icon: Database, color: "text-emerald-500", bg: "bg-emerald-50" },
 { title: "Security Paradigm Shift", desc: "Implement Zero Trust architecture, KMS encryption, and IAM roles across your new cloud footprint.", icon: ShieldCheck, color: "text-amber-500", bg: "bg-amber-50" }
 ].map((feat, i) => (
 <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
 <div className={`w-16 h-16 mx-auto rounded-2xl ${feat.bg} flex items-center justify-center mb-6`}>
 <feat.icon className={`w-8 h-8 ${feat.color}`} />
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
