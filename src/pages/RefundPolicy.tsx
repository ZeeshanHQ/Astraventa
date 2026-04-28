import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, FileText, AlertCircle, Check, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AstraventaLogo } from "@/components/AstraventaLogo";
import { Footer } from "@/components/Footer";

export const RefundPolicy = () => {
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
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
 <RefreshCw className="w-3.5 h-3.5" />
 Refund Policy
 </div>
 <h1 className="text-4xl md:text-6xl font-heading font-normal text-slate-900 mb-6 tracking-tight">
 Refund <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 font-bold">Policy</span>
 </h1>
 <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
 Clear guidelines on refunds for our custom digital services. <br/> Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
 </p>
 </div>

 <div className="space-y-16">
 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-black border border-amber-200 shadow-sm">1</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Custom Digital Deliverables</h2>
 </div>
 <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
 <div className="absolute top-0 right-0 p-4 opacity-5">
 <FileText className="w-32 h-32" />
 </div>
 <p className="text-slate-300 leading-relaxed text-[15px] font-medium relative z-10 mb-4">
 <strong className="text-white">No Refund Policy:</strong> Due to the nature of custom digital deliverables, refunds are generally not provided once work has commenced. This includes but is not limited to AI automation development, software engineering, UI/UX design, and consulting services.
 </p>
 <p className="text-slate-300 leading-relaxed text-[15px] font-medium relative z-10">
 Once our team begins working on your project, resources, time, and intellectual property are invested that cannot be recovered. We ensure thorough project scoping and agreement before work begins to protect both parties.
 </p>
 </div>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-black border border-amber-200 shadow-sm">2</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Revisions & Quality Assurance</h2>
 </div>
 <p className="text-slate-600 leading-relaxed mb-6 text-[15px] font-medium transition-colors duration-300">
 While we do not offer refunds, we are committed to delivering exceptional quality. Our revision policy includes:
 </p>
 <ul className="space-y-3">
 {[
 "Multiple revision rounds as outlined in your project scope",
 "Quality assurance testing before final delivery",
 "Bug fixes and adjustments during the warranty period",
 "Collaborative feedback loops to ensure alignment",
 "Post-launch support for agreed-upon duration"
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-3 text-slate-600 text-[15px] font-medium bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
 <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
 <Check className="w-3 h-3 text-amber-600 stroke-[3]" />
 </div>
 {item}
 </li>
 ))}
 </ul>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-black border border-amber-200 shadow-sm">3</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Project Cancellation</h2>
 </div>
 <div className="p-8 rounded-3xl bg-amber-50 border border-amber-100 relative overflow-hidden">
 <div className="absolute top-0 right-0 p-4 opacity-5">
 <AlertCircle className="w-32 h-32" />
 </div>
 <p className="text-slate-700 leading-relaxed text-[15px] font-medium relative z-10 mb-4">
 <strong className="text-amber-800">Early Cancellation:</strong> If you wish to cancel before work commences, you may be eligible for a full refund of any advance payments, subject to administrative fees.
 </p>
 <p className="text-slate-700 leading-relaxed text-[15px] font-medium relative z-10">
 <strong className="text-amber-800">Mid-Project Cancellation:</strong> If cancellation occurs after work has begun, you will be billed for all work completed up to that point, and any remaining balance may be refunded on a pro-rated basis.
 </p>
 </div>
 </section>

 <section className="group">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-black border border-amber-200 shadow-sm">4</div>
 <h2 className="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-2 flex-1">Dispute Resolution</h2>
 </div>
 <p className="text-slate-600 leading-relaxed mb-4 text-[15px] font-medium transition-colors duration-300">
 We value our client relationships and strive to resolve any concerns amicably. If you have issues with deliverables:
 </p>
 <ul className="space-y-3">
 {[
 "Contact our support team within 7 days of delivery",
 "Provide detailed feedback on specific concerns",
 "Allow us the opportunity to address and revise",
 "We will work collaboratively to achieve project goals"
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

 <div className="pt-12 border-t border-slate-200">
 <div className="p-8 md:p-12 rounded-[2rem] bg-slate-900 text-white text-center shadow-2xl relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none" />
 <h3 className="text-2xl font-bold mb-4 relative z-10">Questions About Refunds?</h3>
 <p className="text-slate-400 mb-8 font-medium text-[15px] relative z-10">
 Our support team is available to clarify any concerns before you commit to a project.
 </p>
 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
 <div className="flex items-center gap-2.5 text-white font-bold bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
 <Mail className="w-4 h-4 text-amber-400" />
 astraventaai@gmail.com
 </div>
 <a href="tel:+923284529264" className="flex items-center gap-2.5 text-white font-bold bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
 <Phone className="w-4 h-4 text-amber-400" />
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

export default RefundPolicy;
