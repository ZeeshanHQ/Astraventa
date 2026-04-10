import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { 
  ArrowRight, Mail, CheckCircle2, Clock, ShieldCheck, Bot, Zap, Globe, 
  Workflow, Activity, LineChart, FileText, Wand2, Heart, Scale, ScanLine
} from "lucide-react";

// Tool metadata for waitlist
const toolInfo: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  estimatedRelease: string;
}> = {
  "astra-agent": {
    title: "AstraAgent AI",
    description: "Autonomous browser automation agent that performs complex web interactions with natural language commands.",
    icon: Bot,
    category: "AI Automation",
    estimatedRelease: "Q2 2026"
  },
  "astra-flow": {
    title: "AstraFlow AI", 
    description: "Smart data-entry agent that populates complex system fields using natural language context.",
    icon: Workflow,
    category: "Data Processing",
    estimatedRelease: "Q2 2026"
  },
  "astra-pulse": {
    title: "AstraPulse AI",
    description: "Real-time system monitoring and performance optimization with predictive analytics.",
    icon: Activity,
    category: "System Monitoring",
    estimatedRelease: "Q3 2026"
  },
  "astra-vibe": {
    title: "AstraVibe AI",
    description: "Brand sentiment analysis and tone optimization across digital platforms.",
    icon: Zap,
    category: "Brand Analytics",
    estimatedRelease: "Q2 2026"
  },
  "astra-match": {
    title: "AstraMatch AI",
    description: "Intelligent matching algorithm for optimal pairing based on multiple criteria.",
    icon: Heart,
    category: "Matching Systems",
    estimatedRelease: "Q3 2026"
  },
  "astra-verify": {
    title: "AstraVerify AI",
    description: "Advanced verification and validation system for security and compliance.",
    icon: ShieldCheck,
    category: "Security",
    estimatedRelease: "Q2 2026"
  },
  "astra-legal": {
    title: "AstraLegal AI",
    description: "AI-powered legal document analysis and contract review automation.",
    icon: Scale,
    category: "Legal Tech",
    estimatedRelease: "Q3 2026"
  },
  "astra-trace": {
    title: "AstraTrace AI",
    description: "Advanced system tracing and debugging tool for complex applications.",
    icon: ScanLine,
    category: "Development Tools",
    estimatedRelease: "Q2 2026"
  },
  "astra-reach": {
    title: "AstraReach AI",
    description: "Autonomous email operations copilot for outreach and inbox management.",
    icon: Mail,
    category: "Communication",
    estimatedRelease: "Q2 2026"
  },
  "astra-relay": {
    title: "AstraRelay AI",
    description: "Intelligent data synchronization and relay system for cross-platform integration.",
    icon: Globe,
    category: "Integration",
    estimatedRelease: "Q3 2026"
  }
};

const ToolWaitlist = () => {
  const navigate = useNavigate();
  const { toolId } = useParams<{ toolId: string }>();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const tool = toolInfo[toolId || ""] || {
    title: "Astra Tool",
    description: "Advanced AI-powered tool for enterprise automation and optimization.",
    icon: Bot,
    category: "AI Tools",
    estimatedRelease: "Q2 2026"
  };

  const Icon = tool.icon;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

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
          
          {!isSubmitted ? (
            <>
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
                    {tool.category} // WAITLIST
                  </span>
                </motion.div>
                
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-heading font-normal text-foreground uppercase leading-[1.08] tracking-[0.15em] text-[2.5rem] sm:text-[3.1rem] md:text-[3.7rem] lg:text-[4.1rem] mb-6"
                >
                  Join the {tool.title} <br />
                  <span className="text-primary">Waitlist.</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[15px] md:text-[16px] text-[#4B5563] font-normal leading-[1.8] max-w-[560px] mx-auto mb-8"
                >
                  {tool.description}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-[14px] text-[#6B7280] font-normal leading-[1.75] max-w-[540px] mx-auto mb-12"
                >
                  Be the first to know when {tool.title} launches. Get early access, exclusive updates, and priority support.
                </motion.p>

                {/* Waitlist Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto"
                >
                  <div className="p-1.5 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-xl relative group">
                    <div className="flex items-center gap-2 px-6 h-14">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-transparent border-none text-[14px] text-slate-900 focus:ring-0 placeholder:text-slate-300"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-11 px-8 bg-slate-950 text-white rounded-2xl text-[12px] font-display font-medium uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-lg shadow-black/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Joining..." : "Join Waitlist"}
                      </button>
                    </div>
                  </div>
                </motion.form>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-16"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[13px] text-black/40 font-display font-normal uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Early Access
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {tool.estimatedRelease} Release
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      Priority Support
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="font-heading font-normal text-foreground uppercase leading-[1.08] tracking-[0.15em] text-[2.5rem] sm:text-[3.1rem] mb-6">
                You're on the <span className="text-primary">List!</span>
              </h2>
              
              <p className="text-[15px] md:text-[16px] text-[#4B5563] font-normal leading-[1.8] max-w-[560px] mx-auto mb-12">
                Thanks for joining the {tool.title} waitlist! We'll send you updates as we get closer to launch.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ShinyButton
                  className="h-11 px-8 text-[12px] font-display font-medium uppercase tracking-[0.12em]"
                  onClick={() => navigate('/services')}
                >
                  <span className="flex items-center gap-2">
                    Explore Other Tools <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </ShinyButton>
                
                <Button
                  onClick={() => navigate('/')}
                  className="bg-transparent text-black border border-black/10 hover:bg-black/5"
                >
                  Back to Home
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolWaitlist;
