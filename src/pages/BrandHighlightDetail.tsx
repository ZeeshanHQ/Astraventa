import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  ShieldCheck, 
  Globe, 
  Users, 
  ArrowLeft, 
  Zap, 
  Target, 
  Cpu, 
  Activity,
  CheckCircle2,
  Lock,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useNavigate } from "react-router-dom";

const HIGHLIGHTS_DATA: any = {
  "built-to-last": {
    title: "Built to Last",
    subtitle: "High-Velocity Systems. Natural Scale.",
    description: "We architect systems that don't just solve today's problems but anticipate tomorrow's challenges. Our engineering philosophy is rooted in durability, performance, and the ability to grow naturally with your business.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    content: "True engineering excellence is measured by the systems that remain invisible. We build infrastructure that handles millions of transactions with sub-millisecond latency, ensuring your business stays ahead of the curve.",
    features: [
      {
        title: "Elastic Infrastructure",
        desc: "Auto-scaling environments that adapt to your traffic patterns in real-time.",
        icon: Cpu
      },
      {
        title: "Zero-Downtime Migration",
        desc: "Transition legacy monoliths to modern clouds without a single second of service interruption.",
        icon: Activity
      },
      {
        title: "Rigorous Testing",
        desc: "Every line of code passes through a battery of automated security and performance audits.",
        icon: Lock
      }
    ]
  },
  "worldwide-ready": {
    title: "Worldwide Ready",
    subtitle: "Localized Excellence. Global Distribution.",
    description: "In a global economy, your technology must speak every language and respect every culture. We build platforms that are optimized for international markets from day one.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    content: "From localized UI/UX to decentralized edge networks, we ensure your platform delivers a consistent, high-performance experience to users in Singapore, London, or San Francisco.",
    features: [
      {
        title: "Multi-Region Edge",
        desc: "Global CDN and edge-compute presence for near-zero latency globally.",
        icon: Globe
      },
      {
        title: "I18n & L10n",
        desc: "Comprehensive internationalization and localization strategy baked into the core.",
        icon: MessageSquare
      },
      {
        title: "Global Compliance",
        desc: "Adherence to international data privacy laws including GDPR, CCPA, and beyond.",
        icon: ShieldCheck
      }
    ]
  },
  "user-focused": {
    title: "User Focused",
    subtitle: "Intuitive UX. Human-Centric Code.",
    description: "Every single piece of code is written with your customers' needs in mind. We prioritize intuitive UX, accessibility, and the delicate balance between power and simplicity.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    content: "We believe that technology should empower users, not confuse them. Our designs are research-driven and execution-led, focusing on maximizing utility and minimizing friction.",
    features: [
      {
        title: "Accessibility First",
        desc: "Fully compliant with WCAG standards to ensure your platform is usable by everyone.",
        icon: Users
      },
      {
        title: "Micro-Interactions",
        desc: "High-fidelity motion and feedback loops that delight users and increase retention.",
        icon: Sparkles
      },
      {
        title: "Data-Driven UX",
        desc: "Continuous improvement based on real user behavior analytics and heatmaps.",
        icon: Target
      }
    ]
  }
};

export default function BrandHighlightDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = slug ? HIGHLIGHTS_DATA[slug] : null;

  if (!data) return null;

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="flex flex-col items-center max-w-4xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h1 className="mb-6">{data.title}</h1>
              <p className="text-xl font-bold text-primary mb-8 tracking-tight font-heading">{data.subtitle}</p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">
                {data.description}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
              <img 
                src={`${data.image}?auto=format&fit=crop&w=1600&q=80`} 
                alt={data.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 py-20 bg-slate-50/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Our Engineering <br /> <span className="text-primary">Philosophy.</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                {data.content}
              </p>
              <div className="pt-6">
                <ShinyButton 
                  onClick={() => navigate('/contact')}
                  className="h-10 px-6 rounded-full font-display font-medium text-[12px] uppercase tracking-[0.1em]"
                >
                  <span className="flex items-center gap-2 pt-[1px]">
                  Discuss Your Vision
                  </span>
                </ShinyButton>
              </div>
            </div>

            <div className="grid gap-6">
              {data.features.map((feature: any, idx: number) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 py-32 text-center">
          <div className="max-w-3xl mx-auto bg-[#2910E5] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="noise-overlay" />
            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-5xl font-black mb-8 leading-tight">
                Ready to build the future of your industry?
              </h2>
              <p className="text-white/80 text-lg font-medium mb-12 max-w-xl mx-auto">
                Let's engineer a solution that outlasts the competition. 24/7 autonomous support, worldwide scale, and user-centric logic.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <ShinyButton 
                  onClick={() => navigate('/contact')}
                  className="h-10 px-6 rounded-full font-display font-medium text-[12px] uppercase tracking-[0.1em]"
                >
                  <span className="flex items-center gap-2 pt-[1px]">
                  Start Project
                  </span>
                </ShinyButton>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs" asChild>
                  <Link to="/contact">Book A Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
