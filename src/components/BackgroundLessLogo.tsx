import { motion } from "framer-motion";

interface BackgroundLessLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BackgroundLessLogo = ({ className = "", size = "md" }: BackgroundLessLogoProps) => {
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
      {/* Professional Logo Monogram - Enhanced Design */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            {/* Professional Gradients */}
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(228, 87%, 73%)" />
              <stop offset="50%" stopColor="hsl(264, 100%, 81%)" />
              <stop offset="100%" stopColor="hsl(172, 100%, 60%)" />
            </linearGradient>
            
            {/* Glow Effect */}
            <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* AV Letters - Professional Design */}
          <g filter="url(#logoGlow)">
            {/* Letter A - Enhanced with tech elements */}
            <path 
              d="M20 85 L30 45 L40 85 M25 75 L35 75" 
              stroke="url(#logoGradient)" 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            
            {/* Letter V - Enhanced with tech elements */}
            <path 
              d="M45 45 L55 85 L65 45" 
              stroke="url(#logoGradient)" 
              strokeWidth="4" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            
            {/* Professional Circuit Lines */}
            <path 
              d="M30 45 L45 45" 
              stroke="url(#logoGradient)" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
              opacity="0.8"
            />
            
            {/* Enhanced Tech Elements */}
            <circle cx="35" cy="60" r="1.5" fill="url(#logoGradient)" opacity="0.6" />
            <circle cx="55" cy="60" r="1.5" fill="url(#logoGradient)" opacity="0.6" />
            
            {/* Professional Corner Elements */}
            <rect x="15" y="15" width="3" height="3" fill="url(#logoGradient)" opacity="0.4" rx="1" />
            <rect x="82" y="15" width="3" height="3" fill="url(#logoGradient)" opacity="0.4" rx="1" />
            <rect x="15" y="82" width="3" height="3" fill="url(#logoGradient)" opacity="0.4" rx="1" />
            <rect x="82" y="82" width="3" height="3" fill="url(#logoGradient)" opacity="0.4" rx="1" />
          </g>
        </svg>
      </div>

      {/* Professional Text Layout */}
      <div className="flex flex-col">
        <span className={`font-bold ${textSizes[size]} text-foreground tracking-tight leading-tight`}>
          Astraventa
        </span>
        <span className="text-xs text-muted-foreground -mt-1 font-medium tracking-wider uppercase">
          AI Solutions
        </span>
      </div>
    </motion.div>
  );
};
