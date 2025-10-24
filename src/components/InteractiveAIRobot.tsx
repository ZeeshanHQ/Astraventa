import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bot, Zap, Brain, Cpu } from "lucide-react";

interface InteractiveAIRobotProps {
  mousePosition: { x: number; y: number };
}

export const InteractiveAIRobot = ({ mousePosition }: InteractiveAIRobotProps) => {
  const [isWaving, setIsWaving] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Calculate rotation based on mouse position
  const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 2;
  const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 2;

  const handleClick = () => {
    setIsWaving(true);
    setClickCount(prev => prev + 1);
    setTimeout(() => setIsWaving(false), 2000);
  };

  return (
    <div className="relative h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative interactive-robot-container"
        animate={{
          rotateY: mouseX * 10,
          rotateX: mouseY * 5,
          y: [0, -15, 0],
        }}
        transition={{
          rotateY: { duration: 0.1 },
          rotateX: { duration: 0.1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={handleClick}
        style={{
          transformStyle: "preserve-3d",
          cursor: "pointer",
        }}
      >
        {/* Main Robot Body */}
        <motion.div
          className="interactive-robot-body"
          animate={{
            scale: isWaving ? 1.1 : 1,
            boxShadow: isWaving 
              ? "0 0 60px rgba(74, 144, 226, 0.9), 0 0 120px rgba(74, 144, 226, 0.5)"
              : "0 0 40px rgba(74, 144, 226, 0.7), 0 0 80px rgba(74, 144, 226, 0.4)",
          }}
          transition={{ duration: 0.4 }}
        >
          <Bot className="w-16 h-16 text-white" />
        </motion.div>

        {/* Robot Head */}
        <motion.div
          className="interactive-robot-head"
          animate={{
            rotateY: mouseX * 15,
            rotateX: mouseY * 8,
            scale: isWaving ? 1.15 : 1,
          }}
          transition={{ duration: 0.2 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Eyes */}
          <motion.div
            className="interactive-robot-eye left-eye"
            animate={{
              x: mouseX * 3,
              y: mouseY * 2,
              scale: isWaving ? 1.2 : 1,
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.div
            className="interactive-robot-eye right-eye"
            animate={{
              x: mouseX * 3,
              y: mouseY * 2,
              scale: isWaving ? 1.2 : 1,
            }}
            transition={{ duration: 0.1 }}
          />

          {/* Antenna */}
          <motion.div
            className="interactive-robot-antenna"
            animate={{
              rotate: isWaving ? [0, 10, -10, 0] : [0, 5, -5, 0],
            }}
            transition={{
              duration: isWaving ? 0.5 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="interactive-antenna-tip"
              animate={{
                scale: isWaving ? [1, 1.5, 1] : [1, 1.2, 1],
                opacity: isWaving ? [0.8, 1, 0.8] : [0.8, 1, 0.8],
              }}
              transition={{
                duration: isWaving ? 0.5 : 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Arms */}
        <motion.div
          className="interactive-robot-arm left-arm"
          animate={{
            rotateZ: isWaving ? [0, 20, -20, 0] : [0, 10, -10, 0],
            rotateY: mouseX * 5,
          }}
          transition={{
            rotateZ: { duration: isWaving ? 0.5 : 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 0.2 },
          }}
        />
        <motion.div
          className="interactive-robot-arm right-arm"
          animate={{
            rotateZ: isWaving ? [0, -20, 20, 0] : [0, -10, 10, 0],
            rotateY: mouseX * 5,
          }}
          transition={{
            rotateZ: { duration: isWaving ? 0.5 : 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 0.2 },
          }}
        />

        {/* Floating AI Elements */}
        {[
          { Icon: Brain, delay: 0, radius: 80 },
          { Icon: Cpu, delay: 1, radius: 100 },
          { Icon: Zap, delay: 2, radius: 90 },
        ].map(({ Icon, delay, radius }, index) => (
          <motion.div
            key={index}
            className="floating-ai-element"
            style={{
              width: radius * 2,
              height: radius * 2,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
            }}
          >
            <motion.div
              className="ai-element-icon"
              animate={{
                scale: isWaving ? [1, 1.3, 1] : [1, 1.2, 1],
                opacity: isWaving ? [0.7, 1, 0.7] : [0.7, 1, 0.7],
              }}
              transition={{
                duration: isWaving ? 0.5 : 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            >
              <Icon className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        ))}

        {/* Energy Field */}
        <motion.div
          className="interactive-energy-field"
          animate={{
            scale: isWaving ? [1, 1.4, 1] : [1, 1.2, 1],
            opacity: isWaving ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: isWaving ? 1 : 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave Effect */}
        {isWaving && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 border-2 border-accent rounded-full"
          />
        )}

        {/* Click Counter */}
        {clickCount > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-white px-2 py-1 rounded-full text-xs font-bold"
          >
            Hey! 👋
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
