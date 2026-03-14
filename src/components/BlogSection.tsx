import { motion } from "framer-motion";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";

const articles = [
 {
 id: 1,
 category: "AI ENGINEERING",
 title: "Architecting Resilient Multi-Agent Systems for Enterprise Logic",
 excerpt: "Discover how Astraventa deploys swarm-based LLM architectures to automate complex, multi-step business operations.",
 readTime: "8 min read",
 image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
 date: "MAR 10, 2026"
 },
 {
 id: 2,
 category: "WEB PERFORMANCE",
 title: "Beyond the Virtual DOM: The Kinetic Approach to UI Rendering",
 excerpt: "An deep dive into achieving 120fps animations and micro-interactions without sacrificing Time-To-Interactive metrics.",
 readTime: "6 min read",
 image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
 date: "MAR 05, 2026"
 },
 {
 id: 3,
 category: "INFRASTRUCTURE",
 title: "Scaling the Digital Nervous System: Edge Computing & Rust",
 excerpt: "How rewriting our core data-mesh in Rust reduced latency by 40% globally. A technical case study.",
 readTime: "12 min read",
 image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
 date: "FEB 28, 2026"
 }
];

export const BlogSection = () => {
 return (
 <section id="insights" className="py-10 md:py-12 relative bg-transparent section-transition">
 <div className="max-w-7xl mx-auto px-6 relative z-10">
 
 {/* Section Header */}
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" style={{ fontStyle: 'normal' }}>
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="max-w-2xl"
 >
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
 <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
 <span className="technical-label !text-slate-700">Engineering Insights</span>
 </div>
 <h2>
 The <span className="text-primary">Vanguard</span> of Tech.
 </h2>
 <p className="text-lg text-slate-500 font-medium font-sans mt-4 max-w-xl">
 Deep dives, architectural decisions, and theoretical models from the Astraventa engineering team.
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md text-sm font-bold text-slate-900 shadow-sm hover:border-[#2910E5]/30 hover:text-[#2910E5] transition-all duration-300 group">
 View All Articles
 <ArrowRight className="w-4 h-4 transition-transform" />
 </button>
 </motion.div>
 </div>

 {/* Blog Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {articles.map((article, index) => (
 <motion.article
 key={article.id}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: index * 0.1 }}
 className="glass-card aura-glow group relative flex flex-col rounded-3xl overflow-hidden"
 style={{ fontStyle: 'normal' }}
 >
 {/* Image Container */}
 <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
 <img 
 src={article.image} 
 alt={article.title}
 className="w-full h-full object-cover transition-transform duration-700 group-"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 mix-blend-multiply" />
 
 <div className="absolute top-4 left-4">
 <span className="technical-label !text-[#0F172A] bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full !text-[10px]">
 {article.category}
 </span>
 </div>
 </div>

 {/* Content Container */}
 <div className="flex flex-col flex-grow p-8">
 <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-4">
 <span className="technical-label !text-slate-400 !text-[11px] !tracking-normal">{article.date}</span>
 <div className="w-1 h-1 rounded-full bg-slate-300" />
 <span className="technical-label !text-slate-400 !text-[11px] !tracking-normal flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
 </div>

 <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#2910E5] transition-colors duration-300 line-clamp-2">
 {article.title}
 </h3>
 
 <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
 {article.excerpt}
 </p>

 {/* Read Article CTA */}
 <div className="mt-auto pt-6 border-t border-slate-100/80 flex items-center justify-between">
 <span className="text-xs font-bold text-slate-900 uppercase tracking-widest group-hover:text-[#2910E5] transition-colors">Read Article</span>
 <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#2910E5] border border-slate-200 group-hover:border-[#2910E5] flex items-center justify-center transition-all duration-300">
 <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
 </div>
 </div>
 </div>
 </motion.article>
 ))}
 </div>

 </div>
 </section>
 );
};
