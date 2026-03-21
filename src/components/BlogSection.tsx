import { motion } from "framer-motion";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

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
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
  <motion.div 
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="max-w-2xl"
  >
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6">
  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
  <span className="text-[11px] font-display font-normal text-black/60 uppercase tracking-[0.15em]">Engineering Insights</span>
  </div>
  <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl lg:text-5xl">
  The <span className="text-[hsl(var(--primary))]">Vanguard</span> of Tech.
  </h2>
  <p className="text-[15px] text-[#4B5563] font-body font-normal leading-[1.7] mt-4 max-w-xl">
  Deep dives, architectural decisions, and theoretical models from the Astraventa engineering team.
  </p>
  </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
  <ShinyButton className="h-10 px-5 rounded-full text-[12px] font-display font-medium uppercase tracking-[0.1em]">
  <span className="flex items-center gap-2 pt-[1px]">
  View All Articles
  <ArrowRight className="w-3.5 h-3.5" />
  </span>
  </ShinyButton>
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
  className="group relative flex flex-col overflow-hidden bg-white border border-black/[0.05] hover:border-primary/20 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]"
  >
  {/* Image Container */}
  <div className="relative aspect-[16/9] overflow-hidden bg-black/5 rounded-sm m-2">
  <img 
  src={article.image} 
  alt={article.title}
  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
  />
  <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
  
  <div className="absolute top-4 left-4">
  <span className="bg-black/90 text-white px-3 py-1 rounded-sm text-[11px] font-display font-normal uppercase tracking-[0.15em]">
  {article.category}
  </span>
  </div>
  </div>

  {/* Content Container */}
  <div className="flex flex-col flex-grow p-8 pt-4">
  <div className="flex items-center gap-4 text-[11px] font-display font-normal text-black/40 uppercase tracking-[0.15em] mb-4">
  <span>{article.date}</span>
  <div className="w-1 h-1 rounded-full bg-black/10" />
  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
  </div>
 
  <h3 className="text-[16px] font-display font-normal text-black uppercase tracking-[0.1em] mb-3 group-hover:text-[hsl(var(--primary))] transition-colors duration-300 line-clamp-2">
  {article.title}
  </h3>
  
  <p className="text-[13px] text-[#4B5563] font-body font-normal leading-[1.7] mb-8 flex-grow line-clamp-3">
  {article.excerpt}
  </p>

  {/* Read Article CTA */}
  <div className="mt-auto pt-5 border-t border-black/[0.05] flex items-center justify-between">
  <span className="text-[11px] font-display font-normal text-black/50 uppercase tracking-[0.15em] group-hover:text-[hsl(var(--primary))] transition-colors">Read Article</span>
  <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
  </div>
 </div>
 </motion.article>
 ))}
 </div>

 </div>
 </section>
 );
};
