import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/images/1.svg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  Smartphone,
  Zap,
  Apple,
  ArrowRight,
  Globe,
  Star,
  Cpu,
  Fingerprint,
  Layers,
  Activity,
  Phone,
  MousePointerClick,
  Mail,
  ShieldCheck
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { Marquee } from "@/components/ui/marquee";

// ─── Stitch Primitive: Device UI Mockup (Hero Right Side) ────────────
const StitchDeviceMockup = () => {
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
            src={heroImage}
            alt="Native Architecture Protocol"
            className="w-full max-w-[500px] lg:max-w-[750px] h-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>

      {/* Grid Overlay */}

    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const MobileEngineering = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = 1; // Fixed opacity for professional feel

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraAgent AI",
      tagline: "The Browser Worker Agent",
      icon: MousePointerClick,
      color: "text-black/60",
      bg: "bg-black/[0.01]",
      href: "/tools/astra-agent"
    },
    {
      title: "AstraReach AI",
      tagline: "Autonomous Email Operations",
      icon: Mail,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-reach"
    },
    {
      title: "AstraVerify AI",
      tagline: "Identity & Deepfake Shield",
      icon: ShieldCheck,
      color: "text-primary",
      bg: "bg-primary/20",
      href: "/tools/astra-verify"
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />

      <main>
        {/* ─── HERO (50/50 Split) ────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-6 overflow-hidden border-b border-black/[0.06] bg-white pt-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center py-12">

            {/* Left Content (Minimalist) */}
            <div className="text-left max-w-3xl">
              <motion.div
                {...fadeUp}
                className="inline-flex items-center gap-3 px-3 py-1.5 rounded-2xl border border-black/[0.08] bg-black/[0.02] backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 mb-10 shadow-sm font-['Anonymous_Pro']"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                NATIVE_CORE_ENGINE
              </motion.div>

              <motion.h1
                {...fadeUp} transition={{ delay: 0.1 }}
                className="mb-8 text-4xl md:text-5xl lg:text-7xl font-heading font-normal text-black leading-[1.0] tracking-[0.10em] uppercase"
              >
                Native App <br />
                <span className="text-black/20">Architectures.</span>
              </motion.h1>

              <motion.div
                {...fadeUp} transition={{ delay: 0.2 }}
                className="text-[#4B5563] font-medium text-[15px] max-w-xl mb-14 leading-relaxed uppercase tracking-[0.1em] border-l border-black/[0.06] pl-8"
              >
                High-performance mobile systems with hardware-deep integration and elite interaction physics for global consumers.
              </motion.div>

              <motion.div
                {...fadeUp} transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-8"
              >
                <ShinyButton
                  className="h-11 px-8 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.12em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-3 pt-[2px]">
                    INITIALIZE_DEPLOYMENT <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>

                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-['Anonymous_Pro'] text-black/30 font-black uppercase tracking-[0.3em]">SUB-60MS_LATENCY</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content (Interactive Technical Object) */}
            <motion.div
              {...fadeUp} transition={{ delay: 0.4 }}
              className="relative w-full"
            >
              <StitchDeviceMockup />
            </motion.div>

          </motion.div>
        </section>

        {/* ─── TECH STACK MARQUEE ────────────────────────────────────────────── */}
        <section className="py-20 border-b border-black/[0.06] bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
          <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-2 block">MOBILE_STACK // CORE_TECH</span>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.10em] uppercase leading-none">The Astra-Standard <br />Mobile Frameworks.</h2>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-right">
              <div className="text-black text-[11px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.3em]">EXPO // REACT_NATIVE // SWIFT // KOTLIN</div>
              <div className="h-px w-full md:w-64 bg-primary/20" />
            </div>
          </div>

          <div className="relative z-10">
            <Marquee className="[--duration:40s] [--gap:3rem] py-10" pauseOnHover>
              {[
                { name: "React Native", url: "https://cdn.simpleicons.org/react/000000" },
                { name: "Flutter", url: "https://cdn.simpleicons.org/flutter/000000" },
                { name: "Swift", url: "https://cdn.simpleicons.org/swift/000000" },
                { name: "Kotlin", url: "https://cdn.simpleicons.org/kotlin/000000" },
                { name: "Expo", url: "https://cdn.simpleicons.org/expo/000000" },
                { name: "Firebase", url: "https://cdn.simpleicons.org/firebase/000000" },
                { name: "Android Studio", url: "https://cdn.simpleicons.org/androidstudio/000000" },
                { name: "Xcode", url: "https://cdn.simpleicons.org/xcode/000000" },
                { name: "Fastlane", url: "https://cdn.simpleicons.org/fastlane/000000" },
                { name: "TestFlight", url: "https://cdn.simpleicons.org/testflight/000000" },
                { name: "GraphQL", url: "https://cdn.simpleicons.org/graphql/000000" },
                { name: "SQLite", url: "https://cdn.simpleicons.org/sqlite/000000" },
                { name: "App Store", url: "https://cdn.simpleicons.org/appstore/000000" },
                { name: "Google Play", url: "https://cdn.simpleicons.org/googleplay/000000" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 p-3 rounded-2xl bg-black/[0.02] border border-black/[0.06] transition-all group-hover:bg-white group-hover:border-primary/20 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 duration-500">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-[-2px]">
                    <span className="text-[8px] font-black text-black/10 group-hover:text-primary transition-colors uppercase tracking-[0.2em] font-['Anonymous_Pro']">MOBILE_CORE</span>
                    <span className="text-[13px] font-bold text-black/40 group-hover:text-black transition-colors uppercase tracking-[0.1em] font-heading">{tech.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* ─── ARCHITECTURE (Technical Schematic) ─────────────────────────────────── */}
        <section className="py-24 px-6 relative border-t border-black/[0.06] bg-black/[0.01]">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...fadeUp} className="mb-16 text-left">
              <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">SYSTEM_BLUEPRINT</span>
              <h2 className="text-3xl md:text-5xl font-display font-normal text-black tracking-[0.12em] leading-[1.1] uppercase mb-8">
                Execution <br />
                <span className="text-black/20">Schematic.</span>
              </h2>
              <p className="text-[#4B5563] font-display font-medium max-w-xl uppercase tracking-[0.1em] text-[15px] leading-relaxed">
                Tier-1 mobile engineering stack designed for sub-60ms interaction latency and zero-jank delivery.
              </p>
            </motion.div>

            {/* Schematic Flow Diagram */}
            <div className="relative w-full h-auto min-h-[460px] bg-white rounded-3xl border border-black/[0.06] p-12 md:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_20px_80px_rgba(0,0,0,0.04)]">
              <div className="absolute top-1/2 left-40 right-40 h-[0.5px] bg-primary/20 hidden lg:block -translate-y-1/2" />

              {[
                { step: "01", title: "Core", desc: "SwiftUI & Kotlin Compose", icon: Cpu },
                { step: "02", title: "Physics", desc: "Reanimated 3 (60FPS)", icon: Activity },
                { step: "03", title: "Persistence", desc: "SQLite / WatermelonDB", icon: Layers },
                { step: "04", title: "Sync", desc: "Background Pipelines", icon: Globe }
              ].map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative z-10 flex flex-col items-center bg-black/[0.01] p-8 rounded-2xl border border-black/[0.06] w-full lg:w-72 group hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:bg-white"
                  >
                    <div className="text-[10px] font-['Anonymous_Pro'] text-primary mb-6 tracking-[0.3em] uppercase font-black">LAYER_{node.step}</div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-black/30 mb-6 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[1.5px]" />
                    </div>
                    <h4 className="text-black text-xl font-display font-normal mb-3 uppercase tracking-[0.1em] group-hover:text-primary transition-colors">{node.title}</h4>
                    <p className="text-[10px] text-black/40 text-center font-['Anonymous_Pro'] font-bold uppercase tracking-widest leading-relaxed mb-6">{node.desc}</p>

                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white border border-black/[0.06] text-[8px] tracking-[0.2em] font-black text-black/30 uppercase shadow-sm group-hover:text-primary transition-colors font-['Anonymous_Pro'] rounded-full">NODE_{i}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── LIVE NATIVE EXPERIENCE ────────────────────────────────────────── */}
        <section className="py-24 px-6 relative border-t border-black/[0.06] bg-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(hsl(var(--primary))_0.2px,transparent_0.2px)] bg-[size:32px_32px] opacity-[0.03]" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div {...fadeUp} className="mb-16 text-center">
              <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">INTERACTION_ECOSYSTEM</span>
              <h2 className="text-3xl md:text-5xl font-display font-normal text-black tracking-[0.15em] leading-[1.1] uppercase mb-8">Hardware Synergies.</h2>
              <p className="text-[#4B5563] max-w-2xl mx-auto font-display font-medium uppercase tracking-[0.1em] text-[15px] leading-relaxed">Exploring the boundary between bare-metal performance and human-centric interaction design.</p>
            </motion.div>

            <div className="relative z-10 w-full">
              <FeatureCarousel />
            </div>
          </div>
        </section>

        {/* ─── FEATURES (Bento Grid) ────────────────────────────────────────────── */}
        <section className="py-24 px-6 relative border-t border-black/[0.06] bg-white">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...fadeUp} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-2xl text-left">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">CAPABILITIES</span>
                <h2 className="text-3xl md:text-5xl font-display font-normal text-black tracking-[0.15em] leading-[1.1] uppercase mb-8">
                  Engineered <br />
                  <span className="text-black/20">Precision.</span>
                </h2>
              </div>
              <p className="text-[#4B5563] max-w-sm font-display font-medium uppercase tracking-[0.1em] text-[13px] leading-relaxed border-l border-black/[0.06] pl-10">
                A non-exhaustive list of production-grade mobile capabilities implemented across our standard deployment cycles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 (Spans 2 columns) */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.1 }}
                className="md:col-span-2 bg-black/[0.01] border border-black/[0.06] rounded-3xl p-12 flex flex-col justify-between group overflow-hidden relative cursor-default hover:border-primary/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.04)] transition-all duration-700 hover:bg-white"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full transition-opacity duration-1000 opacity-0 group-hover:opacity-100" />
                <Fingerprint className="w-10 h-10 text-primary mb-10 stroke-[1.5px]" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-normal text-black mb-6 uppercase tracking-[0.1em] transition-colors group-hover:text-primary">Biometric Security</h3>
                  <p className="text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-[0.1em] text-[15px] max-w-md">
                    Implementing FaceID and Fingerprint authentication as a core standard, ensuring enterprise-grade sensitive data protection with frictionless user access.
                  </p>
                </div>
                <div className="mt-16 flex items-center justify-between pt-8 border-t border-black/[0.06] relative z-10">
                  <span className="text-[10px] font-['Anonymous_Pro'] text-black/30 font-black uppercase tracking-[0.3em] group-hover:text-primary transition-colors">SECURE_ENCLAVE // ACTIVE</span>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"><ArrowRight className="w-5 h-5" /></div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.2 }}
                className="bg-black/[0.01] border border-black/[0.06] rounded-3xl p-12 flex flex-col justify-between group overflow-hidden relative cursor-default hover:border-primary/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.04)] transition-all duration-700 hover:bg-white"
              >
                <Zap className="w-10 h-10 text-primary mb-10 stroke-[1.5px]" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-normal text-black mb-6 uppercase tracking-[0.1em] group-hover:text-primary transition-colors">60FPS Physics</h3>
                  <p className="text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-[0.1em] text-[13px]">
                    Every transition and gesture targets 60 frames per second fluid motion. Zero jank, zero compromises.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.3 }}
                className="bg-black/[0.01] border border-black/[0.06] rounded-3xl p-12 flex flex-col justify-between group overflow-hidden relative cursor-default hover:border-primary/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.04)] transition-all duration-700 hover:bg-white"
              >
                <Apple className="w-10 h-10 text-primary mb-10 stroke-[1.5px]" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-normal text-black mb-6 uppercase tracking-[0.1em] group-hover:text-primary transition-colors">Native First</h3>
                  <p className="text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-[0.1em] text-[13px]">
                    Deep hardware integration into iOS and Android platform-specific APIs. No web-wrappers.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 (Spans 2 columns) */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.4 }}
                className="md:col-span-2 bg-black/[0.01] border border-black/[0.06] rounded-3xl p-12 flex flex-col justify-between group overflow-hidden relative cursor-default hover:border-primary/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.04)] transition-all duration-700 hover:bg-white"
              >
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full transition-opacity duration-1000 opacity-0 group-hover:opacity-100" />
                <Star className="w-10 h-10 text-primary mb-10 stroke-[1px]" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-heading font-normal text-black mb-6 uppercase tracking-[0.1em] transition-colors group-hover:text-primary">Store Mastery</h3>
                  <p className="text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-[0.1em] text-[15px] max-w-md">
                    We manage the entire lifecycle. Full ASO management and automated CI/CD distribution pipelines ensured to reach the top of the charts.
                  </p>
                </div>
                <div className="mt-16 flex items-center justify-between pt-8 border-t border-black/[0.06] relative z-10">
                  <span className="text-[10px] font-['Anonymous_Pro'] text-black/30 font-black uppercase tracking-[0.3em] group-hover:text-primary transition-colors">APP_STORE_SYNC // ENABLED</span>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"><ArrowRight className="w-5 h-5" /></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
        <section className="bg-white border-t border-black/[0.06]">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── ELITE FINAL CTA ────────────────────────────────────────────────────────── */}
        <section className="py-32 px-6 border-t border-black/[0.06] bg-white overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/[0.01] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-20 items-center">
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/[0.02] border border-black/[0.06] mb-10 shadow-sm backdrop-blur-md"
                >
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] tracking-[0.4em] uppercase">SYSTEM_INIT // MOBILE_CORE</span>
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-heading font-normal text-black tracking-[0.15em] leading-[1.1] uppercase mb-12">
                  Launch Your <br />
                  <span className="text-primary">Native Era.</span>
                </h2>

                <div className="flex flex-col sm:flex-row items-start md:items-center gap-8 shrink-0 relative z-10">
                  <ShinyButton
                    className="h-12 px-8 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.12em]"
                    onClick={() => { }}
                  >
                    <span className="flex items-center gap-3 pt-[2px]">
                      INITIALIZE_STACK <ArrowRight className="w-4 h-4" />
                    </span>
                  </ShinyButton>
                  <Link to="/services" className="text-[10px] font-black text-[#4B5563] hover:text-black transition-colors uppercase tracking-[0.3em] font-['Anonymous_Pro'] border-b border-black/[0.06] pb-1">
                    VIEW_ALL_DISCIPLINES
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                {[
                  { label: "TARGET_FRAME_RATE", value: "60_FPS" },
                  { label: "HARDWARE_ACCESS", value: "DIRECT_LINK" },
                  { label: "STORE_SUCCESS_INDEX", value: "99.2%" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-black/[0.01] border border-black/[0.06] rounded-3xl hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_80px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-default">
                    <div className="text-[10px] font-['Anonymous_Pro'] text-black/30 mb-3 uppercase tracking-widest font-black">{stat.label}</div>
                    <div className="text-4xl font-heading font-normal text-black tracking-[0.1em] uppercase">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical markers strip */}
            <div className="flex flex-wrap items-center gap-10 mt-32 pt-10 border-t border-black/10 text-[10px] font-['Anonymous_Pro'] text-black/20 font-black uppercase tracking-[0.4em]">
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> SWIFT_UI_NATIVE</span>
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> KOTLIN_COMPOSE_READY</span>
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> SECURE_ENCLAVE_SYNC</span>
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> BIOMETRIC_PASSPORT</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MobileEngineering;
