import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Radio, Wifi, WifiOff, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function AstraRelay() {
 const [messages, setMessages] = useState([
 { from: "Node-B", text: "AstraRelay handshake confirmed. Signal: BT-5.2 LR", ts: "08:41" },
 { from: "Node-A", text: "Sending patient vitals data packet (2.1KB)...", ts: "08:41" },
 { from: "Node-B", text: "Packet received. CRC check: PASS. Forwarding to Node-C.", ts: "08:42" }
 ]);
 const [input, setInput] = useState("");

 const send = () => {
 if (!input.trim()) return;
 setMessages(prev => [...prev, { from: "Node-A (You)", text: input, ts: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
 setInput("");
 };

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh]">
 <div className="flex items-center gap-3 mb-10">
 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
 <Radio className="w-6 h-6" />
 </div>
 <div>
 <h1 className="text-3xl font-black text-slate-900">AstraRelay AI</h1>
 <p className="text-slate-500 font-medium">Offline Mesh Network AI Communication</p>
 </div>
 <div className="ml-auto flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5">
 <WifiOff className="w-3.5 h-3.5 text-rose-400" />
 <span className="text-xs font-bold text-slate-300">Internet: OFF</span>
 <span className="w-px h-4 bg-slate-700" />
 <Radio className="w-3.5 h-3.5 text-primary animate-pulse" />
 <span className="text-xs font-bold text-primary">Mesh: ACTIVE</span>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="md:col-span-1 space-y-4">
 <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
 <h3 className="font-bold text-slate-700 text-sm uppercase tracking-widest mb-4">Active Nodes</h3>
 {[
 { id: "Node-A", status: "You", signal: "HIGH", color: "bg-emerald-500" },
 { id: "Node-B", status: "Clinic", signal: "HIGH", color: "bg-emerald-500" },
 { id: "Node-C", status: "Server", signal: "MED", color: "bg-amber-500" },
 ].map((node, i) => (
 <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-2">
 <div className="flex items-center gap-3">
 <span className={`w-2.5 h-2.5 rounded-full ${node.color}`} />
 <div>
 <div className="font-bold text-slate-800 text-sm">{node.id}</div>
 <div className="text-xs text-slate-400">{node.status}</div>
 </div>
 </div>
 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{node.signal}</span>
 </div>
 ))}
 </div>
 <div className="bg-primary/10 rounded-3xl p-6 border border-primary/20">
 <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-3">Transport Layer</h4>
 <div className="space-y-2 text-xs font-mono font-medium text-primary">
 <div>Protocol: BT 5.2 Long Range</div>
 <div>Enc: AES-256-GCM</div>
 <div>Relay Hops: 2</div>
 <div>Latency: ~140ms</div>
 </div>
 </div>
 </div>

 <div className="md:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col overflow-hidden shadow-2xl" style={{ minHeight: 450 }}>
 <div className="p-4 border-b border-slate-800 flex items-center gap-2">
 <MessageCircle className="w-4 h-4 text-primary" />
 <span className="font-bold text-slate-300 text-sm tracking-widest uppercase">Mesh Chat Log</span>
 </div>
 <div className="flex-1 p-6 space-y-4 overflow-y-auto">
 {messages.map((msg, i) => (
 <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} key={i} className={`flex gap-3 ${msg.from.includes("You") ? "flex-row-reverse" : ""}`}>
 <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-black text-slate-300 shrink-0">
 {msg.from.split("-")[1]?.[0] || "Y"}
 </div>
 <div>
 <div className={`text-[10px] font-bold mb-1 ${msg.from.includes("You") ? "text-right text-primary" : "text-slate-500"}`}>{msg.from} · {msg.ts}</div>
 <div className={`text-sm p-3 rounded-2xl font-medium ${msg.from.includes("You") ? "bg-primary/10 text-white rounded-tr-none" : "bg-slate-800 text-slate-300 border border-slate-700 rounded-tl-none"}`}>{msg.text}</div>
 </div>
 </motion.div>
 ))}
 </div>
 <div className="p-4 border-t border-slate-800 flex gap-3">
 <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary/20" placeholder="Relay a message via Mesh..." />
 <Button onClick={send} className="bg-primary/10 hover:bg-primary/10 text-white rounded-xl px-6"><Send className="w-4 h-4" /></Button>
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
