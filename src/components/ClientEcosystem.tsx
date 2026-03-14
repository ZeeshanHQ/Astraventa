import { motion } from "framer-motion";
import { Zap, RefreshCw, Layers, ShieldCheck } from "lucide-react";

export const ClientEcosystem = () => {
 return (
 <section className="py-12 md:py-16 bg-slate-950 relative overflow-hidden section-transition">
 {/* Background Accents */}
 <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
 <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

 <div className="max-w-7xl mx-auto px-6 relative z-10">
 <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
 <RefreshCw className="w-3 h-3 text-primary animate-spin-slow" />
 <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">The Synergy Loop</span>
 </div>
 <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-8 font-heading uppercase">
 A Complete Tech <br />
 <span className="text-primary">Ecosystem for You.</span>
 </h2>
 <p className="text-lg text-slate-400 font-medium leading-relaxed">
 By building our own tools, we create a feedback loop that makes our agency services faster, smarter, and more reliable for every client.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
 {[
 {
 title: "Product Insights",
 desc: "We use data from our own SaaS products to understand what really works for users.",
 icon: Layers,
 color: "text-blue-400"
 },
 {
 title: "Rapid Execution",
 desc: "Our internal tools allow us to build complex projects in half the time.",
 icon: Zap,
 color: "text-emerald-400"
 },
 {
 title: "Battle Tested",
 desc: "Every line of code we write for you has been tested in our own production environments.",
 icon: ShieldCheck,
 color: "text-indigo-400"
 }
 ].map((item, i) => (
 <motion.div
 key={item.title}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1 }}
 className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
 >
 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group- transition-transform">
 <item.icon className={`w-7 h-7 ${item.color}`} />
 </div>
 <h4 className="text-xl font-black text-white mb-4 font-heading tracking-tight">{item.title}</h4>
 <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
};
