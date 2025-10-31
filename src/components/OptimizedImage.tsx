import { useState, useRef, useEffect } from 'react';
import { useAdaptivePerformance, useMemoryOptimization } from '@/hooks/useAdaptivePerformance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  quality?: 'low' | 'medium' | 'high';
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width = 800, 
  height = 600,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  quality
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [loadError, setLoadError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const { performanceSettings } = useAdaptivePerformance();
  const { canLoadImage, loadImage, unloadImage } = useMemoryOptimization();

  // Determine image quality based on device performance
  const getImageQuality = () => {
    if (quality) return quality;
    return performanceSettings.imageQuality;
  };

  // Optimize image URL with device-specific parameters
  const getOptimizedSrc = () => {
    if (src.includes('unsplash.com')) {
      const quality = getImageQuality();
      const qualityMap = {
        low: { w: Math.min(width, 400), h: Math.min(height, 300), q: 60 },
        medium: { w: Math.min(width, 600), h: Math.min(height, 450), q: 75 },
        high: { w: width, h: height, q: 85 }
      };
      
      const params = qualityMap[quality];
      return `${src}&w=${params.w}&h=${params.h}&auto=format&fit=crop&q=${params.q}&fm=webp`;
    }
    return src;
  };

  const optimizedSrc = getOptimizedSrc();

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Check if we can load this image based on memory constraints
          if (canLoadImage(src)) {
            setIsInView(true);
            loadImage(src);
            observer.disconnect();
          }
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: `${performanceSettings.lazyLoadDistance}px` 
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
      if (isInView) {
        unloadImage(src);
      }
    };
  }, [priority, src, performanceSettings.lazyLoadDistance, canLoadImage, loadImage, unloadImage, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    setLoadError(false);
  };

  const handleError = () => {
    setIsLoaded(true);
    setLoadError(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          backgroundImage: `url(${placeholder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            // Disable animations on low-end devices
            animation: performanceSettings.enableAnimations ? undefined : 'none',
            // Optimize rendering
            contentVisibility: 'auto',
            containIntrinsicSize: `${width}px ${height}px`
          }}
        />
      )}

      {/* Error fallback */}
      {loadError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500 text-sm">Image unavailable</div>
        </div>
      )}
    </div>
  );
};
