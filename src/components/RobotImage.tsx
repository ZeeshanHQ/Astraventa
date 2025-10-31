import { motion } from "framer-motion";
import { useState } from "react";

interface RobotImageProps {
  mousePosition: { x: number; y: number };
}

export const RobotImage = ({ mousePosition }: RobotImageProps) => {
  const [isWaving, setIsWaving] = useState(false);

  // Calculate eye movement based on mouse position
  const eyeMovement = {
    left: Math.min(Math.max((mousePosition.x - window.innerWidth / 2) / 100, -3), 3),
    right: Math.min(Math.max((mousePosition.x - window.innerWidth / 2) / 100, -3), 3),
  };

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Robot Container */}
      <motion.div
        className="relative w-80 h-80"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        {/* Main Robot Body - Pear-shaped, white with glossy finish */}
        <motion.div
          className="w-64 h-80 bg-white rounded-3xl mx-auto relative shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Robot Head - Integrated with body */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-white rounded-2xl">
            {/* Small white antenna/sensor on top */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white rounded-sm shadow-sm" />
            
            {/* Face Screen - Dark recessed area */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-800 rounded-xl shadow-inner">
              {/* Glowing electric blue eyes - crescent shaped, curved upwards */}
              <motion.div
                className="absolute top-4 left-6 w-8 h-4 bg-blue-400 rounded-full opacity-90"
                style={{
                  clipPath: "ellipse(100% 50% at 50% 0%)",
                  boxShadow: "0 0 10px #00D4FF, 0 0 20px #00D4FF",
                }}
                animate={{
                  x: eyeMovement.left,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-4 right-6 w-8 h-4 bg-blue-400 rounded-full opacity-90"
                style={{
                  clipPath: "ellipse(100% 50% at 50% 0%)",
                  boxShadow: "0 0 10px #00D4FF, 0 0 20px #00D4FF",
                }}
                animate={{
                  x: eyeMovement.right,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          
          {/* Ears/Antennae - Light teal/cyan fin-like structures */}
          <div className="absolute top-8 left-8 w-6 h-12 bg-cyan-300 rounded-full transform rotate-12 shadow-sm" />
          <div className="absolute top-8 right-8 w-6 h-12 bg-cyan-300 rounded-full transform -rotate-12 shadow-sm" />
          
          {/* Robot Arms */}
          <motion.div
            className="absolute top-32 left-2 w-6 h-16 bg-white rounded-full shadow-lg"
            animate={{
              rotate: isWaving ? [0, 25, 0] : 0,
            }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute top-32 right-2 w-6 h-16 bg-white rounded-full shadow-lg" />
          
          {/* Torso Details - Light teal/cyan pouch-like detail */}
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-cyan-300 rounded-xl shadow-sm" />
          
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute -top-6 -right-6 w-4 h-4 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -bottom-6 -left-6 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
          animate={{
            y: [0, -12, 0],
            rotate: [0, -360, 0],
          }}
          transition={{
            duration: 3,
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
            className="absolute inset-0 border-2 border-cyan-400 rounded-full"
          />
        )}

        {/* Wave Message */}
        {isWaving && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            Hello!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};