import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ProfessionalRobotProps {
  mousePosition: { x: number; y: number };
}

export const ProfessionalRobot = ({ mousePosition }: ProfessionalRobotProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  // Calculate eye movement based on mouse position - PERFECT ROTATION
  const eyeMovement = {
    left: Math.min(Math.max((mousePosition.x - window.innerWidth / 2) / 50, -20), 20),
    right: Math.min(Math.max((mousePosition.x - window.innerWidth / 2) / 50, -20), 20),
    vertical: Math.min(Math.max((mousePosition.y - window.innerHeight / 2) / 80, -15), 15),
  };

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 2000);
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <motion.div
        className="relative w-[300px] h-[380px] md:w-[350px] md:h-[420px] flex items-center justify-center cursor-pointer"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.03 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Main Robot Body - Smart Design with Fat Belly */}
        <motion.div
          className="absolute w-full h-full bg-white rounded-[45%_45%_70%_70%/55%_55%_45%_45%] shadow-2xl"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 25%, #E9ECEF 60%, #DEE2E6 85%, #CED4DA 100%)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.2), 0 0 100px rgba(0, 212, 255, 0.3), inset 0 3px 0 rgba(255,255,255,0.9)"
          }}
        >
          {/* Head/Antenna - Enhanced */}
          <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[16%] h-[3%] bg-white rounded-t-full shadow-md" />
          
          {/* Antenna Tip */}
          <div className="absolute top-[1%] left-1/2 -translate-x-1/2 w-[4%] h-[2%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-glow" />

          {/* Face Screen - Enhanced */}
          <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[56%] h-[20%] bg-gray-900 rounded-full flex items-center justify-center overflow-hidden shadow-inner">
            {/* Eyes - PERFECT ROTATION with Crescent Shape */}
            <motion.div
              className="absolute w-[24%] h-[30%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              style={{ 
                left: '22%', 
                top: '36%', 
                transform: `translate(${eyeMovement.left}px, ${eyeMovement.vertical}px)`,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%)',
                boxShadow: "0 0 20px #00D4FF, 0 0 40px #00D4FF, inset 0 0 10px rgba(255,255,255,0.3)"
              }}
              animate={{
                scale: isHovered ? 1.15 : 1,
                opacity: [0.9, 1, 0.9],
              }}
              transition={{ 
                scale: { duration: 0.2 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute w-[24%] h-[30%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              style={{ 
                right: '22%', 
                top: '36%', 
                transform: `translate(${eyeMovement.right}px, ${eyeMovement.vertical}px)`,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%)',
                boxShadow: "0 0 20px #00D4FF, 0 0 40px #00D4FF, inset 0 0 10px rgba(255,255,255,0.3)"
              }}
              animate={{
                scale: isHovered ? 1.15 : 1,
                opacity: [0.9, 1, 0.9],
              }}
              transition={{ 
                scale: { duration: 0.2 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* AI Processing Lines */}
            <motion.div
              className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[40%] h-[1%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Ears/Antennae - Enhanced Teal */}
          <div className="absolute top-[20%] left-[3%] w-[7%] h-[10%] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full rotate-12 shadow-md" />
          <div className="absolute top-[20%] right-[3%] w-[7%] h-[10%] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full -rotate-12 shadow-md" />

          {/* Torso Detail - Enhanced Teal Pouch */}
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[32%] h-[10%] bg-gradient-to-r from-teal-400/90 to-cyan-400/90 rounded-full shadow-md" />

          {/* Lower Body Line - Enhanced Dark Blue */}
          <div className="absolute bottom-[10%] left-0 w-full h-[3%] bg-gradient-to-r from-blue-700 to-blue-800 shadow-sm" />

          {/* Arms - Enhanced with Wave Animation */}
          <motion.div
            className="absolute w-[16%] h-[26%] bg-white rounded-full shadow-lg"
            style={{ left: '-3%', top: '36%', transformOrigin: 'top right' }}
            animate={{ 
              rotate: isWaving ? [0, -25, 0, -25, 0] : (isHovered ? [0, -8, 0] : 0),
              y: isHovered ? -2 : 0
            }}
            transition={{ 
              duration: isWaving ? 2 : 0.6, 
              ease: "easeInOut",
              repeat: isWaving ? 1 : Infinity
            }}
          />
          <motion.div
            className="absolute w-[16%] h-[26%] bg-white rounded-full shadow-lg"
            style={{ right: '-3%', top: '36%', transformOrigin: 'top left' }}
            animate={{ 
              rotate: isWaving ? [0, 25, 0, 25, 0] : (isHovered ? [0, 8, 0] : 0),
              y: isHovered ? -2 : 0
            }}
            transition={{ 
              duration: isWaving ? 2 : 0.6, 
              ease: "easeInOut",
              repeat: isWaving ? 1 : Infinity
            }}
          />
        </motion.div>

        {/* Enhanced Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-[50%_50%_60%_60%/60%_60%_40%_40%]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles - Subtle */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full blur-sm"
              animate={{
                x: Math.sin(i * 0.8 + Date.now() * 0.001) * (40 + i * 3),
                y: Math.cos(i * 0.8 + Date.now() * 0.001) * (40 + i * 3),
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Speech Bubble */}
        {isWaving && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary/50 shadow-glow whitespace-nowrap"
          >
            <span className="text-sm font-medium text-foreground">Hello! 👋</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-card/95 border-l-transparent border-r-transparent"></div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
