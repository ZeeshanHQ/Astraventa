import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProfessionalRobot } from "./ProfessionalRobot";
import { TypingAnimation } from "./TypingAnimation";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e6af320_1px,transparent_1px),linear-gradient(to_bottom,#4e6af320_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full"
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/20 rounded-full"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent/20 rounded-full"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 hover:shadow-glow transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 500+ companies worldwide
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            >
              <span className="gradient-text">Astraventa</span>{" "}
              <br className="sm:hidden" />
              <TypingAnimation 
                texts={[
                  "AI Solutions",
                  "Web Development", 
                  "Automation Services",
                  "Custom Software",
                  "AI Integration",
                  "Smart Analytics"
                ]}
                className="inline-block"
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              Transform your business with custom AI chatbots, web automation, and intelligent integrations. 
              We deliver enterprise-grade solutions that increase efficiency by 95% and reduce operational costs by 60%.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="neon" 
                size="xl"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Explore Solutions
              </Button>
            </motion.div>

          </motion.div>

          {/* Right Side - Professional Robot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            <ProfessionalRobot mousePosition={mousePosition} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
