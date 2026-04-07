import { motion } from "framer-motion";
import { useMemo } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Hero Premium Gradient Background — Authentic Stripe Quality
//
// Technique:
//   1. Clean transparent background (no blurred colored meshes).
//   2. Elegant sweeping curved paths (Bezier curves) with rich gradient strokes
//   3. "Flowing light" shimmer moving along the curves
//
// Result: A vibrant, dynamic, deeply professional aesthetic.
// ─────────────────────────────────────────────────────────────────────────────

export function FloatingPaths({ position }: { position: number }) {
  void position;

  // Generate elegant, sweeping curved paths mimicking flowing ribbons/data streams
  const paths = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => {
      // Create beautifully spaced sweeping bezier curves
      const startX = -200 + i * 80;
      const startY = 1200;
      const midX = 300 + i * 140;
      const midY = 400 + (i % 3) * 50;
      const endX = 1600 + i * 40;
      const endY = -200 + (i % 2) * 100;
      
      return {
        d: `M${startX},${startY} Q${midX},${midY} ${endX},${endY}`,
        width: i % 4 === 0 ? 1.5 : 0.6,
        opacityBase: i % 4 === 0 ? 0.35 : 0.15,
        delay: i * 0.12,
        duration: 8 + (i % 4) * 2,
        isMajor: i % 4 === 0,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* ── Sweeping SVG Flow Lines ── */}
      <svg
        className="absolute inset-0 w-full h-full mix-blend-overlay opacity-90"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main bold gradient for major lines */}
          <linearGradient id="flow-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2910E5" stopOpacity="0" />
            <stop offset="30%" stopColor="#7B61FF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FF4D8D" stopOpacity="0.9" />
            <stop offset="85%" stopColor="#FFB300" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
          </linearGradient>
          
          {/* Subtle gradient for minor structural lines */}
          <linearGradient id="flow-gradient-light" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Shimmer light effect */}
          <linearGradient id="shimmer" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {paths.map((path, i) => (
          <g key={i}>
            {/* 1. Underlying path structure */}
            <motion.path
              d={path.d}
              stroke={path.isMajor ? "url(#flow-gradient)" : "url(#flow-gradient-light)"}
              strokeWidth={path.width}
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: path.opacityBase }}
              transition={{ duration: 2, delay: path.delay, ease: "easeOut" }}
            />

            {/* 2. Moving pulse of light along the major curves */}
            {path.isMajor && (
              <motion.path
                d={path.d}
                stroke="url(#shimmer)"
                strokeWidth={path.width * 2}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 0.4, 0.8], 
                  opacity: [0, 0.7, 0],
                  pathOffset: [0, 0.6, 1.2]
                }}
                transition={{
                  duration: path.duration,
                  delay: path.delay + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
                style={{ filter: "blur(0.5px)" }}
              />
            )}
          </g>
        ))}
      </svg>
      
      {/* ── Finishing Touches: Vignette & Edge Softening ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent w-1/2 opacity-70" />
    </div>
  );
}

// Legacy wrapper (kept for compatibility)
export function BackgroundPaths({
  title = "Background Paths",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        {children ?? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
              {title}
            </h1>
          </motion.div>
        )}
      </div>
    </div>
  );
}
