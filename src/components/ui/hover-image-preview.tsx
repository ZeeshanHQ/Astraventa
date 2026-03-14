import { useState, useCallback, useRef, useEffect } from "react"
import ScrollingHeroMarquee from "@/components/ui/scrolling-hero-marquee"

// ─── Astraventa brand data for hover previews ───────────────────────────────

const previewData = {
 engineering: {
 image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=560&h=320&fit=crop&q=70",
 title: "Elite Engineering",
 subtitle: "Full-stack systems built to enterprise scale",
 },
 ai: {
 image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=560&h=320&fit=crop&q=70",
 title: "Autonomous AI",
 subtitle: "Agents that reason, plan, and execute independently",
 },
 design: {
 image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=560&h=320&fit=crop&q=70",
 title: "Precision Design",
 subtitle: "High-fidelity interfaces with atomic design systems",
 },
 automation: {
 image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=560&h=320&fit=crop&q=70",
 title: "Workflow Automation",
 subtitle: "No-code pipelines connecting APIs, data & logic",
 },
 products: {
 image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&h=320&fit=crop&q=70",
 title: "AstraTools Suite",
 subtitle: "28+ AI modules powering modern businesses",
 },
 vision: {
 image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=560&h=320&fit=crop&q=70",
 title: "Autonomous Future",
 subtitle: "Democratising enterprise AI for every organisation",
 },
}

// ─── HoverLink ──────────────────────────────────────────────────────────────

const HoverLink = ({
 previewKey,
 children,
 onHoverStart,
 onHoverMove,
 onHoverEnd,
}: {
 previewKey: string
 children: React.ReactNode
 onHoverStart: (key: string, e: React.MouseEvent) => void
 onHoverMove: (e: React.MouseEvent) => void
 onHoverEnd: () => void
}) => (
 <span
 className="hover-link-astra"
 onMouseEnter={(e) => onHoverStart(previewKey, e)}
 onMouseMove={onHoverMove}
 onMouseLeave={onHoverEnd}
 >
 {children}
 </span>
)

// ─── PreviewCard ────────────────────────────────────────────────────────────

const PreviewCard = ({
 data,
 position,
 isVisible,
 cardRef,
}: {
 data: (typeof previewData)[keyof typeof previewData] | null
 position: { x: number; y: number }
 isVisible: boolean
 cardRef: React.RefObject<HTMLDivElement | null>
}) => {
 if (!data) return null
 return (
 <div
 ref={cardRef}
 className="astra-preview-card"
 style={{
 left: `${position.x}px`,
 top: `${position.y}px`,
 opacity: isVisible ? 1 : 0,
 transform: isVisible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
 }}
 >
 <div className="astra-preview-inner">
 <img
 src={data.image}
 alt={data.title}
 crossOrigin="anonymous"
 referrerPolicy="no-referrer"
 className="astra-preview-img"
 loading="eager"
 />
 <div className="astra-preview-title">{data.title}</div>
 <div className="astra-preview-sub">{data.subtitle}</div>
 </div>
 </div>
 )
}

// ─── Main Export ────────────────────────────────────────────────────────────

export default function AstraHoverAbout() {
 const [activePreview, setActivePreview] = useState<(typeof previewData)[keyof typeof previewData] | null>(null)
 const [position, setPosition] = useState({ x: 0, y: 0 })
 const [isVisible, setIsVisible] = useState(false)
 const cardRef = useRef<HTMLDivElement>(null)

 // Preload images on mount
 useEffect(() => {
 Object.values(previewData).forEach(({ image }) => {
 const img = new Image()
 img.crossOrigin = "anonymous"
 img.src = image
 })
 }, [])

 const updatePosition = useCallback((e: React.MouseEvent | MouseEvent) => {
 const cardWidth = 310
 const cardHeight = 260
 const offsetY = 22
 let x = e.clientX - cardWidth / 2
 let y = e.clientY - cardHeight - offsetY
 if (x + cardWidth > window.innerWidth - 20) x = window.innerWidth - cardWidth - 20
 if (x < 20) x = 20
 if (y < 20) y = e.clientY + offsetY
 setPosition({ x, y })
 }, [])

 const handleHoverStart = useCallback(
 (key: string, e: React.MouseEvent) => {
 setActivePreview(previewData[key as keyof typeof previewData])
 setIsVisible(true)
 updatePosition(e)
 },
 [updatePosition],
 )

 const handleHoverMove = useCallback(
 (e: React.MouseEvent) => { if (isVisible) updatePosition(e) },
 [isVisible, updatePosition],
 )

 const handleHoverEnd = useCallback(() => setIsVisible(false), [])

 const hl = (key: string, label: string) => (
 <HoverLink
 previewKey={key}
 onHoverStart={handleHoverStart}
 onHoverMove={handleHoverMove}
 onHoverEnd={handleHoverEnd}
 >
 {label}
 </HoverLink>
 )

 return (
 <>
 <style>{`
 .hover-link-astra {
 color: #0d59f2;
 font-weight: 800;
 cursor: default;
 position: relative;
 display: inline-block;
 transition: color 0.25s ease;
 }
 .hover-link-astra::after {
 content: '';
 position: absolute;
 bottom: -1px;
 left: 0;
 width: 0;
 height: 2px;
 background: linear-gradient(90deg, #0d59f2, #6366f1, #8b5cf6);
 transition: width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
 }
 .hover-link-astra:hover::after { width: 100%; }
 .hover-link-astra:hover { color: #0b4dd4; }

 .astra-preview-card {
 position: fixed;
 pointer-events: none;
 z-index: 9999;
 transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
 will-change: transform, opacity;
 }
 .astra-preview-inner {
 background: #ffffff;
 border-radius: 16px;
 padding: 8px;
 box-shadow: 0 24px 48px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(13,89,242,0.08);
 overflow: hidden;
 }
 .astra-preview-img {
 width: 294px;
 height: auto;
 border-radius: 10px;
 display: block;
 object-fit: cover;
 }
 .astra-preview-title {
 padding: 10px 8px 4px;
 font-size: 0.85rem;
 color: #0f172a;
 font-weight: 700;
 letter-spacing: -0.01em;
 }
 .astra-preview-sub {
 padding: 0 8px 10px;
 font-size: 0.72rem;
 color: #64748b;
 font-weight: 500;
 }

 @media (max-width: 768px) {
 .astra-preview-img { width: 230px; }
 }
 `}</style>

 <div className="relative w-full py-20 px-6 bg-white">
 <div className="max-w-4xl mx-auto">
 {/* Section label */}
 <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-10">
 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
 <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.15em] font-mono">
 Hover the highlights to explore
 </span>
 </div>

 {/* Rich narrative body with Scrolling Marquee */}
 <ScrollingHeroMarquee 
 rowHeight={400} 
 durationSec={20}
 fontSize="1.1em"
 className="text-slate-500"
 >
 <div className="space-y-8 text-3xl sm:text-4xl md:text-[2.2rem] leading-[1.45] font-semibold tracking-tight p-20">
 <p>
 Astraventa is a{" "}
 {hl("engineering", "hybrid technology company")}{" "}
 — an engineering firm and product studio merged into one high-performance unit.
 </p>

 <p>
 We build {hl("ai", "autonomous AI systems")}{" "}
 alongside beautifully engineered{" "}
 {hl("design", "premium digital experiences")},{" "}
 so our clients never have to choose between intelligence and aesthetics.
 </p>

 <p>
 Our{" "}
 {hl("automation", "workflow automation")}{" "}
 engine connects teams, data, and logic — eliminating friction and unlocking
 true operational leverage without a single line of custom code.
 </p>

 <p>
 The company is built around the{" "}
 {hl("products", "AstraTools suite")}{" "}
 — 28+ AI modules purpose-built for business growth, creative production, and
 enterprise intelligence.
 </p>

 <p>
 Our singular{" "}
 {hl("vision", "mission")}{" "}
 is to democratise enterprise-grade AI infrastructure, so organisations of any
 size can compete, adapt, and lead in the autonomous future.
 </p>
 </div>
 </ScrollingHeroMarquee>
 </div>

 <PreviewCard
 data={activePreview}
 position={position}
 isVisible={isVisible}
 cardRef={cardRef}
 />
 </div>
 </>
 )
}
