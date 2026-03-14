import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Globe2, Layers, Sparkles, Shield, Users } from "lucide-react";
import AstraHoverAbout from "@/components/ui/hover-image-preview";

const fadeUp = {
 initial: { opacity: 0, y: 24 },
 whileInView: { opacity: 1, y: 0 },
 viewport: { once: true },
 transition: { duration: 0.7, ease: "easeOut" as const },
};

const pillars = [
 {
 icon: Cpu,
 title: "Engineering Excellence",
 body: "We don't outsource complexity. Every system is architected from first principles — scalable, observable, and built to outlast trends.",
 },
 {
 icon: Layers,
 title: "Autonomous AI",
 body: "Our AI agents handle research, outreach, workflows, and reporting with human-level precision — running 24/7 without supervision.",
 },
 {
 icon: Globe2,
 title: "Global Scale, Private Infra",
 body: "Private containerised deployments on AWS, GCP, or on-prem. Your data never leaves your perimeter without explicit consent.",
 },
 {
 icon: Sparkles,
 title: "Product Craftsmanship",
 body: "The AstraTools suite of 28+ modules distils years of domain expertise into opinionated, friction-free software experiences.",
 },
 {
 icon: Shield,
 title: "Trust by Default",
 body: "SOC 2 aligned, GDPR/CCPA compliant, Zero Trust network architecture. Security is an engineering discipline, not a checkbox.",
 },
 {
 icon: Users,
 title: "Exceptional Team",
 body: "A small, senior-first team of engineers, AI researchers, and designers who move fast without accumulating technical debt.",
 },
];

const stats = [
 { value: "28+", label: "AI Modules" },
 { value: "3", label: "Core Pillars" },
 { value: "60%", label: "Avg Workflow Speedup" },
 { value: "24/7", label: "Autonomous Ops" },
];

export default function About() {
 return (
 <div className="min-h-screen bg-white overflow-x-hidden">
 <Header />

 <main>
 {/* ── Hero ───────────────────────────────────────────────────────────── */}
 <section className="pt-40 pb-0 px-6 relative overflow-hidden border-b border-slate-100">
 {/* Subtle radial gradient */}
 <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_-10%,rgba(13,89,242,0.06),transparent_55%)]" />

 <div className="max-w-7xl mx-auto relative z-10">
 {/* Eyebrow */}
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-10"
 >
 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
 <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.15em] font-mono">
 About Astraventa · Our Thesis
 </span>
 </motion.div>

 {/* Headline */}
 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-slate-950 leading-[0.88] mb-8 max-w-5xl"
 >
 Engineering the<br />
 <span className="text-primary">Autonomous Future.</span>
 </motion.h1>

 {/* Subtext */}
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.15, duration: 0.7 }}
 className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-16"
 >
 Astraventa is a hybrid AI powerhouse merging elite software engineering with
 autonomous intelligence. We design, build, and deploy the systems that power the next generation of digital business.
 </motion.p>

 {/* Stats row */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25, duration: 0.7 }}
 className="grid grid-cols-2 md:grid-cols-4 gap-px border border-slate-100 rounded-2xl overflow-hidden bg-slate-100 mb-0"
 >
 {stats.map((s) => (
 <div key={s.label} className="bg-white px-8 py-8 flex flex-col">
 <span className="text-4xl font-black text-primary tracking-tighter mb-1">{s.value}</span>
 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono">{s.label}</span>
 </div>
 ))}
 </motion.div>
 </div>
 </section>

 {/* ── Hover Story Section ─────────────────────────────────────────────── */}
 <section className="border-b border-slate-100">
 <div className="max-w-7xl mx-auto">
 {/* Section heading */}
 <div className="pt-20 px-6">
 <motion.div {...fadeUp} className="flex items-center gap-4 mb-2">
 <div className="h-px w-10 bg-slate-200" />
 <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] font-mono">
 What We Are
 </span>
 </motion.div>
 </div>
 {/* The hover component */}
 <AstraHoverAbout />
 </div>
 </section>

 {/* ── Six Pillars ─────────────────────────────────────────────────────── */}
 <section className="py-32 px-6 border-b border-slate-100 bg-slate-50/40">
 <div className="max-w-7xl mx-auto">
 <motion.div {...fadeUp} className="mb-16">
 <div className="flex items-center gap-4 mb-4">
 <div className="h-px w-10 bg-slate-200" />
 <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] font-mono">Our Principles</span>
 </div>
 <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-950 leading-[0.95]">
 Six pillars.<br />
 <span className="text-primary">Infinite applications.</span>
 </h2>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {pillars.map((p, i) => {
 const Icon = p.icon;
 return (
 <motion.div
 key={p.title}
 {...fadeUp}
 transition={{ delay: i * 0.08, duration: 0.7, ease: "easeOut" }}
 className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
 >
 <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
 <Icon className="w-5 h-5 stroke-[1.75px]" />
 </div>
 <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">{p.title}</h3>
 <p className="text-slate-500 font-medium leading-relaxed text-sm">{p.body}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* ── Founders Note ───────────────────────────────────────────────────── */}
 <section className="py-32 px-6 border-b border-slate-100 bg-white">
 <div className="max-w-4xl mx-auto">
 <motion.div {...fadeUp} className="flex items-center gap-4 mb-10">
 <div className="h-px w-10 bg-slate-200" />
 <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] font-mono">Founders' Note</span>
 </motion.div>

 <motion.blockquote
 {...fadeUp}
 transition={{ delay: 0.1, duration: 0.8 }}
 className="text-3xl md:text-4xl font-semibold text-slate-700 leading-[1.45] tracking-tight mb-12"
 >
 "We started Astraventa because we kept seeing brilliant teams bottlenecked by
 their own tooling. The ambition was there — the infrastructure wasn't.
 We decided to build both."
 </motion.blockquote>

 <motion.div
 {...fadeUp}
 transition={{ delay: 0.2, duration: 0.7 }}
 className="flex items-center gap-4"
 >
 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
 <span className="text-primary font-black text-lg">Z</span>
 </div>
 <div>
 <div className="font-black text-slate-900 tracking-tight">Zeeshan Jay & Haider</div>
 <div className="text-sm text-slate-400 font-mono font-bold uppercase tracking-widest">Co-Founders, Astraventa</div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* ── CTA ─────────────────────────────────────────────────────────────── */}
 <section className="py-32 px-6 bg-white">
 <div className="max-w-5xl mx-auto bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
 <div className="relative z-10">
 <motion.h2
 {...fadeUp}
 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white leading-tight"
 >
 Let's build something extraordinary.
 </motion.h2>
 <motion.p
 {...fadeUp}
 transition={{ delay: 0.1 }}
 className="text-slate-400 max-w-xl mx-auto mb-10 text-lg font-medium leading-relaxed"
 >
 Whether you need a full AI stack, a product team, or a single critical module —
 we're ready to architect it with you.
 </motion.p>
 <motion.div
 {...fadeUp}
 transition={{ delay: 0.2 }}
 className="flex flex-col sm:flex-row items-center justify-center gap-4"
 >
 <Button className="btn-primary h-14 px-10 text-base group" asChild>
 <Link to="/get-in-touch">
 Start a Project
 <ArrowRight className="ml-2 w-4 h-4 transition-transform" />
 </Link>
 </Button>
 <Button variant="outline" className="h-14 px-10 text-base border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors" asChild>
 <Link to="/products">View Products</Link>
 </Button>
 </motion.div>
 </div>
 </div>
 </section>
 </main>

 <Footer />
 </div>
 );
}
