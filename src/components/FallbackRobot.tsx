import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

interface FallbackRobotProps {
  mousePosition: { x: number; y: number };
}

export const FallbackRobot = ({ mousePosition }: FallbackRobotProps) => {
  return (
    <div className="relative h-full flex items-center justify-center">
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Main Robot Icon */}
        <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-lg">
          <Bot className="w-16 h-16 text-white" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 border-2 border-primary/30 rounded-full"
        />
        
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-4 border border-secondary/30 rounded-full"
        />

        {/* Pulse Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-primary/20 rounded-full"
        />

        {/* Sparkles */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-4 -right-4"
        >
          <Sparkles className="w-6 h-6 text-accent" />
        </motion.div>
      </motion.div>
    </div>
  );
};
