"use client";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Types ─────────────────────────────────────────────────────────────────────

type PropType = {
 slides: React.ReactNode[];
 options?: EmblaOptionsType;
};

type PropTypeButton = React.PropsWithChildren<
 React.DetailedHTMLProps<
 React.ButtonHTMLAttributes<HTMLButtonElement>,
 HTMLButtonElement
 >
>;

// ─── Root Carousel ──────────────────────────────────────────────────────────────

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
 const progressNode = useRef<HTMLDivElement>(null);

 const [emblaRef, emblaApi] = useEmblaCarousel(options, [
 Autoplay({ playOnInit: true, delay: 4000 }),
 ]);

 const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
 useAutoplay(emblaApi);

 const { showAutoplayProgress } = useAutoplayProgress(
 emblaApi,
 progressNode as React.RefObject<HTMLElement>
 );

 const { selectedIndex, scrollSnaps, onDotButtonClick } =
 useDotButton(emblaApi);

 return (
 <div>
 <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
 <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
 {slides.map((slideContent, index) => (
 <div
 className="flex-[0_0_80%] sm:flex-[0_0_68%] pl-4 transform-gpu"
 key={index}
 >
 {slideContent}
 </div>
 ))}
 </div>
 </div>

 {/* Controls */}
 <div className="flex items-center justify-between gap-4 mt-6 px-1">
 {/* Dot indicators */}
 <div className="flex gap-2">
 {scrollSnaps.map((_, index) => (
 <DotButton
 key={index}
 onClick={() => onAutoplayButtonClick(() => onDotButtonClick(index))}
 className={`w-2.5 h-2.5 rounded-full border-2 border-slate-200 transition-all duration-300 ${
 index === selectedIndex
 ? "bg-blue-600 border-blue-600 scale-110"
 : "bg-transparent hover:bg-slate-100"
 }`}
 />
 ))}
 </div>

 {/* Progress bar */}
 <div
 className={`flex-1 max-w-[180px] rounded-full border border-slate-200 bg-slate-50 relative h-1.5 overflow-hidden transition-opacity duration-300 ${
 showAutoplayProgress ? "opacity-100" : "opacity-0"
 }`}
 >
 <div
 className="bg-blue-600 absolute w-full top-0 bottom-0 -left-full"
 ref={progressNode}
 style={{
 animationPlayState: showAutoplayProgress ? "running" : "paused",
 }}
 />
 </div>

 {/* Play/Pause */}
 <Button
 size="icon"
 variant="outline"
 onClick={toggleAutoplay}
 type="button"
 className="rounded-full border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all"
 >
 {autoplayIsPlaying ? (
 <Pause className="w-3.5 h-3.5" fill="currentColor" />
 ) : (
 <Play className="w-3.5 h-3.5" fill="currentColor" />
 )}
 </Button>
 </div>
 </div>
 );
};

// ─── DotButton ──────────────────────────────────────────────────────────────────

export const DotButton: React.FC<PropTypeButton> = ({ children, ...restProps }) => (
 <button type="button" {...restProps}>
 {children}
 </button>
);

// ─── useDotButton hook ──────────────────────────────────────────────────────────

type UseDotButtonType = {
 selectedIndex: number;
 scrollSnaps: number[];
 onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
 emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
 const [selectedIndex, setSelectedIndex] = useState(0);
 const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

 const onDotButtonClick = useCallback(
 (index: number) => { if (!emblaApi) return; emblaApi.scrollTo(index); },
 [emblaApi]
 );

 const onInit = useCallback((emblaApi: EmblaCarouselType) => {
 setScrollSnaps(emblaApi.scrollSnapList());
 }, []);

 const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
 setSelectedIndex(emblaApi.selectedScrollSnap());
 }, []);

 useEffect(() => {
 if (!emblaApi) return;
 onInit(emblaApi);
 onSelect(emblaApi);
 emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
 }, [emblaApi, onInit, onSelect]);

 return { selectedIndex, scrollSnaps, onDotButtonClick };
};

// ─── useAutoplayProgress hook ───────────────────────────────────────────────────

type UseAutoplayProgressType = { showAutoplayProgress: boolean };

export const useAutoplayProgress = <ProgressElement extends HTMLElement>(
 emblaApi: EmblaCarouselType | undefined,
 progressNode: React.RefObject<ProgressElement>
): UseAutoplayProgressType => {
 const [showAutoplayProgress, setShowAutoplayProgress] = useState(false);
 const animationName = useRef("");
 const timeoutId = useRef(0);
 const rafId = useRef(0);

 const startProgress = useCallback((timeUntilNext: number | null) => {
 const node = progressNode.current;
 if (!node || timeUntilNext === null) return;

 if (!animationName.current) {
 animationName.current = window.getComputedStyle(node).animationName;
 }

 node.style.animationName = "none";
 node.style.transform = "translate3d(0,0,0)";
 rafId.current = window.requestAnimationFrame(() => {
 timeoutId.current = window.setTimeout(() => {
 node.style.animationName = animationName.current;
 node.style.animationDuration = `${timeUntilNext}ms`;
 }, 0);
 });
 setShowAutoplayProgress(true);
 }, []);

 useEffect(() => {
 const autoplay = emblaApi?.plugins()?.autoplay;
 if (!autoplay) return;
 emblaApi
 .on("autoplay:timerset", () => startProgress(autoplay.timeUntilNext()))
 .on("autoplay:timerstopped", () => setShowAutoplayProgress(false));
 }, [emblaApi, startProgress]);

 useEffect(() => () => {
 cancelAnimationFrame(rafId.current);
 clearTimeout(timeoutId.current);
 }, []);

 return { showAutoplayProgress };
};

// ─── useAutoplay hook ───────────────────────────────────────────────────────────

type UseAutoplayType = {
 autoplayIsPlaying: boolean;
 toggleAutoplay: () => void;
 onAutoplayButtonClick: (callback: () => void) => void;
};

export const useAutoplay = (
 emblaApi: EmblaCarouselType | undefined
): UseAutoplayType => {
 const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(false);

 const onAutoplayButtonClick = useCallback(
 (callback: () => void) => {
 const autoplay = emblaApi?.plugins()?.autoplay;
 if (!autoplay) return;
 const resetOrStop =
 autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
 resetOrStop();
 callback();
 },
 [emblaApi]
 );

 const toggleAutoplay = useCallback(() => {
 const autoplay = emblaApi?.plugins()?.autoplay;
 if (!autoplay) return;
 const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
 playOrStop();
 }, [emblaApi]);

 useEffect(() => {
 const autoplay = emblaApi?.plugins()?.autoplay;
 if (!autoplay) return;
 setAutoplayIsPlaying(autoplay.isPlaying());
 emblaApi
 .on("autoplay:play", () => setAutoplayIsPlaying(true))
 .on("autoplay:stop", () => setAutoplayIsPlaying(false))
 .on("reInit", () => setAutoplayIsPlaying(autoplay.isPlaying()));
 }, [emblaApi]);

 return { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick };
};

export { EmblaCarousel };
