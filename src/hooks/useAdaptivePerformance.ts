import { useState, useEffect, useMemo } from 'react';

// Device performance detection
export const useDevicePerformance = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isLowEnd: false,
    isMobile: false,
    memoryGB: 0,
    cores: 0,
    connectionSpeed: 'fast'
  });

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      // Memory detection (approximate)
      let memoryGB = 8; // Default assumption
      if (navigator.deviceMemory) {
        memoryGB = navigator.deviceMemory;
      } else {
        // Fallback detection based on user agent
        if (isMobile) {
          memoryGB = /iPhone|iPad/i.test(userAgent) ? 4 : 3;
        }
      }

      // CPU cores detection
      let cores = navigator.hardwareConcurrency || 4;

      // Connection speed detection
      let connectionSpeed = 'fast';
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          connectionSpeed = 'slow';
        } else if (connection.effectiveType === '3g') {
          connectionSpeed = 'medium';
        }
      }

      // Determine if low-end device
      const isLowEnd = memoryGB <= 4 || cores <= 2 || connectionSpeed === 'slow';

      setDeviceInfo({
        isLowEnd,
        isMobile,
        memoryGB,
        cores,
        connectionSpeed
      });
    };

    detectDevice();
  }, []);

  return deviceInfo;
};

// Adaptive performance settings
export const useAdaptivePerformance = () => {
  const deviceInfo = useDevicePerformance();

  const performanceSettings = useMemo(() => {
    if (deviceInfo.isLowEnd) {
      return {
        // Low-end device settings
        enableAnimations: false,
        enableTiltEffects: false,
        enableParticles: false,
        imageQuality: 'low',
        lazyLoadDistance: 200,
        maxConcurrentImages: 2,
        animationDuration: 0.1,
        enableHardwareAcceleration: false,
        enableServiceWorker: true,
        enablePreloading: false
      };
    } else if (deviceInfo.isMobile) {
      return {
        // Mobile device settings
        enableAnimations: true,
        enableTiltEffects: true,
        enableParticles: false,
        imageQuality: 'medium',
        lazyLoadDistance: 300,
        maxConcurrentImages: 3,
        animationDuration: 0.2,
        enableHardwareAcceleration: true,
        enableServiceWorker: true,
        enablePreloading: true
      };
    } else {
      return {
        // Desktop/high-end settings
        enableAnimations: true,
        enableTiltEffects: true,
        enableParticles: true,
        imageQuality: 'high',
        lazyLoadDistance: 500,
        maxConcurrentImages: 6,
        animationDuration: 0.3,
        enableHardwareAcceleration: true,
        enableServiceWorker: true,
        enablePreloading: true
      };
    }
  }, [deviceInfo]);

  return { deviceInfo, performanceSettings };
};

// Memory management hook
export const useMemoryOptimization = () => {
  const { performanceSettings } = useAdaptivePerformance();
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const canLoadImage = (imageSrc: string) => {
    if (loadedImages.size >= performanceSettings.maxConcurrentImages) {
      return false;
    }
    return true;
  };

  const loadImage = (imageSrc: string) => {
    if (canLoadImage(imageSrc)) {
      setLoadedImages(prev => new Set([...prev, imageSrc]));
      return true;
    }
    return false;
  };

  const unloadImage = (imageSrc: string) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageSrc);
      return newSet;
    });
  };

  // Cleanup unused images periodically
  useEffect(() => {
    const cleanup = setInterval(() => {
      if (loadedImages.size > performanceSettings.maxConcurrentImages) {
        const imagesArray = Array.from(loadedImages);
        const toRemove = imagesArray.slice(0, imagesArray.length - performanceSettings.maxConcurrentImages);
        setLoadedImages(prev => {
          const newSet = new Set(prev);
          toRemove.forEach(img => newSet.delete(img));
          return newSet;
        });
      }
    }, 30000); // Cleanup every 30 seconds

    return () => clearInterval(cleanup);
  }, [loadedImages.size, performanceSettings.maxConcurrentImages]);

  return { canLoadImage, loadImage, unloadImage, loadedImagesCount: loadedImages.size };
};

// Progressive loading hook
export const useProgressiveLoading = () => {
  const { performanceSettings } = useAdaptivePerformance();
  const [loadedComponents, setLoadedComponents] = useState<Set<string>>(new Set());

  const loadComponent = (componentName: string) => {
    setLoadedComponents(prev => new Set([...prev, componentName]));
  };

  const shouldLoadComponent = (componentName: string, priority: 'high' | 'medium' | 'low' = 'medium') => {
    if (priority === 'high') return true;
    if (performanceSettings.isLowEnd && priority === 'low') return false;
    return true;
  };

  return { loadComponent, shouldLoadComponent, loadedComponents };
};
