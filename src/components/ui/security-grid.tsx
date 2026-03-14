"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Zap, ShieldCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";

const items = [
 {
 title: "Autonomous Pentesting",
 icon: Shield,
 desc:
 "LLM-driven vulnerability discovery that evolves with emerging threats to identify zero-day risks.",
 },
 {
 title: "Threat Observability",
 icon: Eye,
 desc:
 "High-fidelity network telemetry and real-time scanning for unbreachable infrastructure visibility.",
 },
 {
 title: "Identity Hardening",
 icon: Key,
 desc:
 "Zero-Trust IAM and biometric validation protocols designed for high-liability enterprise environments.",
 },
 {
 title: "Immutable Auditing",
 icon: Activity,
 desc:
 "Cryptographically signed SOC2 logs that provide absolute proof of system integrity and compliance.",
 },
 {
 title: "Cloud Lockdown",
 icon: ShieldCheck,
 desc:
 "Military-grade substrate hardening for multi-cloud ecosystems, ensuring total environment isolation.",
 },
 {
 title: "Edge Shield",
 icon: Zap,
 badge: "New",
 desc:
 "Adaptive WAF and DDoS protection with sub-100ms mitigation logic globally distributed at the edge.",
 },
];

// Re-defining Key icon manually if lucide-react doesn't have it or as fallback
import { Key } from "lucide-react";

export function SecurityGrid() {
 return (
 <div className="w-full bg-slate-50/50 text-slate-900 overflow-hidden">
 <div className="mx-auto max-w-7xl px-6 py-24">
 <div className="flex flex-col mb-16">
 <div className="technical-label !text-primary mb-4">[ HARDENED CAPABILITIES ]</div>
 <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-slate-900 font-heading">
 Models that secure <br/>
 <span className="text-primary">your mission.</span>
 </h2>
 </div>

 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {items.map(({ title, icon: Icon, desc, badge }, i) => (
 <Card
 key={title}
 className="group relative overflow-visible border-slate-200 bg-white/80 backdrop-blur-sm p-0 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 rounded-[2rem]"
 >
 {/* Subtle primary glow on hover */}
 <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
 <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
 </div>

 {/* Faint inner shimmer effect */}
 <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent to-transparent group-hover:from-primary/[0.02] group-hover:to-primary/[0.05] transition-colors" />

 {/* Security-themed corner technical markers on hover - adapted to Brand Theme (Slate-900) */}
 <div className="pointer-events-none absolute inset-0 hidden group-hover:block transition-all duration-500">
 <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-slate-900 shadow-sm" />
 <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-slate-900 shadow-sm" />
 <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3 bg-slate-900 shadow-sm" />
 <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-slate-900 shadow-sm" />
 </div>

 <CardHeader className="relative z-10 flex flex-row items-start gap-4 p-8">
 <div className="flex h-12 w-12 items-center justify-center rounded-[1.25rem] border border-slate-100 bg-slate-50 text-primary transition-colors group-hover:bg-primary/5 group-hover:border-primary/10">
 <Icon className="h-6 w-6" strokeWidth={1.5} />
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-3">
 <CardTitle className="text-xl font-bold text-slate-900 font-heading tracking-tight">{title}</CardTitle>
 {badge && (
 <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[9px] font-bold leading-none text-primary uppercase tracking-widest">
 {badge}
 </span>
 )}
 </div>
 </div>
 </CardHeader>

 <CardContent className="relative z-10 px-8 pb-8 text-base text-slate-500 font-medium leading-relaxed">
 {desc}
 </CardContent>

 {/* subtle border pulse on hover */}
 <motion.div
 className="pointer-events-none absolute inset-0 rounded-[2rem] ring-0 ring-primary/0"
 initial={{ opacity: 0 }}
 whileHover={{ opacity: 1 }}
 transition={{ duration: 0.3 }}
 />
 </Card>
 ))}
 </div>
 </div>
 </div>
 );
}
