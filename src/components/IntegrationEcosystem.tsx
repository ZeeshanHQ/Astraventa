import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Zap, Database, Search, Bot, Webhook, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link, useNavigate } from "react-router-dom";

const techNodes = [
    { id: 1, name: "Slack", icon: MessageSquare, angle: 0, distance: 180 },
    { id: 2, name: "Zapier", icon: Zap, angle: 51, distance: 160 },
    { id: 3, name: "Supabase", icon: Database, angle: 102, distance: 200 },
    { id: 4, name: "Google", icon: Search, angle: 154, distance: 170 },
    { id: 5, name: "OpenAI", icon: Bot, angle: 205, distance: 190 },
    { id: 6, name: "Webhooks", icon: Webhook, angle: 257, distance: 150 },
    { id: 7, name: "Cloud", icon: Cloud, angle: 308, distance: 180 },
];

export const IntegrationEcosystem = () => {
    const navigate = useNavigate();
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);

    return (
        <section className="relative py-16 md:py-20 px-6 bg-white overflow-hidden border-t border-black/[0.06]">
            {/* Blueprint Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* LEFT: Orbital Design */}
                <div className="relative w-full h-[560px] flex items-center justify-center order-2 lg:order-1">
                    {/* Central Glow */}
                    <div className="absolute w-64 h-64 bg-primary rounded-full blur-[100px] opacity-10 pointer-events-none" />

                    {/* Center Node */}
                    <div className="relative z-20 w-28 h-28 bg-white rounded-full border border-slate-200 shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] flex flex-col items-center justify-center overflow-hidden">
                        <div className="w-3.5 h-3.5 rounded-full bg-primary mb-1.5 animate-pulse" />
                        <span className="text-[10px] font-display font-normal tracking-widest text-primary uppercase text-center leading-tight">
                            AI<br />Core
                        </span>
                    </div>

                    {/* Satellites & Neural Paths */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {techNodes.map((node) => {
                            const rad = (node.angle * Math.PI) / 180;
                            const x = Math.cos(rad) * node.distance;
                            const y = Math.sin(rad) * node.distance;
                            const isHovered = hoveredNode === node.id;

                            const Icon = node.icon;

                            return (
                                <div key={node.id} className="absolute inset-0 flex items-center justify-center">
                                    {/* Neural Path SVG Line */}
                                    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2={`calc(50% + ${x}px)`}
                                            y2={`calc(50% + ${y}px)`}
                                            stroke={isHovered ? "hsl(var(--primary))" : "#e2e8f0"}
                                            strokeWidth={isHovered ? "2" : "1"}
                                            strokeDasharray={isHovered ? "0" : "4 4"}
                                            className="transition-all duration-300"
                                        />

                                        {/* Traveling Light Pulse */}
                                        {!isHovered && (
                                            <motion.circle
                                                r="3"
                                                fill="hsl(var(--primary))"
                                                initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                                                animate={{
                                                    cx: [`50%`, `calc(50% + ${x}px)`],
                                                    cy: [`50%`, `calc(50% + ${y}px)`],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 2 + Math.random(),
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: Math.random() * 2
                                                }}
                                            />
                                        )}
                                    </svg>

                                    {/* Satellite Node */}
                                    <div
                                        className="absolute pointer-events-auto transition-transform duration-300"
                                        style={{ transform: `translate(${x}px, ${y}px)` }}
                                        onMouseEnter={() => setHoveredNode(node.id)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                    >
                                        <div className={`relative w-10 h-10 rounded-full bg-white border flex items-center justify-center cursor-pointer transition-all duration-300 ${isHovered ? 'border-primary shadow-[0_0_16px_rgba(var(--primary-rgb),0.2)] scale-110' : 'border-slate-200 shadow-sm'}`}>
                                            <Icon className={`w-4 h-4 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-slate-400'}`} />

                                            {/* Hover Label */}
                                            <div className={`absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 transform-none' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                                <div className="bg-slate-900 text-white text-[9px] font-display tracking-widest uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5">
                                                    <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                                    {node.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT: Text content */}
                <div className="order-1 lg:order-2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08]">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-[11px] font-display font-normal text-black/60 uppercase tracking-[0.15em]">Tech Ecosystem</span>
                        </div>

                        <h2 className="font-heading font-normal text-black uppercase leading-[1.2] tracking-[0.15em] text-2xl md:text-3xl lg:text-4xl">
                            Seamless Integration.<br />
                            <span className="text-primary italic">Any Stack.</span>
                        </h2>

                        <p className="text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] max-w-lg">
                            Whether you are built on legacy infrastructure or the latest edge-ready frameworks, our agents adapt to your ecosystem perfectly.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                            <ShinyButton
                                className="h-10 px-6 rounded-full font-display font-medium text-[12px] uppercase tracking-[0.1em]"
                                onClick={() => navigate('/contact')}
                            >
                                <span className="relative z-10 flex items-center pt-[2px]">Start Integration <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></span>
                            </ShinyButton>
                            <Button
                                variant="ghost"
                                className="h-10 px-4 text-black/70 hover:text-black hover:bg-transparent font-display font-medium text-[12px] uppercase tracking-[0.08em] shadow-none"
                                asChild
                            >
                                <Link to="/docs/api">View Tech Docs <ArrowRight className="ml-1 w-3.5 h-3.5 text-primary" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
