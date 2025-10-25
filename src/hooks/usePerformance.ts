import { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import { useAdaptivePerformance } from './useAdaptivePerformance';

// Debounce hook for performance optimization
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttle hook for mouse events
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T => {
  const lastRun = useRef(Date.now());

  return useCallback(
    ((...args) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = Date.now();
      }
    }) as T,
    [callback, delay]
  );
};

// Optimized mouse position hook
export const useOptimizedMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const throttledSetPosition = useThrottle(setMousePosition, 16); // ~60fps

  const updateMousePosition = useCallback((e: React.MouseEvent) => {
    throttledSetPosition({ x: e.clientX, y: e.clientY });
  }, [throttledSetPosition]);

  return { mousePosition, updateMousePosition };
};

// Adaptive tilt effect hook
export const useTiltEffect = () => {
  const { performanceSettings } = useAdaptivePerformance();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent, index: number) => {
    // Skip tilt effects on low-end devices
    if (!performanceSettings.enableTiltEffects) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Reduce intensity based on device performance
    const intensity = performanceSettings.isLowEnd ? 3 : 10;
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    
    setMousePosition({ x: rotateY, y: rotateX });
    setHoveredCard(index);
  }, [performanceSettings]);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  const tiltStyle = useMemo(() => ({
    transformStyle: "preserve-3d" as const,
    transition: `transform ${performanceSettings.animationDuration}s ease-out`
  }), [performanceSettings.animationDuration]);

  const getTiltTransform = useCallback((index: number) => {
    if (!performanceSettings.enableTiltEffects) {
      return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
    
    return hoveredCard === index 
      ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.02)` 
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, [hoveredCard, mousePosition, performanceSettings]);

  return {
    handleMouseMove,
    handleMouseLeave,
    tiltStyle,
    getTiltTransform,
    isEnabled: performanceSettings.enableTiltEffects
  };
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px', ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const { deviceInfo } = useAdaptivePerformance();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Log device info for debugging
      console.log('Device Performance Info:', deviceInfo);

      return () => observer.disconnect();
    }
  }, [deviceInfo]);
};
