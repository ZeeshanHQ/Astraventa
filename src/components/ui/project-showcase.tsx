"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  title: string
  description: string
  link: string
  image: string
  category: string
  impact: string
}

const projects: Project[] = [
  {
    title: "AI Integration",
    description: "Custom AI solutions to automate operations.",
    link: "/services/ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    category: "Machine Learning",
    impact: "Autonomous Intelligence",
  },
  {
    title: "Intelligent Automation",
    description: "Streamline logic with smart processes.",
    link: "/services/automation",
    image: "https://images.unsplash.com/photo-1518433278981-95ea4ca3ad63?q=80&w=2070&auto=format&fit=crop",
    category: "Process Logic",
    impact: "Efficiency Scale",
  },
  {
    title: "Security Systems",
    description: "Robust cybersecurity protection.",
    link: "/services/security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    category: "Cybersecurity",
    impact: "Hardened Perimeter",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive stunning user interfaces.",
    link: "/services/ui-ux",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    category: "Experience Design",
    impact: "User Resonance",
  },
  {
    title: "Brand Identity",
    description: "Build a memorable resonance.",
    link: "/services/branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    category: "Creative Strategy",
    impact: "Market Presence",
  },
  {
    title: "Web Engineering",
    description: "High-performance web applications.",
    link: "/services/web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    category: "Full-Stack Dev",
    impact: "Performance Velocity",
  },
  {
    title: "Mobile Engineering",
    description: "Native and cross-platform mobile.",
    link: "/services/mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    category: "Native/Hybrid",
    impact: "Ubiquitous Access",
  },
  {
    title: "Backend Systems",
    description: "Scalable robust database design.",
    link: "/services/backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
    category: "Architecture",
    impact: "Structural Integrity",
  },
  {
    title: "AI Chatbots",
    description: "Intelligent conversational agents.",
    link: "/services/chatbots",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2000&auto=format&fit=crop",
    category: "Conversational AI",
    impact: "Global Support",
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full px-6">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
          Service Catalog.
        </h2>
        <div className="technical-label !text-slate-400">Engineering Core</div>
      </div>

      <div
        className="pointer-events-none absolute z-50 overflow-hidden rounded-2xl shadow-2xl hidden md:block"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${smoothPosition.x + 40}px, ${smoothPosition.y - 120}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "transform, opacity, scale",
        }}
      >
        <div className="relative w-[340px] h-[220px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
        </div>
      </div>

      <div className="space-y-0 relative z-10 transition-all duration-500">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-10 border-t border-slate-100 transition-all duration-500 ease-out">
              <div
                className={cn(
                  "absolute inset-0 -mx-6 px-6 bg-slate-50/50 rounded-2xl transition-all duration-500 ease-out border border-transparent",
                  hoveredIndex === index ? "opacity-100 scale-100 border-slate-100" : "opacity-0 scale-[0.98]"
                )}
              />

              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pointer-events-none">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-4">
                    <h3 className={cn(
                      "text-slate-900 font-bold text-3xl tracking-tight transition-colors duration-300",
                      hoveredIndex === index ? "text-primary" : "text-slate-900"
                    )}>
                      <span className="relative">
                        {project.title}
                      </span>
                    </h3>

                    <div className={cn(
                      "w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary transition-all duration-500 ease-out scale-90",
                      hoveredIndex === index ? "opacity-100 translate-x-0 translate-y-0 scale-100 bg-primary/10" : "opacity-0 -translate-x-4 translate-y-4"
                    )}>
                      <ArrowUpRight strokeWidth={2.5} className="w-5 h-5" />
                    </div>
                  </div>

                  <p
                    className={cn(
                      "text-slate-500 text-lg mt-3 leading-relaxed transition-colors duration-500 ease-out font-medium max-w-2xl",
                      hoveredIndex === index ? "text-slate-700" : "text-slate-500"
                    )}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technical Meta (Filling the right side) */}
                <div className="flex flex-col md:items-end gap-3 shrink-0">
                  <div className={cn(
                    "px-4 py-1.5 rounded-full border border-slate-200 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500",
                    hoveredIndex === index ? "bg-slate-900 text-white border-slate-900 translate-x-[-8px]" : "bg-transparent text-slate-400"
                  )}>
                    {project.category}
                  </div>
                  <div className={cn(
                    "text-sm font-medium tracking-tight transition-all duration-500",
                    hoveredIndex === index ? "text-primary opacity-100 translate-x-[-8px]" : "text-slate-300 opacity-60"
                  )}>
                    {project.impact}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}

        <div className="border-t border-slate-100" />
      </div>
    </div>
  )
}
