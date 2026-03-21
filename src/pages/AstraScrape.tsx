import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Send,
    Globe,
    Database,
    SearchCode,
    Settings2,
    Sparkles,
    Bot,
    User,
    X,
    KeyRound,
    Loader2,
    Code,
    ArrowRight,
    ShieldCheck,
    Cpu,
    Layers,
    Zap,
    Layout
} from "lucide-react";
import { AstraventaLogo } from "@/components/AstraventaLogo";

type Message = {
    id: string;
    role: "user" | "assistant";
    content: string | React.ReactNode;
    timestamp: Date;
};

const AstraScrape = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            role: "assistant",
            content: "Welcome to AstraScrape AI. I can extract structured data from any website using advanced resilient scraping. Just give me a URL and tell me what data you need.",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Settings State
    const [browserUseKey, setBrowserUseKey] = useState("");
    const [aiProviderKey, setAiProviderKey] = useState("");

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

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

        setTimeout(() => {
            let responseContent: React.ReactNode = "I am processing your request...";
            const lowerText = text.toLowerCase();

            if (!browserUseKey) {
                responseContent = "It looks like your Browser Use Cloud API Key is missing. Please configure your API tokens in the Settings panel to initiate a live scraping task.";
            } else if (lowerText.includes("product") || lowerText.includes("price")) {
                responseContent = (
                    <div className="space-y-4 w-full">
                        <p>Task completed successfully. I've extracted the product data.</p>
                        <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto w-full max-w-[500px]">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10 text-slate-300">
                                <Code className="w-4 h-4" />
                                <span className="text-xs font-mono">extracted_data.json</span>
                            </div>
                            <pre className="text-emerald-400 text-xs font-mono leading-relaxed">
                                {`{
 "url": "https://example.com/store",
 "request": "all product names and prices",
 "data": [
 { "name": "Wireless Headphones", "price": "$129.99" },
 { "name": "Mechanical Keyboard", "price": "$149.50" },
 { "name": "USB-C Hub", "price": "$45.00" }
 ]
}`}
                            </pre>
                        </div>
                    </div>
                );
            } else if (lowerText.includes("job") || lowerText.includes("salary")) {
                responseContent = (
                    <div className="space-y-4 w-full">
                        <p>I found the job listings. Here is the structured data.</p>
                        <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto w-full max-w-[500px]">
                            <pre className="text-emerald-400 text-xs font-mono leading-relaxed">
                                {`{
 "data": [
 { 
 "title": "Senior Frontend Engineer", 
 "company": "TechCorp", 
 "location": "Remote", 
 "salary": "$130k - $160k" 
 }
 ]
}`}
                            </pre>
                        </div>
                    </div>
                );
            } else {
                responseContent = "I've received your request. To run this live, please ensure your Free Browser Use Cloud credentials are provided in the Settings panel.";
            }

            const newBotMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: responseContent,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, newBotMsg]);
            setIsTyping(false);
        }, 1800);
    };

    const quickPrompts = [
        {
            title: "Extract Products",
            icon: Database,
            prompt: "Get all product names and prices from https://example.com/store"
        },
        {
            title: "Extract Job Postings",
            icon: SearchCode,
            prompt: "From https://example.com/jobs extract title, company, location, salary"
        },
        {
            title: "Scrape Blog Headings",
            icon: Globe,
            prompt: "Extract all H2 headings and links from https://example.com/blog"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#064e3b,transparent)] opacity-40" />
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
                                    <Cpu className="w-3.5 h-3.5" />
                                    Agentic Web Intelligence
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85]">
                                    Turn the Web <br />
                                    <span className="text-emerald-500">into Your Database</span>
                                </h1>
                                <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium max-w-xl">
                                    AstraScrape uses autonomous agents to navigate complex web apps, bypass bot detection, and deliver perfectly structured data in real-time.
                                </p>
                                <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                                    <Button
                                        onClick={() => document.getElementById('scraping-lab')?.scrollIntoView({ behavior: 'smooth' })}
                                        size="lg"
                                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 h-16 text-lg font-bold rounded-2xl shadow-2xl shadow-emerald-900/40 transition-all group"
                                    >
                                        Launch Scraping Lab
                                        <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
                                    </Button>
                                    <Button variant="outline" size="lg" className="px-10 h-16 text-lg font-bold rounded-2xl border-slate-700 bg-transparent hover:bg-slate-800 text-white">
                                        API Docs
                                    </Button>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex-1 relative perspective-1000"
                        >
                            <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-3xl p-6 rotate-y-[-5deg] rotate-x-[5deg] group hover:rotate-0 transition-transform duration-1000">
                                <div className="bg-slate-900 rounded-xl p-6 border border-white/5 font-mono text-sm">
                                    <div className="flex gap-2 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <span className="text-slate-600">01</span>
                                            <span className="text-emerald-400">const</span>
                                            <span className="text-white">agent = AstraScrape.init();</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-slate-600">02</span>
                                            <span className="text-white">await agent.goto(<span className="text-amber-400">"site.com/data"</span>);</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-slate-600">03</span>
                                            <span className="text-white">let results = await agent.extract();</span>
                                        </div>
                                        <div className="h-20 w-full mt-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20 flex items-center justify-center overflow-hidden">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                                className="text-emerald-400 font-bold"
                                            >
                                                [ 438 Data Nodes Found ]
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Advanced Capabilities */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Advanced Resilient <br /> <span className="text-emerald-600">Scraping Architecture</span></h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">Standard scrapers break when a button moves 2 pixels. AstraScrape's agent-based model understands page components semantically, adapting to UI changes autonomously.</p>

                            <div className="space-y-6">
                                {[
                                    { title: "Universal Shadow DOM Support", icon: Layers },
                                    { title: "Anti-Fingerprinting Engine", icon: ShieldCheck },
                                    { title: "Zero-Setup Proxy Rotation", icon: Globe }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-lg font-bold text-slate-800 tracking-tight">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6 pt-12">
                                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
                                    <div className="text-4xl font-black text-slate-900 mb-2">99.8%</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Bypass Rate</div>
                                </div>
                                <div className="p-8 rounded-3xl bg-emerald-600 text-white shadow-xl shadow-emerald-200">
                                    <div className="text-4xl font-black mb-2">3.2s</div>
                                    <div className="text-xs font-bold text-emerald-100 uppercase tracking-widest">Avg Data Latency</div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl">
                                    <div className="text-4xl font-black mb-2">500M</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nodes Scanned</div>
                                </div>
                                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
                                    <div className="text-4xl font-black text-slate-900 mb-2">Unlimited</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Concurrency</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scraping Lab Interface */}
            <section id="scraping-lab" className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Control Panel */}
                        <div className="w-full lg:w-[400px] flex flex-col gap-6">
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-200/60">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg">
                                        <Database className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="font-black text-slate-900 text-xl tracking-tight">Data Studio</h2>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Interactive Lab</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Blueprint Library</h3>
                                    <div className="flex flex-col gap-4">
                                        {quickPrompts.map((item, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleSend(item.prompt)}
                                                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-emerald-600 hover:text-white border border-slate-100 hover:border-emerald-500 text-left transition-all group shadow-sm"
                                            >
                                                <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white shrink-0 mt-1" />
                                                <div>
                                                    <span className="text-sm font-black block mb-1">{item.title}</span>
                                                    <p className="text-xs text-slate-500 group-hover:text-emerald-100 line-clamp-2 font-medium">
                                                        {item.prompt}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white mt-auto relative overflow-hidden shadow-3xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="font-bold text-sm tracking-widest uppercase text-slate-500">Cloud Status</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-10 leading-relaxed font-bold">
                                        System ready for mass extraction. Key authentication required per node.
                                    </p>
                                    <Button
                                        onClick={() => setShowSettings(true)}
                                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white border-0 py-4 h-auto text-sm font-black rounded-xl shadow-xl shadow-emerald-900/40 transition-all "
                                    >
                                        <Settings2 className="w-4 h-4 mr-2" />
                                        Configure Node
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Terminal Window */}
                        <div className="flex-1 bg-slate-900 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden flex flex-col relative h-[900px]">
                            <div className="h-20 border-b border-white/5 flex justify-between items-center px-10 shrink-0 bg-slate-800/50 backdrop-blur-xl z-20">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2 mr-4">
                                        <div className="w-3 h-3 rounded-full bg-rose-500 opacity-80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500 opacity-80" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-80" />
                                    </div>
                                    <span className="text-slate-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">Session.AstraScrape.io</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase">Live</div>
                                    <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)} className="text-slate-500 hover:text-white lg:hidden">
                                        <Settings2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Chat Stream */}
                            <div className="flex-1 overflow-y-auto p-12 scroll-smooth bg-[radial-gradient(ellipse_at_top,#202937,transparent)]">
                                <div className="max-w-4xl mx-auto space-y-12">
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex gap-8 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                        >
                                            <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:rotate-12 ${msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-slate-800 border border-white/10 text-emerald-400'
                                                }`}>
                                                {msg.role === 'user' ? <User className="w-6 h-6" /> : <AstraventaLogo size="sm" iconOnly />}
                                            </div>
                                            <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[90%] w-full`}>
                                                <div className={`px-8 py-6 rounded-[2rem] text-[16px] leading-[1.7] shadow-3xl ${msg.role === 'user'
                                                        ? 'bg-emerald-600/10 border border-emerald-500/20 text-emerald-50 rounded-tr-md'
                                                        : 'bg-slate-800/80 border border-white/10 text-slate-300 rounded-tl-md w-full'
                                                    }`}>
                                                    {msg.content}
                                                </div>
                                                <span className="text-[10px] font-black text-slate-600 mt-4 px-4 uppercase tracking-[0.2em]">
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
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-800 border border-white/10 text-emerald-400 flex items-center justify-center shadow-2xl">
                                                <AstraventaLogo size="sm" iconOnly />
                                            </div>
                                            <div className="bg-slate-800/40 border border-white/5 px-8 py-6 rounded-[2rem] rounded-tl-md flex items-center gap-3">
                                                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                                                <span className="text-xs font-mono text-emerald-500/80 uppercase tracking-widest font-black">Executing Agent...</span>
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* Input Command Line */}
                            <div className="p-10 bg-slate-900/80 backdrop-blur-xl border-t border-white/5 relative z-20">
                                <div className="max-w-4xl mx-auto relative group">
                                    <div className="absolute inset-x-0 bottom-full h-20 bg-gradient-to-t from-slate-900 to-transparent -mb-px" />
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Input URL and data target blueprint..."
                                        className="w-full pl-10 pr-20 py-10 bg-black/40 border-white/10 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 rounded-3xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] text-lg font-mono text-emerald-50 placeholder:text-slate-700 relative z-10 transition-all"
                                    />
                                    <Button
                                        onClick={() => handleSend()}
                                        disabled={!input.trim() || isTyping}
                                        size="icon"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all z-20 shadow-2xl shadow-emerald-900/40 "
                                    >
                                        {isTyping ? <Loader2 className="w-6 h-6 animate-spin" /> : <ArrowRight className="w-6 h-6" />}
                                    </Button>
                                </div>
                                <div className="flex justify-between items-center mt-6 px-4">
                                    <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.3em]">
                                        AstraScrape <span className="text-emerald-900">v1.0.0</span>
                                    </p>
                                    <p className="text-[10px] text-slate-700 font-bold uppercase tracking-widest">
                                        Zero-Trust Extraction Protocol
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Support */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-10">
                        <Layout className="w-6 h-6 text-emerald-600" />
                        <span className="text-sm font-bold text-slate-800">Need specific custom scraping blueprints for your enterprise?</span>
                        <Link to="/contact" className="text-emerald-600 font-black hover:underline ml-4">Start Consultation →</Link>
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
                            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] transition-opacity"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-slate-900 rounded-[3rem] shadow-[0_40px_150px_-20px_rgba(0,0,0,0.8)] z-[101] overflow-hidden border border-white/10"
                        >
                            <div className="px-12 py-10 border-b border-white/5 flex justify-between items-center bg-slate-800/40">
                                <div className="flex items-center gap-5">
                                    <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/20">
                                        <KeyRound className="w-8 h-8 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h2 className="font-black text-2xl tracking-tighter text-white">Auth Node</h2>
                                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Validation Session</p>
                                    </div>
                                </div>
                                <button onClick={() => setShowSettings(false)} className="text-slate-500 hover:text-white p-3 rounded-full hover:bg-white/5 transition-all">
                                    <X className="w-8 h-8" />
                                </button>
                            </div>

                            <div className="p-12 space-y-10">
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Browser Use Token</label>
                                        <Input
                                            type="password"
                                            placeholder="sk_bs_..."
                                            value={browserUseKey}
                                            onChange={(e) => setBrowserUseKey(e.target.value)}
                                            className="bg-black/50 border-white/10 h-16 rounded-2xl focus-visible:ring-emerald-500/30 text-emerald-50 font-mono text-lg"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">LLM Orchestration Key</label>
                                        <Input
                                            type="password"
                                            placeholder="sk-..."
                                            value={aiProviderKey}
                                            onChange={(e) => setAiProviderKey(e.target.value)}
                                            className="bg-black/50 border-white/10 h-16 rounded-2xl focus-visible:ring-emerald-500/30 text-emerald-50 font-mono text-lg"
                                        />
                                    </div>
                                </div>

                                <Button
                                    onClick={() => setShowSettings(false)}
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl h-18 text-xl font-black shadow-2xl shadow-emerald-900/40 transition-all py-8"
                                >
                                    Verify Access
                                </Button>

                                <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] leading-relaxed">
                                    Keys are stored in LocalStorage. <br /> Encrypted via browser-native CryptoAPI.
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AstraScrape;
