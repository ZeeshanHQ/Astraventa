import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Bot, Cpu, Zap, Brain, Database, Network } from "lucide-react";

interface AdvancedAIRobotProps {
  mousePosition: { x: number; y: number };
  currentSection?: string;
}

export const AdvancedAIRobot = ({ mousePosition, currentSection }: AdvancedAIRobotProps) => {
  const [isActive, setIsActive] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Calculate eye movement based on mouse position
  const eyeMovement = {
    left: Math.min(Math.max((mousePosition.x - window.innerWidth / 2) / 150, -8), 8),
    right: Math.min(Math.max((mousePosition.x - window.innerWidth / 2) / 150, -8), 8),
  };

  // Calculate robot position based on current section
  const getRobotPosition = () => {
    switch (currentSection) {
      case 'services': return { x: 0, y: -50, scale: 0.8 };
      case 'portfolio': return { x: 20, y: -30, scale: 0.9 };
      case 'team': return { x: -20, y: -40, scale: 0.85 };
      case 'process': return { x: 10, y: -60, scale: 0.75 };
      case 'contact': return { x: 0, y: -20, scale: 1.0 };
      default: return { x: 0, y: 0, scale: 1.0 };
    }
  };

  const robotPosition = getRobotPosition();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-1/2 right-8 z-40 pointer-events-none">
      <motion.div
        className="relative"
        animate={{
          x: robotPosition.x,
          y: robotPosition.y,
          scale: robotPosition.scale,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onHoverStart={() => setIsActive(true)}
        onHoverEnd={() => setIsActive(false)}
      >
        {/* Main Robot Body */}
        <motion.div
          className="relative w-32 h-40 bg-gradient-to-b from-white via-gray-100 to-gray-200 rounded-2xl shadow-2xl"
          animate={{
            y: [0, -5, 0],
            rotateY: isActive ? 10 : 0,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 0.3 }
          }}
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          {/* Robot Head */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-white rounded-xl">
            {/* Antenna */}
            <motion.div
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gray-300 rounded-sm"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* AI Brain Indicator */}
            <motion.div
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Face Screen */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gray-800 rounded-lg shadow-inner">
              {/* AI Eyes */}
              <motion.div
                className="absolute top-2 left-3 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{
                  x: eyeMovement.left,
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  boxShadow: "0 0 10px #00D4FF, 0 0 20px #00D4FF",
                }}
              />
              <motion.div
                className="absolute top-2 right-3 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{
                  x: eyeMovement.right,
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  boxShadow: "0 0 10px #00D4FF, 0 0 20px #00D4FF",
                }}
              />
              
              {/* AI Processing Lines */}
              <motion.div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Robot Body Details */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gray-100 rounded-lg">
            {/* AI Circuit Pattern */}
            <div className="absolute inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-md">
              <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
            </div>
          </div>

          {/* AI Arms */}
          <motion.div
            className="absolute top-16 left-2 w-3 h-12 bg-white rounded-full shadow-lg"
            animate={{
              rotate: isActive ? [0, 10, 0] : [0, 5, -5, 0],
            }}
            transition={{
              duration: isActive ? 0.5 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-16 right-2 w-3 h-12 bg-white rounded-full shadow-lg"
            animate={{
              rotate: isActive ? [0, -10, 0] : [0, -5, 5, 0],
            }}
            transition={{
              duration: isActive ? 0.5 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* AI Energy Field */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Floating AI Elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          }}
        >
          <Brain className="w-3 h-3 text-white" />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -360, 0],
          }}
          transition={{
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 5, repeat: Infinity, ease: "linear" },
          }}
        >
          <Cpu className="w-3 h-3 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 -left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
          animate={{
            x: [0, -5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
          }}
        >
          <Zap className="w-2.5 h-2.5 text-white" />
        </motion.div>

        {/* AI Data Streams */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Section Indicator */}
        {currentSection && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground border border-primary/30"
          >
            {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
