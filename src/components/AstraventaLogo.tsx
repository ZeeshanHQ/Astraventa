import { motion } from "framer-motion";

interface AstraventaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const AstraventaLogo = ({ className = "", size = "md" }: AstraventaLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Monogram - Exact AV Design */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* AV Letters - Intertwined Design */}
          <g>
            {/* Letter A - Dark gray with metallic sheen */}
            <path 
              d="M25 80 L35 50 L45 80 M30 70 L40 70" 
              stroke="url(#aGradient)" 
              strokeWidth="3.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              filter="url(#metallicA)"
            />
            
            {/* Letter V - Blue gradient, integrated with A */}
            <path 
              d="M45 50 L55 80 L65 50" 
              stroke="url(#vGradient)" 
              strokeWidth="3.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              filter="url(#metallicV)"
            />
          </g>
          
          {/* Circuit Lines - Exact pattern from image */}
          <g stroke="#00D4FF" strokeWidth="2.5" fill="none">
            {/* Top-left line from A - extends up and right */}
            <path d="M20 50 L10 30 L20 20" strokeLinecap="round"/>
            <circle cx="20" cy="20" r="2.5" fill="#00D4FF"/>
            
            {/* Bottom-left line from A - goes down, right, then up */}
            <path d="M20 80 L10 90 L25 95" strokeLinecap="round"/>
            <circle cx="25" cy="95" r="2.5" fill="#00D4FF"/>
            
            {/* Top-right line from V - extends up and left */}
            <path d="M70 50 L80 30 L70 20" strokeLinecap="round"/>
            <circle cx="70" cy="20" r="2.5" fill="#00D4FF"/>
          </g>
          
          {/* Gradients and Effects */}
          <defs>
            <linearGradient id="aGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A4A4A"/>
              <stop offset="30%" stopColor="#6B6B6B"/>
              <stop offset="70%" stopColor="#4A4A4A"/>
              <stop offset="100%" stopColor="#2A2A2A"/>
            </linearGradient>
            <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF"/>
              <stop offset="50%" stopColor="#4A90E2"/>
              <stop offset="100%" stopColor="#1E40AF"/>
            </linearGradient>
            
            {/* Metallic effects */}
            <filter id="metallicA">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
              <feSpecularLighting result="specOut" in="blur" specularConstant="1.5" specularExponent="20" lightingColor="#BBBBBB">
                <fePointLight x="-50" y="-50" z="200"/>
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
            </filter>
            
            <filter id="metallicV">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
              <feSpecularLighting result="specOut" in="blur" specularConstant="1.5" specularExponent="20" lightingColor="#00D4FF">
                <fePointLight x="-50" y="-50" z="200"/>
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
            </filter>
          </defs>
        </svg>
      </div>
      
      {/* Logo Text - Exact gradient from image */}
      <div className={`${textSizes[size]} font-bold`}>
        <span className="text-gray-300">Astr</span>
        <span className="text-blue-400">av</span>
        <span className="text-cyan-300">enta</span>
      </div>
    </motion.div>
  );
};
