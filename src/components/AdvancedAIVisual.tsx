import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, Cpu, Zap, Network, Database, Shield } from "lucide-react";

interface AdvancedAIVisualProps {
  mousePosition: { x: number; y: number };
}

export const AdvancedAIVisual = ({ mousePosition }: AdvancedAIVisualProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate rotation based on mouse position
  const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 2;
  const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 2;

  return (
    <div className="relative h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative ai-visual-container"
        animate={{
          rotateY: mouseX * 8,
          rotateX: mouseY * 4,
          y: [0, -20, 0],
        }}
        transition={{
          rotateY: { duration: 0.1 },
          rotateX: { duration: 0.1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main AI Core */}
        <motion.div
          className="ai-core"
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered 
              ? "0 0 60px rgba(74, 144, 226, 0.9), 0 0 120px rgba(74, 144, 226, 0.5)"
              : "0 0 40px rgba(74, 144, 226, 0.7), 0 0 80px rgba(74, 144, 226, 0.4)",
          }}
          transition={{ duration: 0.4 }}
        >
          <Brain className="w-16 h-16 text-white" />
        </motion.div>

        {/* Orbiting Elements */}
        {[
          { Icon: Cpu, delay: 0, radius: 80 },
          { Icon: Network, delay: 1, radius: 100 },
          { Icon: Database, delay: 2, radius: 120 },
          { Icon: Shield, delay: 3, radius: 90 },
        ].map(({ Icon, delay, radius }, index) => (
          <motion.div
            key={index}
            className="orbiting-element"
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
              className="element-icon"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            >
              <Icon className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        ))}

        {/* Neural Network Lines */}
        <svg className="neural-network" viewBox="0 0 300 300">
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1="150"
              y1="150"
              x2={150 + Math.cos(i * 30 * Math.PI / 180) * 100}
              y2={150 + Math.sin(i * 30 * Math.PI / 180) * 100}
              stroke="url(#gradient)"
              strokeWidth="2"
              opacity="0.3"
              animate={{
                opacity: [0.1, 0.6, 0.1],
                strokeWidth: [1, 3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" />
              <stop offset="50%" stopColor="#6BB6FF" />
              <stop offset="100%" stopColor="#8CC8FF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Data Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="data-particle"
            style={{
              left: `${50 + Math.cos(i * 18 * Math.PI / 180) * 60}%`,
              top: `${50 + Math.sin(i * 18 * Math.PI / 180) * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [0.5, 1.5, 0.5],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Energy Field */}
        <motion.div
          className="energy-field"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};
