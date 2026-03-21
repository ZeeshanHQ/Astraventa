import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Send,
    Settings2,
    Sparkles,
    Bot,
    User,
    X,
    KeyRound,
    Loader2,
    FileText,
    UserCircle,
    Package,
    Wrench,
    CheckCircle2,
    Workflow,
    Cpu,
    Layers,
    ArrowRight,
    ShieldCheck,
    Shapes,
    Boxes,
    Activity
} from "lucide-react";
import { AstraventaLogo } from "@/components/AstraventaLogo";
import { requestSchemaMapping } from "@/lib/flowMappingService";

type Message = {
    id: string;
    role: "user" | "assistant";
    content: string | React.ReactNode;
    timestamp: Date;
};

// Mock Schemas for UI purposes
const schemas = {
    profile: [
        { id: "fullName", label: "Full Name", type: "text", placeholder: "e.g. John Doe" },
        { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
        { id: "age", label: "Age", type: "number", placeholder: "30" },
        { id: "role", label: "Primary Role", type: "select", options: ["Designer", "Engineer", "Manager", "Other"] },
    ],
    order: [
        { id: "product", label: "Product Tier", type: "select", options: ["Starter", "Pro", "Enterprise"] },
        { id: "quantity", label: "Seat Quantity", type: "number", placeholder: "1" },
        { id: "deliveryDate", label: "Target Delivery", type: "date" },
        { id: "notes", label: "Special Instructions", type: "text", placeholder: "Any specific configuration..." },
    ],
    support: [
        { id: "topic", label: "Issue Topic", type: "text", placeholder: "Brief summary of issue" },
        { id: "priority", label: "Priority Level", type: "select", options: ["Low", "Medium", "High", "Critical"] },
        { id: "contactMethod", label: "Preferred Contact", type: "select", options: ["Email", "Phone", "Slack"] },
    ]
};

type ContextType = "profile" | "order" | "support";

const AstraFlow = () => {
    const [activeContext, setActiveContext] = useState<ContextType>("profile");
    const [formData, setFormData] = useState<Record<string, Record<string, string>>>({
        profile: {},
        order: {},
        support: {}
    });

    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            role: "assistant",
            content: "Welcome to AstraFlow. I am your intelligent data orchestration agent. I can map unstructured input directly to your system schemas with 100% precision.",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Settings State
    const [aiProviderKey, setAiProviderKey] = useState("");

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleInputChange = (context: ContextType, fieldId: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [context]: {
                ...prev[context],
                [fieldId]: value
            }
        }));
    };

    const handleSend = async (text: string = input) => {
        if (!text.trim()) return;

        const newUserMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInput("");
        setIsTyping(true);

        try {
            // Send the user input and the currently active schema definitions to the OpenRouter meta-model
            const result = await requestSchemaMapping(text, schemas[activeContext], activeContext);
            
            let responseContent: React.ReactNode;

            if (result.success && result.data && Object.keys(result.data).length > 0) {
                // Instantly sync the structured JSON back into our live UI form
                setFormData(prev => ({
                    ...prev,
                    [activeContext]: {
                        ...prev[activeContext],
                        ...result.data
                    }
                }));

                const mappedCount = Object.keys(result.data).length;
                responseContent = (
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-violet-600 font-bold text-sm">
                            <CheckCircle2 className="w-4 h-4" /> Logic Schema Validated
                        </div>
                        <p>I've extracted the intent parameters and mapped them precisely to the target schema. <strong>{mappedCount} fields</strong> auto-populated successfully.</p>
                    </div>
                );
            } else {
                responseContent = "I analyzed the input, but couldn't identify any components matching the active schema requirements. Could you provide more specific unstructured parameters?";
            }

            const newBotMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: responseContent,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, newBotMsg]);
        } catch (error) {
            console.error(error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "Orchestration node failed or timed out. Please check your connection.",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const tabs = [
        { id: "profile", label: "Identity", icon: UserCircle },
        { id: "order", label: "Payload", icon: Package },
        { id: "support", label: "Triage", icon: Wrench },
    ] as const;

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#4c1d95,transparent)] opacity-40" />
                <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-8">
                                    <Workflow className="w-3.5 h-3.5" />
                                    Intelligent Orchestration
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85]">
                                    Automate <br />
                                    <span className="text-violet-500">Complexity</span>
                                </h1>
                                <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium max-w-xl">
                                    AstraFlow maps unstructured human intent to complex data schemas with zero friction. Build autonomous workflows that bridge the gap between talk and task.
                                </p>
                                <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                                    <Button
                                        onClick={() => document.getElementById('orchestration-lab')?.scrollIntoView({ behavior: 'smooth' })}
                                        size="lg"
                                        className="bg-violet-600 hover:bg-violet-500 text-white px-10 h-16 text-lg font-bold rounded-2xl shadow-2xl shadow-violet-900/40 transition-all group"
                                    >
                                        Start Orchestrating
                                        <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
                                    </Button>
                                    <Button variant="outline" size="lg" className="px-10 h-16 text-lg font-bold rounded-2xl border-slate-700 bg-transparent hover:bg-slate-800 text-white">
                                        View Patterns
                                    </Button>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, rotate: 5 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex-1 relative"
                        >
                            <div className="relative z-10 bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)] p-2">
                                <div className="bg-slate-950 rounded-[2.8rem] p-10 font-mono text-sm overflow-hidden">
                                    <div className="flex gap-4 mb-8">
                                        <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400">
                                            <Shapes className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-xs uppercase tracking-widest opacity-50">Flow Config</div>
                                            <div className="text-violet-400 font-bold">Schema.Identity.Primary</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 opacity-80">
                                        <div className="text-slate-500">{"{"}</div>
                                        <div className="pl-6 flex gap-4">
                                            <span className="text-violet-400">"mapping":</span>
                                            <span className="text-emerald-400">"autonomous"</span>
                                        </div>
                                        <div className="pl-6 flex gap-4">
                                            <span className="text-violet-400">"precision":</span>
                                            <span className="text-emerald-400">0.9998</span>
                                        </div>
                                        <div className="pl-6 flex gap-4">
                                            <span className="text-violet-400">"latency":</span>
                                            <motion.span
                                                animate={{ opacity: [1, 0.5, 1] }}
                                                transition={{ duration: 0.5, repeat: Infinity }}
                                                className="text-amber-400"
                                            >
                                                42ms
                                            </motion.span>
                                        </div>
                                        <div className="text-slate-500">{"}"}</div>
                                    </div>
                                    <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-950" />)}
                                        </div>
                                        <div className="px-4 py-2 rounded-xl bg-violet-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-violet-900/50">
                                            Active Sync
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/30 blur-[60px] rounded-full -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Orchestration Lab Interface */}
            <section id="orchestration-lab" className="py-32 bg-slate-50 border-y border-slate-200 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Context Schema Panel */}
                        <div className="w-full lg:w-[480px] flex flex-col gap-6">
                            <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex flex-col h-[850px]">
                                <div className="p-10 border-b border-slate-100 bg-slate-50/20">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center shadow-xl">
                                            <Boxes className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="font-black text-slate-900 text-xl tracking-tight">Schema Hub</h2>
                                            <p className="text-[10px] font-bold text-violet-600 uppercase tracking-[0.2em]">Target Orchestration</p>
                                        </div>
                                    </div>

                                    <div className="flex p-1.5 bg-slate-200/50 rounded-2xl">
                                        {tabs.map(tab => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveContext(tab.id)}
                                                className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl transition-all ${activeContext === tab.id
                                                        ? 'bg-white text-violet-600 shadow-xl scale-[1.02]'
                                                        : 'text-slate-500 hover:text-slate-700'
                                                    }`}
                                            >
                                                <tab.icon className="w-5 h-5" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                                            Live Schema Mapping
                                        </h3>
                                    </div>

                                    <div className="space-y-8">
                                        {schemas[activeContext].map((field, idx) => (
                                            <motion.div
                                                key={`${activeContext}-${field.id}`}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="space-y-3"
                                            >
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">{field.label}</label>

                                                {field.type === 'select' ? (
                                                    <select
                                                        value={formData[activeContext][field.id] || ""}
                                                        onChange={(e) => handleInputChange(activeContext, field.id, e.target.value)}
                                                        className="w-full px-6 py-4 bg-slate-50 border-slate-200 border-2 rounded-2xl focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 transition-all text-sm font-bold text-slate-900 appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[position:right_1.5rem_center]"
                                                    >
                                                        <option value="" disabled>Awaiting mapping...</option>
                                                        {field.options?.map(opt => (
                                                            <option key={opt} value={opt}>{opt}</option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <Input
                                                        type={field.type}
                                                        placeholder={field.placeholder}
                                                        value={formData[activeContext][field.id] || ""}
                                                        onChange={(e) => handleInputChange(activeContext, field.id, e.target.value)}
                                                        className={`w-full px-6 py-8 bg-slate-50 border-2 border-slate-200 rounded-2xl focus-visible:ring-4 focus-visible:ring-violet-500/10 focus-visible:border-violet-500 transition-all font-bold text-lg placeholder:text-slate-300 ${formData[activeContext][field.id] ? 'bg-violet-50/50 border-violet-200 text-slate-900 animate-in fade-in zoom-in-95 duration-500' : ''
                                                            }`}
                                                    />
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Activity className="w-5 h-5 text-violet-400" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Logic Engine Ready</span>
                                    </div>
                                    <Button
                                        onClick={() => setIsSyncing(true)}
                                        className="bg-violet-600 hover:bg-violet-500 text-white rounded-xl px-8 py-6 font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-violet-900/40"
                                    >
                                        {isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sync to Production"}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Chat Orchestrator Area */}
                        <div className="flex-1 bg-white rounded-[3rem] shadow-3xl shadow-slate-300/50 border border-slate-200/60 overflow-hidden flex flex-col relative h-[850px]">

                            <div className="h-24 border-b border-slate-100 flex justify-between items-center px-10 shrink-0 bg-white/80 backdrop-blur-xl z-20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-600">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="font-black text-slate-900 text-lg tracking-tight">Flow Orchestrator</h2>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Integrated</span>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)} className="text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-2xl w-14 h-14">
                                    <Settings2 className="w-6 h-6" />
                                </Button>
                            </div>

                            {/* Chat Stream */}
                            <div className="flex-1 overflow-y-auto p-12 scroll-smooth bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.05),transparent)]">
                                <div className="max-w-4xl mx-auto space-y-12">
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex gap-8 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                        >
                                            <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center shadow-xl transition-all ${msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-white border-2 border-violet-100 text-violet-600'
                                                }`}>
                                                {msg.role === 'user' ? <User className="w-7 h-7" /> : <AstraventaLogo size="sm" iconOnly />}
                                            </div>
                                            <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[90%] w-full`}>
                                                <div className={`px-8 py-6 rounded-[2.5rem] text-[16px] border shadow-sm ${msg.role === 'user'
                                                        ? 'bg-slate-900 text-white border-slate-800 rounded-tr-md'
                                                        : 'bg-white border-slate-100 text-slate-700 rounded-tl-md w-full'
                                                    }`}>
                                                    {msg.content}
                                                </div>
                                                <span className="text-[10px] font-black text-slate-400 mt-4 px-4 uppercase tracking-[0.2em]">
                                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex gap-8"
                                        >
                                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border-2 border-violet-100 text-violet-600 flex items-center justify-center">
                                                <AstraventaLogo size="sm" iconOnly />
                                            </div>
                                            <div className="bg-white border border-slate-100 px-8 py-6 rounded-[2.5rem] rounded-tl-md flex items-center gap-3 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-violet-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                <div className="w-2.5 h-2.5 bg-violet-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                <div className="w-2.5 h-2.5 bg-violet-600 rounded-full animate-bounce" />
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-10 bg-white border-t border-slate-100">
                                <div className="max-w-4xl mx-auto relative group">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Feed the orchestrator with unstructured intent..."
                                        className="w-full pl-10 pr-20 py-10 bg-slate-50 border-2 border-slate-200 focus-visible:ring-violet-500/20 focus-visible:border-violet-500 rounded-3xl shadow-inner text-lg font-medium placeholder:text-slate-400"
                                    />
                                    <Button
                                        onClick={() => handleSend()}
                                        disabled={!input.trim() || isTyping}
                                        size="icon"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-xl shadow-violet-900/20 "
                                    >
                                        {isTyping ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
                                    </Button>
                                </div>
                                <div className="flex justify-between items-center mt-6 px-4">
                                    <div className="flex gap-4">
                                        <button onClick={() => handleSend("Map Alex Mercer as a Senior Engineer")} className="text-[10px] font-black text-violet-600 hover:text-violet-800 uppercase tracking-widest transition-colors">Apply Identity Template</button>
                                        <button onClick={() => handleSend("Draft high priority support ticket")} className="text-[10px] font-black text-violet-600 hover:text-violet-800 uppercase tracking-widest transition-colors">Initialize Triage</button>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                        AstraFlow Engine v1.0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Architecture */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-6">Built for Zero-Friction Workflows</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">AstraFlow eliminates manual data entry by semantically understanding the relationships between your components.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Semantic Mapping", desc: "Understands intent, not just keywords.", icon: Cpu },
                            { title: "Universal Adapters", desc: "Integrates with any SQL/NoSQL schema.", icon: Layers },
                            { title: "Hardened Security", desc: "Enterprise-grade encryption at rest.", icon: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-violet-50 hover:border-violet-100 transition-all group">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm group- transition-transform">
                                    <item.icon className="w-8 h-8 text-violet-600" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-none">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            {/* Settings Modal */}
            <AnimatePresence>
                {showSettings && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSettings(false)}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[100] transition-opacity"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[3rem] shadow-[0_40px_150px_-20px_rgba(0,0,0,0.5)] z-[101] overflow-hidden border border-slate-200"
                        >
                            <div className="px-12 py-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <div className="flex items-center gap-5">
                                    <div className="p-4 bg-violet-600 rounded-2xl shadow-xl shadow-violet-200">
                                        <KeyRound className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="font-black text-2xl tracking-tighter text-slate-900 leading-none mb-1">Auth Configuration</h2>
                                        <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest">Logic Node Access</p>
                                    </div>
                                </div>
                                <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-900 p-3 rounded-full hover:bg-slate-100 transition-all">
                                    <X className="w-8 h-8" />
                                </button>
                            </div>

                            <div className="p-12 space-y-10">
                                <div className="space-y-4">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">LLM Orchestration Key</label>
                                        <Input
                                            type="password"
                                            placeholder="sk-..."
                                            value={aiProviderKey}
                                            onChange={(e) => setAiProviderKey(e.target.value)}
                                            className="bg-slate-50 border-2 border-slate-100 h-20 rounded-[1.5rem] focus-visible:ring-violet-500/30 text-slate-900 font-mono text-lg shadow-inner"
                                        />
                                    </div>
                                </div>

                                <div className="bg-violet-50 border-2 border-violet-100 p-6 rounded-[2rem]">
                                    <p className="text-xs text-violet-800 leading-relaxed font-bold">
                                        Keys are stored locally and never touch our servers. AstraFlow uses client-side orchestration for maximum security and privacy.
                                    </p>
                                </div>

                                <Button
                                    onClick={() => setShowSettings(false)}
                                    className="w-full bg-slate-900 hover:bg-violet-600 text-white rounded-[1.8rem] h-20 text-xl font-black shadow-2xl transition-all py-8"
                                >
                                    Verify Logic Token
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Sync Global Overlay */}
            <AnimatePresence>
                {isSyncing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-violet-600/95 backdrop-blur-2xl"
                    >
                        <div className="text-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-32 h-32 border-8 border-white/20 border-t-white rounded-full mx-auto mb-10"
                            />
                            <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">Syncing Orchestration...</h2>
                            <p className="text-violet-100 font-bold uppercase tracking-widest text-sm opacity-60">Pushing Schema Changes to Production Nodes</p>
                            <Button
                                onClick={() => setIsSyncing(false)}
                                variant="ghost"
                                className="mt-12 text-white/50 hover:text-white hover:bg-white/10 px-10 rounded-2xl"
                            >
                                Cancel Sync Process
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AstraFlow;
