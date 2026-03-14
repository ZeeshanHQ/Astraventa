import { motion } from "framer-motion"
import { ButtonColorful } from "./ui/button-colorful"
import { Link } from "react-router-dom"
import { CTA } from "./ui/call-to-action"

export const FinalCTA = () => {
 return (
 <section className="relative overflow-hidden bg-white pt-12 md:pt-24 pb-0">
 {/* Premium Glassmorphism / Water Card Background */}
 <div className="absolute inset-0 z-0">
 {/* Soft Blue/Purple Gradient Layers */}
 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50" />
 
 {/* Animated Accent Glows (Water Effect) */}
 <motion.div 
 animate={{
 scale: [1, 1.2, 1],
 x: [0, 50, 0],
 y: [0, -30, 0],
 }}
 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
 className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" 
 />
 <motion.div 
 animate={{
 scale: [1.2, 1, 1.2],
 x: [0, -40, 0],
 y: [0, 40, 0],
 }}
 transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
 className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none" 
 />

 {/* Backdrop Blur Surface */}
 <div className="absolute inset-0 backdrop-blur-[100px] bg-white/20 shadow-[inset_0_0_100px_rgba(255,255,255,0.5)]" />
 </div>

 <div className="container relative z-10 mx-auto px-6 text-center">
 {/* New Integrated CTA Component */}
 <CTA />
 </div>

 {/* Finishing Glass Reflection */}
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2910E5]/10 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-100" />
 </section>
 )
}
