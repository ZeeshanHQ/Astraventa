"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { Sparkles, Activity, ShieldCheck, Zap, Cpu } from "lucide-react";

const saasItems: (CardStackItem & { icon: React.ReactNode })[] = [
 {
 id: "ai-intelligence",
 title: "AI Core Intelligence",
 tag: "Next-Gen AI",
 description: "Our proprietary deep-learning models analyze millions of data points in real-time to provide predictive insights that drive growth.",
 imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
 href: "/services",
 icon: <Cpu className="w-6 h-6" />,
 },
 {
 id: "real-time-mesh",
 title: "Real-time Data Mesh",
 tag: "Scalability",
 description: "Synchronize your global enterprise nodes with zero-latency data streaming and automated state reconciliation.",
 imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
 href: "/products",
 icon: <Activity className="w-6 h-6" />,
 },
 {
 id: "digital-nervous-system",
 title: "Digital Nervous System",
 tag: "BEE Engine",
 description: "Self-healing infrastructure that monitors bio-rhythms and system health, automatically mitigating bottlenecks before they impact users.",
 imageSrc: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1600",
 href: "/services",
 icon: <Zap className="w-6 h-6" />,
 },
 {
 id: "quantum-security",
 title: "Quantum-Safe Security",
 tag: "Enterprise",
 description: "Future-proof your data with multi-layered encryption protocols designed to withstand the next generation of cryptographic threats.",
 imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
 href: "/products",
 icon: <ShieldCheck className="w-6 h-6" />,
 },
 {
 id: "neural-ui",
 title: "Neural Experience Lab",
 tag: "Design Strategy",
 description: "Interfaces that learn from interaction patterns. Our Neural UI adapts layout and flow to maximize user efficiency and engagement.",
 imageSrc: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1600",
 href: "/services",
 icon: <Sparkles className="w-6 h-6" />,
 },
];

export default function CardStackSection() {
 return (
  <section className="py-10 md:py-12 relative overflow-hidden bg-white">
  {/* Background Ornaments */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-[120px] -z-10" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[120px] -z-10" />

 <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
 {/* Left Content */}
  <div className="space-y-10 lg:pr-4">
  <div className="flex">
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-black/5 border border-border/50 text-[11px] font-display font-normal uppercase tracking-[0.15em]">
  <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
  <span className="text-black/60">INNOVATIVE FEATURES</span>
  </div>
  </div>
  <div className="space-y-6 mb-12">
  <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl lg:text-5xl">
  Engineering the <span className="text-[hsl(var(--primary))]">Future</span> of Digital Ecosystems
  </h2>
  
  <p className="text-[15px] text-[#4B5563] font-body font-normal leading-[1.7] max-w-xl">
  Experience Astraventa's core technologies through our proprietary card-mesh interface. 
  Each layer represents a pillar of our commitment to aesthetic engineering and simplified complexity.
  </p>
  </div>

  <div className="grid grid-cols-2 gap-6 pt-4">
  <div className="bg-black/[0.02] p-4 rounded-sm border border-border/50">
  <div className="text-3xl font-heading font-normal text-black mb-1">99.9%</div>
  <div className="text-[11px] font-display font-normal text-black/40 uppercase tracking-[0.1em]">Uptime Reliability</div>
  </div>
  <div className="bg-black/[0.02] p-4 rounded-sm border border-border/50">
  <div className="text-3xl font-heading font-normal text-black mb-1">10X</div>
  <div className="text-[11px] font-display font-normal text-black/40 uppercase tracking-[0.1em]">Deployment Speed</div>
  </div>
  </div>
 </div>

 {/* Right Content - Card Stack */}
 <div className="relative flex justify-center lg:justify-end min-h-[400px] lg:min-h-[480px] lg:mt-8">
 <CardStack
 items={saasItems}
 initialIndex={0}
 maxVisible={3}
 overlap={0.88}
 spreadDeg={15}
 autoAdvance
 intervalMs={3500}
 pauseOnHover
 showDots
 cardWidth={420}
 cardHeight={300}
 className="max-w-full"
 />
 </div>
 </div>
 </section>
 );
}
