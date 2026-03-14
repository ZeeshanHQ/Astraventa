import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { 
  BookOpen, Search, ChevronRight, Mail, Globe, FileText, Bot, FileSearch, 
  LineChart, MousePointerClick, Activity, ShieldCheck, PenTool, Video, Palette, 
  ScrollText, Wand2, Users, Target, MessageSquareText, CalendarDays, Database, 
  CheckSquare, MailX, UserSquare2, Scale, Megaphone, Receipt, ShoppingCart, 
  Trophy, Radio, ScanLine, Sun, BarChart2, Heart, PenLine, ArrowRight, ExternalLink,
  Layers, Rocket, Cpu, Sparkles, Terminal, Shield, Zap, Info, List
} from "lucide-react";

import { Button } from "@/components/ui/button";

// --- Documentation Data Layer ---

const DOCUMENTATION_CATEGORIES = [
  { id: "saas", name: "SaaS Products", icon: Layers, description: "Deep-dives into our flagship platforms." },
  { id: "agents", name: "AI Modules", icon: Bot, description: "Technical docs for our autonomous agents." },
  { id: "platform", name: "Guides", icon: FileText, description: "Setup, security, and enterprise standards." },
  { id: "api", name: "API Reference", icon: Terminal, description: "Technical integration protocols." }
];

const SAAS_DOCS = [
  { id: "launchpact", name: "LaunchPact AI", icon: Rocket, color: "text-primary", tagline: "The Venture Architect", overview: "Strategic blueprinting for rapid startup execution.", href: "/products/launchpact" },
  { id: "cavexa", name: "Shorts Cavexa", icon: Video, color: "text-indigo-500", tagline: "The Content Engine", overview: "Autonomous short-form video production at scale.", href: "/products/cavexa" },
  { id: "outrelix", name: "Outrelix", icon: Target, color: "text-emerald-500", tagline: "The Outreach Automator", overview: "Precision lead intelligence and autonomous outreach.", href: "/products/outrelix" },
  { id: "legalflow", name: "LegalFlow", icon: Shield, color: "text-blue-500", tagline: "The Case Orchestrator", overview: "Engineering precision in legal document automation.", href: "/products/legalflow" },
  { id: "complymail", name: "ComplyMail", icon: Mail, color: "text-rose-500", tagline: "The Regulatory Sentinel", overview: "AI-driven communication compliance and risk management.", href: "/products/complymail" },
  { id: "vectrax", name: "Vectrax", icon: Search, color: "text-purple-500", tagline: "The Intelligent Scanner", overview: "Deep project indexing and database management.", href: "/products/vectrax" }
];

// Re-using existing tools data but restructured
const AGENT_DOCS = [
  { id: "astra-reach", name: "AstraReach AI", icon: Mail, color: "text-blue-500", tagline: "Autonomous Email Operations Copilot" },
  { id: "astra-scrape", name: "AstraScrape AI", icon: Globe, color: "text-green-500", tagline: "Resilient Web Data Extractor" },
  { id: "astra-flow", name: "AstraFlow AI", icon: FileText, color: "text-purple-500", tagline: "Workflow Automation Builder" },
  { id: "astra-doc", name: "AstraDoc AI", icon: FileSearch, color: "text-red-500", tagline: "Intelligent Document Analyzer" },
  { id: "astra-agent", name: "AstraAgent AI", icon: MousePointerClick, color: "text-blue-500", tagline: "Autonomous Browser Worker" },
  { id: "astra-pulse", name: "AstraPulse AI", icon: Activity, color: "text-emerald-500", tagline: "AI Observability Dashboard" }
];

const PLATFORM_DOCS = [
  { id: "getting-started", name: "Getting Started", icon: Sparkles, color: "text-slate-600", tagline: "Quickstart guide for the Astraventa ecosystem." },
  { id: "security-compliance", name: "Security & Compliance", icon: ShieldCheck, color: "text-slate-600", tagline: "Our standards for data protection and regulatory sentinel logic." },
  { id: "authentication", name: "Authentication", icon: Zap, color: "text-slate-600", tagline: "Identity management and cryptographic protocol guides." }
];

const API_DOCS = [
  { id: "authentication-api", name: "Auth API", icon: Shield, color: "text-slate-600", tagline: "Bearer tokens and session management." },
  { id: "webhooks", name: "Webhooks", icon: Radio, color: "text-slate-600", tagline: "Real-time event notification protocols." },
  { id: "core-endpoints", name: "Core Endpoints", icon: Terminal, color: "text-slate-600", tagline: "Direct access to AI reasoning modules." }
];

const ALL_CONTENT: Record<string, any[]> = {
  saas: SAAS_DOCS,
  agents: AGENT_DOCS,
  platform: PLATFORM_DOCS,
  api: API_DOCS
};

export default function AstraDocs() {
  const { toolId } = useParams<{ toolId?: string }>();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("saas");
  const [activeId, setActiveId] = useState(toolId || SAAS_DOCS[0].id);

  // Sync state with URL
  useEffect(() => {
    if (toolId) {
      // Find which category this ID belongs to
      for (const [cat, items] of Object.entries(ALL_CONTENT)) {
        if (items.some(i => i.id === toolId)) {
          setActiveCategory(cat);
          setActiveId(toolId);
          break;
        }
      }
    }
  }, [toolId]);

  const activeItems = ALL_CONTENT[activeCategory] || [];
  const activeDoc = useMemo(() => {
    return activeItems.find(t => t.id === activeId) || activeItems[0];
  }, [activeId, activeItems]);

  const filteredItems = useMemo(() => {
    if (!searchQuery) return activeItems;
    return activeItems.filter(i => 
      i.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      i.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, activeItems]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    navigate(`/docs/${id}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="flex pt-20 h-screen overflow-hidden">
        
        {/* --- Sidebar Level 1: Global Categories --- */}
        <aside className="w-[72px] shrink-0 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-6 gap-6 z-30">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col gap-4">
            {DOCUMENTATION_CATEGORIES.map(cat => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    const firstItem = ALL_CONTENT[cat.id][0];
                    handleSelect(firstItem.id);
                  }}
                  className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all group ${active ? "bg-white text-primary shadow-sm ring-1 ring-slate-200" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"}`}
                >
                  <cat.icon className="w-5 h-5" />
                  <div className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                    {cat.name}
                  </div>
                  {active && <motion.div layoutId="activeCat" className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />}
                </button>
              );
            })}
          </div>
        </aside>

        {/* --- Sidebar Level 2: Sub-item Navigation --- */}
        <aside className="w-72 shrink-0 bg-white border-r border-slate-100 flex flex-col h-full z-20">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              {DOCUMENTATION_CATEGORIES.find(c => c.id === activeCategory)?.name}
            </h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold outline-none focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
            {filteredItems.map(item => {
              const active = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${active ? "bg-slate-900 border-slate-800 shadow-md" : "hover:bg-slate-50 border-transparent"}`}
                >
                  <item.icon className={`w-4 h-4 shrink-0 ${active ? "text-white" : item.color || "text-slate-500"}`} strokeWidth={2} />
                  <span className={`text-sm font-bold truncate ${active ? "text-white" : "text-slate-600"}`}>{item.name}</span>
                  {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-slate-500" />}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* --- Main Area: Content & TOC --- */}
        <main className="flex-1 overflow-y-auto bg-white custom-scrollbar">
          <div className="max-w-7xl mx-auto flex h-full">
            
            {/* Content Column */}
            <div className="flex-1 min-w-0 px-8 md:px-16 py-12 max-w-4xl">
              <nav className="flex gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span className="opacity-30">/</span>
                <span>{activeCategory}</span>
                <span className="opacity-30">/</span>
                <span className="text-slate-900">{activeDoc?.name}</span>
              </nav>

              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-100">
                <div className={`w-16 h-16 rounded-3xl ${activeDoc?.color?.replace('text-', 'bg-')}/10 flex items-center justify-center border border-slate-100 shadow-sm`}>
                  <activeDoc.icon className={`w-8 h-8 ${activeDoc?.color}`} strokeWidth={1.5} />
                </div>
                <div>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none mb-3">
                    {activeDoc?.name}
                  </h1>
                  <p className="text-lg text-slate-500 font-medium tracking-tight italic">{activeDoc?.tagline}</p>
                </div>
              </div>

              {/* Documentation Sections */}
              <div className="space-y-16 prose prose-slate prose-lg max-w-none">
                <section id="overview" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <Info className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight !my-0">Overview</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {activeDoc?.overview || "This section provides a high-level technical summary of the module."}
                  </p>
                </section>

                <section id="capabilities" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight !my-0">Key Capabilities</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-primary/20 transition-colors">
                        <div className="text-sm font-black text-slate-900 mb-2">Technical Feature {i}</div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">Detailed specification regarding the autonomous execution of this specific capability.</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="faq" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquareText className="w-5 h-5 text-blue-500" />
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight !my-0">Technical FAQ</h2>
                  </div>
                  <div className="space-y-3">
                    {[1, 2].map(i => (
                      <div key={i} className="rounded-2xl border border-slate-100 overflow-hidden">
                        <div className="bg-slate-50 px-6 py-4 text-sm font-bold text-slate-800">Operational query related to {activeDoc?.name}?</div>
                        <div className="px-6 py-4 text-sm text-slate-500 font-medium border-t border-slate-50 bg-white">
                          Automated sentinel logic ensures that data integrity is maintained through multi-step verification cycles.
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer navigation */}
              <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center">
                <Link to={activeDoc?.href || "/"} className="technical-label !text-primary flex items-center gap-2 hover:translate-x-1 transition-transform">
                  View Web Instance <ExternalLink className="w-3 h-3" />
                </Link>
                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Astra Docs v2.4</div>
              </div>
            </div>

            {/* --- Right Sidebar: Table of Contents --- */}
            <aside className="hidden xl:block w-72 shrink-0 py-12 px-8 sticky top-0 h-fit">
              <div className="flex items-center gap-2 mb-6">
                <List className="w-4 h-4 text-slate-900" />
                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">On this page</h3>
              </div>
              <nav className="space-y-4">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "capabilities", label: "Key Capabilities" },
                  { id: "faq", label: "Technical FAQ" },
                ].map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs font-bold text-slate-500 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/20 pl-4 py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Support</h4>
                <p className="text-[11px] text-slate-600 font-medium mb-4 leading-relaxed">Need technical assistance with {activeDoc?.name}?</p>
                <Button size="sm" className="w-full h-8 text-[10px] bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 font-black rounded-lg">
                  Submit Ticket
                </Button>
              </div>
            </aside>

          </div>
        </main>

      </div>
    </div>
  );
}
