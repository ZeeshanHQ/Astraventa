import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

// Define the props for the component
export interface FeatureHighlightCardProps {
 imageSrc: string;
 imageAlt?: string;
 title: React.ReactNode;
 description: React.ReactNode;
 buttonText: string;
 className?: string;
 preheaderSection?: React.ReactNode;
}

// Animation variants for Framer Motion
const containerVariants: Variants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.2,
 delayChildren: 0.1,
 },
 },
};

const itemVariants: Variants = {
 hidden: { y: 20, opacity: 0 },
 visible: {
 y: 0,
 opacity: 1,
 transition: {
 duration: 0.7,
 ease: [0.6, -0.05, 0.01, 0.99],
 },
 },
};

const imageContainerVariants: Variants = {
 hidden: { scale: 0.95, opacity: 0, x: 20 },
 visible: {
 scale: 1,
 opacity: 1,
 x: 0,
 transition: {
 duration: 0.8,
 ease: "easeOut"
 }
 }
}

/**
 * A responsive and animated card component to highlight a feature.
 * Built with TypeScript, Tailwind CSS, and Framer Motion.
 * Adapted for Astraventa Bright Theme with Left (Text) / Right (Image) layout.
 */
export const FeatureHighlightCard = React.forwardRef<
 HTMLDivElement,
 FeatureHighlightCardProps
>(({ imageSrc, imageAlt = "Feature image", title, description, buttonText, className, preheaderSection }, ref) => {
 return (
 <motion.div
 ref={ref}
 className={cn(
 "relative w-full max-w-[1400px] overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 md:p-16 shadow-lg",
 className
 )}
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 >
 {/* Background glow effects */}
 <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#0066FF]/5 blur-[100px]" />
 <div className="absolute left-0 bottom-0 -z-10 h-[300px] w-[300px] translate-y-1/3 -translate-x-1/3 rounded-full bg-[#0066FF]/5 blur-[80px]" />
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
 {/* Left Section: Content */}
 <div className="flex flex-col text-left space-y-6 z-10">
 {preheaderSection && (
 <motion.div variants={itemVariants}>
 {preheaderSection}
 </motion.div>
 )}

 {/* Title Section */}
 <motion.h2
 variants={itemVariants}
 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-heading leading-tight"
 >
 {title}
 </motion.h2>

 {/* Description Section */}
 <motion.div
 variants={itemVariants}
 className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl"
 >
 {description}
 </motion.div>

 {/* Button Section */}
 <motion.div variants={itemVariants} className="pt-4">
 <Button size="lg" className="h-14 px-8 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-full font-heading font-bold flex items-center gap-3 transition-transform shadow-xl shadow-[#0066FF]/20">
 {buttonText}
 </Button>
 </motion.div>
 </div>

 {/* Right Section: Image (Mobile Mockup) */}
 <motion.div variants={imageContainerVariants} className="flex justify-center lg:justify-end relative z-10">
 <div className="relative w-full max-w-[320px] lg:max-w-[400px] perspective-1000">
 {/* Decorative underlying shadow for the phone */}
 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/20 blur-2xl rounded-[100%]" />
 
 <img
 src={imageSrc}
 alt={imageAlt}
 className="h-auto w-full object-contain drop-shadow-2xl transition-transform duration-700 "
 style={{ transformStyle: 'preserve-3d' }}
 />
 </div>
 </motion.div>
 </div>
 </motion.div>
 );
});

FeatureHighlightCard.displayName = "FeatureHighlightCard";
