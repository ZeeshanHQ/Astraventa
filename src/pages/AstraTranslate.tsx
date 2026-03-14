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
 Globe,
 Languages,
 ArrowRightLeft,
 FileCheck2,
 Sparkles,
 DownloadCloud
} from "lucide-react";
import { AstraventaLogo } from "@/components/AstraventaLogo";

type Message = {
 id: string;
 role: "user" | "assistant";
 content: string | React.ReactNode;
 timestamp: Date;
};

const AstraTranslate = () => {
 const [messages, setMessages] = useState<Message[]>([
 {
 id: "welcome",
 role: "assistant",
 content: "Welcome to AstraTranslate AI. I specialize in contextual enterprise localization. Paste your text, upload a business document, or provide a URL, and I will translate it while preserving your brand voice and industry terminology.",
 timestamp: new Date()
 }
 ]);
 const [input, setInput] = useState("");
 const [isTyping, setIsTyping] = useState(false);
 const [showSettings, setShowSettings] = useState(false);
 
 // Translation State
 const [sourceText, setSourceText] = useState("");
 const [targetText, setTargetText] = useState("");
 const [sourceLang, setSourceLang] = useState("English (US)");
 const [targetLang, setTargetLang] = useState("Spanish (ES)");
 const [isTranslating, setIsTranslating] = useState(false);
 const messagesEndRef = useRef<HTMLDivElement>(null);

 // Settings State
 const [aiProviderKey, setAiProviderKey] = useState("");

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 };

 useEffect(() => {
 scrollToBottom();
 }, [messages, isTyping]);

 const handleTranslate = () => {
 if (!sourceText.trim()) return;
 
 setIsTranslating(true);
 
 // Simulate complex API translation
 setTimeout(() => {
 const mockTranslations: Record<string, string> = {
 "Spanish (ES)": "Esta nueva arquitectura de software aumentará la escalabilidad de la empresa en un 400 %, garantizando un tiempo de inactividad nulo durante las cargas de trabajo máximas.",
 "German (DE)": "Diese neue Softwarearchitektur wird die Skalierbarkeit des Unternehmens um 400 % erhöhen und eine Null-Ausfallzeit während Spitzenlasten gewährleisten.",
 "Japanese (JA)": "この新しいソフトウェアアーキテクチャは、企業の拡張性を400％向上させ、ピーク時のワークロード中のダウンタイムをゼロに保証します。",
 "Arabic (AR)": "ستؤدي بنية البرامج الجديدة هذه إلى زيادة قابلية التوسع في المؤسسة بنسبة 400٪ ، مما يضمن عدم وجود وقت تعطل أثناء أعباء العمل القصوى.",
 "Urdu (UR)": "یہ نیا سافٹ ویئر فن تعمیر انٹرپرائز کی اسکیل ایبلٹی میں 400٪ اضافہ کرے گا ، جس سے چوٹی کے کام کے بوجھ کے دوران صفر ڈاؤن ٹائم کی ضمانت ہوگی۔"
 };
 
 setTargetText(mockTranslations[targetLang] || "Traducción completada con éxito. (Translation successful)");
 setIsTranslating(false);
 
 setMessages(prev => [
 ...prev, 
 {
 id: Date.now().toString(),
 role: "assistant",
 content: (
 <div className="space-y-2">
 <p className="flex items-center gap-2 font-bold text-cyan-700">
 <FileCheck2 className="w-4 h-4" /> Localization Complete
 </p>
 <p>I have translated the text to <strong>{targetLang}</strong> while strictly adhering to your B2B technical terminology guidelines. The brand tone remains formal and assertive.</p>
 </div>
 ),
 timestamp: new Date()
 }
 ]);
 }, 2500);
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
 
 if (lowerText.includes("formal") || lowerText.includes("tone") || lowerText.includes("brand")) {
 responseContent = "I've updated the translation context. I will now ensure all subsequent translations sound highly formal, technical, and match the 'Astraventa Executive' brand voice guidelines.";
 } else if (lowerText.includes("term") || lowerText.includes("glossary")) {
 responseContent = "I have updated the glossary. I will never translate the product names 'AstraReach' and 'AstraFlow', and I will ensure 'automation' is always localized appropriately for the enterprise B2B context.";
 } else {
 responseContent = "I've noted your instruction. To run continuous live sync with your CMS or Google Drive for document translations, please configure your AI Provider Key in Settings.";
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

 const languages = ["Spanish (ES)", "German (DE)", "French (FR)", "Japanese (JA)", "Arabic (AR)", "Urdu (UR)", "Chinese (ZH)"];

 return (
 <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
 <Header />
 
 <main className="flex-1 flex flex-col lg:flex-row pt-24 px-4 pb-4 gap-4 max-w-[1600px] mx-auto w-full h-screen">
 
 {/* Left Panel - Translation Interface */}
 <div className="w-full lg:w-[50%] xl:w-[55%] shrink-0 flex flex-col gap-4">
 
 <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex flex-col flex-1">
 <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-cyan-50/30">
 <div className="flex items-center gap-3">
 <Globe className="w-5 h-5 text-cyan-600" />
 <span className="font-bold text-slate-900">Enterprise Localization Desk</span>
 </div>
 <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
 <Languages className="w-4 h-4 text-cyan-500" />
 <span className="text-xs font-bold text-slate-700">AI Neural Engine Active</span>
 </div>
 </div>

 <div className="flex-1 flex flex-col p-6 gap-6 bg-slate-50/50">
 {/* Source Area */}
 <div className="flex-1 flex flex-col">
 <div className="flex justify-between items-center mb-2 px-1">
 <div className="text-sm font-bold text-slate-700">{sourceLang} (Source)</div>
 <button className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full hover:bg-cyan-100">Upload Document</button>
 </div>
 <textarea 
 value={sourceText}
 onChange={(e) => setSourceText(e.target.value)}
 placeholder="Enter business text, legal clauses, or copy/paste a pitch deck slide here..."
 className="flex-1 w-full resize-none p-5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 bg-white text-slate-800 text-[15px] leading-relaxed shadow-inner"
 />
 </div>

 {/* Controls */}
 <div className="flex items-center justify-between px-2">
 <div className="flex-1 h-px bg-slate-200" />
 <motion.button 
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 onClick={handleTranslate}
 disabled={isTranslating || !sourceText}
 className="mx-4 w-12 h-12 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
 >
 {isTranslating ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRightLeft className="w-5 h-5 rotate-90" />}
 </motion.button>
 <div className="flex-1 h-px bg-slate-200" />
 </div>

 {/* Target Area */}
 <div className="flex-1 flex flex-col">
 <div className="flex justify-between items-center mb-2 px-1">
 <select 
 value={targetLang}
 onChange={(e) => setTargetLang(e.target.value)}
 className="text-sm font-bold text-cyan-700 focus:outline-none bg-transparent cursor-pointer"
 >
 {languages.map(lang => (
 <option key={lang} value={lang}>{lang}</option>
 ))}
 </select>
 {targetText && (
 <button className="text-slate-400 hover:text-cyan-600 transition-colors">
 <DownloadCloud className="w-4 h-4" />
 </button>
 )}
 </div>
 <div className={`flex-1 w-full p-5 rounded-2xl border ${targetText ? 'border-cyan-200 bg-cyan-50/30' : 'border-slate-200 bg-slate-100/50'} text-slate-800 text-[15px] leading-relaxed overflow-y-auto`}>
 {isTranslating ? (
 <div className="flex items-center gap-3 text-cyan-600 h-full justify-center opacity-70">
 <Loader2 className="w-5 h-5 animate-spin" />
 <span className="font-bold animate-pulse">Running Neural Translation Model...</span>
 </div>
 ) : targetText ? (
 targetText
 ) : (
 <span className="text-slate-400">Translation will appear here...</span>
 )}
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Right Panel - Chat Area */}
 <div className="flex-1 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex flex-col relative w-full">
 
 <div className="h-16 border-b border-slate-100 flex justify-between items-center px-6 shrink-0 bg-white/50 backdrop-blur-sm z-10">
 <div className="flex items-center gap-3">
 <Bot className="w-5 h-5 text-cyan-600" />
 <span className="font-bold text-slate-900">Localization Copilot</span>
 <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
 Active
 </span>
 </div>
 <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)} className="text-slate-500 hover:bg-cyan-50 hover:text-cyan-600">
 <Settings2 className="w-5 h-5" />
 </Button>
 </div>

 <div className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-50/40 via-white to-white">
 <div className="max-w-3xl mx-auto space-y-6">
 {messages.map((msg) => (
 <motion.div
 key={msg.id}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className={`flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
 >
 <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
 msg.role === 'user' ? 'bg-primary text-white' : 'bg-cyan-100 text-cyan-600'
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
 <div className="w-8 h-8 shrink-0 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
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
 onClick={() => {
 setSourceText("This new software architecture will increase enterprise scalability by 400%, guaranteeing zero downtime during peak workloads.");
 handleSend("Make the translation sound highly formal, technical, and persuasive for executive investors.");
 }}
 className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-700 hover:bg-cyan-100 text-xs font-bold transition-colors border border-cyan-100"
 >
 <Sparkles className="w-3 h-3" /> "Make the tone formal & technical"
 </button>
 <button 
 onClick={() => handleSend("Do NOT translate our product names like 'AstraReach' in any future documents.")}
 className="shrink-0 px-3 py-1.5 rounded-lg bg-cyan-50 text-cyan-700 hover:bg-cyan-100 text-xs font-bold transition-colors border border-cyan-100"
 >
 "Update Glossary: Don't translate product names"
 </button>
 </div>

 <div className="p-4 bg-white border-t border-slate-100">
 <div className="max-w-4xl mx-auto relative group">
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
 placeholder="Instruct the translation engine (e.g. adjust tone, update glossary)..."
 className="w-full pl-6 pr-14 py-7 bg-slate-50 border-slate-200 focus-visible:ring-cyan-500/20 focus-visible:border-cyan-500 rounded-2xl shadow-inner text-[15px]"
 />
 <Button
 onClick={() => handleSend()}
 disabled={!input.trim() || isTyping}
 size="icon"
 className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white transition-colors disabled:opacity-50"
 >
 {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
 </Button>
 </div>
 <div className="text-center mt-3">
 <span className="text-[10px] text-slate-400 font-medium tracking-wide">
 AstraTranslate models are fine-tuned for high-stakes B2B communications.
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
 <KeyRound className="w-5 h-5 text-cyan-600" />
 <h2 className="font-bold">Integration Settings</h2>
 </div>
 <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors">
 <X className="w-5 h-5" />
 </button>
 </div>
 
 <div className="p-6 space-y-6">
 <div className="bg-cyan-50 border border-cyan-200/60 p-4 rounded-2xl">
 <p className="text-xs text-cyan-800 leading-relaxed font-medium">
 To enable 50+ languages and live 100k+ token document processing, configure your AI Provider Key below.
 </p>
 </div>

 <div className="space-y-4">
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
 className="w-full bg-slate-900 hover:bg-cyan-600 text-white rounded-xl py-6 font-bold transition-colors"
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

export default AstraTranslate;
