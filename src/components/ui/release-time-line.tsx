"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package, Calendar, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
  {
    icon: Package,
    title: "Advanced Component Pack",
    subtitle: "Version 2.1.0 • Feb 2025",
    description:
      "Ruixen UI now ships with an advanced component pack including complex layouts, enterprise-ready data tables, and animated navigation menus.",
    items: [
      "New Data Grid with sorting, filtering, and pagination",
      "Kanban board with drag-and-drop support",
      "Animated mega menu component",
      "Masonry grid layout for galleries and portfolios",
      "Extended accessibility support across all components",
    ],
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    button: {
      url: "https://astraventa.com",
      text: "Explore Components",
    },
  },
  {
    icon: Sparkles,
    title: "Theme Builder & Design Tokens",
    subtitle: "Version 2.0.0 • Jan 2025",
    description:
      "We've introduced a fully customizable theme builder powered by design tokens so you can tailor Ruixen UI to match any brand identity.",
    items: [
      "Real-time theme preview in the dashboard",
      "Customizable color palettes, typography, and spacing",
      "Preset themes for quick project setup",
      "Export tokens to CSS variables or JSON",
    ],
    image:
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Motion & Interaction Update",
    subtitle: "Version 1.8.0 • Dec 2024",
    description:
      "Micro-interactions across Ruixen UI have been enhanced with Framer Motion, delivering a smoother and more engaging user experience.",
    items: [
      "Animated dropdown menus and modals",
      "Smooth transitions between pages",
      "Custom easing curves for a premium feel",
      "Reduced layout shift for better stability",
    ],
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Calendar,
    title: "Initial Pro Release",
    subtitle: "Version 1.5.0 • Oct 2024",
    description:
      "Ruixen UI Pro is here — a premium set of components, templates, and utilities designed for production-grade applications.",
    items: [
      "Full Figma design kit",
      "Extended form components with validation",
      "Chart components with Recharts integration",
      "Ready-to-use dashboard layouts",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    button: {
      url: "https://astraventa.com/pro",
      text: "View Ruixen UI Pro",
    },
  },
];

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function TimeLine_01({
  title = "Astraventa Release Pipeline",
  description = "Stay up to date with the latest components, features, and performance enhancements in the Astra ecosystem — built to help you design and ship faster.",
  entries = defaultEntries,
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Create stable setters for refs inside map
  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    // We observe small sentinels placed near the title of each card. Whichever
    // sentinel is closest to the vertical center of the viewport becomes active.
    // Using IntersectionObserver to track visibility + a rAF loop to pick the closest.

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      // Compute distance of each sentinel to viewport center
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  // Optional: ensure the first card is active on mount
  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl text-slate-900 uppercase">
            {title}
          </h1>
          <p className="mb-6 text-base text-slate-500 md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-32 flex h-min w-64 shrink-0 items-center gap-4 md:sticky group">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl transition-all duration-500 scale-110 ${
                      isActive ? "bg-[#0066FF] text-white shadow-xl shadow-[#0066FF]/20" : "bg-slate-100 text-slate-400"
                    }`}>
                      <entry.icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                        {entry.title}
                      </span>
                      <span className="text-xs font-mono text-slate-400 mt-0.5">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel near the card title to measure proximity to viewport center */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-32 left-0 h-12 w-12 opacity-0"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col rounded-[2.5rem] border p-4 shadow-sm transition-all duration-700 ease-in-out w-full " +
                    (isActive
                      ? "border-slate-200 bg-white shadow-2xl shadow-slate-200/50 translate-x-2"
                      : "border-slate-100 bg-slate-50 opacity-60 grayscale-[0.5]")
                  }
                >
                  {entry.image && (
                    <div className="overflow-hidden rounded-[1.5rem] relative aspect-[21/9] mb-6">
                      <img
                        src={entry.image}
                        alt={`${entry.title} visual`}
                        className={"w-full h-full object-cover transition-transform duration-1000 " + (isActive ? "scale-105" : "scale-100")}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}
                  <div className="space-y-6 px-4 pb-4">
                    {/* Header with improved typography */}
                    <div className="space-y-3">
                      <h2
                        className={
                          "text-2xl font-black leading-tight tracking-tight md:text-3xl transition-colors duration-500 " +
                          (isActive ? "text-slate-900" : "text-slate-700")
                        }
                      >
                        {entry.title}
                      </h2>
                      
                      {/* Improved description with better spacing */}
                      <p
                        className={
                          "text-base leading-relaxed md:text-lg transition-all duration-500 " +
                          (isActive 
                            ? "text-slate-500 line-clamp-none" 
                            : "text-slate-400 line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Enhanced expandable content */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-700 ease-in-out " +
                        (isActive 
                          ? "grid-rows-[1fr] opacity-100 mt-6" 
                          : "grid-rows-[0fr] opacity-0 mt-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-8 pt-4 border-t border-slate-100">
                          {entry.items && entry.items.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {entry.items.map((item, itemIndex) => (
                                <div 
                                  key={itemIndex} 
                                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                                >
                                  <div className="mt-1 h-2 w-2 rounded-full bg-[#0066FF] flex-shrink-0" />
                                  <span className="text-sm text-slate-600 font-medium leading-relaxed">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {entry.button && (
                            <div className="flex justify-end pt-4">
                              <Button 
                                variant="default" 
                                className="h-12 px-8 bg-slate-900 hover:bg-[#0066FF] text-white rounded-full font-bold group transition-all duration-300" 
                                asChild
                              >
                                <a href={entry.button.url} target="_blank" rel="noreferrer">
                                  {entry.button.text} 
                                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
