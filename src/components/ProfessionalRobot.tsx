import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ProfessionalRobotProps {
  mousePosition: { x: number; y: number };
}

export const ProfessionalRobot = ({ mousePosition }: ProfessionalRobotProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState(0);
  const [energyLevel, setEnergyLevel] = useState(0);

  // Calculate eye movement based on mouse position - ENHANCED PRECISION
  const eyeMovement = {
    left: Math.min(Math.max((mousePosition.x - window.innerWidth / 2) / 40, -25), 25),
    right: Math.min(Math.max((mousePosition.x - window.innerWidth / 2) / 40, -25), 25),
    vertical: Math.min(Math.max((mousePosition.y - window.innerHeight / 2) / 60, -20), 20),
  };

  // Breathing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBreathingPhase(prev => (prev + 1) % 100);
      setEnergyLevel(Math.sin(Date.now() * 0.003) * 0.5 + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 2000);
  };

  const breathingScale = 1 + Math.sin(breathingPhase * 0.1) * 0.02;

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <motion.div
        className="relative w-[280px] h-[350px] md:w-[320px] md:h-[380px] flex items-center justify-center cursor-pointer"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Enhanced Energy Field Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-indigo-500/10 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />

        {/* Main Robot Body - HANDSOME & AESTHETIC */}
        <motion.div
          className="absolute w-full h-full bg-white rounded-[30%_30%_70%_70%/45%_45%_55%_55%] shadow-2xl"
          animate={{ scale: breathingScale }}
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 15%, #E9ECEF 40%, #DEE2E6 70%, #CED4DA 100%)",
            boxShadow: `
              0 25px 60px rgba(0,0,0,0.2), 
              0 0 80px rgba(147, 51, 234, 0.3), 
              inset 0 3px 0 rgba(255,255,255,0.9),
              0 0 0 1px rgba(255,255,255,0.1)
            `
          }}
        >
          {/* Enhanced Head/Antenna with Holographic Effect */}
          <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[18%] h-[4%] bg-white rounded-t-full shadow-lg" />
          
          {/* Holographic Antenna Tip */}
          <motion.div
            className="absolute top-[0.5%] left-1/2 -translate-x-1/2 w-[5%] h-[3%] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
              boxShadow: [
                "0 0 10px #8B5CF6",
                "0 0 20px #8B5CF6, 0 0 30px #EC4899",
                "0 0 10px #8B5CF6"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Enhanced Face Screen with Holographic Display */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[55%] h-[20%] bg-gray-900 rounded-full flex items-center justify-center overflow-hidden shadow-inner">
            {/* Holographic Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,212,255,0.1)_50%,transparent_100%)] bg-[length:20px_20px]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(0,212,255,0.1)_50%,transparent_100%)] bg-[length:20px_20px]" />
            </div>

            {/* Enhanced Eyes with Advanced Tracking */}
            <motion.div
              className="absolute w-[24%] h-[32%] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
              style={{ 
                left: '22%', 
                top: '34%', 
                transform: `translate(${eyeMovement.left}px, ${eyeMovement.vertical}px)`,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)',
                boxShadow: `
                  0 0 20px #00D4FF, 
                  0 0 40px #00D4FF, 
                  0 0 60px #3B82F6,
                  inset 0 0 12px rgba(255,255,255,0.4)
                `
              }}
              animate={{
                scale: isHovered ? 1.15 : 1,
                opacity: [0.9, 1, 0.9],
                filter: isHovered ? "brightness(1.2)" : "brightness(1)",
              }}
              transition={{ 
                scale: { duration: 0.2 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                filter: { duration: 0.3 }
              }}
            />
            <motion.div
              className="absolute w-[24%] h-[32%] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
              style={{ 
                right: '22%', 
                top: '34%', 
                transform: `translate(${eyeMovement.right}px, ${eyeMovement.vertical}px)`,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)',
                boxShadow: `
                  0 0 20px #00D4FF, 
                  0 0 40px #00D4FF, 
                  0 0 60px #3B82F6,
                  inset 0 0 12px rgba(255,255,255,0.4)
                `
              }}
              animate={{
                scale: isHovered ? 1.15 : 1,
                opacity: [0.9, 1, 0.9],
                filter: isHovered ? "brightness(1.2)" : "brightness(1)",
              }}
              transition={{ 
                scale: { duration: 0.2 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                filter: { duration: 0.3 }
              }}
            />
            
            {/* Enhanced AI Processing Lines */}
            <motion.div
              className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[45%] h-[1.5%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Additional Processing Indicators */}
            <motion.div
              className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[35%] h-[0.5%] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              animate={{
                opacity: [0, 0.7, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* Enhanced Ears/Antennae with Energy Flow */}
          <motion.div
            className="absolute top-[16%] left-[3%] w-[7%] h-[10%] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-full rotate-12 shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-[16%] right-[3%] w-[7%] h-[10%] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-full -rotate-12 shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          {/* Enhanced Torso Detail with Energy Core */}
          <motion.div
            className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[35%] h-[12%] bg-gradient-to-r from-teal-400/90 via-cyan-400/90 to-blue-500/90 rounded-full shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          {/* Enhanced Lower Body with Energy Strip */}
          <div className="absolute bottom-[8%] left-0 w-full h-[4%] bg-gradient-to-r from-blue-700 via-blue-800 to-purple-800 shadow-lg" />

          {/* Enhanced Arms with Advanced Animation */}
          <motion.div
            className="absolute w-[16%] h-[25%] bg-white rounded-full shadow-xl"
            style={{ left: '-3%', top: '36%', transformOrigin: 'top right' }}
            animate={{ 
              rotate: isWaving ? [0, -25, 0, -25, 0] : (isHovered ? [0, -8, 0] : [0, 1, -1, 0]),
              y: isHovered ? -2 : 0,
              scale: isHovered ? 1.03 : 1,
            }}
            transition={{ 
              duration: isWaving ? 2 : 0.8, 
              ease: "easeInOut",
              repeat: isWaving ? 1 : Infinity
            }}
          />
          <motion.div
            className="absolute w-[16%] h-[25%] bg-white rounded-full shadow-xl"
            style={{ right: '-3%', top: '36%', transformOrigin: 'top left' }}
            animate={{ 
              rotate: isWaving ? [0, 25, 0, 25, 0] : (isHovered ? [0, 8, 0] : [0, -1, 1, 0]),
              y: isHovered ? -2 : 0,
              scale: isHovered ? 1.03 : 1,
            }}
            transition={{ 
              duration: isWaving ? 2 : 0.8, 
              ease: "easeInOut",
              repeat: isWaving ? 1 : Infinity
            }}
          />

          {/* Energy Flow Lines */}
          <motion.div
            className="absolute top-[25%] left-[15%] w-[2%] h-[15%] bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.div
            className="absolute top-[25%] right-[15%] w-[2%] h-[15%] bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
        </motion.div>

        {/* Enhanced Multi-Layer Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Advanced Floating Particles System */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
              animate={{
                x: Math.sin(i * 0.5 + Date.now() * 0.001) * (50 + i * 4),
                y: Math.cos(i * 0.5 + Date.now() * 0.001) * (50 + i * 4),
                opacity: [0, 0.9, 0],
                scale: [0.3, 1.5, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Holographic Data Streams */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced Speech Bubble with Holographic Effect */}
        {isWaving && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-md px-6 py-3 rounded-2xl border border-cyan-400/50 shadow-glow whitespace-nowrap"
            style={{
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)"
            }}
          >
            <span className="text-sm font-medium text-foreground">Hello! 👋</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-6 border-r-6 border-t-6 border-card/95 border-l-transparent border-r-transparent"></div>
          </motion.div>
        )}

        {/* Energy Pulse Rings */}
        <motion.div
          className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 border border-blue-400/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
};
