import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize scroll performance with passive listeners
    const optimizeScroll = () => {
      // Scroll optimization logic
    };

    // Optimize resize performance
    let resizeTimeout: NodeJS.Timeout;
    const optimizeResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Resize optimization logic
      }, 250);
    };

    // Add event listeners with passive options for better performance
    window.addEventListener('scroll', optimizeScroll, { passive: true });
    window.addEventListener('resize', optimizeResize, { passive: true });

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    preloadCriticalResources();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', optimizeScroll);
      window.removeEventListener('resize', optimizeResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return null;
};
