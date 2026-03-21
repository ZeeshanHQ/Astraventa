import { motion } from "framer-motion";

interface AstraventaLogoProps {
 className?: string;
 size?: "nav" | "sm" | "md" | "lg" | "xl";
 iconOnly?: boolean;
}

export const AstraventaLogo = ({ className = "", size = "md", iconOnly = false }: AstraventaLogoProps) => {
 const sizeClasses = {
 nav: "h-8 md:h-10",
 sm: "h-6 md:h-8",
 md: "h-12 md:h-16", 
 lg: "h-16 md:h-20",
 xl: "h-20 md:h-24"
 };

 return (
 <motion.div 
 className={`flex items-center justify-start ${className}`}
 >
 <img 
 src="/logo-new.png" 
 alt="Astraventa Logo" 
 className={`${sizeClasses[size]} w-auto object-contain object-left`} 
 />
 </motion.div>
 );
};
