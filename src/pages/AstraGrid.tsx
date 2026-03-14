import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sun, Zap, Battery, Cloud, TrendingDown } from "lucide-react";

export default function AstraGrid() {
 const [time, setTime] = useState(new Date());
 useEffect(() => {
 const t = setInterval(() => setTime(new Date()), 1000);
 return () => clearInterval(t);
 }, []);

 const hour = time.getHours();
 const solarPct = Math.max(0, Math.min(100, 50 + (hour - 12) * -8 + 50));
 const batteryPct = 72;

 return (
 <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-600 shadow-sm">
 <Sun className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraGrid AI</h1>
 <p className="text-slate-500 font-medium">Smart Energy & Solar Optimization Dashboard</p>
 </div>
 <div className="ml-auto text-slate-400 font-mono font-bold text-sm">{time.toLocaleTimeString()}</div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
 {[
 { label: "Solar Output", val: `${Math.round(solarPct * 0.05 + 0.5)} kW`, pct: solarPct, color: "text-amber-500", bg: "from-amber-400 to-orange-400", icon: Sun },
 { label: "Battery Level", val: `${batteryPct}%`, pct: batteryPct, color: "text-emerald-600", bg: "from-emerald-400 to-teal-500", icon: Battery },
 { label: "Grid Draw", val: "0.8 kW", pct: 16, color: "text-rose-500", bg: "from-rose-400 to-pink-500", icon: TrendingDown },
 ].map((m, i) => (
 <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
 <div className="flex items-center justify-between mb-4">
 <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{m.label}</h3>
 <m.icon className={`w-5 h-5 ${m.color}`} />
 </div>
 <div className="text-3xl font-black text-slate-900 mb-4">{m.val}</div>
 <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
 <div className={`h-full bg-gradient-to-r ${m.bg} rounded-full transition-all duration-1000`} style={{ width: `${m.pct}%` }} />
 </div>
 </div>
 ))}
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
 <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500" /> AI Prediction (Next 6hr)</h3>
 <div className="space-y-3">
 {[
 { time: "14:00", rec: "Stay on Solar — peak output window.", mode: "☀️ Solar" },
 { time: "16:30", rec: "Cloud cover detected. Charge battery now.", mode: "🔋 Charge" },
 { time: "18:00", rec: "Shift to battery. Grid expensive (peak tariff).", mode: "🔋 Battery" },
 { time: "19:30", rec: "Grid load-shedding predicted. Battery critical reserve.", mode: "⚠️ Reserve" },
 ].map((row, i) => (
 <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
 <div className="font-mono font-bold text-slate-500 text-sm w-14 shrink-0">{row.time}</div>
 <div className="flex-1">
 <p className="text-sm font-medium text-slate-700">{row.rec}</p>
 </div>
 <span className="text-xs font-bold bg-white border border-slate-200 px-2.5 py-1 rounded-full whitespace-nowrap">{row.mode}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
 <h3 className="font-bold text-white mb-6 flex items-center gap-2"><Cloud className="w-5 h-5 text-blue-400" /> Today's Weather Context</h3>
 <div className="grid grid-cols-2 gap-4 mb-6">
 {[
 { k: "Peak Sun Hours", v: "6.2 hrs" }, { k: "Cloud Cover", v: "18%" },
 { k: "Temperature", v: "31°C" }, { k: "UV Index", v: "High (8)" }
 ].map((r, i) => (
 <div key={i} className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{r.k}</div>
 <div className="font-black text-white text-lg">{r.v}</div>
 </div>
 ))}
 </div>
 <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
 <p className="text-amber-400 font-bold text-sm">Today is an excellent solar day. AstraGrid recommends fully charging reserves by 15:30 before evening load-shedding window.</p>
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
