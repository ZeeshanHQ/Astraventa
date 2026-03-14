import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
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
 FileSearch,
 UploadCloud,
 FileText,
 Search,
 Scale,
 BrainCircuit,
 FileSignature
} from "lucide-react";
import { AstraventaLogo } from "@/components/AstraventaLogo";

type Message = {
 id: string;
 role: "user" | "assistant";
 content: string | React.ReactNode;
 timestamp: Date;
};

const AstraDoc = () => {
 const [messages, setMessages] = useState<Message[]>([
 {
 id: "welcome",
 role: "assistant",
 content: "Welcome to AstraDoc AI. Please upload a PDF, contract, or financial report, and I will extract key clauses, summarize risks, or answer specific questions based on the text.",
 timestamp: new Date()
 }
 ]);
 const [input, setInput] = useState("");
 const [isTyping, setIsTyping] = useState(false);
 const [showSettings, setShowSettings] = useState(false);
 
 // Document State Simulation
 const [uploadedFile, setUploadedFile] = useState<string | null>(null);
 const [isUploading, setIsUploading] = useState(false);
 const fileInputRef = useRef<HTMLInputElement>(null);
 const messagesEndRef = useRef<HTMLDivElement>(null);

 // Settings State
 const [aiProviderKey, setAiProviderKey] = useState("");

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 };

 useEffect(() => {
 scrollToBottom();
 }, [messages, isTyping]);

 const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
 const file = e.target.files?.[0];
 if (file) {
 setIsUploading(true);
 // Simulate document processing delay
 setTimeout(() => {
 setUploadedFile(file.name);
 setIsUploading(false);
 setMessages(prev => [
 ...prev, 
 {
 id: Date.now().toString(),
 role: "assistant",
 content: `Document "${file.name}" has been successfully parsed and embedded into the vector space. What would you like to know about it?`,
 timestamp: new Date()
 }
 ]);
 }, 2000);
 }
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
 let responseContent: React.ReactNode = "Analyzing document context...";
 const lowerText = text.toLowerCase();
 
 if (!uploadedFile && (lowerText.includes("summary") || lowerText.includes("risk") || lowerText.includes("extract"))) {
 responseContent = "I cannot perform that analysis yet. Please upload a document in the viewer pane first.";
 } else if (uploadedFile && (lowerText.includes("summary") || lowerText.includes("summarize"))) {
 responseContent = (
 <div className="space-y-3">
 <p className="font-bold text-slate-800">Executive Summary Extraction:</p>
 <p className="text-sm">The uploaded document outlines a multi-year software licensing agreement between Astraventa and Client Co. The total contract value is estimated at <strong>$240,000 USD</strong> annually, with a focus on deploying the AstraReach enterprise automation suite.</p>
 </div>
 );
 } else if (uploadedFile && (lowerText.includes("risk") || lowerText.includes("clause") || lowerText.includes("legal"))) {
 responseContent = (
 <div className="space-y-4 w-full">
 <p className="font-bold text-slate-800">Risk Assessment Complete. 2 Clauses Flagged:</p>
 
 <div className="bg-rose-50 border border-rose-100 rounded-xl p-3">
 <div className="flex items-start gap-2">
 <Scale className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
 <div>
 <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1">Termination Clause 4.2</h4>
 <p className="text-sm text-rose-800">The termination notice period is unusually short (15 days). Standard protocol recommends 60-90 days.</p>
 </div>
 </div>
 </div>

 <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
 <div className="flex items-start gap-2">
 <BrainCircuit className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
 <div>
 <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">Data Ownership 8.1</h4>
 <p className="text-sm text-amber-800">The language regarding AI training data ownership is ambiguous. Recommend defining explicit rights over fine-tuned weights.</p>
 </div>
 </div>
 </div>
 </div>
 );
 } else {
 responseContent = `I received your query regarding ${uploadedFile || 'the files'}. To run live semantic extraction and RAG pipelines, please configure your AI Provider Key in Settings.`;
 }

 const newBotMsg: Message = {
 id: (Date.now() + 1).toString(),
 role: "assistant",
 content: responseContent,
 timestamp: new Date()
 };
 
 setMessages(prev => [...prev, newBotMsg]);
 setIsTyping(false);
 }, 1600);
 };

 const quickPrompts = [
 { title: "Generate Summary", prompt: "Provide an executive summary of this document." },
 { title: "Identify Legal Risks", prompt: "Highlight any risky clauses or unusual legal obligations." },
 { title: "Extract Financials", prompt: "Extract all pricing details and total contract value." }
 ];

 return (
 <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
 <Header />
 
 <main className="flex-1 flex flex-col lg:flex-row pt-24 px-4 pb-4 gap-4 max-w-[1600px] mx-auto w-full h-screen">
 
 {/* Left Panel - Document Viewer Interface */}
 <div className="w-full lg:w-[45%xl:w-[50%] shrink-0 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex flex-col relative">
 
 <div className="h-16 border-b border-slate-100 flex justify-between items-center px-6 shrink-0 bg-white z-10">
 <div className="flex items-center gap-3">
 <FileSearch className="w-5 h-5 text-rose-500" />
 <span className="font-bold text-slate-900">AstraDoc Viewer</span>
 </div>
 {uploadedFile && (
 <Button variant="ghost" size="sm" onClick={() => setUploadedFile(null)} className="text-rose-600 hover:bg-rose-50 hover:text-rose-700 h-8 text-xs font-bold px-3">
 Clear Document
 </Button>
 )}
 </div>

 <div className="flex-1 bg-slate-100/50 relative overflow-hidden flex items-center justify-center p-6">
 {/* Upload State */}
 {!uploadedFile && !isUploading && (
 <div 
 className="w-full max-w-md border-2 border-dashed border-slate-300 rounded-3xl bg-white p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 group"
 onClick={() => fileInputRef.current?.click()}
 >
 <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center mb-6 group- transition-transform">
 <UploadCloud className="w-8 h-8" />
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Document</h3>
 <p className="text-sm text-slate-500 mb-6">Drag and drop or click to browse PDF, DOCX, or Excel files.</p>
 <Button className="bg-slate-900 hover:bg-rose-500 text-white rounded-xl shadow-lg pointer-events-none">
 Select File
 </Button>
 <input 
 type="file" 
 ref={fileInputRef} 
 className="hidden" 
 accept=".pdf,.doc,.docx,.xls,.xlsx" 
 onChange={handleFileUpload}
 />
 </div>
 )}

 {/* Loading State */}
 {isUploading && (
 <div className="flex flex-col items-center justify-center text-center animate-pulse">
 <div className="w-16 h-16 rounded-full border-4 border-rose-100 border-t-rose-500 animate-spin mb-6" />
 <h3 className="text-xl font-bold text-slate-900 mb-2">Parsing Document...</h3>
 <p className="text-sm text-slate-500">Vectorizing text and embedding chunks for semantic search.</p>
 </div>
 )}

 {/* Document Viewer State (Mockup) */}
 {uploadedFile && !isUploading && (
 <div className="w-full h-full bg-white border border-slate-200 shadow-sm rounded-xl overflow-y-auto p-8 relative">
 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-orange-400" />
 
 <div className="max-w-2xl mx-auto opacity-70">
 <div className="border-b border-slate-200 pb-6 mb-6 flex items-start gap-4">
 <FileSignature className="w-12 h-12 text-slate-400 shrink-0" />
 <div>
 <h1 className="text-2xl font-serif font-bold text-slate-900 mb-2 truncate">{uploadedFile}</h1>
 <p className="text-sm text-slate-500">Master Services Agreement • Confidential</p>
 </div>
 </div>

 <div className="space-y-4 font-serif text-slate-700 leading-relaxed text-[15px]">
 <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">1. Definitions and Interpretation</h3>
 <p className="bg-slate-100/50 p-2 rounded">1.1 In this Agreement, unless the context otherwise requires, the following expressions shall have the following meanings:</p>
 <ul className="list-disc pl-6 space-y-2">
 <li><strong>"Confidential Information"</strong> means any information disclosed by one party to the other party...</li>
 <li><strong>"Intellectual Property Rights"</strong> means patents, trademarks, service marks, trade names, design rights...</li>
 </ul>

 <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">4. Term and Termination</h3>
 <p>4.1 This Agreement shall commence on the Effective Date and shall continue for an initial core period of 12 months...</p>
 <p className="bg-rose-50 border border-rose-200 p-2 rounded text-rose-900"><strong>4.2</strong> Either party may terminate this Agreement without cause by giving <strong>fifteen (15) days</strong> written notice to the other party.</p>
 
 <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">8. Platform Data & AI Training</h3>
 <p className="bg-amber-50 border border-amber-200 p-2 rounded text-amber-900"><strong>8.1</strong> Any data generated through the use of the Software may be utilized for algorithmic improvements. Ownership of derived model weights shall be subject to mutual ongoing discussion.</p>
 </div>

 <div className="flex items-center justify-center p-8 mt-10">
 <div className="h-px bg-slate-200 flex-1" />
 <span className="px-4 text-xs text-slate-400 uppercase tracking-widest font-bold">End of Document Preview</span>
 <div className="h-px bg-slate-200 flex-1" />
 </div>
 </div>
 </div>
 )}
 </div>
 </div>

 {/* Right Panel - Chat Area */}
 <div className="flex-[1.2] bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex flex-col relative w-full">
 
 <div className="h-16 border-b border-slate-100 flex justify-between items-center px-6 shrink-0 bg-white/50 backdrop-blur-sm z-10">
 <div className="flex items-center gap-3">
 <Bot className="w-5 h-5 text-rose-600" />
 <span className="font-bold text-slate-900">AstraDoc Copilot</span>
 <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
 Active
 </span>
 </div>
 <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)} className="text-slate-500 hover:bg-rose-50 hover:text-rose-600">
 <Settings2 className="w-5 h-5" />
 </Button>
 </div>

 <div className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-50/30 via-white to-white">
 <div className="max-w-3xl mx-auto space-y-6">
 {messages.map((msg) => (
 <motion.div
 key={msg.id}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className={`flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
 >
 <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
 msg.role === 'user' ? 'bg-primary text-white' : 'bg-rose-100 text-rose-600'
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
 <div className="w-8 h-8 shrink-0 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
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

 {/* Quick Prompts */}
 {uploadedFile && (
 <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
 {quickPrompts.map((p, i) => (
 <button 
 key={i}
 onClick={() => handleSend(p.prompt)}
 className="shrink-0 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs font-bold transition-colors border border-rose-100"
 >
 "{p.title}"
 </button>
 ))}
 </div>
 )}

 {/* Input Area */}
 <div className="p-4 bg-white border-t border-slate-100">
 <div className="max-w-4xl mx-auto relative group">
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
 placeholder={uploadedFile ? "Ask a question about the document..." : "Please upload a document to begin..."}
 disabled={!uploadedFile}
 className="w-full pl-6 pr-14 py-7 bg-slate-50 border-slate-200 focus-visible:ring-rose-500/20 focus-visible:border-rose-500 rounded-2xl shadow-inner text-[15px] disabled:opacity-60"
 />
 <Button
 onClick={() => handleSend()}
 disabled={!input.trim() || isTyping || !uploadedFile}
 size="icon"
 className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 hover:bg-rose-600 text-white transition-colors disabled:opacity-50"
 >
 {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
 </Button>
 </div>
 <div className="text-center mt-3">
 <span className="text-[10px] text-slate-400 font-medium tracking-wide">
 AstraDoc uses vector indexing (RAG) to ensure hallucination-free factual analysis.
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
 <KeyRound className="w-5 h-5 text-rose-600" />
 <h2 className="font-bold">Integration Settings</h2>
 </div>
 <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors">
 <X className="w-5 h-5" />
 </button>
 </div>
 
 <div className="p-6 space-y-6">
 <div className="bg-rose-50 border border-rose-200/60 p-4 rounded-2xl">
 <p className="text-xs text-rose-800 leading-relaxed font-medium">
 To enable live PDF parsing and semantic vector search, configure your AI Provider Key below. (e.g. Pinecone + OpenAI API Key)
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
 className="w-full bg-slate-900 hover:bg-rose-600 text-white rounded-xl py-6 font-bold transition-colors"
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

export default AstraDoc;
