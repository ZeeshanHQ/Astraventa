import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Bot, 
  Code2, 
  ShieldCheck, 
  ArrowRight,
  Smartphone,
  Server,
  Palette,
  TerminalSquare
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "ai",
    title: "AI Integration & Agents",
    route: "/services/ai",
    description: "Custom LLM pipelines, autonomous agentic workflows, and intelligent automation systems tailored for enterprise operations.",
    icon: Bot,
    color: "from-blue-500/20 to-purple-500/20",
    metric: "300% ROI",
    metricLabel: "Average Automation Efficiency"
  },
  {
    id: "backend",
    title: "Backend Infrastructure",
    route: "/services/backend",
    description: "Scalable Node.js, Go, and Python microservices built for maximum throughput, zero downtime, and rock-solid reliability.",
    icon: Server,
    color: "from-emerald-500/20 to-teal-500/20",
    metric: "99.99%",
    metricLabel: "System Uptime Guaranteed"
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    route: "/services/web",
    description: "High-performance React & Vue applications with flawless user experiences, responsive architectures, and cinematic animations.",
    icon: Code2,
    color: "from-orange-500/20 to-red-500/20",
    metric: "< 100ms",
    metricLabel: "Client-Side Render Time"
  },
  {
    id: "app",
    title: "Native Mobile Apps",
    route: "/services/mobile",
    description: "Cross-platform and native iOS/Android applications engineered for maximum performance, offline capability, and native feel.",
    icon: Smartphone,
    color: "from-pink-500/20 to-rose-500/20",
    metric: "60fps",
    metricLabel: "Fluid UI Animations"
  },
  {
    id: "security",
    title: "Security Architecture",
    route: "/services/security",
    description: "Zero-trust implementations, comprehensive smart-contract auditing, and hardened cloud infrastructure against modern threats.",
    icon: ShieldCheck,
    color: "from-slate-500/20 to-zinc-500/20",
    metric: "Zero",
    metricLabel: "Critical Vulnerabilities"
  },
];

export const ProfessionalServices = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeId) || SERVICES[0];

  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative overflow-hidden border-y border-black/[0.04]">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-display font-medium text-black/70 uppercase tracking-[0.2em]">Engineering_Disciplines</span>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-normal text-black uppercase leading-[1.1] tracking-[0.1em] text-3xl sm:text-4xl md:text-[3rem] lg:text-[3.5rem]"
            >
              Architecting <br className="hidden md:block" />
              <span className="text-primary">The Extraordinary.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[15px] sm:text-[16px] text-[#4B5563] font-normal leading-[1.8] max-w-[450px]"
            >
              We don't just write code. We engineer resilient, highly-available systems that serve as the foundation for global enterprises.
            </motion.p>
          </div>
        </div>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Interactive List */}
          <div className="flex-1 flex flex-col gap-2">
            {SERVICES.map((service, index) => {
              const isActive = activeId === service.id;
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => navigate(service.route)}
                  className={cn(
                    "group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden border",
                    isActive 
                      ? "bg-white border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] scale-[1.02]" 
                      : "bg-transparent border-transparent hover:bg-black/[0.02]"
                  )}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                        isActive ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-black/[0.04] text-black/40 group-hover:bg-black/[0.06] group-hover:text-black/60"
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className={cn(
                        "text-[18px] sm:text-[20px] font-heading uppercase tracking-widest transition-all duration-500",
                        isActive ? "text-black" : "text-black/40 group-hover:text-black/70"
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500",
                      isActive ? "border-primary/20 bg-primary/5 text-primary opacity-100 translate-x-0" : "border-black/[0.08] text-black/30 opacity-0 -translate-x-4 group-hover:opacity-50"
                    )}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Dynamic Display Panel */}
          <div className="flex-1 lg:max-w-[500px] xl:max-w-[600px] shrink-0">
            <div className="sticky top-32 w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] bg-white border border-black/[0.06] shadow-2xl overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col p-8 sm:p-12"
                >
                  {/* Decorative Background Glow */}
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", activeService.color)} />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex-1">
                      <activeService.icon className="w-12 h-12 text-primary mb-8" />
                      <h4 className="text-2xl font-bold text-black mb-4">
                        {activeService.title}
                      </h4>
                      <p className="text-[15px] text-[#4B5563] font-normal leading-[1.8]">
                        {activeService.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-black/[0.06] flex items-end justify-between">
                      <div>
                        <div className="text-[10px] font-display font-medium text-black/40 uppercase tracking-[0.2em] mb-2">Key Metric</div>
                        <div className="text-3xl font-heading font-normal text-black tracking-tight">{activeService.metric}</div>
                        <div className="text-[11px] text-black/60 font-medium">{activeService.metricLabel}</div>
                      </div>
                      
                      <button 
                        onClick={() => navigate(activeService.route)}
                        className="h-10 px-6 rounded-full bg-black text-white text-[11px] font-display font-bold uppercase tracking-[0.15em] flex items-center gap-2 hover:bg-primary transition-colors shadow-lg"
                      >
                        Deploy <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 md:mt-32 flex justify-center pb-8 border-b border-black/[0.04]"
        >
          <div className="flex items-center gap-6">
             <span className="text-[11px] font-display font-medium text-black/40 uppercase tracking-[0.2em] hidden sm:block">Need a custom architecture?</span>
             <ShinyButton 
                className="h-12 px-8 rounded-full text-[12px] font-display font-medium uppercase tracking-[0.15em] flex items-center gap-2.5"
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10 flex items-center gap-2.5 pt-[2px]">
                  Consult an Architect
                  <TerminalSquare className="w-4 h-4" />
                </span>
              </ShinyButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
