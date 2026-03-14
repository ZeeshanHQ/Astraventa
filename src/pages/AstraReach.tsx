import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
 Send, 
 Inbox, 
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
 Layout,
 MousePointer2,
 CheckCircle2,
 Shield,
 MessageSquare,
 Mail,
 ZapOff,
 Globe,
 Target
} from "lucide-react";
import { AstraventaLogo } from "@/components/AstraventaLogo";
import { Link } from "react-router-dom";

type Message = {
 id: string;
 role: "user" | "assistant";
 content: string;
 timestamp: Date;
};

const AstraReach = () => {
 const [messages, setMessages] = useState<Message[]>([
 {
 id: "welcome",
 role: "assistant",
 content: "Welcome to AstraReach Copilot. I can help you automate your email outreach, review your inbox, and handle smart auto-replies. How can I assist you today?",
 timestamp: new Date()
 }
 ]);
 const [input, setInput] = useState("");
 const [isTyping, setIsTyping] = useState(false);
 const [showSettings, setShowSettings] = useState(false);
 const messagesEndRef = useRef<HTMLDivElement>(null);

 // Settings State
 const [agentMailKey, setAgentMailKey] = useState("");
 const [agentMailInbox, setAgentMailInbox] = useState("");
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
 let responseContent = "I am processing your request...";
 const lowerText = text.toLowerCase();
 
 if (lowerText.includes("intro") || lowerText.includes("send")) {
 responseContent = "I've drafted the intro email. However, the AgentMail API Key is not configured in settings. Please configure your API tokens to send this email via AstraReach.";
 } else if (lowerText.includes("inbox") || lowerText.includes("check")) {
 responseContent = "I'm checking your inbox now... It seems your AgentMail Inbox ID is missing. Please add it in the settings panel to fetch recent messages.";
 } else if (lowerText.includes("reply")) {
 responseContent = "I can draft an auto-reply. Please provide the required API keys to connect to your live inbox.";
 } else {
 responseContent = "I understand. To perform actual email operations, please ensure your Free AgentMail credentials are provided in the Settings panel.";
 }

 const newBotMsg: Message = {
 id: (Date.now() + 1).toString(),
 role: "assistant",
 content: responseContent,
 timestamp: new Date()
 };
 
 setMessages(prev => [...prev, newBotMsg]);
 setIsTyping(false);
 }, 1500);
 };

 const quickPrompts = [
 {
 title: "Send Intro Email",
 icon: Mail,
 prompt: "Send an intro email to an investor about our new SaaS product."
 },
 {
 title: "Review Inbox",
 icon: Inbox,
 prompt: "Check my inbox for any new important responses today."
 },
 {
 title: "Auto-Reply Settings", // Changed title
 icon: MessageSquare, // Changed icon
 prompt: "Configure my auto-replies to prioritize Tier 1 investors" // Changed prompt
 }
 ];

 return (
 <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
 <Header />
 
 {/* Hero Section */}
 <section className="relative pt-32 pb-20 overflow-hidden">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
 <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
 <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
 </div>
 
 <div className="max-w-7xl mx-auto px-6">
 <div className="flex flex-col lg:flex-row items-center gap-16">
 <div className="flex-1 text-center lg:text-left">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 >
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6">
 <Sparkles className="w-3.5 h-3.5" />
 Autonomous Email Operations
 </div>
 <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[0.95]">
 Reach Further with <span className="text-orange-500">AstraReach</span>
 </h1>
 <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl">
 Scale your outreach without scaling your team. AstraReach is your autonomous email copilot that drafts, sends, and manages your inbox with human-like intelligence.
 </p>
 <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
 <Button 
 onClick={() => document.getElementById('copilot-section')?.scrollIntoView({ behavior: 'smooth' })}
 size="lg" 
 className="bg-slate-900 hover:bg-orange-600 text-white px-8 h-14 text-lg font-bold rounded-2xl shadow-xl shadow-slate-900/10 transition-all group"
 >
 Try Copilot Now
 <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
 </Button>
 <Button variant="outline" size="lg" className="px-8 h-14 text-lg font-bold rounded-2xl border-slate-200 hover:bg-slate-50">
 View Docs
 </Button>
 </div>
 </motion.div>
 </div>
 
 <motion.div 
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="flex-1 relative"
 >
 <div className="relative z-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-4 overflow-hidden group">
 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
 <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
 <div className="flex items-center gap-3 mb-8">
 <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
 <Mail className="w-5 h-5 text-white" />
 </div>
 <div className="h-4 w-32 bg-slate-200 rounded-full" />
 </div>
 <div className="space-y-4">
 <div className="h-4 w-full bg-slate-100 rounded-full" />
 <div className="h-4 w-[90%] bg-slate-100 rounded-full" />
 <div className="h-4 w-[95%] bg-slate-100 rounded-full" />
 <div className="h-24 w-full bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center">
 <motion.div
 animate={{ opacity: [0.4, 1, 0.4] }}
 transition={{ duration: 2, repeat: Infinity }}
 className="text-orange-600 font-bold text-sm flex items-center gap-2"
 >
 <Zap className="w-4 h-4 fill-orange-600" />
 AstraReach AI Drafting...
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 blur-[60px] rounded-full -z-10" />
 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full -z-10" />
 </motion.div>
 </div>
 </div>
 </section>

 {/* Features Grid */}
 <section className="py-24 bg-slate-50 border-y border-slate-200/60">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Built for Agentic Email Infrastructure</h2>
 <p className="text-lg text-slate-600 leading-relaxed font-medium">AstraReach doesn't just send templates; it understands context, manages intent, and executes multi-step workflows.</p>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 {
 title: "Context-Aware Outreach",
 desc: "Analyzes prospect profiles, website content, and past interactions to craft hyper-personalized messages.",
 icon: Target,
 color: "text-blue-500",
 bg: "bg-blue-50"
 },
 {
 title: "Autonomous Inbox Zero",
 desc: "Automatically categorizes incoming mail, flags urgent items, and drafts responses for your approval.",
 icon: Shield,
 color: "text-emerald-500",
 bg: "bg-emerald-50"
 },
 {
 title: "AgentMail Integration",
 desc: "Built-in support for transient inboxes and high-deliverability routes via the AgentMail OS.",
 icon: Zap,
 color: "text-orange-500",
 bg: "bg-orange-50"
 }
 ].map((feature, i) => (
 <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
 <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
 <feature.icon className={`w-7 h-7 ${feature.color}`} />
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
 <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Copilot Interface Section */}
 <section id="copilot-section" className="py-32 relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-6">
 <div className="flex flex-col lg:flex-row gap-8 h-[800px]">
 
 {/* Left Sidebar - Quick Actions */}
 <div className="w-full lg:w-80 flex flex-col gap-4">
 <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-200/60 flex flex-col gap-8">
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
 <Sparkles className="w-6 h-6 text-orange-600" />
 </div>
 <div>
 <h2 className="font-bold text-slate-900 text-lg">AstraReach AI</h2>
 <p className="text-xs text-slate-500 font-medium">Assistant Dashboard</p>
 </div>
 </div>

 <div className="space-y-6">
 <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Quick Prompts</h3>
 <div className="flex flex-col gap-3">
 {quickPrompts.map((item, idx) => (
 <button
 key={idx}
 onClick={() => handleSend(item.prompt)}
 className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-orange-600 hover:text-white border border-slate-100 hover:border-orange-500 text-left transition-all group shadow-sm"
 >
 <div className="flex items-center gap-2">
 <item.icon className="w-4 h-4 text-orange-600 group-hover:text-white" />
 <span className="text-sm font-bold text-slate-700 group-hover:text-white">{item.title}</span>
 </div>
 <p className="text-xs text-slate-500 group-hover:text-white/80 line-clamp-2 font-medium">
 {item.prompt}
 </p>
 </button>
 ))}
 </div>
 </div>
 </div>
 
 {/* Status Card */}
 <div className="bg-slate-900 rounded-[2rem] p-8 text-white mt-auto relative overflow-hidden shadow-2xl shadow-slate-900/20">
 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2" />
 <div className="relative z-10">
 <div className="flex justify-between items-center mb-6">
 <h3 className="font-bold text-sm tracking-tight text-slate-300">Integration Hub</h3>
 <div className="flex items-center gap-2">
 <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Awaiting Setup</span>
 <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
 </div>
 </div>
 <p className="text-xs text-slate-400 mb-8 leading-relaxed font-medium">
 Configure your high-deliverability AgentMail API keys to enable live autonomous sending.
 </p>
 <Button 
 onClick={() => setShowSettings(true)}
 className="w-full bg-white text-slate-900 hover:bg-orange-500 hover:text-white border-0 py-3 h-auto text-sm font-black rounded-xl transition-all"
 >
 <Settings2 className="w-4 h-4 mr-2" />
 Setup Environment
 </Button>
 </div>
 </div>
 </div>

 {/* Main Chat Area */}
 <div className="flex-1 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-300/60 border border-slate-200/60 overflow-hidden flex flex-col relative">
 <div className="h-20 border-b border-slate-100 flex justify-between items-center px-8 shrink-0 bg-white/80 backdrop-blur-md z-10">
 <div className="flex items-center gap-4">
 <div className="p-2 rounded-xl bg-slate-900">
 <Bot className="w-5 h-5 text-white" />
 </div>
 <div>
 <span className="font-bold text-slate-900 block leading-none mb-1">Live Agent Interaction</span>
 <div className="flex items-center gap-1.5">
 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">System Ready</span>
 </div>
 </div>
 </div>
 <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)} className="lg:hidden text-slate-500">
 <Settings2 className="w-5 h-5" />
 </Button>
 </div>

 {/* Messages Content */}
 <div className="flex-1 overflow-y-auto p-10 scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-[0.98]">
 <div className="max-w-3xl mx-auto space-y-10">
 {messages.map((msg) => (
 <motion.div
 key={msg.id}
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 className={`flex gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
 >
 <div className={`w-10 h-10 shrink-0 rounded-2xl flex items-center justify-center shadow-lg transition-transform ${
 msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-orange-100 text-orange-600'
 }`}>
 {msg.role === 'user' ? <User className="w-5 h-5" /> : <AstraventaLogo size="sm" iconOnly />}
 </div>
 <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-500`}>
 <div className={`px-7 py-5 rounded-3xl text-[16px] leading-[1.6] shadow-sm ${
 msg.role === 'user' 
 ? 'bg-slate-900 text-white rounded-tr-md' 
 : 'bg-white border border-slate-100 text-slate-700 rounded-tl-md shadow-slate-200/50'
 }`}>
 {msg.content}
 </div>
 <span className="text-[10px] font-bold text-slate-400 mt-2.5 px-2 uppercase tracking-widest opacity-60">
 {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
 </span>
 </div>
 </motion.div>
 ))}
 
 {isTyping && (
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="flex gap-6"
 >
 <div className="w-10 h-10 shrink-0 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-md">
 <AstraventaLogo size="sm" iconOnly />
 </div>
 <div className="bg-white border border-slate-100 px-7 py-6 rounded-3xl rounded-tl-md flex items-center gap-1.5 shadow-sm">
 <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
 <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
 <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" />
 </div>
 </motion.div>
 )}
 <div ref={messagesEndRef} />
 </div>
 </div>

 {/* Chat Input Area */}
 <div className="p-8 bg-white border-t border-slate-100 relative">
 <div className="max-w-3xl mx-auto relative group">
 <div className="absolute inset-0 bg-orange-500/5 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
 placeholder="Ask AstraReach to analyze, draft, or send..."
 className="w-full pl-8 pr-16 py-8 bg-slate-50/50 border-slate-200/60 focus-visible:ring-orange-500/20 focus-visible:border-orange-500 rounded-[1.5rem] shadow-inner text-[16px] font-medium relative z-10 transition-all focus-visible:bg-white"
 />
 <Button
 onClick={() => handleSend()}
 disabled={!input.trim() || isTyping}
 size="icon"
 className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-slate-900 hover:bg-orange-600 text-white transition-all z-10 shadow-lg disabled:opacity-30 group- "
 >
 {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-1" />}
 </Button>
 </div>
 <div className="text-center mt-5">
 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest opacity-80">
 AstraOS Reach Module • <span className="text-orange-500">v4.2 PRO</span>
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Trust Section */}
 <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
 <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orange-500/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
 <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
 <h2 className="text-5xl font-black mb-8 tracking-tighter">Enterprise Ready. Human Trusted.</h2>
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-16 max-w-5xl mx-auto">
 <div className="space-y-6">
 {[
 { title: "Context-Aware Outreach", icon: MessageSquare, desc: "Agents understand historical touchpoints and company news." },
 { title: "Autonomous Inbox Zero", icon: Mail, desc: "Sort, reply, and schedule meetings while you sleep." },
 { title: "AgentMail Integration", icon: Zap, desc: "Native high-deliverability infrastructure for cold outbound." }
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-4 group">
 <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
 <item.icon className="w-6 h-6" />
 </div>
 <div>
 <span className="text-lg font-bold text-slate-800 tracking-tight block leading-none mb-1">{item.title}</span>
 <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
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
 className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] transition-opacity"
 />
 <motion.div
 initial={{ opacity: 0, scale: 0.9, y: 40 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.9, y: 40 }}
 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_32px_120px_-15px_rgba(0,0,0,0.5)] z-[101] overflow-hidden"
 >
 <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
 <div className="flex items-center gap-3 text-slate-900">
 <div className="p-2 bg-orange-100 rounded-xl">
 <KeyRound className="w-6 h-6 text-orange-600" />
 </div>
 <div>
 <h2 className="font-black text-xl tracking-tight">Setup Environment</h2>
 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AstraReach Cloud Node</p>
 </div>
 </div>
 <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-all">
 <X className="w-6 h-6" />
 </button>
 </div>
 
 <div className="p-10 space-y-8">
 <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-inner">
 <div className="flex items-start gap-4">
 <Shield className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
 <p className="text-xs text-slate-400 leading-relaxed font-medium">
 Your security is nuestra prioridad. Keys are encrypted via <strong className="text-white">AES-256</strong> and stored exclusively in your local session. They are never transmitted to Astraventa cloud.
 </p>
 </div>
 </div>

 <div className="space-y-5">
 <div className="space-y-2">
 <div className="flex justify-between items-center ml-1">
 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">AgentMail API Token</label>
 <span className="text-[10px] font-bold text-orange-500">Required</span>
 </div>
 <Input 
 type="password" 
 placeholder="sk_reach_live_..." 
 value={agentMailKey}
 onChange={(e) => setAgentMailKey(e.target.value)}
 className="bg-slate-50 border-slate-200 h-14 rounded-2xl focus-visible:ring-orange-500/20"
 />
 </div>
 <div className="space-y-2">
 <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Assigned Inbox ID</label>
 <Input 
 type="text" 
 placeholder="ibx_v4_system_..." 
 value={agentMailInbox}
 onChange={(e) => setAgentMailInbox(e.target.value)}
 className="bg-slate-50 border-slate-200 h-14 rounded-2xl focus-visible:ring-orange-500/20"
 />
 </div>
 <div className="space-y-2">
 <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Global Logic Key</label>
 <Input 
 type="password" 
 placeholder="sk-ant-auth-..." 
 value={aiProviderKey}
 onChange={(e) => setAiProviderKey(e.target.value)}
 className="bg-slate-50 border-slate-200 h-14 rounded-2xl focus-visible:ring-orange-500/20"
 />
 </div>
 </div>

 <Button 
 onClick={() => setShowSettings(false)}
 className="w-full bg-slate-900 hover:bg-orange-600 text-white rounded-2xl h-16 text-lg font-black shadow-xl shadow-slate-900/10 transition-all"
 >
 Save Environment
 </Button>
 </div>
 </motion.div>
 </>
 )}
 </AnimatePresence>
 </div>
 );
};

export default AstraReach;
