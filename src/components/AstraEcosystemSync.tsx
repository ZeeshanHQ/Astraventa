import { motion } from "framer-motion";
import { Mail, Activity, MousePointerClick, ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

export interface AstraTool {
  title: string;
  tagline: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  href: string;
}

const defaultTools: AstraTool[] = [
  {
    title: "AstraReach",
    tagline: "Autonomous Email Operations",
    icon: Mail,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    href: "/tools/astra-reach"
  },
  {
    title: "AstraPulse",
    tagline: "AI Observability & Metrics",
    icon: Activity,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    href: "/tools/astra-pulse"
  },
  {
    title: "AstraAgent",
    tagline: "The Browser Worker Agent",
    icon: MousePointerClick,
    color: "text-blue-600",
    bg: "bg-blue-600/10",
    href: "/tools/astra-agent"
  }
];

interface AstraEcosystemSyncProps {
  tools?: AstraTool[];
}

export const AstraEcosystemSync = ({ tools = defaultTools }: AstraEcosystemSyncProps) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 mb-24">
      <div className="relative group">
        {/* Floating background effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#2910E5]/20 to-transparent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
          <div className="lg:max-w-md text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2910E5] animate-pulse" />
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">Ecosystem Sync</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Related Astra Stack</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Beyond Integration. Experience Unified Autonomy with our purpose-built engineering ecosystem.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={tool.href}
                    className="flex flex-col p-6 rounded-2xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:border-[#2910E5]/20 hover:shadow-xl hover:shadow-[#2910E5]/5 transition-all group/card h-full"
                  >
                    <div className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${tool.color}`} />
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-2">{tool.title}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{tool.tagline}</div>
                    <div className="mt-auto flex items-center gap-2 text-[#2910E5] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity">
                      Deploy <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
