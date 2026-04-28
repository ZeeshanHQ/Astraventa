import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, Mail, Phone, Scale, ShieldAlert, FileText, Globe, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AstraventaLogo } from "@/components/AstraventaLogo";
import { Footer } from "@/components/Footer";

export const TermsOfService = () => {
 return (
 <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">
 {/* Header */}
 <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
 <div className="container mx-auto px-4 py-4 flex items-center justify-between">
 <Link to="/">
 <Button variant="ghost" size="sm" className="gap-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium tracking-wide">
 <ArrowLeft className="w-4 h-4" />
 Back to Home
 </Button>
 </Link>
 <AstraventaLogo size="md" />
 <div className="w-24 hidden md:block" />
 </div>
 </div>

 {/* Content */}
 <main className="container relative z-10 mx-auto px-4 py-20 max-w-4xl">
 <motion.div
   initial={{ opacity: 0, scale: 0.98, y: 20 }}
   animate={{ opacity: 1, scale: 1, y: 0 }}
   transition={{ duration: 0.6, ease: "easeOut" }}
   className="bg-white p-8 md:p-16 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50"
 >
 <div className="text-center mb-16">
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
 <Scale className="w-3.5 h-3.5" />
 Legal Framework
 </div>
 <h1 className="text-4xl md:text-6xl font-heading font-normal text-slate-900 mb-6 tracking-tight">
 Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 font-bold">Service</span>
 </h1>
 <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
 Governing the use of our high-velocity AI orchestration platform. <br/> Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
 </p>
 </div>

 <div className="space-y-16">
 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 font-black border border-slate-200 shadow-sm">01</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Service Provider</h2>
 </div>
 <p className="text-slate-600 leading-relaxed text-[15px] font-medium transition-colors duration-300 mb-4">
 <strong className="text-slate-900">Astraventa</strong> is the provider of all AI automation, development, and consulting services described on this platform. All services are delivered as digital solutions and are governed by the laws and regulations of your region.
 </p>
 <p className="text-slate-600 leading-relaxed text-[15px] font-medium transition-colors duration-300">
 By accessing and using Astraventa's services, you accept and agree to be bound by the terms and provision of this agreement. Our platform is designed for enterprise-grade autonomous intelligence, and usage implies compliance with our security and ethics standards.
 </p>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 font-black border border-slate-200 shadow-sm">02</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Scope of AI Services</h2>
 </div>
 <p className="text-slate-600 leading-relaxed mb-6 text-[15px] font-medium transition-colors duration-300">
 Astraventa provides premium AI-powered automation solutions including:
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 {[
 { title: "Autonomous Agents", icon: BadgeCheck },
 { title: "Neural Orchestration", icon: Globe },
 { title: "Custom Model Ops", icon: FileText },
 { title: "Data Synthesis", icon: ShieldAlert }
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all shadow-sm">
 <item.icon className="w-5 h-5 text-teal-600" />
 <span className="text-sm font-bold text-slate-700">{item.title}</span>
 </div>
 ))}
 </div>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 font-black border border-slate-200 shadow-sm">03</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Enterprise Use & Security</h2>
 </div>
 <ul className="space-y-3">
 {[
 "Verification of business entity data for high-integrity modeling",
 "Strict non-interference with autonomous neural architecture",
 "Respect for Astraventa Intellectual Property and proprietary code",
 "Secure management of all authentication tokens and access credentials",
 "Compliance with local and international AI safety regulations"
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-3 text-slate-600 text-[15px] font-medium bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
 <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
 <Check className="w-3 h-3 text-white stroke-[3]" />
 </div>
 {item}
 </li>
 ))}
 </ul>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 font-black border border-slate-200 shadow-sm">04</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Digital Services & Regional Governance</h2>
 </div>
 <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
 <div className="absolute top-0 right-0 p-4 opacity-5">
 <Scale className="w-32 h-32" />
 </div>
 <p className="text-slate-300 leading-relaxed text-[15px] font-medium relative z-10 mb-4">
 <strong className="text-white">Digital Nature:</strong> All services provided by Astraventa are digital deliverables, including but not limited to AI models, software code, automation workflows, design assets, and consulting recommendations.
 </p>
 <p className="text-slate-300 leading-relaxed text-[15px] font-medium relative z-10">
 <strong className="text-white">Regional Laws:</strong> These services and this agreement are governed by the laws applicable in your region. Astraventa complies with international standards while respecting local legal frameworks for digital services, data protection, and commercial transactions.
 </p>
 </div>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 font-black border border-slate-200 shadow-sm">05</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Proprietary Rights</h2>
 </div>
 <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
 <div className="absolute top-0 right-0 p-4 opacity-5">
 <Scale className="w-32 h-32" />
 </div>
 <p className="text-slate-300 leading-relaxed text-[15px] font-medium relative z-10">
 <strong className="text-white">Ownership Note:</strong> All AI architectures, proprietary neural weights, and automated workflows 
 engineered by Astraventa remain the exclusive intellectual property of the company. Usage rights are granted 
 per-license and do not constitute a transfer of underlying technology ownership.
 </p>
 </div>
 </section>

 <div className="pt-12 border-t border-slate-200">
 <div className="p-8 md:p-12 rounded-[2rem] bg-slate-900 text-white text-center shadow-2xl relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none" />
 <h3 className="text-2xl font-bold mb-4 relative z-10">Legal Consult Required?</h3>
 <p className="text-slate-400 mb-8 font-medium text-[15px] relative z-10">
 Our legal and engineering support teams are available 24/7 to clarify any queries.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
 <div className="flex items-center gap-2.5 text-white font-bold bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
 <Mail className="w-4 h-4 text-teal-400" />
 astraventaai@gmail.com
 </div>
 <a href="tel:+923284529264" className="flex items-center gap-2.5 text-white font-bold bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
 <Phone className="w-4 h-4 text-teal-400" />
 +92 328 4529264
 </a>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </main>
 <Footer />
 </div>
 );
};

export default TermsOfService;
