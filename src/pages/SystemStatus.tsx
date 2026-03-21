import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Activity, Globe, Zap, Cpu, Server, ShieldCheck, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const SystemStatus = () => {
  const services = [
    { name: "Global Edge Network", status: "Operational", uptime: "100%", latency: "14ms", icon: Globe },
    { name: "Autonomous Core API", status: "Operational", uptime: "99.99%", latency: "42ms", icon: Activity },
    { name: "Identity & Auth v2", status: "Operational", uptime: "100%", latency: "8ms", icon: ShieldCheck },
    { name: "Vector Database Clusters", status: "Operational", uptime: "99.98%", latency: "11ms", icon: Server },
    { name: "inference Engine Tier-1", status: "Operational", uptime: "100%", latency: "124ms", icon: Cpu },
    { name: "Webhook Orchestrator", status: "Operational", uptime: "100%", latency: "5ms", icon: Zap },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-32 pb-24 px-6 overflow-hidden">
        {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="relative max-w-[1400px] mx-auto mb-20 bg-white rounded-sm p-12 md:p-20 border border-slate-100 shadow-sm overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(var(--primary))]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-black text-emerald-700 uppercase tracking-widest leading-none">All Systems Operational // Global Sequence v1.0</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tight leading-[0.9] mb-10 uppercase">
              Infrastructure <br />
              <span className="text-slate-300">Telemetry.</span>
            </h1>
            
            <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-12 mt-16">
              <div className="text-center">
                <div className="text-4xl font-black text-slate-950 mb-1">99.99%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Uptime (90d)</div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block" />
              <div className="text-center">
                <div className="text-4xl font-black text-slate-950 mb-1">24ms</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg Edge Latency</div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block" />
              <div className="text-center">
                <div className="text-4xl font-black text-slate-950 mb-1">0</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Incidents</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── SERVICE CLUSTERS ────────────────────────────────────────────── */}
        <section className="max-w-[1400px] mx-auto mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-black text-slate-950 tracking-tight uppercase">Service <span className="text-slate-400">Clusters</span></h2>
            <div className="flex-grow h-px bg-slate-200/50" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Updated 5s ago</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group p-8 bg-white border border-slate-100 rounded-sm hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/5 hover:border-[hsl(var(--primary))]/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-sm bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[hsl(var(--primary))]/5 transition-colors">
                    <service.icon className="w-5 h-5 text-slate-400 group-hover:text-[hsl(var(--primary))] transition-colors" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {service.status}
                    </span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{service.uptime} Uptime</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-none">{service.name}</h4>
                
                <div className="flex items-center justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest pt-6 border-t border-slate-50">
                  <span>METRIC: LATENCY</span>
                  <span className="text-slate-900">{service.latency}</span>
                </div>
                
                {/* Simulated Latency Bar */}
                <div className="mt-4 h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "30%" }}
                    animate={{ width: ["40%", "45%", "42%", "48%", "40%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full bg-[hsl(var(--primary))]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── INCIDENT HISTORY ────────────────────────────────────────────── */}
        <section className="max-w-[1400px] mx-auto py-24 bg-slate-950 rounded-sm px-12 text-white relative overflow-hidden mb-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 relative z-10">
            <div>
              <div className="text-[10px] font-black text-[hsl(var(--primary))] uppercase tracking-[0.3em] mb-4">Historical Fidelity</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
                Uptime <span className="text-slate-600 font-normal">History.</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold font-mono">2026_Q1</div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold font-mono">2025_Q4</div>
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            {[
              { date: "MAR 14, 2026", event: "Standard Deployment", impact: "No Service Interruption", type: "MAINTENANCE" },
              { date: "MAR 02, 2026", event: "Edge Routing Optimization", impact: "Improved Latency -4ms", type: "UPDATE" },
              { date: "FEB 18, 2026", event: "Automated Threat Mitigation", impact: "Blocked 1.2M Malicious Requests", type: "SECURITY" },
              { date: "FEB 05, 2026", event: "Vector DB Hardening", impact: "System Uptime Maintained", type: "MAINTENANCE" },
            ].map((log, i) => (
              <motion.div 
                key={i} 
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-wrap items-center justify-between gap-6 hover:bg-white/[0.08] transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="text-xs font-black text-slate-500 font-mono tracking-tighter w-24">[{log.date}]</div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-tight mb-1">{log.event}</div>
                    <div className="text-xs text-slate-500 font-medium">{log.impact}</div>
                  </div>
                </div>
                <div className="text-[10px] font-black px-2 py-0.5 rounded border border-white/20 text-slate-400 uppercase tracking-widest">
                  {log.type}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── SUPPORT LINK ────────────────────────────────────────────────── */}
        <section className="max-w-[800px] mx-auto py-24 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-black text-slate-950 mb-8 tracking-tight uppercase leading-none">
              Detect an <span className="text-slate-300">Anomaly?</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              Our 24/7 global response team is standing by for enterprise-grade support and incident escalation.
            </p>
            <button className="h-16 px-12 bg-black hover:bg-black/90 text-white border-none rounded-sm font-black tracking-widest text-[11px] uppercase transition-all shadow-xl shadow-black/10">
               Open Emergency Ticket
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SystemStatus;
