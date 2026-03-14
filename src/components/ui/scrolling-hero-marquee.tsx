'use client';

import React from 'react';

export type ScrollingHeroMarqueeProps = {
 /** The content to scroll. */
 children?: React.ReactNode;
 /** Animation duration in seconds (lower = faster). Default: 10 */
 durationSec?: number;
 /** Height of each scroller row in px. Default: 150 */
 rowHeight?: number;
 /** Font size (any CSS size; clamp recommended). Default: 'clamp(2rem, 6vw, 4rem)' */
 fontSize?: string;
 /** Perspective in px. Default: 500 */
 perspectivePx?: number;
 /** Bottom scroller tilt/skew (deg). Defaults: rotateX=-30, skewX=20 */
 bottomRotateXDeg?: number;
 bottomSkewXDeg?: number;

 /** Light-mode gradient colors for top/bottom masks. */
 lightTopFade?: string; // e.g. '#ffffff'
 lightBottomFade?: string; // e.g. '#ffffff'
 /** Dark-mode gradient colors for top/bottom masks. */
 darkTopFade?: string; // e.g. '#000000'
 darkBottomFade?: string; // e.g. '#000000'

 /** Extra class on the root container. */
 className?: string;
};

export default function ScrollingHeroMarquee({
 children,
 durationSec = 10,
 rowHeight = 150,
 fontSize = 'clamp(2rem, 6vw, 4rem)',
 perspectivePx = 500,
 bottomRotateXDeg = -30,
 bottomSkewXDeg = 20,
 lightTopFade = '#ffffff',
 lightBottomFade = '#ffffff',
 darkTopFade = '#000000',
 darkBottomFade = '#000000',
 className = '',
}: ScrollingHeroMarqueeProps) {
 return (
 <section
 className={`flex flex-col justify-center ${className}`}
 style={{ perspective: `${perspectivePx}px` }}
 aria-label="Hero marquee"
 >
 {/* TOP SCROLLER */}
 <div
 className="relative mx-auto overflow-hidden w-full"
 style={{ height: `${rowHeight}px` }}
 >
 <div
 className="marquee-top-astra relative m-0 font-black leading-tight will-change-transform text-center inline-flex flex-col w-full"
 aria-hidden="true"
 style={{
 fontSize,
 top: 0,
 animation: `scrollerTop ${durationSec}s linear infinite`,
 }}
 >
 {children}
 {children}
 </div>
 {/* Top fade mask (light/dark aware) */}
 <span
 aria-hidden="true"
 className="pointer-events-none absolute inset-x-0 top-0 h-1/2 z-10"
 style={{
 backgroundImage: `linear-gradient(180deg, ${lightTopFade}, transparent)`,
 }}
 />
 <span
 aria-hidden="true"
 className="pointer-events-none absolute inset-x-0 top-0 h-1/2 dark:block hidden z-10"
 style={{
 backgroundImage: `linear-gradient(180deg, ${darkTopFade}, transparent)`,
 }}
 />
 </div>

 {/* BOTTOM SCROLLER */}
 <div
 className="relative mx-auto overflow-hidden origin-top w-full"
 style={{
 height: `${rowHeight}px`,
 transform: `rotateX(${bottomRotateXDeg}deg) translateZ(0) skewX(${bottomSkewXDeg}deg)`,
 }}
 >
 <div
 className="marquee-bottom-astra relative m-0 font-black leading-tight will-change-transform text-center inline-flex flex-col w-full"
 aria-hidden="true"
 style={{
 fontSize,
 top: 0,
 animation: `scrollerBottom ${durationSec}s linear infinite`,
 }}
 >
 {children}
 {children}
 </div>
 {/* Bottom fade mask (light/dark aware) */}
 <span
 aria-hidden="true"
 className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 z-10"
 style={{
 backgroundImage: `linear-gradient(0deg, ${lightBottomFade}, transparent)`,
 }}
 />
 <span
 aria-hidden="true"
 className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 dark:block hidden z-10"
 style={{
 backgroundImage: `linear-gradient(0deg, ${darkBottomFade}, transparent)`,
 }}
 />
 </div>

 {/* Injecting keyframes via style tag since we avoid style jsx in standard React usually */}
 <style dangerouslySetInnerHTML={{ __html: `
 @keyframes scrollerTop {
 0% {
 transform: translateY(0%);
 }
 100% {
 transform: translateY(-50%);
 }
 }
 @keyframes scrollerBottom {
 0% {
 transform: translateY(0%);
 }
 100% {
 transform: translateY(-50%);
 }
 }

 @media (prefers-reduced-motion: reduce) {
 .marquee-top-astra, .marquee-bottom-astra {
 animation: none !important;
 }
 }
 `}} />
 </section>
 );
}
