import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Box, Cylinder } from "@react-three/drei";
import * as THREE from "three";

interface RobotProps {
  mousePosition: { x: number; y: number };
}

export const Robot = ({ mousePosition }: RobotProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Simple floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }

    if (headRef.current) {
      // Head follows mouse
      const targetX = (mousePosition.x / window.innerWidth - 0.5) * 0.2;
      const targetY = -(mousePosition.y / window.innerHeight - 0.5) * 0.1;
      
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetY, 0.05);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Robot Body */}
      <Box args={[1, 1.5, 0.8]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#4A90E2" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Robot Head */}
      <group ref={headRef}>
        <Sphere args={[0.6, 32, 32]} position={[0, 0.8, 0]}>
          <meshStandardMaterial color="#6BB6FF" metalness={0.9} roughness={0.1} />
        </Sphere>
        
        {/* Eyes */}
        <Sphere args={[0.1, 16, 16]} position={[-0.2, 0.9, 0.5]}>
          <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.5} />
        </Sphere>
        <Sphere args={[0.1, 16, 16]} position={[0.2, 0.9, 0.5]}>
          <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.5} />
        </Sphere>
        
        {/* Antenna */}
        <Cylinder args={[0.02, 0.02, 0.4]} position={[0, 1.3, 0]}>
          <meshStandardMaterial color="#FF6B9D" metalness={0.8} roughness={0.2} />
        </Cylinder>
        <Sphere args={[0.05]} position={[0, 1.5, 0]}>
          <meshStandardMaterial color="#FF6B9D" emissive="#FF6B9D" emissiveIntensity={0.3} />
        </Sphere>
      </group>
      
      {/* Arms */}
      <Box args={[0.3, 1, 0.3]} position={[-0.8, 0, 0]}>
        <meshStandardMaterial color="#4A90E2" metalness={0.8} roughness={0.2} />
      </Box>
      <Box args={[0.3, 1, 0.3]} position={[0.8, 0, 0]}>
        <meshStandardMaterial color="#4A90E2" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Legs */}
      <Box args={[0.3, 1, 0.3]} position={[-0.3, -1.2, 0]}>
        <meshStandardMaterial color="#4A90E2" metalness={0.8} roughness={0.2} />
      </Box>
      <Box args={[0.3, 1, 0.3]} position={[0.3, -1.2, 0]}>
        <meshStandardMaterial color="#4A90E2" metalness={0.8} roughness={0.2} />
      </Box>
    </group>
  );
};
