"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 useCarousel
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

interface GalleryHoverCarouselItem {
 id: string;
 title: string;
 summary: string;
 url: string;
 image: string;
}

// Custom Carousel Navigation since the provided code used carouselApi which doesn't exist in the ibelick implementation
function CarouselControls() {
 const { index, setIndex, itemsCount } = useCarousel();
 
 return (
 <div className="flex gap-2 mt-4 md:mt-0">
 <Button
 variant="outline"
 size="icon"
 onClick={() => index > 0 && setIndex(index - 1)}
 disabled={index === 0}
 className="h-10 w-10 rounded-full"
 >
 <ChevronLeft className="h-4 w-4" />
 </Button>
 <Button
 variant="outline"
 size="icon"
 onClick={() => index < itemsCount - 1 && setIndex(index + 1)}
 disabled={index + 1 === itemsCount}
 className="h-10 w-10 rounded-full"
 >
 <ChevronRight className="h-4 w-4" />
 </Button>
 </div>
 );
}

export default function GalleryHoverCarousel({
 heading = "Featured Projects",
 items = [
 {
 id: "item-1",
 title: "Build Modern UIs",
 summary:
 "Create stunning user interfaces with our comprehensive design system.",
 url: "#",
 image:
 "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
 },
 {
 id: "item-2",
 title: "Computer Vision Technology",
 summary:
 "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
 url: "#",
 image:
 "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop",
 },
 {
 id: "item-3",
 title: "Machine Learning Automation",
 summary:
 "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
 url: "#",
 image:
 "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
 },
 {
 id: "item-4",
 title: "Predictive Analytics",
 summary:
 "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
 url: "#",
 image:
 "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
 },
 {
 id: "item-5",
 title: "Neural Network Architecture",
 summary:
 "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
 url: "#",
 image:
 "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop",
 }
 ],
}: {
 heading?: string;
 items?: GalleryHoverCarouselItem[];
}) {
 return (
 <section className="py-32 bg-background">
 <div className="container mx-auto px-6">
 <Carousel
 className="relative w-full max-w-full"
 >
 <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
 <div className="max-w-2xl">
 <h2 className="mb-4">
 {heading.split('.')[0]}. <br className="hidden md:block"/>
 <span className="text-primary">{heading.split('.')[1] || ''}</span>
 </h2>
 <p className="text-lg text-slate-500 font-medium font-sans">
 Explore our collection of innovative solutions and cutting-edge technologies designed to transform your business.
 </p>
 </div>
 <CarouselControls />
 </div>

 <div className="w-full max-w-full">
 <CarouselContent className="hide-scrollbar w-full max-w-full md:ml-4 md:-mr-4">
 {items.map((item) => (
 <CarouselItem key={item.id} className="ml-6 md:max-w-[350px]">
 <Link to={item.url} className="group block relative w-full h-[300px] md:h-[450px]">
 <Card className="overflow-hidden rounded-[2rem] border border-slate-200/50 h-full w-full bg-white/70 backdrop-blur-xl">
 {/* Image Container */}
 <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2 overflow-hidden">
 <img
 src={item.image}
 alt={item.title}
 className="h-full w-full object-cover object-center grayscale-[60%] group-hover:grayscale-0 transition-all duration-700"
 />
 {/* Fade overlay at bottom */}
 <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
 </div>

 <div className="absolute bottom-0 left-0 w-full px-8 py-8 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100">
 <h3 className="text-[24px] font-bold text-primary font-heading tracking-tight leading-none mb-3">{item.title}</h3>
 <p className="text-slate-500 text-sm md:text-base line-clamp-3 font-sans">
 {item.summary}
 </p>
 <Button
 variant="outline"
 size="icon"
 className="absolute bottom-8 right-8 border border-slate-200 dark:border-gray-800 hover:-rotate-45 transition-all duration-500 rounded-full flex items-center justify-center text-primary"
 >
 <ArrowRight className="size-4" />
 </Button>
 </div>
 </Card>
 </Link>
 </CarouselItem>
 ))}
 </CarouselContent>
 </div>
 </Carousel>
 </div>
 </section>
 );
}
