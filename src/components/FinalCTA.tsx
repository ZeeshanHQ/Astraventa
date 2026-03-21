import { motion } from "framer-motion"
import { ButtonColorful } from "./ui/button-colorful"
import { Link } from "react-router-dom"
import { CTA } from "./ui/call-to-action"

export const FinalCTA = () => {
 return (
 <section className="relative overflow-hidden bg-white pt-12 md:pt-24 pb-0">
 {/* Premium Glassmorphism / Water Card Background */}
    <div className="absolute inset-0 z-0">
      {/* High-End Minimalist Grayscale Layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-50/50 via-white to-zinc-50/50" />
      
      {/* Animated Subtle Monochrome Glows (Technical Haze Effect) */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-400/5 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-zinc-800/5 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* High-Contrast Backdrop Blur */}
      <div className="absolute inset-0 backdrop-blur-[100px] bg-white/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]" />
    </div>

 <div className="container relative z-10 mx-auto px-6 text-center">
 {/* New Integrated CTA Component */}
 <CTA />
 </div>

  <div className="mt-16" />

 {/* Finishing Glass Reflection */}
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary))]/10 to-transparent" />
 </section>
 )
}
