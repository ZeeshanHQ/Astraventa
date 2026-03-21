import { motion } from "framer-motion";
import { Brain, Target, Zap, Users } from "lucide-react";

const visionPoints = [
 {
 icon: Brain,
 title: "Intelligent Automation",
 description: "We believe AI should enhance human capabilities, not replace them. Our solutions amplify your team's potential.",
 },
 {
 icon: Target,
 title: "Precision & Accuracy",
 description: "Every automation is designed with precision. We achieve 99.9% accuracy in our AI-driven processes.",
 },
 {
 icon: Zap,
 title: "Lightning Fast",
 description: "Real-time processing and instant responses. Your automation should be as fast as your business needs.",
 },
 {
 icon: Users,
 title: "Human-Centered",
 description: "Technology that serves people. We build AI that understands context, emotion, and human intent.",
 },
];

export const About = () => {
 return (
  <section id="about" className="py-32 relative overflow-hidden bg-white">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-white" />
  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-[120px]" />
  <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[120px]" />
 
  <div className="container relative z-10 mx-auto px-4">
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center mb-20"
  >
  <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter uppercase leading-none">
  Our <span className="text-[hsl(var(--primary))]">Vision</span>
  </h2>
  <p className="text-xl text-black/50 max-w-3xl mx-auto leading-relaxed font-black uppercase tracking-tight">
  We envision a future where intelligent automation seamlessly integrates with human creativity, 
  enabling businesses to achieve unprecedented efficiency while maintaining the human touch that makes them unique.
  </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
  {visionPoints.map((point, index) => {
  const Icon = point.icon;
  return (
  <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  whileHover={{ y: -8, transition: { duration: 0.3 } }}
  className="group"
  >
  <div className="bg-black/[0.02] p-8 rounded-sm h-full smooth-transition border border-border/50 hover:border-[hsl(var(--primary))]/30 shadow-sm">
  <div className="w-14 h-14 rounded-sm bg-black flex items-center justify-center mb-6">
  <Icon className="w-7 h-7 text-[hsl(var(--primary))]" />
  </div>
  <h3 className="text-xl font-black text-black mb-4 uppercase tracking-tighter group-hover:text-[hsl(var(--primary))] transition-colors">
  {point.title}
  </h3>
  <p className="text-black/50 leading-relaxed font-black uppercase text-xs tracking-tight">
  {point.description}
  </p>
  </div>
  </motion.div>
  );
  })}
  </div>

  {/* Mission Statement */}
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-20 text-center"
  >
  <div className="bg-black p-12 rounded-sm max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent pointer-events-none" />
  <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter relative z-10">
  Empowering the Future of <span className="text-[hsl(var(--primary))]">Work</span>
  </h3>
  <p className="text-lg text-white/50 leading-relaxed font-black uppercase tracking-tight relative z-10">
  At Astraventa, we're not just building AI tools – we're crafting the future of intelligent automation. 
  Our mission is to democratize advanced AI capabilities, making them accessible to businesses of all sizes 
  while maintaining the highest standards of security, reliability, and human-centered design.
  </p>
  </div>
  </motion.div>
 </div>
 </section>
 );
};
