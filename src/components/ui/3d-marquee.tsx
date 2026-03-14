'use client'

/**
 * @author: @emerald-ui
 * @description: A 3D marquee component that rotates images in a 3D space.
 * @version: 1.0.0
 * @date: 2026-02-12
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

interface ThreeDMarqueeProps {
 images?: string[]
 className?: string
}

const defaultImages = [
 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800', // UI Design 1
 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800', // UI Design 2
 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800', // Branding
 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800', // App UI
 'https://images.unsplash.com/photo-1613909209435-24aa6f37d7bc?q=80&w=800', // Mobile Design
 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800', // Web Design
 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800', // Prototype
 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800', // Web App
 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800', // UX Workshop
 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800', // Design System
 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800', // Collaboration
 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800', // Design Sprint
]

const ThreeDMarquee = ({
 images = defaultImages,
 className,
}: ThreeDMarqueeProps) => {
 const chunkSize = Math.ceil(images.length / 3)
 const chunks = Array.from({ length: 3 }, (_, colIndex) => {
 const start = colIndex * chunkSize
 return images.slice(start, start + chunkSize)
 })

 return (
 <div
 className={cn(
 'mx-auto block h-[500px] w-full overflow-hidden rounded-3xl max-xl:h-[450px] max-sm:h-[400px]',
 className
 )}
 >
 <div className='flex size-full items-center justify-center p-4'>
 <div className='aspect-square size-140 shrink-0 scale-125 max-xl:size-full max-xl:scale-110 max-sm:scale-130'>
 <div
 style={{ transform: 'rotateX(45deg) rotateY(0deg) rotateZ(45deg)' }}
 className='relative top-0 right-[-55%] grid size-full origin-top-left grid-cols-3 gap-5 transform-3d max-xl:-top-30 max-xl:right-[-45%] max-sm:top-0 max-sm:gap-2'
 >
 {chunks.map((subarray, colIndex) => (
 <motion.figure
 animate={{ y: colIndex % 2 === 0 ? 60 : -60 }}
 transition={{
 duration: colIndex % 2 === 0 ? 10 : 15,
 repeat: Infinity,
 repeatType: 'reverse',
 }}
 key={colIndex + 'marquee'}
 className='flex flex-col items-start gap-6 max-sm:gap-3'
 >
 {subarray.map((src, imageIndex) => (
 <div className='relative' key={imageIndex + src}>
 <img
 className='aspect-4/3 h-full w-full rounded-lg bg-neutral-100 object-cover select-none dark:bg-neutral-900 shadow-xl border border-white/10'
 key={imageIndex}
 src={src}
 draggable={false}
 alt={`UI UX Design Preview ${imageIndex + 1}`}
 />
 </div>
 ))}
 </motion.figure>
 ))}
 </div>
 </div>
 </div>
 </div>
 )
}

export default ThreeDMarquee
