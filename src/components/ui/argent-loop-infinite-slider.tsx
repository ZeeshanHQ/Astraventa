import * as React from "react";
import { Laptop, Cpu, Layout as LayoutIcon, Cloud, Building2, ArrowRight } from "lucide-react";

interface ProjectData {
 title: string;
 image: string;
 category: string;
 year: string;
 description: string;
 icon: React.ReactNode;
}

const PROJECT_DATA: ProjectData[] = [
 {
 title: "Discovery & Strategy",
 image: "https://images.unsplash.com/photo-1541888086225-b152d5b6ee55?q=80&w=2560&auto=format&fit=crop",
 category: "Phase 01",
 year: "Planning",
 description: "Deep technical blueprinting and scalable architectural planning.",
 icon: <LayoutIcon className="w-4 h-4" />,
 },
 {
 title: "Prototyping & UX",
 image: "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=2070&auto=format&fit=crop",
 category: "Phase 02",
 year: "Design",
 description: "High-fidelity interface design and dynamic user flow mapping.",
 icon: <Laptop className="w-4 h-4" />,
 },
 {
 title: "Core Architecture",
 image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
 category: "Phase 03",
 year: "Engineering",
 description: "Secure, scalable backend infrastructure and custom AI model integration.",
 icon: <Cpu className="w-4 h-4" />,
 },
 {
 title: "Security & Testing",
 image: "https://images.unsplash.com/photo-1614064641936-3899f1708848?q=80&w=2072&auto=format&fit=crop",
 category: "Phase 04",
 year: "Validation",
 description: "Rigorous QA, penetration testing, and automated security audits.",
 icon: <Building2 className="w-4 h-4" />,
 },
 {
 title: "Launch & Velocity",
 image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
 category: "Phase 05",
 year: "Deployment",
 description: "Global deployment, real-time monitoring, and continuous scaling.",
 icon: <Cloud className="w-4 h-4" />,
 },
];

const CONFIG = {
 SCROLL_SPEED: 0.75,
 LERP_FACTOR: 0.05,
 BUFFER_SIZE: 5,
 MAX_VELOCITY: 150,
 SNAP_DURATION: 500,
};

const lerp = (start: number, end: number, factor: number) =>
 start + (end - start) * factor;

const getProjectData = (index: number) => {
 return PROJECT_DATA[index];
};

const getProjectNumber = (index: number) => {
 return (index + 1).toString().padStart(2, "0");
};

export function ArgentLoopInfiniteSlider() {
 const state = React.useRef({
 currentY: 0,
 targetY: 0,
 isDragging: false,
 isSnapping: false,
 snapStart: { time: 0, y: 0, target: 0 },
 lastScrollTime: Date.now(),
 dragStart: { y: 0, scrollY: 0 },
 projectHeight: 0,
 minimapHeight: 250,
 });

 const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
 const minimapRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
 const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
 const requestRef = React.useRef<number>();

 const updateParallax = (
 img: HTMLImageElement | null,
 scroll: number,
 index: number,
 height: number
 ) => {
 if (!img) return;
 
 if (!img.dataset.parallaxCurrent) {
 img.dataset.parallaxCurrent = "0";
 }
 
 let current = parseFloat(img.dataset.parallaxCurrent);
 const target = (-scroll - index * height) * 0.2;
 current = lerp(current, target, 0.1);
 
 if (Math.abs(current - target) > 0.01) {
 img.style.transform = `translateY(${current}px) scale(1.1)`;
 img.dataset.parallaxCurrent = current.toString();
 }
 };

 const updateSnap = () => {
 const s = state.current;
 const progress = Math.min(
 (Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION,
 1
 );
 const eased = 1 - Math.pow(1 - progress, 3);
 s.targetY =
 s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
 if (progress >= 1) s.isSnapping = false;
 };

 const snapToProject = () => {
 const s = state.current;
 const current = Math.round(-s.targetY / s.projectHeight);
 const target = -current * s.projectHeight;
 s.isSnapping = true;
 s.snapStart = {
 time: Date.now(),
 y: s.targetY,
 target: target,
 };
 };

 const updatePositions = () => {
 const s = state.current;
 const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;

 projectsRef.current.forEach((el, index) => {
 const y = index * s.projectHeight + s.currentY;
 el.style.transform = `translateY(${y}px)`;
 const img = el.querySelector("img");
 if (img) updateParallax(img, s.currentY, index, s.projectHeight);
 });

 minimapRef.current.forEach((el, index) => {
 const y = index * s.minimapHeight + minimapY;
 el.style.transform = `translateY(${y}px)`;
 const img = el.querySelector("img");
 if (img) updateParallax(img, minimapY, index, s.minimapHeight);
 });

 infoRef.current.forEach((el, index) => {
 const y = index * s.minimapHeight + minimapY;
 el.style.transform = `translateY(${y}px)`;
 });
 };

 const animationLoop = () => {
 const s = state.current;
 const now = Date.now();

 if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
 const snapPoint =
 -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
 if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
 }

 if (s.isSnapping) updateSnap();
 if (!s.isDragging) {
 s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
 }

 updatePositions();
 requestRef.current = requestAnimationFrame(animationLoop);
 };

 const containerRef = React.useRef<HTMLDivElement>(null);

 React.useEffect(() => {
 state.current.projectHeight = window.innerHeight;
 const container = containerRef.current;
 if (!container) return;
 
 const onWheel = (e: WheelEvent) => {
 const s = state.current;
 const minBound = -(PROJECT_DATA.length - 1) * s.projectHeight;
 const maxBound = 0;

 // Allow natural scroll if we are at bounds and scrolling away from them
 if (s.targetY >= maxBound && e.deltaY < 0) return;
 if (s.targetY <= minBound && e.deltaY > 0) return;

 // Capture scroll
 e.preventDefault();
 s.isSnapping = false;
 s.lastScrollTime = Date.now();
 
 const delta = Math.max(
 Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
 -CONFIG.MAX_VELOCITY
 );
 
 s.targetY = Math.max(minBound, Math.min(maxBound, s.targetY - delta));
 };

 const onTouchStart = (e: TouchEvent) => {
 const s = state.current;
 s.isDragging = true;
 s.isSnapping = false;
 s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
 s.lastScrollTime = Date.now();
 }

 const onTouchMove = (e: TouchEvent) => {
 const s = state.current;
 if (!s.isDragging) return;

 const deltaY = e.touches[0].clientY - s.dragStart.y;
 const minBound = -(PROJECT_DATA.length - 1) * s.projectHeight;
 const maxBound = 0;

 // Allow natural scroll if at bounds
 if (s.targetY >= maxBound && deltaY > 0) {
 s.isDragging = false;
 return;
 }
 if (s.targetY <= minBound && deltaY < 0) {
 s.isDragging = false;
 return;
 }

 e.preventDefault();
 s.targetY = Math.max(minBound, Math.min(maxBound, s.dragStart.scrollY + deltaY * 1.5));
 s.lastScrollTime = Date.now();
 }

 const onTouchEnd = () => {
 state.current.isDragging = false;
 }

 const onResize = () => {
 state.current.projectHeight = window.innerHeight;
 if (container) {
 container.style.height = `${window.innerHeight}px`;
 }
 }

 container.addEventListener("wheel", onWheel, { passive: false });
 container.addEventListener("touchstart", onTouchStart, { passive: true });
 container.addEventListener("touchmove", onTouchMove, { passive: false });
 container.addEventListener("touchend", onTouchEnd, { passive: true });
 window.addEventListener("resize", onResize);
 
 onResize();

 requestRef.current = requestAnimationFrame(animationLoop);

 return () => {
 container.removeEventListener("wheel", onWheel);
 container.removeEventListener("touchstart", onTouchStart);
 container.removeEventListener("touchmove", onTouchMove);
 container.removeEventListener("touchend", onTouchEnd);
 window.removeEventListener("resize", onResize);
 if (requestRef.current) cancelAnimationFrame(requestRef.current);
 };
 }, []);

 const indices = [0, 1, 2, 3, 4];

 return (
 <div ref={containerRef} className="parallax-container relative w-full h-screen overflow-hidden bg-slate-950">
 {/* Main Vision List */}
 <ul className="project-list absolute inset-0 w-full h-full list-none p-0 m-0">
 {indices.map((i) => {
 const data = getProjectData(i);
 return (
 <div
 key={i}
 className="project absolute top-0 left-0 w-full h-full overflow-hidden will-change-transform"
 ref={(el) => {
 if (el) projectsRef.current.set(i, el);
 else projectsRef.current.delete(i);
 }}
 >
 <div className="project-img-wrapper relative w-full h-full">
 <img 
 src={data.image} 
 alt={data.title} 
 className="absolute top-0 left-0 w-full h-full object-cover grayscale-[20%] transition-filter duration-500 hover:grayscale-0 scale-110"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/60" />
 </div>
 </div>
 );
 })}
 </ul>

 {/* Control / Minimap Overlay */}
 <div className="minimap absolute bottom-12 right-12 z-50 w-[350px] pointer-events-none sm:pointer-events-auto">
 <div className="minimap-wrapper relative flex gap-6 items-end p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
 {/* Static Preview Image */}
 <div className="minimap-img-preview relative w-32 h-[200px] overflow-hidden rounded-lg border border-white/10">
 {indices.map((i) => {
 const data = getProjectData(i);
 return (
 <div
 key={i}
 className="minimap-img-item absolute top-0 left-0 w-full h-full overflow-hidden will-change-transform"
 ref={(el) => {
 if (el) minimapRef.current.set(i, el);
 else minimapRef.current.delete(i);
 }}
 >
 <img src={data.image} alt={data.title} className="w-full h-full object-cover scale-[1.5]" />
 </div>
 );
 })}
 </div>

 {/* Info List */}
 <div className="minimap-info-list relative flex-1 h-[200px] overflow-hidden">
 {indices.map((i) => {
 const data = getProjectData(i);
 const num = getProjectNumber(i);
 return (
 <div
 key={i}
 className="minimap-item-info absolute top-0 left-0 w-full h-full flex flex-col justify-center will-change-transform"
 ref={(el) => {
 if (el) infoRef.current.set(i, el);
 else infoRef.current.delete(i);
 }}
 >
 <div className="flex items-center gap-3 mb-2">
 <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">{num}</span>
 <div className="h-px bg-white/10 flex-1" />
 </div>
 
 <h3 className="text-xl font-bold text-white mb-1 group flex items-center gap-2">
 {data.title}
 <ArrowRight className="w-4 h-4 text-white/0 -translate-x-2 group-hover:text-white/100 transition-all" />
 </h3>
 
 <div className="flex items-center gap-2 mb-4">
 <span className="p-1 bg-white/5 rounded text-white/60">
 {data.icon}
 </span>
 <p className="text-xs font-medium text-white/40 uppercase tracking-wider">{data.category} — {data.year}</p>
 </div>
 
 <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">
 {data.description}
 </p>
 </div>
 );
 })}
 </div>
 </div>
 </div>

 {/* Aesthetic Overlays */}
 <div className="absolute top-12 left-12 z-50">
 <div className="flex flex-col gap-1">
 <span className="text-3xl font-black text-white/10 tracking-tighter uppercase leading-none">Astraventa</span>
 <span className="text-[10px] font-medium text-[#2910E5] tracking-[0.3em] uppercase ml-1">The Engineering Sequence</span>
 </div>
 </div>

 <div className="absolute bottom-12 left-12 z-50 flex items-center gap-4 text-white/30 text-[10px] uppercase tracking-[0.2em]">
 <div className="flex flex-col">
 <span>Scroll to explore</span>
 <span>Vision Sequence</span>
 </div>
 <div className="w-px h-8 bg-white/20" />
 <div className="flex flex-col">
 <span>Engineered by</span>
 <span className="text-white/60 font-bold">Astraventa AI</span>
 </div>
 </div>
 </div>
 );
}
