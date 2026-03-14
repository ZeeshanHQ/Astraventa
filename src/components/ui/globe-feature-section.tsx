"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function GlobeFeatureSection() {
 return (
 <section className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-primary/5 px-8 py-20 md:px-20 md:py-32 my-16">
 {/* Background decoration */}
 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
 <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
 
 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
 <div className="max-w-2xl text-left space-y-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
 <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
 <span className="technical-label !text-primary">Global Infrastructure</span>
 </div>
 
 <h2>
 Deploy Globally.<br />
 <span className="text-primary">Scale Autonomously.</span>
 </h2>
 
 <p className="text-xl text-slate-500 font-medium leading-relaxed mt-6 max-w-lg">
 Our proprietary engineering core allows you to launch high-performance systems across any region with zero-latency infrastructure and world-class aesthetics.
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2 }}
 >
 <Button className="btn-primary group h-14 px-8 text-base">
 Join Astraventa Network <ArrowRight className="ml-2 h-5 w-5 transition-transform" />
 </Button>
 </motion.div>
 </div>

 <div className="relative h-[400px] w-full md:w-[500px] flex items-center justify-center">
 <div className="absolute inset-0 bg-radial-gradient(circle, primary/10 0%, transparent 70%) pointer-events-none" />
 <Globe className="w-full h-full scale-125 md:scale-150 translate-y-10" />
 </div>
 </div>
 </section>
 );
}

const GLOBE_CONFIG: COBEOptions = {
 width: 1000,
 height: 1000,
 onRender: () => {},
 devicePixelRatio: 2,
 phi: 0,
 theta: 0.3,
 dark: 0,
 diffuse: 1.2,
 mapSamples: 16000,
 mapBrightness: 6,
 baseColor: [1, 1, 1],
 markerColor: [41 / 255, 16 / 255, 229 / 255], // Astraventa Primary Blue
 glowColor: [1, 1, 1],
 markers: [
 { location: [40.7128, -74.006], size: 0.1 }, // New York
 { location: [51.5074, -0.1278], size: 0.08 }, // London
 { location: [35.6762, 139.6503], size: 0.09 }, // Tokyo
 { location: [22.3193, 114.1694], size: 0.07 }, // Hong Kong
 { location: [25.2048, 55.2708], size: 0.1 }, // Dubai
 { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
 { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
 { location: [48.8566, 2.3522], size: 0.06 }, // Paris
 { location: [-23.5505, -46.6333], size: 0.09 }, // Sao Paulo
 { location: [30.0444, 31.2357], size: 0.07 }, // Cairo
 ],
}

export function Globe({
 className,
 config = GLOBE_CONFIG,
}: {
 className?: string
 config?: COBEOptions
}) {
 let phi = 0
 let width = 0
 const canvasRef = useRef<HTMLCanvasElement>(null)
 const pointerInteracting = useRef(null)
 const pointerInteractionMovement = useRef(0)
 const [r, setR] = useState(0)

 const updatePointerInteraction = (value: any) => {
 pointerInteracting.current = value
 if (canvasRef.current) {
 canvasRef.current.style.cursor = value ? "grabbing" : "grab"
 }
 }

 const updateMovement = (clientX: any) => {
 if (pointerInteracting.current !== null) {
 const delta = clientX - pointerInteracting.current
 pointerInteractionMovement.current = delta
 setR(delta / 200)
 }
 }

 const onRender = useCallback(
 (state: Record<string, any>) => {
 if (!pointerInteracting.current) phi += 0.003
 state.phi = phi + r
 state.width = width * 2
 state.height = width * 2
 },
 [r],
 )

 const onResize = () => {
 if (canvasRef.current) {
 width = canvasRef.current.offsetWidth
 }
 }

 useEffect(() => {
 window.addEventListener("resize", onResize)
 onResize()

 const globe = createGlobe(canvasRef.current!, {
 ...config,
 width: width * 2,
 height: width * 2,
 onRender,
 })

 setTimeout(() => {
 if (canvasRef.current) canvasRef.current.style.opacity = "1";
 })
 return () => globe.destroy()
 }, [])

 return (
 <div
 className={cn(
 "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
 className,
 )}
 >
 <canvas
 className={cn(
 "size-full opacity-0 transition-opacity duration-1000 [contain:layout_paint_size]",
 )}
 ref={canvasRef}
 onPointerDown={(e) =>
 updatePointerInteraction(
 e.clientX - pointerInteractionMovement.current,
 )
 }
 onPointerUp={() => updatePointerInteraction(null)}
 onPointerOut={() => updatePointerInteraction(null)}
 onMouseMove={(e) => updateMovement(e.clientX)}
 onTouchMove={(e) =>
 e.touches[0] && updateMovement(e.touches[0].clientX)
 }
 />
 </div>
 )
}
