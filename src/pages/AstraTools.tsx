import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, Globe, FileText, ArrowRight, Sparkles, Bot, FileSearch, LineChart, BookOpen,
  PenTool, Video, Palette, ScrollText, Wand2, Users, Target, MessageSquareText, 
  CalendarDays, Database, CheckSquare, MailX, UserSquare2, Scale, Megaphone, Receipt,
  ShoppingCart, MousePointerClick, Activity, ShieldCheck,
  Trophy, Radio, ScanLine, Sun, BarChart2, Heart, PenLine, Search, X
} from "lucide-react";

// Categorized Tools Array
const toolCategories = [
  {
    id: "core",
    label: "Core Agents",
    tools: [
      {
        title: "AstraReach AI", description: "Your autonomous email operations copilot. Send outreach, review inbox, and auto-reply.",
        icon: Mail, color: "text-blue-500", bg: "bg-blue-500/10",
        features: ["Intelligent Outreach", "Inbox Summarization"], href: "/tools/astra-reach"
      },
      {
        title: "AstraScrape AI", description: "Extract high-quality structured data from dynamic websites using resilient AI agents.",
        icon: Globe, color: "text-emerald-500", bg: "bg-emerald-500/10",
        features: ["JS Rendering Support", "Structured Export"], href: "/tools/astra-scrape"
      },
      {
        title: "AstraFlow AI", description: "Smart data-entry agent that populates complex system fields using natural language.",
        icon: FileText, color: "text-purple-500", bg: "bg-purple-500/10",
        features: ["Context Injection", "Auto-Validation"], href: "/tools/astra-flow"
      },
      {
        title: "AstraDoc AI", description: "Intelligent document analyzer. Instantly extract clauses and summarize long contracts.",
        icon: FileSearch, color: "text-rose-500", bg: "bg-rose-500/10",
        features: ["PDF Parsing", "Semantic Search"], href: "/tools/astra-doc"
      },
      {
        title: "AstraTranslate AI", description: "Enterprise localization. Translate documents while maintaining brand voice.",
        icon: Globe, color: "text-cyan-500", bg: "bg-cyan-500/10",
        features: ["Tone Preservation", "50+ Languages"], href: "/tools/astra-translate"
      },
      {
        title: "AstraMarket AI", description: "Continuous competitor intelligence. Monitor rival websites for pricing changes autonomously.",
        icon: LineChart, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10",
        features: ["Automated Tracking", "Browser Use Cloud"], href: "/tools/astra-market"
      },
      {
        title: "AstraAgent AI", description: "The Browser Worker. Autonomously navigates websites to book flights, fill forms, and complete tasks.",
        icon: MousePointerClick, color: "text-blue-500", bg: "bg-blue-500/10",
        features: ["Autonomous Browsing", "Task Execution"], href: "/tools/astra-agent"
      },
      {
        title: "AstraPulse AI", description: "AI Observability for Vibe Coders. Monitor token costs, latency, and agent hallucination rates.",
        icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10",
        features: ["Token Tracking", "Health Monitoring"], href: "/tools/astra-pulse"
      }
    ]
  },
  {
    id: "content",
    label: "Content & Strategy",
    tools: [
      {
        title: "AstraHook AI", description: "Viral hook generator for LinkedIn/Twitter based on your long-form blog.",
        icon: PenTool, color: "text-orange-500", bg: "bg-orange-500/10",
        features: ["Social Algorithms", "A/B Testing"], href: "/tools/astra-hook"
      },
      {
        title: "AstraScript AI", description: "YouTube/Reels scriptwriter that analyzes trending video structures for your niche.",
        icon: Video, color: "text-red-500", bg: "bg-red-500/10",
        features: ["Hook Structuring", "Retention Analysis"], href: "/tools/astra-script"
      },
      {
        title: "AstraVibe AI", description: "AI-powered color palette and typography generator for new branding.",
        icon: Palette, color: "text-pink-500", bg: "bg-pink-500/10",
        features: ["Hex Code Export", "UI Previews"], href: "/tools/astra-vibe"
      },
      {
        title: "AstraBlog AI", description: "Long-form SEO article writer that uses live web-search to cite real sources.",
        icon: ScrollText, color: "text-teal-500", bg: "bg-teal-500/10",
        features: ["Live SERP Sync", "Plagiarism Free"], href: "/tools/astra-blog"
      },
      {
        title: "AstraPrompt AI", description: "Prompt engineer tool that turns 'bad' prompts into high-quality instructions for Midjourney.",
        icon: Wand2, color: "text-violet-500", bg: "bg-violet-500/10",
        features: ["Image Gen Optimization", "LLM Tuning"], href: "/tools/astra-prompt"
      }
    ]
  },
  {
    id: "lead",
    label: "Lead Gen & Sales",
    tools: [
      {
        title: "AstraLead AI", description: "LinkedIn scraper that writes hyper-personalized ice-breakers based on a prospect's activity.",
        icon: Users, color: "text-blue-600", bg: "bg-blue-600/10",
        features: ["Profile Scraping", "Outreach Gen"], href: "/tools/astra-lead"
      },
      {
        title: "AstraPitch AI", description: "Generator for custom sales decks (PPT/PDF) based solely on a client's website URL.",
        icon: Target, color: "text-rose-600", bg: "bg-rose-600/10",
        features: ["Pitch Structuring", "Design Export"], href: "/tools/astra-pitch"
      },
      {
        title: "AstraReview AI", description: "Monitors Google/G2 reviews and drafts intelligent, brand-aligned responses.",
        icon: MessageSquareText, color: "text-amber-500", bg: "bg-amber-500/10",
        features: ["Review Indexing", "Tone Mapping"], href: "/tools/astra-review"
      },
      {
        title: "AstraEvent AI", description: "Scans industry webinars and creates a list of potential VIP networking targets.",
        icon: CalendarDays, color: "text-indigo-500", bg: "bg-indigo-500/10",
        features: ["Event Scraping", "Lead Scoring"], href: "/tools/astra-event"
      },
      {
        title: "AstraSQL AI", description: "Natural language to complex SQL query generator for non-technical founders.",
        icon: Database, color: "text-emerald-600", bg: "bg-emerald-600/10",
        features: ["PostgreSQL/MySQL", "Schema Context"], href: "/tools/astra-sql"
      },
      {
        title: "AstraCommerce AI", description: "Upload a product photo; AI generates title, SEO description, and price for direct store listing.",
        icon: ShoppingCart, color: "text-pink-600", bg: "bg-pink-600/10",
        features: ["Image to Listing", "Auto SEO"], href: "/tools/astra-commerce"
      }
    ]
  },
  {
    id: "enterprise",
    label: "Productivity & ERP",
    tools: [
      {
        title: "AstraTask AI", description: "Turns raw meeting transcripts into actionable Jira/Linear/Trello tasks automatically.",
        icon: CheckSquare, color: "text-sky-500", bg: "bg-sky-500/10",
        features: ["Meeting Ingestion", "Ticket Creation"], href: "/tools/astra-task"
      },
      {
        title: "AstraMail AI", description: "A highly intelligent tool that unsubscribes you from 'junk' mail autonomously.",
        icon: MailX, color: "text-red-600", bg: "bg-red-600/10",
        features: ["Spam Routing", "Inbox Zero Protocol"], href: "/tools/astra-mail"
      },
      {
        title: "AstraRecruit AI", description: "Scans resumes and ranks them based on a specific custom Job Description (JD).",
        icon: UserSquare2, color: "text-fuchsia-600", bg: "bg-fuchsia-600/10",
        features: ["Resume Parsing", "Skill Matching"], href: "/tools/astra-recruit"
      },
      {
        title: "AstraLegal AI", description: "Simplified contract reader that highlights 'red flags' in Terms & Conditions immediately.",
        icon: Scale, color: "text-slate-700", bg: "bg-slate-700/10",
        features: ["Risk Analysis", "Clause Detection"], href: "/tools/astra-legal"
      },
      {
        title: "AstraBrand AI", description: "Omnichannel generator: inputs a topic, outputs Twitter, LinkedIn, Blog, & Newsletter drafts.",
        icon: Megaphone, color: "text-orange-600", bg: "bg-orange-600/10",
        features: ["Omnichannel Gen", "Style Guides"], href: "/tools/astra-brand"
      },
      {
        title: "AstraFinance AI", description: "Ingests PDF invoices and bank statements, reconciling them with QuickBooks/Xero.",
        icon: Receipt, color: "text-green-600", bg: "bg-green-600/10",
        features: ["Line Item Extraction", "Auto-Reconciliation"], href: "/tools/astra-finance"
      },
      {
        title: "AstraVerify AI", description: "Identity & Deepfake Detector. Live scans calls/documents to verify 99% human authenticity.",
        icon: ShieldCheck, color: "text-violet-600", bg: "bg-violet-600/10",
        features: ["Deepfake Detection", "KYC Compliance"], href: "/tools/astra-verify"
      }
    ]
  },
  {
    id: "frontier",
    label: "Frontier & Specialist",
    tools: [
      {
        title: "AstraGrit AI", description: "Scans a candidate's GitHub, LeetCode, and public work history to produce a 'Grit Score' for resilience.",
        icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-600/10",
        features: ["Grit Score", "GitHub Analysis"], href: "/tools/astra-grit"
      },
      {
        title: "AstraRelay AI", description: "Offline-first AI communication via Mesh Networks (Bluetooth/Local Radio) when internet is unavailable.",
        icon: Radio, color: "text-cyan-600", bg: "bg-cyan-600/10",
        features: ["Mesh Network", "Zero Internet"], href: "/tools/astra-relay"
      },
      {
        title: "AstraTrace AI", description: "AI-powered supply chain quality verifier. Scans product photos for international standard compliance.",
        icon: ScanLine, color: "text-teal-600", bg: "bg-teal-600/10",
        features: ["Quality Scan", "Standard Matching"], href: "/tools/astra-trace"
      },
      {
        title: "AstraGrid AI", description: "Smart solar & energy management. Predicts load-shedding and optimizes solar/battery switching.",
        icon: Sun, color: "text-amber-500", bg: "bg-amber-500/10",
        features: ["Energy Forecasting", "Load Optimization"], href: "/tools/astra-grid"
      },
      {
        title: "AstraAd AI", description: "Mimics Eye-Tracking AI to pre-analyze ad creatives, predict CTR, and optimize before launch.",
        icon: BarChart2, color: "text-purple-600", bg: "bg-purple-600/10",
        features: ["Heatmap Analysis", "CTR Prediction"], href: "/tools/astra-ad"
      },
      {
        title: "AstraMatch AI", description: "Psychographic analysis of influencer audiences to match brand-perfect ambassadors with zero fake followers.",
        icon: Heart, color: "text-rose-500", bg: "bg-rose-500/10",
        features: ["Follower Analysis", "Brand Fit Score"], href: "/tools/astra-match"
      },
      {
        title: "AstraDraft AI", description: "Upload a napkin sketch and get a 1:1 scale technical 3D CAD model ready for architecture or engineering.",
        icon: PenLine, color: "text-slate-600", bg: "bg-slate-600/10",
        features: ["Sketch to CAD", "3D Model Export"], href: "/tools/astra-draft"
      }
    ]
  }
];

const AstraTools = () => {
  const [activeTab, setActiveTab] = useState("core");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      return toolCategories.find(c => c.id === activeTab)?.tools || [];
    }

    // If searching, search across ALL categories
    const allTools = toolCategories.flatMap(cat => cat.tools);
    return allTools.filter(tool => 
      tool.title.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) ||
      tool.features.some(f => f.toLowerCase().includes(query))
    );
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="mb-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Astraventa OS Ecosystem
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-slate-950 mb-6 tracking-tighter uppercase leading-[0.9]">
                Astra <span className="text-primary">Tools</span> Network
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-bold max-w-2xl mx-auto">
                33+ highly specialized AI applications. Equip your enterprise with high-velocity agentic tools. <Link to="/docs" className="text-primary hover:underline">View full documentation →</Link>
              </p>
            </motion.div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <div className="relative group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
              </div>
              <Input
                type="text"
                placeholder="Search tools, keywords, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-16 pl-14 pr-14 rounded-full border-slate-200 bg-white shadow-sm focus-visible:ring-primary focus-visible:border-primary text-base font-bold placeholder:text-slate-300 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-6 flex items-center text-slate-300 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                Found {filteredTools.length} matching tools
              </div>
            )}
          </div>

          {/* Navigation Tabs - Only show when NOT searching */}
          <AnimatePresence mode="wait">
            {!searchQuery && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-wrap justify-center gap-2 mb-10"
              >
                {toolCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-8 py-3 rounded-full font-bold text-[10px] transition-all duration-300 border uppercase tracking-[0.1em] ${
                      activeTab === cat.id 
                        ? 'bg-slate-950 border-slate-950 text-white shadow-lg' 
                        : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dynamic Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group p-10 rounded-[2.5rem] border border-slate-200 bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative flex flex-col h-full"
                >
                  <div className="flex-1">
                    <div className={`w-14 h-14 rounded-2xl ${tool.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      <tool.icon className={`w-7 h-7 ${tool.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight uppercase">{tool.title}</h3>
                    <p className="text-sm text-slate-500 mb-8 leading-relaxed font-bold">
                      {tool.description}
                    </p>

                    <div className="space-y-3 mb-10">
                      {tool.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <div className={`w-1.5 h-1.5 rounded-full bg-primary/40`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => window.location.href = tool.href}
                    className="w-full justify-between group/btn bg-slate-50 hover:bg-primary text-slate-900 hover:text-white border border-slate-200 hover:border-primary transition-all duration-300 rounded-full h-14 mb-3 font-bold tracking-widest uppercase text-[10px] shadow-sm"
                  >
                    Deploy Module
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  <Link
                    to={`/docs/${tool.href.replace('/tools/', '')}`}
                    className="w-full flex items-center justify-center gap-2 rounded-full py-3 text-[10px] font-black text-slate-400 hover:text-primary hover:bg-primary/5 border border-dashed border-slate-200 hover:border-primary/30 transition-all uppercase tracking-widest"
                  >
                    <BookOpen className="w-4 h-4" /> Technical Docs
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
                  <FileSearch size={32} className="text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tighter">No tools matched your query.</h3>
                <p className="text-slate-500 font-bold max-w-md mx-auto">Try searching for broader keywords like 'lead', 'email', or 'web'.</p>
                <Button 
                  variant="link" 
                  onClick={() => setSearchQuery("")}
                  className="mt-6 text-primary font-black uppercase tracking-widest text-[10px]"
                >
                  Clear Search Filter
                </Button>
              </div>
            )}
          </div>

          {/* Aggressive Impact CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 p-12 md:p-20 rounded-[3rem] bg-slate-50 border border-slate-200 text-slate-950 text-center relative overflow-hidden group shadow-sm"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-10 shadow-sm">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase leading-[0.85]">
                Eliminate Human <br />
                <span className="text-primary font-heading">Manual Latency.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-bold max-w-2xl mx-auto">
                Bespoke AI agents engineered for your specific business logic. Stop settling for generic tools. Architect your autonomy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-slate-950 hover:bg-primary text-white px-12 h-16 text-[10px] font-bold rounded-full shadow-xl transition-all duration-300 tracking-[0.2em] uppercase">
                  Consult With Our Lab
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <div className="flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-8 hidden sm:flex">
                  <Activity className="w-4 h-4 text-primary animate-pulse" />
                  High-Velocity Engineering
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AstraTools;
