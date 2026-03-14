import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

// ─── Marquee Primitive ─────────────────────────────────────────────────────────
interface MarqueeProps {
 children: ReactNode;
 pauseOnHover?: boolean;
 reverse?: boolean;
 className?: string;
 speed?: number;
}

function Marquee({
 children,
 pauseOnHover = false,
 reverse = false,
 className,
 speed = 40,
}: MarqueeProps) {
 return (
 <div
 className={cn(
 "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
 className
 )}
 style={{ "--duration": `${speed}s` } as React.CSSProperties}
 >
 <div
 className={cn(
 "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
 reverse && "[animation-direction:reverse]",
 pauseOnHover && "group-hover:[animation-play-state:paused]"
 )}
 >
 {children}
 </div>
 <div
 className={cn(
 "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
 reverse && "[animation-direction:reverse]",
 pauseOnHover && "group-hover:[animation-play-state:paused]"
 )}
 aria-hidden="true"
 >
 {children}
 </div>
 </div>
 );
}

// ─── Branding-themed image sets ────────────────────────────────────────────────
const imagesTop = [
 "https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?w=400&h=400&fit=crop", // abstract brand colors
 "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop", // design gradient
 "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", // brand identity
 "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=400&fit=crop", // typography
 "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop", // vivid abstract
];

const imagesBottom = [
 "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop", // flat design layers
 "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=400&h=400&fit=crop", // logo concept
 "https://images.unsplash.com/photo-1561070791-36c11301b3ab?w=400&h=400&fit=crop", // minimal design
 "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop", // creative palette
 "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop", // gradient sphere
];

// ─── Scramble Button ───────────────────────────────────────────────────────────
function ScrambleButton({ href, label }: { href: string; label: string }) {
 const [displayText, setDisplayText] = useState(label);
 const [isScrambling, setIsScrambling] = useState(false);
 const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";

 const scramble = () => {
 if (isScrambling) return;
 setIsScrambling(true);
 let iteration = 0;
 const interval = setInterval(() => {
 setDisplayText(
 label
 .split("")
 .map((letter, index) => {
 if (index < iteration) return label[index];
 return chars[Math.floor(Math.random() * chars.length)];
 })
 .join("")
 );
 if (iteration >= label.length) {
 clearInterval(interval);
 setIsScrambling(false);
 }
 iteration += 1 / 3;
 }, 30);
 };

 return (
 <Link
 to={href}
 onMouseEnter={scramble}
 className="inline-block px-8 py-4 bg-[#2910E5] text-white rounded-full font-black font-heading hover:bg-[#2910E5]/90 transition-all shadow-lg shadow-[#2910E5]/25 text-base tracking-tight"
 >
 {displayText}
 </Link>
 );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export function BrandingCTAWithMarquee() {
 return (
 <div className="relative w-full bg-white overflow-hidden border-t border-slate-100">
 <div className="container mx-auto px-6 lg:px-12 py-24">
 <div className="grid lg:grid-cols-2 gap-12 items-center">

 {/* Left: Content */}
 <div className="space-y-8">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
 <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
 <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">Brand Identity Studio</span>
 </div>

 <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-tight tracking-tight text-slate-900">
 Build a Brand{" "}
 <span className="text-[#2910E5]">The World</span>{" "}
 Won't Forget.
 </h2>

 <div className="space-y-1 text-slate-500 font-medium">
 <p className="text-base">Logo systems. Typography. Motion identity.</p>
 <p className="text-base">From strategy to style guide — fully engineered.</p>
 </div>

 <ScrambleButton href="/contact" label="Start Your Identity" />
 </div>

 {/* Right: Dual Marquee */}
 <div className="space-y-4 overflow-hidden">
 <Marquee speed={28} reverse pauseOnHover className="[--gap:1rem]">
 {imagesTop.map((src, idx) => (
 <div
 key={idx}
 className="relative w-44 h-44 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm"
 >
 <img
 src={src}
 alt={`Brand creative ${idx + 1}`}
 className="w-full h-full object-cover transition-transform duration-500"
 />
 </div>
 ))}
 </Marquee>

 <Marquee speed={28} pauseOnHover className="[--gap:1rem]">
 {imagesBottom.map((src, idx) => (
 <div
 key={idx}
 className="relative w-44 h-44 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm"
 >
 <img
 src={src}
 alt={`Brand creative ${idx + 5}`}
 className="w-full h-full object-cover transition-transform duration-500"
 />
 </div>
 ))}
 </Marquee>
 </div>

 </div>
 </div>
 </div>
 );
}
