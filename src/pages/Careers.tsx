import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Palette, Sparkles, Zap, Building2, Globe, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
   const roles = [
      {
         title: "Senior AI Architect",
         team: "Intelligence Layer",
         type: "Full-Time",
         description: "Scale our proprietary LLM orchestration engine and design autonomous agent protocols.",
         icon: Cpu,
      },
      {
         title: "Technical UI Engineer",
         team: "Interface Systems",
         type: "Full-Time",
         description: "Engineer glassmorphic, high-performance UI components with Framer Motion and physical constraints.",
         icon: Palette,
      },
      {
         title: "Distributed Systems Lead",
         team: "Edge Core",
         type: "Full-Time",
         description: "Architect sub-second global asset delivery networks and multi-region state synchronization.",
         icon: Globe,
      },
      {
         title: "Security Research Engineer",
         team: "Hardening Unit",
         type: "Full-Time",
         description: "Implement post-quantum encryption channels and automated SOC-2 threat mitigation protocols.",
         icon: ShieldCheck,
      },
      {
         title: "Founding Product Designer",
         team: "Ecosystem Strategy",
         type: "Full-Time",
         description: "Define the visual identity of the autonomous enterprise and lead core product vision.",
         icon: Sparkles,
      },
      {
         title: "Frontend Orchestration Lead",
         team: "Web Engineering",
         type: "Full-Time",
         description: "Master React 18/19 server components and build the next generation of SaaS infrastructure.",
         icon: Code2,
      }
   ];

   const fadeUp = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 }
   };

   return (
      <div className="min-h-screen bg-white selection:bg-[hsl(var(--primary))]/10 selection:text-[hsl(var(--primary))]">
         <Header />

         <main className="pt-32 pb-24 px-6 overflow-hidden">
            {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
            <section className="relative max-w-[1400px] mx-auto mb-32">
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,102,255,0.05)_0%,transparent_70%)] blur-3xl" />

               <div className="max-w-4xl pt-20">
                  <motion.div {...fadeUp} className="mb-8">
                     <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Vanguard Recruitment // Active</span>
                     </span>
                     <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tight leading-[0.9] mb-8 uppercase">
                        Join the <br />
                        <span className="text-slate-300">Vanguard.</span>
                     </h1>
                     <p className="text-xl md:text-2xl text-slate-500 font-medium leading-tight max-w-2xl">
                        Astraventa is on a mission to architect the autonomous enterprise. We are looking for elite technical rigor, creative obsession, and high-velocity ambition.
                     </p>
                  </motion.div>

                  <motion.div
                     {...fadeUp}
                     transition={{ delay: 0.2 }}
                     className="flex flex-wrap gap-4"
                  >
                     <Button size="lg" className="h-14 px-8 bg-black hover:bg-black/90 text-white rounded-sm font-black tracking-widest text-[11px] uppercase transition-all shadow-xl shadow-black/10 border-none">
                        View Open Positions
                     </Button>
                     <Button size="lg" variant="outline" className="h-14 px-8 border-slate-200 hover:bg-slate-50 rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all">
                        Our Engineering Ethos
                     </Button>
                  </motion.div>
               </div>
            </section>

            {/* ─── ROLES GRID ──────────────────────────────────────────────────── */}
            <section className="max-w-[1400px] mx-auto py-24 border-t border-slate-100 relative">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.03),transparent_40%)] pointer-events-none" />

               <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
                  <div>
                     <div className="text-[10px] font-black text-[hsl(var(--primary))] uppercase tracking-[0.3em] mb-4 leading-none">Current Opportunities</div>
                     <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-none uppercase">
                        Select <span className="text-slate-400 font-normal">Roles.</span>
                     </h2>
                  </div>
                  <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                     We focus on dense information environments. If you thrive under extreme technical focus, we want to hear from you.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {roles.map((role, i) => (
                     <motion.div
                        key={i}
                        {...fadeUp}
                        transition={{ delay: i * 0.1 }}
                        className="group p-8 bg-white border border-slate-100 rounded-sm hover:border-[hsl(var(--primary))]/30 hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/5 transition-all duration-500 flex flex-col items-start"
                     >
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#0066FF]/5 group-hover:border-[#0066FF]/20 transition-all duration-500">
                           <role.icon className="w-6 h-6 text-slate-400 group-hover:text-[hsl(var(--primary))] transition-colors" />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                           <span className="text-[10px] font-black text-[hsl(var(--primary))] uppercase tracking-widest">{role.team}</span>
                           <span className="w-1 h-1 rounded-full bg-slate-200" />
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{role.type}</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[hsl(var(--primary))] transition-colors uppercase leading-none">{role.title}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                           {role.description}
                        </p>
                        <button className="w-full h-12 border border-slate-200 rounded-xl group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                           View Detail
                           <ArrowRight className="w-4 h-4" />
                        </button>
                     </motion.div>
                  ))}
               </div>
            </section>

            {/* ─── ENGINEERING ETHOS ────────────────────────────────────────────── */}
            <section className="max-w-[1400px] mx-auto py-32 bg-slate-950 rounded-[4rem] px-12 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0066FF]/10 blur-[120px] rounded-full" />

               <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                  <motion.div {...fadeUp}>
                     <div className="text-[10px] font-black text-[hsl(var(--primary))] uppercase tracking-[0.3em] mb-6">Operating Principles</div>
                     <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-8 uppercase">
                        Engineering <br />
                        <span className="text-slate-600 font-normal">Rigor.</span>
                     </h2>
                     <div className="space-y-8 max-w-lg">
                        <div className="flex gap-6">
                           <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                              <Zap className="w-5 h-5 text-amber-400" />
                           </div>
                           <div>
                              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">High-Velocity Delivery</h4>
                              <p className="text-slate-400 font-medium leading-relaxed">We ship production-grade infrastructure daily. Momentum is our primary metric for success.</p>
                           </div>
                        </div>
                        <div className="flex gap-6">
                           <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                              <Code2 className="w-5 h-5 text-[#0066FF]" />
                           </div>
                           <div>
                              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">Obsessive Quality</h4>
                              <p className="text-slate-400 font-medium leading-relaxed">Clean abstractions, typed interfaces, and pixel-perfect execution are non-negotiable standards.</p>
                           </div>
                        </div>
                        <div className="flex gap-6">
                           <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                              <Building2 className="w-5 h-5 text-emerald-400" />
                           </div>
                           <div>
                              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">Founding Mentality</h4>
                              <p className="text-slate-400 font-medium leading-relaxed">Every engineer is an architect. We expect ownership of the entire stack, from logic to user impact.</p>
                           </div>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     {...fadeUp}
                     transition={{ delay: 0.3 }}
                     className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border border-white/10"
                  >
                     <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                        alt="Engineering Rigor"
                        className="w-full h-full object-cover grayscale brightness-50 opacity-40 group-hover:scale-105 transition-transform duration-1000"
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                           <div className="text-6xl font-black text-white mb-2 tracking-tighter">99.9%</div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Deployment Confidence</div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </section>

            {/* ─── CALL TO ACTION ─────────────────────────────────────────────── */}
            <section className="max-w-[800px] mx-auto py-32 text-center">
               <motion.div {...fadeUp}>
                  <div className="w-20 h-20 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-10 shadow-sm">
                     <Sparkles className="w-10 h-10 text-[hsl(var(--primary))]" />
                  </div>
                  <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight uppercase leading-none">
                     Don't see <span className="text-slate-400">the right seat?</span>
                  </h2>
                  <p className="text-lg text-slate-500 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
                     We always have room for extraordinary talent. If you are building something that belongs in the Astravent ecosystem, tell us about it.
                  </p>
                  <Button size="lg" className="h-16 px-12 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all shadow-xl shadow-slate-200/50">
                     General Application
                  </Button>
               </motion.div>
            </section>
         </main>

         <Footer />
      </div>
   );
};

export default Careers;
