import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { 
 Bot, 
 Code2, 
 ShieldCheck, 
 ArrowUpRight,
 ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from "@/components/ui/animated-slideshow";

const SLIDES = [
 {
 id: "frontend",
 title: "Frontend Dev",
 imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
 },
 {
 id: "backend",
 title: "Backend Dev",
 imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop",
 },
 {
 id: "design",
 title: "UI UX Design",
 imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
 },
 {
 id: "ai",
 title: "AI Engineering",
 imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
 },
 {
 id: "app",
 title: "App Development",
 imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
 },
];

export const ProfessionalServices = () => {
  const navigate = useNavigate();
 return (
 <section id="services" className="py-12 md:py-16 bg-white relative overflow-hidden">
 <div className="max-w-[1400px] mx-auto px-6 relative z-10">
 
 {/* Section Header */}
  <div className="mb-10 text-center">
  <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8"
  >
  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
  <span className="text-[11px] font-display font-normal text-black/60 uppercase tracking-[0.15em]">CAPABILITIES</span>
  </motion.div>
  <motion.h2 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
  className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl mb-6"
  >
  Our Engineering <br />
  <span className="text-primary">Disciplines.</span>
  </motion.h2>
  <motion.p 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="text-[15px] text-[#4B5563] font-body font-normal leading-[1.7] max-w-[560px] mx-auto"
  >
  Strategic engineering disciplines designed to bridge the gap between complex technology and business growth.
  </motion.p>
  </div>

  {/* Interactive Hover Slider */}
  <HoverSlider className="relative min-h-[500px] w-full py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Image Side (Left) - Sharpened Radii */}
   <div className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden border border-border/50 order-2 lg:order-1">
  <HoverSliderImageWrap className="size-full">
  {SLIDES.map((slide, index) => (
  <HoverSliderImage
  key={slide.id}
  index={index}
  imageUrl={slide.imageUrl}
  src={slide.imageUrl}
  alt={slide.title}
  className="size-full object-cover"
  loading="eager"
  decoding="async"
  />
  ))}
  </HoverSliderImageWrap>
  
  {/* Overlay Gradient for Text Contrast */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
  </div>

  {/* Text Side (Right) */}
   <div className="flex flex-col space-y-4 md:space-y-6 order-1 lg:order-2">
  {SLIDES.map((slide, index) => (
  <div key={slide.id} className="relative group">
  <TextStaggerHover
  index={index}
  className="cursor-pointer text-3xl md:text-4xl lg:text-5xl font-display font-normal uppercase tracking-wide text-foreground transition-all whitespace-nowrap"
  text={slide.title}
  />
  <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
  </div>
  ))}
  </div>
  </div>
  </HoverSlider>

 {/* Explore All CTA */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.4 }}
 className="mt-20 flex justify-center"
 >
    <ShinyButton 
     className="h-10 px-6 rounded-full text-[12px] font-display font-medium uppercase tracking-[0.1em] flex items-center gap-2.5"
     onClick={() => navigate('/services')}
    >
     <span className="relative z-10 flex items-center gap-2.5 pt-[2px]">
       EXPLORE ALL CAPABILITIES 
       <ArrowRight className="w-3.5 h-3.5" />
     </span>
    </ShinyButton>
 </motion.div>
 </div>
 </section>
 );
};
