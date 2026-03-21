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
    color: "text-[hsl(var(--primary))]",
    bg: "bg-[hsl(var(--primary))]/10",
    href: "/tools/astra-reach"
  },
  {
    title: "AstraPulse",
    tagline: "AI Observability & Metrics",
    icon: Activity,
    color: "text-black/60",
    bg: "bg-black/[0.01]",
    href: "/tools/astra-pulse"
  },
  {
    title: "AstraAgent",
    tagline: "The Browser Worker Agent",
    icon: MousePointerClick,
    color: "text-[hsl(var(--primary))]",
    bg: "bg-[hsl(var(--primary))]/10",
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
        <div className="relative bg-white border border-black/[0.06] rounded-2xl p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[hsl(var(--primary))]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="lg:max-w-md text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-2xl bg-black/[0.01] border border-black/[0.06] mb-6 font-['Anonymous_Pro']">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
              <span className="text-[10px] font-bold text-[#4B5563] uppercase tracking-[0.2em]">ECOSYSTEM_SYNC</span>
            </div>
            <h3 className="text-3xl font-black text-black mb-4 tracking-tighter uppercase leading-none">Related <br /><span className="text-[hsl(var(--primary))]">Astra Stack.</span></h3>
            <p className="text-[#4B5563] font-medium leading-relaxed">
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
                    className="flex flex-col p-6 rounded-2xl border border-black/[0.06] bg-black/[0.01] hover:bg-black/[0.01] hover:border-[hsl(var(--primary))]/30 transition-all group/card h-full"
                  >
                    <div className={`w-10 h-10 rounded-2xl ${tool.bg} flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform border border-[hsl(var(--primary))]/10`}>
                      <Icon className={`w-5 h-5 ${tool.color}`} />
                    </div>
                    <div className="text-sm font-black text-black mb-2 uppercase tracking-tighter">{tool.title}</div>
                    <div className="text-[10px] font-black text-[#4B5563] uppercase tracking-widest mb-6">{tool.tagline}</div>
                    <div className="mt-auto flex items-center gap-2 text-[hsl(var(--primary))] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity">
                      DEPLOY <ArrowRight className="w-3 h-3" />
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
