import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingParticlesProps {
  mousePosition: { x: number; y: number };
}

export const FloatingParticles = ({ mousePosition }: FloatingParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const [particles, setParticles] = useState<Float32Array>(new Float32Array());

  useEffect(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    setParticles(positions);
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Gentle floating animation
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;

      // React to mouse movement
      const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 0.1;
      const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 0.1;
      
      pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouseX, 0.02);
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouseY, 0.02);
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4A90E2"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};
