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
import { callOpenRouter } from "@/lib/openRouterService";
import { toast } from "sonner";

type Message = {
  id: string;
  role: "system" | "user" | "assistant";
  content: string | React.ReactNode;
  timestamp: Date;
};

const languages = [
  "Auto-Detect",
  "English (US)",
  "Spanish (ES)",
  "German (DE)",
  "French (FR)",
  "Japanese (JA)",
  "Arabic (AR)",
  "Urdu (UR)",
  "Chinese (ZH)"
];

const targetLanguages = languages.filter(l => l !== "Auto-Detect");

export default function AstraTranslate() {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("astra-translate-messages");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }));
      } catch (e) {}
    }
    return [{
      id: "welcome",
      role: "assistant",
      content: "Welcome to AstraTranslate AI. I specialize in contextual enterprise localization. Ask me to adjust translation tone, or add words to your glossary.",
      timestamp: new Date()
    }];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Translation State
  const [sourceText, setSourceText] = useState(() => localStorage.getItem("astra-translate-source") || "");
  const [targetText, setTargetText] = useState(() => localStorage.getItem("astra-translate-target") || "");
  const [sourceLang, setSourceLang] = useState(() => localStorage.getItem("astra-translate-sourceLang") || "Auto-Detect");
  const [targetLang, setTargetLang] = useState(() => localStorage.getItem("astra-translate-targetLang") || "Spanish (ES)");
  const [isTranslating, setIsTranslating] = useState(false);
  
  // Context state managed by copilot
  const [tone, setTone] = useState(() => localStorage.getItem("astra-translate-tone") || "Professional and formal");
  const [glossary, setGlossary] = useState(() => localStorage.getItem("astra-translate-glossary") || "Do not translate proper nouns or brand names like Astraventa.");

  // Save state to localStorage strings to avoid complex serialization
  useEffect(() => {
    localStorage.setItem("astra-translate-source", sourceText);
    localStorage.setItem("astra-translate-target", targetText);
    localStorage.setItem("astra-translate-sourceLang", sourceLang);
    localStorage.setItem("astra-translate-targetLang", targetLang);
    localStorage.setItem("astra-translate-tone", tone);
    localStorage.setItem("astra-translate-glossary", glossary);
  }, [sourceText, targetText, sourceLang, targetLang, tone, glossary]);

  // Messages complex serialization
  useEffect(() => {
    // Only save serializable parts of messages (ReactNode content is tricky, we'll only save string messages from user/copilot, skip system JSX)
    const serializable = messages.filter(m => typeof m.content === 'string');
    localStorage.setItem("astra-translate-messages", JSON.stringify(serializable));
  }, [messages]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setIsTranslating(true);
    setTargetText("");

    const systemPrompt = `You are a world-class enterprise localization engine.
Your task is to perfectly translate the following text.
Source Language: ${sourceLang}
Target Language: ${targetLang}
Required Tone: ${tone}
Glossary/Rules: ${glossary}

CRITICAL: Output ONLY the raw translated text. Absolutely no meta-commentary, no quotes, no explanations. Just the translation.`;

    try {
      const translation = await callOpenRouter([
        { role: "system", content: systemPrompt },
        { role: "user", content: sourceText }
      ], { temperature: 0.2, maxTokens: 4096 });
      
      setTargetText(translation);

      // Add a success message to the chat
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: (
            <div className="space-y-2">
              <p className="flex items-center gap-2 font-bold text-teal-600">
                <FileCheck2 className="w-4 h-4" /> Localization Complete
              </p>
              <p>I have translated the text to <strong>{targetLang}</strong>. Tone: <em>{tone}</em>.</p>
            </div>
          ),
          timestamp: new Date()
        }
      ]);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Translation failed. Please try again.");
    } finally {
      setIsTranslating(false);
    }
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

    const copilotSystemPrompt = `You are the Localization Copilot for Astraventa Translate.
The user is talking to you to adjust translation settings.
Current Tone: ${tone}
Current Glossary: ${glossary}

Acknowledge their request briefly, professionally, and tell them you've updated their preferences for the next translation. Keep your answer under 2 sentences. Output ONLY your response to them.`;

    try {
      const responseContent = await callOpenRouter([
        { role: "system", content: copilotSystemPrompt },
        { role: "user", content: text }
      ], { temperature: 0.7, maxTokens: 500 });
      
      // Heuristic string matching just to mimic state update visually for demo
      if (text.toLowerCase().includes("tone") || text.toLowerCase().includes("formal")) {
        setTone(text);
      }
      if (text.toLowerCase().includes("glossary") || text.toLowerCase().includes("translate")) {
        setGlossary(text);
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: responseContent,
          timestamp: new Date()
        }
      ]);
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I am currently experiencing an engine connection error.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex flex-col lg:flex-row pt-24 px-4 pb-4 gap-4 max-w-[1600px] mx-auto w-full h-screen">

        {/* Left Panel - Translation Interface */}
        <div className="w-full lg:w-[50%] xl:w-[55%] shrink-0 flex flex-col gap-4">

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex flex-col flex-1">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-teal-600/10">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-teal-700" />
                <span className="font-bold text-slate-900">Enterprise Localization Desk</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <Languages className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-bold text-slate-700">Astra Neural Engine Active</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col p-6 gap-6 bg-slate-50/50">
              {/* Source Area */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2 px-1">
                  <select
                    value={sourceLang}
                    onChange={(e) => setSourceLang(e.target.value)}
                    className="text-sm font-bold text-slate-700 focus:outline-none bg-transparent cursor-pointer"
                  >
                    {languages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                  <button className="text-[10px] font-bold text-teal-700 bg-teal-600/10 px-2 py-1 rounded-full hover:bg-teal-600/20">Upload Document</button>
                </div>
                <textarea
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  placeholder="Enter business text, legal clauses, or copy/paste a pitch deck slide here..."
                  className="flex-1 w-full resize-none p-5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/20 bg-white text-slate-800 text-[15px] leading-relaxed shadow-inner"
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
                  className="mx-4 w-12 h-12 rounded-full bg-teal-600/10 hover:bg-teal-600/20 text-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    className="text-sm font-bold text-teal-700 focus:outline-none bg-transparent cursor-pointer"
                  >
                    {targetLanguages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                  {targetText && (
                    <button className="text-slate-400 hover:text-teal-600 transition-colors">
                      <DownloadCloud className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className={`flex-1 w-full p-5 rounded-2xl border ${targetText ? 'border-teal-500/20 bg-teal-50' : 'border-slate-200 bg-slate-100/50'} text-slate-800 text-[15px] leading-relaxed overflow-y-auto`}>
                  {isTranslating ? (
                    <div className="flex items-center gap-3 text-teal-600 h-full justify-center opacity-70">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="font-bold animate-pulse">Running Neural Translation Model...</span>
                    </div>
                  ) : targetText ? (
                    <div className="whitespace-pre-wrap">{targetText}</div>
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
              <Bot className="w-5 h-5 text-teal-600" />
              <span className="font-bold text-slate-900">Localization Copilot (Astra)</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                Active
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/5 via-white to-white">
            <div className="max-w-3xl mx-auto space-y-6">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-teal-600 text-white' : 'bg-teal-600/10 text-teal-700'
                    }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <AstraventaLogo size="sm" iconOnly />}
                  </div>
                  <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[85%] sm:max-w-[80%]`}>
                    <div className={`px-4 sm:px-5 py-3.5 rounded-2xl text-[14px] sm:text-[15px] leading-relaxed w-full ${msg.role === 'user'
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
                  <div className="w-8 h-8 shrink-0 rounded-full bg-teal-600/10 text-teal-700 flex items-center justify-center">
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
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600/10 text-teal-700 hover:bg-teal-600/20 text-xs font-bold transition-colors border border-teal-600/20"
            >
              <Sparkles className="w-3 h-3" /> "Make the tone formal & technical"
            </button>
            <button
              onClick={() => handleSend("Do NOT translate our product names like 'AstraReach' in any future documents.")}
              className="shrink-0 px-3 py-1.5 rounded-lg bg-teal-600/10 text-teal-700 hover:bg-teal-600/20 text-xs font-bold transition-colors border border-teal-600/20"
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
                className="w-full pl-6 pr-14 py-7 bg-slate-50 border-slate-200 focus-visible:ring-teal-600/30 focus-visible:border-teal-600/20 rounded-2xl shadow-inner text-[15px]"
              />
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-900 hover:bg-teal-600/10 text-white transition-colors disabled:opacity-50"
              >
                {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
              </Button>
            </div>
            <div className="text-center mt-3">
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                AstraTranslate neural models are fine-tuned for high-stakes B2B communications.
              </span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
