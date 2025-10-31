import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AdvancedScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to various animation values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        y: backgroundY,
        opacity: backgroundOpacity,
        scale: scale,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000" />
    </motion.div>
  );
};
