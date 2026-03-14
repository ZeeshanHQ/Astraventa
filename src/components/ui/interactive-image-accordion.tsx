import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// --- Data for the image accordion ---
const accordionItems = [
 {
 id: 1,
 title: 'Voice Engineering',
 imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
 },
 {
 id: 2,
 title: 'Model Optimization',
 imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
 },
 {
 id: 3,
 title: 'Local RAG Systems',
 imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
 },
 {
 id: 4,
 title: 'AI Agents',
 imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
 },
 {
 id: 5,
 title: 'Visual Intelligence',
 imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
 },
];

interface AccordionItemProps {
 item: typeof accordionItems[0];
 isActive: boolean;
 onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
 return (
 <div
 className={cn(
 "relative h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out",
 isActive ? "w-full md:w-[600px]" : "w-full md:w-[80px]"
 )}
 onMouseEnter={onMouseEnter}
 >
 {/* Background Image */}
 <img
 src={item.imageUrl}
 alt={item.title}
 className="absolute inset-0 w-full h-full object-cover"
 onError={(e) => { 
 const target = e.target as HTMLImageElement;
 target.onerror = null; 
 target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; 
 }}
 />
 {/* Dark overlay for better text readability */}
 <div className={cn("absolute inset-0 bg-black/40 transition-opacity duration-500", isActive ? "opacity-60" : "opacity-40")} />

 {/* Caption Text */}
 <span
 className={cn(
 "absolute text-white text-lg font-bold whitespace-nowrap transition-all duration-500 ease-in-out",
 isActive
 ? "bottom-8 left-8 rotate-0 opacity-100" // Active state
 : "bottom-12 left-1/2 -translate-x-1/2 -rotate-90 opacity-80 md:opacity-0 group-hover:opacity-100" // Hidden or vertical on inactive
 )}
 >
 {item.title}
 </span>
 
 {/* Active Indicator Line */}
 <div className={cn(
 "absolute left-8 bottom-6 w-12 h-1 bg-[#2910E5] transition-all duration-500 delay-300",
 isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
 )} />
 </div>
 );
};


// --- Main App Component ---
export function LandingAccordionItem() {
 const [activeIndex, setActiveIndex] = useState(2);

 const handleItemHover = (index: number) => {
 setActiveIndex(index);
 };

 return (
 <div className="bg-white font-sans py-16 md:py-24">
 <div className="max-w-[1400px] mx-auto px-6">
 <div className="flex flex-col lg:flex-row items-center gap-16">
 
 {/* Left Side: Text Content */}
 <div className="w-full lg:w-1/3 text-center lg:text-left">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
 <span className="w-1.5 h-1.5 rounded-full bg-[#2910E5]" />
 <span className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">Core Capabilities</span>
 </div>
 <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter mb-8">
 Accelerate <br />
 <span className="text-[#2910E5]">Gen-AI</span> Tasks.
 </h2>
 <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
 Deploy high-performance AI logic directly into your enterprise flow. High-throughput architectures built for mission-critical operations.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <a
 href="#contact"
 className="inline-flex items-center justify-center bg-slate-900 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-slate-200 hover:bg-black transition-all duration-300 "
 >
 Contact Specialist
 </a>
 </div>
 </div>

 {/* Right Side: Image Accordion */}
 <div className="w-full lg:w-2/3">
 <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 overflow-hidden p-2 min-h-[450px]">
 {accordionItems.map((item, index) => (
 <AccordionItem
 key={item.id}
 item={item}
 isActive={index === activeIndex}
 onMouseEnter={() => handleItemHover(index)}
 />
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
