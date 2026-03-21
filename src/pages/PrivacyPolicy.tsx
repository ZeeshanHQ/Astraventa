import { motion } from "framer-motion";
import { ArrowLeft, Shield, Check, Lock, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AstraventaLogo } from "@/components/AstraventaLogo";
import { Footer } from "@/components/Footer";

export const PrivacyPolicy = () => {
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
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
 <Shield className="w-3.5 h-3.5" />
 Privacy Protection
 </div>
 <h1 className="text-4xl md:text-6xl font-heading font-normal text-slate-900 mb-6 tracking-tight">
 Privacy <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 font-bold">Policy</span>
 </h1>
 <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
 Safeguarding your data since inception. We employ zero-trust cloud architectures. <br/> Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
 </p>
 </div>

 <div className="space-y-16">
 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black shadow-md">1</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Information Collection</h2>
 </div>
 <p className="text-slate-600 leading-relaxed mb-6 text-[15px] font-medium transition-colors duration-300">
 Astraventa collects the minimal data required to provide exceptional AI orchestration services:
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 {[
 "Basic Contact Details",
 "Company & Industry Context",
 "Technical Flow Requirements",
 "Project Specific Metadata",
 "Support Communication logs",
 "Usage Analytics (Anonymized)"
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-slate-300 transition-all shadow-sm">
 <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
 <span className="text-sm font-bold text-slate-700">{item}</span>
 </div>
 ))}
 </div>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black shadow-md">2</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">How We Use The Data</h2>
 </div>
 <ul className="space-y-3">
 {[
 "Training custom local models exclusively for your private workflow",
 "Optimizing autonomous agent operations for maximum efficiency",
 "Providing real-time architectural support",
 "Enhancing system security via rate limiting and threat detection",
 "Communicating critical platform updates"
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-3 text-slate-600 text-[15px] font-medium bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
 <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
 <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
 </div>
 {item}
 </li>
 ))}
 </ul>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black shadow-md">3</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Data Security Protocol</h2>
 </div>
 <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
 <div className="absolute top-0 right-0 p-4 opacity-5">
 <Lock className="w-32 h-32" />
 </div>
 <p className="text-slate-300 leading-relaxed text-[15px] font-medium relative z-10">
 We employ <strong className="text-white">military-grade AES-256 encryption</strong> for all data at rest and TLS 1.3 for data in transit.
 Our proprietary infrastructure is architected with "privacy-by-design" principles, ensuring no personal
 identifiable information (PII) is leaked during neural inference. Cross-tenant isolation is guaranteed at the hardware level.
 </p>
 </div>
 </section>

 <div className="pt-12 border-t border-slate-200">
 <div className="p-8 md:p-10 rounded-[2rem] bg-teal-50 border border-teal-100/50 text-center shadow-inner">
 <h3 className="text-2xl font-bold mb-3 text-slate-900">Your Privacy is Sacred</h3>
 <p className="text-slate-600 mb-8 font-medium text-[15px]">
 Have concerns about how your data is handled? Our Data Protection Officer is ready to assist you.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
 <div className="flex items-center gap-2.5 text-slate-800 font-bold bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200">
 <Mail className="w-4 h-4 text-teal-600" />
 astraventaai@gmail.com
 </div>
 <div className="flex items-center gap-2.5 text-slate-800 font-bold bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200">
 <Clock className="w-4 h-4 text-teal-600" />
 Response within 1 hour
 </div>
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

export default PrivacyPolicy;
