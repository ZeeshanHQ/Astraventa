import React, { useState, useEffect, useCallback, useRef } from "react";

// --- CONFIGURATION (Astraventa Brand Colors) ---
const CONFIG = {
 primaryColor: "126, 150, 246", // Astraventa indigo #7E96F6
 secondaryColor: "99, 131, 255", // Lighter blue accent
 sphereRotationDuration: "240s",
 gridPanDuration: "180s",
 coreGlowDuration: "25s",
 wireframeOpacity: 0.55,
 wireframeShadowIntensity: 60,
 coreBlur: 180,
 parallaxDepth: 25,
 lerpFactor: 0.06,
 sphereDensity: 12,
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * GeometricSphere – Astraventa-branded animated wireframe sphere.
 * Used as a full-screen background layer behind the Contact page.
 * Removed all foreground hero text/CTAs – the Contact form floats above it.
 */
export default function GeometricSphere() {
 const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
 const targetPos = useRef({ x: 0, y: 0 });
 const currentPos = useRef({ x: 0, y: 0 });
 const rafRef = useRef<number>(0);

 const animateLerp = useCallback(() => {
 currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, CONFIG.lerpFactor);
 currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, CONFIG.lerpFactor);
 setSmoothPos({ x: currentPos.current.x, y: currentPos.current.y });
 rafRef.current = requestAnimationFrame(animateLerp);
 }, []);

 useEffect(() => {
 rafRef.current = requestAnimationFrame(animateLerp);
 return () => cancelAnimationFrame(rafRef.current);
 }, [animateLerp]);

 const handleMouseMove = useCallback((e: MouseEvent) => {
 const centerX = window.innerWidth / 2;
 const centerY = window.innerHeight / 2;
 targetPos.current = {
 x: (e.clientX - centerX) / centerX,
 y: (e.clientY - centerY) / centerY,
 };
 }, []);

 useEffect(() => {
 window.addEventListener("mousemove", handleMouseMove);
 return () => window.removeEventListener("mousemove", handleMouseMove);
 }, [handleMouseMove]);

 const { x: sx, y: sy } = smoothPos;
 const depth = CONFIG.parallaxDepth;
 const rot = 4;

 const baseTranslate = `translate3d(${sx * depth}px, ${sy * depth}px, 0)`;
 const gridTranslate = `translate3d(${-sx * (depth / 2)}px, ${-sy * (depth / 2)}px, 0)`;
 const hazeTranslate = `translate3d(${sx * (depth / 2)}px, ${sy * (depth / 2)}px, 0)`;
 const tiltTranslate = `rotateX(${sy * rot}deg) rotateY(${-sx * rot}deg)`;

 // Generate sphere rings
 const step = 90 / (CONFIG.sphereDensity / 2);
 const sphereRings = Array.from({ length: CONFIG.sphereDensity }, (_, i) => (
 <div
 key={`ring-${i}`}
 aria-hidden="true"
 style={{
 position: "absolute",
 inset: 0,
 border: `1px solid rgba(${CONFIG.primaryColor}, ${CONFIG.wireframeOpacity})`,
 borderRadius: "50%",
 boxShadow: `0 0 ${CONFIG.wireframeShadowIntensity}px rgba(${CONFIG.primaryColor}, 0.3)`,
 transform: i % 2 === 0 ? `rotateY(${i * step}deg)` : `rotateX(${i * step}deg)`,
 }}
 />
 ));

 return (
 <div
 className="fixed inset-0 overflow-hidden pointer-events-none"
 style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(${CONFIG.primaryColor}, 0.03) 0%, #ffffff 100%)` }}
 >
 {/* Panning Grid */}
 <div
 className="absolute inset-0 panning-grid"
 style={{
 transform: gridTranslate,
 backgroundImage:
 "repeating-linear-gradient(to right, rgba(126, 150, 246,0.06) 1px, transparent 1px), repeating-linear-gradient(to bottom, rgba(126, 150, 246,0.06) 1px, transparent 1px)",
 backgroundSize: "40px 40px",
 }}
 />

 {/* Volumetric Haze */}
 <div
 className="absolute inset-0"
 style={{
 transform: hazeTranslate,
 backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.1) 0%, transparent 55%)`,
 filter: "blur(120px)",
 mixBlendMode: "multiply",
 }}
 />

 {/* Core glow */}
 <div className="absolute inset-0" style={{ transform: baseTranslate }}>
 <div
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
 style={{
 width: "360px",
 height: "360px",
 backgroundImage: `radial-gradient(circle, rgba(${CONFIG.secondaryColor}, 0.3) 0%, transparent 70%)`,
 filter: `blur(${CONFIG.coreBlur}px)`,
 }}
 />
 </div>

 {/* Wireframe Sphere */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}>
 <div
 style={{
 width: "600px",
 height: "600px",
 position: "relative",
 transformStyle: "preserve-3d",
 transform: tiltTranslate,
 animation: `sphereRotate ${CONFIG.sphereRotationDuration} linear infinite`,
 }}
 >
 {sphereRings}
 </div>
 </div>

 {/* Soft bloom layer */}
 <div
 className="absolute inset-0 pointer-events-none"
 style={{
 backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.18) 0%, transparent 50%)`,
 filter: "blur(80px)",
 mixBlendMode: "multiply",
 }}
 />
 </div>
 );
}
