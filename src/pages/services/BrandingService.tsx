import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import {
  PenTool,
  Target,
  Megaphone,
  Fingerprint,
  ArrowRight,
  Sparkles,
  Layers,
  Palette,
  Users
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { BrandingFeaturesSection } from "@/components/ui/feature";
import { BrandingCTAWithMarquee } from "@/components/ui/cta-with-marquee";

// ─── Stitch Primitive: Abstract Brand Identity (Hero Right Side) ────────────
// ─── Stitch Primitive: Hero Visual (Hero Right Side) ────────────
const StitchHeroVisual = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pointer-events-none sm:pointer-events-auto bg-transparent shadow-none border-none overflow-visible">
      {/* SVG Container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 flex items-center justify-center w-full"
        >
          <img
            src="/brand.svg"
            alt="Branding Architecture"
            className="w-full max-w-[550px] lg:max-w-[850px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
export const BrandingService = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = 1; // Fixed opacity for professional feel

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraPulse AI",
      tagline: "Performance Metrics",
      icon: Users,
      color: "text-black/60",
      bg: "bg-black/[0.01]",
      href: "/tools/astra-pulse"
    },
    {
      title: "AstraMarket AI",
      tagline: "Competitor Intelligence",
      icon: Target,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-market"
    },
    {
      title: "AstraVibe AI",
      tagline: "Sensory Design Tokens",
      icon: Palette,
      color: "text-primary",
      bg: "bg-primary/20",
      href: "/tools/astra-vibe"
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />

      <main className="py-12">
        {/* ─── HERO (50/50 Split) ────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.1] pointer-events-none" />

          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-24">

            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/[0.01] border border-black/[0.06] mb-10 shadow-sm"
              >
                <PenTool className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] tracking-[0.3em] uppercase">IDENTITY_HARDENING // V1.0</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 text-4xl md:text-5xl font-heading font-normal text-black tracking-[0.2em] leading-[1.15] uppercase"
              >
                Memorable <br />
                Resonance<span className="text-primary">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#4B5563] font-medium text-lg leading-relaxed max-w-lg mb-12 uppercase tracking-tight"
              >
                Synthesizing proprietary narratives into timeless engineering assets. Establish market authority through strategic intentionality.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <ShinyButton
                  className="h-11 px-7 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.1em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-2.5 pt-[2px]">
                    INITIALIZE_ID_AUDIT <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
                <div className="flex items-center gap-3 ml-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                  <span className="text-[10px] font-black font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.2em]">Ready_To_Deploy</span>
                </div>
              </div>
            </div>

            <StitchHeroVisual />

          </motion.div>
        </section>

        {/* ─── ARCHITECTURE (Technical Schematic) ─────────────────────────────────── */}
        <section className="py-24 px-6 relative border-t border-black/[0.06] bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-12 text-left">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">IDENTITY_FUNNEL</span>
                <h2 className="text-3xl md:text-4xl font-black text-black mb-10 tracking-tighter uppercase leading-[0.85] font-display">Brand DNA <br /><span className="text-primary/20">Mapping.</span></h2>
              </div>
              <p className="text-[#4B5563] font-medium max-w-sm border-l border-black/10 pl-10 uppercase text-xs tracking-widest leading-relaxed">
                A structured engineering funnel converting raw market data into institutional corporate assets.
              </p>
            </div>

            {/* Schematic Flow Diagram */}
            <div className="relative w-full h-auto bg-black/[0.01] rounded-2xl border border-black/[0.06] p-12 md:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm">
              <div className="absolute top-1/2 left-10 right-10 h-[0.5px] bg-black/20 hidden lg:block -translate-y-1/2" />

              {[
                { step: "01", title: "Audit", desc: "COMPETITOR & GAP ANALYSIS", icon: Target },
                { step: "02", title: "Strategy", desc: "CORE MANIFESTO DRAFT", icon: Megaphone },
                { step: "03", title: "Visuals", desc: "LOGO & TYPOGRAPHY", icon: Palette },
                { step: "04", title: "Deploy", desc: "RULEBOOK DEPLOYMENT", icon: Layers }
              ].map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative z-10 flex flex-col bg-white p-10 rounded-2xl border border-black/[0.06] w-full lg:w-72 shadow-md group hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-black/[0.01] flex items-center justify-center mb-8 text-black/20 group-hover:text-primary transition-all border border-transparent group-hover:border-primary/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-['Anonymous_Pro'] text-primary mb-4 tracking-widest uppercase font-black">PHASE_{node.step}</span>
                    <h4 className="text-2xl font-black text-black mb-4 tracking-tighter uppercase leading-none">{node.title}</h4>
                    <p className="text-[10px] text-[#4B5563] font-black uppercase tracking-widest leading-tight">{node.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── BRAND CRAFT FEATURES (3rd section — animated cards) ─────────────── */}
        <BrandingFeaturesSection />

        {/* ─── FEATURES (Bento Grid) ────────────────────────────────────────────── */}
        <section className="py-32 px-6 relative border-t border-black/[0.06] bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.1 }}
                className="md:col-span-2 bg-black/[0.01] border border-black/[0.06] rounded-2xl p-12 flex flex-col justify-between group overflow-hidden relative transition-all hover:bg-black/10 hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-primary mb-12 shadow-sm group-hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all">
                    <Fingerprint className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-black text-black mb-8 tracking-tighter uppercase leading-none font-display">Strategic<br />Positioning</h3>
                  <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed max-w-2xl uppercase tracking-tight">
                    Defining proprietary value propositions through recursive audience synthesis. Establish a deterministic tone of voice that resonates across global markets.
                  </p>
                </div>
                <div className="mt-16 flex items-center gap-6 text-[10px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.3em] text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" /> MARKET_RESISTANCE // OPTIMIZED
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.2 }}
                className="bg-black/[0.01] border border-black/[0.06] rounded-2xl p-12 flex flex-col justify-between group relative transition-all hover:bg-black/10 hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
              >
                <Palette className="w-10 h-10 text-primary mb-12 stroke-[1.5px]" />
                <div>
                  <h3 className="text-3xl font-black text-black mb-6 tracking-tighter uppercase leading-tight font-display">Visual<br />Language</h3>
                  <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-tight">
                    Bespoke logo marks, color psychology matrices, and exclusive typography scaling protocols.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 - Dark Callout */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.3 }}
                className="md:col-span-2 bg-black rounded-2xl p-12 flex flex-col justify-between group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
                <div className="relative z-10">
                  <Layers className="w-10 h-10 text-primary mb-12 stroke-[1px]" />
                  <h3 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase leading-none underline decoration-primary/40 decoration-4 underline-offset-8 font-display">Recursive Guidelines</h3>
                  <p className="text-xl text-white/40 font-medium leading-relaxed max-w-2xl uppercase tracking-tight">
                    Definitive brand rulebooks provided in dynamic, cloud-native formats. Ensure strict visual consistency as international engineering teams scale.
                  </p>
                </div>
                <div className="mt-16 flex items-center gap-6 text-[10px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.3em] text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" /> DOC_SYSTEM // v1.0.0
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.4 }}
                className="bg-black/[0.01] border border-black/[0.06] rounded-2xl p-12 flex flex-col justify-between group relative transition-all hover:bg-black/10 hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
              >
                <Target className="w-10 h-10 text-primary mb-12 stroke-[1.5px]" />
                <div>
                  <h3 className="text-3xl font-black text-black mb-6 tracking-tighter uppercase leading-tight font-display">Market<br />Resonance</h3>
                  <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-tight">
                    Synthesizing raw data into emotionally-charged engineering assets that command attention.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
        <section className="pb-12 bg-white border-t border-black/[0.06]">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── BRANDING CTA WITH MARQUEE ─────────────────────── */}
        <BrandingCTAWithMarquee />

      </main>
      <Footer />
    </div>
  );
};

export default BrandingService;
