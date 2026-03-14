import ThreeDMarquee from "./3d-marquee";

export default function Demo() {
 return (
 <div className="min-h-screen bg-white flex items-center justify-center p-8">
 <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-100 shadow-2xl bg-slate-50/50 p-4">
 <ThreeDMarquee />
 </div>
 </div>
 );
}
