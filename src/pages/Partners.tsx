import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Handshake, Globe, ChartBar, Layers, Network, ShieldCheck, Zap, ArrowRight, Building2 } from "lucide-react";

const Partners = () => {
   const tiers = [
      {
         title: "Solutions Architects",
         focus: "Technical Implementation",
         description: "Elite engineering firms certified to deploy and maintain Astraventa autonomous clusters for enterprise clients.",
         icon: Layers,
         benefit: "Priority Engineering Support"
      },
      {
         title: "Strategic Alliance",
         focus: "Ecosystem Integration",
         description: "Leading technology platforms and SaaS providers integrating Astraventa intelligence into their core offerings.",
         icon: Network,
         benefit: "Co-Marketing & Field Support"
      },
      {
         title: "Astra Certified Cloud",
         focus: "Infrastructure Pods",
         description: "Cloud providers and data centers hosting hardened Astraventa deployments with dedicated HW isolation.",
         icon: Globe,
         benefit: "Whitelabel Licensing Rights"
      }
   ];

   const fadeUp = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 }
   };

   return (
      <div className="min-h-screen bg-white">
         <Header />

         <main className="pt-32 pb-24 px-6 overflow-hidden">
            {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
            <section className="relative max-w-[1400px] mx-auto mb-32">
               <div className="absolute top-0 right-10 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/5 blur-[120px] rounded-full pointer-events-none" />

               <div className="max-w-4xl pt-20">
                  <motion.div {...fadeUp} className="mb-12">
                     <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">Global Partner Network // v1.0</span>
                     </span>
                     <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tight leading-[0.9] mb-10 uppercase">
                        Strategic <br />
                        <span className="text-slate-300">Architecture.</span>
                     </h1>
                     <p className="text-xl md:text-2xl text-slate-500 font-medium leading-tight max-w-2xl">
                        The Astraventa Partner Network is a curated ecosystem of world-class engineering teams building the future of autonomous infrastructure.
                     </p>
                  </motion.div>

                  <motion.div
                     {...fadeUp}
                     transition={{ delay: 0.2 }}
                     className="flex flex-wrap gap-4"
                  >
                     <Button size="lg" className="h-14 px-8 bg-black hover:bg-black/90 text-white rounded-sm font-black tracking-widest text-[11px] uppercase transition-all shadow-xl shadow-black/10 border-none">
                        Apply for Partnership
                     </Button>
                     <Button size="lg" variant="outline" className="h-14 px-8 border-slate-200 hover:bg-slate-50 rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all">
                        Access Partner Portal
                     </Button>
                  </motion.div>
               </div>
            </section>

            {/* ─── PARTNER TIERS ───────────────────────────────────────────────── */}
            <section className="max-w-[1400px] mx-auto py-24 mb-32">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tiers.map((tier, i) => (
                     <motion.div
                        key={i}
                        {...fadeUp}
                        transition={{ delay: i * 0.1 }}
                        className="group p-10 bg-slate-50 border border-slate-100 rounded-sm hover:bg-white hover:border-[hsl(var(--primary))]/30 hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-700 relative overflow-hidden"
                     >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                           <tier.icon className="w-7 h-7 text-[hsl(var(--primary))]" />
                        </div>

                        <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-widest mb-2">{tier.focus}</div>
                        <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-none group-hover:text-[hsl(var(--primary))] transition-colors">{tier.title}</h3>

                        <p className="text-slate-500 font-medium leading-relaxed mb-10">
                           {tier.description}
                        </p>

                        <div className="pt-8 border-t border-slate-200/50">
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Core Advantage</div>
                           <div className="flex items-center gap-2 text-slate-900 font-bold">
                              <Zap className="w-4 h-4 text-amber-400" />
                              {tier.benefit}
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </section>

            {/* ─── GLOBAL ECOSYSTEM METRICS ────────────────────────────────────── */}
            <section className="max-w-[1400px] mx-auto py-32 border-y border-slate-100 mb-32 relative">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(248,250,252,0)_0%,rgba(248,250,252,1)_50%,rgba(248,250,252,0)_100%)] pointer-events-none" />

               <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                  <motion.div {...fadeUp}>
                     <div className="text-[10px] font-black text-[hsl(var(--primary))] uppercase tracking-[0.3em] mb-6">Network Impact</div>
                     <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tight leading-[0.95] mb-10 uppercase">
                        Engineering <br />
                        <span className="text-slate-300 font-normal">Ubiquity.</span>
                     </h2>
                     <div className="grid grid-cols-2 gap-8">
                        <div>
                           <div className="text-5xl font-black text-slate-950 mb-2 tracking-tighter">140+</div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certified Partners</div>
                        </div>
                        <div>
                           <div className="text-5xl font-black text-slate-950 mb-2 tracking-tighter">2.4M</div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nodes Managed</div>
                        </div>
                        <div>
                           <div className="text-5xl font-black text-slate-950 mb-2 tracking-tighter">Global</div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Coverage</div>
                        </div>
                        <div>
                           <div className="text-5xl font-black text-slate-950 mb-2 tracking-tighter">Zero</div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SLA Breaches</div>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     {...fadeUp}
                     transition={{ delay: 0.3 }}
                     className="p-12 bg-slate-950 rounded-[4rem] relative overflow-hidden group shadow-2xl"
                  >
                     <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--primary))]/20 blur-[100px] rounded-full" />
                     <div className="relative z-10">
                        <div className="w-16 h-16 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                           <Handshake className="w-8 h-8 text-[hsl(var(--primary))]" />
                        </div>
                        <h4 className="text-3xl font-black text-white mb-6 tracking-tight uppercase underline decoration-[hsl(var(--primary))] decoration-4 underline-offset-8">The Alliance Portal</h4>
                        <p className="text-slate-400 font-medium leading-relaxed mb-10 text-lg">
                           Access unified billing, direct engineering channels, and private SDK documentation via the partner-only Astraventa cockpit.
                        </p>
                        <div className="space-y-4">
                           {['SDK Early Access', 'Dedicated Core Support', 'Architect Workshops', 'Co-Marketing Lab'].map((item, i) => (
                              <div key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                                 {item}
                              </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               </div>
            </section>

            {/* ─── CTA ─────────────────────────────────────────────────────────── */}
            <section className="max-w-[1000px] mx-auto py-24 text-center">
               <motion.div {...fadeUp}>
                  <h2 className="text-5xl md:text-6xl font-black text-slate-950 mb-12 tracking-tight leading-none uppercase">
                     Scale your firm <br />
                     <span className="text-slate-300">with Astraventa.</span>
                  </h2>
                  <Button size="lg" className="h-16 px-12 bg-black hover:bg-black/90 text-white border-none rounded-sm font-black tracking-widest text-[11px] uppercase transition-all shadow-xl shadow-black/20">
                     Begin Intake Sequence
                     <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
               </motion.div>
            </section>
         </main>

         <Footer />
      </div>
   );
};

export default Partners;
