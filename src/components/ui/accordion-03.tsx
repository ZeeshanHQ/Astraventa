/* eslint-disable @next/next/no-img-element */
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const items = [
 {
 id: "01",
 title: "Hybrid Technology Model",
 img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
 content:
 "Astraventa is a unique synergy of an elite engineering firm and a product studio. We don't just build software; we architect entire product ecosystems that scale from day one.",
 },
 {
 id: "02",
 title: "Autonomous AI Agents",
 img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
 content:
 "Our agents are built using the Astra-Reasoning engine. They reason through complex objectives, plan multi-step workflows, and execute tasks across your tech stack independently.",
 },
 {
 id: "03",
 title: "Enterprise Integration",
 img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070",
 content:
 "Our AstraTools network is designed for high-liability integration. Whether you use SAP, Salesforce, or proprietary legacy systems, we build the bridges that unify your data and logic.",
 },
 {
 id: "04",
 title: "High-Velocity Engineering",
 img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
 content:
 "It’s our commitment to quality at speed. We use blueprint-driven development and atomic design systems to deliver enterprise-grade digital experiences in a fraction of traditional timelines.",
 },
 {
 id: "05",
 title: "Data Sovereignty & Security",
 img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
 content:
 "Security is baked into our DNA. We implement end-to-end encryption, regular autonomous pentesting, and strict data isolation protocols to ensure your intelligence remains yours.",
 },
];


export function Accordion03() {
 return (
 <div className="w-full border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm">
 <Accordion type="single" defaultValue="02" collapsible className="w-full">
 {items.map((item) => (
 <AccordionItem className="relative border-b border-slate-100 last:border-0" value={item.id} key={item.id}>
 <AccordionTrigger className="pl-8 py-6 hover:no-underline [&>svg]:hidden text-left">
 <div className="flex items-center gap-4">
 <span className="text-xs font-mono text-primary font-bold opacity-50">{item.id}</span>
 <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{item.title}</h3>
 </div>
 </AccordionTrigger>
 <AccordionContent className="text-slate-500 w-full grid md:grid-cols-2">
 <div className="px-8 pb-8 pt-2 space-y-6">
 <p className="text-lg leading-relaxed font-semibold"> {item.content}</p>
 <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6">Explore Capability</Button>
 </div>
 <div className="relative h-64 md:h-auto overflow-hidden">
 <img
 className="h-full w-full md:border-l border-t md:border-t-0 md:absolute object-cover right-0 top-0 grayscale hover:grayscale-0 transition-all duration-700"
 src={item.img}
 alt={item.title}
 aria-hidden="true"
 />
 <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
 </div>
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 );
}
