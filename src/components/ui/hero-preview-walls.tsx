"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";

type Card = {
 id: number;
 name: string;
 designation: string;
 content: React.ReactNode;
 image: string;
};

let interval: ReturnType<typeof setInterval>;

// ---------------------------
// CardSlide Component
// ---------------------------
export const CardSlide = ({
 items,
 offset = 22,
 scaleFactor = 0.06,
 intervalDuration = 3500,
}: {
 items: Card[];
 offset?: number;
 scaleFactor?: number;
 intervalDuration?: number;
}) => {
 const [cards, setCards] = useState<Card[]>(items);
 const [dynamicOffset, setDynamicOffset] = useState(offset);
 const [dynamicScale, setDynamicScale] = useState(scaleFactor);
 const [cardSize, setCardSize] = useState({ height: "26rem", width: "22rem" });

 useEffect(() => {
 const handleResize = () => {
 if (window.innerWidth < 640) {
 setDynamicOffset(10);
 setDynamicScale(0.04);
 setCardSize({ height: "26rem", width: "calc(100vw - 3rem)" });
 } else if (window.innerWidth < 1024) {
 setDynamicOffset(14);
 setDynamicScale(0.05);
 setCardSize({ height: "30rem", width: "28rem" });
 } else {
 setDynamicOffset(offset);
 setDynamicScale(scaleFactor);
 setCardSize({ height: "32rem", width: "32rem" });
 }
 };
 handleResize();
 window.addEventListener("resize", handleResize);
 return () => window.removeEventListener("resize", handleResize);
 }, [offset, scaleFactor]);

 useEffect(() => {
 interval = setInterval(() => {
 setCards((prev) => {
 const arr = [...prev];
 arr.unshift(arr.pop()!);
 return arr;
 });
 }, intervalDuration);
 return () => clearInterval(interval);
 }, [intervalDuration]);

 return (
 <div
 className="relative flex justify-center"
 style={{
 height: `calc(${cardSize.height} + ${cards.length * dynamicOffset}px)`,
 width: cardSize.width,
 }}
 >
 {cards.map((card, index) => (
 <motion.div
 key={card.id}
 className="absolute bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col justify-between text-left overflow-hidden"
 style={{ transformOrigin: "top center", height: cardSize.height, width: cardSize.width }}
 animate={{
 top: index * -dynamicOffset,
 scale: 1 - index * dynamicScale,
 zIndex: cards.length - index,
 }}
 transition={{ type: "spring", stiffness: 120, damping: 18 }}
 >
 <div className="space-y-3 sm:space-y-4">
 <div className="font-display font-normal text-lg sm:text-xl md:text-2xl text-slate-900 tracking-wide">
 {card.name}
 </div>
 <div className="text-[#4B5563] font-body font-normal text-sm sm:text-[15px] leading-[1.7]">
 {card.content}
 </div>
 <div className="mt-3">
 <img
 src={card.image}
 alt={card.name}
 className="w-full h-40 sm:h-48 md:h-52 rounded-xl border border-slate-100 object-cover shadow-sm"
 />
 </div>
 </div>
 <div className="pt-3 border-t border-slate-100 mt-4 flex items-center gap-2">
 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
 <p className="text-[#4B5563] font-display font-normal text-[11px] sm:text-[12px] tracking-[0.1em] uppercase">
 {card.designation}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 );
};

// ---------------------------
// AstraProductWalls Component (Astraventa-branded version of HeroPreviewWalls)
// ---------------------------
export function AstraProductWalls() {
  const CARDS: Card[] = [
    {
      id: 0,
      name: "LaunchPact AI — The Venture Architect",
      designation: "From Idea to Architecture in Minutes",
      content: (
        <p>
          Turning startup ideas into actionable blueprints. Generates a{" "}
          <span className="font-semibold text-primary">30-day execution plan</span>, including tech stack, 
          UI/UX strategy, and market positioning with precision.
        </p>
      ),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 1,
      name: "Shorts Cavexa — The Content Engine",
      designation: "High-Velocity Content, Zero Effort",
      content: (
        <p>
          AI-powered automation tool for rapid short-form content creation. 
          Automates the{" "}
          <span className="font-semibold text-primary">entire video production pipeline</span> 
          for explosive social media growth and global reach.
        </p>
      ),
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      name: "Outrelix — The Outreach Automator",
      designation: "Precision Outreach at Global Scale",
      content: (
        <p>
          Business outreach and lead generation automation. Uses{" "}
          <span className="font-semibold text-primary">autonomous agents</span> to manage and scale 
          cold outreach with deeply personalized intelligence and timing.
        </p>
      ),
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 3,
      name: "ComplyMail — The Regulatory Sentinel",
      designation: "Secure Communication, Architected by AI",
      content: (
        <p>
          An AI layer for communication compliance. Scans and filters outbound communications 
          to ensure they meet{" "}
          <span className="font-semibold text-primary">industry-specific regulatory standards</span> 
          and legal requirements automatically.
        </p>
      ),
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 4,
      name: "LegalFlow — The Case Orchestrator",
      designation: "Engineering Precision in Legal Workflows",
      content: (
        <p>
          AI-powered legal document automation. Automates the drafting of{" "}
          <span className="font-semibold text-primary">complex legal contracts</span> 
          and organizes case files using agentic logic to eliminate deadlines.
        </p>
      ),
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 5,
      name: "Vectrax — The Intelligent Scanner",
      designation: "Manage Supabase from your pocket",
      content: (
        <p>
          AI-powered project scanning and database management tool. 
          Deep indexing of project files for{" "}
          <span className="font-semibold text-primary">instant retrieval</span> 
          and autonomous management of your entire technical stack.
        </p>
      ),
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    },
  ];

 return (
 <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-28 border-t border-slate-100">
 {/* Subtle background */}
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,102,255,0.04),transparent_60%)]" />
 </div>

 <div className="max-w-7xl mx-auto px-6 relative z-10">
 <div className="flex flex-col lg:flex-row items-start gap-16 xl:gap-24">

 {/* LEFT: Text content */}
 <div className="flex-1 max-w-2xl">
 {/* Eyebrow badge */}
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 viewport={{ once: true }}
 className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-8"
 >
 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
 <span className="text-[11px] font-display font-normal text-slate-500 uppercase tracking-[0.15em]">
 Engineering Excellence · Without Compromise
 </span>
 </motion.div>

 {/* Headline */}
 <motion.h2
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
 viewport={{ once: true }}
 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl mb-6"
 >
 Products built to<br />
 <span className="text-primary">outlast the hype.</span>
 </motion.h2>

 {/* Subtext */}
 <motion.p
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1, duration: 0.6 }}
 viewport={{ once: true }}
 className="text-[15px] text-[#4B5563] font-body font-normal leading-[1.7] mb-10 max-w-lg"
 >
 Every Astraventa product is an opinionated system — designed for
 real-world scale, not demos. From autonomous AI agents to
 no-code pipelines, our suite turns operational complexity into
 competitive advantage.
 </motion.p>

 {/* Stats row */}
 <motion.div
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2, duration: 0.6 }}
 viewport={{ once: true }}
 className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-slate-100"
 >
 {[
 { value: "28+", label: "AI Modules" },
 { value: "60%", label: "Faster Workflows" },
 { value: "24/7", label: "Autonomous Ops" },
 ].map((stat) => (
 <div key={stat.label} className="flex flex-col">
 <span className="text-3xl font-heading font-normal text-slate-950">{stat.value}</span>
 <span className="text-[11px] font-display font-normal text-[#4B5563] uppercase tracking-[0.1em] mt-1">{stat.label}</span>
 </div>
 ))}
 </motion.div>

 {/* CTAs */}
 <motion.div
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3, duration: 0.6 }}
 viewport={{ once: true }}
 className="flex flex-col sm:flex-row gap-4"
 >
             <ShinyButton
               className="h-10 px-6 rounded-full font-display font-medium text-[12px] uppercase tracking-[0.1em] flex items-center justify-center gap-2.5 whitespace-nowrap"
               onClick={() => window.location.href = '/products'}
             >
               <span className="relative z-10 flex items-center gap-2.5 pt-[2px]">
                 Explore All Products
                 <Boxes className="w-3.5 h-3.5" />
               </span>
             </ShinyButton>
             <Button
               variant="ghost"
               size="default"
               className="h-10 px-5 rounded-full font-display font-medium text-[12px] uppercase tracking-[0.1em] flex items-center gap-2 text-black/70 hover:text-black hover:bg-transparent shadow-none whitespace-nowrap transition-colors"
               onClick={() => window.location.href = '/get-in-touch'}
             >
               Book a Demo
               <ArrowRight className="w-3.5 h-3.5 text-primary" />
             </Button>
 </motion.div>
 </div>

 {/* RIGHT: Animated card stack */}
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
 viewport={{ once: true }}
 className="flex-1 flex justify-center lg:justify-end pt-4"
 >
 <CardSlide items={CARDS} />
 </motion.div>
 </div>
 </div>
 </section>
 );
}
