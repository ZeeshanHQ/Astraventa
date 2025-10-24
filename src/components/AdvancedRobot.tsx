import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AdvancedRobotProps {
  mousePosition: { x: number; y: number };
}

export const AdvancedRobot = ({ mousePosition }: AdvancedRobotProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate rotation based on mouse position
  const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 2;
  const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 2;

  return (
    <div className="relative h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative robot-container"
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Robot Body */}
        <motion.div
          className="robot-body"
          animate={{
            scale: isHovered ? 1.05 : 1,
            boxShadow: isHovered 
              ? "0 0 50px rgba(74, 144, 226, 0.8), 0 0 100px rgba(74, 144, 226, 0.4)"
              : "0 0 30px rgba(74, 144, 226, 0.6), 0 0 60px rgba(74, 144, 226, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Robot Head */}
        <motion.div
          className="robot-head"
          animate={{
            rotateY: mouseX * 15,
            rotateX: mouseY * 8,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Eyes */}
          <motion.div
            className="robot-eye left-eye"
            animate={{
              x: mouseX * 3,
              y: mouseY * 2,
            }}
            transition={{ duration: 0.1 }}
          />
          <motion.div
            className="robot-eye right-eye"
            animate={{
              x: mouseX * 3,
              y: mouseY * 2,
            }}
            transition={{ duration: 0.1 }}
          />

          {/* Antenna */}
          <motion.div
            className="robot-antenna"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="antenna-tip"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Arms */}
        <motion.div
          className="robot-arm left-arm"
          animate={{
            rotateZ: [0, 10, -10, 0],
            rotateY: mouseX * 5,
          }}
          transition={{
            rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 0.2 },
          }}
        />
        <motion.div
          className="robot-arm right-arm"
          animate={{
            rotateZ: [0, -10, 10, 0],
            rotateY: mouseX * 5,
          }}
          transition={{
            rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 0.2 },
          }}
        />

        {/* Legs */}
        <motion.div
          className="robot-leg left-leg"
          animate={{
            rotateX: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="robot-leg right-leg"
          animate={{
            rotateX: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, -10, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Energy Field */}
        <motion.div
          className="energy-field"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};
