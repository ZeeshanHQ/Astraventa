"use client";

import React from "react";
import { cn } from "@/lib/utils";

const sizeMap = {
 sm: { width: "150px", spineTranslation: "122px" },
 default: { width: "196px", spineTranslation: "168px" },
 lg: { width: "300px", spineTranslation: "272px" },
};

interface PerspectiveBookProps {
 size?: "sm" | "default" | "lg";
 className?: string;
 children: React.ReactNode;
 textured?: boolean;
}

export function PerspectiveBook({
 size = "default",
 className = "",
 children,
 textured = false,
}: PerspectiveBookProps) {
 const defaultColorClasses =
 'bg-slate-100 text-slate-900 before:content-[""] before:bg-gradient-to-b before:from-[#ffffff1a] before:to-transparent before:absolute before:inset-0 before:rounded-[inherit]';

 return (
 <div
 className={`z-10 group [perspective:900px] w-min h-min`}
 >
 <div
 style={{
 width: sizeMap[size].width,
 borderRadius: "6px 4px 4px 6px",
 }}
 className={`transition-transform duration-300 ease-out relative [transform-style:preserve-3d] [transform:rotateY(0deg)] group-hover:[transform:rotateY(-20deg)] group- group-hover:-translate-x-1 aspect-[49/60]`}
 >
 {/* Front Side */}
 <div
 className={cn(
 `absolute inset-y-0 overflow-hidden size-full left-0 flex flex-col p-[12%] after:content-[''] after:absolute after:inset-0 after:shadow-[0_1.8px_3.6px_#0000000d,_0_10.8px_21.6px_#00000014,_inset_0_-.9px_#0000001a,_inset_0_1.8px_1.8px_#ffffff1a,_inset_3.6px_0_3.6px_#0000001a] after:pointer-events-none after:rounded-[inherit] after:border-[#00000014] after:border after:border-solid`,
 className || defaultColorClasses,
 )}
 style={{
 transform: "translateZ(25px)",
 borderRadius: "6px 4px 4px 6px",
 }}
 >
 <div
 className="absolute left-0 top-0 h-full opacity-40 z-10 pointer-events-none"
 style={{
 minWidth: "8.2%",
 background:
 "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 12%, hsla(0, 0%, 100%, .25) 29.25%, hsla(0, 0%, 100%, 0) 50.5%, hsla(0, 0%, 100%, 0) 75.25%, hsla(0, 0%, 100%, .25) 91%, hsla(0, 0%, 100%, 0)), linear-gradient(90deg, rgba(0, 0, 0, .03), rgba(0, 0, 0, .1) 12%, transparent 30%, rgba(0, 0, 0, .02) 50%, rgba(0, 0, 0, .2) 73.5%, rgba(0, 0, 0, .5) 75.25%, rgba(0, 0, 0, .15) 85.25%, transparent)",
 }}
 >
 </div>
 <div className="pl-1 h-full relative z-0">
 {children}
 </div>
 {textured && (
 <div
 className="absolute inset-0 mix-blend-overlay rotate-180 opacity-20 pointer-events-none z-20"
 style={{
 borderRadius: "6px 4px 4px 6px",
 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
 backgroundSize: '100px 100px'
 }}
 />
 )}

 {/* Spine (Sidebar of the book) */}
 <div
 className="absolute top-0 right-full h-full origin-right border-y border-l border-black/10 bg-gradient-to-r from-slate-200 to-slate-100"
 style={{
 width: "50px", // Thickness of the book
 transform: "rotateY(-90deg) translateZ(0px)",
 borderRadius: "4px 0 0 4px",
 }}
 >
 {/* Spine page lines */}
 <div className="absolute inset-y-1 right-0 w-full flex flex-col justify-evenly px-2 opacity-10">
 {Array.from({ length: 30 }).map((_, i) => (
 <div key={i} className="h-[1px] w-full bg-slate-900" />
 ))}
 </div>
 <div className="absolute inset-0 flex items-center justify-center -rotate-90 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
 ASTRAVENTA
 </div>
 </div>
 
 {/* Pages (Right side of the book) */}
 <div
 className="absolute top-0 left-full h-full origin-left bg-white border-y border-r border-black/5"
 style={{
 width: "50px", // Thickness of the book
 transform: "rotateY(90deg) translateZ(0px)",
 borderRadius: "0 6px 6px 0",
 }}
 >
 {/* Page lines effect on the side */}
 <div className="absolute inset-0 flex flex-col justify-evenly py-2 px-[1px] opacity-[0.03]">
 {Array.from({ length: 40 }).map((_, i) => (
 <div key={i} className="h-full w-[1px] bg-slate-900 mx-auto" />
 ))}
 </div>
 </div>

 {/* Top Pages */}
 <div
 className="absolute bottom-full left-0 w-full origin-bottom bg-slate-50 border-r border-t border-black/5"
 style={{
 height: "50px", // Thickness of the book
 transform: "rotateX(90deg) translateZ(0px)",
 borderRadius: "4px 6px 0 0",
 }}
 >
 {/* Page lines effect on the top */}
 <div className="absolute inset-x-2 bottom-0 h-full flex justify-evenly opacity-[0.03]">
 {Array.from({ length: 40 }).map((_, i) => (
 <div key={i} className="h-[1px] w-full bg-slate-900 my-auto" />
 ))}
 </div>
 </div>

 </div>
 </div>
 </div>
 );
}
