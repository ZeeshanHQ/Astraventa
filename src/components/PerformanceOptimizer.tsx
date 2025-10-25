import { useEffect } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformance';
import { useAdaptivePerformance } from '@/hooks/useAdaptivePerformance';

// Service Worker Registration
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, prompt user to refresh
              console.log('New content available, please refresh');
            }
          });
        }
      });
    } catch (error) {
      console.log('Service Worker registration failed:', error);
    }
  }
};

// Performance optimization component
export const PerformanceOptimizer = () => {
  const { deviceInfo, performanceSettings } = useAdaptivePerformance();
  usePerformanceMonitor();

  useEffect(() => {
    // Register service worker
    registerServiceWorker();

    // Preload critical resources
    const preloadCriticalImages = () => {
      if (!performanceSettings.enablePreloading) return;

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

      // Disable animations on low-end devices
      if (!performanceSettings.enableAnimations) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
      }
    };

    // Enable hardware acceleration
    const enableHardwareAcceleration = () => {
      if (!performanceSettings.enableHardwareAcceleration) return;

      const style = document.createElement('style');
      style.textContent = `
        .glass-card, .motion-div, [data-framer-motion] {
          transform: translateZ(0);
          will-change: transform;
        }
        
        /* Optimize for low-end devices */
        ${deviceInfo.isLowEnd ? `
          * {
            animation-duration: 0.1s !important;
            transition-duration: 0.1s !important;
          }
          
          .glass-card {
            backdrop-filter: none;
            background: rgba(0, 0, 0, 0.1);
          }
        ` : ''}
        
        /* Mobile optimizations */
        ${deviceInfo.isMobile ? `
          .glass-card {
            backdrop-filter: blur(10px);
          }
        ` : ''}
      `;
      document.head.appendChild(style);
    };

    // Memory management
    const optimizeMemoryUsage = () => {
      // Clean up unused DOM elements periodically
      const cleanup = setInterval(() => {
        // Remove unused images from memory
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (!img.complete || img.naturalHeight === 0) {
            img.src = '';
          }
        });
      }, 60000); // Cleanup every minute

      return () => clearInterval(cleanup);
    };

    // Connection optimization
    const optimizeConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          // Disable non-essential features for slow connections
          document.documentElement.classList.add('slow-connection');
        }
      }
    };

    // Initialize optimizations
    preloadCriticalImages();
    optimizeAnimations();
    enableHardwareAcceleration();
    optimizeConnection();
    const cleanupMemory = optimizeMemoryUsage();

    // Log performance info
    console.log('Performance Settings Applied:', {
      deviceInfo,
      performanceSettings,
      userAgent: navigator.userAgent,
      memory: navigator.deviceMemory || 'Unknown',
      cores: navigator.hardwareConcurrency || 'Unknown'
    });

    // Cleanup
    return () => {
      cleanupMemory();
      // Remove any added styles or links if needed
    };
  }, [deviceInfo, performanceSettings]);

  // Add performance class to body
  useEffect(() => {
    const body = document.body;
    
    if (deviceInfo.isLowEnd) {
      body.classList.add('low-end-device');
    }
    if (deviceInfo.isMobile) {
      body.classList.add('mobile-device');
    }
    if (deviceInfo.connectionSpeed === 'slow') {
      body.classList.add('slow-connection');
    }

    return () => {
      body.classList.remove('low-end-device', 'mobile-device', 'slow-connection');
    };
  }, [deviceInfo]);

  return null;
};
