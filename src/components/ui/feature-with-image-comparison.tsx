import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

function Feature() {
 const [inset, setInset] = useState<number>(50);
 const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

 const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
 if (!onMouseDown) return;

 const rect = e.currentTarget.getBoundingClientRect();
 let x = 0;

 if ("touches" in e && e.touches.length > 0) {
 x = e.touches[0].clientX - rect.left;
 } else if ("clientX" in e) {
 x = e.clientX - rect.left;
 }
 
 const percentage = (x / rect.width) * 100;
 setInset(Math.max(0, Math.min(100, percentage)));
 };

 return (
 <div className="w-full py-20 lg:py-32 bg-white">
 <div className="max-w-[1400px] mx-auto px-6">
 <div className="flex flex-col gap-6">
 <div>
 <Badge variant="outline" className="px-4 py-1.5 border-slate-200 text-[#0d59f2] font-black uppercase tracking-widest text-[10px] rounded-full">
 Design Evolution
 </Badge>
 </div>
 <div className="flex gap-4 flex-col">
 <h2 className="text-4xl md:text-7xl font-black tracking-tighter lg:max-w-2xl text-slate-900 leading-[0.9]">
 From Blueprint to <br />
 <span className="text-[#0d59f2]">High-Fidelity</span> Reality.
 </h2>
 <p className="text-xl max-w-2xl leading-relaxed tracking-tight text-slate-500 font-medium">
 Compare our rigorous wireframing phase with the final high-performance deployment. Engineered precision at every pixel, ensuring functional aesthetics that scale.
 </p>
 </div>
 <div className="pt-12 w-full">
 <div
 className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 select-none cursor-ew-resize bg-slate-50"
 onMouseMove={onMouseMove}
 onMouseUp={() => setOnMouseDown(false)}
 onMouseLeave={() => setOnMouseDown(false)}
 onTouchMove={onMouseMove}
 onTouchEnd={() => setOnMouseDown(false)}
 >
 <div
 className="bg-[#0d59f2] h-full w-0.5 absolute z-20 top-0 -ml-[1px] select-none pointer-events-none"
 style={{
 left: inset + "%",
 }}
 >
 <div className="absolute top-0 bottom-0 left-[-15px] right-[-15px] cursor-ew-resize pointer-events-auto"
 onMouseDown={(e) => {
 setOnMouseDown(true);
 onMouseMove(e);
 }}
 onTouchStart={(e) => {
 setOnMouseDown(true);
 onMouseMove(e);
 }}
 />
 <button
 className="bg-white border-2 border-[#0d59f2] text-[#0d59f2] rounded-full transition-all w-10 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-5 z-30 flex justify-center items-center shadow-xl"
 >
 <GripVertical className="h-5 w-5 select-none" />
 </button>
 </div>

 {/* High Fidelity Image (After) */}
 <img
 src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop"
 alt="High-Fidelity UI"
 className="absolute left-0 top-0 z-10 w-full h-full object-cover select-none pointer-events-none"
 style={{
 clipPath: "inset(0 0 0 " + inset + "%)",
 }}
 />

 {/* Wireframe Image (Before) */}
 <img
 src="https://images.unsplash.com/photo-1581291518066-6ee5a47e62a8?q=80&w=2070&auto=format&fit=crop"
 alt="Wireframe Blueprint"
 className="absolute left-0 top-0 w-full h-full object-cover select-none pointer-events-none grayscale opacity-40 bg-slate-100"
 />
 
 {/* Labels */}
 <div className="absolute top-8 left-8 z-20 pointer-events-none">
 <div className="bg-white/90 backdrop-blur-sm border border-slate-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-slate-400 tracking-widest shadow-sm">
 Blueprint / Analysis
 </div>
 </div>
 <div className="absolute top-8 right-8 z-20 pointer-events-none text-right">
 <div className="bg-[#0d59f2]/90 backdrop-blur-sm border border-[#0d59f2]/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-white tracking-widest shadow-sm">
 High-Fidelity / Production
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}

export { Feature };
