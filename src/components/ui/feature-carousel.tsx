"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
 Smartphone, 
 Globe, 
 Zap, 
 Fingerprint, 
 RefreshCw, 
 Cpu, 
 Rocket, 
 Layout,
 Layers,
 Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

// Optimized for Astraventa Mobile Engineering
const FEATURES = [
 {
 id: "native",
 label: "Native Engineering",
 icon: Smartphone,
 image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
 description: "High-performance iOS & Android apps with Swift and Kotlin.",
 },
 {
 id: "cross-platform",
 label: "Cross-Platform",
 icon: Globe,
 image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200",
 description: "Unified codebases with elite performance via Flutter & React Native.",
 },
 {
 id: "physics",
 label: "Fluid Motion",
 icon: Zap,
 image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
 description: "Premium 60FPS animations and sophisticated gesture physics.",
 },
 {
 id: "security",
 label: "Biometric Security",
 icon: Fingerprint,
 image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
 description: "Enterprise-grade FaceID, TouchID, and data encryption.",
 },
 {
 id: "real-time",
 label: "Real-time Sync",
 icon: RefreshCw,
 image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
 description: "Robust offline-first architecture with seamless background sync.",
 },
 {
 id: "hardware",
 label: "Hardware Mastery",
 icon: Cpu,
 image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
 description: "Deep integration with GPS, Camera, NFC, and BlueTooth LE.",
 },
 {
 id: "uiux",
 label: "Technical Design",
 icon: Layout,
 image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1200",
 description: "Elite visual architectures built for complex enterprise utility.",
 },
 {
 id: "launch",
 label: "Global Launch",
 icon: Rocket,
 image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200",
 description: "End-to-end ASO and CI/CD pipelines for App Store dominance.",
 },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
 const rangeSize = max - min;
 return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
 const [step, setStep] = useState(0);
 const [isPaused, setIsPaused] = useState(false);

 const currentIndex =
 ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

 const nextStep = useCallback(() => {
 setStep((prev) => prev + 1);
 }, []);

 const handleChipClick = (index: number) => {
 const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
 if (diff > 0) setStep((s) => s + diff);
 else if (diff < 0) setStep((s) => s + diff);
 };

 useEffect(() => {
 if (isPaused) return;
 const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
 return () => clearInterval(interval);
 }, [nextStep, isPaused]);

 const getCardStatus = (index: number) => {
 const diff = index - currentIndex;
 const len = FEATURES.length;

 let normalizedDiff = diff;
 if (diff > len / 2) normalizedDiff -= len;
 if (diff < -len / 2) normalizedDiff += len;

 if (normalizedDiff === 0) return "active";
 if (normalizedDiff === -1) return "prev";
 if (normalizedDiff === 1) return "next";
 return "hidden";
 };

 return (
 <div className="w-full max-w-7xl mx-auto md:p-8">
 <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-slate-200 bg-white/50 backdrop-blur-sm">
 <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-20 bg-black">
 <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-black via-black/80 to-transparent z-40" />
 <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-black via-black/80 to-transparent z-40" />
 
 <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20 mt-4">
 {FEATURES.map((feature, index) => {
 const isActive = index === currentIndex;
 const distance = index - currentIndex;
 const wrappedDistance = wrap(
 -(FEATURES.length / 2),
 FEATURES.length / 2,
 distance
 );

 const Icon = feature.icon;

 return (
 <motion.div
 key={feature.id}
 style={{
 height: ITEM_HEIGHT,
 width: "100%",
 }}
 animate={{
 y: wrappedDistance * ITEM_HEIGHT,
 opacity: 1 - Math.abs(wrappedDistance) * 0.3,
 scale: isActive ? 1 : 0.9,
 }}
 transition={{
 type: "spring",
 stiffness: 100,
 damping: 20,
 mass: 0.8,
 }}
 className="absolute flex items-center justify-start"
 >
 <button
 onClick={() => handleChipClick(index)}
 onMouseEnter={() => setIsPaused(true)}
 onMouseLeave={() => setIsPaused(false)}
 className={cn(
 "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-4 lg:py-3.5 rounded-full transition-all duration-500 text-left group border w-full max-w-[280px]",
 isActive
 ? "bg-white text-black border-white shadow-xl shadow-black/10 z-10"
 : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
 )}
 >
 <div
 className={cn(
 "flex items-center justify-center transition-colors duration-500",
 isActive ? "text-black" : "text-white/30"
 )}
 >
 <Icon className="w-5 h-5" strokeWidth={2} />
 </div>

 <span className="font-heading font-bold text-sm md:text-[13px] tracking-[0.15em] whitespace-nowrap uppercase">
 {feature.label}
 </span>
 </button>
 </motion.div>
 );
 })}
 </div>
 </div>

 <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-full relative bg-slate-50 flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-100">
 <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
 {/* Background decorative aura */}
 <div className="absolute inset-0 bg-[hsl(var(--primary))]/5 blur-[100px] rounded-full scale-150" />
 
 {FEATURES.map((feature, index) => {
 const status = getCardStatus(index);
 const isActive = status === "active";
 const isPrev = status === "prev";
 const isNext = status === "next";

 return (
 <motion.div
 key={feature.id}
 initial={false}
 animate={{
 x: isActive ? 0 : isPrev ? -120 : isNext ? 120 : 0,
 scale: isActive ? 1 : isPrev || isNext ? 0.82 : 0.6,
 opacity: isActive ? 1 : isPrev || isNext ? 0.3 : 0,
 rotate: isPrev ? -6 : isNext ? 6 : 0,
 zIndex: isActive ? 30 : isPrev || isNext ? 10 : 0,
 pointerEvents: isActive ? "auto" : "none",
 }}
 transition={{
 type: "spring",
 stiffness: 220,
 damping: 24,
 mass: 0.9,
 }}
 className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-8 md:border-[12px] border-white bg-white origin-center shadow-2xl shadow-black/5 group-hover/card:scale-105 transition-transform"
 >
 <img
 src={feature.image}
 alt={feature.label}
 className={cn(
 "w-full h-full object-cover transition-all duration-1000",
 isActive
 ? "grayscale-0 blur-0 scale-100"
 : "grayscale blur-[4px] brightness-75 scale-110"
 )}
 />

 <AnimatePresence>
 {isActive && (
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: 20 }}
 className="absolute inset-x-0 bottom-0 p-8 md:p-12 pt-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end pointer-events-none"
 >
 <div className="bg-[hsl(var(--primary))] text-white px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.25em] w-fit shadow-2xl mb-4">
 {feature.label}
 </div>
 <p className="text-white font-heading font-medium text-xl md:text-2xl leading-tight tracking-tight">
 {feature.description}
 </p>
 </motion.div>
 )}
 </AnimatePresence>

 <div
 className={cn(
 "absolute top-10 left-10 flex items-center gap-3 transition-opacity duration-500",
 isActive ? "opacity-100" : "opacity-0"
 )}
 >
 <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_12px_hsl(var(--primary))] animate-pulse" />
 <span className="text-white/90 text-[10px] font-mono font-bold uppercase tracking-[0.35em]">
 NATIVE_STREAM
 </span>
 </div>
 </motion.div>
 );
 })}
 </div>
 </div>
 </div>
 </div>
 );
}

export default FeatureCarousel;
