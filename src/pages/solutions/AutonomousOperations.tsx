import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Activity, 
  ArrowRight, 
  Cpu,
  Workflow,
  ShieldCheck,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  RefreshCw,
  GitPullRequest,
  Globe,
  Database,
  Cloud
} from "lucide-react";

const WorkflowOrchestrator = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] bg-slate-50/50 rounded-[3rem] border border-slate-200/60 p-8 overflow-hidden group">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 150 250 L 450 250"
          stroke="#2910E5"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="opacity-20"
        />
        <motion.path
          d="M 550 250 L 850 250"
          stroke="#2910E5"
          strokeWidth="2"
          strokeDasharray="8 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="opacity-20"
        />
      </svg>

      <div className="relative z-10 h-full flex items-center justify-between px-4 md:px-12">
        {/* Input Node */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white border border-slate-200 shadow-xl flex items-center justify-center relative group-hover:border-primary/30 transition-all duration-300">
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black border-2 border-white">
              <RefreshCw className="w-3 h-3 animate-spin-slow" />
            </div>
            <GitPullRequest className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-primary transition-colors" />
          </div>
          <div className="text-center">
            <div className="technical-label !text-[10px] mb-1">Source Trigger</div>
            <div className="text-sm font-black text-slate-900 tracking-tight">GitHub Webhook</div>
          </div>
        </div>

        {/* AI Processing Node */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2.5rem] bg-white border-2 border-primary shadow-[0_20px_50px_rgba(41,16,229,0.15)] flex items-center justify-center relative group">
            <div className="absolute inset-0 rounded-[2.3rem] border border-primary/20 animate-ping opacity-20" />
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className="w-12 h-12 md:w-16 md:h-16 text-primary animate-pulse" />
          </div>
          <div className="text-center">
            <div className="technical-label !text-[10px] mb-1">Astra Intelligence</div>
            <div className="text-sm font-black text-slate-900 tracking-tight">Refactoring Logic</div>
          </div>
        </div>

        {/* Action Node */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white border border-slate-200 shadow-xl flex items-center justify-center relative group-hover:border-primary/30 transition-all duration-300">
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-primary text-white flex items-center justify-center text-[10px] font-black border-2 border-white shadow-lg">
              <Zap className="w-3 h-3 fill-white" />
            </div>
            <Globe className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-primary transition-colors" />
          </div>
          <div className="text-center">
            <div className="technical-label !text-[10px] mb-1">Autonomous Output</div>
            <div className="text-sm font-black text-slate-900 tracking-tight">Vercel Deployment</div>
          </div>
        </div>
      </div>

      {/* Status Overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-slate-900 text-white flex items-center gap-3 shadow-2xl">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Status: Executing Self-Correcting Protocol</span>
      </div>
    </div>
  );
};

const AutonomousOperations = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-heading selection:bg-primary/10">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-28 bg-white">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-primary font-bold text-[10px] mb-8 uppercase tracking-[0.2em]">
                <Workflow className="w-3.5 h-3.5" />
                Zero-Latency Workflows
              </div>
              
              <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter text-slate-950">
                Autonomous <br />
                <span className="text-[hsl(var(--primary))] font-serif">Operations.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                Zero Human Overhead. We architect self-correcting business systems that trigger, think, and execute without manual intervention.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-28">
                <Button size="lg" className="h-16 px-10 rounded-2xl font-bold uppercase tracking-widest text-[10px] bg-slate-950 hover:bg-primary text-white transition-all">
                  Onboard Your Workflow <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl font-bold uppercase tracking-widest text-[10px] border-slate-200 bg-white hover:bg-slate-50 text-slate-950 transition-all">
                  Documentation
                </Button>
              </div>

              {/* Central Visual */}
              <WorkflowOrchestrator />
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-24 bg-slate-50/30 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-primary text-[9px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                  <RefreshCw className="w-3 h-3" /> Event-Driven Logic
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tighter leading-tight mb-8">
                  Triggers that Think.
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                  Every data mutation is a catalyst. Our systems monitor high-velocity events—from GitHub PRs to Cloudflare logs—and execute complex, multi-step interventions immediately.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: Code2, title: "Self-Healing Repositories", desc: "Automated regression fixing and security patching." },
                    { icon: Cloud, title: "Edge-Level Interventions", desc: "Global traffic routing based on real-time AI performance." }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                        <feat.icon size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 mb-1">{feat.title}</div>
                        <p className="text-sm text-slate-500 font-medium">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                    <Activity size={300} className="text-primary" />
                  </div>
                  <div className="technical-label mb-8">Live Operative Feed</div>
                  <div className="space-y-6 relative z-10">
                    {[
                      { event: "GITHUB_PR_SYNC", status: "PROCESSING", color: "text-blue-500" },
                      { event: "VERCEL_EDGE_CACHE", status: "OPTIMIZED", color: "text-emerald-500" },
                      { event: "DATABASE_MIRRORING", status: "SYNCHRONIZED", color: "text-primary" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <code className="text-xs font-black text-slate-400">{item.event}</code>
                        </div>
                        <div className={`text-[9px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agentic Monitoring */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[#2910E5] text-[9px] font-bold uppercase tracking-widest shadow-sm">
                  <ShieldCheck className="w-3 h-3" /> Agentic Monitoring
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-slate-950">
                  24/7 Autonomous Watch.
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Our agents don't just alert you; they act. We provide persistent monitoring layers that identify anomalies and execute pre-trained recovery scripts before your team even receives a notification.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">99.99%</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Autonomous Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">&lt; 200ms</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Reaction Latency</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-2xl">
                <div className="relative rounded-[3rem] bg-slate-900 p-12 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/5">
                          <Activity className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white tracking-tight leading-none mb-1">Agent Sentinel</div>
                          <div className="text-[8px] font-bold text-primary uppercase tracking-widest">ACTIVE & SCANNING</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { label: "Infrastructure Load", val: "Critical (89%)", action: "AUTOSCALING" },
                        { label: "Security Perimeter", val: "Intact", action: "VERIFIED" },
                        { label: "Traffic Volume", val: "1.2M Req/m", action: "BALANCED" }
                      ].map((s, i) => (
                        <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-all cursor-default">
                          <div>
                            <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                            <div className="text-slate-400 text-xs font-medium">{s.val}</div>
                          </div>
                          <div className="bg-primary/20 text-primary border border-primary/20 px-3 py-1.5 rounded-lg text-[9px] font-black tracking-widest">{s.action}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="relative p-12 md:p-20 rounded-[3rem] bg-slate-50 border border-slate-200 text-slate-950 text-center shadow-sm overflow-hidden group">
              <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/10">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-tight text-slate-900">
                  Automate the Un-Automatable.
                </h2>
                <p className="text-base text-slate-500 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                  Move beyond simple scripts. Build mission-critical autonomous systems that operate with the intelligence of your best engineers.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button size="lg" className="h-14 px-12 rounded-xl font-bold uppercase tracking-widest text-[9px] bg-slate-950 text-white hover:bg-primary transition-all shadow-xl">
                    Connect Your System
                  </Button>
                  <Button variant="outline" className="h-14 px-10 rounded-xl font-bold uppercase tracking-widest text-[9px] border-slate-200 bg-white hover:bg-slate-50 text-slate-950">
                    Technical Whitepaper
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AutonomousOperations;
