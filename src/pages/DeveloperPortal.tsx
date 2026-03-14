import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code2, Terminal, BookOpen, Activity, Key, Box, Cpu, Zap, ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const DeveloperPortal = () => {
  const resources = [
    { title: "API Reference", description: "REST and GraphQL documentation for autonomous orchestration.", icon: BookOpen, href: "#" },
    { title: "SDKs & Libraries", description: "Native client libraries for Node, Python, and Go.", icon: Box, href: "#" },
    { title: "Authentication", description: "Manage API keys and identity-aware proxying tokens.", icon: Key, href: "#" },
    { title: "System Status", description: "Live infrastructure telemetry and edge performance.", icon: Activity, href: "/status" },
  ];

  const codeSnippet = `// Initialize Astraventa Autonomous Agent
import { AstraCore } from '@astraventa/sdk';

const astra = new AstraCore({
  apiKey: process.env.ASTRA_API_KEY,
  sequence: 'autonomous-web-v4'
});

// Deploy intelligent orchestration layer
const agent = await astra.deploy({
  objective: 'Audit global infrastructure for SOC-2 latency breaches',
  autonomyLevel: 'rigorous'
});

console.log(\`Agent [$\{agent.id}] Sequence initiated.\`);`;

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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-900/[0.02] rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center pt-20">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">Engineering Sandbox // v2.4a</span>
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tight leading-[0.9] mb-10 uppercase italic">
                Build the <br />
                <span className="text-slate-300">Autonomous.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-tight max-w-xl mb-12">
                Unified APIs for intelligent orchestration. Deploy autonomous agents, hardened infrastructure, and high-velocity logic with a single interface.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 bg-slate-900 hover:bg-[#0066FF] text-white rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all shadow-xl shadow-slate-900/10">
                  Read Documentation
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 border-slate-200 hover:bg-slate-50 rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all">
                  Get API Key
                </Button>
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="relative p-1 bg-slate-950 rounded-[2.5rem] shadow-2xl shadow-slate-950/20 group"
            >
              <div className="bg-slate-900 rounded-[2.2rem] p-8 overflow-hidden relative">
                <div className="flex gap-1.5 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
                </div>
                <pre className="text-xs font-mono text-slate-400 leading-relaxed overflow-x-auto selection:bg-[#0066FF]/30">
                  <code className="block py-4">
                    {codeSnippet.split('\n').map((line, i) => (
                      <div key={i} className="flex gap-6 group/line">
                        <span className="w-6 text-slate-700 text-right select-none">{i + 1}</span>
                        <span className="text-slate-300">{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
                <div className="absolute top-8 right-8 text-[10px] font-black text-slate-700 uppercase tracking-widest bg-slate-950 px-2 py-1 rounded border border-white/5">TypeScript // Node</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── RESOURCE GRID ───────────────────────────────────────────────── */}
        <section className="max-w-[1400px] mx-auto py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((res, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-[#0066FF]/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0066FF]/5 transition-all">
                  <res.icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase italic leading-none">{res.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{res.description}</p>
                <Link to={res.href} className="text-[10px] font-black text-[#0066FF] uppercase tracking-widest flex items-center gap-2 group/link">
                  Enter Hub <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── CORE SDK PILLARS ────────────────────────────────────────────── */}
        <section className="max-w-[1400px] mx-auto py-32 bg-slate-950 rounded-[4rem] px-12 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0066FF]/10 blur-[150px] rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div {...fadeUp}>
              <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-6">Built for Reliability</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8 uppercase italic">
                Architectural <br />
                <span className="text-slate-600 font-normal">Superiority.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 tracking-tight">Post-Language Orchestration</h4>
                    <p className="text-slate-400 font-medium">Native SDKs across modern stacks with unified state management and error logic.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Terminal className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 tracking-tight">Hardened Telemetry</h4>
                    <p className="text-slate-400 font-medium">Integrated observability into every agent deployment. Real-time logging via persistent webhooks.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'GitHub Repos', value: '42+', icon: Github },
                { label: 'SDK Downloads', value: '1.2M', icon: Zap },
                { label: 'NPM Packages', value: '18', icon: Box },
                { label: 'Community', value: '12k', icon: Code2 },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                  <stat.icon className="w-5 h-5 text-slate-500 mb-6" />
                  <div className="text-4xl font-black mb-1">{stat.value}</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── CALL TO ACTION ─────────────────────────────────────────────── */}
        <section className="max-w-[800px] mx-auto py-24 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-5xl font-black text-slate-950 mb-8 tracking-tight uppercase italic leading-none">
              Start building <span className="text-slate-300">at the edge.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="h-16 px-12 bg-slate-900 border-0 hover:bg-[#0066FF] text-white rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all shadow-xl shadow-slate-900/10">
                 Quickstart Guide
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 border-slate-200 rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all">
                 Join Discord Engine
                 <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DeveloperPortal;
