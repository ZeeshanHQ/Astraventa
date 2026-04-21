import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { 
  ArrowRight, Bot, Zap, Globe, Workflow, Clock, Settings, Layers, Code2,
  ShieldCheck, Cpu, Database, Network, Activity, LineChart, FileText,
  Mail, Users, Target, Palette, Wand2, Heart, Scale, ScanLine,
  FileSearch, MousePointerClick, PenTool, Video, ScrollText, MessageSquareText,
  CalendarDays, ShoppingCart, CheckSquare, MailX, UserSquare2, Megaphone,
  Receipt, Trophy, Radio, Sun, BarChart2, PenLine
} from "lucide-react";

// Tool metadata mapping
const toolMetadata: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  features: string[];
  status: "active" | "beta" | "coming-soon";
  details: string;
  tag: string;
}> = {
  "astra-reach": {
    title: "AstraReach AI",
    description: "Your autonomous email operations copilot. Send outreach, review inbox, and auto-reply.",
    icon: Mail, category: "Core Agents",
    features: ["Intelligent Outreach", "Inbox Summarization", "Auto-Reply System", "Campaign Management"],
    status: "active",
    details: "AstraReach AI transforms how enterprises handle email. By utilizing advanced LLMs, it doesn't just filter spam; it understands intent, drafts context-aware replies, and manages complex outreach campaigns with human-like precision.",
    tag: "Mail Related"
  },
  "astra-scrape": {
    title: "AstraScrape AI",
    description: "Extract high-quality structured data from dynamic websites using resilient AI agents.",
    icon: Globe, category: "Core Agents",
    features: ["JS Rendering Support", "Structured Export", "Anti-Detection", "Scheduled Scraping"],
    status: "active",
    details: "Stop fighting with broken scrapers. AstraScrape uses agentic vision to navigate complex sites, solve CAPTCHAs, and deliver clean, structured JSON data from even the most difficult-to-crawl platforms.",
    tag: "Data Extraction"
  },
  "astra-flow": {
    title: "AstraFlow AI",
    description: "Smart data-entry agent that populates complex system fields using natural language.",
    icon: FileText, category: "Core Agents",
    features: ["Context Injection", "Auto-Validation", "System Integration", "Dynamic Field Mapping"],
    status: "active",
    details: "AstraFlow bridges the gap between unstructured conversation and rigid database schemas. Simply describe the data, and AstraFlow handles the precision entry into any ERP or legacy system.",
    tag: "Data Entry"
  },
  "astra-doc": {
    title: "AstraDoc AI",
    description: "Intelligent document analyzer. Instantly extract clauses and summarize long contracts.",
    icon: FileSearch, category: "Core Agents",
    features: ["PDF Parsing", "Semantic Search", "Clause Detection", "Batch Summarization"],
    status: "active",
    details: "Review thousands of pages in seconds. AstraDoc AI uses specialized legal-fine-tuned models to identify risks, extract key dates, and summarize complex legal jargon into actionable insights.",
    tag: "Legal Ops"
  },
  "astra-translate": {
    title: "AstraTranslate AI",
    description: "Enterprise localization. Translate documents while maintaining brand voice.",
    icon: Globe, category: "Core Agents",
    features: ["Tone Preservation", "50+ Languages", "Context Awareness", "Glossary Support"],
    status: "active",
    details: "Localization that feels local. AstraTranslate goes beyond literal translation to preserve your brand's unique voice and cultural nuances across dozens of global markets.",
    tag: "Localization"
  },
  "astra-market": {
    title: "AstraMarket AI",
    description: "Continuous competitor intelligence. Monitor rival websites for pricing changes autonomously.",
    icon: LineChart, category: "Core Agents",
    features: ["Automated Tracking", "Price Intelligence", "Alert System", "Trend Prediction"],
    status: "active",
    details: "Stay three steps ahead of the competition. AstraMarket continuously monitors competitor footprints, providing real-time alerts on price shifts, feature launches, and strategic pivots.",
    tag: "Intelligence"
  },
  "astra-agent": {
    title: "AstraAgent AI",
    description: "The Browser Worker. Autonomously navigates websites to book flights, fill forms, and complete tasks.",
    icon: MousePointerClick, category: "Core Agents",
    features: ["Autonomous Browsing", "Task Execution", "Form Automation", "Logic Handling"],
    status: "beta",
    details: "Give your AI a mouse and keyboard. AstraAgent can navigate the open web just like a human, completing tedious administrative tasks across different platforms without manual intervention.",
    tag: "Autonomous"
  },
  "astra-pulse": {
    title: "AstraPulse AI",
    description: "AI Observability for Vibe Coders. Monitor token costs, latency, and agent hallucination rates.",
    icon: Activity, category: "Core Agents",
    features: ["Token Tracking", "Health Monitoring", "Latency Analysis", "Hallucination Detection"],
    status: "beta",
    details: "Full visibility into your AI stack. AstraPulse provides deep diagnostics on your agentic workflows, ensuring performance, cost-efficiency, and reliability in production.",
    tag: "Observability"
  },
  "astra-hook": {
    title: "AstraHook AI",
    description: "Viral hook generator for LinkedIn/Twitter based on your long-form blog.",
    icon: PenTool, category: "Content & Strategy",
    features: ["Social Algorithms", "A/B Testing", "Viral Analysis", "Platform Optimization"],
    status: "active",
    details: "Turn readers into followers. AstraHook analyzes the top-performing social content to distill your long-form articles into high-engagement hooks tailored for each platform's algorithm.",
    tag: "Social Gen"
  },
  "astra-script": {
    title: "AstraScript AI",
    description: "YouTube/Reels scriptwriter that analyzes trending video structures for your niche.",
    icon: Video, category: "Content & Strategy",
    features: ["Hook Structuring", "Retention Analysis", "Voice Modulation", "Visual Cues"],
    status: "active",
    details: "Scripting for maximum retention. AstraScript uses predictive analytics to structure your video content, ensuring your audience stays engaged from the first second to the last.",
    tag: "Video Script"
  },
  "astra-vibe": {
    title: "AstraVibe AI",
    description: "AI-powered color palette and typography generator for new branding.",
    icon: Palette, category: "Content & Strategy",
    features: ["Hex Code Export", "UI Previews", "Accessibility Check", "Brand Alignment"],
    status: "beta",
    details: "Instantly define your brand's visual identity. AstraVibe generates cohesive design systems based on your core values, ready to be exported directly into your Figma or CSS files.",
    tag: "Design System"
  },
  "astra-blog": {
    title: "AstraBlog AI",
    description: "Long-form SEO article writer that uses live web-search to cite real sources.",
    icon: ScrollText, category: "Content & Strategy",
    features: ["Live SERP Sync", "Plagiarism Free", "SEO Optimization", "Source Citation"],
    status: "active",
    details: "Content that ranks and informs. AstraBlog doesn't just hallucinate facts; it performs live research to ensure every article is factually accurate, perfectly optimized for SEO, and brand-consistent.",
    tag: "SEO Content"
  },
  "astra-prompt": {
    title: "AstraPrompt AI",
    description: "Prompt engineer tool that turns 'bad' prompts into high-quality instructions.",
    icon: Wand2, category: "Content & Strategy",
    features: ["Image Gen Optimization", "LLM Tuning", "Instruction Expansion", "Prompt Versioning"],
    status: "active",
    details: "Master the art of prompting. AstraPrompt uses meta-learning to refine your vague requests into precise, high-performance instructions that unlock the full potential of any LLM or Image model.",
    tag: "Prompt Eng"
  },
  "astra-lead": {
    title: "AstraLead AI",
    description: "LinkedIn scraper that writes personalized ice-breakers based on prospect activity.",
    icon: Users, category: "Lead Gen & Sales",
    features: ["Profile Scraping", "Outreach Gen", "Intent Mapping", "Bulk Personalization"],
    status: "active",
    details: "Cold outreach that feels warm. AstraLead scans your prospect's recent activity and history to craft unique, high-conversion messages that prove you've done your homework.",
    tag: "Lead Gen"
  },
  "astra-pitch": {
    title: "AstraPitch AI",
    description: "Generator for custom sales decks based solely on a client's website URL.",
    icon: Target, category: "Lead Gen & Sales",
    features: ["Pitch Structuring", "Design Export", "Client Analysis", "Value Prop Mapping"],
    status: "beta",
    details: "Build a winning pitch in minutes. Simply enter a URL, and AstraPitch analyzes the client's business to generate a tailored sales deck that speaks directly to their pain points.",
    tag: "Sales Strategy"
  },
  "astra-review": {
    title: "AstraReview AI",
    description: "Monitors reviews and drafts intelligent, brand-aligned responses.",
    icon: MessageSquareText, category: "Lead Gen & Sales",
    features: ["Review Indexing", "Tone Mapping", "Sentiment Analysis", "Auto-Response"],
    status: "active",
    details: "Protect your reputation automatically. AstraReview tracks feedback across multiple platforms and drafts responses that resolve issues and highlight your brand's commitment to quality.",
    tag: "Reputation"
  },
  "astra-event": {
    title: "AstraEvent AI",
    description: "Scans industry webinars and creates a list of potential VIP networking targets.",
    icon: CalendarDays, category: "Lead Gen & Sales",
    features: ["Event Scraping", "Lead Scoring", "Networking Strategy", "Automated Outreach"],
    status: "beta",
    details: "Dominate every industry event. AstraEvent identifies high-value targets attending digital or physical events, providing you with a tactical networking plan to maximize your ROI.",
    tag: "Event Intel"
  },
  "astra-sql": {
    title: "AstraSQL AI",
    description: "Natural language to complex SQL query generator for non-technical founders.",
    icon: Database, category: "Lead Gen & Sales",
    features: ["PostgreSQL/MySQL", "Schema Context", "Query Optimization", "Real-time Execution"],
    status: "active",
    details: "Talk to your data. No SQL knowledge required. AstraSQL understands your database schema and converts simple English questions into complex, high-performance queries.",
    tag: "Data Query"
  },
  "astra-commerce": {
    title: "AstraCommerce AI",
    description: "Generate product listings from photos with SEO-optimized titles and descriptions.",
    icon: ShoppingCart, category: "Lead Gen & Sales",
    features: ["Image to Listing", "Auto SEO", "Price Suggestion", "Stock Mapping"],
    status: "active",
    details: "List products 10x faster. AstraCommerce analyzes your product images to generate professional titles, descriptions, and metadata, ready to be pushed directly to your Shopify or Amazon store.",
    tag: "E-Commerce"
  },
  "astra-task": {
    title: "AstraTask AI",
    description: "Turns raw meeting transcripts into actionable project management tasks.",
    icon: CheckSquare, category: "Productivity & ERP",
    features: ["Meeting Ingestion", "Ticket Creation", "Assignee Mapping", "Deadline Tracking"],
    status: "active",
    details: "Never miss a meeting follow-up. AstraTask parses your meeting audio or transcripts, identifies action items, and automatically creates tickets in Jira, Linear, or Trello.",
    tag: "Task Automation"
  },
  "astra-mail": {
    title: "AstraMail AI",
    description: "Intelligent tool that unsubscribes you from 'junk' mail autonomously.",
    icon: MailX, category: "Productivity & ERP",
    features: ["Spam Routing", "Inbox Zero Protocol", "Subscription Tracking", "Privacy Guard"],
    status: "active",
    details: "Reclaim your inbox. AstraMail works in the background to identify and remove you from unwanted mailing lists, ensuring your time is spent on messages that actually matter.",
    tag: "Inbox Cleanup"
  },
  "astra-recruit": {
    title: "AstraRecruit AI",
    description: "Scans resumes and ranks them based on custom Job Descriptions.",
    icon: UserSquare2, category: "Productivity & ERP",
    features: ["Resume Parsing", "Skill Matching", "Cultural Fit Score", "Candidate Ranking"],
    status: "active",
    details: "Hire with precision. AstraRecruit uses semantic analysis to go beyond keyword matching, finding the candidates whose actual experience and skills align perfectly with your JD.",
    tag: "Recruitment"
  },
  "astra-legal": {
    title: "AstraLegal AI",
    description: "Simplified contract reader that highlights 'red flags' in Terms & Conditions.",
    icon: Scale, category: "Productivity & ERP",
    features: ["Risk Analysis", "Clause Detection", "Compliance Review", "Summary Gen"],
    status: "beta",
    details: "Legal review for the modern age. AstraLegal scans documents for hidden risks, unfavorable clauses, and compliance gaps, saving you hours of manual legal auditing.",
    tag: "Legal Review"
  },
  "astra-brand": {
    title: "AstraBrand AI",
    description: "Omnichannel generator: inputs a topic, outputs content for all platforms.",
    icon: Megaphone, category: "Productivity & ERP",
    features: ["Omnichannel Gen", "Style Guides", "Cross-Platform Sync", "Asset Generation"],
    status: "active",
    details: "Scale your brand's presence. Input one idea, and AstraBrand generates a cohesive campaign across Twitter, LinkedIn, your blog, and your newsletter—all perfectly formatted and toned.",
    tag: "Branding"
  },
  "astra-finance": {
    title: "AstraFinance AI",
    description: "Ingests PDF invoices and bank statements, reconciling them with accounting software.",
    icon: Receipt, category: "Productivity & ERP",
    features: ["Line Item Extraction", "Auto-Reconciliation", "Tax Compliance", "Fraud Detection"],
    status: "active",
    details: "Accounting on autopilot. AstraFinance extracts data from messy invoices and reconciles it with your books, ensuring your financial records are always accurate and up-to-date.",
    tag: "Fintech Ops"
  },
  "astra-verify": {
    title: "AstraVerify AI",
    description: "Identity & Deepfake Detector. Verifies human authenticity in real-time.",
    icon: ShieldCheck, category: "Productivity & ERP",
    features: ["Deepfake Detection", "KYC Compliance", "Voice Analysis", "Visual Verification"],
    status: "beta",
    details: "Security for the synthetic era. AstraVerify uses proprietary neural networks to detect deepfakes and verify human identity across video, audio, and documents.",
    tag: "Verification"
  },
  "astra-grit": {
    title: "AstraGrit AI",
    description: "Scans public work history to produce a 'Grit Score' for candidate resilience.",
    icon: Trophy, category: "Frontier & Specialist",
    features: ["Grit Score", "GitHub Analysis", "Project Consistency", "Open Source Impact"],
    status: "beta",
    details: "Identify high-performer resilience. AstraGrit analyzes a developer's public contributions and career trajectory to quantify their ability to solve complex problems over long periods.",
    tag: "HR Tech"
  },
  "astra-relay": {
    title: "AstraRelay AI",
    description: "Offline-first AI communication via Mesh Networks when internet is unavailable.",
    icon: Radio, category: "Frontier & Specialist",
    features: ["Mesh Network", "Zero Internet", "Local Encryption", "Protocol Optimization"],
    status: "coming-soon",
    details: "AI connectivity everywhere. AstraRelay enables agentic communication in remote areas using local radio and mesh protocols, ensuring automation continues even without a web connection.",
    tag: "Mesh Comm"
  },
  "astra-trace": {
    title: "AstraTrace AI",
    description: "AI-powered supply chain quality verifier and standard compliance scanner.",
    icon: ScanLine, category: "Frontier & Specialist",
    features: ["Quality Scan", "Standard Matching", "Defect Detection", "Compliance Logs"],
    status: "beta",
    details: "Guarantee quality across your supply chain. AstraTrace uses computer vision to inspect products and verify compliance with international standards in real-time.",
    tag: "Supply Chain"
  },
  "astra-grid": {
    title: "AstraGrid AI",
    description: "Smart solar & energy management for predictive load-shedding optimization.",
    icon: Sun, category: "Frontier & Specialist",
    features: ["Energy Forecasting", "Load Optimization", "Battery Management", "Grid Prediction"],
    status: "beta",
    details: "Optimize your energy footprint. AstraGrid predicts energy availability and load patterns to automatically manage your solar and battery storage for maximum efficiency.",
    tag: "Energy AI"
  },
  "astra-ad": {
    title: "AstraAd AI",
    description: "Mimics Eye-Tracking AI to predict CTR and optimize ad creatives.",
    icon: BarChart2, category: "Frontier & Specialist",
    features: ["Heatmap Analysis", "CTR Prediction", "Visual Saliency", "A/B Simulation"],
    status: "active",
    details: "Optimize ads before you spend a dime. AstraAd simulates human visual attention to predict which parts of your ad will catch eyes and drive clicks.",
    tag: "Ad Opt"
  },
  "astra-match": {
    title: "AstraMatch AI",
    description: "Psychographic analysis of influencer audiences for brand-perfect matching.",
    icon: Heart, category: "Frontier & Specialist",
    features: ["Follower Analysis", "Brand Fit Score", "Authenticity Check", "Intent Mapping"],
    status: "active",
    details: "Find the influencers who actually drive sales. AstraMatch deep-dives into audience psychographics to ensure your brand ambassadors align perfectly with your target market.",
    tag: "Influencer"
  },
  "astra-draft": {
    title: "AstraDraft AI",
    description: "Upload a napkin sketch and get a 1:1 scale technical 3D CAD model.",
    icon: PenLine, category: "Frontier & Specialist",
    features: ["Sketch to CAD", "3D Model Export", "Tolerance Mapping", "Engineering Valid"],
    status: "beta",
    details: "From sketch to prototype in seconds. AstraDraft turns your rough drawings into high-precision technical models ready for 3D printing or industrial manufacturing.",
    tag: "Engineering"
  }
};

const GenericToolPage = () => {
  const navigate = useNavigate();
  const { toolId } = useParams<{ toolId: string }>();
  
  const tool = toolMetadata[toolId || ""] || {
    title: "Astra Tool",
    description: "Advanced AI-powered tool for enterprise automation and optimization.",
    icon: Cpu,
    category: "AI Tools",
    features: ["Enterprise-Grade Security", "Scalable Architecture", "Real-time Processing", "24/7 Support"],
    status: "coming-soon",
    details: "This advanced Astra AI module is designed for seamless enterprise integration and high-performance automation."
  };

  const Icon = tool.icon;
  const isComingSoon = tool.status === "coming-soon";

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-clip">
      <Header />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 pt-32 sm:pt-40 md:pt-48 pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          {/* Hero Section */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-display font-normal text-[11px] text-black/60 uppercase tracking-[0.15em]">
                {tool.category} // {tool.tag}
              </span>
            </motion.div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary shadow-xl shadow-primary/5">
                <Icon className="w-10 h-10" />
              </div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-normal text-foreground uppercase leading-[1.08] tracking-[0.15em] text-[2.5rem] sm:text-[3.1rem] md:text-[3.7rem] lg:text-[4.1rem] mb-8"
            >
              {tool.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[17px] md:text-[19px] text-[#4B5563] font-light leading-[1.8] max-w-[700px] mx-auto mb-16"
            >
              {tool.details}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <ShinyButton
                className="h-14 px-12 text-[12px] font-display font-medium uppercase tracking-[0.15em] rounded-full shadow-2xl shadow-primary/20"
                onClick={() => navigate('/contact')}
              >
                <span className="flex items-center gap-3">
                  Book A Live Demo <ArrowRight className="w-4 h-4" />
                </span>
              </ShinyButton>
              
              <Button
                onClick={() => navigate('/docs')}
                className="h-14 px-10 bg-transparent text-black border border-black/10 hover:bg-black/5 rounded-full text-[12px] font-display font-medium uppercase tracking-[0.15em]"
              >
                Technical Architecture
              </Button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-2xl sm:text-3xl mb-4">
                Operational <span className="text-primary">Capabilities.</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#4B5563] font-normal leading-[1.7] max-w-[560px] mx-auto">
                Engineered for high-integrity autonomous operations within your secure ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-10 rounded-[2rem] border border-black/[0.05] bg-[#FAFAFA] hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm border border-black/[0.03]">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-[15px] text-black uppercase tracking-[0.15em] mb-3">
                        {feature}
                      </h3>
                      <p className="text-[14px] text-[#6B7280] leading-[1.7] font-light">
                        Industrial-grade implementation leveraging proprietary {tool.title} neural architecture to ensure zero-latency execution and high accuracy.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specialist Insight Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-normal uppercase tracking-widest leading-tight mb-6">
                  Ready to scale your <span className="text-primary">Intelligence?</span>
                </h2>
                <p className="text-white/60 text-[16px] font-light leading-relaxed mb-8">
                  Don't settle for generic wrappers. Deploy industrial-grade agentic tools built for your specific business logic.
                </p>
                <ShinyButton
                  className="h-14 px-10 rounded-full text-[12px] uppercase tracking-widest"
                  onClick={() => navigate('/contact')}
                >
                  Request Early Access
                </ShinyButton>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl font-heading text-primary mb-1">99.9%</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Accuracy</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl font-heading text-primary mb-1">&lt;100ms</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Latency</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl font-heading text-primary mb-1">SOC2</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Security</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl font-heading text-primary mb-1">24/7</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Autonomous</div>
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

export default GenericToolPage;
