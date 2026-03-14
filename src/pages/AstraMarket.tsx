import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
 Send, 
 Settings2, 
 Bot,
 User,
 X,
 KeyRound,
 Loader2,
 LineChart,
 Target,
 BellRing,
 Activity,
 ArrowUpRight,
 TrendingUp,
 Tags,
 Search,
 Globe
} from "lucide-react";
import { AstraventaLogo } from "@/components/AstraventaLogo";

type Message = {
 id: string;
 role: "user" | "assistant";
 content: string | React.ReactNode;
 timestamp: Date;
};

const AstraMarket = () => {
 const [messages, setMessages] = useState<Message[]>([
 {
 id: "welcome",
 role: "assistant",
 content: "Welcome to AstraMarket AI. I am your continuous competitor intelligence agent. Add URLs to the tracking queue, and I will monitor them daily for pricing changes, feature launches, and strategic pivots.",
 timestamp: new Date()
 }
 ]);
 const [input, setInput] = useState("");
 const [isTyping, setIsTyping] = useState(false);
 const [showSettings, setShowSettings] = useState(false);
 
 // Dashboard State
 const [isDeploying, setIsDeploying] = useState(false);
 const [activeTargets, setActiveTargets] = useState([
 { url: "competitor-alpha.com", status: "Monitoring", lastChange: "2 hrs ago", changes: 14 }
 ]);
 const [targetUrlInput, setTargetUrlInput] = useState("");
 const messagesEndRef = useRef<HTMLDivElement>(null);

 // Settings State
 const [aiProviderKey, setAiProviderKey] = useState("");

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 };

 useEffect(() => {
 scrollToBottom();
 }, [messages, isTyping]);

 const handleAddTarget = () => {
 if (!targetUrlInput.trim()) return;
 
 setIsDeploying(true);
 
 // Simulate Browser Use task deployment
 setTimeout(() => {
 setActiveTargets(prev => [
 { url: targetUrlInput, status: "Indexing...", lastChange: "Just now", changes: 0 },
 ...prev
 ]);
 setIsDeploying(false);
 
 setMessages(prev => [
 ...prev, 
 {
 id: Date.now().toString(),
 role: "assistant",
 content: (
 <div className="space-y-2">
 <p className="flex items-center gap-2 font-bold text-fuchsia-700">
 <Target className="w-4 h-4" /> Agent Deployed Successfully
 </p>
 <p>A headless browser agent has been launched to map the DOM of <strong>{targetUrlInput}</strong>. It will establish a baseline and notify you of any structural pricing or copy changes moving forward.</p>
 </div>
 ),
 timestamp: new Date()
 }
 ]);
 setTargetUrlInput("");
 }, 2000);
 };

 const handleSend = async (text: string = input) => {
 if (!text.trim()) return;

 // Add user message
 const newUserMsg: Message = {
 id: Date.now().toString(),
 role: "user",
 content: text,
 timestamp: new Date()
 };
 
 setMessages(prev => [...prev, newUserMsg]);
 setInput("");
 setIsTyping(true);

 // MOCK RESPONSE LOGIC
 setTimeout(() => {
 let responseContent: React.ReactNode = "";
 const lowerText = text.toLowerCase();
 
 if (lowerText.includes("report") || lowerText.includes("summary") || lowerText.includes("brief")) {
 responseContent = (
 <div className="space-y-4 w-full">
 <p className="font-bold text-slate-800">Weekly Executive Briefing: Competitor Alpha</p>
 
 <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
 <div className="flex items-start gap-2">
 <Tags className="w-4 h-4 text-fuchsia-600 shrink-0 mt-0.5" />
 <div>
 <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Pricing Page Change detected</h4>
 <p className="text-sm text-slate-600">They removed their $99/mo "Starter" tier. The entry-level price is now $199/mo (Pro tier). The Enterprise 'Contact Sales' button was changed from Blue to Green.</p>
 </div>
 </div>
 </div>

 <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
 <div className="flex items-start gap-2">
 <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
 <div>
 <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">New Feature Announcement</h4>
 <p className="text-sm text-slate-600">A new banner was added to their /features page promoting "AI-Powered Analytics". This strongly indicates a product pivot matching our upcoming roadmap.</p>
 </div>
 </div>
 </div>
 </div>
 );
 } else if (lowerText.includes("alert") || lowerText.includes("notify")) {
 responseContent = "I have updated your alert settings. I will now send a Slack notification immediately if I detect a price drop greater than 10% on any tracked competitor.";
 } else {
 responseContent = "Noted. To ensure your custom monitoring agents scale out via Browser Use Cloud, please insert your Browser Use API Key in the settings panel.";
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

 return (
 <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
 <Header />
 
 <main className="flex-1 flex flex-col lg:flex-row pt-24 px-4 pb-4 gap-4 max-w-[1600px] mx-auto w-full h-screen">
 
 {/* Left Panel - Tracking Dashboard */}
 <div className="w-full lg:w-[45%] xl:w-[40%] shrink-0 flex flex-col gap-4">
 
 <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex flex-col flex-1">
 <div className="p-6 border-b border-slate-100 bg-fuchsia-50/20">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-3">
 <LineChart className="w-6 h-6 text-fuchsia-600" />
 <div>
 <h2 className="font-bold text-slate-900 text-lg">Market Radar</h2>
 <p className="text-xs text-slate-500">Continuous background tracking</p>
 </div>
 </div>
 <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 shadow-sm text-xs font-bold">
 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
 System Active
 </div>
 </div>

 {/* Add target input */}
 <div className="flex items-center gap-2">
 <div className="relative flex-1">
 <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
 <input
 value={targetUrlInput}
 onChange={(e) => setTargetUrlInput(e.target.value)}
 onKeyDown={(e) => e.key === 'Enter' && handleAddTarget()}
 placeholder="Enter competitor URL (e.g. AcmeCorp.com)"
 className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 text-sm font-medium text-slate-800"
 />
 </div>
 <Button 
 onClick={handleAddTarget}
 disabled={isDeploying || !targetUrlInput.trim()}
 className="bg-slate-900 hover:bg-fuchsia-600 text-white rounded-xl shadow-md transition-colors"
 >
 {isDeploying ? <Loader2 className="w-4 h-4 animate-spin" /> : "Track Domain"}
 </Button>
 </div>
 </div>

 <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50">
 <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 ml-2">Active Targets ({activeTargets.length})</h3>
 
 <div className="space-y-3">
 {activeTargets.map((target, idx) => (
 <motion.div 
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 key={idx}
 className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group"
 >
 <div className="flex justify-between items-start mb-3">
 <div className="flex items-center gap-2">
 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
 <Globe className="w-4 h-4 text-slate-500" />
 </div>
 <div>
 <h4 className="font-bold text-slate-900 leading-tight">{target.url}</h4>
 <span className="text-[10px] font-bold text-fuchsia-600">{target.status}</span>
 </div>
 </div>
 <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
 <ArrowUpRight className="w-4 h-4" />
 </Button>
 </div>

 <div className="grid grid-cols-2 gap-2 mt-4">
 <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
 <div className="text-[10px] uppercase font-bold text-slate-500 mb-0.5">Detected Changes</div>
 <div className="font-bold text-slate-900 flex items-center gap-1">
 {target.changes} <Activity className="w-3 h-3 text-slate-400" />
 </div>
 </div>
 <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
 <div className="text-[10px] uppercase font-bold text-slate-500 mb-0.5">Last Modification</div>
 <div className="font-bold text-slate-900">{target.lastChange}</div>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </div>

 {/* Right Panel - Chat Area */}
 <div className="flex-1 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex flex-col relative w-full">
 
 <div className="h-16 border-b border-slate-100 flex justify-between items-center px-6 shrink-0 bg-white/50 backdrop-blur-sm z-10">
 <div className="flex items-center gap-3">
 <Bot className="w-5 h-5 text-fuchsia-600" />
 <span className="font-bold text-slate-900">Intelligence Copilot</span>
 <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
 Active
 </span>
 </div>
 <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)} className="text-slate-500 hover:bg-fuchsia-50 hover:text-fuchsia-600">
 <Settings2 className="w-5 h-5" />
 </Button>
 </div>

 <div className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-50/40 via-white to-white">
 <div className="max-w-3xl mx-auto space-y-6">
 {messages.map((msg) => (
 <motion.div
 key={msg.id}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className={`flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
 >
 <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
 msg.role === 'user' ? 'bg-primary text-white' : 'bg-fuchsia-100 text-fuchsia-600'
 }`}>
 {msg.role === 'user' ? <User className="w-4 h-4" /> : <AstraventaLogo size="sm" iconOnly />}
 </div>
 <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[85%] sm:max-w-[80%]`}>
 <div className={`px-4 sm:px-5 py-3.5 rounded-2xl text-[14px] sm:text-[15px] leading-relaxed w-full ${
 msg.role === 'user' 
 ? 'bg-slate-900 text-white rounded-tr-sm' 
 : 'bg-white border border-slate-200 shadow-sm text-slate-700 rounded-tl-sm w-full'
 }`}>
 {msg.content}
 </div>
 <span className="text-[10px] text-slate-400 mt-1.5 px-1 font-medium">
 {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
 </span>
 </div>
 </motion.div>
 ))}
 
 {isTyping && (
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="flex gap-4"
 >
 <div className="w-8 h-8 shrink-0 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center">
 <AstraventaLogo size="sm" iconOnly />
 </div>
 <div className="bg-white border border-slate-200 shadow-sm px-5 py-4 rounded-2xl rounded-tl-sm flex items-center gap-1">
 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
 </div>
 </motion.div>
 )}
 <div ref={messagesEndRef} />
 </div>
 </div>

 <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
 <button 
 onClick={() => handleSend("Generate a weekly executive brief on competitor-alpha's recent changes.")}
 className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100 text-xs font-bold transition-colors border border-fuchsia-100"
 >
 <BellRing className="w-3 h-3" /> "Generate Weekly Brief"
 </button>
 <button 
 onClick={() => handleSend("Alert me immediately if any tracked domain drops their pricing.")}
 className="shrink-0 px-3 py-1.5 rounded-lg bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100 text-xs font-bold transition-colors border border-fuchsia-100"
 >
 "Set Priority Alert: Price Drops"
 </button>
 </div>

 <div className="p-4 bg-white border-t border-slate-100">
 <div className="max-w-4xl mx-auto relative group">
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
 placeholder="Ask for summaries, insights, or set up new alerts..."
 className="w-full pl-6 pr-14 py-7 bg-slate-50 border-slate-200 focus-visible:ring-fuchsia-500/20 focus-visible:border-fuchsia-500 rounded-2xl shadow-inner text-[15px]"
 />
 <Button
 onClick={() => handleSend()}
 disabled={!input.trim() || isTyping}
 size="icon"
 className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 hover:bg-fuchsia-600 text-white transition-colors disabled:opacity-50"
 >
 {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
 </Button>
 </div>
 <div className="text-center mt-3">
 <span className="text-[10px] text-slate-400 font-medium tracking-wide">
 AstraMarket runs headless browser agents to track DOM changes autonomously.
 </span>
 </div>
 </div>
 </div>

 </main>

 {/* Settings Modal */}
 <AnimatePresence>
 {showSettings && (
 <>
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onClick={() => setShowSettings(false)}
 className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
 />
 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: 20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 20 }}
 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden mx-4"
 >
 <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
 <div className="flex items-center gap-2 text-slate-900">
 <KeyRound className="w-5 h-5 text-fuchsia-600" />
 <h2 className="font-bold">Integration Settings</h2>
 </div>
 <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors">
 <X className="w-5 h-5" />
 </button>
 </div>
 
 <div className="p-6 space-y-6">
 <div className="bg-fuchsia-50 border border-fuchsia-200/60 p-4 rounded-2xl">
 <p className="text-xs text-fuchsia-800 leading-relaxed font-medium">
 To deploy concurrent headless agents securely in the cloud, please configure your Browser Use and AI Provider Keys below.
 </p>
 </div>

 <div className="space-y-4">
 <div className="space-y-1.5">
 <label className="text-xs font-bold text-slate-700 ml-1">Browser Use API Key</label>
 <Input 
 type="password" 
 placeholder="bu_..." 
 className="bg-slate-50"
 />
 </div>
 <div className="space-y-1.5">
 <label className="text-xs font-bold text-slate-700 ml-1">AI Provider Key</label>
 <Input 
 type="password" 
 placeholder="sk-..." 
 value={aiProviderKey}
 onChange={(e) => setAiProviderKey(e.target.value)}
 className="bg-slate-50"
 />
 </div>
 </div>

 <Button 
 onClick={() => setShowSettings(false)}
 className="w-full bg-slate-900 hover:bg-fuchsia-600 text-white rounded-xl py-6 font-bold transition-colors"
 >
 Save Configuration
 </Button>
 </div>
 </motion.div>
 </>
 )}
 </AnimatePresence>
 </div>
 );
};

export default AstraMarket;
