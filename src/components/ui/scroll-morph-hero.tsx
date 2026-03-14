"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

import { useNavigate } from "react-router-dom";

interface FlipCardProps {
  src: string;
  name: string;
  role: string;
  slug: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 65; 
const IMG_HEIGHT = 90; 

function FlipCard({
  src,
  name,
  role,
  slug,
  index,
  total,
  phase,
  target,
}: FlipCardProps) {
  const navigate = useNavigate();
  
  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Use the specific tool route if it starts with 'astra-', otherwise use general products
    const route = slug.startsWith('astra-') ? `/tools/${slug}` : `/services/${slug}`;
    navigate(route);
  };

  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 45,
        damping: 18,
      }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -IMG_HEIGHT / 2,
        marginLeft: -IMG_WIDTH / 2,
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer group"
      onClick={handleNavigate}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-md bg-slate-50 border border-slate-100"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={name}
            className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Front Label Overlay */}
          <div className="absolute bottom-1.5 left-1.5 right-1.5 z-10">
            <div className="bg-white/90 backdrop-blur-[2px] px-1.5 py-0.5 rounded-md border border-white/20 shadow-sm">
              <p className="text-[6px] font-black text-slate-800 truncate tracking-tight">{name}</p>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-xl bg-white flex flex-col items-center justify-center p-2 border border-[#2910E5]/20"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <p className="text-[6px] font-black text-[#2910E5] uppercase tracking-widest mb-1">Module {index + 1}</p>
            <p className="text-[10px] font-bold text-slate-900 leading-tight mb-1">{name}</p>
            <div className="w-6 h-[1px] bg-slate-100 mx-auto my-1" />
            <button 
              onClick={handleNavigate}
              className="text-[7px] font-bold text-white bg-[#2910E5] px-2 py-1 rounded-full mt-1 transform group-hover:scale-110 transition-transform"
            >
              Open Tool
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Tool Data ---
const ASTRA_TOOLS = [
  { name: "AstraReach", role: "Outreach", slug: "astra-reach", img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&q=80" },
  { name: "AstraScrape", role: "Extraction", slug: "astra-scrape", img: "https://images.unsplash.com/photo-1551288049-bbda483387a5?w=400&q=80" },
  { name: "AstraFlow", role: "Operations", slug: "astra-flow", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
  { name: "AstraPulse", role: "Observability", slug: "astra-pulse", img: "https://images.unsplash.com/photo-1551288049-bbda483387a5?w=400&q=80" },
  { name: "AstraDoc", role: "Document AI", slug: "astra-doc", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80" },
  { name: "AstraTranslate", role: "Localization", slug: "astra-translate", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" },
  { name: "AstraMarket", role: "Intelligence", slug: "astra-market", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
  { name: "AstraAgent", role: "Autonomy", slug: "astra-agent", img: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=400&q=80" },
  { name: "AstraHook", role: "Content AI", slug: "astra-hook", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80" },
  { name: "AstraGuard", role: "Security", slug: "security", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80" },
  { name: "AstraSync", role: "Real-time", slug: "astra-flow", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=400&q=80" },
  { name: "AstraLead", role: "Lead Gen", slug: "astra-lead", img: "https://images.unsplash.com/photo-1551288049-bbda483387a5?w=400&q=80" },
  { name: "AstraVoice", role: "Speech", slug: "astra-vibe", img: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=400&q=80" },
  { name: "AstraForm", role: "Structuring", slug: "astra-scrape", img: "https://images.unsplash.com/photo-1554224155-1696413567d3?w=400&q=80" },
  { name: "AstraLogic", role: "Reasoning", slug: "astra-flow", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&q=80" },
  { name: "AstraBench", role: "Evaluation", slug: "astra-verify", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80" },
  { name: "AstraMail", role: "Email AI", slug: "astra-mail", img: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&q=80" },
  { name: "AstraLegal", role: "Legal AI", slug: "astra-legal", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80" },
  { name: "AstraVerify", role: "Auth AI", slug: "astra-verify", img: "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?w=400&q=80" },
  { name: "AstraFinance", role: "FinTech", slug: "astra-finance", img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&q=80" },
];

const TOTAL_IMAGES = ASTRA_TOOLS.length;
const MAX_SCROLL = 2500; 

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphHero() {
 const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
 const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
 
 // We use an outer container to define the scroll distance (300vh)
 const targetRef = useRef<HTMLDivElement>(null);
 // We use an inner sticky container to measure the viewport dimensions
 const stickyRef = useRef<HTMLDivElement>(null);

 // --- Container Size ---
 useEffect(() => {
 if (!stickyRef.current) return;

 const handleResize = (entries: ResizeObserverEntry[]) => {
 for (const entry of entries) {
 setContainerSize({
 width: entry.contentRect.width,
 height: entry.contentRect.height,
 });
 }
 };

 const observer = new ResizeObserver(handleResize);
 observer.observe(stickyRef.current);

 setContainerSize({
 width: stickyRef.current.offsetWidth,
 height: stickyRef.current.offsetHeight,
 });

 return () => observer.disconnect();
 }, []);

 // --- Native Scroll Logic (No Hijacking) ---
 const { scrollYProgress } = useScroll({
 target: targetRef,
 offset: ["start start", "end end"]
 });

 // Morph Phase: 0 to 1 during the first 25% of scroll
 const morphProgress = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
 const smoothMorph = useSpring(morphProgress, { stiffness: 45, damping: 22 });

 // Rotate Phase: 0 to 360 during the rest of the scroll
 const scrollRotate = useTransform(scrollYProgress, [0.25, 1], [0, 360]);
 const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 45, damping: 22 });

 useEffect(() => {
 const timer1 = setTimeout(() => setIntroPhase("line"), 500);
 const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
 return () => { clearTimeout(timer1); clearTimeout(timer2); };
 }, []);

 const scatterPositions = useMemo(() => {
 return ASTRA_TOOLS.map(() => ({
 x: (Math.random() - 0.5) * 1600,
 y: (Math.random() - 0.5) * 1100,
 rotation: (Math.random() - 0.5) * 200,
 scale: 0.5,
 opacity: 0,
 }));
 }, []);

 const [morphValue, setMorphValue] = useState(0);
 const [rotateValue, setRotateValue] = useState(0);

 useEffect(() => {
 const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
 const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
 return () => {
 unsubscribeMorph();
 unsubscribeRotate();
 };
 }, [smoothMorph, smoothScrollRotate]);

 const contentOpacity = useTransform(smoothMorph, [0.85, 1], [0, 1]);
 const contentY = useTransform(smoothMorph, [0.85, 1], [30, 0]);

 return (
 // The outer ref establishes the scroll height. 300vh allows enough room to morph and spin.
 <div ref={targetRef} className="relative w-full h-[300vh] bg-white border-t border-slate-50">
 
 {/* The sticky container sticks to the viewport while you scroll through the 300vh */}
 <div ref={stickyRef} className="sticky top-0 w-full h-screen overflow-hidden">
 
 {/* Background Blueprint Grid */}
 <div 
 className="absolute inset-0 opacity-[0.03] pointer-events-none"
 style={{ 
 backgroundImage: 'linear-gradient(#2910E5 1px, transparent 1px), linear-gradient(90deg, #2910E5 1px, transparent 1px)', 
 backgroundSize: '50px 50px' 
 }} 
 />

 <div className="flex h-full w-full flex-col items-center justify-center perspective-1000 relative">
 
 {/* Intro Text */}
 <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-[45%] -translate-y-1/2">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={introPhase === "circle" && morphValue < 0.4 ? { opacity: 1 - morphValue * 2.5, y: 0 } : { opacity: 0 }}
 className="flex flex-col items-center"
 >
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2910E5]/5 border border-[#2910E5]/10 mb-6">
 <div className="w-1 h-1 rounded-full bg-[#2910E5] animate-pulse" />
 <span className="text-[10px] font-black text-[#2910E5] tracking-[0.2em] uppercase font-mono">Autonomous Ecosystem</span>
 </div>
 <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 max-w-xl leading-[1.1]">
 The future is built on <span className="text-[#2910E5]">AI Autonomy.</span>
 </h1>
 <p className="text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase font-mono flex items-center gap-4">
 <span className="w-8 h-[1px] bg-slate-200" />
 SCROLL TO DEPLOY
 <span className="w-8 h-[1px] bg-slate-200" />
 </p>
 </motion.div>
 </div>

 {/* Arc Active Content */}
 <motion.div
 style={{ opacity: contentOpacity, y: contentY }}
 className="absolute top-[22%] z-50 flex flex-col items-center justify-center text-center pointer-events-none px-6"
 >
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2910E5]/5 border border-[#2910E5]/10 mb-4">
 <span className="text-[10px] font-black text-[#2910E5] tracking-[0.2em] uppercase font-mono">Agentic Toolbelt</span>
 </div>
 <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
 Deploy Specialized <br/> <span className="text-[#2910E5]">Intelligence.</span>
 </h2>
 <p className="text-sm md:text-base text-slate-500 max-w-lg font-medium leading-relaxed">
 Scroll through our 20+ specialized AI modules. From resilient extraction to autonomous outreach, equip your stack with the power of Astraventa.
 </p>
 </motion.div>

 <div className="relative flex items-center justify-center w-full h-full">
 {ASTRA_TOOLS.map((tool, i) => {
 let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

 if (introPhase === "scatter") {
 target = scatterPositions[i];
 } else if (introPhase === "line") {
 const lineSpacing = 75;
 const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
 const lineX = i * lineSpacing - lineTotalWidth / 2;
 target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
 } else {
 const isMobile = containerSize.width < 768;
 const minDimension = Math.min(containerSize.width, containerSize.height);
 const circleRadius = Math.min(minDimension * 0.38, 380);

 const circleAngle = (i / TOTAL_IMAGES) * 360;
 const circleRad = (circleAngle * Math.PI) / 180;
 const circlePos = {
 x: Math.cos(circleRad) * circleRadius,
 y: Math.sin(circleRad) * circleRadius,
 rotation: circleAngle + 90,
 };

 const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
 const arcRadius = baseRadius * (isMobile ? 1.3 : 1.15);
 const arcApexY = containerSize.height * (isMobile ? 0.25 : 0.15); // Offset slightly below center
 const arcCenterY = arcApexY + arcRadius;

 const spreadAngle = isMobile ? 110 : 150;
 const startAngle = -90 - (spreadAngle / 2);
 const step = spreadAngle / (TOTAL_IMAGES - 1);

 const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
 const maxRotation = spreadAngle * 0.75;
 const boundedRotation = -scrollProgress * maxRotation;

 const currentArcAngle = startAngle + (i * step) + boundedRotation;
 const arcRad = (currentArcAngle * Math.PI) / 180;

 const arcPos = {
 x: Math.cos(arcRad) * arcRadius,
 y: Math.sin(arcRad) * arcRadius + arcCenterY,
 rotation: currentArcAngle + 90,
 scale: isMobile ? 1.3 : 1.6,
 };

 target = {
 x: lerp(circlePos.x, arcPos.x, morphValue),
 y: lerp(circlePos.y, arcPos.y, morphValue),
 rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
 scale: lerp(1, arcPos.scale, morphValue),
 opacity: 1,
 };
 }

 return (
        <FlipCard
          key={i}
          src={tool.img}
          name={tool.name}
          role={tool.role}
          slug={tool.slug}
          index={i}
          total={TOTAL_IMAGES}
          phase={introPhase}
          target={target}
        />
 );
 })}
 </div>
 </div>
 </div>
 </div>
 );
}
