import { motion } from "framer-motion";
import logoNew from "@/assets/images/logo-new.png";

interface AstraventaLogoProps {
 className?: string;
 size?: "nav" | "sm" | "md" | "lg" | "xl";
 iconOnly?: boolean;
}

export const AstraventaLogo = ({ className = "", size = "md", iconOnly = false }: AstraventaLogoProps) => {
 const sizeClasses = {
 nav: "h-14 md:h-16 lg:h-[72px]",
 sm: "h-8 md:h-10",
 md: "h-12 md:h-16", 
 lg: "h-16 md:h-20",
 xl: "h-20 md:h-24"
 };

 return (
 <motion.div 
 className={`flex items-center justify-start ${className}`}
 >
 <img 
 src={logoNew} 
 alt="Astraventa Logo" 
 className={`${sizeClasses[size]} w-auto object-contain object-left`} 
 />
 </motion.div>
 );
};
