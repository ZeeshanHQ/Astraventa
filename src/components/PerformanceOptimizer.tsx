import { useEffect } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformance';

// Performance optimization component
export const PerformanceOptimizer = () => {
  usePerformanceMonitor();

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&h=192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize animations for better performance
    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      }
    };

    // Enable hardware acceleration
    const enableHardwareAcceleration = () => {
      const style = document.createElement('style');
      style.textContent = `
        .glass-card, .motion-div, [data-framer-motion] {
          transform: translateZ(0);
          will-change: transform;
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize optimizations
    preloadCriticalImages();
    optimizeAnimations();
    enableHardwareAcceleration();

    // Cleanup
    return () => {
      // Remove any added styles or links if needed
    };
  }, []);

  return null;
};
