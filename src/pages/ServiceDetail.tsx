import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, Palette, Cpu, Zap, Rocket, Laptop, Blocks, Smartphone, Database, Paintbrush, MonitorPlay, CloudCog, ShieldCheck } from "lucide-react";

const servicesData: any = {
  "web": {
    title: "Web Engineering",
    subtitle: "High-Performance Digital Platforms",
    description: "We don't just build websites; we engineer high-performance digital engines that are fast, secure, and ready to scale. Using the latest technologies like Next.js and Framer Motion, we bring your vision to life.",
    icon: Code2,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Architecture", desc: "Planning the logic and flow of your platform." },
      { step: "02", title: "Design", desc: "Creating a high-end visual language for your brand." },
      { step: "03", title: "Build", desc: "Writing clean, efficient, and scaleable code." },
      { step: "04", title: "Scale", desc: "Launching and optimizing for global traffic." }
    ]
  },
  "mobile": {
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Dominance",
    description: "Build robust, sleek, and blazing fast mobile applications. We deliver pixel-perfect iOS and Android experiences customized to your enterprise requirements.",
    icon: Smartphone,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Strategy", desc: "Platform selection and feature mapping." },
      { step: "02", title: "Prototyping", desc: "Interactive mobile UI/UX mockups." },
      { step: "03", title: "Development", desc: "Writing React Native or Swift codebases." },
      { step: "04", title: "Deployment", desc: "App Store & Google Play optimization." }
    ]
  },
  "backend": {
    title: "Backend Systems",
    subtitle: "Unbreakable Server Infrastructures",
    description: "Robust APIs, databases, and microservices. We architect the invisible engines that power millions of requests per second.",
    icon: Database,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Schema", desc: "Database relational mapping and logic." },
      { step: "02", title: "API Design", desc: "REST & GraphQL endpoint architecture." },
      { step: "03", title: "Logic", desc: "Serverless or monolithic core programming." },
      { step: "04", title: "Security", desc: "Pen-testing and data compliance audits." }
    ]
  },
  "ui-ux": {
    title: "High-Level UI/UX",
    subtitle: "Aesthetic Engineering at its Finest",
    description: "Design is more than just looks. It's about how it feels and how it works. We create interfaces that are not only beautiful but also incredibly intuitive for your users.",
    icon: Palette,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Research", desc: "Understanding your users and their needs." },
      { step: "02", title: "Wireframing", desc: "Mapping out the user journey and experience." },
      { step: "03", title: "Visual Design", desc: "Applying elite colors, fonts, and patterns." },
      { step: "04", title: "Prototyping", desc: "Bringing the design to life with interaction." }
    ]
  },
  "branding": {
    title: "Brand Identity",
    subtitle: "Commanding Visual Presence",
    description: "Comprehensive visual branding and design systems. We forge corporate identities that exude trust, power, and high-end technological backing.",
    icon: Paintbrush,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Discovery", desc: "Analyzing your core ethos and target market." },
      { step: "02", title: "Logo Forge", desc: "Iterative geometric and typography design." },
      { step: "03", title: "System", desc: "Creating global design token documentation." },
      { step: "04", title: "Rollout", desc: "Applying the brand to all digital assets." }
    ]
  },
  "media": {
    title: "Interactive Media",
    subtitle: "Immersive Digital Storytelling",
    description: "3D graphics, motion design, and immersive WebGL. Elevate your landing pages with cinematic interactions that convert.",
    icon: MonitorPlay,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Storyboarding", desc: "Pre-visualizing the animation flow." },
      { step: "02", title: "3D Asset Creation", desc: "Modeling, texturing, and rigging." },
      { step: "03", title: "WebGL Integration", desc: "Bringing assets into the browser via Three.js." },
      { step: "04", title: "Optimization", desc: "Ensuring 60fps performance globally." }
    ]
  },
  "ai": {
    title: "Custom AI Integration",
    subtitle: "Automation that Feels Like Magic",
    description: "Bring the power of artificial intelligence into your existing business. We help you automate repetitive tasks, improve customer support, and make data-driven decisions with custom AI tools.",
    icon: Cpu,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Audit", desc: "Finding the best places for AI in your business." },
      { step: "02", title: "Strategy", desc: "Planning the AI models and data flow." },
      { step: "03", title: "Deployment", desc: "Integrating the AI into your daily workflows." },
      { step: "04", title: "Training", desc: "Teaching your team how to use their new tools." }
    ]
  },
  "automation": {
    title: "Process Automation",
    subtitle: "Zero-Human Bottlenecks",
    description: "Streamline operations with smart, automated workflows. Replace repetitive manual labor with deterministic autonomous agents.",
    icon: CloudCog,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Mapping", desc: "Identifying all redundant human tasks." },
      { step: "02", title: "Webhook Setup", desc: "Connecting distinct software silos globally." },
      { step: "03", title: "Agent Build", desc: "Developing Node/Python execution scripts." },
      { step: "04", title: "Monitoring", desc: "Deploying self-healing observability." }
    ]
  },
  "security": {
    title: "Security & Auditing",
    subtitle: "Enterprise-Grade Threat Mitigation",
    description: "Protect your infrastructure from modern vulnerabilities. From smart-contract auditing to rigorous penetration testing and SOC2 compliance.",
    icon: ShieldCheck,
    color: "text-foreground",
    bg: "bg-black/5",
    process: [
      { step: "01", title: "Threat Model", desc: "Identifying attack vectors and honeypots." },
      { step: "02", title: "Pen-Test", desc: "Ethical hacking and stress-testing infrastructure." },
      { step: "03", title: "Hardening", desc: "Patching Zero-Days and updating protocols." },
      { step: "04", title: "Certification", desc: "Achieving compliance and safety seals." }
    ]
  }
};

const ServiceDetail = () => {
 const { id } = useParams();
 const service = servicesData[id || ""];

 if (!service) {
 return (
 <div className="min-h-screen flex items-center justify-center">
 <div className="text-center">
 <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
 <Link to="/">
 <Button>Return Home</Button>
 </Link>
 </div>
 </div>
 );
 }

 return (
 <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary overflow-x-hidden">
 <Header />
 
 <main className="pt-32 pb-24">
 {/* Hero Section */}
 <section className="max-w-7xl mx-auto px-6 mb-32">
 <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors mb-12">
 <ArrowLeft className="w-4 h-4" />
 Back to Home
 </Link>
 
 <div className="max-w-4xl">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 >
  <div className={`w-20 h-20 rounded-sm bg-black flex items-center justify-center mb-10`}>
  <service.icon className={`w-10 h-10 text-[hsl(var(--primary))]`} />
  </div>
            <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-8 font-heading tracking-tighter leading-[0.9] uppercase">
              {service.title}
            </h1>
  <p className="text-2xl font-black text-[hsl(var(--primary))] mb-10 tracking-tighter font-heading uppercase">
  {service.subtitle}
  </p>
 <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mb-12">
 {service.description}
 </p>
  <Button size="lg" className="rounded-sm h-16 px-12 font-black font-heading tracking-tighter uppercase text-sm bg-black hover:bg-black/90">Start a Project</Button>
 </motion.div>
 </div>
 </section>

 {/* Process Section */}
 <section className="bg-slate-950 section-padding relative overflow-hidden section-transition">
          <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-20 font-heading tracking-tighter uppercase">Our Workflow.</h2>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
 {service.process.map((p: any, i: number) => (
  <div key={i} className="p-8 rounded-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[hsl(var(--primary))]/30 transition-all duration-300">
  <div className="text-4xl font-black text-[hsl(var(--primary))]/40 mb-6 font-heading">{p.step}</div>
 <h4 className="text-xl font-bold text-white mb-4">{p.title}</h4>
 <p className="text-slate-400 text-sm font-medium leading-relaxed">{p.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Action Bar */}
  <section className="max-w-7xl mx-auto px-6 py-32 text-center">
   <div className="p-16 rounded-sm bg-slate-50 border border-border relative overflow-hidden">
  <div className="absolute top-[-10%] right-[-10%] opacity-5">
  <service.icon size={300} />
  </div>
  <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-8 font-heading tracking-tighter uppercase">Ready to build?</h2>
  <p className="text-xl text-muted-foreground font-medium mb-12 max-w-2xl mx-auto font-sans leading-relaxed text-sm">
  Our experts are ready to take your business to the next level with our {service.title.toLowerCase()} expertise.
  </p>
  <Button size="lg" className="rounded-sm h-16 px-12 font-black font-heading tracking-tighter uppercase text-sm bg-black hover:bg-black/90">Book a Free Call</Button>
  </div>
  </section>
 </main>

 <Footer />
 </div>
 );
};

export default ServiceDetail;
